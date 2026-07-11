import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const bombo = {
  origin: 'Argentina',
  description:
    "The Bombo Legüero is an Argentine bass drum made from a hollowed tree trunk and sheep/goat skin. The name 'Legüero' signifies that its deep, low-frequency pulse can be heard a league ('legua') away in the open Pampas plains. Its rim and skin are struck with mallets to drive folk dances like the Chacarera.",
  performers: [
    {
      name: 'Mercedes Sosa',
      spotify: 'true',
      apple: 'true'
    }
  ],
  songs: [
    {
      name: 'Entre a Mi Pago Sin Golpear',
      artist: 'Mercedes Sosa',
      spotify: 'true',
      apple: 'true'
    }
  ],
  effectsSongs: [
    {
      name: 'Chacarera Sessions',
      artist: 'Traditional Folk Ensembles',
      desc: 'Placing a dynamic microphone inside the bombo and blending a clean skin click with a sub-bass expander yields a deep, chest-thumping heartbeat on modern stages.',
      url: 'https://open.spotify.com/track/2SshH0PzGgR8RoxU2pQpP6',
      platform: 'Spotify'
    }
  ],

  name: 'Bombo',
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
