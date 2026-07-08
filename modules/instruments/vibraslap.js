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
    ball_palm_strike: (d) => playNoise(0.5, 1800, state.currentTiltVolume * 0.7),
    soundbox_strike: (d) => playNoise(1.2, 2200, state.currentTiltVolume * 1.4),
    wire_twang: (d) => playMembrane(220 * d.pitchMult, 0.25, 0.8, false),
    short_buzz: (d) => playNoise(0.15, 2000, state.currentTiltVolume * 0.5)
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
