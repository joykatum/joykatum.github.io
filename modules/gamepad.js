// Gamepad API Input Processing Module
import { state } from './state.js';
import { drumTypes, getVisibleDrums, instrumentMappings } from './drumTypes.js';
import { triggerHitEffect, updateActiveDrumUI, handleInstrumentChange } from './ui.js';
import { CONFIG } from './config.js';

export function checkInput(inputDefs, gp) {
  if (!inputDefs || !gp) return false;
  for (let inputDef of inputDefs) {
    if (inputDef.type === 'button') {
      if (gp.buttons[inputDef.index]?.pressed) return true;
    } else if (inputDef.type === 'axis') {
      const val = gp.axes[inputDef.index];
      if (
        val !== undefined &&
        ((inputDef.dir > 0 && val > CONFIG.GAMEPAD.DEADZONE) || (inputDef.dir < 0 && val < -CONFIG.GAMEPAD.DEADZONE))
      ) {
        return true;
      }
    }
  }
  return false;
}

// Map inputs
export const mapping = {
  // Left Hand Gamepad controls (D-Pad and Left Stick)
  up_l: [
    { type: 'button', index: 12 },
    { type: 'axis', index: 1, dir: -1 }
  ], // Slap / Muffled
  down_l: [
    { type: 'button', index: 13 },
    { type: 'axis', index: 1, dir: 1 }
  ], // Heel/Toe
  left_l: [
    { type: 'button', index: 14 },
    { type: 'axis', index: 0, dir: -1 }
  ], // Bass
  right_l: [
    { type: 'button', index: 15 },
    { type: 'axis', index: 0, dir: 1 }
  ], // Open

  // Right Hand Gamepad controls (Face buttons and Right Stick)
  up_r: [
    { type: 'button', index: 3 },
    { type: 'axis', index: 3, dir: -1 }
  ], // Slap / Muffled
  down_r: [
    { type: 'button', index: 0 },
    { type: 'axis', index: 3, dir: 1 }
  ], // Heel/Toe
  left_r: [
    { type: 'button', index: 2 },
    { type: 'axis', index: 2, dir: -1 }
  ], // Bass
  right_r: [
    { type: 'button', index: 1 },
    { type: 'axis', index: 2, dir: 1 }
  ], // Open

  // R3/L3 Click overrides
  click_r: [
    { type: 'button', index: 11 },
    { type: 'button', index: 10 }
  ]
};

export function triggerGamepadVibration(gp, soundType) {
  if (!gp || !gp.vibrationActuator || typeof gp.vibrationActuator.playEffect !== 'function') return;

  // Define relative intensity weights for different touch/sound types
  let soundWeight = 0.6; // Default weight
  const type = (soundType || '').toLowerCase();

  if (type.includes('slap')) {
    soundWeight = 1.0;
  } else if (type.includes('open')) {
    soundWeight = 0.8;
  } else if (
    type.includes('bass') ||
    type.includes('doum') ||
    type.includes('parche_bass') ||
    type.includes('enu_bass')
  ) {
    soundWeight = 0.95;
  } else if (type.includes('muffled') || type.includes('enu_muffled')) {
    soundWeight = 0.45;
  } else if (type.includes('heeltoe') || type.includes('heel') || type.includes('toe')) {
    soundWeight = 0.3;
  } else if (type.includes('click') || type.includes('aro') || type.includes('rim')) {
    soundWeight = 0.25;
  }

  // Scaled with current dynamic volume (which represents tilt volume modifier)
  const currentVolume = state.currentTiltVolume !== undefined ? state.currentTiltVolume : 1.0;
  const intensity = Math.max(0.05, Math.min(1.0, currentVolume * soundWeight));

  // Strong rumble handles lower frequencies (bass/open hits), weak handles higher frequencies (slaps/clicks)
  let strong = intensity * 0.4;
  let weak = intensity * 0.7;

  if (type.includes('slap') || type.includes('click')) {
    strong = intensity * 0.2;
    weak = intensity * 0.9;
  } else if (type.includes('bass') || type.includes('doum')) {
    strong = intensity * 0.8;
    weak = intensity * 0.2;
  }

  gp.vibrationActuator
    .playEffect('dual-rumble', {
      startDelay: 0,
      duration: 100, // Short, snappy feedback
      strongMagnitude: Math.min(1.0, strong),
      weakMagnitude: Math.min(1.0, weak)
    })
    .catch(() => {
      // Suppress any vibration actuator promise rejections/interrupts
    });
}

export function processGamepadHit(key, gp, hand, shortSound, longSound, ignore = false) {
  if (ignore) {
    let press = state.pressState[key];
    if (press) press.pressed = false;
    return;
  }
  const isKeyboardPressed = state.keyboardState && state.keyboardState[key];
  const isPressed = (gp ? checkInput(mapping[key], gp) : false) || isKeyboardPressed;
  let press = state.pressState[key];
  if (!press) {
    press = { pressed: false, startTime: 0, firedLong: false };
    state.pressState[key] = press;
  }
  const now = Date.now();

  const triggerPlay = (drumDef, type) => {
    const instDef = drumTypes[state.currentInstrument] || drumTypes.conga;
    if (instDef.sounds[type]) {
      instDef.sounds[type](drumDef);
    }
  };

  if (isPressed && !press.pressed) {
    press.pressed = true;
    press.startTime = now;
    press.firedLong = false;

    if (!longSound) {
      const activeDrum = hand === 'l' ? state.leftActiveDrumId : state.rightActiveDrumId;
      const visibleDrums = getVisibleDrums();
      const drumDef = visibleDrums.find((d) => d.id === activeDrum) || visibleDrums[0] || { id: 0, pitchMult: 1.0 };
      triggerPlay(drumDef, shortSound);
      triggerHitEffect(drumDef.id, shortSound);
      triggerGamepadVibration(gp, shortSound);

      if (hand === 'l') state.lastLeftHit = shortSound;
      else state.lastRightHit = shortSound;
    }
  } else if (isPressed && press.pressed) {
    if (longSound && !press.firedLong && now - press.startTime > CONFIG.GAMEPAD.LONG_PRESS_THRESHOLD) {
      press.firedLong = true;
      const activeDrum = hand === 'l' ? state.leftActiveDrumId : state.rightActiveDrumId;
      const visibleDrums = getVisibleDrums();
      const drumDef = visibleDrums.find((d) => d.id === activeDrum) || visibleDrums[0] || { id: 0, pitchMult: 1.0 };
      triggerPlay(drumDef, longSound);
      triggerHitEffect(drumDef.id, longSound);
      triggerGamepadVibration(gp, longSound);

      if (hand === 'l') state.lastLeftHit = longSound;
      else state.lastRightHit = longSound;
    }
  } else if (!isPressed && press.pressed) {
    if (longSound && !press.firedLong) {
      const activeDrum = hand === 'l' ? state.leftActiveDrumId : state.rightActiveDrumId;
      const visibleDrums = getVisibleDrums();
      const drumDef = visibleDrums.find((d) => d.id === activeDrum) || visibleDrums[0] || { id: 0, pitchMult: 1.0 };
      triggerPlay(drumDef, shortSound);
      triggerHitEffect(drumDef.id, shortSound);
      triggerGamepadVibration(gp, shortSound);

      if (hand === 'l') state.lastLeftHit = shortSound;
      else state.lastRightHit = shortSound;
    }
    press.pressed = false;
  }
}

export function handleGamepadInputLoop() {
  let gamepads = [];
  const statusEl = document.getElementById('gamepad-status');
  const statusIconContainer = document.getElementById('gamepad-status-icon');

  try {
    gamepads = navigator.getGamepads ? navigator.getGamepads() : [];
  } catch (err) {
    if (statusEl && !statusEl.innerText.includes('blocked')) {
      statusEl.innerHTML = "⚠️ API blocked. Click 'Open in New Tab' to play!";
      statusEl.style.color = '#ef4444';
    }
    requestAnimationFrame(handleGamepadInputLoop);
    return;
  }

  let gp = null;
  for (let i = 0; i < gamepads.length; i++) {
    if (gamepads[i] && gamepads[i].connected) {
      gp = gamepads[i];
      break;
    }
  }

  if (!gp) {
    if (statusEl && statusEl.innerText !== '') {
      statusEl.innerText = '';
    }
    if (statusIconContainer) {
      statusIconContainer.classList.remove('connected');
    }
    // Process keyboard hits even if no physical gamepad is connected
    const inst = state.currentInstrument;
    const mappingObj = instrumentMappings[inst] || instrumentMappings.conga;
    const leftMap = mappingObj.left;
    const rightMap = mappingObj.right;

    processGamepadHit('up_l', null, 'l', leftMap.up, leftMap.upLong);
    processGamepadHit('down_l', null, 'l', leftMap.down, leftMap.downLong);
    processGamepadHit('left_l', null, 'l', leftMap.left, leftMap.leftLong, false);
    processGamepadHit('right_l', null, 'l', leftMap.right, leftMap.rightLong, false);

    processGamepadHit('up_r', null, 'r', rightMap.up, rightMap.upLong);
    processGamepadHit('down_r', null, 'r', rightMap.down, rightMap.downLong);
    processGamepadHit('left_r', null, 'r', rightMap.left, rightMap.leftLong, false);
    processGamepadHit('right_r', null, 'r', rightMap.right, rightMap.rightLong, false);

    processGamepadHit('click_r', null, 'r', rightMap.trigger || rightMap.up, null);

    requestAnimationFrame(handleGamepadInputLoop);
    return;
  } else {
    if (statusEl && !statusEl.innerText.includes(gp.id)) {
      statusEl.innerText = `🎮 Connected: ${gp.id.substring(0, 25)}`;
      statusEl.style.color = '#10b981';
    }
    if (statusIconContainer) {
      statusIconContainer.classList.add('connected');
    }
  }

  // Edge trigger detection for L1/R1 to shift active drum selection
  const l1Pressed = gp.buttons[4]?.pressed || false;
  const r1Pressed = gp.buttons[5]?.pressed || false;
  const justL1 = l1Pressed && !state.prevL1State;
  const justR1 = r1Pressed && !state.prevR1State;
  state.prevL1State = l1Pressed;
  state.prevR1State = r1Pressed;

  let newLeftDrum = state.leftActiveDrumId;
  let newRightDrum = state.rightActiveDrumId;

  if (justL1 || justR1) {
    // Multi-drum shift loop
    const visibleDrums = getVisibleDrums();
    const instDef = drumTypes[state.currentInstrument];
    const totalDrums = instDef ? instDef.drums.length : visibleDrums.length;

    if (state.currentInstrument === 'bata' || state.singleDrumMode) {
      const allowedIds = visibleDrums.map((d) => d.id);
      let idx = allowedIds.indexOf(state.leftActiveDrumId);
      if (idx === -1) idx = 0;

      if (justL1) {
        idx = (idx - 1 + allowedIds.length) % allowedIds.length;
      } else if (justR1) {
        idx = (idx + 1) % allowedIds.length;
      }

      newLeftDrum = allowedIds[idx];
      newRightDrum = allowedIds[idx];
    } else if (visibleDrums.length > 1 && totalDrums > 2) {
      const allowedIds = visibleDrums.map((d) => d.id);
      if (justL1) {
        let idx = allowedIds.indexOf(state.leftActiveDrumId);
        newLeftDrum = allowedIds[(idx + 1) % allowedIds.length];
      }
      if (justR1) {
        let idx = allowedIds.indexOf(state.rightActiveDrumId);
        newRightDrum = allowedIds[(idx + 1) % allowedIds.length];
      }
    }
  } else {
    const visibleDrums = getVisibleDrums();
    if (visibleDrums.length === 1) {
      newLeftDrum = visibleDrums[0].id;
      newRightDrum = visibleDrums[0].id;
    }
  }

  let uiNeedsUpdate = false;
  if (newLeftDrum !== state.leftActiveDrumId) {
    state.leftActiveDrumId = newLeftDrum;
    uiNeedsUpdate = true;
  }
  if (newRightDrum !== state.rightActiveDrumId) {
    state.rightActiveDrumId = newRightDrum;
    uiNeedsUpdate = true;
  }
  if (uiNeedsUpdate) {
    updateActiveDrumUI();
  }

  // Process hits
  const isUpL = checkInput(mapping.up_l, gp);
  const isDownL = checkInput(mapping.down_l, gp);
  const ignoreHorizL = isUpL || isDownL;

  const isUpR = checkInput(mapping.up_r, gp);
  const isDownR = checkInput(mapping.down_r, gp);
  const ignoreHorizR = isUpR || isDownR;

  // Resolve traditional sound touches based on selected instrument mapping
  const inst = state.currentInstrument;
  const mappingObj = instrumentMappings[inst] || instrumentMappings.conga;
  const leftMap = mappingObj.left;
  const rightMap = mappingObj.right;

  // Left hand hits: Up, Down (with Tap & Hold/Long press), Left, Right
  processGamepadHit('up_l', gp, 'l', leftMap.up, leftMap.upLong);
  processGamepadHit('down_l', gp, 'l', leftMap.down, leftMap.downLong);
  processGamepadHit('left_l', gp, 'l', leftMap.left, leftMap.leftLong, ignoreHorizL);
  processGamepadHit('right_l', gp, 'l', leftMap.right, leftMap.rightLong, ignoreHorizL);

  // Right hand hits: Up, Down (with Tap & Hold/Long press), Left, Right
  processGamepadHit('up_r', gp, 'r', rightMap.up, rightMap.upLong);
  processGamepadHit('down_r', gp, 'r', rightMap.down, rightMap.downLong);
  processGamepadHit('left_r', gp, 'r', rightMap.left, rightMap.leftLong, ignoreHorizR);
  processGamepadHit('right_r', gp, 'r', rightMap.right, rightMap.rightLong, ignoreHorizR);

  // R3/L3 click or trigger triggers primary hand accent or secondary trigger sound
  processGamepadHit('click_r', gp, 'r', rightMap.trigger || rightMap.up, null);

  state.currentTiltVolume = 1.0;

  requestAnimationFrame(handleGamepadInputLoop);
}

// Keyboard Control Scheme Mapping (ASDW / WASD and JKLI / IJKL)
const KEY_MAP = {
  // Left Hand: WASD (w = up_l, s = down_l, a = left_l, d = right_l)
  KeyW: 'up_l',
  w: 'up_l',
  W: 'up_l',
  KeyS: 'down_l',
  s: 'down_l',
  S: 'down_l',
  KeyA: 'left_l',
  a: 'left_l',
  A: 'left_l',
  KeyD: 'right_l',
  d: 'right_l',
  D: 'right_l',

  // Right Hand: JKLI / IJKL (i = up_r, k = down_r, j = left_r, l = right_r)
  KeyI: 'up_r',
  i: 'up_r',
  I: 'up_r',
  KeyK: 'down_r',
  k: 'down_r',
  K: 'down_r',
  KeyJ: 'left_r',
  j: 'left_r',
  J: 'left_r',
  KeyL: 'right_r',
  l: 'right_r',
  L: 'right_r',

  // Arrow keys as intuitive fallback
  ArrowUp: 'up_r',
  ArrowDown: 'down_r',
  ArrowLeft: 'left_r',
  ArrowRight: 'right_r'
};

// Listen to keyboard events globally
window.addEventListener('keydown', (e) => {
  if (e.repeat) return;

  const key = e.code || e.key;
  const mappedDirection = KEY_MAP[key] || KEY_MAP[e.key];

  if (mappedDirection) {
    // Prevent default scroll behavior for mapped controls
    e.preventDefault();

    if (!state.keyboardState) {
      state.keyboardState = {
        up_l: false,
        down_l: false,
        left_l: false,
        right_l: false,
        up_r: false,
        down_r: false,
        left_r: false,
        right_r: false
      };
    }

    // Lazy load and initialize audio context on first interaction
    try {
      import('./audio.js').then(({ initAudio }) => {
        initAudio();
      });
    } catch (err) {}

    state.keyboardState[mappedDirection] = true;
  }
});

window.addEventListener('keyup', (e) => {
  const key = e.code || e.key;
  const mappedDirection = KEY_MAP[key] || KEY_MAP[e.key];

  if (mappedDirection) {
    if (!state.keyboardState) {
      state.keyboardState = {
        up_l: false,
        down_l: false,
        left_l: false,
        right_l: false,
        up_r: false,
        down_r: false,
        left_r: false,
        right_r: false
      };
    }
    state.keyboardState[mappedDirection] = false;
  }
});
