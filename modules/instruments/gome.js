import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const gome = {
  origin: 'West Africa (Ghana)',
  description:
    'The Gome is a large, box-shaped drum from Ghana, covered with goatskin on one side. The drummer sits directly on top of the wooden box, using their heels to press against the skin from below to dynamically alter the pitch while playing the skin with bare hands. Interesting fact: the Gome was introduced to Ghana in the 19th century by returning freed slaves from the Caribbean. It was originally played as a secret instrument of resistance. Sitting on the drum allows the performer to feel the low-frequency vibrations throughout their entire body, making it a highly energetic and physically engaging box-drum tradition.',
  performers: [
    {
      name: 'Mustapha Tettey Addy',
      spotify: 'true',
      apple: 'true'
    },
    {
      name: 'Obo Addy',
      spotify: 'true',
      apple: 'true'
    }
  ],
  songs: [
    {
      name: 'Gome Rhythm Suite',
      artist: 'Mustapha Tettey Addy',
      spotify: 'true',
      apple: 'true'
    }
  ],
  effectsSongs: [
    {
      name: 'Ga Celebration Beats',
      artist: 'Mustapha Tettey Addy',
      desc: 'The deep, heel-modulated Gome hits are processed with dynamic pitch-tracking envelope filters and stereo delay loops, creating a bouncy, electronic-funk groove.',
      url: '',
      platform: 'Spotify'
    }
  ],

  generateSVG: (id, colorType, lugsHtml) => `
    <!-- Heavy bottom shadow -->
            <rect x="2" y="3" width="96" height="96" rx="6" fill="#020617" opacity="0.6" filter="blur(2px)"/>
            
            <!-- Thick wooden frame -->
            <rect x="4" y="4" width="92" height="92" rx="6" fill="url(#skin-${id})" stroke="#1e1b18" stroke-width="4"/>
            
            <!-- Corner brackets/reinforcements -->
            <path d="M 4 20 L 20 4 M 96 20 L 80 4 M 4 80 L 20 96 M 96 80 L 80 96" stroke="#475569" stroke-width="3" opacity="0.8"/>
            
            <!-- Inner square skin head -->
            <rect x="12" y="12" width="76" height="76" rx="4" fill="url(#skin-${id})" filter="brightness(1.1)" stroke="#271305" stroke-width="1.5"/>
            
            <!-- Tuning pegs/screws on the sides -->
            <circle cx="50" cy="8" r="3" fill="url(#chrome-${id})" stroke="#0f172a" stroke-width="0.5"/>
            <circle cx="50" cy="92" r="3" fill="url(#chrome-${id})" stroke="#0f172a" stroke-width="0.5"/>
            <circle cx="8" cy="50" r="3" fill="url(#chrome-${id})" stroke="#0f172a" stroke-width="0.5"/>
            <circle cx="92" cy="50" r="3" fill="url(#chrome-${id})" stroke="#0f172a" stroke-width="0.5"/>
            
            <!-- Ambient 3D lighting cover -->
            <rect x="12" y="12" width="76" height="76" rx="4" fill="url(#overlay-${id})"/>
  `,
  name: 'Gome',
  drums: [
    {
      id: 0,
      label: 'Gome',
      pitchMult: 1,
      color: 'wood',
      sizeValue: 25
    }
  ],
  sounds: {
    palm_bass: (d) => playTablaSlideUp(60 * d.pitchMult, 120 * d.pitchMult, 0.6),
    corner_slap: (d) => playMembrane(130 * d.pitchMult, 0.45, 1.1, false),
    foot_pitch_bend: (d) => {
      playMembrane(220 * d.pitchMult, 0.15, 1.2, true);
      playNoise(0.08, 1500, state.currentTiltVolume * 0.7);
    },
    heel_stamp: (d) => playMembrane(130 * d.pitchMult, 0.45, 1.1, false)
  },
  touches: [
    {
      id: 'palm_bass',
      label: 'Palm bass',
      shortName: 'Palm bass',
      description:
        'Striking the center of the massive square frame-drum head with a flat hand while sitting on top of the instrument'
    },
    {
      id: 'corner_slap',
      label: 'Corner slap',
      shortName: 'Corner slap',
      description:
        'Snapping the fingers against the outer corners where the skin tension is highest to get a sharp accent'
    },
    {
      id: 'foot_pitch_bend',
      label: 'Foot pitch bend',
      shortName: 'Foot pitch bend',
      description:
        'Pressing the heel or toe of the foot firmly into the skin to stretch it and bend the pitch while striking with the hands'
    },
    {
      id: 'heel_stamp',
      label: 'Heel Stamp',
      shortName: 'Heel Stamp',
      description:
        'Stamping the heel of the foot onto the ground while sitting on the drum to ground the internal air cavity and dry out the hand slaps'
    }
  ],
  mappings: {
    left: {
      up: 'palm_bass',
      down: 'corner_slap',
      left: 'foot_pitch_bend',
      right: 'heel_stamp',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'palm_bass'
    },
    right: {
      up: 'palm_bass',
      down: 'corner_slap',
      left: 'foot_pitch_bend',
      right: 'heel_stamp',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'corner_slap'
    }
  }
};
