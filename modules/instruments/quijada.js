import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const quijada = {
  generateSVG: (id, colorType, lugsHtml) => `
    <!-- Floating shadow -->
            <path d="M 15 78 C 30 78, 50 68, 85 78 C 50 86, 30 82, 15 78 Z" fill="#020617" opacity="0.55" filter="blur(3.5px)"/>
            
            <!-- Jawbone white/beige curve -->
            <path d="M 12 30 C 12 70, 35 80, 85 70 C 88 55, 80 40, 75 42 C 78 55, 75 62, 50 64 C 30 64, 25 50, 24 30 Z" fill="#f5f5f4" stroke="#78716c" stroke-width="2.2" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.3))"/>
            
            <!-- Red/Teeth details on the upper border -->
            <path d="M 32 64 C 35 63, 45 63, 50 64 C 60 63, 70 61, 74 54" fill="none" stroke="#fda4af" stroke-width="2.5" stroke-linecap="round"/>
            
            <!-- Individual Bone Teeth (rattles) -->
            <circle cx="34" cy="62" r="1.5" fill="#fafaf9" stroke="#78716c" stroke-width="0.5"/>
            <circle cx="38" cy="61.5" r="1.5" fill="#fafaf9" stroke="#78716c" stroke-width="0.5"/>
            <circle cx="42" cy="61" r="1.5" fill="#fafaf9" stroke="#78716c" stroke-width="0.5"/>
            <circle cx="46" cy="61" r="1.5" fill="#fafaf9" stroke="#78716c" stroke-width="0.5"/>
            <circle cx="50" cy="61.5" r="1.5" fill="#fafaf9" stroke="#78716c" stroke-width="0.5"/>
            <circle cx="54" cy="61.5" r="1.5" fill="#fafaf9" stroke="#78716c" stroke-width="0.5"/>
            <circle cx="58" cy="61" r="1.5" fill="#fafaf9" stroke="#78716c" stroke-width="0.5"/>
            <circle cx="62" cy="60" r="1.5" fill="#fafaf9" stroke="#78716c" stroke-width="0.5"/>
            <circle cx="66" cy="58" r="1.5" fill="#fafaf9" stroke="#78716c" stroke-width="0.5"/>
            <circle cx="70" cy="56" r="1.5" fill="#fafaf9" stroke="#78716c" stroke-width="0.5"/>
            
            <!-- Hollow cavity lines -->
            <path d="M 16 35 C 16 55, 20 62, 28 66" fill="none" stroke="#d6d3d1" stroke-width="1.5"/>
            <ellipse cx="80" cy="48" rx="3" ry="5" fill="#44403c" transform="rotate(-15, 80, 48)"/>
  `,
  name: '💀 Quijada',
  defaultLeft: 0,
  defaultRight: 0,
  drums: [
    {
      id: 0,
      label: 'Jawbone',
      pitchMult: 1,
      color: 'blonde-light',
      sizeValue: 18
    }
  ],
  sounds: {
    fist_slam_rattles: (d) => {
      playNoise(0.65, 1600, 0.9 * state.currentTiltVolume, 'bandpass', 3.5);
      playMembrane(120 * d.pitchMult, 0.15, 1.0);
    },
    teeth_rasp_scrape: (d) => playNoise(0.45, 2200, 0.7 * state.currentTiltVolume, 'bandpass', 4.5),
    chin_bone_tap: (d) => {
      playAttackClick(0.02, 1200, 0.6 * state.currentTiltVolume);
      playMembrane(350 * d.pitchMult, 0.05, 1.0);
    },
    micro_flick: (d) => {
      playNoise(0.12, 1800, 0.4 * state.currentTiltVolume, 'bandpass', 3.0);
      playMembrane(250 * d.pitchMult, 0.03, 1.0);
    },
    reverse_scrape: (d) => playNoise(0.22, 2400, 0.6 * state.currentTiltVolume, 'bandpass', 3.5),
    choked_jaw_pinch: (d) => {
      playNoise(0.08, 1500, 0.7 * state.currentTiltVolume, 'bandpass', 5.0);
      playMembrane(125 * d.pitchMult, 0.06, 1.0);
    },
    double_tap: (d) => {
      playNoise(0.15, 1600, 0.8 * state.currentTiltVolume, 'bandpass', 3.5);
      playMembrane(120 * d.pitchMult, 0.08, 1.0);
      setTimeout(() => {
        playNoise(0.15, 1600, 0.6 * state.currentTiltVolume, 'bandpass', 3.5);
        playMembrane(120 * d.pitchMult, 0.08, 1.0);
      }, 70);
    },
    hollow_socket_pop: (d) => {
      playMembrane(180 * d.pitchMult, 0.12, 1.0);
      playAttackClick(0.03, 900, 0.5 * state.currentTiltVolume);
    }
  },
  touches: [
    {
      id: 'fist_slam_rattles',
      label: 'Fist Slam Rattles',
      shortName: 'Slam',
      description: 'Heavy punch to the side, causing a prolonged loose tooth buzz'
    },
    {
      id: 'teeth_rasp_scrape',
      label: 'Teeth Rasp Scrape',
      shortName: 'Scrape',
      description: 'Running a wooden stick quickly down the serrated tooth line'
    },
    {
      id: 'chin_bone_tap',
      label: 'Chin Bone Tap',
      shortName: 'Tap',
      description: 'A dry, hollow, skeletal click on the frontal bone chin'
    },
    {
      id: 'micro_flick',
      label: 'Micro-Flick',
      shortName: 'Flick',
      description: 'A light fingertip tap for a localized, highly controlled buzz'
    },
    {
      id: 'reverse_scrape',
      label: 'Reverse Scrape',
      shortName: 'Rev Scrape',
      description: 'An upward stick rub creating a tighter, shorter scrape'
    },
    {
      id: 'choked_jaw_pinch',
      label: 'Choked Jaw Pinch',
      shortName: 'Pinch',
      description: 'Slamming the side while squeezing the teeth to stop the ring'
    },
    {
      id: 'double_tap',
      label: 'Double Tap',
      shortName: 'Double Tap',
      description: 'Two quick, rattling bone slaps'
    },
    {
      id: 'hollow_socket_pop',
      label: 'Hollow Socket Pop',
      shortName: 'Socket Pop',
      description: 'Striking the empty joint hinge for a deeper, enclosed tone'
    }
  ],
  mappings: {
    left: {
      up: 'fist_slam_rattles',
      down: 'teeth_rasp_scrape',
      left: 'chin_bone_tap',
      right: 'micro_flick',
      upLong: 'reverse_scrape',
      downLong: 'choked_jaw_pinch',
      leftLong: 'double_tap',
      rightLong: 'hollow_socket_pop',
      trigger: 'fist_slam_rattles'
    },
    right: {
      up: 'fist_slam_rattles',
      down: 'teeth_rasp_scrape',
      left: 'chin_bone_tap',
      right: 'micro_flick',
      upLong: 'reverse_scrape',
      downLong: 'choked_jaw_pinch',
      leftLong: 'double_tap',
      rightLong: 'hollow_socket_pop',
      trigger: 'teeth_rasp_scrape'
    }
  }
};
