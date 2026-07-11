import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const newtons_cradle = {
  generateSVG: (id, colorType, lugsHtml) => `
    <!-- Shadow for spheres -->
            <ellipse cx="50" cy="80" rx="36" ry="6" fill="#020617" opacity="0.65" filter="blur(3px)"/>
            
            <!-- Support Frame (Chrome arcs) -->
            <path d="M 22 72 L 22 28 Q 22 18, 50 18 Q 78 18, 78 28 L 78 72" fill="none" stroke="#94a3b8" stroke-width="3" stroke-linecap="round" filter="drop-shadow(0 2px 3px rgba(0,0,0,0.3))"/>
            <path d="M 22 28 L 78 28" fill="none" stroke="#cbd5e1" stroke-width="1.5" opacity="0.5"/>
            
            <!-- Suspension strings -->
            <line x1="34" y1="28" x2="34" y2="60" stroke="#64748b" stroke-width="0.6"/>
            <line x1="42" y1="28" x2="42" y2="60" stroke="#64748b" stroke-width="0.6"/>
            <line x1="50" y1="28" x2="50" y2="60" stroke="#64748b" stroke-width="0.6"/>
            <line x1="58" y1="28" x2="58" y2="60" stroke="#64748b" stroke-width="0.6"/>
            
            <!-- Stationary spheres 2, 3, 4 -->
            <circle cx="42" cy="60" r="4" fill="url(#chrome-${id})" stroke="#475569" stroke-width="0.6" filter="drop-shadow(0 1px 2px rgba(0,0,0,0.3))"/>
            <circle cx="50" cy="60" r="4" fill="url(#chrome-${id})" stroke="#475569" stroke-width="0.6" filter="drop-shadow(0 1px 2px rgba(0,0,0,0.3))"/>
            <circle cx="58" cy="60" r="4" fill="url(#chrome-${id})" stroke="#475569" stroke-width="0.6" filter="drop-shadow(0 1px 2px rgba(0,0,0,0.3))"/>
            
            <!-- Left swinging sphere (in motion) -->
            <g transform="rotate(30, 34, 28)">
                <line x1="34" y1="28" x2="34" y2="60" stroke="#475569" stroke-width="0.8"/>
                <circle cx="34" cy="60" r="4" fill="url(#chrome-${id})" stroke="#334155" stroke-width="0.6" filter="drop-shadow(-2px 2px 2px rgba(0,0,0,0.4))"/>
                <circle cx="32" cy="58" r="1.2" fill="#ffffff" opacity="0.6"/>
            </g>
            
            <!-- Right swinging sphere (recoiling) -->
            <g transform="rotate(-15, 66, 28)">
                <line x1="66" y1="28" x2="66" y2="60" stroke="#475569" stroke-width="0.8"/>
                <circle cx="66" cy="60" r="4" fill="url(#chrome-${id})" stroke="#334155" stroke-width="0.6" filter="drop-shadow(2px 2px 2px rgba(0,0,0,0.4))"/>
                <circle cx="64" cy="58" r="1.2" fill="#ffffff" opacity="0.6"/>
            </g>
            
            <!-- Heavy bottom steel plates -->
            <rect x="14" y="68" width="72" height="6" rx="1.5" fill="#334155" stroke="#1e293b" stroke-width="1"/>
            <rect x="16" y="69" width="68" height="2" fill="#64748b" opacity="0.4"/>
  `,
  name: '🖲️ Newton Cradle',
  drums: [
    {
      id: 0,
      label: 'Newton Cradle',
      pitchMult: 1,
      color: 'silver',
      sizeValue: 19
    }
  ],
  sounds: {
    single_ball_clack: (d) => {
      playAttackClick(0.01, 3500, 0.9 * state.currentTiltVolume);
      playMembrane(1100 * d.pitchMult, 0.02, 1.0);
    },
    continuous_ripple: (d) => {
      playAttackClick(0.008, 3500, 0.85);
      setTimeout(() => {
        playAttackClick(0.008, 3300, 0.7);
      }, 30);
      setTimeout(() => {
        playAttackClick(0.008, 3100, 0.55);
      }, 60);
      setTimeout(() => {
        playAttackClick(0.008, 2900, 0.4);
      }, 90);
    },
    double_side_strike: (d) => {
      playAttackClick(0.012, 3200, 1.0 * state.currentTiltVolume);
      playMembrane(900 * d.pitchMult, 0.03, 1.0);
    },
    damped_metal_thud: (d) => playMembrane(600 * d.pitchMult, 0.04, 1.0, true),
    string_tangle_snag: (d) => playNoise(0.12, 2800, 0.45 * state.currentTiltVolume),
    chassis_frame_tap: (d) => {
      playMembrane(800 * d.pitchMult, 0.06, 1.0);
      playAttackClick(0.02, 2500, 0.5 * state.currentTiltVolume);
    },
    decaying_skitter: (d) => {
      for (let i = 0; i < 6; i++) {
        setTimeout(
          () => {
            playAttackClick(0.005, 3500 - i * 150, 0.6 - i * 0.09);
          },
          i * 25 + Math.random() * 15
        );
      }
    },
    scrape_drag: (d) => playNoise(0.35, 3000, 0.4 * state.currentTiltVolume)
  },
  touches: [
    {
      id: 'single_ball_clack',
      label: 'Single Ball Clack',
      shortName: 'Clack',
      description: 'The crisp, instantaneous, singular metal-on-metal click'
    },
    {
      id: 'continuous_ripple',
      label: 'Continuous Ripple',
      shortName: 'Ripple',
      description: 'The rhythmic, rapid-fire clack-clack-clack of all balls in motion'
    },
    {
      id: 'double_side_strike',
      label: 'Double Side Strike',
      shortName: 'Double',
      description: 'Two balls dropping from opposite sides simultaneously'
    },
    {
      id: 'damped_metal_thud',
      label: 'Damped Metal Thud',
      shortName: 'Muted',
      description: 'Grabbing the balls mid-swing to create a choked, metallic thud'
    },
    {
      id: 'string_tangle_snag',
      label: 'String Tangle Snag',
      shortName: 'Snag',
      description: 'The dry, plastic friction of the suspension wires twisting'
    },
    {
      id: 'chassis_frame_tap',
      label: 'Chassis Frame Tap',
      shortName: 'Frame Tap',
      description: 'Striking the hollow metal support frame with a fingernail'
    },
    {
      id: 'decaying_skitter',
      label: 'Decaying Skitter',
      shortName: 'Skitter',
      description: 'The natural, erratic losing-momentum micro-clicking as it stops'
    },
    {
      id: 'scrape_drag',
      label: 'Scrape Drag',
      shortName: 'Drag',
      description: 'Pulling a ball along the row rather than dropping it'
    }
  ],
  mappings: {
    left: {
      up: 'single_ball_clack',
      down: 'continuous_ripple',
      left: 'double_side_strike',
      right: 'damped_metal_thud',
      upLong: 'string_tangle_snag',
      downLong: 'chassis_frame_tap',
      leftLong: 'decaying_skitter',
      rightLong: 'scrape_drag',
      trigger: 'single_ball_clack'
    },
    right: {
      up: 'single_ball_clack',
      down: 'continuous_ripple',
      left: 'double_side_strike',
      right: 'damped_metal_thud',
      upLong: 'string_tangle_snag',
      downLong: 'chassis_frame_tap',
      leftLong: 'decaying_skitter',
      rightLong: 'scrape_drag',
      trigger: 'continuous_ripple'
    }
  }
};
