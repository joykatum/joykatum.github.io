import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const ashiko = {
  name: 'Ashiko',
  defaultLeft: 0,
  defaultRight: 0,
  drums: [
    {
      id: 0,
      label: 'Ashiko',
      pitchMult: 1,
      color: 'caramel',
      sizeValue: 22
    }
  ],
  sounds: {
    bass_tone: (d) => playMembrane(60 * d.pitchMult, 0.75, 1.5, false),
    open_tone: (d) => playMembrane(210 * d.pitchMult, 0.45, 1.0, false),
    slap_tone: (d) => playMembrane(380 * d.pitchMult, 0.12, 1.0, true),
    aro_golpe: (d) => playMembrane(380 * d.pitchMult, 0.12, 1.0, true)
  },
  touches: [
    {
      id: 'bass_tone',
      label: 'Bass tone',
      shortName: 'Bass tone',
      description:
        'Striking the dead-center of the head with a flat palm, yielding a tight bass response due to the tapered cone shape'
    },
    {
      id: 'open_tone',
      label: 'Open tone',
      shortName: 'Open tone',
      description: 'A firm hit near the outer rim with fingers held together, allowing the drumhead to ring out clearly'
    },
    {
      id: 'slap_tone',
      label: 'Slap tone',
      shortName: 'Slap tone',
      description:
        'Snapping the relaxed fingertips against the absolute perimeter to produce a high-pitched, piercing crack'
    },
    {
      id: 'aro_golpe',
      label: 'Aro Golpe',
      shortName: 'Aro Golpe',
      description:
        'Striking the thick wooden structural hoops or body staves with a heavy stick to create a dry, hollow, high-pitched cracking accent'
    }
  ],
  mappings: {
    left: {
      up: 'bass_tone',
      down: 'open_tone',
      left: 'slap_tone',
      right: 'aro_golpe',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'bass_tone'
    },
    right: {
      up: 'bass_tone',
      down: 'open_tone',
      left: 'slap_tone',
      right: 'aro_golpe',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'open_tone'
    }
  }
};
