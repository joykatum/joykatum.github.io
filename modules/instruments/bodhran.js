import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const bodhran = {
  generateSVG: (id, colorType, lugsHtml) => `
    <svg viewBox="0 0 100 100" width="100%" height="100%">
      <circle cx="50" cy="51" r="49" fill="#020617" opacity="0.4"/>
      
      <circle cx="50" cy="50" r="48.5" fill="none" stroke="#8b5a2b" stroke-width="2"/>
      
      <circle cx="50" cy="50" r="47.5" fill="url(#skin-${id})"/>
      
      <circle cx="50" cy="50" r="46.5" fill="none" stroke="#1e1b18" stroke-width="0.8" opacity="0.5"/>
      <circle cx="50" cy="50" r="42" fill="none" stroke="#ffffff" stroke-width="0.2" opacity="0.15"/>
      
      <circle cx="50" cy="50" r="47.5" fill="url(#overlay-${id})"/>
    </svg>
  `,
  name: 'Bodhrán',
  defaultLeft: 0,
  defaultRight: 0,
  drums: [
    {
      id: 0,
      label: 'Bodhrán Head',
      pitchMult: 1,
      color: 'blonde',
      sizeValue: 22
    }
  ],
  sounds: {
    // Light rapid strike with minimal decay time
    tipper_roll: (d) => playMembrane(95 * d.pitchMult, 0.12, 1.1, false),
    
    // Wood shell + head contact layer utilizing the imported attack click
    rimshot: (d) => {
      playMembrane(155 * d.pitchMult, 0.14, 0.8, false);
      playAttackClick();
    },
    
    // Dynamic real-time upward pitch sweep bending across the hide
    back_hand_pitch_glide: (d) => {
      playTablaSlideUp(110 * d.pitchMult, 175 * d.pitchMult, 0.22);
    },
    
    // Drastically shortened decay/sustain setting to replicate palm muting physics
    back_hand_pressure_damp: (d) => playMembrane(65 * d.pitchMult, 0.04, 0.4, false)
  },
  touches: [
    {
      id: 'tipper_roll',
      label: 'Tipper roll',
      shortName: 'Tipper roll',
      description:
        'A fluid wrist-pivot motion bouncing both ends of a double-headed stick rapidly up and down across the goat-skin'
    },
    {
      id: 'rimshot',
      label: 'Rimshot',
      shortName: 'Rimshot',
      description:
        'Striking the outer wooden shell and the skin simultaneously with the stick for an explosive wooden crack'
    },
    {
      id: 'back_hand_pitch_glide',
      label: 'Back-hand pitch-glide',
      shortName: 'Back-hand pi...',
      description:
        'Pressing and sliding the bare non-dominant hand inside the shell against the back of the skin to bend the pitch'
    },
    {
      id: 'back_hand_pressure_damp',
      label: 'Back-hand pressure damp',
      shortName: 'Back-hand pr...',
      description: 'Applying static palm pressure to the inside of the skin to deaden the sustain and dry out the tone'
    }
  ],
  mappings: {
    left: {
      up: 'tipper_roll',
      down: 'rimshot',
      left: 'back_hand_pitch_glide',
      right: 'back_hand_pressure_damp',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'tipper_roll'
    },
    right: {
      up: 'tipper_roll',
      down: 'rimshot',
      left: 'back_hand_pitch_glide',
      right: 'back_hand_pressure_damp',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'rimshot'
    }
  }
};
