import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const steelpan = {
  generateSVG: (id, colorType, lugsHtml) => `
    <circle cx="50" cy="51.5" r="48" fill="#020617" opacity="0.6" filter="blur(2px)"/>
            <circle cx="50" cy="50" r="48" fill="url(#skin-${id})"/>
            <circle cx="50" cy="50" r="22" fill="none" stroke="#64748b" stroke-width="0.8" opacity="0.4" stroke-dasharray="2, 4"/>
            <line x1="50" y1="2" x2="50" y2="98" stroke="#64748b" stroke-width="0.5" opacity="0.3"/>
            <line x1="2" y1="50" x2="98" y2="50" stroke="#64748b" stroke-width="0.5" opacity="0.3"/>
            <ellipse cx="50" cy="12" rx="6" ry="4" fill="#0f172a" opacity="0.25"/><circle cx="50" cy="12" r="1" fill="#cbd5e1" opacity="0.8"/>
            <ellipse cx="50" cy="88" rx="6" ry="4" fill="#0f172a" opacity="0.25"/><circle cx="50" cy="88" r="1" fill="#cbd5e1" opacity="0.8"/>
            <ellipse cx="12" cy="50" rx="4" ry="6" fill="#0f172a" opacity="0.25"/><circle cx="12" cy="50" r="1" fill="#cbd5e1" opacity="0.8"/>
            <ellipse cx="88" cy="50" rx="4" ry="6" fill="#0f172a" opacity="0.25"/><circle cx="88" cy="50" r="1" fill="#cbd5e1" opacity="0.8"/>
            <circle cx="50" cy="50" r="47.5" fill="none" stroke="url(#chrome-${id})" stroke-width="3"/>
            <circle cx="50" cy="50" r="47.5" fill="url(#overlay-${id})" opacity="1.2"/>
  `,
  name: 'Steelpan',
  defaultLeft: 0,
  defaultRight: 0,
  drums: [
    {
      id: 0,
      label: 'Lead Pan',
      pitchMult: 1,
      color: 'silver',
      sizeValue: 22
    }
  ],
  sounds: {
    indentation_strike: (d) => playMembrane(440 * d.pitchMult, 0.45, 1.2, false),
    rapid_chordal_roll: (d) => {
      playMembrane(440 * d.pitchMult, 0.15, 0.8, false);
      playMembrane(554 * d.pitchMult, 0.12, 0.7, false);
      playMembrane(659 * d.pitchMult, 0.1, 0.6, false);
    },
    rim_ring: (d) => playMembrane(880 * d.pitchMult, 0.8, 1.4, false),
    mute_slap: (d) => playMembrane(330 * d.pitchMult, 0.05, 0.9, true)
  },
  touches: [
    {
      id: 'indentation_strike',
      label: 'Indentation strike',
      shortName: 'Indentation ...',
      description:
        'Striking the center of a tuned convex note indentation using a rubber-tipped mallet and lifting off instantly to avoid choking it'
    },
    {
      id: 'rapid_chordal_roll',
      label: 'Rapid chordal roll',
      shortName: 'Rapid chorda...',
      description:
        'Alternating ultra-rapid, light strikes between multiple notes to create a sustained, singing melody or chord'
    },
    {
      id: 'rim_ring',
      label: 'Rim Ring',
      shortName: 'Rim Ring',
      description:
        'Striking the un-tuned outer vertical chrome skirt or rim of the pan with the mallet shaft to create a bright, industrial metallic ring'
    }
  ],
  mappings: {
    left: {
      up: 'indentation_strike',
      down: 'rapid_chordal_roll',
      left: 'rim_ring',
      right: 'mute_slap',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'indentation_strike'
    },
    right: {
      up: 'indentation_strike',
      down: 'rapid_chordal_roll',
      left: 'rim_ring',
      right: 'mute_slap',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'rapid_chordal_roll'
    }
  }
};
