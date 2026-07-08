import { state } from './state.js';
import { drumTypes, instrumentMappings } from './drumTypes.js';
import { initAudio } from './audio.js';
import { generateDrumheadSVG } from './ui-svg.js';
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
        }
        if (isLong && secDef.dirLong && sideMap[secDef.dirLong] && sideMap[secDef.dirLong] !== sideMap[secDef.dir]) {
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
        sideMap = headType === 'enu' ? mapping.right : mapping.left;
      } else if (inst === 'bongo') {
        sideMap = headType === 'macho' ? mapping.left : mapping.right;
      } else if (inst === 'agogo') {
        sideMap = headType === 'high' ? mapping.left : mapping.right;
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
            pitchMult: headType === 'macho' ? 1.4 : 0.9
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
            triggerPlay(sound);
            triggerHitEffect(getHitEffectId(), sound);
            isHolding = false;
          }
        }, CONFIG.GAMEPAD.LONG_PRESS_THRESHOLD);
      } else {
        const sound = getTouchSound(false);
        triggerPlay(sound);
        triggerHitEffect(getHitEffectId(), sound);
      }
    };

    const handlePressEnd = (e) => {
      e.preventDefault();
      if (hasLongPress()) {
        clearTimeout(pressTimer);
        if (isHolding) {
          const sound = getTouchSound(false);
          triggerPlay(sound);
          triggerHitEffect(getHitEffectId(), sound);
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

  if (bodyConfig.borderRadius) {
    body.style.borderRadius = bodyConfig.borderRadius;
  }
  if (bodyConfig.boxStyle) {
    body.style.cssText += bodyConfig.boxStyle;
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

    configs.push({
      type: 'enu',
      className: 'drum-body drum-bata-big',
      width: `calc(${bigSize} * var(--drum-unit))`,
      height: `calc(${bigSize} * var(--drum-unit))`,
      svg: generateDrumheadSVG(d.id + '_big', d.color, instrument),
      borderRadius: '50%',
      boxStyle: 'border: 6px solid #5c4033; box-shadow: inset 0 0 25px rgba(0,0,0,0.6), 0 10px 25px rgba(0,0,0,0.4);'
    });

    configs.push({
      type: 'chacha',
      className: 'drum-body drum-bata-small',
      width: `calc(${smallSize} * var(--drum-unit))`,
      height: `calc(${smallSize} * var(--drum-unit))`,
      svg: generateDrumheadSVG(d.id + '_small', d.color, instrument),
      borderRadius: '50%',
      boxStyle: 'border: 6px solid #5c4033; box-shadow: inset 0 0 25px rgba(0,0,0,0.6), 0 10px 25px rgba(0,0,0,0.4);'
    });
  } else if (instrument === 'bongo') {
    const bigSize = d.sizeValue || 24;
    const smallSize = bigSize * 0.75;

    configs.push({
      type: 'macho',
      className: 'drum-body drum-bongo-macho',
      width: `calc(${smallSize} * var(--drum-unit))`,
      height: `calc(${smallSize} * var(--drum-unit))`,
      svg: generateDrumheadSVG(d.id + '_macho', 'blonde-light', 'bongo_macho'),
      borderRadius: '50%',
      boxStyle: 'border: 6px solid #5c4033; box-shadow: inset 0 0 25px rgba(0,0,0,0.6), 0 10px 25px rgba(0,0,0,0.4);'
    });

    configs.push({
      type: 'hembra',
      className: 'drum-body drum-bongo-hembra',
      width: `calc(${bigSize} * var(--drum-unit))`,
      height: `calc(${bigSize} * var(--drum-unit))`,
      svg: generateDrumheadSVG(d.id + '_hembra', 'blonde', 'bongo_hembra'),
      borderRadius: '50%',
      boxStyle: 'border: 6px solid #5c4033; box-shadow: inset 0 0 25px rgba(0,0,0,0.6), 0 10px 25px rgba(0,0,0,0.4);'
    });
  } else if (instrument === 'agogo') {
    const bigSize = d.sizeValue || 22;
    const smallSize = bigSize * 0.78;

    configs.push({
      type: 'high',
      className: 'drum-body drum-agogo-high',
      width: `calc(${smallSize} * var(--drum-unit))`,
      height: `calc(${smallSize} * var(--drum-unit))`,
      svg: generateDrumheadSVG(d.id + '_high', 'silver', 'agogo_high'),
      borderRadius: '30%',
      boxStyle: 'box-shadow: 0 10px 25px rgba(0,0,0,0.45);'
    });

    configs.push({
      type: 'low',
      className: 'drum-body drum-agogo-low',
      width: `calc(${bigSize} * var(--drum-unit))`,
      height: `calc(${bigSize} * var(--drum-unit))`,
      svg: generateDrumheadSVG(d.id + '_low', 'wood', 'agogo_low'),
      borderRadius: '30%',
      boxStyle: 'box-shadow: 0 10px 25px rgba(0,0,0,0.45);'
    });
  } else {
    const sizeVal = d.sizeValue || 20;
    let borderRadius = '50%';
    let boxStyle = '';

    if (instrument === 'cajon') {
      borderRadius = '8%';
      boxStyle = 'border: 4px solid #8b5a2b; box-shadow: inset 0 0 40px rgba(0,0,0,0.8), 0 10px 25px rgba(0,0,0,0.5);';
    } else if (instrument === 'timbales') {
      boxStyle = 'border: 6px solid #d4af37; box-shadow: inset 0 0 20px rgba(0,0,0,0.3), 0 10px 25px rgba(0,0,0,0.4);';
    } else if (['darbuka', 'doumbek'].includes(instrument)) {
      boxStyle = 'border: 8px solid #a9a9a9; box-shadow: inset 0 0 30px rgba(0,0,0,0.5), 0 10px 25px rgba(0,0,0,0.4);';
    } else if (['djembe', 'congas', 'bongos', 'bata'].includes(instrument)) {
      boxStyle = 'border: 6px solid #5c4033; box-shadow: inset 0 0 25px rgba(0,0,0,0.6), 0 10px 25px rgba(0,0,0,0.4);';
    } else if (instrument === 'frame' || instrument === 'tar') {
      boxStyle = 'border: 2px solid #deb887; box-shadow: inset 0 0 10px rgba(0,0,0,0.2), 0 5px 15px rgba(0,0,0,0.3);';
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

  if (instrument === 'bata') {
    wrapper.style.display = 'flex';
    wrapper.style.flexDirection = 'column';
    wrapper.style.gap = '2vh';
  } else if (instrument === 'bongo') {
    wrapper.style.display = 'flex';
    wrapper.style.flexDirection = 'row';
    wrapper.style.alignItems = 'center';
    wrapper.style.justifyContent = 'center';
    wrapper.style.gap = '2vw';
    wrapper.classList.add('conjoined-bongo-set');
  } else if (instrument === 'agogo') {
    wrapper.style.display = 'flex';
    wrapper.style.flexDirection = 'row';
    wrapper.style.alignItems = 'flex-end';
    wrapper.style.justifyContent = 'center';
    wrapper.style.gap = '2vw';
    wrapper.classList.add('conjoined-agogo-set');
  }

  // Get body configs and build each body element
  const configs = getBodyConfigs(d, instrument);
  configs.forEach((cfg, idx) => {
    const bodyEl = createDrumBody(d, cfg);
    wrapper.appendChild(bodyEl);

    // Insert connecting bridge/handle visual decorations between the sub-bodies
    if (idx === 0) {
      if (instrument === 'bongo') {
        const bridge = document.createElement('div');
        bridge.className = 'bongo-bridge';
        wrapper.appendChild(bridge);
      } else if (instrument === 'agogo') {
        const handle = document.createElement('div');
        handle.className = 'agogo-handle';
        wrapper.appendChild(handle);
      } else if (instrument === 'bata') {
        const bodyPart = document.createElement('div');
        bodyPart.className = 'bata-hourglass-body';
        wrapper.appendChild(bodyPart);
      }
    }
  });

  // Name & Button Indicator Labels under the conga
  const labelContainer = document.createElement('div');
  labelContainer.className = 'drum-label-container';

  const nameSpan = document.createElement('span');
  nameSpan.className = 'drum-name';
  nameSpan.innerText = d.label;

  labelContainer.appendChild(nameSpan);
  wrapper.appendChild(labelContainer);

  return wrapper;
}
