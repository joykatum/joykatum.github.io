import { playMembrane, playNoise } from '../audio.js';
import { state } from '../state.js';
import { playSoundFontSample } from '../sf2Loader.js';

// Stereo Panning Strategy for Batá Ensemble
// Real-world performance layout (from audience perspective):
// Itótele (Medium, ID 1) -> Left (-0.35)
// Iyá (Large/Lead, ID 2) -> Center (0.0)
// Okónkolo (Small, ID 0) -> Right (+0.35)
const getBataPan = (id) => {
  if (id === 1) return -0.35; // Itótele
  if (id === 0) return 0.35; // Okónkolo
  return 0.0; // Iyá (Center anchor)
};

export const bata = {
  origin: 'Yorubaland (Nigeria / Cuba)',
  description:
    'Bata drums are a family of three double-headed, hourglass-shaped drums used historically in Yoruba sacred ceremonies and expanded into Afro-Cuban secular music. The three sizes—Iyá (the mother, largest, lowest pitch), Itótele (middle), and Okónkolo (smallest, highest)—engage in an intricate, highly syncopated musical conversation that mimics spoken language.',
  performers: [
    {
      name: 'Pedrito Martinez',
      spotify: 'true',
      apple: 'true'
    },
    {
      name: 'Milton Cardona',
      spotify: 'true',
      apple: 'true'
    }
  ],
  songs: [
    {
      name: 'La Habana',
      artist: 'Pedrito Martinez',
      spotify: 'true',
      apple: 'true'
    }
  ],
  effectsSongs: [
    {
      name: 'Sacred Beats',
      artist: 'Pedrito Martinez',
      desc: 'Bata tracks are enveloped in short, dense room reverbs to create a sense of being recorded in a ritual space, emphasizing their complex acoustic interaction.',
      url: 'https://open.spotify.com/track/2v6K1N8uU8mBvVqS5gN0Y2',
      platform: 'Spotify'
    }
  ],

  name: 'Bata',
  defaultLeft: 1, // Itótele default
  defaultRight: 1, // Itótele default
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
    // ==========================================
    // ENÚ HEAD SOUNDS (Large Bass Head)
    // ==========================================

    enu_abierto: (d, velocity = 0.8) => {
      const baseId = parseInt(d.id);
      const pan = getBataPan(d.id);

      // Try SoundFont
      const sfName = baseId === 2 ? 'conga bass tone' : 'conga tone';
      const sfPitch = d.pitchMult * (baseId === 2 ? 0.9 : baseId === 1 ? 0.9 : 1.35);
      const success = playSoundFontSample('conga', sfName, sfPitch, velocity, pan);
      if (success) return;

      let f = baseId === 0 ? 190 : baseId === 1 ? 130 : 90;
      f *= d.pitchMult;

      // Real-World Optimization 1: Fardela Inertia Drop + Velocity Bloom
      if (baseId > 0) {
        const dynamicDecay = 0.35 + velocity * 0.12;
        playMembrane(f * 1.04, dynamicDecay, 1.0, false, velocity, pan);

        // Secondary lingering bass wave modeling the internal air column ring
        setTimeout(() => {
          playMembrane(f * 0.96, dynamicDecay * 0.6, 0.4, false, velocity * 0.7, pan);
        }, 15);
      } else {
        // Okónkolo has no paste; crisp, clean open fundamental ring
        playMembrane(f, 0.32, 1.0, false, velocity, pan);
      }
    },

    enu_tapado: (d, velocity = 0.85) => {
      const baseId = parseInt(d.id);
      const pan = getBataPan(d.id);

      // Try SoundFont
      const success = playSoundFontSample(
        'conga',
        'congafngmuteslap',
        d.pitchMult * (baseId === 0 ? 1.4 : baseId === 1 ? 1.1 : 0.85),
        velocity,
        pan
      );
      if (success) return;

      let f = baseId === 0 ? 240 : baseId === 1 ? 165 : 120;
      f *= d.pitchMult;

      // Real-World Optimization 2: High Slap Transient Layer with Velocity Crack
      playMembrane(f * 1.15, 0.07, 1.2, false, velocity, pan);
      playMembrane(f * 0.85, 0.05, 0.5, true, velocity * 0.5, pan);

      // Leather slap friction pop on strong strikes
      if (velocity > 0.6) {
        playNoise(0.02 * velocity, 2800, velocity * 0.25, 'highpass');
      }
    },

    enu_muff: (d, velocity = 0.7) => {
      const baseId = parseInt(d.id);
      const pan = getBataPan(d.id);

      // Try SoundFont
      const success = playSoundFontSample(
        'conga',
        'conga mute',
        d.pitchMult * (baseId === 0 ? 1.4 : baseId === 1 ? 1.1 : 0.8),
        velocity,
        pan
      );
      if (success) return;

      let f = baseId === 0 ? 140 : baseId === 1 ? 95 : 70;
      f *= d.pitchMult;

      // Real-World Optimization 3: Pure Mass Dampening
      playMembrane(f, 0.04, 0.7, false, velocity, pan);
    },

    // ==========================================
    // CHACHÁ HEAD SOUNDS (Small Treble Head)
    // ==========================================

    chacha_abierto: (d, velocity = 0.8) => {
      const baseId = parseInt(d.id);
      const pan = getBataPan(d.id);

      // Try SoundFont
      const success = playSoundFontSample(
        'conga',
        'conga rim',
        d.pitchMult * (baseId === 0 ? 1.8 : baseId === 1 ? 1.4 : 1.1),
        velocity,
        pan
      );
      if (success) return;

      let f = baseId === 0 ? 440 : baseId === 1 ? 320 : 240;
      f *= d.pitchMult;

      // Sharp high treble ring
      playMembrane(f, 0.14, 0.9, true, velocity, pan);

      // Real-World Optimization 4: Sympathetic Chamber Resonance
      const lowResonanceFreq = baseId === 0 ? 190 : baseId === 1 ? 130 : 90;
      setTimeout(() => {
        playMembrane(lowResonanceFreq * d.pitchMult, 0.08, 0.25, false, velocity * 0.3, pan);
      }, 8);
    },

    chacha_tapado: (d, velocity = 0.9) => {
      const baseId = parseInt(d.id);
      const pan = getBataPan(d.id);

      // Try SoundFont
      const success = playSoundFontSample(
        'conga',
        'congaclosedslap',
        d.pitchMult * (baseId === 0 ? 2.0 : baseId === 1 ? 1.6 : 1.2),
        velocity,
        pan
      );
      if (success) return;

      let f = baseId === 0 ? 520 : baseId === 1 ? 380 : 290;
      f *= d.pitchMult;

      // Whip-crack dry snap
      playMembrane(f, 0.03, 1.3, true, velocity, pan);

      // Real-World Optimization 5: Iyá Choncho/Rattle Metallic Texture
      const tiltMod = state.currentTiltVolume || 1;
      if (baseId === 2) {
        playNoise(0.06, 4200, tiltMod * velocity * 0.5, 'highpass'); // High metallic chacha ring hardware
        playNoise(0.04, 2100, tiltMod * velocity * 0.25, 'bandpass', 2.0); // Mid hide friction
      } else {
        // Okónkolo and Itótele chachá heads ring out dry with subtle skin pop
        playNoise(0.02, 3500, velocity * 0.15, 'highpass');
      }
    }
  },
  touches: [
    {
      id: 'enu_abierto',
      label: 'Enú Abierto',
      shortName: 'Enú Open',
      description:
        'A deep, resonant open strike on the large head of the drum, mimicking the weight shift and fundamental decay of weighted rawhide.'
    },
    {
      id: 'enu_tapado',
      label: 'Enú Tapado',
      shortName: 'Enú Slap',
      description:
        'A crisp, suppressed slap targeting the edge of the large head while using the hand to trap overtones.'
    },
    {
      id: 'enu_muff',
      label: 'Enú Muff',
      shortName: 'Enú Muff',
      description:
        'Pressing the palm weight completely flat against the skin to eliminate pitch vibration, generating a deadened bass pulse.'
    },
    {
      id: 'chacha_abierto',
      label: 'Chachá Abierto',
      shortName: 'Chachá Open',
      description:
        'A bright, singing high-register ring struck cleanly with grouped fingertips on the small treble head.'
    },
    {
      id: 'chacha_tapado',
      label: 'Chachá Tapado',
      shortName: 'Chachá Snap',
      description:
        'An aggressive, whip-fast closed snap directly on the small head rim, triggering high internal acoustic pressure.'
    }
  ],
  mappings: {
    left: {
      up: 'enu_abierto',
      down: 'enu_tapado',
      left: 'enu_muff',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: ''
    },
    right: {
      up: 'chacha_abierto',
      down: 'chacha_tapado',
      left: '',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: ''
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
      woodGradient = `<linearGradient id="wood-body-${id}" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#3d1b09"/><stop offset="20%" stop-color="#7a3f1d"/><stop offset="50%" stop-color="#572b11"/><stop offset="80%" stroke="#381907"/><stop offset="100%" stop-color="#1a0a02"/></linearGradient>`;
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

        <g filter="url(#shadow-${id})">
          <path d="M 80 15 Q 200 55 320 32 L 320 128 Q 200 105 80 145 Z" fill="url(#wood-body-${id})"/>
          <path d="M 80 15 Q 200 55 320 32 L 320 128 Q 200 105 80 145 Z" fill="url(#wood-highlight-${id})"/>
          
          <path d="M 80 50 Q 200 70 320 60" stroke="#fcd34d" stroke-width="0.75" fill="none" opacity="0.12"/>
          <path d="M 80 80 Q 200 80 320 80" stroke="#fcd34d" stroke-width="0.75" fill="none" opacity="0.12"/>
          <path d="M 80 110 Q 200 90 320 100" stroke="#fcd34d" stroke-width="0.75" fill="none" opacity="0.12"/>
        </g>
        
        <g stroke="url(#strap-${id})" stroke-width="3" stroke-linecap="round" opacity="0.95" fill="none" filter="url(#shadow-${id})">
          <path d="M 80 25 L 320 120" stroke-width="2.5" opacity="0.8"/>
          <path d="M 80 40 L 320 105" stroke-width="2.5" opacity="0.8"/>
          <path d="M 80 55 L 320 90" stroke-width="2.5" opacity="0.8"/>
          <path d="M 80 70 L 320 75" stroke-width="2.5" opacity="0.8"/>
          <path d="M 80 85 L 320 60" stroke-width="2.5" opacity="0.8"/>
          <path d="M 80 100 L 320 45" stroke-width="2.5" opacity="0.8"/>
          <path d="M 80 115 L 320 35" stroke-width="2.5" opacity="0.8"/>

          <path d="M 80 135 L 320 40"/>
          <path d="M 80 120 L 320 55"/>
          <path d="M 80 105 L 320 70"/>
          <path d="M 80 90 L 320 85"/>
          <path d="M 80 75 L 320 100"/>
          <path d="M 80 60 L 320 115"/>
          <path d="M 80 45 L 320 125"/>
        </g>
        
        <g filter="url(#shadow-${id})">
          <path d="M 188 48 Q 200 45 212 48 L 212 112 Q 200 115 188 112 Z" fill="url(#strap-${id})" stroke="#b45309" stroke-width="1.5"/>
          <rect x="188" y="55" width="24" height="6" rx="2" fill="url(#rim-${id})" opacity="0.95"/>
          <rect x="188" y="99" width="24" height="6" rx="2" fill="url(#rim-${id})" opacity="0.95"/>
          <path d="M 193 48 L 193 112 M 200 46 L 200 114 M 207 48 L 207 112" stroke="#5c3f15" stroke-width="2" opacity="0.75"/>
        </g>

        <g filter="url(#shadow-${id})">
          <circle cx="80" cy="80" r="75" fill="none" stroke="url(#rim-${id})" stroke-width="6.5"/>
          <circle cx="80" cy="80" r="72" fill="none" stroke="#451a03" stroke-width="1.5"/>
          <circle cx="80" cy="80" r="70" fill="url(#skin-${id})"/>
          <circle cx="80" cy="80" r="62" fill="none" stroke="#ffffff" stroke-width="0.75" opacity="0.2"/>
          <circle cx="80" cy="80" r="50" fill="none" stroke="#ffffff" stroke-width="0.5" opacity="0.15"/>
          <circle cx="80" cy="80" r="35" fill="none" stroke="#000000" stroke-width="1" opacity="0.08"/>
          <circle cx="80" cy="80" r="33.5" fill="url(#fardela-${id})" opacity="0.98"/>
          <circle cx="80" cy="80" r="33.5" fill="url(#wood-highlight-${id})" opacity="0.3"/>
        </g>
        
        <g filter="url(#shadow-${id})">
          <circle cx="320" cy="80" r="49" fill="none" stroke="url(#rim-${id})" stroke-width="5.5"/>
          <circle cx="320" cy="80" r="46.5" fill="none" stroke="#451a03" stroke-width="1.2"/>
          <circle cx="320" cy="80" r="44.5" fill="url(#skin-${id})"/>
          <circle cx="320" cy="80" r="38" fill="none" stroke="#ffffff" stroke-width="0.5" opacity="0.2"/>
          <circle cx="320" cy="80" r="28" fill="none" stroke="#ffffff" stroke-width="0.5" opacity="0.15"/>
          <circle cx="320" cy="80" r="18" fill="none" stroke="#000000" stroke-width="1" opacity="0.08"/>
          <circle cx="320" cy="80" r="44.5" fill="url(#wood-highlight-${id})" opacity="0.35"/>
        </g>
      </svg>
    `;
  }
};
