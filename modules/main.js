// Main App Orchestration and Bootstrapper Entry Point Module
import { state } from './state.js';
import { handleGamepadInputLoop } from './gamepad.js';
import { drumTypes } from './drumTypes.js';
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

// Resolve and set initial default active drum IDs on load
const instDef = drumTypes[state.currentInstrument] || drumTypes.conga;
state.leftActiveDrumId = instDef.defaultLeft;
state.rightActiveDrumId = instDef.defaultRight;

// Connect sequencer playback trigger back to UI visual hit effect
setOnStepTriggered((drumId, hitType) => {
  triggerHitEffect(drumId, hitType);
});

// Initial instrument select binding setup
const drumInstrumentSelect = document.getElementById('drum-instrument');
if (drumInstrumentSelect) {
  drumInstrumentSelect.value = state.currentInstrument;
  drumInstrumentSelect.addEventListener('change', (e) => {
    handleInstrumentChange(e.target.value);
  });
}

// Initial drum selection select binding setup
const drumSelectionSelect = document.getElementById('drum-selection');
if (drumSelectionSelect) {
  drumSelectionSelect.addEventListener('change', (e) => {
    state.drumSelection = e.target.value;
    localStorage.setItem('drumSelection', state.drumSelection);
    updateActiveDrumsForVisible();
    renderDrums();
  });
}

// Single Drum Mode binding setup
const singleDrumModeCheckbox = document.getElementById('single-drum-mode-checkbox');
if (singleDrumModeCheckbox) {
  singleDrumModeCheckbox.checked = state.singleDrumMode;
  singleDrumModeCheckbox.addEventListener('change', (e) => {
    state.singleDrumMode = e.target.checked;
    updateActiveDrumsForVisible();
    updateActiveDrumUI(); // just update active UI indicator
  });
}

// Rhythm Pattern Player UI Event Listeners
const patternSelect = document.getElementById('pattern-select');
if (patternSelect) {
  patternSelect.addEventListener('change', (e) => {
    updatePatternInfoBtnVisibility();
    if (e.target.value === 'none') {
      stopPattern();
    } else {
      // Auto start if playing is toggled on a specific rhythm
      if (state.isPatternPlaying) {
        stopPattern();
        startPattern();
      }
    }
  });
}

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
        // If None, auto pick the typical one for active instrument
        let autoPattern = 'tumbao';
        if (state.currentInstrument === 'bongo') autoPattern = 'martillo';
        else if (state.currentInstrument === 'djembe') autoPattern = 'kuku';
        else if (state.currentInstrument.startsWith('bata')) autoPattern = 'toque_bata';
        else if (state.currentInstrument.startsWith('pandero')) autoPattern = 'plena';
        else if (state.currentInstrument.startsWith('barril')) autoPattern = 'sica';
        else if (state.currentInstrument === 'bombo') autoPattern = 'chacarera';
        else if (state.currentInstrument === 'tabla') autoPattern = 'keharwa';
        else if (state.currentInstrument === 'darbuka') autoPattern = 'maqsum';
        else if (state.currentInstrument === 'candombe') autoPattern = 'candombe_groove';
        else if (state.currentInstrument === 'gwoka') autoPattern = 'lewoz';
        else if (state.currentInstrument === 'tanbou') autoPattern = 'beguine';
        else if (state.currentInstrument === 'chinese') autoPattern = 'festive_dagu';
        else if (state.currentInstrument === 'daiko') autoPattern = 'matsuri_taiko';
        else if (state.currentInstrument === 'bodhran') autoPattern = 'bodhran_reel';
        else if (state.currentInstrument === 'talkingdrum') autoPattern = 'tama_groove';
        else if (state.currentInstrument === 'cuica') autoPattern = 'cuica_samba';
        else if (state.currentInstrument === 'doira') autoPattern = 'doira_folk';
        else if (state.currentInstrument === 'uchiwadaiko') autoPattern = 'uchiwadaiko_kabuki';
        else if (state.currentInstrument === 'oceandrum') autoPattern = 'oceandrum_meditation';
        else if (state.currentInstrument === 'janggu') autoPattern = 'janggu_samulnori';
        else if (state.currentInstrument === 'zabumba') autoPattern = 'zabumba_baiao';
        else if (state.currentInstrument === 'mridangam') autoPattern = 'mridangam_tala';

        if (patternSelect) {
          patternSelect.value = autoPattern;
          updatePatternInfoBtnVisibility();
        }
        startPattern();
      }
    }
  });
}

const patternBpmInput = document.getElementById('pattern-bpm');
const patternBpmVal = document.getElementById('pattern-bpm-val');
if (patternBpmInput) {
  patternBpmInput.addEventListener('input', (e) => {
    state.patternBpm = parseInt(e.target.value);
    if (patternBpmVal) {
      patternBpmVal.innerText = state.patternBpm.toString();
    }
    // If playing, restart interval to apply new BPM in real-time
    if (state.isPatternPlaying) {
      stopPattern();
      startPattern();
    }
  });
}

// Run Initializers
renderDrums();
initVisualizer();
setupAudioEffectsPanel();
requestAnimationFrame(handleGamepadInputLoop);
