import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const spoons_bones = {
  generateSVG: (id, colorType, lugsHtml) => `
    <circle cx="50" cy="50" r="47" fill="#1e293b" opacity="0.08"/>
            
            <!-- Traditional curved rhythm bones (wooden clackers) in background/foreground -->
            <g transform="translate(50, 72) rotate(45)" filter="drop-shadow(0 2.5px 3px rgba(0,0,0,0.4))">
              <path d="M -25 -5 C -10 -5, 10 5, 25 5 C 28 5, 30 -2, 25 -3 C 10 -3, -10 -10, -25 -10 C -30 -10, -30 -5, -25 -5 Z" fill="#b45309" stroke="#78350f" stroke-width="1.2"/>
              <path d="M -25 5 C -10 5, 10 15, 25 15 C 28 15, 30 8, 25 7 C 10 7, -10 0, -25 0 C -30 0, -30 5, -25 5 Z" fill="#d97706" stroke="#78350f" stroke-width="1.2"/>
            </g>

            <!-- Two back-to-back silver spoons -->
            <g transform="translate(43, 26) rotate(-15)" filter="drop-shadow(0 3px 4px rgba(0,0,0,0.4))">
              <!-- Spoon 1 handle -->
              <path d="M 0 0 L -8 45 C -12 55, -2 60, -2 55 L 2 20 Z" fill="url(#chrome-${id})" stroke="#475569" stroke-width="0.8"/>
              <!-- Spoon 1 bowl -->
              <ellipse cx="0" cy="5" rx="11" ry="16" fill="url(#chrome-${id})" stroke="#475569" stroke-width="1"/>
              <ellipse cx="-2" cy="3" rx="7" ry="11" fill="#ffffff" opacity="0.25"/>
            </g>
            
            <g transform="translate(57, 26) rotate(15) scale(-1, 1)" filter="drop-shadow(0 3px 4px rgba(0,0,0,0.4))">
              <!-- Spoon 2 handle -->
              <path d="M 0 0 L -8 45 C -12 55, -2 60, -2 55 L 2 20 Z" fill="url(#chrome-${id})" stroke="#475569" stroke-width="0.8"/>
              <!-- Spoon 2 bowl -->
              <ellipse cx="0" cy="5" rx="11" ry="16" fill="url(#chrome-${id})" stroke="#475569" stroke-width="1"/>
              <ellipse cx="-2" cy="3" rx="7" ry="11" fill="#ffffff" opacity="0.25"/>
            </g>
  `,
  name: 'Spoons',
  defaultLeft: 0,
  defaultRight: 0,
  drums: [
    {
      id: 0,
      label: 'Spoons/Bones',
      pitchMult: 1,
      color: 'blonde',
      sizeValue: 14
    }
  ],
  sounds: {
    finger_rake_roll: (d) => {
      playMembrane(600 * d.pitchMult, 0.04, 1.0, false);
      playNoise(0.02, 3500, state.currentTiltVolume * 0.4);
    },
    thigh_to_hand_bounce: (d) => playMembrane(350 * d.pitchMult, 0.03, 1.0, false),
    hand_flat_slap: (d) => {
      playMembrane(800 * d.pitchMult, 0.03, 1.0, true);
      playNoise(0.04, 4500, state.currentTiltVolume * 1.2);
    }
  },
  touches: [
    {
      id: 'finger_rake_roll',
      label: 'Finger rake roll',
      shortName: 'Finger rake ...',
      description:
        'Dragging the clacking pair down the spread fingers of the non-dominant hand to create ultra-fast triplets'
    },
    {
      id: 'thigh_to_hand_bounce',
      label: 'Thigh-to-hand bounce',
      shortName: 'Thigh-to-han...',
      description:
        'Bouncing the instruments rapidly back and forth between the top of the thigh and the open palm of the non-dominant hand'
    },
    {
      id: 'hand_flat_slap',
      label: 'Hand Flat Slap',
      shortName: 'Hand Flat Slap',
      description:
        'Bringing the paired instruments down completely flat against the open palm to create a wide, slapping clatter rather than a tight click'
    }
  ],
  mappings: {
    left: {
      up: 'finger_rake_roll',
      down: 'thigh_to_hand_bounce',
      left: 'hand_flat_slap',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'finger_rake_roll'
    },
    right: {
      up: 'finger_rake_roll',
      down: 'thigh_to_hand_bounce',
      left: 'hand_flat_slap',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'thigh_to_hand_bounce'
    }
  }
};
