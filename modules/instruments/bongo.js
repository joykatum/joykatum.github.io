import { playMembrane, playNoise, playTablaSlideUp, playAttackClick } from '../audio.js';
import { state } from '../state.js';

export const bongo = {
  name: 'Bongos',
  defaultLeft: 0,
  defaultRight: 0,
  drums: [
    {
      id: 0,
      label: 'Bongos',
      pitchMult: 1.0,
      color: 'blonde',
      sizeValue: 24
    }
  ],
  sounds: {
    martillo: (d, velocity = 0.8) => {
      const pan = d.id === 0 ? -0.25 : 0.25;
      const f = (d.id === 0 ? 340 : 170) * d.pitchMult;
      playMembrane(f, 0.06, 1.0, true, velocity, pan);
      playAttackClick(0.008, 3800, 0.45 * velocity);
    },
    open_tone: (d, velocity = 0.8) => {
      const pan = d.id === 0 ? -0.25 : 0.25;
      const f = (d.id === 0 ? 390 : 195) * d.pitchMult;
      playMembrane(f, 0.22, 1.0, false, velocity, pan);
    },
    slap: (d, velocity = 0.95) => {
      const pan = d.id === 0 ? -0.25 : 0.25;
      const f = (d.id === 0 ? 580 : 330) * d.pitchMult;
      playMembrane(f, 0.07, 1.1, true, velocity, pan);
      playNoise(0.05, d.id === 0 ? 3200 : 2200, velocity * 1.3, 'highpass');
      playAttackClick(0.007, 4500, 0.6 * velocity);
    },
    mute_tap: (d, velocity = 0.55) => {
      const pan = d.id === 0 ? -0.25 : 0.25;
      const f = (d.id === 0 ? 330 : 165) * d.pitchMult;
      playMembrane(f, 0.04, 1.0, true, velocity, pan);
    },
    glissando_de_dedo: (d, velocity = 0.75) => {
      const pan = d.id === 0 ? -0.25 : 0.25;
      const startFreq = (d.id === 0 ? 350 : 175) * d.pitchMult;
      const endFreq = (d.id === 0 ? 550 : 275) * d.pitchMult;
      playTablaSlideUp(startFreq, endFreq, 0.28, velocity, pan);
    }
  },
  generateSVG: (id, colorType) => {
    let skinGradient = '';
    let woodGradient = '';

    if (colorType === 'dark') {
      skinGradient = `<radialGradient id="skin-${id}" cx="45%" cy="45%" r="65%"><stop offset="0%" stop-color="#211814"/><stop offset="70%" stop-color="#140d0a"/><stop offset="100%" stop-color="#080403"/></radialGradient>`;
      woodGradient = `<linearGradient id="wood-body-${id}" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#190a05"/><stop offset="25%" stop-color="#36170c"/><stop offset="50%" stop-color="#240f08"/><stop offset="75%" stop-color="#150804"/><stop offset="100%" stop-color="#080201"/></linearGradient>`;
    } else {
      skinGradient = `<radialGradient id="skin-${id}" cx="45%" cy="45%" r="65%"><stop offset="0%" stop-color="#fdf4e8"/><stop offset="65%" stop-color="#cca074"/><stop offset="100%" stop-color="#8a5e34"/></radialGradient>`;
      woodGradient = `<linearGradient id="wood-body-${id}" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#4a2511"/><stop offset="25%" stop-color="#8c4e2b"/><stop offset="50%" stop-color="#69371b"/><stop offset="75%" stop-color="#421f0c"/><stop offset="100%" stop-color="#1f0a02"/></linearGradient>`;
    }

    return `
      <svg viewBox="0 0 400 160" style="width:100%; height:100%; pointer-events:none;" preserveAspectRatio="xMidYMid meet">
        <defs>
          ${skinGradient}
          ${woodGradient}
          
          <linearGradient id="wood-highlight-${id}" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#ffffff" stop-opacity="0.18"/>
              <stop offset="35%" stop-color="#ffffff" stop-opacity="0.04"/>
              <stop offset="75%" stop-color="#000000" stop-opacity="0.15"/>
              <stop offset="100%" stop-color="#000000" stop-opacity="0.45"/>
          </linearGradient>
          
          <linearGradient id="metal-${id}" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#f1f5f9"/>
              <stop offset="25%" stop-color="#94a3b8"/>
              <stop offset="50%" stop-color="#cbd5e1"/>
              <stop offset="75%" stop-color="#475569"/>
              <stop offset="100%" stop-color="#334155"/>
          </linearGradient>

          <filter id="shadow-${id}" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="2" dy="5" stdDeviation="4" flood-color="#000000" flood-opacity="0.65"/>
          </filter>
        </defs>
          
        <!-- Ambient Drop Shadow removed -->
          
        <!-- Middle Wooden Connector Block -->
        <g filter="url(#shadow-${id})">
          <rect x="156" y="66" width="78" height="28" rx="2" fill="url(#wood-body-${id})" stroke="#1c0a02" stroke-width="1.5"/>
          <rect x="156" y="66" width="78" height="28" rx="2" fill="url(#wood-highlight-${id})"/>
          <!-- Metal reinforcing central bolt and washer -->
          <circle cx="195" cy="80" r="4.5" fill="url(#metal-${id})" stroke="#1e293b" stroke-width="0.5"/>
          <line x1="190" y1="80" x2="200" y2="80" stroke="#475569" stroke-width="0.8"/>
        </g>
          
        <!-- Macho Wooden Shell (Left - Smaller, cx=100) -->
        <g filter="url(#shadow-${id})">
          <path d="M 50 30 L 150 30 L 145 130 L 55 130 Z" fill="url(#wood-body-${id})"/>
          <path d="M 50 30 L 150 30 L 145 130 L 55 130 Z" fill="url(#wood-highlight-${id})"/>
          
          <!-- vertical wood stave lines -->
          <path d="M 75 30 L 77 130" stroke="#110502" stroke-width="1.2" opacity="0.45"/>
          <path d="M 100 30 L 100 130" stroke="#110502" stroke-width="1.2" opacity="0.45"/>
          <path d="M 125 30 L 123 130" stroke="#110502" stroke-width="1.2" opacity="0.45"/>
        </g>
        
        <!-- Hembra Wooden Shell (Right - Larger, cx=290) -->
        <g filter="url(#shadow-${id})">
          <path d="M 240 30 L 340 30 L 335 130 L 245 130 Z" fill="url(#wood-body-${id})"/>
          <path d="M 240 30 L 340 30 L 335 130 L 245 130 Z" fill="url(#wood-highlight-${id})"/>
          
          <!-- vertical wood stave lines -->
          <path d="M 265 30 L 267 130" stroke="#110502" stroke-width="1.2" opacity="0.45"/>
          <path d="M 290 30 L 290 130" stroke="#110502" stroke-width="1.2" opacity="0.45"/>
          <path d="M 315 30 L 313 130" stroke="#110502" stroke-width="1.2" opacity="0.45"/>
        </g>
        
        <!-- Macho Hardware / Tuning Lugs & Backing plates -->
        <g stroke="url(#metal-${id})" stroke-width="1.5" opacity="0.95" filter="url(#shadow-${id})">
          <!-- Side bracket 1 -->
          <rect x="105" y="45" width="7" height="16" rx="2" fill="url(#metal-${id})" stroke="none"/>
          <path d="M 108.5 61 L 108.5 105" stroke="url(#metal-${id})" stroke-width="3.5" fill="none"/>
          <circle cx="108.5" cy="107" r="4.5" fill="url(#metal-${id})" stroke="none"/>
          
          <!-- Side bracket 2 -->
          <rect x="141" y="52" width="7" height="16" rx="2" fill="url(#metal-${id})" stroke="none"/>
          <path d="M 144.5 68 L 144.5 110" stroke="url(#metal-${id})" stroke-width="3.5" fill="none"/>
          <circle cx="144.5" cy="112" r="4.5" fill="url(#metal-${id})" stroke="none"/>
        </g>
        
        <!-- Hembra Hardware / Tuning Lugs & Backing plates -->
        <g stroke="url(#metal-${id})" stroke-width="1.5" opacity="0.95" filter="url(#shadow-${id})">
          <!-- Side bracket 1 -->
          <rect x="250" y="52" width="8" height="18" rx="2" fill="url(#metal-${id})" stroke="none"/>
          <path d="M 254 70 L 254 112" stroke="url(#metal-${id})" stroke-width="4" fill="none"/>
          <circle cx="254" cy="114" r="5" fill="url(#metal-${id})" stroke="none"/>
          
          <!-- Side bracket 2 -->
          <rect x="306" y="44" width="8" height="18" rx="2" fill="url(#metal-${id})" stroke="none"/>
          <path d="M 310 62 L 310 106" stroke="url(#metal-${id})" stroke-width="4" fill="none"/>
          <circle cx="310" cy="108" r="5" fill="url(#metal-${id})" stroke="none"/>
        </g>
        
        <!-- Macho Head (Left - Smaller, cx=100) -->
        <g filter="url(#shadow-${id})">
          <!-- Solid 3D Chrome comfort curve rim -->
          <ellipse cx="100" cy="80" rx="64" ry="64" fill="none" stroke="url(#metal-${id})" stroke-width="6.5"/>
          <ellipse cx="100" cy="80" rx="60.5" ry="60.5" fill="none" stroke="#334155" stroke-width="1"/>
          
          <!-- Rawhide Head -->
          <circle cx="100" cy="80" r="59" fill="url(#skin-${id})"/>
          
          <!-- Rawhide texture concentric rings -->
          <circle cx="100" cy="80" r="51" fill="none" stroke="#ffffff" stroke-width="0.5" opacity="0.22"/>
          <circle cx="100" cy="80" r="41" fill="none" stroke="#ffffff" stroke-width="0.5" opacity="0.15"/>
          <circle cx="100" cy="80" r="28" fill="none" stroke="#000000" stroke-width="1.2" opacity="0.06"/>
          
          <!-- High-gloss clear coat highlight -->
          <circle cx="100" cy="80" r="59" fill="url(#wood-highlight-${id})" opacity="0.4"/>
        </g>
        
        <!-- Hembra Head (Right - Larger, cx=290) -->
        <g filter="url(#shadow-${id})">
          <!-- Solid 3D Chrome comfort curve rim -->
          <ellipse cx="290" cy="80" rx="78.5" ry="78.5" fill="none" stroke="url(#metal-${id})" stroke-width="7"/>
          <ellipse cx="290" cy="80" rx="74.5" ry="74.5" fill="none" stroke="#334155" stroke-width="1"/>
          
          <!-- Rawhide Head -->
          <circle cx="290" cy="80" r="73.5" fill="url(#skin-${id})"/>
          
          <!-- Rawhide texture concentric rings -->
          <circle cx="290" cy="80" r="64" fill="none" stroke="#ffffff" stroke-width="0.5" opacity="0.22"/>
          <circle cx="290" cy="80" r="50" fill="none" stroke="#ffffff" stroke-width="0.5" opacity="0.15"/>
          <circle cx="290" cy="80" r="35" fill="none" stroke="#000000" stroke-width="1.2" opacity="0.06"/>
          
          <!-- High-gloss clear coat highlight -->
          <circle cx="290" cy="80" r="73.5" fill="url(#wood-highlight-${id})" opacity="0.4"/>
        </g>
      </svg>
    `;
  }
};
