import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const waterphone = {
  origin: 'USA / Sound Therapy',
  description:
    'The Waterphone is a stainless steel basin containing water with a bronze rod neck and several metal rods. Played with a bow or mallet, tilting the basin causes the water to shift, modulating eerie, haunting, sci-fi echoes.',
  performers: [
    {
      name: 'Richard Waters',
      spotify: 'true',
      apple: 'true'
    }
  ],
  songs: [
    {
      name: 'The Matrix Soundscapes',
      artist: 'Richard Waters',
      spotify: 'true',
      apple: 'true'
    }
  ],
  effectsSongs: [
    {
      name: 'Sci-Fi Haunted Space Echo',
      artist: 'Cinematic Foley Project',
      desc: 'The haunting metal resonance is fed into a extreme-sized space reverb with feedback loops, evoking a sense of deep void.',
      url: '',
      platform: 'Spotify'
    }
  ],

  name: 'Waterphone',
  drums: [
    {
      id: 0,
      label: 'Ethereal Basin',
      pitchMult: 1,
      color: 'aquamarine',
      sizeValue: 22
    }
  ],
  sounds: {
    cello_rod_bow_stroke: (d) => playTablaSlideUp(280 * d.pitchMult, 580 * d.pitchMult, 1.5),
    rod_mallet_tap: (d) => playTablaSlideUp(280 * d.pitchMult, 580 * d.pitchMult, 1.5),
    basin_tilt_water_shift: (d) => playTablaSlideUp(280 * d.pitchMult, 580 * d.pitchMult, 1.5),
    bottom_basin_hand_slap: (d) => {
      playMembrane(900 * d.pitchMult, 1.4, 0.9, true);
      playNoise(1.2, 4500, state.currentTiltVolume * 0.75);
    }
  },
  touches: [
    {
      id: 'cello_rod_bow_stroke',
      label: 'Cello rod bow stroke',
      shortName: 'Cello rod bo...',
      description:
        'Drawing a cello bow across the outer bronze rods while tilting the basin to move water inside for shifting, eerie echoes'
    },
    {
      id: 'rod_mallet_tap',
      label: 'Rod mallet tap',
      shortName: 'Rod mallet tap',
      description: 'Tapping the individual bronze rods with a hard mallet to create sustained, metallic bell tones'
    },
    {
      id: 'basin_tilt_water_shift',
      label: 'Basin tilt water shift',
      shortName: 'Basin tilt w...',
      description:
        'Swirling the water inside the stainless steel basin after playing to dynamically bend the pitch of the lingering harmonics'
    },
    {
      id: 'bottom_basin_hand_slap',
      label: 'Bottom Basin Hand Slap',
      shortName: 'Bottom Basin...',
      description:
        'Slapping the flat bottom of the stainless steel water reservoir with an open palm to create a deep, underwater acoustic thud'
    }
  ],
  mappings: {
    left: {
      up: 'cello_rod_bow_stroke',
      down: 'rod_mallet_tap',
      left: 'basin_tilt_water_shift',
      right: 'bottom_basin_hand_slap',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'cello_rod_bow_stroke'
    },
    right: {
      up: 'cello_rod_bow_stroke',
      down: 'rod_mallet_tap',
      left: 'basin_tilt_water_shift',
      right: 'bottom_basin_hand_slap',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'rod_mallet_tap'
    }
  }
};
