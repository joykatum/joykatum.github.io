import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const cabasa = {
  origin: 'West Africa / Brazil',
  description:
    "The Cabasa is a popular Latin percussion instrument evolved from the African 'Afoxé' (a bead-wrapped gourd). The modern version consists of a wooden cylinder wrapped in a corrugated metal sheet, surrounded by loops of steel ball chains. The player grasps the metal chains in one hand while twisting the wooden handle with the other, producing dry, metallic, scraping rhythms. Interesting fact: the Cabasa is a staple in salsa, bossa nova, and Latin jazz. It is beloved by studio producers because its crisp, high-frequency transients lock perfectly with hi-hats, adding an organic metallic shimmer to any groove.",
  performers: [
    {
      name: 'Airto Moreira',
      spotify: 'true',
      apple: 'true'
    },
    {
      name: 'Paulinho da Costa',
      spotify: 'true',
      apple: 'true'
    }
  ],
  songs: [
    {
      name: 'Misturada',
      artist: 'Airto Moreira',
      spotify: 'true',
      apple: 'true'
    }
  ],
  effectsSongs: [
    {
      name: 'Bossa Nova Shimmer',
      artist: 'Airto Moreira',
      desc: 'The sharp metal scrapes are treated with high-pass EQ and automatic stereo panning, creating a wide, sparkling percussive element that dances across the speakers.',
      url: '',
      platform: 'Spotify'
    }
  ],

  name: 'Cabasa',
  drums: [
    {
      id: 0,
      label: 'Cabasa',
      pitchMult: 1,
      color: 'silver',
      sizeValue: 16
    }
  ],
  sounds: {
    cylinder_twist: (d) => playNoise(0.12, 1800, state.currentTiltVolume * 1.1),
    hand_tap: (d) => playNoise(0.04, 3200, state.currentTiltVolume * 1.3),
    linear_shaft_tap: (d) => playNoise(0.25, 2000, state.currentTiltVolume * 0.7)
  },
  touches: [
    {
      id: 'cylinder_twist',
      label: 'Cylinder twist',
      shortName: 'Cylinder twist',
      description:
        'Pressing the metal bead loops firmly against the textured steel cylinder and rotating the handle quickly back and forth'
    },
    {
      id: 'hand_tap',
      label: 'Hand tap',
      shortName: 'Hand tap',
      description:
        'Striking the hanging steel beads directly against the palm of the non-dominant hand for a tight, staccato metallic rattle'
    },
    {
      id: 'linear_shaft_tap',
      label: 'Linear Shaft Tap',
      shortName: 'Linear Shaft...',
      description:
        'Tapping the solid wooden or plastic handle against the knee while keeping the beads still to create a subtle, woody thud'
    }
  ],
  mappings: {
    left: {
      up: 'cylinder_twist',
      down: 'hand_tap',
      left: 'linear_shaft_tap',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'cylinder_twist'
    },
    right: {
      up: 'cylinder_twist',
      down: 'hand_tap',
      left: 'linear_shaft_tap',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'hand_tap'
    }
  }
};
