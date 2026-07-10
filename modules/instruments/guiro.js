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
    largo: (d, velocity = 0.8) => {
      // Long dragging scrape with a raspy gourd texture
      playNoise(0.5, 1250, velocity * 0.95, 'bandpass', 3.0);
    },
    corto: (d, velocity = 0.8) => {
      // Crisp, short accent flick
      playNoise(0.12, 1650, velocity * 0.85, 'highpass');
    },
    shell_tap: (d, velocity = 0.75) => {
      // Dry hollow wood-block tone
      playMembrane(650 * d.pitchMult, 0.08, 1.0, true, velocity);
    },
    end_hole_pop: (d, velocity = 0.9) => {
      // Deep hollow air-pop thud with low-frequency rumble
      playMembrane(90 * d.pitchMult, 0.15, 1.25, false, velocity);
      playNoise(0.12, 180, velocity * 0.45, 'lowpass');
    }
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
