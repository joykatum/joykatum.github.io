import { instrumentPatterns } from './patterns.js';
// Rhythm Pattern Sequencer Module
import { state } from './state.js';
import { drumTypes, getVisibleDrums } from './drumTypes.js';
import { initAudio } from './audio.js';
import { CONFIG } from './config.js';

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
  const tickTime =
    (CONFIG.SEQUENCER.SECONDS_PER_MINUTE / state.patternBpm / CONFIG.SEQUENCER.SUBDIVISION) *
    CONFIG.SEQUENCER.MS_PER_SECOND; // 16th note step in ms

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

  const instDef = drumTypes[inst] || drumTypes.conga;

  const stepCount = pattern.stepCount || 16;
  const step = state.currentPatternStep % stepCount;

  const triggerHit = (drumIdx, soundType, hit) => {
    const numDrumIdx = Number(drumIdx);
    let d = visibleDrums.find((dr) => dr.id === numDrumIdx);
    if (!d) {
      d = visibleDrums[numDrumIdx % visibleDrums.length];
    }
    if (d && instDef.sounds[soundType]) {
      let virtualDrum = d;
      let finalDrumId = d.id;
      if (inst === 'bongo') {
        virtualDrum = Object.assign({}, d, {
          id: numDrumIdx === 0 ? 0 : 1,
          pitchMult: numDrumIdx === 0 ? 1.4 : 0.9
        });
        finalDrumId = `${d.id}_${numDrumIdx === 0 ? 'macho' : 'hembra'}`;
      } else if (inst === 'agogo') {
        virtualDrum = Object.assign({}, d, {
          id: numDrumIdx === 1 ? 1 : 0,
          pitchMult: numDrumIdx === 1 ? 1.35 : 1.0
        });
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
          // If no explicit velocity or accent is in the pattern, apply automatic musical phrasing/groove:
          const isDownbeat = step % 4 === 0;
          const isSyncopated = step % 2 !== 0;

          if (isDownbeat) {
            finalVelocity = 0.95;
          } else if (isSyncopated) {
            finalVelocity = 0.68; // Softer off-beats for natural lift and groove
          } else {
            finalVelocity = 0.82;
          }
        }
      }

      // Add subtle organic humanization (slight volume/velocity fluctuations)
      const humanization = (Math.random() - 0.5) * 0.08;
      finalVelocity = Math.max(0.12, Math.min(1.0, finalVelocity + humanization));

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
