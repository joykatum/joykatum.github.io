import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';
import { playSoundFontSample } from '../sf2Loader.js';

export const gran_cassa = {
  origin: 'Europe (Classical Concert Tradition)',
  description:
    'The Gran Cassa is the grand orchestral bass drum, famous for its colossal size and deep, tectonic frequencies. Historically evolved from Ottoman military marching bands (Mehter), it was integrated into Western classical orchestras by the late 18th century. Typically suspended in a large rolling steel frame, it is struck with massive, heavily padded felt-covered wooden mallets. Interesting fact: the Gran Cassa does not produce a definite pitch; instead, it generates a massive wave of low-frequency air pressure that is felt in the chest as much as it is heard by the ears, making it the ultimate tool for dramatic symphonic climaxes and modern cinematic tension.',
  performers: [
    {
      name: 'Evelyn Glennie',
      spotify: 'true',
      apple: 'true'
    }
  ],
  songs: [
    {
      name: 'Symphony No. 9 Bass Drum Movement',
      artist: 'Evelyn Glennie',
      spotify: 'true',
      apple: 'true'
    }
  ],
  effectsSongs: [
    {
      name: 'Cinematic Low End',
      artist: 'Evelyn Glennie',
      desc: 'In cinematic mixes, the Gran Cassa is treated with sub-harmonic synthesis and massive digital hall reverbs, turning single strokes into earth-shattering impact effects.',
      url: '',
      platform: 'Spotify'
    }
  ],

  generateSVG: (id, colorType, lugsHtml) => `
    <circle cx="50" cy="50" r="47" fill="#1e293b" opacity="0.08"/>
            
            <!-- Large suspended orchestral bass drum inside a heavy metal cradle stand -->
            <g transform="rotate(5, 50, 50)">
              <!-- Stand bottom horizontal support shadow -->
              <ellipse cx="50" cy="88" rx="36" ry="4" fill="#020617" opacity="0.75" filter="blur(2.5px)"/>
              
              <!-- Suspension stand outer circular frame (black tubular steel) -->
              <circle cx="50" cy="48" r="44" fill="none" stroke="#09090b" stroke-width="3" filter="drop-shadow(0 3px 5px rgba(0,0,0,0.5))"/>
              <!-- Stand feet and vertical bars -->
              <line x1="22" y1="76" x2="16" y2="88" stroke="#18181b" stroke-width="3.2" stroke-linecap="round"/>
              <line x1="78" y1="76" x2="84" y2="88" stroke="#18181b" stroke-width="3.2" stroke-linecap="round"/>
              <line x1="16" y1="88" x2="84" y2="88" stroke="#18181b" stroke-width="3.2" stroke-linecap="round"/>
              
              <!-- Circular wooden shell deep cylinder suspended inside stand -->
              <circle cx="50" cy="48" r="32" fill="#2d1a12" stroke="#0c0402" stroke-width="2.5" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.45))"/>
              
              <!-- Thick calfskin white drumheads stretched over flesh hoops with tuning lugs -->
              <circle cx="50" cy="48" r="29" fill="url(#skin-${id})" stroke="#8a5b30" stroke-width="1.5"/>
              <circle cx="50" cy="48" r="26.5" fill="none" stroke="#ad845b" stroke-width="0.8" opacity="0.5"/>
              
              <!-- Elastic suspension bands/ropes connecting shell to the outer circular stand -->
              <path d="M 50 4 L 50 16 M 50 92 L 50 80 M 6 48 L 18 48 M 94 48 L 82 48 M 18 16 L 8 26 M 82 16 L 92 26 M 18 80 L 8 70 M 82 80 L 92 70" stroke="#ef4444" stroke-width="1.4" opacity="0.85" stroke-linecap="round"/>
              
              <!-- Heavy fluffy mallet/beater hanging or crossing the drumhead -->
              <g transform="translate(42, 38) rotate(-35)">
                <!-- Handle -->
                <line x1="-12" y1="28" x2="12" y2="-28" stroke="#fef08a" stroke-width="1.8" stroke-linecap="round" filter="drop-shadow(1px 2px 2px rgba(0,0,0,0.4))"/>
                <!-- Fluffy head -->
                <circle cx="12" cy="-28" r="4.5" fill="#f8fafc" stroke="#cbd5e1" stroke-width="0.5" filter="drop-shadow(0px 1.5px 1.5px rgba(0,0,0,0.3))"/>
              </g>
              
              <!-- Ambient 3D shading on head -->
              <circle cx="50" cy="48" r="29" fill="url(#overlay-${id})" opacity="0.75"/>
            </g>
  `,
  name: 'Gran Cassa',
  drums: [
    {
      id: 0,
      label: 'Gran Cassa',
      pitchMult: 1,
      color: 'dark',
      sizeValue: 28
    }
  ],
  sounds: {
    glancing_arc_blow: (d, velocity = 0.85) => {
      const sample = velocity >= 0.7 ? 'bass_drum-f' : 'bass_drum-p';
      const success = playSoundFontSample('gran_cassa', sample, d.pitchMult, velocity, 0.0);
      if (!success) {
        playMembrane(35 * d.pitchMult, 1.4, 1.8, false, velocity);
        playMembrane(70 * d.pitchMult, 0.8, 1.5, false, velocity);
      }
    },
    secco_hit: (d, velocity = 0.85) => {
      const success = playSoundFontSample('gran_cassa', 'bass_drum-f', d.pitchMult, velocity, 0.0, 0.35);
      if (!success) {
        playMembrane(45 * d.pitchMult, 0.25, 1.3, false, velocity);
      }
    },
    hand_damping: (d, velocity = 0.6) => {
      const success = playSoundFontSample('gran_cassa', 'bass_drum-p', d.pitchMult, velocity, 0.0, 0.2);
      if (!success) {
        playMembrane(40 * d.pitchMult, 1.1, 1.6, false, velocity);
        playMembrane(80 * d.pitchMult, 0.6, 1.4, false, velocity);
      }
    },
    shell_knock: (d, velocity = 0.85) => {
      const success = playSoundFontSample('gran_cassa', 'bass_drum-p', d.pitchMult * 2.8, velocity, 0.0, 0.15);
      if (!success) {
        playMembrane(40 * d.pitchMult, 1.1, 1.6, false, velocity);
        playMembrane(80 * d.pitchMult, 0.6, 1.4, false, velocity);
      }
    }
  },
  touches: [
    {
      id: 'glancing_arc_blow',
      label: 'Glancing arc blow',
      shortName: 'Glancing arc...',
      description:
        'Striking off-center with a massive plush mallet using a sweeping arc motion to draw out deep, dark orchestral low ends'
    },
    {
      id: 'secco_hit',
      label: 'Secco hit',
      shortName: 'Secco hit',
      description:
        'Striking the center of the large head cleanly while the non-striking hand rests on the opposite head to kill sustain'
    },
    {
      id: 'hand_damping',
      label: 'Hand damping',
      shortName: 'Hand damping',
      description:
        'Placing the flat palm or forearm against the vibrating head immediately after a strike to control the length of the note'
    },
    {
      id: 'shell_knock',
      label: 'Shell Knock',
      shortName: 'Shell Knock',
      description:
        'Striking the massive wooden outer shell of the bass drum with the wooden handle of the mallet to produce a giant, booming wood-block tone'
    }
  ],
  mappings: {
    left: {
      up: 'glancing_arc_blow',
      down: 'secco_hit',
      left: 'hand_damping',
      right: 'shell_knock',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'glancing_arc_blow'
    },
    right: {
      up: 'glancing_arc_blow',
      down: 'secco_hit',
      left: 'hand_damping',
      right: 'shell_knock',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'secco_hit'
    }
  }
};
