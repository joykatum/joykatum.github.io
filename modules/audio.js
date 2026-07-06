import { getSupportedFormats, startRecording, stopRecording, isRecording } from './recorder.js';
export { getSupportedFormats, startRecording, stopRecording, isRecording };
// Audio Synthesis and Web Audio Effects Chain Module
import { state } from './state.js';

export const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

export let effectsInputNode = null;
export let effectsOutputNode = null;

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

  // Initialize recording destination
  streamDestination = audioCtx.createMediaStreamDestination();
  effectsOutputNode.connect(streamDestination);

  // Finally connect effects output to physical audio destination
  effectsOutputNode.connect(audioCtx.destination);

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
  if (state.effectsEnabled && effectsInputNode) {
    return effectsInputNode;
  }
  return audioCtx.destination;
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
      if (node.source) {
        node.source.stop(now + 0.02);
      }
    } catch (e) {}
  });
  state.currentNodes = [];
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

// Helper to play a short high-frequency attack crackle
export function playAttackClick(decay, filterFreq = 2500, vol = 0.5) {
  if (audioCtx.state === 'suspended') audioCtx.resume();
  const bufferSize = audioCtx.sampleRate * decay;
  const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    data[i] = Math.random() * 2 - 1;
  }
  const noise = audioCtx.createBufferSource();
  noise.buffer = buffer;
  const filter = audioCtx.createBiquadFilter();
  filter.type = 'highpass';
  filter.frequency.value = filterFreq;
  const gain = audioCtx.createGain();
  gain.gain.setValueAtTime(vol, audioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + decay);

  noise.connect(filter);
  filter.connect(gain);
  gain.connect(getAudioDestination());

  noise.start();
  state.currentNodes.push({ source: noise, gain: gain });
}

// Sound Synthesis Functions
export function playMembrane(freq, decay, pitchDrop, isSlap = false) {
  if (audioCtx.state === 'suspended') audioCtx.resume();

  stopAllSounds();

  if (state.formantVowel === 'sweep') {
    updateFormant();
  }

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
  masterGain.connect(getAudioDestination());

  osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
  osc2.frequency.setValueAtTime(freq * 1.6, audioCtx.currentTime);
  osc3.frequency.setValueAtTime(freq * 2.3, audioCtx.currentTime);

  if (pitchDrop > 0) {
    osc.frequency.exponentialRampToValueAtTime(Math.max(20, freq / pitchDrop), audioCtx.currentTime + decay);
    osc2.frequency.exponentialRampToValueAtTime(
      Math.max(20, (freq * 1.6) / pitchDrop),
      audioCtx.currentTime + decay * 0.8
    );
    osc3.frequency.exponentialRampToValueAtTime(
      Math.max(20, (freq * 2.3) / pitchDrop),
      audioCtx.currentTime + decay * 0.6
    );
  }

  // Apply Transient Designer Attack
  const attackTime = 0.005;
  if (state.transientAttack < 0) {
    const fadeTime = (-state.transientAttack / 100) * 0.04 + attackTime; // up to 40ms of attack fade
    masterGain.gain.setValueAtTime(0.001, audioCtx.currentTime);
    masterGain.gain.linearRampToValueAtTime(state.currentTiltVolume, audioCtx.currentTime + fadeTime);
    masterGain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + decay);
  } else {
    // Punchy attack
    let punch = 1.0;
    if (state.transientAttack > 0) {
      punch = 1.0 + (state.transientAttack / 100) * 1.2;
      const clickVol = (state.transientAttack / 100) * 0.3 * state.currentTiltVolume;
      playAttackClick(0.015, 2800, clickVol);
    }
    masterGain.gain.setValueAtTime(0.001, audioCtx.currentTime);
    masterGain.gain.exponentialRampToValueAtTime(state.currentTiltVolume * punch, audioCtx.currentTime + attackTime);
    masterGain.gain.exponentialRampToValueAtTime(state.currentTiltVolume, audioCtx.currentTime + attackTime + 0.03);
    masterGain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + decay);
  }

  gain.gain.setValueAtTime(1.0, audioCtx.currentTime);
  gain2.gain.setValueAtTime(isSlap ? 0.8 : 0.3, audioCtx.currentTime);
  gain3.gain.setValueAtTime(isSlap ? 0.4 : 0.15, audioCtx.currentTime);

  // Harmonics decay faster
  gain2.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + decay * 0.6);
  gain3.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + decay * 0.4);

  osc.start();
  osc2.start();
  osc3.start();

  osc.stop(audioCtx.currentTime + decay);
  osc2.stop(audioCtx.currentTime + decay);
  osc3.stop(audioCtx.currentTime + decay);

  state.currentNodes.push({ source: osc, gain: masterGain });
  state.currentNodes.push({ source: osc2, gain: masterGain });
  state.currentNodes.push({ source: osc3, gain: masterGain });

  if (isSlap) {
    playNoise(0.12, 1000, state.currentTiltVolume);
  } else {
    // subtle skin noise attack
    playNoise(0.04, 2500, state.currentTiltVolume * 0.15);
  }
}

export function playNoise(decay, filterFreq = 800, vol = 1.0) {
  if (audioCtx.state === 'suspended') audioCtx.resume();

  if (state.formantVowel === 'sweep') {
    updateFormant();
  }

  decay = adjustDecayForSustain(decay);

  const bufferSize = audioCtx.sampleRate * decay;
  const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    data[i] = Math.random() * 2 - 1;
  }
  const noise = audioCtx.createBufferSource();
  noise.buffer = buffer;
  const filter = audioCtx.createBiquadFilter();
  filter.type = 'highpass';
  filter.frequency.value = filterFreq;
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

  noise.start();
  state.currentNodes.push({ source: noise, gain: gain });
}

// Custom sliding pitch synthesis for Indian Tabla Bayan bass drum
export function playTablaSlideUp(startFreq, endFreq, decay) {
  if (audioCtx.state === 'suspended') audioCtx.resume();
  stopAllSounds();

  if (state.formantVowel === 'sweep') {
    updateFormant();
  }

  decay = adjustDecayForSustain(decay);

  const factor = Math.pow(2, state.pitchShiftSemitones / 12);
  startFreq *= factor;
  endFreq *= factor;

  const osc = audioCtx.createOscillator();
  osc.type = 'sine';

  const gain = audioCtx.createGain();
  osc.connect(gain);
  gain.connect(getAudioDestination());

  osc.frequency.setValueAtTime(startFreq, audioCtx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(endFreq, audioCtx.currentTime + decay * 0.85);

  if (state.transientAttack < 0) {
    const fadeTime = (-state.transientAttack / 100) * 0.04;
    gain.gain.setValueAtTime(0.001, audioCtx.currentTime);
    gain.gain.linearRampToValueAtTime(state.currentTiltVolume, audioCtx.currentTime + fadeTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + decay);
  } else {
    gain.gain.setValueAtTime(state.currentTiltVolume, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + decay);

    if (state.transientAttack > 0) {
      const clickVol = (state.transientAttack / 100) * 0.4 * state.currentTiltVolume;
      playAttackClick(0.015, 2800, clickVol);
    }
  }

  osc.start();
  osc.stop(audioCtx.currentTime + decay);

  state.currentNodes.push({ source: osc, gain: gain });
}

// Listeners to initialize context on click/touch
window.addEventListener('click', initAudio);
window.addEventListener('touchstart', initAudio);
