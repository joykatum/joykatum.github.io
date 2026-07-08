import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const handpan = {
  generateSVG: (id, colorType, lugsHtml) => `
    <circle cx="50" cy="51.5" r="48" fill="#020617" opacity="0.7" filter="blur(2.5px)"/>
            <circle cx="50" cy="50" r="48" fill="url(#skin-${id})"/>
            <circle cx="50" cy="50" r="42" fill="none" stroke="#cbd5e1" stroke-width="0.4" opacity="0.15"/>
            <ellipse cx="50" cy="50" rx="9" ry="7.5" fill="none" stroke="#0f172a" stroke-width="1.2" opacity="0.8"/>
            <circle cx="50" cy="50" r="2.2" fill="url(#chrome-${id})" stroke="#0f172a" stroke-width="0.5"/>
            <ellipse cx="50" cy="20" rx="7" ry="5" fill="#0f172a" opacity="0.3"/><circle cx="50" cy="20" r="1" fill="#cbd5e1" opacity="0.8"/>
            <ellipse cx="50" cy="80" rx="7" ry="5" fill="#0f172a" opacity="0.3"/><circle cx="50" cy="80" r="1" fill="#cbd5e1" opacity="0.8"/>
            <ellipse cx="20" cy="50" rx="5" ry="7" fill="#0f172a" opacity="0.3"/><circle cx="20" cy="50" r="1" fill="#cbd5e1" opacity="0.8"/>
            <ellipse cx="80" cy="50" rx="5" ry="7" fill="#0f172a" opacity="0.3"/><circle cx="80" cy="50" r="1" fill="#cbd5e1" opacity="0.8"/>
            <circle cx="50" cy="50" r="48" fill="url(#overlay-${id})" opacity="1.3"/>
  `,
  name: 'Handpan',
  defaultLeft: 0,
  defaultRight: 1,
  drums: [
    {
      id: 0,
      label: 'Central Ding (Bass)',
      pitchMult: 0.8,
      color: 'steel-blue',
      sizeValue: 22
    },
    {
      id: 1,
      label: 'Tone Fields',
      pitchMult: 1.2,
      color: 'steel-blue',
      sizeValue: 18
    }
  ],
  sounds: {
    ding: (d) => playMembrane(120 * d.pitchMult, 0.6, 1.25, false),
    gu: (d) => playMembrane(120 * d.pitchMult, 0.6, 1.25, false),
    tone_field_tap: (d) => playMembrane(240 * d.pitchMult, 1.3, 1.0, false),
    interstitial_tap: (d) => playMembrane(85 * d.pitchMult, 1.5, 1.1, false)
  },
  touches: [
    {
      id: 'ding',
      label: 'Ding',
      shortName: 'Ding',
      description:
        'A light, springy thumb strike on the central raised or indented dome note to elicit a deep, resonant bass foundation'
    },
    {
      id: 'gu',
      label: 'Gu',
      shortName: 'Gu',
      description:
        'Slapping the flat bottom shell directly around the open acoustic port hole to produce a dry, wooden bass thud'
    },
    {
      id: 'tone_field_tap',
      label: 'Tone field tap',
      shortName: 'Tone field tap',
      description:
        'Striking the outer dimpled notes with a quick finger bounce to isolate specific chordal overtones and harmonics'
    },
    {
      id: 'interstitial_tap',
      label: 'Interstitial Tap',
      shortName: 'Interstitial...',
      description:
        'Striking the flat, untreated metal spaces between the tuned note fields to create a dry, metallic, non-resonant percussive click'
    }
  ],
  mappings: {
    left: {
      up: 'ding',
      down: 'gu',
      left: 'tone_field_tap',
      right: 'interstitial_tap',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'ding'
    },
    right: {
      up: 'ding',
      down: 'gu',
      left: 'tone_field_tap',
      right: 'interstitial_tap',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'gu'
    }
  }
};
