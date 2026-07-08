import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const angklung = {
  name: 'Angklung',
  defaultLeft: 0,
  defaultRight: 2,
  drums: [
    {
      id: 0,
      label: 'Low Bamboo',
      pitchMult: 1,
      color: 'wood',
      sizeValue: 20
    },
    {
      id: 1,
      label: 'Mid Bamboo',
      pitchMult: 1.25,
      color: 'wood-medium',
      sizeValue: 17
    },
    {
      id: 2,
      label: 'High Bamboo',
      pitchMult: 1.5,
      color: 'wood-light',
      sizeValue: 14
    }
  ],
  sounds: {
    sentak: (d) => {
      playMembrane((d.id === 0 ? 440 : d.id === 1 ? 554 : 660) * d.pitchMult, 0.3, 1.0, true);
      playNoise(0.2, 1800, state.currentTiltVolume * 0.8);
    },
    geter: (d) => {
      playMembrane((d.id === 0 ? 440 : d.id === 1 ? 554 : 660) * d.pitchMult, 0.3, 1.0, true);
      playNoise(0.2, 1800, state.currentTiltVolume * 0.8);
    },
    frame_knock: (d) => playMembrane((d.id === 0 ? 220 : d.id === 1 ? 277 : 330) * d.pitchMult, 0.08, 1.0, false)
  },
  touches: [
    {
      id: 'sentak',
      label: 'Sentak',
      shortName: 'Sentak',
      description:
        'A sudden, single horizontal jerk causing the loose bamboo tubes to hit the frame once for a staccato pop'
    },
    {
      id: 'geter',
      label: 'Geter',
      shortName: 'Geter',
      description:
        'Rapid, continuous shaking allowing the tubes to slide within the frame slots for a sustained chordal chime'
    },
    {
      id: 'frame_knock',
      label: 'Frame Knock',
      shortName: 'Frame Knock',
      description:
        'Tapping the solid horizontal bamboo base frame with a hard stick to produce a dry, woody pop completely separate from the tube chimes'
    }
  ],
  mappings: {
    left: {
      up: 'sentak',
      down: 'geter',
      left: 'frame_knock',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'sentak'
    },
    right: {
      up: 'sentak',
      down: 'geter',
      left: 'frame_knock',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'geter'
    }
  }
};
