import { playMembrane, playNoise } from '../audio.js';
import { state } from '../state.js';
import { playSoundFontSample } from '../sf2Loader.js';

export const djembe = {
  origin: 'West Africa (Manding Empire)',
  description:
    "The djembe is a rope-tuned skin-covered goblet drum played with bare hands. Originating in West Africa (Guinea, Mali, Senegal, Burkina Faso), its name translates to 'everyone gather together in peace.' It is known for producing three distinct sounds: the deep bass (center strike), the singing tone (rim strike), and the sharp, high-pitched slap.",
  performers: [
    {
      name: 'Mamady Keïta',
      spotify: 'true',
      apple: 'true'
    },
    {
      name: 'Babatunde Olatunji',
      spotify: 'true',
      apple: 'true'
    },
    {
      name: 'Famoudou Konaté',
      spotify: 'true',
      apple: 'true'
    }
  ],
  songs: [
    {
      name: 'Jin-Go-Lo-Ba',
      artist: 'Babatunde Olatunji',
      spotify: 'true',
      apple: 'true'
    }
  ],
  effectsSongs: [
    {
      name: 'Tribal Dance',
      artist: 'The Chemical Brothers',
      desc: 'Djembe slaps are processed through high-pass filters and stereo flangers to create a high-energy sweeping effect that propels the electronic groove.',
      url: 'https://open.spotify.com/track/6296NiaAEvY3MOnZunD3s1',
      platform: 'Spotify'
    }
  ],

  name: 'Djembe',
  drums: [
    {
      id: 0,
      label: 'Lead Djembe',
      pitchMult: 1.0,
      color: 'caramel',
      sizeValue: 21
    }
  ],
  sounds: {
    bass: (d, velocity = 0.85) => {
      const success = playSoundFontSample('conga', 'conga bass tone', d.pitchMult * 0.95, velocity);
      if (!success) {
        playMembrane(45 * d.pitchMult, 0.9, 1.6, false, velocity);
      }
    },
    tone: (d, velocity = 0.8) => {
      const success = playSoundFontSample('conga', 'conga tone', d.pitchMult * 1.35, velocity);
      if (!success) {
        playMembrane(260 * d.pitchMult, 0.45, 1.0, false, velocity);
      }
    },
    slap: (d, velocity = 0.95) => {
      const success = playSoundFontSample('conga', 'congaclosedslap', d.pitchMult * 1.3, velocity);
      if (!success) {
        playMembrane(440 * d.pitchMult, 0.12, 1.2, true, velocity);
        playNoise(0.06, 2800, velocity * 1.3, 'highpass');
      }
    },
    flam_roll: (d, velocity = 0.8) => {
      const success = playSoundFontSample('conga', 'conga tone', d.pitchMult * 1.3, velocity * 0.75, -0.15);
      if (success) {
        setTimeout(() => {
          playSoundFontSample('conga', 'conga tone', d.pitchMult * 1.38, velocity * 0.9, 0.15);
        }, 45);
      } else {
        playMembrane(260 * d.pitchMult, 0.12, 1.0, true, velocity * 0.75, -0.15);
        setTimeout(() => {
          playMembrane(275 * d.pitchMult, 0.15, 1.0, false, velocity * 0.9, 0.15);
        }, 45);
      }
    },
    rim_click: (d, velocity = 0.8) => {
      const success = playSoundFontSample('conga', 'conga rim', d.pitchMult * 1.2, velocity);
      if (!success) {
        playMembrane(720 * d.pitchMult, 0.04, 1.0, true, velocity * 0.8);
        playNoise(0.015, 3200, velocity * 0.4, 'highpass');
      }
    }
  },
  generateSVG: (id) => `
    <!-- Heavy bottom shadow -->
    <circle cx="50" cy="51" r="48" fill="#020617" opacity="0.6" filter="blur(2px)"/>
    
    <!-- Thick rope/hide outer ring -->
    <circle cx="50" cy="50" r="47.5" fill="none" stroke="#4a3628" stroke-width="5" stroke-dasharray="2, 6"/>
    
    <!-- Real leather skin -->
    <circle cx="50" cy="50" r="44.8" fill="url(#skin-${id})"/>
    
    <!-- Flesh hoop inner ring -->
    <circle cx="50" cy="50" r="44.2" fill="none" stroke="#1e1b18" stroke-width="1.2" opacity="0.85"/>
    <circle cx="50" cy="50" r="41.5" fill="none" stroke="#ffffff" stroke-width="0.3" opacity="0.15"/>
    
    <!-- Ambient 3D lighting cover -->
    <circle cx="50" cy="50" r="44.8" fill="url(#overlay-${id})"/>
  `
};
