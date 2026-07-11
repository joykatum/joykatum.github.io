import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const tamborim = {
  origin: 'Brazil',
  description:
    'The Tamborim is a small, high-pitched Brazilian frame drum played with a flexible plastic stick (baqueta). It is flipped rapidly in the hand, driving the intense, syncopated upper-register loops in samba.',
  performers: [
    {
      name: 'Monobloco Ensemble',
      spotify: 'true',
      apple: 'true'
    }
  ],
  songs: [
    {
      name: 'Samba Tamborim Loops',
      artist: 'Monobloco',
      spotify: 'true',
      apple: 'true'
    }
  ],
  effectsSongs: [
    {
      name: 'High Pitch Baqueta Gate',
      artist: 'Samba School Beats',
      desc: 'Tightly gated compression is applied to the tamborim sticks to ensure the rapid-fire rolls remain clear and sharp over the massive baterias.',
      url: '',
      platform: 'Spotify'
    }
  ],

  name: 'Tamborim',
  drums: [
    {
      id: 0,
      label: 'Tamborim',
      pitchMult: 1,
      color: 'blonde-light',
      sizeValue: 14
    }
  ],
  sounds: {
    toque_aberto: (d) => playMembrane(220 * d.pitchMult, 0.2, 0.8, false),
    virada: (d) => playMembrane(450 * d.pitchMult, 0.08, 0.7, false),
    muted_back_finger_press: (d) => playMembrane(300 * d.pitchMult, 0.05, 0.6, false),
    rim_shot: (d) => {
      playMembrane(580 * d.pitchMult, 0.05, 1.2, true);
      playNoise(0.04, 4000, state.currentTiltVolume * 0.8);
    }
  },
  touches: [
    {
      id: 'toque_aberto',
      label: 'Toque Aberto',
      shortName: 'Toque Aberto',
      description:
        'Striking the plastic head with a flexible plastic split-stick or wooden stick to create a loud, open treble pop'
    },
    {
      id: 'virada',
      label: 'Virada',
      shortName: 'Virada',
      description:
        'Flipping the holding hand upside down 180 degrees to catch alternating up-and-down stick strokes for blindingly fast rolls'
    },
    {
      id: 'muted_back_finger_press',
      label: 'Muted back-finger press',
      shortName: 'Muted back-f...',
      description:
        'Pressing an index finger firmly against the inside of the plastic head while striking to isolate a dry, high click'
    }
  ],
  mappings: {
    left: {
      up: 'toque_aberto',
      down: 'virada',
      left: 'muted_back_finger_press',
      right: 'rim_shot',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'toque_aberto'
    },
    right: {
      up: 'toque_aberto',
      down: 'virada',
      left: 'muted_back_finger_press',
      right: 'rim_shot',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'virada'
    }
  }
};
