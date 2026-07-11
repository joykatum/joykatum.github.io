import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const log_drum = {
  origin: 'Mesoamerica / Central Africa',
  description:
    'The Log Drum, or Slit Drum, is an ancient percussive idiophone crafted by hollowing out a solid wooden log and carving horizontal H-shaped slits into its shell. This creates wooden tongues of varying thicknesses, each vibrating at a distinct, warm, resonant pitch when struck with rubber mallets. Interesting fact: Log Drums are among the earliest percussive communication devices, historically used by tribes to transmit complex acoustic messages across miles of dense tropical jungle, as well as in Aztec rituals and African tribal ceremonies.',
  performers: [
    {
      name: 'Xavier Quijas Yxayotl',
      spotify: 'true',
      apple: 'true'
    },
    {
      name: 'Brent Lewis',
      spotify: 'true',
      apple: 'true'
    }
  ],
  songs: [
    {
      name: 'Mayan Rituality',
      artist: 'Xavier Quijas Yxayotl',
      spotify: 'true',
      apple: 'true'
    }
  ],
  effectsSongs: [
    {
      name: 'Jungle Message Echoes',
      artist: 'Xavier Quijas Yxayotl',
      desc: 'The hollow, woody knocks of the Log Drum are treated with tape ping-pong delays and lush room reverbs, simulating an ancient communication echo.',
      url: '',
      platform: 'Spotify'
    }
  ],

  generateSVG: (id, colorType, lugsHtml) => `
    <!-- Heavy bottom shadow -->
            <rect x="8" y="28" width="84" height="48" rx="8" fill="#020617" opacity="0.65" filter="blur(3px)"/>
            
            <!-- Main 3D Cylindrical Log Body -->
            <rect x="12" y="24" width="76" height="44" rx="10" fill="url(#skin-${id})" stroke="#1c0d02" stroke-width="2"/>
            
            <!-- Tree Ring Endcaps (3D perspective) -->
            <ellipse cx="12" cy="46" rx="4" ry="20" fill="#271305" stroke="#1c0d02" stroke-width="1"/>
            <ellipse cx="12" cy="46" rx="2" ry="10" fill="#451a03"/>
            <ellipse cx="88" cy="46" rx="4" ry="20" fill="url(#skin-${id})" stroke="#1c0d02" stroke-width="1"/>
            <ellipse cx="88" cy="46" rx="2" ry="10" fill="#271305"/>
            
            <!-- Rich wood grain textures -->
            <path d="M 16 35 Q 50 32, 84 35" fill="none" stroke="#271305" stroke-width="0.8" opacity="0.3"/>
            <path d="M 16 57 Q 50 60, 84 57" fill="none" stroke="#271305" stroke-width="0.8" opacity="0.3"/>
            
            <!-- Finely carved sound tongue slits (H-shape or elegant dual slit) -->
            <!-- Background slit cutouts (dark void) -->
            <path d="M 22 42 L 46 42 Q 48 42, 48 45 L 48 47 Q 48 50, 46 50 L 22 50 Z" fill="#0c0402" stroke="#1c0d02" stroke-width="1"/>
            <path d="M 78 42 L 54 42 Q 52 42, 52 45 L 52 47 Q 52 50, 54 50 L 78 50 Z" fill="#0c0402" stroke="#1c0d02" stroke-width="1"/>
            <rect x="47.5" y="40" width="5" height="12" rx="1" fill="#0c0402" stroke="#1c0d02" stroke-width="0.8"/>
            
            <!-- 3D highlight on log edges -->
            <path d="M 12 25 L 88 25" stroke="#ffffff" stroke-width="0.8" opacity="0.15"/>
            <rect x="12" y="24" width="76" height="44" rx="10" fill="url(#overlay-${id})" opacity="0.6"/>
  `,
  name: 'Log Drum',
  defaultRight: 1,
  drums: [
    {
      id: 0,
      label: 'Low Log',
      pitchMult: 1,
      color: 'wood',
      sizeValue: 19
    },
    {
      id: 1,
      label: 'High Log',
      pitchMult: 1.25,
      color: 'wood-light',
      sizeValue: 16
    }
  ],
  sounds: {
    slat_center_tongue_pop: (d) => {
      playMembrane((d.id === 0 ? 330 : 440) * d.pitchMult, 0.1, 1.0, true);
      playNoise(0.04, 2000, state.currentTiltVolume * 0.4);
    },
    slat_edge_dead_stroke: (d) => playMembrane((d.id === 0 ? 120 : 160) * d.pitchMult, 0.08, 1.0, false),
    bridge_strike: (d) => playMembrane((d.id === 0 ? 250 : 300) * d.pitchMult, 0.05, 1.0, false)
  },
  touches: [
    {
      id: 'slat_center_tongue_pop',
      label: 'Slat center tongue pop',
      shortName: 'Slat center ...',
      description:
        'Striking the center of the tuned wooden tongues with rubber mallets to produce a highly resonant, hollow tone'
    },
    {
      id: 'slat_edge_dead_stroke',
      label: 'Slat edge dead stroke',
      shortName: 'Slat edge de...',
      description: 'Striking the wooden tongue and leaving the mallet down to choke the sustain and create a dry click'
    },
    {
      id: 'bridge_strike',
      label: 'Bridge Strike',
      shortName: 'Bridge Strike',
      description:
        'Striking the solid, un-cut wooden bridge section between the tuned tongues to produce a sharp, high-pitched, solid wood-block crack'
    }
  ],
  mappings: {
    left: {
      up: 'slat_center_tongue_pop',
      down: 'slat_edge_dead_stroke',
      left: 'bridge_strike',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'slat_center_tongue_pop'
    },
    right: {
      up: 'slat_center_tongue_pop',
      down: 'slat_edge_dead_stroke',
      left: 'bridge_strike',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'slat_edge_dead_stroke'
    }
  }
};
