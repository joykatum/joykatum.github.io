import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const bop_it = {
  generateSVG: (id, colorType, lugsHtml) => `
    <!-- Drop Shadow -->
            <path d="M 12 55 L 45 42 L 55 42 L 88 55 L 75 80 L 25 80 Z" fill="#020617" opacity="0.6" filter="blur(5px)"/>
            
            <!-- Long angled central spine (White plastic) -->
            <path d="M 20 40 L 80 40 Q 85 40, 85 45 L 85 55 Q 85 60, 80 60 L 20 60 Q 15 60, 15 55 L 15 45 Q 15 40, 20 40 Z" fill="#f8fafc" stroke="#94a3b8" stroke-width="2" transform="rotate(-15, 50, 50)" filter="drop-shadow(0 4px 5px rgba(0,0,0,0.4))"/>
            <path d="M 20 45 L 80 45" fill="none" stroke="#e2e8f0" stroke-width="2" transform="rotate(-15, 50, 50)"/>
            
            <!-- Center Bop It Hub (Black + White + Logo) -->
            <circle cx="50" cy="50" r="16" fill="#0f172a" stroke="#1e293b" stroke-width="1.5" filter="drop-shadow(0 3px 4px rgba(0,0,0,0.5))"/>
            <circle cx="50" cy="50" r="11" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
            <text x="50" y="52.5" font-family="'Arial Black', Impact, sans-serif" font-weight="900" font-size="3.5" fill="#0ea5e9" text-anchor="middle" letter-spacing="-0.1">BOP IT</text>
            
            <!-- Twist handle (Yellow, left side) -->
            <path d="M 15 35 L -2 35 L -2 65 L 15 65 Z" fill="#eab308" stroke="#a16207" stroke-width="2" transform="rotate(-15, 50, 50)"/>
            <path d="M -2 35 Q -6 35, -6 40 L -6 60 Q -6 65, -2 65 Z" fill="#eab308" stroke="#a16207" stroke-width="2" transform="rotate(-15, 50, 50)"/>
            <line x1="2" y1="35" x2="2" y2="65" stroke="#a16207" stroke-width="1.5" transform="rotate(-15, 50, 50)"/>
            <line x1="8" y1="35" x2="8" y2="65" stroke="#a16207" stroke-width="1.5" transform="rotate(-15, 50, 50)"/>

            <!-- Pull handle (Blue, right side) -->
            <path d="M 85 44 L 98 44 C 102 44, 105 46, 105 50 C 105 54, 102 56, 98 56 L 85 56 Z" fill="#3b82f6" stroke="#1d4ed8" stroke-width="2" transform="rotate(-15, 50, 50)"/>
            <circle cx="102" cy="50" r="1.5" fill="#1e3a8a" transform="rotate(-15, 50, 50)"/>
            
            <!-- Sound holes -->
            <circle cx="36" cy="46" r="1.2" fill="#334155" transform="rotate(-15, 50, 50)"/>
            <circle cx="36" cy="50" r="1.2" fill="#334155" transform="rotate(-15, 50, 50)"/>
            <circle cx="36" cy="54" r="1.2" fill="#334155" transform="rotate(-15, 50, 50)"/>
            <circle cx="40" cy="48" r="1.2" fill="#334155" transform="rotate(-15, 50, 50)"/>
            <circle cx="40" cy="52" r="1.2" fill="#334155" transform="rotate(-15, 50, 50)"/>
  `,
  name: '🔴 Bop It!',
  defaultLeft: 0,
  defaultRight: 0,
  drums: [
    {
      id: 0,
      label: 'Bop It Toy',
      pitchMult: 1,
      color: 'purple',
      sizeValue: 18
    }
  ],
  sounds: {
    bop_it: (d) => {
      playMembrane(190 * d.pitchMult, 0.06, 1.05);
      playAttackClick(0.01, 2200, 0.5 * state.currentTiltVolume);
      speakPhrase('Bop it!', 1.2, 1.3, 1.0);
    },
    twist_it: (d) => {
      playAttackClick(0.01, 3500, 0.7 * state.currentTiltVolume);
      setTimeout(() => {
        playAttackClick(0.01, 3200, 0.6 * state.currentTiltVolume);
      }, 50);
      setTimeout(() => {
        playAttackClick(0.01, 2900, 0.5 * state.currentTiltVolume);
      }, 100);
      speakPhrase('Twist it!', 1.1, 1.3, 1.0);
    },
    pull_it: (d) => {
      playTablaSlideUp(180 * d.pitchMult, 380 * d.pitchMult, 0.15);
      speakPhrase('Pull it!', 1.0, 1.3, 1.0);
    },
    shout_it: (d) => {
      playTablaSlideUp(1200 * d.pitchMult, 1500 * d.pitchMult, 0.1);
      playNoise(0.08, 3000, 0.3 * state.currentTiltVolume);
      speakPhrase('Shout it!', 1.3, 1.3, 1.0);
    },
    fail_buzz: (d) => {
      playTablaSlideUp(180 * d.pitchMult, 90 * d.pitchMult, 0.6);
      playNoise(0.4, 250, 0.4 * state.currentTiltVolume);
      speakPhrase('Wah wah wah!', 0.8, 1.0, 1.0);
    },
    victory_chime: (d) => {
      playMembrane(261.63 * d.pitchMult, 0.12, 1.0);
      setTimeout(() => playMembrane(329.63 * d.pitchMult, 0.12, 1.0), 60);
      setTimeout(() => playMembrane(392.0 * d.pitchMult, 0.12, 1.0), 120);
      setTimeout(() => playMembrane(523.25 * d.pitchMult, 0.2, 1.0), 180);
      speakPhrase('You win!', 1.25, 1.1, 1.0);
    }
  },
  touches: [
    {
      id: 'bop_it',
      label: 'Bop It Punch',
      shortName: 'Bop It',
      description:
        'Firmly smacking the central rubberized pressure plate of the classic electronic toy, triggering its signature high-mid plastic snap.'
    },
    {
      id: 'twist_it',
      label: 'Twist It Ratchet',
      shortName: 'Twist It',
      description:
        'Grasping and rotating the ribbed yellow dial to cycle through multiple mechanical gear-teeth clicks.'
    },
    {
      id: 'pull_it',
      label: 'Pull It Spring',
      shortName: 'Pull It',
      description:
        'Tugging the blue cylindrical knob outward, releasing a rubbery, springy tension pop as the slider returns.'
    },
    {
      id: 'shout_it',
      label: 'Shout It Screech',
      shortName: 'Shout It',
      description:
        'Yelling directly into the dynamic microphone to trigger a playful, high-pitched vocal resonance screech.'
    },
    {
      id: 'fail_buzz',
      label: 'Comedic Fail Buzz',
      shortName: 'Fail Buzz',
      description: 'Triggers a comedic, descending synthesizer buzz that mimics the classic "game over" warning horn.'
    },
    {
      id: 'victory_chime',
      label: 'Ascending Fanfare Chime',
      shortName: 'Victory',
      description: 'Plays a rapid, digital ascending major-triad chime representing a successful round completion.'
    }
  ],
  mappings: {
    left: {
      up: 'bop_it',
      down: 'twist_it',
      left: 'pull_it',
      right: 'shout_it',
      upLong: 'victory_chime',
      downLong: 'fail_buzz',
      leftLong: '',
      rightLong: '',
      trigger: 'bop_it'
    },
    right: {
      up: 'bop_it',
      down: 'twist_it',
      left: 'pull_it',
      right: 'shout_it',
      upLong: 'victory_chime',
      downLong: 'fail_buzz',
      leftLong: '',
      rightLong: '',
      trigger: 'bop_it'
    }
  }
};
