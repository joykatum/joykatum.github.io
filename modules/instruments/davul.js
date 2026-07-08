import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const davul = {
  generateSVG: (id, colorType, lugsHtml) => `
    <circle cx="50" cy="50" r="47" fill="#1e293b" opacity="0.08"/>
            
            <!-- Diagonal deep cylindrical wood body -->
            <g transform="rotate(25, 50, 50)">
              <!-- Body shadow -->
              <rect x="22" y="24" width="56" height="52" rx="16" fill="#020617" opacity="0.4" filter="blur(3px)"/>
              
              <!-- Oak/walnut wood barrel body -->
              <rect x="24" y="26" width="52" height="48" rx="8" fill="#451a03" stroke="#1c0d02" stroke-width="2" filter="drop-shadow(0 3px 4px rgba(0,0,0,0.45))"/>
              
              <!-- Zig-zag traditional rope lacing across the wooden cylinder body -->
              <path d="M 25 26 L 31 74 L 37 26 L 43 74 L 49 26 L 55 74 L 61 26 L 67 74 L 73 26 M 25 74 L 31 26 L 37 74 L 43 26 L 49 74 L 55 26 L 61 74 L 67 26 L 73 74" fill="none" stroke="#ca8a04" stroke-width="1.5" opacity="0.8" stroke-linecap="round" stroke-linejoin="round" filter="drop-shadow(0.5px 0.5px 1px rgba(0,0,0,0.3))"/>
              
              <!-- Thick rope loops/knots at top and bottom rims -->
              <circle cx="31" cy="26" r="1.5" fill="#a16207"/>
              <circle cx="43" cy="26" r="1.5" fill="#a16207"/>
              <circle cx="55" cy="26" r="1.5" fill="#a16207"/>
              <circle cx="67" cy="26" r="1.5" fill="#a16207"/>
              <circle cx="31" cy="74" r="1.5" fill="#a16207"/>
              <circle cx="43" cy="74" r="1.5" fill="#a16207"/>
              <circle cx="55" cy="74" r="1.5" fill="#a16207"/>
              <circle cx="67" cy="74" r="1.5" fill="#a16207"/>
              
              <!-- Top thick goatskin head seen in perspective -->
              <ellipse cx="50" cy="26" rx="26" ry="6.5" fill="url(#skin-${id})" stroke="#713f12" stroke-width="1.5" filter="drop-shadow(0 -1px 1px rgba(0,0,0,0.3))"/>
              <ellipse cx="50" cy="26" rx="22" ry="5.5" fill="none" stroke="#713f12" stroke-width="0.5" opacity="0.4"/>
              
              <!-- Bottom goatskin head seen in perspective -->
              <ellipse cx="50" cy="74" rx="26" ry="6.5" fill="url(#skin-${id})" stroke="#713f12" stroke-width="1.5" filter="drop-shadow(0 1px 1px rgba(0,0,0,0.3))"/>
              
              <!-- Ambient 3D shading on cylinder -->
              <rect x="24" y="26" width="52" height="48" rx="8" fill="url(#overlay-${id})" opacity="0.75"/>
            </g>
  `,
  name: 'Davul',
  defaultLeft: 0,
  defaultRight: 0,
  drums: [
    {
      id: 0,
      label: 'Davul',
      pitchMult: 1,
      color: 'darker',
      sizeValue: 25
    }
  ],
  sounds: {
    tokmak: (d) => playMembrane(450 * d.pitchMult, 0.15, 0.8, true),
    ubuk: (d) => playMembrane(50 * d.pitchMult, 1.3, 1.8, false),
    hoop_edge_snapping: (d) => playMembrane(380 * d.pitchMult, 0.08, 0.85, false)
  },
  touches: [
    {
      id: 'tokmak',
      label: 'Tokmak',
      shortName: 'Tokmak',
      description: 'A thunderous, unmuted bass strike in the center of the thick head using a heavy, curved wooden club'
    },
    {
      id: 'ubuk',
      label: 'Çubuk',
      shortName: 'Çubuk',
      description:
        'Rapid, high-pitched snapping taps and rolls delivered to the thin bottom head using a flexible, thin twig switch'
    },
    {
      id: 'hoop_edge_snapping',
      label: 'Hoop Edge Snapping',
      shortName: 'Hoop Edge Sn...',
      description:
        'Striking the extreme outer edge of the thin head right where it meets the frame hoop using the twig switch to create a sharp, biting pop'
    }
  ],
  mappings: {
    left: {
      up: 'tokmak',
      down: 'ubuk',
      left: 'hoop_edge_snapping',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'tokmak'
    },
    right: {
      up: 'tokmak',
      down: 'ubuk',
      left: 'hoop_edge_snapping',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'ubuk'
    }
  }
};
