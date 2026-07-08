import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const bombo = {
  name: 'Bombo',
  defaultLeft: 0,
  defaultRight: 0,
  drums: [
    {
      id: 0,
      label: 'Bombo',
      pitchMult: 1,
      color: 'dark',
      sizeValue: 21
    }
  ],
  sounds: {
    golpe_de_parche: (d) => playMembrane(72 * d.pitchMult, 0.6, 1.2, false),
    golpe_de_parche_apagado: (d) => playMembrane(95 * d.pitchMult, 0.15, 1.0, true),
    golpe_de_aro: (d) => playMembrane(480 * d.pitchMult, 0.08, 1.0, false),
    golpe_de_casco: (d) => playMembrane(380 * d.pitchMult, 0.05, 1.0, false)
  },
  touches: [
    {
      id: 'golpe_de_parche',
      label: 'Golpe de Parche',
      shortName: 'Golpe de Parche',
      description: 'Hitting the center of the heavy rawhide head to produce a deep, rumbling low-end pulse'
    },
    {
      id: 'golpe_de_aro',
      label: 'Golpe de Aro',
      shortName: 'Golpe de Aro',
      description:
        'Striking the thick wooden tuning rim of the drum body to create a sharp, hollow, wood-block counter-rhythm'
    }
  ],
  mappings: {
    left: {
      up: 'golpe_de_parche',
      down: 'golpe_de_aro',
      left: 'golpe_de_parche_apagado',
      right: 'golpe_de_casco',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'golpe_de_parche'
    },
    right: {
      up: 'golpe_de_parche',
      down: 'golpe_de_aro',
      left: 'golpe_de_parche_apagado',
      right: 'golpe_de_casco',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'golpe_de_aro'
    }
  }
};
