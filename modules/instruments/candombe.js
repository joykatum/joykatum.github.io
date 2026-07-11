import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const candombe = {
  origin: 'Uruguay',
  description:
    'Candombe drums (Chico, Repique, and Piano) form the heartbeat of Afro-Uruguayan music. Played with a stick in one hand and the bare hand on the other, they engage in a rapid dialogue of syncopations and wooden clicks recognized by UNESCO.',
  performers: [
    {
      name: 'Ruben Rada',
      spotify: 'true',
      apple: 'true'
    },
    {
      name: 'Hugo Fattoruso',
      spotify: 'true',
      apple: 'true'
    }
  ],
  songs: [
    {
      name: 'Candombe Para Gardel',
      artist: 'Ruben Rada',
      spotify: 'true',
      apple: 'true'
    }
  ],
  effectsSongs: [
    {
      name: 'Uruguayan Carnival Spacey Slap',
      artist: 'Ruben Rada Ensemble',
      desc: 'Woodblock clicks and shell slaps are treated with a touch of chorus and long delays, placing the traditional carnival street parade in a modern space.',
      url: '',
      platform: 'Spotify'
    }
  ],

  name: 'Candombe',
  defaultLeft: 2,
  defaultRight: 1,
  drums: [
    {
      id: 0,
      label: 'Chico',
      pitchMult: 1.4,
      color: 'blonde-light',
      sizeValue: 16
    },
    {
      id: 1,
      label: 'Repique',
      pitchMult: 1,
      color: 'caramel',
      sizeValue: 19.5
    },
    {
      id: 2,
      label: 'Piano',
      pitchMult: 0.7,
      color: 'dark',
      sizeValue: 23.5
    }
  ],
  sounds: {
    mano: (d, velocity = 0.8) => {
      // Warm hand strike (slap/open/muffled hybrid)
      const f = (d.id === 0 ? 320 : d.id === 1 ? 200 : 120) * d.pitchMult;
      const pan = d.id === 0 ? -0.35 : d.id === 1 ? 0.0 : 0.35;
      const decay = d.id === 2 ? 0.28 : 0.12;
      playMembrane(f, decay, 1.1, true, velocity, pan);
      playNoise(0.04, d.id === 0 ? 2600 : 1600, velocity * 0.4, d.id === 0 ? 'highpass' : 'bandpass');
    },
    palo: (d, velocity = 0.85) => {
      // Sharp, loud stick strike directly on the head. Produces a very bright resonance.
      const f = (d.id === 0 ? 450 : d.id === 1 ? 300 : 160) * d.pitchMult;
      const pan = d.id === 0 ? -0.35 : d.id === 1 ? 0.0 : 0.35;
      const decay = d.id === 2 ? 0.45 : d.id === 1 ? 0.25 : 0.14;
      playMembrane(f, decay, 1.35, false, velocity, pan);
      playAttackClick(0.012, 4200, 0.7 * velocity);
    },
    trigro_madera: (d, velocity = 0.75) => {
      // Wood stick cracking against the wooden barrel body (madera)
      // Highly dry, bright, wooden acoustic block click (approx 620Hz)
      const pan = d.id === 0 ? -0.35 : d.id === 1 ? 0.0 : 0.35;
      playMembrane(620 * d.pitchMult, 0.04, 1.0, true, velocity, pan);
      playAttackClick(0.008, 3500, 0.65 * velocity);
    },
    cu_stave_rake: (d, velocity = 0.7) => {
      // Raspy stick rub/rake across the side seams of the barrel staves
      const pan = d.id === 0 ? -0.35 : d.id === 1 ? 0.0 : 0.35;
      playNoise(0.18, 1250, velocity * 0.8, 'bandpass', 3.0);
    }
  },
  touches: [
    {
      id: 'mano',
      label: 'Mano',
      shortName: 'Mano',
      description: 'Striking the skin with the bare hand using open or muted tones to anchor the syncopated foundation'
    },
    {
      id: 'palo',
      label: 'Palo',
      shortName: 'Palo',
      description: 'Whipping the skin with a wooden stick to produce highly resonant, piercing high-pitched accents'
    },
    {
      id: 'trigro_madera',
      label: 'Trigro / Madera',
      shortName: 'Trigro / Madera',
      description: 'Clicking the shaft of the wooden stick directly against the side staves of the barrel body'
    },
    {
      id: 'cu_stave_rake',
      label: 'Cuá Stave Rake',
      shortName: 'Cuá Stave Rake',
      description:
        'Dragging the wooden stick shaft up and down across the side seams of the barrel staves to create a long, raspy texture'
    }
  ],
  mappings: {
    left: {
      up: 'mano',
      down: 'palo',
      left: 'trigro_madera',
      right: 'cu_stave_rake',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'mano'
    },
    right: {
      up: 'mano',
      down: 'palo',
      left: 'trigro_madera',
      right: 'cu_stave_rake',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'palo'
    }
  }
};
