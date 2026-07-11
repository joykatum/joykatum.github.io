import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const lions_roar = {
  origin: 'East Asia (China) / Europe',
  description:
    "The Lion's Roar is a highly unusual friction drum that produces a realistic, spine-chilling sound resembling the roar of a wild lion. It consists of a single-headed cylindrical drum with a sturdy cord or rope threaded through the center of the skin, secured by a knot. To play it, the performer holds a piece of wet leather or resin-coated cloth and slides it firmly along the cord. The resulting friction transmits intense vibrations directly to the drumhead, which acts as a powerful acoustic resonator. Interesting fact: it is used in classical orchestral works like Edgar Varèse's 'Hyperprism' and in traditional Chinese theatrical sound effects to signify supernatural occurrences or epic battles.",
  performers: [
    {
      name: 'Jean-Pierre Drouet',
      spotify: 'true',
      apple: 'true'
    },
    {
      name: 'Emil Richards',
      spotify: 'true',
      apple: 'true'
    }
  ],
  songs: [
    {
      name: 'Friction Waves',
      artist: 'Jean-Pierre Drouet',
      spotify: 'true',
      apple: 'true'
    }
  ],
  effectsSongs: [
    {
      name: 'Hyperprism Rumbles',
      artist: 'Jean-Pierre Drouet',
      desc: "The eerie growling sweeps of the Lion's Roar are processed through extreme ring modulators and deep stereo phasers, enhancing their spectral, otherworldly texture.",
      url: '',
      platform: 'Spotify'
    }
  ],

  generateSVG: (id, colorType, lugsHtml) => `
    <circle cx="50" cy="51" r="48" fill="#020617" opacity="0.6" filter="blur(2px)"/>
            <circle cx="50" cy="50" r="47.5" fill="none" stroke="#5c4033" stroke-width="3"/>
            <circle cx="50" cy="50" r="44.5" fill="url(#skin-${id})"/>
            <circle cx="50" cy="50" r="5" fill="url(#chrome-${id})" stroke="#0f172a" stroke-width="0.8"/>
            <circle cx="50" cy="50" r="2" fill="#020617"/>
            <path d="M 50 50 Q 60 40, 68 52 T 85 45" fill="none" stroke="#a27b5c" stroke-width="4" stroke-dasharray="1.5, 1.5" stroke-linecap="round" filter="drop-shadow(0px 2px 2px rgba(0,0,0,0.5))"/>
            <circle cx="50" cy="50" r="44.5" fill="url(#overlay-${id})" opacity="0.5"/>
  `,
  name: "Lion's Roar",
  drums: [
    {
      id: 0,
      label: "Lion's Roar",
      pitchMult: 1,
      color: 'caramel-light',
      sizeValue: 21
    }
  ],
  sounds: {
    rope_friction_pull_push: (d) => playNoise(0.3, 200, state.currentTiltVolume * 0.5),
    cylinder_tap: (d) => {
      playTablaSlideUp(160 * d.pitchMult, 70 * d.pitchMult, 0.8);
      playNoise(0.8, 300, state.currentTiltVolume * 0.8);
    }
  },
  touches: [
    {
      id: 'rope_friction_pull_push',
      label: 'Rope friction pull/push',
      shortName: 'Rope frictio...',
      description:
        'Pulling a resin-coated rope or leather strap through a hole in the center of the drumhead with a wet cloth to generate a growl'
    },
    {
      id: 'cylinder_tap',
      label: 'Cylinder tap',
      shortName: 'Cylinder tap',
      description:
        'Tapping on the wooden acoustic cylinder body with a mallet to get a dry wood-block pop between the friction rope growls'
    }
  ],
  mappings: {
    left: {
      up: 'rope_friction_pull_push',
      down: 'cylinder_tap',
      left: '',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'rope_friction_pull_push'
    },
    right: {
      up: 'rope_friction_pull_push',
      down: 'cylinder_tap',
      left: '',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'cylinder_tap'
    }
  }
};
