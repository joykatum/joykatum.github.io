import { getSupportedFormats, startRecording, stopRecording, isRecording } from './recorder.js';
export { getSupportedFormats, startRecording, stopRecording, isRecording };
// Audio Synthesis and Web Audio Effects Chain Module
import { state } from './state.js';

export const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

export let effectsInputNode = null;
export let effectsOutputNode = null;
export let masterOutputNode = null;

// Individual effects nodes
export let reverbNode = null;
export let reverbGainNode = null;
export let delayNode = null;
export let delayGainNode = null;
export let delayWetGainNode = null;
export let filterNode = null;
export let distortionNode = null;

export let mixOutputNode = null;

// 1. Spatial Swirl
export let autoPanNode = null;
export let panLFO = null;
export let panLFOGain = null;

// 2. Physical Modeling Resonator
export let resonatorInput = null;
export let resonatorDry = null;
export let resonatorWet = null;
export let resonatorDelay = null;
export let resonatorFeedback = null;
export let resonatorFilter = null;

// 3. Formant Shifter (Vocalizer)
export let formantInput = null;
export let formantDry = null;
export let formantWet = null;
export let formantF1 = null;
export let formantF2 = null;
export let formantF3 = null;

// 4. Envelope-Follower Ring Modulator
export let ringModInput = null;
export let ringModDry = null;
export let ringModWet = null;
export let ringModProduct = null;
export let ringModCarrier = null;
export let ringModCarrierGain = null;
export let ringModRectifier = null;
export let ringModFilter = null;

// 5. Spectral Freeze
export let freezeInput = null;
export let freezeDry = null;
export let freezeWet = null;
export let freezeDelay = null;
export let freezeFeedback = null;

// 6. Lo-Fi Resampler (Bit-Crusher)
export let bitCrusherInput = null;
export let bitCrusherDry = null;
export let bitCrusherWet = null;
export let bitCrusherShaper = null;

// Recording
export let streamDestination = null;

// Initialize audio context on first user interaction
export const initAudio = async () => {
  if (audioCtx.state === 'suspended') {
    await audioCtx.resume();
  }
  if (!state.audioInitialized) {
    initEffectsChain();
    await audioCtx.resume();
    state.audioInitialized = true;
  }
};

// Lazy initialize the effects routing chain
export function initEffectsChain() {
  if (effectsInputNode) return; // Already initialized

  // Input node acts as a dry splitter and level controller
  effectsInputNode = audioCtx.createGain();

  // Create reverb (convolver) path
  reverbNode = audioCtx.createConvolver();
  reverbGainNode = audioCtx.createGain();
  reverbGainNode.gain.value = 0.0; // Starts dry

  // Populate default impulse response for Reverb (Bedroom size)
  updateReverbImpulse('bedroom');

  // Create delay path
  delayNode = audioCtx.createDelay(2.0);
  delayGainNode = audioCtx.createGain(); // feedback loop
  delayWetGainNode = audioCtx.createGain(); // wet output

  // Connect delay feedback loop: delayNode -> delayGainNode -> delayNode
  delayNode.connect(delayGainNode);
  delayGainNode.connect(delayNode);

  // Create Filter Node
  filterNode = audioCtx.createBiquadFilter();
  filterNode.type = 'allpass'; // Default bypass type

  // Create WaveShaper Node for distortion
  distortionNode = audioCtx.createWaveShaper();
  distortionNode.curve = null; // Default clean
  distortionNode.oversample = '4x';

  // Mix Output Node compiles previous FX (Dry parallel, Reverb, Delay)
  mixOutputNode = audioCtx.createGain();

  // Effects Output Node (master FX fader)
  effectsOutputNode = audioCtx.createGain();
  effectsOutputNode.gain.value = 1.0;

  // Connect standard serial/parallel hybrid chain to mixOutputNode:
  effectsInputNode.connect(distortionNode);
  distortionNode.connect(filterNode);

  // Dry parallel path
  filterNode.connect(mixOutputNode);

  // Delay path
  filterNode.connect(delayNode);
  delayNode.connect(delayWetGainNode);
  delayWetGainNode.connect(mixOutputNode);

  // Reverb path
  filterNode.connect(reverbNode);
  reverbNode.connect(reverbGainNode);
  reverbGainNode.connect(mixOutputNode);

  // Initialize 7 new effects:

  // 1. Lo-Fi Resampler (Bit-Crusher)
  bitCrusherInput = audioCtx.createGain();
  bitCrusherDry = audioCtx.createGain();
  bitCrusherWet = audioCtx.createGain();
  bitCrusherShaper = audioCtx.createWaveShaper();
  bitCrusherShaper.oversample = 'none';
  bitCrusherInput.connect(bitCrusherDry);
  bitCrusherInput.connect(bitCrusherShaper);
  bitCrusherShaper.connect(bitCrusherWet);

  // 2. Physical Modeling Resonator ("Chamber Changer")
  resonatorInput = audioCtx.createGain();
  resonatorDry = audioCtx.createGain();
  resonatorWet = audioCtx.createGain();
  resonatorDelay = audioCtx.createDelay(0.1);
  resonatorFeedback = audioCtx.createGain();
  resonatorFilter = audioCtx.createBiquadFilter();

  resonatorInput.connect(resonatorDry);
  resonatorInput.connect(resonatorFilter);
  resonatorFilter.connect(resonatorDelay);
  resonatorDelay.connect(resonatorFeedback);
  resonatorFeedback.connect(resonatorDelay);
  resonatorDelay.connect(resonatorWet);

  // 3. Formant Shifter ("Vocalizer")
  formantInput = audioCtx.createGain();
  formantDry = audioCtx.createGain();
  formantWet = audioCtx.createGain();
  formantF1 = audioCtx.createBiquadFilter();
  formantF1.type = 'bandpass';
  formantF1.Q.value = 8;
  formantF2 = audioCtx.createBiquadFilter();
  formantF2.type = 'bandpass';
  formantF2.Q.value = 8;
  formantF3 = audioCtx.createBiquadFilter();
  formantF3.type = 'bandpass';
  formantF3.Q.value = 8;

  formantInput.connect(formantDry);
  formantInput.connect(formantF1);
  formantInput.connect(formantF2);
  formantInput.connect(formantF3);
  formantF1.connect(formantWet);
  formantF2.connect(formantWet);
  formantF3.connect(formantWet);

  // 4. Envelope-Follower Ring Modulator
  ringModInput = audioCtx.createGain();
  ringModDry = audioCtx.createGain();
  ringModWet = audioCtx.createGain();
  ringModProduct = audioCtx.createGain();
  ringModCarrier = audioCtx.createOscillator();
  ringModCarrier.type = 'sine';
  ringModCarrier.frequency.value = 200;
  ringModCarrierGain = audioCtx.createGain();
  ringModCarrierGain.gain.value = 0.0; // starts silent

  // Rectifier & Filter for Envelope Following
  ringModRectifier = audioCtx.createWaveShaper();
  const rectifierCurve = new Float32Array(65536);
  for (let i = 0; i < 65536; i++) {
    const x = (i * 2) / 65535 - 1;
    rectifierCurve[i] = Math.abs(x);
  }
  ringModRectifier.curve = rectifierCurve;

  ringModFilter = audioCtx.createBiquadFilter();
  ringModFilter.type = 'lowpass';
  ringModFilter.frequency.value = 10.0; // tracks slow volume envelopes

  ringModInput.connect(ringModDry);
  ringModInput.connect(ringModProduct);
  ringModInput.connect(ringModRectifier);
  ringModRectifier.connect(ringModFilter);
  ringModFilter.connect(ringModCarrierGain.gain);

  ringModCarrier.connect(ringModCarrierGain);
  ringModCarrierGain.connect(ringModProduct.gain);
  ringModProduct.connect(ringModWet);
  ringModCarrier.start();

  // 5. Spectral Freeze
  freezeInput = audioCtx.createGain();
  freezeDry = audioCtx.createGain();
  freezeWet = audioCtx.createGain();
  freezeDelay = audioCtx.createDelay(2.0);
  freezeDelay.delayTime.value = 0.25; // 250ms freeze loop
  freezeFeedback = audioCtx.createGain();
  freezeFeedback.gain.value = 0.0;

  freezeInput.connect(freezeDry);
  freezeInput.connect(freezeDelay);
  freezeDelay.connect(freezeFeedback);
  freezeFeedback.connect(freezeDelay);
  freezeDelay.connect(freezeWet);

  // 6. Spatial Swirl (Dynamic Auto-Pan)
  autoPanNode = audioCtx.createStereoPanner();
  panLFO = audioCtx.createOscillator();
  panLFO.type = 'sine';
  panLFO.frequency.value = 1.0;
  panLFOGain = audioCtx.createGain();
  panLFOGain.gain.value = 0.0;

  panLFO.connect(panLFOGain);
  panLFOGain.connect(autoPanNode.pan);
  panLFO.start();

  // Connect serial chain of new FX blocks:
  // mixOutputNode -> BitCrusher
  mixOutputNode.connect(bitCrusherInput);

  // BitCrusher -> Resonator
  bitCrusherDry.connect(resonatorInput);
  bitCrusherWet.connect(resonatorInput);

  // Resonator -> Formant
  resonatorDry.connect(formantInput);
  resonatorWet.connect(formantInput);

  // Formant -> RingMod
  formantDry.connect(ringModInput);
  formantWet.connect(ringModInput);

  // RingMod -> Freeze
  ringModDry.connect(freezeInput);
  ringModWet.connect(freezeInput);

  // Freeze -> AutoPan
  freezeDry.connect(autoPanNode);
  freezeWet.connect(autoPanNode);

  // AutoPan -> effectsOutputNode
  autoPanNode.connect(effectsOutputNode);

  // Create master output node
  masterOutputNode = audioCtx.createGain();
  masterOutputNode.connect(audioCtx.destination);

  // Initialize recording destination
  streamDestination = audioCtx.createMediaStreamDestination();
  masterOutputNode.connect(streamDestination);

  // Finally connect effects output to master output
  effectsOutputNode.connect(masterOutputNode);

  // Set initial values
  updateSpatialPan();
  updateResonator();
  updateFormant();
  updateBitCrusher();
  updateRingMod();
  updateSpectralFreeze();
}

// Generate algorithmic Impulse Response dynamically
export function updateReverbImpulse(presetSize) {
  if (!reverbNode) return;

  let duration = 0.5;
  let decay = 8.0;

  if (presetSize === 'bedroom') {
    duration = 0.4;
    decay = 10.0;
  } else if (presetSize === 'concert') {
    duration = 1.8;
    decay = 3.5;
  } else if (presetSize === 'space') {
    duration = 4.5;
    decay = 1.2;
  }

  const sampleRate = audioCtx.sampleRate;
  const length = Math.round(sampleRate * duration);
  const impulse = audioCtx.createBuffer(2, length, sampleRate);
  const left = impulse.getChannelData(0);
  const right = impulse.getChannelData(1);

  for (let i = 0; i < length; i++) {
    const percent = i / length;
    // Exponentially decaying noise algorithm
    const val = (Math.random() * 2 - 1) * Math.pow(1 - percent, decay);
    left[i] = val;
    right[i] = val;
  }

  reverbNode.buffer = impulse;
}

// Generate distortion lookup table
export function updateDistortion(amount) {
  if (!distortionNode) return;
  if (amount <= 0) {
    distortionNode.curve = null;
    return;
  }
  const k = amount * 4; // Max drive multiplier
  const n_samples = 44100;
  const curve = new Float32Array(n_samples);
  const deg = Math.PI / 180;
  for (let i = 0; i < n_samples; ++i) {
    const x = (i * 2) / n_samples - 1;
    curve[i] = ((3 + k) * x * 20 * deg) / (Math.PI + k * Math.abs(x));
  }
  distortionNode.curve = curve;
}

// Update filter frequency & resonance (Q) parameters
export function updateFilter() {
  if (!filterNode) return;
  if (state.filterType === 'none') {
    filterNode.type = 'allpass'; // Transparent bypass
  } else {
    filterNode.type = state.filterType;
    filterNode.frequency.setValueAtTime(state.filterFreqValue, audioCtx.currentTime);
    filterNode.Q.setValueAtTime(state.filterQValue, audioCtx.currentTime);
  }
}

export function updateSpatialPan() {
  if (!autoPanNode || !panLFOGain || !panLFO) return;
  panLFO.frequency.setValueAtTime(state.panSpeed, audioCtx.currentTime);
  panLFOGain.gain.setValueAtTime(state.panDepth / 100, audioCtx.currentTime);
}

export function updateResonator() {
  if (!resonatorInput || !resonatorWet || !resonatorDry || !resonatorDelay || !resonatorFeedback || !resonatorFilter)
    return;
  const type = state.resonatorType;
  const decay = state.resonatorDecay / 100;

  if (type === 'none' || decay <= 0) {
    resonatorDry.gain.setValueAtTime(1.0, audioCtx.currentTime);
    resonatorWet.gain.setValueAtTime(0.0, audioCtx.currentTime);
    resonatorFeedback.gain.setValueAtTime(0.0, audioCtx.currentTime);
  } else {
    resonatorWet.gain.setValueAtTime(0.8, audioCtx.currentTime);
    resonatorDry.gain.setValueAtTime(Math.max(0.1, 1.0 - decay), audioCtx.currentTime);
    resonatorFeedback.gain.setValueAtTime(decay * 0.94, audioCtx.currentTime); // keep feedback safe

    if (type === 'glass') {
      resonatorFilter.type = 'highpass';
      resonatorFilter.frequency.setValueAtTime(2200, audioCtx.currentTime);
      resonatorFilter.Q.setValueAtTime(3.0, audioCtx.currentTime);
      resonatorDelay.delayTime.setValueAtTime(0.0018, audioCtx.currentTime); // ~550Hz resonance base with high overtones
    } else if (type === 'metal') {
      resonatorFilter.type = 'peaking';
      resonatorFilter.frequency.setValueAtTime(1200, audioCtx.currentTime);
      resonatorFilter.Q.setValueAtTime(12.0, audioCtx.currentTime);
      resonatorDelay.delayTime.setValueAtTime(0.0045, audioCtx.currentTime);
    } else if (type === 'ceramic') {
      resonatorFilter.type = 'lowpass';
      resonatorFilter.frequency.setValueAtTime(350, audioCtx.currentTime);
      resonatorFilter.Q.setValueAtTime(2.0, audioCtx.currentTime);
      resonatorDelay.delayTime.setValueAtTime(0.012, audioCtx.currentTime);
    }
  }
}

export function updateFormant() {
  if (!formantInput || !formantDry || !formantWet || !formantF1 || !formantF2 || !formantF3) return;
  const vowel = state.formantVowel;
  const mix = state.formantMix / 100;

  if (vowel === 'none' || mix <= 0) {
    formantDry.gain.setValueAtTime(1.0, audioCtx.currentTime);
    formantWet.gain.setValueAtTime(0.0, audioCtx.currentTime);
  } else {
    formantWet.gain.setValueAtTime(mix * 1.5, audioCtx.currentTime); // Boost formant output since bandpass filters attenuate
    formantDry.gain.setValueAtTime(Math.max(0.1, 1.0 - mix), audioCtx.currentTime);

    let f1 = 500,
      f2 = 1500,
      f3 = 2500;

    if (vowel === 'A') {
      f1 = 730;
      f2 = 1090;
      f3 = 2440;
    } else if (vowel === 'E') {
      f1 = 530;
      f2 = 1840;
      f3 = 2480;
    } else if (vowel === 'I') {
      f1 = 270;
      f2 = 2290;
      f3 = 3010;
    } else if (vowel === 'O') {
      f1 = 570;
      f2 = 840;
      f3 = 2410;
    } else if (vowel === 'U') {
      f1 = 300;
      f2 = 870;
      f3 = 2240;
    } else if (vowel === 'sweep') {
      const t = audioCtx.currentTime * 2.5;
      // Oscillate frequencies continuously
      f1 = 500 + Math.sin(t) * 200;
      f2 = 1200 + Math.cos(t * 1.5) * 400;
      f3 = 2400 + Math.sin(t * 0.8) * 300;
    }

    formantF1.frequency.setValueAtTime(f1, audioCtx.currentTime);
    formantF2.frequency.setValueAtTime(f2, audioCtx.currentTime);
    formantF3.frequency.setValueAtTime(f3, audioCtx.currentTime);
  }
}

export function updateBitCrusher() {
  if (!bitCrusherShaper || !bitCrusherDry || !bitCrusherWet) return;
  const bits = state.bitCrusherBits;
  const mix = state.bitCrusherMix / 100;

  if (mix <= 0) {
    bitCrusherDry.gain.setValueAtTime(1.0, audioCtx.currentTime);
    bitCrusherWet.gain.setValueAtTime(0.0, audioCtx.currentTime);
  } else {
    bitCrusherWet.gain.setValueAtTime(mix, audioCtx.currentTime);
    bitCrusherDry.gain.setValueAtTime(1.0 - mix * 0.5, audioCtx.currentTime);

    const n_samples = 4096;
    const curve = new Float32Array(n_samples);
    const steps = Math.pow(2, bits);
    for (let i = 0; i < n_samples; ++i) {
      const x = (i * 2) / (n_samples - 1) - 1;
      curve[i] = Math.round(x * steps) / steps;
    }
    bitCrusherShaper.curve = curve;
  }
}

export function updateRingMod() {
  if (!ringModDry || !ringModWet || !ringModCarrier) return;
  const depth = state.ringModDepth / 100;

  if (depth <= 0) {
    ringModDry.gain.setValueAtTime(1.0, audioCtx.currentTime);
    ringModWet.gain.setValueAtTime(0.0, audioCtx.currentTime);
  } else {
    ringModWet.gain.setValueAtTime(depth * 1.8, audioCtx.currentTime); // boost RingMod output
    ringModDry.gain.setValueAtTime(Math.max(0.1, 1.0 - depth), audioCtx.currentTime);
    ringModCarrier.frequency.setValueAtTime(state.ringModFreq, audioCtx.currentTime);
  }
}

export function updateSpectralFreeze() {
  if (!freezeInput || !freezeFeedback || !freezeWet || !freezeDry) return;

  if (state.spectralFreeze) {
    freezeInput.gain.setValueAtTime(0.0, audioCtx.currentTime); // Stop accepting new audio
    freezeFeedback.gain.setValueAtTime(0.999, audioCtx.currentTime); // Near infinite feedback loop
    freezeWet.gain.setValueAtTime(state.freezeVolume / 100, audioCtx.currentTime);
    freezeDry.gain.setValueAtTime(0.0, audioCtx.currentTime);
  } else {
    freezeInput.gain.setValueAtTime(1.0, audioCtx.currentTime);
    freezeFeedback.gain.setValueAtTime(0.0, audioCtx.currentTime);
    freezeWet.gain.setValueAtTime(0.0, audioCtx.currentTime);
    freezeDry.gain.setValueAtTime(1.0, audioCtx.currentTime);
  }
}

// Get final destination for drum hits depending on effects toggle
export function getAudioDestination() {
  if (state.formantVowel === 'sweep') {
    updateFormant();
  }
  if (state.effectsEnabled && effectsInputNode) {
    return effectsInputNode;
  }
  return masterOutputNode || audioCtx.destination;
}

export function stopAllSounds() {
  const now = audioCtx.currentTime;
  state.currentNodes.forEach((node) => {
    try {
      if (node.gain) {
        node.gain.cancelScheduledValues(now);
        node.gain.setValueAtTime(node.gain.value, now);
        node.gain.linearRampToValueAtTime(0, now + 0.02);
      }
      if (node.sources) {
        node.sources.forEach((src) => {
          try {
            src.stop(now + 0.02);
          } catch (e) {}
        });
      } else if (node.source) {
        node.source.stop(now + 0.02);
      }
    } catch (e) {}
  });
  state.currentNodes = [];
}

// Global cached white noise buffer to prevent memory thrashing and dynamic garbage collection
let sharedNoiseBuffer = null;
export function getSharedNoiseBuffer() {
  if (!sharedNoiseBuffer) {
    const sampleRate = audioCtx.sampleRate;
    const bufferSize = sampleRate * 2; // 2 seconds of noise is plenty
    sharedNoiseBuffer = audioCtx.createBuffer(1, bufferSize, sampleRate);
    const data = sharedNoiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
  }
  return sharedNoiseBuffer;
}

// Global cached soft-clipping saturation curves
let softClipCurve = null;
function getSoftClipCurve() {
  if (!softClipCurve) {
    const n = 1024;
    softClipCurve = new Float32Array(n);
    for (let i = 0; i < n; i++) {
      const x = (i * 2) / (n - 1) - 1;
      // Smooth hyperbolic tangent analog-style saturation
      softClipCurve[i] = Math.tanh(x * 1.25) / Math.tanh(1.25);
    }
  }
  return softClipCurve;
}

// Register voice helper for polyphonic voice-robbing/limiting and automatic cleanup
export function registerVoice(voice, decay) {
  if (state.currentPlayContext) {
    voice.playContext = { ...state.currentPlayContext };
  }

  // Handle invisible damping and voice choking for the same drum / instrument
  if (voice.playContext) {
    const { instrument, drumId, sound } = voice.playContext;
    const now = audioCtx.currentTime;

    const isMutedSound =
      sound.includes('damp') ||
      sound.includes('choke') ||
      sound.includes('slap') ||
      sound.includes('seco') ||
      sound.includes('tapado') ||
      sound.includes('mute') ||
      sound.includes('closed') ||
      sound.includes('stop');

    state.currentNodes.forEach((oldNode) => {
      if (
        oldNode !== voice &&
        oldNode.playContext &&
        oldNode.playContext.instrument === instrument &&
        oldNode.playContext.drumId === drumId &&
        !oldNode.choked
      ) {
        oldNode.choked = true;
        const chokeTime = isMutedSound ? 0.015 : 0.035;
        try {
          if (oldNode.gain) {
            oldNode.gain.cancelScheduledValues(now);
            oldNode.gain.setValueAtTime(oldNode.gain.value || 1.0, now);
            oldNode.gain.linearRampToValueAtTime(0.0001, now + chokeTime);
          }
          if (oldNode.sources) {
            oldNode.sources.forEach((src) => {
              try {
                src.stop(now + chokeTime);
              } catch (err) {}
            });
          }
        } catch (err) {}
      }
    });
  }

  state.currentNodes.push(voice);

  // Auto-prune state.currentNodes to keep voice count within bounds (voice robbing)
  const maxVoices = 24; // Generous polyphonic ceiling for natural overlaps
  while (state.currentNodes.length > maxVoices) {
    const oldest = state.currentNodes.shift();
    if (oldest) {
      const now = audioCtx.currentTime;
      try {
        if (oldest.gain) {
          oldest.gain.cancelScheduledValues(now);
          oldest.gain.setValueAtTime(oldest.gain.value, now);
          oldest.gain.linearRampToValueAtTime(0.0001, now + 0.04); // Fast, click-free fade
        }
        if (oldest.sources) {
          oldest.sources.forEach((src) => {
            try {
              src.stop(now + 0.04);
            } catch (err) {}
          });
        }
      } catch (e) {}
    }
  }

  // Schedule logical removal of voice after its envelope decay is finished
  setTimeout(
    () => {
      const idx = state.currentNodes.indexOf(voice);
      if (idx !== -1) {
        state.currentNodes.splice(idx, 1);
      }
    },
    decay * 1000 + 150
  );
}

// Helper to adjust decay based on Transient Designer's Sustain setting
export function adjustDecayForSustain(baseDecay) {
  if (state.transientSustain > 0) {
    return baseDecay * (1 + (state.transientSustain / 100) * 1.5);
  } else if (state.transientSustain < 0) {
    return baseDecay * (1 + (state.transientSustain / 100) * 0.9); // down to 10% decay
  }
  return baseDecay;
}

// Helper to play a short high-frequency attack crackle using the shared noise buffer
export function playAttackClick(decay = 0.015, filterFreq = 2500, vol = 0.5) {
  if (audioCtx.state === 'suspended') audioCtx.resume();

  // An omitted or invalid duration would make the AudioParam ramp time NaN.
  const safeDecay = Number.isFinite(decay) && decay > 0 ? decay : 0.015;

  const noise = audioCtx.createBufferSource();
  noise.buffer = getSharedNoiseBuffer();

  const filter = audioCtx.createBiquadFilter();
  filter.type = 'highpass';
  filter.frequency.setValueAtTime(filterFreq, audioCtx.currentTime);

  const gain = audioCtx.createGain();
  gain.gain.setValueAtTime(vol, audioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + safeDecay);

  noise.connect(filter);
  filter.connect(gain);
  gain.connect(getAudioDestination());

  const maxStartOffset = 2.0 - safeDecay - 0.05;
  const startOffset = Math.max(0, Math.random() * maxStartOffset);
  noise.start(0, startOffset);

  const voice = { sources: [noise], gain: gain };
  registerVoice(voice, safeDecay);
}

// Sound Synthesis Functions
export function playMembrane(freq, decay, pitchDrop, isSlap = false, velocity = 1.0, panValue = 0.0) {
  if (audioCtx.state === 'suspended') audioCtx.resume();

  // Apply Transient Designer Sustain
  decay = adjustDecayForSustain(decay);

  // Apply pitch shifting
  const factor = Math.pow(2, state.pitchShiftSemitones / 12);
  freq *= factor;

  // SOTA Modal Synthesis for Circular Membrane (Bessel Roots)
  // Ratios: f11 (1.0), f21 (1.593), f31 (2.135), f12 (2.295), f41 (2.653), f22 (2.917)
  const modes = [
    { ratio: 1.0, gainScale: isSlap ? 0.2 : 1.0, decayScale: isSlap ? 0.2 : 1.0, type: 'sine' },
    { ratio: 1.593, gainScale: isSlap ? 0.6 : 0.4, decayScale: 0.8, type: 'sine' },
    { ratio: 2.135, gainScale: isSlap ? 0.8 : 0.2, decayScale: 0.6, type: 'triangle' },
    { ratio: 2.295, gainScale: isSlap ? 0.9 : 0.15, decayScale: 0.5, type: 'sine' },
    { ratio: 2.653, gainScale: isSlap ? 0.7 : 0.1, decayScale: 0.4, type: 'triangle' },
    { ratio: 2.917, gainScale: isSlap ? 1.0 : 0.05, decayScale: 0.3, type: 'sine' }
  ];

  // Shell Modes (Wood body resonance)
  const shellModes = [
    { ratio: 0.75, gainScale: isSlap ? 0.1 : 0.4, decayScale: 1.4 },
    { ratio: 1.25, gainScale: isSlap ? 0.1 : 0.2, decayScale: 1.1 }
  ];

  const masterGain = audioCtx.createGain();
  masterGain.gain.value = 0;

  const voices = [];

  // Velocity affects the higher overtones much more than fundamental
  const velocityCurve = (baseGain, index) => {
    return baseGain * Math.pow(velocity, 1.0 + index * 0.3);
  };

  // Create modes
  modes.forEach((mode, i) => {
    const osc = audioCtx.createOscillator();
    osc.type = mode.type;

    // Slight random detuning to mimic uneven skin tension (inharmonicity)
    const detuneRatio = mode.ratio + (Math.random() * 0.04 - 0.02);

    const modeGain = audioCtx.createGain();

    // Slap choke logic: pitch bends up if slap, down if open
    let startFreq = freq * detuneRatio;
    let endFreq = startFreq;

    if (isSlap) {
      startFreq *= 1.15; // starts higher and snaps down/up
      osc.frequency.setValueAtTime(startFreq, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(startFreq * 0.9, audioCtx.currentTime + 0.05);
    } else {
      osc.frequency.setValueAtTime(startFreq, audioCtx.currentTime);
      if (pitchDrop > 0) {
        endFreq = Math.max(20, startFreq / pitchDrop);
        osc.frequency.exponentialRampToValueAtTime(endFreq, audioCtx.currentTime + decay * mode.decayScale);
      }
    }

    osc.connect(modeGain);
    modeGain.connect(masterGain);

    const modeDecay = decay * mode.decayScale;
    const modeVol = velocityCurve(mode.gainScale, i);

    modeGain.gain.setValueAtTime(0.001, audioCtx.currentTime);
    modeGain.gain.exponentialRampToValueAtTime(modeVol, audioCtx.currentTime + 0.005);
    modeGain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + modeDecay);

    osc.start();
    osc.stop(audioCtx.currentTime + modeDecay);
    voices.push(osc);
  });

  // Create Shell Resonance (Deeper, warmer bloom)
  shellModes.forEach((mode) => {
    const osc = audioCtx.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq * mode.ratio, audioCtx.currentTime);

    const modeGain = audioCtx.createGain();
    osc.connect(modeGain);
    modeGain.connect(masterGain);

    const modeDecay = decay * mode.decayScale;
    const modeVol = mode.gainScale * velocity;

    modeGain.gain.setValueAtTime(0.001, audioCtx.currentTime);
    modeGain.gain.linearRampToValueAtTime(modeVol, audioCtx.currentTime + 0.03); // Shell blooms slower
    modeGain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + modeDecay);

    osc.start();
    osc.stop(audioCtx.currentTime + modeDecay);
    voices.push(osc);
  });

  // FM Noise Attack (Thud/Snap) for extreme realism
  const noise = audioCtx.createBufferSource();
  noise.buffer = getSharedNoiseBuffer();

  const noiseFilter = audioCtx.createBiquadFilter();
  noiseFilter.type = isSlap ? 'bandpass' : 'lowpass';
  noiseFilter.frequency.setValueAtTime(isSlap ? 3000 : 800, audioCtx.currentTime);
  noiseFilter.Q.setValueAtTime(isSlap ? 2.0 : 0.5, audioCtx.currentTime);

  const noiseGain = audioCtx.createGain();
  const noiseVol = isSlap ? 1.5 * velocity : 0.3 * velocity;
  noiseGain.gain.setValueAtTime(noiseVol, audioCtx.currentTime);
  noiseGain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + (isSlap ? 0.08 : 0.04));

  noise.connect(noiseFilter);
  noiseFilter.connect(noiseGain);
  noiseGain.connect(masterGain);

  const startOffset = Math.random() * 0.05;
  noise.start(0, startOffset);
  noise.stop(audioCtx.currentTime + 0.1);
  voices.push(noise);

  // Route through master saturator for warm physical shell and skin emulation
  const saturator = audioCtx.createWaveShaper();

  // Dynamic saturation based on velocity
  if (velocity > 0.7) {
    const curve = new Float32Array(256);
    for (let i = 0; i < 256; i++) {
      const x = (i * 2) / 255 - 1;
      curve[i] = Math.tanh(x * (1 + (velocity - 0.7) * 3));
    }
    saturator.curve = curve;
  } else {
    saturator.curve = getSoftClipCurve();
  }

  masterGain.connect(saturator);

  // True Stereo Spatial Positioning via individual static panning nodes
  const spatialPanNode = audioCtx.createStereoPanner();
  spatialPanNode.pan.setValueAtTime(panValue, audioCtx.currentTime);
  saturator.connect(spatialPanNode);

  // Apply a dynamic low-shelf EQ boost for authentic low-end warmth on deep drums (<150Hz)
  if (freq < 150 && !isSlap) {
    const bassEQ = audioCtx.createBiquadFilter();
    bassEQ.type = 'lowshelf';
    bassEQ.frequency.setValueAtTime(140, audioCtx.currentTime);
    const dbBoost = Math.max(1, 6.0 - ((freq - 50) / 100) * 4.0); // Warm +2dB to +6.0dB boost
    bassEQ.gain.setValueAtTime(dbBoost * velocity, audioCtx.currentTime);
    spatialPanNode.connect(bassEQ);
    bassEQ.connect(getAudioDestination());
  } else {
    spatialPanNode.connect(getAudioDestination());
  }

  // Master Envelope & Transient Attack Design
  const attackTime = 0.003;
  let punch = 1.0;
  if (state.transientAttack > 0) {
    punch = 1.0 + (state.transientAttack / 100) * 1.5;
    const clickVol = (state.transientAttack / 100) * 0.3 * velocity;
    playAttackClick(0.01, isSlap ? 4000 : 2500, clickVol);
  }

  masterGain.gain.setValueAtTime(0.001, audioCtx.currentTime);
  masterGain.gain.exponentialRampToValueAtTime(punch, audioCtx.currentTime + attackTime);
  masterGain.gain.exponentialRampToValueAtTime(1.0, audioCtx.currentTime + attackTime + 0.02);

  const voice = { sources: voices, gain: masterGain };
  registerVoice(voice, decay * 1.4);
}

// Simulated scraping instrument sound (Guiro, Cabasa, etc)
export function playScrape(duration, rate = 20, baseFreq = 1500, vol = 1.0, isWooden = true) {
  if (audioCtx.state === 'suspended') audioCtx.resume();

  const numRidges = Math.floor(duration * rate);
  const ridgeDuration = duration / numRidges;

  for (let i = 0; i < numRidges; i++) {
    const timeOffset = i * ridgeDuration;
    setTimeout(() => {
      // Alternate frequencies slightly for a rough scrape texture
      const freqVar = baseFreq + (Math.random() - 0.5) * (isWooden ? 400 : 1200);
      playNoise(
        isWooden ? 0.05 : 0.08,
        freqVar,
        vol * (0.8 + Math.random() * 0.4),
        isWooden ? 'bandpass' : 'highpass',
        isWooden ? 2.5 : 1.0
      );
    }, timeOffset * 1000);
  }
}

export function playNoise(decay, filterFreq = 800, vol = 1.0, filterType = 'highpass', qValue = 1.0) {
  if (audioCtx.state === 'suspended') audioCtx.resume();

  decay = adjustDecayForSustain(decay);

  const noise = audioCtx.createBufferSource();
  noise.buffer = getSharedNoiseBuffer();

  const filter = audioCtx.createBiquadFilter();
  filter.type = filterType;
  filter.frequency.setValueAtTime(filterFreq, audioCtx.currentTime);
  filter.Q.setValueAtTime(qValue, audioCtx.currentTime);
  const gain = audioCtx.createGain();

  if (state.transientAttack < 0) {
    const fadeTime = (-state.transientAttack / 100) * 0.04;
    gain.gain.setValueAtTime(0.001, audioCtx.currentTime);
    gain.gain.linearRampToValueAtTime(0.8 * vol, audioCtx.currentTime + fadeTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + decay);
  } else {
    gain.gain.setValueAtTime(0.8 * vol, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + decay);

    if (state.transientAttack > 0) {
      const clickVol = (state.transientAttack / 100) * 0.4 * vol;
      playAttackClick(0.015, 2800, clickVol);
    }
  }

  noise.connect(filter);
  filter.connect(gain);
  gain.connect(getAudioDestination());

  if (decay > 2.0) {
    noise.loop = true;
    noise.start(0);
  } else {
    const maxStartOffset = 2.0 - decay - 0.05;
    const startOffset = Math.max(0, Math.random() * maxStartOffset);
    noise.start(0, startOffset);
  }

  const voice = { sources: [noise], gain: gain };
  registerVoice(voice, decay);
}

// Custom sliding pitch synthesis for Indian Tabla Bayan bass drum
export function playTablaSlideUp(startFreq, endFreq, decay, velocity = 1.0, panValue = 0.0) {
  if (audioCtx.state === 'suspended') audioCtx.resume();

  decay = adjustDecayForSustain(decay);

  const factor = Math.pow(2, state.pitchShiftSemitones / 12);
  startFreq *= factor;
  endFreq *= factor;

  // The Bayan has a heavy center paste (Syahi) which alters the harmonics
  // Ratios: 1.0 (sine), 1.45 (sine), 2.05 (triangle)
  const osc = audioCtx.createOscillator();
  osc.type = 'sine';

  const osc2 = audioCtx.createOscillator();
  osc2.type = 'sine';
  osc2.detune.setValueAtTime(6, audioCtx.currentTime); // Subtle chorus beating

  const osc3 = audioCtx.createOscillator();
  osc3.type = 'triangle';
  osc3.detune.setValueAtTime(-4, audioCtx.currentTime);

  const gain = audioCtx.createGain();
  const gain2 = audioCtx.createGain();
  const gain3 = audioCtx.createGain();
  const masterGain = audioCtx.createGain();

  osc.connect(gain);
  osc2.connect(gain2);
  osc3.connect(gain3);

  gain.connect(masterGain);
  gain2.connect(masterGain);
  gain3.connect(masterGain);

  // Route through master saturator for warm physical body emulation
  const saturator = audioCtx.createWaveShaper();
  if (velocity > 0.6) {
    const curve = new Float32Array(256);
    for (let i = 0; i < 256; i++) {
      const x = (i * 2) / 255 - 1;
      curve[i] = Math.tanh(x * (1 + (velocity - 0.6) * 2.5));
    }
    saturator.curve = curve;
  } else {
    saturator.curve = getSoftClipCurve();
  }

  masterGain.connect(saturator);

  const spatialPanNode = audioCtx.createStereoPanner();
  spatialPanNode.pan.setValueAtTime(panValue, audioCtx.currentTime);

  // Add sub-bass EQ for the huge tabla bottom end
  const bassEQ = audioCtx.createBiquadFilter();
  bassEQ.type = 'lowshelf';
  bassEQ.frequency.setValueAtTime(100, audioCtx.currentTime);
  bassEQ.gain.setValueAtTime(8.0 * velocity, audioCtx.currentTime); // +8dB sub boost

  saturator.connect(spatialPanNode);
  spatialPanNode.connect(bassEQ);
  bassEQ.connect(getAudioDestination());

  // Slide curves
  osc.frequency.setValueAtTime(startFreq, audioCtx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(endFreq, audioCtx.currentTime + decay * 0.85);

  osc2.frequency.setValueAtTime(startFreq * 1.45, audioCtx.currentTime);
  osc2.frequency.exponentialRampToValueAtTime(endFreq * 1.45, audioCtx.currentTime + decay * 0.75);

  osc3.frequency.setValueAtTime(startFreq * 2.05, audioCtx.currentTime);
  osc3.frequency.exponentialRampToValueAtTime(endFreq * 2.05, audioCtx.currentTime + decay * 0.65);

  // Velocity affects harmonic content
  gain.gain.setValueAtTime(1.0, audioCtx.currentTime);
  gain2.gain.setValueAtTime(0.3 * velocity, audioCtx.currentTime);
  gain2.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + decay * 0.5);
  gain3.gain.setValueAtTime(0.15 * velocity, audioCtx.currentTime);
  gain3.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + decay * 0.4);

  // Attack Thwack (Fingertip striking the skin)
  const noise = audioCtx.createBufferSource();
  noise.buffer = getSharedNoiseBuffer();
  const noiseFilter = audioCtx.createBiquadFilter();
  noiseFilter.type = 'bandpass';
  noiseFilter.frequency.setValueAtTime(1200 + velocity * 1000, audioCtx.currentTime);
  noiseFilter.Q.setValueAtTime(1.0, audioCtx.currentTime);

  const noiseGain = audioCtx.createGain();
  noiseGain.gain.setValueAtTime(0.8 * velocity, audioCtx.currentTime);
  noiseGain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.05);

  noise.connect(noiseFilter);
  noiseFilter.connect(noiseGain);
  noiseGain.connect(masterGain);

  noise.start(0, Math.random() * 0.02);
  noise.stop(audioCtx.currentTime + 0.1);

  if (state.transientAttack < 0) {
    const fadeTime = (-state.transientAttack / 100) * 0.04;
    masterGain.gain.setValueAtTime(0.001, audioCtx.currentTime);
    masterGain.gain.linearRampToValueAtTime(velocity, audioCtx.currentTime + fadeTime);
    masterGain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + decay);
  } else {
    masterGain.gain.setValueAtTime(velocity, audioCtx.currentTime);
    masterGain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + decay);
    if (state.transientAttack > 0) {
      const clickVol = (state.transientAttack / 100) * 0.4 * velocity;
      playAttackClick(0.015, 2800, clickVol);
    }
  }

  osc.start();
  osc2.start();
  osc3.start();

  osc.stop(audioCtx.currentTime + decay);
  osc2.stop(audioCtx.currentTime + decay);
  osc3.stop(audioCtx.currentTime + decay);

  const voice = { sources: [osc, osc2, osc3, noise], gain: masterGain };
  registerVoice(voice, decay);
}

// Inharmonic FM/Additive synthesis for bells, cowbells, and metal percussion
export function playBell(freq, decay, velocity = 1.0, panValue = 0.0, isMuted = false) {
  if (audioCtx.state === 'suspended') audioCtx.resume();
  decay = adjustDecayForSustain(decay);

  const factor = Math.pow(2, state.pitchShiftSemitones / 12);
  freq *= factor;

  // Typical cowbell/agogo inharmonic modes
  const modes = [
    { ratio: 1.0, gainScale: 1.0, decayScale: 1.0 },
    { ratio: 1.45, gainScale: 0.8, decayScale: 0.8 },
    { ratio: 1.9, gainScale: 0.6, decayScale: 0.6 },
    { ratio: 2.3, gainScale: 0.4, decayScale: 0.4 },
    { ratio: 3.2, gainScale: 0.3, decayScale: 0.3 },
    { ratio: 4.1, gainScale: 0.2, decayScale: 0.2 }
  ];

  const masterGain = audioCtx.createGain();
  masterGain.gain.value = 0;
  const sources = [];

  modes.forEach((mode) => {
    const osc = audioCtx.createOscillator();
    // Mostly sine waves for bells, but the fundamental can be a triangle for bite
    osc.type = mode.ratio === 1.0 ? 'triangle' : 'sine';

    // Add slight random detuning for authentic metal clash
    const detune = (Math.random() - 0.5) * 15;
    osc.detune.setValueAtTime(detune, audioCtx.currentTime);
    osc.frequency.setValueAtTime(freq * mode.ratio, audioCtx.currentTime);

    const modeGain = audioCtx.createGain();
    const modeDecay = isMuted ? 0.05 : decay * mode.decayScale;

    modeGain.gain.setValueAtTime(0, audioCtx.currentTime);
    // Fast attack
    modeGain.gain.linearRampToValueAtTime(mode.gainScale * velocity, audioCtx.currentTime + 0.005);
    modeGain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + modeDecay);

    osc.connect(modeGain);
    modeGain.connect(masterGain);

    osc.start();
    osc.stop(audioCtx.currentTime + modeDecay);
    sources.push(osc);
  });

  const panner = audioCtx.createStereoPanner();
  panner.pan.setValueAtTime(panValue, audioCtx.currentTime);

  // Bandpass filter to remove muddy lows and extreme highs
  const filter = audioCtx.createBiquadFilter();
  filter.type = 'bandpass';
  filter.frequency.setValueAtTime(freq * 1.5, audioCtx.currentTime);
  filter.Q.setValueAtTime(1.5, audioCtx.currentTime);

  masterGain.connect(filter);
  filter.connect(panner);
  panner.connect(getAudioDestination());

  // Initial metal clank attack
  playAttackClick(0.02, freq * 2, velocity * 0.8);

  const voice = { sources: sources, gain: masterGain };
  registerVoice(voice, isMuted ? 0.1 : decay);
}

// Speech Synthesis for toy, fx, and authentic voice instruments
export function speakPhrase(text, pitch = 1.0, rate = 1.0, volume = 0.8) {
  if (typeof window !== 'undefined' && window.speechSynthesis) {
    try {
      // Cancel any current speech for snappy, instant drum trigger responsiveness
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.pitch = pitch;
      utterance.rate = rate;
      utterance.volume = volume;

      // Select a nice English voice if possible
      const voices = window.speechSynthesis.getVoices();
      const voice = voices.find((v) => v.lang.includes('en'));
      if (voice) {
        utterance.voice = voice;
      }

      window.speechSynthesis.speak(utterance);
    } catch (err) {
      console.warn('SpeechSynthesis failed:', err);
    }
  }
}

// Listeners to initialize context on click/touch
window.addEventListener('click', initAudio);
window.addEventListener('touchstart', initAudio);

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
    console.error('Failed to load wav: ' + url, err);
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
