import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const mechanical_keyboard = {
  origin: 'Modern Digital Workspace',
  description:
    'The mechanical computer keyboard, featuring specialized tactile switches (like Cherry MX Blues or Browns), is beloved by typists and programmers for its distinct auditory feedback. This layout organizes the satisfying, crisp tactile clicks, spacebar clacks, and keycap bottom-outs into a highly rhythmic, ultra-modern percussive office soundscape.',
  generateSVG: (id, colorType, lugsHtml) => `
    <!-- Keyboard casing shadow -->
            <rect x="6" y="24" width="88" height="54" rx="6" fill="#020617" opacity="0.75" filter="blur(3px)"/>
            
            <!-- Aluminum mechanical keyboard bezel -->
            <rect x="8" y="22" width="84" height="52" rx="5" fill="#1e293b" stroke="#475569" stroke-width="1.5"/>
            
            <!-- Dark keycap grid plate -->
            <rect x="12" y="26" width="76" height="44" rx="3" fill="#0f172a" stroke="#334155" stroke-width="1"/>
            
            <!-- Escape Key (Cyan glow) -->
            <rect x="14" y="28" width="8" height="6" rx="1.5" fill="#06b6d4" stroke="#0891b2" stroke-width="0.5" filter="drop-shadow(0 0 1.5px #06b6d4)"/>
            <line x1="16" y1="30" x2="20" y2="30" stroke="#ffffff" stroke-width="0.5" opacity="0.5"/>
            
            <!-- Function Row / Number Keys (Gray) -->
            <rect x="24" y="28" width="6" height="6" rx="1" fill="#334155"/>
            <rect x="31" y="28" width="6" height="6" rx="1" fill="#334155"/>
            <rect x="38" y="28" width="6" height="6" rx="1" fill="#334155"/>
            <rect x="45" y="28" width="6" height="6" rx="1" fill="#334155"/>
            <rect x="52" y="28" width="6" height="6" rx="1" fill="#334155"/>
            <rect x="59" y="28" width="6" height="6" rx="1" fill="#334155"/>
            <rect x="66" y="28" width="6" height="6" rx="1" fill="#334155"/>
            <rect x="73" y="28" width="6" height="6" rx="1" fill="#334155"/>
            
            <!-- Backspace Key (Orange/Red) -->
            <rect x="80" y="28" width="8" height="6" rx="1.5" fill="#f97316" stroke="#ea580c" stroke-width="0.5"/>
            
            <!-- QWERTY Row -->
            <rect x="14" y="36" width="6" height="6" rx="1" fill="#475569"/>
            <rect x="21" y="36" width="6" height="6" rx="1" fill="#475569"/>
            <rect x="28" y="36" width="6" height="6" rx="1" fill="#475569"/>
            <rect x="35" y="36" width="6" height="6" rx="1" fill="#475569"/>
            <rect x="42" y="36" width="6" height="6" rx="1" fill="#475569"/>
            <rect x="49" y="36" width="6" height="6" rx="1" fill="#475569"/>
            <rect x="56" y="36" width="6" height="6" rx="1" fill="#475569"/>
            <rect x="63" y="36" width="6" height="6" rx="1" fill="#475569"/>
            <rect x="70" y="36" width="6" height="6" rx="1" fill="#475569"/>
            <rect x="77" y="36" width="11" height="6" rx="1.5" fill="#f43f5e" stroke="#e11d48" stroke-width="0.5" filter="drop-shadow(0 0 1px #f43f5e)"/>
            
            <!-- ASDF Row -->
            <rect x="14" y="44" width="8" height="6" rx="1" fill="#334155"/>
            <rect x="23" y="44" width="6" height="6" rx="1" fill="#475569"/>
            <rect x="30" y="44" width="6" height="6" rx="1" fill="#475569"/>
            <rect x="37" y="44" width="6" height="6" rx="1" fill="#475569"/>
            <rect x="44" y="44" width="6" height="6" rx="1" fill="#475569"/>
            <rect x="51" y="44" width="6" height="6" rx="1" fill="#475569"/>
            <rect x="58" y="44" width="6" height="6" rx="1" fill="#475569"/>
            <rect x="65" y="44" width="6" height="6" rx="1" fill="#475569"/>
            <rect x="72" y="44" width="16" height="6" rx="1.5" fill="#f43f5e" stroke="#e11d48" stroke-width="0.5"/>
            
            <!-- Bottom Spacebar Row -->
            <rect x="14" y="52" width="8" height="6" rx="1" fill="#334155"/>
            <rect x="24" y="52" width="6" height="6" rx="1" fill="#334155"/>
            <rect x="32" y="52" width="6" height="6" rx="1" fill="#334155"/>
            <rect x="40" y="52" width="30" height="6" rx="1.5" fill="#1e293b" stroke="#38bdf8" stroke-width="1" filter="drop-shadow(0 0 1.5px #38bdf8)"/>
            <rect x="72" y="52" width="6" height="6" rx="1" fill="#334155"/>
            <rect x="80" y="52" width="8" height="6" rx="1" fill="#334155"/>
            
            <!-- Elegant key status indicator lights -->
            <circle cx="86" cy="24" r="0.8" fill="#10b981"/>
            <circle cx="89" cy="24" r="0.8" fill="#64748b"/>
            <circle cx="92" cy="24" r="0.8" fill="#64748b"/>
  `,
  name: '⌨️ Mechanical Keyboard',
  drums: [
    {
      id: 0,
      label: 'Cyber Keyboard',
      pitchMult: 1,
      color: 'darker',
      sizeValue: 20
    }
  ],
  sounds: {
    key_click: (d) => {
      playAttackClick(0.02, 3000, 0.8 * state.currentTiltVolume);
      playMembrane(350 * d.pitchMult, 0.03, 1.05);
    },
    spacebar: (d) => {
      playMembrane(100 * d.pitchMult, 0.08, 1.02);
      playNoise(0.06, 600, 0.4 * state.currentTiltVolume);
    },
    enter_key: (d) => {
      playMembrane(180 * d.pitchMult, 0.12, 1.05);
      playAttackClick(0.04, 2000, 1.0 * state.currentTiltVolume);
      playNoise(0.08, 1000, 0.3 * state.currentTiltVolume);
    },
    shift_hold: (d) => {
      playMembrane(120 * d.pitchMult, 0.05, 1.0);
      playNoise(0.02, 1500, 0.15 * state.currentTiltVolume);
    },
    backspace: (d) => {
      playAttackClick(0.015, 3200, 0.6 * state.currentTiltVolume);
      setTimeout(() => {
        playAttackClick(0.015, 3000, 0.5 * state.currentTiltVolume);
      }, 70);
    }
  },
  touches: [
    {
      id: 'key_click',
      label: 'Key Click',
      shortName: 'Click',
      description:
        'Striking a single custom mechanical key with high precision, engaging a sharp, snappy, high-frequency Cherry MX Blue click.'
    },
    {
      id: 'spacebar',
      label: 'Spacebar Thump',
      shortName: 'Spacebar',
      description:
        'Striking the heavy plastic spacebar with a relaxed thumb, producing a hollow, deep, and spacious resonant thump.'
    },
    {
      id: 'enter_key',
      label: 'Enter Key Snap',
      shortName: 'Enter',
      description:
        'Forcefully bottoming out the heavy enter key, creating an extremely satisfying, high-volume tactile clack.'
    },
    {
      id: 'shift_hold',
      label: 'Shift Hold',
      shortName: 'Shift',
      description: 'Gently depressing the spring-loaded shift key to create a soft, muted sliding friction click.'
    },
    {
      id: 'backspace',
      label: 'Backspace Tap',
      shortName: 'Backspace',
      description: 'Executing a rapid double-press deletion tap, producing two distinct, high-speed micro-clicks.'
    }
  ],
  mappings: {
    left: {
      up: 'key_click',
      down: 'spacebar',
      left: 'backspace',
      right: 'enter_key',
      upLong: 'shift_hold',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'key_click'
    },
    right: {
      up: 'key_click',
      down: 'spacebar',
      left: 'backspace',
      right: 'enter_key',
      upLong: 'shift_hold',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'enter_key'
    }
  }
};
