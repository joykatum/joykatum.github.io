import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const friction_drum = {
  origin: 'Europe / Central Africa',
  description:
    'The Friction Drum is a family of drums (including the Spanish zambomba, German brummtopf, and Italian caccavella) that produces sound via friction rather than striking. A wooden stick or heavy cord is inserted into the center of the drumhead. Rubbing the stick with a wet cloth or resin-coated hand transmits intense friction vibrations directly to the skin, producing deep, groaning sweeps, sliding sighs, and rhythmic grunts. Interesting fact: in Europe, these drums have been played for centuries during winter carnivals, street parades, and Christmas carol sessions to drive away evil winter spirits with their spooky, animal-like growls.',
  performers: [
    {
      name: 'Alfio Antico',
      spotify: 'true',
      apple: 'true'
    },
    {
      name: 'Coetus Ensemble',
      spotify: 'true',
      apple: 'true'
    }
  ],
  songs: [
    {
      name: 'Friction Dance',
      artist: 'Alfio Antico',
      spotify: 'true',
      apple: 'true'
    }
  ],
  effectsSongs: [
    {
      name: 'Carnival Rumbles',
      artist: 'Alfio Antico',
      desc: 'The friction groans are run through sub-bass harmonizers and a dark, large cathedral reverb, turning the acoustic grunts into deep cinematic rumbles.',
      url: '',
      platform: 'Spotify'
    }
  ],

  generateSVG: (id, colorType, lugsHtml) => `
    <!-- Heavy bottom shadow -->
            <circle cx="50" cy="51" r="48" fill="#020617" opacity="0.6" filter="blur(2px)"/>
            
            <!-- Heavy clay/wood bowl rim -->
            <circle cx="50" cy="50" r="47.5" fill="none" stroke="#7c2d12" stroke-width="4.5"/>
            
            <!-- Natural stretched bladder/skin head -->
            <circle cx="50" cy="50" r="44.5" fill="url(#skin-${id})"/>
            
            <!-- Centered rod/stick node tie detail with a prominent friction cane stick rising up -->
            <circle cx="50" cy="50" r="8" fill="none" stroke="#451a03" stroke-width="1.5" stroke-dasharray="2 2" opacity="0.7"/>
            <circle cx="50" cy="50" r="4" fill="#a16207" stroke="#451a03" stroke-width="0.8"/>
            <line x1="50" y1="50" x2="68" y2="32" stroke="#eab308" stroke-width="3" stroke-linecap="round" filter="drop-shadow(1px 2px 2px rgba(0,0,0,0.4))"/>
            <line x1="50" y1="50" x2="68" y2="32" stroke="#ffffff" stroke-width="1" opacity="0.5" stroke-linecap="round"/>
            
            <!-- Ambient 3D lighting cover -->
            <circle cx="50" cy="50" r="44.5" fill="url(#overlay-${id})"/>
  `,
  name: 'Friction Drum',
  drums: [
    {
      id: 0,
      label: 'Friction Drum',
      pitchMult: 1,
      color: 'darker',
      sizeValue: 17
    }
  ],
  sounds: {
    rub_low: (d) => {
      playTablaSlideUp(70 * d.pitchMult, 120 * d.pitchMult, 0.5);
      playNoise(0.5, 200, state.currentTiltVolume * 0.8);
    },
    rub_high: (d) => {
      playTablaSlideUp(140 * d.pitchMult, 80 * d.pitchMult, 0.5);
      playNoise(0.5, 300, state.currentTiltVolume * 0.8);
    }
  },
  touches: [
    {
      id: 'rub_low',
      label: 'Internal stick rub',
      shortName: 'Internal stick rub',
      description: 'Rubbing a wet cloth up and down a thin bamboo stick affixed to the inside center of the drumhead'
    },
    {
      id: 'rub_high',
      label: 'External thumb press',
      shortName: 'External thumb press',
      description: 'Pressing firmly on the outside of the skin near the stick to alter the tension and slide the pitch'
    }
  ],
  mappings: {
    left: {
      up: 'rub_low',
      down: 'rub_high',
      left: '',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'rub_low'
    },
    right: {
      up: 'rub_low',
      down: 'rub_high',
      left: '',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'rub_high'
    }
  }
};
