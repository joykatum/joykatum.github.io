import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const mark_tree = {
  origin: 'Modern Studio Percussion',
  description:
    'The Mark Tree (commonly called wind chimes in studio settings) consists of a row of solid metal cylinders of graduated lengths suspended horizontally from a wooden bar. Sweeping a finger or mallet across the rods releases a shimmering, bright, high-frequency metallic cascade with a long decay. Interesting fact: it was invented in 1967 by studio percussionist Mark Stevens, who wanted a highly controllable, non-tangling wind chime for recording sessions. It is the premier percussive effect used in film and pop music to signify magical, dreamlike, or nostalgic transitions.',
  performers: [
    {
      name: 'Steve Weiss',
      spotify: 'true',
      apple: 'true'
    },
    {
      name: 'Emil Richards',
      spotify: 'true',
      apple: 'true'
    }
  ],
  songs: [
    {
      name: 'Dream State Transitions',
      artist: 'Steve Weiss',
      spotify: 'true',
      apple: 'true'
    }
  ],
  effectsSongs: [
    {
      name: 'Shimmering Transitions',
      artist: 'Steve Weiss',
      desc: 'The bright chimes are treated with a lush stereo chorus and long digital delay, resulting in a shimmering percussive texture that floats across the speakers.',
      url: '',
      platform: 'Spotify'
    }
  ],

  name: 'Mark Tree',
  drums: [
    {
      id: 0,
      label: 'Mark Tree',
      pitchMult: 1,
      color: 'silver',
      sizeValue: 23
    }
  ],
  sounds: {
    linear_wand_sweep: (d) => {
      playNoise(1.2, 5000, state.currentTiltVolume * 0.8);
    },
    hand_ruffle_shimmer: (d) => {
      playNoise(0.4, 6000, state.currentTiltVolume * 1.3);
    },
    wand_chime_ring: (d) => {
      playTablaSlideUp(600 * d.pitchMult, 1200 * d.pitchMult, 0.8);
      playNoise(0.8, 4000, state.currentTiltVolume * 0.6);
    }
  },
  touches: [
    {
      id: 'linear_wand_sweep',
      label: 'Linear wand sweep',
      shortName: 'Linear wand ...',
      description:
        'Dragging a metal triangle beater horizontally across the row of hanging aluminum tubes to create a glittering descent'
    },
    {
      id: 'hand_ruffle_shimmer',
      label: 'Hand ruffle shimmer',
      shortName: 'Hand ruffle ...',
      description:
        'Gently brushing the palm through the hanging tubes to create a random, swirling wash of high-pitched chime sound'
    },
    {
      id: 'wand_chime_ring',
      label: 'Wand Chime Ring',
      shortName: 'Wand Chime Ring',
      description:
        'Striking a single hanging tube directly with the metal beater and letting it swing freely to isolate one pristine high pitch'
    }
  ],
  mappings: {
    left: {
      up: 'linear_wand_sweep',
      down: 'hand_ruffle_shimmer',
      left: 'wand_chime_ring',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'linear_wand_sweep'
    },
    right: {
      up: 'linear_wand_sweep',
      down: 'hand_ruffle_shimmer',
      left: 'wand_chime_ring',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'hand_ruffle_shimmer'
    }
  }
};
