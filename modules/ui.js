import { setupEducationalDialog, showDrumInfo, showPatternInfo } from './ui-dialogs.js';
import { setupXYPad } from './ui-xypad.js';
import { generateDrumheadSVG } from './ui-svg.js';
import { buildDrumWrapper } from './drumHandler.js';
import { compareStrings } from './utils.js';
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

let selectedRegion = localStorage.getItem('selectedRegion') || 'All';
let selectedType = localStorage.getItem('selectedType') || 'All';

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

function checkTypeMatch(key, item, tags) {
  if (item === 'Multiple Sizes') {
    const drumDef = drumTypes[key];
    return !!(drumDef && drumDef.drums && drumDef.drums.length > 1);
  }
  if (item === 'Two-Headed') {
    return [
      'bata',
      'bombo',
      'candombe',
      'janggu',
      'mridangam',
      'zabumba',
      'dunun',
      'dhol',
      'snare_drum',
      'surdo',
      'alfaia',
      'davul',
      'kotsuzumi',
      'repinique',
      'talkingdrum',
      'daiko',
      'gran_cassa'
    ].includes(key);
  }
  if (item === 'Not Really a Drum') {
    return [
      'agogo',
      'bell_tree',
      'mark_tree',
      'claves',
      'vibraslap',
      'flexatone',
      'waterphone',
      'shekere',
      'chocalho',
      'temple_blocks',
      'frog_rasp',
      'spring_drum',
      'thongophone',
      'boomwhackers',
      'cabasa',
      'rainstick',
      'kokiriko',
      'guiro',
      'spoons_bones',
      'washboard',
      'angklung',
      'jaw_harp',
      'slide_whistle',
      'ratchet',
      'udu',
      'ghatam',
      'handpan',
      'steelpan'
    ].includes(key);
  }
  return tags.type === item || tags.features.includes(item);
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
    'Sacred',
    'Multiple Sizes',
    'Two-Headed',
    'Not Really a Drum',
    'Toy'
  ];

  const renderFilterRow = (title, items, isRegion) => {
    const friendlyNames = {
      Caribbean: 'Carib',
      'West Africa': 'W. Africa',
      'South America': 'S. America',
      'Middle East': 'M. East',
      'North America': 'N. America',
      'Southeast Asia': 'SE Asia',
      Mesoamerica: 'Mesoamer',
      'Multiple Sizes': 'Multi-Size',
      'Two-Headed': 'Dual-Head',
      'Not Really a Drum': 'Non-Drum',
      Effects: 'FX',
      Shaker: 'Shaker'
    };

    return `
      <div style="margin-bottom: 6px;">
        <div class="pills-title" style="margin-bottom: 4px; display: flex; align-items: center; justify-content: space-between; font-size: 0.8rem; color: var(--text-muted); font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em;">
          <span>${title}</span>
        </div>
        <div class="tag-scroll-row" style="display: flex; flex-wrap: wrap; gap: 6px; padding: 6px; background: rgba(0, 0, 0, 0.3); border: 1px solid rgba(255, 255, 255, 0.05); border-radius: 8px; align-items: center;">
          ${items
            .map((item) => {
              const activeVal = isRegion ? selectedRegion : selectedType;
              const isSelected = activeVal === item;

              let hasMatch = true;
              if (!isRegion && item !== 'All') {
                hasMatch = Object.keys(drumTypes).some((key) => {
                  const tags = drumTags[key] || { region: 'Modern', type: 'Hand', features: [] };
                  const matchesRegion = selectedRegion === 'All' || tags.region === selectedRegion;
                  const matchesType = checkTypeMatch(key, item, tags);
                  return matchesRegion && matchesType;
                });
              }

              const fontSize = hasMatch ? '0.75rem' : '0.62rem';
              const padding = hasMatch ? '3px 8px' : '1.5px 5px';
              const opacity = hasMatch ? '1' : '0.35';
              const displayName = friendlyNames[item] || item;

              return `
              <button 
                class="tag-filter-btn ${isSelected ? 'active-tag-filter' : ''}" 
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
              >${displayName}</button>
            `;
            })
            .join('')}
        </div>
      </div>
    `;
  };

  container.innerHTML = `
    ${renderFilterRow('🌍 Origin', regions, true)}
    ${renderFilterRow('🥁 Style', types, false)}
  `;

  // Bind click events
  container.querySelectorAll('.tag-filter-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      initAudio();
      const isRegion = btn.dataset.isRegion === 'true';
      const val = btn.dataset.value;

      if (isRegion) {
        selectedRegion = val;
        localStorage.setItem('selectedRegion', selectedRegion);
      } else {
        selectedType = val;
        localStorage.setItem('selectedType', selectedType);
      }

      setupTagFilters();
      applyFilters();
    });
  });
}

export function setTagFilters(region, type) {
  if (region !== undefined) {
    selectedRegion = region;
    localStorage.setItem('selectedRegion', selectedRegion);
  }
  if (type !== undefined) {
    selectedType = type;
    localStorage.setItem('selectedType', selectedType);
  }
  setupTagFilters();
  applyFilters();
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
    const matchesType = selectedType === 'All' || checkTypeMatch(key, selectedType, tags);

    if (matchesRegion && matchesType) {
      matchingDrums.push({ key, name: drum.name });
    }
  });

  matchingDrums.sort((a, b) => compareStrings(a.name, b.name));

  matchingDrums.forEach((d) => {
    const opt = document.createElement('option');
    opt.value = d.key;
    opt.textContent = d.name.replace(/^[^a-zA-Z0-9]+/, '').trim();
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

  // Update filter active button styling
  const filterBtn = document.getElementById('settings-toggle-btn');
  if (filterBtn) {
    const hasActiveFilters = selectedRegion !== 'All' || selectedType !== 'All';
    if (hasActiveFilters) {
      filterBtn.classList.add('filter-selected');
    } else {
      filterBtn.classList.remove('filter-selected');
    }
  }
}

// Trigger particle feedback floating upwards & drum body glow
export function triggerHitEffect(drumId, hitType) {
  let finalId = drumId;
  let suffix = '';
  if (
    typeof drumId === 'string' &&
    (drumId.includes('_macho') || drumId.includes('_hembra') || drumId.includes('_high') || drumId.includes('_low'))
  ) {
    const parts = drumId.split('_');
    finalId = parts[0];
    suffix = parts[1];
  }

  const wrapper = document.getElementById(`drum-${finalId}`);
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
  } else if (state.currentInstrument === 'bongo') {
    if (suffix === 'macho') {
      body = wrapper.querySelector('.drum-bongo-macho');
    } else if (suffix === 'hembra') {
      body = wrapper.querySelector('.drum-bongo-hembra');
    } else {
      body = wrapper.querySelector('.drum-bongo-macho');
    }
  } else if (state.currentInstrument === 'agogo') {
    if (suffix === 'high') {
      body = wrapper.querySelector('.drum-agogo-high');
    } else if (suffix === 'low') {
      body = wrapper.querySelector('.drum-agogo-low');
    } else {
      body = wrapper.querySelector('.drum-agogo-high');
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

function isDrumSelected(drum, inst) {
  const selection = state.drumSelection;
  if (!selection) {
    return false;
  }
  if (selection === 'all' || selection === 'both') {
    return true;
  }

  // Comma-separated parts
  const parts = selection.split(',').map((p) => p.trim());
  if (parts.includes(String(drum.id))) return true;

  // Single string fallback
  const labelLower = drum.label.toLowerCase();
  const idStr = String(drum.id).toLowerCase();
  if (labelLower.includes(selection) || idStr === selection || selection.includes(labelLower)) {
    return true;
  }

  return false;
}

// Helper to create a styled checkbox label
function createCheckbox(id, text, isChecked, onChange) {
  const label = document.createElement('label');
  label.className = 'drum-checkbox-label';
  label.style.display = 'inline-flex';
  label.style.alignItems = 'center';
  label.style.gap = '6px';
  label.style.fontSize = '0.65rem';
  label.style.fontWeight = '700';
  label.style.color = isChecked ? '#34d399' : '#94a3b8';
  label.style.background = isChecked ? 'rgba(16, 185, 129, 0.12)' : 'rgba(255, 255, 255, 0.02)';
  label.style.border = isChecked ? '1px solid rgba(16, 185, 129, 0.4)' : '1px solid rgba(255, 255, 255, 0.08)';
  label.style.padding = '4px 8px';
  label.style.borderRadius = '4px';
  label.style.cursor = 'pointer';
  label.style.userSelect = 'none';
  label.style.transition = 'all 0.15s ease';

  const input = document.createElement('input');
  input.type = 'checkbox';
  input.checked = isChecked;
  input.style.margin = '0';
  input.style.cursor = 'pointer';
  input.style.accentColor = '#10b981';

  label.appendChild(input);

  const span = document.createElement('span');
  span.innerText = text.toUpperCase();
  label.appendChild(span);

  input.addEventListener('change', (e) => {
    onChange(e.target.checked);
  });

  // Add hover effects
  label.addEventListener('mouseenter', () => {
    if (!input.checked) {
      label.style.background = 'rgba(16, 185, 129, 0.05)';
      label.style.borderColor = 'rgba(16, 185, 129, 0.2)';
      label.style.color = '#e2e8f0';
    }
  });
  label.addEventListener('mouseleave', () => {
    if (!input.checked) {
      label.style.background = 'rgba(255, 255, 255, 0.02)';
      label.style.borderColor = 'rgba(255, 255, 255, 0.08)';
      label.style.color = '#94a3b8';
    }
  });

  return { label, input };
}

// Populate the dynamic sub-drum selection checkboxes
export function populateDrumSelectionOptions() {
  const container = document.getElementById('drum-selection-container');
  if (!container) return;

  container.innerHTML = '';
  const inst = state.currentInstrument;
  const instDef = drumTypes[inst];
  if (!instDef) return;

  const drums = instDef.drums || [];
  const inseparableInstruments = ['janggu', 'mridangam', 'handpan', 'log_drum', 'dhol', 'agogo', 'tabla', 'bongo'];
  const isSeparable = drums.length > 1 && !inseparableInstruments.includes(inst);

  const singleDrumModeContainer = document.getElementById('single-drum-mode-container');

  if (isSeparable) {
    container.style.display = 'flex';
    container.innerHTML = '<span class="footer-control-label" style="width: 100%;">🎯 PICK DRUMS:</span>';
    if (singleDrumModeContainer) singleDrumModeContainer.style.display = 'flex';

    const wrapper = document.createElement('div');
    wrapper.className = 'drum-checkboxes-group';
    wrapper.style.display = 'flex';
    wrapper.style.flexDirection = 'row';
    wrapper.style.flexWrap = 'wrap';
    wrapper.style.gap = '8px';
    wrapper.style.alignItems = 'center';
    wrapper.style.width = '100%';

    // Determine checked state for each drum variant
    const drumCheckedStates = drums.map((d) => isDrumSelected(d, inst));
    const allChecked = drumCheckedStates.every(Boolean);

    // Create the "ALL" checkbox
    const allCb = createCheckbox('all', 'All', allChecked, (checked) => {
      let newSelection = '';
      if (checked) {
        newSelection = 'all';
      } else {
        newSelection = '';
      }
      state.drumSelection = newSelection;
      localStorage.setItem('drumSelection', state.drumSelection);
      updateActiveDrumsForVisible();
      renderDrums();
      populateDrumSelectionOptions(); // refresh checkbox labels and styles
    });
    wrapper.appendChild(allCb.label);

    // Create checkboxes for each drum variant
    drums.forEach((d, idx) => {
      const isChecked = drumCheckedStates[idx];
      const cb = createCheckbox(String(d.id), d.label, isChecked, (checked) => {
        const nextCheckedStates = drums.map((drum, i) => (i === idx ? checked : drumCheckedStates[i]));
        const numChecked = nextCheckedStates.filter(Boolean).length;

        let newSelection = '';
        if (numChecked === drums.length) {
          newSelection = 'all';
        } else if (numChecked === 0) {
          newSelection = '';
        } else {
          const checkedIds = [];
          drums.forEach((drum, i) => {
            if (nextCheckedStates[i]) {
              checkedIds.push(drum.id);
            }
          });
          newSelection = checkedIds.join(',');
        }

        state.drumSelection = newSelection;
        localStorage.setItem('drumSelection', state.drumSelection);
        updateActiveDrumsForVisible();
        renderDrums();
        populateDrumSelectionOptions(); // refresh checkbox labels and styles
      });
      wrapper.appendChild(cb.label);
    });

    container.appendChild(wrapper);
  } else {
    container.style.display = 'none';
    if (singleDrumModeContainer) singleDrumModeContainer.style.display = 'none';
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

  const playBtn = document.createElement('button');
  playBtn.className = 'try-btn play-pattern-btn';
  playBtn.innerText = state.isPatternPlaying ? '⏹️ STOP' : '▶️ PLAY PATTERN';
  playBtn.style.background = state.isPatternPlaying ? 'rgba(239, 68, 68, 0.2)' : 'rgba(16, 185, 129, 0.2)';
  playBtn.style.borderColor = state.isPatternPlaying ? '#ef4444' : '#10b981';
  playBtn.style.color = state.isPatternPlaying ? '#fca5a5' : '#6ee7b7';

  playBtn.addEventListener('click', (e) => {
    e.preventDefault();
    initAudio();
    if (state.isPatternPlaying) {
      stopPattern();
      playBtn.innerText = '▶️ PLAY PATTERN';
      playBtn.style.background = 'rgba(16, 185, 129, 0.2)';
      playBtn.style.borderColor = '#10b981';
      playBtn.style.color = '#6ee7b7';
    } else {
      startPattern(false); // play pattern
      playBtn.innerText = '⏹️ STOP';
      playBtn.style.background = 'rgba(239, 68, 68, 0.2)';
      playBtn.style.borderColor = '#ef4444';
      playBtn.style.color = '#fca5a5';
    }
  });
  container.appendChild(playBtn);

  touches.forEach((touch) => {
    const btn = document.createElement('button');
    btn.className = 'try-btn';
    btn.dataset.sound = touch.id;
    btn.innerText = touch.label.replace(/\s*\(.*?\)/g, '').trim();
    if (touch.description) {
      btn.title = touch.description.replace(/\s*\(.*?\)/g, '').trim();
    }

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

  if (visible.length === 0) {
    stage.className = 'drums-grid count-0';
    stage.innerHTML = '<div class="no-drums-selected-msg">No drums selected</div>';
    return;
  }

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
    const wrapper = buildDrumWrapper(d);
    stage.appendChild(wrapper);
  });

  updateActiveDrumUI();
}

// Refresh visual active indicators and glowing states
export function updateActiveDrumUI() {
  const visibleDrums = getVisibleDrums();
  const showActiveGlow = visibleDrums.length > 2 || (visibleDrums.length > 1 && state.singleDrumMode);

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
    const canCycle =
      visibleDrums.length > 2 ||
      (visibleDrums.length > 1 && state.currentInstrument === 'bata') ||
      (visibleDrums.length > 1 && state.singleDrumMode);

    let badgeText = [];
    if (canCycle) {
      if (isLeft && isRight) badgeText.push('L1/q / R1/p');
      else if (isLeft) badgeText.push('L1/q');
      else if (isRight) badgeText.push('R1/p');
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

  if (visible.length === 1 || state.singleDrumMode) {
    let targetId = visible[0].id;
    if (
      visible.length > 1 &&
      instDef &&
      instDef.defaultLeft !== undefined &&
      visible.find((d) => d.id === instDef.defaultLeft)
    ) {
      targetId = instDef.defaultLeft;
    }
    state.leftActiveDrumId = targetId;
    state.rightActiveDrumId = targetId;
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
  initAudio();
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
  const sortedEntries = Object.entries(instPatterns).sort((a, b) => compareStrings(a[1].name, b[1].name));
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
      const sortedCustom = Object.entries(instCustom).sort((a, b) => compareStrings(a[1].name, b[1].name));

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

  // Restore saved pattern for this instrument
  const savedPattern = localStorage.getItem(`selectedPattern_${inst}`) || localStorage.getItem('selectedPattern');
  if (savedPattern && select.querySelector(`option[value="${savedPattern}"]`)) {
    select.value = savedPattern;
  } else {
    select.value = 'none';
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
    if (touch) {
      return touch.label.replace(/\s*\(.*?\)/g, '').trim();
    }
    return (touchId || '').replace(/_/g, ' ').toUpperCase();
  };

  const getHandText = (mapping) => {
    const getPart = (dir) => {
      const normal = getDirectionLabel(mapping, dir, touches);
      const longKey = dir + 'Long';
      if (mapping[longKey] && mapping[longKey] !== mapping[dir]) {
        const longStr = getDirectionLabel(mapping, longKey, touches);
        return `${normal} [ Hold : ${longStr} ]`;
      }
      return normal;
    };

    const dirs = ['up', 'down', 'left', 'right'];
    const parts = {
      up: getPart('up'),
      down: getPart('down'),
      left: getPart('left'),
      right: getPart('right')
    };

    // Group directions by their formatted part text
    const groups = {};
    dirs.forEach((d) => {
      const p = parts[d];
      if (!p || p.trim() === '') return;
      if (!groups[p]) {
        groups[p] = [];
      }
      groups[p].push(d);
    });

    const syms = {
      up: '↑',
      down: '↓',
      left: '←',
      right: '→'
    };

    const groupStrings = [];
    for (const [partText, dirList] of Object.entries(groups)) {
      if (dirList.length === 4) {
        groupStrings.push(partText);
      } else {
        const dirSyms = dirList.map((d) => syms[d]).join('');
        groupStrings.push(`${dirSyms} ${partText}`);
      }
    }

    return groupStrings.join(' &nbsp;|&nbsp; ');
  };

  const leftText = getHandText(mappingObj.left);
  const rightText = getHandText(mappingObj.right);

  const instDef = drumTypes[inst];
  const leftDrumLabel = (instDef && instDef.drums.find((d) => d.id == state.leftActiveDrumId)?.label) || 'LEFT';
  const rightDrumLabel = (instDef && instDef.drums.find((d) => d.id == state.rightActiveDrumId)?.label) || 'RIGHT';

  const lName = leftDrumLabel.split(' (')[0].toUpperCase();
  const rName = rightDrumLabel.split(' (')[0].toUpperCase();

  const areDrumsDifferent = state.leftActiveDrumId !== state.rightActiveDrumId && lName !== rName;

  const handsRow = document.getElementById('footer-hands-row');
  if (handsRow) {
    handsRow.style.display = 'flex';
  }

  if (leftText === rightText) {
    // Both hands have the exact same mapping - just show it without any hand labels
    leftEl.innerHTML = leftText;
    leftEl.style.display = 'inline';
    rightEl.innerHTML = '';
    rightEl.style.display = 'none';
    if (dividerHands) dividerHands.style.display = 'none';
  } else {
    // Different mappings (distinct hands)
    if (areDrumsDifferent) {
      leftEl.innerHTML = `<span style="opacity:0.7; font-weight: bold;">${lName}</span> ${leftText}`;
      rightEl.innerHTML = `<span style="opacity:0.7; font-weight: bold;">${rName}</span> ${rightText}`;
    } else {
      leftEl.innerHTML = `<span style="opacity:0.7; font-weight: bold;">LEFT</span> ${leftText}`;
      rightEl.innerHTML = `<span style="opacity:0.7; font-weight: bold;">RIGHT</span> ${rightText}`;
    }
    leftEl.style.display = 'inline';
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

  if (formatSelect) {
    const formats = getSupportedFormats().sort((a, b) => compareStrings(a.label, b.label));
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
      const recordIconSvg = document.getElementById('record-icon-svg');
      if (isRecording) {
        stopRecording();
        recordBtn.classList.remove('recording');
        if (recordIconSvg) {
          recordIconSvg.innerHTML = '<circle cx="12" cy="12" r="8"></circle>';
        }
        formatSelect.disabled = false;
      } else {
        startRecording(formatSelect.value);
        recordBtn.classList.add('recording');
        if (recordIconSvg) {
          recordIconSvg.innerHTML = '<rect x="4" y="4" width="16" height="16" rx="2"></rect>';
        }
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
      if (footerToggleText) footerToggleText.textContent = 'JoyKaTum | SHOW CONTROLS';
      if (footerToggleIcon) footerToggleIcon.textContent = '▲';
    } else {
      footerEl.classList.remove('collapsed');
      if (footerToggleText) footerToggleText.textContent = 'JoyKaTum | COLLAPSE CONTROLS';
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
