import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const angklung = {
  origin: 'Indonesia (Sundanese Culture)',
  description:
    'The Angklung is an Indonesian musical instrument made of two or more bamboo tubes suspended on a bamboo frame. The tubes are carefully carved to resonate at specific octaves. Shaking the frame horizontally causes the tubes to strike the base and rattle, producing a warm, woody, resonant, ringing tone. Interesting fact: the Angklung has been played for over a thousand years and is recognized by UNESCO as Intangible Cultural Heritage. Traditionally played to honor the rice goddess Dewi Sri, modern Angklung orchestras feature hundreds of players, each shaking a single pitched frame to perform complex symphonic melodies together.',
  performers: [
    {
      name: 'Daeng Soetigna',
      spotify: 'true',
      apple: 'true'
    },
    {
      name: 'Saung Angklung Udjo',
      spotify: 'true',
      apple: 'true'
    }
  ],
  songs: [
    {
      name: 'Angklung Symphony',
      artist: 'Daeng Soetigna',
      spotify: 'true',
      apple: 'true'
    }
  ],
  effectsSongs: [
    {
      name: 'Sunda Bamboo Rhythms',
      artist: 'Daeng Soetigna',
      desc: 'The woody bamboo rattles are processed through a warm room simulator and subtle stereo tremolo, emphasizing the lush, natural rattle of the bamboo.',
      url: '',
      platform: 'Spotify'
    }
  ],

  name: 'Angklung',
  defaultRight: 2,
  drums: [
    {
      id: 0,
      label: 'Low Bamboo',
      pitchMult: 1,
      color: 'wood',
      sizeValue: 20
    },
    {
      id: 1,
      label: 'Mid Bamboo',
      pitchMult: 1.25,
      color: 'wood-medium',
      sizeValue: 17
    },
    {
      id: 2,
      label: 'High Bamboo',
      pitchMult: 1.5,
      color: 'wood-light',
      sizeValue: 14
    }
  ],
  sounds: {
    sentak: (d) => {
      playMembrane((d.id === 0 ? 440 : d.id === 1 ? 554 : 660) * d.pitchMult, 0.3, 1.0, true);
      playNoise(0.2, 1800, state.currentTiltVolume * 0.8);
    },
    geter: (d) => {
      playMembrane((d.id === 0 ? 440 : d.id === 1 ? 554 : 660) * d.pitchMult, 0.3, 1.0, true);
      playNoise(0.2, 1800, state.currentTiltVolume * 0.8);
    },
    frame_knock: (d) => playMembrane((d.id === 0 ? 220 : d.id === 1 ? 277 : 330) * d.pitchMult, 0.08, 1.0, false)
  },
  touches: [
    {
      id: 'sentak',
      label: 'Sentak',
      shortName: 'Sentak',
      description:
        'A sudden, single horizontal jerk causing the loose bamboo tubes to hit the frame once for a staccato pop'
    },
    {
      id: 'geter',
      label: 'Geter',
      shortName: 'Geter',
      description:
        'Rapid, continuous shaking allowing the tubes to slide within the frame slots for a sustained chordal chime'
    },
    {
      id: 'frame_knock',
      label: 'Frame Knock',
      shortName: 'Frame Knock',
      description:
        'Tapping the solid horizontal bamboo base frame with a hard stick to produce a dry, woody pop completely separate from the tube chimes'
    }
  ],
  mappings: {
    left: {
      up: 'sentak',
      down: 'geter',
      left: 'frame_knock',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'sentak'
    },
    right: {
      up: 'sentak',
      down: 'geter',
      left: 'frame_knock',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'geter'
    }
  }
};
