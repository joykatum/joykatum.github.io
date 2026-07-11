import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const steelpan = {
  origin: 'Trinidad and Tobago',
  description:
    'The steelpan is a chromatic tuned percussion instrument made from industrial oil barrels. Developed in Trinidad in the 1930s by lower-class urban youth who were banned from street drumming, it represents an extraordinary acoustic feat where hammered indentations create perfectly tuned individual notes. It is the national instrument of Trinidad and Tobago.',
  performers: [
    {
      name: 'Liam Teague',
      spotify: 'true',
      apple: 'true'
    },
    {
      name: 'Ellie Mannette',
      spotify: 'true',
      apple: 'true'
    }
  ],
  songs: [
    {
      name: 'St. Thomas',
      artist: 'Sonny Rollins',
      spotify: 'true',
      apple: 'true'
    }
  ],
  effectsSongs: [
    {
      name: "I Know There's Gonna Be (Good Times)",
      artist: 'Jamie xx',
      desc: 'Bright steelpan riffs are treated with chorus, lush stereo delay, and room reverb to construct an open-air, summery, festival-ready electronic hook.',
      url: 'https://open.spotify.com/track/4jVlC05tDsz0I7Rof9Obe1',
      platform: 'Spotify'
    }
  ],

  generateSVG: (id, colorType, lugsHtml) => `
    <circle cx="50" cy="51.5" r="48" fill="#020617" opacity="0.6" filter="blur(2px)"/>
            <circle cx="50" cy="50" r="48" fill="url(#skin-${id})"/>
            <circle cx="50" cy="50" r="22" fill="none" stroke="#64748b" stroke-width="0.8" opacity="0.4" stroke-dasharray="2, 4"/>
            <line x1="50" y1="2" x2="50" y2="98" stroke="#64748b" stroke-width="0.5" opacity="0.3"/>
            <line x1="2" y1="50" x2="98" y2="50" stroke="#64748b" stroke-width="0.5" opacity="0.3"/>
            <ellipse cx="50" cy="12" rx="6" ry="4" fill="#0f172a" opacity="0.25"/><circle cx="50" cy="12" r="1" fill="#cbd5e1" opacity="0.8"/>
            <ellipse cx="50" cy="88" rx="6" ry="4" fill="#0f172a" opacity="0.25"/><circle cx="50" cy="88" r="1" fill="#cbd5e1" opacity="0.8"/>
            <ellipse cx="12" cy="50" rx="4" ry="6" fill="#0f172a" opacity="0.25"/><circle cx="12" cy="50" r="1" fill="#cbd5e1" opacity="0.8"/>
            <ellipse cx="88" cy="50" rx="4" ry="6" fill="#0f172a" opacity="0.25"/><circle cx="88" cy="50" r="1" fill="#cbd5e1" opacity="0.8"/>
            <circle cx="50" cy="50" r="47.5" fill="none" stroke="url(#chrome-${id})" stroke-width="3"/>
            <circle cx="50" cy="50" r="47.5" fill="url(#overlay-${id})" opacity="1.2"/>
  `,
  name: 'Steelpan',
  drums: [
    {
      id: 0,
      label: 'Lead Pan',
      pitchMult: 1,
      color: 'silver',
      sizeValue: 22
    }
  ],
  sounds: {
    indentation_strike: (d, velocity = 0.85) => {
      // Tuned convex note strike with rubber-tipped mallet
      playMembrane(440 * d.pitchMult, 0.6, 1.05, false, velocity);
      playAttackClick(0.015, 3200, 0.3 * velocity);
    },
    rapid_chordal_roll: (d, velocity = 0.8) => {
      // Arpeggiated sweeping melodic chord roll across the pan in stereo
      playMembrane(440 * d.pitchMult, 0.18, 1.0, false, velocity, -0.15);
      playAttackClick(0.01, 3200, 0.25 * velocity);
      setTimeout(() => {
        playMembrane(554 * d.pitchMult, 0.15, 1.0, false, velocity * 0.9, 0.15);
        playAttackClick(0.01, 3200, 0.2 * velocity);
      }, 45);
      setTimeout(() => {
        playMembrane(659 * d.pitchMult, 0.12, 1.0, false, velocity * 0.8, 0.0);
        playAttackClick(0.01, 3200, 0.15 * velocity);
      }, 90);
    },
    rim_ring: (d, velocity = 0.8) => {
      // Bright, industrial untuned metallic chrome skirt ring
      playMembrane(920 * d.pitchMult, 0.7, 1.0, true, velocity);
      playNoise(0.4, 4500, velocity * 0.5, 'highpass');
    },
    mute_slap: (d, velocity = 0.75) => {
      // Dry choked hand slap
      playMembrane(330 * d.pitchMult, 0.05, 0.9, true, velocity);
    }
  },
  touches: [
    {
      id: 'indentation_strike',
      label: 'Indentation strike',
      shortName: 'Indentation ...',
      description:
        'Striking the center of a tuned convex note indentation using a rubber-tipped mallet and lifting off instantly to avoid choking it'
    },
    {
      id: 'rapid_chordal_roll',
      label: 'Rapid chordal roll',
      shortName: 'Rapid chorda...',
      description:
        'Alternating ultra-rapid, light strikes between multiple notes to create a sustained, singing melody or chord'
    },
    {
      id: 'rim_ring',
      label: 'Rim Ring',
      shortName: 'Rim Ring',
      description:
        'Striking the un-tuned outer vertical chrome skirt or rim of the pan with the mallet shaft to create a bright, industrial metallic ring'
    }
  ],
  mappings: {
    left: {
      up: 'indentation_strike',
      down: 'rapid_chordal_roll',
      left: 'rim_ring',
      right: 'mute_slap',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'indentation_strike'
    },
    right: {
      up: 'indentation_strike',
      down: 'rapid_chordal_roll',
      left: 'rim_ring',
      right: 'mute_slap',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'rapid_chordal_roll'
    }
  }
};
