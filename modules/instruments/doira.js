import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const doira = {
  name: 'Doira',
  defaultLeft: 0,
  defaultRight: 0,
  drums: [
    {
      id: 0,
      label: 'Doira Head',
      pitchMult: 1,
      color: 'blonde',
      sizeValue: 20.5
    }
  ],
  sounds: {
    doira_dum: (d) => playMembrane(120 * d.pitchMult, 0.48, 1.15, false),
    doira_tak: (d) => playMembrane(175 * d.pitchMult, 0.38, 1.0, false),
    doira_kah: (d) => {
      playMembrane(310 * d.pitchMult, 0.12, 1.0, true);
      playNoise(0.08, 2600, state.currentTiltVolume * 0.95);
    },
    doira_muff: (d) => {
      playMembrane(215 * d.pitchMult, 0.1, 1.0, true);
      playNoise(0.24, 4200, state.currentTiltVolume * 1.1);
    },
    doira_snap: (d) => playNoise(0.16, 4800, state.currentTiltVolume * 1.2)
  },
  touches: [
    {
      id: 'doira_dum',
      label: 'Dum',
      shortName: 'Dum',
      description:
        'A traditional playing technique on the Doira that emphasizes its unique timbre and acoustic properties.'
    },
    {
      id: 'doira_tak',
      label: 'Tak',
      shortName: 'Tak',
      description:
        'Striking near the edge or rim of the Doira and allowing the head or body to rebound freely for a clear, resonant open tone.'
    },
    {
      id: 'doira_kah',
      label: 'Kah',
      shortName: 'Kah',
      description:
        'A traditional playing technique on the Doira that emphasizes its unique timbre and acoustic properties.'
    },
    {
      id: 'doira_muff',
      label: 'Muff',
      shortName: 'Muff',
      description:
        'Striking the Doira while keeping the other hand or fingers pressed against the skin to deaden resonance and yield a short, closed pop.'
    },
    {
      id: 'doira_snap',
      label: 'Snap',
      shortName: 'Snap',
      description:
        'A traditional playing technique on the Doira that emphasizes its unique timbre and acoustic properties.'
    }
  ],
  mappings: {
    left: {
      up: 'doira_dum',
      down: 'doira_tak',
      left: 'doira_kah',
      right: 'doira_muff',
      upLong: 'doira_snap',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'doira_dum'
    },
    right: {
      up: 'doira_dum',
      down: 'doira_tak',
      left: 'doira_kah',
      right: 'doira_muff',
      upLong: 'doira_snap',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'doira_tak'
    }
  }
};
