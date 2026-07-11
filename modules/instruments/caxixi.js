import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const caxixi = {
  generateSVG: (id, colorType, lugsHtml) => `
    <!-- Soft flat bottom shadow -->
            <ellipse cx="50" cy="84" rx="24" ry="7.5" fill="#020617" opacity="0.6" filter="blur(2.5px)"/>
            
            <!-- Calabash gourd bottom plate -->
            <ellipse cx="50" cy="82" rx="21" ry="6.5" fill="#d97706" stroke="#78350f" stroke-width="2"/>
            <ellipse cx="50" cy="81.5" rx="17" ry="4.5" fill="#f59e0b" stroke="#b45309" stroke-width="0.5" opacity="0.5"/>
            
            <!-- Straw woven body -->
            <path d="M 50 26 C 42 45, 31 70, 30 80 Q 50 86, 70 80 C 69 70, 58 45, 50 26 Z" fill="url(#skin-${id})" stroke="#7c2d12" stroke-width="1.2" filter="drop-shadow(0 3px 5px rgba(0,0,0,0.35))"/>
            
            <!-- Weave lines -->
            <path d="M 45 35 L 67 76 M 40 43 L 64 80 M 35 52 L 56 82 M 31 63 L 44 83" fill="none" stroke="#7c2d12" stroke-width="0.8" opacity="0.45"/>
            <path d="M 55 35 L 33 76 M 60 43 L 36 80 M 65 52 L 44 82 M 69 63 L 56 83" fill="none" stroke="#7c2d12" stroke-width="0.8" opacity="0.45"/>
            
            <!-- Horizontal rings -->
            <path d="M 46 34 Q 50 36, 54 34 M 42 44 Q 50 47, 58 44 M 38 54 Q 50 58, 62 54 M 34 64 Q 50 68, 66 64 M 31 74 Q 50 78, 69 74" fill="none" stroke="#7c2d12" stroke-width="1.2" opacity="0.3"/>
            
            <!-- Woven handle loop -->
            <path d="M 50 26 Q 50 5, 42 5 T 35 24 Q 42 24, 50 26" fill="none" stroke="#b45309" stroke-width="3.5" stroke-linecap="round" filter="drop-shadow(0.5px 1px 1.5px rgba(0,0,0,0.4))"/>
            <path d="M 50 26 Q 50 5, 58 5 T 65 24 Q 58 24, 50 26" fill="none" stroke="#ca8a04" stroke-width="2" stroke-linecap="round" opacity="0.8"/>
  `,
  name: '🌾 Caxixi',
  drums: [
    {
      id: 0,
      label: 'Straw Basket',
      pitchMult: 1,
      color: 'caramel-light',
      sizeValue: 16
    }
  ],
  sounds: {
    straw_wall: (d) => {
      playNoise(0.09, 4500, 0.45 * state.currentTiltVolume);
    },
    gourd_bottom: (d) => {
      playAttackClick(0.025, 3600, 0.9 * state.currentTiltVolume);
      playMembrane(850 * d.pitchMult, 0.03, 1.0);
    },
    flick_accent: (d) => {
      playNoise(0.04, 5000, 0.6 * state.currentTiltVolume);
      setTimeout(() => {
        playNoise(0.04, 4800, 0.5 * state.currentTiltVolume);
      }, 40);
    },
    muted_swoosh: (d) => {
      playNoise(0.16, 1800, 0.3 * state.currentTiltVolume);
    }
  },
  touches: [
    {
      id: 'straw_wall',
      label: 'Straw Wall Rattle',
      shortName: 'Straw',
      description:
        'Flicking the shaker horizontally to strike the seeds against the woven wicker wall, creating a soft, warm, organic splash.'
    },
    {
      id: 'gourd_bottom',
      label: 'Gourd Bottom Crack',
      shortName: 'Gourd',
      description:
        'Striking the seeds vertically against the hard calabash gourd base, releasing a sharp, loud, high-pitched crack.'
    },
    {
      id: 'flick_accent',
      label: 'Double Flick Accent',
      shortName: 'Flick',
      description:
        'Shaking the caxixi in a swift down-and-up whipping motion, producing a rapid, crisp double shake rattle.'
    },
    {
      id: 'muted_swoosh',
      label: 'Muted Swoosh',
      shortName: 'Swoosh',
      description:
        'Slowing moving the caxixi in an arc, sliding the seeds smoothly across the wicker interior for a soft, muffled air swoosh.'
    }
  ],
  mappings: {
    left: {
      up: 'straw_wall',
      down: 'gourd_bottom',
      left: 'flick_accent',
      right: 'muted_swoosh',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'straw_wall'
    },
    right: {
      up: 'straw_wall',
      down: 'gourd_bottom',
      left: 'flick_accent',
      right: 'muted_swoosh',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'gourd_bottom'
    }
  }
};
