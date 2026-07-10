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
    spring_flick: (d, velocity = 0.8) => {
      // Springy metallic twang slide
      playTablaSlideUp(280 * d.pitchMult, 90 * d.pitchMult, 0.8, velocity, 0.0);
      playNoise(0.9, 1200, velocity * 0.5, 'bandpass', 2.0);
    },
    cylinder_acoustic_wobble: (d, velocity = 0.85) => {
      // Thunder wobble: low-frequency sliding waves and rumbling lowpass noise
      playTablaSlideUp(45 * d.pitchMult, 110 * d.pitchMult, 1.6, velocity, 0.0);
      playNoise(1.8, 140, velocity * 0.8, 'lowpass');
      setTimeout(() => {
        playTablaSlideUp(120 * d.pitchMult, 60 * d.pitchMult, 1.2, velocity * 0.6, 0.0);
      }, 150);
    },
    rim_strike: (d, velocity = 0.85) => {
      // Sharp counterhoop strike + spring reaction
      playMembrane(380 * d.pitchMult, 0.1, 1.0, true, velocity, 0.0);
      playAttackClick(0.012, 4000, 0.6 * velocity);
      setTimeout(() => {
        playTablaSlideUp(150 * d.pitchMult, 45 * d.pitchMult, 1.2, velocity * 0.8, 0.0);
        playNoise(1.2, 350, velocity * 0.4, 'bandpass');
      }, 30);
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
