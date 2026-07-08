import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const thongophone = {
  name: 'Thongophone',
  defaultLeft: 0,
  defaultRight: 2,
  drums: [
    {
      id: 0,
      label: 'Low Pipe',
      pitchMult: 0.75,
      color: 'blue',
      sizeValue: 22
    },
    {
      id: 1,
      label: 'Mid Pipe',
      pitchMult: 1,
      color: 'blue-medium',
      sizeValue: 18
    },
    {
      id: 2,
      label: 'High Pipe',
      pitchMult: 1.33,
      color: 'blue-light',
      sizeValue: 14
    }
  ],
  sounds: {
    paddle_pipe_slap: (d) => playMembrane((d.id === 0 ? 82 : d.id === 1 ? 110 : 147) * d.pitchMult, 0.3, 1.4, false),
    pipe_side_tap: (d) => {
      playMembrane((d.id === 0 ? 110 : d.id === 1 ? 147 : 196) * d.pitchMult, 0.15, 1.8, true);
      playNoise(0.06, 800, state.currentTiltVolume * 0.7);
    }
  },
  touches: [
    {
      id: 'paddle_pipe_slap',
      label: 'Paddle pipe slap',
      shortName: 'Paddle pipe ...',
      description:
        'Striking the open tops of PVC pipes with flat foam paddles to force a column of air to pop at a fixed tuned frequency'
    },
    {
      id: 'pipe_side_tap',
      label: 'Pipe Side Tap',
      shortName: 'Pipe Side Tap',
      description:
        'Striking the exterior PVC pipe walls with a hard plastic stick to introduce a bright, high-pitched plastic click above the bass paddles'
    }
  ],
  mappings: {
    left: {
      up: 'paddle_pipe_slap',
      down: 'pipe_side_tap',
      left: '',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'paddle_pipe_slap'
    },
    right: {
      up: 'paddle_pipe_slap',
      down: 'pipe_side_tap',
      left: '',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'pipe_side_tap'
    }
  }
};
