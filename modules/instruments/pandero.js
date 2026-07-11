import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const pandero = {
  origin: 'Puerto Rico',
  description:
    'The pandero represents the family of hand-held frame drums used in Puerto Rican Plena. These untuned drums, traditionally named Primo, Seguidor, and Requinto, are struck with fingers and palms to play high-energy, syncopated rhythms that tell local neighborhood stories.',
  performers: [
    {
      name: 'Mon Rivera',
      spotify: 'true',
      apple: 'true'
    },
    {
      name: 'Viento de Agua',
      spotify: 'true',
      apple: 'true'
    }
  ],
  songs: [
    {
      name: "Aña Pa' Mi Tambor",
      artist: 'Mon Rivera',
      spotify: 'true',
      apple: 'true'
    }
  ],
  effectsSongs: [
    {
      name: 'Plena Carnival Reverb',
      artist: 'Puerto Rican Folk Ensemble',
      desc: 'A dense, wide spring reverb captures the high-pitched clacks of the Requinto frame drum, separating its high notes from the driving percussion ensemble.',
      url: '',
      platform: 'Spotify'
    }
  ],

  name: 'Pandero',
  defaultLeft: 1,
  drums: [
    {
      id: 0,
      label: 'Requinto',
      pitchMult: 1.3,
      color: 'blonde-light',
      sizeValue: 16
    },
    {
      id: 1,
      label: 'Seguidor',
      pitchMult: 1,
      color: 'blonde',
      sizeValue: 19.5
    },
    {
      id: 2,
      label: 'Buleador',
      pitchMult: 0.8,
      color: 'dark',
      sizeValue: 23
    }
  ],
  sounds: {
    open_edge_tone: (d) => playMembrane((d.id === 0 ? 280 : d.id === 1 ? 180 : 100) * d.pitchMult, 0.4, 1.0, false),
    choke_center_strike: (d) =>
      playMembrane((d.id === 0 ? 280 : d.id === 1 ? 180 : 120) * d.pitchMult, 0.1, 1.0, false),
    rim_jingle_strike: (d) => playMembrane((d.id === 0 ? 300 : d.id === 1 ? 200 : 140) * d.pitchMult, 0.08, 1.0, false),
    sub_bass_hand_cup: (d) => playMembrane((d.id === 0 ? 180 : d.id === 1 ? 120 : 70) * d.pitchMult, 0.5, 1.3, false),
    thigh_slap_pop: (d) => {
      const f = d.id === 0 ? 350 : d.id === 1 ? 220 : 150;
      playMembrane(f * d.pitchMult, 0.12, 1.1, true);
      playNoise(0.06, 1800, state.currentTiltVolume * 0.9);
    }
  },
  touches: [
    {
      id: 'open_edge_tone',
      label: 'Open edge tone',
      shortName: 'Open edge tone',
      description: 'Striking near the edge of the frame drum with the fingers to allow the skin to resonate naturally'
    },
    {
      id: 'choke_center_strike',
      label: 'Choke center strike',
      shortName: 'Choke center...',
      description: 'Striking the center sharply and holding the hand down flat to completely mute the head'
    },
    {
      id: 'rim_jingle_strike',
      label: 'Rim / Jingle strike',
      shortName: 'Rim / Jingle...',
      description: 'Striking the wooden frame or the embedded metal jingles directly with the hand or fingers'
    },
    {
      id: 'sub_bass_hand_cup',
      label: 'Sub-Bass Hand Cup',
      shortName: 'Sub-Bass Han...',
      description:
        "Sealing the open back cavity of the frame drum against the player's chest or thigh immediately after striking the front head to create a compressed, booming sub-bass thud"
    },
    {
      id: 'thigh_slap_pop',
      label: 'Thigh Slap Pop',
      shortName: 'Thigh Slap Pop',
      description:
        'Bouncing the wooden frame of the drum directly off the knee or thigh while striking the head to double the transient accent'
    }
  ],
  mappings: {
    left: {
      up: 'open_edge_tone',
      down: 'choke_center_strike',
      left: 'rim_jingle_strike',
      right: 'sub_bass_hand_cup',
      upLong: 'thigh_slap_pop',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'open_edge_tone'
    },
    right: {
      up: 'open_edge_tone',
      down: 'choke_center_strike',
      left: 'rim_jingle_strike',
      right: 'sub_bass_hand_cup',
      upLong: 'thigh_slap_pop',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'choke_center_strike'
    }
  }
};
