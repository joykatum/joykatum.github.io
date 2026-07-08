import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const rainstick = {
  name: 'Rainstick',
  defaultLeft: 0,
  defaultRight: 0,
  drums: [
    {
      id: 0,
      label: 'Rainstick',
      pitchMult: 1,
      color: 'blonde',
      sizeValue: 25
    }
  ],
  sounds: {
    vertical_inversion_slide: (d) => playNoise(0.8, 1600, state.currentTiltVolume * 0.6),
    fast_tilt_crash: (d) => playNoise(0.2, 2000, state.currentTiltVolume * 0.9),
    shell_knock: (d) => playNoise(1.5, 1200, state.currentTiltVolume * 0.6)
  },
  touches: [
    {
      id: 'vertical_inversion_slide',
      label: 'Vertical inversion slide',
      shortName: 'Vertical inv...',
      description:
        'Flipping the long cactus tube slowly from vertical to vertical so internal pebbles cascade down through a maze of internal thorns'
    },
    {
      id: 'fast_tilt_crash',
      label: 'Fast tilt crash',
      shortName: 'Fast tilt crash',
      description:
        'Jerking the tube quickly to a sharp angle so all the pebbles slide at once for a sudden, abrasive crash'
    },
    {
      id: 'shell_knock',
      label: 'Shell Knock',
      shortName: 'Shell Knock',
      description:
        'Tapping the cactus shell body with a knuckle or ring while the pebbles are falling to superimpose a sharp click over the rushing water sound'
    }
  ],
  mappings: {
    left: {
      up: 'vertical_inversion_slide',
      down: 'fast_tilt_crash',
      left: 'shell_knock',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'vertical_inversion_slide'
    },
    right: {
      up: 'vertical_inversion_slide',
      down: 'fast_tilt_crash',
      left: 'shell_knock',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'fast_tilt_crash'
    }
  }
};
