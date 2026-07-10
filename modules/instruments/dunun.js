import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const dunun = {
  generateSVG: (id, colorType, lugsHtml) => `
    <circle cx="50" cy="50" r="47" fill="#1e293b" opacity="0.08"/>
            
            <!-- Deep cylindrical West African bass drum -->
            <g transform="rotate(20, 50, 50)">
              <!-- Body shadow -->
              <rect x="20" y="24" width="60" height="52" rx="16" fill="#020617" opacity="0.4" filter="blur(3px)"/>
              
              <!-- Thick log wooden body shell -->
              <rect x="22" y="26" width="56" height="48" rx="8" fill="#451a03" stroke="#1c0d02" stroke-width="2.2" filter="drop-shadow(0 3px 5px rgba(0,0,0,0.5))"/>
              <line x1="22" y1="36" x2="78" y2="36" stroke="#271305" stroke-width="0.8" opacity="0.4"/>
              <line x1="22" y1="64" x2="78" y2="64" stroke="#271305" stroke-width="0.8" opacity="0.4"/>
              
              <!-- Zig-zag ropes tuning laces -->
              <path d="M 24 26 L 31 74 L 38 26 L 45 74 L 52 26 L 59 74 L 66 26 L 73 74 L 76 26 M 24 74 L 31 26 L 38 74 L 45 26 L 52 74 L 59 26 L 66 74 L 73 26 L 76 74" fill="none" stroke="#fbbf24" stroke-width="1.4" opacity="0.8" stroke-linecap="round" stroke-linejoin="round" filter="drop-shadow(0.5px 0.5px 1px rgba(0,0,0,0.3))"/>
              
              <!-- Thick hand-shaved rawhide drumheads on both ends -->
              <ellipse cx="50" cy="26" rx="28" ry="7" fill="url(#skin-${id})" stroke="#a16207" stroke-width="2" filter="drop-shadow(0 -1px 1px rgba(0,0,0,0.3))"/>
              <ellipse cx="50" cy="74" rx="28" ry="7" fill="url(#skin-${id})" stroke="#a16207" stroke-width="2" filter="drop-shadow(0 1px 1px rgba(0,0,0,0.3))"/>
              
              <!-- Attached traditional metal Dunun bell (Kenken) mounted on top of body -->
              <g transform="translate(50, 14) rotate(-15)">
                <path d="M -8 0 L -12 -5 L 12 -5 L 8 0 Z" fill="url(#chrome-${id})" stroke="#475569" stroke-width="0.8" filter="drop-shadow(0 2px 2px rgba(0,0,0,0.35))"/>
                <line x1="-8" y1="-2" x2="8" y2="-2" stroke="#94a3b8" stroke-width="0.5"/>
              </g>
              
              <!-- Ambient 3D shading on the wood body -->
              <rect x="22" y="26" width="56" height="48" rx="8" fill="url(#overlay-${id})" opacity="0.7"/>
            </g>
  `,
  name: 'Dunun',
  defaultLeft: 0,
  defaultRight: 1,
  drums: [
    {
      id: 0,
      label: 'Dununba',
      pitchMult: 0.7,
      color: 'dark',
      sizeValue: 25
    },
    {
      id: 1,
      label: 'Sangban',
      pitchMult: 1,
      color: 'caramel',
      sizeValue: 21
    },
    {
      id: 2,
      label: 'Kenkeni',
      pitchMult: 1.3,
      color: 'blonde',
      sizeValue: 17
    }
  ],
  sounds: {
    open_strike: (d, velocity = 0.85) => {
      let f = d.id === 0 ? 65 : d.id === 1 ? 95 : 130;
      f *= d.pitchMult;
      const pan = d.id === 0 ? -0.35 : d.id === 1 ? 0.0 : 0.35;
      playMembrane(f, 0.85, 1.15, false, velocity, pan);
    },
    muted_strike: (d, velocity = 0.8) => {
      let f = d.id === 0 ? 80 : d.id === 1 ? 120 : 160;
      f *= d.pitchMult;
      const pan = d.id === 0 ? -0.35 : d.id === 1 ? 0.0 : 0.35;
      playMembrane(f, 0.12, 1.0, true, velocity, pan);
      playNoise(0.03, 800, velocity * 0.15, 'lowpass');
    },
    bell_strike: (d, velocity = 0.75) => {
      let f = d.id === 0 ? 420 : d.id === 1 ? 550 : 720;
      f *= d.pitchMult;
      const pan = d.id === 0 ? -0.4 : d.id === 1 ? -0.05 : 0.3;
      // Authentic high ringing iron bell ring with mallet click
      playMembrane(f, 0.45, 1.0, false, velocity * 0.9, pan);
      playAttackClick(0.012, 3500, 0.45 * velocity);
    },
    bell_rim_shot: (d, velocity = 0.85) => {
      let f = d.id === 0 ? 420 : d.id === 1 ? 550 : 720;
      f *= d.pitchMult;
      const pan = d.id === 0 ? -0.4 : d.id === 1 ? -0.05 : 0.3;
      // High bell hit combined with a dry hoop snap
      playMembrane(f, 0.25, 1.0, true, velocity * 0.8, pan);
      playMembrane(180, 0.06, 1.0, true, velocity * 0.5, pan);
      playNoise(0.08, 4000, velocity * 0.5, 'highpass');
    }
  },
  touches: [
    {
      id: 'open_strike',
      label: 'Open strike',
      shortName: 'Open strike',
      description:
        'A powerful, unmuted strike with a heavy stick on the thick rawhide head, letting the bass note sustain'
    },
    {
      id: 'muted_strike',
      label: 'Muted strike',
      shortName: 'Muted strike',
      description:
        'Striking the head while pressing and holding the stick into the skin to instantly choke the resonance'
    },
    {
      id: 'bell_strike',
      label: 'Bell strike',
      shortName: 'Bell strike',
      description:
        'Hitting a curved iron bell attached to the side or top of the drum shell using a heavy metal ring or bolt'
    },
    {
      id: 'bell_rim_shot',
      label: 'Bell Rim-Shot',
      shortName: 'Bell Rim-Shot',
      description:
        'Striking the iron bell mounted on top of the drum and the wooden hoop of the drum body simultaneously using a heavy metal bolt'
    }
  ],
  mappings: {
    left: {
      up: 'open_strike',
      down: 'muted_strike',
      left: 'bell_strike',
      right: 'bell_rim_shot',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'open_strike'
    },
    right: {
      up: 'open_strike',
      down: 'muted_strike',
      left: 'bell_strike',
      right: 'bell_rim_shot',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'muted_strike'
    }
  }
};
