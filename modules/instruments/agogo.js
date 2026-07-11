import { playMembrane, playNoise, playAttackClick } from '../audio.js';
import { state } from '../state.js';
import { playSoundFontSample } from '../sf2Loader.js';

export const agogo = {
  origin: 'West Africa / Brazil (Yoruba & Samba Roots)',
  description:
    'The Agogô is a high-contrast double or triple bell made of metal or wood, held in one hand and struck with a wooden stick. Originating from Yoruba iron bells in West Africa, it travelled to Brazil where it became the rhythmic leader of samba batucadas, capoeira, and Afoxé rituals. The player can squeeze the two bell handles together to click them, adding a muted percussion accent between high and low metallic strikes.',
  performers: [
    {
      name: 'Naná Vasconcelos',
      spotify: 'true',
      apple: 'true'
    }
  ],
  songs: [
    {
      name: 'Samba Batucada',
      artist: 'Rio Escola de Samba',
      spotify: 'true',
      apple: 'true'
    }
  ],

  name: 'Agogô',
  drums: [
    {
      id: 0,
      label: 'Agogô Bells',
      pitchMult: 1.0,
      color: 'silver',
      sizeValue: 22
    }
  ],
  sounds: {
    high_strike: (d, velocity = 0.8) => {
      const success = playSoundFontSample('agogo', 'high agogo(l)', d.pitchMult * 1.05, velocity, -0.25);
      if (!success) {
        playMembrane(480 * d.pitchMult, 0.35, 1.0, false, velocity, -0.25);
        playAttackClick(0.015, 4500, 0.5 * velocity);
      }
    },
    low_strike: (d, velocity = 0.8) => {
      const success = playSoundFontSample('agogo', 'high agogo(r)', d.pitchMult * 0.83, velocity, 0.25);
      if (!success) {
        playMembrane(380 * d.pitchMult, 0.48, 1.0, false, velocity, 0.25);
        playAttackClick(0.015, 3800, 0.45 * velocity);
      }
    },
    clap: (d, velocity = 0.85) => {
      const success = playSoundFontSample('agogo', 'high agogo(l)', d.pitchMult * 1.2, velocity, 0.0, 0.08);
      if (!success) {
        playMembrane(650 * d.pitchMult, 0.08, 1.05, true, velocity, 0.0);
      }
    },
    stick_drag: (d, velocity = 0.7) => {
      const success = playSoundFontSample('agogo', 'high agogo(r)', d.pitchMult * 1.2, velocity * 0.8, -0.2, 0.03);
      if (success) {
        setTimeout(() => {
          playSoundFontSample('agogo', 'high agogo(l)', d.pitchMult * 1.3, velocity * 0.7, -0.1, 0.03);
        }, 50);
        setTimeout(() => {
          playSoundFontSample('agogo', 'high agogo(r)', d.pitchMult * 1.4, velocity * 0.6, 0.1, 0.04);
        }, 100);
      } else {
        playMembrane(600 * d.pitchMult, 0.03, 1.0, true, velocity * 0.8, -0.2);
        playNoise(0.04, 2500, velocity * 0.5, 'highpass');
        setTimeout(() => {
          playMembrane(650 * d.pitchMult, 0.03, 1.0, true, velocity * 0.7, -0.1);
          playNoise(0.03, 2800, velocity * 0.4, 'highpass');
        }, 50);
        setTimeout(() => {
          playMembrane(700 * d.pitchMult, 0.04, 1.0, true, velocity * 0.6, 0.1);
          playNoise(0.03, 3000, velocity * 0.3, 'highpass');
        }, 100);
      }
    }
  },
  generateSVG: (id, colorType) => {
    let bellGradient = `<radialGradient id="bell-${id}" cx="40%" cy="30%" r="70%"><stop offset="0%" stop-color="#fff9db"/><stop offset="30%" stop-color="#f59e0b"/><stop offset="65%" stop-color="#b45309"/><stop offset="90%" stop-color="#451a03"/><stop offset="100%" stop-color="#1c0a00"/></radialGradient>`;
    let handleGradient = `<linearGradient id="handle-${id}" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#451a03"/><stop offset="35%" stop-color="#f59e0b"/><stop offset="50%" stop-color="#fff9db"/><stop offset="65%" stop-color="#b45309"/><stop offset="100%" stop-color="#451a03"/></linearGradient>`;

    if (colorType === 'chrome') {
      bellGradient = `<radialGradient id="bell-${id}" cx="40%" cy="30%" r="70%"><stop offset="0%" stop-color="#ffffff"/><stop offset="35%" stop-color="#e2e8f0"/><stop offset="65%" stop-color="#94a3b8"/><stop offset="90%" stop-color="#475569"/><stop offset="100%" stop-color="#1e293b"/></radialGradient>`;
      handleGradient = `<linearGradient id="handle-${id}" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#1e293b"/><stop offset="35%" stop-color="#e2e8f0"/><stop offset="50%" stop-color="#ffffff"/><stop offset="65%" stop-color="#94a3b8"/><stop offset="100%" stop-color="#1e293b"/></linearGradient>`;
    }

    return `
      <svg viewBox="0 0 400 160" style="width:100%; height:100%; pointer-events:none;" preserveAspectRatio="xMidYMid meet">
        <defs>
          ${bellGradient}
          ${handleGradient}
          
          <filter id="shadow-${id}" x="-15%" y="-15%" width="130%" height="130%">
              <feDropShadow dx="3" dy="6" stdDeviation="5" flood-color="#000000" flood-opacity="0.7"/>
          </filter>
          
          <radialGradient id="opening-${id}" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#020408"/>
              <stop offset="85%" stop-color="#1e293b"/>
              <stop offset="100%" stop-color="#090d16"/>
          </radialGradient>
        </defs>
          
        <!-- Drop shadows removed -->
          
        <!-- Elegant 3D U-shape Handle connecting the two bells -->
        <path d="M 140 80 C 180 135 220 135 260 80" fill="none" stroke="url(#handle-${id})" stroke-width="14" stroke-linecap="round" filter="url(#shadow-${id})"/>
        <path d="M 140 80 C 180 135 220 135 260 80" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" opacity="0.4" filter="blur(1px)"/>
          
        <!-- High Bell (Left) - Smaller cone, 25% center, cx=100 -->
        <g filter="url(#shadow-${id})">
          <!-- Bell Body (Cone shape going inward) -->
          <path d="M 100 20 L 145 68 L 145 92 L 100 140 C 65 140 55 80 100 20 Z" fill="url(#bell-${id})"/>
          <!-- Soft golden 3D metallic highlights -->
          <path d="M 100 20 L 145 68 L 145 92 L 100 140 C 65 140 55 80 100 20 Z" fill="none" stroke="#ffffff" stroke-width="1" opacity="0.25"/>
          
          <!-- Bell opening rim & hollow dark inside -->
          <ellipse cx="100" cy="80" rx="43" ry="58" fill="url(#opening-${id})" stroke="url(#bell-${id})" stroke-width="5.5"/>
          <ellipse cx="100" cy="80" rx="43" ry="58" fill="none" stroke="#000000" stroke-width="1.5" opacity="0.5"/>
          <ellipse cx="100" cy="80" rx="40" ry="55" fill="none" stroke="#ffffff" stroke-width="0.8" opacity="0.18"/>
        </g>
          
        <!-- Low Bell (Right) - Larger cone, 75% center, cx=300 -->
        <g filter="url(#shadow-${id})">
          <!-- Bell Body (Cone shape going inward) -->
          <path d="M 300 6 L 255 62 L 255 98 L 300 154 C 255 154 245 80 300 6 Z" fill="url(#bell-${id})"/>
          <!-- Soft golden 3D metallic highlights -->
          <path d="M 300 6 L 255 62 L 255 98 L 300 154 C 255 154 245 80 300 6 Z" fill="none" stroke="#ffffff" stroke-width="1" opacity="0.25"/>
          
          <!-- Bell opening rim & hollow dark inside -->
          <ellipse cx="290" cy="80" rx="78.5" ry="78.5" fill="none" stroke="none"/>
          <ellipse cx="290" cy="80" rx="58" ry="73.5" fill="url(#opening-${id})" stroke="url(#bell-${id})" stroke-width="6"/>
          <ellipse cx="290" cy="80" rx="58" ry="73.5" fill="none" stroke="#000000" stroke-width="1.5" opacity="0.5"/>
          <ellipse cx="290" cy="80" rx="54" ry="69.5" fill="none" stroke="#ffffff" stroke-width="0.8" opacity="0.18"/>
        </g>
      </svg>
    `;
  }
};
