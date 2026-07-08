import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const washboard = {
  name: 'Washboard',
  defaultLeft: 0,
  defaultRight: 0,
  drums: [
    {
      id: 0,
      label: 'Washboard',
      pitchMult: 1,
      color: 'silver',
      sizeValue: 21
    }
  ],
  sounds: {
    thimble_ridge_scrape: (d) => {
      playMembrane(550 * d.pitchMult, 0.06, 1.0, true);
      playNoise(0.04, 4000, state.currentTiltVolume * 1.1);
    },
    mounted_accessory_tap: (d) => playNoise(0.2, 3000, state.currentTiltVolume * 0.8),
    spoon_click_clatter: (d) => playNoise(0.2, 3000, state.currentTiltVolume * 0.8)
  },
  touches: [
    {
      id: 'thimble_ridge_scrape',
      label: 'Thimble ridge scrape',
      shortName: 'Thimble ridg...',
      description:
        'Dragging metal thimbles worn on the fingers down the corrugated ridges of the metal board for a continuous wash'
    },
    {
      id: 'mounted_accessory_tap',
      label: 'Mounted accessory tap',
      shortName: 'Mounted acce...',
      description:
        'Tapping additional items fixed to the board like small cowbells or woodblocks using the thimbles for staccato accents'
    },
    {
      id: 'spoon_click_clatter',
      label: 'Spoon Click/Clatter',
      shortName: 'Spoon Click/...',
      description:
        'Holding a pair of traditional metal spoons nested back-to-back in one hand and bouncing them rapidly across the corrugated metal ridges to create an aggressive triple-click texture'
    }
  ],
  mappings: {
    left: {
      up: 'thimble_ridge_scrape',
      down: 'mounted_accessory_tap',
      left: 'spoon_click_clatter',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'thimble_ridge_scrape'
    },
    right: {
      up: 'thimble_ridge_scrape',
      down: 'mounted_accessory_tap',
      left: 'spoon_click_clatter',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'mounted_accessory_tap'
    }
  }
};
