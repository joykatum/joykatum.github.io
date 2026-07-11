import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const tanbou = {
  origin: 'Haiti',
  description:
    'The Haitian Tanbou is a barrel-shaped wooden drum with a single head, central to Vodou ceremonies and folk music styles like Compas. Struck with a mallet or bare hand, it produces deep, spiritually resonant tones.',
  performers: [
    {
      name: 'Frisner Augustin',
      spotify: 'true',
      apple: 'true'
    },
    {
      name: 'Boukman Eksperyans',
      spotify: 'true',
      apple: 'true'
    }
  ],
  songs: [
    {
      name: 'Haitian Vodou Beats',
      artist: 'Frisner Augustin',
      spotify: 'true',
      apple: 'true'
    }
  ],
  effectsSongs: [
    {
      name: 'Vodou Chamber Reverb',
      artist: 'Haiti Percussion Group',
      desc: 'Deep open-head hits are treated with long cathedral room reverbs, recreating the mystical acoustic resonance of ritual drums.',
      url: '',
      platform: 'Spotify'
    }
  ],

  name: 'Tanbou',
  drums: [
    {
      id: 0,
      label: 'Tanbou',
      pitchMult: 1,
      color: 'caramel',
      sizeValue: 21
    }
  ],
  sounds: {
    center_palm_strike: (d) => {
      playTablaSlideUp(110 * d.pitchMult, 180 * d.pitchMult, 0.4);
    },
    edge_finger_snap: (d) => playMembrane(65 * d.pitchMult, 0.75, 1.4, false),
    hand_foot_pitch_bend_press: (d) => {
      playTablaSlideUp(110 * d.pitchMult, 180 * d.pitchMult, 0.4);
    },
    side_stave_strike: (d) => {
      playTablaSlideUp(110 * d.pitchMult, 180 * d.pitchMult, 0.4);
    }
  },
  touches: [
    {
      id: 'center_palm_strike',
      label: 'Center palm strike',
      shortName: 'Center palm ...',
      description:
        'A full, warm palm strike delivered to the center of the cowskin head for the foundational rhythmic pulse'
    },
    {
      id: 'edge_finger_snap',
      label: 'Edge finger snap',
      shortName: 'Edge finger ...',
      description:
        'Using the tips of the fingers on the extreme edge of the drum to produce sharp, high-pitched accents'
    },
    {
      id: 'hand_foot_pitch_bend_press',
      label: 'Hand/Foot pitch-bend press',
      shortName: 'Hand/Foot pi...',
      description:
        'Using the heel of the hand or a foot to press hard into the drumhead to stretch it and bend the pitch while striking'
    },
    {
      id: 'side_stave_strike',
      label: 'Side Stave Strike',
      shortName: 'Side Stave S...',
      description:
        'Beating the wooden barrel sides with a heavy stick to lay down a cutting, hollow counter-rhythm underneath the skin patterns'
    }
  ],
  mappings: {
    left: {
      up: 'center_palm_strike',
      down: 'edge_finger_snap',
      left: 'hand_foot_pitch_bend_press',
      right: 'side_stave_strike',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'center_palm_strike'
    },
    right: {
      up: 'center_palm_strike',
      down: 'edge_finger_snap',
      left: 'hand_foot_pitch_bend_press',
      right: 'side_stave_strike',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'edge_finger_snap'
    }
  }
};
