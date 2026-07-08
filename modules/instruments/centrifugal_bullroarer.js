import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const centrifugal_bullroarer = {
  generateSVG: (id, colorType, lugsHtml) => `
    <!-- Swirling shadow trail -->
            <path d="M 10 50 Q 30 15, 50 50 T 90 50" fill="none" stroke="#020617" stroke-width="8" opacity="0.45" stroke-linecap="round" filter="blur(4px)"/>
            
            <!-- Twisting cord -->
            <path d="M 10 50 Q 25 35, 40 45 T 70 50 L 78 50" fill="none" stroke="#d6d3d1" stroke-width="2.5" stroke-linecap="round" opacity="0.8"/>
            <path d="M 10 50 Q 25 35, 40 45 T 70 50 L 78 50" fill="none" stroke="#78716c" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="2, 2"/>
            
            <!-- Wooden slat (Aero blade) rotating -->
            <g transform="translate(68, 50) rotate(-25, 10, 0)">
                <path d="M 0 -8 L 30 -5 C 34 -4, 34 4, 30 5 L 0 8 C -4 4, -4 -4, 0 -8 Z" fill="#d97706" stroke="#78350f" stroke-width="1.5" filter="drop-shadow(2px 3px 4px rgba(0,0,0,0.4))"/>
                <!-- Tribal/Indigenous grain designs -->
                <path d="M 6 -4 Q 15 -2, 24 -4" fill="none" stroke="#78350f" stroke-width="1" opacity="0.6"/>
                <path d="M 6 4 Q 15 2, 24 4" fill="none" stroke="#78350f" stroke-width="1" opacity="0.6"/>
                <circle cx="4" cy="0" r="1.5" fill="#fef08a" stroke="#78350f" stroke-width="0.8"/>
            </g>
  `,
  name: '🌀 Bullroarer',
  defaultLeft: 0,
  defaultRight: 0,
  drums: [
    {
      id: 0,
      label: 'Aero Ribbon',
      pitchMult: 1,
      color: 'wood',
      sizeValue: 22
    }
  ],
  sounds: {
    low_wind_whine: (d) => {
      playMembrane(65 * d.pitchMult, 0.6, 1.0);
      playNoise(0.6, 600, 0.45 * state.currentTiltVolume);
    },
    high_speed_scream: (d) => {
      playMembrane(480 * d.pitchMult, 0.5, 0.9, true);
      playNoise(0.4, 1800, 0.3 * state.currentTiltVolume);
    },
    string_snap: (d) => {
      playAttackClick(0.04, 1100, 0.8 * state.currentTiltVolume);
      playMembrane(140 * d.pitchMult, 0.08, 1.1);
    },
    ground_slap: (d) => {
      playMembrane(180 * d.pitchMult, 0.12, 1.0);
      playNoise(0.12, 2200, 0.6 * state.currentTiltVolume);
    },
    air_rip_flutter: (d) => {
      playMembrane(90 * d.pitchMult, 0.3, 1.0);
      playNoise(0.35, 800, 0.5 * state.currentTiltVolume);
    },
    wood_spine_tap: (d) => {
      playMembrane(350 * d.pitchMult, 0.05, 1.0);
      playAttackClick(0.015, 1800, 0.5 * state.currentTiltVolume);
    },
    cord_friction_rub: (d) => playNoise(0.25, 500, 0.45 * state.currentTiltVolume),
    descending_whimper: (d) => playTablaSlideUp(300 * d.pitchMult, 90 * d.pitchMult, 0.55)
  },
  touches: [
    {
      id: 'low_wind_whine',
      label: 'Low Wind Whine',
      shortName: 'Whine',
      description: 'The deep, ghostly, rhythmic air-shearing roar of a slow rotation'
    },
    {
      id: 'high_speed_scream',
      label: 'High Speed Scream',
      shortName: 'Scream',
      description: 'The piercing, high-velocity aerodynamic friction whistle'
    },
    {
      id: 'string_snap',
      label: 'String Snap',
      shortName: 'Snap',
      description: 'The violent, structural tension pop of the cord changing rotation'
    },
    {
      id: 'ground_slap',
      label: 'Ground Slap',
      shortName: 'Slap',
      description: 'The accidental, wooden clatter of the slat clipping the floor'
    },
    {
      id: 'air_rip_flutter',
      label: 'Air Rip Flutter',
      shortName: 'Flutter',
      description: 'A sudden jerk causing a rapid, stuttering wind buffeting texture'
    },
    {
      id: 'wood_spine_tap',
      label: 'Wood Spine Tap',
      shortName: 'Tap Slat',
      description: 'Tapping the flat of the wooden slat directly with a finger'
    },
    {
      id: 'cord_friction_rub',
      label: 'Cord Friction Rub',
      shortName: 'Creak',
      description: 'The deep, dry creaking sound of the braided string twisting'
    },
    {
      id: 'descending_whimper',
      label: 'Descending Whimper',
      shortName: 'Whimper',
      description: 'The slowing, downward pitch drop as the spin loses momentum'
    }
  ],
  mappings: {
    left: {
      up: 'low_wind_whine',
      down: 'high_speed_scream',
      left: 'string_snap',
      right: 'ground_slap',
      upLong: 'air_rip_flutter',
      downLong: 'wood_spine_tap',
      leftLong: 'cord_friction_rub',
      rightLong: 'descending_whimper',
      trigger: 'low_wind_whine'
    },
    right: {
      up: 'low_wind_whine',
      down: 'high_speed_scream',
      left: 'string_snap',
      right: 'ground_slap',
      upLong: 'air_rip_flutter',
      downLong: 'wood_spine_tap',
      leftLong: 'cord_friction_rub',
      rightLong: 'descending_whimper',
      trigger: 'high_speed_scream'
    }
  }
};
