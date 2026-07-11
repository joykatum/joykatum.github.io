import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const repinique = {
  origin: 'Brazil',
  description:
    'The Repinique is a high-pitched metal-shell double-headed drum in Brazilian Samba. Played with one stick and one bare hand, it acts as the lead instrument of the samba baterias, initiating calls and solos.',
  performers: [
    {
      name: 'Monobloco Solos',
      spotify: 'true',
      apple: 'true'
    }
  ],
  songs: [
    {
      name: 'Batucada Call',
      artist: 'Monobloco',
      spotify: 'true',
      apple: 'true'
    }
  ],
  effectsSongs: [
    {
      name: 'Metallic Shell Compression',
      artist: 'Rio Carnival Sound',
      desc: 'The bright metal ring of the shells is captured with a dedicated dynamic microphone and highlighted with high-frequency exciters.',
      url: '',
      platform: 'Spotify'
    }
  ],

  generateSVG: (id, colorType, lugsHtml) => `
    <circle cx="50" cy="50" r="47" fill="#1e293b" opacity="0.08"/>
            
            <!-- Brazilian high-pitched steel drum with stick -->
            <g transform="rotate(12, 50, 50)">
              <!-- Body shadow -->
              <rect x="22" y="26" width="56" height="48" rx="12" fill="#020617" opacity="0.4" filter="blur(3.5px)"/>
              
              <!-- Medium-depth polished steel cylinder shell -->
              <rect x="24" y="28" width="52" height="44" rx="5" fill="url(#chrome-${id})" stroke="#475569" stroke-width="1.8" filter="drop-shadow(0 3px 4px rgba(0,0,0,0.4))"/>
              
              <!-- Vertical chrome tension rods running along body -->
              <line x1="29" y1="24" x2="29" y2="76" stroke="#94a3b8" stroke-width="1.5"/>
              <line x1="39" y1="24" x2="39" y2="76" stroke="#94a3b8" stroke-width="1.5"/>
              <line x1="50" y1="24" x2="50" y2="76" stroke="#94a3b8" stroke-width="1.5"/>
              <line x1="61" y1="24" x2="61" y2="76" stroke="#94a3b8" stroke-width="1.5"/>
              <line x1="71" y1="24" x2="71" y2="76" stroke="#94a3b8" stroke-width="1.5"/>
              
              <!-- Top synthetic head with chrome rim seen in perspective -->
              <ellipse cx="50" cy="28" rx="26" ry="6" fill="#fdfefe" stroke="url(#chrome-${id})" stroke-width="2" filter="drop-shadow(0 -1px 1px rgba(0,0,0,0.3))"/>
              <ellipse cx="50" cy="28" rx="22" ry="4.8" fill="none" stroke="#e2e8f0" stroke-width="0.5"/>
              
              <!-- Bottom head seen in perspective -->
              <ellipse cx="50" cy="72" rx="26" ry="6" fill="#cbd5e1" stroke="url(#chrome-${id})" stroke-width="2"/>
              
              <!-- A wooden drumstick laying diagonally across the top head -->
              <line x1="26" y1="25" x2="72" y2="40" stroke="#fef08a" stroke-width="1.8" stroke-linecap="round" filter="drop-shadow(1px 2px 2px rgba(0,0,0,0.45))"/>
              <circle cx="72" cy="40" r="1.1" fill="#ca8a04"/>
              
              <!-- Ambient 3D metal shell gloss -->
              <rect x="24" y="28" width="52" height="44" rx="5" fill="url(#overlay-${id})" opacity="0.55"/>
              <line x1="26" y1="30" x2="26" y2="70" stroke="#ffffff" stroke-width="1.5" opacity="0.3"/>
            </g>
  `,
  name: 'Repinique',
  drums: [
    {
      id: 0,
      label: 'Repinique',
      pitchMult: 1,
      color: 'silver',
      sizeValue: 18.5
    }
  ],
  sounds: {
    mano: (d) => playMembrane(450 * d.pitchMult, 0.15, 0.9, true),
    baqueta: (d) => playMembrane(450 * d.pitchMult, 0.15, 0.9, true),
    rimshot_crack: (d) => playMembrane(450 * d.pitchMult, 0.15, 0.9, true),
    stick_slide_pitch_bend: (d) => playMembrane(160 * d.pitchMult, 0.45, 1.1, false)
  },
  touches: [
    {
      id: 'mano',
      label: 'Mano',
      shortName: 'Mano',
      description: 'Striking the head with a bare hand using either a clean open tone or a sharp, heavy slap'
    },
    {
      id: 'baqueta',
      label: 'Baqueta',
      shortName: 'Baqueta',
      description:
        'Executing a whip-like strike on the plastic head with a long wooden or plastic stick held in the dominant hand'
    },
    {
      id: 'rimshot_crack',
      label: 'Rimshot crack',
      shortName: 'Rimshot crack',
      description:
        'Striking the metal hoop and the plastic head simultaneously with the stick to produce a piercing signal crack'
    },
    {
      id: 'stick_slide_pitch_bend',
      label: 'Stick Slide Pitch-Bend',
      shortName: 'Stick Slide ...',
      description:
        'Pressing the wooden stick firmly into the center of the plastic head while slapping the edge with the bare hand to slide the pitch upward'
    }
  ],
  mappings: {
    left: {
      up: 'mano',
      down: 'baqueta',
      left: 'rimshot_crack',
      right: 'stick_slide_pitch_bend',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'mano'
    },
    right: {
      up: 'mano',
      down: 'baqueta',
      left: 'rimshot_crack',
      right: 'stick_slide_pitch_bend',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'baqueta'
    }
  }
};
