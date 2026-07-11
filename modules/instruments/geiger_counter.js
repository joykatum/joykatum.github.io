import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const geiger_counter = {
  generateSVG: (id, colorType, lugsHtml) => `
    <!-- Heavy bottom shadow -->
            <rect x="18" y="74" width="64" height="12" rx="4" fill="#020617" opacity="0.65" filter="blur(3px)"/>
            
            <!-- Industrial Slate/Yellow Housing -->
            <rect x="20" y="18" width="60" height="58" rx="6" fill="#eab308" stroke="#854d0e" stroke-width="2.2" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.35))"/>
            <rect x="23" y="21" width="54" height="52" rx="4" fill="#475569" opacity="0.15"/>
            
            <!-- Center Dial display meter (Beige circular window) -->
            <circle cx="50" cy="38" r="16" fill="#f5f5f4" stroke="#334155" stroke-width="1.8"/>
            <!-- Meter scale arches -->
            <path d="M 38 42 A 12 12 0 0 1 62 42" fill="none" stroke="#64748b" stroke-width="1.2" stroke-dasharray="1, 1.5"/>
            <path d="M 54 38 A 4 4 0 0 1 62 42" fill="none" stroke="#ef4444" stroke-width="1.2"/>
            <!-- Indicator Needle -->
            <line x1="50" y1="46" x2="58" y2="30" stroke="#ef4444" stroke-width="1.5" stroke-linecap="round" filter="drop-shadow(0.5px 0.5px 1px rgba(0,0,0,0.4))"/>
            <circle cx="50" cy="46" r="2.2" fill="#1e293b"/>
            
            <!-- Geiger mesh/sensor holes at base -->
            <rect x="28" y="60" width="18" height="10" rx="1.5" fill="#1e293b"/>
            <circle cx="32" cy="65" r="0.8" fill="#e2e8f0"/>
            <circle cx="37" cy="65" r="0.8" fill="#e2e8f0"/>
            <circle cx="42" cy="65" r="0.8" fill="#e2e8f0"/>
            
            <!-- Hardware adjustment knob -->
            <circle cx="64" cy="64" r="5.5" fill="#334155" stroke="#1e293b" stroke-width="1"/>
            <line x1="64" y1="59" x2="64" y2="69" stroke="#f1f5f9" stroke-width="1.2"/>
            
            <!-- Radioactivity Warning Sign (Tiny icon) -->
            <circle cx="50" cy="12" r="4.5" fill="#eab308" stroke="#854d0e" stroke-width="1"/>
            <circle cx="50" cy="12" r="1" fill="#000000"/>
            <path d="M 48 9 L 52 9 L 50 12 Z M 46 13 L 48 11 L 51 13 Z" fill="#000000"/>
  `,
  name: '☢️ Geiger Counter',
  drums: [
    {
      id: 0,
      label: 'Geiger Grid',
      pitchMult: 1,
      color: 'dark',
      sizeValue: 18
    }
  ],
  sounds: {
    isolated_click: (d) => playAttackClick(0.005, 4500, 0.85 * state.currentTiltVolume),
    double_static_burst: (d) => {
      playAttackClick(0.005, 4500, 0.85 * state.currentTiltVolume);
      setTimeout(() => {
        playAttackClick(0.005, 4200, 0.7 * state.currentTiltVolume);
      }, 25);
    },
    rad_swarm: (d) => {
      playNoise(0.35, 4000, 0.8 * state.currentTiltVolume);
      for (let i = 0; i < 4; i++) {
        setTimeout(
          () => {
            playAttackClick(0.005, 4500 - i * 300, 0.6);
          },
          i * 40 + Math.random() * 20
        );
      }
    },
    warning_beep: (d) => playMembrane(2000 * d.pitchMult, 0.08, 1.0, true),
    chassis_dial_click: (d) => {
      playAttackClick(0.02, 1800, 0.75 * state.currentTiltVolume);
      playMembrane(180 * d.pitchMult, 0.03, 1.0);
    },
    static_discharge_thump: (d) => playMembrane(45 * d.pitchMult, 0.15, 1.3),
    meltdown_buzz: (d) => {
      playMembrane(380 * d.pitchMult, 0.4, 1.0);
      playNoise(0.4, 2800, 0.6 * state.currentTiltVolume);
    },
    battery_test_chirp: (d) => playTablaSlideUp(1500 * d.pitchMult, 1800 * d.pitchMult, 0.12)
  },
  touches: [
    {
      id: 'isolated_click',
      label: 'Isolated Click',
      shortName: 'Click',
      description: 'A single, ultra-sharp, lo-fi diagnostic static pop'
    },
    {
      id: 'double_static_burst',
      label: 'Double Static Burst',
      shortName: 'Burst',
      description: 'Two erratic, microsecond pops grouped tightly together'
    },
    {
      id: 'rad_swarm',
      label: 'Rad Swarm',
      shortName: 'Swarm',
      description: 'A dense, white-noise-adjacent cascade of stochastic crackling'
    },
    {
      id: 'warning_beep',
      label: 'Warning Beep',
      shortName: 'Beep',
      description: 'The flat, piercing 2kHz internal warning alarm piezo pulse'
    },
    {
      id: 'chassis_dial_click',
      label: 'Chassis Dial Click',
      shortName: 'Dial',
      description: 'The heavy, physical plastic rotate click of the range knob'
    },
    {
      id: 'static_discharge_thump',
      label: 'Static Discharge Thump',
      shortName: 'Thump',
      description: 'A low-frequency electronic pop from a grounding short'
    },
    {
      id: 'meltdown_buzz',
      label: 'Meltdown Buzz',
      shortName: 'Buzz',
      description: 'A continuous, overloaded hardware signal scream'
    },
    {
      id: 'battery_test_chirp',
      label: 'Battery Test Chirp',
      shortName: 'Chirp',
      description: 'A tiny, clean, ascending digital status notification tone'
    }
  ],
  mappings: {
    left: {
      up: 'isolated_click',
      down: 'double_static_burst',
      left: 'rad_swarm',
      right: 'warning_beep',
      upLong: 'chassis_dial_click',
      downLong: 'static_discharge_thump',
      leftLong: 'meltdown_buzz',
      rightLong: 'battery_test_chirp',
      trigger: 'isolated_click'
    },
    right: {
      up: 'isolated_click',
      down: 'double_static_burst',
      left: 'rad_swarm',
      right: 'warning_beep',
      upLong: 'chassis_dial_click',
      downLong: 'static_discharge_thump',
      leftLong: 'meltdown_buzz',
      rightLong: 'battery_test_chirp',
      trigger: 'double_static_burst'
    }
  }
};
