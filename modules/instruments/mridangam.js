import { playMembrane, playNoise, playAttackClick } from '../audio.js';
import { state } from '../state.js';

export const mridangam = {
  origin: 'South India',
  description:
    'The Mridangam is the primary rhythmic instrument of South Indian Carnatic music. A double-headed barrel drum, it features a unique central black paste patch on the treble skin, producing highly melodic, pitched ringing tones.',
  performers: [
    {
      name: 'Karaikudi Mani',
      spotify: 'true',
      apple: 'true'
    },
    {
      name: 'Umayalpuram K. Sivaraman',
      spotify: 'true',
      apple: 'true'
    }
  ],
  songs: [
    {
      name: 'Carnatic Tala Solo',
      artist: 'Karaikudi Mani',
      spotify: 'true',
      apple: 'true'
    }
  ],
  effectsSongs: [
    {
      name: 'Carnatic Resonance Modulator',
      artist: 'Madras Rhythm Studio',
      desc: 'The pitched rings of the mridangam are treated with a narrow bandpass filter, highlighting the pure melodic vocal-like qualities of the drum.',
      url: '',
      platform: 'Spotify'
    }
  ],

  name: 'Mridangam',
  drums: [
    {
      id: 0,
      label: 'Mridangam',
      pitchMult: 1.0,
      color: 'caramel',
      sizeValue: 24
    }
  ],
  sounds: {
    tha: (d, velocity = 0.8) => {
      const baseId = parseInt(d.id);
      const pan = baseId === 0 ? -0.3 : 0.3;
      if (baseId === 0) {
        // Wet, flat hand slap on the bass head (Thoppi)
        playMembrane(95 * d.pitchMult, 0.12, 1.1, true, velocity, pan);
        playNoise(0.04, 800, velocity * 0.4, 'lowpass');
      } else {
        // Bright resonant strike on the rim of the treble head (Valanthalai)
        playMembrane(165 * d.pitchMult, 0.45, 1.0, false, velocity, pan);
        playMembrane(330 * d.pitchMult, 0.35, 0.9, false, velocity * 0.7, pan);
        playAttackClick(0.01, 3500, 0.4 * velocity);
      }
    },
    thom: (d, velocity = 0.85) => {
      const baseId = parseInt(d.id);
      const pan = baseId === 0 ? -0.3 : 0.3;
      if (baseId === 0) {
        // Deep, beautiful open bass note of Thoppi (around 68Hz)
        playMembrane(68 * d.pitchMult, 0.65, 1.3, false, velocity, pan);
        playAttackClick(0.015, 600, 0.3 * velocity);
      } else {
        // Open treble ring on Valanthalai
        playMembrane(220 * d.pitchMult, 0.4, 0.98, false, velocity, pan);
        playMembrane(440 * d.pitchMult, 0.25, 0.95, false, velocity * 0.5, pan);
      }
    },
    nam: (d, velocity = 0.8) => {
      const baseId = parseInt(d.id);
      const pan = baseId === 0 ? -0.3 : 0.3;
      if (baseId === 0) {
        // Soft bass tap
        playMembrane(120 * d.pitchMult, 0.1, 1.0, true, velocity * 0.6, pan);
      } else {
        // Bright metallic ringing treble edge strike on Valanthalai
        playMembrane(220 * d.pitchMult, 0.5, 0.98, false, velocity, pan);
        playMembrane(440 * d.pitchMult, 0.32, 0.95, false, velocity * 0.6, pan);
        playAttackClick(0.008, 4500, 0.5 * velocity);
      }
    },
    dhi_thei: (d, velocity = 0.7) => {
      const baseId = parseInt(d.id);
      const pan = baseId === 0 ? -0.3 : 0.3;
      if (baseId === 0) {
        // Muted slap on Thoppi
        playMembrane(90 * d.pitchMult, 0.05, 1.0, true, velocity, pan);
      } else {
        // Muted finger slap in the center syahi of Valanthalai
        playMembrane(150 * d.pitchMult, 0.06, 1.0, true, velocity, pan);
        playNoise(0.02, 1800, velocity * 0.5, 'highpass');
        playAttackClick(0.008, 2500, 0.4 * velocity);
      }
    },
    chapu: (d, velocity = 0.9) => {
      const baseId = parseInt(d.id);
      const pan = baseId === 0 ? -0.3 : 0.3;
      if (baseId === 0) {
        // Resonant slap on Thoppi
        playMembrane(95 * d.pitchMult, 0.35, 1.1, false, velocity, pan);
      } else {
        // Iconic, singing bell-like treble ring of Mridangam Chapu
        playMembrane(165 * d.pitchMult, 0.65, 1.0, false, velocity, pan);
        playMembrane(330 * d.pitchMult, 0.5, 0.95, false, velocity * 0.8, pan);
        playAttackClick(0.012, 3800, 0.65 * velocity);
      }
    }
  },
  generateSVG: (id, colorType) => {
    let skinGradient = '';
    let woodGradient = '';
    let syahiGradient = `<radialGradient id="syahi-${id}" cx="40%" cy="40%" r="60%"><stop offset="0%" stop-color="#2a221f"/><stop offset="70%" stop-color="#16100e"/><stop offset="100%" stop-color="#060302"/></radialGradient>`;

    if (colorType === 'dark') {
      skinGradient = `<radialGradient id="skin-${id}" cx="45%" cy="45%" r="65%"><stop offset="0%" stop-color="#33251e"/><stop offset="70%" stop-color="#1f1410"/><stop offset="100%" stop-color="#0b0604"/></radialGradient>`;
      woodGradient = `<linearGradient id="wood-body-${id}" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#1c0b02"/><stop offset="25%" stop-color="#381907"/><stop offset="50%" stop-color="#240f03"/><stop offset="75%" stop-color="#160801"/><stop offset="100%" stop-color="#080300"/></linearGradient>`;
    } else if (colorType === 'blonde') {
      skinGradient = `<radialGradient id="skin-${id}" cx="45%" cy="45%" r="65%"><stop offset="0%" stop-color="#fef6eb"/><stop offset="70%" stop-color="#e0b98f"/><stop offset="100%" stop-color="#9d7146"/></radialGradient>`;
      woodGradient = `<linearGradient id="wood-body-${id}" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#4d2f12"/><stop offset="25%" stop-color="#8a5626"/><stop offset="50%" stop-color="#693e15"/><stop offset="75%" stop-color="#472709"/><stop offset="100%" stop-color="#211002"/></linearGradient>`;
    } else {
      skinGradient = `<radialGradient id="skin-${id}" cx="45%" cy="45%" r="65%"><stop offset="0%" stop-color="#fdf4e8"/><stop offset="70%" stop-color="#dca368"/><stop offset="100%" stop-color="#9c6328"/></radialGradient>`;
      woodGradient = `<linearGradient id="wood-body-${id}" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#3b1704"/><stop offset="25%" stop-color="#733311"/><stop offset="50%" stop-color="#522108"/><stop offset="75%" stop-color="#331202"/><stop offset="100%" stop-color="#140600"/></linearGradient>`;
    }

    return `
      <svg viewBox="0 0 400 160" style="width:100%; height:100%; pointer-events:none;" preserveAspectRatio="xMidYMid meet">
        <defs>
          ${skinGradient}
          ${woodGradient}
          ${syahiGradient}
          
          <linearGradient id="wood-highlight-${id}" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#ffffff" stop-opacity="0.18"/>
              <stop offset="35%" stop-color="#ffffff" stop-opacity="0.04"/>
              <stop offset="75%" stop-color="#000000" stop-opacity="0.15"/>
              <stop offset="100%" stop-color="#000000" stop-opacity="0.45"/>
          </linearGradient>
          
          <linearGradient id="strap-${id}" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#3f3f46"/>
              <stop offset="50%" stop-color="#71717a"/>
              <stop offset="100%" stop-color="#18181b"/>
          </linearGradient>

          <filter id="shadow-${id}" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="2" dy="5" stdDeviation="4" flood-color="#000000" flood-opacity="0.65"/>
          </filter>
        </defs>
          
        <!-- Ambient Drop Shadow removed -->
          
        <!-- Barrel Jackwood Body with 3D contours -->
        <g filter="url(#shadow-${id})">
          <path d="M 80 18 Q 200 -12 320 23 L 320 137 Q 200 172 80 142 Z" fill="url(#wood-body-${id})"/>
          <path d="M 80 18 Q 200 -12 320 23 L 320 137 Q 200 172 80 142 Z" fill="url(#wood-highlight-${id})"/>
          
          <!-- Elegant jackfruit wood stave joints -->
          <path d="M 80 48 Q 200 35 320 53" stroke="#fcd34d" stroke-width="0.8" fill="none" opacity="0.08"/>
          <path d="M 80 78 Q 200 70 320 83" stroke="#fcd34d" stroke-width="0.8" fill="none" opacity="0.08"/>
          <path d="M 80 108 Q 200 105 320 113" stroke="#fcd34d" stroke-width="0.8" fill="none" opacity="0.08"/>
        </g>
          
        <!-- Horizontal Thick Leather Laces running densely across the barrel -->
        <g stroke="url(#strap-${id})" stroke-width="3" opacity="0.9" fill="none" filter="url(#shadow-${id})">
          <path d="M 82 28 Q 200 13 318 33 M 81 29 Q 200 14 319 34" stroke="#18181b" stroke-width="1.2" opacity="0.5"/>
          <path d="M 82 28 Q 200 13 318 33"/>
          
          <path d="M 82 43 Q 200 28 318 48 M 81 44 Q 200 29 319 49" stroke="#18181b" stroke-width="1.2" opacity="0.5"/>
          <path d="M 82 43 Q 200 28 318 48"/>
          
          <path d="M 82 58 Q 200 43 318 63 M 81 59 Q 200 44 319 64" stroke="#18181b" stroke-width="1.2" opacity="0.5"/>
          <path d="M 82 58 Q 200 43 318 63"/>
          
          <path d="M 82 73 Q 200 58 318 78 M 81 74 Q 200 59 319 79" stroke="#18181b" stroke-width="1.2" opacity="0.5"/>
          <path d="M 82 73 Q 200 58 318 78"/>
          
          <path d="M 82 88 Q 200 73 318 93 M 81 89 Q 200 74 319 94" stroke="#18181b" stroke-width="1.2" opacity="0.5"/>
          <path d="M 82 88 Q 200 73 318 93"/>
          
          <path d="M 82 103 Q 200 88 318 108 M 81 104 Q 200 89 319 109" stroke="#18181b" stroke-width="1.2" opacity="0.5"/>
          <path d="M 82 103 Q 200 88 318 108"/>
          
          <path d="M 82 118 Q 200 103 318 123 M 81 119 Q 200 104 319 124" stroke="#18181b" stroke-width="1.2" opacity="0.5"/>
          <path d="M 82 118 Q 200 103 318 123"/>
          
          <path d="M 82 132 Q 200 117 318 137 M 81 133 Q 200 118 319 138" stroke="#18181b" stroke-width="1.2" opacity="0.5"/>
          <path d="M 82 132 Q 200 117 318 137"/>
        </g>
          
        <!-- THOPPI Head (Left - Bass) -->
        <g filter="url(#shadow-${id})">
          <!-- Braided thick leather ring hoop -->
          <circle cx="80" cy="80" r="75" fill="none" stroke="url(#strap-${id})" stroke-width="6.5"/>
          <circle cx="80" cy="80" r="72" fill="none" stroke="#27272a" stroke-width="1.5"/>
          
          <!-- Rawhide Head -->
          <circle cx="80" cy="80" r="69.5" fill="url(#skin-${id})"/>
          <circle cx="80" cy="80" r="69.5" fill="url(#wood-highlight-${id})" opacity="0.4"/>
          
          <!-- Dough patch -->
          <circle cx="80" cy="80" r="32" fill="#78716c" opacity="0.55" filter="blur(3.5px)"/>
          <circle cx="80" cy="80" r="28" fill="#57534e" opacity="0.4" filter="blur(2px)"/>
        </g>
          
        <!-- VALANTHALAI Head (Right - Treble) -->
        <g filter="url(#shadow-${id})">
          <!-- Braided thick leather ring hoop -->
          <circle cx="320" cy="80" r="63.5" fill="none" stroke="url(#strap-${id})" stroke-width="5.5"/>
          <circle cx="320" cy="80" r="61" fill="none" stroke="#27272a" stroke-width="1.2"/>
          
          <!-- Rawhide Head -->
          <circle cx="320" cy="80" r="59" fill="url(#skin-${id})"/>
          
          <!-- Concentric treble ring patterns -->
          <circle cx="320" cy="80" r="51" fill="none" stroke="#d6d3d1" stroke-width="0.8" opacity="0.45"/>
          <circle cx="320" cy="80" r="41" fill="none" stroke="#a8a29e" stroke-width="0.5" opacity="0.3"/>
          
          <!-- Syahi (Black permanent tuning paste) -->
          <circle cx="320" cy="80" r="25" fill="url(#syahi-${id})"/>
          <circle cx="320" cy="80" r="25" fill="none" stroke="#000000" stroke-width="0.75" opacity="0.6"/>
          <circle cx="321" cy="79" r="23" fill="none" stroke="#ffffff" stroke-width="0.5" opacity="0.12"/>
          
          <!-- High-gloss clear coat highlight -->
          <circle cx="320" cy="80" r="59" fill="url(#wood-highlight-${id})" opacity="0.4"/>
        </g>
      </svg>
    `;
  }
};
