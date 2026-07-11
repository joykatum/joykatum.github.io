import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const mouth_tube_synth = {
  generateSVG: (id, colorType, lugsHtml) => `
    <!-- Heavy bottom shadow -->
            <rect x="18" y="74" width="64" height="12" rx="4" fill="#020617" opacity="0.7" filter="blur(3.5px)"/>
            
            <!-- Glowing Electronic Synth Chassis -->
            <rect x="20" y="24" width="60" height="52" rx="8" fill="#1e1b4b" stroke="#312e81" stroke-width="2" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.4))"/>
            <rect x="22" y="26" width="56" height="48" rx="6" fill="none" stroke="#38bdf8" stroke-width="0.8" opacity="0.5"/>
            
            <!-- Glowing Neon LEDs -->
            <circle cx="28" cy="34" r="2.2" fill="#f43f5e" filter="drop-shadow(0 0 4px #f43f5e)"/>
            <circle cx="36" cy="34" r="2.2" fill="#10b981" filter="drop-shadow(0 0 4px #10b981)"/>
            
            <!-- Graphic Equalizer glowing lines -->
            <rect x="44" y="30" width="3" height="10" fill="#38bdf8" filter="drop-shadow(0 0 2px #38bdf8)"/>
            <rect x="49" y="28" width="3" height="12" fill="#38bdf8" filter="drop-shadow(0 0 2px #38bdf8)"/>
            <rect x="54" y="32" width="3" height="8" fill="#38bdf8" filter="drop-shadow(0 0 2px #38bdf8)"/>
            <rect x="59" y="26" width="3" height="14" fill="#38bdf8" filter="drop-shadow(0 0 2px #38bdf8)"/>
            
            <!-- Coiled Plastic Synth Mouth Hose exiting to the right -->
            <path d="M 68 56 Q 80 50, 82 40 T 78 28" fill="none" stroke="#2dd4bf" stroke-width="3" stroke-linecap="round" filter="drop-shadow(0 2px 4px rgba(45,212,191,0.5))"/>
            <path d="M 68 56 Q 80 50, 82 40 T 78 28" fill="none" stroke="#ffffff" stroke-width="1" stroke-linecap="round" opacity="0.7"/>
            <circle cx="77" cy="27" r="2" fill="#14b8a6"/>
            
            <!-- Connection Port/Jack -->
            <rect x="64" y="52" width="6" height="8" rx="1" fill="#94a3b8" stroke="#475569" stroke-width="0.8"/>
            <circle cx="67" cy="56" r="1.5" fill="#334155"/>
  `,
  name: '🖲️ Mouth Synth',
  drums: [
    {
      id: 0,
      label: 'Mouth Synth',
      pitchMult: 1,
      color: 'teal',
      sizeValue: 19
    }
  ],
  sounds: {
    wah_vocal: (d) => {
      playTablaSlideUp(120 * d.pitchMult, 180 * d.pitchMult, 0.22);
      playNoise(0.1, 1500, 0.25 * state.currentTiltVolume);
      speakPhrase('wah', 0.7, 1.2, 0.85);
    },
    ooh_vocal: (d) => {
      playMembrane(110 * d.pitchMult, 0.32, 1.0);
      speakPhrase('ooh', 0.6, 1.0, 0.85);
    },
    ee_vocal: (d) => {
      playMembrane(330 * d.pitchMult, 0.28, 1.0, true);
      speakPhrase('ee', 1.2, 1.2, 0.85);
    },
    plastic_hose_spit_pop: (d) => playAttackClick(0.012, 3800, 0.75 * state.currentTiltVolume),
    synth_carrier_buzz: (d) => {
      playMembrane(220 * d.pitchMult, 0.12, 1.0);
      playNoise(0.06, 2500, 0.4 * state.currentTiltVolume);
    },
    vocalized_fry: (d) => {
      playNoise(0.18, 600, 0.6 * state.currentTiltVolume);
      playMembrane(55 * d.pitchMult, 0.1, 1.1);
    },
    throat_choke_stop: (d) => playMembrane(180 * d.pitchMult, 0.03, 1.0, true),
    formant_glide: (d) => playTablaSlideUp(110 * d.pitchMult, 330 * d.pitchMult, 0.38)
  },
  touches: [
    {
      id: 'wah_vocal',
      label: '"Wah"',
      shortName: 'Wah',
      description: 'The raw, expressive, throat-like open-vowel sub-bass thud'
    },
    {
      id: 'ooh_vocal',
      label: '"Ooh"',
      shortName: 'Ooh',
      description: 'The dark, enclosed, resonant low-frequency tube tone'
    },
    {
      id: 'ee_vocal',
      label: '"Ee"',
      shortName: 'Ee',
      description: 'The bright, nasal, high-harmonic electronic filter peak'
    },
    {
      id: 'plastic_hose_spit_pop',
      label: 'Spit-Pop',
      shortName: 'Pop',
      description: 'The dry, clicky pop of air pocket condensation in the tube'
    },
    {
      id: 'synth_carrier_buzz',
      label: 'Carrier Buzz',
      shortName: 'Buzz',
      description: 'A short, raw burst of the un-modulated synthesizer carrier'
    },
    {
      id: 'vocalized_fry',
      label: 'Vocalized Fry',
      shortName: 'Fry',
      description: 'A crackling, low-register guttural glitch sound'
    },
    {
      id: 'throat_choke_stop',
      label: 'Throat Choke Stop',
      shortName: 'Choke',
      description: 'Suddenly pinching the tube shut to cut the synth signal dead'
    },
    {
      id: 'formant_glide',
      label: 'Formant Glide',
      shortName: 'Glide',
      description: 'A rapid, sweeping vocal filter run from "Ooh" to "Ee"'
    }
  ],
  mappings: {
    left: {
      up: 'wah_vocal',
      down: 'ooh_vocal',
      left: 'ee_vocal',
      right: 'plastic_hose_spit_pop',
      upLong: 'synth_carrier_buzz',
      downLong: 'vocalized_fry',
      leftLong: 'throat_choke_stop',
      rightLong: 'formant_glide',
      trigger: 'wah_vocal'
    },
    right: {
      up: 'wah_vocal',
      down: 'ooh_vocal',
      left: 'ee_vocal',
      right: 'plastic_hose_spit_pop',
      upLong: 'synth_carrier_buzz',
      downLong: 'vocalized_fry',
      leftLong: 'throat_choke_stop',
      rightLong: 'formant_glide',
      trigger: 'ooh_vocal'
    }
  }
};
