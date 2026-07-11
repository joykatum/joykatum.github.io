import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const jaw_harp = {
  origin: 'Eurasia (Ancient Tribal Roots)',
  description:
    "The Jaw Harp (or Jew's Harp) is one of the world's oldest musical instruments, featuring a small metal or bamboo frame held firmly against the player's teeth. The player plucks the central metal tongue with their finger while modulating the shape of their mouth, throat, and breath to shift the resonant harmonics. This produces a highly unique, twangy, rhythmic bouncing glide. Interesting fact: it was played by indigenous tribes across Siberia, Central Asia, and Europe for spiritual trance states and courtship, using the oral cavity as a living acoustic synthesizer to generate complex harmonic overtones.",
  performers: [
    {
      name: 'John Wright',
      spotify: 'true',
      apple: 'true'
    },
    {
      name: 'Albin Paulus',
      spotify: 'true',
      apple: 'true'
    }
  ],
  songs: [
    {
      name: 'Twangy Harmonics',
      artist: 'John Wright',
      spotify: 'true',
      apple: 'true'
    }
  ],
  effectsSongs: [
    {
      name: 'Siberian Shamanic Twang',
      artist: 'John Wright',
      desc: 'The twangy mouth harmonics are routed through an automatic envelope sweep filter (auto-wah) and a warm analog delay, creating a trippy, rhythmic synthesizer sound.',
      url: '',
      platform: 'Spotify'
    }
  ],

  generateSVG: (id, colorType, lugsHtml) => `
    <circle cx="50" cy="50" r="47" fill="#1e293b" opacity="0.08"/>
            
            <g transform="translate(50, 50) scale(0.95)">
              <circle cx="0" cy="18" r="24" fill="none" stroke="url(#chrome-${id})" stroke-width="5.5" filter="drop-shadow(0px 3px 3.5px rgba(0,0,0,0.45))"/>
              <line x1="-8" y1="-3" x2="-8" y2="-45" stroke="url(#chrome-${id})" stroke-width="4.5" stroke-linecap="square" filter="drop-shadow(0 1px 1px rgba(0,0,0,0.2))"/>
              <line x1="8" y1="-3" x2="8" y2="-45" stroke="url(#chrome-${id})" stroke-width="4.5" stroke-linecap="square" filter="drop-shadow(0 1px 1px rgba(0,0,0,0.2))"/>
              <line x1="0" y1="42" x2="0" y2="-46" stroke="#94a3b8" stroke-width="1.5"/>
              <circle cx="0" cy="42" r="3" fill="#cbd5e1" stroke="#475569" stroke-width="0.8"/>
              <path d="M 0 -46 Q -12 -46, -16 -35" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-linecap="round" filter="drop-shadow(-1px 2px 1.5px rgba(0,0,0,0.4))"/>
            </g>
  `,
  name: 'Jaw Harp',
  drums: [
    {
      id: 0,
      label: 'Jaw Harp',
      pitchMult: 1,
      color: 'silver',
      sizeValue: 14
    }
  ],
  sounds: {
    trigger_pluck: (d) => playTablaSlideUp(75 * d.pitchMult, 110 * d.pitchMult, 0.5),
    mouth_cavity_filtering: (d) => playTablaSlideUp(110 * d.pitchMult, 220 * d.pitchMult, 0.4),
    inward_breath_draw: (d) => playTablaSlideUp(75 * d.pitchMult, 110 * d.pitchMult, 0.5)
  },
  touches: [
    {
      id: 'trigger_pluck',
      label: 'Trigger pluck',
      shortName: 'Trigger pluck',
      description:
        'Flicking the projecting steel tongue of the instrument with an index finger while holding the iron frame against the teeth'
    },
    {
      id: 'mouth_cavity_filtering',
      label: 'Mouth cavity filtering',
      shortName: 'Mouth cavity...',
      description:
        'Changing the shape of the mouth, tongue, and throat to filter the acoustic overtones and alter the resonant vowel sounds'
    },
    {
      id: 'inward_breath_draw',
      label: 'Inward Breath Draw',
      shortName: 'Inward Breat...',
      description:
        'Breathing sharply inward through the instrument while plucking the steel tongue to template intensify the volume and raspiness of the overtones'
    }
  ],
  mappings: {
    left: {
      up: 'trigger_pluck',
      down: 'mouth_cavity_filtering',
      left: 'inward_breath_draw',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'trigger_pluck'
    },
    right: {
      up: 'trigger_pluck',
      down: 'mouth_cavity_filtering',
      left: 'inward_breath_draw',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'mouth_cavity_filtering'
    }
  }
};
