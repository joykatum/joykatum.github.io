import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const framed_rumbla = {
  name: 'Framed Rumbla',
  defaultLeft: 0,
  defaultRight: 0,
  drums: [
    {
      id: 0,
      label: 'Framed Rumbla',
      pitchMult: 1,
      color: 'blonde',
      sizeValue: 19
    }
  ],
  sounds: {
    rumbla_bass: (d) => {
      playMembrane(70 * d.pitchMult, 0.5, 1.4);
      playNoise(0.15, 800, state.currentTiltVolume * 0.25);
    },
    rumbla_open: (d) => {
      playMembrane(120 * d.pitchMult, 0.4, 1.1);
      playNoise(0.12, 1000, state.currentTiltVolume * 0.3);
    },
    rumbla_slap: (d) => {
      playMembrane(220 * d.pitchMult, 0.15, 1.1, true);
      playNoise(0.18, 2200, state.currentTiltVolume * 0.7);
    },
    rumbla_mute: (d) => playNoise(0.1, 1500, state.currentTiltVolume * 0.5),
    rumbla_tap: (d) => playNoise(0.4, 1200, state.currentTiltVolume * 0.5)
  },
  touches: [
    {
      id: 'rumbla_bass',
      label: 'Bass',
      shortName: 'Bass',
      description:
        'Striking near the center of the Framed Rumbla head with a relaxed palm to produce a deep, booming low-frequency bass tone.'
    },
    {
      id: 'rumbla_open',
      label: 'Open',
      shortName: 'Open',
      description:
        'Striking near the edge or rim of the Framed Rumbla and allowing the head or body to rebound freely for a clear, resonant open tone.'
    },
    {
      id: 'rumbla_slap',
      label: 'Slap',
      shortName: 'Slap',
      description:
        'A sharp, rapid strike with slightly cupped fingertips near the rim of the Framed Rumbla to produce an explosive, high-pitched cracking sound.'
    },
    {
      id: 'rumbla_mute',
      label: 'Mute',
      shortName: 'Mute',
      description:
        'Striking the Framed Rumbla while keeping the other hand or fingers pressed against the skin to deaden resonance and yield a short, closed pop.'
    },
    {
      id: 'rumbla_tap',
      label: 'Tap',
      shortName: 'Tap',
      description:
        'Alternating between the heel of the palm and the fingertips on the Framed Rumbla to keep steady time and create rapid rolling textures.'
    }
  ],
  mappings: {
    left: {
      up: 'rumbla_bass',
      down: 'rumbla_open',
      left: 'rumbla_slap',
      right: 'rumbla_mute',
      upLong: 'rumbla_tap',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'rumbla_bass'
    },
    right: {
      up: 'rumbla_bass',
      down: 'rumbla_open',
      left: 'rumbla_slap',
      right: 'rumbla_mute',
      upLong: 'rumbla_tap',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'rumbla_open'
    }
  }
};
