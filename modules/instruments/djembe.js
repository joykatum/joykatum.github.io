import { playMembrane, playNoise } from '../audio.js';
import { state } from '../state.js';

export const djembe = {
  name: 'Djembe',
  defaultLeft: 0,
  defaultRight: 0,
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
    bass: (d) => playMembrane(45 * d.pitchMult, 0.9, 1.6, false),
    tone: (d) => playMembrane(260 * d.pitchMult, 0.5, 1.0, false),
    slap: (d) => {
      playMembrane(480 * d.pitchMult, 0.1, 1.2, true);
      playNoise(0.05, 2000, state.currentTiltVolume * 1.5);
    },
    flam_roll: (d) => {
      playMembrane(260 * d.pitchMult, 0.1, 1.0, true);
      setTimeout(() => {
        playMembrane(260 * d.pitchMult, 0.12, 1.0, false);
      }, 50);
    },
    rim_click: (d) => {
      playMembrane(800 * d.pitchMult, 0.05, 1.0, true);
      playNoise(0.02, 3500, state.currentTiltVolume);
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
