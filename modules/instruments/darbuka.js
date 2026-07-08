import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const darbuka = {
  name: 'Darbuka',
  defaultLeft: 0,
  defaultRight: 0,
  drums: [
    {
      id: 0,
      label: 'Darbuka',
      pitchMult: 1,
      color: 'blonde-light',
      sizeValue: 20.5
    }
  ],
  sounds: {
    dum: (d) => playMembrane(75 * d.pitchMult, 0.45, 1.4, false),
    tek: (d) => {
      playMembrane(320 * d.pitchMult, 0.12, 1.0, true);
      playNoise(0.04, 3000, state.currentTiltVolume * 1.1);
    },
    ka: (d) => {
      playMembrane(340 * d.pitchMult, 0.1, 1.0, true);
      playNoise(0.03, 3200, state.currentTiltVolume * 0.9);
    },
    slap: (d) => {
      playMembrane(220 * d.pitchMult, 0.08, 1.1, true);
      playNoise(0.06, 2000, state.currentTiltVolume * 1.5);
    },
    finger_roll: (d) => {
      playMembrane(330 * d.pitchMult, 0.08, 1.0, true);
      setTimeout(() => {
        playMembrane(340 * d.pitchMult, 0.08, 1.0, true);
      }, 60);
    },
    under_rim_snap: (d) => {
      playMembrane(550 * d.pitchMult, 0.05, 1.0, true);
      playNoise(0.02, 4500, state.currentTiltVolume * 0.8);
    }
  },
  touches: [
    {
      id: 'dum',
      label: 'Dum',
      shortName: 'Dum',
      description:
        'A deep, open bass stroke in the center of the head with the fingers held together, letting the sound ring out completely'
    },
    {
      id: 'tek',
      label: 'Tek',
      shortName: 'Tek',
      description:
        'A crisp, high-pitched strike on the absolute edge of the aluminum rim using the right index or middle finger'
    },
    {
      id: 'ka',
      label: 'Ka',
      shortName: 'Ka',
      description:
        'The mirror image of the Tek stroke, executed on the rim using the left ring finger to create rapid rolling subdivisions'
    },
    {
      id: 'slap',
      label: 'Slap',
      shortName: 'Slap',
      description:
        'Striking the center of the plastic head with a slightly cupped hand to create an instantaneous, muted pop'
    },
    {
      id: 'finger_roll',
      label: 'Finger roll',
      shortName: 'Finger roll',
      description:
        'Splitting and snapping the fingers sequentially against the metal rim to produce ultra-fast ornaments'
    },
    {
      id: 'under_rim_snap',
      label: 'Under-Rim Snap',
      shortName: 'Under-Rim Snap',
      description:
        'Reaching the fingers underneath the flared aluminum collar to snap against the bare metal shell for a dry, bell-like ping'
    }
  ],
  mappings: {
    left: {
      up: 'dum',
      down: 'tek',
      left: 'ka',
      right: 'slap',
      upLong: 'finger_roll',
      downLong: 'under_rim_snap',
      leftLong: '',
      rightLong: '',
      trigger: 'dum'
    },
    right: {
      up: 'dum',
      down: 'tek',
      left: 'ka',
      right: 'slap',
      upLong: 'finger_roll',
      downLong: 'under_rim_snap',
      leftLong: '',
      rightLong: '',
      trigger: 'tek'
    }
  }
};
