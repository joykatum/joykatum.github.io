import { playMembrane, playNoise } from '../audio.js';
import { state } from '../state.js';

export const bata = {
  name: 'Bata',
  defaultLeft: 1, // Itótele
  defaultRight: 1, // Itótele
  drums: [
    {
      id: 0,
      label: 'Okónkolo',
      pitchMult: 1.5,
      color: 'caramel-light',
      sizeValue: 15
    },
    {
      id: 1,
      label: 'Itótele',
      pitchMult: 1.1,
      color: 'caramel',
      sizeValue: 19
    },
    {
      id: 2,
      label: 'Iyá',
      pitchMult: 0.75,
      color: 'dark',
      sizeValue: 23
    }
  ],
  sounds: {
    abierto: (d) => {
      const baseId = parseInt(d.id);
      const f = baseId === 0 ? 220 : baseId === 1 ? 140 : 110;
      playMembrane(f * d.pitchMult, 0.4, 1.0, false);
    },
    tapado: (d) => {
      const baseId = parseInt(d.id);
      const f = baseId === 0 ? 260 : baseId === 1 ? 170 : 130;
      playMembrane(f * d.pitchMult, 0.1, 1.0, false);
    },
    chach_snap: (d) => {
      const baseId = parseInt(d.id);
      const f = baseId === 0 ? 180 : baseId === 1 ? 110 : 60;
      playMembrane(f * d.pitchMult, 0.15, 1.1, true);
      if (baseId === 2 || d.label.includes('Iyá')) {
        playNoise(0.18, 2200, state.currentTiltVolume * 0.6);
      }
    },
    cuerpo_knock: (d) => {
      const baseId = parseInt(d.id);
      const f = baseId === 0 ? 440 : baseId === 1 ? 280 : 220;
      playMembrane(f * d.pitchMult, 0.05, 1.0, false);
    }
  },
  generateSVG: (id, colorType) => {
    let skinGradient = '';
    let woodGradient = '';
    let fardelaGradient = `<radialGradient id="fardela-${id}" cx="45%" cy="45%" r="60%"><stop offset="0%" stop-color="#241812"/><stop offset="60%" stop-color="#140a06"/><stop offset="100%" stop-color="#050201"/></radialGradient>`;

    if (colorType === 'dark') {
      skinGradient = `<radialGradient id="skin-${id}" cx="45%" cy="45%" r="60%"><stop offset="0%" stop-color="#2e221c"/><stop offset="75%" stop-color="#1c120d"/><stop offset="100%" stop-color="#0a0503"/></radialGradient>`;
      woodGradient = `<linearGradient id="wood-body-${id}" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#190a05"/><stop offset="20%" stop-color="#36170c"/><stop offset="50%" stop-color="#240f08"/><stop offset="80%" stop-color="#150804"/><stop offset="100%" stop-color="#080201"/></linearGradient>`;
    } else if (colorType === 'blonde') {
      skinGradient = `<radialGradient id="skin-${id}" cx="45%" cy="45%" r="60%"><stop offset="0%" stop-color="#fdf2e2"/><stop offset="70%" stop-color="#dfaf7a"/><stop offset="100%" stop-color="#a67746"/></radialGradient>`;
      woodGradient = `<linearGradient id="wood-body-${id}" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#543516"/><stop offset="20%" stop-color="#916131"/><stop offset="50%" stop-color="#6e441d"/><stop offset="80%" stop-color="#4a2c10"/><stop offset="100%" stop-color="#261403"/></linearGradient>`;
    } else if (colorType === 'blonde-light') {
      skinGradient = `<radialGradient id="skin-${id}" cx="45%" cy="45%" r="60%"><stop offset="0%" stop-color="#fff9f0"/><stop offset="70%" stop-color="#e9caa4"/><stop offset="100%" stop-color="#b89369"/></radialGradient>`;
      woodGradient = `<linearGradient id="wood-body-${id}" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#664d30"/><stop offset="20%" stop-color="#ad895a"/><stop offset="50%" stop-color="#87663d"/><stop offset="80%" stop-color="#5e4423"/><stop offset="100%" stop-color="#33220e"/></linearGradient>`;
    } else if (colorType === 'caramel-light') {
      skinGradient = `<radialGradient id="skin-${id}" cx="45%" cy="45%" r="60%"><stop offset="0%" stop-color="#fdf4e7"/><stop offset="70%" stop-color="#e6ab75"/><stop offset="100%" stop-color="#ad713b"/></radialGradient>`;
      woodGradient = `<linearGradient id="wood-body-${id}" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#4d210c"/><stop offset="20%" stop-color="#8c4723"/><stop offset="50%" stop-color="#663013"/><stop offset="80%" stop-color="#401905"/><stop offset="100%" stop-color="#1c0700"/></linearGradient>`;
    } else {
      skinGradient = `<radialGradient id="skin-${id}" cx="45%" cy="45%" r="60%"><stop offset="0%" stop-color="#faebd7"/><stop offset="70%" stop-color="#cf9456"/><stop offset="100%" stop-color="#915d24"/></radialGradient>`;
      woodGradient = `<linearGradient id="wood-body-${id}" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#3d1b09"/><stop offset="20%" stop-color="#7a3f1d"/><stop offset="50%" stop-color="#572b11"/><stop offset="80%" stop-color="#381907"/><stop offset="100%" stop-color="#1a0a02"/></linearGradient>`;
    }

    return `
      <svg viewBox="0 0 400 160" style="width:100%; height:100%; pointer-events:none;" preserveAspectRatio="xMidYMid meet">
        <defs>
          ${skinGradient}
          ${woodGradient}
          ${fardelaGradient}
          
          <linearGradient id="wood-highlight-${id}" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#ffffff" stop-opacity="0.2"/>
              <stop offset="30%" stop-color="#ffffff" stop-opacity="0.05"/>
              <stop offset="70%" stop-color="#000000" stop-opacity="0.1"/>
              <stop offset="100%" stop-color="#000000" stop-opacity="0.4"/>
          </linearGradient>
          
          <linearGradient id="strap-${id}" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#faf6f0"/>
              <stop offset="50%" stop-color="#d9c2a3"/>
              <stop offset="100%" stop-color="#9e8460"/>
          </linearGradient>
          
          <linearGradient id="rim-${id}" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#fef3c7"/>
              <stop offset="30%" stop-color="#d97706"/>
              <stop offset="50%" stop-color="#fcd34d"/>
              <stop offset="70%" stop-color="#b45309"/>
              <stop offset="100%" stop-color="#78350f"/>
          </linearGradient>

          <filter id="shadow-${id}" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="2" dy="4" stdDeviation="4" flood-color="#000000" flood-opacity="0.6"/>
          </filter>
        </defs>

        <!-- Ambient Drop Shadow removed -->
        
        <!-- Hourglass Wood Shell Body with 3D styling -->
        <g filter="url(#shadow-${id})">
          <path d="M 80 15 Q 200 55 320 32 L 320 128 Q 200 105 80 145 Z" fill="url(#wood-body-${id})"/>
          <path d="M 80 15 Q 200 55 320 32 L 320 128 Q 200 105 80 145 Z" fill="url(#wood-highlight-${id})"/>
          
          <!-- Elegant thin golden stave joints to make it look carved -->
          <path d="M 80 50 Q 200 70 320 60" stroke="#fcd34d" stroke-width="0.75" fill="none" opacity="0.12"/>
          <path d="M 80 80 Q 200 80 320 80" stroke="#fcd34d" stroke-width="0.75" fill="none" opacity="0.12"/>
          <path d="M 80 110 Q 200 90 320 100" stroke="#fcd34d" stroke-width="0.75" fill="none" opacity="0.12"/>
        </g>
        
        <!-- 3D Leather Lacing system (Diamond structure) -->
        <g stroke="url(#strap-${id})" stroke-width="3" stroke-linecap="round" opacity="0.95" fill="none" filter="url(#shadow-${id})">
          <!-- Underlaying diagonals first -->
          <path d="M 80 25 L 320 120" stroke-width="2.5" opacity="0.8"/>
          <path d="M 80 40 L 320 105" stroke-width="2.5" opacity="0.8"/>
          <path d="M 80 55 L 320 90" stroke-width="2.5" opacity="0.8"/>
          <path d="M 80 70 L 320 75" stroke-width="2.5" opacity="0.8"/>
          <path d="M 80 85 L 320 60" stroke-width="2.5" opacity="0.8"/>
          <path d="M 80 100 L 320 45" stroke-width="2.5" opacity="0.8"/>
          <path d="M 80 115 L 320 35" stroke-width="2.5" opacity="0.8"/>

          <!-- Overlapping diagonals -->
          <path d="M 80 135 L 320 40"/>
          <path d="M 80 120 L 320 55"/>
          <path d="M 80 105 L 320 70"/>
          <path d="M 80 90 L 320 85"/>
          <path d="M 80 75 L 320 100"/>
          <path d="M 80 60 L 320 115"/>
          <path d="M 80 45 L 320 125"/>
        </g>
        
        <!-- Premium Center Waist Band wrap with gold hardware rings -->
        <g filter="url(#shadow-${id})">
          <path d="M 188 48 Q 200 45 212 48 L 212 112 Q 200 115 188 112 Z" fill="url(#strap-${id})" stroke="#b45309" stroke-width="1.5"/>
          <rect x="188" y="55" width="24" height="6" rx="2" fill="url(#rim-${id})" opacity="0.95"/>
          <rect x="188" y="99" width="24" height="6" rx="2" fill="url(#rim-${id})" opacity="0.95"/>
          <!-- Vertical braided wrapping stitches -->
          <path d="M 193 48 L 193 112 M 200 46 L 200 114 M 207 48 L 207 112" stroke="#5c3f15" stroke-width="2" opacity="0.75"/>
        </g>

        <!-- ENÚ (Large Bass Head, Left) -->
        <g filter="url(#shadow-${id})">
          <!-- Gold outer flesh hoop ring -->
          <circle cx="80" cy="80" r="75" fill="none" stroke="url(#rim-${id})" stroke-width="6.5"/>
          <circle cx="80" cy="80" r="72" fill="none" stroke="#451a03" stroke-width="1.5"/>
          <!-- Rawhide Head -->
          <circle cx="80" cy="80" r="70" fill="url(#skin-${id})"/>
          
          <!-- Rawhide texture (subtle radial rings) -->
          <circle cx="80" cy="80" r="62" fill="none" stroke="#ffffff" stroke-width="0.75" opacity="0.2"/>
          <circle cx="80" cy="80" r="50" fill="none" stroke="#ffffff" stroke-width="0.5" opacity="0.15"/>
          <circle cx="80" cy="80" r="35" fill="none" stroke="#000000" stroke-width="1" opacity="0.08"/>

          <!-- Fardela (Tuning patch) -->
          <circle cx="80" cy="80" r="33.5" fill="url(#fardela-${id})" opacity="0.98"/>
          <circle cx="80" cy="80" r="33.5" fill="url(#wood-highlight-${id})" opacity="0.3"/>
        </g>
        
        <!-- CHACHÁ (Small Treble Head, Right) -->
        <g filter="url(#shadow-${id})">
          <!-- Gold outer flesh hoop ring -->
          <circle cx="320" cy="80" r="49" fill="none" stroke="url(#rim-${id})" stroke-width="5.5"/>
          <circle cx="320" cy="80" r="46.5" fill="none" stroke="#451a03" stroke-width="1.2"/>
          <!-- Rawhide Head -->
          <circle cx="320" cy="80" r="44.5" fill="url(#skin-${id})"/>
          
          <!-- Rawhide texture -->
          <circle cx="320" cy="80" r="38" fill="none" stroke="#ffffff" stroke-width="0.5" opacity="0.2"/>
          <circle cx="320" cy="80" r="28" fill="none" stroke="#ffffff" stroke-width="0.5" opacity="0.15"/>
          <circle cx="320" cy="80" r="18" fill="none" stroke="#000000" stroke-width="1" opacity="0.08"/>
          
          <circle cx="320" cy="80" r="44.5" fill="url(#wood-highlight-${id})" opacity="0.35"/>
        </g>
      </svg>
    `;
  }
};
