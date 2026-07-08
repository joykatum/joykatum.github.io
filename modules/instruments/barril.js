import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const barril = {
  name: 'Barril',
  defaultLeft: 1,
  defaultRight: 0,
  drums: [
    {
      id: 0,
      label: 'Primo',
      pitchMult: 1.2,
      color: 'caramel',
      sizeValue: 18
    },
    {
      id: 1,
      label: 'Buleador',
      pitchMult: 0.85,
      color: 'darker',
      sizeValue: 21.5
    }
  ],
  sounds: {
    abierto: (d) => playMembrane((d.id === 0 ? 110 : 85) * d.pitchMult, 0.65, 1.1, false),
    seco: (d) => playMembrane((d.id === 0 ? 160 : 120) * d.pitchMult, 0.15, 1.1, true),
    cu: (d) => playMembrane((d.id === 0 ? 160 : 110) * d.pitchMult, 0.5, 1.0, false),
    choking_hand: (d) => playMembrane((d.id === 0 ? 180 : 130) * d.pitchMult, 0.08, 1.0, false)
  },
  touches: [
    {
      id: 'abierto',
      label: 'Abierto',
      shortName: 'Abierto',
      description: 'A clean, unmuted strike near the edge of the skin to draw out a resonant bass or mid-range tone'
    },
    {
      id: 'seco',
      label: 'Seco',
      shortName: 'Seco',
      description: 'A sharp, high-pitched accent played with a slapping technique on the edge of the head'
    },
    {
      id: 'cu',
      label: 'Cuá',
      shortName: 'Cuá',
      description:
        'Beating a continuous syncopated counter-rhythm directly against the wooden side staves of the barrel'
    },
    {
      id: 'choking_hand',
      label: 'Choking Hand',
      shortName: 'Choking Hand',
      description:
        'Pressing the forearm firmly across the center of the head while striking the edge with the other hand to produce a tight, highly compressed mid-range pop'
    }
  ],
  mappings: {
    left: {
      up: 'abierto',
      down: 'seco',
      left: 'cu',
      right: 'choking_hand',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'abierto'
    },
    right: {
      up: 'abierto',
      down: 'seco',
      left: 'cu',
      right: 'choking_hand',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'seco'
    }
  }
};
