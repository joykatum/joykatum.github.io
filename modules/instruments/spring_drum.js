import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const spring_drum = {
  name: 'Spring Drum',
  defaultLeft: 0,
  defaultRight: 0,
  drums: [
    {
      id: 0,
      label: 'Spring Drum',
      pitchMult: 1,
      color: 'dark',
      sizeValue: 18
    }
  ],
  sounds: {
    spring_flick: (d) => {
      playTablaSlideUp(100 * d.pitchMult, 300 * d.pitchMult, 1.0);
      playNoise(1.0, 1500, state.currentTiltVolume * 0.6);
    },
    cylinder_acoustic_wobble: (d) => playNoise(1.5, 1200, state.currentTiltVolume * 0.7),
    rim_strike: (d) => {
      playTablaSlideUp(100 * d.pitchMult, 300 * d.pitchMult, 1.0);
      playNoise(1.0, 1500, state.currentTiltVolume * 0.6);
    }
  },
  touches: [
    {
      id: 'spring_flick',
      label: 'Spring flick',
      shortName: 'Spring flick',
      description:
        'Flicking or brushing the long, dangling steel spring directly to let its vibration resonate into the acoustic cylinder'
    },
    {
      id: 'cylinder_acoustic_wobble',
      label: 'Cylinder acoustic wobble',
      shortName: 'Cylinder aco...',
      description:
        'Shaking the cylinder body through the air to modulate the internal spring resonance for a sci-fi thunder sound'
    },
    {
      id: 'rim_strike',
      label: 'Rim Strike',
      shortName: 'Rim Strike',
      description:
        'Striking the metal rim of the drum head with a stick, sending a sudden, sharp transient down into the dangling spring'
    }
  ],
  mappings: {
    left: {
      up: 'spring_flick',
      down: 'cylinder_acoustic_wobble',
      left: 'rim_strike',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'spring_flick'
    },
    right: {
      up: 'spring_flick',
      down: 'cylinder_acoustic_wobble',
      left: 'rim_strike',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'cylinder_acoustic_wobble'
    }
  }
};
