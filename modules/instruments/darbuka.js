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
    dum: (d, velocity = 0.85) => {
      playMembrane(72 * d.pitchMult, 0.48, 1.2, false, velocity, 0.0);
      playAttackClick(0.015, 1200, 0.3 * velocity);
    },
    tek: (d, velocity = 0.8) => {
      // Crisp metallic rim strike
      playMembrane(330 * d.pitchMult, 0.1, 1.0, true, velocity, 0.15);
      playNoise(0.03, 3400, velocity * 0.95, 'highpass');
      playAttackClick(0.008, 4500, 0.5 * velocity);
    },
    ka: (d, velocity = 0.75) => {
      // Mirror strike on left side of rim
      playMembrane(315 * d.pitchMult, 0.09, 1.0, true, velocity, -0.15);
      playNoise(0.03, 3300, velocity * 0.8, 'highpass');
      playAttackClick(0.008, 4300, 0.4 * velocity);
    },
    slap: (d, velocity = 0.9) => {
      playMembrane(220 * d.pitchMult, 0.07, 1.1, true, velocity, 0.0);
      playNoise(0.05, 2200, velocity * 1.3, 'highpass');
      playAttackClick(0.01, 3000, 0.5 * velocity);
    },
    finger_roll: (d, velocity = 0.75) => {
      // Rapid sequence of 3 cascading taps alternating pan
      playMembrane(330 * d.pitchMult, 0.06, 1.0, true, velocity * 0.85, 0.1);
      playAttackClick(0.006, 4000, 0.3 * velocity);
      setTimeout(() => {
        playMembrane(320 * d.pitchMult, 0.06, 1.0, true, velocity * 0.7, -0.1);
        playAttackClick(0.006, 3800, 0.25 * velocity);
      }, 45);
      setTimeout(() => {
        playMembrane(345 * d.pitchMult, 0.08, 1.0, true, velocity * 0.9, 0.15);
        playAttackClick(0.006, 4200, 0.35 * velocity);
      }, 90);
    },
    under_rim_snap: (d, velocity = 0.8) => {
      // High bright metallic ping on the bare aluminum collar
      playMembrane(620 * d.pitchMult, 0.12, 1.0, true, velocity, 0.05);
      playNoise(0.02, 5500, velocity * 0.5, 'highpass');
      playAttackClick(0.006, 6000, 0.6 * velocity);
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
