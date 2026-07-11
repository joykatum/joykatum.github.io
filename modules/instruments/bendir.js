import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const bendir = {
  origin: 'North Africa',
  description:
    'The Bendir is a North African frame drum featuring snare strings made of gut stretched across the underside of the head. When struck, the strings vibrate, producing a distinctive buzzing, snare-like sustain.',
  performers: [
    {
      name: 'Karim Ziad',
      spotify: 'true',
      apple: 'true'
    }
  ],
  songs: [
    {
      name: 'Gnawa Fusion',
      artist: 'Karim Ziad',
      spotify: 'true',
      apple: 'true'
    }
  ],
  effectsSongs: [
    {
      name: 'Snare Buzz Spring Reverb',
      artist: 'Morocco Fusion Group',
      desc: 'Gut snare vibrations are routed into a vintage spring reverb, accentuating the dusty, historic character of Gnawa rhythms.',
      url: '',
      platform: 'Spotify'
    }
  ],

  generateSVG: (id, colorType, lugsHtml) => `
    <!-- Heavy bottom shadow -->
            <circle cx="50" cy="51" r="49" fill="#020617" opacity="0.6" filter="blur(2px)"/>
            
            <!-- Thin walnut/mahogany wood hoop -->
            <circle cx="50" cy="50" r="48" fill="none" stroke="#7c2d12" stroke-width="2.5"/>
            
            <!-- Real sheepskin drumhead -->
            <circle cx="50" cy="50" r="46.5" fill="url(#skin-${id})"/>
            
            <!-- Snares stretched beneath the skin (visible as faint parallel lines under tension) -->
            <line x1="12" y1="45" x2="88" y2="45" stroke="#451a03" stroke-width="0.8" opacity="0.25"/>
            <line x1="10" y1="50" x2="90" y2="50" stroke="#451a03" stroke-width="0.8" opacity="0.3"/>
            <line x1="12" y1="55" x2="88" y2="55" stroke="#451a03" stroke-width="0.8" opacity="0.25"/>
            
            <!-- Minimal skin edge hoop detail -->
            <circle cx="50" cy="50" r="45.5" fill="none" stroke="#1e1b18" stroke-width="0.8" opacity="0.5"/>
            
            <!-- Ambient 3D lighting cover -->
            <circle cx="50" cy="50" r="46.5" fill="url(#overlay-${id})"/>
  `,
  name: 'Bendir',
  drums: [
    {
      id: 0,
      label: 'Bendir Head',
      pitchMult: 1,
      color: 'blonde',
      sizeValue: 21.5
    }
  ],
  sounds: {
    dum: (d) => playMembrane(75 * d.pitchMult, 0.8, 1.4, false),
    tak: (d) => {
      playMembrane(320 * d.pitchMult, 0.15, 0.95, true);
      playNoise(0.12, 1400, state.currentTiltVolume * 0.85);
    },
    kah: (d) => {
      playMembrane(150 * d.pitchMult, 0.45, 1.1, false);
      playNoise(0.06, 800, state.currentTiltVolume * 0.4);
    },
    snare_rattle_mute: (d) => playMembrane(180 * d.pitchMult, 0.1, 1.0, false),
    fingernail_rim_rim: (d) => playNoise(0.08, 1000, state.currentTiltVolume * 0.5)
  },
  touches: [
    {
      id: 'dum',
      label: 'Dum',
      shortName: 'Dum',
      description:
        'A low, center strike that captures the deep air resonance combined with the buzzing vibration of internal gut snares'
    },
    {
      id: 'tak',
      label: 'Tak',
      shortName: 'Tak',
      description: 'A crisp, high-pitched finger snap on the extreme perimeter of the frame drumhead'
    },
    {
      id: 'kah',
      label: 'Kah',
      shortName: 'Kah',
      description: 'Striking the rim while keeping the fingers flat to produce a dry, muted, non-resonant tap'
    },
    {
      id: 'snare_rattle_mute',
      label: 'Snare rattle mute',
      shortName: 'Snare rattle...',
      description:
        'Pressing one hand against the skin to completely kill the head resonance, leaving only the snare buzz'
    },
    {
      id: 'fingernail_rim_rim',
      label: 'Fingernail Rim Rim',
      shortName: 'Fingernail R...',
      description:
        'Flicking the hard fingernails directly against the inner wooden frame to bypass the snare buzz and get a sharp, castanet-like click'
    }
  ],
  mappings: {
    left: {
      up: 'dum',
      down: 'tak',
      left: 'kah',
      right: 'snare_rattle_mute',
      upLong: 'fingernail_rim_rim',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'dum'
    },
    right: {
      up: 'dum',
      down: 'tak',
      left: 'kah',
      right: 'snare_rattle_mute',
      upLong: 'fingernail_rim_rim',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'tak'
    }
  }
};
