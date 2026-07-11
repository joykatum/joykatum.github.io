import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const temple_blocks = {
  origin: 'East Asia (China / Japan)',
  description:
    "Temple Blocks are hollow wooden idiophones shaped like bulbous fish heads, historically derived from the Chinese 'Muyu' (wooden fish) used in Buddhist and Taoist chanting. Played in sets of tuned blocks mounted on a stand, they are struck with hard wood or rubber mallets to produce clean, hollow, highly distinct wooden clicks. Interesting fact: the fish shape is symbolic because fish never close their eyes, representing the wakefulness and mindfulness required in Buddhist practice. In modern music, they are a beloved orchestral color used to add whimsical percussive ticks and rhythmic details.",
  performers: [
    {
      name: 'Keiko Abe',
      spotify: 'true',
      apple: 'true'
    },
    {
      name: 'Evelyn Glennie',
      spotify: 'true',
      apple: 'true'
    }
  ],
  songs: [
    {
      name: 'Wooden Resonance Suite',
      artist: 'Keiko Abe',
      spotify: 'true',
      apple: 'true'
    }
  ],
  effectsSongs: [
    {
      name: 'Zen Wood Resonance',
      artist: 'Keiko Abe',
      desc: 'The sharp, dry ticks of the blocks are processed through shimmering granular delays and long spatialized reverbs to create a floating, ambient texture.',
      url: '',
      platform: 'Spotify'
    }
  ],

  generateSVG: (id, colorType, lugsHtml) => `
    <!-- Heavy bottom shadow -->
            <path d="M 20 52 C 20 22, 80 22, 80 52 C 80 82, 20 82, 20 52 Z" fill="#020617" opacity="0.7" filter="blur(3px)"/>
            
            <!-- Traditional Ornate Wooden Fish Body (Bulbous with handle hook) -->
            <path d="M 22 50 C 22 24, 78 24, 78 50 C 78 74, 58 78, 50 78 C 42 78, 22 74, 22 50 Z" fill="url(#skin-${id})" stroke="#1c0d02" stroke-width="2.5" filter="drop-shadow(0 2px 3px rgba(0,0,0,0.4))"/>
            
            <!-- Curved stylized handle (Tail hook at the bottom) -->
            <path d="M 42 76 C 42 86, 58 86, 58 76" fill="none" stroke="url(#skin-${id})" stroke-width="6" stroke-linecap="round"/>
            <path d="M 42 76 C 42 86, 58 86, 58 76" fill="none" stroke="#1c0d02" stroke-width="1" stroke-linecap="round"/>
            
            <!-- Prominent carved sound "mouth" slit with rounded bulbous ends -->
            <path d="M 26 48 C 26 36, 74 36, 74 48" fill="none" stroke="#0a0301" stroke-width="5.5" stroke-linecap="round"/>
            <path d="M 26 48 C 26 36, 74 36, 74 48" fill="none" stroke="#7c2d12" stroke-width="1.5" stroke-linecap="round"/>
            
            <!-- Hollow circular nostril cutouts (traditional fish look) -->
            <circle cx="34" cy="36" r="3.2" fill="#0a0301" stroke="#1c0d02" stroke-width="0.8"/>
            <circle cx="66" cy="36" r="3.2" fill="#0a0301" stroke="#1c0d02" stroke-width="0.8"/>
            
            <!-- Traditional scale carvings on the sides -->
            <path d="M 28 54 Q 34 50, 40 54 M 60 54 Q 66 50, 72 54" fill="none" stroke="#1c0d02" stroke-width="1.2" opacity="0.4"/>
            <path d="M 32 60 Q 40 56, 48 60 M 52 60 Q 60 56, 68 60" fill="none" stroke="#1c0d02" stroke-width="1.2" opacity="0.4"/>
            
            <!-- Ambient 3D lighting cover -->
            <path d="M 22 50 C 22 24, 78 24, 78 50 C 78 74, 58 78, 50 78 C 42 78, 22 74, 22 50 Z" fill="url(#overlay-${id})" opacity="0.6"/>
  `,
  name: 'Temple Blocks',
  defaultRight: 2,
  drums: [
    {
      id: 0,
      label: 'Low Block',
      pitchMult: 0.8,
      color: 'cherry',
      sizeValue: 16
    },
    {
      id: 1,
      label: 'Mid Block',
      pitchMult: 1,
      color: 'cherry-red',
      sizeValue: 14
    },
    {
      id: 2,
      label: 'High Block',
      pitchMult: 1.25,
      color: 'cherry-light',
      sizeValue: 12
    }
  ],
  sounds: {
    center_mallet_hit: (d) => {
      playMembrane((d.id === 0 ? 360 : d.id === 1 ? 480 : 640) * d.pitchMult, 0.08, 1.0, true);
      playNoise(0.02, 3500, state.currentTiltVolume * 0.6);
    },
    lip_scrape: (d) => playMembrane((d.id === 0 ? 180 : d.id === 1 ? 240 : 320) * d.pitchMult, 0.22, 1.0, false)
  },
  touches: [
    {
      id: 'center_mallet_hit',
      label: 'Center mallet hit',
      shortName: 'Center malle...',
      description:
        'Striking the center opening of the hollow wooden or plastic blocks with hard mallets for a crisp, hollow clack'
    },
    {
      id: 'lip_scrape',
      label: 'Lip Scrape',
      shortName: 'Lip Scrape',
      description:
        'Dragging a hard plastic mallet across the hollow open lips of the blocks to create a hollow, multi-pitched chattering friction sound'
    }
  ],
  mappings: {
    left: {
      up: 'center_mallet_hit',
      down: 'lip_scrape',
      left: '',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'center_mallet_hit'
    },
    right: {
      up: 'center_mallet_hit',
      down: 'lip_scrape',
      left: '',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'lip_scrape'
    }
  }
};
