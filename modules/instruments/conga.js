import { playMembrane, playNoise } from '../audio.js';
import { playSoundFontSample } from '../sf2Loader.js';

// Helper function to extract stereo panning coordinates based on drum index mapping
// Map ID 0 (Requinto) -> -0.45 (Left), ID 2 (Conga) -> 0.0 (Center), ID 4 (Super Tumba) -> +0.45 (Right)
const getCongaPan = (id) => {
  return (id - 2) * 0.225;
};

export const conga = {
  origin: 'Cuba / Central African Roots',
  description:
    'The conga, also known as the tumbadora, is a tall, narrow, single-headed drum from Cuba. Developed by Afro-Cuban communities from Congolese drum designs, they are critical in salsa, rumba, Afro-Cuban jazz, and Latin rock. Historically played in groups of two or three, they form the rhythmic heartbeat of salsa ensembles.',
  performers: [
    {
      name: 'Giovanni Hidalgo',
      spotify: 'true',
      apple: 'true'
    },
    {
      name: 'Ray Barretto',
      spotify: 'true',
      apple: 'true'
    },
    {
      name: 'Mongo Santamaría',
      spotify: 'true',
      apple: 'true'
    },
    {
      name: 'Poncho Sanchez',
      spotify: 'true',
      apple: 'true'
    }
  ],
  songs: [
    {
      name: 'Watermelon Man',
      artist: 'Mongo Santamaría',
      spotify: 'true',
      apple: 'true'
    },
    {
      name: 'Indestructible',
      artist: 'Ray Barretto',
      spotify: 'true',
      apple: 'true'
    }
  ],
  effectsSongs: [
    {
      name: 'Oye Como Va',
      artist: 'Santana',
      desc: 'The congas are drenched in deep, warm plate reverb and placed wide in the stereo image, blending organically with the swirling Hammond B3 organ and guitar feedback.',
      url: 'https://open.spotify.com/track/5u96ZgqzZ37fv367v7B6Pt',
      platform: 'Spotify'
    },
    {
      name: 'Welcome to the Jam',
      artist: 'Dub Syndicate',
      desc: 'Conga drum strikes are fed into massive tape-delay feedback loops and sweeping low-pass filters, a quintessential technique in spacey dub-reggae production.',
      url: 'https://open.spotify.com/track/0Y4tH9YtP8mBvVqS5gN0Y2',
      platform: 'Spotify'
    }
  ],

  name: 'Congas',
  defaultLeft: 2,
  defaultRight: 3,
  drums: [
    {
      id: 0,
      label: 'Requinto',
      pitchMult: 1.3,
      color: 'caramel',
      sizeValue: 17
    },
    {
      id: 1,
      label: 'Quinto',
      pitchMult: 1.15,
      color: 'blonde-light',
      sizeValue: 18.5
    },
    {
      id: 2,
      label: 'Conga',
      pitchMult: 1.0,
      color: 'blonde',
      sizeValue: 20
    },
    {
      id: 3,
      label: 'Tumba',
      pitchMult: 0.85,
      color: 'darker',
      sizeValue: 21.5
    },
    {
      id: 4,
      label: 'Super Tumba',
      pitchMult: 0.75,
      color: 'dark',
      sizeValue: 23
    }
  ],
  sounds: {
    // 1. Bajo (Bass stroke) - deep resonance, low fundamental
    bajo: (d, velocity = 0.85) => {
      const pan = getCongaPan(d.id);
      const success = playSoundFontSample('conga', 'conga bass tone', d.pitchMult, velocity, pan);
      if (!success) {
        playMembrane(55 * d.pitchMult, 0.95, 1.3, false, velocity, pan);
      }
    },
    // 2. Abierto (Open tone) - clear ringing harmonic bloom excited by velocity
    abierto: (d, velocity = 0.8) => {
      const pan = getCongaPan(d.id);
      const success = playSoundFontSample('conga', 'conga tone', d.pitchMult, velocity, pan);
      if (!success) {
        const dynamicDecay = 0.55 + velocity * 0.15; // Harder hits sustain longer
        playMembrane(110 * d.pitchMult, dynamicDecay, 1.0, false, velocity, pan);

        // High-frequency skin crackle explosion on hard acoustic strikes
        if (velocity > 0.65) {
          playNoise(0.025 * velocity, 3200, velocity * 0.18, 'highpass');
        }
      }
    },
    // 3. Seco (Slap) - hand stays on drum causing rapid pitch shift choke
    seco: (d, velocity = 0.9) => {
      const pan = getCongaPan(d.id);
      const success = playSoundFontSample('conga', 'congaclosedslap', d.pitchMult, velocity, pan);
      if (!success) {
        playMembrane(180 * d.pitchMult, 0.13, 1.1, true, velocity, pan);
      }
    },
    // 4. Tapado (Muted stroke) - damped sound with high hand friction
    tapado: (d, velocity = 0.75) => {
      const pan = getCongaPan(d.id);
      const success = playSoundFontSample('conga', 'congafngmuteslap', d.pitchMult, velocity, pan);
      if (!success) {
        playMembrane(180 * d.pitchMult, 0.07, 1.0, true, velocity, pan);
        playNoise(0.02, 1800, velocity * 0.4, 'bandpass', 2.0);
      }
    },
    // 5. Toque Tapado (Muted touch) - quiet, subtle rhythmic framework hit
    toque_tapado: (d, velocity = 0.35) => {
      const pan = getCongaPan(d.id);
      const success = playSoundFontSample('conga', 'conga mute', d.pitchMult, velocity, pan);
      if (!success) {
        playMembrane(130 * d.pitchMult, 0.05, 1.0, false, velocity, pan);
      }
    },
    // 6. Manoteo (Heel-toe stroke) - soft warm palm low mid-range shuffle
    manoteo: (d, velocity = 0.45) => {
      const pan = getCongaPan(d.id);
      const sampleName = Math.random() > 0.5 ? 'conga heel' : 'conga tip';
      const success = playSoundFontSample('conga', sampleName, d.pitchMult, velocity, pan);
      if (!success) {
        playMembrane(90 * d.pitchMult, 0.12, 1.0, false, velocity, pan);
      }
    },
    // 7. Golpe de Casco (Rim shot / hardware shell contact sound)
    golpe_de_casco: (d, velocity = 0.7) => {
      const pan = getCongaPan(d.id);
      const success = playSoundFontSample('conga', 'conga rim', d.pitchMult, velocity, pan);
      if (!success) {
        playMembrane(400 * d.pitchMult, 0.04, 1.0, false, velocity, pan);
      }
    }
  }
};
