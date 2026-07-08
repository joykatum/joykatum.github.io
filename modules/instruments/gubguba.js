import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const gubguba = {
  generateSVG: (id, colorType, lugsHtml) => `
    <circle cx="50" cy="52" r="48" fill="#020617" opacity="0.6" filter="blur(2.5px)"/>
            <circle cx="50" cy="50" r="48" fill="url(#skin-${id})"/>
            <circle cx="50" cy="50" r="40" fill="url(#skin-${id})" filter="brightness(1.1)" stroke="#271305" stroke-width="1.5"/>
            <circle cx="50" cy="50" r="4" fill="url(#chrome-${id})" stroke="#0f172a" stroke-width="0.5"/>
            <line x1="50" y1="50" x2="68" y2="28" stroke="#f1f5f9" stroke-width="1.2" filter="drop-shadow(0 1px 1.5px rgba(0,0,0,0.4))"/>
            <rect x="63" y="24" width="10" height="7" rx="1.5" fill="url(#skin-${id})" stroke="#271305" stroke-width="1" transform="rotate(35, 68, 28)"/>
            <circle cx="50" cy="50" r="48" fill="none" stroke="#4a1d0f" stroke-width="2.5"/>
            <circle cx="50" cy="50" r="40" fill="url(#overlay-${id})" opacity="0.6"/>
  `,
  name: 'Gubguba',
  defaultLeft: 0,
  defaultRight: 0,
  drums: [
    {
      id: 0,
      label: 'Gubguba',
      pitchMult: 1,
      color: 'caramel',
      sizeValue: 17
    }
  ],
  sounds: {
    string_pluck: (d) => playTablaSlideUp(160 * d.pitchMult, 90 * d.pitchMult, 0.5),
    string_tension_bend: (d) => playTablaSlideUp(160 * d.pitchMult, 90 * d.pitchMult, 0.5)
  },
  touches: [
    {
      id: 'string_pluck',
      label: 'String pluck',
      shortName: 'String pluck',
      description: 'Plucking a taut string that passes directly through the center of a small drumhead container'
    },
    {
      id: 'string_tension_bend',
      label: 'String tension bend',
      shortName: 'String tensi...',
      description:
        'Pulling a lever or manually tugging the string to instantly alter its tension, creating a sliding pitch effect'
    }
  ],
  mappings: {
    left: {
      up: 'string_pluck',
      down: 'string_tension_bend',
      left: '',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'string_pluck'
    },
    right: {
      up: 'string_pluck',
      down: 'string_tension_bend',
      left: '',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'string_tension_bend'
    }
  }
};
