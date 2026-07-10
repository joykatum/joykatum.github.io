import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const snare_drum = {
  generateSVG: (id, colorType, lugsHtml) => `
    <circle cx="50" cy="50" r="47" fill="#1e293b" opacity="0.08"/>
            
            <!-- Highly detailed 3D metal snare drum -->
            <g transform="rotate(10, 50, 50)">
              <!-- Snare body shadow -->
              <rect x="18" y="32" width="64" height="36" rx="8" fill="#020617" opacity="0.4" filter="blur(3.5px)"/>
              
              <!-- Polished steel/chrome shell -->
              <rect x="20" y="34" width="60" height="32" rx="4" fill="url(#chrome-${id})" stroke="#475569" stroke-width="1.8"/>
              <rect x="20" y="47" width="60" height="6" fill="#cbd5e1" opacity="0.5"/> <!-- Center bead line -->
              
              <!-- Vertical chrome tension rods and brackets -->
              <line x1="28" y1="30" x2="28" y2="70" stroke="url(#chrome-${id})" stroke-width="1.2"/>
              <line x1="39" y1="30" x2="39" y2="70" stroke="url(#chrome-${id})" stroke-width="1.2"/>
              <line x1="50" y1="30" x2="50" y2="70" stroke="url(#chrome-${id})" stroke-width="1.2"/>
              <line x1="61" y1="30" x2="61" y2="70" stroke="url(#chrome-${id})" stroke-width="1.2"/>
              <line x1="72" y1="30" x2="72" y2="70" stroke="url(#chrome-${id})" stroke-width="1.2"/>
              
              <!-- Double lugs brackets -->
              <circle cx="28" cy="40" r="1.5" fill="#94a3b8" stroke="#475569" stroke-width="0.3"/>
              <circle cx="28" cy="60" r="1.5" fill="#94a3b8" stroke="#475569" stroke-width="0.3"/>
              <circle cx="39" cy="40" r="1.5" fill="#94a3b8" stroke="#475569" stroke-width="0.3"/>
              <circle cx="39" cy="60" r="1.5" fill="#94a3b8" stroke="#475569" stroke-width="0.3"/>
              <circle cx="50" cy="40" r="1.5" fill="#94a3b8" stroke="#475569" stroke-width="0.3"/>
              <circle cx="50" cy="60" r="1.5" fill="#94a3b8" stroke="#475569" stroke-width="0.3"/>
              <circle cx="61" cy="40" r="1.5" fill="#94a3b8" stroke="#475569" stroke-width="0.3"/>
              <circle cx="61" cy="60" r="1.5" fill="#94a3b8" stroke="#475569" stroke-width="0.3"/>
              <circle cx="72" cy="40" r="1.5" fill="#94a3b8" stroke="#475569" stroke-width="0.3"/>
              <circle cx="72" cy="60" r="1.5" fill="#94a3b8" stroke="#475569" stroke-width="0.3"/>
              
              <!-- Snare throw-off/strainer switch detail on the side -->
              <rect x="17" y="42" width="3" height="12" fill="url(#chrome-${id})" stroke="#334155" stroke-width="0.5"/>
              <circle cx="18.5" cy="44" r="1" fill="#dc2626"/>
              
              <!-- Top batter head seen in perspective -->
              <ellipse cx="50" cy="34" rx="30" ry="7" fill="#fdf2e9" stroke="url(#chrome-${id})" stroke-width="1.8" filter="drop-shadow(0 -1.5px 1.5px rgba(0,0,0,0.35))"/>
              <ellipse cx="50" cy="34" rx="26" ry="5.8" fill="none" stroke="#d1d5db" stroke-width="0.5" opacity="0.6"/>
              
              <!-- Bottom head seen in perspective -->
              <ellipse cx="50" cy="66" rx="30" ry="7" fill="#cbd5e1" stroke="url(#chrome-${id})" stroke-width="1.8" filter="drop-shadow(0 1.5px 1.5px rgba(0,0,0,0.35))"/>
              
              <!-- Ambient 3D shading on the metal shell -->
              <rect x="20" y="34" width="60" height="32" rx="4" fill="url(#overlay-${id})" opacity="0.5"/>
              <line x1="22" y1="36" x2="22" y2="64" stroke="#ffffff" stroke-width="1.5" opacity="0.3"/>
            </g>
  `,
  name: 'Snare Drum',
  defaultLeft: 0,
  defaultRight: 0,
  drums: [
    {
      id: 0,
      label: 'Snare Drum',
      pitchMult: 1,
      color: 'silver',
      sizeValue: 19
    }
  ],
  sounds: {
    center_stick_hit: (d, velocity = 0.85) => {
      playMembrane(180 * d.pitchMult, 0.22, 0.9, false, velocity);
      playNoise(0.18, 2800, velocity * 0.9, 'highpass');
    },
    rimshot: (d, velocity = 0.95) => {
      playMembrane(320 * d.pitchMult, 0.12, 1.0, true, velocity);
      playNoise(0.15, 3500, velocity * 1.1, 'highpass');
      playAttackClick(0.01, 4000, 0.4 * velocity);
    },
    cross_stick_rim_click: (d, velocity = 0.65) => {
      playMembrane(450 * d.pitchMult, 0.05, 1.0, false, velocity * 0.7);
      playNoise(0.03, 1600, velocity * 0.3, 'bandpass', 3.0);
    },
    buzz_press_roll: (d, velocity = 0.8) => {
      // Simulate rapid buzz by cascading multiple hits
      for (let i = 0; i < 6; i++) {
        setTimeout(() => {
          const vol = velocity * Math.pow(0.85, i);
          playMembrane(320 * d.pitchMult, 0.05, 1.0, true, vol * 0.6);
          playNoise(0.12, 4000, vol * 0.8, 'highpass');
        }, i * 35);
      }
    },
    rim_shot_mute: (d, velocity = 0.75) => {
      playMembrane(580 * d.pitchMult, 0.03, 1.0, true, velocity * 0.6);
      playNoise(0.02, 2200, velocity * 0.45, 'bandpass', 3.0);
    }
  },
  touches: [
    {
      id: 'center_stick_hit',
      label: 'Center stick hit',
      shortName: 'Center stick...',
      description:
        'A clean, articulate strike in the center of the top head with the bottom wire snares engaged against the bottom head'
    },
    {
      id: 'rimshot',
      label: 'Rimshot',
      shortName: 'Rimshot',
      description:
        'Striking the top metal counterhoop and the head at the exact same time with the stick for an explosive accent'
    },
    {
      id: 'cross_stick_rim_click',
      label: 'Cross-stick rim click',
      shortName: 'Cross-stick ...',
      description:
        'Resting the tip of the stick on the head and striking the rim with the shaft to produce a woody click'
    },
    {
      id: 'buzz_press_roll',
      label: 'Buzz / Press roll',
      shortName: 'Buzz / Press...',
      description:
        'Pressing the sticks firmly into the head to force them to bounce repeatedly, creating a dense, continuous wall of sound'
    },
    {
      id: 'rim_shot_mute',
      label: 'Rim Shot Mute',
      shortName: 'Rim Shot Mute',
      description:
        'Placing one drumstick flat across the drumhead so it touches both the skin and the opposite metal rim, then striking that resting stick with the other stick to produce a compressed wooden "clack"'
    }
  ],
  mappings: {
    left: {
      up: 'center_stick_hit',
      down: 'rimshot',
      left: 'cross_stick_rim_click',
      right: 'buzz_press_roll',
      upLong: 'rim_shot_mute',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'center_stick_hit'
    },
    right: {
      up: 'center_stick_hit',
      down: 'rimshot',
      left: 'cross_stick_rim_click',
      right: 'buzz_press_roll',
      upLong: 'rim_shot_mute',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'rimshot'
    }
  }
};
