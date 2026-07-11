import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const kundu = {
  origin: 'Papua New Guinea',
  description:
    'The Kundu is an hourglass-shaped drum from Papua New Guinea, hand-carved from a single log and covered with snake or monitor lizard skin. Often featuring a carved handle in the center and decorated with elaborate tribal motifs, it is struck with a bare hand. Interesting fact: the Kundu is a sacred instrument of PNG, central to cultural sing-sing festivals. The drumhead is traditionally glued using honey and tree sap, and the player places small dollops of beeswax on the center of the skin to perfectly tune its resonant, woody pop tone, which has accompanied ancestral dances and spiritual chants for centuries.',
  performers: [
    {
      name: 'Singsing Percussionists',
      spotify: 'true',
      apple: 'true'
    },
    {
      name: 'Airi Ingram',
      spotify: 'true',
      apple: 'true'
    }
  ],
  songs: [
    {
      name: 'Cultural Sing-Sing Chant',
      artist: 'Singsing Percussionists',
      spotify: 'true',
      apple: 'true'
    }
  ],
  effectsSongs: [
    {
      name: 'Tribal Sing-Sing Resonance',
      artist: 'Singsing Percussionists',
      desc: 'The dry, woody popping sound of the Kundu is treated with a lush, dark plate reverb and subtle stereo delays, giving it a spacious, ritualistic tone.',
      url: '',
      platform: 'Spotify'
    }
  ],

  generateSVG: (id, colorType, lugsHtml) => `
    <circle cx="50" cy="51" r="48" fill="#020617" opacity="0.5" filter="blur(2px)"/>
            <path d="M 12 25 C 2 30, 2 70, 12 75 Z" fill="url(#skin-${id})" stroke="#271305" stroke-width="1.5"/>
            <path d="M 88 25 C 98 30, 98 70, 88 75 Z" fill="url(#skin-${id})" stroke="#271305" stroke-width="1.5"/>
            <circle cx="50" cy="50" r="43" fill="url(#skin-${id})" stroke="#1e1b18" stroke-width="1.5"/>
            <circle cx="50" cy="50" r="43" fill="url(#overlay-${id})"/>
            <circle cx="50" cy="50" r="39" fill="none" stroke="#4a3628" stroke-width="1.5" stroke-dasharray="3, 4" opacity="0.6"/>
  `,
  name: 'Kundu',
  drums: [
    {
      id: 0,
      label: 'Kundu',
      pitchMult: 1,
      color: 'wood',
      sizeValue: 23
    }
  ],
  sounds: {
    center_skin_tap: (d) => playMembrane(180 * d.pitchMult, 0.4, 1.1, false),
    rim_edge_pop: (d) => {
      playMembrane(320 * d.pitchMult, 0.12, 1.2, true);
      playNoise(0.05, 2000, state.currentTiltVolume * 0.6);
    },
    shell_scrape: (d) => playMembrane(130 * d.pitchMult, 0.08, 1.0, false)
  },
  touches: [
    {
      id: 'center_skin_tap',
      label: 'Center skin tap',
      shortName: 'Center skin tap',
      description: 'Gentle finger or palm strike on the small lizard-skin head of the hourglass-shaped wooden body'
    },
    {
      id: 'rim_edge_pop',
      label: 'Rim edge pop',
      shortName: 'Rim edge pop',
      description: 'Snapping a single finger against the extreme outer edge of the skin for a high, hollow accent'
    },
    {
      id: 'shell_scrape',
      label: 'Shell Scrape',
      shortName: 'Shell Scrape',
      description:
        'Dragging a small bone or stick along the carved, textured patterns of the wooden hourglass body to create a continuous raspy drone'
    }
  ],
  mappings: {
    left: {
      up: 'center_skin_tap',
      down: 'rim_edge_pop',
      left: 'shell_scrape',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'center_skin_tap'
    },
    right: {
      up: 'center_skin_tap',
      down: 'rim_edge_pop',
      left: 'shell_scrape',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'rim_edge_pop'
    }
  }
};
