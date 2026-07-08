import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const cabasa = {
  name: 'Cabasa',
  defaultLeft: 0,
  defaultRight: 0,
  drums: [
    {
      id: 0,
      label: 'Cabasa',
      pitchMult: 1,
      color: 'silver',
      sizeValue: 16
    }
  ],
  sounds: {
    cylinder_twist: (d) => playNoise(0.12, 1800, state.currentTiltVolume * 1.1),
    hand_tap: (d) => playNoise(0.04, 3200, state.currentTiltVolume * 1.3),
    linear_shaft_tap: (d) => playNoise(0.25, 2000, state.currentTiltVolume * 0.7)
  },
  touches: [
    {
      id: 'cylinder_twist',
      label: 'Cylinder twist',
      shortName: 'Cylinder twist',
      description:
        'Pressing the metal bead loops firmly against the textured steel cylinder and rotating the handle quickly back and forth'
    },
    {
      id: 'hand_tap',
      label: 'Hand tap',
      shortName: 'Hand tap',
      description:
        'Striking the hanging steel beads directly against the palm of the non-dominant hand for a tight, staccato metallic rattle'
    },
    {
      id: 'linear_shaft_tap',
      label: 'Linear Shaft Tap',
      shortName: 'Linear Shaft...',
      description:
        'Tapping the solid wooden or plastic handle against the knee while keeping the beads still to create a subtle, woody thud'
    }
  ],
  mappings: {
    left: {
      up: 'cylinder_twist',
      down: 'hand_tap',
      left: 'linear_shaft_tap',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'cylinder_twist'
    },
    right: {
      up: 'cylinder_twist',
      down: 'hand_tap',
      left: 'linear_shaft_tap',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'hand_tap'
    }
  }
};
