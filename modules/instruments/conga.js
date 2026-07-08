import { playMembrane, playNoise } from '../audio.js';
import { state } from '../state.js';

export const conga = {
  name: 'Congas',
  defaultLeft: 2,
  defaultRight: 3,
  drums: [
    {
      id: 0,
      label: 'Requinto',
      pitchMult: 1.3,
      color: 'caramel',
      sizeValue: 17
    },
    {
      id: 1,
      label: 'Quinto',
      pitchMult: 1.15,
      color: 'blonde-light',
      sizeValue: 18.5
    },
    {
      id: 2,
      label: 'Conga',
      pitchMult: 1.0,
      color: 'blonde',
      sizeValue: 20
    },
    {
      id: 3,
      label: 'Tumba',
      pitchMult: 0.85,
      color: 'darker',
      sizeValue: 21.5
    },
    {
      id: 4,
      label: 'Super Tumba',
      pitchMult: 0.75,
      color: 'dark',
      sizeValue: 23
    }
  ],
  sounds: {
    bajo: (d) => playMembrane(55 * d.pitchMult, 0.9, 1.3, false),
    abierto: (d) => playMembrane(110 * d.pitchMult, 0.6, 1.0, false),
    seco: (d) => playMembrane(180 * d.pitchMult, 0.15, 1.1, true),
    tapado: (d) => {
      playMembrane(180 * d.pitchMult, 0.08, 1.0, true);
      playNoise(0.02, 1800, state.currentTiltVolume * 0.4);
    },
    toque_tapado: (d) => playMembrane(130 * d.pitchMult, 0.05, 1.0, false),
    manoteo: (d) => playMembrane(90 * d.pitchMult, 0.1, 1.0, false),
    golpe_de_casco: (d) => playMembrane(400 * d.pitchMult, 0.05, 1.0, false)
  }
};
