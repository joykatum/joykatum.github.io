import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const zabumba = {
  origin: 'Brazil (Northeast)',
  description:
    'The Zabumba is a flat, deep bass drum crucial in Northeastern Brazilian music genres like Forró and Baião. Played with a mallet on the top skin and a thin stick (bacalhau) on the bottom, it creates a bouncing syncopated groove.',
  performers: [
    {
      name: 'Luiz Gonzaga',
      spotify: 'true',
      apple: 'true'
    },
    {
      name: 'Hermeto Pascoal',
      spotify: 'true',
      apple: 'true'
    }
  ],
  songs: [
    {
      name: 'Asa Branca',
      artist: 'Luiz Gonzaga',
      spotify: 'true',
      apple: 'true'
    }
  ],
  effectsSongs: [
    {
      name: 'Forro Bass Boom Enhancer',
      artist: 'Northeast Beats',
      desc: 'Sub-bass harmonic addition is used on the primary mallet beats, resulting in a rich, modern dancefloor pulse.',
      url: '',
      platform: 'Spotify'
    }
  ],

  generateSVG: (id, colorType, lugsHtml) => `
    <circle cx="50" cy="50" r="47" fill="#1e293b" opacity="0.08"/>
            
            <!-- Wide, shallow 3D cylindrical shell -->
            <g transform="rotate(15, 50, 50)">
              <!-- Shell drop shadow -->
              <rect x="18" y="32" width="64" height="36" rx="8" fill="#020617" opacity="0.4" filter="blur(3px)"/>
              
              <!-- Polished blue/green metallic shell -->
              <rect x="20" y="34" width="60" height="32" rx="4" fill="url(#skin-${id})" stroke="#0f172a" stroke-width="1.8"/>
              
              <!-- Vertical chrome tuning tension rods and brackets -->
              <line x1="28" y1="30" x2="28" y2="70" stroke="url(#chrome-${id})" stroke-width="1.5"/>
              <line x1="42" y1="30" x2="42" y2="70" stroke="url(#chrome-${id})" stroke-width="1.5"/>
              <line x1="58" y1="30" x2="58" y2="70" stroke="url(#chrome-${id})" stroke-width="1.5"/>
              <line x1="72" y1="30" x2="72" y2="70" stroke="url(#chrome-${id})" stroke-width="1.5"/>
              
              <!-- Chrome brackets on shell -->
              <rect x="26.5" y="47" width="3" height="6" fill="url(#chrome-${id})" stroke="#1e293b" stroke-width="0.4"/>
              <rect x="40.5" y="47" width="3" height="6" fill="url(#chrome-${id})" stroke="#1e293b" stroke-width="0.4"/>
              <rect x="56.5" y="47" width="3" height="6" fill="url(#chrome-${id})" stroke="#1e293b" stroke-width="0.4"/>
              <rect x="70.5" y="47" width="3" height="6" fill="url(#chrome-${id})" stroke="#1e293b" stroke-width="0.4"/>
              
              <!-- Top head with metal hoop -->
              <ellipse cx="50" cy="34" rx="30" ry="8" fill="#f1f5f9" stroke="url(#chrome-${id})" stroke-width="2" filter="drop-shadow(0 -1px 1px rgba(0,0,0,0.3))"/>
              <ellipse cx="50" cy="34" rx="26" ry="6.5" fill="none" stroke="#94a3b8" stroke-width="0.5"/>
              
              <!-- Bottom head with metal hoop -->
              <ellipse cx="50" cy="66" rx="30" ry="8" fill="#e2e8f0" stroke="url(#chrome-${id})" stroke-width="2" filter="drop-shadow(0 1px 1px rgba(0,0,0,0.3))"/>
              
              <!-- Ambient 3D lighting over shell -->
              <rect x="20" y="34" width="60" height="32" rx="4" fill="url(#overlay-${id})" opacity="0.65"/>
              <line x1="22" y1="36" x2="22" y2="64" stroke="#ffffff" stroke-width="1" opacity="0.2"/>
            </g>
  `,
  name: 'Zabumba',
  drums: [
    {
      id: 0,
      label: 'Zabumba',
      pitchMult: 1,
      color: 'darker',
      sizeValue: 24
    }
  ],
  sounds: {
    baqueta_bass: (d) => playMembrane(55 * d.pitchMult, 0.7, 1.3, false),
    bacalhau_tap: (d) => playMembrane(520 * d.pitchMult, 0.08, 0.9, true),
    hoop_click: (d) => playMembrane(950 * d.pitchMult, 0.04, 1.1, true),
    hand_slap: (d) => {
      playMembrane(180 * d.pitchMult, 0.12, 1.0, true);
      playNoise(0.04, 2500, state.currentTiltVolume * 0.7);
    }
  },
  touches: [
    {
      id: 'ma_o',
      label: 'Maço',
      shortName: 'Maço',
      description:
        'Hitting the top calfskin head with a heavy, padded mallet on the downbeat to create a muffled or open bass pulse'
    },
    {
      id: 'bacalhau',
      label: 'Bacalhau',
      shortName: 'Bacalhau',
      description:
        'Striking the bottom plastic head from underneath with a thin flexible twig switch to execute rapid, syncopated upbeats'
    },
    {
      id: 'hoop_click',
      label: 'Hoop Click',
      shortName: 'Hoop Click',
      description:
        'Striking the metal or wooden tuning hoop with the thin twig switch to create a high, snappy accent between the bass mallet notes'
    }
  ],
  mappings: {
    left: {
      up: 'baqueta_bass',
      down: 'bacalhau_tap',
      left: 'hoop_click',
      right: 'hand_slap',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'baqueta_bass'
    },
    right: {
      up: 'baqueta_bass',
      down: 'bacalhau_tap',
      left: 'hoop_click',
      right: 'hand_slap',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'bacalhau_tap'
    }
  }
};
