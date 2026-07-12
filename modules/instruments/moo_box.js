import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const moo_box = {
  origin: 'France / Germany',
  description:
    'The moo box, or boite à meuh, is a classic novelty toy that has been popular in Europe since the early 20th century. It consists of a cylinder containing a metal reed, a heavy lead piston, and a bellows. When turned upside down and right-side up again, gravity pulls the piston down, forcing air through the reed to produce a comical, elongated "moo" or lowing cow sound.',
  generateSVG: (id, colorType, lugsHtml) => `
    <!-- Heavy bottom shadow -->
            <ellipse cx="50" cy="80" rx="36" ry="12" fill="#020617" opacity="0.65" filter="blur(3.5px)"/>
            
            <!-- Tin Body -->
            <rect x="18" y="14" width="64" height="64" fill="url(#skin-${id})" stroke="#1e293b" stroke-width="1.5" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.35))"/>
            
            <!-- Cow spots -->
            <path d="M 22 24 C 26 24, 28 28, 26 32 C 24 36, 20 34, 19 30 C 18 26, 20 24, 22 24 Z" fill="#1e1b18" opacity="0.85"/>
            <path d="M 72 44 C 76 40, 80 44, 78 52 C 76 60, 68 58, 70 50 C 72 44, 70 46, 72 44 Z" fill="#1e1b18" opacity="0.85"/>
            <path d="M 45 48 C 52 46, 56 52, 50 58 C 44 64, 38 60, 40 54 C 42 48, 42 50, 45 48 Z" fill="#1e1b18" opacity="0.85"/>
            
            <!-- Grass illustration -->
            <path d="M 18 78 L 22 68 L 26 78 L 30 70 L 34 78" fill="none" stroke="#22c55e" stroke-width="1.5" opacity="0.7" stroke-linecap="round"/>
            <path d="M 62 78 L 66 68 L 70 78 L 74 72 L 78 78" fill="none" stroke="#22c55e" stroke-width="1.2" opacity="0.7" stroke-linecap="round"/>
            
            <!-- Caps -->
            <ellipse cx="50" cy="14" rx="32" ry="10" fill="url(#chrome-${id})" stroke="#0f172a" stroke-width="1"/>
            <ellipse cx="50" cy="14" rx="28" ry="8.5" fill="#e2e8f0" stroke="#94a3b8" stroke-width="0.5"/>
            
            <circle cx="50" cy="14" r="1" fill="#0f172a"/>
            <circle cx="44" cy="13" r="0.8" fill="#0f172a"/>
            <circle cx="56" cy="15" r="0.8" fill="#0f172a"/>
            <circle cx="48" cy="9" r="0.8" fill="#0f172a"/>
            <circle cx="52" cy="19" r="0.8" fill="#0f172a"/>
            
            <ellipse cx="50" cy="78" rx="32" ry="10" fill="url(#chrome-${id})" stroke="#0f172a" stroke-width="1"/>
  `,
  name: '🐮 Moo Box',
  drums: [
    {
      id: 0,
      label: 'Tin Oid',
      pitchMult: 1,
      color: 'silver',
      sizeValue: 15
    }
  ],
  sounds: {
    grand_moo: (d) => {
      playTablaSlideUp(130 * d.pitchMult, 95 * d.pitchMult, 1.0);
      playNoise(0.8, 400, 0.2 * state.currentTiltVolume);
      speakPhrase('Mooooooo!', 0.5, 0.55, 1.0);
    },
    calf_moo: (d) => {
      playTablaSlideUp(300 * d.pitchMult, 220 * d.pitchMult, 0.5);
      playNoise(0.4, 600, 0.15 * state.currentTiltVolume);
      speakPhrase('Moo!', 1.25, 0.95, 0.9);
    },
    stuck_reed: (d) => {
      playMembrane(120 * d.pitchMult, 0.2, 1.1, true);
      playNoise(0.2, 280, 0.6 * state.currentTiltVolume);
      speakPhrase('M-moo-zz!', 0.7, 1.2, 0.9);
    },
    tin_shake: (d) => {
      playNoise(0.1, 4500, 0.5 * state.currentTiltVolume);
      playAttackClick(0.04, 3800, 0.7 * state.currentTiltVolume);
    }
  },
  touches: [
    {
      id: 'grand_moo',
      label: 'Grand Cattle Moo',
      shortName: 'Grand Moo',
      description:
        'Fully inverting the traditional cylindrical tin to allow the weighted internal bellows to slide, releasing a deep, iconic cattle drone.'
    },
    {
      id: 'calf_moo',
      label: 'Calf Tilt Whine',
      shortName: 'Calf Moo',
      description: 'Swiftly tilting the box to trigger a shorter, higher-pitched, and hurried baby cow crying sound.'
    },
    {
      id: 'stuck_reed',
      label: 'Glitched Stuck Reed',
      shortName: 'Stuck Reed',
      description:
        'Obstructing or shaking the box during inversion to glitch the metallic reed, creating a raspy, buzzing, and choking half-drone.'
    },
    {
      id: 'tin_shake',
      label: 'Internal Weight Rattle',
      shortName: 'Tin Shake',
      description:
        'Vigorously shaking the tin shaker side-to-side, causing the internal lead balancing weight to chatter against the tin frame.'
    }
  ],
  mappings: {
    left: {
      up: 'grand_moo',
      down: 'calf_moo',
      left: 'stuck_reed',
      right: 'tin_shake',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'grand_moo'
    },
    right: {
      up: 'grand_moo',
      down: 'calf_moo',
      left: 'stuck_reed',
      right: 'tin_shake',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'calf_moo'
    }
  }
};
