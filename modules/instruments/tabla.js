import { playMembrane, playTablaSlideUp, playAttackClick } from '../audio.js';

export const tabla = {
  name: 'Tabla',
  defaultLeft: 0, // Bayan
  defaultRight: 1, // Dayan
  drums: [
    {
      id: 0,
      label: 'Bayan',
      pitchMult: 1.0,
      color: 'dark',
      sizeValue: 21
    },
    {
      id: 1,
      label: 'Dayan',
      pitchMult: 1.0,
      color: 'caramel-light',
      sizeValue: 17
    }
  ],
  sounds: {
    dayan_na_ta: (d, velocity = 0.8) => {
      const pan = d.id === 0 ? -0.35 : 0.35;
      playMembrane(350 * d.pitchMult, 0.3, 1.1, true, velocity, pan); // Sharp, ringing edge stroke
      playAttackClick(0.01, 3500, 0.3 * velocity);
    },
    dayan_tin: (d, velocity = 0.75) => {
      const pan = d.id === 0 ? -0.35 : 0.35;
      playMembrane(400 * d.pitchMult, 0.12, 1.1, true, velocity, pan);
      playAttackClick(0.008, 4000, 0.25 * velocity);
    },
    dayan_tun: (d, velocity = 0.85) => {
      const pan = d.id === 0 ? -0.35 : 0.35;
      playMembrane(280 * d.pitchMult, 0.45, 1.4, false, velocity, pan); // Resonant center stroke
    },
    bayan_ga_ghe: (d, velocity = 0.9) => {
      const pan = d.id === 0 ? -0.35 : 0.35;
      playTablaSlideUp(65 * d.pitchMult, 125 * d.pitchMult, 0.75, velocity, pan); // Deep sliding bass
    },
    bayan_ka_ke: (d, velocity = 0.8) => {
      const pan = d.id === 0 ? -0.35 : 0.35;
      playMembrane(140 * d.pitchMult, 0.12, 1.0, false, velocity, pan); // Flat non-resonant bass slap
    }
  },
  generateSVG: (id) => `
    <!-- Heavy bottom shadow -->
    <circle cx="50" cy="51.5" r="48" fill="#020617" opacity="0.6" filter="blur(2px)"/>
    
    <!-- Braided outer leather ring (gajra) -->
    <circle cx="50" cy="50" r="48" fill="none" stroke="#5c4033" stroke-width="4" stroke-dasharray="2 3"/>
    
    <!-- Inner skin -->
    <circle cx="50" cy="50" r="46" fill="url(#skin-${id})"/>
    
    <!-- Maidān / Sur boundary ring -->
    <circle cx="50" cy="50" r="30" fill="none" stroke="#271305" stroke-width="1" opacity="0.4"/>
    
    <!-- Central black tuning paste (syahi) -->
    <circle cx="50" cy="50" r="18" fill="#0c0a09" stroke="#1c1917" stroke-width="1.5" filter="drop-shadow(0 1px 1px rgba(0,0,0,0.5))"/>
    <circle cx="48" cy="48" r="16.5" fill="none" stroke="#292524" stroke-width="0.8" opacity="0.6"/>
    
    <!-- Ambient 3D lighting cover -->
    <circle cx="50" cy="50" r="46" fill="url(#overlay-${id})" opacity="0.7"/>
  `
};
