import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const frog_rasp = {
  generateSVG: (id, colorType, lugsHtml) => `
    <!-- Heavy bottom shadow -->
            <path d="M 28 52 C 28 22, 72 22, 72 52 C 72 72, 28 72, 28 52 Z" fill="#020617" opacity="0.6" filter="blur(3px)"/>
            
            <!-- Carved wooden frog body -->
            <path d="M 30 50 C 30 20, 70 20, 70 50 C 70 74, 58 78, 50 78 C 42 78, 30 74, 30 50 Z" fill="url(#skin-${id})" stroke="#1c0d02" stroke-width="2" filter="drop-shadow(0 2px 3px rgba(0,0,0,0.4))"/>
            
            <!-- Tucked rear wooden legs (3D curves) -->
            <path d="M 30 62 C 22 62, 22 74, 34 74" fill="none" stroke="url(#skin-${id})" stroke-width="4.5" stroke-linecap="round"/>
            <path d="M 30 62 C 22 62, 22 74, 34 74" fill="none" stroke="#1c0d02" stroke-width="1" stroke-linecap="round"/>
            <path d="M 70 62 C 78 62, 78 74, 66 74" fill="none" stroke="url(#skin-${id})" stroke-width="4.5" stroke-linecap="round"/>
            <path d="M 70 62 C 78 62, 78 74, 66 74" fill="none" stroke="#1c0d02" stroke-width="1" stroke-linecap="round"/>
            
            <!-- Stylest wooden feet at the front -->
            <path d="M 40 76 L 38 82 M 43 77 L 42 83" stroke="#1c0d02" stroke-width="2" stroke-linecap="round"/>
            <path d="M 60 76 L 62 82 M 57 77 L 58 83" stroke="#1c0d02" stroke-width="2" stroke-linecap="round"/>
            
            <!-- Large expressive wooden eyes -->
            <circle cx="38" cy="28" r="4.5" fill="url(#skin-${id})" stroke="#1c0d02" stroke-width="1.2"/>
            <circle cx="38" cy="28" r="2.2" fill="#1c0d02"/>
            <circle cx="62" cy="28" r="4.5" fill="url(#skin-${id})" stroke="#1c0d02" stroke-width="1.2"/>
            <circle cx="62" cy="28" r="2.2" fill="#1c0d02"/>
            
            <!-- Hollow mouth chamber slit (where scraper stick goes) -->
            <path d="M 32 46 Q 50 52, 68 46" fill="none" stroke="#0a0301" stroke-width="3" stroke-linecap="round"/>
            
            <!-- Aligned spine ridges (the rasp) -->
            <path d="M 50 25 L 50 65" stroke="#1c0d02" stroke-width="1.8" stroke-dasharray="2.5 3.5" stroke-linecap="round"/>
            <path d="M 46 32 Q 50 28, 54 32" fill="none" stroke="#1c0d02" stroke-width="2" stroke-linecap="round" opacity="0.8"/>
            <path d="M 44 40 Q 50 36, 56 40" fill="none" stroke="#1c0d02" stroke-width="2" stroke-linecap="round" opacity="0.8"/>
            <path d="M 43 48 Q 50 44, 57 48" fill="none" stroke="#1c0d02" stroke-width="2" stroke-linecap="round" opacity="0.8"/>
            <path d="M 44 56 Q 50 52, 56 56" fill="none" stroke="#1c0d02" stroke-width="2" stroke-linecap="round" opacity="0.8"/>
            <path d="M 46 64 Q 50 60, 54 64" fill="none" stroke="#1c0d02" stroke-width="2" stroke-linecap="round" opacity="0.8"/>
            
            <!-- Ambient 3D lighting cover -->
            <path d="M 30 50 C 30 20, 70 20, 70 50 C 70 74, 58 78, 50 78 C 42 78, 30 74, 30 50 Z" fill="url(#overlay-${id})" opacity="0.6"/>
  `,
  name: 'Frog Rasp',
  defaultLeft: 0,
  defaultRight: 0,
  drums: [
    {
      id: 0,
      label: 'Frog Rasp',
      pitchMult: 1,
      color: 'wood',
      sizeValue: 15
    }
  ],
  sounds: {
    spine_scrape: (d) => playNoise(0.15, 800, state.currentTiltVolume * 0.8),
    mouth_poke: (d) => playNoise(0.03, 500, state.currentTiltVolume * 0.4),
    stick_tip_tap: (d) => playNoise(0.03, 500, state.currentTiltVolume * 0.4)
  },
  touches: [
    {
      id: 'spine_scrape',
      label: 'Spine scrape',
      shortName: 'Spine scrape',
      description:
        'Dragging a wooden stick from tail to head along the ridged, notched spine of the wooden frog to create a croaking sound'
    },
    {
      id: 'mouth_poke',
      label: 'Mouth poke',
      shortName: 'Mouth poke',
      description:
        'Tapping the hollow wooden frog directly on its nose or side with the stick to function as a simple woodblock pop'
    },
    {
      id: 'stick_tip_tap',
      label: 'Stick Tip Tap',
      shortName: 'Stick Tip Tap',
      description:
        'Using the small, tapered tip of the stick to drum rapidly on the frog’s hollow head to create quick, staccato wood-block notes'
    }
  ],
  mappings: {
    left: {
      up: 'spine_scrape',
      down: 'mouth_poke',
      left: 'stick_tip_tap',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'spine_scrape'
    },
    right: {
      up: 'spine_scrape',
      down: 'mouth_poke',
      left: 'stick_tip_tap',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'mouth_poke'
    }
  }
};
