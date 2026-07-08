import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const surdo = {
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
  defaultLeft: 0,
  defaultRight: 0,
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
    open_strike: (d) => playMembrane(55 * d.pitchMult, 1.1, 1.6, false),
    muted_mallet_strike: (d) => playMembrane(60 * d.pitchMult, 0.2, 1.0, false),
    hand_keep_time_tap: (d) => playMembrane(60 * d.pitchMult, 0.2, 1.0, false),
    rim_click: (d) => playMembrane(120 * d.pitchMult, 0.5, 1.2, true)
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
