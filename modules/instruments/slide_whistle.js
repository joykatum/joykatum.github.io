import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const slide_whistle = {
  generateSVG: (id, colorType, lugsHtml) => `
    <circle cx="50" cy="50" r="47" fill="#1e293b" opacity="0.08"/>
            
            <!-- Metallic/silver cylindrical whistle tube positioned diagonally -->
            <g transform="rotate(-35, 50, 50)">
              <rect x="44" y="10" width="12" height="60" fill="url(#chrome-${id})" stroke="#334155" stroke-width="1.2" filter="drop-shadow(0px 3px 3px rgba(0,0,0,0.4))"/>
              <path d="M 44 10 C 44 2, 56 2, 56 10 Z" fill="#ef4444" stroke="#991b1b" stroke-width="0.8"/>
              <rect x="46" y="16" width="8" height="3" fill="#0f172a"/>
              <rect x="49" y="70" width="2" height="22" fill="url(#chrome-${id})" stroke="#1e293b" stroke-width="0.5" filter="drop-shadow(0 1px 1px rgba(0,0,0,0.3))"/>
              <circle cx="50" cy="92" r="4" fill="#ef4444" stroke="#991b1b" stroke-width="0.8" filter="drop-shadow(0 1.5px 1.5px rgba(0,0,0,0.3))"/>
              <circle cx="50" cy="92" r="1.5" fill="#ffffff" opacity="0.6"/>
            </g>
  `,
  name: 'Slide Whistle',
  defaultLeft: 0,
  defaultRight: 0,
  drums: [
    {
      id: 0,
      label: 'Slide Whistle',
      pitchMult: 1,
      color: 'blue-light',
      sizeValue: 18
    }
  ],
  sounds: {
    mouthpiece_blow: (d) => playMembrane(330 * d.pitchMult, 0.06, 1.0, false),
    piston_glide: (d) => playTablaSlideUp(220 * d.pitchMult, 550 * d.pitchMult, 0.7),
    piston_click: (d) => playMembrane(330 * d.pitchMult, 0.06, 1.0, false)
  },
  touches: [
    {
      id: 'mouthpiece_blow',
      label: 'Mouthpiece blow',
      shortName: 'Mouthpiece blow',
      description: 'Blowing a steady stream of air into the windway to initiate the acoustic whistle tone'
    },
    {
      id: 'piston_glide',
      label: 'Piston glide',
      shortName: 'Piston glide',
      description:
        'Pushing or pulling the internal metal piston rod while blowing to seamlessly slide the pitch up or down'
    },
    {
      id: 'piston_click',
      label: 'Piston Click',
      shortName: 'Piston Click',
      description:
        'Slamming the piston rod completely into the bottom of the whistle to create a mechanical, high-pitched plastic or metal click'
    }
  ],
  mappings: {
    left: {
      up: 'mouthpiece_blow',
      down: 'piston_glide',
      left: 'piston_click',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'mouthpiece_blow'
    },
    right: {
      up: 'mouthpiece_blow',
      down: 'piston_glide',
      left: 'piston_click',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'piston_glide'
    }
  }
};
