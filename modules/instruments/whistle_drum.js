import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const whistle_drum = {
  generateSVG: (id, colorType, lugsHtml) => `
    <!-- Flat bottom shadow -->
            <ellipse cx="50" cy="82" rx="28" ry="10" fill="#020617" opacity="0.65" filter="blur(3.5px)"/>
            
            <!-- Clay Vessel Pot -->
            <path d="M 50 18 Q 30 18, 30 30 Q 30 42, 22 55 Q 16 70, 30 78 Q 50 82, 70 78 Q 84 70, 78 55 Q 70 42, 70 30 Q 70 18, 50 18 Z" fill="#d97706" stroke="#78350f" stroke-width="2" filter="drop-shadow(0 4px 5px rgba(0,0,0,0.35))"/>
            
            <!-- Pot rim lip -->
            <ellipse cx="50" cy="22" rx="16" ry="4" fill="#ca8a04" stroke="#78350f" stroke-width="1"/>
            <ellipse cx="50" cy="22" rx="11" ry="2.5" fill="#451a03"/>
            
            <!-- Integrated Whistle chamber / duck bill shape -->
            <path d="M 22 55 Q 12 50, 10 58 Q 10 66, 22 62 Z" fill="#b45309" stroke="#451a03" stroke-width="1.2"/>
            <!-- Whistle mouth slot -->
            <rect x="12" y="55" width="4" height="2" rx="0.5" fill="#1c1917" transform="rotate(-15, 14, 56)"/>
            
            <!-- Water wavy patterns on clay skin -->
            <path d="M 32 60 Q 42 63, 50 60 T 68 60" fill="none" stroke="#f59e0b" stroke-width="1.5" opacity="0.5"/>
            <path d="M 30 68 Q 42 71, 50 68 T 70 68" fill="none" stroke="#f59e0b" stroke-width="1.5" opacity="0.5"/>
  `,
  name: '🦆 Whistle-Drum',
  drums: [
    {
      id: 0,
      label: 'Clay Whistle Pot',
      pitchMult: 1,
      color: 'terracotta',
      sizeValue: 20
    }
  ],
  sounds: {
    clay_bass: (d) => playMembrane(82 * d.pitchMult, 0.4, 1.1),
    sharp_chirp: (d) => {
      playMembrane(900 * d.pitchMult, 0.12, 0.8, true);
      playNoise(0.05, 3000, 0.2 * state.currentTiltVolume);
    },
    bending_gliss: (d) => playTablaSlideUp(600 * d.pitchMult, 900 * d.pitchMult, 0.25),
    rim_tap: (d) => {
      playMembrane(400 * d.pitchMult, 0.06, 1.0);
      playAttackClick(0.015, 2000, 0.4 * state.currentTiltVolume);
    },
    slosh_splash: (d) => {
      playNoise(0.35, 1200, 0.6 * state.currentTiltVolume);
      playMembrane(120 * d.pitchMult, 0.2, 1.0);
    },
    muted_pip: (d) => playMembrane(300 * d.pitchMult, 0.04, 1.0),
    double_chirp: (d) => {
      playMembrane(800 * d.pitchMult, 0.06, 1.0, true);
      setTimeout(() => {
        playMembrane(900 * d.pitchMult, 0.08, 1.0, true);
      }, 60);
    },
    breath_echo: (d) => {
      playNoise(0.6, 800, 0.35 * state.currentTiltVolume);
      playMembrane(90 * d.pitchMult, 0.5, 1.0);
    }
  },
  touches: [
    {
      id: 'clay_bass',
      label: 'Clay Bass',
      shortName: 'Clay Bass',
      description: 'Earthy, hollow center thump of the pot body'
    },
    {
      id: 'sharp_chirp',
      label: 'Sharp Chirp',
      shortName: 'Chirp',
      description: 'Edge strike forcing an instant, high air whistle'
    },
    {
      id: 'bending_gliss',
      label: 'Bending Gliss',
      shortName: 'Gliss',
      description: 'Center hit while pressing the head to shift the whistle pitch'
    },
    {
      id: 'rim_tap',
      label: 'Rim Tap',
      shortName: 'Rim Tap',
      description: 'Crisp finger strike on the unglazed clay edge'
    },
    {
      id: 'slosh_splash',
      label: 'Slosh Splash',
      shortName: 'Splash',
      description: 'Rocking the pot to throw internal water against the whistle port'
    },
    {
      id: 'muted_pip',
      label: 'Muted Pip',
      shortName: 'Muted Pip',
      description: 'Extremely short, choked air pop'
    },
    {
      id: 'double_chirp',
      label: 'Double Chirp',
      shortName: 'Trill',
      description: 'A rapid-fire two-finger grace note burst'
    },
    {
      id: 'breath_echo',
      label: 'Breath Echo',
      shortName: 'Echo',
      description: 'Soft hand strike that lets the air chamber hiss down'
    }
  ],
  mappings: {
    left: {
      up: 'clay_bass',
      down: 'sharp_chirp',
      left: 'bending_gliss',
      right: 'rim_tap',
      upLong: 'slosh_splash',
      downLong: 'muted_pip',
      leftLong: 'double_chirp',
      rightLong: 'breath_echo',
      trigger: 'clay_bass'
    },
    right: {
      up: 'clay_bass',
      down: 'sharp_chirp',
      left: 'bending_gliss',
      right: 'rim_tap',
      upLong: 'slosh_splash',
      downLong: 'muted_pip',
      leftLong: 'double_chirp',
      rightLong: 'breath_echo',
      trigger: 'sharp_chirp'
    }
  }
};
