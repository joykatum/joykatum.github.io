import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const surdo = {
  origin: 'Brazil (Rio de Janeiro & Bahia)',
  description:
    'The surdo is a large, deep double-headed bass drum. It forms the rhythmic floor of the Samba school parades (Batucada) in Rio de Janeiro and Bahia. It is played with a soft mallet in one hand while the other hand dampens or accents the skin, driving the heavy syncopation and marking the pulse of the carnival.',
  performers: [
    {
      name: 'Monobloco',
      spotify: 'true',
      apple: 'true'
    },
    {
      name: 'Olodum',
      spotify: 'true',
      apple: 'true'
    }
  ],
  songs: [
    {
      name: "They Don't Care About Us",
      artist: 'Michael Jackson ft. Olodum',
      spotify: 'true',
      apple: 'true'
    }
  ],
  effectsSongs: [
    {
      name: 'Samba Reggae Beats',
      artist: 'Olodum',
      desc: 'Sub-harmonic bass synthesizers are triggered by Surdo strikes, making the low-end hits rumble seismically in deep club and stadium settings.',
      url: 'https://open.spotify.com/track/2SshH0PzGgR8RoxU2pQpP6',
      platform: 'Spotify'
    }
  ],

  generateSVG: (id, colorType, lugsHtml) => `
    <circle cx="50" cy="50" r="47" fill="#1e293b" opacity="0.08"/>
            
            <!-- Deep, large 3D cylindrical aluminum shell -->
            <g transform="rotate(-5, 50, 50)">
              <!-- Shell shadow -->
              <rect x="22" y="20" width="56" height="60" rx="14" fill="#020617" opacity="0.4" filter="blur(3.5px)"/>
              
              <!-- Aluminum metal cylinder body -->
              <rect x="24" y="22" width="52" height="56" rx="6" fill="url(#chrome-${id})" stroke="#475569" stroke-width="1.8" filter="drop-shadow(0 3px 4px rgba(0,0,0,0.4))"/>
              
              <!-- Long vertical steel tension rods spanning the entire cylinder height -->
              <line x1="29" y1="18" x2="29" y2="82" stroke="#94a3b8" stroke-width="1.2"/>
              <line x1="39" y1="18" x2="39" y2="82" stroke="#94a3b8" stroke-width="1.2"/>
              <line x1="50" y1="18" x2="50" y2="82" stroke="#94a3b8" stroke-width="1.2"/>
              <line x1="61" y1="18" x2="61" y2="82" stroke="#94a3b8" stroke-width="1.2"/>
              <line x1="71" y1="18" x2="71" y2="82" stroke="#94a3b8" stroke-width="1.2"/>
              
              <!-- Small silver brackets on shell holding the rods -->
              <rect x="28" y="48" width="2" height="4" fill="#64748b"/>
              <rect x="38" y="48" width="2" height="4" fill="#64748b"/>
              <rect x="49" y="48" width="2" height="4" fill="#64748b"/>
              <rect x="60" y="48" width="2" height="4" fill="#64748b"/>
              <rect x="70" y="48" width="2" height="4" fill="#64748b"/>
              
              <!-- Top head with metal rim -->
              <ellipse cx="50" cy="22" rx="26" ry="6" fill="#f8fafc" stroke="url(#chrome-${id})" stroke-width="2" filter="drop-shadow(0 -1px 1px rgba(0,0,0,0.3))"/>
              <ellipse cx="50" cy="22" rx="22" ry="5" fill="none" stroke="#94a3b8" stroke-width="0.5" opacity="0.5"/>
              
              <!-- Bottom head with metal rim -->
              <ellipse cx="50" cy="78" rx="26" ry="6" fill="#cbd5e1" stroke="url(#chrome-${id})" stroke-width="2"/>
              
              <!-- Ambient 3D shading over shell -->
              <rect x="24" y="22" width="52" height="56" rx="6" fill="url(#overlay-${id})" opacity="0.6"/>
              <line x1="26" y1="24" x2="26" y2="76" stroke="#ffffff" stroke-width="1.5" opacity="0.25"/>
            </g>
  `,
  name: 'Surdo',
  drums: [
    {
      id: 0,
      label: 'Surdo',
      pitchMult: 1,
      color: 'darker',
      sizeValue: 26
    }
  ],
  sounds: {
    open_strike: (d, velocity = 0.85) => {
      // Deep, low fundamental boom of a massive 22" or 24" surdo (around 48Hz)
      playMembrane(48 * d.pitchMult, 1.1, 1.5, false, velocity, 0.0);
      playAttackClick(0.016, 750, 0.35 * velocity);
    },
    muted_mallet_strike: (d, velocity = 0.8) => {
      // Dampened strike with hand on skin
      playMembrane(52 * d.pitchMult, 0.16, 1.0, true, velocity, 0.0);
      playAttackClick(0.012, 800, 0.3 * velocity);
      playNoise(0.05, 400, velocity * 0.15, 'lowpass');
    },
    hand_keep_time_tap: (d, velocity = 0.4) => {
      // Quiet bare-hand tap on the head - higher frequency, very short damp decay
      playMembrane(125 * d.pitchMult, 0.06, 1.0, true, velocity, 0.0);
      playNoise(0.02, 1200, velocity * 0.25, 'bandpass', 3.0);
    },
    rim_click: (d, velocity = 0.75) => {
      // Sharp wood-on-metal counterhoop click (approx 880Hz)
      playMembrane(880 * d.pitchMult, 0.06, 1.0, true, velocity, -0.1);
      playAttackClick(0.008, 4000, 0.5 * velocity);
    }
  },
  touches: [
    {
      id: 'open_strike',
      label: 'Open strike',
      shortName: 'Open strike',
      description:
        'Hitting the center with a soft mallet and pulling away immediately to let the massive bass note ring out'
    },
    {
      id: 'muted_mallet_strike',
      label: 'Muted mallet strike',
      shortName: 'Muted mallet...',
      description:
        'Striking the center with the mallet while the non-dominant hand rests firmly on the skin to kill the sustain'
    },
    {
      id: 'hand_keep_time_tap',
      label: 'Hand keep-time tap',
      shortName: 'Hand keep-ti...',
      description:
        'Lightly tapping the bare non-dominant hand against the skin between mallet strikes to maintain subdivisions'
    },
    {
      id: 'rim_click',
      label: 'Rim Click',
      shortName: 'Rim Click',
      description:
        'Striking the metal counterhoop with the wooden shaft of the mallet to create a bright, high-pitched metallic click'
    }
  ],
  mappings: {
    left: {
      up: 'open_strike',
      down: 'muted_mallet_strike',
      left: 'hand_keep_time_tap',
      right: 'rim_click',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'open_strike'
    },
    right: {
      up: 'open_strike',
      down: 'muted_mallet_strike',
      left: 'hand_keep_time_tap',
      right: 'rim_click',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'muted_mallet_strike'
    }
  }
};
