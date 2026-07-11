import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const uchiwadaiko = {
  origin: 'Japan',
  description:
    'The Uchiwa-daiko is a Japanese fan-drum shaped like a flat paddle. Played with a single stick, it produces a dry, cracking tone used historically in Buddhist chanting, kabuki theatre, and traditional matsuri festivals.',
  performers: [
    {
      name: 'Kodo Ensemble',
      spotify: 'true',
      apple: 'true'
    }
  ],
  songs: [
    {
      name: 'Matsuri Rythms',
      artist: 'Kodo',
      spotify: 'true',
      apple: 'true'
    }
  ],
  effectsSongs: [
    {
      name: 'Kabuki Snap Distortion',
      artist: 'Tokyo Theatre Sound',
      desc: 'Mild bitcrushing and drive are added to the fan-drum snap to elevate its dramatic stage presence.',
      url: '',
      platform: 'Spotify'
    }
  ],

  generateSVG: (id, colorType, lugsHtml) => `
    <rect x="47" y="45" width="6" height="50" rx="2" fill="url(#skin-${id})" stroke="#271305" stroke-width="1" filter="drop-shadow(0px 2px 2px rgba(0,0,0,0.5))"/>
            <circle cx="50" cy="40" r="39" fill="url(#skin-${id})" filter="brightness(1.3)" stroke="#18181b" stroke-width="2.2" filter="drop-shadow(0px 2px 2.5px rgba(0,0,0,0.4))"/>
            <circle cx="50" cy="40" r="10" fill="#dc2626" opacity="0.85"/>
            <circle cx="50" cy="40" r="38" fill="url(#overlay-${id})" opacity="0.6"/>
  `,
  name: 'Uchiwa-daiko',
  drums: [
    {
      id: 0,
      label: 'Uchiwa-daiko',
      pitchMult: 1,
      color: 'blonde-light',
      sizeValue: 15
    }
  ],
  sounds: {
    fan_head_slap: (d) => playMembrane(480 * d.pitchMult, 0.04, 0.95, true),
    handle_knock: (d) => playMembrane(190 * d.pitchMult, 0.05, 1.0, false),
    rim_click: (d) => playMembrane(720 * d.pitchMult, 0.03, 1.0, true),
    rapid_drum_roll: (d) => {
      playNoise(0.18, 1200, state.currentTiltVolume * 0.5);
      playMembrane(480 * d.pitchMult, 0.12, 0.8, false);
    }
  },
  touches: [
    {
      id: 'fan_head_slap',
      label: 'Fan head slap',
      shortName: 'Fan head slap',
      description:
        'Whipping a single wooden stick flat against the high-tension, fan-shaped drum membrane to create an instantaneous loud pop'
    },
    {
      id: 'handle_knock',
      label: 'Handle knock',
      shortName: 'Handle knock',
      description:
        'Striking the long wooden handle shaft with the stick to create a solid, high-tension wood click that bypasses the fan membrane'
    }
  ],
  mappings: {
    left: {
      up: 'fan_head_slap',
      down: 'handle_knock',
      left: 'rim_click',
      right: 'rapid_drum_roll',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'fan_head_slap'
    },
    right: {
      up: 'fan_head_slap',
      down: 'handle_knock',
      left: 'rim_click',
      right: 'rapid_drum_roll',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'handle_knock'
    }
  }
};
