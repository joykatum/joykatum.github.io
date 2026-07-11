import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const ratchet = {
  origin: 'Europe (Classical Concert Tradition)',
  description:
    "The Ratchet is a wooden or metal gear-and-spring noise maker. Swinging its handle causes a flexible wooden slat to scrape over the gear teeth in rapid succession, generating a loud, continuous, mechanical crackling noise. Interesting fact: historically used as danger warnings on ships and in medieval cities, it was integrated into classical music by composers like Richard Strauss in 'Till Eulenspiegel'. It provides an energetic, mechanical clatter used to signify frantic comedic tension, alarm, or chaotic percussive details in modern cinematic scoring.",
  performers: [
    {
      name: 'Evelyn Glennie',
      spotify: 'true',
      apple: 'true'
    }
  ],
  songs: [
    {
      name: 'Mechanical Clatter Suite',
      artist: 'Evelyn Glennie',
      spotify: 'true',
      apple: 'true'
    }
  ],
  effectsSongs: [
    {
      name: 'Strauss Clatter',
      artist: 'Evelyn Glennie',
      desc: 'The intense wooden clicks are treated with high-frequency saturation and bitcrushing, transforming the organic gear rattle into a gritty, lo-fi mechanical loop.',
      url: '',
      platform: 'Spotify'
    }
  ],

  name: 'Ratchet',
  drums: [
    {
      id: 0,
      label: 'Ratchet',
      pitchMult: 1,
      color: 'wood',
      sizeValue: 16
    }
  ],
  sounds: {
    crank_spin_snap: (d) => playNoise(0.2, 1400, state.currentTiltVolume * 1.1),
    slow_crank_creak: (d) => playNoise(0.2, 1400, state.currentTiltVolume * 1.1)
  },
  touches: [
    {
      id: 'crank_spin_snap',
      label: 'Crank spin snap',
      shortName: 'Crank spin snap',
      description:
        'Swinging or cranking the handle around a geared wheel, forcing rigid wooden flaps to loudly snap over the gear teeth'
    },
    {
      id: 'slow_crank_creak',
      label: 'Slow Crank Creak',
      shortName: 'Slow Crank C...',
      description:
        'Turning the handle ultra-slowly to let the wooden flaps click over individual gear teeth, producing a sparse, creaking wooden texture'
    }
  ],
  mappings: {
    left: {
      up: 'crank_spin_snap',
      down: 'slow_crank_creak',
      left: '',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'crank_spin_snap'
    },
    right: {
      up: 'crank_spin_snap',
      down: 'slow_crank_creak',
      left: '',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'slow_crank_creak'
    }
  }
};
