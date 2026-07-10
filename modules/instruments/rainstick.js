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
    vertical_inversion_slide: (d, velocity = 0.8) => {
      // Beautiful long textured cascade using layered noise bursts with different decay and bandpass frequencies
      playNoise(2.2, 1200, velocity * 0.5, 'bandpass', 1.5);
      setTimeout(() => {
        playNoise(1.8, 1500, velocity * 0.4, 'bandpass', 2.0);
      }, 150);
      setTimeout(() => {
        playNoise(1.3, 1800, velocity * 0.3, 'highpass');
      }, 350);
    },
    fast_tilt_crash: (d, velocity = 0.9) => {
      // Sharp, sudden slide crash of pebbles
      playNoise(0.4, 2500, velocity * 1.1, 'highpass');
      playNoise(0.35, 1400, velocity * 0.6, 'bandpass', 2.5);
    },
    shell_knock: (d, velocity = 0.8) => {
      // Wooden hollow knuckles/ring tap
      playMembrane(190 * d.pitchMult, 0.08, 1.0, false, velocity);
      playAttackClick(0.01, 1500, 0.5 * velocity);
      // Small pebble reaction to the knock
      playNoise(0.8, 1600, velocity * 0.3, 'bandpass');
    }
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
