import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const slap_tubes = {
  generateSVG: (id, colorType, lugsHtml) => `
    <!-- Shadow -->
            <ellipse cx="50" cy="82" rx="34" ry="10" fill="#020617" opacity="0.6" filter="blur(3px)"/>
            
            <!-- 4 Parallel Tubes of varying lengths -->
            <!-- Tube 1 (Red/Orange) -->
            <rect x="22" y="15" width="10" height="60" rx="3" fill="#ea580c" stroke="#7c2d12" stroke-width="1.2"/>
            <rect x="22" y="15" width="10" height="3" fill="#ff7e33" opacity="0.5"/>
            <circle cx="27" cy="18" r="1.5" fill="#7c2d12"/>
            
            <!-- Tube 2 (Teal) -->
            <rect x="36" y="25" width="10" height="50" rx="3" fill="#0d9488" stroke="#115e59" stroke-width="1.2"/>
            <rect x="36" y="25" width="10" height="3" fill="#2dd4bf" opacity="0.5"/>
            <circle cx="41" cy="28" r="1.5" fill="#115e59"/>
            
            <!-- Tube 3 (Blue) -->
            <rect x="50" y="32" width="10" height="43" rx="3" fill="#2563eb" stroke="#1e3a8a" stroke-width="1.2"/>
            <rect x="50" y="32" width="10" height="3" fill="#60a5fa" opacity="0.5"/>
            <circle cx="55" cy="35" r="1.5" fill="#1e3a8a"/>
            
            <!-- Tube 4 (Purple) -->
            <rect x="64" y="40" width="10" height="35" rx="3" fill="#7c3aed" stroke="#4c1d95" stroke-width="1.2"/>
            <rect x="64" y="40" width="10" height="3" fill="#a78bfa" opacity="0.5"/>
            <circle cx="69" cy="43" r="1.5" fill="#4c1d95"/>
            
            <!-- Strike paddle overlay -->
            <path d="M 12 40 L 40 45 L 35 55 L 12 43 Z" fill="#475569" stroke="#1e293b" stroke-width="1" filter="drop-shadow(0 2px 3px rgba(0,0,0,0.4))" opacity="0.85"/>
            <line x1="14" y1="42" x2="33" y2="46" stroke="#94a3b8" stroke-width="1"/>
  `,
  name: '🌬️ Slap Tubes',
  drums: [
    {
      id: 0,
      label: 'PVC Slap Tube',
      pitchMult: 1,
      color: 'teal',
      sizeValue: 22
    }
  ],
  sounds: {
    bass_boom: (d) => playMembrane(98 * d.pitchMult, 0.35, 1.2),
    low_pop: (d) => playMembrane(130 * d.pitchMult, 0.25, 1.1),
    mid_bounce: (d) => playMembrane(165 * d.pitchMult, 0.2, 1.0),
    high_snap: (d) => playMembrane(196 * d.pitchMult, 0.15, 1.0, true),
    paddle_slap: (d) => {
      playMembrane(220 * d.pitchMult, 0.08, 1.0, true);
      playNoise(0.05, 1500, 0.4 * state.currentTiltVolume);
    },
    pipe_rim_click: (d) => {
      playAttackClick(0.02, 2800, 0.7 * state.currentTiltVolume);
      playMembrane(600 * d.pitchMult, 0.02, 1.0);
    },
    muted_thud: (d) => playMembrane(85 * d.pitchMult, 0.08, 1.0),
    slide_slur: (d) => playTablaSlideUp(165 * d.pitchMult, 110 * d.pitchMult, 0.3)
  },
  touches: [
    {
      id: 'bass_boom',
      label: 'Bass Boom',
      shortName: 'Bass Boom',
      description: 'Deep, compressed low-end fundamental of the long PVC tube'
    },
    {
      id: 'low_pop',
      label: 'Low Pop',
      shortName: 'Low Pop',
      description: 'Resonant mid-low air column note'
    },
    {
      id: 'mid_bounce',
      label: 'Mid Bounce',
      shortName: 'Mid Bounce',
      description: 'Bright mid-range pitch bouncing'
    },
    {
      id: 'high_snap',
      label: 'High Snap',
      shortName: 'High Snap',
      description: 'Sharp, punchy upper harmonic snap'
    },
    {
      id: 'paddle_slap',
      label: 'Paddle Slap',
      shortName: 'Paddle',
      description: 'Dry, raw impact of rubber mallet on bare plastic edge'
    },
    {
      id: 'pipe_rim_click',
      label: 'Pipe Rim Click',
      shortName: 'Rim Click',
      description: 'Hard plastic stick click on the side shell'
    },
    {
      id: 'muted_thud',
      label: 'Muted Thud',
      shortName: 'Muted Thud',
      description: 'Striking while covering the opposite hole'
    },
    {
      id: 'slide_slur',
      label: 'Slide Slur',
      shortName: 'Slide Slur',
      description: 'Hitting while changing the length of a telescoping tube'
    }
  ],
  mappings: {
    left: {
      up: 'bass_boom',
      down: 'low_pop',
      left: 'mid_bounce',
      right: 'high_snap',
      upLong: 'paddle_slap',
      downLong: 'pipe_rim_click',
      leftLong: 'muted_thud',
      rightLong: 'slide_slur',
      trigger: 'bass_boom'
    },
    right: {
      up: 'bass_boom',
      down: 'low_pop',
      left: 'mid_bounce',
      right: 'high_snap',
      upLong: 'paddle_slap',
      downLong: 'pipe_rim_click',
      leftLong: 'muted_thud',
      rightLong: 'slide_slur',
      trigger: 'low_pop'
    }
  }
};
