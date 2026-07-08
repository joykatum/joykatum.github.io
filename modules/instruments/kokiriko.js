import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const kokiriko = {
  name: 'Kokiriko',
  defaultLeft: 0,
  defaultRight: 0,
  drums: [
    {
      id: 0,
      label: 'Kokiriko',
      pitchMult: 1,
      color: 'wood',
      sizeValue: 20
    }
  ],
  sounds: {
    cascading_wave: (d) => playNoise(0.08, 3000, state.currentTiltVolume * 1.2),
    single_clatter_click: (d) => playNoise(0.05, 1000, state.currentTiltVolume * 0.4),
    side_slat_tap: (d) => playNoise(0.08, 3000, state.currentTiltVolume * 1.2)
  },
  touches: [
    {
      id: 'cascading_wave',
      label: 'Cascading wave',
      shortName: 'Cascading wave',
      description:
        'Holding both ends of the stringed wooden slats and moving the hands in a waving motion so they clatter into each other sequentially'
    },
    {
      id: 'single_clatter_click',
      label: 'Single clatter click',
      shortName: 'Single clatt...',
      description:
        'Bringing the hands together sharply to force all the wooden blocks to collapse simultaneously for a loud pop'
    },
    {
      id: 'side_slat_tap',
      label: 'Side Slat Tap',
      shortName: 'Side Slat Tap',
      description:
        'Tapping a single outer wooden slat against a table or knee to produce a delicate, isolated wood click rather than a full cascade'
    }
  ],
  mappings: {
    left: {
      up: 'cascading_wave',
      down: 'single_clatter_click',
      left: 'side_slat_tap',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'cascading_wave'
    },
    right: {
      up: 'cascading_wave',
      down: 'single_clatter_click',
      left: 'side_slat_tap',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'single_clatter_click'
    }
  }
};
