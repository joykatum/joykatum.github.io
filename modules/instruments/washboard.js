import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const washboard = {
  origin: 'North America (New Orleans Zydeco)',
  description:
    'The Washboard (or frottoir in Zydeco) is a corrugated metal washing board turned musical instrument. Worn like a vest over the chest, musicians rub and tap its ridges using metal thimbles or spoons worn on their fingers, producing a continuous, bright, scratching clatter. Interesting fact: the instrument was invented in Louisiana in 1946 by Creole musician Clifton Chenier, who commissioned a local blacksmith to build a wearable metal board. It became the signature sound of Zydeco, early jazz, and jug bands, providing a highly syncopated and driving metal groove that is completely unique.',
  performers: [
    {
      name: 'Newman Taylor Baker',
      spotify: 'true',
      apple: 'true'
    },
    {
      name: 'Washboard Chaz',
      spotify: 'true',
      apple: 'true'
    }
  ],
  songs: [
    {
      name: 'Washboard Boogie',
      artist: 'Newman Taylor Baker',
      spotify: 'true',
      apple: 'true'
    }
  ],
  effectsSongs: [
    {
      name: 'Bayou Metal Scrape',
      artist: 'Newman Taylor Baker',
      desc: 'The intense washboard scratches are run through tape saturation and a rapid stereo gate, giving the metal clicks a sharp, modern pop-acoustic bite.',
      url: '',
      platform: 'Spotify'
    }
  ],

  name: 'Washboard',
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
