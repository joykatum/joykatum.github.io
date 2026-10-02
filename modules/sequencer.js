import { instrumentPatterns } from './patterns.js';
// Rhythm Pattern Sequencer Module
import { state } from './state.js';
import { drumTypes, getVisibleDrums } from './drumTypes.js';
import { initAudio } from './audio.js';
import { CONFIG } from './config.js';
import { getPlayingSurface } from './playingSurface.js';

let onStepTriggeredCallback = null;
let activeSubdivision = CONFIG.SEQUENCER.SUBDIVISION;
let playbackGeneration = 0;

export function getPatternStepDuration(pattern, bpm) {
  return 60000 / bpm / (pattern?.subdivision || CONFIG.SEQUENCER.SUBDIVISION);
}

export function setOnStepTriggered(cb) {
  onStepTriggeredCallback = cb;
}

export function startPattern(isPreview = false) {
  if (state.isPatternPlaying) {
    stopPattern();
  }
  state.isPatternPlaying = true;
  const generation = ++playbackGeneration;
  state.isPreviewPlaying = isPreview;

  const playBtn = isPreview
    ? document.getElementById('pattern-preview-btn')
    : document.getElementById('pattern-play-btn');

  if (playBtn) {
    if (isPreview) {
      playBtn.innerHTML = 'STOP';
      playBtn.style.background = 'linear-gradient(135deg, #ef4444 0%, #b91c1c 100%)';
      playBtn.style.borderColor = '#f87171';
    } else {
      playBtn.innerHTML = `<svg viewBox="0 0 24 24" style="width: 14px; height: 14px; fill: currentColor;"><path d="M6 6h12v12H6z"/></svg>`;
      playBtn.style.background = 'linear-gradient(135deg, #ef4444 0%, #b91c1c 100%)';
      playBtn.style.borderColor = '#f87171';
    }
  }

  const effectsPlayBtn = document.querySelector('.play-pattern-btn');
  if (effectsPlayBtn) {
    effectsPlayBtn.innerText = 'STOP';
    effectsPlayBtn.style.background = 'rgba(239, 68, 68, 0.2)';
    effectsPlayBtn.style.borderColor = '#ef4444';
    effectsPlayBtn.style.color = '#fca5a5';
  }

  state.currentPatternStep = 0;
  const tick = () => {
    if (!state.isPatternPlaying || generation !== playbackGeneration) return;
    playPatternStep();
    if (state.isPatternPlaying) {
      state.patternIntervalId = setTimeout(tick, getPatternStepDuration({ subdivision: activeSubdivision }, state.patternBpm));
    }
  };
  // Begin on the downbeat; subsequent ticks follow the pattern's own grid.
  void initAudio().then(tick);
}

export function stopPattern() {
  if (!state.isPatternPlaying) return;
  state.isPatternPlaying = false;
  playbackGeneration++;

  if (state.patternIntervalId) {
    clearTimeout(state.patternIntervalId);
    state.patternIntervalId = null;
  }

  const playBtn = document.getElementById('pattern-play-btn');
  if (playBtn) {
    playBtn.innerHTML = `<svg viewBox="0 0 24 24" style="width: 14px; height: 14px; fill: currentColor;"><path d="M8 5v14l11-7z"/></svg>`;
    playBtn.style.background = '';
    playBtn.style.borderColor = '';
  }

  const previewBtn = document.getElementById('pattern-preview-btn');
  if (previewBtn) {
    previewBtn.innerText = 'LISTEN';
    previewBtn.style.background = '';
    previewBtn.style.borderColor = '';
  }

  const effectsPlayBtn = document.querySelector('.play-pattern-btn');
  if (effectsPlayBtn) {
    effectsPlayBtn.innerText = 'PLAY PATTERN';
    effectsPlayBtn.style.background = 'rgba(16, 185, 129, 0.2)';
    effectsPlayBtn.style.borderColor = '#10b981';
    effectsPlayBtn.style.color = '#6ee7b7';
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
  activeSubdivision = pattern.subdivision || CONFIG.SEQUENCER.SUBDIVISION;

  const instDef = drumTypes[inst] || drumTypes.conga;

  const stepCount = pattern.stepCount || 16;
  const step = state.currentPatternStep % stepCount;

  const triggerHit = (drumIdx, soundType, hit) => {
    const numDrumIdx = Number(drumIdx);
    let d = visibleDrums.find((dr) => dr.id === numDrumIdx);
    if (!d) {
      d = visibleDrums[numDrumIdx % visibleDrums.length];
    }
    if (d && instDef && instDef.sounds && instDef.sounds[soundType]) {
      let virtualDrum = getPlayingSurface(inst, d, numDrumIdx);
      let finalDrumId = d.id;
      if (inst === 'bongo') {
        finalDrumId = `${d.id}_${numDrumIdx === 0 ? 'macho' : 'hembra'}`;
      } else if (inst === 'agogo') {
        finalDrumId = `${d.id}_${numDrumIdx === 1 ? 'high' : 'low'}`;
      }

      // Calculate dynamic velocity
      let finalVelocity = hit.velocity;

      if (finalVelocity === undefined) {
        if (hit.accent === true) {
          finalVelocity = 1.0; // Strong accented strike
        } else if (hit.accent === false) {
          finalVelocity = 0.58; // Softer ghost stroke
        } else {
          finalVelocity = 0.8;
        }
      }

      finalVelocity = Math.max(0, Math.min(1.0, finalVelocity));
      if (finalVelocity === 0) return;

      instDef.sounds[soundType](virtualDrum, finalVelocity);
      if (onStepTriggeredCallback) {
        onStepTriggeredCallback(finalDrumId, soundType);
      }
    }
  };

  const currentStepHits = pattern.steps[step];
  if (currentStepHits) {
    currentStepHits.forEach((hit) => {
      triggerHit(hit.drum, hit.sound, hit);
    });
  }

  state.currentPatternStep = (state.currentPatternStep + 1) % stepCount;
}
