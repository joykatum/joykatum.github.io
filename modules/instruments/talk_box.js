import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const talk_box = {
  origin: 'Vintage Toy Box',
  description:
    'Inspired by retro pull-string talking toys and vintage talk-box vocal effects. This instrument recreates the mechanical, winding spin-up click of a spring-loaded pull cord combined with vocal formant-modulated analog synthesized sweeps. It produces classic mechanical whirrs, voice-box vowels, and retro speech-synthesis effects.',
  generateSVG: (id, colorType, lugsHtml) => `
    <!-- Floor shadow -->
            <ellipse cx="50" cy="80" rx="34" ry="11" fill="#020617" opacity="0.65" filter="blur(3.5px)"/>
            
            <!-- Retro Box Body (Bright Orange) -->
            <rect x="22" y="24" width="56" height="52" rx="10" fill="#f97316" stroke="#c2410c" stroke-width="2.2" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.35))"/>
            
            <!-- Stylisized Retro Sunburst Decal -->
            <circle cx="50" cy="50" r="18" fill="#fde047" stroke="#ca8a04" stroke-width="0.8"/>
            
            <!-- Phonograph/Speaker radial grilles -->
            <circle cx="50" cy="50" r="13" fill="#1e293b"/>
            <line x1="50" y1="37" x2="50" y2="63" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="1 2"/>
            <line x1="37" y1="50" x2="63" y2="50" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="1 2"/>
            <line x1="41" y1="41" x2="59" y2="59" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="1 2"/>
            <line x1="41" y1="59" x2="59" y2="41" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="1 2"/>
            <circle cx="50" cy="50" r="3.5" fill="#e2e8f0"/>
            
            <!-- Red Plastic Handle loop at the top -->
            <path d="M 32 24 L 32 14 Q 50 4, 68 14 L 68 24" fill="none" stroke="#ef4444" stroke-width="4" stroke-linecap="round"/>
            
            <!-- Mechanical Pull-String chord loop -->
            <path d="M 78 54 Q 88 56, 90 64" fill="none" stroke="#cbd5e1" stroke-width="1.8" stroke-linecap="round"/>
            <!-- Pull ring -->
            <circle cx="91" cy="65" r="4.5" fill="#ef4444" stroke="#b91c1c" stroke-width="1" filter="drop-shadow(1px 1px 2px rgba(0,0,0,0.4))"/>
  `,
  name: '🗣️ Talk Box Toy',
  drums: [
    {
      id: 0,
      label: 'Retro Pull-Toy',
      pitchMult: 1,
      color: 'caramel',
      sizeValue: 20
    }
  ],
  sounds: {
    pull_whine: (d) => {
      playTablaSlideUp(180 * d.pitchMult, 440 * d.pitchMult, 0.3);
      playNoise(0.25, 1500, 0.3 * state.currentTiltVolume);
    },
    cow_says_intro: (d) => {
      playNoise(0.18, 2200, 0.5 * state.currentTiltVolume);
      playMembrane(380 * d.pitchMult, 0.05, 1.0);
      speakPhrase('The cow says...', 0.9, 0.85, 1.0);
    },
    analog_cow_moo: (d) => {
      playTablaSlideUp(196 * d.pitchMult, 147 * d.pitchMult, 0.42);
      playNoise(0.35, 1200, 0.2 * state.currentTiltVolume);
      speakPhrase('Moo!', 0.6, 0.65, 1.0);
    },
    spring_snaps_shut: (d) => {
      playAttackClick(0.03, 1100, 0.85 * state.currentTiltVolume);
      playMembrane(150 * d.pitchMult, 0.08, 1.0, true);
    },
    needle_scratch_skip: (d) => {
      playAttackClick(0.015, 2000, 0.7 * state.currentTiltVolume);
      playNoise(0.05, 1800, 0.6 * state.currentTiltVolume);
    },
    low_battery_slur: (d) => {
      playTablaSlideUp(130 * d.pitchMult, 55 * d.pitchMult, 0.6);
      playNoise(0.4, 900, 0.3 * state.currentTiltVolume);
      speakPhrase('Moooooo', 0.3, 0.4, 0.9);
    },
    gear_governor_whir: (d) => playNoise(0.32, 1600, 0.4 * state.currentTiltVolume),
    chassis_slap: (d) => {
      playMembrane(110 * d.pitchMult, 0.16, 1.1);
      playNoise(0.08, 1000, 0.3 * state.currentTiltVolume);
    }
  },
  touches: [
    {
      id: 'pull_whine',
      label: 'The Pull-Whine',
      shortName: 'Whine',
      description: 'The mechanical, winding rev-up spin sound of pulling the string'
    },
    {
      id: 'cow_says_intro',
      label: '"The Cow Says..."',
      shortName: 'Intro',
      description: 'The grainy, lo-fi, plastic-groove internal phonograph voice'
    },
    {
      id: 'analog_cow_moo',
      label: 'Analog Cow Moo',
      shortName: 'Moo',
      description: 'The scratchy, record-needle version of an animal sound'
    },
    {
      id: 'spring_snaps_shut',
      label: 'Spring Snaps Shut',
      shortName: 'Snap',
      description: 'The violent, plastic clack as the pull-string snaps back'
    },
    {
      id: 'needle_scratch_skip',
      label: 'Needle Scratch Skip',
      shortName: 'Skip',
      description: 'The harsh, rhythmic skip of the plastic internal needle'
    },
    {
      id: 'low_battery_slur',
      label: 'Low Battery Slur',
      shortName: 'Slur',
      description: 'The pitch-dropping, slowed-down demonic variation of the toy'
    },
    {
      id: 'gear_governor_whir',
      label: 'Gear Governor Whir',
      shortName: 'Whir',
      description: 'The spinning fly-wheel friction sound that regulates playback'
    },
    {
      id: 'chassis_slap',
      label: 'Chassis Slap',
      shortName: 'Slap Casing',
      description: 'Hitting the hollow, bright orange plastic toy casing with a palm'
    }
  ],
  mappings: {
    left: {
      up: 'pull_whine',
      down: 'cow_says_intro',
      left: 'analog_cow_moo',
      right: 'spring_snaps_shut',
      upLong: 'needle_scratch_skip',
      downLong: 'low_battery_slur',
      leftLong: 'gear_governor_whir',
      rightLong: 'chassis_slap',
      trigger: 'pull_whine'
    },
    right: {
      up: 'pull_whine',
      down: 'cow_says_intro',
      left: 'analog_cow_moo',
      right: 'spring_snaps_shut',
      upLong: 'needle_scratch_skip',
      downLong: 'low_battery_slur',
      leftLong: 'gear_governor_whir',
      rightLong: 'chassis_slap',
      trigger: 'cow_says_intro'
    }
  }
};
