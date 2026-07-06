import { setupEducationalDialog, showDrumInfo, showPatternInfo } from './ui-dialogs.js';
import { setupXYPad } from './ui-xypad.js';
import { generateDrumheadSVG } from './ui-svg.js';
// UI Rendering, Animations, SVG Drums, XY Pad and Controls Module
import { state } from './state.js';
import {
  initAudio,
  updateFilter,
  effectsInputNode,
  updateReverbImpulse,
  isRecording,
  startRecording,
  stopRecording,
  getSupportedFormats
} from './audio.js';
import {
  drumTypes,
  getVisibleDrums,
  getDefaultDrumSelection,
  instrumentTouches,
  instrumentMappings
} from './drumTypes.js';
import {
  defaultPresets,
  customPresets,
  loadPreset,
  handlePresetChange,
  saveCurrentPreset,
  navigatePreset,
  populatePresetsDropdown,
  markAsCustom,
  syncEffectsFromUI
} from './presets.js';
import { startPattern, stopPattern } from './sequencer.js';
import { instrumentPatterns } from './patterns.js';
import { drumInfo, patternInfo, drumTags } from './drumInfo.js';

let selectedRegion = 'All';
let selectedType = 'All';

// Custom Pattern Creator state
export let currentEditingPattern = { name: '', stepCount: 16, steps: {} };
state.currentEditingPattern = currentEditingPattern;

export function renderPatternCreatorGrid() {
  const container = document.getElementById('pattern-grid-container');
  if (!container) return;

  const inst = state.currentInstrument;
  const instDef = drumTypes[inst];
  if (!instDef) {
    container.innerHTML =
      '<p style="color: var(--text-muted); font-size: 0.8rem; text-align: center;">No instrument configuration found</p>';
    return;
  }

  const stepCount = parseInt(document.getElementById('new-pattern-steps')?.value || '16');

  if (currentEditingPattern.stepCount !== stepCount) {
    currentEditingPattern.stepCount = stepCount;
  }

  const drums = instDef.drums;
  const sounds = Object.keys(instDef.sounds);

  let html = `<table style="width: 100%; border-collapse: collapse; font-size: 0.72rem; text-align: left;">`;

  html += `<thead><tr style="border-bottom: 1px solid rgba(255,255,255,0.08);"><th style="padding: 6px; color: var(--text-muted); font-weight: 600; width: 130px;">DRUM & SOUND</th>`;
  for (let s = 1; s <= stepCount; s++) {
    const isBeatStart = (s - 1) % 4 === 0;
    const style = isBeatStart ? 'color: #10b981; font-weight: 800;' : 'color: #64748b;';
    html += `<th style="padding: 4px; text-align: center; ${style} min-width: 20px;">${s}</th>`;
  }
  html += `</tr></thead><tbody>`;

  drums.forEach((drum) => {
    sounds.forEach((sound) => {
      html += `<tr style="border-bottom: 1px solid rgba(255,255,255,0.03);"><td style="padding: 5px 4px; font-weight: 600; color: #f1f5f9;"><span style="color: #94a3b8; font-size: 0.68rem;">${drum.label}</span> <span style="font-size: 0.6rem; padding: 1px 4px; border-radius: 4px; background: rgba(16,185,129,0.1); color: #34d399; margin-left: 2px; text-transform: uppercase;">${sound}</span></td>`;

      for (let s = 0; s < stepCount; s++) {
        const stepHits = currentEditingPattern.steps[s] || [];
        const isHit = stepHits.some((hit) => hit.drum === drum.id && hit.sound === sound);

        const isBeatStart = s % 4 === 0;
        const cellBg = isHit
          ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
          : isBeatStart
            ? 'rgba(255,255,255,0.04)'
            : 'rgba(0,0,0,0.15)';
        const cellBorder = isHit ? '1px solid #34d399' : '1px solid rgba(255,255,255,0.05)';
        const shadow = isHit ? 'box-shadow: 0 0 8px rgba(16, 185, 129, 0.4);' : '';

        html += `<td style="padding: 3px; text-align: center;">
          <button 
            class="pattern-cell" 
            data-drum="${drum.id}" 
            data-sound="${sound}" 
            data-step="${s}" 
            style="width: 20px; height: 20px; border-radius: 4px; background: ${cellBg}; border: ${cellBorder}; cursor: pointer; transition: all 0.1s ease; outline: none; ${shadow}"
          ></button>
        </td>`;
      }
      html += `</tr>`;
    });
  });

  html += `</tbody></table>`;
  container.innerHTML = html;

  const cells = container.querySelectorAll('.pattern-cell');
  cells.forEach((cell) => {
    cell.addEventListener('click', (e) => {
      initAudio();
      const drumId = parseInt(cell.getAttribute('data-drum'));
      const sound = cell.getAttribute('data-sound');
      const step = parseInt(cell.getAttribute('data-step'));

      if (!currentEditingPattern.steps[step]) {
        currentEditingPattern.steps[step] = [];
      }

      const existingIndex = currentEditingPattern.steps[step].findIndex(
        (hit) => hit.drum === drumId && hit.sound === sound
      );

      if (existingIndex >= 0) {
        currentEditingPattern.steps[step].splice(existingIndex, 1);
        if (currentEditingPattern.steps[step].length === 0) {
          delete currentEditingPattern.steps[step];
        }
      } else {
        currentEditingPattern.steps[step].push({ drum: drumId, sound: sound });

        const targetDrumObj = drums.find((d) => d.id === drumId);
        if (targetDrumObj && instDef.sounds[sound]) {
          instDef.sounds[sound](targetDrumObj);
        }
      }

      renderPatternCreatorGrid();
    });
  });
}

export function setupPatternCreator() {
  const stepSelect = document.getElementById('new-pattern-steps');
  if (stepSelect) {
    stepSelect.addEventListener('change', () => {
      renderPatternCreatorGrid();
    });
  }

  const clearBtn = document.getElementById('pattern-clear-btn');
  const nameInput = document.getElementById('new-pattern-name');
  const statusDiv = document.getElementById('pattern-creator-status');
  const previewBtn = document.getElementById('pattern-preview-btn');

  if (previewBtn) {
    previewBtn.addEventListener('click', () => {
      initAudio();
      if (state.isPreviewPlaying) {
        stopPattern();
      } else {
        startPattern(true);
      }
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      currentEditingPattern.steps = {};
      renderPatternCreatorGrid();
      if (statusDiv) {
        statusDiv.innerText = 'Cleared grid';
        statusDiv.style.color = '#94a3b8';
        setTimeout(() => {
          statusDiv.innerText = '';
        }, 1500);
      }
    });
  }

  const saveBtn = document.getElementById('pattern-save-btn');
  if (saveBtn) {
    saveBtn.addEventListener('click', () => {
      const name = nameInput ? nameInput.value.trim() : '';
      if (!name) {
        if (statusDiv) {
          statusDiv.innerText = '❌ Please enter a pattern name!';
          statusDiv.style.color = '#ef4444';
        }
        return;
      }

      const inst = state.currentInstrument;
      const stepCount = parseInt(stepSelect ? stepSelect.value : '16');

      const patternId = 'custom_' + Date.now();

      let customPatterns = {};
      const existing = localStorage.getItem('customPatterns');
      if (existing) {
        try {
          customPatterns = JSON.parse(existing);
        } catch (e) {
          console.error(e);
        }
      }

      if (!customPatterns[inst]) {
        customPatterns[inst] = {};
      }

      customPatterns[inst][patternId] = {
        name: name,
        stepCount: stepCount,
        steps: currentEditingPattern.steps
      };

      localStorage.setItem('customPatterns', JSON.stringify(customPatterns));

      if (statusDiv) {
        statusDiv.innerText = `✅ Pattern "${name}" saved locally!`;
        statusDiv.style.color = '#10b981';
        setTimeout(() => {
          statusDiv.innerText = '';
        }, 3000);
      }

      populatePatternSelectOptions();

      const select = document.getElementById('pattern-select');
      if (select) {
        select.value = `custom_${patternId}`;
        select.dispatchEvent(new Event('change'));
      }
    });
  }

  renderPatternCreatorGrid();
}

export function setupTagFilters() {
  const container = document.getElementById('tag-filters-container');
  if (!container) return;

  const regions = [
    'All',
    'Caribbean',
    'West Africa',
    'South America',
    'Middle East',
    'Asia',
    'Europe',
    'North America',
    'Modern'
  ];
  const types = [
    'All',
    'Hand',
    'Stick',
    'Frame',
    'Tuned',
    'Clay',
    'Metal',
    'Wood',
    'Shaker',
    'Folk',
    'Effects',
    'Sacred'
  ];

  const renderFilterRow = (title, items, isRegion) => {
    return `
      <div>
        <div class="pills-title" style="margin-bottom: 4px; display: flex; align-items: center; justify-content: space-between; font-size: 0.8rem; color: var(--text-muted); font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em;">
          <span>${title}</span>
        </div>
        <div class="tag-scroll-row" style="display: flex; flex-wrap: wrap; gap: 6px; padding: 6px; background: rgba(0, 0, 0, 0.3); border: 1px solid rgba(255, 255, 255, 0.05); border-radius: 8px; align-items: center;">
          ${items
            .map((item) => {
              const activeVal = isRegion ? selectedRegion : selectedType;
              const activeClass = activeVal === item ? 'active-tag-filter' : '';
              const isSelected = activeVal === item;

              let hasMatch = true;
              if (!isRegion && item !== 'All') {
                hasMatch = Object.keys(drumTypes).some((key) => {
                  const tags = drumTags[key] || { region: 'Modern', type: 'Hand', features: [] };
                  const matchesRegion = selectedRegion === 'All' || tags.region === selectedRegion;
                  const matchesType = tags.type === item || tags.features.includes(item);
                  return matchesRegion && matchesType;
                });
              }

              const fontSize = hasMatch ? '0.75rem' : '0.62rem';
              const padding = hasMatch ? '3px 8px' : '1.5px 5px';
              const opacity = hasMatch ? '1' : '0.35';

              return `
              <button 
                class="tag-filter-btn ${activeClass}" 
                data-is-region="${isRegion}" 
                data-value="${item}"
                style="background: ${isSelected ? 'rgba(16, 185, 129, 0.2)' : 'rgba(255, 255, 255, 0.03)'}; 
                       border: 1px solid ${isSelected ? '#10b981' : 'rgba(255, 255, 255, 0.08)'}; 
                       color: ${isSelected ? '#10b981' : 'var(--text)'}; 
                       font-size: ${fontSize}; 
                       font-weight: 600; 
                       padding: ${padding}; 
                       border-radius: 8px; 
                       cursor: pointer; 
                       transition: all 0.2s ease; 
                       opacity: ${opacity};
                       outline: none;"
              >${item}</button>
            `;
            })
            .join('')}
        </div>
      </div>
    `;
  };

  container.innerHTML = `
    ${renderFilterRow('🌍 Region', regions, true)}
    ${renderFilterRow('🥁 Style / Material', types, false)}
  `;

  // Bind click events
  container.querySelectorAll('.tag-filter-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      initAudio();
      const isRegion = btn.dataset.isRegion === 'true';
      const val = btn.dataset.value;

      if (isRegion) {
        selectedRegion = val;
      } else {
        selectedType = val;
      }

      setupTagFilters();
      applyFilters();
    });
  });
}

export function applyFilters() {
  const select = document.getElementById('drum-instrument');
  if (!select) return;

  const currentVal = state.currentInstrument;
  select.innerHTML = '';

  const matchingDrums = [];
  Object.keys(drumTypes).forEach((key) => {
    const drum = drumTypes[key];
    const tags = drumTags[key] || { region: 'Modern', type: 'Hand', features: [] };

    const matchesRegion = selectedRegion === 'All' || tags.region === selectedRegion;
    const matchesType = selectedType === 'All' || tags.type === selectedType || tags.features.includes(selectedType);

    if (matchesRegion && matchesType) {
      matchingDrums.push({ key, name: drum.name });
    }
  });

  matchingDrums.sort((a, b) => {
    const cleanA = a.name.replace(/^[\s\p{Emoji}\u200d]+/u, '').trim();
    const cleanB = b.name.replace(/^[\s\p{Emoji}\u200d]+/u, '').trim();
    return cleanA.localeCompare(cleanB, undefined, { numeric: true, sensitivity: 'base' });
  });

  matchingDrums.forEach((d) => {
    const opt = document.createElement('option');
    opt.value = d.key;
    opt.textContent = d.name;
    if (d.key === currentVal) {
      opt.selected = true;
    }
    select.appendChild(opt);
  });

  const stillHasCurrent = matchingDrums.some((d) => d.key === currentVal);
  if (!stillHasCurrent && matchingDrums.length > 0) {
    const firstMatch = matchingDrums[0].key;
    select.value = firstMatch;
    handleInstrumentChange(firstMatch);
  } else if (matchingDrums.length === 0) {
    const opt = document.createElement('option');
    opt.value = '';
    opt.textContent = 'No matching drums';
    opt.disabled = true;
    opt.selected = true;
    select.appendChild(opt);
  } else {
    select.value = currentVal;
  }

  // Update dynamic filter results summary under the filter screen
  const summaryContainer = document.getElementById('filter-results-summary');
  if (summaryContainer) {
    summaryContainer.innerHTML = '';

    // Create total matching drums count display
    const countEl = document.createElement('div');
    countEl.style.display = 'flex';
    countEl.style.justifyContent = 'space-between';
    countEl.style.alignItems = 'center';
    countEl.style.fontSize = '0.85rem';
    countEl.style.fontWeight = '700';
    countEl.style.color = 'var(--text)';

    const countLabel = document.createElement('span');
    countLabel.innerText = 'TOTAL MATCHING DRUMS:';
    countLabel.style.color = 'var(--text-muted)';
    countLabel.style.fontSize = '0.72rem';
    countLabel.style.letterSpacing = '0.05em';

    const countVal = document.createElement('span');
    countVal.innerText = matchingDrums.length;
    countVal.style.color = '#10b981';
    countVal.style.fontSize = '1.1rem';

    countEl.appendChild(countLabel);
    countEl.appendChild(countVal);
    summaryContainer.appendChild(countEl);

    // If there are fewer than 7 matching drums, list them all alphabetically
    if (matchingDrums.length < 7 && matchingDrums.length > 0) {
      const listContainer = document.createElement('div');
      listContainer.style.display = 'flex';
      listContainer.style.flexDirection = 'column';
      listContainer.style.gap = '6px';
      listContainer.style.marginTop = '8px';

      const listTitle = document.createElement('div');
      listTitle.innerText = 'MATCHING INSTRUMENTS:';
      listTitle.style.fontSize = '0.65rem';
      listTitle.style.color = 'var(--text-muted)';
      listTitle.style.fontWeight = '700';
      listTitle.style.letterSpacing = '0.05em';
      listContainer.appendChild(listTitle);

      const itemsGrid = document.createElement('div');
      itemsGrid.style.display = 'flex';
      itemsGrid.style.flexDirection = 'column';
      itemsGrid.style.gap = '4px';

      matchingDrums.forEach((d) => {
        const itemEl = document.createElement('div');
        itemEl.style.fontSize = '0.75rem';
        itemEl.style.padding = '6px 10px';
        itemEl.style.background = 'rgba(255, 255, 255, 0.03)';
        itemEl.style.border = '1px solid rgba(255, 255, 255, 0.06)';
        itemEl.style.borderRadius = '6px';
        itemEl.style.color = '#f1f5f9';
        itemEl.style.fontWeight = '500';
        itemEl.style.display = 'flex';
        itemEl.style.alignItems = 'center';
        itemEl.style.justifyContent = 'space-between';
        itemEl.style.cursor = 'pointer';
        itemEl.style.transition = 'all 0.15s ease';

        if (d.key === state.currentInstrument) {
          itemEl.style.background = 'rgba(16, 185, 129, 0.1)';
          itemEl.style.borderColor = 'rgba(16, 185, 129, 0.3)';
          itemEl.style.color = '#34d399';
          itemEl.style.fontWeight = '700';
        }

        itemEl.addEventListener('mouseenter', () => {
          if (d.key !== state.currentInstrument) {
            itemEl.style.background = 'rgba(255, 255, 255, 0.06)';
            itemEl.style.borderColor = 'rgba(255, 255, 255, 0.12)';
          }
        });
        itemEl.addEventListener('mouseleave', () => {
          if (d.key !== state.currentInstrument) {
            itemEl.style.background = 'rgba(255, 255, 255, 0.03)';
            itemEl.style.borderColor = 'rgba(255, 255, 255, 0.06)';
          }
        });

        itemEl.addEventListener('click', () => {
          const select = document.getElementById('drum-instrument');
          if (select) {
            select.value = d.key;
            handleInstrumentChange(d.key);
            applyFilters();
          }
        });

        const nameSpan = document.createElement('span');
        nameSpan.innerText = d.name;
        itemEl.appendChild(nameSpan);

        if (d.key === state.currentInstrument) {
          const activeDot = document.createElement('span');
          activeDot.style.width = '6px';
          activeDot.style.height = '6px';
          activeDot.style.borderRadius = '50%';
          activeDot.style.background = '#34d399';
          activeDot.style.boxShadow = '0 0 8px #10b981';
          itemEl.appendChild(activeDot);
        }

        itemsGrid.appendChild(itemEl);
      });

      listContainer.appendChild(itemsGrid);
      summaryContainer.appendChild(listContainer);
    }
  }
}

// Trigger particle feedback floating upwards & drum body glow
export function triggerHitEffect(drumId, hitType) {
  const wrapper = document.getElementById(`drum-${drumId}`);
  if (!wrapper) return;

  // Create the floating text
  const textEl = document.createElement('div');
  textEl.className = 'floating-hit-text';

  // Resolve custom shortName from instrumentTouches or format hitType nicely (no underscores, friendly heel/toe)
  const inst = state.currentInstrument;
  const touches = instrumentTouches[inst] || instrumentTouches.conga;
  const touch = touches.find((t) => t.id === hitType);
  let displayText = touch ? touch.shortName : hitType;
  displayText = displayText.replace(/_/g, ' ').replace('heeltoe', 'heel/toe').toUpperCase();

  textEl.innerText = displayText;

  // Slight offset from center
  const rx = (Math.random() - 0.5) * 35;
  const ry = (Math.random() - 0.5) * 35;
  textEl.style.left = `calc(50% + ${rx}px)`;
  textEl.style.top = `calc(50% + ${ry}px)`;

  // Color code hit types
  if (hitType === 'slap') textEl.style.color = '#ffedd5';
  else if (hitType === 'muffled') textEl.style.color = '#4ade80';
  else if (hitType === 'open') textEl.style.color = '#60a5fa';
  else if (hitType === 'bass') textEl.style.color = '#fde047';
  else textEl.style.color = '#c084fc';

  let body = wrapper.querySelector('.drum-body');
  if (state.currentInstrument === 'bata') {
    if (hitType.includes('enu')) {
      body = wrapper.querySelector('.drum-bata-big');
    } else if (hitType.includes('chacha') || hitType.includes('bell')) {
      body = wrapper.querySelector('.drum-bata-small');
    }
  }

  if (body) {
    body.appendChild(textEl);
    body.classList.add('hit-flash');
    setTimeout(() => body.classList.remove('hit-flash'), 150);
    setTimeout(() => textEl.remove(), 800);
  }

  // Trigger stroke-specific interactive canvas visuals
  if (window.StrokeVisualizer) {
    window.StrokeVisualizer.triggerStroke(drumId, hitType);
  }
}

// Populate the dynamic sub-drum selection dropdown
export function populateDrumSelectionOptions() {
  const select = document.getElementById('drum-selection');
  const container = document.getElementById('drum-selection-container');
  if (!select || !container) return;

  select.innerHTML = '';
  const inst = state.currentInstrument;

  let options = [];
  if (inst === 'conga') {
    options = [
      { value: '5', text: 'All 5 Sizes' },
      { value: '4', text: '4 (Quinto, Conga, Tumba, Super Tumba)' },
      { value: '3', text: '3 (Quinto, Conga, Tumba)' },
      { value: '2', text: '2 (Tumba, Conga)' },
      { value: '1', text: '1 (Conga)' }
    ];
  } else if (inst === 'bata') {
    options = [
      { value: 'all', text: 'All 3 Bata (L/R Controller)' },
      { value: 'okonkolo', text: 'Okónkolo (Both Heads)' },
      { value: 'itotele', text: 'Itótele (Both Heads)' },
      { value: 'iya', text: 'Iyá (Both Heads)' }
    ];
  } else if (inst === 'pandero') {
    options = [
      { value: 'all', text: 'All 3 (Requinto, Seguidor, Buleador)' },
      { value: 'requinto', text: 'Requinto Only' },
      { value: 'seguidor', text: 'Seguidor Only' },
      { value: 'buleador', text: 'Buleador Only' }
    ];
  } else if (inst === 'barril') {
    options = [
      { value: 'both', text: 'Both (Primo & Buleador)' },
      { value: 'primo', text: 'Primo Only' },
      { value: 'buleador', text: 'Buleador Only' }
    ];
  } else if (inst === 'tabla') {
    options = [
      { value: 'both', text: 'Both (Bayan & Dayan)' },
      { value: 'bayan', text: 'Bayan Only' },
      { value: 'dayan', text: 'Dayan Only' }
    ];
  } else if (inst === 'candombe') {
    options = [
      { value: 'all', text: 'All 3 (Chico, Repique, Piano)' },
      { value: 'chico', text: 'Chico Only' },
      { value: 'repique', text: 'Repique Only' },
      { value: 'piano', text: 'Piano Only' }
    ];
  } else if (inst === 'gwoka') {
    options = [
      { value: 'both', text: 'Both (Markeur & Boula)' },
      { value: 'markeur', text: 'Markeur Only' },
      { value: 'boula', text: 'Boula Only' }
    ];
  } else if (inst === 'chinese') {
    options = [
      { value: 'all', text: 'All 3 (Bangu, Tanggu, Dagu)' },
      { value: 'bangu', text: 'Bangu Only' },
      { value: 'tanggu', text: 'Tanggu Only' },
      { value: 'dagu', text: 'Dagu Only' }
    ];
  } else if (inst === 'daiko') {
    options = [
      { value: 'all', text: 'All 3 (Shime, Nagado, O-Daiko)' },
      { value: 'shime', text: 'Shime-daiko Only' },
      { value: 'nagado', text: 'Nagado-daiko Only' },
      { value: 'odaiko', text: 'O-daiko Only' }
    ];
  } else if (inst === 'janggu') {
    options = [
      { value: 'both', text: 'Both (Gungpyeon & Yeolpyeon)' },
      { value: 'gungpyeon', text: 'Gungpyeon Only (Left Bass)' },
      { value: 'yeolpyeon', text: 'Yeolpyeon Only (Right Treble)' }
    ];
  } else if (inst === 'mridangam') {
    options = [
      { value: 'both', text: 'Both (Thoppi & Valanthalai)' },
      { value: 'thoppi', text: 'Thoppi Only (Bass)' },
      { value: 'valanthalai', text: 'Valanthalai Only (Treble)' }
    ];
  } else if (inst === 'handpan') {
    options = [
      { value: 'both', text: 'Both (Ding & Tone Fields)' },
      { value: 'ding', text: 'Central Ding Only' },
      { value: 'tonefields', text: 'Tone Fields Only' }
    ];
  } else if (inst === 'dunun') {
    options = [
      { value: 'all', text: 'All 3 (Dununba, Sangban, Kenkeni)' },
      { value: 'dununba', text: 'Dununba Only' },
      { value: 'sangban', text: 'Sangban Only' },
      { value: 'kenkeni', text: 'Kenkeni Only' }
    ];
  } else if (inst === 'log_drum') {
    options = [
      { value: 'both', text: 'Both (Low & High Tongues)' },
      { value: 'low', text: 'Low Tongue Only' },
      { value: 'high', text: 'High Tongue Only' }
    ];
  } else if (inst === 'temple_blocks') {
    options = [
      { value: 'all', text: 'All 3 Blocks (L / M / H)' },
      { value: 'low', text: 'Low Block Only' },
      { value: 'mid', text: 'Mid Block Only' },
      { value: 'high', text: 'High Block Only' }
    ];
  } else if (inst === 'thongophone') {
    options = [
      { value: 'all', text: 'All 3 Pipes (L / M / H)' },
      { value: 'low', text: 'Low Pipe Only' },
      { value: 'mid', text: 'Mid Pipe Only' },
      { value: 'high', text: 'High Pipe Only' }
    ];
  } else if (inst === 'boomwhackers') {
    options = [
      { value: 'all', text: 'All 3 Tubes (L / M / H)' },
      { value: 'low', text: 'Low Tube Only' },
      { value: 'mid', text: 'Mid Tube Only' },
      { value: 'high', text: 'High Tube Only' }
    ];
  } else if (inst === 'tank_drum') {
    options = [
      { value: 'all', text: 'All 3 Tongues (L / M / H)' },
      { value: 'low', text: 'Low Tongue Only' },
      { value: 'mid', text: 'Mid Tongue Only' },
      { value: 'high', text: 'High Tongue Only' }
    ];
  } else if (inst === 'angklung') {
    options = [
      { value: 'all', text: 'All 3 Bamboo Rattles (L / M / H)' },
      { value: 'low', text: 'Low Rattle Only' },
      { value: 'mid', text: 'Mid Rattle Only' },
      { value: 'high', text: 'High Rattle Only' }
    ];
  } else if (inst === 'dhol') {
    options = [
      { value: 'both', text: 'Both (Dagga & Tilli)' },
      { value: 'dagga', text: 'Dagga Only (Bass)' },
      { value: 'tilli', text: 'Tilli Only (Treble)' }
    ];
  } else if (inst === 'agogo') {
    options = [
      { value: 'both', text: 'Both Bells (Low & High)' },
      { value: 'low', text: 'Low Bell Only' },
      { value: 'high', text: 'High Bell Only' }
    ];
  } else {
    options = [{ value: '1', text: 'Standard Solo' }];
  }

  options.sort((a, b) => a.text.localeCompare(b.text));

  options.forEach((opt) => {
    const el = document.createElement('option');
    el.value = opt.value;
    el.innerText = opt.text;
    select.appendChild(el);
  });

  const allowedValues = options.map((o) => o.value);
  if (!state.drumSelection || !allowedValues.includes(state.drumSelection)) {
    state.drumSelection = getDefaultDrumSelection(inst);
  }
  select.value = state.drumSelection;

  const instDef = drumTypes[inst];
  if (options.length > 1 && !(instDef && instDef.drums.length === 1)) {
    container.style.display = 'inline-flex';
  } else {
    container.style.display = 'none';
  }
}

// Populate the test playback buttons under the audio effects dialog
export function populateTryEffectsPills() {
  const container = document.getElementById('try-effects-pills-container');
  if (!container) return;

  container.innerHTML = '';

  const titleSpan = document.createElement('span');
  titleSpan.className = 'pills-title';
  titleSpan.innerText = 'TEST PLAYBACK:';
  container.appendChild(titleSpan);

  const inst = state.currentInstrument;
  const touches = instrumentTouches[inst] || instrumentTouches.conga;

  touches.forEach((touch) => {
    const btn = document.createElement('button');
    btn.className = 'try-btn';
    btn.dataset.sound = touch.id;
    btn.innerText = touch.shortName;

    btn.addEventListener('click', (e) => {
      e.preventDefault();
      initAudio();

      const visible = getVisibleDrums();
      if (visible.length === 0) return;
      const targetDrum = visible[0];

      const instDef = drumTypes[inst] || drumTypes.conga;
      if (instDef.sounds[touch.id]) {
        instDef.sounds[touch.id](targetDrum);
        triggerHitEffect(targetDrum.id, touch.id);
      }

      btn.style.transform = 'scale(0.95)';
      btn.style.borderColor = '#818cf8';
      btn.style.background = 'rgba(129, 140, 248, 0.3)';
      setTimeout(() => {
        btn.style.transform = '';
        btn.style.borderColor = '';
        btn.style.background = '';
      }, 150);
    });

    container.appendChild(btn);
  });
}

// Render drums dynamically inside grid
export function renderDrums() {
  const stage = document.getElementById('drums-stage');
  if (!stage) return;
  stage.innerHTML = '';

  const visible = getVisibleDrums();

  // Set dynamic count class for responsive sizing/scaling
  let extraClass = '';
  if (state.currentInstrument === 'bata') extraClass = ' two-sided-drum';
  stage.className = `drums-grid count-${visible.length}${extraClass}`;

  // Update the sub-drum dropdown selection if it's currently showing different options
  const select = document.getElementById('drum-selection');
  if (select) {
    select.value = state.drumSelection;
  }

  visible.forEach((d) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'drum-wrapper';
    wrapper.dataset.id = d.id;
    wrapper.id = `drum-${d.id}`;

    // Create an array of bodies to render. Default is 1, Bata is 2.
    const bodies = [];
    if (state.currentInstrument === 'bata') {
      const bigSize = d.sizeValue || 20;
      const smallSize = bigSize * 0.65;

      bodies.push({
        type: 'enu',
        className: 'drum-body drum-bata-big',
        width: `calc(${bigSize} * var(--drum-unit))`,
        height: `calc(${bigSize} * var(--drum-unit))`,
        svg: generateDrumheadSVG(d.id + '_big', d.color, state.currentInstrument),
        borderRadius: '50%',
        boxStyle: 'border: 6px solid #5c4033; box-shadow: inset 0 0 25px rgba(0,0,0,0.6), 0 10px 25px rgba(0,0,0,0.4);'
      });

      bodies.push({
        type: 'chacha',
        className: 'drum-body drum-bata-small',
        width: `calc(${smallSize} * var(--drum-unit))`,
        height: `calc(${smallSize} * var(--drum-unit))`,
        svg: generateDrumheadSVG(d.id + '_small', d.color, state.currentInstrument),
        borderRadius: '50%',
        boxStyle: 'border: 6px solid #5c4033; box-shadow: inset 0 0 25px rgba(0,0,0,0.6), 0 10px 25px rgba(0,0,0,0.4);'
      });

      wrapper.style.display = 'flex';
      wrapper.style.flexDirection = 'column';
      wrapper.style.gap = '2vh';
    } else {
      const sizeVal = d.sizeValue || 20;
      let borderRadius = '50%';
      let boxStyle = '';
      if (state.currentInstrument === 'cajon') {
        borderRadius = '8%';
        boxStyle =
          'border: 4px solid #8b5a2b; box-shadow: inset 0 0 40px rgba(0,0,0,0.8), 0 10px 25px rgba(0,0,0,0.5);';
      } else if (state.currentInstrument === 'timbales') {
        boxStyle =
          'border: 6px solid #d4af37; box-shadow: inset 0 0 20px rgba(0,0,0,0.3), 0 10px 25px rgba(0,0,0,0.4);';
      } else if (['darbuka', 'doumbek'].includes(state.currentInstrument)) {
        boxStyle =
          'border: 8px solid #a9a9a9; box-shadow: inset 0 0 30px rgba(0,0,0,0.5), 0 10px 25px rgba(0,0,0,0.4);';
      } else if (['djembe', 'congas', 'bongos', 'bata'].includes(state.currentInstrument)) {
        boxStyle =
          'border: 6px solid #5c4033; box-shadow: inset 0 0 25px rgba(0,0,0,0.6), 0 10px 25px rgba(0,0,0,0.4);';
      } else if (state.currentInstrument === 'frame' || state.currentInstrument === 'tar') {
        boxStyle = 'border: 2px solid #deb887; box-shadow: inset 0 0 10px rgba(0,0,0,0.2), 0 5px 15px rgba(0,0,0,0.3);';
      }

      bodies.push({
        type: 'default',
        className: 'drum-body',
        width: `calc(${sizeVal} * var(--drum-unit))`,
        height: `calc(${sizeVal} * var(--drum-unit))`,
        svg: generateDrumheadSVG(d.id, d.color, state.currentInstrument),
        borderRadius,
        boxStyle
      });
    }

    bodies.forEach((b) => {
      const body = document.createElement('div');
      body.className = b.className;
      if (b.borderRadius) body.style.borderRadius = b.borderRadius;
      if (b.boxStyle) body.style.cssText += b.boxStyle;
      body.style.width = b.width;
      body.style.height = b.height;
      body.innerHTML = b.svg;

      if (b.type !== 'default') {
        body.dataset.headType = b.type;
      }

      const sectorOverlay = document.createElement('div');
      sectorOverlay.className = 'sector-overlay';

      const sectors = [
        { class: 'bass', dir: 'up', fallback: 'bass', dirLong: 'upLong' },
        { class: 'slap', dir: 'down', fallback: 'slap', dirLong: 'downLong' },
        { class: 'heeltoe', dir: 'left', fallback: 'heeltoe', dirLong: 'leftLong' },
        { class: 'open', dir: 'right', fallback: 'open', dirLong: 'rightLong' }
      ];

      sectors.forEach((secDef) => {
        const secEl = document.createElement('div');
        secEl.className = `sector sector-${secDef.class}`;

        // Custom tap handlers with tap & hold detection
        let pressTimer = null;
        let pressStart = 0;
        let isHolding = false;

        const getTouchSound = (isLong = false) => {
          const inst = state.currentInstrument;
          const mapping = instrumentMappings[inst];
          if (mapping) {
            let sideMap = mapping.left; // Default left
            if (inst === 'bata') {
              sideMap = b.type === 'enu' ? mapping.right : mapping.left;
            }
            if (
              isLong &&
              secDef.dirLong &&
              sideMap[secDef.dirLong] &&
              sideMap[secDef.dirLong] !== sideMap[secDef.dir]
            ) {
              return sideMap[secDef.dirLong];
            }
            return sideMap[secDef.dir] || secDef.fallback;
          }
          return secDef.fallback;
        };

        const hasLongPress = () => {
          const inst = state.currentInstrument;
          const mapping = instrumentMappings[inst];
          if (!mapping) return false;
          let sideMap = mapping.left;
          if (inst === 'bata') {
            sideMap = b.type === 'enu' ? mapping.right : mapping.left;
          }
          return secDef.dirLong && sideMap[secDef.dirLong] && sideMap[secDef.dirLong] !== sideMap[secDef.dir];
        };

        const triggerPlay = (soundType) => {
          const instDef = drumTypes[state.currentInstrument] || drumTypes.conga;
          let actualSound = soundType;

          if (instDef.sounds[actualSound]) {
            instDef.sounds[actualSound](d);
          }
        };

        const handlePressStart = (e) => {
          e.preventDefault();
          initAudio();
          pressStart = Date.now();
          isHolding = true;

          if (hasLongPress()) {
            // Start timer for long press trigger
            pressTimer = setTimeout(() => {
              if (isHolding) {
                const sound = getTouchSound(true);
                triggerPlay(sound);
                triggerHitEffect(d.id, sound);
                isHolding = false; // Mark fired
              }
            }, 180);
          } else {
            const sound = getTouchSound(false);
            triggerPlay(sound);
            triggerHitEffect(d.id, sound);
          }
        };

        const handlePressEnd = (e) => {
          e.preventDefault();
          if (hasLongPress()) {
            clearTimeout(pressTimer);
            if (isHolding) {
              // If released before 180ms, play standard hit!
              const sound = getTouchSound(false);
              triggerPlay(sound);
              triggerHitEffect(d.id, sound);
            }
          }
          isHolding = false;
        };

        secEl.addEventListener('mousedown', handlePressStart);
        secEl.addEventListener('touchstart', handlePressStart, { passive: false });
        secEl.addEventListener('mouseup', handlePressEnd);
        secEl.addEventListener('touchend', handlePressEnd, { passive: false });
        secEl.addEventListener('mouseleave', () => {
          clearTimeout(pressTimer);
          isHolding = false;
        });

        sectorOverlay.appendChild(secEl);
      });

      body.appendChild(sectorOverlay);
      wrapper.appendChild(body);
    });

    // Name & Button Indicator Labels under the conga
    const labelContainer = document.createElement('div');
    labelContainer.className = 'drum-label-container';

    const nameSpan = document.createElement('span');
    nameSpan.className = 'drum-name';
    nameSpan.innerText = d.label;

    labelContainer.appendChild(nameSpan);

    wrapper.appendChild(labelContainer);

    stage.appendChild(wrapper);
  });

  updateActiveDrumUI();
}

// Refresh visual active indicators and glowing states
export function updateActiveDrumUI() {
  const visibleDrums = getVisibleDrums();
  const showActiveGlow = visibleDrums.length > 2;

  document.querySelectorAll('.drum-wrapper').forEach((wrapper) => {
    const idStr = wrapper.dataset.id;
    const isLeft = showActiveGlow && idStr == state.leftActiveDrumId;
    const isRight = showActiveGlow && idStr == state.rightActiveDrumId;

    wrapper.classList.toggle('left-active', isLeft);
    wrapper.classList.toggle('right-active', isRight);

    // Dynamic Mapping Text for Active Hands (e.g. indicating it's the active drum for the hand, and L1/R1 cycles it)
    let mappingBadge = wrapper.querySelector('.dynamic-mapping');
    if (!mappingBadge) {
      mappingBadge = document.createElement('span');
      mappingBadge.className = 'drum-mapping dynamic-mapping';
      const labelContainer = wrapper.querySelector('.drum-label-container');
      if (labelContainer) labelContainer.appendChild(mappingBadge);
    }

    const visibleDrums = getVisibleDrums();
    const instDef = drumTypes[state.currentInstrument];
    const totalDrums = instDef ? instDef.drums.length : visibleDrums.length;
    const canCycle = visibleDrums.length > 2 || (visibleDrums.length > 1 && state.currentInstrument === 'bata');

    let badgeText = [];
    if (canCycle) {
      if (isLeft && isRight) badgeText.push('L/R');
      else if (isLeft) badgeText.push('L');
      else if (isRight) badgeText.push('R');
    }

    if (badgeText.length > 0) {
      mappingBadge.innerText = badgeText.join(' / ');
      mappingBadge.style.display = 'inline-block';
    } else {
      mappingBadge.style.display = 'none';
    }
  });
}

export function updateActiveDrumsForVisible() {
  const visible = getVisibleDrums();
  const instDef = drumTypes[state.currentInstrument];

  if (visible.length === 1) {
    state.leftActiveDrumId = visible[0].id;
    state.rightActiveDrumId = visible[0].id;
  } else if (visible.length >= 2) {
    if (
      instDef &&
      instDef.defaultLeft !== undefined &&
      visible.find((d) => d.id === instDef.defaultLeft) &&
      visible.find((d) => d.id === instDef.defaultRight)
    ) {
      state.leftActiveDrumId = instDef.defaultLeft;
      state.rightActiveDrumId = instDef.defaultRight;
    } else {
      // Default to middle elements if possible, or just first two
      if (visible.length === 3) {
        state.leftActiveDrumId = visible[1].id;
        state.rightActiveDrumId = visible[2].id;
      } else {
        state.leftActiveDrumId = visible[0].id;
        state.rightActiveDrumId = visible[1].id;
      }
    }
  }
}

export function handleInstrumentChange(newInst) {
  state.currentInstrument = newInst;
  localStorage.setItem('currentInstrument', state.currentInstrument);

  // Sync the dropdown value
  const select = document.getElementById('drum-instrument');
  if (select && select.value !== newInst) {
    select.value = newInst;
  }

  // Set default selection based on instrument
  state.drumSelection = getDefaultDrumSelection(state.currentInstrument);
  localStorage.setItem('drumSelection', state.drumSelection);

  // Populate dropdown options
  populateDrumSelectionOptions();

  // Set default active drums for this instrument
  updateActiveDrumsForVisible();

  // Populate test playback buttons
  populateTryEffectsPills();

  // Stop any playing pattern to avoid audio confusion
  stopPattern();

  // Populate correct patterns list and update controller mappings
  populatePatternSelectOptions();
  updateControllerCheatSheet();

  // Reset current editing pattern steps for the new instrument
  currentEditingPattern = { name: '', stepCount: 16, steps: {} };
  const nameInput = document.getElementById('new-pattern-name');
  if (nameInput) nameInput.value = '';
  renderPatternCreatorGrid();

  renderDrums();
}

export function populatePatternSelectOptions() {
  const select = document.getElementById('pattern-select');
  if (!select) return;

  select.innerHTML = '';

  // First option is always "Off"
  const offOpt = document.createElement('option');
  offOpt.value = 'none';
  offOpt.innerText = '⏹️ Off';
  select.appendChild(offOpt);

  const inst = state.currentInstrument;
  const instPatterns = instrumentPatterns[inst] || {};
  const sortedEntries = Object.entries(instPatterns).sort((a, b) => {
    const cleanA = a[1].name.replace(/^[\s\p{Emoji}\u200d]+/u, '').trim();
    const cleanB = b[1].name.replace(/^[\s\p{Emoji}\u200d]+/u, '').trim();
    return cleanA.localeCompare(cleanB, undefined, { numeric: true, sensitivity: 'base' });
  });
  sortedEntries.forEach(([patternId, pattern]) => {
    const opt = document.createElement('option');
    opt.value = patternId;
    opt.innerText = pattern.name;
    select.appendChild(opt);
  });

  // Load custom patterns from localStorage
  const customPatternsRaw = localStorage.getItem('customPatterns');
  if (customPatternsRaw) {
    try {
      const customPatterns = JSON.parse(customPatternsRaw);
      const instCustom = customPatterns[inst] || {};
      const sortedCustom = Object.entries(instCustom).sort((a, b) => {
        return a[1].name.localeCompare(b[1].name, undefined, { numeric: true, sensitivity: 'base' });
      });

      if (sortedCustom.length > 0) {
        const headerOpt = document.createElement('option');
        headerOpt.disabled = true;
        headerOpt.innerText = '─── CUSTOM RHYTHMS ───';
        select.appendChild(headerOpt);

        sortedCustom.forEach(([patternId, pattern]) => {
          const opt = document.createElement('option');
          opt.value = `custom_${patternId}`;
          opt.innerText = `⭐ ${pattern.name}`;
          select.appendChild(opt);
        });
      }
    } catch (err) {
      console.error('Error parsing custom patterns:', err);
    }
  }

  updatePatternInfoBtnVisibility();
}

export function updatePatternInfoBtnVisibility() {
  updateControllerCheatSheet();
}

export function updateControllerCheatSheet() {
  const leftEl = document.getElementById('cheat-left-hand');
  const rightEl = document.getElementById('cheat-right-hand');
  const dividerHands = document.getElementById('cheat-divider-hands');
  if (!leftEl || !rightEl) return;

  const inst = state.currentInstrument;
  const mappingObj = instrumentMappings[inst] || instrumentMappings.conga;
  const touches = instrumentTouches[inst] || instrumentTouches.conga;

  const getDirectionLabel = (mapping, direction, tList) => {
    const touchId = mapping[direction];
    const touch = tList.find((t) => t.id === touchId);
    return touch ? touch.shortName : (touchId || '').replace(/_/g, ' ').toUpperCase();
  };

  const getHandText = (mapping) => {
    const getPart = (dir) => {
      const normal = getDirectionLabel(mapping, dir, touches);
      const longKey = dir + 'Long';
      if (mapping[longKey] && mapping[longKey] !== mapping[dir]) {
        const longStr = getDirectionLabel(mapping, longKey, touches);
        return `${normal} (Hold ${longStr})`;
      }
      return normal;
    };

    const upPart = getPart('up');
    const downPart = getPart('down');
    const leftPart = getPart('left');
    const rightPart = getPart('right');

    return `↑${upPart} | ↓${downPart} | ←${leftPart} | →${rightPart}`;
  };

  const leftText = getHandText(mappingObj.left);
  const rightText = getHandText(mappingObj.right);

  if (leftText === rightText) {
    leftEl.innerHTML = leftText;
    rightEl.style.display = 'none';
    if (dividerHands) dividerHands.style.display = 'none';
  } else {
    leftEl.innerHTML = `<b>LEFT</b>: ${leftText}`;
    rightEl.innerHTML = `<b>RIGHT</b>: ${rightText}`;
    rightEl.style.display = 'inline';
    if (dividerHands) dividerHands.style.display = 'inline';
  }

  const selectedDrumNameEl = document.getElementById('footer-selected-drum-name');
  if (selectedDrumNameEl) {
    const instDef = drumTypes[state.currentInstrument];
    selectedDrumNameEl.textContent = instDef ? instDef.name.toUpperCase() : state.currentInstrument.toUpperCase();
  }
}

export function setupAudioEffectsPanel() {
  populatePresetsDropdown();

  // Initial population of selections and pills
  populateDrumSelectionOptions();
  populateTryEffectsPills();
  populatePatternSelectOptions();
  updateControllerCheatSheet();
  setupTagFilters();
  applyFilters();
  setupPatternCreator();

  // Setup Recording UI
  const formatSelect = document.getElementById('record-format-select');
  const recordBtn = document.getElementById('record-btn');
  const recordBtnText = document.getElementById('record-btn-text');

  if (formatSelect) {
    const formats = getSupportedFormats();
    formatSelect.innerHTML = '';
    formats.forEach((f) => {
      const opt = document.createElement('option');
      opt.value = f.mime;
      opt.innerText = f.label;
      formatSelect.appendChild(opt);
    });
  }

  if (recordBtn && formatSelect) {
    recordBtn.addEventListener('click', () => {
      initAudio();
      if (isRecording) {
        stopRecording();
        recordBtn.classList.remove('recording');
        recordBtnText.innerText = 'REC';
        formatSelect.disabled = false;
      } else {
        startRecording(formatSelect.value);
        recordBtn.classList.add('recording');
        recordBtnText.innerText = 'STOP';
        formatSelect.disabled = true;
      }
    });
  }

  // Toggle Effects Dialog
  const fxToggleBtn = document.getElementById('effects-toggle-btn');
  const fxCloseBtn = document.getElementById('effects-close-btn');
  const fxBackdrop = document.getElementById('effects-dialog-backdrop');

  if (fxToggleBtn && fxBackdrop) {
    fxToggleBtn.addEventListener('click', () => {
      initAudio();
      const isShowing = fxBackdrop.classList.contains('show');
      if (isShowing) {
        fxBackdrop.classList.remove('show');
        fxToggleBtn.classList.remove('active');
      } else {
        fxBackdrop.classList.add('show');
        fxToggleBtn.classList.add('active');
      }
    });
  }

  if (fxCloseBtn && fxBackdrop && fxToggleBtn) {
    fxCloseBtn.addEventListener('click', () => {
      fxBackdrop.classList.remove('show');
      fxToggleBtn.classList.remove('active');
    });
  }

  if (fxBackdrop && fxToggleBtn) {
    // Close if clicking the backdrop itself
    fxBackdrop.addEventListener('click', (e) => {
      if (e.target === fxBackdrop) {
        fxBackdrop.classList.remove('show');
        fxToggleBtn.classList.remove('active');
      }
    });
  }

  // Load first preset but disable by default so it's bypassed on startup
  loadPreset(defaultPresets[0]);
  state.effectsEnabled = false;
  const fxSection = document.getElementById('effects-section');
  const fxActiveDot = document.getElementById('fx-active-dot');
  if (fxActiveDot) fxActiveDot.classList.remove('active');

  // Handle preset select dropdown changes
  const select = document.getElementById('fx-preset-select');
  const footerSelect = document.getElementById('footer-fx-preset-select');

  const onPresetChange = (val) => {
    initAudio();
    const fxSection = document.getElementById('effects-section');
    const fxActiveDot = document.getElementById('fx-active-dot');

    if (val === 'none') {
      state.effectsEnabled = false;
      if (fxActiveDot) fxActiveDot.classList.remove('active');
    } else {
      state.effectsEnabled = true;
      if (fxActiveDot) fxActiveDot.classList.add('active');
      handlePresetChange(val);
    }

    // Sync values between selectors
    if (select && select.value !== val && val !== 'none') {
      select.value = val;
    }
    if (footerSelect && footerSelect.value !== val) {
      footerSelect.value = val;
    }
  };

  if (select) {
    select.addEventListener('change', () => {
      onPresetChange(select.value);
    });
  }

  if (footerSelect) {
    footerSelect.addEventListener('change', () => {
      onPresetChange(footerSelect.value);
    });
  }

  // Previous / Next preset navigation buttons
  const prevBtn = document.getElementById('prev-preset-btn');
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      initAudio();
      navigatePreset(-1);
    });
  }
  const nextBtn = document.getElementById('next-preset-btn');
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      initAudio();
      navigatePreset(1);
    });
  }

  // Save Preset button UI logic
  const saveBtn = document.getElementById('save-preset-btn');
  const selectWrapper = document.getElementById('preset-select-wrapper');
  const saveContainer = document.getElementById('preset-save-container');
  const nameInput = document.getElementById('custom-preset-name');
  const confirmSaveBtn = document.getElementById('confirm-save-btn');
  const cancelSaveBtn = document.getElementById('cancel-save-btn');

  if (saveBtn) {
    saveBtn.addEventListener('click', () => {
      initAudio();
      selectWrapper.style.display = 'none';
      saveContainer.style.display = 'flex';
      nameInput.value = `My FX ${document.getElementById('fx-preset-select').options.length}`;
      nameInput.focus();
    });
  }

  if (cancelSaveBtn) {
    cancelSaveBtn.addEventListener('click', () => {
      saveContainer.style.display = 'none';
      selectWrapper.style.display = 'flex';
    });
  }

  if (confirmSaveBtn) {
    confirmSaveBtn.addEventListener('click', () => {
      const name = nameInput.value.trim();
      if (name) {
        const success = saveCurrentPreset(name);
        if (success) {
          saveContainer.style.display = 'none';
          selectWrapper.style.display = 'flex';
        }
      }
    });
  }

  // Enable/Disable master effects toggle switch
  const enabledToggle = document.getElementById('effects-enabled-toggle');
  if (enabledToggle) {
    enabledToggle.addEventListener('change', () => {
      initAudio();
      state.effectsEnabled = enabledToggle.checked;
      const fxSection = document.getElementById('effects-section');
      const fxActiveDot = document.getElementById('fx-active-dot');
      if (fxSection) {
        fxSection.classList.toggle('disabled', !state.effectsEnabled);
      }
      if (fxActiveDot) {
        fxActiveDot.classList.toggle('active', state.effectsEnabled);
      }

      // Sync footer preset selector to "none" if master effects are disabled
      const footerSelect = document.getElementById('footer-fx-preset-select');
      if (!state.effectsEnabled) {
        if (footerSelect) footerSelect.value = 'none';
      } else {
        const select = document.getElementById('fx-preset-select');
        if (footerSelect && select) footerSelect.value = select.value;
      }
    });
  }

  // Map input listeners to all range sliders
  const sliders = [
    'reverb-slider',
    'delay-time-slider',
    'delay-fb-slider',
    'pitch-slider',
    'dist-slider',
    'pan-speed-slider',
    'pan-depth-slider',
    'resonator-decay-slider',
    'formant-mix-slider',
    'transient-attack-slider',
    'transient-sustain-slider',
    'freeze-volume-slider',
    'bitcrusher-bits-slider',
    'bitcrusher-mix-slider',
    'ringmod-freq-slider',
    'ringmod-depth-slider'
  ];
  sliders.forEach((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('input', () => {
        initAudio();
        syncEffectsFromUI();
        markAsCustom();
      });
    }
  });

  // Map other interactive FX elements (dropdowns, toggles)
  const extraFxElements = ['resonator-type-select', 'formant-vowel-select', 'spectral-freeze-checkbox'];
  extraFxElements.forEach((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('change', () => {
        initAudio();
        syncEffectsFromUI();
        markAsCustom();
      });
    }
  });

  // Map reverb presets row buttons
  document.querySelectorAll('.reverb-p-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      initAudio();
      document.querySelectorAll('.reverb-p-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      updateReverbImpulse(btn.dataset.preset);
      markAsCustom();
    });
  });

  // Map Filter type select dropdown
  const filterTypeSelect = document.getElementById('filter-type-select');
  if (filterTypeSelect) {
    filterTypeSelect.addEventListener('change', () => {
      initAudio();
      state.filterType = filterTypeSelect.value;
      const xyContainer = document.getElementById('xy-pad');
      if (xyContainer) {
        xyContainer.classList.toggle('disabled', state.filterType === 'none');
      }
      updateFilter();
      markAsCustom();
    });
  }

  setupXYPad();
  setupEducationalDialog();
}

// Drum Panel Dialog modal toggle behavior
const settingsToggleBtn = document.getElementById('settings-toggle-btn');
const settingsCloseBtn = document.getElementById('settings-close-btn');
const drumBackdrop = document.getElementById('drum-panel-backdrop');

if (settingsToggleBtn && drumBackdrop) {
  settingsToggleBtn.addEventListener('click', () => {
    initAudio();
    const isShowing = drumBackdrop.classList.contains('show');
    if (isShowing) {
      drumBackdrop.classList.remove('show');
      settingsToggleBtn.classList.remove('active');
    } else {
      drumBackdrop.classList.add('show');
      settingsToggleBtn.classList.add('active');
    }
  });
}

if (settingsCloseBtn && drumBackdrop && settingsToggleBtn) {
  settingsCloseBtn.addEventListener('click', () => {
    drumBackdrop.classList.remove('show');
    settingsToggleBtn.classList.remove('active');
  });
}

if (drumBackdrop && settingsToggleBtn) {
  drumBackdrop.addEventListener('click', (e) => {
    if (e.target === drumBackdrop) {
      drumBackdrop.classList.remove('show');
      settingsToggleBtn.classList.remove('active');
    }
  });
}

// Pattern Creator Dialog modal toggle behavior
const patternCreatorToggleBtn = document.getElementById('pattern-creator-toggle-btn');
const patternCreatorCloseBtn = document.getElementById('pattern-creator-close-btn');
const patternCreatorBackdrop = document.getElementById('pattern-creator-backdrop');

if (patternCreatorToggleBtn && patternCreatorBackdrop) {
  patternCreatorToggleBtn.addEventListener('click', () => {
    initAudio();
    const isShowing = patternCreatorBackdrop.classList.contains('show');
    if (isShowing) {
      patternCreatorBackdrop.classList.remove('show');
      patternCreatorToggleBtn.classList.remove('active');
      stopPattern();
    } else {
      patternCreatorBackdrop.classList.add('show');
      patternCreatorToggleBtn.classList.add('active');
      renderPatternCreatorGrid();
    }
  });
}

if (patternCreatorCloseBtn && patternCreatorBackdrop && patternCreatorToggleBtn) {
  patternCreatorCloseBtn.addEventListener('click', () => {
    patternCreatorBackdrop.classList.remove('show');
    patternCreatorToggleBtn.classList.remove('active');
    stopPattern();
  });
}

if (patternCreatorBackdrop && patternCreatorToggleBtn) {
  patternCreatorBackdrop.addEventListener('click', (e) => {
    if (e.target === patternCreatorBackdrop) {
      patternCreatorBackdrop.classList.remove('show');
      patternCreatorToggleBtn.classList.remove('active');
      stopPattern();
    }
  });
}

// Collapsible Footer controls
const footerEl = document.getElementById('cheat-sheet-footer');
const footerToggleBtn = document.getElementById('footer-toggle-btn');
const footerToggleText = document.getElementById('footer-toggle-text');
const footerToggleIcon = document.getElementById('footer-toggle-icon');

if (footerEl && footerToggleBtn) {
  const savedFooterCollapsed = localStorage.getItem('footerCollapsed');
  // Default to false (expanded) so controls are visible initially
  let isFooterCollapsed = savedFooterCollapsed === 'true';

  const applyFooterCollapsedState = () => {
    if (isFooterCollapsed) {
      footerEl.classList.add('collapsed');
      if (footerToggleText) footerToggleText.textContent = 'SHOW CONTROLS';
      if (footerToggleIcon) footerToggleIcon.textContent = '▲';
    } else {
      footerEl.classList.remove('collapsed');
      if (footerToggleText) footerToggleText.textContent = 'COLLAPSE CONTROLS';
      if (footerToggleIcon) footerToggleIcon.textContent = '▼';
    }
  };

  applyFooterCollapsedState();

  footerToggleBtn.addEventListener('click', () => {
    isFooterCollapsed = !isFooterCollapsed;
    localStorage.setItem('footerCollapsed', isFooterCollapsed.toString());
    applyFooterCollapsedState();
  });
}
