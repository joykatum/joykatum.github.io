import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const boomwhackers = {
  origin: 'Modern Educational / Experimental',
  description:
    'Boomwhackers are lightweight, hollow, color-coded plastic tubes tuned to specific musical pitches by length. Striking them against hands, legs, or any hard surface produces a resonant, plastic hollow pop sound. Interesting fact: they were invented in 1995 by Craig Ramsell, who noticed that cutting cardboard tubes to different lengths produced distinct musical pitches. They became a global educational phenomenon in music classrooms. In professional performance, advanced ensembles arrange hundreds of tubes in complex racks to play incredibly fast, syncopated polyrhythms with a highly unique, modern acoustic aesthetic.',
  performers: [
    {
      name: 'Harvard THUD',
      spotify: 'true',
      apple: 'true'
    },
    {
      name: 'Blue Man Group',
      spotify: 'true',
      apple: 'true'
    }
  ],
  songs: [
    {
      name: 'Plastic Pop Suite',
      artist: 'Harvard THUD',
      spotify: 'true',
      apple: 'true'
    }
  ],
  effectsSongs: [
    {
      name: 'Tuned Plastic Grooves',
      artist: 'Harvard THUD',
      desc: 'The hollow plastic pops are processed through a lush stereo chorus and dynamic low-pass filters, transforming the tubes into a bouncy, synth-like percussive melody.',
      url: '',
      platform: 'Spotify'
    }
  ],

  name: 'Boomwhackers',
  defaultRight: 2,
  drums: [
    {
      id: 0,
      label: 'Low Tube',
      pitchMult: 1,
      color: 'red',
      sizeValue: 20
    },
    {
      id: 1,
      label: 'Mid Tube',
      pitchMult: 1.25,
      color: 'green',
      sizeValue: 17
    },
    {
      id: 2,
      label: 'High Tube',
      pitchMult: 1.5,
      color: 'yellow',
      sizeValue: 14
    }
  ],
  sounds: {
    surface_strike: (d) => playMembrane((d.id === 0 ? 170 : d.id === 1 ? 210 : 280) * d.pitchMult, 0.1, 1.0, false),
    body_strike: (d) => {
      playMembrane((d.id === 0 ? 260 : d.id === 1 ? 330 : 440) * d.pitchMult, 0.12, 1.0, true);
      playNoise(0.04, 1500, state.currentTiltVolume * 0.4);
    },
    end_cap_pop: (d) => {
      playMembrane((d.id === 0 ? 260 : d.id === 1 ? 330 : 440) * d.pitchMult, 0.12, 1.0, true);
      playNoise(0.04, 1500, state.currentTiltVolume * 0.4);
    }
  },
  touches: [
    {
      id: 'surface_strike',
      label: 'Surface strike',
      shortName: 'Surface strike',
      description:
        'Striking the flat end of the tuned plastic tube against a hard floor or wall to vibrate the column of air'
    },
    {
      id: 'body_strike',
      label: 'Body strike',
      shortName: 'Body strike',
      description:
        'Tapping the side or end of the tube against a shoe or thigh to get a softer, more rounded resonant pitch'
    },
    {
      id: 'end_cap_pop',
      label: 'End Cap Pop',
      shortName: 'End Cap Pop',
      description:
        'Striking the open end of the plastic tube flat against the palm of the hand to create a tight, compressed acoustic air pop'
    }
  ],
  mappings: {
    left: {
      up: 'surface_strike',
      down: 'body_strike',
      left: 'end_cap_pop',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'surface_strike'
    },
    right: {
      up: 'surface_strike',
      down: 'body_strike',
      left: 'end_cap_pop',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'body_strike'
    }
  }
};
