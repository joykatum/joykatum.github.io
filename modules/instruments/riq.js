import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const riq = {
  name: 'Riq',
  defaultLeft: 0,
  defaultRight: 0,
  drums: [
    {
      id: 0,
      label: 'Arabic Riq',
      pitchMult: 1,
      color: 'blonde-light',
      sizeValue: 16
    }
  ],
  sounds: {
    dum: (d) => playMembrane(130 * d.pitchMult, 0.4, 1.1, false),
    tak: (d) => playMembrane(360 * d.pitchMult, 0.12, 0.9, true),
    jingle_damp_split: (d) => playNoise(0.18, 4500, state.currentTiltVolume * 0.75),
    jingle_shake: (d) => playNoise(0.25, 6000, state.currentTiltVolume * 0.85)
  },
  touches: [
    {
      id: 'dum',
      label: 'Dum',
      shortName: 'Dum',
      description:
        'Striking the center of the skin with fingers while holding the frame carefully to avoid activating the brass jingles'
    },
    {
      id: 'tak',
      label: 'Tak',
      shortName: 'Tak',
      description:
        'Hitting the heavy brass jingles directly with the ring finger to create a sharp, cutting metallic chime'
    },
    {
      id: 'jingle_damp_split',
      label: 'Jingle Damp Split',
      shortName: 'Jingle Damp ...',
      description:
        'Holding one pair of brass jingles completely quiet with the thumb while striking the opposite jingles to isolate a tight, dry metallic tick'
    }
  ],
  mappings: {
    left: {
      up: 'dum',
      down: 'tak',
      left: 'jingle_shake',
      right: 'jingle_damp_split',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'dum'
    },
    right: {
      up: 'dum',
      down: 'tak',
      left: 'jingle_shake',
      right: 'jingle_damp_split',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'tak'
    }
  }
};
