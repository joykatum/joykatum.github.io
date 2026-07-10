import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const timpani = {
  generateSVG: (id, colorType, lugsHtml) => `
    <!-- Copper bowl kettle reflection shadow -->
            <circle cx="50" cy="52" r="48" fill="#1e1b18" opacity="0.8" filter="blur(2.5px)"/>
            
            <!-- Polished copper bowl outer shell -->
            <circle cx="50" cy="50" r="47" fill="#b04f25" stroke="#4a1505" stroke-width="3" filter="drop-shadow(0 3px 4px rgba(0,0,0,0.5))"/>
            <circle cx="50" cy="50" r="45" fill="none" stroke="#e07a5f" stroke-width="1.5" opacity="0.6"/>
            
            <!-- Large silver rim tension hoops -->
            <circle cx="50" cy="50" r="41" fill="none" stroke="url(#chrome-${id})" stroke-width="3.5"/>
            <circle cx="50" cy="50" r="39.2" fill="none" stroke="#1e293b" stroke-width="0.8"/>
            
            <!-- Heavy calfskin head -->
            <circle cx="50" cy="50" r="38.5" fill="url(#skin-${id})"/>
            <circle cx="50" cy="50" r="38" fill="url(#overlay-${id})"/>
            
            <!-- Six prominent heavy tuning T-key handles around the hoop -->
            <path d="M 50 1.5 L 50 9 M 47 4 L 53 4" stroke="url(#chrome-${id})" stroke-width="1.8" stroke-linecap="round"/>
            <path d="M 50 91 L 50 98.5 M 47 96 L 53 96" stroke="url(#chrome-${id})" stroke-width="1.8" stroke-linecap="round"/>
            <path d="M 7.5 28 L 14 32.5 M 8 32 L 12 28.5" stroke="url(#chrome-${id})" stroke-width="1.8" stroke-linecap="round"/>
            <path d="M 92.5 28 L 86 32.5 M 92 32 L 88 28.5" stroke="url(#chrome-${id})" stroke-width="1.8" stroke-linecap="round"/>
            <path d="M 7.5 72 L 14 67.5 M 8 68 L 12 71.5" stroke="url(#chrome-${id})" stroke-width="1.8" stroke-linecap="round"/>
            <path d="M 92.5 72 L 86 67.5 M 92 68 L 88 71.5" stroke="url(#chrome-${id})" stroke-width="1.8" stroke-linecap="round"/>
  `,
  name: 'Timpani',
  defaultLeft: 0,
  defaultRight: 0,
  drums: [
    {
      id: 0,
      label: 'Kettledrum',
      pitchMult: 1,
      color: 'silver',
      sizeValue: 26
    }
  ],
  sounds: {
    beating_spot_strike: (d, velocity = 0.85) => {
      playMembrane(90 * d.pitchMult, 1.6, 1.02, false, velocity, 0.0);
      playAttackClick(0.015, 1200, 0.35 * velocity);
    },
    pedal_glissando_bend: (d, velocity = 0.85) => {
      playTablaSlideUp(75 * d.pitchMult, 125 * d.pitchMult, 1.5, velocity, 0.0);
    },
    damping_touch: (d, velocity = 0.6) => {
      playMembrane(90 * d.pitchMult, 0.12, 1.0, false, velocity, 0.0);
    },
    stick_shaft_rim_shot: (d, velocity = 0.9) => {
      playMembrane(380 * d.pitchMult, 0.18, 1.0, true, velocity, 0.0);
      playNoise(0.2, 3800, 0.5 * velocity, 'highpass');
    }
  },
  touches: [
    {
      id: 'beating_spot_strike',
      label: 'Beating spot strike',
      shortName: 'Beating spot...',
      description:
        'Striking the copper kettle head roughly a few inches from the rim to get the most resonant, pure pitch'
    },
    {
      id: 'pedal_glissando_bend',
      label: 'Pedal glissando bend',
      shortName: 'Pedal glissa...',
      description:
        'Operating the foot pedal immediately after striking to smoothly slide the tensioned head pitch up or down'
    },
    {
      id: 'damping_touch',
      label: 'Damping touch',
      shortName: 'Damping touch',
      description:
        'Placing the fingertips lightly on the vibrating head immediately after a strike to stop the orchestral ring'
    },
    {
      id: 'stick_shaft_rim_shot',
      label: 'Stick-Shaft Rim Shot',
      shortName: 'Stick-Shaft ...',
      description:
        'Striking the outer copper kettle wall and the metal counter-hoop simultaneously with the hard wooden shaft of the timpani mallet to yield an explosive, industrial metallic shatter'
    }
  ],
  mappings: {
    left: {
      up: 'beating_spot_strike',
      down: 'pedal_glissando_bend',
      left: 'damping_touch',
      right: 'stick_shaft_rim_shot',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'beating_spot_strike'
    },
    right: {
      up: 'beating_spot_strike',
      down: 'pedal_glissando_bend',
      left: 'damping_touch',
      right: 'stick_shaft_rim_shot',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'pedal_glissando_bend'
    }
  }
};
