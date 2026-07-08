import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const candombe = {
  name: 'Candombe',
  defaultLeft: 2,
  defaultRight: 1,
  drums: [
    {
      id: 0,
      label: 'Chico',
      pitchMult: 1.4,
      color: 'blonde-light',
      sizeValue: 16
    },
    {
      id: 1,
      label: 'Repique',
      pitchMult: 1,
      color: 'caramel',
      sizeValue: 19.5
    },
    {
      id: 2,
      label: 'Piano',
      pitchMult: 0.7,
      color: 'dark',
      sizeValue: 23.5
    }
  ],
  sounds: {
    mano: (d) => {
      const f = (d.id === 0 ? 320 : d.id === 1 ? 220 : 150) * d.pitchMult;
      playMembrane(f, 0.12, 1.0, true);
      playNoise(0.08, d.id === 0 ? 2500 : 1800, state.currentTiltVolume * 0.9);
    },
    palo: (d) => playMembrane((d.id === 0 ? 140 : d.id === 1 ? 90 : 55) * d.pitchMult, 0.6, 1.4, false),
    trigro_madera: (d) => playMembrane((d.id === 0 ? 140 : d.id === 1 ? 90 : 55) * d.pitchMult, 0.6, 1.4, false),
    cu_stave_rake: (d) => playMembrane((d.id === 0 ? 220 : d.id === 1 ? 150 : 90) * d.pitchMult, 0.1, 1.0, false)
  },
  touches: [
    {
      id: 'mano',
      label: 'Mano',
      shortName: 'Mano',
      description: 'Striking the skin with the bare hand using open or muted tones to anchor the syncopated foundation'
    },
    {
      id: 'palo',
      label: 'Palo',
      shortName: 'Palo',
      description: 'Whipping the skin with a wooden stick to produce highly resonant, piercing high-pitched accents'
    },
    {
      id: 'trigro_madera',
      label: 'Trigro / Madera',
      shortName: 'Trigro / Madera',
      description: 'Clicking the shaft of the wooden stick directly against the side staves of the barrel body'
    },
    {
      id: 'cu_stave_rake',
      label: 'Cuá Stave Rake',
      shortName: 'Cuá Stave Rake',
      description:
        'Dragging the wooden stick shaft up and down across the side seams of the barrel staves to create a long, raspy texture'
    }
  ],
  mappings: {
    left: {
      up: 'mano',
      down: 'palo',
      left: 'trigro_madera',
      right: 'cu_stave_rake',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'mano'
    },
    right: {
      up: 'mano',
      down: 'palo',
      left: 'trigro_madera',
      right: 'cu_stave_rake',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'palo'
    }
  }
};
