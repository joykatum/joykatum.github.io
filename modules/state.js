// Global Application State Module
export const state = {
  // Audio Context & Playback
  audioInitialized: false,
  effectsEnabled: false,
  currentTiltVolume: 1.0,
  currentNodes: [],
  pitchShiftSemitones: 0,
  isHeel: true,

  // Master Effects Parameters
  filterType: 'none', // 'none', 'lowpass', 'highpass'
  filterFreqValue: 2000,
  filterQValue: 1.0,
  filterPctX: 0.5,
  filterPctY: 0.5,

  // Selected Instruments & Active Selection
  currentInstrument: localStorage.getItem('currentInstrument') || 'conga',
  drumSelection: localStorage.getItem('drumSelection') || '',
  numDrums: parseInt(localStorage.getItem('numDrums') || '5'),
  leftActiveDrumId: 0, // Will be set on load based on defaults
  rightActiveDrumId: 0, // Will be set on load based on defaults

  // Controller edge trigger detection for L1/R1
  prevL1State: false,
  prevR1State: false,

  // Sequencer
  patternIntervalId: null,
  currentPatternStep: 0,
  patternBpm: 100,
  isPatternPlaying: false,

  // Gamepad & WebHID states
  lastLeftHit: 'None',
  lastRightHit: 'None',
  connectedHIDDevice: null,
  pressState: {}, // Tracks long-press timers and flags per gamepad index/button

  // New Effects State
  panSpeed: 1.0, // 0.1 to 10.0 Hz
  panDepth: 0, // 0 to 100%

  resonatorType: 'none', // 'none', 'glass', 'metal', 'ceramic'
  resonatorDecay: 50, // 0 to 100%

  formantVowel: 'none', // 'none', 'A', 'E', 'I', 'O', 'U', 'sweep'
  formantMix: 0, // 0 to 100%

  transientAttack: 0, // -100 to 100%
  transientSustain: 0, // -100 to 100%

  spectralFreeze: false,
  freezeVolume: 50, // 0 to 100%

  bitCrusherBits: 16, // 2 to 16
  bitCrusherMix: 0, // 0 to 100%

  ringModFreq: 200, // 50 to 2000 Hz
  ringModDepth: 0, // 0 to 100%

  // Custom Pattern Preview
  isPreviewPlaying: false,
  currentEditingPattern: null,

  singleDrumMode: false
};
