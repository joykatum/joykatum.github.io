import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const synsonics_drums = {
  origin: 'Mattel Toys (1981)',
  description:
    'The Synsonics Drum is an early consumer-grade electronic drum set released by Mattel in 1981. It featured four rubber pads, built-in pads for fingers, and stereo RCA outputs. It generated primitive, charmingly lo-fi analog synthesized snare snaps, white-noise crashes, and booming electronic tom-toms, epitomizing the classic retro-arcade drum aesthetic.',
  generateSVG: (id, colorType, lugsHtml) => `
    <!-- Retro console shadow -->
            <rect x="8" y="16" width="84" height="68" rx="10" fill="#020617" opacity="0.7" filter="blur(3.5px)"/>
            
            <!-- Sleek 1980s ABS plastic console casing -->
            <rect x="10" y="14" width="80" height="66" rx="8" fill="#2d3139" stroke="#1a1c23" stroke-width="2"/>
            
            <!-- Retro dynamic dual-stripe decal lines (Teal/Orange) -->
            <path d="M 10 24 L 90 24 M 10 26 L 90 26" stroke="#06b6d4" stroke-width="0.8" opacity="0.6"/>
            <path d="M 10 28 L 90 28" stroke="#f97316" stroke-width="0.8" opacity="0.6"/>
            
            <!-- Vintage "SYNSONICS" logo -->
            <rect x="18" y="18" width="28" height="5" rx="1" fill="#1e2026"/>
            <text x="32" y="21.5" font-family="'Courier New', monospace" font-size="2.5" font-weight="900" fill="#06b6d4" text-anchor="middle" letter-spacing="0.2">SYNSONICS</text>
            
            <!-- LED status indicator light -->
            <circle cx="80" cy="21" r="1.5" fill="#ef4444" filter="drop-shadow(0 0 2px #ef4444)"/>
            
            <!-- Circular rubber touchpads -->
            <circle cx="32" cy="42" r="13" fill="#1e1f24" stroke="#475569" stroke-width="1.2"/>
            <circle cx="32" cy="42" r="11" fill="#141519" stroke="#ef4444" stroke-width="1" opacity="0.8"/>
            
            <circle cx="68" cy="42" r="13" fill="#1e1f24" stroke="#475569" stroke-width="1.2"/>
            <circle cx="68" cy="42" r="11" fill="#141519" stroke="#eab308" stroke-width="1" opacity="0.8"/>
            
            <circle cx="32" cy="68" r="13" fill="#1e1f24" stroke="#475569" stroke-width="1.2"/>
            <circle cx="32" cy="68" r="11" fill="#141519" stroke="#06b6d4" stroke-width="1" opacity="0.8"/>
            
            <circle cx="68" cy="68" r="13" fill="#1e1f24" stroke="#475569" stroke-width="1.2"/>
            <circle cx="68" cy="68" r="11" fill="#141519" stroke="#10b981" stroke-width="1" opacity="0.8"/>
            
            <!-- Slider bank -->
            <rect x="47" y="45" width="6" height="24" rx="1" fill="#1e2026" stroke="#475569" stroke-width="0.5"/>
            <line x1="50" y1="47" x2="50" y2="67" stroke="#475569" stroke-width="0.8" stroke-dasharray="2 2"/>
            <rect x="48" y="54" width="4" height="2.5" rx="0.5" fill="#f97316"/>
  `,
  name: '🎛️ Synsonics Drums',
  drums: [
    {
      id: 0,
      label: 'Synsonics Pad',
      pitchMult: 1,
      color: 'dark',
      sizeValue: 20
    }
  ],
  sounds: {
    retro_kick: (d) => playMembrane(55 * d.pitchMult, 0.3, 4.5),
    noise_snare: (d) => {
      playMembrane(180 * d.pitchMult, 0.08, 1.0, true);
      playNoise(0.18, 900, 0.9 * state.currentTiltVolume);
    },
    tom_low: (d) => playMembrane(120 * d.pitchMult, 0.4, 4.0),
    tom_high: (d) => playMembrane(220 * d.pitchMult, 0.3, 4.0),
    lofi_cymbal: (d) => playNoise(0.35, 4000, 0.6 * state.currentTiltVolume)
  },
  touches: [
    {
      id: 'retro_kick',
      label: 'Retro Bass Kick',
      shortName: 'Kick',
      description:
        'Striking the bass segment of the 1981 retro toy pad, releasing a warm, analog-synthesized low frequency boom with rapid pitch decay.'
    },
    {
      id: 'noise_snare',
      label: '8-Bit Snare Snap',
      shortName: 'Snare',
      description:
        'Hitting the snare pad sector to trigger an analogue-filtered white noise snap with a gritty retro texture.'
    },
    {
      id: 'tom_low',
      label: 'Low Pew Tom',
      shortName: 'Low Tom',
      description:
        'Hitting the low-tom zone to produce a classic pitch-dropping "pew" synthesizer sound modeled on early electronic drum kits.'
    },
    {
      id: 'tom_high',
      label: 'High Pew Tom',
      shortName: 'High Tom',
      description:
        'Hitting the high-tom zone to generate a sharp, high-pitched electronic accent tom sound with a dramatic downward pitch sweep.'
    },
    {
      id: 'lofi_cymbal',
      label: 'Chippy Crash Cymbal',
      shortName: 'Cymbal',
      description:
        'Striking the crash segment to release a truncated, lo-fi burst of high-pass white noise mimicking early drum machine cymbal samples.'
    }
  ],
  mappings: {
    left: {
      up: 'retro_kick',
      down: 'noise_snare',
      left: 'tom_low',
      right: 'tom_high',
      upLong: 'lofi_cymbal',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'retro_kick'
    },
    right: {
      up: 'retro_kick',
      down: 'noise_snare',
      left: 'tom_low',
      right: 'tom_high',
      upLong: 'lofi_cymbal',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'noise_snare'
    }
  }
};
