import { state } from '../state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from '../audio.js';

export const vintage_cash_register = {
  generateSVG: (id, colorType, lugsHtml) => `
    <!-- Ground shadow -->
            <ellipse cx="50" cy="78" rx="36" ry="10" fill="#020617" opacity="0.75" filter="blur(4px)"/>
            
            <!-- Cash Register Drawer (Wood/Brass base) -->
            <path d="M 12 60 L 88 60 L 92 80 L 8 80 Z" fill="#78350f" stroke="#451a03" stroke-width="2"/>
            <path d="M 16 64 L 84 64 L 86 76 L 14 76 Z" fill="#92400e" stroke="#451a03" stroke-width="1.5"/>
            <circle cx="50" cy="70" r="2.5" fill="#ca8a04" stroke="#713f12" stroke-width="1"/> <!-- Keyhole -->

            <!-- Main Brass Housing -->
            <path d="M 20 60 L 20 35 C 20 15, 80 15, 80 35 L 80 60 Z" fill="#ca8a04" stroke="#713f12" stroke-width="2.5" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.5))"/>
            
            <!-- Intricate Brass Detailing -->
            <path d="M 25 35 C 25 22, 75 22, 75 35 L 75 55 L 25 55 Z" fill="none" stroke="#a16207" stroke-width="1.5"/>
            
            <!-- Glass display top price box -->
            <rect x="30" y="5" width="40" height="14" rx="2" fill="#e2e8f0" stroke="#713f12" stroke-width="2"/>
            <rect x="32" y="7" width="36" height="10" rx="1" fill="#0f172a"/>
            <text x="50" y="15" font-family="'Courier New', Courier, monospace" font-size="8" fill="#10b981" font-weight="900" text-anchor="middle" letter-spacing="1">SALE</text>
            
            <!-- Key buttons (layered and organized) -->
            <circle cx="35" cy="38" r="3.5" fill="#f87171" stroke="#991b1b" stroke-width="1"/>
            <circle cx="50" cy="38" r="3.5" fill="#facc15" stroke="#a16207" stroke-width="1"/>
            <circle cx="65" cy="38" r="3.5" fill="#60a5fa" stroke="#1e3a8a" stroke-width="1"/>
            
            <circle cx="35" cy="48" r="3.5" fill="#f1f5f9" stroke="#475569" stroke-width="1"/>
            <circle cx="50" cy="48" r="3.5" fill="#f1f5f9" stroke="#475569" stroke-width="1"/>
            <circle cx="65" cy="48" r="3.5" fill="#f1f5f9" stroke="#475569" stroke-width="1"/>

            <!-- Side Crank Lever -->
            <path d="M 80 42 C 95 42, 95 56, 95 65" fill="none" stroke="#64748b" stroke-width="3" stroke-linecap="round"/>
            <circle cx="95" cy="65" r="4.5" fill="#b45309" stroke="#451a03" stroke-width="1"/>
  `,
  name: '💵 Cash Register',
  defaultLeft: 0,
  defaultRight: 0,
  drums: [
    {
      id: 0,
      label: 'Brass Register',
      pitchMult: 1,
      color: 'silver',
      sizeValue: 20
    }
  ],
  sounds: {
    key_plunge: (d) => {
      playMembrane(280 * d.pitchMult, 0.08, 1.0);
      playAttackClick(0.03, 1500, 0.8 * state.currentTiltVolume);
    },
    bell_ring: (d) => {
      playMembrane(1200 * d.pitchMult, 1.5, 1.0);
      playAttackClick(0.01, 4000, 0.9 * state.currentTiltVolume);
    },
    drawer_spring_crunch: (d) => {
      playNoise(0.35, 1200, 0.7 * state.currentTiltVolume);
      playMembrane(95 * d.pitchMult, 0.15, 1.0);
    },
    drawer_slam: (d) => {
      playMembrane(65 * d.pitchMult, 0.25, 1.0);
      playNoise(0.12, 600, 0.6 * state.currentTiltVolume);
    },
    coin_jingle: (d) => playNoise(0.48, 4800, 0.6 * state.currentTiltVolume),
    lever_crank: (d) => {
      playAttackClick(0.015, 2500, 0.5 * state.currentTiltVolume);
      setTimeout(() => {
        playAttackClick(0.015, 2300, 0.5 * state.currentTiltVolume);
      }, 50);
      setTimeout(() => {
        playAttackClick(0.015, 2100, 0.5 * state.currentTiltVolume);
      }, 100);
    },
    no_sale_click: (d) => playAttackClick(0.01, 3500, 0.4 * state.currentTiltVolume),
    paper_receipt_rip: (d) => playNoise(0.2, 3500, 0.4 * state.currentTiltVolume)
  },
  touches: [
    {
      id: 'key_plunge',
      label: 'Key Plunge',
      shortName: 'Key Plunge',
      description: 'The heavy mechanical clack of a vintage price button dropping'
    },
    {
      id: 'bell_ring',
      label: 'The Bell Ring',
      shortName: 'Bell',
      description: 'The legendary, crystal-clear brass internal register chime'
    },
    {
      id: 'drawer_spring_crunch',
      label: 'Drawer Spring Crunch',
      shortName: 'Spring',
      description: 'The chaotic, heavy mechanical lurch of the drawer sliding open'
    },
    {
      id: 'drawer_slam',
      label: 'Drawer Slam',
      shortName: 'Slam',
      description: 'The heavy, dull metal-on-wood structural bang of closing the register'
    },
    {
      id: 'coin_jingle',
      label: 'Coin Jingle',
      shortName: 'Coins',
      description: 'The bright, scattered scatter-wash of metallic currency rattling'
    },
    {
      id: 'lever_crank',
      label: 'Lever Crank',
      shortName: 'Crank',
      description: 'The mechanical, ratcheting side-handle wind'
    },
    {
      id: 'no_sale_click',
      label: 'No Sale Click',
      shortName: 'Click',
      description: 'A small, dry, plastic internal component latch sound'
    },
    {
      id: 'paper_receipt_rip',
      label: 'Paper Receipt Rip',
      shortName: 'Rip',
      description: 'The sharp, paper friction tear across a jagged metal edge'
    }
  ],
  mappings: {
    left: {
      up: 'key_plunge',
      down: 'bell_ring',
      left: 'drawer_spring_crunch',
      right: 'drawer_slam',
      upLong: 'coin_jingle',
      downLong: 'lever_crank',
      leftLong: 'no_sale_click',
      rightLong: 'paper_receipt_rip',
      trigger: 'key_plunge'
    },
    right: {
      up: 'key_plunge',
      down: 'bell_ring',
      left: 'drawer_spring_crunch',
      right: 'drawer_slam',
      upLong: 'coin_jingle',
      downLong: 'lever_crank',
      leftLong: 'no_sale_click',
      rightLong: 'paper_receipt_rip',
      trigger: 'bell_ring'
    }
  }
};
