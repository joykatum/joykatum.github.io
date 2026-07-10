import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const claves = {
  generateSVG: (id, colorType, lugsHtml) => `
    <circle cx="50" cy="50" r="47" fill="#1e293b" opacity="0.08"/>
            
            <!-- Hand-held Clave (diagonal left-down to right-up) -->
            <g transform="rotate(-25, 50, 50)" filter="drop-shadow(0 3px 4.5px rgba(0,0,0,0.4))">
              <rect x="18" y="44" width="64" height="12" rx="4" fill="url(#skin-${id})" stroke="#451a03" stroke-width="1"/>
              <ellipse cx="18" cy="50" rx="2" ry="6" fill="#ca8a04"/>
              <ellipse cx="82" cy="50" rx="2" ry="6" fill="#f5caa0"/>
            </g>
            
            <!-- Striking Clave (diagonal left-up to right-down) -->
            <g transform="rotate(35, 50, 50)" filter="drop-shadow(0 4.5px 5px rgba(0,0,0,0.45))">
              <rect x="22" y="44" width="64" height="11" rx="4" fill="url(#skin-${id})" stroke="#451a03" stroke-width="1"/>
              <ellipse cx="22" cy="49.5" rx="2" ry="5.5" fill="#ca8a04"/>
              <ellipse cx="86" cy="49.5" rx="2" ry="5.5" fill="#f5caa0"/>
            </g>
  `,
  name: 'Claves',
  defaultLeft: 0,
  defaultRight: 0,
  drums: [
    {
      id: 0,
      label: 'Claves',
      pitchMult: 1,
      color: 'terracotta',
      sizeValue: 15
    }
  ],
  sounds: {
    strike: (d, velocity = 0.85) => {
      playMembrane(1300 * d.pitchMult, 0.04, 1.0, false, velocity);
      playAttackClick(0.008, 4000, 0.4 * velocity);
    },
    end_tap: (d, velocity = 0.75) => {
      playMembrane(1650 * d.pitchMult, 0.02, 1.0, true, velocity);
      playNoise(0.01, 5000, velocity * 0.3, 'highpass');
    },
    wooden_rub: (d, velocity = 0.6) => {
      playNoise(0.2, 1000, velocity * 0.6, 'bandpass', 4.0);
    },
    cup_strike: (d, velocity = 0.8) => {
      playMembrane(950 * d.pitchMult, 0.06, 1.2, false, velocity);
      playAttackClick(0.01, 3500, 0.3 * velocity);
    }
  },
  touches: [
    {
      id: 'strike',
      label: 'Strike',
      shortName: 'Strike',
      description:
        'Striking the active stick against the resting stick, which is cradled loosely over a cupped hand acting as an acoustic sound chamber'
    },
    {
      id: 'end_tap',
      label: 'End Tap',
      shortName: 'End Tap',
      description:
        'Striking the absolute tip of the active clave against the tip of the resting clave to create a higher, thinner, laser-focused wood click'
    }
  ],
  mappings: {
    left: {
      up: 'strike',
      down: 'end_tap',
      left: 'wooden_rub',
      right: 'cup_strike',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'strike'
    },
    right: {
      up: 'strike',
      down: 'end_tap',
      left: 'wooden_rub',
      right: 'cup_strike',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'end_tap'
    }
  }
};
