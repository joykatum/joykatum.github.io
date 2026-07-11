import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const pakhavaj = {
  generateSVG: (id, colorType, lugsHtml) => `
    <!-- Bottom shadow -->
            <path d="M 10 52 Q 50 82, 90 52" fill="#020617" opacity="0.7" filter="blur(3.5px)"/>
            
            <!-- Barrel body -->
            <path d="M 14 36 Q 50 14, 86 28 L 86 72 Q 50 86, 14 64 Z" fill="#9a3412" stroke="#431407" stroke-width="2" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.45))"/>
            <path d="M 22 42 Q 50 32, 78 40 M 20 54 Q 50 48, 80 52 M 22 64 Q 50 62, 76 60" fill="none" stroke="#431407" stroke-width="0.5" opacity="0.25"/>
            
            <!-- Laces -->
            <path d="M 14 38 L 86 32 M 14 44 L 86 40 M 14 50 L 86 48 M 14 56 L 86 56 M 14 62 L 86 64" stroke="#f59e0b" stroke-width="1.2" opacity="0.75" filter="drop-shadow(0 1px 1.5px rgba(0,0,0,0.3))"/>
            
            <!-- Tuning blocks -->
            <rect x="36" y="28" width="6" height="12" rx="1" fill="#b45309" stroke="#431407" stroke-width="0.6" transform="rotate(15, 39, 34)"/>
            <rect x="48" y="32" width="6" height="12" rx="1" fill="#b45309" stroke="#431407" stroke-width="0.6" transform="rotate(10, 51, 38)"/>
            <rect x="60" y="38" width="6" height="12" rx="1" fill="#b45309" stroke="#431407" stroke-width="0.6" transform="rotate(5, 63, 44)"/>
            <rect x="32" y="56" width="6" height="12" rx="1" fill="#b45309" stroke="#431407" stroke-width="0.6" transform="rotate(-15, 35, 62)"/>
            <rect x="44" y="58" width="6" height="12" rx="1" fill="#b45309" stroke="#431407" stroke-width="0.6" transform="rotate(-10, 47, 64)"/>
            <rect x="56" y="58" width="6" height="12" rx="1" fill="#b45309" stroke="#431407" stroke-width="0.6" transform="rotate(-5, 59, 64)"/>
            
            <!-- Left head -->
            <ellipse cx="14" cy="50" rx="8" ry="14" fill="#fef08a" stroke="#d97706" stroke-width="1.8"/>
            <ellipse cx="14" cy="50" rx="4.5" ry="8" fill="#b45309" opacity="0.15"/>
            
            <!-- Right head -->
            <ellipse cx="86" cy="50" rx="6" ry="11" fill="#fbcfe8" stroke="#be185d" stroke-width="1.8"/>
            <ellipse cx="86" cy="50" rx="3.5" ry="6.5" fill="#18181b" stroke="#27272a" stroke-width="0.8"/>
  `,
  name: '🥁 Pakhavaj',
  defaultRight: 1,
  drums: [
    {
      id: 0,
      label: 'Left Bass Head (Bayan)',
      pitchMult: 1,
      color: 'terracotta',
      sizeValue: 22
    },
    {
      id: 1,
      label: 'Right Treble Head (Dayan)',
      pitchMult: 1,
      color: 'caramel',
      sizeValue: 16
    }
  ],
  sounds: {
    tha: (d) => playMembrane(65 * d.pitchMult, 0.7, 1.02),
    dhin: (d) => playMembrane(80 * d.pitchMult, 1.1, 1.0),
    ta: (d) => {
      playMembrane(380 * d.pitchMult, 0.12, 1.04, true);
      playNoise(0.04, 2500, 0.3 * state.currentTiltVolume);
    },
    ki: (d) => playMembrane(190 * d.pitchMult, 0.04, 1.0, true),
    na: (d) => playMembrane(280 * d.pitchMult, 0.5, 1.0),
    tete: (d) => {
      playMembrane(310 * d.pitchMult, 0.03, 1.0);
      setTimeout(() => playMembrane(290 * d.pitchMult, 0.03, 1.0), 60);
    },
    ghe: (d) => playTablaSlideUp(65 * d.pitchMult, 105 * d.pitchMult, 0.65)
  },
  touches: [
    {
      id: 'tha',
      label: 'Tha Bass',
      shortName: 'Tha',
      description:
        'Striking the center of the wet wheat-paste Bayan (bass head) with a flat palm, letting the deep booming bass resonate fully.'
    },
    {
      id: 'dhin',
      label: 'Dhin Ringing Bass',
      shortName: 'Dhin',
      description:
        'An open bass stroke on the left head using the fingers while letting the hand bounce, producing a warm ringing fundamental tone.'
    },
    {
      id: 'ta',
      label: 'Ta Treble Rim Slap',
      shortName: 'Ta',
      description:
        'Striking the outer rim of the Dayan (treble head) with the finger joints, generating a sharp, piercing, metallic slap.'
    },
    {
      id: 'ki',
      label: 'Ki Left Dampen',
      shortName: 'Ki',
      description:
        'Pressing the heel of the left hand firmly on the Bayan while hitting with fingers to produce a dry, completely muted slap.'
    },
    {
      id: 'na',
      label: 'Na Treble Edge Ring',
      shortName: 'Na',
      description:
        'Striking the absolute outer edge of the Dayan with a single finger, letting the treble skin ring out with brilliant harmonics.'
    },
    {
      id: 'tete',
      label: 'Tete Double Tap',
      shortName: 'Tete',
      description:
        'Alternating index and middle fingers in high-speed succession near the center of the Dayan to lay down dense rhythmic rolls.'
    },
    {
      id: 'ghe',
      label: 'Ghe Sliding Bass',
      shortName: 'Ghe',
      description:
        'Striking the Bayan bass head and sliding the heel of the hand across the wet wheat-paste to dynamically bend the pitch upward.'
    }
  ],
  mappings: {
    left: {
      up: 'ta',
      down: 'tha',
      left: 'ki',
      right: 'na',
      upLong: 'dhin',
      downLong: 'tete',
      leftLong: 'ghe',
      rightLong: '',
      trigger: 'tha'
    },
    right: {
      up: 'ta',
      down: 'tha',
      left: 'ki',
      right: 'na',
      upLong: 'dhin',
      downLong: 'tete',
      leftLong: 'ghe',
      rightLong: '',
      trigger: 'ta'
    }
  }
};
