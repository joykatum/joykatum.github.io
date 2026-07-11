import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const chocalho = {
  origin: 'Brazil (Samba Carnaval Tradition)',
  description:
    'The Chocalho is a high-octane Brazilian metal shaker consisting of an aluminum frame lined with several rows of small, loose metal jingles (called platinelas). Held with both hands and shaken with a rapid, piston-like horizontal motion, it produces a piercing, wall-of-sound metallic clatter. Interesting fact: it is the primary instrument responsible for maintaining the driving upper frequencies of Rio Carnival samba schools. Because its acoustic volume is so intense, it easily cuts through hundreds of booming bass drums, driving the energy of dancers in crowded parades.',
  performers: [
    {
      name: 'Mestre Marçal',
      spotify: 'true',
      apple: 'true'
    },
    {
      name: 'Carlinhos Brown',
      spotify: 'true',
      apple: 'true'
    }
  ],
  songs: [
    {
      name: 'Samba de Enredo Percussion',
      artist: 'Mestre Marçal',
      spotify: 'true',
      apple: 'true'
    }
  ],
  effectsSongs: [
    {
      name: 'Carnaval Beats',
      artist: 'Mestre Marçal',
      desc: 'The bright clatter is treated with stereo flangers and brickwall limiters to create a continuous, sparkling percussive sheen that sits beautifully above deep bass elements.',
      url: '',
      platform: 'Spotify'
    }
  ],

  name: 'Chocalho',
  drums: [
    {
      id: 0,
      label: 'Chocalho',
      pitchMult: 1,
      color: 'silver',
      sizeValue: 18
    }
  ],
  sounds: {
    linear_shake: (d) => playNoise(0.18, 1800, state.currentTiltVolume * 1.2),
    accented_whip: (d) => playNoise(0.1, 2400, state.currentTiltVolume * 0.8)
  },
  touches: [
    {
      id: 'linear_shake',
      label: 'Linear shake',
      shortName: 'Linear shake',
      description:
        'Pushing and pulling the frame back and forth in rapid linear motions to shake the rows of aluminum jingles'
    },
    {
      id: 'accented_whip',
      label: 'Accented whip',
      shortName: 'Accented whip',
      description:
        'A sudden, sweeping downward or snapping arc motion to force all the jingles to crash at once for a wall of sound'
    }
  ],
  mappings: {
    left: {
      up: 'linear_shake',
      down: 'accented_whip',
      left: '',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'linear_shake'
    },
    right: {
      up: 'linear_shake',
      down: 'accented_whip',
      left: '',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'accented_whip'
    }
  }
};
