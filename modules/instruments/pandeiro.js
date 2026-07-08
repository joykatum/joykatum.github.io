import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const pandeiro = {
  name: 'Pandeiro',
  defaultLeft: 0,
  defaultRight: 0,
  drums: [
    {
      id: 0,
      label: 'Pandeiro',
      pitchMult: 1,
      color: 'blonde',
      sizeValue: 18
    }
  ],
  sounds: {
    polegar: (d) => playMembrane(260 * d.pitchMult, 0.15, 0.9, true),
    manoteo: (d) => playMembrane(260 * d.pitchMult, 0.15, 0.9, true),
    chacoalho: (d) => playNoise(0.12, 3800, state.currentTiltVolume * 0.7),
    rim_click: (d) => playMembrane(260 * d.pitchMult, 0.15, 0.9, true)
  },
  touches: [
    {
      id: 'polegar',
      label: 'Polegar',
      shortName: 'Polegar',
      description: 'Alternating between open bass tones and muted slaps using the side and tip of the thumb on the edge'
    },
    {
      id: 'manoteo',
      label: 'Manoteo',
      shortName: 'Manoteo',
      description:
        'A continuous rolling motion alternating a strike with the heel of the hand and a strike with the fingertips'
    },
    {
      id: 'chacoalho',
      label: 'Chacoalho',
      shortName: 'Chacoalho',
      description:
        'Shaking the wooden frame back and forth aggressively to keep time using the dry, cupped metal jingles'
    },
    {
      id: 'rim_click',
      label: 'Rim Click',
      shortName: 'Rim Click',
      description:
        'Striking the wooden rim with the knuckle of the thumb to isolate a crisp wood-and-jingle accent without activating the skin'
    }
  ],
  mappings: {
    left: {
      up: 'polegar',
      down: 'manoteo',
      left: 'chacoalho',
      right: 'rim_click',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'polegar'
    },
    right: {
      up: 'polegar',
      down: 'manoteo',
      left: 'chacoalho',
      right: 'rim_click',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'manoteo'
    }
  }
};
