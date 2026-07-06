import { instrumentPatterns } from './patterns.js';
// Rhythm Pattern Sequencer Module
import { state } from './state.js';
import { drumTypes, getVisibleDrums } from './drumTypes.js';
import { initAudio } from './audio.js';

let onStepTriggeredCallback = null;

export function setOnStepTriggered(cb) {
  onStepTriggeredCallback = cb;
}

export function startPattern(isPreview = false) {
  if (state.isPatternPlaying) {
    stopPattern();
  }
  state.isPatternPlaying = true;
  state.isPreviewPlaying = isPreview;

  const playBtn = isPreview
    ? document.getElementById('pattern-preview-btn')
    : document.getElementById('pattern-play-btn');

  if (playBtn) {
    if (isPreview) {
      playBtn.innerText = '⏹️ STOP';
      playBtn.style.background = 'linear-gradient(135deg, #ef4444 0%, #b91c1c 100%)';
      playBtn.style.borderColor = '#f87171';
    } else {
      playBtn.innerText = 'STOP';
      playBtn.style.background = 'linear-gradient(135deg, #ef4444 0%, #b91c1c 100%)';
      playBtn.style.borderColor = '#f87171';
    }
  }

  state.currentPatternStep = 0;
  const tickTime = (60 / state.patternBpm / 4) * 1000; // 16th note step in ms

  state.patternIntervalId = setInterval(() => {
    playPatternStep();
  }, tickTime);
}

export function stopPattern() {
  if (!state.isPatternPlaying) return;
  state.isPatternPlaying = false;

  if (state.patternIntervalId) {
    clearInterval(state.patternIntervalId);
    state.patternIntervalId = null;
  }

  const playBtn = document.getElementById('pattern-play-btn');
  if (playBtn) {
    playBtn.innerText = 'PLAY';
    playBtn.style.background = '';
    playBtn.style.borderColor = '';
  }

  const previewBtn = document.getElementById('pattern-preview-btn');
  if (previewBtn) {
    previewBtn.innerText = '🎧 LISTEN';
    previewBtn.style.background = '';
    previewBtn.style.borderColor = '';
  }

  state.isPreviewPlaying = false;
}

export function playPatternStep() {
  const visibleDrums = getVisibleDrums();
  if (visibleDrums.length === 0) return;

  const inst = state.currentInstrument;
  let pattern = null;

  if (state.isPreviewPlaying) {
    pattern = state.currentEditingPattern;
  } else {
    const patternSelect = document.getElementById('pattern-select');
    if (!patternSelect) return;
    const patternId = patternSelect.value;
    if (patternId === 'none') {
      stopPattern();
      return;
    }

    if (patternId.startsWith('custom_')) {
      const key = patternId.substring(7);
      const customPatternsRaw = localStorage.getItem('customPatterns');
      if (customPatternsRaw) {
        try {
          const customPatterns = JSON.parse(customPatternsRaw);
          pattern = customPatterns[inst]?.[key];
        } catch (e) {
          console.error('Error reading custom pattern from storage:', e);
        }
      }
    } else {
      const instPatterns = instrumentPatterns[inst] || {};
      pattern = instPatterns[patternId];
    }
  }

  if (!pattern) return;

  const instDef = drumTypes[inst] || drumTypes.conga;

  const triggerHit = (drumIdx, soundType) => {
    let d;
    if (inst === 'conga') {
      if (drumIdx === 1) {
        // Tumba
        d = visibleDrums.find((dr) => dr.label === 'Tumba');
      } else if (drumIdx === 2) {
        // Conga
        d = visibleDrums.find((dr) => dr.label === 'Conga');
      }
    }
    if (!d) {
      d = visibleDrums[drumIdx % visibleDrums.length];
    }
    if (d && instDef.sounds[soundType]) {
      instDef.sounds[soundType](d);
      if (onStepTriggeredCallback) {
        onStepTriggeredCallback(d.id, soundType);
      }
    }
  };

  const stepCount = pattern.stepCount || 16;
  const step = state.currentPatternStep % stepCount;

  const currentStepHits = pattern.steps[step];
  if (currentStepHits) {
    currentStepHits.forEach((hit) => {
      triggerHit(hit.drum, hit.sound);
    });
  }

  state.currentPatternStep = (state.currentPatternStep + 1) % stepCount;
}
