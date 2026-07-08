import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const guiro = {
  name: 'Güiro',
  defaultLeft: 0,
  defaultRight: 0,
  drums: [
    {
      id: 0,
      label: 'Güiro',
      pitchMult: 1,
      color: 'caramel-light',
      sizeValue: 18
    }
  ],
  sounds: {
    largo: (d) => playNoise(0.06, 2200, state.currentTiltVolume * 1.2),
    corto: (d) => playNoise(0.12, 1500, state.currentTiltVolume * 0.8),
    shell_tap: (d) => playNoise(0.12, 1500, state.currentTiltVolume * 0.8),
    end_hole_pop: (d) => playNoise(0.06, 2200, state.currentTiltVolume * 1.2)
  },
  touches: [
    {
      id: 'largo',
      label: 'Largo',
      shortName: 'Largo',
      description:
        'Dragging a scraper steadily down the long, parallel ridges of the hollow gourd to create a sustained raspy texture'
    },
    {
      id: 'corto',
      label: 'Corto',
      shortName: 'Corto',
      description:
        'Executing quick, short down-and-up flicks with the scraper to accent specific sixteenth-note subdivisions'
    },
    {
      id: 'shell_tap',
      label: 'Shell Tap',
      shortName: 'Shell Tap',
      description:
        'Tapping the smooth, un-notched backside or the hollow neck of the gourd with the wooden scraper to isolate a clear, hollow acoustic wood-block tone'
    },
    {
      id: 'end_hole_pop',
      label: 'End Hole Pop',
      shortName: 'End Hole Pop',
      description:
        'Striking the open acoustic end-hole of the gourd with a flat palm to create a sudden, compressed hollow air thud'
    }
  ],
  mappings: {
    left: {
      up: 'largo',
      down: 'corto',
      left: 'shell_tap',
      right: 'end_hole_pop',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'largo'
    },
    right: {
      up: 'largo',
      down: 'corto',
      left: 'shell_tap',
      right: 'end_hole_pop',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'corto'
    }
  }
};
