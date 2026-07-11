import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const kanjira = {
  origin: 'Southern India (Carnatic Tradition)',
  description:
    "The Kanjira is a small but incredibly dynamic frame drum used in South Indian Carnatic classical music. Historically covered with the skin of the endangered Bengal monitor lizard (now replaced with goat or synthetic skins for conservation), it features a single pair of small brass bells or coins as jingles. Though it looks simple, playing the Kanjira requires virtuoso finger dexterity. The player holds the drum in one hand and strikes with the other, using the fingers of the holding hand to squeeze the drum's edge from the inside, dynamically shifting the pitch. An interesting fact: despite its tiny 7-inch diameter, a master player can extract deep, sliding bass tones and crisp, high-frequency slaps that rival a full drum set.",
  performers: [
    {
      name: 'V. Selvaganesh',
      spotify: 'true',
      apple: 'true'
    },
    {
      name: 'G. Harishankar',
      spotify: 'true',
      apple: 'true'
    }
  ],
  songs: [
    {
      name: 'Kanjira Solo',
      artist: 'V. Selvaganesh',
      spotify: 'true',
      apple: 'true'
    }
  ],
  effectsSongs: [
    {
      name: 'Laya Vinyas',
      artist: 'V. Selvaganesh',
      desc: 'In modern recordings, Kanjira pitch slides are highlighted using short digital delays and pristine room reverbs, preserving the organic texture of the hand slaps.',
      url: '',
      platform: 'Spotify'
    }
  ],

  generateSVG: (id, colorType, lugsHtml) => `
    <!-- Heavy bottom shadow -->
            <circle cx="50" cy="51" r="49" fill="#020617" opacity="0.6" filter="blur(2px)"/>
            
            <!-- Jackwood dark frame hoop -->
            <circle cx="50" cy="50" r="48" fill="none" stroke="#271305" stroke-width="3"/>
            
            <!-- Brass coin jingle set into a single frame slot on the side -->
            <g transform="rotate(25, 50, 50)">
              <rect x="91" y="46" width="7" height="8" rx="1" fill="#0f172a" stroke="#1e293b" stroke-width="0.5"/>
              <circle cx="94" cy="48" r="4.2" fill="#eab308" stroke="#854d0e" stroke-width="0.4" filter="drop-shadow(0px 1px 1px rgba(0,0,0,0.4))"/>
              <circle cx="95" cy="52" r="4.2" fill="#fbbf24" stroke="#a16207" stroke-width="0.4" filter="drop-shadow(0px 1px 1px rgba(0,0,0,0.4))"/>
            </g>
            
            <!-- Scaled lizard-skin textured drumhead -->
            <circle cx="50" cy="50" r="45.5" fill="url(#skin-${id})"/>
            
            <!-- Lizard skin grain/speckle pattern details -->
            <circle cx="45" cy="45" r="38" fill="none" stroke="#1e1b18" stroke-width="0.8" stroke-dasharray="1 8" opacity="0.3"/>
            <circle cx="52" cy="52" r="28" fill="none" stroke="#1e1b18" stroke-width="0.8" stroke-dasharray="1 6" opacity="0.35"/>
            <circle cx="48" cy="48" r="18" fill="none" stroke="#1e1b18" stroke-width="0.8" stroke-dasharray="1 4" opacity="0.4"/>
            
            <!-- Ambient 3D lighting cover -->
            <circle cx="50" cy="50" r="45.5" fill="url(#overlay-${id})"/>
  `,
  name: 'Kanjira',
  drums: [
    {
      id: 0,
      label: 'Kanjira',
      pitchMult: 1,
      color: 'caramel',
      sizeValue: 16
    }
  ],
  sounds: {
    split_finger_edge_tap: (d) => playTablaSlideUp(150 * d.pitchMult, 80 * d.pitchMult, 0.4),
    inner_skin_pitch_glide: (d) => playTablaSlideUp(150 * d.pitchMult, 80 * d.pitchMult, 0.4)
  },
  touches: [
    {
      id: 'split_finger_edge_tap',
      label: 'Split-finger edge tap',
      shortName: 'Split-finger...',
      description:
        'Striking the frame drum skin near the rim using alternating index and ring finger groups for high subdivisions'
    },
    {
      id: 'inner_skin_pitch_glide',
      label: 'Inner skin pitch glide',
      shortName: 'Inner skin p...',
      description:
        'Pressing and sliding the fingers of the holding hand against the inside of the loose lizard skin to dramatically bend the pitch'
    }
  ],
  mappings: {
    left: {
      up: 'split_finger_edge_tap',
      down: 'inner_skin_pitch_glide',
      left: '',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'split_finger_edge_tap'
    },
    right: {
      up: 'split_finger_edge_tap',
      down: 'inner_skin_pitch_glide',
      left: '',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'inner_skin_pitch_glide'
    }
  }
};
