import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const tar_drum = {
  origin: 'North Africa / Middle East',
  description:
    'The Tar is a large, thin, and deep North African frame drum without jingles, producing an incredibly pure, warm, open bass tone alongside crisp edge taps. Historically played by female priestesses in spiritual ceremonies, its deep, pure acoustic resonance is highly therapeutic and meditative. Interesting fact: the Tar is the ancestor of many modern frame drums. Playing it involves resting the drum on the knee or holding it high, using subtle finger taps and thumb rolls to create intricate rhythmic cycles (Talas) that guide chanting, trances, and devotional world fusion music.',
  performers: [
    {
      name: 'Layne Redmond',
      spotify: 'true',
      apple: 'true'
    },
    {
      name: 'Glen Velez',
      spotify: 'true',
      apple: 'true'
    }
  ],
  songs: [
    {
      name: 'Ritual Drumming',
      artist: 'Layne Redmond',
      spotify: 'true',
      apple: 'true'
    }
  ],
  effectsSongs: [
    {
      name: 'Seven Heaven',
      artist: 'Layne Redmond',
      desc: "The Tar's meditative low-end is enhanced with multiband compression and a wide stereo delay, wrapping the listener in a warm, pulsing blanket of sound.",
      url: '',
      platform: 'Spotify'
    }
  ],

  generateSVG: (id, colorType, lugsHtml) => `
    <!-- Heavy bottom shadow -->
            <circle cx="50" cy="51" r="49" fill="#020617" opacity="0.6" filter="blur(2px)"/>
            
            <!-- Very thin wooden hoop -->
            <circle cx="50" cy="50" r="48.5" fill="none" stroke="#8b5a2b" stroke-width="2"/>
            
            <!-- Real leather skin -->
            <circle cx="50" cy="50" r="47.5" fill="url(#skin-${id})"/>
            
            <!-- Minimal edge detail -->
            <circle cx="50" cy="50" r="46.5" fill="none" stroke="#1e1b18" stroke-width="0.8" opacity="0.5"/>
            <circle cx="50" cy="50" r="42" fill="none" stroke="#ffffff" stroke-width="0.2" opacity="0.1"/>
            
            <!-- Ambient 3D lighting cover -->
            <circle cx="50" cy="50" r="47.5" fill="url(#overlay-${id})"/>
  `,
  name: 'Tar',
  drums: [
    {
      id: 0,
      label: 'Tar',
      pitchMult: 1,
      color: 'blonde',
      sizeValue: 24
    }
  ],
  sounds: {
    dum: (d) => playMembrane(65 * d.pitchMult, 0.7, 1.4, false),
    tak: (d) => {
      playMembrane(240 * d.pitchMult, 0.15, 1.2, true);
      playNoise(0.06, 2200, state.currentTiltVolume * 0.8);
    },
    fingertip_roll_friction_drag: (d) => playNoise(0.05, 1800, state.currentTiltVolume * 0.5),
    back_frame_scratch: (d) => playNoise(0.05, 1800, state.currentTiltVolume * 0.5)
  },
  touches: [
    {
      id: 'dum',
      label: 'Dum',
      shortName: 'Dum',
      description: 'A low, open finger strike delivered to the lower edge of the large frame drum skin'
    },
    {
      id: 'tak',
      label: 'Tak',
      shortName: 'Tak',
      description: 'A bright, high-pitched finger tap executed on the very perimeter of the wooden shell rim'
    },
    {
      id: 'fingertip_roll_friction_drag',
      label: 'Fingertip roll / Friction drag',
      shortName: 'Fingertip ro...',
      description: 'Dragging the fingertips across the textured skin to create a continuous, raspy friction sound'
    },
    {
      id: 'back_frame_scratch',
      label: 'Back-Frame Scratch',
      shortName: 'Back-Frame S...',
      description:
        'Scraping the fingertips along the inner wooden rim of the frame drum to create a subtle, whispering friction texture'
    }
  ],
  mappings: {
    left: {
      up: 'dum',
      down: 'tak',
      left: 'fingertip_roll_friction_drag',
      right: 'back_frame_scratch',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'dum'
    },
    right: {
      up: 'dum',
      down: 'tak',
      left: 'fingertip_roll_friction_drag',
      right: 'back_frame_scratch',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'tak'
    }
  }
};
