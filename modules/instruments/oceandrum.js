import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const oceandrum = {
  origin: 'Global / Sound Therapy',
  description:
    'The Ocean Drum is a double-headed frame drum containing small metal beads. By tilting the drum slowly, the beads roll over the skin, perfectly mimicking the soothing, washing sound of ocean waves.',
  performers: [
    {
      name: 'Wah!',
      spotify: 'true',
      apple: 'true'
    }
  ],
  songs: [
    {
      name: 'Ocean Meditation',
      artist: 'Wah!',
      spotify: 'true',
      apple: 'true'
    }
  ],
  effectsSongs: [
    {
      name: 'Ambient Sea Wash Filter',
      artist: 'Sound Healing Project',
      desc: 'A slow-sweeping lowpass filter is applied to the bead rolling noise, intensifying the sensation of receding tides.',
      url: '',
      platform: 'Spotify'
    }
  ],

  name: 'Ocean Drum',
  drums: [
    {
      id: 0,
      label: 'Ocean Drum',
      pitchMult: 1,
      color: 'blonde-light',
      sizeValue: 21.5
    }
  ],
  sounds: {
    rolling_swirl: (d) => playNoise(0.55, 950, state.currentTiltVolume * 0.75),
    frame_tap: (d) => playMembrane(220 * d.pitchMult, 0.08, 1.0, true),
    sudden_frame_tilt: (d) => {
      playMembrane(95 * d.pitchMult, 0.65, 1.35, false);
      playNoise(0.14, 1100, state.currentTiltVolume * 0.45);
    },
    bead_shake_shimmer: (d) => playNoise(0.2, 4500, state.currentTiltVolume * 0.6)
  },
  touches: [
    {
      id: 'rolling_swirl',
      label: 'Rolling swirl',
      shortName: 'Rolling swirl',
      description:
        'Tilting the drum in a slow, circular motion to roll hundreds of metal beads smoothly across the internal membrane'
    },
    {
      id: 'frame_tap',
      label: 'Frame tap',
      shortName: 'Frame tap',
      description: 'Executing sharp fingertip strikes directly on the head while keeping the beads settled and quiet'
    },
    {
      id: 'sudden_frame_tilt',
      label: 'Sudden Frame Tilt',
      shortName: 'Sudden Frame...',
      description:
        'Snapping the drum vertically so all the internal metal beads slam into the wooden side walls at once for a loud, abrasive crash'
    }
  ],
  mappings: {
    left: {
      up: 'rolling_swirl',
      down: 'frame_tap',
      left: 'sudden_frame_tilt',
      right: 'bead_shake_shimmer',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'rolling_swirl'
    },
    right: {
      up: 'rolling_swirl',
      down: 'frame_tap',
      left: 'sudden_frame_tilt',
      right: 'bead_shake_shimmer',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'frame_tap'
    }
  }
};
