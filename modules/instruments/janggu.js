import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const janggu = {
  origin: 'Korea',
  description:
    'The Janggu is an hourglass-shaped double-headed drum central to Korean traditional music (Samulnori). Struck with a mallet on the bass side and a thin bamboo stick on the treble side, it represents the harmony of yin and yang.',
  performers: [
    {
      name: 'Kim Duk-soo',
      spotify: 'true',
      apple: 'true'
    }
  ],
  songs: [
    {
      name: 'Samulnori Suite',
      artist: 'Kim Duk-soo',
      spotify: 'true',
      apple: 'true'
    }
  ],
  effectsSongs: [
    {
      name: 'Korean Folk Phasing Echo',
      artist: 'Seoul Traditional Ensemble',
      desc: 'A phasing effect on the high-pitched bamboo stick hits enhances the dynamic syncopations of Korean courtyard music.',
      url: '',
      platform: 'Spotify'
    }
  ],

  generateSVG: (id, colorType, lugsHtml) => `
    <circle cx="50" cy="50" r="47" fill="#1e293b" opacity="0.08"/>
            
            <!-- Hourglass lacquered wood body in background -->
            <path d="M 28 18 Q 50 44, 50 50 Q 50 56, 72 82 L 28 82 Q 50 56, 50 50 Q 50 44, 72 18 Z" fill="#7f1d1d" stroke="#450a0a" stroke-width="1.5" filter="drop-shadow(0 3px 5px rgba(0,0,0,0.5))"/>
            
            <!-- Thick rope laces (shirabe) connecting the two heads -->
            <path d="M 25 20 L 25 80 M 75 20 L 75 80 M 25 20 L 75 80 M 75 20 L 25 80 M 50 20 L 50 80 M 25 20 L 50 80 M 75 20 L 50 80 M 25 80 L 50 20 M 75 80 L 50 20" stroke="#fef08a" stroke-width="1.2" opacity="0.8" filter="drop-shadow(0.5px 1px 1px rgba(0,0,0,0.3))"/>
            
            <!-- Sliding leather tuning collars (buba) on ropes -->
            <rect x="35" y="32" width="4" height="6" rx="1" fill="#7c2d12" stroke="#451a03" stroke-width="0.5"/>
            <rect x="61" y="32" width="4" height="6" rx="1" fill="#7c2d12" stroke="#451a03" stroke-width="0.5"/>
            <rect x="48" y="62" width="4" height="6" rx="1" fill="#7c2d12" stroke="#451a03" stroke-width="0.5"/>
            <rect x="35" y="62" width="4" height="6" rx="1" fill="#7c2d12" stroke="#451a03" stroke-width="0.5"/>
            
            <!-- Left head (Gungpyeon, thicker white/cream hide) -->
            <ellipse cx="50" cy="20" rx="26" ry="7" fill="#fdf3e7" stroke="#ad845b" stroke-width="2" filter="drop-shadow(0px -1px 2px rgba(0,0,0,0.3))"/>
            <ellipse cx="50" cy="20" rx="22" ry="5.5" fill="none" stroke="#e3be96" stroke-width="0.8" opacity="0.6"/>
            
            <!-- Right head (Yeolpyeon, thinner yellowish hide) -->
            <ellipse cx="50" cy="80" rx="26" ry="7" fill="#f5caa0" stroke="#8a5b30" stroke-width="2" filter="drop-shadow(0px 1px 2px rgba(0,0,0,0.3))"/>
            <ellipse cx="50" cy="80" rx="22" ry="5.5" fill="none" stroke="#ca9463" stroke-width="0.8" opacity="0.6"/>
            
            <!-- Central waist cord band -->
            <rect x="44" y="47" width="12" height="6" rx="1.5" fill="#18181b" stroke="#27272a" stroke-width="0.5"/>
  `,
  name: 'Janggu',
  defaultRight: 1,
  drums: [
    {
      id: 0,
      label: 'Gungpyeon (Bass)',
      pitchMult: 0.8,
      color: 'blonde',
      sizeValue: 21
    },
    {
      id: 1,
      label: 'Yeolpyeon (Treble)',
      pitchMult: 1.3,
      color: 'blonde-light',
      sizeValue: 18.5
    }
  ],
  sounds: {
    kung: (d) => {
      const baseId = parseInt(d.id);
      if (baseId === 0) playMembrane(88 * d.pitchMult, 0.14, 1.0, false);
      else playMembrane(230 * d.pitchMult, 0.08, 1.0, false);
    },
    chae: (d) => {
      const baseId = parseInt(d.id);
      if (baseId === 0) playMembrane(88 * d.pitchMult, 0.14, 1.0, false);
      else playMembrane(230 * d.pitchMult, 0.08, 1.0, false);
    },
    hoop_rim_click: (d) => {
      const baseId = parseInt(d.id);
      if (baseId === 0) playMembrane(72 * d.pitchMult, 0.78, 1.38, false);
      else playMembrane(210 * d.pitchMult, 0.32, 1.0, false);
    },
    center_stick_mute: (d) => {
      const baseId = parseInt(d.id);
      if (baseId === 0) playMembrane(88 * d.pitchMult, 0.14, 1.0, false);
      else playMembrane(230 * d.pitchMult, 0.08, 1.0, false);
    }
  },
  touches: [
    {
      id: 'kung',
      label: 'Kung',
      shortName: 'Kung',
      description:
        'Striking the thick, un-shaved hide head with a round-headed mallet to produce a deep, warm bass note'
    },
    {
      id: 'chae',
      label: 'Chae',
      shortName: 'Chae',
      description:
        'Whipping the thin, shaved skin head with a long, flexible bamboo stick to create a sharp, biting high pitch'
    },
    {
      id: 'hoop_rim_click',
      label: 'Hoop rim click',
      shortName: 'Hoop rim click',
      description: 'Striking the bamboo stick shaft directly against the outer wooden hoop of the drum frame'
    },
    {
      id: 'center_stick_mute',
      label: 'Center stick Mute',
      shortName: 'Center stick...',
      description:
        'Pressing the bamboo stick flat across the center of the thin head to completely choke the resonance while striking the outer hoop'
    }
  ],
  mappings: {
    left: {
      up: 'kung',
      down: 'chae',
      left: 'hoop_rim_click',
      right: 'center_stick_mute',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'kung'
    },
    right: {
      up: 'kung',
      down: 'chae',
      left: 'hoop_rim_click',
      right: 'center_stick_mute',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'chae'
    }
  }
};
