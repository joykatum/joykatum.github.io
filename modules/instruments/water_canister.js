import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const water_canister = {
  generateSVG: (id, colorType, lugsHtml) => `
    <!-- Heavy flat bottom shadow -->
            <ellipse cx="50" cy="82" rx="32" ry="9" fill="#020617" opacity="0.65" filter="blur(3px)"/>
            
            <!-- Plastic jug body (Aquamarine/Teal) -->
            <path d="M 24 35 Q 24 24, 40 24 L 60 24 Q 76 24, 76 35 L 76 74 Q 76 80, 50 80 Q 24 80, 24 74 Z" fill="#0ea5e9" stroke="#0369a1" stroke-width="2.2" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.3))"/>
            
            <!-- Plastic ribs / structural lines -->
            <path d="M 28 42 L 72 42 M 28 52 L 72 52 M 28 62 L 72 62" fill="none" stroke="#0284c7" stroke-width="2" opacity="0.6"/>
            
            <!-- Water level internal wave (semi-transparent) -->
            <path d="M 25 56 Q 38 52, 50 56 T 75 56 L 75 78 Q 50 80, 25 78 Z" fill="#38bdf8" opacity="0.45"/>
            
            <!-- Sturdy jug handle at the top-left -->
            <path d="M 40 24 L 40 14 Q 50 8, 60 14 L 60 24" fill="none" stroke="#0269a1" stroke-width="3.5" stroke-linecap="round"/>
            <rect x="42" y="10" width="16" height="4" rx="1" fill="#bae6fd"/>
            
            <!-- Screw threads/cap -->
            <rect x="45" y="20" width="10" height="4" fill="#0284c7" stroke="#0369a1" stroke-width="0.8"/>
            <rect x="42" y="17" width="16" height="3" fill="#f43f5e" stroke="#9f1239" stroke-width="0.5"/>
  `,
  name: '💧 Water Canister',
  defaultLeft: 0,
  defaultRight: 0,
  drums: [
    {
      id: 0,
      label: 'Hydro Canister',
      pitchMult: 1,
      color: 'aquamarine',
      sizeValue: 22
    }
  ],
  sounds: {
    slap_gliss: (d) => playTablaSlideUp(110 * d.pitchMult, 180 * d.pitchMult, 0.28),
    neck_pop: (d) => {
      playMembrane(240 * d.pitchMult, 0.08, 1.2, true);
      playNoise(0.04, 1800, 0.3 * state.currentTiltVolume, 'bandpass', 2.0);
    },
    outer_plastic_thud: (d) => playMembrane(90 * d.pitchMult, 0.18, 1.0),
    liquid_slap: (d) => {
      playMembrane(100 * d.pitchMult, 0.2, 1.0);
      playNoise(0.28, 1100, 0.5 * state.currentTiltVolume, 'bandpass', 2.5);
    },
    bubble_gurgle: (d) => {
      playNoise(0.08, 1400, 0.4 * state.currentTiltVolume, 'bandpass', 3.0);
      setTimeout(() => {
        playNoise(0.08, 1600, 0.3 * state.currentTiltVolume, 'bandpass', 3.0);
      }, 60);
      setTimeout(() => {
        playNoise(0.08, 1800, 0.2 * state.currentTiltVolume, 'bandpass', 3.0);
      }, 120);
    },
    damped_plonk: (d) => playMembrane(75 * d.pitchMult, 0.08, 1.0),
    finger_tap_rim: (d) => playAttackClick(0.015, 3200, 0.5 * state.currentTiltVolume),
    heavy_splash_drop: (d) => {
      playMembrane(60 * d.pitchMult, 0.4, 1.0);
      playNoise(0.4, 800, 0.7 * state.currentTiltVolume, 'bandpass', 1.5);
    }
  },
  touches: [
    {
      id: 'slap_gliss',
      label: 'Slap Gliss',
      shortName: 'Gliss',
      description: 'Striking the container while sloshing water to compress air'
    },
    {
      id: 'neck_pop',
      label: 'Neck Pop',
      shortName: 'Neck Pop',
      description: 'Slapping the small top opening for a tight, hollow vacuum pop'
    },
    {
      id: 'outer_plastic_thud',
      label: 'Outer Plastic Thud',
      shortName: 'Thud',
      description: 'A flat hand hit on the dry side wall'
    },
    {
      id: 'liquid_slap',
      label: 'Liquid Slap',
      shortName: 'Splash',
      description: 'Slapping the side hard enough to hear the internal splash'
    },
    {
      id: 'bubble_gurgle',
      label: 'Bubble Gurgle',
      shortName: 'Gurgle',
      description: 'A self-contained rhythmic burst of air bubbles escaping'
    },
    {
      id: 'damped_plonk',
      label: 'Damped Plonk',
      shortName: 'Plonk',
      description: 'Hitting the canister base resting on a soft surface'
    },
    {
      id: 'finger_tap_rim',
      label: 'Finger Tap Rim',
      shortName: 'Tap Rim',
      description: 'Light, rhythmic clicking on the hard screw-threads'
    },
    {
      id: 'heavy_splash_drop',
      label: 'Heavy Splash Drop',
      shortName: 'Drop Splash',
      description: 'Lifting and slamming the container down for a heavy internal wave'
    }
  ],
  mappings: {
    left: {
      up: 'slap_gliss',
      down: 'neck_pop',
      left: 'outer_plastic_thud',
      right: 'liquid_slap',
      upLong: 'bubble_gurgle',
      downLong: 'damped_plonk',
      leftLong: 'finger_tap_rim',
      rightLong: 'heavy_splash_drop',
      trigger: 'slap_gliss'
    },
    right: {
      up: 'slap_gliss',
      down: 'neck_pop',
      left: 'outer_plastic_thud',
      right: 'liquid_slap',
      upLong: 'bubble_gurgle',
      downLong: 'damped_plonk',
      leftLong: 'finger_tap_rim',
      rightLong: 'heavy_splash_drop',
      trigger: 'neck_pop'
    }
  }
};
