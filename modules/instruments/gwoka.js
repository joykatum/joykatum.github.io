import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const gwoka = {
  name: 'Gwo Ka',
  defaultLeft: 1,
  defaultRight: 0,
  drums: [
    {
      id: 0,
      label: 'Markeur',
      pitchMult: 1.15,
      color: 'caramel',
      sizeValue: 18.5
    },
    {
      id: 1,
      label: 'Boula',
      pitchMult: 0.8,
      color: 'darker',
      sizeValue: 22.5
    }
  ],
  sounds: {
    boul: (d) => playMembrane((d.id === 0 ? 160 : 100) * d.pitchMult, 0.1, 1.0, false),
    mak: (d) => playMembrane((d.id === 0 ? 175 : 110) * d.pitchMult, 0.55, 1.1, false),
    tak_rim_strike: (d) => playMembrane(450 * d.pitchMult, 0.05, 1.0, true),
    choke_muff: (d) => playMembrane((d.id === 0 ? 175 : 110) * d.pitchMult, 0.1, 0.8, true)
  },
  touches: [
    {
      id: 'boul',
      label: 'Boulá',
      shortName: 'Boulá',
      description:
        'Hitting the center of the large barrel head with wide palm strikes to maintain the steady, driving bass groove'
    },
    {
      id: 'mak',
      label: 'Maké',
      shortName: 'Maké',
      description:
        'Executing rapid, high-pitched edge snaps and improvisational slaps to mirror the precise steps of a dancer'
    }
  ],
  mappings: {
    left: {
      up: 'boul',
      down: 'mak',
      left: 'tak_rim_strike',
      right: 'choke_muff',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'boul'
    },
    right: {
      up: 'boul',
      down: 'mak',
      left: 'tak_rim_strike',
      right: 'choke_muff',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'mak'
    }
  }
};
