import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const vibraslap = {
  name: 'Vibraslap',
  defaultLeft: 0,
  defaultRight: 0,
  drums: [
    {
      id: 0,
      label: 'Resonator Box',
      pitchMult: 1,
      color: 'wood',
      sizeValue: 18
    }
  ],
  sounds: {
    ball_palm_strike: (d, velocity = 0.95) => {
      // Wood-ball-on-palm strike clack
      playMembrane(280 * d.pitchMult, 0.08, 1.0, true, velocity);
      playAttackClick(0.01, 3000, 0.6 * velocity);

      // Decaying teeth-chattering rattle: series of decaying clicks that slightly slow down
      for (let i = 0; i < 15; i++) {
        const delay = Math.pow(i, 1.22) * 45; // slightly slowing rate
        const vol = velocity * Math.pow(0.83, i) * 1.3;
        setTimeout(() => {
          playNoise(0.02, 2800 + i * 50, vol, 'highpass', 4.0);
        }, delay);
      }
    },
    soundbox_strike: (d, velocity = 0.85) => {
      // Dry hollow wood-block pop
      playMembrane(450 * d.pitchMult, 0.08, 1.0, true, velocity);
      playAttackClick(0.012, 3500, 0.6 * velocity);
    },
    wire_twang: (d, velocity = 0.8) => {
      // Springy sliding metal twang
      playTablaSlideUp(150 * d.pitchMult, 260 * d.pitchMult, 0.35, velocity);
    },
    short_buzz: (d, velocity = 0.7) => {
      // Quick, short teeth-chattering rattle
      for (let i = 0; i < 5; i++) {
        setTimeout(() => {
          playNoise(0.015, 2400, velocity * Math.pow(0.8, i), 'highpass');
        }, i * 35);
      }
    }
  },
  touches: [
    {
      id: 'ball_palm_strike',
      label: 'Ball palm strike',
      shortName: 'Ball palm st...',
      description:
        'Striking the wooden ball against the palm, forcing the internal metal teeth to chatter rapidly inside the sound box'
    },
    {
      id: 'soundbox_strike',
      label: 'Soundbox Strike',
      shortName: 'Soundbox Strike',
      description:
        'Striking the wooden soundbox directly with a hard mallet to get a dry wood-block pop instead of triggering the metal teeth rattle'
    }
  ],
  mappings: {
    left: {
      up: 'ball_palm_strike',
      down: 'soundbox_strike',
      left: 'wire_twang',
      right: 'short_buzz',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'ball_palm_strike'
    },
    right: {
      up: 'ball_palm_strike',
      down: 'soundbox_strike',
      left: 'wire_twang',
      right: 'short_buzz',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'soundbox_strike'
    }
  }
};
