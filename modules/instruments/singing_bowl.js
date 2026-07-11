import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const singing_bowl = {
  generateSVG: (id, colorType, lugsHtml) => `
    <!-- Ground shadow -->
            <ellipse cx="50" cy="80" rx="38" ry="12" fill="#020617" opacity="0.7" filter="blur(4px)"/>
            
            <!-- Brass Bowl body -->
            <path d="M 12 36 C 12 65, 30 80, 50 80 C 70 80, 88 65, 88 36 Z" fill="#eab308" stroke="#854d0e" stroke-width="2.5" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.35))"/>
            <path d="M 16 38 C 16 63, 31 76, 50 76 C 69 76, 84 63, 84 38 Z" fill="#ca8a04" stroke="#a16207" stroke-width="1" opacity="0.6"/>
            
            <!-- Inner rim and gold reflection lip -->
            <ellipse cx="50" cy="36" rx="38" ry="10" fill="#a16207" stroke="#854d0e" stroke-width="2"/>
            <ellipse cx="50" cy="36" rx="36" ry="8" fill="#eab308" stroke="#ca8a04" stroke-width="0.8"/>
            <ellipse cx="50" cy="36" rx="33" ry="6.5" fill="#713f12"/>
            
            <!-- Soundwave resonating concentric ripples -->
            <ellipse cx="50" cy="36" rx="26" ry="5" fill="none" stroke="#fef08a" stroke-width="1.2" opacity="0.45" stroke-dasharray="3, 3"/>
            <ellipse cx="50" cy="36" rx="18" ry="3.5" fill="none" stroke="#fef08a" stroke-width="1.0" opacity="0.6" stroke-dasharray="2, 2"/>
            
            <!-- Wooden mallet placed diagonally underneath -->
            <rect x="65" y="10" width="8" height="60" rx="2" fill="#78350f" stroke="#451a03" stroke-width="1" transform="rotate(35, 69, 40)" filter="drop-shadow(2px 2px 3px rgba(0,0,0,0.5))"/>
            <!-- Mallet felt / suede wrapping tip -->
            <rect x="63" y="10" width="12" height="20" rx="1.5" fill="#f43f5e" stroke="#be185d" stroke-width="0.8" transform="rotate(35, 69, 40)"/>
  `,
  name: '🥣 Singing Bowl',
  drums: [
    {
      id: 0,
      label: 'Sacred Bowl',
      pitchMult: 1,
      color: 'wood',
      sizeValue: 21
    }
  ],
  sounds: {
    deep_rim_gong: (d) => playMembrane(220 * d.pitchMult, 1.8, 1.0),
    suede_hum: (d) => {
      playMembrane(220 * d.pitchMult, 1.2, 1.0);
      playNoise(1.0, 440 * d.pitchMult, 0.3 * state.currentTiltVolume, 'bandpass', 12.0);
    },
    wood_click: (d) => {
      playAttackClick(0.03, 1500, 0.8 * state.currentTiltVolume);
      playMembrane(800 * d.pitchMult, 0.04, 1.0);
    },
    palm_damped: (d) => playMembrane(330 * d.pitchMult, 0.12, 1.0, true),
    harmonic_ping: (d) => playMembrane(660 * d.pitchMult, 1.2, 1.0),
    water_ripple: (d) => {
      playMembrane(220 * d.pitchMult, 1.4, 1.0);
      playNoise(0.5, 1200, 0.25 * state.currentTiltVolume, 'bandpass', 3.5);
    },
    swirling_decay: (d) => playMembrane(220 * d.pitchMult, 1.8, 1.0),
    double_strike: (d) => {
      playMembrane(220 * d.pitchMult, 1.6, 1.0);
      setTimeout(() => {
        playMembrane(330 * d.pitchMult, 1.4, 1.0);
      }, 40);
    }
  },
  touches: [
    {
      id: 'deep_rim_gong',
      label: 'Deep Rim Gong',
      shortName: 'Gong',
      description: 'A pure, ringing, heavy mallet blow on the outer lip'
    },
    {
      id: 'suede_hum',
      label: 'Suede Hum',
      shortName: 'Hum',
      description: 'The continuous, swelling friction buzz of a mallet circling the edge'
    },
    {
      id: 'wood_click',
      label: 'Wood Click',
      shortName: 'Click',
      description: 'The sharp click of the bare mallet handle on the metal wall'
    },
    {
      id: 'palm_damped',
      label: 'Palm Damped',
      shortName: 'Damped',
      description: 'A flat, short, metallic chime done while hand-choking the bowl'
    },
    {
      id: 'harmonic_ping',
      label: 'Harmonic Ping',
      shortName: 'Ping',
      description: 'Striking the upper third of the bowl with a hard stick tip'
    },
    {
      id: 'water_ripple',
      label: 'Water Ripple',
      shortName: 'Ripple',
      description: 'Striking the bowl sitting in shallow water to create a warble'
    },
    {
      id: 'swirling_decay',
      label: 'Swirling Decay',
      shortName: 'Decay',
      description: 'Letting the ringing tone decay while rotating the bowl'
    },
    {
      id: 'double_strike',
      label: 'Double Strike',
      shortName: 'Double',
      description: 'Flams struck on two opposite sides simultaneously'
    }
  ],
  mappings: {
    left: {
      up: 'deep_rim_gong',
      down: 'suede_hum',
      left: 'wood_click',
      right: 'palm_damped',
      upLong: 'harmonic_ping',
      downLong: 'water_ripple',
      leftLong: 'swirling_decay',
      rightLong: 'double_strike',
      trigger: 'deep_rim_gong'
    },
    right: {
      up: 'deep_rim_gong',
      down: 'suede_hum',
      left: 'wood_click',
      right: 'palm_damped',
      upLong: 'harmonic_ping',
      downLong: 'water_ripple',
      leftLong: 'swirling_decay',
      rightLong: 'double_strike',
      trigger: 'suede_hum'
    }
  }
};
