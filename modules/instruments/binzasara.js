import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const binzasara = {
  origin: 'Japan',
  description:
    'The binzasara is a traditional Japanese percussion instrument used in folk songs, kabuki theatre, and Shinto ceremonies (Dengaku dance). It is made of numerous small wooden slats strung together with a cord, terminating in handles at both ends. By bowing or rippling the handles, the slats strike each other in rapid succession, producing a sharp, cascading clatter or domino-like rolling sound.',
  generateSVG: (id, colorType, lugsHtml) => `
    <!-- Flowing wavy bottom shadow -->
            <path d="M 12 56 Q 30 20, 50 56 T 88 56" fill="none" stroke="#020617" stroke-width="12" opacity="0.55" stroke-linecap="round" filter="blur(3.5px)"/>
            
            <!-- Spine cords -->
            <path d="M 12 50 Q 30 16, 50 50 T 88 50" fill="none" stroke="#18181b" stroke-width="2" stroke-linecap="round" opacity="0.8"/>
            <path d="M 12 44 Q 30 10, 50 44 T 88 44" fill="none" stroke="#18181b" stroke-width="1.5" stroke-linecap="round" opacity="0.6"/>
            
            <!-- Wooden slats -->
            <rect x="15" y="44" width="4" height="18" rx="0.5" fill="#b45309" stroke="#451a03" stroke-width="0.5" transform="rotate(25, 17, 53)"/>
            <rect x="20" y="38" width="4" height="18" rx="0.5" fill="#ca8a04" stroke="#713f12" stroke-width="0.5" transform="rotate(15, 22, 47)"/>
            <rect x="25" y="33" width="4" height="18" rx="0.5" fill="#b45309" stroke="#451a03" stroke-width="0.5" transform="rotate(5, 27, 42)"/>
            <rect x="30" y="30" width="4" height="18" rx="0.5" fill="#ca8a04" stroke="#713f12" stroke-width="0.5" transform="rotate(-5, 32, 39)"/>
            <rect x="35" y="29" width="4" height="18" rx="0.5" fill="#b45309" stroke="#451a03" stroke-width="0.5" transform="rotate(-15, 37, 38)"/>
            <rect x="40" y="30" width="4" height="18" rx="0.5" fill="#ca8a04" stroke="#713f12" stroke-width="0.5" transform="rotate(-25, 42, 39)"/>
            <rect x="46" y="34" width="4" height="18" rx="0.5" fill="#b45309" stroke="#451a03" stroke-width="0.5" transform="rotate(-15, 48, 43)"/>
            <rect x="51" y="40" width="4" height="18" rx="0.5" fill="#ca8a04" stroke="#713f12" stroke-width="0.5" transform="rotate(0, 53, 49)"/>
            <rect x="56" y="46" width="4" height="18" rx="0.5" fill="#b45309" stroke="#451a03" stroke-width="0.5" transform="rotate(15, 58, 55)"/>
            <rect x="61" y="52" width="4" height="18" rx="0.5" fill="#ca8a04" stroke="#713f12" stroke-width="0.5" transform="rotate(25, 63, 61)"/>
            <rect x="66" y="55" width="4" height="18" rx="0.5" fill="#b45309" stroke="#451a03" stroke-width="0.5" transform="rotate(15, 68, 64)"/>
            <rect x="71" y="55" width="4" height="18" rx="0.5" fill="#ca8a04" stroke="#713f12" stroke-width="0.5" transform="rotate(-5, 73, 64)"/>
            <rect x="76" y="51" width="4" height="18" rx="0.5" fill="#b45309" stroke="#451a03" stroke-width="0.5" transform="rotate(-20, 78, 60)"/>
            <rect x="81" y="45" width="4" height="18" rx="0.5" fill="#ca8a04" stroke="#713f12" stroke-width="0.5" transform="rotate(-30, 83, 54)"/>
            
            <!-- Handles -->
            <rect x="8" y="40" width="6" height="24" rx="2.5" fill="#78350f" stroke="#451a03" stroke-width="1" transform="rotate(35, 11, 52)" filter="drop-shadow(0 2px 3px rgba(0,0,0,0.4))"/>
            <circle cx="10" cy="46" r="1.5" fill="#fef08a" opacity="0.9"/>
            <rect x="86" y="36" width="6" height="24" rx="2.5" fill="#78350f" stroke="#451a03" stroke-width="1" transform="rotate(-40, 89, 48)" filter="drop-shadow(0 2px 3px rgba(0,0,0,0.4))"/>
            <circle cx="90" cy="42" r="1.5" fill="#fef08a" opacity="0.9"/>
  `,
  name: '🎋 Binzasara',
  drums: [
    {
      id: 0,
      label: 'Wooden Slats',
      pitchMult: 1,
      color: 'wood',
      sizeValue: 18
    }
  ],
  sounds: {
    furu: (d) => {
      for (let i = 0; i < 5; i++) {
        setTimeout(() => {
          playAttackClick(0.02, 1800 - i * 150, 0.5 * state.currentTiltVolume);
          playMembrane((350 - i * 20) * d.pitchMult, 0.02, 1.0);
        }, i * 40);
      }
    },
    clap: (d) => {
      playMembrane(450 * d.pitchMult, 0.07, 1.15, true);
      playNoise(0.06, 1500, 0.7 * state.currentTiltVolume);
    },
    rattle: (d) => {
      for (let i = 0; i < 8; i++) {
        setTimeout(() => {
          playAttackClick(0.015, 2500 + (i % 2) * 500, 0.4 * state.currentTiltVolume);
        }, i * 25);
      }
    },
    snap: (d) => {
      playMembrane(550 * d.pitchMult, 0.03, 1.05, true);
      playAttackClick(0.01, 3000, 0.8 * state.currentTiltVolume);
    }
  },
  touches: [
    {
      id: 'furu',
      label: 'Furu Cascading Wave',
      shortName: 'Furu',
      description:
        'Rippling the wooden slats in a wave-like snapping motion, releasing a domino-like rolling chatter cascade.'
    },
    {
      id: 'clap',
      label: 'Clap Block Smash',
      shortName: 'Clap',
      description:
        'Forcefully pushing both handles together to clash all wooden plates simultaneously, producing a solid, dry wooden strike.'
    },
    {
      id: 'rattle',
      label: 'Continuous Wood Rattle',
      shortName: 'Rattle',
      description:
        'Rapidly shaking the binzasara back and forth, keeping the slats in continuous, frantic wooden friction chatter.'
    },
    {
      id: 'snap',
      label: 'Single Wood Snap',
      shortName: 'Snap',
      description: 'Giving a single, snappy twist of the wrists to trigger a singular, laser-focused wood-plate pop.'
    }
  ],
  mappings: {
    left: {
      up: 'furu',
      down: 'clap',
      left: 'rattle',
      right: 'snap',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'furu'
    },
    right: {
      up: 'furu',
      down: 'clap',
      left: 'rattle',
      right: 'snap',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'clap'
    }
  }
};
