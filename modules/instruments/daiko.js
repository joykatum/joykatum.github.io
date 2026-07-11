import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const daiko = {
  origin: 'Japan',
  description:
    "Taiko refers to a broad range of Japanese percussion instruments. Played with large wooden drumsticks called 'bachi', they were historically used in warfare to command formations, in Shinto religious ceremonies, and in traditional village festivals (matsuri). The heavy, thunderous roar of the massive Nagado-daiko dominates modern kumi-daiko (ensemble taiko) performances.",
  performers: [
    {
      name: 'Kodo',
      spotify: 'true',
      apple: 'true'
    },
    {
      name: 'Yamato',
      spotify: 'true',
      apple: 'true'
    }
  ],
  songs: [
    {
      name: 'Miyake',
      artist: 'Kodo',
      spotify: 'true',
      apple: 'true'
    }
  ],
  effectsSongs: [
    {
      name: 'Inception Trailer Theme',
      artist: 'Hans Zimmer',
      desc: "Taiko ensembles are processed with intense distortion, hard clipping, and massive dark plate reverbs to create the iconic cinematic 'BOOM' hits.",
      url: 'https://open.spotify.com/track/2SshH0PzGgR8RoxU2pQpP6',
      platform: 'Spotify'
    }
  ],

  name: 'Taiko',
  defaultLeft: 2,
  defaultRight: 1,
  drums: [
    {
      id: 0,
      label: 'Shime-daiko',
      pitchMult: 1.35,
      color: 'blonde-light',
      sizeValue: 16.5
    },
    {
      id: 1,
      label: 'Nagado-daiko',
      pitchMult: 0.9,
      color: 'caramel',
      sizeValue: 21.5
    },
    {
      id: 2,
      label: 'O-daiko',
      pitchMult: 0.5,
      color: 'darker',
      sizeValue: 27.5
    }
  ],
  sounds: {
    don: (d) => {
      const baseId = parseInt(d.id);
      if (baseId === 0) playMembrane(250 * d.pitchMult, 0.3, 0.7, false);
      else if (baseId === 1) playMembrane(80 * d.pitchMult, 0.6, 1.2, false);
      else playMembrane(40 * d.pitchMult, 0.85, 1.8, false);
    },
    do_ko: (d) => {
      const baseId = parseInt(d.id);
      if (baseId === 0) playMembrane(250 * d.pitchMult, 0.3, 0.7, false);
      else if (baseId === 1) playMembrane(80 * d.pitchMult, 0.6, 1.2, false);
      else playMembrane(40 * d.pitchMult, 0.85, 1.8, false);
    },
    k: (d) => {
      const baseId = parseInt(d.id);
      if (baseId === 0) playMembrane(250 * d.pitchMult, 0.3, 0.7, false);
      else if (baseId === 1) playMembrane(80 * d.pitchMult, 0.6, 1.2, false);
      else playMembrane(40 * d.pitchMult, 0.85, 1.8, false);
    },
    bachi_clack: (d) => {
      const baseId = parseInt(d.id);
      if (baseId === 0) {
        playMembrane(900 * d.pitchMult, 0.05, 0.6, true);
        playNoise(0.04, 4000, state.currentTiltVolume * 0.7);
      } else if (baseId === 1) {
        playMembrane(650 * d.pitchMult, 0.06, 0.8, true);
        playNoise(0.06, 3200, state.currentTiltVolume * 0.9);
      } else {
        playMembrane(450 * d.pitchMult, 0.08, 1.1, true);
        playNoise(0.08, 2500, state.currentTiltVolume * 1.1);
      }
    }
  },
  touches: [
    {
      id: 'don',
      label: 'Don',
      shortName: 'Don',
      description:
        'A powerful, booming center strike on the thick rawhide head using heavy wooden sticks, utilizing full-body momentum'
    },
    {
      id: 'do_ko',
      label: 'Do-ko',
      shortName: 'Do-ko',
      description:
        'Executing ultra-rapid, alternating right-and-left rolls in the center of the head to create a continuous wall of thunder'
    },
    {
      id: 'k',
      label: 'Ká',
      shortName: 'Ká',
      description:
        'Striking the heavy wooden rim or hoop of the drum body to produce an incredibly loud, cracking wood sound'
    },
    {
      id: 'bachi_clack',
      label: 'Bachi Clack',
      shortName: 'Bachi Clack',
      description:
        'Slamming the two massive wooden bachi dowels directly together over the player’s head as a sharp signaling device'
    }
  ],
  mappings: {
    left: {
      up: 'don',
      down: 'do_ko',
      left: 'k',
      right: 'bachi_clack',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'don'
    },
    right: {
      up: 'don',
      down: 'do_ko',
      left: 'k',
      right: 'bachi_clack',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'do_ko'
    }
  }
};
