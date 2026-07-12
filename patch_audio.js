import fs from 'fs';
let content = fs.readFileSync('modules/audio.js', 'utf8');

const injectCode = `
const wavCache = {};

export async function loadWavSample(url) {
  if (wavCache[url]) return wavCache[url];
  try {
    const response = await fetch(url);
    const arrayBuffer = await response.arrayBuffer();
    const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer);
    wavCache[url] = audioBuffer;
    return audioBuffer;
  } catch (err) {
    console.error("Failed to load wav: " + url, err);
    return null;
  }
}

export function playWavSample(url, pitchMult = 1.0, velocity = 1.0, panValue = 0.0) {
  if (audioCtx.state === 'suspended') audioCtx.resume();
  const audioBuffer = wavCache[url];
  if (!audioBuffer) {
    loadWavSample(url); // Trigger load for next time
    return false;
  }
  const source = audioCtx.createBufferSource();
  source.buffer = audioBuffer;
  
  const pitchShiftFactor = Math.pow(2, state.pitchShiftSemitones / 12);
  let finalPlaybackRate = pitchMult * pitchShiftFactor;
  source.playbackRate.setValueAtTime(finalPlaybackRate, audioCtx.currentTime);

  const gainNode = audioCtx.createGain();
  const pannerNode = audioCtx.createStereoPanner();
  pannerNode.pan.setValueAtTime(panValue, audioCtx.currentTime);

  source.connect(gainNode);
  gainNode.connect(pannerNode);
  pannerNode.connect(getAudioDestination());

  gainNode.gain.setValueAtTime(velocity, audioCtx.currentTime);
  
  const decayScale = 1.0 + (state.transientSustain / 100) * 1.5;
  const duration = (audioBuffer.duration / finalPlaybackRate) * decayScale;

  source.start(0);
  source.stop(audioCtx.currentTime + duration);

  const voice = { sources: [source], gain: gainNode };
  registerVoice(voice, duration);
  return true;
}
`;

content = content + injectCode;
fs.writeFileSync('modules/audio.js', content);
