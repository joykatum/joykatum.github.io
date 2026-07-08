import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const timbales = {
  generateSVG: (id, colorType, lugsHtml) => `
    <!-- Heavy bottom shadow -->
            <circle cx="50" cy="51" r="48" fill="#020617" opacity="0.6" filter="blur(2px)"/>
            
            <!-- Thin metallic outer hoop -->
            <circle cx="50" cy="50" r="47.5" fill="none" stroke="url(#chrome-${id})" stroke-width="3"/>
            <circle cx="50" cy="50" r="46" fill="none" stroke="#0f172a" stroke-width="0.5"/>
            
            <!-- Plastic/Synthetic skin (more bright) -->
            <circle cx="50" cy="50" r="45.5" fill="url(#skin-${id})" filter="brightness(1.2)"/>
            
            <!-- Flesh hoop inner ring -->
            <circle cx="50" cy="50" r="44.2" fill="none" stroke="#1e1b18" stroke-width="0.8" opacity="0.7"/>
            <circle cx="50" cy="50" r="41.5" fill="none" stroke="#ffffff" stroke-width="0.5" opacity="0.3"/>
            
            <!-- Ambient 3D lighting cover -->
            <circle cx="50" cy="50" r="45.5" fill="url(#overlay-${id})"/>
            
            <!-- Elegant Chrome Lugs -->
            ${lugsHtml}
  `,
  name: 'Timbales',
  defaultLeft: 0,
  defaultRight: 1,
  drums: [
    {
      id: 0,
      label: 'Macho',
      pitchMult: 1.2,
      color: 'blonde-light',
      sizeValue: 18
    },
    {
      id: 1,
      label: 'Hembra',
      pitchMult: 0.85,
      color: 'blonde',
      sizeValue: 22
    }
  ],
  sounds: {
    timbales_open: (d) => playMembrane((d.id === 0 ? 320 : 210) * d.pitchMult, 0.4, 1.0, false),
    rimshot: (d) => {
      playMembrane((d.id === 0 ? 450 : 300) * d.pitchMult, 0.1, 1.1, true);
      playNoise(0.08, d.id === 0 ? 2500 : 2000, state.currentTiltVolume * 1.1);
    },
    paila: (d) => {
      playMembrane(800 * d.pitchMult, 0.05, 1.0, false);
      playNoise(0.03, 3500, state.currentTiltVolume * 0.5);
    },
    timbales_muff: (d) => playMembrane((d.id === 0 ? 350 : 250) * d.pitchMult, 0.1, 1.0, false),
    bell: (d) => {
      playMembrane(1200 * d.pitchMult, 0.15, 1.0, false); // synthetic cowbell ping
      playNoise(0.05, 4000, state.currentTiltVolume * 0.6);
    }
  },
  touches: [
    {
      id: 'timbales_open',
      label: 'Open',
      shortName: 'Open',
      description:
        'Striking near the edge or rim of the Timbales and allowing the head or body to rebound freely for a clear, resonant open tone.'
    },
    {
      id: 'rimshot',
      label: 'Rimshot',
      shortName: 'Rimshot',
      description:
        'A sharp, rapid strike with slightly cupped fingertips near the rim of the Timbales to produce an explosive, high-pitched cracking sound.'
    },
    {
      id: 'paila',
      label: 'Paila',
      shortName: 'Paila',
      description:
        'Beating the metal shells or sides of the timbales directly with the stick to create a dry, metallic "click" rhythmic pattern.'
    },
    {
      id: 'timbales_muff',
      label: 'Muff',
      shortName: 'Muff',
      description:
        'Striking the Timbales while keeping the other hand or fingers pressed against the skin to deaden resonance and yield a short, closed pop.'
    },
    {
      id: 'bell',
      label: 'Bell',
      shortName: 'Bell',
      description: 'Striking the cowbell or block mounted on the stand for a bright, high-pitched metallic clank.'
    }
  ],
  mappings: {
    left: {
      up: 'timbales_open',
      down: 'rimshot',
      left: 'paila',
      right: 'timbales_muff',
      upLong: 'bell',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'timbales_open'
    },
    right: {
      up: 'timbales_open',
      down: 'rimshot',
      left: 'paila',
      right: 'timbales_muff',
      upLong: 'bell',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'rimshot'
    }
  }
};
