import { state } from '../state.js';
import {
  playMembrane,
  playNoise,
  playTablaSlideUp,
  playAttackClick,
  speakPhrase,
  playWavSample,
  playBell
} from '../audio.js';

export const flexatone = {
  origin: 'Global / Orchestral',
  description:
    'The Flexatone is a steel sheet metal blade with wooden beaters attached. By shaking the handle and using the thumb to bend the blade, the player produces a highly unique, sliding, high-pitched metallic wobble.',
  performers: [
    {
      name: 'Pierre Boulez',
      spotify: 'true',
      apple: 'true'
    }
  ],
  songs: [
    {
      name: 'Modernist Wobble',
      artist: 'Pierre Boulez',
      spotify: 'true',
      apple: 'true'
    }
  ],
  effectsSongs: [
    {
      name: 'Ethereal Slide Chorus',
      artist: 'Sci-Fi Soundtrack Group',
      desc: 'The metallic sweeps are blended with a thick stereo chorus and light delay, crafting an eerie extraterrestrial aura.',
      url: '',
      platform: 'Spotify'
    }
  ],

  generateSVG: (id, colorType, lugsHtml) => `
    <!-- Subtle backdrop/glow -->
            <circle cx="50" cy="50" r="47" fill="#1e293b" opacity="0.08"/>
            
            <!-- Main flexible spring-steel triangular plate -->
            <path d="M 50 15 L 25 75 L 75 75 Z" fill="url(#chrome-${id})" stroke="#475569" stroke-width="1.8" stroke-linejoin="round" filter="drop-shadow(0px 3px 4px rgba(0,0,0,0.4))"/>
            
            <!-- Central handle support -->
            <rect x="46" y="65" width="8" height="25" rx="2" fill="url(#skin-${id})" stroke="#271305" stroke-width="1.2"/>
            
            <!-- Spring wire beaters branching to left and right -->
            <path d="M 50 25 C 32 25, 20 40, 20 55" fill="none" stroke="#94a3b8" stroke-width="1.2"/>
            <path d="M 50 25 C 68 25, 80 40, 80 55" fill="none" stroke="#94a3b8" stroke-width="1.2"/>
            
            <!-- Wooden/rubber balls on spring ends -->
            <circle cx="20" cy="55" r="5.5" fill="url(#skin-${id})" stroke="#271305" stroke-width="1" filter="drop-shadow(0 1px 1.5px rgba(0,0,0,0.4))"/>
            <circle cx="80" cy="55" r="5.5" fill="url(#skin-${id})" stroke="#271305" stroke-width="1" filter="drop-shadow(0 1px 1.5px rgba(0,0,0,0.4))"/>
            
            <!-- Shadow gradient overlay for 3D metallic curvature -->
            <path d="M 50 15 L 25 75 L 75 75 Z" fill="url(#overlay-${id})" opacity="0.5"/>
  `,
  name: 'Flexatone',
  drums: [
    {
      id: 0,
      label: 'Steel Blade',
      pitchMult: 1,
      color: 'silver',
      sizeValue: 17
    }
  ],
  sounds: {
    handle_shake_roll: (d) => playTablaSlideUp(440 * d.pitchMult, 880 * d.pitchMult, 0.5),
    thumb_pitch_bend: (d) => {
      const success = playWavSample('/media/flexatone_bend.wav', d.pitchMult, 1.0, 0.0);
      if (!success) {
        playTablaSlideUp(250 * d.pitchMult, 750 * d.pitchMult, 0.8);
      }
    },
    frame_knock: (d) => playMembrane(950 * d.pitchMult, 0.04, 1.2, true),
    blade_flick_down: (d) => playTablaSlideUp(880 * d.pitchMult, 330 * d.pitchMult, 0.6)
  },
  touches: [
    {
      id: 'handle_shake_roll',
      label: 'Handle shake roll',
      shortName: 'Handle shake...',
      description:
        'Vibrating the handle rapidly so the two wooden balls mounted on clock springs strike the steel sheet back and forth'
    },
    {
      id: 'thumb_pitch_bend',
      label: 'Thumb pitch bend',
      shortName: 'Thumb pitch ...',
      description:
        'Pressing and bending the flexible sheet steel with the thumb to smoothly glide the acoustic pitch up or down'
    },
    {
      id: 'frame_knock',
      label: 'Frame Knock',
      shortName: 'Frame Knock',
      description:
        'Tapping the solid steel frame with a hard stick or knuckle to bypass the spring-balls and create a pure, high-pitched metal click'
    }
  ],
  mappings: {
    left: {
      up: 'handle_shake_roll',
      down: 'thumb_pitch_bend',
      left: 'frame_knock',
      right: 'blade_flick_down',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'handle_shake_roll'
    },
    right: {
      up: 'handle_shake_roll',
      down: 'thumb_pitch_bend',
      left: 'frame_knock',
      right: 'blade_flick_down',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'thumb_pitch_bend'
    }
  }
};
