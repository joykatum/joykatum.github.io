import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const waterdrums = {
  origin: 'West Africa / Native America',
  description:
    'Water Drums consist of hollowed gourds floating upside down in basins of water. Struck with a mallet or hand, the water acts as a natural dampener and resonator, producing a warm, organic, liquid bass beat.',
  performers: [
    {
      name: 'Baka Forest People',
      spotify: 'true',
      apple: 'true'
    }
  ],
  songs: [
    {
      name: 'Forest Water Beats',
      artist: 'Baka Forest People',
      spotify: 'true',
      apple: 'true'
    }
  ],
  effectsSongs: [
    {
      name: 'Liquid Ripple Resonance',
      artist: 'Rainforest Field Records',
      desc: 'Water thumps are routed through a resonator tuned to water frequencies, producing a sparkling, organic splash texture.',
      url: '',
      platform: 'Spotify'
    }
  ],

  generateSVG: (id, colorType, lugsHtml) => `
    <circle cx="50" cy="50" r="48" fill="#0f172a" stroke="#475569" stroke-width="2" filter="drop-shadow(0 2px 2px rgba(0,0,0,0.5))"/>
            <circle cx="50" cy="50" r="45.5" fill="#0369a1" filter="brightness(0.6)"/>
            <circle cx="50" cy="50" r="36" fill="none" stroke="#0ea5e9" stroke-width="1" opacity="0.3"/>
            <circle cx="50" cy="50" r="26" fill="none" stroke="#38bdf8" stroke-width="0.8" opacity="0.4"/>
            <circle cx="50" cy="50" r="20" fill="url(#skin-${id})" stroke="#271305" stroke-width="1.5" filter="drop-shadow(0 2px 1.5px rgba(0,0,0,0.5))"/>
            <circle cx="50" cy="50" r="20" fill="url(#overlay-${id})" opacity="1.3"/>
  `,
  name: 'Water Drums',
  drums: [
    {
      id: 0,
      label: 'Floating Gourd',
      pitchMult: 1,
      color: 'teal',
      sizeValue: 20
    }
  ],
  sounds: {
    gourd_boom: (d) => playMembrane(55 * d.pitchMult, 0.65, 1.5, false),
    water_splash: (d) => {
      playMembrane(130 * d.pitchMult, 0.45, 1.25, false);
      playNoise(0.25, 1200, state.currentTiltVolume * 0.4);
    },
    water_slap: (d) => {
      playMembrane(220 * d.pitchMult, 0.3, 1.1, true);
      playNoise(0.4, 2500, state.currentTiltVolume * 0.85);
    },
    gourd_mute: (d) => {
      playMembrane(110 * d.pitchMult, 0.15, 1.0, false);
      playNoise(0.12, 1000, state.currentTiltVolume * 0.3);
    },
    water_drip: (d) => playTablaSlideUp(75 * d.pitchMult, 160 * d.pitchMult, 0.5)
  },
  touches: [
    {
      id: 'gourd_boom',
      label: 'Gourd Boom',
      shortName: 'Gourd Boom',
      description:
        'Striking near the center of the Water Drums head with a relaxed palm to produce a deep, booming low-frequency bass tone.'
    },
    {
      id: 'water_splash',
      label: 'Water Splash',
      shortName: 'Water Splash',
      description:
        'A traditional playing technique on the Water Drums that emphasizes its unique timbre and acoustic properties.'
    },
    {
      id: 'water_slap',
      label: 'Water Slap',
      shortName: 'Water Slap',
      description:
        'A sharp, rapid strike with slightly cupped fingertips near the rim of the Water Drums to produce an explosive, high-pitched cracking sound.'
    },
    {
      id: 'gourd_mute',
      label: 'Gourd Mute',
      shortName: 'Gourd Mute',
      description:
        'Striking near the edge or rim of the Water Drums and allowing the head or body to rebound freely for a clear, resonant open tone.'
    },
    {
      id: 'water_drip',
      label: 'Water Drip',
      shortName: 'Water Drip',
      description:
        'A traditional playing technique on the Water Drums that emphasizes its unique timbre and acoustic properties.'
    }
  ],
  mappings: {
    left: {
      up: 'gourd_boom',
      down: 'water_splash',
      left: 'water_slap',
      right: 'gourd_mute',
      upLong: 'water_drip',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'gourd_boom'
    },
    right: {
      up: 'gourd_boom',
      down: 'water_splash',
      left: 'water_slap',
      right: 'gourd_mute',
      upLong: 'water_drip',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'water_splash'
    }
  }
};
