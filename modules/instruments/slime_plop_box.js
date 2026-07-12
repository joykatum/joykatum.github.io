import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const slime_plop_box = {
  origin: 'ASMR Studio',
  description:
    'An experimental, highly tactile instrument designed to replicate the squishy, wet, vacuum-release sounds of thick polymer slime, putty, or play-dough. It captures the satisfying pops, bubbles, and squishes of pulling, folding, and kneading textured gel materials, providing a highly immersive ASMR auditory experience.',
  generateSVG: (id, colorType, lugsHtml) => `
    <!-- Drip pool shadow -->
            <ellipse cx="50" cy="82" rx="30" ry="10" fill="#020617" opacity="0.6" filter="blur(3px)"/>
            
            <!-- Transparent Jar -->
            <rect x="24" y="24" width="52" height="54" rx="12" fill="none" stroke="#94a3b8" stroke-width="2" filter="drop-shadow(0 3px 5px rgba(0,0,0,0.25))"/>
            <rect x="25" y="25" width="50" height="52" rx="11" fill="#e2e8f0" opacity="0.15"/>
            
            <!-- Translucent Teal Slime layers -->
            <path d="M 25 45 C 32 40, 42 50, 50 45 C 58 40, 68 48, 75 42 L 75 75 Q 50 81, 25 75 Z" fill="#14b8a6" opacity="0.65"/>
            
            <!-- Overflowing drip on the side -->
            <path d="M 24 38 Q 18 42, 18 50 Q 18 56, 22 56 Q 26 56, 26 48 Z" fill="#0d9488" opacity="0.8" filter="drop-shadow(0 1px 2px rgba(0,0,0,0.3))"/>
            
            <!-- Hanging slime drops inside -->
            <path d="M 46 48 Q 50 62, 50 66 Q 50 70, 53 70 Q 56 70, 56 66 Z" fill="#0f766e" opacity="0.8"/>
            <circle cx="53" cy="67" r="1.8" fill="#5eead4" opacity="0.6"/>
            
            <!-- Gaseous bubbles inside the matrix -->
            <circle cx="34" cy="58" r="1.5" fill="#ccfbf1" stroke="#0d9488" stroke-width="0.4" opacity="0.7"/>
            <circle cx="62" cy="52" r="2.2" fill="#ccfbf1" stroke="#0d9488" stroke-width="0.4" opacity="0.7"/>
            <circle cx="42" cy="68" r="1.0" fill="#ccfbf1" opacity="0.8"/>
            
            <!-- Colored jar cap -->
            <rect x="28" y="16" width="44" height="8" rx="2" fill="#0d9488" stroke="#115e59" stroke-width="1.2"/>
            <rect x="32" y="14" width="36" height="2" fill="#5eead4" opacity="0.6"/>
  `,
  name: '🧪 Slime Plop Box',
  drums: [
    {
      id: 0,
      label: 'Slime Jar',
      pitchMult: 1,
      color: 'teal',
      sizeValue: 20
    }
  ],
  sounds: {
    deep_suction_plop: (d) => playTablaSlideUp(75 * d.pitchMult, 140 * d.pitchMult, 0.22),
    wet_surface_slap: (d) => {
      playMembrane(110 * d.pitchMult, 0.12, 1.0, true);
      playNoise(0.1, 900, 0.6 * state.currentTiltVolume, 'bandpass', 1.5);
    },
    air_pocket_pop: (d) => {
      playMembrane(280 * d.pitchMult, 0.05, 1.3, true);
      playNoise(0.05, 1400, 0.5 * state.currentTiltVolume, 'bandpass', 3.0);
    },
    squelch_stretch: (d) => {
      playTablaSlideUp(120 * d.pitchMult, 50 * d.pitchMult, 0.35);
      playNoise(0.3, 700, 0.4 * state.currentTiltVolume, 'bandpass', 2.0);
    },
    container_wall_squish: (d) => {
      playNoise(0.22, 1000, 0.45 * state.currentTiltVolume, 'bandpass', 1.8);
      playMembrane(80 * d.pitchMult, 0.15, 1.0);
    },
    dripping_goblet_drop: (d) => playMembrane(400 * d.pitchMult, 0.08, 1.1, true),
    rapid_squelch_roll: (d) => {
      playNoise(0.08, 900, 0.6, 'bandpass', 2.0);
      setTimeout(() => {
        playNoise(0.08, 800, 0.5, 'bandpass', 2.0);
      }, 45);
      setTimeout(() => {
        playNoise(0.08, 700, 0.4, 'bandpass', 2.0);
      }, 90);
    },
    damped_lid_snap: (d) => {
      playMembrane(140 * d.pitchMult, 0.06, 1.0, true);
      playAttackClick(0.02, 1500, 0.5 * state.currentTiltVolume);
    }
  },
  touches: [
    {
      id: 'deep_suction_plop',
      label: 'Deep Suction Plop',
      shortName: 'Plop',
      description: 'The heavy, wet, vacuum-release sound of pulling an object'
    },
    {
      id: 'wet_surface_slap',
      label: 'Wet Surface Slap',
      shortName: 'Slap',
      description: 'A fast, flat hand strike on top of the gelatinous mass'
    },
    {
      id: 'air_pocket_pop',
      label: 'Air Pocket Pop',
      shortName: 'Pop',
      description: 'A sharp, gaseous squish-pop from a trapped air bubble bursting'
    },
    {
      id: 'squelch_stretch',
      label: 'Squelch Stretch',
      shortName: 'Stretch',
      description: 'The low-frequency tearing sound of pulling the viscous material'
    },
    {
      id: 'container_wall_squish',
      label: 'Container Wall Squish',
      shortName: 'Squish',
      description: 'The muffled, sliding sound of slime shifting against plastic'
    },
    {
      id: 'dripping_goblet_drop',
      label: 'Dripping Goblet Drop',
      shortName: 'Drop',
      description: 'A distinct, heavy, self-contained liquid drop impact'
    },
    {
      id: 'rapid_squelch_roll',
      label: 'Rapid Squelch Roll',
      shortName: 'Roll',
      description: 'A fast, stuttering multi-finger mud-like typing texture'
    },
    {
      id: 'damped_lid_snap',
      label: 'Damped Lid Snap',
      shortName: 'Snap Lid',
      description: 'Snapping the plastic lid onto the container while full'
    }
  ],
  mappings: {
    left: {
      up: 'deep_suction_plop',
      down: 'wet_surface_slap',
      left: 'air_pocket_pop',
      right: 'squelch_stretch',
      upLong: 'container_wall_squish',
      downLong: 'dripping_goblet_drop',
      leftLong: 'rapid_squelch_roll',
      rightLong: 'damped_lid_snap',
      trigger: 'deep_suction_plop'
    },
    right: {
      up: 'deep_suction_plop',
      down: 'wet_surface_slap',
      left: 'air_pocket_pop',
      right: 'squelch_stretch',
      upLong: 'container_wall_squish',
      downLong: 'dripping_goblet_drop',
      leftLong: 'rapid_squelch_roll',
      rightLong: 'damped_lid_snap',
      trigger: 'wet_surface_slap'
    }
  }
};
