import { state } from '../state.js';
import { playBell, playMembrane, playNoise, playAttackClick, speakPhrase, playWavSample } from '../audio.js';

export const bell_tree = {
  origin: 'Europe / Modern Studio Percussion',
  description:
    'The Bell Tree consists of a vertical pole lined with a stack of nested, bowl-shaped brass bells of graduated sizes. Striking or sweeping a metal rod up and down the stack produces a dazzling, high-frequency cascading brass chime. Interesting fact: it was originally designed to perform bell parts in early orchestral music, but quickly became a staple in 1970s soul, funk, and cinematic soundtracks. Its shimmering sweeps are often used to mark key moments of transition or magical revelations in commercial arrangements.',
  performers: [
    {
      name: 'Emil Richards',
      spotify: 'true',
      apple: 'true'
    },
    {
      name: 'Steve Weiss',
      spotify: 'true',
      apple: 'true'
    }
  ],
  songs: [
    {
      name: 'Cascading Brass Sweeps',
      artist: 'Emil Richards',
      spotify: 'true',
      apple: 'true'
    }
  ],
  effectsSongs: [
    {
      name: 'Golden Cascade',
      artist: 'Emil Richards',
      desc: 'The high-pitched brass shimmers are enhanced with stereo exciter filters and a slow, deep flanger, creating a glistening curtain of metallic sound.',
      url: '',
      platform: 'Spotify'
    }
  ],
  name: 'Bell Tree',
  drums: [
    {
      id: 0,
      label: 'Bell Tree',
      pitchMult: 1,
      color: 'gold',
      sizeValue: 21
    }
  ],
  sounds: {
    glissando_sweep: (d) => {
      const success = playWavSample('/media/bell_tree_sweep.wav', d.pitchMult, 1.0, 0.0);
      if (!success) {
        // Fallback rapid sequence of bells to simulate a sweep
        const numBells = 24;
        const sweepDurationMs = 800; // ms
        const startFreq = 2500;
        const endFreq = 6500;

        for (let i = 0; i < numBells; i++) {
          const timeOffset = (i / numBells) * sweepDurationMs;
          const progress = i / numBells;
          // Exponential frequency sweep
          const freq = startFreq * Math.pow(endFreq / startFreq, progress) * d.pitchMult;

          setTimeout(() => {
            playBell(freq, 0.4 + Math.random() * 0.2, 0.6 + Math.random() * 0.3, (Math.random() - 0.5) * 0.5);
          }, timeOffset);
        }
      }
    },
    single_bell_tap: (d) => {
      playBell(4200 * d.pitchMult, 1.2, 1.0, 0);
    }
  },
  touches: [
    {
      id: 'glissando_sweep',
      label: 'Glissando sweep',
      shortName: 'Glissando sweep',
      description:
        'Sliding a metal wand down or up the nested stack of graduated brass bells to create a bright, cascading shimmer'
    },
    {
      id: 'single_bell_tap',
      label: 'Single Bell Tap',
      shortName: 'Single Bell Tap',
      description:
        'Using a hard metal triangle beater to strike just one specific brass bell in the nested stack to isolate a single, pure chime note'
    }
  ],
  mappings: {
    left: {
      up: 'glissando_sweep',
      down: 'single_bell_tap',
      left: '',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'glissando_sweep'
    },
    right: {
      up: 'glissando_sweep',
      down: 'single_bell_tap',
      left: '',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'single_bell_tap'
    }
  }
};
