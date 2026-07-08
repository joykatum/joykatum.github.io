import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const ratchet = {
  name: 'Ratchet',
  defaultLeft: 0,
  defaultRight: 0,
  drums: [
    {
      id: 0,
      label: 'Ratchet',
      pitchMult: 1,
      color: 'wood',
      sizeValue: 16
    }
  ],
  sounds: {
    crank_spin_snap: (d) => playNoise(0.2, 1400, state.currentTiltVolume * 1.1),
    slow_crank_creak: (d) => playNoise(0.2, 1400, state.currentTiltVolume * 1.1)
  },
  touches: [
    {
      id: 'crank_spin_snap',
      label: 'Crank spin snap',
      shortName: 'Crank spin snap',
      description:
        'Swinging or cranking the handle around a geared wheel, forcing rigid wooden flaps to loudly snap over the gear teeth'
    },
    {
      id: 'slow_crank_creak',
      label: 'Slow Crank Creak',
      shortName: 'Slow Crank C...',
      description:
        'Turning the handle ultra-slowly to let the wooden flaps click over individual gear teeth, producing a sparse, creaking wooden texture'
    }
  ],
  mappings: {
    left: {
      up: 'crank_spin_snap',
      down: 'slow_crank_creak',
      left: '',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'crank_spin_snap'
    },
    right: {
      up: 'crank_spin_snap',
      down: 'slow_crank_creak',
      left: '',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'slow_crank_creak'
    }
  }
};
