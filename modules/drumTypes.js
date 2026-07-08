// Drum Specifications and Instruments Configuration Module
import { state } from './state.js';
import { playMembrane, playNoise, playTablaSlideUp, playAttackClick, speakPhrase } from './audio.js';
export const drumTypes = {
  conga: {
    name: 'Congas',
    defaultLeft: 2,
    defaultRight: 3,
    drums: [
      {
        id: 0,
        label: 'Requinto',
        pitchMult: 1.3,
        color: 'caramel',
        sizeValue: 17
      },
      {
        id: 1,
        label: 'Quinto',
        pitchMult: 1.15,
        color: 'blonde-light',
        sizeValue: 18.5
      },
      {
        id: 2,
        label: 'Conga',
        pitchMult: 1.0,
        color: 'blonde',
        sizeValue: 20
      },
      {
        id: 3,
        label: 'Tumba',
        pitchMult: 0.85,
        color: 'darker',
        sizeValue: 21.5
      },
      {
        id: 4,
        label: 'Super Tumba',
        pitchMult: 0.75,
        color: 'dark',
        sizeValue: 23
      }
    ],
    sounds: {
      bajo: (d) => playMembrane(55 * d.pitchMult, 0.9, 1.3, false),
      abierto: (d) => playMembrane(110 * d.pitchMult, 0.6, 1.0, false),
      seco: (d) => playMembrane(180 * d.pitchMult, 0.15, 1.1, true),
      tapado: (d) => {
        playMembrane(180 * d.pitchMult, 0.08, 1.0, true);
        playNoise(0.02, 1800, state.currentTiltVolume * 0.4);
      },
      toque_tapado: (d) => playMembrane(130 * d.pitchMult, 0.05, 1.0, false),
      manoteo: (d) => playMembrane(90 * d.pitchMult, 0.1, 1.0, false),
      golpe_de_casco: (d) => playMembrane(400 * d.pitchMult, 0.05, 1.0, false)
    }
  },
  djembe: {
    name: 'Djembe',
    drums: [
      {
        id: 0,
        label: 'Lead Djembe',
        pitchMult: 1.0,
        color: 'caramel',
        sizeValue: 21
      }
    ],
    sounds: {
      bass: (d) => playMembrane(45 * d.pitchMult, 0.9, 1.6, false),
      tone: (d) => playMembrane(260 * d.pitchMult, 0.5, 1.0, false),
      slap: (d) => {
        playMembrane(480 * d.pitchMult, 0.1, 1.2, true);
        playNoise(0.05, 2000, state.currentTiltVolume * 1.5);
      },
      flam_roll: (d) => {
        playMembrane(260 * d.pitchMult, 0.1, 1.0, true);
        setTimeout(() => {
          playMembrane(260 * d.pitchMult, 0.12, 1.0, false);
        }, 50);
      },
      rim_click: (d) => {
        playMembrane(800 * d.pitchMult, 0.05, 1.0, true);
        playNoise(0.02, 3500, state.currentTiltVolume);
      }
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  bongo: {
    name: 'Bongos',
    drums: [
      {
        id: 0,
        label: 'Bongos',
        pitchMult: 1.0,
        color: 'blonde',
        sizeValue: 24
      }
    ],
    sounds: {
      martillo: (d) => playMembrane((d.id === 0 ? 320 : 160) * d.pitchMult, 0.1, 1.0, false),
      open_tone: (d) => playMembrane((d.id === 0 ? 400 : 200) * d.pitchMult, 0.4, 1.0, false),
      slap: (d) => {
        const f = (d.id === 0 ? 550 : 350) * d.pitchMult;
        playMembrane(f, 0.08, 1.1, true);
        playNoise(0.04, d.id === 0 ? 3000 : 2000, state.currentTiltVolume * 1.2);
      },
      mute_tap: (d) => playMembrane((d.id === 0 ? 350 : 180) * d.pitchMult, 0.05, 1.0, false),
      glissando_de_dedo: (d) => playMembrane((d.id === 0 ? 600 : 300) * d.pitchMult, 0.2, 0.8, false)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  bata: {
    name: 'Bata',
    drums: [
      {
        id: 0,
        label: 'Okónkolo',
        pitchMult: 1.5,
        color: 'caramel-light',
        sizeValue: 15
      },
      {
        id: 1,
        label: 'Itótele',
        pitchMult: 1.1,
        color: 'caramel',
        sizeValue: 19
      },
      {
        id: 2,
        label: 'Iyá',
        pitchMult: 0.75,
        color: 'dark',
        sizeValue: 23
      }
    ],
    sounds: {
      abierto: (d) => {
        const baseId = parseInt(d.id);
        const f = baseId === 0 ? 220 : baseId === 1 ? 140 : 110;
        playMembrane(f * d.pitchMult, 0.4, 1.0, false);
      },
      tapado: (d) => {
        const baseId = parseInt(d.id);
        const f = baseId === 0 ? 260 : baseId === 1 ? 170 : 130;
        playMembrane(f * d.pitchMult, 0.1, 1.0, false);
      },
      chach_snap: (d) => {
        const baseId = parseInt(d.id);
        const f = baseId === 0 ? 180 : baseId === 1 ? 110 : 60;
        playMembrane(f * d.pitchMult, 0.15, 1.1, true);
        if (baseId === 2 || d.label.includes('Iyá')) {
          playNoise(0.18, 2200, state.currentTiltVolume * 0.6);
        }
      },
      cuerpo_knock: (d) => {
        const baseId = parseInt(d.id);
        const f = baseId === 0 ? 440 : baseId === 1 ? 280 : 220;
        playMembrane(f * d.pitchMult, 0.05, 1.0, false);
      }
    },
    defaultLeft: 1,
    // Itótele
    defaultRight: 1 // Itótele
  },
  pandero: {
    name: 'Pandero',
    drums: [
      {
        id: 0,
        label: 'Requinto',
        pitchMult: 1.3,
        color: 'blonde-light',
        sizeValue: 16
      },
      {
        id: 1,
        label: 'Seguidor',
        pitchMult: 1.0,
        color: 'blonde',
        sizeValue: 19.5
      },
      {
        id: 2,
        label: 'Buleador',
        pitchMult: 0.8,
        color: 'dark',
        sizeValue: 23
      }
    ],
    sounds: {
      open_edge_tone: (d) => playMembrane((d.id === 0 ? 280 : d.id === 1 ? 180 : 100) * d.pitchMult, 0.4, 1.0, false),
      choke_center_strike: (d) =>
        playMembrane((d.id === 0 ? 280 : d.id === 1 ? 180 : 120) * d.pitchMult, 0.1, 1.0, false),
      rim_jingle_strike: (d) =>
        playMembrane((d.id === 0 ? 300 : d.id === 1 ? 200 : 140) * d.pitchMult, 0.08, 1.0, false),
      sub_bass_hand_cup: (d) => playMembrane((d.id === 0 ? 180 : d.id === 1 ? 120 : 70) * d.pitchMult, 0.5, 1.3, false),
      thigh_slap_pop: (d) => {
        const f = d.id === 0 ? 350 : d.id === 1 ? 220 : 150;
        playMembrane(f * d.pitchMult, 0.12, 1.1, true);
        playNoise(0.06, 1800, state.currentTiltVolume * 0.9);
      }
    },
    defaultLeft: 1,
    // Seguidor
    defaultRight: 0 // Requinto
  },
  barril: {
    name: 'Barril',
    drums: [
      {
        id: 0,
        label: 'Primo',
        pitchMult: 1.2,
        color: 'caramel',
        sizeValue: 18
      },
      {
        id: 1,
        label: 'Buleador',
        pitchMult: 0.85,
        color: 'darker',
        sizeValue: 21.5
      }
    ],
    sounds: {
      abierto: (d) => playMembrane((d.id === 0 ? 110 : 85) * d.pitchMult, 0.65, 1.1, false),
      seco: (d) => playMembrane((d.id === 0 ? 160 : 120) * d.pitchMult, 0.15, 1.1, true),
      cu: (d) => playMembrane((d.id === 0 ? 160 : 110) * d.pitchMult, 0.5, 1.0, false),
      choking_hand: (d) => playMembrane((d.id === 0 ? 180 : 130) * d.pitchMult, 0.08, 1.0, false)
    },
    defaultLeft: 1,
    // Buleador
    defaultRight: 0 // Primo
  },
  bombo: {
    name: 'Bombo',
    drums: [
      {
        id: 0,
        label: 'Bombo',
        pitchMult: 1.0,
        color: 'dark',
        sizeValue: 21
      }
    ],
    sounds: {
      golpe_de_parche: (d) => playMembrane(72 * d.pitchMult, 0.6, 1.2, false),
      golpe_de_parche_apagado: (d) => playMembrane(95 * d.pitchMult, 0.15, 1.0, true),
      golpe_de_aro: (d) => playMembrane(480 * d.pitchMult, 0.08, 1.0, false),
      golpe_de_casco: (d) => playMembrane(380 * d.pitchMult, 0.05, 1.0, false)
    },
    defaultLeft: 0,
    // Bombo
    defaultRight: 0 // Bombo
  },
  tabla: {
    name: 'Tabla',
    drums: [
      {
        id: 0,
        label: 'Bayan',
        pitchMult: 1.0,
        color: 'dark',
        sizeValue: 21
      },
      {
        id: 1,
        label: 'Dayan',
        pitchMult: 1.0,
        color: 'caramel-light',
        sizeValue: 17
      }
    ],
    sounds: {
      dayan_na_ta: (d) => {
        playMembrane(350 * d.pitchMult, 0.3, 1.1, true); // Sharp, ringing edge stroke
      },
      dayan_tin: (d) => {
        playMembrane(400 * d.pitchMult, 0.1, 1.1, true);
      },
      dayan_tun: (d) => {
        playMembrane(280 * d.pitchMult, 0.5, 1.5, false); // Resonant center stroke
      },
      bayan_ga_ghe: (d) => {
        playTablaSlideUp(65 * d.pitchMult, 120 * d.pitchMult, 0.7); // Deep sliding bass
      },
      bayan_ka_ke: (d) => {
        playMembrane(150 * d.pitchMult, 0.1, 1.0, false); // Flat non-resonant bass slap
      }
    },
    defaultLeft: 0,
    // Bayan
    defaultRight: 1 // Dayan
  },
  darbuka: {
    name: 'Darbuka',
    drums: [
      {
        id: 0,
        label: 'Darbuka',
        pitchMult: 1.0,
        color: 'blonde-light',
        sizeValue: 20.5
      }
    ],
    sounds: {
      dum: (d) => playMembrane(75 * d.pitchMult, 0.45, 1.4, false),
      tek: (d) => {
        playMembrane(320 * d.pitchMult, 0.12, 1.0, true);
        playNoise(0.04, 3000, state.currentTiltVolume * 1.1);
      },
      ka: (d) => {
        playMembrane(340 * d.pitchMult, 0.1, 1.0, true);
        playNoise(0.03, 3200, state.currentTiltVolume * 0.9);
      },
      slap: (d) => {
        playMembrane(220 * d.pitchMult, 0.08, 1.1, true);
        playNoise(0.06, 2000, state.currentTiltVolume * 1.5);
      },
      finger_roll: (d) => {
        playMembrane(330 * d.pitchMult, 0.08, 1.0, true);
        setTimeout(() => {
          playMembrane(340 * d.pitchMult, 0.08, 1.0, true);
        }, 60);
      },
      under_rim_snap: (d) => {
        playMembrane(550 * d.pitchMult, 0.05, 1.0, true);
        playNoise(0.02, 4500, state.currentTiltVolume * 0.8);
      }
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  timbales: {
    name: 'Timbales',
    drums: [
      {
        id: 0,
        label: 'Macho',
        pitchMult: 1.2,
        color: 'blonde-light',
        sizeValue: 18
      },
      {
        id: 1,
        label: 'Hembra',
        pitchMult: 0.85,
        color: 'blonde',
        sizeValue: 22
      }
    ],
    sounds: {
      timbales_open: (d) => playMembrane((d.id === 0 ? 320 : 210) * d.pitchMult, 0.4, 1.0, false),
      rimshot: (d) => {
        playMembrane((d.id === 0 ? 450 : 300) * d.pitchMult, 0.1, 1.1, true);
        playNoise(0.08, d.id === 0 ? 2500 : 2000, state.currentTiltVolume * 1.1);
      },
      paila: (d) => {
        playMembrane(800 * d.pitchMult, 0.05, 1.0, false);
        playNoise(0.03, 3500, state.currentTiltVolume * 0.5);
      },
      timbales_muff: (d) => playMembrane((d.id === 0 ? 350 : 250) * d.pitchMult, 0.1, 1.0, false),
      bell: (d) => {
        playMembrane(1200 * d.pitchMult, 0.15, 1.0, false); // synthetic cowbell ping
        playNoise(0.05, 4000, state.currentTiltVolume * 0.6);
      }
    },
    defaultLeft: 0,
    defaultRight: 1
  },
  cajon: {
    name: 'Cajón',
    drums: [
      {
        id: 0,
        label: 'Cajón',
        pitchMult: 1.0,
        color: 'caramel',
        sizeValue: 24
      }
    ],
    sounds: {
      bass_tone: (d) => {
        playMembrane(50 * d.pitchMult, 0.7, 1.5, false); // deep boom
        playNoise(0.02, 500, state.currentTiltVolume * 0.5); // slight snare rattle
      },
      corner_slap: (d) => {
        playMembrane(120 * d.pitchMult, 0.2, 1.0, false);
        playNoise(0.12, 2200, state.currentTiltVolume * 1.2); // strong snare rattle
      },
      high_finger_snap: (d) => {
        playMembrane(50 * d.pitchMult, 0.7, 1.5, false);
        playNoise(0.02, 500, state.currentTiltVolume * 0.5);
      },
      tapado: (d) => playMembrane(250 * d.pitchMult, 0.05, 1.0, false),
      side_knock: (d) => {
        playMembrane(50 * d.pitchMult, 0.7, 1.5, false);
        playNoise(0.02, 500, state.currentTiltVolume * 0.5);
      },
      heel_slide_pitch_bend: (d) => playMembrane(250 * d.pitchMult, 0.05, 1.0, false)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  candombe: {
    name: 'Candombe',
    drums: [
      {
        id: 0,
        label: 'Chico',
        pitchMult: 1.4,
        color: 'blonde-light',
        sizeValue: 16
      },
      {
        id: 1,
        label: 'Repique',
        pitchMult: 1.0,
        color: 'caramel',
        sizeValue: 19.5
      },
      {
        id: 2,
        label: 'Piano',
        pitchMult: 0.7,
        color: 'dark',
        sizeValue: 23.5
      }
    ],
    sounds: {
      mano: (d) => {
        const f = (d.id === 0 ? 320 : d.id === 1 ? 220 : 150) * d.pitchMult;
        playMembrane(f, 0.12, 1.0, true);
        playNoise(0.08, d.id === 0 ? 2500 : 1800, state.currentTiltVolume * 0.9);
      },
      palo: (d) => playMembrane((d.id === 0 ? 140 : d.id === 1 ? 90 : 55) * d.pitchMult, 0.6, 1.4, false),
      trigro_madera: (d) => playMembrane((d.id === 0 ? 140 : d.id === 1 ? 90 : 55) * d.pitchMult, 0.6, 1.4, false),
      cu_stave_rake: (d) => playMembrane((d.id === 0 ? 220 : d.id === 1 ? 150 : 90) * d.pitchMult, 0.1, 1.0, false)
    },
    defaultLeft: 2,
    // Piano
    defaultRight: 1 // Repique
  },
  gwoka: {
    name: 'Gwo Ka',
    drums: [
      {
        id: 0,
        label: 'Markeur',
        pitchMult: 1.15,
        color: 'caramel',
        sizeValue: 18.5
      },
      {
        id: 1,
        label: 'Boula',
        pitchMult: 0.8,
        color: 'darker',
        sizeValue: 22.5
      }
    ],
    sounds: {
      boul: (d) => playMembrane((d.id === 0 ? 160 : 100) * d.pitchMult, 0.1, 1.0, false),
      mak: (d) => playMembrane((d.id === 0 ? 175 : 110) * d.pitchMult, 0.55, 1.1, false),
      tak_rim_strike: (d) => playMembrane(450 * d.pitchMult, 0.05, 1.0, true),
      choke_muff: (d) => playMembrane((d.id === 0 ? 175 : 110) * d.pitchMult, 0.1, 0.8, true)
    },
    defaultLeft: 1,
    // Boula
    defaultRight: 0 // Markeur
  },
  tanbou: {
    name: 'Tanbou',
    drums: [
      {
        id: 0,
        label: 'Tanbou',
        pitchMult: 1.0,
        color: 'caramel',
        sizeValue: 21
      }
    ],
    sounds: {
      center_palm_strike: (d) => {
        playTablaSlideUp(110 * d.pitchMult, 180 * d.pitchMult, 0.4);
      },
      edge_finger_snap: (d) => playMembrane(65 * d.pitchMult, 0.75, 1.4, false),
      hand_foot_pitch_bend_press: (d) => {
        playTablaSlideUp(110 * d.pitchMult, 180 * d.pitchMult, 0.4);
      },
      side_stave_strike: (d) => {
        playTablaSlideUp(110 * d.pitchMult, 180 * d.pitchMult, 0.4);
      }
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  chinese: {
    name: 'Dagu & Tanggu',
    drums: [
      {
        id: 0,
        label: 'Bangu',
        pitchMult: 1.6,
        color: 'caramel-light',
        sizeValue: 14
      },
      {
        id: 1,
        label: 'Tanggu',
        pitchMult: 1.0,
        color: 'caramel',
        sizeValue: 19.5
      },
      {
        id: 2,
        label: 'Dagu',
        pitchMult: 0.65,
        color: 'dark',
        sizeValue: 25.5
      }
    ],
    sounds: {
      center_strike: (d) => {
        const baseId = parseInt(d.id);
        if (baseId === 0) {
          playMembrane(850 * d.pitchMult, 0.05, 0.7, false);
          playNoise(0.05, 4500, state.currentTiltVolume * 0.5);
        } else if (baseId === 1) {
          playMembrane(110 * d.pitchMult, 0.6, 1.2, false);
        } else {
          playMembrane(45 * d.pitchMult, 0.95, 2.0, false);
        }
      },
      glancing_blow: (d) => {
        const baseId = parseInt(d.id);
        if (baseId === 0) {
          playMembrane(750 * d.pitchMult, 0.06, 0.8, false);
        } else if (baseId === 1) {
          playMembrane(140 * d.pitchMult, 0.1, 1.0, false);
        } else {
          playMembrane(70 * d.pitchMult, 0.3, 1.2, false);
        }
      },
      aro: (d) => {
        const baseId = parseInt(d.id);
        if (baseId === 0) {
          playMembrane(950 * d.pitchMult, 0.04, 0.6, false);
        } else if (baseId === 1) {
          playMembrane(180 * d.pitchMult, 0.5, 1.0, false);
        } else {
          playMembrane(55 * d.pitchMult, 0.85, 1.6, false);
        }
      },
      stick_shaft_clack: (d) => {
        const baseId = parseInt(d.id);
        if (baseId === 0) {
          playMembrane(1100 * d.pitchMult, 0.03, 0.5, true);
        } else if (baseId === 1) {
          playMembrane(550 * d.pitchMult, 0.05, 0.8, true);
          playNoise(0.06, 3500, state.currentTiltVolume * 0.8);
        } else {
          playMembrane(150 * d.pitchMult, 0.15, 1.2, true);
          playNoise(0.12, 1200, state.currentTiltVolume * 1.1);
        }
      }
    },
    defaultLeft: 2,
    // Dagu
    defaultRight: 1 // Tanggu
  },
  daiko: {
    name: 'Taiko',
    drums: [
      {
        id: 0,
        label: 'Shime-daiko',
        pitchMult: 1.35,
        color: 'blonde-light',
        sizeValue: 16.5
      },
      {
        id: 1,
        label: 'Nagado-daiko',
        pitchMult: 0.9,
        color: 'caramel',
        sizeValue: 21.5
      },
      {
        id: 2,
        label: 'O-daiko',
        pitchMult: 0.5,
        color: 'darker',
        sizeValue: 27.5
      }
    ],
    sounds: {
      don: (d) => {
        const baseId = parseInt(d.id);
        if (baseId === 0) playMembrane(250 * d.pitchMult, 0.3, 0.7, false);
        else if (baseId === 1) playMembrane(80 * d.pitchMult, 0.6, 1.2, false);
        else playMembrane(40 * d.pitchMult, 0.85, 1.8, false);
      },
      do_ko: (d) => {
        const baseId = parseInt(d.id);
        if (baseId === 0) playMembrane(250 * d.pitchMult, 0.3, 0.7, false);
        else if (baseId === 1) playMembrane(80 * d.pitchMult, 0.6, 1.2, false);
        else playMembrane(40 * d.pitchMult, 0.85, 1.8, false);
      },
      k: (d) => {
        const baseId = parseInt(d.id);
        if (baseId === 0) playMembrane(250 * d.pitchMult, 0.3, 0.7, false);
        else if (baseId === 1) playMembrane(80 * d.pitchMult, 0.6, 1.2, false);
        else playMembrane(40 * d.pitchMult, 0.85, 1.8, false);
      },
      bachi_clack: (d) => {
        const baseId = parseInt(d.id);
        if (baseId === 0) {
          playMembrane(900 * d.pitchMult, 0.05, 0.6, true);
          playNoise(0.04, 4000, state.currentTiltVolume * 0.7);
        } else if (baseId === 1) {
          playMembrane(650 * d.pitchMult, 0.06, 0.8, true);
          playNoise(0.06, 3200, state.currentTiltVolume * 0.9);
        } else {
          playMembrane(450 * d.pitchMult, 0.08, 1.1, true);
          playNoise(0.08, 2500, state.currentTiltVolume * 1.1);
        }
      }
    },
    defaultLeft: 2,
    // O-daiko
    defaultRight: 1 // Nagado-daiko
  },
  bodhran: {
    name: 'Bodhrán',
    drums: [
      {
        id: 0,
        label: 'Bodhrán Head',
        pitchMult: 1.0,
        color: 'blonde',
        sizeValue: 22
      }
    ],
    sounds: {
      tipper_roll: (d) => playMembrane(95 * d.pitchMult, 0.12, 1.2, false),
      rimshot: (d) => playMembrane(145 * d.pitchMult, 0.22, 1.0, false),
      back_hand_pitch_glide: (d) => playMembrane(145 * d.pitchMult, 0.22, 1.0, false),
      back_hand_pressure_damp: (d) => playMembrane(68 * d.pitchMult, 1.4, 1.4, false)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  talkingdrum: {
    name: 'Talking Drum',
    drums: [
      {
        id: 0,
        label: 'Tama',
        pitchMult: 1.0,
        color: 'caramel',
        sizeValue: 18
      }
    ],
    sounds: {
      squeeze_cord_pitch_glide: (d) => {
        playMembrane(280 * d.pitchMult, 0.14, 1.1, true);
        playNoise(0.06, 1500, state.currentTiltVolume * 0.8);
      },
      curved_stick_strike: (d) => playTablaSlideUp(250 * d.pitchMult, 450 * d.pitchMult, 0.45),
      non_dominant_finger_tap: (d) => playTablaSlideUp(150 * d.pitchMult, 300 * d.pitchMult, 0.55),
      shell_knock: (d) => playTablaSlideUp(250 * d.pitchMult, 450 * d.pitchMult, 0.45)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  cuica: {
    name: 'Cuíca',
    drums: [
      {
        id: 0,
        label: 'Cuíca',
        pitchMult: 1.0,
        color: 'blonde-light',
        sizeValue: 17
      }
    ],
    sounds: {
      internal_stick_rub: (d) => playTablaSlideUp(750 * d.pitchMult, 1000 * d.pitchMult, 0.13),
      external_thumb_press: (d) => playTablaSlideUp(450 * d.pitchMult, 850 * d.pitchMult, 0.22),
      high_to_low_slide: (d) => playTablaSlideUp(1000 * d.pitchMult, 600 * d.pitchMult, 0.2),
      rim_tap: (d) => playMembrane(600 * d.pitchMult, 0.05, 1.0, false)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  doira: {
    name: 'Doira',
    drums: [
      {
        id: 0,
        label: 'Doira Head',
        pitchMult: 1.0,
        color: 'blonde',
        sizeValue: 20.5
      }
    ],
    sounds: {
      doira_dum: (d) => playMembrane(120 * d.pitchMult, 0.48, 1.15, false),
      doira_tak: (d) => playMembrane(175 * d.pitchMult, 0.38, 1.0, false),
      doira_kah: (d) => {
        playMembrane(310 * d.pitchMult, 0.12, 1.0, true);
        playNoise(0.08, 2600, state.currentTiltVolume * 0.95);
      },
      doira_muff: (d) => {
        playMembrane(215 * d.pitchMult, 0.1, 1.0, true);
        playNoise(0.24, 4200, state.currentTiltVolume * 1.1);
      },
      doira_snap: (d) => playNoise(0.16, 4800, state.currentTiltVolume * 1.2)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  uchiwadaiko: {
    name: 'Uchiwa-daiko',
    drums: [
      {
        id: 0,
        label: 'Uchiwa-daiko',
        pitchMult: 1.0,
        color: 'blonde-light',
        sizeValue: 15
      }
    ],
    sounds: {
      fan_head_slap: (d) => playMembrane(480 * d.pitchMult, 0.04, 0.95, true),
      handle_knock: (d) => playMembrane(190 * d.pitchMult, 0.05, 1.0, false),
      rim_click: (d) => playMembrane(720 * d.pitchMult, 0.03, 1.0, true),
      rapid_drum_roll: (d) => {
        playNoise(0.18, 1200, state.currentTiltVolume * 0.5);
        playMembrane(480 * d.pitchMult, 0.12, 0.8, false);
      }
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  oceandrum: {
    name: 'Ocean Drum',
    drums: [
      {
        id: 0,
        label: 'Ocean Drum',
        pitchMult: 1.0,
        color: 'blonde-light',
        sizeValue: 21.5
      }
    ],
    sounds: {
      rolling_swirl: (d) => playNoise(0.55, 950, state.currentTiltVolume * 0.75),
      frame_tap: (d) => playMembrane(220 * d.pitchMult, 0.08, 1.0, true),
      sudden_frame_tilt: (d) => {
        playMembrane(95 * d.pitchMult, 0.65, 1.35, false);
        playNoise(0.14, 1100, state.currentTiltVolume * 0.45);
      },
      bead_shake_shimmer: (d) => playNoise(0.2, 4500, state.currentTiltVolume * 0.6)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  janggu: {
    name: 'Janggu',
    drums: [
      {
        id: 0,
        label: 'Gungpyeon (Bass)',
        pitchMult: 0.8,
        color: 'blonde',
        sizeValue: 21
      },
      {
        id: 1,
        label: 'Yeolpyeon (Treble)',
        pitchMult: 1.3,
        color: 'blonde-light',
        sizeValue: 18.5
      }
    ],
    sounds: {
      kung: (d) => {
        const baseId = parseInt(d.id);
        if (baseId === 0) playMembrane(88 * d.pitchMult, 0.14, 1.0, false);
        else playMembrane(230 * d.pitchMult, 0.08, 1.0, false);
      },
      chae: (d) => {
        const baseId = parseInt(d.id);
        if (baseId === 0) playMembrane(88 * d.pitchMult, 0.14, 1.0, false);
        else playMembrane(230 * d.pitchMult, 0.08, 1.0, false);
      },
      hoop_rim_click: (d) => {
        const baseId = parseInt(d.id);
        if (baseId === 0) playMembrane(72 * d.pitchMult, 0.78, 1.38, false);
        else playMembrane(210 * d.pitchMult, 0.32, 1.0, false);
      },
      center_stick_mute: (d) => {
        const baseId = parseInt(d.id);
        if (baseId === 0) playMembrane(88 * d.pitchMult, 0.14, 1.0, false);
        else playMembrane(230 * d.pitchMult, 0.08, 1.0, false);
      }
    },
    defaultLeft: 0,
    defaultRight: 1
  },
  zabumba: {
    name: 'Zabumba',
    drums: [
      {
        id: 0,
        label: 'Zabumba',
        pitchMult: 1.0,
        color: 'darker',
        sizeValue: 24
      }
    ],
    sounds: {
      baqueta_bass: (d) => playMembrane(55 * d.pitchMult, 0.7, 1.3, false),
      bacalhau_tap: (d) => playMembrane(520 * d.pitchMult, 0.08, 0.9, true),
      hoop_click: (d) => playMembrane(950 * d.pitchMult, 0.04, 1.1, true),
      hand_slap: (d) => {
        playMembrane(180 * d.pitchMult, 0.12, 1.0, true);
        playNoise(0.04, 2500, state.currentTiltVolume * 0.7);
      }
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  mridangam: {
    name: 'Mridangam',
    drums: [
      {
        id: 0,
        label: 'Thoppi (Bass)',
        pitchMult: 0.8,
        color: 'dark',
        sizeValue: 22
      },
      {
        id: 1,
        label: 'Valanthalai (Treble)',
        pitchMult: 1.4,
        color: 'caramel',
        sizeValue: 18.5
      }
    ],
    sounds: {
      tha: (d) => {
        const baseId = parseInt(d.id);
        if (baseId === 0) playMembrane(110 * d.pitchMult, 0.35, 1.1, false);
        else {
          playMembrane(175 * d.pitchMult, 0.62, 0.95, false);
          playMembrane(350 * d.pitchMult, 0.42, 0.95, false);
        }
      },
      thom: (d) => {
        const baseId = parseInt(d.id);
        if (baseId === 0) {
          playMembrane(140 * d.pitchMult, 0.12, 1.0, true);
        } else {
          playMembrane(270 * d.pitchMult, 0.11, 0.98, true);
          playNoise(0.03, 2600, state.currentTiltVolume * 0.65);
        }
      },
      nam: (d) => {
        const baseId = parseInt(d.id);
        if (baseId === 0) {
          playMembrane(140 * d.pitchMult, 0.12, 1.0, true);
        } else {
          playMembrane(270 * d.pitchMult, 0.11, 0.98, true);
          playNoise(0.03, 2600, state.currentTiltVolume * 0.65);
        }
      },
      dhi_thei: (d) => {
        const baseId = parseInt(d.id);
        if (baseId === 0) playMembrane(100 * d.pitchMult, 0.08, 1.0, false);
        else playMembrane(125 * d.pitchMult, 0.07, 1.0, false);
      },
      chapu: (d) => {
        const baseId = parseInt(d.id);
        if (baseId === 0) playMembrane(110 * d.pitchMult, 0.35, 1.1, false);
        else {
          playMembrane(175 * d.pitchMult, 0.62, 0.95, false);
          playMembrane(350 * d.pitchMult, 0.42, 0.95, false);
        }
      }
    },
    defaultLeft: 0,
    defaultRight: 1
  },
  udu: {
    name: 'Udu',
    drums: [
      {
        id: 0,
        label: 'Clay Udu',
        pitchMult: 1.0,
        color: 'terracotta',
        sizeValue: 19
      }
    ],
    sounds: {
      ceramic_side_body_slap: (d) => {
        playMembrane(420 * d.pitchMult, 0.08, 1.1, true);
        playNoise(0.02, 3500, state.currentTiltVolume * 0.4);
      },
      mouth_port_palm_pop: (d) => playMembrane(75 * d.pitchMult, 0.45, 1.3, false),
      neck_scratch: (d) => playTablaSlideUp(140 * d.pitchMult, 220 * d.pitchMult, 0.35),
      ceramic_finger_tap: (d) => playMembrane(680 * d.pitchMult, 0.04, 0.9, true)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  thunderdrum: {
    name: 'Thunder Drum',
    drums: [
      {
        id: 0,
        label: 'Storm Chamber',
        pitchMult: 1.0,
        color: 'purple',
        sizeValue: 23
      }
    ],
    sounds: {
      spring_mallet_strike: (d) => {
        playMembrane(75 * d.pitchMult, 1.5, 1.3, false);
        playNoise(1.2, 500, state.currentTiltVolume * 0.7);
      },
      cylinder_shake_rumble: (d) => playTablaSlideUp(50 * d.pitchMult, 120 * d.pitchMult, 1.2),
      head_tap: (d) => {
        playMembrane(110 * d.pitchMult, 1.8, 1.1, true);
        playNoise(1.5, 900, state.currentTiltVolume * 0.95);
      },
      spring_scrape: (d) => playNoise(0.4, 2500, state.currentTiltVolume * 0.6)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  waterdrums: {
    name: 'Water Drums',
    drums: [
      {
        id: 0,
        label: 'Floating Gourd',
        pitchMult: 1.0,
        color: 'teal',
        sizeValue: 20
      }
    ],
    sounds: {
      gourd_boom: (d) => playMembrane(55 * d.pitchMult, 0.65, 1.5, false),
      water_splash: (d) => {
        playMembrane(130 * d.pitchMult, 0.45, 1.25, false);
        playNoise(0.25, 1200, state.currentTiltVolume * 0.4);
      },
      water_slap: (d) => {
        playMembrane(220 * d.pitchMult, 0.3, 1.1, true);
        playNoise(0.4, 2500, state.currentTiltVolume * 0.85);
      },
      gourd_mute: (d) => {
        playMembrane(110 * d.pitchMult, 0.15, 1.0, false);
        playNoise(0.12, 1000, state.currentTiltVolume * 0.3);
      },
      water_drip: (d) => playTablaSlideUp(75 * d.pitchMult, 160 * d.pitchMult, 0.5)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  vibraslap: {
    name: 'Vibraslap',
    drums: [
      {
        id: 0,
        label: 'Resonator Box',
        pitchMult: 1.0,
        color: 'wood',
        sizeValue: 18
      }
    ],
    sounds: {
      ball_palm_strike: (d) => playNoise(0.5, 1800, state.currentTiltVolume * 0.7),
      soundbox_strike: (d) => playNoise(1.2, 2200, state.currentTiltVolume * 1.4),
      wire_twang: (d) => playMembrane(220 * d.pitchMult, 0.25, 0.8, false),
      short_buzz: (d) => playNoise(0.15, 2000, state.currentTiltVolume * 0.5)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  flexatone: {
    name: 'Flexatone',
    drums: [
      {
        id: 0,
        label: 'Steel Blade',
        pitchMult: 1.0,
        color: 'silver',
        sizeValue: 17
      }
    ],
    sounds: {
      handle_shake_roll: (d) => playTablaSlideUp(440 * d.pitchMult, 880 * d.pitchMult, 0.5),
      thumb_pitch_bend: (d) => playTablaSlideUp(250 * d.pitchMult, 750 * d.pitchMult, 0.8),
      frame_knock: (d) => playMembrane(950 * d.pitchMult, 0.04, 1.2, true),
      blade_flick_down: (d) => playTablaSlideUp(880 * d.pitchMult, 330 * d.pitchMult, 0.6)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  waterphone: {
    name: 'Waterphone',
    drums: [
      {
        id: 0,
        label: 'Ethereal Basin',
        pitchMult: 1.0,
        color: 'aquamarine',
        sizeValue: 22
      }
    ],
    sounds: {
      cello_rod_bow_stroke: (d) => playTablaSlideUp(280 * d.pitchMult, 580 * d.pitchMult, 1.5),
      rod_mallet_tap: (d) => playTablaSlideUp(280 * d.pitchMult, 580 * d.pitchMult, 1.5),
      basin_tilt_water_shift: (d) => playTablaSlideUp(280 * d.pitchMult, 580 * d.pitchMult, 1.5),
      bottom_basin_hand_slap: (d) => {
        playMembrane(900 * d.pitchMult, 1.4, 0.9, true);
        playNoise(1.2, 4500, state.currentTiltVolume * 0.75);
      }
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  handpan: {
    name: 'Handpan',
    drums: [
      {
        id: 0,
        label: 'Central Ding (Bass)',
        pitchMult: 0.8,
        color: 'steel-blue',
        sizeValue: 22
      },
      {
        id: 1,
        label: 'Tone Fields',
        pitchMult: 1.2,
        color: 'steel-blue',
        sizeValue: 18
      }
    ],
    sounds: {
      ding: (d) => playMembrane(120 * d.pitchMult, 0.6, 1.25, false),
      gu: (d) => playMembrane(120 * d.pitchMult, 0.6, 1.25, false),
      tone_field_tap: (d) => playMembrane(240 * d.pitchMult, 1.3, 1.0, false),
      interstitial_tap: (d) => playMembrane(85 * d.pitchMult, 1.5, 1.1, false)
    },
    defaultLeft: 0,
    defaultRight: 1
  },
  steelpan: {
    name: 'Steelpan',
    drums: [
      {
        id: 0,
        label: 'Lead Pan',
        pitchMult: 1.0,
        color: 'silver',
        sizeValue: 22
      }
    ],
    sounds: {
      indentation_strike: (d) => playMembrane(440 * d.pitchMult, 0.45, 1.2, false),
      rapid_chordal_roll: (d) => {
        playMembrane(440 * d.pitchMult, 0.15, 0.8, false);
        playMembrane(554 * d.pitchMult, 0.12, 0.7, false);
        playMembrane(659 * d.pitchMult, 0.1, 0.6, false);
      },
      rim_ring: (d) => playMembrane(880 * d.pitchMult, 0.8, 1.4, false),
      mute_slap: (d) => playMembrane(330 * d.pitchMult, 0.05, 0.9, true)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  ghatam: {
    name: 'Ghatam',
    drums: [
      {
        id: 0,
        label: 'Ghatam',
        pitchMult: 1.0,
        color: 'terracotta',
        sizeValue: 19
      }
    ],
    sounds: {
      belly_vacuum_pop: (d) => playMembrane(450 * d.pitchMult, 0.15, 1.0, true),
      finger_flick_pop: (d) => playMembrane(450 * d.pitchMult, 0.15, 1.0, true),
      mouth_open_slap: (d) => playMembrane(450 * d.pitchMult, 0.15, 1.0, true),
      neck_rim_ring: (d) => playMembrane(300 * d.pitchMult, 0.3, 1.1, false)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  daf: {
    name: 'Daf',
    drums: [
      {
        id: 0,
        label: 'Persian Daf',
        pitchMult: 1.0,
        color: 'blonde',
        sizeValue: 23
      }
    ],
    sounds: {
      dum: (d) => playMembrane(60 * d.pitchMult, 0.8, 1.5, false),
      tak: (d) => playMembrane(280 * d.pitchMult, 0.2, 1.0, true),
      zanjir: (d) => playMembrane(120 * d.pitchMult, 0.5, 1.2, false),
      frame_slap: (d) => playMembrane(280 * d.pitchMult, 0.2, 1.0, true)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  riq: {
    name: 'Riq',
    drums: [
      {
        id: 0,
        label: 'Arabic Riq',
        pitchMult: 1.0,
        color: 'blonde-light',
        sizeValue: 16
      }
    ],
    sounds: {
      dum: (d) => playMembrane(130 * d.pitchMult, 0.4, 1.1, false),
      tak: (d) => playMembrane(360 * d.pitchMult, 0.12, 0.9, true),
      jingle_damp_split: (d) => playNoise(0.18, 4500, state.currentTiltVolume * 0.75),
      jingle_shake: (d) => playNoise(0.25, 6000, state.currentTiltVolume * 0.85)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  surdo: {
    name: 'Surdo',
    drums: [
      {
        id: 0,
        label: 'Surdo',
        pitchMult: 1.0,
        color: 'darker',
        sizeValue: 26
      }
    ],
    sounds: {
      open_strike: (d) => playMembrane(55 * d.pitchMult, 1.1, 1.6, false),
      muted_mallet_strike: (d) => playMembrane(60 * d.pitchMult, 0.2, 1.0, false),
      hand_keep_time_tap: (d) => playMembrane(60 * d.pitchMult, 0.2, 1.0, false),
      rim_click: (d) => playMembrane(120 * d.pitchMult, 0.5, 1.2, true)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  pandeiro: {
    name: 'Pandeiro',
    drums: [
      {
        id: 0,
        label: 'Pandeiro',
        pitchMult: 1.0,
        color: 'blonde',
        sizeValue: 18
      }
    ],
    sounds: {
      polegar: (d) => playMembrane(260 * d.pitchMult, 0.15, 0.9, true),
      manoteo: (d) => playMembrane(260 * d.pitchMult, 0.15, 0.9, true),
      chacoalho: (d) => playNoise(0.12, 3800, state.currentTiltVolume * 0.7),
      rim_click: (d) => playMembrane(260 * d.pitchMult, 0.15, 0.9, true)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  tamborim: {
    name: 'Tamborim',
    drums: [
      {
        id: 0,
        label: 'Tamborim',
        pitchMult: 1.0,
        color: 'blonde-light',
        sizeValue: 14
      }
    ],
    sounds: {
      toque_aberto: (d) => playMembrane(220 * d.pitchMult, 0.2, 0.8, false),
      virada: (d) => playMembrane(450 * d.pitchMult, 0.08, 0.7, false),
      muted_back_finger_press: (d) => playMembrane(300 * d.pitchMult, 0.05, 0.6, false),
      rim_shot: (d) => {
        playMembrane(580 * d.pitchMult, 0.05, 1.2, true);
        playNoise(0.04, 4000, state.currentTiltVolume * 0.8);
      }
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  repinique: {
    name: 'Repinique',
    drums: [
      {
        id: 0,
        label: 'Repinique',
        pitchMult: 1.0,
        color: 'silver',
        sizeValue: 18.5
      }
    ],
    sounds: {
      mano: (d) => playMembrane(450 * d.pitchMult, 0.15, 0.9, true),
      baqueta: (d) => playMembrane(450 * d.pitchMult, 0.15, 0.9, true),
      rimshot_crack: (d) => playMembrane(450 * d.pitchMult, 0.15, 0.9, true),
      stick_slide_pitch_bend: (d) => playMembrane(160 * d.pitchMult, 0.45, 1.1, false)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  bendir: {
    name: 'Bendir',
    drums: [
      {
        id: 0,
        label: 'Bendir Head',
        pitchMult: 1.0,
        color: 'blonde',
        sizeValue: 21.5
      }
    ],
    sounds: {
      dum: (d) => playMembrane(75 * d.pitchMult, 0.8, 1.4, false),
      tak: (d) => {
        playMembrane(320 * d.pitchMult, 0.15, 0.95, true);
        playNoise(0.12, 1400, state.currentTiltVolume * 0.85);
      },
      kah: (d) => {
        playMembrane(150 * d.pitchMult, 0.45, 1.1, false);
        playNoise(0.06, 800, state.currentTiltVolume * 0.4);
      },
      snare_rattle_mute: (d) => playMembrane(180 * d.pitchMult, 0.1, 1.0, false),
      fingernail_rim_rim: (d) => playNoise(0.08, 1000, state.currentTiltVolume * 0.5)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  davul: {
    name: 'Davul',
    drums: [
      {
        id: 0,
        label: 'Davul',
        pitchMult: 1.0,
        color: 'darker',
        sizeValue: 25
      }
    ],
    sounds: {
      tokmak: (d) => playMembrane(450 * d.pitchMult, 0.15, 0.8, true),
      ubuk: (d) => playMembrane(50 * d.pitchMult, 1.3, 1.8, false),
      hoop_edge_snapping: (d) => playMembrane(380 * d.pitchMult, 0.08, 0.85, false)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  ashiko: {
    name: 'Ashiko',
    drums: [
      {
        id: 0,
        label: 'Ashiko',
        pitchMult: 1.0,
        color: 'caramel',
        sizeValue: 22
      }
    ],
    sounds: {
      bass_tone: (d) => playMembrane(60 * d.pitchMult, 0.75, 1.5, false),
      open_tone: (d) => playMembrane(210 * d.pitchMult, 0.45, 1.0, false),
      slap_tone: (d) => playMembrane(380 * d.pitchMult, 0.12, 1.0, true),
      aro_golpe: (d) => playMembrane(380 * d.pitchMult, 0.12, 1.0, true)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  dunun: {
    name: 'Dunun',
    drums: [
      {
        id: 0,
        label: 'Dununba',
        pitchMult: 0.7,
        color: 'dark',
        sizeValue: 25
      },
      {
        id: 1,
        label: 'Sangban',
        pitchMult: 1.0,
        color: 'caramel',
        sizeValue: 21
      },
      {
        id: 2,
        label: 'Kenkeni',
        pitchMult: 1.3,
        color: 'blonde',
        sizeValue: 17
      }
    ],
    sounds: {
      open_strike: (d) => playMembrane((d.id === 0 ? 65 : d.id === 1 ? 95 : 130) * d.pitchMult, 0.7, 1.25, false),
      muted_strike: (d) => playMembrane((d.id === 0 ? 80 : d.id === 1 ? 120 : 160) * d.pitchMult, 0.12, 1.0, false),
      bell_strike: (d) => playMembrane((d.id === 0 ? 65 : d.id === 1 ? 95 : 130) * d.pitchMult, 0.7, 1.25, false),
      bell_rim_shot: (d) => {
        playMembrane(800 * d.pitchMult, 0.15, 0.8, true);
        playNoise(0.05, 3000, state.currentTiltVolume * 0.4);
      }
    },
    defaultLeft: 0,
    defaultRight: 1
  },
  teponaztli: {
    name: 'Teponaztli',
    drums: [
      {
        id: 0,
        label: 'Teponaztli',
        pitchMult: 1.0,
        color: 'wood',
        sizeValue: 19.5
      }
    ],
    sounds: {
      long_tongue_strike: (d) => playMembrane(210 * d.pitchMult, 0.08, 0.8, false),
      short_tongue_strike: (d) => playMembrane(240 * d.pitchMult, 0.45, 1.0, false),
      side_body_hit: (d) => playMembrane(280 * d.pitchMult, 0.06, 0.95, false)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  snare_drum: {
    name: 'Snare Drum',
    drums: [
      {
        id: 0,
        label: 'Snare Drum',
        pitchMult: 1.0,
        color: 'silver',
        sizeValue: 19
      }
    ],
    sounds: {
      center_stick_hit: (d) => {
        playMembrane(180 * d.pitchMult, 0.28, 0.9, false);
        playNoise(0.18, 3000, state.currentTiltVolume * 0.85);
      },
      rimshot: (d) => {
        playMembrane(150 * d.pitchMult, 0.35, 1.0, false);
        playNoise(0.12, 2500, state.currentTiltVolume * 0.75);
      },
      cross_stick_rim_click: (d) => playNoise(0.08, 1200, state.currentTiltVolume * 0.4),
      buzz_press_roll: (d) => {
        playMembrane(300 * d.pitchMult, 0.1, 0.8, true);
        playNoise(0.3, 4000, state.currentTiltVolume * 1.3);
      },
      rim_shot_mute: (d) => playNoise(0.08, 1200, state.currentTiltVolume * 0.4)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  shekere: {
    name: 'Shekere',
    drums: [
      {
        id: 0,
        label: 'Shekere',
        pitchMult: 1.0,
        color: 'caramel-light',
        sizeValue: 20
      }
    ],
    sounds: {
      bottom_palm_bass_pop: (d) => playMembrane(95 * d.pitchMult, 0.45, 1.3, false),
      bead_net_shake: (d) => playMembrane(95 * d.pitchMult, 0.45, 1.3, false),
      net_twist_pull_rub: (d) => playNoise(0.3, 2200, state.currentTiltVolume * 1.25),
      neck_tap: (d) => playNoise(0.18, 1800, state.currentTiltVolume * 0.75),
      mouth_slap_pop: (d) => playNoise(0.3, 2200, state.currentTiltVolume * 1.25)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  kanjira: {
    name: 'Kanjira',
    drums: [
      {
        id: 0,
        label: 'Kanjira',
        pitchMult: 1.0,
        color: 'caramel',
        sizeValue: 16
      }
    ],
    sounds: {
      split_finger_edge_tap: (d) => playTablaSlideUp(150 * d.pitchMult, 80 * d.pitchMult, 0.4),
      inner_skin_pitch_glide: (d) => playTablaSlideUp(150 * d.pitchMult, 80 * d.pitchMult, 0.4)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  tammorra: {
    name: 'Tammorra',
    drums: [
      {
        id: 0,
        label: 'Tammorra',
        pitchMult: 1.0,
        color: 'darker',
        sizeValue: 22
      }
    ],
    sounds: {
      bass_center_pulse: (d) => {
        playMembrane(60 * d.pitchMult, 0.6, 1.4);
        playNoise(0.2, 400, state.currentTiltVolume * 0.3);
      },
      finger_roll_friction_drag: (d) => {
        playMembrane(110 * d.pitchMult, 0.4, 1.1);
        playNoise(0.12, 1200, state.currentTiltVolume * 0.4);
      },
      rim_wood_crack: (d) => {
        playMembrane(210 * d.pitchMult, 0.15, 1.2, true);
        playNoise(0.2, 2800, state.currentTiltVolume * 1.1);
      }
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  framed_rumbla: {
    name: 'Framed Rumbla',
    drums: [
      {
        id: 0,
        label: 'Framed Rumbla',
        pitchMult: 1.0,
        color: 'blonde',
        sizeValue: 19
      }
    ],
    sounds: {
      rumbla_bass: (d) => {
        playMembrane(70 * d.pitchMult, 0.5, 1.4);
        playNoise(0.15, 800, state.currentTiltVolume * 0.25);
      },
      rumbla_open: (d) => {
        playMembrane(120 * d.pitchMult, 0.4, 1.1);
        playNoise(0.12, 1000, state.currentTiltVolume * 0.3);
      },
      rumbla_slap: (d) => {
        playMembrane(220 * d.pitchMult, 0.15, 1.1, true);
        playNoise(0.18, 2200, state.currentTiltVolume * 0.7);
      },
      rumbla_mute: (d) => playNoise(0.1, 1500, state.currentTiltVolume * 0.5),
      rumbla_tap: (d) => playNoise(0.4, 1200, state.currentTiltVolume * 0.5)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  gran_cassa: {
    name: 'Gran Cassa',
    drums: [
      {
        id: 0,
        label: 'Gran Cassa',
        pitchMult: 1.0,
        color: 'dark',
        sizeValue: 28
      }
    ],
    sounds: {
      glancing_arc_blow: (d) => {
        playMembrane(35 * d.pitchMult, 1.4, 1.8, false);
        playMembrane(70 * d.pitchMult, 0.8, 1.5, false);
      },
      secco_hit: (d) => playMembrane(45 * d.pitchMult, 0.25, 1.3, false),
      hand_damping: (d) => {
        playMembrane(40 * d.pitchMult, 1.1, 1.6, false);
        playMembrane(80 * d.pitchMult, 0.6, 1.4, false);
      },
      shell_knock: (d) => {
        playMembrane(40 * d.pitchMult, 1.1, 1.6, false);
        playMembrane(80 * d.pitchMult, 0.6, 1.4, false);
      }
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  lions_roar: {
    name: "Lion's Roar",
    drums: [
      {
        id: 0,
        label: "Lion's Roar",
        pitchMult: 1.0,
        color: 'caramel-light',
        sizeValue: 21
      }
    ],
    sounds: {
      rope_friction_pull_push: (d) => playNoise(0.3, 200, state.currentTiltVolume * 0.5),
      cylinder_tap: (d) => {
        playTablaSlideUp(160 * d.pitchMult, 70 * d.pitchMult, 0.8);
        playNoise(0.8, 300, state.currentTiltVolume * 0.8);
      }
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  chocalho: {
    name: 'Chocalho',
    drums: [
      {
        id: 0,
        label: 'Chocalho',
        pitchMult: 1.0,
        color: 'silver',
        sizeValue: 18
      }
    ],
    sounds: {
      linear_shake: (d) => playNoise(0.18, 1800, state.currentTiltVolume * 1.2),
      accented_whip: (d) => playNoise(0.1, 2400, state.currentTiltVolume * 0.8)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  alfaia: {
    name: 'Alfaia',
    drums: [
      {
        id: 0,
        label: 'Alfaia',
        pitchMult: 1.0,
        color: 'wood',
        sizeValue: 24
      }
    ],
    sounds: {
      golpe: (d) => playNoise(0.08, 1800, state.currentTiltVolume * 0.5),
      aro: (d) => {
        playMembrane(190 * d.pitchMult, 0.18, 1.2, true);
        playNoise(0.1, 1200, state.currentTiltVolume * 0.7);
      },
      stick_on_stick_hoop_rimshot: (d) => {
        playMembrane(190 * d.pitchMult, 0.18, 1.2, true);
        playNoise(0.1, 1200, state.currentTiltVolume * 0.7);
      }
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  log_drum: {
    name: 'Log Drum',
    drums: [
      {
        id: 0,
        label: 'Low Log',
        pitchMult: 1.0,
        color: 'wood',
        sizeValue: 19
      },
      {
        id: 1,
        label: 'High Log',
        pitchMult: 1.25,
        color: 'wood-light',
        sizeValue: 16
      }
    ],
    sounds: {
      slat_center_tongue_pop: (d) => {
        playMembrane((d.id === 0 ? 330 : 440) * d.pitchMult, 0.1, 1.0, true);
        playNoise(0.04, 2000, state.currentTiltVolume * 0.4);
      },
      slat_edge_dead_stroke: (d) => playMembrane((d.id === 0 ? 120 : 160) * d.pitchMult, 0.08, 1.0, false),
      bridge_strike: (d) => playMembrane((d.id === 0 ? 250 : 300) * d.pitchMult, 0.05, 1.0, false)
    },
    defaultLeft: 0,
    defaultRight: 1
  },
  temple_blocks: {
    name: 'Temple Blocks',
    drums: [
      {
        id: 0,
        label: 'Low Block',
        pitchMult: 0.8,
        color: 'cherry',
        sizeValue: 16
      },
      {
        id: 1,
        label: 'Mid Block',
        pitchMult: 1.0,
        color: 'cherry-red',
        sizeValue: 14
      },
      {
        id: 2,
        label: 'High Block',
        pitchMult: 1.25,
        color: 'cherry-light',
        sizeValue: 12
      }
    ],
    sounds: {
      center_mallet_hit: (d) => {
        playMembrane((d.id === 0 ? 360 : d.id === 1 ? 480 : 640) * d.pitchMult, 0.08, 1.0, true);
        playNoise(0.02, 3500, state.currentTiltVolume * 0.6);
      },
      lip_scrape: (d) => playMembrane((d.id === 0 ? 180 : d.id === 1 ? 240 : 320) * d.pitchMult, 0.22, 1.0, false)
    },
    defaultLeft: 0,
    defaultRight: 2
  },
  frog_rasp: {
    name: 'Frog Rasp',
    drums: [
      {
        id: 0,
        label: 'Frog Rasp',
        pitchMult: 1.0,
        color: 'wood',
        sizeValue: 15
      }
    ],
    sounds: {
      spine_scrape: (d) => playNoise(0.15, 800, state.currentTiltVolume * 0.8),
      mouth_poke: (d) => playNoise(0.03, 500, state.currentTiltVolume * 0.4),
      stick_tip_tap: (d) => playNoise(0.03, 500, state.currentTiltVolume * 0.4)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  spring_drum: {
    name: 'Spring Drum',
    drums: [
      {
        id: 0,
        label: 'Spring Drum',
        pitchMult: 1.0,
        color: 'dark',
        sizeValue: 18
      }
    ],
    sounds: {
      spring_flick: (d) => {
        playTablaSlideUp(100 * d.pitchMult, 300 * d.pitchMult, 1.0);
        playNoise(1.0, 1500, state.currentTiltVolume * 0.6);
      },
      cylinder_acoustic_wobble: (d) => playNoise(1.5, 1200, state.currentTiltVolume * 0.7),
      rim_strike: (d) => {
        playTablaSlideUp(100 * d.pitchMult, 300 * d.pitchMult, 1.0);
        playNoise(1.0, 1500, state.currentTiltVolume * 0.6);
      }
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  thongophone: {
    name: 'Thongophone',
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
        pitchMult: 1.0,
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
    defaultLeft: 0,
    defaultRight: 2
  },
  gubguba: {
    name: 'Gubguba',
    drums: [
      {
        id: 0,
        label: 'Gubguba',
        pitchMult: 1.0,
        color: 'caramel',
        sizeValue: 17
      }
    ],
    sounds: {
      string_pluck: (d) => playTablaSlideUp(160 * d.pitchMult, 90 * d.pitchMult, 0.5),
      string_tension_bend: (d) => playTablaSlideUp(160 * d.pitchMult, 90 * d.pitchMult, 0.5)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  cabasa: {
    name: 'Cabasa',
    drums: [
      {
        id: 0,
        label: 'Cabasa',
        pitchMult: 1.0,
        color: 'silver',
        sizeValue: 16
      }
    ],
    sounds: {
      cylinder_twist: (d) => playNoise(0.12, 1800, state.currentTiltVolume * 1.1),
      hand_tap: (d) => playNoise(0.04, 3200, state.currentTiltVolume * 1.3),
      linear_shaft_tap: (d) => playNoise(0.25, 2000, state.currentTiltVolume * 0.7)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  rainstick: {
    name: 'Rainstick',
    drums: [
      {
        id: 0,
        label: 'Rainstick',
        pitchMult: 1.0,
        color: 'blonde',
        sizeValue: 25
      }
    ],
    sounds: {
      vertical_inversion_slide: (d) => playNoise(0.8, 1600, state.currentTiltVolume * 0.6),
      fast_tilt_crash: (d) => playNoise(0.2, 2000, state.currentTiltVolume * 0.9),
      shell_knock: (d) => playNoise(1.5, 1200, state.currentTiltVolume * 0.6)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  kokiriko: {
    name: 'Kokiriko',
    drums: [
      {
        id: 0,
        label: 'Kokiriko',
        pitchMult: 1.0,
        color: 'wood',
        sizeValue: 20
      }
    ],
    sounds: {
      cascading_wave: (d) => playNoise(0.08, 3000, state.currentTiltVolume * 1.2),
      single_clatter_click: (d) => playNoise(0.05, 1000, state.currentTiltVolume * 0.4),
      side_slat_tap: (d) => playNoise(0.08, 3000, state.currentTiltVolume * 1.2)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  guiro: {
    name: 'Güiro',
    drums: [
      {
        id: 0,
        label: 'Güiro',
        pitchMult: 1.0,
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
    defaultLeft: 0,
    defaultRight: 0
  },
  spoons_bones: {
    name: 'Spoons',
    drums: [
      {
        id: 0,
        label: 'Spoons/Bones',
        pitchMult: 1.0,
        color: 'blonde',
        sizeValue: 14
      }
    ],
    sounds: {
      finger_rake_roll: (d) => {
        playMembrane(600 * d.pitchMult, 0.04, 1.0, false);
        playNoise(0.02, 3500, state.currentTiltVolume * 0.4);
      },
      thigh_to_hand_bounce: (d) => playMembrane(350 * d.pitchMult, 0.03, 1.0, false),
      hand_flat_slap: (d) => {
        playMembrane(800 * d.pitchMult, 0.03, 1.0, true);
        playNoise(0.04, 4500, state.currentTiltVolume * 1.2);
      }
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  washboard: {
    name: 'Washboard',
    drums: [
      {
        id: 0,
        label: 'Washboard',
        pitchMult: 1.0,
        color: 'silver',
        sizeValue: 21
      }
    ],
    sounds: {
      thimble_ridge_scrape: (d) => {
        playMembrane(550 * d.pitchMult, 0.06, 1.0, true);
        playNoise(0.04, 4000, state.currentTiltVolume * 1.1);
      },
      mounted_accessory_tap: (d) => playNoise(0.2, 3000, state.currentTiltVolume * 0.8),
      spoon_click_clatter: (d) => playNoise(0.2, 3000, state.currentTiltVolume * 0.8)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  friction_drum: {
    name: 'Friction Drum',
    drums: [
      {
        id: 0,
        label: 'Friction Drum',
        pitchMult: 1.0,
        color: 'darker',
        sizeValue: 17
      }
    ],
    sounds: {
      rub_low: (d) => {
        playTablaSlideUp(70 * d.pitchMult, 120 * d.pitchMult, 0.5);
        playNoise(0.5, 200, state.currentTiltVolume * 0.8);
      },
      rub_high: (d) => {
        playTablaSlideUp(140 * d.pitchMult, 80 * d.pitchMult, 0.5);
        playNoise(0.5, 300, state.currentTiltVolume * 0.8);
      }
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  kundu: {
    name: 'Kundu',
    drums: [
      {
        id: 0,
        label: 'Kundu',
        pitchMult: 1.0,
        color: 'wood',
        sizeValue: 23
      }
    ],
    sounds: {
      center_skin_tap: (d) => playMembrane(180 * d.pitchMult, 0.4, 1.1, false),
      rim_edge_pop: (d) => {
        playMembrane(320 * d.pitchMult, 0.12, 1.2, true);
        playNoise(0.05, 2000, state.currentTiltVolume * 0.6);
      },
      shell_scrape: (d) => playMembrane(130 * d.pitchMult, 0.08, 1.0, false)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  tar_drum: {
    name: 'Tar',
    drums: [
      {
        id: 0,
        label: 'Tar',
        pitchMult: 1.0,
        color: 'blonde',
        sizeValue: 24
      }
    ],
    sounds: {
      dum: (d) => playMembrane(65 * d.pitchMult, 0.7, 1.4, false),
      tak: (d) => {
        playMembrane(240 * d.pitchMult, 0.15, 1.2, true);
        playNoise(0.06, 2200, state.currentTiltVolume * 0.8);
      },
      fingertip_roll_friction_drag: (d) => playNoise(0.05, 1800, state.currentTiltVolume * 0.5),
      back_frame_scratch: (d) => playNoise(0.05, 1800, state.currentTiltVolume * 0.5)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  gome: {
    name: 'Gome',
    drums: [
      {
        id: 0,
        label: 'Gome',
        pitchMult: 1.0,
        color: 'wood',
        sizeValue: 25
      }
    ],
    sounds: {
      palm_bass: (d) => playTablaSlideUp(60 * d.pitchMult, 120 * d.pitchMult, 0.6),
      corner_slap: (d) => playMembrane(130 * d.pitchMult, 0.45, 1.1, false),
      foot_pitch_bend: (d) => {
        playMembrane(220 * d.pitchMult, 0.15, 1.2, true);
        playNoise(0.08, 1500, state.currentTiltVolume * 0.7);
      },
      heel_stamp: (d) => playMembrane(130 * d.pitchMult, 0.45, 1.1, false)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  boomwhackers: {
    name: 'Boomwhackers',
    drums: [
      {
        id: 0,
        label: 'Low Tube',
        pitchMult: 1.0,
        color: 'red',
        sizeValue: 20
      },
      {
        id: 1,
        label: 'Mid Tube',
        pitchMult: 1.25,
        color: 'green',
        sizeValue: 17
      },
      {
        id: 2,
        label: 'High Tube',
        pitchMult: 1.5,
        color: 'yellow',
        sizeValue: 14
      }
    ],
    sounds: {
      surface_strike: (d) => playMembrane((d.id === 0 ? 170 : d.id === 1 ? 210 : 280) * d.pitchMult, 0.1, 1.0, false),
      body_strike: (d) => {
        playMembrane((d.id === 0 ? 260 : d.id === 1 ? 330 : 440) * d.pitchMult, 0.12, 1.0, true);
        playNoise(0.04, 1500, state.currentTiltVolume * 0.4);
      },
      end_cap_pop: (d) => {
        playMembrane((d.id === 0 ? 260 : d.id === 1 ? 330 : 440) * d.pitchMult, 0.12, 1.0, true);
        playNoise(0.04, 1500, state.currentTiltVolume * 0.4);
      }
    },
    defaultLeft: 0,
    defaultRight: 2
  },
  tank_drum: {
    name: 'Tank Drum',
    drums: [
      {
        id: 0,
        label: 'Low Tongue',
        pitchMult: 1.0,
        color: 'bronze',
        sizeValue: 22
      },
      {
        id: 1,
        label: 'Mid Tongue',
        pitchMult: 1.33,
        color: 'bronze-medium',
        sizeValue: 19
      },
      {
        id: 2,
        label: 'High Tongue',
        pitchMult: 1.78,
        color: 'bronze-light',
        sizeValue: 16
      }
    ],
    sounds: {
      tongue_bounce: (d) => playMembrane((d.id === 0 ? 147 : d.id === 1 ? 196 : 294) * d.pitchMult, 1.2, 1.0, false),
      finger_slap: (d) => {
        playMembrane((d.id === 0 ? 147 : d.id === 1 ? 196 : 294) * d.pitchMult, 0.7, 1.1, false);
        playNoise(0.02, 5000, state.currentTiltVolume * 0.3);
      },
      muted_tap: (d) => playMembrane((d.id === 0 ? 147 : d.id === 1 ? 196 : 294) * d.pitchMult, 0.2, 0.8, true),
      shell_strike: (d) => playMembrane(800 * d.pitchMult, 0.1, 1.0, true)
    },
    defaultLeft: 0,
    defaultRight: 2
  },
  bell_tree: {
    name: 'Bell Tree',
    drums: [
      {
        id: 0,
        label: 'Bell Tree',
        pitchMult: 1.0,
        color: 'gold',
        sizeValue: 21
      }
    ],
    sounds: {
      glissando_sweep: (d) => {
        playNoise(0.5, 4500, state.currentTiltVolume * 0.7);
      },
      single_bell_tap: (d) => {
        playMembrane(800 * d.pitchMult, 0.8, 1.0, false);
      }
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  mark_tree: {
    name: 'Mark Tree',
    drums: [
      {
        id: 0,
        label: 'Mark Tree',
        pitchMult: 1.0,
        color: 'silver',
        sizeValue: 23
      }
    ],
    sounds: {
      linear_wand_sweep: (d) => {
        playNoise(1.2, 5000, state.currentTiltVolume * 0.8);
      },
      hand_ruffle_shimmer: (d) => {
        playNoise(0.4, 6000, state.currentTiltVolume * 1.3);
      },
      wand_chime_ring: (d) => {
        playTablaSlideUp(600 * d.pitchMult, 1200 * d.pitchMult, 0.8);
        playNoise(0.8, 4000, state.currentTiltVolume * 0.6);
      }
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  slide_whistle: {
    name: 'Slide Whistle',
    drums: [
      {
        id: 0,
        label: 'Slide Whistle',
        pitchMult: 1.0,
        color: 'blue-light',
        sizeValue: 18
      }
    ],
    sounds: {
      mouthpiece_blow: (d) => playMembrane(330 * d.pitchMult, 0.06, 1.0, false),
      piston_glide: (d) => playTablaSlideUp(220 * d.pitchMult, 550 * d.pitchMult, 0.7),
      piston_click: (d) => playMembrane(330 * d.pitchMult, 0.06, 1.0, false)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  ratchet: {
    name: 'Ratchet',
    drums: [
      {
        id: 0,
        label: 'Ratchet',
        pitchMult: 1.0,
        color: 'wood',
        sizeValue: 16
      }
    ],
    sounds: {
      crank_spin_snap: (d) => playNoise(0.2, 1400, state.currentTiltVolume * 1.1),
      slow_crank_creak: (d) => playNoise(0.2, 1400, state.currentTiltVolume * 1.1)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  angklung: {
    name: 'Angklung',
    drums: [
      {
        id: 0,
        label: 'Low Bamboo',
        pitchMult: 1.0,
        color: 'wood',
        sizeValue: 20
      },
      {
        id: 1,
        label: 'Mid Bamboo',
        pitchMult: 1.25,
        color: 'wood-medium',
        sizeValue: 17
      },
      {
        id: 2,
        label: 'High Bamboo',
        pitchMult: 1.5,
        color: 'wood-light',
        sizeValue: 14
      }
    ],
    sounds: {
      sentak: (d) => {
        playMembrane((d.id === 0 ? 440 : d.id === 1 ? 554 : 660) * d.pitchMult, 0.3, 1.0, true);
        playNoise(0.2, 1800, state.currentTiltVolume * 0.8);
      },
      geter: (d) => {
        playMembrane((d.id === 0 ? 440 : d.id === 1 ? 554 : 660) * d.pitchMult, 0.3, 1.0, true);
        playNoise(0.2, 1800, state.currentTiltVolume * 0.8);
      },
      frame_knock: (d) => playMembrane((d.id === 0 ? 220 : d.id === 1 ? 277 : 330) * d.pitchMult, 0.08, 1.0, false)
    },
    defaultLeft: 0,
    defaultRight: 2
  },
  jaw_harp: {
    name: 'Jaw Harp',
    drums: [
      {
        id: 0,
        label: 'Jaw Harp',
        pitchMult: 1.0,
        color: 'silver',
        sizeValue: 14
      }
    ],
    sounds: {
      trigger_pluck: (d) => playTablaSlideUp(75 * d.pitchMult, 110 * d.pitchMult, 0.5),
      mouth_cavity_filtering: (d) => playTablaSlideUp(110 * d.pitchMult, 220 * d.pitchMult, 0.4),
      inward_breath_draw: (d) => playTablaSlideUp(75 * d.pitchMult, 110 * d.pitchMult, 0.5)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  timpani: {
    name: 'Timpani',
    drums: [
      {
        id: 0,
        label: 'Kettledrum',
        pitchMult: 1.0,
        color: 'silver',
        sizeValue: 26
      }
    ],
    sounds: {
      beating_spot_strike: (d) => playTablaSlideUp(120 * d.pitchMult, 50 * d.pitchMult, 1.2),
      pedal_glissando_bend: (d) => playTablaSlideUp(120 * d.pitchMult, 50 * d.pitchMult, 1.2),
      damping_touch: (d) => playMembrane(60 * d.pitchMult, 1.8, 1.05),
      stick_shaft_rim_shot: (d) => playTablaSlideUp(120 * d.pitchMult, 50 * d.pitchMult, 1.2)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  kotsuzumi: {
    name: 'Kotsuzumi',
    drums: [
      {
        id: 0,
        label: 'Kotsuzumi',
        pitchMult: 1.0,
        color: 'wood',
        sizeValue: 16
      }
    ],
    sounds: {
      pon: (d) => {
        playMembrane(400 * d.pitchMult, 0.12, 1.1, true);
        playNoise(0.04, 2500, state.currentTiltVolume * 0.4);
      },
      chi: (d) => {
        playMembrane(400 * d.pitchMult, 0.12, 1.1, true);
        playNoise(0.04, 2500, state.currentTiltVolume * 0.4);
      },
      pu: (d) => {
        playMembrane(400 * d.pitchMult, 0.12, 1.1, true);
        playNoise(0.04, 2500, state.currentTiltVolume * 0.4);
      },
      hoop_strike: (d) => playMembrane(220 * d.pitchMult, 0.6, 1.15)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  dhol: {
    name: 'Dhol',
    drums: [
      {
        id: 0,
        label: 'Dagga (Bass)',
        pitchMult: 0.8,
        color: 'dark',
        sizeValue: 22
      },
      {
        id: 1,
        label: 'Tilli (Treble)',
        pitchMult: 1.25,
        color: 'blonde',
        sizeValue: 19
      }
    ],
    sounds: {
      dagga: (d) => {
        playMembrane(450 * d.pitchMult, 0.1, 1.1, true);
        playNoise(0.08, 3000, state.currentTiltVolume * 0.8);
      },
      tilli: (d) => playMembrane(240 * d.pitchMult, 0.08, 1.0, true),
      stick_slide_glissando: (d) => playMembrane(240 * d.pitchMult, 0.08, 1.0, true)
    },
    defaultLeft: 0,
    defaultRight: 1
  },
  agogo: {
    name: 'Agogô',
    drums: [
      {
        id: 0,
        label: 'Agogô Bells',
        pitchMult: 1.0,
        color: 'silver',
        sizeValue: 22
      }
    ],
    sounds: {
      high_strike: (d) => playMembrane(480 * d.pitchMult, 0.4, 1.0, false),
      low_strike: (d) => playMembrane(380 * d.pitchMult, 0.55, 1.0, false),
      clap: (d) => playMembrane(650 * d.pitchMult, 0.08, 1.05, true),
      stick_drag: (d) => {
        playMembrane(600 * d.pitchMult, 0.03, 1.0, true);
        playNoise(0.04, 2500, state.currentTiltVolume * 0.7);
        setTimeout(() => {
          playMembrane(650 * d.pitchMult, 0.03, 1.0, true);
          playNoise(0.03, 2800, state.currentTiltVolume * 0.6);
        }, 50);
        setTimeout(() => {
          playMembrane(700 * d.pitchMult, 0.04, 1.0, true);
          playNoise(0.03, 3000, state.currentTiltVolume * 0.5);
        }, 100);
      }
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  claves: {
    name: 'Claves',
    drums: [
      {
        id: 0,
        label: 'Claves',
        pitchMult: 1.0,
        color: 'terracotta',
        sizeValue: 15
      }
    ],
    sounds: {
      strike: (d) => playMembrane(1300 * d.pitchMult, 0.04, 1.0),
      end_tap: (d) => {
        playMembrane(1650 * d.pitchMult, 0.02, 1.0, true);
        playNoise(0.01, 5000, state.currentTiltVolume * 0.4);
      },
      wooden_rub: (d) => playNoise(0.12, 1200, state.currentTiltVolume * 0.5),
      cup_strike: (d) => playMembrane(950 * d.pitchMult, 0.06, 1.2, false)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  mechanical_keyboard: {
    name: '⌨️ Mechanical Keyboard',
    drums: [
      {
        id: 0,
        label: 'Cyber Keyboard',
        pitchMult: 1.0,
        color: 'darker',
        sizeValue: 20
      }
    ],
    sounds: {
      key_click: (d) => {
        playAttackClick(0.02, 3000, 0.8 * state.currentTiltVolume);
        playMembrane(350 * d.pitchMult, 0.03, 1.05);
      },
      spacebar: (d) => {
        playMembrane(100 * d.pitchMult, 0.08, 1.02);
        playNoise(0.06, 600, 0.4 * state.currentTiltVolume);
      },
      enter_key: (d) => {
        playMembrane(180 * d.pitchMult, 0.12, 1.05);
        playAttackClick(0.04, 2000, 1.0 * state.currentTiltVolume);
        playNoise(0.08, 1000, 0.3 * state.currentTiltVolume);
      },
      shift_hold: (d) => {
        playMembrane(120 * d.pitchMult, 0.05, 1.0);
        playNoise(0.02, 1500, 0.15 * state.currentTiltVolume);
      },
      backspace: (d) => {
        playAttackClick(0.015, 3200, 0.6 * state.currentTiltVolume);
        setTimeout(() => {
          playAttackClick(0.015, 3000, 0.5 * state.currentTiltVolume);
        }, 70);
      }
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  synsonics_drums: {
    name: '🎛️ Synsonics Drums',
    drums: [
      {
        id: 0,
        label: 'Synsonics Pad',
        pitchMult: 1.0,
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
    defaultLeft: 0,
    defaultRight: 0
  },
  hydraulic_piston: {
    name: '⚙️ Hydraulic Piston',
    drums: [
      {
        id: 0,
        label: 'Piston Chamber',
        pitchMult: 1.0,
        color: 'silver',
        sizeValue: 22
      }
    ],
    sounds: {
      steam_hiss: (d) => playNoise(0.6, 5000, 0.8 * state.currentTiltVolume),
      iron_stomp: (d) => {
        playMembrane(40 * d.pitchMult, 0.45, 1.5);
        playAttackClick(0.08, 1200, 0.7 * state.currentTiltVolume);
      },
      gear_lock: (d) => {
        playAttackClick(0.015, 3000, 0.8 * state.currentTiltVolume);
        playMembrane(400 * d.pitchMult, 0.02, 1.0);
      },
      exhaust_clunk: (d) => playMembrane(80 * d.pitchMult, 0.18, 1.1)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  bop_it: {
    name: '🔴 Bop It!',
    drums: [
      {
        id: 0,
        label: 'Bop It Toy',
        pitchMult: 1.0,
        color: 'purple',
        sizeValue: 18
      }
    ],
    sounds: {
      bop_it: (d) => {
        playMembrane(190 * d.pitchMult, 0.06, 1.05);
        playAttackClick(0.01, 2200, 0.5 * state.currentTiltVolume);
        speakPhrase('Bop it!', 1.2, 1.3, 1.0);
      },
      twist_it: (d) => {
        playAttackClick(0.01, 3500, 0.7 * state.currentTiltVolume);
        setTimeout(() => {
          playAttackClick(0.01, 3200, 0.6 * state.currentTiltVolume);
        }, 50);
        setTimeout(() => {
          playAttackClick(0.01, 2900, 0.5 * state.currentTiltVolume);
        }, 100);
        speakPhrase('Twist it!', 1.1, 1.3, 1.0);
      },
      pull_it: (d) => {
        playTablaSlideUp(180 * d.pitchMult, 380 * d.pitchMult, 0.15);
        speakPhrase('Pull it!', 1.0, 1.3, 1.0);
      },
      shout_it: (d) => {
        playTablaSlideUp(1200 * d.pitchMult, 1500 * d.pitchMult, 0.1);
        playNoise(0.08, 3000, 0.3 * state.currentTiltVolume);
        speakPhrase('Shout it!', 1.3, 1.3, 1.0);
      },
      fail_buzz: (d) => {
        playTablaSlideUp(180 * d.pitchMult, 90 * d.pitchMult, 0.6);
        playNoise(0.4, 250, 0.4 * state.currentTiltVolume);
        speakPhrase('Wah wah wah!', 0.8, 1.0, 1.0);
      },
      victory_chime: (d) => {
        playMembrane(261.63 * d.pitchMult, 0.12, 1.0);
        setTimeout(() => playMembrane(329.63 * d.pitchMult, 0.12, 1.0), 60);
        setTimeout(() => playMembrane(392.0 * d.pitchMult, 0.12, 1.0), 120);
        setTimeout(() => playMembrane(523.25 * d.pitchMult, 0.2, 1.0), 180);
        speakPhrase('You win!', 1.25, 1.1, 1.0);
      }
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  moo_box: {
    name: '🐮 Moo Box',
    drums: [
      {
        id: 0,
        label: 'Tin Oid',
        pitchMult: 1.0,
        color: 'silver',
        sizeValue: 15
      }
    ],
    sounds: {
      grand_moo: (d) => {
        playTablaSlideUp(130 * d.pitchMult, 95 * d.pitchMult, 1.0);
        playNoise(0.8, 400, 0.2 * state.currentTiltVolume);
        speakPhrase('Mooooooo!', 0.5, 0.55, 1.0);
      },
      calf_moo: (d) => {
        playTablaSlideUp(300 * d.pitchMult, 220 * d.pitchMult, 0.5);
        playNoise(0.4, 600, 0.15 * state.currentTiltVolume);
        speakPhrase('Moo!', 1.25, 0.95, 0.9);
      },
      stuck_reed: (d) => {
        playMembrane(120 * d.pitchMult, 0.2, 1.1, true);
        playNoise(0.2, 280, 0.6 * state.currentTiltVolume);
        speakPhrase('M-moo-zz!', 0.7, 1.2, 0.9);
      },
      tin_shake: (d) => {
        playNoise(0.1, 4500, 0.5 * state.currentTiltVolume);
        playAttackClick(0.04, 3800, 0.7 * state.currentTiltVolume);
      }
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  pakhavaj: {
    name: '🥁 Pakhavaj',
    drums: [
      {
        id: 0,
        label: 'Left Bass Head (Bayan)',
        pitchMult: 1.0,
        color: 'terracotta',
        sizeValue: 22
      },
      {
        id: 1,
        label: 'Right Treble Head (Dayan)',
        pitchMult: 1.0,
        color: 'caramel',
        sizeValue: 16
      }
    ],
    sounds: {
      tha: (d) => playMembrane(65 * d.pitchMult, 0.7, 1.02),
      dhin: (d) => playMembrane(80 * d.pitchMult, 1.1, 1.0),
      ta: (d) => {
        playMembrane(380 * d.pitchMult, 0.12, 1.04, true);
        playNoise(0.04, 2500, 0.3 * state.currentTiltVolume);
      },
      ki: (d) => playMembrane(190 * d.pitchMult, 0.04, 1.0, true),
      na: (d) => playMembrane(280 * d.pitchMult, 0.5, 1.0),
      tete: (d) => {
        playMembrane(310 * d.pitchMult, 0.03, 1.0);
        setTimeout(() => playMembrane(290 * d.pitchMult, 0.03, 1.0), 60);
      },
      ghe: (d) => playTablaSlideUp(65 * d.pitchMult, 105 * d.pitchMult, 0.65)
    },
    defaultLeft: 0,
    defaultRight: 1
  },
  binzasara: {
    name: '🎋 Binzasara',
    drums: [
      {
        id: 0,
        label: 'Wooden Slats',
        pitchMult: 1.0,
        color: 'wood',
        sizeValue: 18
      }
    ],
    sounds: {
      furu: (d) => {
        for (let i = 0; i < 5; i++) {
          setTimeout(() => {
            playAttackClick(0.02, 1800 - i * 150, 0.5 * state.currentTiltVolume);
            playMembrane((350 - i * 20) * d.pitchMult, 0.02, 1.0);
          }, i * 40);
        }
      },
      clap: (d) => {
        playMembrane(450 * d.pitchMult, 0.07, 1.15, true);
        playNoise(0.06, 1500, 0.7 * state.currentTiltVolume);
      },
      rattle: (d) => {
        for (let i = 0; i < 8; i++) {
          setTimeout(() => {
            playAttackClick(0.015, 2500 + (i % 2) * 500, 0.4 * state.currentTiltVolume);
          }, i * 25);
        }
      },
      snap: (d) => {
        playMembrane(550 * d.pitchMult, 0.03, 1.05, true);
        playAttackClick(0.01, 3000, 0.8 * state.currentTiltVolume);
      }
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  caxixi: {
    name: '🌾 Caxixi',
    drums: [
      {
        id: 0,
        label: 'Straw Basket',
        pitchMult: 1.0,
        color: 'caramel-light',
        sizeValue: 16
      }
    ],
    sounds: {
      straw_wall: (d) => {
        playNoise(0.09, 4500, 0.45 * state.currentTiltVolume);
      },
      gourd_bottom: (d) => {
        playAttackClick(0.025, 3600, 0.9 * state.currentTiltVolume);
        playMembrane(850 * d.pitchMult, 0.03, 1.0);
      },
      flick_accent: (d) => {
        playNoise(0.04, 5000, 0.6 * state.currentTiltVolume);
        setTimeout(() => {
          playNoise(0.04, 4800, 0.5 * state.currentTiltVolume);
        }, 40);
      },
      muted_swoosh: (d) => {
        playNoise(0.16, 1800, 0.3 * state.currentTiltVolume);
      }
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  slap_tubes: {
    name: '🌬️ Slap Tubes',
    drums: [
      {
        id: 0,
        label: 'PVC Slap Tube',
        pitchMult: 1.0,
        color: 'teal',
        sizeValue: 22
      }
    ],
    sounds: {
      bass_boom: (d) => playMembrane(98 * d.pitchMult, 0.35, 1.2),
      low_pop: (d) => playMembrane(130 * d.pitchMult, 0.25, 1.1),
      mid_bounce: (d) => playMembrane(165 * d.pitchMult, 0.2, 1.0),
      high_snap: (d) => playMembrane(196 * d.pitchMult, 0.15, 1.0, true),
      paddle_slap: (d) => {
        playMembrane(220 * d.pitchMult, 0.08, 1.0, true);
        playNoise(0.05, 1500, 0.4 * state.currentTiltVolume);
      },
      pipe_rim_click: (d) => {
        playAttackClick(0.02, 2800, 0.7 * state.currentTiltVolume);
        playMembrane(600 * d.pitchMult, 0.02, 1.0);
      },
      muted_thud: (d) => playMembrane(85 * d.pitchMult, 0.08, 1.0),
      slide_slur: (d) => playTablaSlideUp(165 * d.pitchMult, 110 * d.pitchMult, 0.3)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  whistle_drum: {
    name: '🦆 Whistle-Drum',
    drums: [
      {
        id: 0,
        label: 'Clay Whistle Pot',
        pitchMult: 1.0,
        color: 'terracotta',
        sizeValue: 20
      }
    ],
    sounds: {
      clay_bass: (d) => playMembrane(82 * d.pitchMult, 0.4, 1.1),
      sharp_chirp: (d) => {
        playMembrane(900 * d.pitchMult, 0.12, 0.8, true);
        playNoise(0.05, 3000, 0.2 * state.currentTiltVolume);
      },
      bending_gliss: (d) => playTablaSlideUp(600 * d.pitchMult, 900 * d.pitchMult, 0.25),
      rim_tap: (d) => {
        playMembrane(400 * d.pitchMult, 0.06, 1.0);
        playAttackClick(0.015, 2000, 0.4 * state.currentTiltVolume);
      },
      slosh_splash: (d) => {
        playNoise(0.35, 1200, 0.6 * state.currentTiltVolume);
        playMembrane(120 * d.pitchMult, 0.2, 1.0);
      },
      muted_pip: (d) => playMembrane(300 * d.pitchMult, 0.04, 1.0),
      double_chirp: (d) => {
        playMembrane(800 * d.pitchMult, 0.06, 1.0, true);
        setTimeout(() => {
          playMembrane(900 * d.pitchMult, 0.08, 1.0, true);
        }, 60);
      },
      breath_echo: (d) => {
        playNoise(0.6, 800, 0.35 * state.currentTiltVolume);
        playMembrane(90 * d.pitchMult, 0.5, 1.0);
      }
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  singing_bowl: {
    name: '🥣 Singing Bowl',
    drums: [
      {
        id: 0,
        label: 'Sacred Bowl',
        pitchMult: 1.0,
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
    defaultLeft: 0,
    defaultRight: 0
  },
  quijada: {
    name: '💀 Quijada',
    drums: [
      {
        id: 0,
        label: 'Jawbone',
        pitchMult: 1.0,
        color: 'blonde-light',
        sizeValue: 18
      }
    ],
    sounds: {
      fist_slam_rattles: (d) => {
        playNoise(0.65, 1600, 0.9 * state.currentTiltVolume, 'bandpass', 3.5);
        playMembrane(120 * d.pitchMult, 0.15, 1.0);
      },
      teeth_rasp_scrape: (d) => playNoise(0.45, 2200, 0.7 * state.currentTiltVolume, 'bandpass', 4.5),
      chin_bone_tap: (d) => {
        playAttackClick(0.02, 1200, 0.6 * state.currentTiltVolume);
        playMembrane(350 * d.pitchMult, 0.05, 1.0);
      },
      micro_flick: (d) => {
        playNoise(0.12, 1800, 0.4 * state.currentTiltVolume, 'bandpass', 3.0);
        playMembrane(250 * d.pitchMult, 0.03, 1.0);
      },
      reverse_scrape: (d) => playNoise(0.22, 2400, 0.6 * state.currentTiltVolume, 'bandpass', 3.5),
      choked_jaw_pinch: (d) => {
        playNoise(0.08, 1500, 0.7 * state.currentTiltVolume, 'bandpass', 5.0);
        playMembrane(125 * d.pitchMult, 0.06, 1.0);
      },
      double_tap: (d) => {
        playNoise(0.15, 1600, 0.8 * state.currentTiltVolume, 'bandpass', 3.5);
        playMembrane(120 * d.pitchMult, 0.08, 1.0);
        setTimeout(() => {
          playNoise(0.15, 1600, 0.6 * state.currentTiltVolume, 'bandpass', 3.5);
          playMembrane(120 * d.pitchMult, 0.08, 1.0);
        }, 70);
      },
      hollow_socket_pop: (d) => {
        playMembrane(180 * d.pitchMult, 0.12, 1.0);
        playAttackClick(0.03, 900, 0.5 * state.currentTiltVolume);
      }
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  water_canister: {
    name: '💧 Water Canister',
    drums: [
      {
        id: 0,
        label: 'Hydro Canister',
        pitchMult: 1.0,
        color: 'aquamarine',
        sizeValue: 22
      }
    ],
    sounds: {
      slap_gliss: (d) => playTablaSlideUp(110 * d.pitchMult, 180 * d.pitchMult, 0.28),
      neck_pop: (d) => {
        playMembrane(240 * d.pitchMult, 0.08, 1.2, true);
        playNoise(0.04, 1800, 0.3 * state.currentTiltVolume, 'bandpass', 2.0);
      },
      outer_plastic_thud: (d) => playMembrane(90 * d.pitchMult, 0.18, 1.0),
      liquid_slap: (d) => {
        playMembrane(100 * d.pitchMult, 0.2, 1.0);
        playNoise(0.28, 1100, 0.5 * state.currentTiltVolume, 'bandpass', 2.5);
      },
      bubble_gurgle: (d) => {
        playNoise(0.08, 1400, 0.4 * state.currentTiltVolume, 'bandpass', 3.0);
        setTimeout(() => {
          playNoise(0.08, 1600, 0.3 * state.currentTiltVolume, 'bandpass', 3.0);
        }, 60);
        setTimeout(() => {
          playNoise(0.08, 1800, 0.2 * state.currentTiltVolume, 'bandpass', 3.0);
        }, 120);
      },
      damped_plonk: (d) => playMembrane(75 * d.pitchMult, 0.08, 1.0),
      finger_tap_rim: (d) => playAttackClick(0.015, 3200, 0.5 * state.currentTiltVolume),
      heavy_splash_drop: (d) => {
        playMembrane(60 * d.pitchMult, 0.4, 1.0);
        playNoise(0.4, 800, 0.7 * state.currentTiltVolume, 'bandpass', 1.5);
      }
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  vintage_cash_register: {
    name: '💵 Cash Register',
    drums: [
      {
        id: 0,
        label: 'Brass Register',
        pitchMult: 1.0,
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
    defaultLeft: 0,
    defaultRight: 0
  },
  geiger_counter: {
    name: '☢️ Geiger Counter',
    drums: [
      {
        id: 0,
        label: 'Geiger Grid',
        pitchMult: 1.0,
        color: 'dark',
        sizeValue: 18
      }
    ],
    sounds: {
      isolated_click: (d) => playAttackClick(0.005, 4500, 0.85 * state.currentTiltVolume),
      double_static_burst: (d) => {
        playAttackClick(0.005, 4500, 0.85 * state.currentTiltVolume);
        setTimeout(() => {
          playAttackClick(0.005, 4200, 0.7 * state.currentTiltVolume);
        }, 25);
      },
      rad_swarm: (d) => {
        playNoise(0.35, 4000, 0.8 * state.currentTiltVolume);
        for (let i = 0; i < 4; i++) {
          setTimeout(
            () => {
              playAttackClick(0.005, 4500 - i * 300, 0.6);
            },
            i * 40 + Math.random() * 20
          );
        }
      },
      warning_beep: (d) => playMembrane(2000 * d.pitchMult, 0.08, 1.0, true),
      chassis_dial_click: (d) => {
        playAttackClick(0.02, 1800, 0.75 * state.currentTiltVolume);
        playMembrane(180 * d.pitchMult, 0.03, 1.0);
      },
      static_discharge_thump: (d) => playMembrane(45 * d.pitchMult, 0.15, 1.3),
      meltdown_buzz: (d) => {
        playMembrane(380 * d.pitchMult, 0.4, 1.0);
        playNoise(0.4, 2800, 0.6 * state.currentTiltVolume);
      },
      battery_test_chirp: (d) => playTablaSlideUp(1500 * d.pitchMult, 1800 * d.pitchMult, 0.12)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  centrifugal_bullroarer: {
    name: '🌀 Bullroarer',
    drums: [
      {
        id: 0,
        label: 'Aero Ribbon',
        pitchMult: 1.0,
        color: 'wood',
        sizeValue: 22
      }
    ],
    sounds: {
      low_wind_whine: (d) => {
        playMembrane(65 * d.pitchMult, 0.6, 1.0);
        playNoise(0.6, 600, 0.45 * state.currentTiltVolume);
      },
      high_speed_scream: (d) => {
        playMembrane(480 * d.pitchMult, 0.5, 0.9, true);
        playNoise(0.4, 1800, 0.3 * state.currentTiltVolume);
      },
      string_snap: (d) => {
        playAttackClick(0.04, 1100, 0.8 * state.currentTiltVolume);
        playMembrane(140 * d.pitchMult, 0.08, 1.1);
      },
      ground_slap: (d) => {
        playMembrane(180 * d.pitchMult, 0.12, 1.0);
        playNoise(0.12, 2200, 0.6 * state.currentTiltVolume);
      },
      air_rip_flutter: (d) => {
        playMembrane(90 * d.pitchMult, 0.3, 1.0);
        playNoise(0.35, 800, 0.5 * state.currentTiltVolume);
      },
      wood_spine_tap: (d) => {
        playMembrane(350 * d.pitchMult, 0.05, 1.0);
        playAttackClick(0.015, 1800, 0.5 * state.currentTiltVolume);
      },
      cord_friction_rub: (d) => playNoise(0.25, 500, 0.45 * state.currentTiltVolume),
      descending_whimper: (d) => playTablaSlideUp(300 * d.pitchMult, 90 * d.pitchMult, 0.55)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  newtons_cradle: {
    name: '🖲️ Newton Cradle',
    drums: [
      {
        id: 0,
        label: 'Newton Cradle',
        pitchMult: 1.0,
        color: 'silver',
        sizeValue: 19
      }
    ],
    sounds: {
      single_ball_clack: (d) => {
        playAttackClick(0.01, 3500, 0.9 * state.currentTiltVolume);
        playMembrane(1100 * d.pitchMult, 0.02, 1.0);
      },
      continuous_ripple: (d) => {
        playAttackClick(0.008, 3500, 0.85);
        setTimeout(() => {
          playAttackClick(0.008, 3300, 0.7);
        }, 30);
        setTimeout(() => {
          playAttackClick(0.008, 3100, 0.55);
        }, 60);
        setTimeout(() => {
          playAttackClick(0.008, 2900, 0.4);
        }, 90);
      },
      double_side_strike: (d) => {
        playAttackClick(0.012, 3200, 1.0 * state.currentTiltVolume);
        playMembrane(900 * d.pitchMult, 0.03, 1.0);
      },
      damped_metal_thud: (d) => playMembrane(600 * d.pitchMult, 0.04, 1.0, true),
      string_tangle_snag: (d) => playNoise(0.12, 2800, 0.45 * state.currentTiltVolume),
      chassis_frame_tap: (d) => {
        playMembrane(800 * d.pitchMult, 0.06, 1.0);
        playAttackClick(0.02, 2500, 0.5 * state.currentTiltVolume);
      },
      decaying_skitter: (d) => {
        for (let i = 0; i < 6; i++) {
          setTimeout(
            () => {
              playAttackClick(0.005, 3500 - i * 150, 0.6 - i * 0.09);
            },
            i * 25 + Math.random() * 15
          );
        }
      },
      scrape_drag: (d) => playNoise(0.35, 3000, 0.4 * state.currentTiltVolume)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  slime_plop_box: {
    name: '🧪 Slime Plop Box',
    drums: [
      {
        id: 0,
        label: 'Slime Jar',
        pitchMult: 1.0,
        color: 'teal',
        sizeValue: 20
      }
    ],
    sounds: {
      deep_suction_plop: (d) => playTablaSlideUp(75 * d.pitchMult, 140 * d.pitchMult, 0.22),
      wet_surface_slap: (d) => {
        playMembrane(110 * d.pitchMult, 0.12, 1.0, true);
        playNoise(0.1, 900, 0.6 * state.currentTiltVolume, 'bandpass', 1.5);
      },
      air_pocket_pop: (d) => {
        playMembrane(280 * d.pitchMult, 0.05, 1.3, true);
        playNoise(0.05, 1400, 0.5 * state.currentTiltVolume, 'bandpass', 3.0);
      },
      squelch_stretch: (d) => {
        playTablaSlideUp(120 * d.pitchMult, 50 * d.pitchMult, 0.35);
        playNoise(0.3, 700, 0.4 * state.currentTiltVolume, 'bandpass', 2.0);
      },
      container_wall_squish: (d) => {
        playNoise(0.22, 1000, 0.45 * state.currentTiltVolume, 'bandpass', 1.8);
        playMembrane(80 * d.pitchMult, 0.15, 1.0);
      },
      dripping_goblet_drop: (d) => playMembrane(400 * d.pitchMult, 0.08, 1.1, true),
      rapid_squelch_roll: (d) => {
        playNoise(0.08, 900, 0.6, 'bandpass', 2.0);
        setTimeout(() => {
          playNoise(0.08, 800, 0.5, 'bandpass', 2.0);
        }, 45);
        setTimeout(() => {
          playNoise(0.08, 700, 0.4, 'bandpass', 2.0);
        }, 90);
      },
      damped_lid_snap: (d) => {
        playMembrane(140 * d.pitchMult, 0.06, 1.0, true);
        playAttackClick(0.02, 1500, 0.5 * state.currentTiltVolume);
      }
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  talk_box: {
    name: '🗣️ Talk Box Toy',
    drums: [
      {
        id: 0,
        label: 'Retro Pull-Toy',
        pitchMult: 1.0,
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
    defaultLeft: 0,
    defaultRight: 0
  },
  mouth_tube_synth: {
    name: '🖲️ Mouth Synth',
    drums: [
      {
        id: 0,
        label: 'Mouth Synth',
        pitchMult: 1.0,
        color: 'teal',
        sizeValue: 19
      }
    ],
    sounds: {
      wah_vocal: (d) => {
        playTablaSlideUp(120 * d.pitchMult, 180 * d.pitchMult, 0.22);
        playNoise(0.1, 1500, 0.25 * state.currentTiltVolume);
        speakPhrase('wah', 0.7, 1.2, 0.85);
      },
      ooh_vocal: (d) => {
        playMembrane(110 * d.pitchMult, 0.32, 1.0);
        speakPhrase('ooh', 0.6, 1.0, 0.85);
      },
      ee_vocal: (d) => {
        playMembrane(330 * d.pitchMult, 0.28, 1.0, true);
        speakPhrase('ee', 1.2, 1.2, 0.85);
      },
      plastic_hose_spit_pop: (d) => playAttackClick(0.012, 3800, 0.75 * state.currentTiltVolume),
      synth_carrier_buzz: (d) => {
        playMembrane(220 * d.pitchMult, 0.12, 1.0);
        playNoise(0.06, 2500, 0.4 * state.currentTiltVolume);
      },
      vocalized_fry: (d) => {
        playNoise(0.18, 600, 0.6 * state.currentTiltVolume);
        playMembrane(55 * d.pitchMult, 0.1, 1.1);
      },
      throat_choke_stop: (d) => playMembrane(180 * d.pitchMult, 0.03, 1.0, true),
      formant_glide: (d) => playTablaSlideUp(110 * d.pitchMult, 330 * d.pitchMult, 0.38)
    },
    defaultLeft: 0,
    defaultRight: 0
  }
};
export const instrumentTouches = {
  conga: [
    {
      id: 'bajo',
      label: 'Bajo',
      shortName: 'Bajo',
      description:
        'Striking the dead-center of the head with a flat palm and lifting instantly to generate a deep, booming bass frequency'
    },
    {
      id: 'abierto',
      label: 'Abierto',
      shortName: 'Abierto',
      description:
        'Hitting the rim with the finger joints and letting the fingers bounce off naturally to produce a clear, singing mid-tone'
    },
    {
      id: 'seco',
      label: 'Seco',
      shortName: 'Seco',
      description:
        'Cupping the hand slightly upon impact to create a sharp, high-pitched, explosive "crack" sound near the edge'
    },
    {
      id: 'tapado',
      label: 'Tapado',
      shortName: 'Tapado',
      description:
        'Pressing the palm of one hand into the skin while the other hand slaps the edge, creating a closed, muffled pop'
    },
    {
      id: 'toque_tapado',
      label: 'Toque Tapado',
      shortName: 'Toque Tapado',
      description: 'Striking the head while leaving the non-striking hand resting flat on the skin to kill all sustain'
    },
    {
      id: 'manoteo',
      label: 'Manoteo',
      shortName: 'Manoteo',
      description:
        'Alternating continuously between the heel of the palm and the tips of the fingers to keep time and create rolling textures'
    },
    {
      id: 'golpe_de_casco',
      label: 'Golpe de Casco',
      shortName: 'Golpe de Casco',
      description:
        'Striking the thick, resonant fiberglass or staved wooden side body of the drum with the wooden knuckles or a stick shaft to yield a dry, hollow, marimba-like wood-block crack'
    }
  ],
  djembe: [
    {
      id: 'bass',
      label: 'Bass',
      shortName: 'Bass',
      description:
        'Striking the dead-center of the head with a flat, firm palm and bouncing off to yield a deep, earthy boom'
    },
    {
      id: 'tone',
      label: 'Tone',
      shortName: 'Tone',
      description:
        'Striking the edge with fingers held tightly together and knuckles positioned over the rim to create a clear, melodic pitch'
    },
    {
      id: 'slap',
      label: 'Slap',
      shortName: 'Slap',
      description:
        'Hitting the edge with a relaxed, slightly spread hand, allowing the fingertips to whip naturally against the head for a piercing crack'
    },
    {
      id: 'flam_roll',
      label: 'Flam / Roll',
      shortName: 'Flam / Roll',
      description: 'Executing ultra-fast, alternating edge taps to create seamless, driving rhythmic fills and rolls'
    },
    {
      id: 'rim_click',
      label: 'Rim Click',
      shortName: 'Rim Click',
      description:
        'Striking the heavy, rounded metal tuning rims or exposed tensioning rings with the meat of a heavy ring or a drumstick for a bright metallic ding'
    }
  ],
  bongo: [
    {
      id: 'martillo',
      label: 'Martillo',
      shortName: 'Martillo',
      description:
        'The fundamental "hammer" pattern alternating between the edge of the index finger and steady thumb pressure to keep time'
    },
    {
      id: 'open_tone',
      label: 'Open tone',
      shortName: 'Open tone',
      description:
        'Striking the edge of either the small macho or large hembra drum with the fingers, letting the sound ring clear'
    },
    {
      id: 'slap',
      label: 'Slap',
      shortName: 'Slap',
      description:
        'A sharp, pinched, high-pitched accent popped near the edge, utilized mostly on the smaller macho drum'
    },
    {
      id: 'mute_tap',
      label: 'Mute tap',
      shortName: 'Mute tap',
      description:
        'Resting the non-dominant thumb on the head to deaden the skin while the other hand lightly taps ghost notes'
    },
    {
      id: 'glissando_de_dedo',
      label: 'Glissando de Dedo',
      shortName: 'Glissando de...',
      description:
        'Moistening the thumb or middle finger and dragging it firmly across the high-tension head of the macho drum to produce a continuous, high-pitched rubbery drone'
    }
  ],
  bata: [
    {
      id: 'abierto',
      label: 'Abierto',
      shortName: 'Abierto',
      description:
        'An open, ringing strike on either the large head, Enú, or the small head, Chachá, letting the air cavity resonate'
    },
    {
      id: 'tapado',
      label: 'Tapado',
      shortName: 'Tapado',
      description:
        'Striking either head and leaving the hand or fingers pressed firmly flat down to instantly choke the sound'
    },
    {
      id: 'chach_snap',
      label: 'Chachá snap',
      shortName: 'Chachá snap',
      description: 'A sharp, stinging, high-tension finger slap played exclusively on the smaller head'
    },
    {
      id: 'cuerpo_knock',
      label: 'Cuerpo Knock',
      shortName: 'Cuerpo Knock',
      description:
        'Knocking on the hollow, hourglass-shaped cedar shell with the knuckles to introduce a warm, woody counter-rhythm'
    }
  ],
  pandero: [
    {
      id: 'open_edge_tone',
      label: 'Open edge tone',
      shortName: 'Open edge tone',
      description: 'Striking near the edge of the frame drum with the fingers to allow the skin to resonate naturally'
    },
    {
      id: 'choke_center_strike',
      label: 'Choke center strike',
      shortName: 'Choke center...',
      description: 'Striking the center sharply and holding the hand down flat to completely mute the head'
    },
    {
      id: 'rim_jingle_strike',
      label: 'Rim / Jingle strike',
      shortName: 'Rim / Jingle...',
      description: 'Striking the wooden frame or the embedded metal jingles directly with the hand or fingers'
    },
    {
      id: 'sub_bass_hand_cup',
      label: 'Sub-Bass Hand Cup',
      shortName: 'Sub-Bass Han...',
      description:
        "Sealing the open back cavity of the frame drum against the player's chest or thigh immediately after striking the front head to create a compressed, booming sub-bass thud"
    },
    {
      id: 'thigh_slap_pop',
      label: 'Thigh Slap Pop',
      shortName: 'Thigh Slap Pop',
      description:
        'Bouncing the wooden frame of the drum directly off the knee or thigh while striking the head to double the transient accent'
    }
  ],
  barril: [
    {
      id: 'abierto',
      label: 'Abierto',
      shortName: 'Abierto',
      description: 'A clean, unmuted strike near the edge of the skin to draw out a resonant bass or mid-range tone'
    },
    {
      id: 'seco',
      label: 'Seco',
      shortName: 'Seco',
      description: 'A sharp, high-pitched accent played with a slapping technique on the edge of the head'
    },
    {
      id: 'cu',
      label: 'Cuá',
      shortName: 'Cuá',
      description:
        'Beating a continuous syncopated counter-rhythm directly against the wooden side staves of the barrel'
    },
    {
      id: 'choking_hand',
      label: 'Choking Hand',
      shortName: 'Choking Hand',
      description:
        'Pressing the forearm firmly across the center of the head while striking the edge with the other hand to produce a tight, highly compressed mid-range pop'
    }
  ],
  bombo: [
    {
      id: 'golpe_de_parche',
      label: 'Golpe de Parche',
      shortName: 'Golpe de Parche',
      description: 'Hitting the center of the heavy rawhide head to produce a deep, rumbling low-end pulse'
    },
    {
      id: 'golpe_de_aro',
      label: 'Golpe de Aro',
      shortName: 'Golpe de Aro',
      description:
        'Striking the thick wooden tuning rim of the drum body to create a sharp, hollow, wood-block counter-rhythm'
    }
  ],
  tabla: [
    {
      id: 'dayan_na_ta',
      label: 'Dayan Na / Ta',
      shortName: 'Dayan Na / Ta',
      description:
        'A sharp, ringing treble stroke made by striking the outermost edge ring with the index finger while keeping the ring finger down'
    },
    {
      id: 'dayan_tin',
      label: 'Dayan Tin',
      shortName: 'Dayan Tin',
      description: 'A resonant, open tone produced by striking the middle ring of the right drum head without muting'
    },
    {
      id: 'dayan_tun',
      label: 'Dayan Tun',
      shortName: 'Dayan Tun',
      description: 'An open, sustained center stroke played on the main head area inside the black tuning paste ring'
    },
    {
      id: 'bayan_ga_ghe',
      label: 'Bayan Ga / Ghe',
      shortName: 'Bayan Ga / Ghe',
      description:
        'A resonant bass stroke on the left drum, pitch-bent by smoothly sliding the heel of the palm across the skin'
    },
    {
      id: 'bayan_ka_ke',
      label: 'Bayan Ka / Ke',
      shortName: 'Bayan Ka / Ke',
      description: 'A flat, muted slap on the left drum using the full hand flat against the head to kill all resonance'
    }
  ],
  darbuka: [
    {
      id: 'dum',
      label: 'Dum',
      shortName: 'Dum',
      description:
        'A deep, open bass stroke in the center of the head with the fingers held together, letting the sound ring out completely'
    },
    {
      id: 'tek',
      label: 'Tek',
      shortName: 'Tek',
      description:
        'A crisp, high-pitched strike on the absolute edge of the aluminum rim using the right index or middle finger'
    },
    {
      id: 'ka',
      label: 'Ka',
      shortName: 'Ka',
      description:
        'The mirror image of the Tek stroke, executed on the rim using the left ring finger to create rapid rolling subdivisions'
    },
    {
      id: 'slap',
      label: 'Slap',
      shortName: 'Slap',
      description:
        'Striking the center of the plastic head with a slightly cupped hand to create an instantaneous, muted pop'
    },
    {
      id: 'finger_roll',
      label: 'Finger roll',
      shortName: 'Finger roll',
      description:
        'Splitting and snapping the fingers sequentially against the metal rim to produce ultra-fast ornaments'
    },
    {
      id: 'under_rim_snap',
      label: 'Under-Rim Snap',
      shortName: 'Under-Rim Snap',
      description:
        'Reaching the fingers underneath the flared aluminum collar to snap against the bare metal shell for a dry, bell-like ping'
    }
  ],
  timbales: [
    {
      id: 'timbales_open',
      label: 'Open',
      shortName: 'Open',
      description:
        'Striking near the edge or rim of the Timbales and allowing the head or body to rebound freely for a clear, resonant open tone.'
    },
    {
      id: 'rimshot',
      label: 'Rimshot',
      shortName: 'Rimshot',
      description:
        'A sharp, rapid strike with slightly cupped fingertips near the rim of the Timbales to produce an explosive, high-pitched cracking sound.'
    },
    {
      id: 'paila',
      label: 'Paila',
      shortName: 'Paila',
      description:
        'Beating the metal shells or sides of the timbales directly with the stick to create a dry, metallic "click" rhythmic pattern.'
    },
    {
      id: 'timbales_muff',
      label: 'Muff',
      shortName: 'Muff',
      description:
        'Striking the Timbales while keeping the other hand or fingers pressed against the skin to deaden resonance and yield a short, closed pop.'
    },
    {
      id: 'bell',
      label: 'Bell',
      shortName: 'Bell',
      description: 'Striking the cowbell or block mounted on the stand for a bright, high-pitched metallic clank.'
    }
  ],
  cajon: [
    {
      id: 'bass_tone',
      label: 'Bass tone',
      shortName: 'Bass tone',
      description:
        'Striking the upper-middle faceplate with a flat, relaxed hand to activate the deep air cavity inside the box'
    },
    {
      id: 'corner_slap',
      label: 'Corner slap',
      shortName: 'Corner slap',
      description:
        'Snapping the fingers against the loose top corners of the faceplate to trigger a sharp pop mixed with the internal snares'
    },
    {
      id: 'high_finger_snap',
      label: 'High finger snap',
      shortName: 'High finger ...',
      description:
        'Tapping the upper edge with relaxed fingertips to isolate the bright snap of the wood without the bass'
    },
    {
      id: 'tapado',
      label: 'Tapado',
      shortName: 'Tapado',
      description:
        'Striking the faceplate sharply and leaving the hand pressed flat to create a dry, choked acoustic dead stroke'
    },
    {
      id: 'side_knock',
      label: 'Side knock',
      shortName: 'Side knock',
      description:
        'Knocking with knuckles directly on the solid, structural side walls of the box for a dry, hollow wood tone'
    },
    {
      id: 'heel_slide_pitch_bend',
      label: 'Heel Slide Pitch Bend',
      shortName: 'Heel Slide P...',
      description:
        'Dragging the bare heel of the foot down the front faceplate while striking with the hands to smoothly compress the wood and slide the pitch upward'
    }
  ],
  candombe: [
    {
      id: 'mano',
      label: 'Mano',
      shortName: 'Mano',
      description: 'Striking the skin with the bare hand using open or muted tones to anchor the syncopated foundation'
    },
    {
      id: 'palo',
      label: 'Palo',
      shortName: 'Palo',
      description: 'Whipping the skin with a wooden stick to produce highly resonant, piercing high-pitched accents'
    },
    {
      id: 'trigro_madera',
      label: 'Trigro / Madera',
      shortName: 'Trigro / Madera',
      description: 'Clicking the shaft of the wooden stick directly against the side staves of the barrel body'
    },
    {
      id: 'cu_stave_rake',
      label: 'Cuá Stave Rake',
      shortName: 'Cuá Stave Rake',
      description:
        'Dragging the wooden stick shaft up and down across the side seams of the barrel staves to create a long, raspy texture'
    }
  ],
  gwoka: [
    {
      id: 'boul',
      label: 'Boulá',
      shortName: 'Boulá',
      description:
        'Hitting the center of the large barrel head with wide palm strikes to maintain the steady, driving bass groove'
    },
    {
      id: 'mak',
      label: 'Maké',
      shortName: 'Maké',
      description:
        'Executing rapid, high-pitched edge snaps and improvisational slaps to mirror the precise steps of a dancer'
    }
  ],
  tanbou: [
    {
      id: 'center_palm_strike',
      label: 'Center palm strike',
      shortName: 'Center palm ...',
      description:
        'A full, warm palm strike delivered to the center of the cowskin head for the foundational rhythmic pulse'
    },
    {
      id: 'edge_finger_snap',
      label: 'Edge finger snap',
      shortName: 'Edge finger ...',
      description:
        'Using the tips of the fingers on the extreme edge of the drum to produce sharp, high-pitched accents'
    },
    {
      id: 'hand_foot_pitch_bend_press',
      label: 'Hand/Foot pitch-bend press',
      shortName: 'Hand/Foot pi...',
      description:
        'Using the heel of the hand or a foot to press hard into the drumhead to stretch it and bend the pitch while striking'
    },
    {
      id: 'side_stave_strike',
      label: 'Side Stave Strike',
      shortName: 'Side Stave S...',
      description:
        'Beating the wooden barrel sides with a heavy stick to lay down a cutting, hollow counter-rhythm underneath the skin patterns'
    }
  ],
  chinese: [
    {
      id: 'center_strike',
      label: 'Center strike',
      shortName: 'Center strike',
      description:
        'A piercing, high-tension wood-and-skin crack delivered to the center using thick, tapered wooden sticks'
    },
    {
      id: 'glancing_blow',
      label: 'Glancing blow',
      shortName: 'Glancing blow',
      description: 'Striking the head at an angled, slicing trajectory to create a short, compressed, muted pop'
    },
    {
      id: 'aro',
      label: 'Aro',
      shortName: 'Aro',
      description: 'Beating the heavy, solid wooden outer frame or shell to produce a dry, dense clacking sound'
    },
    {
      id: 'stick_shaft_clack',
      label: 'Stick-Shaft Clack',
      shortName: 'Stick-Shaft ...',
      description:
        'Striking the thick wooden shafts of the two tapered sticks together directly over the drumhead as a sharp signaling device'
    }
  ],
  daiko: [
    {
      id: 'don',
      label: 'Don',
      shortName: 'Don',
      description:
        'A powerful, booming center strike on the thick rawhide head using heavy wooden sticks, utilizing full-body momentum'
    },
    {
      id: 'do_ko',
      label: 'Do-ko',
      shortName: 'Do-ko',
      description:
        'Executing ultra-rapid, alternating right-and-left rolls in the center of the head to create a continuous wall of thunder'
    },
    {
      id: 'k',
      label: 'Ká',
      shortName: 'Ká',
      description:
        'Striking the heavy wooden rim or hoop of the drum body to produce an incredibly loud, cracking wood sound'
    },
    {
      id: 'bachi_clack',
      label: 'Bachi Clack',
      shortName: 'Bachi Clack',
      description:
        'Slamming the two massive wooden bachi dowels directly together over the player’s head as a sharp signaling device'
    }
  ],
  bodhran: [
    {
      id: 'tipper_roll',
      label: 'Tipper roll',
      shortName: 'Tipper roll',
      description:
        'A fluid wrist-pivot motion bouncing both ends of a double-headed stick rapidly up and down across the goat-skin'
    },
    {
      id: 'rimshot',
      label: 'Rimshot',
      shortName: 'Rimshot',
      description:
        'Striking the outer wooden shell and the skin simultaneously with the stick for an explosive wooden crack'
    },
    {
      id: 'back_hand_pitch_glide',
      label: 'Back-hand pitch-glide',
      shortName: 'Back-hand pi...',
      description:
        'Pressing and sliding the bare non-dominant hand inside the shell against the back of the skin to bend the pitch'
    },
    {
      id: 'back_hand_pressure_damp',
      label: 'Back-hand pressure damp',
      shortName: 'Back-hand pr...',
      description: 'Applying static palm pressure to the inside of the skin to deaden the sustain and dry out the tone'
    }
  ],
  talkingdrum: [
    {
      id: 'squeeze_cord_pitch_glide',
      label: 'Squeeze cord pitch glide',
      shortName: 'Squeeze cord...',
      description:
        'Squeezing and releasing the vertical leather side cords under the arm to tightly tension the head and glide the pitch'
    },
    {
      id: 'curved_stick_strike',
      label: 'Curved stick strike',
      shortName: 'Curved stick...',
      description: 'Hitting the center of the head with a flat, hooked wooden stick to elicit the core resonant tone'
    },
    {
      id: 'non_dominant_finger_tap',
      label: 'Non-dominant finger tap',
      shortName: 'Non-dominant...',
      description:
        'Using the fingers of the non-holding hand to damp, pop, or add rapid ghost notes directly to the head'
    },
    {
      id: 'shell_knock',
      label: 'Shell Knock',
      shortName: 'Shell Knock',
      description:
        'Striking the narrow wooden waist of the drum with the curved stick to insert a dry, fixed-pitch wood accent'
    }
  ],
  cuica: [
    {
      id: 'internal_stick_rub',
      label: 'Internal stick rub',
      shortName: 'Internal sti...',
      description: 'Rubbing a wet cloth up and down a thin bamboo stick affixed to the inside center of the drumhead'
    },
    {
      id: 'external_thumb_press',
      label: 'External thumb press',
      shortName: 'External thu...',
      description: 'Pressing firmly on the outside of the skin near the stick to alter the tension and slide the pitch'
    }
  ],
  doira: [
    {
      id: 'doira_dum',
      label: 'Dum',
      shortName: 'Dum',
      description:
        'A traditional playing technique on the Doira that emphasizes its unique timbre and acoustic properties.'
    },
    {
      id: 'doira_tak',
      label: 'Tak',
      shortName: 'Tak',
      description:
        'Striking near the edge or rim of the Doira and allowing the head or body to rebound freely for a clear, resonant open tone.'
    },
    {
      id: 'doira_kah',
      label: 'Kah',
      shortName: 'Kah',
      description:
        'A traditional playing technique on the Doira that emphasizes its unique timbre and acoustic properties.'
    },
    {
      id: 'doira_muff',
      label: 'Muff',
      shortName: 'Muff',
      description:
        'Striking the Doira while keeping the other hand or fingers pressed against the skin to deaden resonance and yield a short, closed pop.'
    },
    {
      id: 'doira_snap',
      label: 'Snap',
      shortName: 'Snap',
      description:
        'A traditional playing technique on the Doira that emphasizes its unique timbre and acoustic properties.'
    }
  ],
  uchiwadaiko: [
    {
      id: 'fan_head_slap',
      label: 'Fan head slap',
      shortName: 'Fan head slap',
      description:
        'Whipping a single wooden stick flat against the high-tension, fan-shaped drum membrane to create an instantaneous loud pop'
    },
    {
      id: 'handle_knock',
      label: 'Handle knock',
      shortName: 'Handle knock',
      description:
        'Striking the long wooden handle shaft with the stick to create a solid, high-tension wood click that bypasses the fan membrane'
    }
  ],
  oceandrum: [
    {
      id: 'rolling_swirl',
      label: 'Rolling swirl',
      shortName: 'Rolling swirl',
      description:
        'Tilting the drum in a slow, circular motion to roll hundreds of metal beads smoothly across the internal membrane'
    },
    {
      id: 'frame_tap',
      label: 'Frame tap',
      shortName: 'Frame tap',
      description: 'Executing sharp fingertip strikes directly on the head while keeping the beads settled and quiet'
    },
    {
      id: 'sudden_frame_tilt',
      label: 'Sudden Frame Tilt',
      shortName: 'Sudden Frame...',
      description:
        'Snapping the drum vertically so all the internal metal beads slam into the wooden side walls at once for a loud, abrasive crash'
    }
  ],
  janggu: [
    {
      id: 'kung',
      label: 'Kung',
      shortName: 'Kung',
      description:
        'Striking the thick, un-shaved hide head with a round-headed mallet to produce a deep, warm bass note'
    },
    {
      id: 'chae',
      label: 'Chae',
      shortName: 'Chae',
      description:
        'Whipping the thin, shaved skin head with a long, flexible bamboo stick to create a sharp, biting high pitch'
    },
    {
      id: 'hoop_rim_click',
      label: 'Hoop rim click',
      shortName: 'Hoop rim click',
      description: 'Striking the bamboo stick shaft directly against the outer wooden hoop of the drum frame'
    },
    {
      id: 'center_stick_mute',
      label: 'Center stick Mute',
      shortName: 'Center stick...',
      description:
        'Pressing the bamboo stick flat across the center of the thin head to completely choke the resonance while striking the outer hoop'
    }
  ],
  zabumba: [
    {
      id: 'ma_o',
      label: 'Maço',
      shortName: 'Maço',
      description:
        'Hitting the top calfskin head with a heavy, padded mallet on the downbeat to create a muffled or open bass pulse'
    },
    {
      id: 'bacalhau',
      label: 'Bacalhau',
      shortName: 'Bacalhau',
      description:
        'Striking the bottom plastic head from underneath with a thin flexible twig switch to execute rapid, syncopated upbeats'
    },
    {
      id: 'hoop_click',
      label: 'Hoop Click',
      shortName: 'Hoop Click',
      description:
        'Striking the metal or wooden tuning hoop with the thin twig switch to create a high, snappy accent between the bass mallet notes'
    }
  ],
  mridangam: [
    {
      id: 'tha',
      label: 'Tha',
      shortName: 'Tha',
      description: 'A flat, unpitched slap using the full left hand to instantly mute the bass side of the barrel drum'
    },
    {
      id: 'thom',
      label: 'Thom',
      shortName: 'Thom',
      description: 'An open, resonant bass stroke on the left head allowed to ring out completely'
    },
    {
      id: 'nam',
      label: 'Nam',
      shortName: 'Nam',
      description: 'A highly resonant open stroke played on the outermost treble edge ring of the right head'
    },
    {
      id: 'dhi_thei',
      label: 'Dhi / Thei',
      shortName: 'Dhi / Thei',
      description:
        'Sharp, articulate finger strikes directed onto the permanent black tuning paste center of the right head'
    },
    {
      id: 'chapu',
      label: 'Chapu',
      shortName: 'Chapu',
      description:
        'Striking with the side of the index finger across the edge rings to create a loud, full-toned treble snap'
    }
  ],
  udu: [
    {
      id: 'ceramic_side_body_slap',
      label: 'Ceramic side body slap',
      shortName: 'Ceramic side...',
      description: 'Slapping the side of the baked clay body with open fingers to create a sharp, high ceramic crack'
    },
    {
      id: 'mouth_port_palm_pop',
      label: 'Mouth port palm pop',
      shortName: 'Mouth port p...',
      description:
        'Striking the open side-hole with a flat palm to compress the internal air column for a deep, hollow "whoomph" sound'
    },
    {
      id: 'neck_scratch',
      label: 'Neck Scratch',
      shortName: 'Neck Scratch',
      description:
        'Scraping the textured clay around the neck opening with the fingernails to create a crisp, continuous, ceramic rustle'
    }
  ],
  thunderdrum: [
    {
      id: 'spring_mallet_strike',
      label: 'Spring mallet strike',
      shortName: 'Spring malle...',
      description:
        'Tapping the long dangling metal spring directly with a stick to trigger a sudden, acoustic lightning strike sound'
    },
    {
      id: 'cylinder_shake_rumble',
      label: 'Cylinder shake rumble',
      shortName: 'Cylinder sha...',
      description:
        'Gently shaking the cylinder body so the spring wobbles and sends an ominous, rolling acoustic reverb through the head'
    },
    {
      id: 'head_tap',
      label: 'Head tap',
      shortName: 'Head tap',
      description:
        'Lightly flicking the drumhead with a fingernail while keeping the spring still to get a tight, plastic pop with zero thunder reverb'
    }
  ],
  waterdrums: [
    {
      id: 'gourd_boom',
      label: 'Gourd Boom',
      shortName: 'Gourd Boom',
      description:
        'Striking near the center of the Water Drums head with a relaxed palm to produce a deep, booming low-frequency bass tone.'
    },
    {
      id: 'water_splash',
      label: 'Water Splash',
      shortName: 'Water Splash',
      description:
        'A traditional playing technique on the Water Drums that emphasizes its unique timbre and acoustic properties.'
    },
    {
      id: 'water_slap',
      label: 'Water Slap',
      shortName: 'Water Slap',
      description:
        'A sharp, rapid strike with slightly cupped fingertips near the rim of the Water Drums to produce an explosive, high-pitched cracking sound.'
    },
    {
      id: 'gourd_mute',
      label: 'Gourd Mute',
      shortName: 'Gourd Mute',
      description:
        'Striking near the edge or rim of the Water Drums and allowing the head or body to rebound freely for a clear, resonant open tone.'
    },
    {
      id: 'water_drip',
      label: 'Water Drip',
      shortName: 'Water Drip',
      description:
        'A traditional playing technique on the Water Drums that emphasizes its unique timbre and acoustic properties.'
    }
  ],
  vibraslap: [
    {
      id: 'ball_palm_strike',
      label: 'Ball palm strike',
      shortName: 'Ball palm st...',
      description:
        'Striking the wooden ball against the palm, forcing the internal metal teeth to chatter rapidly inside the sound box'
    },
    {
      id: 'soundbox_strike',
      label: 'Soundbox Strike',
      shortName: 'Soundbox Strike',
      description:
        'Striking the wooden soundbox directly with a hard mallet to get a dry wood-block pop instead of triggering the metal teeth rattle'
    }
  ],
  flexatone: [
    {
      id: 'handle_shake_roll',
      label: 'Handle shake roll',
      shortName: 'Handle shake...',
      description:
        'Vibrating the handle rapidly so the two wooden balls mounted on clock springs strike the steel sheet back and forth'
    },
    {
      id: 'thumb_pitch_bend',
      label: 'Thumb pitch bend',
      shortName: 'Thumb pitch ...',
      description:
        'Pressing and bending the flexible sheet steel with the thumb to smoothly glide the acoustic pitch up or down'
    },
    {
      id: 'frame_knock',
      label: 'Frame Knock',
      shortName: 'Frame Knock',
      description:
        'Tapping the solid steel frame with a hard stick or knuckle to bypass the spring-balls and create a pure, high-pitched metal click'
    }
  ],
  waterphone: [
    {
      id: 'cello_rod_bow_stroke',
      label: 'Cello rod bow stroke',
      shortName: 'Cello rod bo...',
      description:
        'Drawing a cello bow across the outer bronze rods while tilting the basin to move water inside for shifting, eerie echoes'
    },
    {
      id: 'rod_mallet_tap',
      label: 'Rod mallet tap',
      shortName: 'Rod mallet tap',
      description: 'Tapping the individual bronze rods with a hard mallet to create sustained, metallic bell tones'
    },
    {
      id: 'basin_tilt_water_shift',
      label: 'Basin tilt water shift',
      shortName: 'Basin tilt w...',
      description:
        'Swirling the water inside the stainless steel basin after playing to dynamically bend the pitch of the lingering harmonics'
    },
    {
      id: 'bottom_basin_hand_slap',
      label: 'Bottom Basin Hand Slap',
      shortName: 'Bottom Basin...',
      description:
        'Slapping the flat bottom of the stainless steel water reservoir with an open palm to create a deep, underwater acoustic thud'
    }
  ],
  handpan: [
    {
      id: 'ding',
      label: 'Ding',
      shortName: 'Ding',
      description:
        'A light, springy thumb strike on the central raised or indented dome note to elicit a deep, resonant bass foundation'
    },
    {
      id: 'gu',
      label: 'Gu',
      shortName: 'Gu',
      description:
        'Slapping the flat bottom shell directly around the open acoustic port hole to produce a dry, wooden bass thud'
    },
    {
      id: 'tone_field_tap',
      label: 'Tone field tap',
      shortName: 'Tone field tap',
      description:
        'Striking the outer dimpled notes with a quick finger bounce to isolate specific chordal overtones and harmonics'
    },
    {
      id: 'interstitial_tap',
      label: 'Interstitial Tap',
      shortName: 'Interstitial...',
      description:
        'Striking the flat, untreated metal spaces between the tuned note fields to create a dry, metallic, non-resonant percussive click'
    }
  ],
  steelpan: [
    {
      id: 'indentation_strike',
      label: 'Indentation strike',
      shortName: 'Indentation ...',
      description:
        'Striking the center of a tuned convex note indentation using a rubber-tipped mallet and lifting off instantly to avoid choking it'
    },
    {
      id: 'rapid_chordal_roll',
      label: 'Rapid chordal roll',
      shortName: 'Rapid chorda...',
      description:
        'Alternating ultra-rapid, light strikes between multiple notes to create a sustained, singing melody or chord'
    },
    {
      id: 'rim_ring',
      label: 'Rim Ring',
      shortName: 'Rim Ring',
      description:
        'Striking the un-tuned outer vertical chrome skirt or rim of the pan with the mallet shaft to create a bright, industrial metallic ring'
    }
  ],
  ghatam: [
    {
      id: 'belly_vacuum_pop',
      label: 'Belly vacuum pop',
      shortName: 'Belly vacuum...',
      description:
        'Striking the open neck/mouth of the clay pot directly against the bare stomach to trap air and create a deep bass thump'
    },
    {
      id: 'finger_flick_pop',
      label: 'Finger-flick pop',
      shortName: 'Finger-flick...',
      description:
        'Snapping the fingertips or fingernails sharply against the baked outer clay walls to produce metallic, ceramic pops'
    },
    {
      id: 'mouth_open_slap',
      label: 'Mouth open slap',
      shortName: 'Mouth open slap',
      description:
        'Slapping the open top hole with a flat palm while the pot sits loosely, creating a hollow acoustic pop'
    },
    {
      id: 'neck_rim_ring',
      label: 'Neck Rim Ring',
      shortName: 'Neck Rim Ring',
      description:
        'Striking the thick, reinforced clay rim around the top opening with a heavy ring or coin to produce a high-pitched, crystalline chime'
    }
  ],
  daf: [
    {
      id: 'dum',
      label: 'Dum',
      shortName: 'Dum',
      description:
        'A warm, resonant thumb or palm strike delivered to the inner edge of the massive, lightweight wooden frame'
    },
    {
      id: 'tak',
      label: 'Tak',
      shortName: 'Tak',
      description:
        'A sharp, snapping finger strike on the extreme perimeter of the skin to produce a bright edge accent'
    },
    {
      id: 'zanjir',
      label: 'Zanjir',
      shortName: 'Zanjir',
      description:
        'Tilting and shaking the frame vigorously so hundreds of interlinked metal rings cascading along the inside frame clash against the skin'
    },
    {
      id: 'frame_slap',
      label: 'Frame Slap',
      shortName: 'Frame Slap',
      description:
        'Striking the bare wooden frame directly with the flat palm, causing all the internal rings to explode in a sudden, violent, un-sustained metallic crash'
    }
  ],
  riq: [
    {
      id: 'dum',
      label: 'Dum',
      shortName: 'Dum',
      description:
        'Striking the center of the skin with fingers while holding the frame carefully to avoid activating the brass jingles'
    },
    {
      id: 'tak',
      label: 'Tak',
      shortName: 'Tak',
      description:
        'Hitting the heavy brass jingles directly with the ring finger to create a sharp, cutting metallic chime'
    },
    {
      id: 'jingle_damp_split',
      label: 'Jingle Damp Split',
      shortName: 'Jingle Damp ...',
      description:
        'Holding one pair of brass jingles completely quiet with the thumb while striking the opposite jingles to isolate a tight, dry metallic tick'
    }
  ],
  surdo: [
    {
      id: 'open_strike',
      label: 'Open strike',
      shortName: 'Open strike',
      description:
        'Hitting the center with a soft mallet and pulling away immediately to let the massive bass note ring out'
    },
    {
      id: 'muted_mallet_strike',
      label: 'Muted mallet strike',
      shortName: 'Muted mallet...',
      description:
        'Striking the center with the mallet while the non-dominant hand rests firmly on the skin to kill the sustain'
    },
    {
      id: 'hand_keep_time_tap',
      label: 'Hand keep-time tap',
      shortName: 'Hand keep-ti...',
      description:
        'Lightly tapping the bare non-dominant hand against the skin between mallet strikes to maintain subdivisions'
    },
    {
      id: 'rim_click',
      label: 'Rim Click',
      shortName: 'Rim Click',
      description:
        'Striking the metal counterhoop with the wooden shaft of the mallet to create a bright, high-pitched metallic click'
    }
  ],
  pandeiro: [
    {
      id: 'polegar',
      label: 'Polegar',
      shortName: 'Polegar',
      description: 'Alternating between open bass tones and muted slaps using the side and tip of the thumb on the edge'
    },
    {
      id: 'manoteo',
      label: 'Manoteo',
      shortName: 'Manoteo',
      description:
        'A continuous rolling motion alternating a strike with the heel of the hand and a strike with the fingertips'
    },
    {
      id: 'chacoalho',
      label: 'Chacoalho',
      shortName: 'Chacoalho',
      description:
        'Shaking the wooden frame back and forth aggressively to keep time using the dry, cupped metal jingles'
    },
    {
      id: 'rim_click',
      label: 'Rim Click',
      shortName: 'Rim Click',
      description:
        'Striking the wooden rim with the knuckle of the thumb to isolate a crisp wood-and-jingle accent without activating the skin'
    }
  ],
  tamborim: [
    {
      id: 'toque_aberto',
      label: 'Toque Aberto',
      shortName: 'Toque Aberto',
      description:
        'Striking the plastic head with a flexible plastic split-stick or wooden stick to create a loud, open treble pop'
    },
    {
      id: 'virada',
      label: 'Virada',
      shortName: 'Virada',
      description:
        'Flipping the holding hand upside down 180 degrees to catch alternating up-and-down stick strokes for blindingly fast rolls'
    },
    {
      id: 'muted_back_finger_press',
      label: 'Muted back-finger press',
      shortName: 'Muted back-f...',
      description:
        'Pressing an index finger firmly against the inside of the plastic head while striking to isolate a dry, high click'
    }
  ],
  repinique: [
    {
      id: 'mano',
      label: 'Mano',
      shortName: 'Mano',
      description: 'Striking the head with a bare hand using either a clean open tone or a sharp, heavy slap'
    },
    {
      id: 'baqueta',
      label: 'Baqueta',
      shortName: 'Baqueta',
      description:
        'Executing a whip-like strike on the plastic head with a long wooden or plastic stick held in the dominant hand'
    },
    {
      id: 'rimshot_crack',
      label: 'Rimshot crack',
      shortName: 'Rimshot crack',
      description:
        'Striking the metal hoop and the plastic head simultaneously with the stick to produce a piercing signal crack'
    },
    {
      id: 'stick_slide_pitch_bend',
      label: 'Stick Slide Pitch-Bend',
      shortName: 'Stick Slide ...',
      description:
        'Pressing the wooden stick firmly into the center of the plastic head while slapping the edge with the bare hand to slide the pitch upward'
    }
  ],
  bendir: [
    {
      id: 'dum',
      label: 'Dum',
      shortName: 'Dum',
      description:
        'A low, center strike that captures the deep air resonance combined with the buzzing vibration of internal gut snares'
    },
    {
      id: 'tak',
      label: 'Tak',
      shortName: 'Tak',
      description: 'A crisp, high-pitched finger snap on the extreme perimeter of the frame drumhead'
    },
    {
      id: 'kah',
      label: 'Kah',
      shortName: 'Kah',
      description: 'Striking the rim while keeping the fingers flat to produce a dry, muted, non-resonant tap'
    },
    {
      id: 'snare_rattle_mute',
      label: 'Snare rattle mute',
      shortName: 'Snare rattle...',
      description:
        'Pressing one hand against the skin to completely kill the head resonance, leaving only the snare buzz'
    },
    {
      id: 'fingernail_rim_rim',
      label: 'Fingernail Rim Rim',
      shortName: 'Fingernail R...',
      description:
        'Flicking the hard fingernails directly against the inner wooden frame to bypass the snare buzz and get a sharp, castanet-like click'
    }
  ],
  davul: [
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
  ashiko: [
    {
      id: 'bass_tone',
      label: 'Bass tone',
      shortName: 'Bass tone',
      description:
        'Striking the dead-center of the head with a flat palm, yielding a tight bass response due to the tapered cone shape'
    },
    {
      id: 'open_tone',
      label: 'Open tone',
      shortName: 'Open tone',
      description: 'A firm hit near the outer rim with fingers held together, allowing the drumhead to ring out clearly'
    },
    {
      id: 'slap_tone',
      label: 'Slap tone',
      shortName: 'Slap tone',
      description:
        'Snapping the relaxed fingertips against the absolute perimeter to produce a high-pitched, piercing crack'
    },
    {
      id: 'aro_golpe',
      label: 'Aro Golpe',
      shortName: 'Aro Golpe',
      description:
        'Striking the thick wooden structural hoops or body staves with a heavy stick to create a dry, hollow, high-pitched cracking accent'
    }
  ],
  dunun: [
    {
      id: 'open_strike',
      label: 'Open strike',
      shortName: 'Open strike',
      description:
        'A powerful, unmuted strike with a heavy stick on the thick rawhide head, letting the bass note sustain'
    },
    {
      id: 'muted_strike',
      label: 'Muted strike',
      shortName: 'Muted strike',
      description:
        'Striking the head while pressing and holding the stick into the skin to instantly choke the resonance'
    },
    {
      id: 'bell_strike',
      label: 'Bell strike',
      shortName: 'Bell strike',
      description:
        'Hitting a curved iron bell attached to the side or top of the drum shell using a heavy metal ring or bolt'
    },
    {
      id: 'bell_rim_shot',
      label: 'Bell Rim-Shot',
      shortName: 'Bell Rim-Shot',
      description:
        'Striking the iron bell mounted on top of the drum and the wooden hoop of the drum body simultaneously using a heavy metal bolt'
    }
  ],
  teponaztli: [
    {
      id: 'long_tongue_strike',
      label: 'Long tongue strike',
      shortName: 'Long tongue ...',
      description:
        'Striking the longer, lower-pitched wooden tongue carved into the top of the hollow log with a rubber mallet'
    },
    {
      id: 'short_tongue_strike',
      label: 'Short tongue strike',
      shortName: 'Short tongue...',
      description:
        'Striking the shorter, higher-pitched wooden tongue carved adjacent to the long tongue to create a distinct intervals'
    },
    {
      id: 'side_body_hit',
      label: 'Side Body Hit',
      shortName: 'Side Body Hit',
      description:
        'Striking the solid outer log walls away from the carved tongues to isolate a dry, dense, heavy wood-block thud'
    }
  ],
  snare_drum: [
    {
      id: 'center_stick_hit',
      label: 'Center stick hit',
      shortName: 'Center stick...',
      description:
        'A clean, articulate strike in the center of the top head with the bottom wire snares engaged against the bottom head'
    },
    {
      id: 'rimshot',
      label: 'Rimshot',
      shortName: 'Rimshot',
      description:
        'Striking the top metal counterhoop and the head at the exact same time with the stick for an explosive accent'
    },
    {
      id: 'cross_stick_rim_click',
      label: 'Cross-stick rim click',
      shortName: 'Cross-stick ...',
      description:
        'Resting the tip of the stick on the head and striking the rim with the shaft to produce a woody click'
    },
    {
      id: 'buzz_press_roll',
      label: 'Buzz / Press roll',
      shortName: 'Buzz / Press...',
      description:
        'Pressing the sticks firmly into the head to force them to bounce repeatedly, creating a dense, continuous wall of sound'
    },
    {
      id: 'rim_shot_mute',
      label: 'Rim Shot Mute',
      shortName: 'Rim Shot Mute',
      description:
        'Placing one drumstick flat across the drumhead so it touches both the skin and the opposite metal rim, then striking that resting stick with the other stick to produce a compressed wooden "clack"'
    }
  ],
  shekere: [
    {
      id: 'bottom_palm_bass_pop',
      label: 'Bottom palm bass pop',
      shortName: 'Bottom palm ...',
      description:
        'Striking the thick bottom base of the hollow gourd with a flat palm to create a deep, hollow air pop'
    },
    {
      id: 'bead_net_shake',
      label: 'Bead net shake',
      shortName: 'Bead net shake',
      description: 'Jerking the gourd forward and backward to snap the external net of beads against the outer walls'
    },
    {
      id: 'net_twist_pull_rub',
      label: 'Net twist / Pull rub',
      shortName: 'Net twist / ...',
      description:
        'Pulling the bead net down tightly or twisting it against the gourd to create a sustained, raspy friction texture'
    },
    {
      id: 'neck_tap',
      label: 'Neck Tap',
      shortName: 'Neck Tap',
      description:
        'Striking the narrow, bare wooden or fiberglass neck of the gourd with the knuckles or a ring while keeping the bead net perfectly still to produce a bright, dry, organic click'
    },
    {
      id: 'mouth_slap_pop',
      label: 'Mouth Slap Pop',
      shortName: 'Mouth Slap Pop',
      description:
        'Slapping the open top mouth of the gourd with an open palm to compress the air column and create a deep, bassy "u-du" style thump'
    }
  ],
  kanjira: [
    {
      id: 'split_finger_edge_tap',
      label: 'Split-finger edge tap',
      shortName: 'Split-finger...',
      description:
        'Striking the frame drum skin near the rim using alternating index and ring finger groups for high subdivisions'
    },
    {
      id: 'inner_skin_pitch_glide',
      label: 'Inner skin pitch glide',
      shortName: 'Inner skin p...',
      description:
        'Pressing and sliding the fingers of the holding hand against the inside of the loose lizard skin to dramatically bend the pitch'
    }
  ],
  tammorra: [
    {
      id: 'bass_center_pulse',
      label: 'Bass center pulse',
      shortName: 'Bass center ...',
      description: 'A heavy, flat-handed palm strike in the center of the head to draw out the deep frame resonance'
    },
    {
      id: 'finger_roll_friction_drag',
      label: 'Finger roll / Friction drag',
      shortName: 'Finger roll ...',
      description:
        'Dragging a wet thumb or rolling the fingers across the skin to continuously shake the heavy, tin-plated jingles'
    },
    {
      id: 'rim_wood_crack',
      label: 'Rim Wood Crack',
      shortName: 'Rim Wood Crack',
      description:
        'Striking the outer rim sharply with the side of the thumb to maximize the wooden frame crack while minimizing the jingle ring'
    }
  ],
  framed_rumbla: [
    {
      id: 'rumbla_bass',
      label: 'Bass',
      shortName: 'Bass',
      description:
        'Striking near the center of the Framed Rumbla head with a relaxed palm to produce a deep, booming low-frequency bass tone.'
    },
    {
      id: 'rumbla_open',
      label: 'Open',
      shortName: 'Open',
      description:
        'Striking near the edge or rim of the Framed Rumbla and allowing the head or body to rebound freely for a clear, resonant open tone.'
    },
    {
      id: 'rumbla_slap',
      label: 'Slap',
      shortName: 'Slap',
      description:
        'A sharp, rapid strike with slightly cupped fingertips near the rim of the Framed Rumbla to produce an explosive, high-pitched cracking sound.'
    },
    {
      id: 'rumbla_mute',
      label: 'Mute',
      shortName: 'Mute',
      description:
        'Striking the Framed Rumbla while keeping the other hand or fingers pressed against the skin to deaden resonance and yield a short, closed pop.'
    },
    {
      id: 'rumbla_tap',
      label: 'Tap',
      shortName: 'Tap',
      description:
        'Alternating between the heel of the palm and the fingertips on the Framed Rumbla to keep steady time and create rapid rolling textures.'
    }
  ],
  gran_cassa: [
    {
      id: 'glancing_arc_blow',
      label: 'Glancing arc blow',
      shortName: 'Glancing arc...',
      description:
        'Striking off-center with a massive plush mallet using a sweeping arc motion to draw out deep, dark orchestral low ends'
    },
    {
      id: 'secco_hit',
      label: 'Secco hit',
      shortName: 'Secco hit',
      description:
        'Striking the center of the large head cleanly while the non-striking hand rests on the opposite head to kill sustain'
    },
    {
      id: 'hand_damping',
      label: 'Hand damping',
      shortName: 'Hand damping',
      description:
        'Placing the flat palm or forearm against the vibrating head immediately after a strike to control the length of the note'
    },
    {
      id: 'shell_knock',
      label: 'Shell Knock',
      shortName: 'Shell Knock',
      description:
        'Striking the massive wooden outer shell of the bass drum with the wooden handle of the mallet to produce a giant, booming wood-block tone'
    }
  ],
  lions_roar: [
    {
      id: 'rope_friction_pull_push',
      label: 'Rope friction pull/push',
      shortName: 'Rope frictio...',
      description:
        'Pulling a resin-coated rope or leather strap through a hole in the center of the drumhead with a wet cloth to generate a growl'
    },
    {
      id: 'cylinder_tap',
      label: 'Cylinder tap',
      shortName: 'Cylinder tap',
      description:
        'Tapping on the wooden acoustic cylinder body with a mallet to get a dry wood-block pop between the friction rope growls'
    }
  ],
  chocalho: [
    {
      id: 'linear_shake',
      label: 'Linear shake',
      shortName: 'Linear shake',
      description:
        'Pushing and pulling the frame back and forth in rapid linear motions to shake the rows of aluminum jingles'
    },
    {
      id: 'accented_whip',
      label: 'Accented whip',
      shortName: 'Accented whip',
      description:
        'A sudden, sweeping downward or snapping arc motion to force all the jingles to crash at once for a wall of sound'
    }
  ],
  alfaia: [
    {
      id: 'golpe',
      label: 'Golpe',
      shortName: 'Golpe',
      description: 'Powerful impact directly in the center of the calfskin head to create a deep, booming bass pulse'
    },
    {
      id: 'aro',
      label: 'Aro',
      shortName: 'Aro',
      description: 'Striking the thick wooden outer tuning hoops to produce a heavy, cracking rim-click'
    },
    {
      id: 'stick_on_stick_hoop_rimshot',
      label: 'Stick-on-Stick Hoop Rimshot',
      shortName: 'Stick-on-Sti...',
      description:
        'Holding one stick flat against the wooden tuning hoop and striking it with the other stick to create a massive, cracking rimshot'
    }
  ],
  log_drum: [
    {
      id: 'slat_center_tongue_pop',
      label: 'Slat center tongue pop',
      shortName: 'Slat center ...',
      description:
        'Striking the center of the tuned wooden tongues with rubber mallets to produce a highly resonant, hollow tone'
    },
    {
      id: 'slat_edge_dead_stroke',
      label: 'Slat edge dead stroke',
      shortName: 'Slat edge de...',
      description: 'Striking the wooden tongue and leaving the mallet down to choke the sustain and create a dry click'
    },
    {
      id: 'bridge_strike',
      label: 'Bridge Strike',
      shortName: 'Bridge Strike',
      description:
        'Striking the solid, un-cut wooden bridge section between the tuned tongues to produce a sharp, high-pitched, solid wood-block crack'
    }
  ],
  temple_blocks: [
    {
      id: 'center_mallet_hit',
      label: 'Center mallet hit',
      shortName: 'Center malle...',
      description:
        'Striking the center opening of the hollow wooden or plastic blocks with hard mallets for a crisp, hollow clack'
    },
    {
      id: 'lip_scrape',
      label: 'Lip Scrape',
      shortName: 'Lip Scrape',
      description:
        'Dragging a hard plastic mallet across the hollow open lips of the blocks to create a hollow, multi-pitched chattering friction sound'
    }
  ],
  frog_rasp: [
    {
      id: 'spine_scrape',
      label: 'Spine scrape',
      shortName: 'Spine scrape',
      description:
        'Dragging a wooden stick from tail to head along the ridged, notched spine of the wooden frog to create a croaking sound'
    },
    {
      id: 'mouth_poke',
      label: 'Mouth poke',
      shortName: 'Mouth poke',
      description:
        'Tapping the hollow wooden frog directly on its nose or side with the stick to function as a simple woodblock pop'
    },
    {
      id: 'stick_tip_tap',
      label: 'Stick Tip Tap',
      shortName: 'Stick Tip Tap',
      description:
        'Using the small, tapered tip of the stick to drum rapidly on the frog’s hollow head to create quick, staccato wood-block notes'
    }
  ],
  spring_drum: [
    {
      id: 'spring_flick',
      label: 'Spring flick',
      shortName: 'Spring flick',
      description:
        'Flicking or brushing the long, dangling steel spring directly to let its vibration resonate into the acoustic cylinder'
    },
    {
      id: 'cylinder_acoustic_wobble',
      label: 'Cylinder acoustic wobble',
      shortName: 'Cylinder aco...',
      description:
        'Shaking the cylinder body through the air to modulate the internal spring resonance for a sci-fi thunder sound'
    },
    {
      id: 'rim_strike',
      label: 'Rim Strike',
      shortName: 'Rim Strike',
      description:
        'Striking the metal rim of the drum head with a stick, sending a sudden, sharp transient down into the dangling spring'
    }
  ],
  thongophone: [
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
  gubguba: [
    {
      id: 'string_pluck',
      label: 'String pluck',
      shortName: 'String pluck',
      description: 'Plucking a taut string that passes directly through the center of a small drumhead container'
    },
    {
      id: 'string_tension_bend',
      label: 'String tension bend',
      shortName: 'String tensi...',
      description:
        'Pulling a lever or manually tugging the string to instantly alter its tension, creating a sliding pitch effect'
    }
  ],
  cabasa: [
    {
      id: 'cylinder_twist',
      label: 'Cylinder twist',
      shortName: 'Cylinder twist',
      description:
        'Pressing the metal bead loops firmly against the textured steel cylinder and rotating the handle quickly back and forth'
    },
    {
      id: 'hand_tap',
      label: 'Hand tap',
      shortName: 'Hand tap',
      description:
        'Striking the hanging steel beads directly against the palm of the non-dominant hand for a tight, staccato metallic rattle'
    },
    {
      id: 'linear_shaft_tap',
      label: 'Linear Shaft Tap',
      shortName: 'Linear Shaft...',
      description:
        'Tapping the solid wooden or plastic handle against the knee while keeping the beads still to create a subtle, woody thud'
    }
  ],
  rainstick: [
    {
      id: 'vertical_inversion_slide',
      label: 'Vertical inversion slide',
      shortName: 'Vertical inv...',
      description:
        'Flipping the long cactus tube slowly from vertical to vertical so internal pebbles cascade down through a maze of internal thorns'
    },
    {
      id: 'fast_tilt_crash',
      label: 'Fast tilt crash',
      shortName: 'Fast tilt crash',
      description:
        'Jerking the tube quickly to a sharp angle so all the pebbles slide at once for a sudden, abrasive crash'
    },
    {
      id: 'shell_knock',
      label: 'Shell Knock',
      shortName: 'Shell Knock',
      description:
        'Tapping the cactus shell body with a knuckle or ring while the pebbles are falling to superimpose a sharp click over the rushing water sound'
    }
  ],
  kokiriko: [
    {
      id: 'cascading_wave',
      label: 'Cascading wave',
      shortName: 'Cascading wave',
      description:
        'Holding both ends of the stringed wooden slats and moving the hands in a waving motion so they clatter into each other sequentially'
    },
    {
      id: 'single_clatter_click',
      label: 'Single clatter click',
      shortName: 'Single clatt...',
      description:
        'Bringing the hands together sharply to force all the wooden blocks to collapse simultaneously for a loud pop'
    },
    {
      id: 'side_slat_tap',
      label: 'Side Slat Tap',
      shortName: 'Side Slat Tap',
      description:
        'Tapping a single outer wooden slat against a table or knee to produce a delicate, isolated wood click rather than a full cascade'
    }
  ],
  guiro: [
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
  spoons_bones: [
    {
      id: 'finger_rake_roll',
      label: 'Finger rake roll',
      shortName: 'Finger rake ...',
      description:
        'Dragging the clacking pair down the spread fingers of the non-dominant hand to create ultra-fast triplets'
    },
    {
      id: 'thigh_to_hand_bounce',
      label: 'Thigh-to-hand bounce',
      shortName: 'Thigh-to-han...',
      description:
        'Bouncing the instruments rapidly back and forth between the top of the thigh and the open palm of the non-dominant hand'
    },
    {
      id: 'hand_flat_slap',
      label: 'Hand Flat Slap',
      shortName: 'Hand Flat Slap',
      description:
        'Bringing the paired instruments down completely flat against the open palm to create a wide, slapping clatter rather than a tight click'
    }
  ],
  washboard: [
    {
      id: 'thimble_ridge_scrape',
      label: 'Thimble ridge scrape',
      shortName: 'Thimble ridg...',
      description:
        'Dragging metal thimbles worn on the fingers down the corrugated ridges of the metal board for a continuous wash'
    },
    {
      id: 'mounted_accessory_tap',
      label: 'Mounted accessory tap',
      shortName: 'Mounted acce...',
      description:
        'Tapping additional items fixed to the board like small cowbells or woodblocks using the thimbles for staccato accents'
    },
    {
      id: 'spoon_click_clatter',
      label: 'Spoon Click/Clatter',
      shortName: 'Spoon Click/...',
      description:
        'Holding a pair of traditional metal spoons nested back-to-back in one hand and bouncing them rapidly across the corrugated metal ridges to create an aggressive triple-click texture'
    }
  ],
  friction_drum: [
    {
      id: 'rub_low',
      label: 'Internal stick rub',
      shortName: 'Internal stick rub',
      description: 'Rubbing a wet cloth up and down a thin bamboo stick affixed to the inside center of the drumhead'
    },
    {
      id: 'rub_high',
      label: 'External thumb press',
      shortName: 'External thumb press',
      description: 'Pressing firmly on the outside of the skin near the stick to alter the tension and slide the pitch'
    }
  ],
  kundu: [
    {
      id: 'center_skin_tap',
      label: 'Center skin tap',
      shortName: 'Center skin tap',
      description: 'Gentle finger or palm strike on the small lizard-skin head of the hourglass-shaped wooden body'
    },
    {
      id: 'rim_edge_pop',
      label: 'Rim edge pop',
      shortName: 'Rim edge pop',
      description: 'Snapping a single finger against the extreme outer edge of the skin for a high, hollow accent'
    },
    {
      id: 'shell_scrape',
      label: 'Shell Scrape',
      shortName: 'Shell Scrape',
      description:
        'Dragging a small bone or stick along the carved, textured patterns of the wooden hourglass body to create a continuous raspy drone'
    }
  ],
  tar_drum: [
    {
      id: 'dum',
      label: 'Dum',
      shortName: 'Dum',
      description: 'A low, open finger strike delivered to the lower edge of the large frame drum skin'
    },
    {
      id: 'tak',
      label: 'Tak',
      shortName: 'Tak',
      description: 'A bright, high-pitched finger tap executed on the very perimeter of the wooden shell rim'
    },
    {
      id: 'fingertip_roll_friction_drag',
      label: 'Fingertip roll / Friction drag',
      shortName: 'Fingertip ro...',
      description: 'Dragging the fingertips across the textured skin to create a continuous, raspy friction sound'
    },
    {
      id: 'back_frame_scratch',
      label: 'Back-Frame Scratch',
      shortName: 'Back-Frame S...',
      description:
        'Scraping the fingertips along the inner wooden rim of the frame drum to create a subtle, whispering friction texture'
    }
  ],
  gome: [
    {
      id: 'palm_bass',
      label: 'Palm bass',
      shortName: 'Palm bass',
      description:
        'Striking the center of the massive square frame-drum head with a flat hand while sitting on top of the instrument'
    },
    {
      id: 'corner_slap',
      label: 'Corner slap',
      shortName: 'Corner slap',
      description:
        'Snapping the fingers against the outer corners where the skin tension is highest to get a sharp accent'
    },
    {
      id: 'foot_pitch_bend',
      label: 'Foot pitch bend',
      shortName: 'Foot pitch bend',
      description:
        'Pressing the heel or toe of the foot firmly into the skin to stretch it and bend the pitch while striking with the hands'
    },
    {
      id: 'heel_stamp',
      label: 'Heel Stamp',
      shortName: 'Heel Stamp',
      description:
        'Stamping the heel of the foot onto the ground while sitting on the drum to ground the internal air cavity and dry out the hand slaps'
    }
  ],
  boomwhackers: [
    {
      id: 'surface_strike',
      label: 'Surface strike',
      shortName: 'Surface strike',
      description:
        'Striking the flat end of the tuned plastic tube against a hard floor or wall to vibrate the column of air'
    },
    {
      id: 'body_strike',
      label: 'Body strike',
      shortName: 'Body strike',
      description:
        'Tapping the side or end of the tube against a shoe or thigh to get a softer, more rounded resonant pitch'
    },
    {
      id: 'end_cap_pop',
      label: 'End Cap Pop',
      shortName: 'End Cap Pop',
      description:
        'Striking the open end of the plastic tube flat against the palm of the hand to create a tight, compressed acoustic air pop'
    }
  ],
  tank_drum: [
    {
      id: 'tongue_bounce',
      label: 'Tongue bounce',
      shortName: 'Tongue bounce',
      description:
        'Striking the cut-out steel tongues with fingers or soft rubber mallets, lifting off instantly to let the bell-like tone ring'
    }
  ],
  bell_tree: [
    {
      id: 'glissando_sweep',
      label: 'Glissando sweep',
      shortName: 'Glissando sweep',
      description:
        'Sliding a metal wand down or up the nested stack of graduated brass bells to create a bright, cascading shimmer'
    },
    {
      id: 'single_bell_tap',
      label: 'Single Bell Tap',
      shortName: 'Single Bell Tap',
      description:
        'Using a hard metal triangle beater to strike just one specific brass bell in the nested stack to isolate a single, pure chime note'
    }
  ],
  mark_tree: [
    {
      id: 'linear_wand_sweep',
      label: 'Linear wand sweep',
      shortName: 'Linear wand ...',
      description:
        'Dragging a metal triangle beater horizontally across the row of hanging aluminum tubes to create a glittering descent'
    },
    {
      id: 'hand_ruffle_shimmer',
      label: 'Hand ruffle shimmer',
      shortName: 'Hand ruffle ...',
      description:
        'Gently brushing the palm through the hanging tubes to create a random, swirling wash of high-pitched chime sound'
    },
    {
      id: 'wand_chime_ring',
      label: 'Wand Chime Ring',
      shortName: 'Wand Chime Ring',
      description:
        'Striking a single hanging tube directly with the metal beater and letting it swing freely to isolate one pristine high pitch'
    }
  ],
  slide_whistle: [
    {
      id: 'mouthpiece_blow',
      label: 'Mouthpiece blow',
      shortName: 'Mouthpiece blow',
      description: 'Blowing a steady stream of air into the windway to initiate the acoustic whistle tone'
    },
    {
      id: 'piston_glide',
      label: 'Piston glide',
      shortName: 'Piston glide',
      description:
        'Pushing or pulling the internal metal piston rod while blowing to seamlessly slide the pitch up or down'
    },
    {
      id: 'piston_click',
      label: 'Piston Click',
      shortName: 'Piston Click',
      description:
        'Slamming the piston rod completely into the bottom of the whistle to create a mechanical, high-pitched plastic or metal click'
    }
  ],
  ratchet: [
    {
      id: 'crank_spin_snap',
      label: 'Crank spin snap',
      shortName: 'Crank spin snap',
      description:
        'Swinging or cranking the handle around a geared wheel, forcing rigid wooden flaps to loudly snap over the gear teeth'
    },
    {
      id: 'slow_crank_creak',
      label: 'Slow Crank Creak',
      shortName: 'Slow Crank C...',
      description:
        'Turning the handle ultra-slowly to let the wooden flaps click over individual gear teeth, producing a sparse, creaking wooden texture'
    }
  ],
  angklung: [
    {
      id: 'sentak',
      label: 'Sentak',
      shortName: 'Sentak',
      description:
        'A sudden, single horizontal jerk causing the loose bamboo tubes to hit the frame once for a staccato pop'
    },
    {
      id: 'geter',
      label: 'Geter',
      shortName: 'Geter',
      description:
        'Rapid, continuous shaking allowing the tubes to slide within the frame slots for a sustained chordal chime'
    },
    {
      id: 'frame_knock',
      label: 'Frame Knock',
      shortName: 'Frame Knock',
      description:
        'Tapping the solid horizontal bamboo base frame with a hard stick to produce a dry, woody pop completely separate from the tube chimes'
    }
  ],
  jaw_harp: [
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
  timpani: [
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
  kotsuzumi: [
    {
      id: 'pon',
      label: 'Pon',
      shortName: 'Pon',
      description:
        'Striking with the fingers while loosening the shoulder cords to let the drumhead slacken and the pitch drop smoothly'
    },
    {
      id: 'chi',
      label: 'Chi',
      shortName: 'Chi',
      description:
        'Striking the head while squeezing the shoulder cords incredibly tight to spike the pitch to its highest register'
    },
    {
      id: 'pu',
      label: 'Pu',
      shortName: 'Pu',
      description: 'A delicate, quiet single-finger tap in the center of the head used as a rhythmic placeholder'
    },
    {
      id: 'hoop_strike',
      label: 'Hoop Strike',
      shortName: 'Hoop Strike',
      description:
        'Striking the lacquered outer iron rings with the fingers to generate a sharp, metallic ping that contrasts with the sliding leather tones'
    }
  ],
  dhol: [
    {
      id: 'dagga',
      label: 'Dagga',
      shortName: 'Dagga',
      description:
        'A heavy, syncopated bass hit delivered to the goat-skin head using a thick, L-shaped curved wooden stick'
    },
    {
      id: 'tilli',
      label: 'Tilli',
      shortName: 'Tilli',
      description:
        'Rapid, stinging rolls and piercing rim-cracks played on the high-pitched synthetic head using a thin bamboo cane'
    },
    {
      id: 'stick_slide_glissando',
      label: 'Stick-Slide Glissando',
      shortName: 'Stick-Slide ...',
      description:
        'Pressing the heavy L-stick firmly into the bass skin and dragging it outward toward the rim immediately after a strike to bend the pitch'
    }
  ],
  agogo: [
    {
      id: 'high_strike',
      label: 'High strike',
      shortName: 'High strike',
      description: 'Hitting the smaller bell to produce a bright, high-pitched metallic tone'
    },
    {
      id: 'low_strike',
      label: 'Low strike',
      shortName: 'Low strike',
      description: 'Hitting the larger bell to produce a resonant, low-pitched metallic tone'
    },
    {
      id: 'clap',
      label: 'Clap',
      shortName: 'Clap',
      description: 'Squeezing the flexible structural handle to clash the two bells directly together for a dry click'
    },
    {
      id: 'stick_drag',
      label: 'Stick Drag',
      shortName: 'Stick Drag',
      description:
        'Dragging the wooden stick rapidly across the welded seams or ridges of the iron bells to create a raspy, metallic guiro-like texture'
    }
  ],
  claves: [
    {
      id: 'strike',
      label: 'Strike',
      shortName: 'Strike',
      description:
        'Striking the active stick against the resting stick, which is cradled loosely over a cupped hand acting as an acoustic sound chamber'
    },
    {
      id: 'end_tap',
      label: 'End Tap',
      shortName: 'End Tap',
      description:
        'Striking the absolute tip of the active clave against the tip of the resting clave to create a higher, thinner, laser-focused wood click'
    }
  ],
  mechanical_keyboard: [
    {
      id: 'key_click',
      label: 'Key Click',
      shortName: 'Click',
      description:
        'Striking a single custom mechanical key with high precision, engaging a sharp, snappy, high-frequency Cherry MX Blue click.'
    },
    {
      id: 'spacebar',
      label: 'Spacebar Thump',
      shortName: 'Spacebar',
      description:
        'Striking the heavy plastic spacebar with a relaxed thumb, producing a hollow, deep, and spacious resonant thump.'
    },
    {
      id: 'enter_key',
      label: 'Enter Key Snap',
      shortName: 'Enter',
      description:
        'Forcefully bottoming out the heavy enter key, creating an extremely satisfying, high-volume tactile clack.'
    },
    {
      id: 'shift_hold',
      label: 'Shift Hold',
      shortName: 'Shift',
      description: 'Gently depressing the spring-loaded shift key to create a soft, muted sliding friction click.'
    },
    {
      id: 'backspace',
      label: 'Backspace Tap',
      shortName: 'Backspace',
      description: 'Executing a rapid double-press deletion tap, producing two distinct, high-speed micro-clicks.'
    }
  ],
  synsonics_drums: [
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
  hydraulic_piston: [
    {
      id: 'steam_hiss',
      label: 'Pneumatic Steam Hiss',
      shortName: 'Steam Hiss',
      description:
        'Opening the high-pressure release valve to purge compressed air, creating a rich, sustained, steam-like white noise hiss.'
    },
    {
      id: 'iron_stomp',
      label: 'Iron Anvil Stomp',
      shortName: 'Anvil Stomp',
      description:
        'Releasing the primary mechanical weight to strike the anvil plate, yielding a massive, echoing metal-on-metal drop impact.'
    },
    {
      id: 'gear_lock',
      label: 'Ratchet Gear Lock',
      shortName: 'Gear Lock',
      description:
        'Engaging the industrial spring-loaded ratchet gear, creating a sharp, high-tension spring lock click.'
    },
    {
      id: 'exhaust_clunk',
      label: 'Chamber Exhaust Clunk',
      shortName: 'Exhaust',
      description:
        'Cycling the internal exhaust combustion chambers to create a deep, heavy, low-frequency mechanical thud.'
    }
  ],
  bop_it: [
    {
      id: 'bop_it',
      label: 'Bop It Punch',
      shortName: 'Bop It',
      description:
        'Firmly smacking the central rubberized pressure plate of the classic electronic toy, triggering its signature high-mid plastic snap.'
    },
    {
      id: 'twist_it',
      label: 'Twist It Ratchet',
      shortName: 'Twist It',
      description:
        'Grasping and rotating the ribbed yellow dial to cycle through multiple mechanical gear-teeth clicks.'
    },
    {
      id: 'pull_it',
      label: 'Pull It Spring',
      shortName: 'Pull It',
      description:
        'Tugging the blue cylindrical knob outward, releasing a rubbery, springy tension pop as the slider returns.'
    },
    {
      id: 'shout_it',
      label: 'Shout It Screech',
      shortName: 'Shout It',
      description:
        'Yelling directly into the dynamic microphone to trigger a playful, high-pitched vocal resonance screech.'
    },
    {
      id: 'fail_buzz',
      label: 'Comedic Fail Buzz',
      shortName: 'Fail Buzz',
      description: 'Triggers a comedic, descending synthesizer buzz that mimics the classic "game over" warning horn.'
    },
    {
      id: 'victory_chime',
      label: 'Ascending Fanfare Chime',
      shortName: 'Victory',
      description: 'Plays a rapid, digital ascending major-triad chime representing a successful round completion.'
    }
  ],
  moo_box: [
    {
      id: 'grand_moo',
      label: 'Grand Cattle Moo',
      shortName: 'Grand Moo',
      description:
        'Fully inverting the traditional cylindrical tin to allow the weighted internal bellows to slide, releasing a deep, iconic cattle drone.'
    },
    {
      id: 'calf_moo',
      label: 'Calf Tilt Whine',
      shortName: 'Calf Moo',
      description: 'Swiftly tilting the box to trigger a shorter, higher-pitched, and hurried baby cow crying sound.'
    },
    {
      id: 'stuck_reed',
      label: 'Glitched Stuck Reed',
      shortName: 'Stuck Reed',
      description:
        'Obstructing or shaking the box during inversion to glitch the metallic reed, creating a raspy, buzzing, and choking half-drone.'
    },
    {
      id: 'tin_shake',
      label: 'Internal Weight Rattle',
      shortName: 'Tin Shake',
      description:
        'Vigorously shaking the tin shaker side-to-side, causing the internal lead balancing weight to chatter against the tin frame.'
    }
  ],
  pakhavaj: [
    {
      id: 'tha',
      label: 'Tha Bass',
      shortName: 'Tha',
      description:
        'Striking the center of the wet wheat-paste Bayan (bass head) with a flat palm, letting the deep booming bass resonate fully.'
    },
    {
      id: 'dhin',
      label: 'Dhin Ringing Bass',
      shortName: 'Dhin',
      description:
        'An open bass stroke on the left head using the fingers while letting the hand bounce, producing a warm ringing fundamental tone.'
    },
    {
      id: 'ta',
      label: 'Ta Treble Rim Slap',
      shortName: 'Ta',
      description:
        'Striking the outer rim of the Dayan (treble head) with the finger joints, generating a sharp, piercing, metallic slap.'
    },
    {
      id: 'ki',
      label: 'Ki Left Dampen',
      shortName: 'Ki',
      description:
        'Pressing the heel of the left hand firmly on the Bayan while hitting with fingers to produce a dry, completely muted slap.'
    },
    {
      id: 'na',
      label: 'Na Treble Edge Ring',
      shortName: 'Na',
      description:
        'Striking the absolute outer edge of the Dayan with a single finger, letting the treble skin ring out with brilliant harmonics.'
    },
    {
      id: 'tete',
      label: 'Tete Double Tap',
      shortName: 'Tete',
      description:
        'Alternating index and middle fingers in high-speed succession near the center of the Dayan to lay down dense rhythmic rolls.'
    },
    {
      id: 'ghe',
      label: 'Ghe Sliding Bass',
      shortName: 'Ghe',
      description:
        'Striking the Bayan bass head and sliding the heel of the hand across the wet wheat-paste to dynamically bend the pitch upward.'
    }
  ],
  binzasara: [
    {
      id: 'furu',
      label: 'Furu Cascading Wave',
      shortName: 'Furu',
      description:
        'Rippling the wooden slats in a wave-like snapping motion, releasing a domino-like rolling chatter cascade.'
    },
    {
      id: 'clap',
      label: 'Clap Block Smash',
      shortName: 'Clap',
      description:
        'Forcefully pushing both handles together to clash all wooden plates simultaneously, producing a solid, dry wooden strike.'
    },
    {
      id: 'rattle',
      label: 'Continuous Wood Rattle',
      shortName: 'Rattle',
      description:
        'Rapidly shaking the binzasara back and forth, keeping the slats in continuous, frantic wooden friction chatter.'
    },
    {
      id: 'snap',
      label: 'Single Wood Snap',
      shortName: 'Snap',
      description: 'Giving a single, snappy twist of the wrists to trigger a singular, laser-focused wood-plate pop.'
    }
  ],
  caxixi: [
    {
      id: 'straw_wall',
      label: 'Straw Wall Rattle',
      shortName: 'Straw',
      description:
        'Flicking the shaker horizontally to strike the seeds against the woven wicker wall, creating a soft, warm, organic splash.'
    },
    {
      id: 'gourd_bottom',
      label: 'Gourd Bottom Crack',
      shortName: 'Gourd',
      description:
        'Striking the seeds vertically against the hard calabash gourd base, releasing a sharp, loud, high-pitched crack.'
    },
    {
      id: 'flick_accent',
      label: 'Double Flick Accent',
      shortName: 'Flick',
      description:
        'Shaking the caxixi in a swift down-and-up whipping motion, producing a rapid, crisp double shake rattle.'
    },
    {
      id: 'muted_swoosh',
      label: 'Muted Swoosh',
      shortName: 'Swoosh',
      description:
        'Slowing moving the caxixi in an arc, sliding the seeds smoothly across the wicker interior for a soft, muffled air swoosh.'
    }
  ],
  slap_tubes: [
    {
      id: 'bass_boom',
      label: 'Bass Boom',
      shortName: 'Bass Boom',
      description: 'Deep, compressed low-end fundamental of the long PVC tube'
    },
    {
      id: 'low_pop',
      label: 'Low Pop',
      shortName: 'Low Pop',
      description: 'Resonant mid-low air column note'
    },
    {
      id: 'mid_bounce',
      label: 'Mid Bounce',
      shortName: 'Mid Bounce',
      description: 'Bright mid-range pitch bouncing'
    },
    {
      id: 'high_snap',
      label: 'High Snap',
      shortName: 'High Snap',
      description: 'Sharp, punchy upper harmonic snap'
    },
    {
      id: 'paddle_slap',
      label: 'Paddle Slap',
      shortName: 'Paddle',
      description: 'Dry, raw impact of rubber mallet on bare plastic edge'
    },
    {
      id: 'pipe_rim_click',
      label: 'Pipe Rim Click',
      shortName: 'Rim Click',
      description: 'Hard plastic stick click on the side shell'
    },
    {
      id: 'muted_thud',
      label: 'Muted Thud',
      shortName: 'Muted Thud',
      description: 'Striking while covering the opposite hole'
    },
    {
      id: 'slide_slur',
      label: 'Slide Slur',
      shortName: 'Slide Slur',
      description: 'Hitting while changing the length of a telescoping tube'
    }
  ],
  whistle_drum: [
    {
      id: 'clay_bass',
      label: 'Clay Bass',
      shortName: 'Clay Bass',
      description: 'Earthy, hollow center thump of the pot body'
    },
    {
      id: 'sharp_chirp',
      label: 'Sharp Chirp',
      shortName: 'Chirp',
      description: 'Edge strike forcing an instant, high air whistle'
    },
    {
      id: 'bending_gliss',
      label: 'Bending Gliss',
      shortName: 'Gliss',
      description: 'Center hit while pressing the head to shift the whistle pitch'
    },
    {
      id: 'rim_tap',
      label: 'Rim Tap',
      shortName: 'Rim Tap',
      description: 'Crisp finger strike on the unglazed clay edge'
    },
    {
      id: 'slosh_splash',
      label: 'Slosh Splash',
      shortName: 'Splash',
      description: 'Rocking the pot to throw internal water against the whistle port'
    },
    {
      id: 'muted_pip',
      label: 'Muted Pip',
      shortName: 'Muted Pip',
      description: 'Extremely short, choked air pop'
    },
    {
      id: 'double_chirp',
      label: 'Double Chirp',
      shortName: 'Trill',
      description: 'A rapid-fire two-finger grace note burst'
    },
    {
      id: 'breath_echo',
      label: 'Breath Echo',
      shortName: 'Echo',
      description: 'Soft hand strike that lets the air chamber hiss down'
    }
  ],
  singing_bowl: [
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
  quijada: [
    {
      id: 'fist_slam_rattles',
      label: 'Fist Slam Rattles',
      shortName: 'Slam',
      description: 'Heavy punch to the side, causing a prolonged loose tooth buzz'
    },
    {
      id: 'teeth_rasp_scrape',
      label: 'Teeth Rasp Scrape',
      shortName: 'Scrape',
      description: 'Running a wooden stick quickly down the serrated tooth line'
    },
    {
      id: 'chin_bone_tap',
      label: 'Chin Bone Tap',
      shortName: 'Tap',
      description: 'A dry, hollow, skeletal click on the frontal bone chin'
    },
    {
      id: 'micro_flick',
      label: 'Micro-Flick',
      shortName: 'Flick',
      description: 'A light fingertip tap for a localized, highly controlled buzz'
    },
    {
      id: 'reverse_scrape',
      label: 'Reverse Scrape',
      shortName: 'Rev Scrape',
      description: 'An upward stick rub creating a tighter, shorter scrape'
    },
    {
      id: 'choked_jaw_pinch',
      label: 'Choked Jaw Pinch',
      shortName: 'Pinch',
      description: 'Slamming the side while squeezing the teeth to stop the ring'
    },
    {
      id: 'double_tap',
      label: 'Double Tap',
      shortName: 'Double Tap',
      description: 'Two quick, rattling bone slaps'
    },
    {
      id: 'hollow_socket_pop',
      label: 'Hollow Socket Pop',
      shortName: 'Socket Pop',
      description: 'Striking the empty joint hinge for a deeper, enclosed tone'
    }
  ],
  water_canister: [
    {
      id: 'slap_gliss',
      label: 'Slap Gliss',
      shortName: 'Gliss',
      description: 'Striking the container while sloshing water to compress air'
    },
    {
      id: 'neck_pop',
      label: 'Neck Pop',
      shortName: 'Neck Pop',
      description: 'Slapping the small top opening for a tight, hollow vacuum pop'
    },
    {
      id: 'outer_plastic_thud',
      label: 'Outer Plastic Thud',
      shortName: 'Thud',
      description: 'A flat hand hit on the dry side wall'
    },
    {
      id: 'liquid_slap',
      label: 'Liquid Slap',
      shortName: 'Splash',
      description: 'Slapping the side hard enough to hear the internal splash'
    },
    {
      id: 'bubble_gurgle',
      label: 'Bubble Gurgle',
      shortName: 'Gurgle',
      description: 'A self-contained rhythmic burst of air bubbles escaping'
    },
    {
      id: 'damped_plonk',
      label: 'Damped Plonk',
      shortName: 'Plonk',
      description: 'Hitting the canister base resting on a soft surface'
    },
    {
      id: 'finger_tap_rim',
      label: 'Finger Tap Rim',
      shortName: 'Tap Rim',
      description: 'Light, rhythmic clicking on the hard screw-threads'
    },
    {
      id: 'heavy_splash_drop',
      label: 'Heavy Splash Drop',
      shortName: 'Drop Splash',
      description: 'Lifting and slamming the container down for a heavy internal wave'
    }
  ],
  vintage_cash_register: [
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
  geiger_counter: [
    {
      id: 'isolated_click',
      label: 'Isolated Click',
      shortName: 'Click',
      description: 'A single, ultra-sharp, lo-fi diagnostic static pop'
    },
    {
      id: 'double_static_burst',
      label: 'Double Static Burst',
      shortName: 'Burst',
      description: 'Two erratic, microsecond pops grouped tightly together'
    },
    {
      id: 'rad_swarm',
      label: 'Rad Swarm',
      shortName: 'Swarm',
      description: 'A dense, white-noise-adjacent cascade of stochastic crackling'
    },
    {
      id: 'warning_beep',
      label: 'Warning Beep',
      shortName: 'Beep',
      description: 'The flat, piercing 2kHz internal warning alarm piezo pulse'
    },
    {
      id: 'chassis_dial_click',
      label: 'Chassis Dial Click',
      shortName: 'Dial',
      description: 'The heavy, physical plastic rotate click of the range knob'
    },
    {
      id: 'static_discharge_thump',
      label: 'Static Discharge Thump',
      shortName: 'Thump',
      description: 'A low-frequency electronic pop from a grounding short'
    },
    {
      id: 'meltdown_buzz',
      label: 'Meltdown Buzz',
      shortName: 'Buzz',
      description: 'A continuous, overloaded hardware signal scream'
    },
    {
      id: 'battery_test_chirp',
      label: 'Battery Test Chirp',
      shortName: 'Chirp',
      description: 'A tiny, clean, ascending digital status notification tone'
    }
  ],
  centrifugal_bullroarer: [
    {
      id: 'low_wind_whine',
      label: 'Low Wind Whine',
      shortName: 'Whine',
      description: 'The deep, ghostly, rhythmic air-shearing roar of a slow rotation'
    },
    {
      id: 'high_speed_scream',
      label: 'High Speed Scream',
      shortName: 'Scream',
      description: 'The piercing, high-velocity aerodynamic friction whistle'
    },
    {
      id: 'string_snap',
      label: 'String Snap',
      shortName: 'Snap',
      description: 'The violent, structural tension pop of the cord changing rotation'
    },
    {
      id: 'ground_slap',
      label: 'Ground Slap',
      shortName: 'Slap',
      description: 'The accidental, wooden clatter of the slat clipping the floor'
    },
    {
      id: 'air_rip_flutter',
      label: 'Air Rip Flutter',
      shortName: 'Flutter',
      description: 'A sudden jerk causing a rapid, stuttering wind buffeting texture'
    },
    {
      id: 'wood_spine_tap',
      label: 'Wood Spine Tap',
      shortName: 'Tap Slat',
      description: 'Tapping the flat of the wooden slat directly with a finger'
    },
    {
      id: 'cord_friction_rub',
      label: 'Cord Friction Rub',
      shortName: 'Creak',
      description: 'The deep, dry creaking sound of the braided string twisting'
    },
    {
      id: 'descending_whimper',
      label: 'Descending Whimper',
      shortName: 'Whimper',
      description: 'The slowing, downward pitch drop as the spin loses momentum'
    }
  ],
  newtons_cradle: [
    {
      id: 'single_ball_clack',
      label: 'Single Ball Clack',
      shortName: 'Clack',
      description: 'The crisp, instantaneous, singular metal-on-metal click'
    },
    {
      id: 'continuous_ripple',
      label: 'Continuous Ripple',
      shortName: 'Ripple',
      description: 'The rhythmic, rapid-fire clack-clack-clack of all balls in motion'
    },
    {
      id: 'double_side_strike',
      label: 'Double Side Strike',
      shortName: 'Double',
      description: 'Two balls dropping from opposite sides simultaneously'
    },
    {
      id: 'damped_metal_thud',
      label: 'Damped Metal Thud',
      shortName: 'Muted',
      description: 'Grabbing the balls mid-swing to create a choked, metallic thud'
    },
    {
      id: 'string_tangle_snag',
      label: 'String Tangle Snag',
      shortName: 'Snag',
      description: 'The dry, plastic friction of the suspension wires twisting'
    },
    {
      id: 'chassis_frame_tap',
      label: 'Chassis Frame Tap',
      shortName: 'Frame Tap',
      description: 'Striking the hollow metal support frame with a fingernail'
    },
    {
      id: 'decaying_skitter',
      label: 'Decaying Skitter',
      shortName: 'Skitter',
      description: 'The natural, erratic losing-momentum micro-clicking as it stops'
    },
    {
      id: 'scrape_drag',
      label: 'Scrape Drag',
      shortName: 'Drag',
      description: 'Pulling a ball along the row rather than dropping it'
    }
  ],
  slime_plop_box: [
    {
      id: 'deep_suction_plop',
      label: 'Deep Suction Plop',
      shortName: 'Plop',
      description: 'The heavy, wet, vacuum-release sound of pulling an object'
    },
    {
      id: 'wet_surface_slap',
      label: 'Wet Surface Slap',
      shortName: 'Slap',
      description: 'A fast, flat hand strike on top of the gelatinous mass'
    },
    {
      id: 'air_pocket_pop',
      label: 'Air Pocket Pop',
      shortName: 'Pop',
      description: 'A sharp, gaseous squish-pop from a trapped air bubble bursting'
    },
    {
      id: 'squelch_stretch',
      label: 'Squelch Stretch',
      shortName: 'Stretch',
      description: 'The low-frequency tearing sound of pulling the viscous material'
    },
    {
      id: 'container_wall_squish',
      label: 'Container Wall Squish',
      shortName: 'Squish',
      description: 'The muffled, sliding sound of slime shifting against plastic'
    },
    {
      id: 'dripping_goblet_drop',
      label: 'Dripping Goblet Drop',
      shortName: 'Drop',
      description: 'A distinct, heavy, self-contained liquid drop impact'
    },
    {
      id: 'rapid_squelch_roll',
      label: 'Rapid Squelch Roll',
      shortName: 'Roll',
      description: 'A fast, stuttering multi-finger mud-like typing texture'
    },
    {
      id: 'damped_lid_snap',
      label: 'Damped Lid Snap',
      shortName: 'Snap Lid',
      description: 'Snapping the plastic lid onto the container while full'
    }
  ],
  talk_box: [
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
  mouth_tube_synth: [
    {
      id: 'wah_vocal',
      label: '"Wah"',
      shortName: 'Wah',
      description: 'The raw, expressive, throat-like open-vowel sub-bass thud'
    },
    {
      id: 'ooh_vocal',
      label: '"Ooh"',
      shortName: 'Ooh',
      description: 'The dark, enclosed, resonant low-frequency tube tone'
    },
    {
      id: 'ee_vocal',
      label: '"Ee"',
      shortName: 'Ee',
      description: 'The bright, nasal, high-harmonic electronic filter peak'
    },
    {
      id: 'plastic_hose_spit_pop',
      label: 'Spit-Pop',
      shortName: 'Pop',
      description: 'The dry, clicky pop of air pocket condensation in the tube'
    },
    {
      id: 'synth_carrier_buzz',
      label: 'Carrier Buzz',
      shortName: 'Buzz',
      description: 'A short, raw burst of the un-modulated synthesizer carrier'
    },
    {
      id: 'vocalized_fry',
      label: 'Vocalized Fry',
      shortName: 'Fry',
      description: 'A crackling, low-register guttural glitch sound'
    },
    {
      id: 'throat_choke_stop',
      label: 'Throat Choke Stop',
      shortName: 'Choke',
      description: 'Suddenly pinching the tube shut to cut the synth signal dead'
    },
    {
      id: 'formant_glide',
      label: 'Formant Glide',
      shortName: 'Glide',
      description: 'A rapid, sweeping vocal filter run from "Ooh" to "Ee"'
    }
  ]
};
export const instrumentMappings = {
  conga: {
    left: {
      up: 'bajo',
      down: 'abierto',
      left: 'manoteo',
      right: 'tapado',
      upLong: '',
      downLong: 'seco',
      leftLong: 'golpe_de_casco',
      rightLong: 'toque_tapado',
      trigger: 'bajo'
    },
    right: {
      up: 'bajo',
      down: 'abierto',
      left: 'manoteo',
      right: 'tapado',
      upLong: '',
      downLong: 'seco',
      leftLong: 'golpe_de_casco',
      rightLong: 'toque_tapado',
      trigger: 'abierto'
    }
  },
  djembe: {
    left: {
      up: 'bass',
      down: 'tone',
      left: 'slap',
      right: 'flam_roll',
      upLong: 'rim_click',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'bass'
    },
    right: {
      up: 'bass',
      down: 'tone',
      left: 'slap',
      right: 'flam_roll',
      upLong: 'rim_click',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'tone'
    }
  },
  bongo: {
    left: {
      up: 'martillo',
      down: 'open_tone',
      left: 'slap',
      right: 'mute_tap',
      upLong: 'glissando_de_dedo',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'martillo'
    },
    right: {
      up: 'martillo',
      down: 'open_tone',
      left: 'slap',
      right: 'mute_tap',
      upLong: 'glissando_de_dedo',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'open_tone'
    }
  },
  bata: {
    left: {
      up: 'abierto',
      down: 'tapado',
      left: 'chach_snap',
      right: 'cuerpo_knock',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'abierto'
    },
    right: {
      up: 'chach_snap',
      down: 'cuerpo_knock',
      left: 'abierto',
      right: 'tapado',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'chach_snap'
    }
  },
  pandero: {
    left: {
      up: 'open_edge_tone',
      down: 'choke_center_strike',
      left: 'rim_jingle_strike',
      right: 'sub_bass_hand_cup',
      upLong: 'thigh_slap_pop',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'open_edge_tone'
    },
    right: {
      up: 'open_edge_tone',
      down: 'choke_center_strike',
      left: 'rim_jingle_strike',
      right: 'sub_bass_hand_cup',
      upLong: 'thigh_slap_pop',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'choke_center_strike'
    }
  },
  barril: {
    left: {
      up: 'abierto',
      down: 'seco',
      left: 'cu',
      right: 'choking_hand',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'abierto'
    },
    right: {
      up: 'abierto',
      down: 'seco',
      left: 'cu',
      right: 'choking_hand',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'seco'
    }
  },
  bombo: {
    left: {
      up: 'golpe_de_parche',
      down: 'golpe_de_aro',
      left: 'golpe_de_parche_apagado',
      right: 'golpe_de_casco',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'golpe_de_parche'
    },
    right: {
      up: 'golpe_de_parche',
      down: 'golpe_de_aro',
      left: 'golpe_de_parche_apagado',
      right: 'golpe_de_casco',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'golpe_de_aro'
    }
  },
  tabla: {
    left: {
      up: 'dayan_na_ta',
      down: 'dayan_tin',
      left: 'dayan_tun',
      right: 'bayan_ga_ghe',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: 'bayan_ka_ke',
      trigger: 'dayan_na_ta'
    },
    right: {
      up: 'dayan_na_ta',
      down: 'dayan_tin',
      left: 'dayan_tun',
      right: 'bayan_ga_ghe',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: 'bayan_ka_ke',
      trigger: 'dayan_tin'
    }
  },
  darbuka: {
    left: {
      up: 'dum',
      down: 'tek',
      left: 'ka',
      right: 'slap',
      upLong: 'finger_roll',
      downLong: 'under_rim_snap',
      leftLong: '',
      rightLong: '',
      trigger: 'dum'
    },
    right: {
      up: 'dum',
      down: 'tek',
      left: 'ka',
      right: 'slap',
      upLong: 'finger_roll',
      downLong: 'under_rim_snap',
      leftLong: '',
      rightLong: '',
      trigger: 'tek'
    }
  },
  timbales: {
    left: {
      up: 'timbales_open',
      down: 'rimshot',
      left: 'paila',
      right: 'timbales_muff',
      upLong: 'bell',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'timbales_open'
    },
    right: {
      up: 'timbales_open',
      down: 'rimshot',
      left: 'paila',
      right: 'timbales_muff',
      upLong: 'bell',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'rimshot'
    }
  },
  cajon: {
    left: {
      up: 'bass_tone',
      down: 'corner_slap',
      left: 'high_finger_snap',
      right: 'tapado',
      upLong: 'side_knock',
      downLong: 'heel_slide_pitch_bend',
      leftLong: '',
      rightLong: '',
      trigger: 'bass_tone'
    },
    right: {
      up: 'bass_tone',
      down: 'corner_slap',
      left: 'high_finger_snap',
      right: 'tapado',
      upLong: 'side_knock',
      downLong: 'heel_slide_pitch_bend',
      leftLong: '',
      rightLong: '',
      trigger: 'corner_slap'
    }
  },
  candombe: {
    left: {
      up: 'mano',
      down: 'palo',
      left: 'trigro_madera',
      right: 'cu_stave_rake',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'mano'
    },
    right: {
      up: 'mano',
      down: 'palo',
      left: 'trigro_madera',
      right: 'cu_stave_rake',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'palo'
    }
  },
  gwoka: {
    left: {
      up: 'boul',
      down: 'mak',
      left: 'tak_rim_strike',
      right: 'choke_muff',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'boul'
    },
    right: {
      up: 'boul',
      down: 'mak',
      left: 'tak_rim_strike',
      right: 'choke_muff',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'mak'
    }
  },
  tanbou: {
    left: {
      up: 'center_palm_strike',
      down: 'edge_finger_snap',
      left: 'hand_foot_pitch_bend_press',
      right: 'side_stave_strike',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'center_palm_strike'
    },
    right: {
      up: 'center_palm_strike',
      down: 'edge_finger_snap',
      left: 'hand_foot_pitch_bend_press',
      right: 'side_stave_strike',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'edge_finger_snap'
    }
  },
  chinese: {
    left: {
      up: 'center_strike',
      down: 'glancing_blow',
      left: 'aro',
      right: 'stick_shaft_clack',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'center_strike'
    },
    right: {
      up: 'center_strike',
      down: 'glancing_blow',
      left: 'aro',
      right: 'stick_shaft_clack',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'glancing_blow'
    }
  },
  daiko: {
    left: {
      up: 'don',
      down: 'do_ko',
      left: 'k',
      right: 'bachi_clack',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'don'
    },
    right: {
      up: 'don',
      down: 'do_ko',
      left: 'k',
      right: 'bachi_clack',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'do_ko'
    }
  },
  bodhran: {
    left: {
      up: 'tipper_roll',
      down: 'rimshot',
      left: 'back_hand_pitch_glide',
      right: 'back_hand_pressure_damp',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'tipper_roll'
    },
    right: {
      up: 'tipper_roll',
      down: 'rimshot',
      left: 'back_hand_pitch_glide',
      right: 'back_hand_pressure_damp',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'rimshot'
    }
  },
  talkingdrum: {
    left: {
      up: 'squeeze_cord_pitch_glide',
      down: 'curved_stick_strike',
      left: 'non_dominant_finger_tap',
      right: 'shell_knock',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'squeeze_cord_pitch_glide'
    },
    right: {
      up: 'squeeze_cord_pitch_glide',
      down: 'curved_stick_strike',
      left: 'non_dominant_finger_tap',
      right: 'shell_knock',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'curved_stick_strike'
    }
  },
  cuica: {
    left: {
      up: 'internal_stick_rub',
      down: 'external_thumb_press',
      left: 'high_to_low_slide',
      right: 'rim_tap',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'internal_stick_rub'
    },
    right: {
      up: 'internal_stick_rub',
      down: 'external_thumb_press',
      left: 'high_to_low_slide',
      right: 'rim_tap',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'external_thumb_press'
    }
  },
  doira: {
    left: {
      up: 'doira_dum',
      down: 'doira_tak',
      left: 'doira_kah',
      right: 'doira_muff',
      upLong: 'doira_snap',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'doira_dum'
    },
    right: {
      up: 'doira_dum',
      down: 'doira_tak',
      left: 'doira_kah',
      right: 'doira_muff',
      upLong: 'doira_snap',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'doira_tak'
    }
  },
  uchiwadaiko: {
    left: {
      up: 'fan_head_slap',
      down: 'handle_knock',
      left: 'rim_click',
      right: 'rapid_drum_roll',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'fan_head_slap'
    },
    right: {
      up: 'fan_head_slap',
      down: 'handle_knock',
      left: 'rim_click',
      right: 'rapid_drum_roll',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'handle_knock'
    }
  },
  oceandrum: {
    left: {
      up: 'rolling_swirl',
      down: 'frame_tap',
      left: 'sudden_frame_tilt',
      right: 'bead_shake_shimmer',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'rolling_swirl'
    },
    right: {
      up: 'rolling_swirl',
      down: 'frame_tap',
      left: 'sudden_frame_tilt',
      right: 'bead_shake_shimmer',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'frame_tap'
    }
  },
  janggu: {
    left: {
      up: 'kung',
      down: 'chae',
      left: 'hoop_rim_click',
      right: 'center_stick_mute',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'kung'
    },
    right: {
      up: 'kung',
      down: 'chae',
      left: 'hoop_rim_click',
      right: 'center_stick_mute',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'chae'
    }
  },
  zabumba: {
    left: {
      up: 'baqueta_bass',
      down: 'bacalhau_tap',
      left: 'hoop_click',
      right: 'hand_slap',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'baqueta_bass'
    },
    right: {
      up: 'baqueta_bass',
      down: 'bacalhau_tap',
      left: 'hoop_click',
      right: 'hand_slap',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'bacalhau_tap'
    }
  },
  mridangam: {
    left: {
      up: 'tha',
      down: 'thom',
      left: 'nam',
      right: 'dhi_thei',
      upLong: 'chapu',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'tha'
    },
    right: {
      up: 'tha',
      down: 'thom',
      left: 'nam',
      right: 'dhi_thei',
      upLong: 'chapu',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'thom'
    }
  },
  udu: {
    left: {
      up: 'ceramic_side_body_slap',
      down: 'mouth_port_palm_pop',
      left: 'neck_scratch',
      right: 'ceramic_finger_tap',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'ceramic_side_body_slap'
    },
    right: {
      up: 'ceramic_side_body_slap',
      down: 'mouth_port_palm_pop',
      left: 'neck_scratch',
      right: 'ceramic_finger_tap',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'mouth_port_palm_pop'
    }
  },
  thunderdrum: {
    left: {
      up: 'spring_mallet_strike',
      down: 'cylinder_shake_rumble',
      left: 'head_tap',
      right: 'spring_scrape',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'spring_mallet_strike'
    },
    right: {
      up: 'spring_mallet_strike',
      down: 'cylinder_shake_rumble',
      left: 'head_tap',
      right: 'spring_scrape',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'cylinder_shake_rumble'
    }
  },
  waterdrums: {
    left: {
      up: 'gourd_boom',
      down: 'water_splash',
      left: 'water_slap',
      right: 'gourd_mute',
      upLong: 'water_drip',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'gourd_boom'
    },
    right: {
      up: 'gourd_boom',
      down: 'water_splash',
      left: 'water_slap',
      right: 'gourd_mute',
      upLong: 'water_drip',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'water_splash'
    }
  },
  vibraslap: {
    left: {
      up: 'ball_palm_strike',
      down: 'soundbox_strike',
      left: 'wire_twang',
      right: 'short_buzz',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'ball_palm_strike'
    },
    right: {
      up: 'ball_palm_strike',
      down: 'soundbox_strike',
      left: 'wire_twang',
      right: 'short_buzz',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'soundbox_strike'
    }
  },
  flexatone: {
    left: {
      up: 'handle_shake_roll',
      down: 'thumb_pitch_bend',
      left: 'frame_knock',
      right: 'blade_flick_down',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'handle_shake_roll'
    },
    right: {
      up: 'handle_shake_roll',
      down: 'thumb_pitch_bend',
      left: 'frame_knock',
      right: 'blade_flick_down',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'thumb_pitch_bend'
    }
  },
  waterphone: {
    left: {
      up: 'cello_rod_bow_stroke',
      down: 'rod_mallet_tap',
      left: 'basin_tilt_water_shift',
      right: 'bottom_basin_hand_slap',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'cello_rod_bow_stroke'
    },
    right: {
      up: 'cello_rod_bow_stroke',
      down: 'rod_mallet_tap',
      left: 'basin_tilt_water_shift',
      right: 'bottom_basin_hand_slap',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'rod_mallet_tap'
    }
  },
  handpan: {
    left: {
      up: 'ding',
      down: 'gu',
      left: 'tone_field_tap',
      right: 'interstitial_tap',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'ding'
    },
    right: {
      up: 'ding',
      down: 'gu',
      left: 'tone_field_tap',
      right: 'interstitial_tap',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'gu'
    }
  },
  steelpan: {
    left: {
      up: 'indentation_strike',
      down: 'rapid_chordal_roll',
      left: 'rim_ring',
      right: 'mute_slap',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'indentation_strike'
    },
    right: {
      up: 'indentation_strike',
      down: 'rapid_chordal_roll',
      left: 'rim_ring',
      right: 'mute_slap',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'rapid_chordal_roll'
    }
  },
  ghatam: {
    left: {
      up: 'belly_vacuum_pop',
      down: 'finger_flick_pop',
      left: 'mouth_open_slap',
      right: 'neck_rim_ring',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'belly_vacuum_pop'
    },
    right: {
      up: 'belly_vacuum_pop',
      down: 'finger_flick_pop',
      left: 'mouth_open_slap',
      right: 'neck_rim_ring',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'finger_flick_pop'
    }
  },
  daf: {
    left: {
      up: 'dum',
      down: 'tak',
      left: 'zanjir',
      right: 'frame_slap',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'dum'
    },
    right: {
      up: 'dum',
      down: 'tak',
      left: 'zanjir',
      right: 'frame_slap',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'tak'
    }
  },
  riq: {
    left: {
      up: 'dum',
      down: 'tak',
      left: 'jingle_shake',
      right: 'jingle_damp_split',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'dum'
    },
    right: {
      up: 'dum',
      down: 'tak',
      left: 'jingle_shake',
      right: 'jingle_damp_split',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'tak'
    }
  },
  surdo: {
    left: {
      up: 'open_strike',
      down: 'muted_mallet_strike',
      left: 'hand_keep_time_tap',
      right: 'rim_click',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'open_strike'
    },
    right: {
      up: 'open_strike',
      down: 'muted_mallet_strike',
      left: 'hand_keep_time_tap',
      right: 'rim_click',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'muted_mallet_strike'
    }
  },
  pandeiro: {
    left: {
      up: 'polegar',
      down: 'manoteo',
      left: 'chacoalho',
      right: 'rim_click',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'polegar'
    },
    right: {
      up: 'polegar',
      down: 'manoteo',
      left: 'chacoalho',
      right: 'rim_click',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'manoteo'
    }
  },
  tamborim: {
    left: {
      up: 'toque_aberto',
      down: 'virada',
      left: 'muted_back_finger_press',
      right: 'rim_shot',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'toque_aberto'
    },
    right: {
      up: 'toque_aberto',
      down: 'virada',
      left: 'muted_back_finger_press',
      right: 'rim_shot',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'virada'
    }
  },
  repinique: {
    left: {
      up: 'mano',
      down: 'baqueta',
      left: 'rimshot_crack',
      right: 'stick_slide_pitch_bend',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'mano'
    },
    right: {
      up: 'mano',
      down: 'baqueta',
      left: 'rimshot_crack',
      right: 'stick_slide_pitch_bend',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'baqueta'
    }
  },
  bendir: {
    left: {
      up: 'dum',
      down: 'tak',
      left: 'kah',
      right: 'snare_rattle_mute',
      upLong: 'fingernail_rim_rim',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'dum'
    },
    right: {
      up: 'dum',
      down: 'tak',
      left: 'kah',
      right: 'snare_rattle_mute',
      upLong: 'fingernail_rim_rim',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'tak'
    }
  },
  davul: {
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
  },
  ashiko: {
    left: {
      up: 'bass_tone',
      down: 'open_tone',
      left: 'slap_tone',
      right: 'aro_golpe',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'bass_tone'
    },
    right: {
      up: 'bass_tone',
      down: 'open_tone',
      left: 'slap_tone',
      right: 'aro_golpe',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'open_tone'
    }
  },
  dunun: {
    left: {
      up: 'open_strike',
      down: 'muted_strike',
      left: 'bell_strike',
      right: 'bell_rim_shot',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'open_strike'
    },
    right: {
      up: 'open_strike',
      down: 'muted_strike',
      left: 'bell_strike',
      right: 'bell_rim_shot',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'muted_strike'
    }
  },
  teponaztli: {
    left: {
      up: 'long_tongue_strike',
      down: 'short_tongue_strike',
      left: 'side_body_hit',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'long_tongue_strike'
    },
    right: {
      up: 'long_tongue_strike',
      down: 'short_tongue_strike',
      left: 'side_body_hit',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'short_tongue_strike'
    }
  },
  snare_drum: {
    left: {
      up: 'center_stick_hit',
      down: 'rimshot',
      left: 'cross_stick_rim_click',
      right: 'buzz_press_roll',
      upLong: 'rim_shot_mute',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'center_stick_hit'
    },
    right: {
      up: 'center_stick_hit',
      down: 'rimshot',
      left: 'cross_stick_rim_click',
      right: 'buzz_press_roll',
      upLong: 'rim_shot_mute',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'rimshot'
    }
  },
  shekere: {
    left: {
      up: 'bottom_palm_bass_pop',
      down: 'bead_net_shake',
      left: 'net_twist_pull_rub',
      right: 'neck_tap',
      upLong: 'mouth_slap_pop',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'bottom_palm_bass_pop'
    },
    right: {
      up: 'bottom_palm_bass_pop',
      down: 'bead_net_shake',
      left: 'net_twist_pull_rub',
      right: 'neck_tap',
      upLong: 'mouth_slap_pop',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'bead_net_shake'
    }
  },
  kanjira: {
    left: {
      up: 'split_finger_edge_tap',
      down: 'inner_skin_pitch_glide',
      left: '',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'split_finger_edge_tap'
    },
    right: {
      up: 'split_finger_edge_tap',
      down: 'inner_skin_pitch_glide',
      left: '',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'inner_skin_pitch_glide'
    }
  },
  tammorra: {
    left: {
      up: 'bass_center_pulse',
      down: 'finger_roll_friction_drag',
      left: 'rim_wood_crack',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'bass_center_pulse'
    },
    right: {
      up: 'bass_center_pulse',
      down: 'finger_roll_friction_drag',
      left: 'rim_wood_crack',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'finger_roll_friction_drag'
    }
  },
  framed_rumbla: {
    left: {
      up: 'rumbla_bass',
      down: 'rumbla_open',
      left: 'rumbla_slap',
      right: 'rumbla_mute',
      upLong: 'rumbla_tap',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'rumbla_bass'
    },
    right: {
      up: 'rumbla_bass',
      down: 'rumbla_open',
      left: 'rumbla_slap',
      right: 'rumbla_mute',
      upLong: 'rumbla_tap',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'rumbla_open'
    }
  },
  gran_cassa: {
    left: {
      up: 'glancing_arc_blow',
      down: 'secco_hit',
      left: 'hand_damping',
      right: 'shell_knock',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'glancing_arc_blow'
    },
    right: {
      up: 'glancing_arc_blow',
      down: 'secco_hit',
      left: 'hand_damping',
      right: 'shell_knock',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'secco_hit'
    }
  },
  lions_roar: {
    left: {
      up: 'rope_friction_pull_push',
      down: 'cylinder_tap',
      left: '',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'rope_friction_pull_push'
    },
    right: {
      up: 'rope_friction_pull_push',
      down: 'cylinder_tap',
      left: '',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'cylinder_tap'
    }
  },
  chocalho: {
    left: {
      up: 'linear_shake',
      down: 'accented_whip',
      left: '',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'linear_shake'
    },
    right: {
      up: 'linear_shake',
      down: 'accented_whip',
      left: '',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'accented_whip'
    }
  },
  alfaia: {
    left: {
      up: 'golpe',
      down: 'aro',
      left: 'stick_on_stick_hoop_rimshot',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'golpe'
    },
    right: {
      up: 'golpe',
      down: 'aro',
      left: 'stick_on_stick_hoop_rimshot',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'aro'
    }
  },
  log_drum: {
    left: {
      up: 'slat_center_tongue_pop',
      down: 'slat_edge_dead_stroke',
      left: 'bridge_strike',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'slat_center_tongue_pop'
    },
    right: {
      up: 'slat_center_tongue_pop',
      down: 'slat_edge_dead_stroke',
      left: 'bridge_strike',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'slat_edge_dead_stroke'
    }
  },
  temple_blocks: {
    left: {
      up: 'center_mallet_hit',
      down: 'lip_scrape',
      left: '',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'center_mallet_hit'
    },
    right: {
      up: 'center_mallet_hit',
      down: 'lip_scrape',
      left: '',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'lip_scrape'
    }
  },
  frog_rasp: {
    left: {
      up: 'spine_scrape',
      down: 'mouth_poke',
      left: 'stick_tip_tap',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'spine_scrape'
    },
    right: {
      up: 'spine_scrape',
      down: 'mouth_poke',
      left: 'stick_tip_tap',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'mouth_poke'
    }
  },
  spring_drum: {
    left: {
      up: 'spring_flick',
      down: 'cylinder_acoustic_wobble',
      left: 'rim_strike',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'spring_flick'
    },
    right: {
      up: 'spring_flick',
      down: 'cylinder_acoustic_wobble',
      left: 'rim_strike',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'cylinder_acoustic_wobble'
    }
  },
  thongophone: {
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
  },
  gubguba: {
    left: {
      up: 'string_pluck',
      down: 'string_tension_bend',
      left: '',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'string_pluck'
    },
    right: {
      up: 'string_pluck',
      down: 'string_tension_bend',
      left: '',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'string_tension_bend'
    }
  },
  cabasa: {
    left: {
      up: 'cylinder_twist',
      down: 'hand_tap',
      left: 'linear_shaft_tap',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'cylinder_twist'
    },
    right: {
      up: 'cylinder_twist',
      down: 'hand_tap',
      left: 'linear_shaft_tap',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'hand_tap'
    }
  },
  rainstick: {
    left: {
      up: 'vertical_inversion_slide',
      down: 'fast_tilt_crash',
      left: 'shell_knock',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'vertical_inversion_slide'
    },
    right: {
      up: 'vertical_inversion_slide',
      down: 'fast_tilt_crash',
      left: 'shell_knock',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'fast_tilt_crash'
    }
  },
  kokiriko: {
    left: {
      up: 'cascading_wave',
      down: 'single_clatter_click',
      left: 'side_slat_tap',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'cascading_wave'
    },
    right: {
      up: 'cascading_wave',
      down: 'single_clatter_click',
      left: 'side_slat_tap',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'single_clatter_click'
    }
  },
  guiro: {
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
  },
  spoons_bones: {
    left: {
      up: 'finger_rake_roll',
      down: 'thigh_to_hand_bounce',
      left: 'hand_flat_slap',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'finger_rake_roll'
    },
    right: {
      up: 'finger_rake_roll',
      down: 'thigh_to_hand_bounce',
      left: 'hand_flat_slap',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'thigh_to_hand_bounce'
    }
  },
  washboard: {
    left: {
      up: 'thimble_ridge_scrape',
      down: 'mounted_accessory_tap',
      left: 'spoon_click_clatter',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'thimble_ridge_scrape'
    },
    right: {
      up: 'thimble_ridge_scrape',
      down: 'mounted_accessory_tap',
      left: 'spoon_click_clatter',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'mounted_accessory_tap'
    }
  },
  friction_drum: {
    left: {
      up: 'rub_low',
      down: 'rub_high',
      left: '',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'rub_low'
    },
    right: {
      up: 'rub_low',
      down: 'rub_high',
      left: '',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'rub_high'
    }
  },
  kundu: {
    left: {
      up: 'center_skin_tap',
      down: 'rim_edge_pop',
      left: 'shell_scrape',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'center_skin_tap'
    },
    right: {
      up: 'center_skin_tap',
      down: 'rim_edge_pop',
      left: 'shell_scrape',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'rim_edge_pop'
    }
  },
  tar_drum: {
    left: {
      up: 'dum',
      down: 'tak',
      left: 'fingertip_roll_friction_drag',
      right: 'back_frame_scratch',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'dum'
    },
    right: {
      up: 'dum',
      down: 'tak',
      left: 'fingertip_roll_friction_drag',
      right: 'back_frame_scratch',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'tak'
    }
  },
  gome: {
    left: {
      up: 'palm_bass',
      down: 'corner_slap',
      left: 'foot_pitch_bend',
      right: 'heel_stamp',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'palm_bass'
    },
    right: {
      up: 'palm_bass',
      down: 'corner_slap',
      left: 'foot_pitch_bend',
      right: 'heel_stamp',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'corner_slap'
    }
  },
  boomwhackers: {
    left: {
      up: 'surface_strike',
      down: 'body_strike',
      left: 'end_cap_pop',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'surface_strike'
    },
    right: {
      up: 'surface_strike',
      down: 'body_strike',
      left: 'end_cap_pop',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'body_strike'
    }
  },
  tank_drum: {
    left: {
      up: 'tongue_bounce',
      down: 'finger_slap',
      left: 'muted_tap',
      right: 'shell_strike',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'tongue_bounce'
    },
    right: {
      up: 'tongue_bounce',
      down: 'finger_slap',
      left: 'muted_tap',
      right: 'shell_strike',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'tongue_bounce'
    }
  },
  bell_tree: {
    left: {
      up: 'glissando_sweep',
      down: 'single_bell_tap',
      left: '',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'glissando_sweep'
    },
    right: {
      up: 'glissando_sweep',
      down: 'single_bell_tap',
      left: '',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'single_bell_tap'
    }
  },
  mark_tree: {
    left: {
      up: 'linear_wand_sweep',
      down: 'hand_ruffle_shimmer',
      left: 'wand_chime_ring',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'linear_wand_sweep'
    },
    right: {
      up: 'linear_wand_sweep',
      down: 'hand_ruffle_shimmer',
      left: 'wand_chime_ring',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'hand_ruffle_shimmer'
    }
  },
  slide_whistle: {
    left: {
      up: 'mouthpiece_blow',
      down: 'piston_glide',
      left: 'piston_click',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'mouthpiece_blow'
    },
    right: {
      up: 'mouthpiece_blow',
      down: 'piston_glide',
      left: 'piston_click',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'piston_glide'
    }
  },
  ratchet: {
    left: {
      up: 'crank_spin_snap',
      down: 'slow_crank_creak',
      left: '',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'crank_spin_snap'
    },
    right: {
      up: 'crank_spin_snap',
      down: 'slow_crank_creak',
      left: '',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'slow_crank_creak'
    }
  },
  angklung: {
    left: {
      up: 'sentak',
      down: 'geter',
      left: 'frame_knock',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'sentak'
    },
    right: {
      up: 'sentak',
      down: 'geter',
      left: 'frame_knock',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'geter'
    }
  },
  jaw_harp: {
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
  },
  timpani: {
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
  },
  kotsuzumi: {
    left: {
      up: 'pon',
      down: 'chi',
      left: 'pu',
      right: 'hoop_strike',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'pon'
    },
    right: {
      up: 'pon',
      down: 'chi',
      left: 'pu',
      right: 'hoop_strike',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'chi'
    }
  },
  dhol: {
    left: {
      up: 'dagga',
      down: 'tilli',
      left: 'stick_slide_glissando',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'dagga'
    },
    right: {
      up: 'dagga',
      down: 'tilli',
      left: 'stick_slide_glissando',
      right: '',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'tilli'
    }
  },
  agogo: {
    left: {
      up: 'high_strike',
      down: 'low_strike',
      left: 'clap',
      right: 'stick_drag',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'high_strike'
    },
    right: {
      up: 'high_strike',
      down: 'low_strike',
      left: 'clap',
      right: 'stick_drag',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'low_strike'
    }
  },
  claves: {
    left: {
      up: 'strike',
      down: 'end_tap',
      left: 'wooden_rub',
      right: 'cup_strike',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'strike'
    },
    right: {
      up: 'strike',
      down: 'end_tap',
      left: 'wooden_rub',
      right: 'cup_strike',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'end_tap'
    }
  },
  mechanical_keyboard: {
    left: {
      up: 'key_click',
      down: 'spacebar',
      left: 'backspace',
      right: 'enter_key',
      upLong: 'shift_hold',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'key_click'
    },
    right: {
      up: 'key_click',
      down: 'spacebar',
      left: 'backspace',
      right: 'enter_key',
      upLong: 'shift_hold',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'enter_key'
    }
  },
  synsonics_drums: {
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
  },
  hydraulic_piston: {
    left: {
      up: 'steam_hiss',
      down: 'iron_stomp',
      left: 'gear_lock',
      right: 'exhaust_clunk',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'iron_stomp'
    },
    right: {
      up: 'steam_hiss',
      down: 'iron_stomp',
      left: 'gear_lock',
      right: 'exhaust_clunk',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'steam_hiss'
    }
  },
  bop_it: {
    left: {
      up: 'bop_it',
      down: 'twist_it',
      left: 'pull_it',
      right: 'shout_it',
      upLong: 'victory_chime',
      downLong: 'fail_buzz',
      leftLong: '',
      rightLong: '',
      trigger: 'bop_it'
    },
    right: {
      up: 'bop_it',
      down: 'twist_it',
      left: 'pull_it',
      right: 'shout_it',
      upLong: 'victory_chime',
      downLong: 'fail_buzz',
      leftLong: '',
      rightLong: '',
      trigger: 'bop_it'
    }
  },
  moo_box: {
    left: {
      up: 'grand_moo',
      down: 'calf_moo',
      left: 'stuck_reed',
      right: 'tin_shake',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'grand_moo'
    },
    right: {
      up: 'grand_moo',
      down: 'calf_moo',
      left: 'stuck_reed',
      right: 'tin_shake',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'calf_moo'
    }
  },
  pakhavaj: {
    left: {
      up: 'ta',
      down: 'tha',
      left: 'ki',
      right: 'na',
      upLong: 'dhin',
      downLong: 'tete',
      leftLong: 'ghe',
      rightLong: '',
      trigger: 'tha'
    },
    right: {
      up: 'ta',
      down: 'tha',
      left: 'ki',
      right: 'na',
      upLong: 'dhin',
      downLong: 'tete',
      leftLong: 'ghe',
      rightLong: '',
      trigger: 'ta'
    }
  },
  binzasara: {
    left: {
      up: 'furu',
      down: 'clap',
      left: 'rattle',
      right: 'snap',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'furu'
    },
    right: {
      up: 'furu',
      down: 'clap',
      left: 'rattle',
      right: 'snap',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'clap'
    }
  },
  caxixi: {
    left: {
      up: 'straw_wall',
      down: 'gourd_bottom',
      left: 'flick_accent',
      right: 'muted_swoosh',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'straw_wall'
    },
    right: {
      up: 'straw_wall',
      down: 'gourd_bottom',
      left: 'flick_accent',
      right: 'muted_swoosh',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'gourd_bottom'
    }
  },
  slap_tubes: {
    left: {
      up: 'bass_boom',
      down: 'low_pop',
      left: 'mid_bounce',
      right: 'high_snap',
      upLong: 'paddle_slap',
      downLong: 'pipe_rim_click',
      leftLong: 'muted_thud',
      rightLong: 'slide_slur',
      trigger: 'bass_boom'
    },
    right: {
      up: 'bass_boom',
      down: 'low_pop',
      left: 'mid_bounce',
      right: 'high_snap',
      upLong: 'paddle_slap',
      downLong: 'pipe_rim_click',
      leftLong: 'muted_thud',
      rightLong: 'slide_slur',
      trigger: 'low_pop'
    }
  },
  whistle_drum: {
    left: {
      up: 'clay_bass',
      down: 'sharp_chirp',
      left: 'bending_gliss',
      right: 'rim_tap',
      upLong: 'slosh_splash',
      downLong: 'muted_pip',
      leftLong: 'double_chirp',
      rightLong: 'breath_echo',
      trigger: 'clay_bass'
    },
    right: {
      up: 'clay_bass',
      down: 'sharp_chirp',
      left: 'bending_gliss',
      right: 'rim_tap',
      upLong: 'slosh_splash',
      downLong: 'muted_pip',
      leftLong: 'double_chirp',
      rightLong: 'breath_echo',
      trigger: 'sharp_chirp'
    }
  },
  singing_bowl: {
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
  },
  quijada: {
    left: {
      up: 'fist_slam_rattles',
      down: 'teeth_rasp_scrape',
      left: 'chin_bone_tap',
      right: 'micro_flick',
      upLong: 'reverse_scrape',
      downLong: 'choked_jaw_pinch',
      leftLong: 'double_tap',
      rightLong: 'hollow_socket_pop',
      trigger: 'fist_slam_rattles'
    },
    right: {
      up: 'fist_slam_rattles',
      down: 'teeth_rasp_scrape',
      left: 'chin_bone_tap',
      right: 'micro_flick',
      upLong: 'reverse_scrape',
      downLong: 'choked_jaw_pinch',
      leftLong: 'double_tap',
      rightLong: 'hollow_socket_pop',
      trigger: 'teeth_rasp_scrape'
    }
  },
  water_canister: {
    left: {
      up: 'slap_gliss',
      down: 'neck_pop',
      left: 'outer_plastic_thud',
      right: 'liquid_slap',
      upLong: 'bubble_gurgle',
      downLong: 'damped_plonk',
      leftLong: 'finger_tap_rim',
      rightLong: 'heavy_splash_drop',
      trigger: 'slap_gliss'
    },
    right: {
      up: 'slap_gliss',
      down: 'neck_pop',
      left: 'outer_plastic_thud',
      right: 'liquid_slap',
      upLong: 'bubble_gurgle',
      downLong: 'damped_plonk',
      leftLong: 'finger_tap_rim',
      rightLong: 'heavy_splash_drop',
      trigger: 'neck_pop'
    }
  },
  vintage_cash_register: {
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
  },
  geiger_counter: {
    left: {
      up: 'isolated_click',
      down: 'double_static_burst',
      left: 'rad_swarm',
      right: 'warning_beep',
      upLong: 'chassis_dial_click',
      downLong: 'static_discharge_thump',
      leftLong: 'meltdown_buzz',
      rightLong: 'battery_test_chirp',
      trigger: 'isolated_click'
    },
    right: {
      up: 'isolated_click',
      down: 'double_static_burst',
      left: 'rad_swarm',
      right: 'warning_beep',
      upLong: 'chassis_dial_click',
      downLong: 'static_discharge_thump',
      leftLong: 'meltdown_buzz',
      rightLong: 'battery_test_chirp',
      trigger: 'double_static_burst'
    }
  },
  centrifugal_bullroarer: {
    left: {
      up: 'low_wind_whine',
      down: 'high_speed_scream',
      left: 'string_snap',
      right: 'ground_slap',
      upLong: 'air_rip_flutter',
      downLong: 'wood_spine_tap',
      leftLong: 'cord_friction_rub',
      rightLong: 'descending_whimper',
      trigger: 'low_wind_whine'
    },
    right: {
      up: 'low_wind_whine',
      down: 'high_speed_scream',
      left: 'string_snap',
      right: 'ground_slap',
      upLong: 'air_rip_flutter',
      downLong: 'wood_spine_tap',
      leftLong: 'cord_friction_rub',
      rightLong: 'descending_whimper',
      trigger: 'high_speed_scream'
    }
  },
  newtons_cradle: {
    left: {
      up: 'single_ball_clack',
      down: 'continuous_ripple',
      left: 'double_side_strike',
      right: 'damped_metal_thud',
      upLong: 'string_tangle_snag',
      downLong: 'chassis_frame_tap',
      leftLong: 'decaying_skitter',
      rightLong: 'scrape_drag',
      trigger: 'single_ball_clack'
    },
    right: {
      up: 'single_ball_clack',
      down: 'continuous_ripple',
      left: 'double_side_strike',
      right: 'damped_metal_thud',
      upLong: 'string_tangle_snag',
      downLong: 'chassis_frame_tap',
      leftLong: 'decaying_skitter',
      rightLong: 'scrape_drag',
      trigger: 'continuous_ripple'
    }
  },
  slime_plop_box: {
    left: {
      up: 'deep_suction_plop',
      down: 'wet_surface_slap',
      left: 'air_pocket_pop',
      right: 'squelch_stretch',
      upLong: 'container_wall_squish',
      downLong: 'dripping_goblet_drop',
      leftLong: 'rapid_squelch_roll',
      rightLong: 'damped_lid_snap',
      trigger: 'deep_suction_plop'
    },
    right: {
      up: 'deep_suction_plop',
      down: 'wet_surface_slap',
      left: 'air_pocket_pop',
      right: 'squelch_stretch',
      upLong: 'container_wall_squish',
      downLong: 'dripping_goblet_drop',
      leftLong: 'rapid_squelch_roll',
      rightLong: 'damped_lid_snap',
      trigger: 'wet_surface_slap'
    }
  },
  talk_box: {
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
  },
  mouth_tube_synth: {
    left: {
      up: 'wah_vocal',
      down: 'ooh_vocal',
      left: 'ee_vocal',
      right: 'plastic_hose_spit_pop',
      upLong: 'synth_carrier_buzz',
      downLong: 'vocalized_fry',
      leftLong: 'throat_choke_stop',
      rightLong: 'formant_glide',
      trigger: 'wah_vocal'
    },
    right: {
      up: 'wah_vocal',
      down: 'ooh_vocal',
      left: 'ee_vocal',
      right: 'plastic_hose_spit_pop',
      upLong: 'synth_carrier_buzz',
      downLong: 'vocalized_fry',
      leftLong: 'throat_choke_stop',
      rightLong: 'formant_glide',
      trigger: 'ooh_vocal'
    }
  }
};

export function getVisibleDrums() {
  const inst = state.currentInstrument;
  const instDef = drumTypes[inst];
  if (!instDef) return [];
  const drums = instDef.drums || [];
  const selection = state.drumSelection;
  if (!selection) return [];

  if (selection === 'all' || selection === 'both') {
    return drums;
  }

  // Support comma-separated checked IDs
  const parts = selection.split(',').map((p) => p.trim());
  const matchedDrums = drums.filter((d) => parts.includes(String(d.id)));
  if (matchedDrums.length > 0) {
    return matchedDrums;
  }

  // Single drum selections by lowercase id/label (legacy/other fallback)
  if (drums.length > 1) {
    const matched = drums.find((d) => {
      const labelLower = d.label.toLowerCase();
      const idStr = String(d.id).toLowerCase();
      return labelLower.includes(selection) || idStr === selection || selection.includes(labelLower);
    });
    if (matched) return [matched];
  }
  return drums;
}
export function getDefaultDrumSelection(inst) {
  if (
    [
      'conga',
      'bata',
      'pandero',
      'candombe',
      'chinese',
      'daiko',
      'dunun',
      'temple_blocks',
      'thongophone',
      'boomwhackers',
      'tank_drum',
      'angklung'
    ].includes(inst)
  ) {
    return 'all';
  }
  if (['barril', 'tabla', 'gwoka', 'janggu', 'mridangam', 'handpan', 'log_drum', 'dhol'].includes(inst)) {
    return 'both';
  }
  return 'all';
}
