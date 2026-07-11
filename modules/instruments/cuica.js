import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const cuica = {
  origin: 'Brazil (Bantu / Central African roots)',
  description:
    'The cuíca is a highly distinctive friction drum. A thin bamboo stick is attached to the center of the drumhead, extending inside. The player rubs the stick with a wet cloth, producing high-pitched squeaks and animal-like grunts, while the other hand presses the drumhead from the outside to modulate the pitch. Essential in Samba school arrangements.',
  performers: [
    {
      name: 'Osvaldinho da Cuíca',
      spotify: 'true',
      apple: 'true'
    }
  ],
  songs: [
    {
      name: 'Taj Mahal',
      artist: 'Jorge Ben Jor',
      spotify: 'true',
      apple: 'true'
    }
  ],
  effectsSongs: [
    {
      name: 'Meia Sola',
      artist: 'Paulinho da Viola',
      desc: 'Squeaks from the cuíca are modulated with a mild phaser, accentuating the rubbery, sliding pitch sweeps that cut through the acoustic samba ensemble.',
      url: 'https://open.spotify.com/track/2SshH0PzGgR8RoxU2pQpP6',
      platform: 'Spotify'
    }
  ],

  generateSVG: (id, colorType, lugsHtml) => `
    <!-- Heavy bottom shadow -->
            <circle cx="50" cy="51" r="48" fill="#020617" opacity="0.6" filter="blur(2px)"/>
            
            <!-- Polished chrome/brass outer rim -->
            <circle cx="50" cy="50" r="47.5" fill="none" stroke="url(#chrome-${id})" stroke-width="3.5"/>
            
            <!-- Natural thin skin -->
            <circle cx="50" cy="50" r="45.5" fill="url(#skin-${id})"/>
            
            <!-- Center bamboo stick node tie detail -->
            <circle cx="50" cy="50" r="4.5" fill="none" stroke="#7c2d12" stroke-width="1.5" opacity="0.8"/>
            <circle cx="50" cy="50" r="2" fill="#ca8a04" stroke="#451a03" stroke-width="0.5" filter="drop-shadow(0 1px 1px rgba(0,0,0,0.4))"/>
            
            <!-- Ambient 3D lighting cover -->
            <circle cx="50" cy="50" r="45.5" fill="url(#overlay-${id})"/>
            
            <!-- Tension lugs -->
            ${lugsHtml}
  `,
  name: 'Cuíca',
  drums: [
    {
      id: 0,
      label: 'Cuíca',
      pitchMult: 1,
      color: 'blonde-light',
      sizeValue: 17
    }
  ],
  sounds: {
    internal_stick_rub: (d) => playTablaSlideUp(750 * d.pitchMult, 1000 * d.pitchMult, 0.13),
    external_thumb_press: (d) => playTablaSlideUp(450 * d.pitchMult, 850 * d.pitchMult, 0.22),
    high_to_low_slide: (d) => playTablaSlideUp(1000 * d.pitchMult, 600 * d.pitchMult, 0.2),
    rim_tap: (d) => playMembrane(600 * d.pitchMult, 0.05, 1.0, false)
  },
  touches: [
    {
      id: 'internal_stick_rub',
      label: 'Internal stick rub',
      shortName: 'Internal sti...',
      description: 'Rubbing a wet cloth up and down a thin bamboo stick affixed to the inside center of the drumhead'
    },
    {
      id: 'external_thumb_press',
      label: 'External thumb press',
      shortName: 'External thu...',
      description: 'Pressing firmly on the outside of the skin near the stick to alter the tension and slide the pitch'
    }
  ],
  mappings: {
    left: {
      up: 'internal_stick_rub',
      down: 'external_thumb_press',
      left: 'high_to_low_slide',
      right: 'rim_tap',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'internal_stick_rub'
    },
    right: {
      up: 'internal_stick_rub',
      down: 'external_thumb_press',
      left: 'high_to_low_slide',
      right: 'rim_tap',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'external_thumb_press'
    }
  }
};
