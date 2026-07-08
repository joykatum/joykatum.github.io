import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const thunderdrum = {
  name: 'Thunder Drum',
  defaultLeft: 0,
  defaultRight: 0,
  drums: [
    {
      id: 0,
      label: 'Storm Chamber',
      pitchMult: 1,
      color: 'purple',
      sizeValue: 23
    }
  ],
  sounds: {
    spring_mallet_strike: (d) => {
      playMembrane(75 * d.pitchMult, 1.5, 1.3, false);
      playNoise(1.2, 500, state.currentTiltVolume * 0.7);
    },
    cylinder_shake_rumble: (d) => playTablaSlideUp(50 * d.pitchMult, 120 * d.pitchMult, 1.2),
    head_tap: (d) => {
      playMembrane(110 * d.pitchMult, 1.8, 1.1, true);
      playNoise(1.5, 900, state.currentTiltVolume * 0.95);
    },
    spring_scrape: (d) => playNoise(0.4, 2500, state.currentTiltVolume * 0.6)
  },
  touches: [
    {
      id: 'spring_mallet_strike',
      label: 'Spring mallet strike',
      shortName: 'Spring malle...',
      description:
        'Tapping the long dangling metal spring directly with a stick to trigger a sudden, acoustic lightning strike sound'
    },
    {
      id: 'cylinder_shake_rumble',
      label: 'Cylinder shake rumble',
      shortName: 'Cylinder sha...',
      description:
        'Gently shaking the cylinder body so the spring wobbles and sends an ominous, rolling acoustic reverb through the head'
    },
    {
      id: 'head_tap',
      label: 'Head tap',
      shortName: 'Head tap',
      description:
        'Lightly flicking the drumhead with a fingernail while keeping the spring still to get a tight, plastic pop with zero thunder reverb'
    }
  ],
  mappings: {
    left: {
      up: 'spring_mallet_strike',
      down: 'cylinder_shake_rumble',
      left: 'head_tap',
      right: 'spring_scrape',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'spring_mallet_strike'
    },
    right: {
      up: 'spring_mallet_strike',
      down: 'cylinder_shake_rumble',
      left: 'head_tap',
      right: 'spring_scrape',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'cylinder_shake_rumble'
    }
  }
};
