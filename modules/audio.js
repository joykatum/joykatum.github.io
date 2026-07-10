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
export const initAudio = () => {
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  if (!state.audioInitialized) {
    initEffectsChain();
    audioCtx.resume().then(() => {
      state.audioInitialized = true;
    });
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

  // Fundamental tone
  const osc = audioCtx.createOscillator();
  osc.type = 'sine';

  // Overtones for membrane
  const osc2 = audioCtx.createOscillator();
  osc2.type = 'triangle';

  // Complex enharmonics for more authentic drum skin sound
  const osc3 = audioCtx.createOscillator();
  osc3.type = 'sine';

  // 1. Physical Wood Shell Resonator emulation
  const shellOsc = audioCtx.createOscillator();
  shellOsc.type = 'sine';
  // Shell fixed bloom resonates deep within the wood shell dimensions (~75% of fundamental)
  shellOsc.frequency.setValueAtTime(freq * 0.75, audioCtx.currentTime);

  const gain = audioCtx.createGain();
  const gain2 = audioCtx.createGain();
  const gain3 = audioCtx.createGain();
  const shellGain = audioCtx.createGain();
  const masterGain = audioCtx.createGain();

  // Subtle natural detuning to create rich, organic acoustic bloom and beating
  osc2.detune.setValueAtTime(3.5, audioCtx.currentTime);
  osc3.detune.setValueAtTime(-5.0, audioCtx.currentTime);

  osc.connect(gain);
  osc2.connect(gain2);
  osc3.connect(gain3);
  shellOsc.connect(shellGain);

  gain.connect(masterGain);
  gain2.connect(masterGain);
  gain3.connect(masterGain);
  shellGain.connect(masterGain);

  // Route through master saturator for warm physical shell and skin emulation
  const saturator = audioCtx.createWaveShaper();
  saturator.curve = getSoftClipCurve();
  masterGain.connect(saturator);

  // 4. True Stereo Spatial Positioning via individual static panning nodes
  const spatialPanNode = audioCtx.createStereoPanner();
  spatialPanNode.pan.setValueAtTime(panValue, audioCtx.currentTime);
  saturator.connect(spatialPanNode);

  // Apply a dynamic low-shelf EQ boost for authentic low-end warmth on deep drums (<150Hz)
  if (freq < 150) {
    const bassEQ = audioCtx.createBiquadFilter();
    bassEQ.type = 'lowshelf';
    bassEQ.frequency.setValueAtTime(120, audioCtx.currentTime);
    const dbBoost = Math.max(1, 4.5 - ((freq - 50) / 100) * 3.5); // Warm +1dB to +4.5dB boost
    bassEQ.gain.setValueAtTime(dbBoost, audioCtx.currentTime);
    spatialPanNode.connect(bassEQ);
    bassEQ.connect(getAudioDestination());
  } else {
    spatialPanNode.connect(getAudioDestination());
  }

  // 3. Emulate Hand Damping (Slap micro pitch tightening)
  if (isSlap) {
    // Slaps snap upward momentarily as skin is choked/pinched by hand
    osc.frequency.setValueAtTime(freq * 1.12, audioCtx.currentTime);
    osc.frequency.linearRampToValueAtTime(freq * 1.15, audioCtx.currentTime + 0.015);
    osc.frequency.exponentialRampToValueAtTime(freq, audioCtx.currentTime + decay);
  } else {
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    if (pitchDrop > 0) {
      osc.frequency.exponentialRampToValueAtTime(Math.max(20, freq / pitchDrop), audioCtx.currentTime + decay);
    }
  }

  // Real drum-head vibrational ratios
  const ratio2 = 1.587 + (Math.random() * 0.008 - 0.004);
  const ratio3 = 2.242 + (Math.random() * 0.016 - 0.008);
  osc2.frequency.setValueAtTime(freq * ratio2, audioCtx.currentTime);
  osc3.frequency.setValueAtTime(freq * ratio3, audioCtx.currentTime);

  if (!isSlap && pitchDrop > 0) {
    osc2.frequency.exponentialRampToValueAtTime(
      Math.max(20, (freq * ratio2) / pitchDrop),
      audioCtx.currentTime + decay * 0.8
    );
    osc3.frequency.exponentialRampToValueAtTime(
      Math.max(20, (freq * ratio3) / pitchDrop),
      audioCtx.currentTime + decay * 0.6
    );
  }

  // Apply Transient Designer Attack
  const attackTime = 0.005;
  if (state.transientAttack < 0) {
    const fadeTime = (-state.transientAttack / 100) * 0.04 + attackTime; // up to 40ms of attack fade
    masterGain.gain.setValueAtTime(0.001, audioCtx.currentTime);
    masterGain.gain.linearRampToValueAtTime(velocity, audioCtx.currentTime + fadeTime);
    masterGain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + decay);
  } else {
    // Punchy attack
    let punch = 1.0;
    if (state.transientAttack > 0) {
      punch = 1.0 + (state.transientAttack / 100) * 1.2;
      const clickVol = (state.transientAttack / 100) * 0.3 * velocity;
      playAttackClick(0.015, 2800, clickVol);
    }
    masterGain.gain.setValueAtTime(0.001, audioCtx.currentTime);
    masterGain.gain.exponentialRampToValueAtTime(velocity * punch, audioCtx.currentTime + attackTime);
    masterGain.gain.exponentialRampToValueAtTime(velocity, audioCtx.currentTime + attackTime + 0.03);
    masterGain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + decay);
  }

  gain.gain.setValueAtTime(1.0, audioCtx.currentTime);

  // 2. Velocity-Sensitive Overtone Timbre scaling
  const overtoneScale = 0.4 + velocity * 0.6; // Harder hits excite overtones drastically
  gain2.gain.setValueAtTime((isSlap ? 0.8 : 0.3) * overtoneScale, audioCtx.currentTime);
  gain3.gain.setValueAtTime((isSlap ? 0.4 : 0.15) * overtoneScale, audioCtx.currentTime);

  // Shell resonance gain is independent, blooming outwards gently
  shellGain.gain.setValueAtTime(0.18 * velocity, audioCtx.currentTime);

  // Harmonics decay faster
  gain2.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + decay * 0.6);
  gain3.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + decay * 0.4);
  shellGain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + decay * 1.35); // Rings inside body slightly longer

  osc.start();
  osc2.start();
  osc3.start();
  shellOsc.start();

  osc.stop(audioCtx.currentTime + decay);
  osc2.stop(audioCtx.currentTime + decay);
  osc3.stop(audioCtx.currentTime + decay);
  shellOsc.stop(audioCtx.currentTime + decay * 1.35);

  const voice = { sources: [osc, osc2, osc3, shellOsc], gain: masterGain };
  registerVoice(voice, decay);

  if (isSlap) {
    playNoise(0.12, 1000, velocity);
  } else {
    // subtle skin noise attack
    playNoise(0.04, 2500, velocity * 0.15);
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

  const osc = audioCtx.createOscillator();
  osc.type = 'sine';

  const osc2 = audioCtx.createOscillator();
  osc2.type = 'triangle';
  osc2.detune.setValueAtTime(6, audioCtx.currentTime); // Subtle chorus beating

  const gain = audioCtx.createGain();
  const gain2 = audioCtx.createGain();
  const masterGain = audioCtx.createGain();

  osc.connect(gain);
  osc2.connect(gain2);
  gain.connect(masterGain);
  gain2.connect(masterGain);

  // Route through master saturator for warm physical body emulation
  const saturator = audioCtx.createWaveShaper();
  saturator.curve = getSoftClipCurve();
  masterGain.connect(saturator);

  const spatialPanNode = audioCtx.createStereoPanner();
  spatialPanNode.pan.setValueAtTime(panValue, audioCtx.currentTime);
  saturator.connect(spatialPanNode);
  spatialPanNode.connect(getAudioDestination());

  osc.frequency.setValueAtTime(startFreq, audioCtx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(endFreq, audioCtx.currentTime + decay * 0.85);

  osc2.frequency.setValueAtTime(startFreq * 1.5, audioCtx.currentTime);
  osc2.frequency.exponentialRampToValueAtTime(endFreq * 1.5, audioCtx.currentTime + decay * 0.75);

  gain.gain.setValueAtTime(1.0, audioCtx.currentTime);
  gain2.gain.setValueAtTime(0.18, audioCtx.currentTime);
  gain2.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + decay * 0.4);

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
  osc.stop(audioCtx.currentTime + decay);
  osc2.stop(audioCtx.currentTime + decay);

  const voice = { sources: [osc, osc2], gain: masterGain };
  registerVoice(voice, decay);
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
