import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const tammorra = {
  origin: 'Southern Italy (Campania)',
  description:
    "The Tammorra is a large, sacred Italian frame drum decorated with multiple sets of handmade tin-plate jingles. It is the rhythmic heartbeat of Campania folk heritage, traditionally accompanying the ecstatic, spinning agrarian dance known as the 'Tammurriata'. The drum is played with a unique, rolling thumb-finger technique that creates a continuous, hypnotic rumble representing the volcanic fire of Mount Vesuvius. Interesting fact: traditionally, the drumheads are stretched over sieves used for sifting flour, symbolizing abundance and the earth's fertility. Today, performers utilize this drum to bridge traditional folk storytelling with modern world fusion.",
  performers: [
    {
      name: 'Alfio Antico',
      spotify: 'true',
      apple: 'true'
    },
    {
      name: 'Tullio De Piscopo',
      spotify: 'true',
      apple: 'true'
    }
  ],
  songs: [
    {
      name: 'Tammurriata',
      artist: 'Alfio Antico',
      spotify: 'true',
      apple: 'true'
    }
  ],
  effectsSongs: [
    {
      name: 'Sila',
      artist: 'Alfio Antico',
      desc: "The tammorra's deep resonance is captured with vintage stereo ribbon mics and fed through warm analog spring reverbs to emphasize its haunting, raw energy.",
      url: '',
      platform: 'Spotify'
    }
  ],

  name: 'Tammorra',
  drums: [
    {
      id: 0,
      label: 'Tammorra',
      pitchMult: 1,
      color: 'darker',
      sizeValue: 22
    }
  ],
  sounds: {
    bass_center_pulse: (d) => {
      playMembrane(60 * d.pitchMult, 0.6, 1.4);
      playNoise(0.2, 400, state.currentTiltVolume * 0.3);
    },
    finger_roll_friction_drag: (d) => {
      playMembrane(110 * d.pitchMult, 0.4, 1.1);
      playNoise(0.12, 1200, state.currentTiltVolume * 0.4);
    },
    rim_wood_crack: (d) => {
      playMembrane(210 * d.pitchMult, 0.15, 1.2, true);
      playNoise(0.2, 2800, state.currentTiltVolume * 1.1);
    }
  },
  touches: [
    {
      id: 'bass_center_pulse',
      label: 'Bass center pulse',
      shortName: 'Bass center ...',
      description: 'A heavy, flat-handed palm strike in the center of the head to draw out the deep frame resonance'
    },
    {
      id: 'finger_roll_friction_drag',
      label: 'Finger roll / Friction drag',
      shortName: 'Finger roll ...',
      description:
        'Dragging a wet thumb or rolling the fingers across the skin to continuously shake the heavy, tin-plated jingles'
    },
    {
      id: 'rim_wood_crack',
      label: 'Rim Wood Crack',
      shortName: 'Rim Wood Crack',
      description:
        'Striking the outer rim sharply with the side of the thumb to maximize the wooden frame crack while minimizing the jingle ring'
    }
  ],
  mappings: {
    left: {
      up: 'bass_center_pulse',
      down: 'finger_roll_friction_drag',
      left: 'rim_wood_crack',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'bass_center_pulse'
    },
    right: {
      up: 'bass_center_pulse',
      down: 'finger_roll_friction_drag',
      left: 'rim_wood_crack',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'finger_roll_friction_drag'
    }
  }
};
