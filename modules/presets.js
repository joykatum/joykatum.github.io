// Effects Presets and Synchronization Module
import { state } from './state.js';
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
    name: '👾 8-Bit Alien',
    enabled: true,
    reverbWet: 30,
    reverbSize: 'bedroom',
    delayTime: 15,
    delayFeedback: 50,
    pitchShift: 12,
    filterType: 'highpass',
    filterPctX: 0.7,
    filterPctY: 0.85,
    distortion: 65,
    panSpeed: 1,
    panDepth: 0,
    resonatorType: 'none',
    resonatorDecay: 50,
    formantVowel: 'none',
    formantMix: 0,
    transientAttack: 0,
    transientSustain: 0,
    spectralFreeze: false,
    freezeVolume: 50,
    bitCrusherBits: 16,
    bitCrusherMix: 0,
    ringModFreq: 200,
    ringModDepth: 0
  },
  {
    name: '🌌 Ambient Space Shifter',
    enabled: true,
    reverbWet: 80,
    reverbSize: 'space',
    delayTime: 75,
    delayFeedback: 65,
    pitchShift: -5,
    filterType: 'lowpass',
    filterPctX: 0.35,
    filterPctY: 0.65,
    distortion: 15,
    panSpeed: 1,
    panDepth: 0,
    resonatorType: 'none',
    resonatorDecay: 50,
    formantVowel: 'none',
    formantMix: 0,
    transientAttack: 0,
    transientSustain: 0,
    spectralFreeze: false,
    freezeVolume: 50,
    bitCrusherBits: 16,
    bitCrusherMix: 0,
    ringModFreq: 200,
    ringModDepth: 0
  },
  {
    name: '🏺 Ancient Clay Vessel',
    enabled: true,
    reverbWet: 60,
    reverbSize: 'space',
    delayTime: 20,
    delayFeedback: 10,
    pitchShift: -3,
    filterType: 'none',
    filterPctX: 0.5,
    filterPctY: 0.5,
    distortion: 0,
    panSpeed: 0.2,
    panDepth: 20,
    resonatorType: 'ceramic',
    resonatorDecay: 85,
    formantVowel: 'none',
    formantMix: 0,
    transientAttack: 0,
    transientSustain: 15,
    spectralFreeze: false,
    freezeVolume: 50,
    bitCrusherBits: 16,
    bitCrusherMix: 0,
    ringModFreq: 200,
    ringModDepth: 0
  },
  {
    name: '🗣️ Anthropomorphic Talker',
    enabled: true,
    reverbWet: 30,
    reverbSize: 'bedroom',
    delayTime: 25,
    delayFeedback: 30,
    pitchShift: 1,
    filterType: 'none',
    filterPctX: 0.5,
    filterPctY: 0.5,
    distortion: 0,
    panSpeed: 2,
    panDepth: 50,
    resonatorType: 'none',
    resonatorDecay: 50,
    formantVowel: 'sweep',
    formantMix: 85,
    transientAttack: 0,
    transientSustain: 0,
    spectralFreeze: false,
    freezeVolume: 50,
    bitCrusherBits: 16,
    bitCrusherMix: 0,
    ringModFreq: 200,
    ringModDepth: 0
  },
  {
    name: '🧪 Avant-Garde Glass',
    enabled: true,
    reverbWet: 40,
    reverbSize: 'concert',
    delayTime: 30,
    delayFeedback: 20,
    pitchShift: 4,
    filterType: 'none',
    filterPctX: 0.5,
    filterPctY: 0.5,
    distortion: 5,
    panSpeed: 0.5,
    panDepth: 40,
    resonatorType: 'glass',
    resonatorDecay: 75,
    formantVowel: 'none',
    formantMix: 0,
    transientAttack: 0,
    transientSustain: 0,
    spectralFreeze: false,
    freezeVolume: 50,
    bitCrusherBits: 16,
    bitCrusherMix: 0,
    ringModFreq: 200,
    ringModDepth: 0
  },
  {
    name: '❄️ Cosmic Freeze Drone',
    enabled: true,
    reverbWet: 80,
    reverbSize: 'space',
    delayTime: 60,
    delayFeedback: 75,
    pitchShift: -2,
    filterType: 'none',
    filterPctX: 0.5,
    filterPctY: 0.5,
    distortion: 0,
    panSpeed: 0.5,
    panDepth: 60,
    resonatorType: 'none',
    resonatorDecay: 50,
    formantVowel: 'none',
    formantMix: 0,
    transientAttack: 0,
    transientSustain: 0,
    spectralFreeze: true,
    freezeVolume: 80,
    bitCrusherBits: 16,
    bitCrusherMix: 0,
    ringModFreq: 200,
    ringModDepth: 0
  },
  {
    name: '💫 Cyber Shamanism',
    enabled: true,
    reverbWet: 50,
    reverbSize: 'space',
    delayTime: 40,
    delayFeedback: 50,
    pitchShift: -3,
    filterType: 'none',
    filterPctX: 0.5,
    filterPctY: 0.5,
    distortion: 10,
    panSpeed: 1.2,
    panDepth: 80,
    resonatorType: 'none',
    resonatorDecay: 50,
    formantVowel: 'O',
    formantMix: 65,
    transientAttack: 30,
    transientSustain: 20,
    spectralFreeze: false,
    freezeVolume: 50,
    bitCrusherBits: 16,
    bitCrusherMix: 0,
    ringModFreq: 200,
    ringModDepth: 0
  },
  {
    name: '⛪ Dreamy Cathedral',
    enabled: true,
    reverbWet: 95,
    reverbSize: 'space',
    delayTime: 40,
    delayFeedback: 45,
    pitchShift: 2,
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
    transientSustain: 0,
    spectralFreeze: false,
    freezeVolume: 50,
    bitCrusherBits: 16,
    bitCrusherMix: 0,
    ringModFreq: 200,
    ringModDepth: 0
  },
  {
    name: '🏰 Dub Castle Echo',
    enabled: true,
    reverbWet: 60,
    reverbSize: 'concert',
    delayTime: 65,
    delayFeedback: 82,
    pitchShift: -2,
    filterType: 'lowpass',
    filterPctX: 0.45,
    filterPctY: 0.6,
    distortion: 15,
    panSpeed: 1,
    panDepth: 0,
    resonatorType: 'none',
    resonatorDecay: 50,
    formantVowel: 'none',
    formantMix: 0,
    transientAttack: 0,
    transientSustain: 0,
    spectralFreeze: false,
    freezeVolume: 50,
    bitCrusherBits: 16,
    bitCrusherMix: 0,
    ringModFreq: 200,
    ringModDepth: 0
  },
  {
    name: '🍂 Gentle Wood-tap',
    enabled: true,
    reverbWet: 10,
    reverbSize: 'bedroom',
    delayTime: 10,
    delayFeedback: 0,
    pitchShift: 0,
    filterType: 'none',
    filterPctX: 0.5,
    filterPctY: 0.5,
    distortion: 0,
    panSpeed: 1,
    panDepth: 0,
    resonatorType: 'none',
    resonatorDecay: 50,
    formantVowel: 'none',
    formantMix: 0,
    transientAttack: -60,
    transientSustain: -40,
    spectralFreeze: false,
    freezeVolume: 50,
    bitCrusherBits: 16,
    bitCrusherMix: 0,
    ringModFreq: 200,
    ringModDepth: 0
  },
  {
    name: '🧊 Glacial Drone Stretched',
    enabled: true,
    reverbWet: 75,
    reverbSize: 'space',
    delayTime: 50,
    delayFeedback: 60,
    pitchShift: -4,
    filterType: 'none',
    filterPctX: 0.5,
    filterPctY: 0.5,
    distortion: 15,
    panSpeed: 0.8,
    panDepth: 50,
    resonatorType: 'metal',
    resonatorDecay: 60,
    formantVowel: 'none',
    formantMix: 0,
    transientAttack: 0,
    transientSustain: 30,
    spectralFreeze: true,
    freezeVolume: 75,
    bitCrusherBits: 16,
    bitCrusherMix: 0,
    ringModFreq: 200,
    ringModDepth: 0
  },
  {
    name: '⚡ Grit Sub-Bass',
    enabled: true,
    reverbWet: 20,
    reverbSize: 'concert',
    delayTime: 30,
    delayFeedback: 15,
    pitchShift: -8,
    filterType: 'lowpass',
    filterPctX: 0.22,
    filterPctY: 0.5,
    distortion: 90,
    panSpeed: 1,
    panDepth: 0,
    resonatorType: 'none',
    resonatorDecay: 50,
    formantVowel: 'none',
    formantMix: 0,
    transientAttack: 0,
    transientSustain: 0,
    spectralFreeze: false,
    freezeVolume: 50,
    bitCrusherBits: 16,
    bitCrusherMix: 0,
    ringModFreq: 200,
    ringModDepth: 0
  },
  {
    name: '🧱 Industrial Sheet Metal',
    enabled: true,
    reverbWet: 30,
    reverbSize: 'concert',
    delayTime: 20,
    delayFeedback: 30,
    pitchShift: -5,
    filterType: 'none',
    filterPctX: 0.5,
    filterPctY: 0.5,
    distortion: 35,
    panSpeed: 0.4,
    panDepth: 30,
    resonatorType: 'metal',
    resonatorDecay: 80,
    formantVowel: 'none',
    formantMix: 0,
    transientAttack: 50,
    transientSustain: -10,
    spectralFreeze: false,
    freezeVolume: 50,
    bitCrusherBits: 16,
    bitCrusherMix: 0,
    ringModFreq: 200,
    ringModDepth: 0
  },
  {
    name: '🎙️ Live Studio Room',
    enabled: true,
    reverbWet: 35,
    reverbSize: 'bedroom',
    delayTime: 15,
    delayFeedback: 0,
    pitchShift: 0,
    filterType: 'none',
    filterPctX: 0.5,
    filterPctY: 0.5,
    distortion: 0,
    panSpeed: 1,
    panDepth: 0,
    resonatorType: 'none',
    resonatorDecay: 50,
    formantVowel: 'none',
    formantMix: 0,
    transientAttack: 0,
    transientSustain: 0,
    spectralFreeze: false,
    freezeVolume: 50,
    bitCrusherBits: 16,
    bitCrusherMix: 0,
    ringModFreq: 200,
    ringModDepth: 0
  },
  {
    name: '🎮 Lo-Fi Resampled Dust',
    enabled: true,
    reverbWet: 20,
    reverbSize: 'bedroom',
    delayTime: 15,
    delayFeedback: 40,
    pitchShift: -1,
    filterType: 'none',
    filterPctX: 0.5,
    filterPctY: 0.5,
    distortion: 10,
    panSpeed: 1,
    panDepth: 0,
    resonatorType: 'none',
    resonatorDecay: 50,
    formantVowel: 'none',
    formantMix: 0,
    transientAttack: 0,
    transientSustain: 0,
    spectralFreeze: false,
    freezeVolume: 50,
    bitCrusherBits: 4,
    bitCrusherMix: 70,
    ringModFreq: 200,
    ringModDepth: 0
  },
  {
    name: '🌪️ Psychedelic Monsoon',
    enabled: true,
    reverbWet: 70,
    reverbSize: 'space',
    delayTime: 45,
    delayFeedback: 70,
    pitchShift: 0,
    filterType: 'none',
    filterPctX: 0.5,
    filterPctY: 0.5,
    distortion: 5,
    panSpeed: 4.5,
    panDepth: 100,
    resonatorType: 'none',
    resonatorDecay: 50,
    formantVowel: 'none',
    formantMix: 0,
    transientAttack: 10,
    transientSustain: 40,
    spectralFreeze: false,
    freezeVolume: 50,
    bitCrusherBits: 16,
    bitCrusherMix: 0,
    ringModFreq: 200,
    ringModDepth: 0
  },
  {
    name: '🌀 Psychedelic Phaser',
    enabled: true,
    reverbWet: 45,
    reverbSize: 'concert',
    delayTime: 35,
    delayFeedback: 45,
    pitchShift: 5,
    filterType: 'highpass',
    filterPctX: 0.65,
    filterPctY: 0.75,
    distortion: 25,
    panSpeed: 1,
    panDepth: 0,
    resonatorType: 'none',
    resonatorDecay: 50,
    formantVowel: 'none',
    formantMix: 0,
    transientAttack: 0,
    transientSustain: 0,
    spectralFreeze: false,
    freezeVolume: 50,
    bitCrusherBits: 16,
    bitCrusherMix: 0,
    ringModFreq: 200,
    ringModDepth: 0
  },
  {
    name: '🎆 Ring-Mod Sing-Song',
    enabled: true,
    reverbWet: 40,
    reverbSize: 'concert',
    delayTime: 25,
    delayFeedback: 35,
    pitchShift: 2,
    filterType: 'none',
    filterPctX: 0.5,
    filterPctY: 0.5,
    distortion: 5,
    panSpeed: 1.5,
    panDepth: 60,
    resonatorType: 'none',
    resonatorDecay: 50,
    formantVowel: 'sweep',
    formantMix: 70,
    transientAttack: 20,
    transientSustain: 10,
    spectralFreeze: false,
    freezeVolume: 50,
    bitCrusherBits: 16,
    bitCrusherMix: 0,
    ringModFreq: 150,
    ringModDepth: 40
  },
  {
    name: '📡 Sci-Fi Alien Signal',
    enabled: true,
    reverbWet: 40,
    reverbSize: 'concert',
    delayTime: 35,
    delayFeedback: 55,
    pitchShift: 3,
    filterType: 'none',
    filterPctX: 0.5,
    filterPctY: 0.5,
    distortion: 15,
    panSpeed: 2.5,
    panDepth: 70,
    resonatorType: 'none',
    resonatorDecay: 50,
    formantVowel: 'none',
    formantMix: 0,
    transientAttack: 20,
    transientSustain: 10,
    spectralFreeze: false,
    freezeVolume: 50,
    bitCrusherBits: 16,
    bitCrusherMix: 0,
    ringModFreq: 350,
    ringModDepth: 60
  },
  {
    name: '🌊 Spatial Swirl Bloom',
    enabled: true,
    reverbWet: 50,
    reverbSize: 'space',
    delayTime: 30,
    delayFeedback: 30,
    pitchShift: 0,
    filterType: 'none',
    filterPctX: 0.5,
    filterPctY: 0.5,
    distortion: 0,
    panSpeed: 1.5,
    panDepth: 85,
    resonatorType: 'none',
    resonatorDecay: 50,
    formantVowel: 'none',
    formantMix: 0,
    transientAttack: 0,
    transientSustain: 0,
    spectralFreeze: false,
    freezeVolume: 50,
    bitCrusherBits: 16,
    bitCrusherMix: 0,
    ringModFreq: 200,
    ringModDepth: 0
  },
  {
    name: '🪐 Spooky Cave',
    enabled: true,
    reverbWet: 80,
    reverbSize: 'space',
    delayTime: 55,
    delayFeedback: 70,
    pitchShift: -4,
    filterType: 'lowpass',
    filterPctX: 0.35,
    filterPctY: 0.7,
    distortion: 10,
    panSpeed: 1,
    panDepth: 0,
    resonatorType: 'none',
    resonatorDecay: 50,
    formantVowel: 'none',
    formantMix: 0,
    transientAttack: 0,
    transientSustain: 0,
    spectralFreeze: false,
    freezeVolume: 50,
    bitCrusherBits: 16,
    bitCrusherMix: 0,
    ringModFreq: 200,
    ringModDepth: 0
  },
  {
    name: '💥 Ultra-Punch Slammer',
    enabled: true,
    reverbWet: 15,
    reverbSize: 'bedroom',
    delayTime: 10,
    delayFeedback: 5,
    pitchShift: 0,
    filterType: 'none',
    filterPctX: 0.5,
    filterPctY: 0.5,
    distortion: 25,
    panSpeed: 1,
    panDepth: 0,
    resonatorType: 'none',
    resonatorDecay: 50,
    formantVowel: 'none',
    formantMix: 0,
    transientAttack: 80,
    transientSustain: -30,
    spectralFreeze: false,
    freezeVolume: 50,
    bitCrusherBits: 16,
    bitCrusherMix: 0,
    ringModFreq: 200,
    ringModDepth: 0
  },
  {
    name: '🛸 Warp-Drive Engine',
    enabled: true,
    reverbWet: 30,
    reverbSize: 'bedroom',
    delayTime: 20,
    delayFeedback: 40,
    pitchShift: 6,
    filterType: 'none',
    filterPctX: 0.5,
    filterPctY: 0.5,
    distortion: 30,
    panSpeed: 1,
    panDepth: 0,
    resonatorType: 'none',
    resonatorDecay: 50,
    formantVowel: 'none',
    formantMix: 0,
    transientAttack: 0,
    transientSustain: 0,
    spectralFreeze: false,
    freezeVolume: 50,
    bitCrusherBits: 6,
    bitCrusherMix: 40,
    ringModFreq: 1200,
    ringModDepth: 75
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

    if (isFooter) {
      const opt = document.createElement('option');
      opt.value = 'none';
      opt.innerText = '✨ No Effects (Bypass)';
      sel.appendChild(opt);
    }

    // Add default presets sorted alphabetically
    const sortedDefaults = [...defaultPresets].sort((a, b) => {
      const cleanA = a.name.replace(/^[\s\p{Emoji}\u200d]+/u, '').trim();
      const cleanB = b.name.replace(/^[\s\p{Emoji}\u200d]+/u, '').trim();
      return cleanA.localeCompare(cleanB, undefined, { numeric: true, sensitivity: 'base' });
    });

    sortedDefaults.forEach((p) => {
      const opt = document.createElement('option');
      opt.value = p.name;
      opt.innerText = p.name;
      sel.appendChild(opt);
    });

    // Add custom presets sorted alphabetically
    if (customPresets.length > 0) {
      const group = document.createElement('optgroup');
      group.label = 'SAVED PRESETS';
      const sortedCustom = [...customPresets].sort((a, b) =>
        a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: 'base' })
      );
      sortedCustom.forEach((p) => {
        const opt = document.createElement('option');
        opt.value = p.name;
        opt.innerText = `💾 ${p.name}`;
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
      opt.innerText = '✍️ Custom (Modified)';
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
      handlePresetChange(opt.value);
    }
  }
}

// Initial load
loadCustomPresets();
