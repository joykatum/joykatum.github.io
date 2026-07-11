import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const barril = {
  origin: 'Puerto Rico',
  description:
    "The barril de bomba is a traditional barrel drum used in Puerto Rican Bomba music. Made from rum barrels, it features a single head. The higher-pitched 'Subidor' drum improvises in response to the dancer's moves, while the lower 'Buleador' holds a steady rhythm.",
  performers: [
    {
      name: 'Modesto Cepeda',
      spotify: 'true',
      apple: 'true'
    },
    {
      name: 'Hermanos Ayala',
      spotify: 'true',
      apple: 'true'
    }
  ],
  songs: [
    {
      name: 'Bomba Te Traigo Yo',
      artist: 'Ismael Rivera',
      spotify: 'true',
      apple: 'true'
    }
  ],
  effectsSongs: [
    {
      name: 'Bomba Drum Gated Compression',
      artist: 'Afro-Puerto Rican Beats',
      desc: 'Hard, fast gated compression is applied to the barrel strikes to keep the high-frequency slaps crisp and powerful against the background vocals.',
      url: '',
      platform: 'Spotify'
    }
  ],

  name: 'Barril',
  defaultLeft: 1,
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
