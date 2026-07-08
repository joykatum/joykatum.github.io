import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const kotsuzumi = {
  generateSVG: (id, colorType, lugsHtml) => `
    <circle cx="50" cy="50" r="47" fill="#1e293b" opacity="0.08"/>
            
            <!-- Hourglass cherrywood body in background -->
            <path d="M 32 15 Q 50 42, 50 50 Q 50 58, 68 85 L 32 85 Q 50 58, 50 50 Q 50 42, 68 15 Z" fill="#451a03" stroke="#170500" stroke-width="1.5" filter="drop-shadow(0 3px 4px rgba(0,0,0,0.5))"/>
            
            <!-- Upper and lower drum heads shown in perspective -->
            <ellipse cx="50" cy="15" rx="20" ry="6" fill="url(#skin-${id})" stroke="#ca8a04" stroke-width="1.5"/>
            <ellipse cx="50" cy="85" rx="20" ry="6" fill="url(#skin-${id})" stroke="#ca8a04" stroke-width="1.5"/>
            
            <!-- Intricate orange silk cords (shirabeo) wrapping/crossing the hourglass body -->
            <path d="M 33 15 L 33 85 M 67 15 L 67 85 M 33 15 L 67 85 M 67 15 L 33 85 M 50 15 L 50 85" stroke="#ea580c" stroke-width="1.6" filter="drop-shadow(1px 1px 1px rgba(0,0,0,0.4))" stroke-linecap="round"/>
            
            <!-- Decorative central cords bundle tied in a traditional knot -->
            <rect x="42" y="46" width="16" height="8" rx="2.5" fill="#ca1b00" stroke="#710000" stroke-width="1"/>
            <circle cx="50" cy="50" r="3" fill="#ea580c"/>
  `,
  name: 'Kotsuzumi',
  defaultLeft: 0,
  defaultRight: 0,
  drums: [
    {
      id: 0,
      label: 'Kotsuzumi',
      pitchMult: 1,
      color: 'wood',
      sizeValue: 16
    }
  ],
  sounds: {
    pon: (d) => {
      playMembrane(400 * d.pitchMult, 0.12, 1.1, true);
      playNoise(0.04, 2500, state.currentTiltVolume * 0.4);
    },
    chi: (d) => {
      playMembrane(400 * d.pitchMult, 0.12, 1.1, true);
      playNoise(0.04, 2500, state.currentTiltVolume * 0.4);
    },
    pu: (d) => {
      playMembrane(400 * d.pitchMult, 0.12, 1.1, true);
      playNoise(0.04, 2500, state.currentTiltVolume * 0.4);
    },
    hoop_strike: (d) => playMembrane(220 * d.pitchMult, 0.6, 1.15)
  },
  touches: [
    {
      id: 'pon',
      label: 'Pon',
      shortName: 'Pon',
      description:
        'Striking with the fingers while loosening the shoulder cords to let the drumhead slacken and the pitch drop smoothly'
    },
    {
      id: 'chi',
      label: 'Chi',
      shortName: 'Chi',
      description:
        'Striking the head while squeezing the shoulder cords incredibly tight to spike the pitch to its highest register'
    },
    {
      id: 'pu',
      label: 'Pu',
      shortName: 'Pu',
      description: 'A delicate, quiet single-finger tap in the center of the head used as a rhythmic placeholder'
    },
    {
      id: 'hoop_strike',
      label: 'Hoop Strike',
      shortName: 'Hoop Strike',
      description:
        'Striking the lacquered outer iron rings with the fingers to generate a sharp, metallic ping that contrasts with the sliding leather tones'
    }
  ],
  mappings: {
    left: {
      up: 'pon',
      down: 'chi',
      left: 'pu',
      right: 'hoop_strike',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'pon'
    },
    right: {
      up: 'pon',
      down: 'chi',
      left: 'pu',
      right: 'hoop_strike',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'chi'
    }
  }
};
