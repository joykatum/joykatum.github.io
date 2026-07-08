import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const daf = {
  generateSVG: (id, colorType, lugsHtml) => `
    <circle cx="50" cy="51" r="49" fill="#020617" opacity="0.6" filter="blur(2px)"/>
            <circle cx="50" cy="50" r="48" fill="none" stroke="#78350f" stroke-width="3"/>
            <circle cx="50" cy="50" r="45" fill="url(#skin-${id})"/>
            <circle cx="50" cy="50" r="41.5" fill="none" stroke="#eab308" stroke-width="2.5" stroke-dasharray="1 3" stroke-linecap="round" opacity="0.8"/>
            <circle cx="50" cy="50" r="45" fill="url(#overlay-${id})"/>
  `,
  name: 'Daf',
  defaultLeft: 0,
  defaultRight: 0,
  drums: [
    {
      id: 0,
      label: 'Persian Daf',
      pitchMult: 1,
      color: 'blonde',
      sizeValue: 23
    }
  ],
  sounds: {
    dum: (d) => playMembrane(60 * d.pitchMult, 0.8, 1.5, false),
    tak: (d) => playMembrane(280 * d.pitchMult, 0.2, 1.0, true),
    zanjir: (d) => playMembrane(120 * d.pitchMult, 0.5, 1.2, false),
    frame_slap: (d) => playMembrane(280 * d.pitchMult, 0.2, 1.0, true)
  },
  touches: [
    {
      id: 'dum',
      label: 'Dum',
      shortName: 'Dum',
      description:
        'A warm, resonant thumb or palm strike delivered to the inner edge of the massive, lightweight wooden frame'
    },
    {
      id: 'tak',
      label: 'Tak',
      shortName: 'Tak',
      description:
        'A sharp, snapping finger strike on the extreme perimeter of the skin to produce a bright edge accent'
    },
    {
      id: 'zanjir',
      label: 'Zanjir',
      shortName: 'Zanjir',
      description:
        'Tilting and shaking the frame vigorously so hundreds of interlinked metal rings cascading along the inside frame clash against the skin'
    },
    {
      id: 'frame_slap',
      label: 'Frame Slap',
      shortName: 'Frame Slap',
      description:
        'Striking the bare wooden frame directly with the flat palm, causing all the internal rings to explode in a sudden, violent, un-sustained metallic crash'
    }
  ],
  mappings: {
    left: {
      up: 'dum',
      down: 'tak',
      left: 'zanjir',
      right: 'frame_slap',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'dum'
    },
    right: {
      up: 'dum',
      down: 'tak',
      left: 'zanjir',
      right: 'frame_slap',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'tak'
    }
  }
};
