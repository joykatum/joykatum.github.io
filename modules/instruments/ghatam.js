import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const ghatam = {
  origin: 'South India',
  description:
    'The Ghatam is a South Indian clay pot percussion instrument, specifically baked with iron filings to produce high-pitched, metallic ringing tones. Struck with fingers, heels of the hands, and even the player’s chest.',
  performers: [
    {
      name: 'Vikku Vinayakram',
      spotify: 'true',
      apple: 'true'
    }
  ],
  songs: [
    {
      name: 'A Jhumpa Tala',
      artist: 'Vikku Vinayakram',
      spotify: 'true',
      apple: 'true'
    }
  ],
  effectsSongs: [
    {
      name: 'Clay Resonance Expander',
      artist: 'South Indian Percussion Group',
      desc: 'The clay taps are treated with a short room ambiance reverb and narrow frequency bandpass, clarifying the bright acoustic ring.',
      url: '',
      platform: 'Spotify'
    }
  ],

  generateSVG: (id, colorType, lugsHtml) => `
    <!-- Heavy bottom shadow -->
            <circle cx="50" cy="54" r="45" fill="#020617" opacity="0.6" filter="blur(3px)"/>
            
            <!-- Beautiful spherical terracotta pot -->
            <circle cx="50" cy="50" r="44" fill="url(#skin-${id})" stroke="#451a03" stroke-width="1.8"/>
            
            <!-- Flared pot collar/rim on top seen in perspective -->
            <ellipse cx="50" cy="18" rx="14" ry="4.5" fill="none" stroke="#2c1404" stroke-width="3"/>
            <ellipse cx="50" cy="18" rx="12" ry="3.5" fill="#140700" stroke="#451a03" stroke-width="1"/>
            
            <!-- Shading overlay to make it highly 3D/spherical -->
            <circle cx="50" cy="50" r="44" fill="url(#overlay-${id})" opacity="0.95"/>
            
            <!-- Highlight to emphasize 3D sphere -->
            <ellipse cx="32" cy="32" rx="5" ry="10" fill="#ffffff" opacity="0.15" transform="rotate(-30, 32, 32)"/>
  `,
  name: 'Ghatam',
  drums: [
    {
      id: 0,
      label: 'Ghatam',
      pitchMult: 1,
      color: 'terracotta',
      sizeValue: 19
    }
  ],
  sounds: {
    belly_vacuum_pop: (d) => playMembrane(450 * d.pitchMult, 0.15, 1.0, true),
    finger_flick_pop: (d) => playMembrane(450 * d.pitchMult, 0.15, 1.0, true),
    mouth_open_slap: (d) => playMembrane(450 * d.pitchMult, 0.15, 1.0, true),
    neck_rim_ring: (d) => playMembrane(300 * d.pitchMult, 0.3, 1.1, false)
  },
  touches: [
    {
      id: 'belly_vacuum_pop',
      label: 'Belly vacuum pop',
      shortName: 'Belly vacuum...',
      description:
        'Striking the open neck/mouth of the clay pot directly against the bare stomach to trap air and create a deep bass thump'
    },
    {
      id: 'finger_flick_pop',
      label: 'Finger-flick pop',
      shortName: 'Finger-flick...',
      description:
        'Snapping the fingertips or fingernails sharply against the baked outer clay walls to produce metallic, ceramic pops'
    },
    {
      id: 'mouth_open_slap',
      label: 'Mouth open slap',
      shortName: 'Mouth open slap',
      description:
        'Slapping the open top hole with a flat palm while the pot sits loosely, creating a hollow acoustic pop'
    },
    {
      id: 'neck_rim_ring',
      label: 'Neck Rim Ring',
      shortName: 'Neck Rim Ring',
      description:
        'Striking the thick, reinforced clay rim around the top opening with a heavy ring or coin to produce a high-pitched, crystalline chime'
    }
  ],
  mappings: {
    left: {
      up: 'belly_vacuum_pop',
      down: 'finger_flick_pop',
      left: 'mouth_open_slap',
      right: 'neck_rim_ring',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'belly_vacuum_pop'
    },
    right: {
      up: 'belly_vacuum_pop',
      down: 'finger_flick_pop',
      left: 'mouth_open_slap',
      right: 'neck_rim_ring',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'finger_flick_pop'
    }
  }
};
