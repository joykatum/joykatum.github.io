import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const hydraulic_piston = {
  origin: 'Industrial Machine Shop',
  description:
    'An artistic sound recreation of a heavy-duty hydraulic actuator from an industrial machinery setting. It produces compressed, high-pressure steam releases, sliding metallic friction hums, and deep magnetic solenoid clunks. This experimental instrument brings the heavy mechanical heartbeat of steam-punk factories directly to your rhythm section.',
  generateSVG: (id, colorType, lugsHtml) => `
    <!-- Heavy bottom industrial shadow -->
            <rect x="22" y="10" width="56" height="84" rx="8" fill="#020617" opacity="0.7" filter="blur(4px)"/>
            
            <!-- Piston outer heavy cast-iron jacket -->
            <rect x="26" y="28" width="48" height="60" rx="4" fill="#334155" stroke="#1e293b" stroke-width="2.5"/>
            <rect x="23" y="80" width="54" height="10" rx="2" fill="#1e293b"/>
            
            <!-- Industrial textures -->
            <rect x="26" y="36" width="48" height="6" fill="#475569"/>
            <rect x="26" y="56" width="48" height="6" fill="#475569"/>
            
            <!-- Bolts -->
            <circle cx="30" cy="85" r="2.2" fill="url(#chrome-${id})" stroke="#0f172a" stroke-width="0.5"/>
            <circle cx="70" cy="85" r="2.2" fill="url(#chrome-${id})" stroke="#0f172a" stroke-width="0.5"/>
            
            <!-- Piston rod -->
            <rect x="42" y="4" width="16" height="30" fill="url(#chrome-${id})" stroke="#1e293b" stroke-width="1.5"/>
            <rect x="38" y="24" width="24" height="6" rx="1.5" fill="url(#chrome-${id})" stroke="#0f172a" stroke-width="1"/>
            
            <!-- Pipe -->
            <path d="M 26 42 Q 10 42, 10 60 Q 10 74, 23 82" fill="none" stroke="url(#chrome-${id})" stroke-width="2.5" filter="drop-shadow(1px 2px 2px rgba(0,0,0,0.5))"/>
            
            <!-- Pressure gauge -->
            <circle cx="50" cy="48" r="8.5" fill="#f8fafc" stroke="#1e293b" stroke-width="1.2"/>
            <circle cx="50" cy="48" r="7" fill="none" stroke="#ef4444" stroke-width="0.6" stroke-dasharray="1 3" opacity="0.8"/>
            <line x1="50" y1="48" x2="54" y2="44" stroke="#ef4444" stroke-width="1" stroke-linecap="round"/>
            <circle cx="50" cy="48" r="1.2" fill="#0f172a"/>
            
            <rect x="36" y="68" width="28" height="4" rx="1" fill="#0f172a"/>
            
            <!-- Steam clouds -->
            <path d="M 40 18 C 36 14, 34 8, 38 4 C 42 0, 46 2, 48 6 C 50 10, 54 12, 52 16" fill="none" stroke="#e2e8f0" stroke-width="1.8" opacity="0.4" stroke-linecap="round" filter="blur(0.8px)"/>
            <path d="M 52 18 C 56 14, 58 8, 54 4 C 50 0, 46 2, 44 6 C 42 10, 38 12, 40 16" fill="none" stroke="#e2e8f0" stroke-width="1.2" opacity="0.3" stroke-linecap="round" filter="blur(0.8px)"/>
  `,
  name: '⚙️ Hydraulic Piston',
  drums: [
    {
      id: 0,
      label: 'Piston Chamber',
      pitchMult: 1,
      color: 'silver',
      sizeValue: 22
    }
  ],
  sounds: {
    steam_hiss: (d) => playNoise(0.6, 5000, 0.8 * state.currentTiltVolume),
    iron_stomp: (d) => {
      playMembrane(40 * d.pitchMult, 0.45, 1.5);
      playAttackClick(0.08, 1200, 0.7 * state.currentTiltVolume);
    },
    gear_lock: (d) => {
      playAttackClick(0.015, 3000, 0.8 * state.currentTiltVolume);
      playMembrane(400 * d.pitchMult, 0.02, 1.0);
    },
    exhaust_clunk: (d) => playMembrane(80 * d.pitchMult, 0.18, 1.1)
  },
  touches: [
    {
      id: 'steam_hiss',
      label: 'Pneumatic Steam Hiss',
      shortName: 'Steam Hiss',
      description:
        'Opening the high-pressure release valve to purge compressed air, creating a rich, sustained, steam-like white noise hiss.'
    },
    {
      id: 'iron_stomp',
      label: 'Iron Anvil Stomp',
      shortName: 'Anvil Stomp',
      description:
        'Releasing the primary mechanical weight to strike the anvil plate, yielding a massive, echoing metal-on-metal drop impact.'
    },
    {
      id: 'gear_lock',
      label: 'Ratchet Gear Lock',
      shortName: 'Gear Lock',
      description:
        'Engaging the industrial spring-loaded ratchet gear, creating a sharp, high-tension spring lock click.'
    },
    {
      id: 'exhaust_clunk',
      label: 'Chamber Exhaust Clunk',
      shortName: 'Exhaust',
      description:
        'Cycling the internal exhaust combustion chambers to create a deep, heavy, low-frequency mechanical thud.'
    }
  ],
  mappings: {
    left: {
      up: 'steam_hiss',
      down: 'iron_stomp',
      left: 'gear_lock',
      right: 'exhaust_clunk',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'iron_stomp'
    },
    right: {
      up: 'steam_hiss',
      down: 'iron_stomp',
      left: 'gear_lock',
      right: 'exhaust_clunk',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'steam_hiss'
    }
  }
};
