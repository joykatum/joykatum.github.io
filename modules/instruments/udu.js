import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const udu = {
  origin: 'Nigeria (Igbo)',
  description:
    'The Udu is a clay pot drum originating from Igbo women in Nigeria. It features a side hole alongside the main opening. By striking the holes and skin, players produce hollow, liquid bass drops and ceramic taps.',
  performers: [
    {
      name: 'Jamey Haddad',
      spotify: 'true',
      apple: 'true'
    }
  ],
  songs: [
    {
      name: 'Clay Beats',
      artist: 'Jamey Haddad',
      spotify: 'true',
      apple: 'true'
    }
  ],
  effectsSongs: [
    {
      name: 'Liquid Clay Pitch Slide',
      artist: 'World Percussion Project',
      desc: 'A dynamic formant filter is applied to the side-hole bass hits, emphasizing the watery, sweeping vocal-like tones.',
      url: '',
      platform: 'Spotify'
    }
  ],

  generateSVG: (id, colorType, lugsHtml) => `
    <!-- Heavy bottom shadow -->
            <circle cx="50" cy="56" r="44" fill="#020617" opacity="0.7" filter="blur(3.5px)"/>
            
            <!-- Elegant clay pot body -->
            <path d="M 50 16 Q 22 25, 22 58 Q 22 92, 50 92 Q 78 92, 78 58 Q 78 25, 50 16 Z" fill="url(#skin-${id})" stroke="#1c0d02" stroke-width="1.8" filter="drop-shadow(0 2px 3.5px rgba(0,0,0,0.45))"/>
            
            <!-- Flared Pot Neck/Rim -->
            <path d="M 50 16 Q 42 16, 42 8 Q 42 5, 50 5 Q 58 5, 58 8 Q 58 16, 50 16 Z" fill="url(#skin-${id})" stroke="#1c0d02" stroke-width="1.8"/>
            <ellipse cx="50" cy="7" rx="6" ry="2" fill="#090302" stroke="#1c0d02" stroke-width="0.8"/>
            
            <!-- Traditional painted white/ochre decorative rings around the belly -->
            <path d="M 23 48 Q 50 58, 77 48" fill="none" stroke="#fef08a" stroke-width="1.2" opacity="0.35"/>
            <path d="M 22 54 Q 50 64, 78 54" fill="none" stroke="#fef08a" stroke-width="1.8" opacity="0.35"/>
            
            <!-- Side Hole (resonant chamber) with shaded interior depth -->
            <ellipse cx="36" cy="46" rx="9.5" ry="7.5" fill="#090302" stroke="#451a03" stroke-width="1.5" transform="rotate(-15, 36, 46)" filter="drop-shadow(1px 2px 1.5px rgba(0,0,0,0.5))"/>
            <ellipse cx="35" cy="45.5" rx="8" ry="6" fill="#040100"/>
            
            <!-- Belly highlight -->
            <ellipse cx="62" cy="40" rx="6" ry="12" fill="#ffffff" opacity="0.12" transform="rotate(-25, 62, 40)"/>
            
            <!-- Ambient 3D clay pot overlay -->
            <path d="M 50 16 Q 22 25, 22 58 Q 22 92, 50 92 Q 78 92, 78 58 Q 78 25, 50 16 Z" fill="url(#overlay-${id})" opacity="0.9"/>
  `,
  name: 'Udu',
  drums: [
    {
      id: 0,
      label: 'Clay Udu',
      pitchMult: 1,
      color: 'terracotta',
      sizeValue: 19
    }
  ],
  sounds: {
    ceramic_side_body_slap: (d, velocity = 0.8) => {
      // Crisp ceramic slap on the side of the clay vessel (around 450Hz)
      playMembrane(450 * d.pitchMult, 0.08, 1.1, true, velocity, 0.0);
      playAttackClick(0.01, 3800, 0.5 * velocity);
      playNoise(0.015, 3000, velocity * 0.35, 'highpass');
    },
    mouth_port_palm_pop: (d, velocity = 0.9) => {
      // The classic deep, hollow air-column "Whoomph" (around 65Hz)
      playMembrane(65 * d.pitchMult, 0.42, 1.35, false, velocity, -0.05);
      // Low frequency air displacement noise
      playNoise(0.12, 180, velocity * 0.4, 'lowpass');
      playAttackClick(0.02, 350, 0.3 * velocity);
    },
    neck_scratch: (d, velocity = 0.65) => {
      // Crisp fingernail scraping across the clay neck ridges
      playNoise(0.24, 1800, velocity * 0.75, 'bandpass', 4.0);
    },
    ceramic_finger_tap: (d, velocity = 0.7) => {
      // Light, high glass-like click on the top rim (around 720Hz)
      playMembrane(720 * d.pitchMult, 0.04, 0.9, true, velocity, 0.05);
      playAttackClick(0.006, 5200, 0.65 * velocity);
    }
  },
  touches: [
    {
      id: 'ceramic_side_body_slap',
      label: 'Ceramic side body slap',
      shortName: 'Ceramic side...',
      description: 'Slapping the side of the baked clay body with open fingers to create a sharp, high ceramic crack'
    },
    {
      id: 'mouth_port_palm_pop',
      label: 'Mouth port palm pop',
      shortName: 'Mouth port p...',
      description:
        'Striking the open side-hole with a flat palm to compress the internal air column for a deep, hollow "whoomph" sound'
    },
    {
      id: 'neck_scratch',
      label: 'Neck Scratch',
      shortName: 'Neck Scratch',
      description:
        'Scraping the textured clay around the neck opening with the fingernails to create a crisp, continuous, ceramic rustle'
    }
  ],
  mappings: {
    left: {
      up: 'ceramic_side_body_slap',
      down: 'mouth_port_palm_pop',
      left: 'neck_scratch',
      right: 'ceramic_finger_tap',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'ceramic_side_body_slap'
    },
    right: {
      up: 'ceramic_side_body_slap',
      down: 'mouth_port_palm_pop',
      left: 'neck_scratch',
      right: 'ceramic_finger_tap',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'mouth_port_palm_pop'
    }
  }
};
