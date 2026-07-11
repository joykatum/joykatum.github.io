import { audioCtx, getAudioDestination, registerVoice } from './audio.js';
import { state } from './state.js';

export const loadedSoundFonts = {
  agogo: null,
  conga: null
};

export const loadingStates = {
  agogo: 'idle', // 'idle' | 'loading' | 'loaded' | 'error'
  conga: 'idle'
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

/**
 * Fetch and parse a SoundFont from URL
 */
export async function loadSoundFont(name, url) {
  if (loadingStates[name] === 'loading' || loadingStates[name] === 'loaded') {
    return loadedSoundFonts[name];
  }

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
    return null;
  }
}

/**
 * Proactively trigger background loading of all available SoundFonts
 */
export function preloadSoundFonts() {
  loadSoundFont('agogo', '/media/agogo.sf2');
  loadSoundFont('conga', '/media/conga.sf2');
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

  // Anti-machine-gun micro-pitch humanization (+/- 12 cents) to prevent static repetitions
  const humanizeCents = (Math.random() - 0.5) * 12;
  const humanizeFactor = Math.pow(2, humanizeCents / 1200);
  finalPlaybackRate *= humanizeFactor;

  // Account for the original sample pitch:
  // If the sample was recorded at pitch C4 (MIDI 60), but we want to play it at pitch C4, rate is 1.0.
  // If we wanted to shift relative to original pitch, we can use:
  // finalPlaybackRate *= Math.pow(2, (targetMidiNote - sample.originalPitch) / 12)
  // For percussion, we usually want to trigger the sample at its native pitch or scaled by pitchMult
  source.playbackRate.setValueAtTime(finalPlaybackRate, audioCtx.currentTime);

  const gainNode = audioCtx.createGain();
  const pannerNode = audioCtx.createStereoPanner();
  pannerNode.pan.setValueAtTime(panValue, audioCtx.currentTime);

  // Dynamic velocity-sensitive low-pass filter (simulating skin damping on softer hits)
  const filterNode = audioCtx.createBiquadFilter();
  filterNode.type = 'lowpass';
  const cutoffFreq = 1200 + Math.pow(Math.min(1.0, velocity), 1.5) * 18800;
  filterNode.frequency.setValueAtTime(cutoffFreq, audioCtx.currentTime);

  // Connection routing
  source.connect(filterNode);
  filterNode.connect(gainNode);
  gainNode.connect(pannerNode);
  pannerNode.connect(getAudioDestination());

  // Setup gain envelope
  const decayScale = 1.0 + (state.transientSustain / 100) * 1.5;
  const duration = (audioBuffer.duration / finalPlaybackRate) * decayScale;
  const decay = customDecay !== null ? customDecay : duration;

  // Transient attack design
  const attackTime = 0.005;
  let punch = 1.0;
  if (state.transientAttack > 0) {
    punch = 1.0 + (state.transientAttack / 100) * 1.2;
  }

  gainNode.gain.setValueAtTime(0.001, audioCtx.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(velocity * punch, audioCtx.currentTime + attackTime);
  gainNode.gain.exponentialRampToValueAtTime(velocity, audioCtx.currentTime + attackTime + 0.03);
  gainNode.gain.setValueAtTime(velocity, audioCtx.currentTime + Math.max(0.01, decay - 0.05));
  gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + decay);

  // Trigger playback
  source.start();
  source.stop(audioCtx.currentTime + decay);

  // Register voice in the master pool
  const voice = { sources: [source], gain: gainNode };
  registerVoice(voice, decay);

  return true;
}
