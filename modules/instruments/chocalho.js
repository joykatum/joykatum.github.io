import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const chocalho = {
  name: 'Chocalho',
  defaultLeft: 0,
  defaultRight: 0,
  drums: [
    {
      id: 0,
      label: 'Chocalho',
      pitchMult: 1,
      color: 'silver',
      sizeValue: 18
    }
  ],
  sounds: {
    linear_shake: (d) => playNoise(0.18, 1800, state.currentTiltVolume * 1.2),
    accented_whip: (d) => playNoise(0.1, 2400, state.currentTiltVolume * 0.8)
  },
  touches: [
    {
      id: 'linear_shake',
      label: 'Linear shake',
      shortName: 'Linear shake',
      description:
        'Pushing and pulling the frame back and forth in rapid linear motions to shake the rows of aluminum jingles'
    },
    {
      id: 'accented_whip',
      label: 'Accented whip',
      shortName: 'Accented whip',
      description:
        'A sudden, sweeping downward or snapping arc motion to force all the jingles to crash at once for a wall of sound'
    }
  ],
  mappings: {
    left: {
      up: 'linear_shake',
      down: 'accented_whip',
      left: '',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'linear_shake'
    },
    right: {
      up: 'linear_shake',
      down: 'accented_whip',
      left: '',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'accented_whip'
    }
  }
};
