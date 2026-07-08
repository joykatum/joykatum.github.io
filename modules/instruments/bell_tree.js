import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const bell_tree = {
  name: 'Bell Tree',
  defaultLeft: 0,
  defaultRight: 0,
  drums: [
    {
      id: 0,
      label: 'Bell Tree',
      pitchMult: 1,
      color: 'gold',
      sizeValue: 21
    }
  ],
  sounds: {
    glissando_sweep: (d) => {
      playNoise(0.5, 4500, state.currentTiltVolume * 0.7);
    },
    single_bell_tap: (d) => {
      playMembrane(800 * d.pitchMult, 0.8, 1.0, false);
    }
  },
  touches: [
    {
      id: 'glissando_sweep',
      label: 'Glissando sweep',
      shortName: 'Glissando sweep',
      description:
        'Sliding a metal wand down or up the nested stack of graduated brass bells to create a bright, cascading shimmer'
    },
    {
      id: 'single_bell_tap',
      label: 'Single Bell Tap',
      shortName: 'Single Bell Tap',
      description:
        'Using a hard metal triangle beater to strike just one specific brass bell in the nested stack to isolate a single, pure chime note'
    }
  ],
  mappings: {
    left: {
      up: 'glissando_sweep',
      down: 'single_bell_tap',
      left: '',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'glissando_sweep'
    },
    right: {
      up: 'glissando_sweep',
      down: 'single_bell_tap',
      left: '',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'single_bell_tap'
    }
  }
};
