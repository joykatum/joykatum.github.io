// Effects Presets and Synchronization Module
import { state } from './state.js';
import { compareStrings } from './utils.js';
import {
  audioCtx,
  reverbNode,
  reverbGainNode,
  delayNode,
  delayWetGainNode,
  delayGainNode,
  effectsInputNode,
  updateReverbImpulse,
  updateDistortion,
  updateFilter,
  updateSpatialPan,
  updateResonator,
  updateFormant,
  updateBitCrusher,
  updateRingMod,
  updateSpectralFreeze
} from './audio.js';

export const defaultPresets = [
  {
    name: '👾 8-Bit Arcade',
    enabled: true,
    reverbWet: 10,
    reverbSize: 'bedroom',
    delayTime: 15,
    delayFeedback: 30,
    pitchShift: 7,
    filterType: 'highpass',
    filterPctX: 0.4,
    filterPctY: 0.8,
    distortion: 50,
    panSpeed: 1,
    panDepth: 0,
    resonatorType: 'none',
    resonatorDecay: 50,
    formantVowel: 'none',
    formantMix: 0,
    transientAttack: 40,
    transientSustain: -30,
    spectralFreeze: false,
    freezeVolume: 50,
    bitCrusherBits: 4,
    bitCrusherMix: 90,
    ringModFreq: 200,
    ringModDepth: 0
  },
  {
    name: '📼 80s Lo-Fi Tape',
    enabled: true,
    reverbWet: 20,
    reverbSize: 'bedroom',
    delayTime: 40,
    delayFeedback: 25,
    pitchShift: -1,
    filterType: 'lowpass',
    filterPctX: 0.35,
    filterPctY: 0.5,
    distortion: 15,
    panSpeed: 0.5,
    panDepth: 20,
    resonatorType: 'none',
    resonatorDecay: 50,
    formantVowel: 'none',
    formantMix: 0,
    transientAttack: -10,
    transientSustain: -10,
    spectralFreeze: false,
    freezeVolume: 50,
    bitCrusherBits: 6,
    bitCrusherMix: 65,
    ringModFreq: 50,
    ringModDepth: 10
  },
  {
    name: '👽 Alien Abduction Beam',
    enabled: true,
    reverbWet: 85,
    reverbSize: 'space',
    delayTime: 65,
    delayFeedback: 90,
    pitchShift: 12,
    filterType: 'highpass',
    filterPctX: 0.8,
    filterPctY: 0.9,
    distortion: 30,
    panSpeed: 4.0,
    panDepth: 100,
    resonatorType: 'glass',
    resonatorDecay: 80,
    formantVowel: 'I',
    formantMix: 90,
    transientAttack: 10,
    transientSustain: 30,
    spectralFreeze: false,
    freezeVolume: 50,
    bitCrusherBits: 10,
    bitCrusherMix: 20,
    ringModFreq: 600,
    ringModDepth: 100
  },
  {
    name: '📻 AM Radio Chatter',
    enabled: true,
    reverbWet: 15,
    reverbSize: 'bedroom',
    delayTime: 10,
    delayFeedback: 10,
    pitchShift: 0,
    filterType: 'highpass',
    filterPctX: 0.7,
    filterPctY: 0.3,
    distortion: 60,
    panSpeed: 0,
    panDepth: 0,
    resonatorType: 'metal',
    resonatorDecay: 20,
    formantVowel: 'E',
    formantMix: 50,
    transientAttack: -30,
    transientSustain: -50,
    spectralFreeze: false,
    freezeVolume: 50,
    bitCrusherBits: 5,
    bitCrusherMix: 95,
    ringModFreq: 1500,
    ringModDepth: 30
  },
  {
    name: '🤖 Cybernetic Shaman',
    enabled: true,
    reverbWet: 40,
    reverbSize: 'space',
    delayTime: 50,
    delayFeedback: 60,
    pitchShift: -5,
    filterType: 'none',
    filterPctX: 0.5,
    filterPctY: 0.5,
    distortion: 15,
    panSpeed: 1.5,
    panDepth: 90,
    resonatorType: 'none',
    resonatorDecay: 50,
    formantVowel: 'sweep',
    formantMix: 75,
    transientAttack: 0,
    transientSustain: 15,
    spectralFreeze: false,
    freezeVolume: 50,
    bitCrusherBits: 12,
    bitCrusherMix: 25,
    ringModFreq: 120,
    ringModDepth: 30
  },
  {
    name: '🌀 Cybernetic Swarm',
    enabled: true,
    reverbWet: 40,
    reverbSize: 'stadium',
    delayTime: 30,
    delayFeedback: 85,
    pitchShift: 5,
    filterType: 'bandpass',
    filterPctX: 0.6,
    filterPctY: 0.8,
    distortion: 70,
    panSpeed: 8.0,
    panDepth: 80,
    resonatorType: 'metal',
    resonatorDecay: 90,
    formantVowel: 'sweep',
    formantMix: 60,
    transientAttack: 20,
    transientSustain: 10,
    spectralFreeze: false,
    freezeVolume: 50,
    bitCrusherBits: 8,
    bitCrusherMix: 40,
    ringModFreq: 300,
    ringModDepth: 60
  },
  {
    name: '🌊 Deep Ocean Dive',
    enabled: true,
    reverbWet: 90,
    reverbSize: 'stadium',
    delayTime: 70,
    delayFeedback: 80,
    pitchShift: -6,
    filterType: 'lowpass',
    filterPctX: 0.1,
    filterPctY: 0.8,
    distortion: 0,
    panSpeed: 0.1,
    panDepth: 70,
    resonatorType: 'none',
    resonatorDecay: 50,
    formantVowel: 'none',
    formantMix: 0,
    transientAttack: -30,
    transientSustain: 50,
    spectralFreeze: true,
    freezeVolume: 40,
    bitCrusherBits: 16,
    bitCrusherMix: 0,
    ringModFreq: 200,
    ringModDepth: 0
  },
  {
    name: '🧊 Deep Sub-Bass Chamber',
    enabled: true,
    reverbWet: 50,
    reverbSize: 'concert',
    delayTime: 30,
    delayFeedback: 15,
    pitchShift: -12,
    filterType: 'lowpass',
    filterPctX: 0.2,
    filterPctY: 0.6,
    distortion: 80,
    panSpeed: 0.5,
    panDepth: 10,
    resonatorType: 'none',
    resonatorDecay: 50,
    formantVowel: 'none',
    formantMix: 0,
    transientAttack: 20,
    transientSustain: 50,
    spectralFreeze: false,
    freezeVolume: 50,
    bitCrusherBits: 16,
    bitCrusherMix: 0,
    ringModFreq: 200,
    ringModDepth: 0
  },
  {
    name: '🐉 Dragon Roar',
    enabled: true,
    reverbWet: 60,
    reverbSize: 'space',
    delayTime: 40,
    delayFeedback: 60,
    pitchShift: -12,
    filterType: 'bandpass',
    filterPctX: 0.4,
    filterPctY: 0.9,
    distortion: 80,
    panSpeed: 0.5,
    panDepth: 30,
    resonatorType: 'ceramic',
    resonatorDecay: 60,
    formantVowel: 'A',
    formantMix: 80,
    transientAttack: 60,
    transientSustain: 40,
    spectralFreeze: false,
    freezeVolume: 50,
    bitCrusherBits: 10,
    bitCrusherMix: 30,
    ringModFreq: 80,
    ringModDepth: 40
  },
  {
    name: '⛪ Dreamy Cathedral',
    enabled: true,
    reverbWet: 95,
    reverbSize: 'space',
    delayTime: 40,
    delayFeedback: 45,
    pitchShift: 0,
    filterType: 'none',
    filterPctX: 0.5,
    filterPctY: 0.5,
    distortion: 5,
    panSpeed: 1,
    panDepth: 0,
    resonatorType: 'none',
    resonatorDecay: 50,
    formantVowel: 'none',
    formantMix: 0,
    transientAttack: 0,
    transientSustain: 20,
    spectralFreeze: false,
    freezeVolume: 50,
    bitCrusherBits: 16,
    bitCrusherMix: 0,
    ringModFreq: 200,
    ringModDepth: 0
  },
  {
    name: '🦄 Fairydust',
    enabled: true,
    reverbWet: 80,
    reverbSize: 'bedroom',
    delayTime: 50,
    delayFeedback: 75,
    pitchShift: 12,
    filterType: 'highpass',
    filterPctX: 0.9,
    filterPctY: 0.2,
    distortion: 0,
    panSpeed: 6.0,
    panDepth: 80,
    resonatorType: 'glass',
    resonatorDecay: 70,
    formantVowel: 'I',
    formantMix: 60,
    transientAttack: 20,
    transientSustain: 0,
    spectralFreeze: false,
    freezeVolume: 50,
    bitCrusherBits: 16,
    bitCrusherMix: 0,
    ringModFreq: 2000,
    ringModDepth: 100
  },
  {
    name: '💥 Meteor Impact',
    enabled: true,
    reverbWet: 40,
    reverbSize: 'concert',
    delayTime: 0,
    delayFeedback: 0,
    pitchShift: -10,
    filterType: 'none',
    filterPctX: 0.5,
    filterPctY: 0.5,
    distortion: 100,
    panSpeed: 0,
    panDepth: 0,
    resonatorType: 'none',
    resonatorDecay: 50,
    formantVowel: 'O',
    formantMix: 30,
    transientAttack: 100,
    transientSustain: 100,
    spectralFreeze: false,
    freezeVolume: 50,
    bitCrusherBits: 4,
    bitCrusherMix: 70,
    ringModFreq: 100,
    ringModDepth: 20
  },
  {
    name: '🔮 Mystic Glass Resonator',
    enabled: true,
    reverbWet: 60,
    reverbSize: 'space',
    delayTime: 40,
    delayFeedback: 30,
    pitchShift: 4,
    filterType: 'highpass',
    filterPctX: 0.6,
    filterPctY: 0.7,
    distortion: 5,
    panSpeed: 1.0,
    panDepth: 50,
    resonatorType: 'glass',
    resonatorDecay: 85,
    formantVowel: 'none',
    formantMix: 0,
    transientAttack: -10,
    transientSustain: 20,
    spectralFreeze: false,
    freezeVolume: 50,
    bitCrusherBits: 16,
    bitCrusherMix: 0,
    ringModFreq: 400,
    ringModDepth: 10
  },
  {
    name: '👻 Phantom Whispers',
    enabled: true,
    reverbWet: 100,
    reverbSize: 'space',
    delayTime: 90,
    delayFeedback: 95,
    pitchShift: -12,
    filterType: 'lowpass',
    filterPctX: 0.2,
    filterPctY: 0.1,
    distortion: 5,
    panSpeed: 0.2,
    panDepth: 100,
    resonatorType: 'glass',
    resonatorDecay: 100,
    formantVowel: 'O',
    formantMix: 100,
    transientAttack: -50,
    transientSustain: 100,
    spectralFreeze: true,
    freezeVolume: 90,
    bitCrusherBits: 16,
    bitCrusherMix: 0,
    ringModFreq: 50,
    ringModDepth: 10
  },
  {
    name: '⚡ Radioactive Fuzz',
    enabled: true,
    reverbWet: 20,
    reverbSize: 'concert',
    delayTime: 25,
    delayFeedback: 40,
    pitchShift: 2,
    filterType: 'none',
    filterPctX: 0.5,
    filterPctY: 0.5,
    distortion: 90,
    panSpeed: 3,
    panDepth: 30,
    resonatorType: 'metal',
    resonatorDecay: 60,
    formantVowel: 'E',
    formantMix: 40,
    transientAttack: 50,
    transientSustain: -10,
    spectralFreeze: false,
    freezeVolume: 50,
    bitCrusherBits: 10,
    bitCrusherMix: 50,
    ringModFreq: 80,
    ringModDepth: 20
  },
  {
    name: '🥁 Tight Studio Dry',
    enabled: true,
    reverbWet: 10,
    reverbSize: 'bedroom',
    delayTime: 0,
    delayFeedback: 0,
    pitchShift: 0,
    filterType: 'none',
    filterPctX: 0.5,
    filterPctY: 0.5,
    distortion: 0,
    panSpeed: 0,
    panDepth: 0,
    resonatorType: 'none',
    resonatorDecay: 50,
    formantVowel: 'none',
    formantMix: 0,
    transientAttack: 30,
    transientSustain: -40,
    spectralFreeze: false,
    freezeVolume: 50,
    bitCrusherBits: 16,
    bitCrusherMix: 0,
    ringModFreq: 200,
    ringModDepth: 0
  },
  {
    name: '🛸 Vintage Sci-Fi Raygun',
    enabled: true,
    reverbWet: 40,
    reverbSize: 'space',
    delayTime: 30,
    delayFeedback: 65,
    pitchShift: 12,
    filterType: 'highpass',
    filterPctX: 0.6,
    filterPctY: 0.8,
    distortion: 40,
    panSpeed: 2.5,
    panDepth: 80,
    resonatorType: 'metal',
    resonatorDecay: 70,
    formantVowel: 'O',
    formantMix: 60,
    transientAttack: 30,
    transientSustain: -20,
    spectralFreeze: false,
    freezeVolume: 50,
    bitCrusherBits: 8,
    bitCrusherMix: 40,
    ringModFreq: 350,
    ringModDepth: 85
  },
  {
    name: '🔥 Volcanic Eruption',
    enabled: true,
    reverbWet: 70,
    reverbSize: 'concert',
    delayTime: 80,
    delayFeedback: 75,
    pitchShift: -8,
    filterType: 'lowpass',
    filterPctX: 0.3,
    filterPctY: 0.7,
    distortion: 85,
    panSpeed: 1.2,
    panDepth: 40,
    resonatorType: 'none',
    resonatorDecay: 50,
    formantVowel: 'none',
    formantMix: 0,
    transientAttack: 40,
    transientSustain: 60,
    spectralFreeze: false,
    freezeVolume: 50,
    bitCrusherBits: 6,
    bitCrusherMix: 80,
    ringModFreq: 40,
    ringModDepth: 50
  }
];

export let customPresets = [];

export function loadCustomPresets() {
  try {
    const saved = localStorage.getItem('joykatum_custom_presets');
    if (saved) {
      customPresets = JSON.parse(saved);
    }
  } catch (e) {
    console.error('Failed loading custom presets', e);
  }
}

// Populate the presets dropdown select element
export function populatePresetsDropdown(activeName) {
  const select = document.getElementById('fx-preset-select');
  const footerSelect = document.getElementById('footer-fx-preset-select');

  // Helper to populate a select element
  const populate = (sel, isFooter = false) => {
    if (!sel) return;
    sel.innerHTML = '';

    const opt = document.createElement('option');
    opt.value = 'none';
    opt.innerText = 'No Effects (Bypass)';
    sel.appendChild(opt);

    // Add default presets sorted alphabetically
    const sortedDefaults = [...defaultPresets].sort((a, b) => compareStrings(a.name, b.name));

    sortedDefaults.forEach((p) => {
      const opt = document.createElement('option');
      opt.value = p.name;
      opt.innerText = p.name.replace(/^[\s\p{Emoji}\p{Extended_Pictographic}\u200d\u200b]+\s*/gu, '').trim();
      sel.appendChild(opt);
    });

    // Add custom presets sorted alphabetically
    if (customPresets.length > 0) {
      const group = document.createElement('optgroup');
      group.label = 'SAVED PRESETS';
      const sortedCustom = [...customPresets].sort((a, b) => compareStrings(a.name, b.name));
      sortedCustom.forEach((p) => {
        const opt = document.createElement('option');
        opt.value = p.name;
        opt.innerText = p.name.replace(/^[\s\p{Emoji}\p{Extended_Pictographic}\u200d\u200b]+\s*/gu, '').trim();
        group.appendChild(opt);
      });
      sel.appendChild(group);
    }
  };

  populate(select, false);
  populate(footerSelect, true);

  if (activeName) {
    if (select) select.value = activeName;
    if (footerSelect) footerSelect.value = activeName;
  } else {
    // If no activeName, but effects are disabled, set footer select to 'none'
    const isEnabled = state.effectsEnabled;
    if (footerSelect && !isEnabled) {
      footerSelect.value = 'none';
    }
  }
}

// Mark current state as a user-modified Custom preset
export function markAsCustom() {
  const select = document.getElementById('fx-preset-select');
  const footerSelect = document.getElementById('footer-fx-preset-select');

  const addCustomOption = (sel) => {
    if (!sel) return;
    let opt = Array.from(sel.options).find((o) => o.value === '_custom_');
    if (!opt) {
      opt = document.createElement('option');
      opt.value = '_custom_';
      opt.innerText = 'Custom (Modified)';
      sel.appendChild(opt);
    }
    sel.value = '_custom_';
  };

  addCustomOption(select);
  addCustomOption(footerSelect);

  if (!state.effectsEnabled) {
    state.effectsEnabled = true;
    const fxActiveDot = document.getElementById('fx-active-dot');
    if (fxActiveDot) fxActiveDot.classList.add('active');
  }
}

// Synchronize all Audio Parameters with current UI slider values
export function syncEffectsFromUI() {
  if (!effectsInputNode) return;

  const fxSection = document.getElementById('effects-section');
  const fxActiveDot = document.getElementById('fx-active-dot');
  if (fxActiveDot) {
    fxActiveDot.classList.toggle('active', state.effectsEnabled);
  }

  // 2. Reverb
  const reverbSlider = document.getElementById('reverb-slider');
  if (reverbSlider && reverbGainNode) {
    const value = parseInt(reverbSlider.value);
    reverbGainNode.gain.setValueAtTime(value / 100, audioCtx.currentTime);
    const label = document.getElementById('reverb-val-label');
    if (label) label.innerText = `${value}%`;
  }

  // 3. Delay Time & Feedback
  const delayTimeSlider = document.getElementById('delay-time-slider');
  const delayFbSlider = document.getElementById('delay-fb-slider');
  if (delayNode && delayWetGainNode && delayGainNode) {
    if (delayTimeSlider) {
      const timeVal = parseInt(delayTimeSlider.value) / 100; // 0.1s to 1.0s
      delayNode.delayTime.setValueAtTime(timeVal, audioCtx.currentTime);
      const label = document.getElementById('delay-time-label');
      if (label) label.innerText = `${timeVal.toFixed(2)}s`;
    }
    if (delayFbSlider) {
      const fbVal = parseInt(delayFbSlider.value) / 100; // 0% to 90%
      delayGainNode.gain.setValueAtTime(fbVal, audioCtx.currentTime);
      // Delay wet gain scales with feedback slightly
      delayWetGainNode.gain.setValueAtTime(fbVal > 0 ? 0.45 : 0, audioCtx.currentTime);
      const label = document.getElementById('delay-fb-label');
      if (label) label.innerText = `${Math.round(fbVal * 100)}%`;
    }
  }

  // 4. Pitch Shifter (Synthesis semitones)
  const pitchSlider = document.getElementById('pitch-slider');
  if (pitchSlider) {
    state.pitchShiftSemitones = parseInt(pitchSlider.value);
    const label = document.getElementById('pitch-val-label');
    if (label) {
      label.innerText = state.pitchShiftSemitones > 0 ? `+${state.pitchShiftSemitones}` : state.pitchShiftSemitones;
    }
  }

  // 5. Filter type and values
  const filterTypeSelect = document.getElementById('filter-type-select');
  if (filterTypeSelect) {
    state.filterType = filterTypeSelect.value;
  }
  updateFilter();

  // 6. Distortion
  const distSlider = document.getElementById('dist-slider');
  if (distSlider) {
    const val = parseInt(distSlider.value);
    updateDistortion(val);
    const label = document.getElementById('dist-val-label');
    if (label) label.innerText = `${val}%`;
  }

  // 7. Spatial Swirl (Auto-Pan)
  const panSpeedSlider = document.getElementById('pan-speed-slider');
  const panDepthSlider = document.getElementById('pan-depth-slider');
  if (panSpeedSlider) {
    state.panSpeed = parseFloat(panSpeedSlider.value);
    const label = document.getElementById('pan-speed-label');
    if (label) label.innerText = `${state.panSpeed.toFixed(1)} Hz`;
  }
  if (panDepthSlider) {
    state.panDepth = parseInt(panDepthSlider.value);
    const label = document.getElementById('pan-depth-label');
    if (label) label.innerText = `${state.panDepth}%`;
  }
  updateSpatialPan();

  // 8. Physical Modeling Resonator (Chamber Changer)
  const resonatorTypeSelect = document.getElementById('resonator-type-select');
  const resonatorDecaySlider = document.getElementById('resonator-decay-slider');
  if (resonatorTypeSelect) {
    state.resonatorType = resonatorTypeSelect.value;
  }
  if (resonatorDecaySlider) {
    state.resonatorDecay = parseInt(resonatorDecaySlider.value);
    const label = document.getElementById('resonator-decay-label');
    if (label) label.innerText = `${state.resonatorDecay}%`;
  }
  updateResonator();

  // 9. Formant Shifter (Vocalizer)
  const formantVowelSelect = document.getElementById('formant-vowel-select');
  const formantMixSlider = document.getElementById('formant-mix-slider');
  if (formantVowelSelect) {
    state.formantVowel = formantVowelSelect.value;
  }
  if (formantMixSlider) {
    state.formantMix = parseInt(formantMixSlider.value);
    const label = document.getElementById('formant-mix-label');
    if (label) label.innerText = `${state.formantMix}%`;
  }
  updateFormant();

  // 10. Transient Designer
  const transientAttackSlider = document.getElementById('transient-attack-slider');
  const transientSustainSlider = document.getElementById('transient-sustain-slider');
  if (transientAttackSlider) {
    state.transientAttack = parseInt(transientAttackSlider.value);
    const label = document.getElementById('transient-attack-label');
    if (label)
      label.innerText = (state.transientAttack > 0 ? `+${state.transientAttack}` : state.transientAttack) + '%';
  }
  if (transientSustainSlider) {
    state.transientSustain = parseInt(transientSustainSlider.value);
    const label = document.getElementById('transient-sustain-label');
    if (label)
      label.innerText = (state.transientSustain > 0 ? `+${state.transientSustain}` : state.transientSustain) + '%';
  }

  // 11. Spectral Freeze
  const freezeCheckbox = document.getElementById('spectral-freeze-checkbox');
  const freezeVolumeSlider = document.getElementById('freeze-volume-slider');
  if (freezeCheckbox) {
    state.spectralFreeze = freezeCheckbox.checked;
  }
  if (freezeVolumeSlider) {
    state.freezeVolume = parseInt(freezeVolumeSlider.value);
    const label = document.getElementById('freeze-volume-label');
    if (label) label.innerText = `${state.freezeVolume}%`;
  }
  updateSpectralFreeze();

  // 12. Bit-Crusher
  const bitcrusherBitsSlider = document.getElementById('bitcrusher-bits-slider');
  const bitcrusherMixSlider = document.getElementById('bitcrusher-mix-slider');
  if (bitcrusherBitsSlider) {
    state.bitCrusherBits = parseInt(bitcrusherBitsSlider.value);
    const label = document.getElementById('bitcrusher-bits-label');
    if (label) label.innerText = `${state.bitCrusherBits}-bit`;
  }
  if (bitcrusherMixSlider) {
    state.bitCrusherMix = parseInt(bitcrusherMixSlider.value);
    const label = document.getElementById('bitcrusher-mix-label');
    if (label) label.innerText = `${state.bitCrusherMix}%`;
  }
  updateBitCrusher();

  // 13. Ring Modulator
  const ringmodFreqSlider = document.getElementById('ringmod-freq-slider');
  const ringmodDepthSlider = document.getElementById('ringmod-depth-slider');
  if (ringmodFreqSlider) {
    state.ringModFreq = parseInt(ringmodFreqSlider.value);
    const label = document.getElementById('ringmod-freq-label');
    if (label) label.innerText = `${state.ringModFreq} Hz`;
  }
  if (ringmodDepthSlider) {
    state.ringModDepth = parseInt(ringmodDepthSlider.value);
    const label = document.getElementById('ringmod-depth-label');
    if (label) label.innerText = `${state.ringModDepth}%`;
  }
  updateRingMod();
}

// Load a preset object configuration into UI elements & Node structures
export function loadPreset(preset) {
  const reverbSlider = document.getElementById('reverb-slider');
  const delayTimeSlider = document.getElementById('delay-time-slider');
  const delayFbSlider = document.getElementById('delay-fb-slider');
  const pitchSlider = document.getElementById('pitch-slider');
  const filterTypeSelect = document.getElementById('filter-type-select');
  const distSlider = document.getElementById('dist-slider');

  const panSpeedSlider = document.getElementById('pan-speed-slider');
  const panDepthSlider = document.getElementById('pan-depth-slider');
  const resonatorTypeSelect = document.getElementById('resonator-type-select');
  const resonatorDecaySlider = document.getElementById('resonator-decay-slider');
  const formantVowelSelect = document.getElementById('formant-vowel-select');
  const formantMixSlider = document.getElementById('formant-mix-slider');
  const transientAttackSlider = document.getElementById('transient-attack-slider');
  const transientSustainSlider = document.getElementById('transient-sustain-slider');
  const freezeCheckbox = document.getElementById('spectral-freeze-checkbox');
  const freezeVolumeSlider = document.getElementById('freeze-volume-slider');
  const bitcrusherBitsSlider = document.getElementById('bitcrusher-bits-slider');
  const bitcrusherMixSlider = document.getElementById('bitcrusher-mix-slider');
  const ringmodFreqSlider = document.getElementById('ringmod-freq-slider');
  const ringmodDepthSlider = document.getElementById('ringmod-depth-slider');

  if (reverbSlider) reverbSlider.value = preset.reverbWet;
  if (delayTimeSlider) delayTimeSlider.value = preset.delayTime;
  if (delayFbSlider) delayFbSlider.value = preset.delayFeedback;
  if (pitchSlider) pitchSlider.value = preset.pitchShift;
  if (filterTypeSelect) filterTypeSelect.value = preset.filterType;
  if (distSlider) distSlider.value = preset.distortion;

  if (panSpeedSlider) panSpeedSlider.value = preset.panSpeed !== undefined ? preset.panSpeed : 1.0;
  if (panDepthSlider) panDepthSlider.value = preset.panDepth !== undefined ? preset.panDepth : 0;
  if (resonatorTypeSelect)
    resonatorTypeSelect.value = preset.resonatorType !== undefined ? preset.resonatorType : 'none';
  if (resonatorDecaySlider)
    resonatorDecaySlider.value = preset.resonatorDecay !== undefined ? preset.resonatorDecay : 50;
  if (formantVowelSelect) formantVowelSelect.value = preset.formantVowel !== undefined ? preset.formantVowel : 'none';
  if (formantMixSlider) formantMixSlider.value = preset.formantMix !== undefined ? preset.formantMix : 0;
  if (transientAttackSlider)
    transientAttackSlider.value = preset.transientAttack !== undefined ? preset.transientAttack : 0;
  if (transientSustainSlider)
    transientSustainSlider.value = preset.transientSustain !== undefined ? preset.transientSustain : 0;
  if (freezeCheckbox) freezeCheckbox.checked = preset.spectralFreeze !== undefined ? preset.spectralFreeze : false;
  if (freezeVolumeSlider) freezeVolumeSlider.value = preset.freezeVolume !== undefined ? preset.freezeVolume : 50;
  if (bitcrusherBitsSlider)
    bitcrusherBitsSlider.value = preset.bitCrusherBits !== undefined ? preset.bitCrusherBits : 16;
  if (bitcrusherMixSlider) bitcrusherMixSlider.value = preset.bitCrusherMix !== undefined ? preset.bitCrusherMix : 0;
  if (ringmodFreqSlider) ringmodFreqSlider.value = preset.ringModFreq !== undefined ? preset.ringModFreq : 200;
  if (ringmodDepthSlider) ringmodDepthSlider.value = preset.ringModDepth !== undefined ? preset.ringModDepth : 0;

  // Active Reverb Button Highlight
  document.querySelectorAll('.reverb-p-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.preset === preset.reverbSize);
  });
  if (reverbNode) {
    updateReverbImpulse(preset.reverbSize);
  }

  // Active XY Position restore
  state.filterPctX = preset.filterPctX;
  state.filterPctY = preset.filterPctY;

  // Convert percentages back to frequency & Q values
  state.filterFreqValue = Math.round(80 * Math.pow(18000 / 80, state.filterPctX));
  state.filterQValue = 0.1 + (1 - state.filterPctY) * 14.9;

  const dot = document.getElementById('xy-pad-dot');
  if (dot) {
    dot.style.left = `${state.filterPctX * 100}%`;
    dot.style.top = `${state.filterPctY * 100}%`;
  }

  const xyContainer = document.getElementById('xy-pad');
  if (xyContainer) {
    xyContainer.classList.toggle('disabled', preset.filterType === 'none');
  }

  state.effectsEnabled = preset.enabled;
  if (effectsInputNode) {
    syncEffectsFromUI();
  }
}

export function handlePresetChange(name) {
  const preset = defaultPresets.find((p) => p.name === name) || customPresets.find((p) => p.name === name);
  if (preset) {
    loadPreset(preset);
    populatePresetsDropdown(name);
  }
}

export function saveCurrentPreset(name) {
  if (!name || name.trim() === '') return false;

  const trimmed = name.trim();
  if (defaultPresets.some((p) => p.name === trimmed)) {
    // Can't overwrite default preset
    return false;
  }

  const reverbSlider = document.getElementById('reverb-slider');
  const delayTimeSlider = document.getElementById('delay-time-slider');
  const delayFbSlider = document.getElementById('delay-fb-slider');
  const pitchSlider = document.getElementById('pitch-slider');
  const filterTypeSelect = document.getElementById('filter-type-select');
  const distSlider = document.getElementById('dist-slider');

  const panSpeedSlider = document.getElementById('pan-speed-slider');
  const panDepthSlider = document.getElementById('pan-depth-slider');
  const resonatorTypeSelect = document.getElementById('resonator-type-select');
  const resonatorDecaySlider = document.getElementById('resonator-decay-slider');
  const formantVowelSelect = document.getElementById('formant-vowel-select');
  const formantMixSlider = document.getElementById('formant-mix-slider');
  const transientAttackSlider = document.getElementById('transient-attack-slider');
  const transientSustainSlider = document.getElementById('transient-sustain-slider');
  const freezeCheckbox = document.getElementById('spectral-freeze-checkbox');
  const freezeVolumeSlider = document.getElementById('freeze-volume-slider');
  const bitcrusherBitsSlider = document.getElementById('bitcrusher-bits-slider');
  const bitcrusherMixSlider = document.getElementById('bitcrusher-mix-slider');
  const ringmodFreqSlider = document.getElementById('ringmod-freq-slider');
  const ringmodDepthSlider = document.getElementById('ringmod-depth-slider');

  // Find current active reverb size
  let activeSize = 'bedroom';
  const activeBtn = document.querySelector('.reverb-p-btn.active');
  if (activeBtn) activeSize = activeBtn.dataset.preset;

  const newPreset = {
    name: trimmed,
    enabled: state.effectsEnabled,
    reverbWet: reverbSlider ? parseInt(reverbSlider.value) : 0,
    reverbSize: activeSize,
    delayTime: delayTimeSlider ? parseInt(delayTimeSlider.value) : 30,
    delayFeedback: delayFbSlider ? parseInt(delayFbSlider.value) : 40,
    pitchShift: pitchSlider ? parseInt(pitchSlider.value) : 0,
    filterType: filterTypeSelect ? filterTypeSelect.value : 'none',
    filterPctX: state.filterPctX,
    filterPctY: state.filterPctY,
    distortion: distSlider ? parseInt(distSlider.value) : 0,

    panSpeed: panSpeedSlider ? parseFloat(panSpeedSlider.value) : 1.0,
    panDepth: panDepthSlider ? parseInt(panDepthSlider.value) : 0,
    resonatorType: resonatorTypeSelect ? resonatorTypeSelect.value : 'none',
    resonatorDecay: resonatorDecaySlider ? parseInt(resonatorDecaySlider.value) : 50,
    formantVowel: formantVowelSelect ? formantVowelSelect.value : 'none',
    formantMix: formantMixSlider ? parseInt(formantMixSlider.value) : 0,
    transientAttack: transientAttackSlider ? parseInt(transientAttackSlider.value) : 0,
    transientSustain: transientSustainSlider ? parseInt(transientSustainSlider.value) : 0,
    spectralFreeze: freezeCheckbox ? freezeCheckbox.checked : false,
    freezeVolume: freezeVolumeSlider ? parseInt(freezeVolumeSlider.value) : 50,
    bitCrusherBits: bitcrusherBitsSlider ? parseInt(bitcrusherBitsSlider.value) : 16,
    bitCrusherMix: bitcrusherMixSlider ? parseInt(bitcrusherMixSlider.value) : 0,
    ringModFreq: ringmodFreqSlider ? parseInt(ringmodFreqSlider.value) : 200,
    ringModDepth: ringmodDepthSlider ? parseInt(ringmodDepthSlider.value) : 0
  };

  // Upsert preset configuration
  const idx = customPresets.findIndex((p) => p.name === trimmed);
  if (idx >= 0) {
    customPresets[idx] = newPreset;
  } else {
    customPresets.push(newPreset);
  }

  localStorage.setItem('joykatum_custom_presets', JSON.stringify(customPresets));
  populatePresetsDropdown(trimmed);
  return true;
}

export function navigatePreset(dir) {
  const select = document.getElementById('fx-preset-select');
  if (!select) return;

  let index = select.selectedIndex;
  if (index < 0) return;

  index += dir;
  if (index >= 0 && index < select.options.length) {
    const opt = select.options[index];
    if (opt && opt.value && opt.value !== '_custom_') {
      select.selectedIndex = index;
      select.dispatchEvent(new Event('change'));
    }
  }
}

// Initial load
loadCustomPresets();
