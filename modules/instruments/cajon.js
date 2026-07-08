import { playMembrane, playNoise } from '../audio.js';
import { state } from '../state.js';

export const cajon = {
  name: 'Cajón',
  defaultLeft: 0,
  defaultRight: 0,
  drums: [
    {
      id: 0,
      label: 'Cajón',
      pitchMult: 1.0,
      color: 'caramel',
      sizeValue: 24
    }
  ],
  sounds: {
    bass_tone: (d) => {
      playMembrane(50 * d.pitchMult, 0.7, 1.5, false); // deep boom
      playNoise(0.02, 500, state.currentTiltVolume * 0.5); // slight snare rattle
    },
    corner_slap: (d) => {
      playMembrane(120 * d.pitchMult, 0.2, 1.0, false);
      playNoise(0.12, 2200, state.currentTiltVolume * 1.2); // strong snare rattle
    },
    high_finger_snap: (d) => {
      playMembrane(50 * d.pitchMult, 0.7, 1.5, false);
      playNoise(0.02, 500, state.currentTiltVolume * 0.5);
    },
    tapado: (d) => playMembrane(250 * d.pitchMult, 0.05, 1.0, false),
    side_knock: (d) => {
      playMembrane(50 * d.pitchMult, 0.7, 1.5, false);
      playNoise(0.02, 500, state.currentTiltVolume * 0.5);
    },
    heel_slide_pitch_bend: (d) => playMembrane(250 * d.pitchMult, 0.05, 1.0, false)
  },
  generateSVG: (id) => {
    // Screws around the front plate
    let screws = '';
    const screwPositions = [
      { x: 10, y: 10 },
      { x: 30, y: 10 },
      { x: 50, y: 10 },
      { x: 70, y: 10 },
      { x: 90, y: 10 },
      { x: 10, y: 30 },
      { x: 90, y: 30 },
      { x: 10, y: 50 },
      { x: 90, y: 50 },
      { x: 10, y: 70 },
      { x: 90, y: 70 },
      { x: 10, y: 90 },
      { x: 30, y: 90 },
      { x: 50, y: 90 },
      { x: 70, y: 90 },
      { x: 90, y: 90 }
    ];
    screwPositions.forEach((pos) => {
      screws += `<circle cx="${pos.x}" cy="${pos.y}" r="1.2" fill="url(#chrome-${id})" stroke="#0f172a" stroke-width="0.3"/>`;
      screws += `<line x1="${pos.x - 0.7}" y1="${pos.y}" x2="${pos.x + 0.7}" y2="${pos.y}" stroke="#475569" stroke-width="0.2"/>`;
    });

    return `
      <!-- Heavy bottom shadow -->
      <rect x="2" y="4" width="96" height="96" rx="8" fill="#020617" opacity="0.65" filter="blur(2.5px)"/>
      
      <!-- Real dark wood body frame (outer sides) -->
      <rect x="4" y="4" width="92" height="92" rx="8" fill="#451a03" stroke="#1c0d02" stroke-width="1.5"/>
      
      <!-- Premium front plate (Tapa) -->
      <rect x="7" y="7" width="86" height="86" rx="5" fill="url(#skin-${id})" stroke="#271305" stroke-width="1"/>
      
      <!-- Elegant wood grain lines -->
      <path d="M 12 12 Q 30 18, 50 12 T 88 15 M 15 35 Q 40 38, 60 32 T 85 35 M 12 65 Q 35 60, 55 68 T 88 62" fill="none" stroke="#271305" stroke-width="0.5" opacity="0.2"/>
      
      <!-- Tapa Screws -->
      ${screws}
      
      <!-- Darker top/bottom shading to give cylindrical/curved depth -->
      <rect x="7" y="7" width="86" height="86" rx="5" fill="url(#overlay-${id})" opacity="0.75"/>
      <rect x="7" y="7" width="86" height="86" rx="5" fill="none" stroke="#ffffff" stroke-width="0.5" opacity="0.1"/>
    `;
  }
};
