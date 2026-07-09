import { state } from './state.js';
import { drumTypes, instrumentMappings, getVisibleDrums } from './drumTypes.js';
import { initAudio } from './audio.js';
import {
  generateDrumheadSVG,
  generateBataSVG,
  generateBongoSVG,
  generateMridangamSVG,
  generateDholSVG,
  generateAgogoSVG
} from './ui-svg.js';
import { triggerHitEffect } from './ui.js';
import { CONFIG } from './config.js';

/**
 * Creates the sector overlays for a drum body to handle mouse/touch inputs.
 * @param {HTMLElement} body - The drum body container.
 * @param {object} drum - The drum model definition.
 * @param {string} headType - The head type ('default', 'enu', 'chacha').
 */
export function createSectorOverlays(body, drum, headType = 'default') {
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
          sideMap = headType === 'enu' ? mapping.right : mapping.left;
        } else if (inst === 'bongo') {
          sideMap = headType === 'macho' ? mapping.left : mapping.right;
        } else if (inst === 'agogo') {
          sideMap = headType === 'high' ? mapping.left : mapping.right;
        } else if (inst === 'mridangam') {
          sideMap = headType === 'thoppi' ? mapping.left : mapping.right;
        } else if (inst === 'dhol') {
          sideMap = headType === 'dagga' ? mapping.left : mapping.right;
        }
        if (isLong && secDef.dirLong && sideMap[secDef.dirLong] && sideMap[secDef.dirLong] !== sideMap[secDef.dir]) {
          return sideMap[secDef.dirLong];
        }
        return sideMap[secDef.dir] || '';
      }
      return '';
    };

    const hasLongPress = () => {
      const inst = state.currentInstrument;
      const mapping = instrumentMappings[inst];
      if (!mapping) return false;
      let sideMap = mapping.left;
      if (inst === 'bata') {
        sideMap = headType === 'enu' ? mapping.right : mapping.left;
      } else if (inst === 'bongo') {
        sideMap = headType === 'macho' ? mapping.left : mapping.right;
      } else if (inst === 'agogo') {
        sideMap = headType === 'high' ? mapping.left : mapping.right;
      } else if (inst === 'mridangam') {
        sideMap = headType === 'thoppi' ? mapping.left : mapping.right;
      } else if (inst === 'dhol') {
        sideMap = headType === 'dagga' ? mapping.left : mapping.right;
      }
      return secDef.dirLong && sideMap[secDef.dirLong] && sideMap[secDef.dirLong] !== sideMap[secDef.dir];
    };

    const triggerPlay = (soundType) => {
      const instDef = drumTypes[state.currentInstrument] || drumTypes.conga;
      if (instDef.sounds[soundType]) {
        let virtualDrum = drum;
        if (state.currentInstrument === 'bongo') {
          virtualDrum = Object.assign({}, drum, {
            id: headType === 'macho' ? 0 : 1,
            pitchMult: headType === 'macho' ? 1.0 : 0.7
          });
        } else if (state.currentInstrument === 'bata') {
          virtualDrum = Object.assign({}, drum, {
            id: headType === 'chacha' ? 1 : 0,
            pitchMult: headType === 'chacha' ? 1.4 : 0.9
          });
        } else if (state.currentInstrument === 'mridangam') {
          virtualDrum = Object.assign({}, drum, {
            id: headType === 'thoppi' ? 0 : 1,
            pitchMult: headType === 'thoppi' ? 0.8 : 1.4
          });
        } else if (state.currentInstrument === 'dhol') {
          virtualDrum = Object.assign({}, drum, {
            id: headType === 'dagga' ? 0 : 1,
            pitchMult: headType === 'dagga' ? 0.8 : 1.25
          });
        } else if (state.currentInstrument === 'agogo') {
          virtualDrum = Object.assign({}, drum, {
            id: headType === 'high' ? 1 : 0,
            pitchMult: headType === 'high' ? 1.35 : 1.0
          });
        }
        instDef.sounds[soundType](virtualDrum);
      }
    };

    const getHitEffectId = () => {
      if (['macho', 'hembra', 'high', 'low'].includes(headType)) {
        return `${drum.id}_${headType}`;
      }
      return drum.id;
    };

    const handlePressStart = (e) => {
      e.preventDefault();
      initAudio();
      pressStart = Date.now();
      isHolding = true;

      if (hasLongPress()) {
        pressTimer = setTimeout(() => {
          if (isHolding) {
            const sound = getTouchSound(true);
            if (sound) {
              triggerPlay(sound);
              triggerHitEffect(getHitEffectId(), sound);
            }
            isHolding = false;
          }
        }, CONFIG.GAMEPAD.LONG_PRESS_THRESHOLD);
      } else {
        const sound = getTouchSound(false);
        if (sound) {
          triggerPlay(sound);
          triggerHitEffect(getHitEffectId(), sound);
        }
      }
    };

    const handlePressEnd = (e) => {
      e.preventDefault();
      if (hasLongPress()) {
        clearTimeout(pressTimer);
        if (isHolding) {
          const sound = getTouchSound(false);
          if (sound) {
            triggerPlay(sound);
            triggerHitEffect(getHitEffectId(), sound);
          }
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
}

/**
 * Creates a drum body element with the correct SVGs and dimensions.
 * @param {object} drum - The drum model definition.
 * @param {object} bodyConfig - Config block containing styles, dimensions, and type.
 * @returns {HTMLElement} The styled drum body element.
 */
export function createDrumBody(drum, bodyConfig) {
  const body = document.createElement('div');
  body.className = bodyConfig.className;

  if (bodyConfig.boxStyle) {
    body.style.cssText = bodyConfig.boxStyle;
  }
  if (bodyConfig.borderRadius) {
    body.style.borderRadius = bodyConfig.borderRadius;
  }

  body.style.width = bodyConfig.width;
  body.style.height = bodyConfig.height;
  body.innerHTML = bodyConfig.svg;

  if (bodyConfig.type !== 'default') {
    body.dataset.headType = bodyConfig.type;
  }

  // Bind sector overlays to the drum body
  createSectorOverlays(body, drum, bodyConfig.type);

  return body;
}

/**
 * Generates body configurations for any instrument based on defaults and types.
 * @param {object} d - The drum definition.
 * @param {string} instrument - The active instrument key.
 * @returns {Array<object>} List of body configs.
 */
export function getBodyConfigs(d, instrument) {
  const configs = [];

  if (instrument === 'bata') {
    const bigSize = d.sizeValue || 20;
    const smallSize = bigSize * 0.65;

    // Enu (large head) on the left
    configs.push({
      type: 'enu',
      className: 'drum-body drum-bata-big invisible-hit-area',
      width: `calc(${bigSize} * var(--drum-unit))`,
      height: `calc(${bigSize} * var(--drum-unit))`,
      svg: '', // Handled by background SVG
      borderRadius: '50%',
      boxStyle: 'position: absolute; left: 20%; top: 50%; transform: translate(-50%, -50%);'
    });

    // Chacha (small head) on the right
    configs.push({
      type: 'chacha',
      className: 'drum-body drum-bata-small invisible-hit-area',
      width: `calc(${smallSize} * var(--drum-unit))`,
      height: `calc(${smallSize} * var(--drum-unit))`,
      svg: '', // Handled by background SVG
      borderRadius: '50%',
      boxStyle: 'position: absolute; left: 80%; top: 50%; transform: translate(-50%, -50%);'
    });
  } else if (['bongo', 'mridangam', 'dhol', 'agogo'].includes(instrument)) {
    const isMridangam = instrument === 'mridangam';
    const isDhol = instrument === 'dhol';
    const isAgogo = instrument === 'agogo';

    let bigSize = d.sizeValue || 24;
    let smallSize = bigSize * 0.75;
    if (isMridangam) {
      bigSize = 24;
      smallSize = 20;
    }
    if (isDhol) {
      bigSize = 24;
      smallSize = 21;
    }
    if (isAgogo) {
      bigSize = 22;
      smallSize = 22 * 0.78;
    }

    let leftPosLeft = '25%';
    let leftPosRight = '75%';
    if (instrument === 'bongo') {
      leftPosLeft = '25%';
      leftPosRight = '72.5%';
    } else if (instrument === 'mridangam') {
      leftPosLeft = '20%';
      leftPosRight = '80%';
    } else if (instrument === 'dhol') {
      leftPosLeft = '22.5%';
      leftPosRight = '77.5%';
    }

    let leftType = isMridangam ? 'thoppi' : isDhol ? 'dagga' : isAgogo ? 'high' : 'macho';
    let rightType = isMridangam ? 'valanthalai' : isDhol ? 'tilli' : isAgogo ? 'low' : 'hembra';
    let leftSize = isAgogo ? smallSize : isMridangam || isDhol ? bigSize : smallSize;
    let rightSize = isAgogo ? bigSize : isMridangam || isDhol ? smallSize : bigSize;

    configs.push({
      type: leftType,
      className: 'drum-body drum-' + instrument + '-' + leftType + ' invisible-hit-area',
      width: `calc(${leftSize} * var(--drum-unit))`,
      height: `calc(${leftSize} * var(--drum-unit))`,
      svg: '',
      borderRadius: isAgogo ? '30%' : '50%',
      boxStyle: `position: absolute; left: ${leftPosLeft}; top: 50%; transform: translate(-50%, -50%);`
    });

    configs.push({
      type: rightType,
      className: 'drum-body drum-' + instrument + '-' + rightType + ' invisible-hit-area',
      width: `calc(${rightSize} * var(--drum-unit))`,
      height: `calc(${rightSize} * var(--drum-unit))`,
      svg: '',
      borderRadius: isAgogo ? '30%' : '50%',
      boxStyle: `position: absolute; left: ${leftPosRight}; top: 50%; transform: translate(-50%, -50%);`
    });
  } else {
    const sizeVal = d.sizeValue || 20;
    let borderRadius = '50%';
    let boxStyle = '';

    if (instrument === 'cajon') {
      borderRadius = '8%';
    }

    configs.push({
      type: 'default',
      className: 'drum-body',
      width: `calc(${sizeVal} * var(--drum-unit))`,
      height: `calc(${sizeVal} * var(--drum-unit))`,
      svg: generateDrumheadSVG(d.id, d.color, instrument),
      borderRadius,
      boxStyle
    });
  }

  return configs;
}

/**
 * Builds the complete DOM element wrapper for a drum, including any label tags.
 * @param {object} d - The drum definition model.
 * @returns {HTMLElement} The complete drum wrapper DOM element.
 */
export function buildDrumWrapper(d) {
  const wrapper = document.createElement('div');
  wrapper.className = 'drum-wrapper';
  wrapper.dataset.id = d.id;
  wrapper.id = `drum-${d.id}`;

  const instrument = state.currentInstrument;

  if (['bata', 'bongo', 'mridangam', 'dhol', 'agogo'].includes(instrument)) {
    wrapper.style.display = 'block';
    wrapper.style.position = 'relative';
    const bigSize = d.sizeValue || 20;

    // Set custom property for CSS to use
    wrapper.style.setProperty('--drum-size-val', bigSize);

    // Add graphics container so we can rotate it without rotating labels
    const graphicsContainer = document.createElement('div');
    graphicsContainer.className = 'drum-graphics-container';
    graphicsContainer.style.position = 'absolute';
    graphicsContainer.style.top = '0';
    graphicsContainer.style.left = '0';
    graphicsContainer.style.width = '100%';
    graphicsContainer.style.height = '100%';

    // Add the full SVG as a background layer
    const bgSvg = document.createElement('div');
    bgSvg.className = instrument + '-full-bg';
    bgSvg.style.position = 'absolute';
    bgSvg.style.top = '0';
    bgSvg.style.left = '0';
    bgSvg.style.width = '100%';
    bgSvg.style.height = '100%';
    bgSvg.style.zIndex = '0';

    if (instrument === 'bata') bgSvg.innerHTML = generateBataSVG(d.id, d.color);
    else if (instrument === 'bongo') bgSvg.innerHTML = generateBongoSVG(d.id, d.color);
    else if (instrument === 'mridangam') bgSvg.innerHTML = generateMridangamSVG(d.id, d.color);
    else if (instrument === 'dhol') bgSvg.innerHTML = generateDholSVG(d.id, d.color);
    else if (instrument === 'agogo') bgSvg.innerHTML = generateAgogoSVG(d.id, d.color);

    graphicsContainer.appendChild(bgSvg);

    const configs = getBodyConfigs(d, instrument);
    configs.forEach((cfg) => {
      const bodyEl = createDrumBody(d, cfg);
      graphicsContainer.appendChild(bodyEl);
    });

    wrapper.appendChild(graphicsContainer);
  } else {
    const configs = getBodyConfigs(d, instrument);
    configs.forEach((cfg) => {
      const bodyEl = createDrumBody(d, cfg);
      wrapper.appendChild(bodyEl);
    });
  }

  // Name & Button Indicator Labels under the drum
  const labelContainer = document.createElement('div');
  labelContainer.className = 'drum-label-container';
  if (['bata', 'bongo', 'mridangam', 'dhol', 'agogo'].includes(instrument)) {
    labelContainer.style.position = 'absolute';
    // Position handled by CSS now for easier media queries
    labelContainer.classList.add('two-sided-label');
  }

  const nameSpan = document.createElement('span');
  nameSpan.className = 'drum-name';

  const visibleDrums = getVisibleDrums();
  if (visibleDrums && visibleDrums.length > 1) {
    nameSpan.innerText = d.label;
    nameSpan.classList.remove('hidden');
  } else {
    nameSpan.innerText = '';
    nameSpan.classList.add('hidden');
  }

  labelContainer.appendChild(nameSpan);
  wrapper.appendChild(labelContainer);

  return wrapper;
}
