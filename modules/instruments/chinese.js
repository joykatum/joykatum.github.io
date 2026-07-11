import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const chinese = {
  origin: 'China',
  description:
    'Chinese drums comprise the massive, deep-toned Dagu (great drum) and the barrel-shaped Tanggu. Played with heavy wooden sticks, they deliver majestic, thunderous beats traditionally used in festivals, temple rituals, and opera.',
  performers: [
    {
      name: 'Zhao Cong',
      spotify: 'true',
      apple: 'true'
    }
  ],
  songs: [
    {
      name: 'Festive Drumming',
      artist: 'Zhao Cong',
      spotify: 'true',
      apple: 'true'
    }
  ],
  effectsSongs: [
    {
      name: 'Temple Drum Giant Reverb',
      artist: 'Beijing Folk Ensemble',
      desc: 'The massive decay of the Dagu is amplified using sub-frequency harmonic enhancers, shaking the room with every strike.',
      url: '',
      platform: 'Spotify'
    }
  ],

  name: 'Dagu & Tanggu',
  defaultLeft: 2,
  defaultRight: 1,
  drums: [
    {
      id: 0,
      label: 'Bangu',
      pitchMult: 1.6,
      color: 'caramel-light',
      sizeValue: 14
    },
    {
      id: 1,
      label: 'Tanggu',
      pitchMult: 1,
      color: 'caramel',
      sizeValue: 19.5
    },
    {
      id: 2,
      label: 'Dagu',
      pitchMult: 0.65,
      color: 'dark',
      sizeValue: 25.5
    }
  ],
  sounds: {
    center_strike: (d) => {
      const baseId = parseInt(d.id);
      if (baseId === 0) {
        playMembrane(850 * d.pitchMult, 0.05, 0.7, false);
        playNoise(0.05, 4500, state.currentTiltVolume * 0.5);
      } else if (baseId === 1) {
        playMembrane(110 * d.pitchMult, 0.6, 1.2, false);
      } else {
        playMembrane(45 * d.pitchMult, 0.95, 2.0, false);
      }
    },
    glancing_blow: (d) => {
      const baseId = parseInt(d.id);
      if (baseId === 0) {
        playMembrane(750 * d.pitchMult, 0.06, 0.8, false);
      } else if (baseId === 1) {
        playMembrane(140 * d.pitchMult, 0.1, 1.0, false);
      } else {
        playMembrane(70 * d.pitchMult, 0.3, 1.2, false);
      }
    },
    aro: (d) => {
      const baseId = parseInt(d.id);
      if (baseId === 0) {
        playMembrane(950 * d.pitchMult, 0.04, 0.6, false);
      } else if (baseId === 1) {
        playMembrane(180 * d.pitchMult, 0.5, 1.0, false);
      } else {
        playMembrane(55 * d.pitchMult, 0.85, 1.6, false);
      }
    },
    stick_shaft_clack: (d) => {
      const baseId = parseInt(d.id);
      if (baseId === 0) {
        playMembrane(1100 * d.pitchMult, 0.03, 0.5, true);
      } else if (baseId === 1) {
        playMembrane(550 * d.pitchMult, 0.05, 0.8, true);
        playNoise(0.06, 3500, state.currentTiltVolume * 0.8);
      } else {
        playMembrane(150 * d.pitchMult, 0.15, 1.2, true);
        playNoise(0.12, 1200, state.currentTiltVolume * 1.1);
      }
    }
  },
  touches: [
    {
      id: 'center_strike',
      label: 'Center strike',
      shortName: 'Center strike',
      description:
        'A piercing, high-tension wood-and-skin crack delivered to the center using thick, tapered wooden sticks'
    },
    {
      id: 'glancing_blow',
      label: 'Glancing blow',
      shortName: 'Glancing blow',
      description: 'Striking the head at an angled, slicing trajectory to create a short, compressed, muted pop'
    },
    {
      id: 'aro',
      label: 'Aro',
      shortName: 'Aro',
      description: 'Beating the heavy, solid wooden outer frame or shell to produce a dry, dense clacking sound'
    },
    {
      id: 'stick_shaft_clack',
      label: 'Stick-Shaft Clack',
      shortName: 'Stick-Shaft ...',
      description:
        'Striking the thick wooden shafts of the two tapered sticks together directly over the drumhead as a sharp signaling device'
    }
  ],
  mappings: {
    left: {
      up: 'center_strike',
      down: 'glancing_blow',
      left: 'aro',
      right: 'stick_shaft_clack',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'center_strike'
    },
    right: {
      up: 'center_strike',
      down: 'glancing_blow',
      left: 'aro',
      right: 'stick_shaft_clack',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'glancing_blow'
    }
  }
};
