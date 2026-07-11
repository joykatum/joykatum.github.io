import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const teponaztli = {
  origin: 'Mesoamerica (Mexico / Aztec)',
  description:
    'The Teponaztli is a sacred Mesoamerican slit-drum made from a hollowed hardwood log. Two tongues of different thicknesses are carved on the top, producing two distinct, haunting pitches when struck with rubber-headed mallets. Used in religious rituals and battle calls by the Aztecs, it represents the voice of ancient deities.',
  performers: [
    {
      name: 'Xavier Quijas Yxayotl',
      spotify: 'true',
      apple: 'true'
    }
  ],
  songs: [
    {
      name: 'Aztec Battle Call',
      artist: 'Xavier Quijas Yxayotl',
      spotify: 'true',
      apple: 'true'
    }
  ],
  effectsSongs: [
    {
      name: 'Ancient Rituals',
      artist: 'Yxayotl Ensembles',
      desc: 'The dual wooden tongues are enveloped in extreme, high-decay cave reverb and tape echo, evoking the mystical aura of ancient rainforest ceremonies.',
      url: 'https://open.spotify.com/track/4jVlC05tDsz0I7Rof9Obe1',
      platform: 'Spotify'
    }
  ],

  generateSVG: (id, colorType, lugsHtml) => `
    <!-- Heavy bottom shadow -->
            <rect x="10" y="24" width="80" height="54" rx="10" fill="#020617" opacity="0.65" filter="blur(2.5px)"/>
            
            <!-- Dark carved hardwood log body -->
            <rect x="12" y="22" width="76" height="50" rx="10" fill="url(#skin-${id})" stroke="#1c0d02" stroke-width="2.2" filter="drop-shadow(0 2px 3px rgba(0,0,0,0.4))"/>
            
            <!-- Fine wood grain lines -->
            <line x1="16" y1="30" x2="84" y2="30" stroke="#1c0d02" stroke-width="0.5" opacity="0.15"/>
            <line x1="16" y1="64" x2="84" y2="64" stroke="#1c0d02" stroke-width="0.5" opacity="0.15"/>
            
            <!-- Dual carved vibrating tongues forming a central H-slit -->
            <path d="M 28 42 L 46 42 A 2.5 2.5 0 0 1 48.5 44.5 L 48.5 45.5 A 2.5 2.5 0 0 1 46 48 L 28 48" fill="none" stroke="#090502" stroke-width="2" stroke-linecap="round"/>
            <path d="M 72 42 L 54 42 A 2.5 2.5 0 0 0 51.5 44.5 L 51.5 45.5 A 2.5 2.5 0 0 0 54 48 L 72 48" fill="none" stroke="#090502" stroke-width="2" stroke-linecap="round"/>
            <line x1="50" y1="42.5" x2="50" y2="47.5" stroke="#090502" stroke-width="2.2" stroke-linecap="round"/>
            
            <!-- Carved Aztec decorative pattern outline -->
            <path d="M 18 36 L 22 36 L 22 40 L 18 40 Z" fill="none" stroke="#1c0d02" stroke-width="0.8" opacity="0.3"/>
            <path d="M 82 36 L 78 36 L 78 40 L 82 40 Z" fill="none" stroke="#1c0d02" stroke-width="0.8" opacity="0.3"/>
            
            <!-- Ambient 3D lighting cover -->
            <rect x="12" y="22" width="76" height="50" rx="10" fill="url(#overlay-${id})" opacity="0.6"/>
  `,
  name: 'Teponaztli',
  drums: [
    {
      id: 0,
      label: 'Teponaztli',
      pitchMult: 1,
      color: 'wood',
      sizeValue: 19.5
    }
  ],
  sounds: {
    long_tongue_strike: (d) => playMembrane(210 * d.pitchMult, 0.08, 0.8, false),
    short_tongue_strike: (d) => playMembrane(240 * d.pitchMult, 0.45, 1.0, false),
    side_body_hit: (d) => playMembrane(280 * d.pitchMult, 0.06, 0.95, false)
  },
  touches: [
    {
      id: 'long_tongue_strike',
      label: 'Long tongue strike',
      shortName: 'Long tongue ...',
      description:
        'Striking the longer, lower-pitched wooden tongue carved into the top of the hollow log with a rubber mallet'
    },
    {
      id: 'short_tongue_strike',
      label: 'Short tongue strike',
      shortName: 'Short tongue...',
      description:
        'Striking the shorter, higher-pitched wooden tongue carved adjacent to the long tongue to create a distinct intervals'
    },
    {
      id: 'side_body_hit',
      label: 'Side Body Hit',
      shortName: 'Side Body Hit',
      description:
        'Striking the solid outer log walls away from the carved tongues to isolate a dry, dense, heavy wood-block thud'
    }
  ],
  mappings: {
    left: {
      up: 'long_tongue_strike',
      down: 'short_tongue_strike',
      left: 'side_body_hit',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'long_tongue_strike'
    },
    right: {
      up: 'long_tongue_strike',
      down: 'short_tongue_strike',
      left: 'side_body_hit',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'short_tongue_strike'
    }
  }
};
