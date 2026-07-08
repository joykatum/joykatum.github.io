import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const tank_drum = {
  generateSVG: (id, colorType, lugsHtml) => `
    <!-- Heavy bottom shadow -->
            <circle cx="50" cy="51.5" r="48" fill="#020617" opacity="0.7" filter="blur(2.5px)"/>
            
            <!-- Dark alloyed steel drum dome -->
            <circle cx="50" cy="50" r="48" fill="url(#skin-${id})" stroke="#1e293b" stroke-width="2"/>
            <circle cx="50" cy="50" r="43" fill="none" stroke="#cbd5e1" stroke-width="0.4" opacity="0.1"/>
            
            <!-- Beautiful U-shaped/tongue slit cuts radiating in a circle -->
            <path d="M 45 14 L 45 28 A 5 5 0 0 0 55 28 L 55 14" fill="none" stroke="#020617" stroke-width="1.8" stroke-linecap="round"/>
            <path d="M 45 86 L 45 72 A 5 5 0 0 1 55 72 L 55 86" fill="none" stroke="#020617" stroke-width="1.8" stroke-linecap="round"/>
            <path d="M 86 45 L 72 45 A 5 5 0 0 1 72 55 L 86 55" fill="none" stroke="#020617" stroke-width="1.8" stroke-linecap="round"/>
            <path d="M 14 45 L 28 45 A 5 5 0 0 0 28 55 L 14 55" fill="none" stroke="#020617" stroke-width="1.8" stroke-linecap="round"/>
            
            <!-- Diagonal tongues -->
            <g transform="rotate(45, 50, 50)">
              <path d="M 46 16 L 46 27 A 4 4 0 0 0 54 27 L 54 16" fill="none" stroke="#020617" stroke-width="1.8" stroke-linecap="round"/>
              <path d="M 46 84 L 46 73 A 4 4 0 0 1 54 73 L 54 84" fill="none" stroke="#020617" stroke-width="1.8" stroke-linecap="round"/>
            </g>
            <g transform="rotate(-45, 50, 50)">
              <path d="M 46 16 L 46 27 A 4 4 0 0 0 54 27 L 54 16" fill="none" stroke="#020617" stroke-width="1.8" stroke-linecap="round"/>
              <path d="M 46 84 L 46 73 A 4 4 0 0 1 54 73 L 54 84" fill="none" stroke="#020617" stroke-width="1.8" stroke-linecap="round"/>
            </g>
            
            <!-- Central center dimple -->
            <circle cx="50" cy="50" r="4" fill="#0f172a" opacity="0.6"/>
            <circle cx="50" cy="50" r="1.5" fill="#334155"/>
            
            <!-- Intense 3D ambient lighting cover reflecting steel dome look -->
            <circle cx="50" cy="50" r="48" fill="url(#overlay-${id})" opacity="1.4"/>
  `,
  name: 'Tank Drum',
  defaultLeft: 0,
  defaultRight: 2,
  drums: [
    {
      id: 0,
      label: 'Low Tongue',
      pitchMult: 1,
      color: 'bronze',
      sizeValue: 22
    },
    {
      id: 1,
      label: 'Mid Tongue',
      pitchMult: 1.33,
      color: 'bronze-medium',
      sizeValue: 19
    },
    {
      id: 2,
      label: 'High Tongue',
      pitchMult: 1.78,
      color: 'bronze-light',
      sizeValue: 16
    }
  ],
  sounds: {
    tongue_bounce: (d) => playMembrane((d.id === 0 ? 147 : d.id === 1 ? 196 : 294) * d.pitchMult, 1.2, 1.0, false),
    finger_slap: (d) => {
      playMembrane((d.id === 0 ? 147 : d.id === 1 ? 196 : 294) * d.pitchMult, 0.7, 1.1, false);
      playNoise(0.02, 5000, state.currentTiltVolume * 0.3);
    },
    muted_tap: (d) => playMembrane((d.id === 0 ? 147 : d.id === 1 ? 196 : 294) * d.pitchMult, 0.2, 0.8, true),
    shell_strike: (d) => playMembrane(800 * d.pitchMult, 0.1, 1.0, true)
  },
  touches: [
    {
      id: 'tongue_bounce',
      label: 'Tongue bounce',
      shortName: 'Tongue bounce',
      description:
        'Striking the cut-out steel tongues with fingers or soft rubber mallets, lifting off instantly to let the bell-like tone ring'
    }
  ],
  mappings: {
    left: {
      up: 'tongue_bounce',
      down: 'finger_slap',
      left: 'muted_tap',
      right: 'shell_strike',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'tongue_bounce'
    },
    right: {
      up: 'tongue_bounce',
      down: 'finger_slap',
      left: 'muted_tap',
      right: 'shell_strike',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'tongue_bounce'
    }
  }
};
