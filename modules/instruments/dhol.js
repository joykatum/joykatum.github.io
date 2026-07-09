import { playMembrane, playNoise } from '../audio.js';
import { state } from '../state.js';

export const dhol = {
  name: 'Dhol',
  defaultLeft: 0,
  defaultRight: 0,
  drums: [
    {
      id: 0,
      label: 'Dhol',
      pitchMult: 1.0,
      color: 'blonde',
      sizeValue: 24
    }
  ],
  sounds: {
    dagga: (d) => {
      playMembrane(450 * d.pitchMult, 0.1, 1.1, true);
      playNoise(0.08, 3000, state.currentTiltVolume * 0.8);
    },
    tilli: (d) => playMembrane(240 * d.pitchMult, 0.08, 1.0, true),
    stick_slide_glissando: (d) => playMembrane(240 * d.pitchMult, 0.08, 1.0, true)
  },
  generateSVG: (id, colorType) => {
    let skinGradient = '';
    let woodGradient = '';
    let ropeGradient = `<linearGradient id="rope-${id}" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#fffbeb"/><stop offset="50%" stop-color="#f59e0b"/><stop offset="100%" stop-color="#d97706"/></linearGradient>`;

    if (colorType === 'dark') {
      skinGradient = `<radialGradient id="skin-${id}" cx="45%" cy="45%" r="65%"><stop offset="0%" stop-color="#2a1f1a"/><stop offset="75%" stop-color="#1b110e"/><stop offset="100%" stop-color="#0a0503"/></radialGradient>`;
      woodGradient = `<linearGradient id="wood-body-${id}" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#190a05"/><stop offset="25%" stop-color="#36170c"/><stop offset="50%" stop-color="#240f08"/><stop offset="75%" stop-color="#150804"/><stop offset="100%" stop-color="#080201"/></linearGradient>`;
    } else {
      skinGradient = `<radialGradient id="skin-${id}" cx="45%" cy="45%" r="65%"><stop offset="0%" stop-color="#fdf5e6"/><stop offset="70%" stop-color="#dfa87a"/><stop offset="100%" stop-color="#9d673b"/></radialGradient>`;
      woodGradient = `<linearGradient id="wood-body-${id}" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#4d240c"/><stop offset="25%" stop-color="#944d1e"/><stop offset="50%" stop-color="#733912"/><stop offset="75%" stop-color="#4a2107"/><stop offset="100%" stop-color="#240b00"/></linearGradient>`;
    }

    return `
      <svg viewBox="0 0 400 160" style="width:100%; height:100%; pointer-events:none;" preserveAspectRatio="xMidYMid meet">
        <defs>
          ${skinGradient}
          ${woodGradient}
          ${ropeGradient}
          
          <linearGradient id="wood-highlight-${id}" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#ffffff" stop-opacity="0.22"/>
              <stop offset="35%" stop-color="#ffffff" stop-opacity="0.05"/>
              <stop offset="75%" stop-color="#000000" stop-opacity="0.15"/>
              <stop offset="100%" stop-color="#000000" stop-opacity="0.45"/>
          </linearGradient>

          <filter id="shadow-${id}" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="2" dy="5" stdDeviation="4" flood-color="#000000" flood-opacity="0.65"/>
          </filter>
        </defs>
          
        <!-- Ambient Drop Shadow removed -->
          
        <!-- Barrel Wood Body (Convex Hourglass / Bulging) -->
        <g filter="url(#shadow-${id})">
          <path d="M 90 22 Q 200 -12 310 27 L 310 133 Q 200 167 90 138 Z" fill="url(#wood-body-${id})"/>
          <path d="M 90 22 Q 200 -12 310 27 L 310 133 Q 200 167 90 138 Z" fill="url(#wood-highlight-${id})"/>
          
          <!-- Elegant curved stave wood carvings -->
          <path d="M 90 52 Q 200 32 310 57" stroke="#fbbf24" stroke-width="0.8" fill="none" opacity="0.1"/>
          <path d="M 90 80 Q 200 70 310 85" stroke="#fbbf24" stroke-width="0.8" fill="none" opacity="0.1"/>
          <path d="M 90 108 Q 200 102 310 113" stroke="#fbbf24" stroke-width="0.8" fill="none" opacity="0.1"/>
        </g>
          
        <!-- Beautiful colorful cotton ropes (V shape weaving) with 3D shadow -->
        <g stroke="url(#rope-${id})" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.95" fill="none" filter="url(#shadow-${id})">
          <!-- V-shapes crossing back and forth -->
          <path d="M 98 33 L 140 14 Q 150 12 160 14 L 200 14 M 200 14 L 240 14 Q 250 12 260 14 L 302 37" />
          <path d="M 98 53 L 150 33 L 200 33 L 250 33 L 302 57" stroke-width="4"/>
          <path d="M 98 73 L 150 53 L 200 53 L 250 53 L 302 77" stroke-width="4"/>
          <path d="M 98 93 L 150 73 L 200 73 L 250 73 L 302 97" stroke-width="4"/>
          <path d="M 98 113 L 150 93 L 200 93 L 250 93 L 302 117" stroke-width="4"/>
          
          <!-- Sliding adjustment rings (leather collars) on the ropes -->
          <g stroke="none" fill="#4d1b00">
            <circle cx="150" cy="53" r="5"/>
            <circle cx="200" cy="53" r="5"/>
            <circle cx="250" cy="53" r="5"/>
            <circle cx="150" cy="93" r="5"/>
            <circle cx="200" cy="93" r="5"/>
            <circle cx="250" cy="93" r="5"/>
          </g>
        </g>
          
        <!-- DAGGA Head (Left - Bass, cx=90) -->
        <g filter="url(#shadow-${id})">
          <!-- Thick wood/leather outer hoop ring -->
          <circle cx="90" cy="80" r="76" fill="none" stroke="#2a160d" stroke-width="7"/>
          <circle cx="90" cy="80" r="72.5" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.3"/>
          
          <!-- Rawhide skin -->
          <circle cx="90" cy="80" r="70.5" fill="url(#skin-${id})"/>
          
          <!-- Skin concentric lines -->
          <circle cx="90" cy="80" r="62" fill="none" stroke="#ffffff" stroke-width="0.5" opacity="0.2"/>
          <circle cx="90" cy="80" r="50" fill="none" stroke="#ffffff" stroke-width="0.5" opacity="0.15"/>
          <circle cx="90" cy="80" r="35" fill="none" stroke="#000000" stroke-width="1.2" opacity="0.06"/>
          
          <circle cx="90" cy="80" r="70.5" fill="url(#wood-highlight-${id})" opacity="0.4"/>
        </g>
          
        <!-- TILLI Head (Right - Treble, cx=310) -->
        <g filter="url(#shadow-${id})">
          <!-- Thick wood/leather outer hoop ring -->
          <circle cx="310" cy="80" r="68" fill="none" stroke="#2a160d" stroke-width="6.5"/>
          <circle cx="310" cy="80" r="64.5" fill="none" stroke="#fbbf24" stroke-width="0.8" opacity="0.3"/>
          
          <!-- Rawhide skin -->
          <circle cx="310" cy="80" r="62.5" fill="url(#skin-${id})"/>
          
          <!-- Treble rings -->
          <circle cx="310" cy="80" r="54" fill="none" stroke="#ffffff" stroke-width="0.5" opacity="0.2"/>
          <circle cx="310" cy="80" r="43" fill="none" stroke="#ffffff" stroke-width="0.5" opacity="0.15"/>
          <circle cx="310" cy="80" r="30" fill="none" stroke="#000000" stroke-width="1.2" opacity="0.06"/>
          
          <circle cx="310" cy="80" r="62.5" fill="url(#wood-highlight-${id})" opacity="0.4"/>
        </g>
      </svg>
    `;
  }
};
