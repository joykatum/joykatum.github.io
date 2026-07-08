import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const talkingdrum = {
  generateSVG: (id, colorType, lugsHtml) => `
    <circle cx="50" cy="50" r="47" fill="#1e293b" opacity="0.08"/>
            
            <!-- Diagonal Hourglass wood body -->
            <g transform="rotate(30, 50, 50)">
              <!-- Body drop shadow -->
              <path d="M 24 30 L 76 30 L 50 50 Z" fill="#020617" opacity="0.35" filter="blur(3px)"/>
              
              <!-- Central wooden hourglass core -->
              <path d="M 28 30 Q 50 48, 50 50 Q 50 52, 72 70 L 28 70 Q 50 52, 50 50 Q 50 48, 72 30 Z" fill="#5c4033" stroke="#271305" stroke-width="1.2"/>
              
              <!-- Dense vertical tension leather laces running between heads -->
              <path d="M 25 30 Q 50 48, 25 70 M 30 30 Q 50 48, 30 70 M 35 30 Q 50 48, 35 70 M 40 30 Q 50 48, 40 70 M 45 30 Q 50 48, 45 70 M 50 30 L 50 70 M 55 30 Q 50 48, 55 70 M 60 30 Q 50 48, 60 70 M 65 30 Q 50 48, 65 70 M 70 30 Q 50 48, 70 70 M 75 30 Q 50 48, 75 70" fill="none" stroke="#ca8a04" stroke-width="1.2" opacity="0.9" filter="drop-shadow(0.5px 0.5px 1px rgba(0,0,0,0.3))"/>
              
              <!-- Center Squeezing/Wrapping cord (indicates pitch modulation) -->
              <rect x="44" y="47" width="12" height="6" rx="1.5" fill="#dc2626" stroke="#991b1b" stroke-width="0.8"/>
              
              <!-- Left head (Natural goat skin) -->
              <ellipse cx="50" cy="30" rx="26" ry="6.5" fill="url(#skin-${id})" stroke="#4a3628" stroke-width="2" filter="drop-shadow(0px -1.5px 2px rgba(0,0,0,0.3))"/>
              <ellipse cx="50" cy="30" rx="22" ry="5" fill="none" stroke="#ffffff" stroke-width="0.4" opacity="0.2"/>
              
              <!-- Right head (Natural goat skin) -->
              <ellipse cx="50" cy="70" rx="26" ry="6.5" fill="url(#skin-${id})" stroke="#4a3628" stroke-width="2" filter="drop-shadow(0px 1.5px 2px rgba(0,0,0,0.3))"/>
              <ellipse cx="50" cy="70" rx="22" ry="5" fill="none" stroke="#ffffff" stroke-width="0.4" opacity="0.2"/>
            </g>
  `,
  name: 'Talking Drum',
  defaultLeft: 0,
  defaultRight: 0,
  drums: [
    {
      id: 0,
      label: 'Tama',
      pitchMult: 1,
      color: 'caramel',
      sizeValue: 18
    }
  ],
  sounds: {
    squeeze_cord_pitch_glide: (d) => {
      playMembrane(280 * d.pitchMult, 0.14, 1.1, true);
      playNoise(0.06, 1500, state.currentTiltVolume * 0.8);
    },
    curved_stick_strike: (d) => playTablaSlideUp(250 * d.pitchMult, 450 * d.pitchMult, 0.45),
    non_dominant_finger_tap: (d) => playTablaSlideUp(150 * d.pitchMult, 300 * d.pitchMult, 0.55),
    shell_knock: (d) => playTablaSlideUp(250 * d.pitchMult, 450 * d.pitchMult, 0.45)
  },
  touches: [
    {
      id: 'squeeze_cord_pitch_glide',
      label: 'Squeeze cord pitch glide',
      shortName: 'Squeeze cord...',
      description:
        'Squeezing and releasing the vertical leather side cords under the arm to tightly tension the head and glide the pitch'
    },
    {
      id: 'curved_stick_strike',
      label: 'Curved stick strike',
      shortName: 'Curved stick...',
      description: 'Hitting the center of the head with a flat, hooked wooden stick to elicit the core resonant tone'
    },
    {
      id: 'non_dominant_finger_tap',
      label: 'Non-dominant finger tap',
      shortName: 'Non-dominant...',
      description:
        'Using the fingers of the non-holding hand to damp, pop, or add rapid ghost notes directly to the head'
    },
    {
      id: 'shell_knock',
      label: 'Shell Knock',
      shortName: 'Shell Knock',
      description:
        'Striking the narrow wooden waist of the drum with the curved stick to insert a dry, fixed-pitch wood accent'
    }
  ],
  mappings: {
    left: {
      up: 'squeeze_cord_pitch_glide',
      down: 'curved_stick_strike',
      left: 'non_dominant_finger_tap',
      right: 'shell_knock',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'squeeze_cord_pitch_glide'
    },
    right: {
      up: 'squeeze_cord_pitch_glide',
      down: 'curved_stick_strike',
      left: 'non_dominant_finger_tap',
      right: 'shell_knock',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'curved_stick_strike'
    }
  }
};
