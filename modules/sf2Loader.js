import { audioCtx, getAudioDestination, registerVoice } from './audio.js';
import { state } from './state.js';

export const loadedSoundFonts = {
  agogo: null,
  conga: null,
  cajon: null,
  timpani: null
};

export const loadingStates = {
  agogo: 'idle', // 'idle' | 'loading' | 'loaded' | 'error'
  conga: 'idle',
  cajon: 'idle',
  timpani: 'idle'
};

/**
 * Custom lightweight browser-native SoundFont 2 parser
 */
function parseSoundFont(arrayBuffer) {
  const view = new DataView(arrayBuffer);
  const u8 = new Uint8Array(arrayBuffer);

  const readString = (offset, length) => {
    const bytes = u8.subarray(offset, offset + length);
    return new TextDecoder('ascii').decode(bytes).replace(/\0/g, '').trim();
  };

  // Verify headers
  if (readString(0, 4) !== 'RIFF') {
    throw new Error('Not a valid RIFF file');
  }
  const riffSize = view.getUint32(4, true);
  if (readString(8, 4) !== 'sfbk') {
    throw new Error('Not a valid SoundFont file (missing sfbk)');
  }

  const chunks = {};
  let offset = 12;
  const end = 12 + riffSize - 4;

  while (offset < end && offset < arrayBuffer.byteLength) {
    if (offset + 8 > arrayBuffer.byteLength) break;
    const chunkId = readString(offset, 4);
    const chunkSize = view.getUint32(offset + 4, true);
    const chunkEnd = offset + 8 + chunkSize;

    if (chunkId === 'LIST') {
      const listType = readString(offset + 8, 4);
      let subOffset = offset + 12;
      while (subOffset < chunkEnd && subOffset < arrayBuffer.byteLength) {
        if (subOffset + 8 > arrayBuffer.byteLength) break;
        const subId = readString(subOffset, 4);
        const subSize = view.getUint32(subOffset + 4, true);

        chunks[subId] = {
          offset: subOffset + 8,
          size: subSize
        };

        subOffset += 8 + subSize;
        if (subSize % 2 !== 0) subOffset++;
      }
    } else {
      chunks[chunkId] = {
        offset: offset + 8,
        size: chunkSize
      };
    }

    offset += 8 + chunkSize;
    if (chunkSize % 2 !== 0) offset++;
  }

  if (!chunks.smpl || !chunks.shdr) {
    throw new Error('SoundFont is missing sample data (smpl) or sample headers (shdr)');
  }

  // Parse sample headers
  const samples = [];
  const shdrOffset = chunks.shdr.offset;
  const shdrSize = chunks.shdr.size;
  const headerSize = 46;
  const count = shdrSize / headerSize;

  // Extract the whole smpl chunk as a signed 16-bit array
  // We use slice to guarantee a aligned buffer (2-byte alignment) for Int16Array
  const smplOffset = chunks.smpl.offset;
  const smplSize = chunks.smpl.size;
  const alignedBuffer = arrayBuffer.slice(smplOffset, smplOffset + smplSize);
  const smplWords = new Int16Array(alignedBuffer);

  for (let i = 0; i < count; i++) {
    const o = shdrOffset + i * headerSize;
    if (o + headerSize > arrayBuffer.byteLength) break;

    const name = readString(o, 20);
    if (name === 'EOS') continue;

    const start = view.getUint32(o + 20, true);
    const end = view.getUint32(o + 24, true);
    const startLoop = view.getUint32(o + 28, true);
    const endLoop = view.getUint32(o + 32, true);
    const sampleRate = view.getUint32(o + 36, true);
    const originalPitch = view.getUint8(o + 40);
    const pitchCorrection = view.getInt8(o + 41);
    const sampleLink = view.getUint16(o + 42, true);
    const sampleType = view.getUint16(o + 44, true);

    const lengthInSamples = end - start;
    if (lengthInSamples <= 0) continue;

    // Slice the sample words and create a Web Audio AudioBuffer
    const rawData = smplWords.subarray(start, end);
    const audioBuffer = audioCtx.createBuffer(1, lengthInSamples, sampleRate);
    const channelData = audioBuffer.getChannelData(0);
    for (let j = 0; j < lengthInSamples; j++) {
      channelData[j] = rawData[j] / 32768.0; // convert 16-bit PCM to float
    }

    samples.push({
      name,
      originalPitch,
      pitchCorrection,
      sampleRate,
      audioBuffer
    });
  }

  return samples;
}

const loadingPromises = {};

/**
 * Fetch and parse a SoundFont from URL
 */
export async function loadSoundFont(name, url) {
  if (loadedSoundFonts[name]) {
    return loadedSoundFonts[name];
  }
  if (loadingPromises[name]) {
    return loadingPromises[name];
  }

  loadingPromises[name] = (async () => {
    loadingStates[name] = 'loading';
    console.log(`[SF2Loader] Fetching SoundFont: ${name} from ${url}`);

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const arrayBuffer = await response.arrayBuffer();
      const samples = parseSoundFont(arrayBuffer);

      // Store samples indexed by lowercase name for easy mapping
      const sampleMap = {};
      samples.forEach((s) => {
        sampleMap[s.name.toLowerCase()] = s;
      });

      loadedSoundFonts[name] = sampleMap;
      loadingStates[name] = 'loaded';
      console.log(`[SF2Loader] Successfully loaded SoundFont: ${name} (${samples.length} samples)`);
      return sampleMap;
    } catch (error) {
      loadingStates[name] = 'error';
      console.error(`[SF2Loader] Failed to load SoundFont: ${name}`, error);
      delete loadingPromises[name]; // Allow retry on failure
      return null;
    }
  })();

  return loadingPromises[name];
}

/**
 * Proactively trigger background loading of all available SoundFonts
 * Note: Now optimized to do nothing, as samples are loaded purely on demand.
 */
export function preloadSoundFonts() {
  // SoundFonts are loaded purely on-demand to optimize bandwidth and memory.
}

/**
 * Play a SoundFont sample from a loaded library through the effects processing chain
 */
export function playSoundFontSample(
  soundfontName,
  sampleNamePattern,
  pitchMult = 1.0,
  velocity = 1.0,
  panValue = 0.0,
  customDecay = null
) {
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }

  const sf = loadedSoundFonts[soundfontName];
  if (!sf) {
    return false; // Not loaded yet
  }

  // Find the sample matching the pattern (case-insensitive substring match)
  const query = sampleNamePattern.toLowerCase();
  const matchedKey = Object.keys(sf).find((k) => k.includes(query));

  if (!matchedKey) {
    console.warn(`[SF2Loader] No matching sample found for "${sampleNamePattern}" in "${soundfontName}"`);
    return false;
  }

  const sample = sf[matchedKey];
  const audioBuffer = sample.audioBuffer;

  // Create standard source node
  const source = audioCtx.createBufferSource();
  source.buffer = audioBuffer;

  // Combine instrument pitch shift multiplier, user pitch shift, and transient designer
  const pitchShiftFactor = Math.pow(2, state.pitchShiftSemitones / 12);
  let finalPlaybackRate = pitchMult * pitchShiftFactor;

  // SOTA Anti-machine-gun:
  // 1. Velocity influences pitch slightly (harder hits tighten the skin, raising pitch by up to 25 cents)
  const velocityPitchCents = (velocity - 0.5) * 25;
  // 2. Micro-pitch humanization (+/- 10 cents)
  const humanizeCents = (Math.random() - 0.5) * 20;

  const totalCentsShift = velocityPitchCents + humanizeCents;
  const shiftFactor = Math.pow(2, totalCentsShift / 1200);
  finalPlaybackRate *= shiftFactor;

  source.playbackRate.setValueAtTime(finalPlaybackRate, audioCtx.currentTime);

  // SOTA: Velocity-sensitive Filter Envelope
  // Hard hits are bright initially and decay quickly. Soft hits are dark.
  const filterNode = audioCtx.createBiquadFilter();
  filterNode.type = 'lowpass';

  // Base cutoff scales non-linearly with velocity
  const baseCutoff = 800 + Math.pow(velocity, 2.0) * 16000;
  // Attack transient adds an extra "snap" for high velocities
  const transientCutoff = baseCutoff + (velocity > 0.6 ? 4000 * (velocity - 0.6) : 0);

  filterNode.frequency.setValueAtTime(Math.min(22000, transientCutoff), audioCtx.currentTime);
  // Filter closes down very rapidly, mimicking high-frequency damping in drum skin
  filterNode.frequency.exponentialRampToValueAtTime(Math.max(400, baseCutoff * 0.4), audioCtx.currentTime + 0.1);
  filterNode.frequency.exponentialRampToValueAtTime(Math.max(100, baseCutoff * 0.1), audioCtx.currentTime + 0.5);

  // Filter Resonance (Q) increases slightly with harder hits to give "bark"
  filterNode.Q.setValueAtTime(0.5 + velocity * 1.5, audioCtx.currentTime);

  const gainNode = audioCtx.createGain();
  const pannerNode = audioCtx.createStereoPanner();
  pannerNode.pan.setValueAtTime(panValue, audioCtx.currentTime);

  // Optional subtle saturation/distortion on hard hits for organic warmth
  const saturator = audioCtx.createWaveShaper();
  if (velocity > 0.8) {
    const curve = new Float32Array(256);
    for (let i = 0; i < 256; i++) {
      const x = (i * 2) / 255 - 1;
      // Soft saturation curve
      curve[i] = Math.tanh(x * (1 + (velocity - 0.8) * 2));
    }
    saturator.curve = curve;
  } else {
    // Linear pass-through if not hit hard
    saturator.curve = new Float32Array([-1, 1]);
  }

  // Connection routing
  source.connect(filterNode);
  filterNode.connect(saturator);
  saturator.connect(gainNode);
  gainNode.connect(pannerNode);
  pannerNode.connect(getAudioDestination());

  // Setup gain envelope
  const decayScale = 1.0 + (state.transientSustain / 100) * 1.5;
  const duration = (audioBuffer.duration / finalPlaybackRate) * decayScale;
  const decay = customDecay !== null ? customDecay : duration;

  // Humanize velocity volume slightly (+/- 3%)
  const humanizedVelocity = Math.max(0.01, Math.min(1.0, velocity * (0.97 + Math.random() * 0.06)));

  // Transient attack design
  const attackTime = 0.003 + Math.random() * 0.002; // 3-5ms attack for variation
  let punch = 1.0;
  if (state.transientAttack > 0) {
    punch = 1.0 + (state.transientAttack / 100) * 1.5;
  }

  gainNode.gain.setValueAtTime(0.001, audioCtx.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(humanizedVelocity * punch, audioCtx.currentTime + attackTime);
  gainNode.gain.exponentialRampToValueAtTime(humanizedVelocity, audioCtx.currentTime + attackTime + 0.035);
  gainNode.gain.setValueAtTime(humanizedVelocity, audioCtx.currentTime + Math.max(0.01, decay - 0.08));
  gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + decay);

  // Anti-machine-gun: Start sample slightly offset randomly (0-3ms)
  const startOffset = Math.random() * 0.003;

  // Trigger playback
  source.start(0, startOffset);
  source.stop(audioCtx.currentTime + decay);

  // Register voice in the master pool
  const voice = { sources: [source], gain: gainNode };
  registerVoice(voice, decay);

  return true;
}
