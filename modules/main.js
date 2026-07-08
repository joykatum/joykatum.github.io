// Main App Orchestration and Bootstrapper Entry Point Module
import { state } from './state.js';
import { handleGamepadInputLoop } from './gamepad.js';
import { drumTypes } from './drumTypes.js';
import { CONFIG } from './config.js';
import {
  renderDrums,
  setupAudioEffectsPanel,
  handleInstrumentChange,
  triggerHitEffect,
  updateActiveDrumsForVisible,
  updatePatternInfoBtnVisibility,
  updateActiveDrumUI
} from './ui.js';
import { startPattern, stopPattern, setOnStepTriggered } from './sequencer.js';
import { initAudio } from './audio.js';
import { initVisualizer } from './visualizer.js';

// Base Instrument Class for OO management of instrument behaviors
class BaseInstrument {
  constructor(key, typeDef) {
    this.key = key;
    this.typeDef = typeDef;
  }

  getDefaultLeft() {
    return this.typeDef.defaultLeft || 0;
  }

  getDefaultRight() {
    return this.typeDef.defaultRight || 0;
  }

  getDefaultPattern() {
    // Lookup in centralized CONFIG
    return CONFIG.DEFAULT_INSTRUMENT_PATTERNS[this.key] || 'tumbao';
  }
}

// Factory Pattern to produce specialized/standard instrument instances
class InstrumentFactory {
  static create(key) {
    const typeDef = drumTypes[key] || drumTypes.conga;
    return new BaseInstrument(key, typeDef);
  }
}

// Central Orchestrator / Controller to manage active instrument state and UI bindings
class Orchestrator {
  constructor() {
    this.currentInstrument = null;
  }

  init() {
    // Resolve initial instrument
    this.updateInstrument(state.currentInstrument);

    // Set up step triggers for sequencer
    setOnStepTriggered((drumId, hitType) => {
      triggerHitEffect(drumId, hitType);
    });

    this.setupUIBindings();
    this.runInitializers();
  }

  updateInstrument(key) {
    this.currentInstrument = InstrumentFactory.create(key);
    state.currentInstrument = key;
    state.leftActiveDrumId = this.currentInstrument.getDefaultLeft();
    state.rightActiveDrumId = this.currentInstrument.getDefaultRight();
  }

  setupUIBindings() {
    // Instrument select element binding
    const drumInstrumentSelect = document.getElementById('drum-instrument');
    if (drumInstrumentSelect) {
      drumInstrumentSelect.value = state.currentInstrument;
      drumInstrumentSelect.addEventListener('change', (e) => {
        this.updateInstrument(e.target.value);
        handleInstrumentChange(e.target.value);
      });
    }

    // Drum selection select element binding
    const drumSelectionSelect = document.getElementById('drum-selection');
    if (drumSelectionSelect) {
      drumSelectionSelect.addEventListener('change', (e) => {
        initAudio();
        state.drumSelection = e.target.value;
        localStorage.setItem('drumSelection', state.drumSelection);
        updateActiveDrumsForVisible();
        renderDrums();
      });
    }

    // Pattern Select binding
    const patternSelect = document.getElementById('pattern-select');
    if (patternSelect) {
      patternSelect.addEventListener('change', (e) => {
        updatePatternInfoBtnVisibility();
        // Save the pattern selection in localStorage
        localStorage.setItem(`selectedPattern_${state.currentInstrument}`, e.target.value);
        localStorage.setItem('selectedPattern', e.target.value);
        if (e.target.value === 'none') {
          stopPattern();
        } else {
          if (state.isPatternPlaying) {
            stopPattern();
            startPattern();
          }
        }
      });
    }

    // Play/Stop Button binding
    const patternPlayBtn = document.getElementById('pattern-play-btn');
    if (patternPlayBtn) {
      patternPlayBtn.addEventListener('click', () => {
        initAudio();
        if (state.isPatternPlaying) {
          stopPattern();
        } else {
          const patternVal = patternSelect ? patternSelect.value : 'none';
          if (patternVal !== 'none') {
            startPattern();
          } else {
            // Auto pick default pattern from active instrument instance
            const autoPattern = this.currentInstrument.getDefaultPattern();
            if (patternSelect) {
              patternSelect.value = autoPattern;
              updatePatternInfoBtnVisibility();
              localStorage.setItem(`selectedPattern_${state.currentInstrument}`, autoPattern);
              localStorage.setItem('selectedPattern', autoPattern);
            }
            startPattern();
          }
        }
      });
    }

    // BPM Slider binding
    const patternBpmInput = document.getElementById('pattern-bpm');
    const patternBpmVal = document.getElementById('pattern-bpm-val');
    if (patternBpmInput) {
      patternBpmInput.addEventListener('input', (e) => {
        state.patternBpm = parseInt(e.target.value);
        if (patternBpmVal) {
          patternBpmVal.innerText = state.patternBpm.toString();
        }
        if (state.isPatternPlaying) {
          stopPattern();
          startPattern();
        }
      });
    }
  }

  runInitializers() {
    renderDrums();
    initVisualizer();
    setupAudioEffectsPanel();
    requestAnimationFrame(handleGamepadInputLoop);
  }
}

// Instantiate and start the orchestrator
const orchestrator = new Orchestrator();
orchestrator.init();
