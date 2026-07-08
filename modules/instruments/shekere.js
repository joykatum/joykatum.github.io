import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const shekere = {
  generateSVG: (id, colorType, lugsHtml) => `
    <!-- Heavy bottom shadow -->
            <circle cx="50" cy="52" r="46" fill="#020617" opacity="0.6" filter="blur(2.5px)"/>
            
            <!-- Natural organic dried gourd body -->
            <circle cx="50" cy="50" r="45" fill="url(#skin-${id})" stroke="#271305" stroke-width="1.8"/>
            <ellipse cx="50" cy="30" rx="18" ry="12" fill="none" stroke="#271305" stroke-width="0.8" opacity="0.2"/>
            
            <!-- Grid net layout of beads -->
            <path d="M 32 30 Q 50 35, 68 30 M 24 45 Q 50 51, 76 45 M 20 60 Q 50 67, 80 60 M 24 75 Q 50 82, 76 75" fill="none" stroke="#475569" stroke-width="0.6" opacity="0.5"/>
            <path d="M 32 30 Q 32 50, 40 75 M 50 20 Q 50 50, 50 80 M 68 30 Q 68 50, 60 75" fill="none" stroke="#475569" stroke-width="0.6" opacity="0.5"/>
            
            <!-- Glass/Wood Beads colorful studs -->
            <circle cx="38" cy="33" r="2.8" fill="#ef4444" stroke="#7f1d1d" stroke-width="0.4" filter="drop-shadow(0 1px 1px rgba(0,0,0,0.3))"/>
            <circle cx="50" cy="34" r="2.8" fill="#3b82f6" stroke="#1d4ed8" stroke-width="0.4" filter="drop-shadow(0 1px 1px rgba(0,0,0,0.3))"/>
            <circle cx="62" cy="33" r="2.8" fill="#ef4444" stroke="#7f1d1d" stroke-width="0.4" filter="drop-shadow(0 1px 1px rgba(0,0,0,0.3))"/>
            
            <circle cx="28" cy="48" r="2.8" fill="#fbbf24" stroke="#78350f" stroke-width="0.4" filter="drop-shadow(0 1px 1px rgba(0,0,0,0.3))"/>
            <circle cx="42" cy="50" r="2.8" fill="#10b981" stroke="#065f46" stroke-width="0.4" filter="drop-shadow(0 1px 1px rgba(0,0,0,0.3))"/>
            <circle cx="58" cy="50" r="2.8" fill="#10b981" stroke="#065f46" stroke-width="0.4" filter="drop-shadow(0 1px 1px rgba(0,0,0,0.3))"/>
            <circle cx="72" cy="48" r="2.8" fill="#fbbf24" stroke="#78350f" stroke-width="0.4" filter="drop-shadow(0 1px 1px rgba(0,0,0,0.3))"/>
            
            <circle cx="26" cy="63" r="2.8" fill="#3b82f6" stroke="#1d4ed8" stroke-width="0.4" filter="drop-shadow(0 1px 1px rgba(0,0,0,0.3))"/>
            <circle cx="38" cy="65" r="2.8" fill="#ef4444" stroke="#7f1d1d" stroke-width="0.4" filter="drop-shadow(0 1px 1px rgba(0,0,0,0.3))"/>
            <circle cx="50" cy="66" r="2.8" fill="#fbbf24" stroke="#78350f" stroke-width="0.4" filter="drop-shadow(0 1px 1px rgba(0,0,0,0.3))"/>
            <circle cx="62" cy="65" r="2.8" fill="#ef4444" stroke="#7f1d1d" stroke-width="0.4" filter="drop-shadow(0 1px 1px rgba(0,0,0,0.3))"/>
            <circle cx="74" cy="63" r="2.8" fill="#3b82f6" stroke="#1d4ed8" stroke-width="0.4" filter="drop-shadow(0 1px 1px rgba(0,0,0,0.3))"/>
            
            <!-- Ambient 3D lighting cover -->
            <circle cx="50" cy="50" r="45" fill="url(#overlay-${id})" opacity="0.6"/>
  `,
  name: 'Shekere',
  defaultLeft: 0,
  defaultRight: 0,
  drums: [
    {
      id: 0,
      label: 'Shekere',
      pitchMult: 1,
      color: 'caramel-light',
      sizeValue: 20
    }
  ],
  sounds: {
    bottom_palm_bass_pop: (d) => playMembrane(95 * d.pitchMult, 0.45, 1.3, false),
    bead_net_shake: (d) => playMembrane(95 * d.pitchMult, 0.45, 1.3, false),
    net_twist_pull_rub: (d) => playNoise(0.3, 2200, state.currentTiltVolume * 1.25),
    neck_tap: (d) => playNoise(0.18, 1800, state.currentTiltVolume * 0.75),
    mouth_slap_pop: (d) => playNoise(0.3, 2200, state.currentTiltVolume * 1.25)
  },
  touches: [
    {
      id: 'bottom_palm_bass_pop',
      label: 'Bottom palm bass pop',
      shortName: 'Bottom palm ...',
      description:
        'Striking the thick bottom base of the hollow gourd with a flat palm to create a deep, hollow air pop'
    },
    {
      id: 'bead_net_shake',
      label: 'Bead net shake',
      shortName: 'Bead net shake',
      description: 'Jerking the gourd forward and backward to snap the external net of beads against the outer walls'
    },
    {
      id: 'net_twist_pull_rub',
      label: 'Net twist / Pull rub',
      shortName: 'Net twist / ...',
      description:
        'Pulling the bead net down tightly or twisting it against the gourd to create a sustained, raspy friction texture'
    },
    {
      id: 'neck_tap',
      label: 'Neck Tap',
      shortName: 'Neck Tap',
      description:
        'Striking the narrow, bare wooden or fiberglass neck of the gourd with the knuckles or a ring while keeping the bead net perfectly still to produce a bright, dry, organic click'
    },
    {
      id: 'mouth_slap_pop',
      label: 'Mouth Slap Pop',
      shortName: 'Mouth Slap Pop',
      description:
        'Slapping the open top mouth of the gourd with an open palm to compress the air column and create a deep, bassy "u-du" style thump'
    }
  ],
  mappings: {
    left: {
      up: 'bottom_palm_bass_pop',
      down: 'bead_net_shake',
      left: 'net_twist_pull_rub',
      right: 'neck_tap',
      upLong: 'mouth_slap_pop',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'bottom_palm_bass_pop'
    },
    right: {
      up: 'bottom_palm_bass_pop',
      down: 'bead_net_shake',
      left: 'net_twist_pull_rub',
      right: 'neck_tap',
      upLong: 'mouth_slap_pop',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'bead_net_shake'
    }
  }
};
