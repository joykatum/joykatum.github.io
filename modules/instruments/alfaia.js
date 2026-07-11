import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const alfaia = {
  origin: 'Northeastern Brazil (Pernambuco)',
  description:
    'The Alfaia is a large, heavy wooden drum tuned with thick ropes, central to the Maracatu parade rhythms of Pernambuco. Handcrafted from local wood and goatskin, it is worn over the shoulder and struck with heavy wooden mallets. Interesting fact: the Alfaia is unique because it is tuned extremely low, producing a deep, wet, muddy bass thud that resembles an acoustic heartbeat. It represents Afro-Brazilian spiritual resilience, traditionally played during sacred ceremonies and festive street processions to invoke the spirits of ancestral kings and queens.',
  performers: [
    {
      name: 'Naná Vasconcelos',
      spotify: 'true',
      apple: 'true'
    },
    {
      name: 'Chico Science',
      spotify: 'true',
      apple: 'true'
    }
  ],
  songs: [
    {
      name: 'Maracatu Misterioso',
      artist: 'Naná Vasconcelos',
      spotify: 'true',
      apple: 'true'
    }
  ],
  effectsSongs: [
    {
      name: 'Da Lama Ao Caos',
      artist: 'Chico Science',
      desc: 'The booming Alfaia hits are enhanced with sub-bass synthesizers and transient shapers, giving the traditional drum a modern, heavy metal punch in studio mixes.',
      url: '',
      platform: 'Spotify'
    }
  ],

  generateSVG: (id, colorType, lugsHtml) => `
    <circle cx="50" cy="50" r="47" fill="#1e293b" opacity="0.08"/>
            
            <!-- Colorful Brazilian Maracatu drum -->
            <g transform="rotate(-15, 50, 50)">
              <!-- Body shadow -->
              <rect x="22" y="24" width="56" height="52" rx="14" fill="#020617" opacity="0.4" filter="blur(3px)"/>
              
              <!-- Red painted wood cylinder body -->
              <rect x="24" y="26" width="52" height="48" rx="6" fill="#b91c1c" stroke="#450a0a" stroke-width="2"/>
              
              <!-- Thick horizontal yellow painted wood hoops at top and bottom -->
              <rect x="22" y="22" width="56" height="8" rx="2" fill="#eab308" stroke="#854d0e" stroke-width="1.2" filter="drop-shadow(0 2px 2px rgba(0,0,0,0.3))"/>
              <rect x="22" y="70" width="56" height="8" rx="2" fill="#eab308" stroke="#854d0e" stroke-width="1.2" filter="drop-shadow(0 2px 2px rgba(0,0,0,0.3))"/>
              
              <!-- Heavy green/yellow ropes laced in V-patterns between the hoops -->
              <path d="M 25 30 L 31 70 L 37 30 L 43 70 L 49 30 L 55 70 L 61 30 L 67 70 L 73 30" fill="none" stroke="#15803d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" filter="drop-shadow(0.5px 1px 1px rgba(0,0,0,0.35))"/>
              
              <!-- Top rawhide head seen in perspective -->
              <ellipse cx="50" cy="22" rx="26" ry="6" fill="url(#skin-${id})" stroke="#713f12" stroke-width="1.2" filter="drop-shadow(0 -1px 1px rgba(0,0,0,0.25))"/>
              
              <!-- Bottom rawhide head seen in perspective -->
              <ellipse cx="50" cy="78" rx="26" ry="6" fill="url(#skin-${id})" stroke="#713f12" stroke-width="1.2" filter="drop-shadow(0 1px 1px rgba(0,0,0,0.25))"/>
              
              <!-- Ambient 3D shading -->
              <rect x="24" y="26" width="52" height="48" rx="6" fill="url(#overlay-${id})" opacity="0.6"/>
              <line x1="26" y1="28" x2="26" y2="72" stroke="#ffffff" stroke-width="1.2" opacity="0.15"/>
            </g>
  `,
  name: 'Alfaia',
  drums: [
    {
      id: 0,
      label: 'Alfaia',
      pitchMult: 1,
      color: 'wood',
      sizeValue: 24
    }
  ],
  sounds: {
    golpe: (d, velocity = 0.85) => {
      // Extremely deep, booming mallet hit on a loose skin head (around 52Hz)
      playMembrane(52 * d.pitchMult, 0.85, 1.4, false, velocity, 0.0);
      playAttackClick(0.015, 800, 0.3 * velocity);
    },
    aro: (d, velocity = 0.8) => {
      // Striking the wooden rim (aro) produces a dry, woody clack
      playMembrane(450 * d.pitchMult, 0.08, 1.0, true, velocity, 0.0);
      playAttackClick(0.012, 2800, 0.4 * velocity);
    },
    stick_on_stick_hoop_rimshot: (d, velocity = 0.9) => {
      // A massive cracking wood-on-wood rimshot: higher pitch, rapid click and sharp decay
      playMembrane(580 * d.pitchMult, 0.05, 1.0, true, velocity, 0.0);
      playAttackClick(0.008, 3800, 0.7 * velocity);
      playNoise(0.04, 3200, velocity * 0.4, 'highpass');
    }
  },
  touches: [
    {
      id: 'golpe',
      label: 'Golpe',
      shortName: 'Golpe',
      description: 'Powerful impact directly in the center of the calfskin head to create a deep, booming bass pulse'
    },
    {
      id: 'aro',
      label: 'Aro',
      shortName: 'Aro',
      description: 'Striking the thick wooden outer tuning hoops to produce a heavy, cracking rim-click'
    },
    {
      id: 'stick_on_stick_hoop_rimshot',
      label: 'Stick-on-Stick Hoop Rimshot',
      shortName: 'Stick-on-Sti...',
      description:
        'Holding one stick flat against the wooden tuning hoop and striking it with the other stick to create a massive, cracking rimshot'
    }
  ],
  mappings: {
    left: {
      up: 'golpe',
      down: 'aro',
      left: 'stick_on_stick_hoop_rimshot',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'golpe'
    },
    right: {
      up: 'golpe',
      down: 'aro',
      left: 'stick_on_stick_hoop_rimshot',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'aro'
    }
  }
};
