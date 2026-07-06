// Drum Specifications and Instruments Configuration Module
import { state } from './state.js';
import { playMembrane, playNoise, playTablaSlideUp } from './audio.js';

export const drumTypes = {
  conga: {
    name: 'Congas',
    defaultLeft: 2,
    defaultRight: 3,
    drums: [
      { id: 0, label: 'Requinto', pitchMult: 1.3, color: 'caramel', sizeValue: 17 },
      { id: 1, label: 'Quinto', pitchMult: 1.15, color: 'blonde-light', sizeValue: 18.5 },
      { id: 2, label: 'Conga', pitchMult: 1.0, color: 'blonde', sizeValue: 20 },
      { id: 3, label: 'Tumba', pitchMult: 0.85, color: 'darker', sizeValue: 21.5 },
      { id: 4, label: 'Super Tumba', pitchMult: 0.75, color: 'dark', sizeValue: 23 }
    ],
    sounds: {
      bass: (d) => playMembrane(65 * d.pitchMult, 0.7, 1.5, false),
      open: (d) => playMembrane(110 * d.pitchMult, 0.6, 1.0, false),
      slap: (d) => playMembrane(220 * d.pitchMult, 0.2, 1.2, true),
      muffled: (d) => playMembrane(120 * d.pitchMult, 0.15, 1.0, false),
      heeltoe: (d) => {
        if (state.isHeel) playMembrane(90 * d.pitchMult, 0.08, 1.0, false);
        else playMembrane(150 * d.pitchMult, 0.08, 1.0, false);
        state.isHeel = !state.isHeel;
      }
    },
    defaultLeft: 3, // Tumba
    defaultRight: 2 // Conga
  },
  djembe: {
    name: 'Djembe',
    drums: [{ id: 0, label: 'Lead Djembe', pitchMult: 1.0, color: 'caramel', sizeValue: 21 }],
    sounds: {
      bass: (d) => playMembrane(55 * d.pitchMult, 0.8, 1.4, false), // deep boom
      open: (d) => playMembrane(290 * d.pitchMult, 0.45, 1.0, false), // singing tone
      slap: (d) => {
        playMembrane(420 * d.pitchMult, 0.12, 1.1, true);
        playNoise(0.08, 1600, state.currentTiltVolume * 1.1); // Crisp high slap
      },
      muffled: (d) => playMembrane(280 * d.pitchMult, 0.1, 1.0, false),
      heeltoe: (d) => playMembrane(160 * d.pitchMult, 0.08, 1.0, false)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  bongo: {
    name: 'Bongos',
    drums: [
      { id: 0, label: 'Macho', pitchMult: 1.4, color: 'blonde-light', sizeValue: 16 },
      { id: 1, label: 'Hembra', pitchMult: 0.9, color: 'blonde', sizeValue: 20.5 }
    ],
    sounds: {
      bass: (d) => playMembrane((d.id === 0 ? 180 : 120) * d.pitchMult, 0.4, 1.2, false),
      open: (d) => playMembrane((d.id === 0 ? 380 : 180) * d.pitchMult, 0.3, 1.0, false),
      slap: (d) => {
        const f = (d.id === 0 ? 460 : 260) * d.pitchMult;
        playMembrane(f, 0.1, 1.05, true);
        playNoise(0.05, d.id === 0 ? 2500 : 1500, state.currentTiltVolume * 0.8);
      },
      muffled: (d) => playMembrane((d.id === 0 ? 300 : 150) * d.pitchMult, 0.1, 1.0, false),
      heeltoe: (d) => playMembrane((d.id === 0 ? 320 : 160) * d.pitchMult, 0.08, 1.0, false)
    },
    defaultLeft: 0, // Macho
    defaultRight: 1 // Hembra
  },
  bata: {
    name: 'Bata',
    drums: [
      { id: 0, label: 'Okónkolo', pitchMult: 1.5, color: 'caramel-light', sizeValue: 15 },
      { id: 1, label: 'Itótele', pitchMult: 1.1, color: 'caramel', sizeValue: 19 },
      { id: 2, label: 'Iyá', pitchMult: 0.75, color: 'dark', sizeValue: 23 }
    ],
    sounds: {
      enu_bass: (d) => {
        const baseId = parseInt(d.id);
        const f = baseId === 0 ? 180 : baseId === 1 ? 110 : 60;
        playMembrane(f * d.pitchMult, 0.5, 1.3, false);
        if (baseId === 2 || d.label.includes('Iyá')) {
          playNoise(0.18, 2200, state.currentTiltVolume * 0.6);
        }
      },
      enu_open: (d) => {
        const baseId = parseInt(d.id);
        const f = baseId === 0 ? 220 : baseId === 1 ? 140 : 75;
        playMembrane(f * d.pitchMult, 0.4, 1.0, false);
      },
      enu_muffled: (d) => {
        const baseId = parseInt(d.id);
        const f = baseId === 0 ? 220 : baseId === 1 ? 140 : 110;
        playMembrane(f * d.pitchMult, 0.1, 1.0, false);
      },
      chacha: (d) => {
        const baseId = parseInt(d.id);
        const f = baseId === 0 ? 380 : baseId === 1 ? 280 : 200;
        playMembrane(f * d.pitchMult, 0.12, 1.0, false);
        if (baseId === 2 || d.label.includes('Iyá')) {
          playNoise(0.1, 2800, state.currentTiltVolume * 0.4);
        }
      },
      bells: (d) => {
        const baseId = parseInt(d.id);
        if (baseId === 2 || d.label.includes('Iyá')) {
          playNoise(0.2, 2500, state.currentTiltVolume * 0.7);
        } else {
          const f = baseId === 0 ? 420 : 320;
          playMembrane(f * d.pitchMult, 0.06, 1.0, false);
        }
      },
      // Fallback bindings for standard touch names
      bass: (d) => drumTypes.bata.sounds.enu_bass(d),
      open: (d) => drumTypes.bata.sounds.enu_open(d),
      muffled: (d) => drumTypes.bata.sounds.enu_muffled(d),
      slap: (d) => drumTypes.bata.sounds.chacha(d),
      heeltoe: (d) => drumTypes.bata.sounds.bells(d)
    },
    defaultLeft: 1, // Itótele
    defaultRight: 2 // Iyá
  },
  pandero: {
    name: 'Pandero',
    drums: [
      { id: 0, label: 'Requinto', pitchMult: 1.3, color: 'blonde-light', sizeValue: 16 },
      { id: 1, label: 'Seguidor', pitchMult: 1.0, color: 'blonde', sizeValue: 19.5 },
      { id: 2, label: 'Buleador', pitchMult: 0.8, color: 'dark', sizeValue: 23 }
    ],
    sounds: {
      bass: (d) => playMembrane((d.id === 0 ? 180 : d.id === 1 ? 120 : 70) * d.pitchMult, 0.5, 1.3, false),
      open: (d) => playMembrane((d.id === 0 ? 280 : d.id === 1 ? 180 : 100) * d.pitchMult, 0.4, 1.0, false),
      slap: (d) => {
        const f = d.id === 0 ? 350 : d.id === 1 ? 220 : 150;
        playMembrane(f * d.pitchMult, 0.12, 1.1, true);
        playNoise(0.06, 1800, state.currentTiltVolume * 0.9);
      },
      muffled: (d) => playMembrane((d.id === 0 ? 280 : d.id === 1 ? 180 : 120) * d.pitchMult, 0.1, 1.0, false),
      heeltoe: (d) => playMembrane((d.id === 0 ? 300 : d.id === 1 ? 200 : 140) * d.pitchMult, 0.08, 1.0, false)
    },
    defaultLeft: 1, // Seguidor
    defaultRight: 0 // Requinto
  },
  barril: {
    name: 'Barril',
    drums: [
      { id: 0, label: 'Primo', pitchMult: 1.2, color: 'caramel', sizeValue: 18 },
      { id: 1, label: 'Buleador', pitchMult: 0.85, color: 'darker', sizeValue: 21.5 }
    ],
    sounds: {
      bass: (d) => playMembrane((d.id === 0 ? 95 : 75) * d.pitchMult, 0.65, 1.4, false),
      open: (d) => playMembrane((d.id === 0 ? 160 : 110) * d.pitchMult, 0.5, 1.0, false),
      slap: (d) => {
        const f = d.id === 0 ? 260 : 160;
        playMembrane(f * d.pitchMult, 0.15, 1.1, true);
        playNoise(0.08, 1600, state.currentTiltVolume * 0.85);
      },
      muffled: (d) => playMembrane((d.id === 0 ? 190 : 120) * d.pitchMult, 0.12, 1.0, false),
      heeltoe: (d) => playMembrane((d.id === 0 ? 180 : 130) * d.pitchMult, 0.08, 1.0, false)
    },
    defaultLeft: 1, // Buleador
    defaultRight: 0 // Primo
  },
  bombo: {
    name: 'Bombo',
    drums: [{ id: 0, label: 'Bombo', pitchMult: 1.0, color: 'dark', sizeValue: 21 }],
    sounds: {
      parche_bass: (d) => {
        playMembrane(55 * d.pitchMult, 0.9, 1.5, false);
        playMembrane(27.5 * d.pitchMult, 0.6, 1.8, false);
      },
      parche_open: (d) => {
        playMembrane(60 * d.pitchMult, 0.85, 1.6, false);
        playMembrane(30 * d.pitchMult, 0.5, 1.8, false);
      },
      parche_muffled: (d) => playMembrane(120 * d.pitchMult, 0.1, 1.0, false),
      aro_wood: (d) => {
        playMembrane(750 * d.pitchMult, 0.08, 1.0, false);
        playNoise(0.04, 3000, state.currentTiltVolume * 0.5);
      },
      aro_click: (d) => playMembrane(850 * d.pitchMult, 0.05, 1.0, false),
      // Fallbacks for standard touch names
      bass: (d) => drumTypes.bombo.sounds.parche_bass(d),
      open: (d) => drumTypes.bombo.sounds.parche_open(d),
      muffled: (d) => drumTypes.bombo.sounds.parche_muffled(d),
      slap: (d) => drumTypes.bombo.sounds.aro_wood(d),
      heeltoe: (d) => drumTypes.bombo.sounds.aro_click(d)
    },
    defaultLeft: 0, // Bombo
    defaultRight: 0 // Bombo
  },
  tabla: {
    name: 'Tabla',
    drums: [
      { id: 0, label: 'Bayan', pitchMult: 1.0, color: 'dark', sizeValue: 21 },
      { id: 1, label: 'Dayan', pitchMult: 1.0, color: 'caramel-light', sizeValue: 17 }
    ],
    sounds: {
      bayan_ga: (d) => {
        playTablaSlideUp(75 * d.pitchMult, 150 * d.pitchMult, 0.55);
      },
      bayan_ke: (d) => {
        playMembrane(130 * d.pitchMult, 0.08, 1.0, false);
      },
      dayan_ta: (d) => {
        playMembrane(320 * d.pitchMult, 0.08, 1.0, true);
      },
      dayan_na: (d) => {
        playMembrane(293.66 * d.pitchMult, 0.55, 1.0, false);
      },
      dayan_tin: (d) => {
        playMembrane(220 * d.pitchMult, 0.5, 1.0, false);
      },
      // Fallbacks for standard touch names
      bass: (d) => drumTypes.tabla.sounds.bayan_ga(d),
      open: (d) => drumTypes.tabla.sounds.dayan_na(d),
      muffled: (d) => drumTypes.tabla.sounds.bayan_ke(d),
      slap: (d) => drumTypes.tabla.sounds.dayan_ta(d),
      heeltoe: (d) => drumTypes.tabla.sounds.dayan_tin(d)
    },
    defaultLeft: 0, // Bayan
    defaultRight: 1 // Dayan
  },
  darbuka: {
    name: 'Darbuka',
    drums: [{ id: 0, label: 'Darbuka', pitchMult: 1.0, color: 'blonde-light', sizeValue: 20.5 }],
    sounds: {
      doum: (d) => playMembrane(90 * d.pitchMult, 0.5, 1.3, false),
      tak: (d) => {
        playMembrane(400 * d.pitchMult, 0.12, 1.0, false);
        playNoise(0.03, 3500, state.currentTiltVolume * 0.4);
      },
      sak: (d) => {
        playMembrane(350 * d.pitchMult, 0.08, 1.1, true);
        playNoise(0.08, 2000, state.currentTiltVolume * 1.1);
      },
      ka: (d) => playMembrane(380 * d.pitchMult, 0.06, 1.0, false),
      muffled: (d) => playMembrane(240 * d.pitchMult, 0.08, 1.0, false),
      // Fallbacks for standard touch names
      bass: (d) => drumTypes.darbuka.sounds.doum(d),
      open: (d) => drumTypes.darbuka.sounds.tak(d),
      slap: (d) => drumTypes.darbuka.sounds.sak(d),
      heeltoe: (d) => drumTypes.darbuka.sounds.ka(d)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  timbales: {
    name: 'Timbales',
    drums: [
      { id: 0, label: 'Macho', pitchMult: 1.2, color: 'blonde-light', sizeValue: 18 },
      { id: 1, label: 'Hembra', pitchMult: 0.85, color: 'blonde', sizeValue: 22 }
    ],
    sounds: {
      open: (d) => playMembrane((d.id === 0 ? 320 : 210) * d.pitchMult, 0.4, 1.0, false),
      rimshot: (d) => {
        playMembrane((d.id === 0 ? 450 : 300) * d.pitchMult, 0.1, 1.1, true);
        playNoise(0.08, d.id === 0 ? 2500 : 2000, state.currentTiltVolume * 1.1);
      },
      paila: (d) => {
        playMembrane(800 * d.pitchMult, 0.05, 1.0, false);
        playNoise(0.03, 3500, state.currentTiltVolume * 0.5);
      },
      muffled: (d) => playMembrane((d.id === 0 ? 350 : 250) * d.pitchMult, 0.1, 1.0, false),
      bell: (d) => {
        playMembrane(1200 * d.pitchMult, 0.15, 1.0, false); // synthetic cowbell ping
        playNoise(0.05, 4000, state.currentTiltVolume * 0.6);
      },
      // Fallbacks
      bass: (d) => drumTypes.timbales.sounds.muffled(d),
      slap: (d) => drumTypes.timbales.sounds.rimshot(d),
      heeltoe: (d) => drumTypes.timbales.sounds.paila(d)
    },
    defaultLeft: 0,
    defaultRight: 1
  },
  cajon: {
    name: 'Cajón',
    drums: [{ id: 0, label: 'Cajón', pitchMult: 1.0, color: 'caramel', sizeValue: 24 }],
    sounds: {
      bass: (d) => {
        playMembrane(50 * d.pitchMult, 0.7, 1.5, false); // deep boom
        playNoise(0.02, 500, state.currentTiltVolume * 0.5); // slight snare rattle
      },
      slap: (d) => {
        playMembrane(120 * d.pitchMult, 0.2, 1.0, false);
        playNoise(0.12, 2200, state.currentTiltVolume * 1.2); // strong snare rattle
      },
      edge: (d) => {
        playMembrane(200 * d.pitchMult, 0.15, 1.0, false);
        playNoise(0.08, 3000, state.currentTiltVolume * 1.0); // edge snap
      },
      tap: (d) => playMembrane(250 * d.pitchMult, 0.05, 1.0, false), // light ghost note
      // Fallbacks
      open: (d) => drumTypes.cajon.sounds.edge(d),
      muffled: (d) => drumTypes.cajon.sounds.tap(d),
      heeltoe: (d) => drumTypes.cajon.sounds.tap(d)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  candombe: {
    name: 'Candombe',
    drums: [
      { id: 0, label: 'Chico', pitchMult: 1.4, color: 'blonde-light', sizeValue: 16 },
      { id: 1, label: 'Repique', pitchMult: 1.0, color: 'caramel', sizeValue: 19.5 },
      { id: 2, label: 'Piano', pitchMult: 0.7, color: 'dark', sizeValue: 23.5 }
    ],
    sounds: {
      bass: (d) => playMembrane((d.id === 0 ? 140 : d.id === 1 ? 90 : 55) * d.pitchMult, 0.6, 1.4, false),
      open: (d) => playMembrane((d.id === 0 ? 240 : d.id === 1 ? 160 : 95) * d.pitchMult, 0.5, 1.1, false),
      slap: (d) => {
        const f = (d.id === 0 ? 320 : d.id === 1 ? 220 : 150) * d.pitchMult;
        playMembrane(f, 0.12, 1.0, true);
        playNoise(0.08, d.id === 0 ? 2500 : 1800, state.currentTiltVolume * 0.9);
      },
      muffled: (d) => playMembrane((d.id === 0 ? 220 : d.id === 1 ? 150 : 90) * d.pitchMult, 0.1, 1.0, false),
      heeltoe: (d) => {
        playMembrane((d.id === 0 ? 600 : d.id === 1 ? 500 : 400) * d.pitchMult, 0.05, 0.8, false);
        playNoise(0.06, 3000, state.currentTiltVolume * 0.7);
      }
    },
    defaultLeft: 2, // Piano
    defaultRight: 1 // Repique
  },
  gwoka: {
    name: 'Gwo Ka',
    drums: [
      { id: 0, label: 'Markeur', pitchMult: 1.15, color: 'caramel', sizeValue: 18.5 },
      { id: 1, label: 'Boula', pitchMult: 0.8, color: 'darker', sizeValue: 22.5 }
    ],
    sounds: {
      bass: (d) => playMembrane((d.id === 0 ? 85 : 55) * d.pitchMult, 0.75, 1.5, false),
      open: (d) => playMembrane((d.id === 0 ? 175 : 110) * d.pitchMult, 0.55, 1.1, false),
      slap: (d) => {
        const f = (d.id === 0 ? 280 : 190) * d.pitchMult;
        playMembrane(f, 0.15, 1.05, true);
        playNoise(0.1, d.id === 0 ? 2200 : 1500, state.currentTiltVolume * 1.0);
      },
      muffled: (d) => playMembrane((d.id === 0 ? 160 : 100) * d.pitchMult, 0.1, 1.0, false),
      heeltoe: (d) => playMembrane((d.id === 0 ? 240 : 150) * d.pitchMult, 0.08, 0.9, false)
    },
    defaultLeft: 1, // Boula
    defaultRight: 0 // Markeur
  },
  tanbou: {
    name: 'Tanbou',
    drums: [{ id: 0, label: 'Tanbou', pitchMult: 1.0, color: 'caramel', sizeValue: 21 }],
    sounds: {
      bass: (d) => playMembrane(65 * d.pitchMult, 0.75, 1.4, false),
      open: (d) => playMembrane(125 * d.pitchMult, 0.5, 1.1, false),
      slap: (d) => {
        playMembrane(250 * d.pitchMult, 0.15, 1.1, true);
        playNoise(0.08, 1800, state.currentTiltVolume * 0.9);
      },
      muffled: (d) => {
        playTablaSlideUp(110 * d.pitchMult, 180 * d.pitchMult, 0.4);
      },
      heeltoe: (d) => {
        playMembrane(450 * d.pitchMult, 0.06, 0.9, false);
        playNoise(0.04, 3200, state.currentTiltVolume * 0.5);
      }
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  chinese: {
    name: 'Dagu & Tanggu',
    drums: [
      { id: 0, label: 'Bangu', pitchMult: 1.6, color: 'caramel-light', sizeValue: 14 },
      { id: 1, label: 'Tanggu', pitchMult: 1.0, color: 'caramel', sizeValue: 19.5 },
      { id: 2, label: 'Dagu', pitchMult: 0.65, color: 'dark', sizeValue: 25.5 }
    ],
    sounds: {
      bass: (d) => {
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
      open: (d) => {
        const baseId = parseInt(d.id);
        if (baseId === 0) {
          playMembrane(950 * d.pitchMult, 0.04, 0.6, false);
        } else if (baseId === 1) {
          playMembrane(180 * d.pitchMult, 0.5, 1.0, false);
        } else {
          playMembrane(55 * d.pitchMult, 0.85, 1.6, false);
        }
      },
      slap: (d) => {
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
      },
      muffled: (d) => {
        const baseId = parseInt(d.id);
        if (baseId === 0) {
          playMembrane(750 * d.pitchMult, 0.06, 0.8, false);
        } else if (baseId === 1) {
          playMembrane(140 * d.pitchMult, 0.1, 1.0, false);
        } else {
          playMembrane(70 * d.pitchMult, 0.3, 1.2, false);
        }
      },
      heeltoe: (d) => {
        const baseId = parseInt(d.id);
        if (baseId === 0) {
          playMembrane(900 * d.pitchMult, 0.05, 0.6, false);
        } else if (baseId === 1) {
          playMembrane(320 * d.pitchMult, 0.08, 0.9, false);
        } else {
          playMembrane(90 * d.pitchMult, 0.1, 1.1, false);
        }
      }
    },
    defaultLeft: 2, // Dagu
    defaultRight: 1 // Tanggu
  },
  daiko: {
    name: 'Taiko',
    drums: [
      { id: 0, label: 'Shime-daiko', pitchMult: 1.35, color: 'blonde-light', sizeValue: 16.5 },
      { id: 1, label: 'Nagado-daiko', pitchMult: 0.9, color: 'caramel', sizeValue: 21.5 },
      { id: 2, label: 'O-daiko', pitchMult: 0.5, color: 'darker', sizeValue: 27.5 }
    ],
    sounds: {
      bass: (d) => {
        const baseId = parseInt(d.id);
        if (baseId === 0) playMembrane(220 * d.pitchMult, 0.35, 0.8, false);
        else if (baseId === 1) playMembrane(70 * d.pitchMult, 0.7, 1.4, false);
        else playMembrane(35 * d.pitchMult, 0.95, 2.2, false);
      },
      open: (d) => {
        const baseId = parseInt(d.id);
        if (baseId === 0) playMembrane(250 * d.pitchMult, 0.3, 0.7, false);
        else if (baseId === 1) playMembrane(80 * d.pitchMult, 0.6, 1.2, false);
        else playMembrane(40 * d.pitchMult, 0.85, 1.8, false);
      },
      slap: (d) => {
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
      },
      muffled: (d) => {
        const baseId = parseInt(d.id);
        if (baseId === 0) playMembrane(190 * d.pitchMult, 0.1, 0.7, false);
        else if (baseId === 1) playMembrane(90 * d.pitchMult, 0.15, 1.0, false);
        else playMembrane(50 * d.pitchMult, 0.2, 1.3, false);
      },
      heeltoe: (d) => {
        const baseId = parseInt(d.id);
        if (baseId === 0) playMembrane(1100 * d.pitchMult, 0.04, 0.5, false);
        else if (baseId === 1) playMembrane(850 * d.pitchMult, 0.05, 0.7, false);
        else playMembrane(600 * d.pitchMult, 0.06, 0.9, false);
      }
    },
    defaultLeft: 2, // O-daiko
    defaultRight: 1 // Nagado-daiko
  },
  bodhran: {
    name: 'Bodhrán',
    drums: [{ id: 0, label: 'Bodhrán Head', pitchMult: 1.0, color: 'blonde', sizeValue: 22 }],
    sounds: {
      bass_open: (d) => playMembrane(68 * d.pitchMult, 1.4, 1.4, false),
      pressed_high: (d) => playMembrane(110 * d.pitchMult, 0.8, 1.1, false),
      muffled_slap: (d) => {
        playMembrane(320 * d.pitchMult, 0.15, 1.0, true);
        playNoise(0.05, 2000, state.currentTiltVolume * 0.7);
      },
      rim_click: (d) => playMembrane(145 * d.pitchMult, 0.22, 1.0, false),
      roll: (d) => playMembrane(95 * d.pitchMult, 0.12, 1.2, false),
      // Fallbacks
      bass: (d) => drumTypes.bodhran.sounds.bass_open(d),
      open: (d) => drumTypes.bodhran.sounds.pressed_high(d),
      slap: (d) => drumTypes.bodhran.sounds.muffled_slap(d),
      muffled: (d) => drumTypes.bodhran.sounds.rim_click(d),
      heeltoe: (d) => drumTypes.bodhran.sounds.roll(d)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  talkingdrum: {
    name: 'Talking Drum',
    drums: [{ id: 0, label: 'Tama', pitchMult: 1.0, color: 'caramel', sizeValue: 18 }],
    sounds: {
      low_squeeze: (d) => playTablaSlideUp(150 * d.pitchMult, 300 * d.pitchMult, 0.55),
      high_squeeze: (d) => playTablaSlideUp(250 * d.pitchMult, 450 * d.pitchMult, 0.45),
      pitch_bend: (d) => playTablaSlideUp(120 * d.pitchMult, 380 * d.pitchMult, 0.7),
      open_unreleased: (d) => playMembrane(185 * d.pitchMult, 0.42, 1.05, false),
      slap: (d) => {
        playMembrane(280 * d.pitchMult, 0.14, 1.1, true);
        playNoise(0.06, 1500, state.currentTiltVolume * 0.8);
      },
      // Fallbacks
      bass: (d) => drumTypes.talkingdrum.sounds.low_squeeze(d),
      open: (d) => drumTypes.talkingdrum.sounds.open_unreleased(d),
      muffled: (d) => playMembrane(210 * d.pitchMult, 0.08, 1.0, false),
      heeltoe: (d) => drumTypes.talkingdrum.sounds.high_squeeze(d)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  cuica: {
    name: 'Cuíca',
    drums: [{ id: 0, label: 'Cuíca', pitchMult: 1.0, color: 'blonde-light', sizeValue: 17 }],
    sounds: {
      high_press: (d) => playTablaSlideUp(750 * d.pitchMult, 1000 * d.pitchMult, 0.13),
      low_loose: (d) => playTablaSlideUp(350 * d.pitchMult, 600 * d.pitchMult, 0.26),
      friction_stroke: (d) => playTablaSlideUp(450 * d.pitchMult, 850 * d.pitchMult, 0.22),
      accent_groan: (d) => playTablaSlideUp(850 * d.pitchMult, 780 * d.pitchMult, 0.09),
      mute: (d) => playTablaSlideUp(220 * d.pitchMult, 160 * d.pitchMult, 0.32),
      // Fallbacks
      bass: (d) => drumTypes.cuica.sounds.low_loose(d),
      open: (d) => drumTypes.cuica.sounds.friction_stroke(d),
      slap: (d) => drumTypes.cuica.sounds.high_press(d),
      muffled: (d) => drumTypes.cuica.sounds.mute(d),
      heeltoe: (d) => drumTypes.cuica.sounds.accent_groan(d)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  doira: {
    name: 'Doira',
    drums: [{ id: 0, label: 'Doira Head', pitchMult: 1.0, color: 'blonde', sizeValue: 20.5 }],
    sounds: {
      bass: (d) => playMembrane(120 * d.pitchMult, 0.48, 1.15, false),
      open: (d) => playMembrane(175 * d.pitchMult, 0.38, 1.0, false),
      slap: (d) => {
        playMembrane(310 * d.pitchMult, 0.12, 1.0, true);
        playNoise(0.08, 2600, state.currentTiltVolume * 0.95);
      },
      muffled: (d) => {
        playMembrane(215 * d.pitchMult, 0.1, 1.0, true);
        playNoise(0.24, 4200, state.currentTiltVolume * 1.1);
      },
      heeltoe: (d) => playNoise(0.16, 4800, state.currentTiltVolume * 1.2)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  uchiwadaiko: {
    name: 'Uchiwa-daiko',
    drums: [{ id: 0, label: 'Uchiwa-daiko', pitchMult: 1.0, color: 'blonde-light', sizeValue: 15 }],
    sounds: {
      bass: (d) => playMembrane(155 * d.pitchMult, 0.14, 1.25, false),
      open: (d) => playMembrane(235 * d.pitchMult, 0.09, 1.1, false),
      slap: (d) => playMembrane(480 * d.pitchMult, 0.04, 0.95, true),
      muffled: (d) => playMembrane(190 * d.pitchMult, 0.05, 1.0, false),
      heeltoe: (d) => playMembrane(210 * d.pitchMult, 0.06, 1.0, false)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  oceandrum: {
    name: 'Ocean Drum',
    drums: [{ id: 0, label: 'Ocean Drum', pitchMult: 1.0, color: 'blonde-light', sizeValue: 21.5 }],
    sounds: {
      bass: (d) => playNoise(2.3, 550, state.currentTiltVolume * 0.85),
      open: (d) => {
        playMembrane(95 * d.pitchMult, 0.65, 1.35, false);
        playNoise(0.14, 1100, state.currentTiltVolume * 0.45);
      },
      slap: (d) => {
        playMembrane(170 * d.pitchMult, 0.22, 1.05, true);
        playNoise(0.38, 2100, state.currentTiltVolume * 0.95);
      },
      muffled: (d) => playNoise(1.3, 1750, state.currentTiltVolume * 0.95),
      heeltoe: (d) => playNoise(0.55, 950, state.currentTiltVolume * 0.75)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  janggu: {
    name: 'Janggu',
    drums: [
      { id: 0, label: 'Gungpyeon (Bass)', pitchMult: 0.8, color: 'blonde', sizeValue: 21 },
      { id: 1, label: 'Yeolpyeon (Treble)', pitchMult: 1.3, color: 'blonde-light', sizeValue: 18.5 }
    ],
    sounds: {
      bass: (d) => {
        const baseId = parseInt(d.id);
        if (baseId === 0) playMembrane(72 * d.pitchMult, 0.78, 1.38, false);
        else playMembrane(210 * d.pitchMult, 0.32, 1.0, false);
      },
      open: (d) => {
        const baseId = parseInt(d.id);
        if (baseId === 0) playMembrane(95 * d.pitchMult, 0.65, 1.25, false);
        else playMembrane(250 * d.pitchMult, 0.28, 1.0, false);
      },
      slap: (d) => {
        const baseId = parseInt(d.id);
        if (baseId === 0) {
          playMembrane(140 * d.pitchMult, 0.15, 1.1, true);
        } else {
          playMembrane(390 * d.pitchMult, 0.11, 0.92, true);
          playNoise(0.05, 2700, state.currentTiltVolume * 0.75);
        }
      },
      muffled: (d) => {
        const baseId = parseInt(d.id);
        if (baseId === 0) playMembrane(88 * d.pitchMult, 0.14, 1.0, false);
        else playMembrane(230 * d.pitchMult, 0.08, 1.0, false);
      },
      heeltoe: (d) => {
        playMembrane(72 * d.pitchMult, 0.55, 1.35, false);
        playMembrane(210 * d.pitchMult, 0.24, 1.0, false);
      }
    },
    defaultLeft: 0,
    defaultRight: 1
  },
  zabumba: {
    name: 'Zabumba',
    drums: [{ id: 0, label: 'Zabumba', pitchMult: 1.0, color: 'darker', sizeValue: 24 }],
    sounds: {
      bass: (d) => playMembrane(52 * d.pitchMult, 1.25, 1.55, false),
      open: (d) => playMembrane(78 * d.pitchMult, 0.85, 1.28, false),
      slap: (d) => {
        playMembrane(330 * d.pitchMult, 0.09, 0.92, true);
        playNoise(0.04, 3100, state.currentTiltVolume * 0.85);
      },
      muffled: (d) => playMembrane(58 * d.pitchMult, 0.18, 1.1, false),
      heeltoe: (d) => {
        playMembrane(52 * d.pitchMult, 0.12, 1.5, false);
        playMembrane(330 * d.pitchMult, 0.06, 0.92, true);
      }
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  mridangam: {
    name: 'Mridangam',
    drums: [
      { id: 0, label: 'Thoppi (Bass)', pitchMult: 0.8, color: 'dark', sizeValue: 22 },
      { id: 1, label: 'Valanthalai (Treble)', pitchMult: 1.4, color: 'caramel', sizeValue: 18.5 }
    ],
    sounds: {
      bass: (d) => {
        const baseId = parseInt(d.id);
        if (baseId === 0) playTablaSlideUp(70 * d.pitchMult, 120 * d.pitchMult, 0.44);
        else playMembrane(165 * d.pitchMult, 0.6, 0.95, false);
      },
      open: (d) => {
        const baseId = parseInt(d.id);
        if (baseId === 0) playMembrane(110 * d.pitchMult, 0.35, 1.1, false);
        else {
          playMembrane(175 * d.pitchMult, 0.62, 0.95, false);
          playMembrane(350 * d.pitchMult, 0.42, 0.95, false);
        }
      },
      slap: (d) => {
        const baseId = parseInt(d.id);
        if (baseId === 0) {
          playMembrane(140 * d.pitchMult, 0.12, 1.0, true);
        } else {
          playMembrane(270 * d.pitchMult, 0.11, 0.98, true);
          playNoise(0.03, 2600, state.currentTiltVolume * 0.65);
        }
      },
      muffled: (d) => {
        const baseId = parseInt(d.id);
        if (baseId === 0) playMembrane(85 * d.pitchMult, 0.12, 1.0, false);
        else playMembrane(145 * d.pitchMult, 0.09, 1.0, false);
      },
      heeltoe: (d) => {
        const baseId = parseInt(d.id);
        if (baseId === 0) playMembrane(100 * d.pitchMult, 0.08, 1.0, false);
        else playMembrane(125 * d.pitchMult, 0.07, 1.0, false);
      }
    },
    defaultLeft: 0,
    defaultRight: 1
  },
  udu: {
    name: 'Udu',
    drums: [{ id: 0, label: 'Clay Udu', pitchMult: 1.0, color: 'terracotta', sizeValue: 19 }],
    sounds: {
      bass: (d) => playMembrane(70 * d.pitchMult, 0.5, 1.8, false),
      open: (d) => playMembrane(250 * d.pitchMult, 0.25, 1.0, false),
      slap: (d) => playMembrane(380 * d.pitchMult, 0.12, 1.1, true),
      muffled: (d) => playMembrane(170 * d.pitchMult, 0.08, 1.0, false),
      heeltoe: (d) => playTablaSlideUp(140 * d.pitchMult, 220 * d.pitchMult, 0.35)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  thunderdrum: {
    name: 'Thunder Drum',
    drums: [{ id: 0, label: 'Storm Chamber', pitchMult: 1.0, color: 'purple', sizeValue: 23 }],
    sounds: {
      bass: (d) => playMembrane(40 * d.pitchMult, 2.0, 1.6, false),
      open: (d) => {
        playMembrane(75 * d.pitchMult, 1.5, 1.3, false);
        playNoise(1.2, 500, state.currentTiltVolume * 0.7);
      },
      slap: (d) => {
        playMembrane(110 * d.pitchMult, 1.8, 1.1, true);
        playNoise(1.5, 900, state.currentTiltVolume * 0.95);
      },
      muffled: (d) => playNoise(0.3, 400, state.currentTiltVolume * 0.4),
      heeltoe: (d) => playTablaSlideUp(50 * d.pitchMult, 120 * d.pitchMult, 1.2)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  waterdrums: {
    name: 'Water Drums',
    drums: [{ id: 0, label: 'Floating Gourd', pitchMult: 1.0, color: 'teal', sizeValue: 20 }],
    sounds: {
      bass: (d) => playMembrane(55 * d.pitchMult, 0.65, 1.5, false),
      open: (d) => {
        playMembrane(130 * d.pitchMult, 0.45, 1.25, false);
        playNoise(0.25, 1200, state.currentTiltVolume * 0.4);
      },
      slap: (d) => {
        playMembrane(220 * d.pitchMult, 0.3, 1.1, true);
        playNoise(0.4, 2500, state.currentTiltVolume * 0.85);
      },
      muffled: (d) => {
        playMembrane(110 * d.pitchMult, 0.15, 1.0, false);
        playNoise(0.12, 1000, state.currentTiltVolume * 0.3);
      },
      heeltoe: (d) => playTablaSlideUp(75 * d.pitchMult, 160 * d.pitchMult, 0.5)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  vibraslap: {
    name: 'Vibraslap',
    drums: [{ id: 0, label: 'Resonator Box', pitchMult: 1.0, color: 'wood', sizeValue: 18 }],
    sounds: {
      bass: (d) => playMembrane(110 * d.pitchMult, 0.1, 1.0, false),
      open: (d) => playNoise(1.5, 1500, state.currentTiltVolume * 1.1),
      slap: (d) => playNoise(1.2, 2200, state.currentTiltVolume * 1.4),
      muffled: (d) => playNoise(0.22, 1100, state.currentTiltVolume * 0.4),
      heeltoe: (d) => playNoise(0.5, 1800, state.currentTiltVolume * 0.7)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  flexatone: {
    name: 'Flexatone',
    drums: [{ id: 0, label: 'Steel Blade', pitchMult: 1.0, color: 'silver', sizeValue: 17 }],
    sounds: {
      bass: (d) => playTablaSlideUp(450 * d.pitchMult, 180 * d.pitchMult, 0.55),
      open: (d) => playTablaSlideUp(220 * d.pitchMult, 680 * d.pitchMult, 0.6),
      slap: (d) => playTablaSlideUp(320 * d.pitchMult, 950 * d.pitchMult, 0.45),
      muffled: (d) => playMembrane(580 * d.pitchMult, 0.08, 1.0, false),
      heeltoe: (d) => playTablaSlideUp(380 * d.pitchMult, 440 * d.pitchMult, 0.3)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  waterphone: {
    name: 'Waterphone',
    drums: [{ id: 0, label: 'Ethereal Basin', pitchMult: 1.0, color: 'aquamarine', sizeValue: 22 }],
    sounds: {
      bass: (d) => playMembrane(80 * d.pitchMult, 2.0, 0.95, false),
      open: (d) => {
        playMembrane(650 * d.pitchMult, 1.6, 1.0, false);
        playNoise(0.8, 3000, state.currentTiltVolume * 0.5);
      },
      slap: (d) => {
        playMembrane(900 * d.pitchMult, 1.4, 0.9, true);
        playNoise(1.2, 4500, state.currentTiltVolume * 0.75);
      },
      muffled: (d) => playMembrane(450 * d.pitchMult, 0.2, 1.0, false),
      heeltoe: (d) => playTablaSlideUp(280 * d.pitchMult, 580 * d.pitchMult, 1.5)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  handpan: {
    name: 'Handpan',
    drums: [
      { id: 0, label: 'Central Ding (Bass)', pitchMult: 0.8, color: 'steel-blue', sizeValue: 22 },
      { id: 1, label: 'Tone Fields', pitchMult: 1.2, color: 'steel-blue', sizeValue: 18 }
    ],
    sounds: {
      bass: (d) => playMembrane(85 * d.pitchMult, 1.5, 1.1, false),
      open: (d) => playMembrane(240 * d.pitchMult, 1.3, 1.0, false),
      slap: (d) => playMembrane(480 * d.pitchMult, 0.9, 0.98, true),
      muffled: (d) => playMembrane(160 * d.pitchMult, 0.18, 1.0, false),
      heeltoe: (d) => playMembrane(120 * d.pitchMult, 0.6, 1.25, false)
    },
    defaultLeft: 0,
    defaultRight: 1
  },
  steelpan: {
    name: 'Steelpan',
    drums: [{ id: 0, label: 'Lead Pan', pitchMult: 1.0, color: 'silver', sizeValue: 22 }],
    sounds: {
      bass: (d) => playMembrane(120 * d.pitchMult, 0.8, 1.8, false),
      open: (d) => playMembrane(240 * d.pitchMult, 0.6, 1.5, false),
      slap: (d) => playMembrane(480 * d.pitchMult, 0.4, 1.2, true),
      muffled: (d) => playMembrane(180 * d.pitchMult, 0.1, 0.9, false),
      heeltoe: (d) => playMembrane(360 * d.pitchMult, 0.5, 1.4, false)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  ghatam: {
    name: 'Ghatam',
    drums: [{ id: 0, label: 'Ghatam', pitchMult: 1.0, color: 'terracotta', sizeValue: 19 }],
    sounds: {
      bass: (d) => playMembrane(90 * d.pitchMult, 0.6, 1.4, false),
      open: (d) => playMembrane(300 * d.pitchMult, 0.3, 1.1, false),
      slap: (d) => playMembrane(450 * d.pitchMult, 0.15, 1.0, true),
      muffled: (d) => playMembrane(200 * d.pitchMult, 0.08, 0.9, false),
      heeltoe: (d) => playTablaSlideUp(180 * d.pitchMult, 260 * d.pitchMult, 0.3)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  daf: {
    name: 'Daf',
    drums: [{ id: 0, label: 'Persian Daf', pitchMult: 1.0, color: 'blonde', sizeValue: 23 }],
    sounds: {
      bass: (d) => playMembrane(60 * d.pitchMult, 0.8, 1.5, false),
      open: (d) => playMembrane(120 * d.pitchMult, 0.5, 1.2, false),
      slap: (d) => playMembrane(280 * d.pitchMult, 0.2, 1.0, true),
      muffled: (d) => playNoise(0.25, 1500, state.currentTiltVolume * 0.85),
      heeltoe: (d) => playNoise(0.5, 2500, state.currentTiltVolume * 1.0)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  riq: {
    name: 'Riq',
    drums: [{ id: 0, label: 'Arabic Riq', pitchMult: 1.0, color: 'blonde-light', sizeValue: 16 }],
    sounds: {
      bass: (d) => playMembrane(130 * d.pitchMult, 0.4, 1.1, false),
      open: (d) => playMembrane(220 * d.pitchMult, 0.3, 1.0, false),
      slap: (d) => playMembrane(360 * d.pitchMult, 0.12, 0.9, true),
      muffled: (d) => playNoise(0.18, 4500, state.currentTiltVolume * 0.75),
      heeltoe: (d) => playNoise(0.35, 5500, state.currentTiltVolume * 1.1)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  surdo: {
    name: 'Surdo',
    drums: [{ id: 0, label: 'Surdo', pitchMult: 1.0, color: 'darker', sizeValue: 26 }],
    sounds: {
      bass: (d) => playMembrane(45 * d.pitchMult, 1.5, 2.0, false),
      open: (d) => playMembrane(55 * d.pitchMult, 1.1, 1.6, false),
      slap: (d) => playMembrane(120 * d.pitchMult, 0.5, 1.2, true),
      muffled: (d) => playMembrane(60 * d.pitchMult, 0.2, 1.0, false),
      heeltoe: (d) => playMembrane(50 * d.pitchMult, 0.1, 1.4, false)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  pandeiro: {
    name: 'Pandeiro',
    drums: [{ id: 0, label: 'Pandeiro', pitchMult: 1.0, color: 'blonde', sizeValue: 18 }],
    sounds: {
      bass: (d) => playMembrane(65 * d.pitchMult, 0.7, 1.3, false),
      open: (d) => playMembrane(140 * d.pitchMult, 0.4, 1.0, false),
      slap: (d) => playMembrane(260 * d.pitchMult, 0.15, 0.9, true),
      muffled: (d) => playNoise(0.12, 3800, state.currentTiltVolume * 0.7),
      heeltoe: (d) => playNoise(0.24, 4200, state.currentTiltVolume * 0.95)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  tamborim: {
    name: 'Tamborim',
    drums: [{ id: 0, label: 'Tamborim', pitchMult: 1.0, color: 'blonde-light', sizeValue: 14 }],
    sounds: {
      bass: (d) => playMembrane(220 * d.pitchMult, 0.2, 0.8, false),
      open: (d) => playMembrane(350 * d.pitchMult, 0.25, 0.75, false),
      slap: (d) => playMembrane(600 * d.pitchMult, 0.1, 0.7, true),
      muffled: (d) => playMembrane(300 * d.pitchMult, 0.05, 0.6, false),
      heeltoe: (d) => playMembrane(450 * d.pitchMult, 0.08, 0.7, false)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  repinique: {
    name: 'Repinique',
    drums: [{ id: 0, label: 'Repinique', pitchMult: 1.0, color: 'silver', sizeValue: 18.5 }],
    sounds: {
      bass: (d) => playMembrane(160 * d.pitchMult, 0.45, 1.1, false),
      open: (d) => playMembrane(250 * d.pitchMult, 0.35, 1.0, false),
      slap: (d) => playMembrane(450 * d.pitchMult, 0.15, 0.9, true),
      muffled: (d) => playMembrane(200 * d.pitchMult, 0.08, 0.8, false),
      heeltoe: (d) => playMembrane(300 * d.pitchMult, 0.1, 0.9, false)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  bendir: {
    name: 'Bendir',
    drums: [{ id: 0, label: 'Bendir Head', pitchMult: 1.0, color: 'blonde', sizeValue: 21.5 }],
    sounds: {
      bass: (d) => playMembrane(75 * d.pitchMult, 0.8, 1.4, false),
      open: (d) => {
        playMembrane(150 * d.pitchMult, 0.45, 1.1, false);
        playNoise(0.06, 800, state.currentTiltVolume * 0.4);
      },
      slap: (d) => {
        playMembrane(320 * d.pitchMult, 0.15, 0.95, true);
        playNoise(0.12, 1400, state.currentTiltVolume * 0.85);
      },
      muffled: (d) => playMembrane(180 * d.pitchMult, 0.1, 1.0, false),
      heeltoe: (d) => playNoise(0.08, 1000, state.currentTiltVolume * 0.5)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  davul: {
    name: 'Davul',
    drums: [{ id: 0, label: 'Davul', pitchMult: 1.0, color: 'darker', sizeValue: 25 }],
    sounds: {
      bass: (d) => playMembrane(50 * d.pitchMult, 1.3, 1.8, false),
      open: (d) => playMembrane(80 * d.pitchMult, 0.9, 1.4, false),
      slap: (d) => playMembrane(450 * d.pitchMult, 0.15, 0.8, true),
      muffled: (d) => playMembrane(120 * d.pitchMult, 0.1, 0.9, false),
      heeltoe: (d) => playMembrane(380 * d.pitchMult, 0.08, 0.85, false)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  ashiko: {
    name: 'Ashiko',
    drums: [{ id: 0, label: 'Ashiko', pitchMult: 1.0, color: 'caramel', sizeValue: 22 }],
    sounds: {
      bass: (d) => playMembrane(60 * d.pitchMult, 0.75, 1.5, false),
      open: (d) => playMembrane(210 * d.pitchMult, 0.45, 1.0, false),
      slap: (d) => playMembrane(380 * d.pitchMult, 0.12, 1.0, true),
      muffled: (d) => playMembrane(190 * d.pitchMult, 0.08, 0.9, false),
      heeltoe: (d) => playMembrane(130 * d.pitchMult, 0.06, 1.0, false)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  dunun: {
    name: 'Dunun',
    drums: [
      { id: 0, label: 'Dununba', pitchMult: 0.7, color: 'dark', sizeValue: 25 },
      { id: 1, label: 'Sangban', pitchMult: 1.0, color: 'caramel', sizeValue: 21 },
      { id: 2, label: 'Kenkeni', pitchMult: 1.3, color: 'blonde', sizeValue: 17 }
    ],
    sounds: {
      bass: (d) => playMembrane((d.id === 0 ? 55 : d.id === 1 ? 80 : 110) * d.pitchMult, 0.9, 1.5, false),
      open: (d) => playMembrane((d.id === 0 ? 65 : d.id === 1 ? 95 : 130) * d.pitchMult, 0.7, 1.25, false),
      slap: (d) => {
        playMembrane(800 * d.pitchMult, 0.15, 0.8, true);
        playNoise(0.05, 3000, state.currentTiltVolume * 0.4);
      },
      muffled: (d) => playMembrane((d.id === 0 ? 80 : d.id === 1 ? 120 : 160) * d.pitchMult, 0.12, 1.0, false),
      heeltoe: (d) => playMembrane(650 * d.pitchMult, 0.06, 0.85, false)
    },
    defaultLeft: 0,
    defaultRight: 1
  },
  teponaztli: {
    name: 'Teponaztli',
    drums: [{ id: 0, label: 'Teponaztli', pitchMult: 1.0, color: 'wood', sizeValue: 19.5 }],
    sounds: {
      bass: (d) => playMembrane(180 * d.pitchMult, 0.5, 1.1, false),
      open: (d) => playMembrane(240 * d.pitchMult, 0.45, 1.0, false),
      slap: (d) => playMembrane(320 * d.pitchMult, 0.12, 0.9, true),
      muffled: (d) => playMembrane(210 * d.pitchMult, 0.08, 0.8, false),
      heeltoe: (d) => playMembrane(280 * d.pitchMult, 0.06, 0.95, false)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  snare_drum: {
    name: 'Snare Drum',
    drums: [{ id: 0, label: 'Snare Drum', pitchMult: 1.0, color: 'silver', sizeValue: 19 }],
    sounds: {
      bass: (d) => {
        playMembrane(150 * d.pitchMult, 0.35, 1.0, false);
        playNoise(0.12, 2500, state.currentTiltVolume * 0.75);
      },
      open: (d) => {
        playMembrane(180 * d.pitchMult, 0.28, 0.9, false);
        playNoise(0.18, 3000, state.currentTiltVolume * 0.85);
      },
      slap: (d) => {
        playMembrane(300 * d.pitchMult, 0.1, 0.8, true);
        playNoise(0.3, 4000, state.currentTiltVolume * 1.3);
      },
      muffled: (d) => playNoise(0.08, 1200, state.currentTiltVolume * 0.4),
      heeltoe: (d) => playNoise(0.2, 3500, state.currentTiltVolume * 1.0)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  shekere: {
    name: 'Shekere',
    drums: [{ id: 0, label: 'Shekere', pitchMult: 1.0, color: 'caramel-light', sizeValue: 20 }],
    sounds: {
      bass: (d) => playMembrane(95 * d.pitchMult, 0.45, 1.3, false),
      open: (d) => playNoise(0.15, 1200, state.currentTiltVolume * 0.8),
      slap: (d) => playNoise(0.3, 2200, state.currentTiltVolume * 1.25),
      muffled: (d) => playNoise(0.08, 900, state.currentTiltVolume * 0.4),
      heeltoe: (d) => playNoise(0.18, 1800, state.currentTiltVolume * 0.75)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  kanjira: {
    name: 'Kanjira',
    drums: [{ id: 0, label: 'Kanjira', pitchMult: 1.0, color: 'caramel', sizeValue: 16 }],
    sounds: {
      bass: (d) => playTablaSlideUp(150 * d.pitchMult, 80 * d.pitchMult, 0.4),
      open: (d) => playMembrane(160 * d.pitchMult, 0.35, 1.2),
      slap: (d) => {
        playMembrane(280 * d.pitchMult, 0.15, 1.0, true);
        playNoise(0.08, 1500, state.currentTiltVolume * 0.4);
      },
      muffled: (d) => playMembrane(180 * d.pitchMult, 0.1, 1.0, false),
      heeltoe: (d) => playTablaSlideUp(100 * d.pitchMult, 180 * d.pitchMult, 0.3)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  tammorra: {
    name: 'Tammorra',
    drums: [{ id: 0, label: 'Tammorra', pitchMult: 1.0, color: 'darker', sizeValue: 22 }],
    sounds: {
      bass: (d) => {
        playMembrane(60 * d.pitchMult, 0.6, 1.4);
        playNoise(0.2, 400, state.currentTiltVolume * 0.3);
      },
      open: (d) => {
        playMembrane(110 * d.pitchMult, 0.4, 1.1);
        playNoise(0.12, 1200, state.currentTiltVolume * 0.4);
      },
      slap: (d) => {
        playMembrane(210 * d.pitchMult, 0.15, 1.2, true);
        playNoise(0.2, 2800, state.currentTiltVolume * 1.1);
      },
      muffled: (d) => playNoise(0.08, 2000, state.currentTiltVolume * 0.8),
      heeltoe: (d) => playNoise(0.25, 1200, state.currentTiltVolume * 0.6)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  framed_rumbla: {
    name: 'Framed Rumbla',
    drums: [{ id: 0, label: 'Framed Rumbla', pitchMult: 1.0, color: 'blonde', sizeValue: 19 }],
    sounds: {
      bass: (d) => {
        playMembrane(70 * d.pitchMult, 0.5, 1.4);
        playNoise(0.15, 800, state.currentTiltVolume * 0.25);
      },
      open: (d) => {
        playMembrane(120 * d.pitchMult, 0.4, 1.1);
        playNoise(0.12, 1000, state.currentTiltVolume * 0.3);
      },
      slap: (d) => {
        playMembrane(220 * d.pitchMult, 0.15, 1.1, true);
        playNoise(0.18, 2200, state.currentTiltVolume * 0.7);
      },
      muffled: (d) => playNoise(0.1, 1500, state.currentTiltVolume * 0.5),
      heeltoe: (d) => playNoise(0.4, 1200, state.currentTiltVolume * 0.5)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  gran_cassa: {
    name: 'Gran Cassa',
    drums: [{ id: 0, label: 'Gran Cassa', pitchMult: 1.0, color: 'dark', sizeValue: 28 }],
    sounds: {
      bass: (d) => {
        playMembrane(35 * d.pitchMult, 1.4, 1.8, false);
        playMembrane(70 * d.pitchMult, 0.8, 1.5, false);
      },
      open: (d) => {
        playMembrane(40 * d.pitchMult, 1.1, 1.6, false);
        playMembrane(80 * d.pitchMult, 0.6, 1.4, false);
      },
      slap: (d) => playMembrane(120 * d.pitchMult, 0.3, 1.2, true),
      muffled: (d) => playMembrane(45 * d.pitchMult, 0.25, 1.3, false),
      heeltoe: (d) => playMembrane(90 * d.pitchMult, 0.08, 1.0, false)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  lions_roar: {
    name: "Lion's Roar",
    drums: [{ id: 0, label: "Lion's Roar", pitchMult: 1.0, color: 'caramel-light', sizeValue: 21 }],
    sounds: {
      bass: (d) => {
        playTablaSlideUp(80 * d.pitchMult, 180 * d.pitchMult, 0.8);
        playNoise(0.8, 400, state.currentTiltVolume * 0.8);
      },
      open: (d) => {
        playTablaSlideUp(160 * d.pitchMult, 70 * d.pitchMult, 0.8);
        playNoise(0.8, 300, state.currentTiltVolume * 0.8);
      },
      slap: (d) => {
        playNoise(0.2, 100, state.currentTiltVolume * 1.2);
        playNoise(0.15, 800, state.currentTiltVolume * 0.5);
      },
      muffled: (d) => playNoise(0.3, 200, state.currentTiltVolume * 0.5),
      heeltoe: (d) => {
        playTablaSlideUp(100 * d.pitchMult, 110 * d.pitchMult, 0.5);
        playNoise(0.5, 350, state.currentTiltVolume * 0.5);
      }
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  chocalho: {
    name: 'Chocalho',
    drums: [{ id: 0, label: 'Chocalho', pitchMult: 1.0, color: 'silver', sizeValue: 18 }],
    sounds: {
      bass: (d) => playNoise(0.18, 1800, state.currentTiltVolume * 1.2),
      open: (d) => playNoise(0.1, 2400, state.currentTiltVolume * 0.8),
      slap: (d) => playNoise(0.05, 3500, state.currentTiltVolume * 1.4),
      muffled: (d) => playNoise(0.04, 1500, state.currentTiltVolume * 0.6),
      heeltoe: (d) => playNoise(0.3, 2000, state.currentTiltVolume * 0.9)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  alfaia: {
    name: 'Alfaia',
    drums: [{ id: 0, label: 'Alfaia', pitchMult: 1.0, color: 'wood', sizeValue: 24 }],
    sounds: {
      bass: (d) => {
        playMembrane(48 * d.pitchMult, 1.0, 1.6, false);
        playMembrane(96 * d.pitchMult, 0.5, 1.3, false);
      },
      open: (d) => playMembrane(105 * d.pitchMult, 0.55, 1.1, false),
      slap: (d) => {
        playMembrane(190 * d.pitchMult, 0.18, 1.2, true);
        playNoise(0.1, 1200, state.currentTiltVolume * 0.7);
      },
      muffled: (d) => playMembrane(110 * d.pitchMult, 0.12, 1.0, false),
      heeltoe: (d) => playNoise(0.08, 1800, state.currentTiltVolume * 0.5)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  log_drum: {
    name: 'Log Drum',
    drums: [
      { id: 0, label: 'Low Log', pitchMult: 1.0, color: 'wood', sizeValue: 19 },
      { id: 1, label: 'High Log', pitchMult: 1.25, color: 'wood-light', sizeValue: 16 }
    ],
    sounds: {
      bass: (d) => playMembrane((d.id === 0 ? 110 : 150) * d.pitchMult, 0.4, 1.05, false),
      open: (d) => playMembrane((d.id === 0 ? 165 : 220) * d.pitchMult, 0.35, 1.0, false),
      slap: (d) => {
        playMembrane((d.id === 0 ? 330 : 440) * d.pitchMult, 0.1, 1.0, true);
        playNoise(0.04, 2000, state.currentTiltVolume * 0.4);
      },
      muffled: (d) => playMembrane((d.id === 0 ? 120 : 160) * d.pitchMult, 0.08, 1.0, false),
      heeltoe: (d) => playMembrane((d.id === 0 ? 250 : 300) * d.pitchMult, 0.05, 1.0, false)
    },
    defaultLeft: 0,
    defaultRight: 1
  },
  temple_blocks: {
    name: 'Temple Blocks',
    drums: [
      { id: 0, label: 'Low Block', pitchMult: 0.8, color: 'cherry', sizeValue: 16 },
      { id: 1, label: 'Mid Block', pitchMult: 1.0, color: 'cherry-red', sizeValue: 14 },
      { id: 2, label: 'High Block', pitchMult: 1.25, color: 'cherry-light', sizeValue: 12 }
    ],
    sounds: {
      center_strike: (d) => playMembrane((d.id === 0 ? 180 : d.id === 1 ? 240 : 320) * d.pitchMult, 0.22, 1.0, false),
      rim_strike: (d) => playMembrane((d.id === 0 ? 240 : d.id === 1 ? 320 : 420) * d.pitchMult, 0.2, 1.0, false),
      roll_rapid: (d) => {
        playMembrane((d.id === 0 ? 360 : d.id === 1 ? 480 : 640) * d.pitchMult, 0.08, 1.0, true);
        playNoise(0.02, 3500, state.currentTiltVolume * 0.6);
      },
      muffled_strike: (d) => playMembrane((d.id === 0 ? 190 : d.id === 1 ? 250 : 330) * d.pitchMult, 0.04, 1.0, false),
      double_tap: (d) => playMembrane((d.id === 0 ? 220 : d.id === 1 ? 290 : 380) * d.pitchMult, 0.06, 1.0, false),
      // Fallbacks
      bass: (d) => drumTypes.temple_blocks.sounds.center_strike(d),
      open: (d) => drumTypes.temple_blocks.sounds.rim_strike(d),
      slap: (d) => drumTypes.temple_blocks.sounds.roll_rapid(d),
      muffled: (d) => drumTypes.temple_blocks.sounds.muffled_strike(d),
      heeltoe: (d) => drumTypes.temple_blocks.sounds.double_tap(d)
    },
    defaultLeft: 0,
    defaultRight: 2
  },
  frog_rasp: {
    name: 'Frog Rasp',
    drums: [{ id: 0, label: 'Frog Rasp', pitchMult: 1.0, color: 'wood', sizeValue: 15 }],
    sounds: {
      slow_grate: (d) => playNoise(0.3, 600, state.currentTiltVolume * 0.8),
      quick_scrape: (d) => playNoise(0.15, 800, state.currentTiltVolume * 0.8),
      head_tap: (d) => playNoise(0.06, 1200, state.currentTiltVolume * 1.1),
      muffled_tap: (d) => playNoise(0.03, 500, state.currentTiltVolume * 0.4),
      long_croak: (d) => playNoise(0.4, 700, state.currentTiltVolume * 0.6),
      // Fallbacks
      bass: (d) => drumTypes.frog_rasp.sounds.slow_grate(d),
      open: (d) => drumTypes.frog_rasp.sounds.quick_scrape(d),
      slap: (d) => drumTypes.frog_rasp.sounds.head_tap(d),
      muffled: (d) => drumTypes.frog_rasp.sounds.muffled_tap(d),
      heeltoe: (d) => drumTypes.frog_rasp.sounds.long_croak(d)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  spring_drum: {
    name: 'Spring Drum',
    drums: [{ id: 0, label: 'Spring Drum', pitchMult: 1.0, color: 'dark', sizeValue: 18 }],
    sounds: {
      thunder_shake: (d) => {
        playMembrane(50 * d.pitchMult, 0.8, 1.5, false);
        playNoise(1.2, 800, state.currentTiltVolume * 0.7);
      },
      spring_boing: (d) => {
        playTablaSlideUp(100 * d.pitchMult, 300 * d.pitchMult, 1.0);
        playNoise(1.0, 1500, state.currentTiltVolume * 0.6);
      },
      lightning_crack: (d) => {
        playNoise(0.12, 3000, state.currentTiltVolume * 1.5);
        playNoise(0.8, 1000, state.currentTiltVolume * 0.5);
      },
      muffled_rumble: (d) => playNoise(0.4, 400, state.currentTiltVolume * 0.4),
      long_wobble: (d) => playNoise(1.5, 1200, state.currentTiltVolume * 0.7),
      // Fallbacks
      bass: (d) => drumTypes.spring_drum.sounds.thunder_shake(d),
      open: (d) => drumTypes.spring_drum.sounds.spring_boing(d),
      slap: (d) => drumTypes.spring_drum.sounds.lightning_crack(d),
      muffled: (d) => drumTypes.spring_drum.sounds.muffled_rumble(d),
      heeltoe: (d) => drumTypes.spring_drum.sounds.long_wobble(d)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  thongophone: {
    name: 'Thongophone',
    drums: [
      { id: 0, label: 'Low Pipe', pitchMult: 0.75, color: 'blue', sizeValue: 22 },
      { id: 1, label: 'Mid Pipe', pitchMult: 1.0, color: 'blue-medium', sizeValue: 18 },
      { id: 2, label: 'High Pipe', pitchMult: 1.33, color: 'blue-light', sizeValue: 14 }
    ],
    sounds: {
      deep_thump: (d) => playMembrane((d.id === 0 ? 55 : d.id === 1 ? 73 : 98) * d.pitchMult, 0.35, 1.6, false),
      open_slap: (d) => playMembrane((d.id === 0 ? 82 : d.id === 1 ? 110 : 147) * d.pitchMult, 0.3, 1.4, false),
      sharp_pop: (d) => {
        playMembrane((d.id === 0 ? 110 : d.id === 1 ? 147 : 196) * d.pitchMult, 0.15, 1.8, true);
        playNoise(0.06, 800, state.currentTiltVolume * 0.7);
      },
      muted_thud: (d) => playMembrane((d.id === 0 ? 60 : d.id === 1 ? 80 : 100) * d.pitchMult, 0.08, 1.0, false),
      paddle_slap: (d) => playMembrane((d.id === 0 ? 120 : d.id === 1 ? 160 : 200) * d.pitchMult, 0.1, 1.2, false),
      // Fallbacks
      bass: (d) => drumTypes.thongophone.sounds.deep_thump(d),
      open: (d) => drumTypes.thongophone.sounds.open_slap(d),
      slap: (d) => drumTypes.thongophone.sounds.sharp_pop(d),
      muffled: (d) => drumTypes.thongophone.sounds.muted_thud(d),
      heeltoe: (d) => drumTypes.thongophone.sounds.paddle_slap(d)
    },
    defaultLeft: 0,
    defaultRight: 2
  },
  gubguba: {
    name: 'Gubguba',
    drums: [{ id: 0, label: 'Gubguba', pitchMult: 1.0, color: 'caramel', sizeValue: 17 }],
    sounds: {
      string_pluck_up: (d) => playTablaSlideUp(80 * d.pitchMult, 220 * d.pitchMult, 0.6),
      string_pluck_down: (d) => playTablaSlideUp(160 * d.pitchMult, 90 * d.pitchMult, 0.5),
      high_snap: (d) => playTablaSlideUp(120 * d.pitchMult, 380 * d.pitchMult, 0.3),
      muffled_plink: (d) => playMembrane(110 * d.pitchMult, 0.08, 1.0, false),
      vocal_growl: (d) => playTablaSlideUp(100 * d.pitchMult, 140 * d.pitchMult, 0.2),
      // Fallbacks
      bass: (d) => drumTypes.gubguba.sounds.string_pluck_up(d),
      open: (d) => drumTypes.gubguba.sounds.string_pluck_down(d),
      slap: (d) => drumTypes.gubguba.sounds.high_snap(d),
      muffled: (d) => drumTypes.gubguba.sounds.muffled_plink(d),
      heeltoe: (d) => drumTypes.gubguba.sounds.vocal_growl(d)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  cabasa: {
    name: 'Cabasa',
    drums: [{ id: 0, label: 'Cabasa', pitchMult: 1.0, color: 'silver', sizeValue: 16 }],
    sounds: {
      twist_scrape: (d) => playNoise(0.12, 1800, state.currentTiltVolume * 1.1),
      quick_shake: (d) => playNoise(0.08, 2200, state.currentTiltVolume * 0.8),
      rim_strike: (d) => playNoise(0.04, 3200, state.currentTiltVolume * 1.3),
      muffled_shake: (d) => playNoise(0.03, 1400, state.currentTiltVolume * 0.5),
      long_roll: (d) => playNoise(0.25, 2000, state.currentTiltVolume * 0.7),
      // Fallbacks
      bass: (d) => drumTypes.cabasa.sounds.twist_scrape(d),
      open: (d) => drumTypes.cabasa.sounds.quick_shake(d),
      slap: (d) => drumTypes.cabasa.sounds.rim_strike(d),
      muffled: (d) => drumTypes.cabasa.sounds.muffled_shake(d),
      heeltoe: (d) => drumTypes.cabasa.sounds.long_roll(d)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  rainstick: {
    name: 'Rainstick',
    drums: [{ id: 0, label: 'Rainstick', pitchMult: 1.0, color: 'blonde', sizeValue: 25 }],
    sounds: {
      slow_tilt: (d) => playNoise(1.5, 1200, state.currentTiltVolume * 0.6),
      quick_flip: (d) => playNoise(0.8, 1600, state.currentTiltVolume * 0.6),
      sharp_accent: (d) => playNoise(0.2, 2000, state.currentTiltVolume * 0.9),
      muted_swish: (d) => playNoise(0.4, 900, state.currentTiltVolume * 0.4),
      continuous_downpour: (d) => playNoise(2.5, 1400, state.currentTiltVolume * 0.5),
      // Fallbacks
      bass: (d) => drumTypes.rainstick.sounds.slow_tilt(d),
      open: (d) => drumTypes.rainstick.sounds.quick_flip(d),
      slap: (d) => drumTypes.rainstick.sounds.sharp_accent(d),
      muffled: (d) => drumTypes.rainstick.sounds.muted_swish(d),
      heeltoe: (d) => drumTypes.rainstick.sounds.continuous_downpour(d)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  kokiriko: {
    name: 'Kokiriko',
    drums: [{ id: 0, label: 'Kokiriko', pitchMult: 1.0, color: 'wood', sizeValue: 20 }],
    sounds: {
      cascade_fall: (d) => playNoise(0.25, 1500, state.currentTiltVolume * 0.9),
      rapid_clatter: (d) => playNoise(0.12, 2000, state.currentTiltVolume * 0.7),
      snap_accent: (d) => playNoise(0.08, 3000, state.currentTiltVolume * 1.2),
      soft_rustle: (d) => playNoise(0.05, 1000, state.currentTiltVolume * 0.4),
      wave_sweep: (d) => playNoise(0.4, 1800, state.currentTiltVolume * 0.6),
      // Fallbacks
      bass: (d) => drumTypes.kokiriko.sounds.cascade_fall(d),
      open: (d) => drumTypes.kokiriko.sounds.rapid_clatter(d),
      slap: (d) => drumTypes.kokiriko.sounds.snap_accent(d),
      muffled: (d) => drumTypes.kokiriko.sounds.soft_rustle(d),
      heeltoe: (d) => drumTypes.kokiriko.sounds.wave_sweep(d)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  guiro: {
    name: 'Güiro',
    drums: [{ id: 0, label: 'Güiro', pitchMult: 1.0, color: 'caramel-light', sizeValue: 18 }],
    sounds: {
      long_scrape: (d) => playNoise(0.22, 1000, state.currentTiltVolume * 1.0),
      short_scrape: (d) => playNoise(0.12, 1500, state.currentTiltVolume * 0.8),
      comb_tap: (d) => playNoise(0.06, 2200, state.currentTiltVolume * 1.2),
      muffled_tap: (d) => playNoise(0.04, 800, state.currentTiltVolume * 0.5),
      double_scrape: (d) => playNoise(0.3, 1200, state.currentTiltVolume * 0.7),
      // Fallbacks
      bass: (d) => drumTypes.guiro.sounds.long_scrape(d),
      open: (d) => drumTypes.guiro.sounds.short_scrape(d),
      slap: (d) => drumTypes.guiro.sounds.comb_tap(d),
      muffled: (d) => drumTypes.guiro.sounds.muffled_tap(d),
      heeltoe: (d) => drumTypes.guiro.sounds.double_scrape(d)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  spoons_bones: {
    name: 'Spoons',
    drums: [{ id: 0, label: 'Spoons/Bones', pitchMult: 1.0, color: 'blonde', sizeValue: 14 }],
    sounds: {
      knee_strike: (d) => playMembrane(450 * d.pitchMult, 0.05, 1.0, false),
      finger_roll: (d) => {
        playMembrane(600 * d.pitchMult, 0.04, 1.0, false);
        playNoise(0.02, 3500, state.currentTiltVolume * 0.4);
      },
      hand_clack: (d) => {
        playMembrane(800 * d.pitchMult, 0.03, 1.0, true);
        playNoise(0.04, 4500, state.currentTiltVolume * 1.2);
      },
      pocket_pop: (d) => playMembrane(350 * d.pitchMult, 0.03, 1.0, false),
      slide_scrape: (d) => playNoise(0.15, 2500, state.currentTiltVolume * 0.8),
      // Fallbacks
      bass: (d) => drumTypes.spoons_bones.sounds.knee_strike(d),
      open: (d) => drumTypes.spoons_bones.sounds.finger_roll(d),
      slap: (d) => drumTypes.spoons_bones.sounds.hand_clack(d),
      muffled: (d) => drumTypes.spoons_bones.sounds.pocket_pop(d),
      heeltoe: (d) => drumTypes.spoons_bones.sounds.slide_scrape(d)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  washboard: {
    name: 'Washboard',
    drums: [{ id: 0, label: 'Washboard', pitchMult: 1.0, color: 'silver', sizeValue: 21 }],
    sounds: {
      wood_tap: (d) => playNoise(0.1, 2500, state.currentTiltVolume * 1.0),
      metal_scrape: (d) => playNoise(0.05, 3500, state.currentTiltVolume * 0.7),
      snare_flick: (d) => {
        playMembrane(550 * d.pitchMult, 0.06, 1.0, true);
        playNoise(0.04, 4000, state.currentTiltVolume * 1.1);
      },
      cowbell_hit: (d) => playNoise(0.03, 1500, state.currentTiltVolume * 0.4),
      chafing_drag: (d) => playNoise(0.2, 3000, state.currentTiltVolume * 0.8),
      // Fallbacks
      bass: (d) => drumTypes.washboard.sounds.wood_tap(d),
      open: (d) => drumTypes.washboard.sounds.metal_scrape(d),
      slap: (d) => drumTypes.washboard.sounds.snare_flick(d),
      muffled: (d) => drumTypes.washboard.sounds.cowbell_hit(d),
      heeltoe: (d) => drumTypes.washboard.sounds.chafing_drag(d)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  friction_drum: {
    name: 'Friction Drum',
    drums: [{ id: 0, label: 'Friction Drum', pitchMult: 1.0, color: 'darker', sizeValue: 17 }],
    sounds: {
      rub_low: (d) => {
        playTablaSlideUp(70 * d.pitchMult, 120 * d.pitchMult, 0.5);
        playNoise(0.5, 200, state.currentTiltVolume * 0.8);
      },
      rub_high: (d) => {
        playTablaSlideUp(140 * d.pitchMult, 80 * d.pitchMult, 0.5);
        playNoise(0.5, 300, state.currentTiltVolume * 0.8);
      },
      squeak_short: (d) => playNoise(0.15, 600, state.currentTiltVolume * 1.2),
      groan_muffled: (d) => playNoise(0.2, 150, state.currentTiltVolume * 0.4),
      rhythmic_pulse: (d) => {
        playTablaSlideUp(100 * d.pitchMult, 105 * d.pitchMult, 0.4);
        playNoise(0.4, 250, state.currentTiltVolume * 0.5);
      },
      // Fallbacks
      bass: (d) => drumTypes.friction_drum.sounds.rub_low(d),
      open: (d) => drumTypes.friction_drum.sounds.rub_high(d),
      slap: (d) => drumTypes.friction_drum.sounds.squeak_short(d),
      muffled: (d) => drumTypes.friction_drum.sounds.groan_muffled(d),
      heeltoe: (d) => drumTypes.friction_drum.sounds.rhythmic_pulse(d)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  kundu: {
    name: 'Kundu',
    drums: [{ id: 0, label: 'Kundu', pitchMult: 1.0, color: 'wood', sizeValue: 23 }],
    sounds: {
      sacred_bass: (d) => playMembrane(90 * d.pitchMult, 0.5, 1.3, false),
      open_pop: (d) => playMembrane(180 * d.pitchMult, 0.4, 1.1, false),
      center_slap: (d) => {
        playMembrane(320 * d.pitchMult, 0.12, 1.2, true);
        playNoise(0.05, 2000, state.currentTiltVolume * 0.6);
      },
      muffled_rim: (d) => playMembrane(200 * d.pitchMult, 0.1, 1.0, false),
      beeswax_accent: (d) => playMembrane(130 * d.pitchMult, 0.08, 1.0, false),
      // Fallbacks
      bass: (d) => drumTypes.kundu.sounds.sacred_bass(d),
      open: (d) => drumTypes.kundu.sounds.open_pop(d),
      slap: (d) => drumTypes.kundu.sounds.center_slap(d),
      muffled: (d) => drumTypes.kundu.sounds.muffled_rim(d),
      heeltoe: (d) => drumTypes.kundu.sounds.beeswax_accent(d)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  tar_drum: {
    name: 'Tar',
    drums: [{ id: 0, label: 'Tar', pitchMult: 1.0, color: 'blonde', sizeValue: 24 }],
    sounds: {
      deep_doum: (d) => playMembrane(65 * d.pitchMult, 0.7, 1.4, false),
      resonant_tak: (d) => playMembrane(130 * d.pitchMult, 0.5, 1.1, false),
      sharp_kah: (d) => {
        playMembrane(240 * d.pitchMult, 0.15, 1.2, true);
        playNoise(0.06, 2200, state.currentTiltVolume * 0.8);
      },
      finger_mute: (d) => playMembrane(150 * d.pitchMult, 0.1, 1.0, false),
      thumb_roll: (d) => playNoise(0.05, 1800, state.currentTiltVolume * 0.5),
      // Fallbacks
      bass: (d) => drumTypes.tar_drum.sounds.deep_doum(d),
      open: (d) => drumTypes.tar_drum.sounds.resonant_tak(d),
      slap: (d) => drumTypes.tar_drum.sounds.sharp_kah(d),
      muffled: (d) => drumTypes.tar_drum.sounds.finger_mute(d),
      heeltoe: (d) => drumTypes.tar_drum.sounds.thumb_roll(d)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  gome: {
    name: 'Gome',
    drums: [{ id: 0, label: 'Gome', pitchMult: 1.0, color: 'wood', sizeValue: 25 }],
    sounds: {
      heel_bass_bend: (d) => playTablaSlideUp(60 * d.pitchMult, 120 * d.pitchMult, 0.6),
      open_hand_slap: (d) => playMembrane(130 * d.pitchMult, 0.45, 1.1, false),
      sharp_corner_slap: (d) => {
        playMembrane(220 * d.pitchMult, 0.15, 1.2, true);
        playNoise(0.08, 1500, state.currentTiltVolume * 0.7);
      },
      muted_box_tap: (d) => playMembrane(110 * d.pitchMult, 0.1, 1.0, false),
      heel_pitch_drop: (d) => playTablaSlideUp(120 * d.pitchMult, 70 * d.pitchMult, 0.5),
      // Fallbacks
      bass: (d) => drumTypes.gome.sounds.heel_bass_bend(d),
      open: (d) => drumTypes.gome.sounds.open_hand_slap(d),
      slap: (d) => drumTypes.gome.sounds.sharp_corner_slap(d),
      muffled: (d) => drumTypes.gome.sounds.muted_box_tap(d),
      heeltoe: (d) => drumTypes.gome.sounds.heel_pitch_drop(d)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  boomwhackers: {
    name: 'Boomwhackers',
    drums: [
      { id: 0, label: 'Low Tube', pitchMult: 1.0, color: 'red', sizeValue: 20 },
      { id: 1, label: 'Mid Tube', pitchMult: 1.25, color: 'green', sizeValue: 17 },
      { id: 2, label: 'High Tube', pitchMult: 1.5, color: 'yellow', sizeValue: 14 }
    ],
    sounds: {
      tube_strike_low: (d) => playMembrane((d.id === 0 ? 130 : d.id === 1 ? 165 : 220) * d.pitchMult, 0.4, 1.02, false),
      tube_strike_mid: (d) => playMembrane((d.id === 0 ? 196 : d.id === 1 ? 246 : 330) * d.pitchMult, 0.35, 1.0, false),
      tube_strike_high: (d) => {
        playMembrane((d.id === 0 ? 260 : d.id === 1 ? 330 : 440) * d.pitchMult, 0.12, 1.0, true);
        playNoise(0.04, 1500, state.currentTiltVolume * 0.4);
      },
      muted_flat_strike: (d) =>
        playMembrane((d.id === 0 ? 140 : d.id === 1 ? 175 : 230) * d.pitchMult, 0.08, 1.0, false),
      end_cap_strike: (d) => playMembrane((d.id === 0 ? 170 : d.id === 1 ? 210 : 280) * d.pitchMult, 0.1, 1.0, false),
      // Fallbacks
      bass: (d) => drumTypes.boomwhackers.sounds.tube_strike_low(d),
      open: (d) => drumTypes.boomwhackers.sounds.tube_strike_mid(d),
      slap: (d) => drumTypes.boomwhackers.sounds.tube_strike_high(d),
      muffled: (d) => drumTypes.boomwhackers.sounds.muted_flat_strike(d),
      heeltoe: (d) => drumTypes.boomwhackers.sounds.end_cap_strike(d)
    },
    defaultLeft: 0,
    defaultRight: 2
  },
  tank_drum: {
    name: 'Tank Drum',
    drums: [
      { id: 0, label: 'Low Tongue', pitchMult: 1.0, color: 'bronze', sizeValue: 22 },
      { id: 1, label: 'Mid Tongue', pitchMult: 1.33, color: 'bronze-medium', sizeValue: 19 },
      { id: 2, label: 'High Tongue', pitchMult: 1.78, color: 'bronze-light', sizeValue: 16 }
    ],
    sounds: {
      deep_mallet_strike: (d) =>
        playMembrane((d.id === 0 ? 147 : d.id === 1 ? 196 : 294) * d.pitchMult, 1.2, 1.0, false),
      pure_finger_tap: (d) => playMembrane((d.id === 0 ? 220 : d.id === 1 ? 294 : 440) * d.pitchMult, 1.0, 1.0, false),
      rim_harmonic_strike: (d) =>
        playMembrane((d.id === 0 ? 330 : d.id === 1 ? 440 : 587) * d.pitchMult, 0.8, 1.0, true),
      damped_hand_mute: (d) =>
        playMembrane((d.id === 0 ? 150 : d.id === 1 ? 200 : 300) * d.pitchMult, 0.15, 1.0, false),
      sustained_bell_ring: (d) =>
        playMembrane((d.id === 0 ? 440 : d.id === 1 ? 587 : 880) * d.pitchMult, 0.6, 1.0, false),
      // Fallbacks
      bass: (d) => drumTypes.tank_drum.sounds.deep_mallet_strike(d),
      open: (d) => drumTypes.tank_drum.sounds.pure_finger_tap(d),
      slap: (d) => drumTypes.tank_drum.sounds.rim_harmonic_strike(d),
      muffled: (d) => drumTypes.tank_drum.sounds.damped_hand_mute(d),
      heeltoe: (d) => drumTypes.tank_drum.sounds.sustained_bell_ring(d)
    },
    defaultLeft: 0,
    defaultRight: 2
  },
  bell_tree: {
    name: 'Bell Tree',
    drums: [{ id: 0, label: 'Bell Tree', pitchMult: 1.0, color: 'gold', sizeValue: 21 }],
    sounds: {
      single_bell_chime: (d) => {
        playMembrane(800 * d.pitchMult, 0.8, 1.0, false);
      },
      ascending_sweep: (d) => {
        playTablaSlideUp(500 * d.pitchMult, 1500 * d.pitchMult, 0.6);
        playNoise(0.6, 5000, state.currentTiltVolume * 0.5);
      },
      descending_sweep: (d) => {
        playTablaSlideUp(1500 * d.pitchMult, 500 * d.pitchMult, 0.6);
        playNoise(0.6, 5000, state.currentTiltVolume * 0.5);
      },
      muted_clink: (d) => playMembrane(900 * d.pitchMult, 0.08, 1.0, false),
      random_flutter: (d) => {
        playNoise(0.5, 4500, state.currentTiltVolume * 0.7);
      },
      // Fallbacks
      bass: (d) => drumTypes.bell_tree.sounds.single_bell_chime(d),
      open: (d) => drumTypes.bell_tree.sounds.ascending_sweep(d),
      slap: (d) => drumTypes.bell_tree.sounds.descending_sweep(d),
      muffled: (d) => drumTypes.bell_tree.sounds.muted_clink(d),
      heeltoe: (d) => drumTypes.bell_tree.sounds.random_flutter(d)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  mark_tree: {
    name: 'Mark Tree',
    drums: [{ id: 0, label: 'Mark Tree', pitchMult: 1.0, color: 'silver', sizeValue: 23 }],
    sounds: {
      slow_descending_gliss: (d) => {
        playTablaSlideUp(1200 * d.pitchMult, 600 * d.pitchMult, 0.8);
        playNoise(0.8, 4000, state.currentTiltVolume * 0.6);
      },
      slow_ascending_gliss: (d) => {
        playTablaSlideUp(600 * d.pitchMult, 1200 * d.pitchMult, 0.8);
        playNoise(0.8, 4000, state.currentTiltVolume * 0.6);
      },
      rapid_shimmer_burst: (d) => {
        playNoise(0.4, 6000, state.currentTiltVolume * 1.3);
      },
      damped_silence_grab: (d) => playNoise(0.08, 3000, state.currentTiltVolume * 0.4),
      long_resonant_drift: (d) => {
        playNoise(1.2, 5000, state.currentTiltVolume * 0.8);
      },
      // Fallbacks
      bass: (d) => drumTypes.mark_tree.sounds.slow_descending_gliss(d),
      open: (d) => drumTypes.mark_tree.sounds.slow_ascending_gliss(d),
      slap: (d) => drumTypes.mark_tree.sounds.rapid_shimmer_burst(d),
      muffled: (d) => drumTypes.mark_tree.sounds.damped_silence_grab(d),
      heeltoe: (d) => drumTypes.mark_tree.sounds.long_resonant_drift(d)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  slide_whistle: {
    name: 'Slide Whistle',
    drums: [{ id: 0, label: 'Slide Whistle', pitchMult: 1.0, color: 'blue-light', sizeValue: 18 }],
    sounds: {
      glissando_up: (d) => playTablaSlideUp(220 * d.pitchMult, 550 * d.pitchMult, 0.7),
      glissando_down: (d) => playTablaSlideUp(550 * d.pitchMult, 220 * d.pitchMult, 0.7),
      rapid_trill_shake: (d) => playTablaSlideUp(440 * d.pitchMult, 1200 * d.pitchMult, 0.3),
      staccato_pip: (d) => playMembrane(330 * d.pitchMult, 0.06, 1.0, false),
      wobbly_vibrato: (d) => playTablaSlideUp(300 * d.pitchMult, 330 * d.pitchMult, 0.4),
      // Fallbacks
      bass: (d) => drumTypes.slide_whistle.sounds.glissando_up(d),
      open: (d) => drumTypes.slide_whistle.sounds.glissando_down(d),
      slap: (d) => drumTypes.slide_whistle.sounds.rapid_trill_shake(d),
      muffled: (d) => drumTypes.slide_whistle.sounds.staccato_pip(d),
      heeltoe: (d) => drumTypes.slide_whistle.sounds.wobbly_vibrato(d)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  ratchet: {
    name: 'Ratchet',
    drums: [{ id: 0, label: 'Ratchet', pitchMult: 1.0, color: 'wood', sizeValue: 16 }],
    sounds: {
      slow_grind: (d) => playNoise(0.2, 1400, state.currentTiltVolume * 1.1),
      quick_crack: (d) => playNoise(0.1, 1600, state.currentTiltVolume * 0.8),
      loud_crack_burst: (d) => playNoise(0.05, 2000, state.currentTiltVolume * 1.4),
      damped_creak: (d) => playNoise(0.03, 900, state.currentTiltVolume * 0.4),
      continuous_whirl: (d) => playNoise(0.4, 1500, state.currentTiltVolume * 0.9),
      // Fallbacks
      bass: (d) => drumTypes.ratchet.sounds.slow_grind(d),
      open: (d) => drumTypes.ratchet.sounds.quick_crack(d),
      slap: (d) => drumTypes.ratchet.sounds.loud_crack_burst(d),
      muffled: (d) => drumTypes.ratchet.sounds.damped_creak(d),
      heeltoe: (d) => drumTypes.ratchet.sounds.continuous_whirl(d)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  angklung: {
    name: 'Angklung',
    drums: [
      { id: 0, label: 'Low Bamboo', pitchMult: 1.0, color: 'wood', sizeValue: 20 },
      { id: 1, label: 'Mid Bamboo', pitchMult: 1.25, color: 'wood-medium', sizeValue: 17 },
      { id: 2, label: 'High Bamboo', pitchMult: 1.5, color: 'wood-light', sizeValue: 14 }
    ],
    sounds: {
      low_bamboo_strike: (d) =>
        playMembrane((d.id === 0 ? 220 : d.id === 1 ? 277 : 330) * d.pitchMult, 0.4, 1.0, false),
      resonant_shake: (d) => {
        playMembrane((d.id === 0 ? 220 : d.id === 1 ? 277 : 330) * d.pitchMult, 0.8, 1.0, false);
        playNoise(0.4, 1200, state.currentTiltVolume * 0.6);
      },
      sharp_accent_strike: (d) => {
        playMembrane((d.id === 0 ? 440 : d.id === 1 ? 554 : 660) * d.pitchMult, 0.3, 1.0, true);
        playNoise(0.2, 1800, state.currentTiltVolume * 0.8);
      },
      muted_bamboo_click: (d) =>
        playMembrane((d.id === 0 ? 220 : d.id === 1 ? 277 : 330) * d.pitchMult, 0.08, 1.0, false),
      rapid_tremolo_flutter: (d) => {
        playNoise(0.5, 1000, state.currentTiltVolume * 0.8);
      },
      // Fallbacks
      bass: (d) => drumTypes.angklung.sounds.low_bamboo_strike(d),
      open: (d) => drumTypes.angklung.sounds.resonant_shake(d),
      slap: (d) => drumTypes.angklung.sounds.sharp_accent_strike(d),
      muffled: (d) => drumTypes.angklung.sounds.muted_bamboo_click(d),
      heeltoe: (d) => drumTypes.angklung.sounds.rapid_tremolo_flutter(d)
    },
    defaultLeft: 0,
    defaultRight: 2
  },
  jaw_harp: {
    name: 'Jaw Harp',
    drums: [{ id: 0, label: 'Jaw Harp', pitchMult: 1.0, color: 'silver', sizeValue: 14 }],
    sounds: {
      low_drone_pluck: (d) => playTablaSlideUp(75 * d.pitchMult, 110 * d.pitchMult, 0.5),
      vocal_envelope_sweep: (d) => playTablaSlideUp(110 * d.pitchMult, 220 * d.pitchMult, 0.4),
      high_harmonic_pluck: (d) => playTablaSlideUp(150 * d.pitchMult, 440 * d.pitchMult, 0.25),
      muted_pluck: (d) => playMembrane(85 * d.pitchMult, 0.05, 1.0, false),
      rapid_rebound_strum: (d) => playTablaSlideUp(90 * d.pitchMult, 95 * d.pitchMult, 0.6),
      // Fallbacks
      bass: (d) => drumTypes.jaw_harp.sounds.low_drone_pluck(d),
      open: (d) => drumTypes.jaw_harp.sounds.vocal_envelope_sweep(d),
      slap: (d) => drumTypes.jaw_harp.sounds.high_harmonic_pluck(d),
      muffled: (d) => drumTypes.jaw_harp.sounds.muted_pluck(d),
      heeltoe: (d) => drumTypes.jaw_harp.sounds.rapid_rebound_strum(d)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  timpani: {
    name: 'Timpani',
    drums: [{ id: 0, label: 'Kettledrum', pitchMult: 1.0, color: 'silver', sizeValue: 26 }],
    sounds: {
      boom_strike: (d) => playMembrane(60 * d.pitchMult, 1.8, 1.05),
      pedal_glide_up: (d) => playTablaSlideUp(60 * d.pitchMult, 120 * d.pitchMult, 1.2),
      pedal_glide_down: (d) => playTablaSlideUp(120 * d.pitchMult, 50 * d.pitchMult, 1.2),
      staccato_mute: (d) => playMembrane(75 * d.pitchMult, 0.25, 1.05, true),
      roll: (d) => playMembrane(70 * d.pitchMult, 0.1, 1.0, false),
      // Fallbacks
      bass: (d) => drumTypes.timpani.sounds.boom_strike(d),
      open: (d) => drumTypes.timpani.sounds.pedal_glide_up(d),
      slap: (d) => drumTypes.timpani.sounds.roll(d),
      muffled: (d) => drumTypes.timpani.sounds.staccato_mute(d),
      heeltoe: (d) => drumTypes.timpani.sounds.pedal_glide_down(d)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  kotsuzumi: {
    name: 'Kotsuzumi',
    drums: [{ id: 0, label: 'Kotsuzumi', pitchMult: 1.0, color: 'wood', sizeValue: 16 }],
    sounds: {
      pon_open: (d) => playMembrane(220 * d.pitchMult, 0.6, 1.15),
      pu_squeeze: (d) => playTablaSlideUp(180 * d.pitchMult, 360 * d.pitchMult, 0.4),
      chi_slap: (d) => {
        playMembrane(400 * d.pitchMult, 0.12, 1.1, true);
        playNoise(0.04, 2500, state.currentTiltVolume * 0.4);
      },
      ta_muffled: (d) => playMembrane(280 * d.pitchMult, 0.08, 1.0),
      iya_vocal: (d) => playMembrane(520 * d.pitchMult, 0.25, 1.3, false),
      // Fallbacks
      bass: (d) => drumTypes.kotsuzumi.sounds.pon_open(d),
      open: (d) => drumTypes.kotsuzumi.sounds.pu_squeeze(d),
      slap: (d) => drumTypes.kotsuzumi.sounds.chi_slap(d),
      muffled: (d) => drumTypes.kotsuzumi.sounds.ta_muffled(d),
      heeltoe: (d) => drumTypes.kotsuzumi.sounds.iya_vocal(d)
    },
    defaultLeft: 0,
    defaultRight: 0
  },
  dhol: {
    name: 'Dhol',
    drums: [
      { id: 0, label: 'Dagga (Bass)', pitchMult: 0.8, color: 'dark', sizeValue: 22 },
      { id: 1, label: 'Tilli (Treble)', pitchMult: 1.25, color: 'blonde', sizeValue: 19 }
    ],
    sounds: {
      dagga_bass: (d) => playMembrane(65 * d.pitchMult, 0.65, 1.25),
      tilli_slap: (d) => {
        playMembrane(450 * d.pitchMult, 0.1, 1.1, true);
        playNoise(0.08, 3000, state.currentTiltVolume * 0.8);
      },
      tilli_open: (d) => playMembrane(320 * d.pitchMult, 0.35, 1.0),
      muffled_slap: (d) => playMembrane(240 * d.pitchMult, 0.08, 1.0, true),
      tremolo_roll: (d) => {
        playMembrane(400 * d.pitchMult, 0.08, 1.05);
        playNoise(0.04, 3200, state.currentTiltVolume * 0.5);
      },
      // Fallbacks
      bass: (d) => drumTypes.dhol.sounds.dagga_bass(d),
      open: (d) => drumTypes.dhol.sounds.tilli_open(d),
      slap: (d) => drumTypes.dhol.sounds.tilli_slap(d),
      muffled: (d) => drumTypes.dhol.sounds.muffled_slap(d),
      heeltoe: (d) => drumTypes.dhol.sounds.tremolo_roll(d)
    },
    defaultLeft: 0,
    defaultRight: 1
  },
  agogo: {
    name: 'Agogô',
    drums: [
      { id: 0, label: 'Low Bell', pitchMult: 1.0, color: 'wood', sizeValue: 16 },
      { id: 1, label: 'High Bell', pitchMult: 1.35, color: 'blonde', sizeValue: 14 }
    ],
    sounds: {
      low_strike: (d) => playMembrane(293.66 * d.pitchMult, 0.5, 1.0, false),
      high_strike: (d) => playMembrane(440 * d.pitchMult, 0.45, 1.0, false),
      squeezed_click: (d) => playMembrane(650 * d.pitchMult, 0.08, 1.05, true),
      rim_ping: (d) => playMembrane(880 * d.pitchMult, 0.15, 1.0, false),
      roll: (d) => playMembrane(400 * d.pitchMult, 0.08, 1.0),
      // Fallbacks
      bass: (d) => drumTypes.agogo.sounds.low_strike(d),
      open: (d) => drumTypes.agogo.sounds.high_strike(d),
      slap: (d) => drumTypes.agogo.sounds.squeezed_click(d),
      muffled: (d) => drumTypes.agogo.sounds.rim_ping(d),
      heeltoe: (d) => drumTypes.agogo.sounds.roll(d)
    },
    defaultLeft: 0,
    defaultRight: 1
  },
  claves: {
    name: 'Claves',
    drums: [{ id: 0, label: 'Claves', pitchMult: 1.0, color: 'terracotta', sizeValue: 15 }],
    sounds: {
      strike_resonant: (d) => {
        playMembrane(1200 * d.pitchMult, 0.08, 1.0, true);
        playAttackClick(0.01, 3500, state.currentTiltVolume * 0.9);
      },
      strike_muffled: (d) => playMembrane(1450 * d.pitchMult, 0.03, 1.0, true),
      tap_soft: (d) => playMembrane(1100 * d.pitchMult, 0.05, 1.0, false),
      roll_rapid: (d) => playMembrane(1300 * d.pitchMult, 0.04, 1.0),
      scrape: (d) => playNoise(0.12, 2800, state.currentTiltVolume * 0.4),
      // Fallbacks
      bass: (d) => drumTypes.claves.sounds.strike_resonant(d),
      open: (d) => drumTypes.claves.sounds.strike_resonant(d),
      slap: (d) => drumTypes.claves.sounds.strike_muffled(d),
      muffled: (d) => drumTypes.claves.sounds.strike_muffled(d),
      heeltoe: (d) => drumTypes.claves.sounds.scrape(d)
    },
    defaultLeft: 0,
    defaultRight: 0
  }
};

export const instrumentTouches = {
  conga: [
    { id: 'bass', label: 'BASS', shortName: 'BASS' },
    { id: 'open', label: 'OPEN', shortName: 'OPEN' },
    { id: 'slap', label: 'SLAP', shortName: 'SLAP' },
    { id: 'muffled', label: 'MUFFLED', shortName: 'MUFF' },
    { id: 'heeltoe', label: 'HEEL/TOE', shortName: 'H/T' }
  ],
  djembe: [
    { id: 'bass', label: 'BASS', shortName: 'BASS' },
    { id: 'open', label: 'OPEN', shortName: 'OPEN' },
    { id: 'slap', label: 'SLAP', shortName: 'SLAP' },
    { id: 'muffled', label: 'MUFFLED', shortName: 'MUFF' },
    { id: 'heeltoe', label: 'HEEL/TOE', shortName: 'H/T' }
  ],
  bongo: [
    { id: 'bass', label: 'BASS', shortName: 'BASS' },
    { id: 'open', label: 'OPEN', shortName: 'OPEN' },
    { id: 'slap', label: 'SLAP', shortName: 'SLAP' },
    { id: 'muffled', label: 'MUFFLED', shortName: 'MUFF' },
    { id: 'heeltoe', label: 'HEEL/TOE', shortName: 'H/T' }
  ],
  bata: [
    { id: 'enu_bass', label: 'ENU BASS', shortName: 'ENUB' },
    { id: 'enu_open', label: 'ENU OPEN', shortName: 'ENUO' },
    { id: 'enu_muffled', label: 'ENU MUFFLED', shortName: 'ENUM' },
    { id: 'chacha', label: 'CHACHA', shortName: 'CHAC' },
    { id: 'bells', label: 'BELLS', shortName: 'BELL' },
    { id: 'bass', label: 'BASS', shortName: 'BASS' },
    { id: 'open', label: 'OPEN', shortName: 'OPEN' },
    { id: 'muffled', label: 'MUFFLED', shortName: 'MUFF' },
    { id: 'slap', label: 'SLAP', shortName: 'SLAP' },
    { id: 'heeltoe', label: 'HEEL/TOE', shortName: 'H/T' }
  ],
  pandero: [
    { id: 'bass', label: 'BASS', shortName: 'BASS' },
    { id: 'open', label: 'OPEN', shortName: 'OPEN' },
    { id: 'slap', label: 'SLAP', shortName: 'SLAP' },
    { id: 'muffled', label: 'MUFFLED', shortName: 'MUFF' },
    { id: 'heeltoe', label: 'HEEL/TOE', shortName: 'H/T' }
  ],
  barril: [
    { id: 'bass', label: 'BASS', shortName: 'BASS' },
    { id: 'open', label: 'OPEN', shortName: 'OPEN' },
    { id: 'slap', label: 'SLAP', shortName: 'SLAP' },
    { id: 'muffled', label: 'MUFFLED', shortName: 'MUFF' },
    { id: 'heeltoe', label: 'HEEL/TOE', shortName: 'H/T' }
  ],
  bombo: [
    { id: 'parche_bass', label: 'PARCHE BASS', shortName: 'PARC' },
    { id: 'parche_open', label: 'PARCHE OPEN', shortName: 'PARC' },
    { id: 'parche_muffled', label: 'PARCHE MUFFLED', shortName: 'PARC' },
    { id: 'aro_wood', label: 'ARO WOOD', shortName: 'AROW' },
    { id: 'aro_click', label: 'ARO CLICK', shortName: 'AROC' },
    { id: 'bass', label: 'BASS', shortName: 'BASS' },
    { id: 'open', label: 'OPEN', shortName: 'OPEN' },
    { id: 'muffled', label: 'MUFFLED', shortName: 'MUFF' },
    { id: 'slap', label: 'SLAP', shortName: 'SLAP' },
    { id: 'heeltoe', label: 'HEEL/TOE', shortName: 'H/T' }
  ],
  tabla: [
    { id: 'bayan_ga', label: 'BAYAN GA', shortName: 'BAYA' },
    { id: 'bayan_ke', label: 'BAYAN KE', shortName: 'BAYA' },
    { id: 'dayan_ta', label: 'DAYAN TA', shortName: 'DAYA' },
    { id: 'dayan_na', label: 'DAYAN NA', shortName: 'DAYA' },
    { id: 'dayan_tin', label: 'DAYAN TIN', shortName: 'DAYA' },
    { id: 'bass', label: 'BASS', shortName: 'BASS' },
    { id: 'open', label: 'OPEN', shortName: 'OPEN' },
    { id: 'muffled', label: 'MUFFLED', shortName: 'MUFF' },
    { id: 'slap', label: 'SLAP', shortName: 'SLAP' },
    { id: 'heeltoe', label: 'HEEL/TOE', shortName: 'H/T' }
  ],
  darbuka: [
    { id: 'doum', label: 'DOUM', shortName: 'DOUM' },
    { id: 'tak', label: 'TAK', shortName: 'TAK' },
    { id: 'sak', label: 'SAK', shortName: 'SAK' },
    { id: 'ka', label: 'KA', shortName: 'KA' },
    { id: 'muffled', label: 'MUFFLED', shortName: 'MUFF' },
    { id: 'bass', label: 'BASS', shortName: 'BASS' },
    { id: 'open', label: 'OPEN', shortName: 'OPEN' },
    { id: 'slap', label: 'SLAP', shortName: 'SLAP' },
    { id: 'heeltoe', label: 'HEEL/TOE', shortName: 'H/T' }
  ],
  timbales: [
    { id: 'open', label: 'OPEN', shortName: 'OPEN' },
    { id: 'rimshot', label: 'RIMSHOT', shortName: 'RIM' },
    { id: 'paila', label: 'PAILA', shortName: 'PAIL' },
    { id: 'muffled', label: 'MUFFLED', shortName: 'MUFF' },
    { id: 'bell', label: 'BELL', shortName: 'BELL' },
    { id: 'bass', label: 'BASS', shortName: 'BASS' },
    { id: 'slap', label: 'SLAP', shortName: 'SLAP' },
    { id: 'heeltoe', label: 'HEEL/TOE', shortName: 'H/T' }
  ],
  cajon: [
    { id: 'bass', label: 'BASS', shortName: 'BASS' },
    { id: 'slap', label: 'SLAP', shortName: 'SLAP' },
    { id: 'edge', label: 'EDGE', shortName: 'EDGE' },
    { id: 'tap', label: 'TAP', shortName: 'TAP' },
    { id: 'open', label: 'OPEN', shortName: 'OPEN' },
    { id: 'muffled', label: 'MUFFLED', shortName: 'MUFF' },
    { id: 'heeltoe', label: 'HEEL/TOE', shortName: 'H/T' }
  ],
  candombe: [
    { id: 'bass', label: 'BASS', shortName: 'BASS' },
    { id: 'open', label: 'OPEN', shortName: 'OPEN' },
    { id: 'slap', label: 'SLAP', shortName: 'SLAP' },
    { id: 'muffled', label: 'MUFFLED', shortName: 'MUFF' },
    { id: 'heeltoe', label: 'HEEL/TOE', shortName: 'H/T' }
  ],
  gwoka: [
    { id: 'bass', label: 'BASS', shortName: 'BASS' },
    { id: 'open', label: 'OPEN', shortName: 'OPEN' },
    { id: 'slap', label: 'SLAP', shortName: 'SLAP' },
    { id: 'muffled', label: 'MUFFLED', shortName: 'MUFF' },
    { id: 'heeltoe', label: 'HEEL/TOE', shortName: 'H/T' }
  ],
  tanbou: [
    { id: 'bass', label: 'BASS', shortName: 'BASS' },
    { id: 'open', label: 'OPEN', shortName: 'OPEN' },
    { id: 'slap', label: 'SLAP', shortName: 'SLAP' },
    { id: 'muffled', label: 'MUFFLED', shortName: 'MUFF' },
    { id: 'heeltoe', label: 'HEEL/TOE', shortName: 'H/T' }
  ],
  chinese: [
    { id: 'bass', label: 'BASS', shortName: 'BASS' },
    { id: 'open', label: 'OPEN', shortName: 'OPEN' },
    { id: 'slap', label: 'SLAP', shortName: 'SLAP' },
    { id: 'muffled', label: 'MUFFLED', shortName: 'MUFF' },
    { id: 'heeltoe', label: 'HEEL/TOE', shortName: 'H/T' }
  ],
  daiko: [
    { id: 'bass', label: 'BASS', shortName: 'BASS' },
    { id: 'open', label: 'OPEN', shortName: 'OPEN' },
    { id: 'slap', label: 'SLAP', shortName: 'SLAP' },
    { id: 'muffled', label: 'MUFFLED', shortName: 'MUFF' },
    { id: 'heeltoe', label: 'HEEL/TOE', shortName: 'H/T' }
  ],
  bodhran: [
    { id: 'bass_open', label: 'OPEN BASS', shortName: 'BASS' },
    { id: 'rim_click', label: 'RIM CLICK', shortName: 'RIM' },
    { id: 'pressed_high', label: 'PRESSED HIGH', shortName: 'HIGH' },
    { id: 'roll', label: 'MALLET ROLL', shortName: 'ROLL' },
    { id: 'muffled_slap', label: 'MUFFLED SLAP', shortName: 'MUFF' }
  ],
  talkingdrum: [
    { id: 'low_squeeze', label: 'LOW SQUEEZE', shortName: 'LOWS' },
    { id: 'high_squeeze', label: 'HIGH SQUEEZE', shortName: 'HIGS' },
    { id: 'pitch_bend', label: 'PITCH GLIDE', shortName: 'GLID' },
    { id: 'open_unreleased', label: 'OPEN STRIKE', shortName: 'OPEN' },
    { id: 'slap', label: 'CRISP SLAP', shortName: 'SLAP' }
  ],
  cuica: [
    { id: 'high_press', label: 'HIGH PRESS', shortName: 'HIGH' },
    { id: 'low_loose', label: 'LOW LOOSE', shortName: 'LOW' },
    { id: 'friction_stroke', label: 'FRICTION STROKE', shortName: 'FRIC' },
    { id: 'accent_groan', label: 'ACCENT GROAN', shortName: 'GRON' },
    { id: 'mute', label: 'MUTE', shortName: 'MUTE' }
  ],
  doira: [
    { id: 'bass', label: 'BASS', shortName: 'BASS' },
    { id: 'open', label: 'OPEN', shortName: 'OPEN' },
    { id: 'slap', label: 'SLAP', shortName: 'SLAP' },
    { id: 'muffled', label: 'MUFFLED', shortName: 'MUFF' },
    { id: 'heeltoe', label: 'HEEL/TOE', shortName: 'H/T' }
  ],
  uchiwadaiko: [
    { id: 'bass', label: 'BASS', shortName: 'BASS' },
    { id: 'open', label: 'OPEN', shortName: 'OPEN' },
    { id: 'slap', label: 'SLAP', shortName: 'SLAP' },
    { id: 'muffled', label: 'MUFFLED', shortName: 'MUFF' },
    { id: 'heeltoe', label: 'HEEL/TOE', shortName: 'H/T' }
  ],
  oceandrum: [
    { id: 'bass', label: 'BASS', shortName: 'BASS' },
    { id: 'open', label: 'OPEN', shortName: 'OPEN' },
    { id: 'slap', label: 'SLAP', shortName: 'SLAP' },
    { id: 'muffled', label: 'MUFFLED', shortName: 'MUFF' },
    { id: 'heeltoe', label: 'HEEL/TOE', shortName: 'H/T' }
  ],
  janggu: [
    { id: 'bass', label: 'BASS', shortName: 'BASS' },
    { id: 'open', label: 'OPEN', shortName: 'OPEN' },
    { id: 'slap', label: 'SLAP', shortName: 'SLAP' },
    { id: 'muffled', label: 'MUFFLED', shortName: 'MUFF' },
    { id: 'heeltoe', label: 'HEEL/TOE', shortName: 'H/T' }
  ],
  zabumba: [
    { id: 'bass', label: 'BASS', shortName: 'BASS' },
    { id: 'open', label: 'OPEN', shortName: 'OPEN' },
    { id: 'slap', label: 'SLAP', shortName: 'SLAP' },
    { id: 'muffled', label: 'MUFFLED', shortName: 'MUFF' },
    { id: 'heeltoe', label: 'HEEL/TOE', shortName: 'H/T' }
  ],
  mridangam: [
    { id: 'bass', label: 'BASS', shortName: 'BASS' },
    { id: 'open', label: 'OPEN', shortName: 'OPEN' },
    { id: 'slap', label: 'SLAP', shortName: 'SLAP' },
    { id: 'muffled', label: 'MUFFLED', shortName: 'MUFF' },
    { id: 'heeltoe', label: 'HEEL/TOE', shortName: 'H/T' }
  ],
  udu: [
    { id: 'bass', label: 'BASS', shortName: 'BASS' },
    { id: 'open', label: 'OPEN', shortName: 'OPEN' },
    { id: 'slap', label: 'SLAP', shortName: 'SLAP' },
    { id: 'muffled', label: 'MUFFLED', shortName: 'MUFF' },
    { id: 'heeltoe', label: 'HEEL/TOE', shortName: 'H/T' }
  ],
  thunderdrum: [
    { id: 'bass', label: 'BASS', shortName: 'BASS' },
    { id: 'open', label: 'OPEN', shortName: 'OPEN' },
    { id: 'slap', label: 'SLAP', shortName: 'SLAP' },
    { id: 'muffled', label: 'MUFFLED', shortName: 'MUFF' },
    { id: 'heeltoe', label: 'HEEL/TOE', shortName: 'H/T' }
  ],
  waterdrums: [
    { id: 'bass', label: 'BASS', shortName: 'BASS' },
    { id: 'open', label: 'OPEN', shortName: 'OPEN' },
    { id: 'slap', label: 'SLAP', shortName: 'SLAP' },
    { id: 'muffled', label: 'MUFFLED', shortName: 'MUFF' },
    { id: 'heeltoe', label: 'HEEL/TOE', shortName: 'H/T' }
  ],
  vibraslap: [
    { id: 'bass', label: 'BASS', shortName: 'BASS' },
    { id: 'open', label: 'OPEN', shortName: 'OPEN' },
    { id: 'slap', label: 'SLAP', shortName: 'SLAP' },
    { id: 'muffled', label: 'MUFFLED', shortName: 'MUFF' },
    { id: 'heeltoe', label: 'HEEL/TOE', shortName: 'H/T' }
  ],
  flexatone: [
    { id: 'bass', label: 'BASS', shortName: 'BASS' },
    { id: 'open', label: 'OPEN', shortName: 'OPEN' },
    { id: 'slap', label: 'SLAP', shortName: 'SLAP' },
    { id: 'muffled', label: 'MUFFLED', shortName: 'MUFF' },
    { id: 'heeltoe', label: 'HEEL/TOE', shortName: 'H/T' }
  ],
  waterphone: [
    { id: 'bass', label: 'BASS', shortName: 'BASS' },
    { id: 'open', label: 'OPEN', shortName: 'OPEN' },
    { id: 'slap', label: 'SLAP', shortName: 'SLAP' },
    { id: 'muffled', label: 'MUFFLED', shortName: 'MUFF' },
    { id: 'heeltoe', label: 'HEEL/TOE', shortName: 'H/T' }
  ],
  handpan: [
    { id: 'bass', label: 'BASS', shortName: 'BASS' },
    { id: 'open', label: 'OPEN', shortName: 'OPEN' },
    { id: 'slap', label: 'SLAP', shortName: 'SLAP' },
    { id: 'muffled', label: 'MUFFLED', shortName: 'MUFF' },
    { id: 'heeltoe', label: 'HEEL/TOE', shortName: 'H/T' }
  ],
  steelpan: [
    { id: 'bass', label: 'BASS', shortName: 'BASS' },
    { id: 'open', label: 'OPEN', shortName: 'OPEN' },
    { id: 'slap', label: 'SLAP', shortName: 'SLAP' },
    { id: 'muffled', label: 'MUFFLED', shortName: 'MUFF' },
    { id: 'heeltoe', label: 'HEEL/TOE', shortName: 'H/T' }
  ],
  ghatam: [
    { id: 'bass', label: 'BASS', shortName: 'BASS' },
    { id: 'open', label: 'OPEN', shortName: 'OPEN' },
    { id: 'slap', label: 'SLAP', shortName: 'SLAP' },
    { id: 'muffled', label: 'MUFFLED', shortName: 'MUFF' },
    { id: 'heeltoe', label: 'HEEL/TOE', shortName: 'H/T' }
  ],
  daf: [
    { id: 'bass', label: 'BASS', shortName: 'BASS' },
    { id: 'open', label: 'OPEN', shortName: 'OPEN' },
    { id: 'slap', label: 'SLAP', shortName: 'SLAP' },
    { id: 'muffled', label: 'MUFFLED', shortName: 'MUFF' },
    { id: 'heeltoe', label: 'HEEL/TOE', shortName: 'H/T' }
  ],
  riq: [
    { id: 'bass', label: 'BASS', shortName: 'BASS' },
    { id: 'open', label: 'OPEN', shortName: 'OPEN' },
    { id: 'slap', label: 'SLAP', shortName: 'SLAP' },
    { id: 'muffled', label: 'MUFFLED', shortName: 'MUFF' },
    { id: 'heeltoe', label: 'HEEL/TOE', shortName: 'H/T' }
  ],
  surdo: [
    { id: 'bass', label: 'BASS', shortName: 'BASS' },
    { id: 'open', label: 'OPEN', shortName: 'OPEN' },
    { id: 'slap', label: 'SLAP', shortName: 'SLAP' },
    { id: 'muffled', label: 'MUFFLED', shortName: 'MUFF' },
    { id: 'heeltoe', label: 'HEEL/TOE', shortName: 'H/T' }
  ],
  pandeiro: [
    { id: 'bass', label: 'BASS', shortName: 'BASS' },
    { id: 'open', label: 'OPEN', shortName: 'OPEN' },
    { id: 'slap', label: 'SLAP', shortName: 'SLAP' },
    { id: 'muffled', label: 'MUFFLED', shortName: 'MUFF' },
    { id: 'heeltoe', label: 'HEEL/TOE', shortName: 'H/T' }
  ],
  tamborim: [
    { id: 'bass', label: 'BASS', shortName: 'BASS' },
    { id: 'open', label: 'OPEN', shortName: 'OPEN' },
    { id: 'slap', label: 'SLAP', shortName: 'SLAP' },
    { id: 'muffled', label: 'MUFFLED', shortName: 'MUFF' },
    { id: 'heeltoe', label: 'HEEL/TOE', shortName: 'H/T' }
  ],
  repinique: [
    { id: 'bass', label: 'BASS', shortName: 'BASS' },
    { id: 'open', label: 'OPEN', shortName: 'OPEN' },
    { id: 'slap', label: 'SLAP', shortName: 'SLAP' },
    { id: 'muffled', label: 'MUFFLED', shortName: 'MUFF' },
    { id: 'heeltoe', label: 'HEEL/TOE', shortName: 'H/T' }
  ],
  bendir: [
    { id: 'bass', label: 'BASS', shortName: 'BASS' },
    { id: 'open', label: 'OPEN', shortName: 'OPEN' },
    { id: 'slap', label: 'SLAP', shortName: 'SLAP' },
    { id: 'muffled', label: 'MUFFLED', shortName: 'MUFF' },
    { id: 'heeltoe', label: 'HEEL/TOE', shortName: 'H/T' }
  ],
  davul: [
    { id: 'bass', label: 'BASS', shortName: 'BASS' },
    { id: 'open', label: 'OPEN', shortName: 'OPEN' },
    { id: 'slap', label: 'SLAP', shortName: 'SLAP' },
    { id: 'muffled', label: 'MUFFLED', shortName: 'MUFF' },
    { id: 'heeltoe', label: 'HEEL/TOE', shortName: 'H/T' }
  ],
  ashiko: [
    { id: 'bass', label: 'BASS', shortName: 'BASS' },
    { id: 'open', label: 'OPEN', shortName: 'OPEN' },
    { id: 'slap', label: 'SLAP', shortName: 'SLAP' },
    { id: 'muffled', label: 'MUFFLED', shortName: 'MUFF' },
    { id: 'heeltoe', label: 'HEEL/TOE', shortName: 'H/T' }
  ],
  dunun: [
    { id: 'bass', label: 'BASS', shortName: 'BASS' },
    { id: 'open', label: 'OPEN', shortName: 'OPEN' },
    { id: 'slap', label: 'SLAP', shortName: 'SLAP' },
    { id: 'muffled', label: 'MUFFLED', shortName: 'MUFF' },
    { id: 'heeltoe', label: 'HEEL/TOE', shortName: 'H/T' }
  ],
  teponaztli: [
    { id: 'bass', label: 'BASS', shortName: 'BASS' },
    { id: 'open', label: 'OPEN', shortName: 'OPEN' },
    { id: 'slap', label: 'SLAP', shortName: 'SLAP' },
    { id: 'muffled', label: 'MUFFLED', shortName: 'MUFF' },
    { id: 'heeltoe', label: 'HEEL/TOE', shortName: 'H/T' }
  ],
  snare_drum: [
    { id: 'bass', label: 'BASS', shortName: 'BASS' },
    { id: 'open', label: 'OPEN', shortName: 'OPEN' },
    { id: 'slap', label: 'SLAP', shortName: 'SLAP' },
    { id: 'muffled', label: 'MUFFLED', shortName: 'MUFF' },
    { id: 'heeltoe', label: 'HEEL/TOE', shortName: 'H/T' }
  ],
  shekere: [
    { id: 'bass', label: 'BASS', shortName: 'BASS' },
    { id: 'open', label: 'OPEN', shortName: 'OPEN' },
    { id: 'slap', label: 'SLAP', shortName: 'SLAP' },
    { id: 'muffled', label: 'MUFFLED', shortName: 'MUFF' },
    { id: 'heeltoe', label: 'HEEL/TOE', shortName: 'H/T' }
  ],
  kanjira: [
    { id: 'bass', label: 'BASS', shortName: 'BASS' },
    { id: 'open', label: 'OPEN', shortName: 'OPEN' },
    { id: 'slap', label: 'SLAP', shortName: 'SLAP' },
    { id: 'muffled', label: 'MUFFLED', shortName: 'MUFF' },
    { id: 'heeltoe', label: 'HEEL/TOE', shortName: 'H/T' }
  ],
  tammorra: [
    { id: 'bass', label: 'BASS', shortName: 'BASS' },
    { id: 'open', label: 'OPEN', shortName: 'OPEN' },
    { id: 'slap', label: 'SLAP', shortName: 'SLAP' },
    { id: 'muffled', label: 'MUFFLED', shortName: 'MUFF' },
    { id: 'heeltoe', label: 'HEEL/TOE', shortName: 'H/T' }
  ],
  framed_rumbla: [
    { id: 'bass', label: 'BASS', shortName: 'BASS' },
    { id: 'open', label: 'OPEN', shortName: 'OPEN' },
    { id: 'slap', label: 'SLAP', shortName: 'SLAP' },
    { id: 'muffled', label: 'MUFFLED', shortName: 'MUFF' },
    { id: 'heeltoe', label: 'HEEL/TOE', shortName: 'H/T' }
  ],
  gran_cassa: [
    { id: 'bass', label: 'BASS', shortName: 'BASS' },
    { id: 'open', label: 'OPEN', shortName: 'OPEN' },
    { id: 'slap', label: 'SLAP', shortName: 'SLAP' },
    { id: 'muffled', label: 'MUFFLED', shortName: 'MUFF' },
    { id: 'heeltoe', label: 'HEEL/TOE', shortName: 'H/T' }
  ],
  lions_roar: [
    { id: 'bass', label: 'BASS', shortName: 'BASS' },
    { id: 'open', label: 'OPEN', shortName: 'OPEN' },
    { id: 'slap', label: 'SLAP', shortName: 'SLAP' },
    { id: 'muffled', label: 'MUFFLED', shortName: 'MUFF' },
    { id: 'heeltoe', label: 'HEEL/TOE', shortName: 'H/T' }
  ],
  chocalho: [
    { id: 'bass', label: 'BASS', shortName: 'BASS' },
    { id: 'open', label: 'OPEN', shortName: 'OPEN' },
    { id: 'slap', label: 'SLAP', shortName: 'SLAP' },
    { id: 'muffled', label: 'MUFFLED', shortName: 'MUFF' },
    { id: 'heeltoe', label: 'HEEL/TOE', shortName: 'H/T' }
  ],
  alfaia: [
    { id: 'bass', label: 'BASS', shortName: 'BASS' },
    { id: 'open', label: 'OPEN', shortName: 'OPEN' },
    { id: 'slap', label: 'SLAP', shortName: 'SLAP' },
    { id: 'muffled', label: 'MUFFLED', shortName: 'MUFF' },
    { id: 'heeltoe', label: 'HEEL/TOE', shortName: 'H/T' }
  ],
  log_drum: [
    { id: 'bass', label: 'BASS', shortName: 'BASS' },
    { id: 'open', label: 'OPEN', shortName: 'OPEN' },
    { id: 'slap', label: 'SLAP', shortName: 'SLAP' },
    { id: 'muffled', label: 'MUFFLED', shortName: 'MUFF' },
    { id: 'heeltoe', label: 'HEEL/TOE', shortName: 'H/T' }
  ],
  temple_blocks: [
    { id: 'center_strike', label: 'CENTER STRIKE', shortName: 'CENT' },
    { id: 'rim_strike', label: 'RIM STRIKE', shortName: 'RIM' },
    { id: 'roll_rapid', label: 'MALLET ROLL', shortName: 'ROLL' },
    { id: 'muffled_strike', label: 'MUFFLED STRIKE', shortName: 'MUFF' },
    { id: 'double_tap', label: 'DOUBLE TAP', shortName: 'DBL' }
  ],
  frog_rasp: [
    { id: 'slow_grate', label: 'SLOW GRATE', shortName: 'GRAT' },
    { id: 'quick_scrape', label: 'QUICK SCRAPE', shortName: 'SCRP' },
    { id: 'head_tap', label: 'HEAD TAP', shortName: 'TAP' },
    { id: 'muffled_tap', label: 'MUFFLED TAP', shortName: 'MUFF' },
    { id: 'long_croak', label: 'LONG CROAK', shortName: 'CROK' }
  ],
  spring_drum: [
    { id: 'thunder_shake', label: 'THUNDER SHAKE', shortName: 'SHK' },
    { id: 'spring_boing', label: 'SPRING BOING', shortName: 'BOIN' },
    { id: 'lightning_crack', label: 'LIGHTNING CRACK', shortName: 'CRAC' },
    { id: 'muffled_rumble', label: 'MUFFLED RUMBLE', shortName: 'RUMB' },
    { id: 'long_wobble', label: 'LONG WOBBLE', shortName: 'WOBL' }
  ],
  thongophone: [
    { id: 'deep_thump', label: 'DEEP THUMP', shortName: 'THMP' },
    { id: 'open_slap', label: 'OPEN SLAP', shortName: 'SLAP' },
    { id: 'sharp_pop', label: 'SHARP POP', shortName: 'POP' },
    { id: 'muted_thud', label: 'MUTED THUD', shortName: 'THUD' },
    { id: 'paddle_slap', label: 'PADDLE SLAP', shortName: 'PADL' }
  ],
  gubguba: [
    { id: 'string_pluck_up', label: 'STRUM UP', shortName: 'PLK+' },
    { id: 'string_pluck_down', label: 'STRUM DOWN', shortName: 'PLK-' },
    { id: 'high_snap', label: 'HIGH SNAP', shortName: 'SNAP' },
    { id: 'muffled_plink', label: 'MUFFLED PLINK', shortName: 'PLNK' },
    { id: 'vocal_growl', label: 'VOCAL GROWL', shortName: 'GRWL' }
  ],
  cabasa: [
    { id: 'twist_scrape', label: 'TWIST SCRAPE', shortName: 'TWST' },
    { id: 'quick_shake', label: 'QUICK SHAKE', shortName: 'SHK' },
    { id: 'rim_strike', label: 'FRAME STRIKE', shortName: 'FRM' },
    { id: 'muffled_shake', label: 'MUFFLED SHAKE', shortName: 'MUFF' },
    { id: 'long_roll', label: 'LONG ROLL', shortName: 'ROLL' }
  ],
  rainstick: [
    { id: 'slow_tilt', label: 'SLOW TILT', shortName: 'TILT' },
    { id: 'quick_flip', label: 'QUICK FLIP', shortName: 'FLIP' },
    { id: 'sharp_accent', label: 'SHARP ACCENT', shortName: 'ACC' },
    { id: 'muted_swish', label: 'MUTED SWISH', shortName: 'SWS' },
    { id: 'continuous_downpour', label: 'DOWNPOUR', shortName: 'RAIN' }
  ],
  kokiriko: [
    { id: 'cascade_fall', label: 'CASCADE FALL', shortName: 'FALL' },
    { id: 'rapid_clatter', label: 'RAPID CLATTER', shortName: 'CLAT' },
    { id: 'snap_accent', label: 'SNAP ACCENT', shortName: 'SNAP' },
    { id: 'soft_rustle', label: 'SOFT RUSTLE', shortName: 'RUST' },
    { id: 'wave_sweep', label: 'WAVE SWEEP', shortName: 'SWEP' }
  ],
  guiro: [
    { id: 'long_scrape', label: 'LONG SCRAPE', shortName: 'SCR+' },
    { id: 'short_scrape', label: 'SHORT SCRAPE', shortName: 'SCR-' },
    { id: 'comb_tap', label: 'COMB TAP', shortName: 'TAP' },
    { id: 'muffled_tap', label: 'MUFFLED TAP', shortName: 'MUFF' },
    { id: 'double_scrape', label: 'DOUBLE SCRAPE', shortName: 'DBL' }
  ],
  spoons_bones: [
    { id: 'knee_strike', label: 'KNEE STRIKE', shortName: 'KNEE' },
    { id: 'finger_roll', label: 'FINGER ROLL', shortName: 'ROLL' },
    { id: 'hand_clack', label: 'HAND CLACK', shortName: 'CLAK' },
    { id: 'pocket_pop', label: 'POCKET POP', shortName: 'POP' },
    { id: 'slide_scrape', label: 'SLIDE SCRAPE', shortName: 'SCRP' }
  ],
  washboard: [
    { id: 'wood_tap', label: 'WOOD TAP', shortName: 'TAP' },
    { id: 'metal_scrape', label: 'METAL SCRAPE', shortName: 'SCRP' },
    { id: 'snare_flick', label: 'SNARE FLICK', shortName: 'FLIK' },
    { id: 'cowbell_hit', label: 'COWBELL HIT', shortName: 'BELL' },
    { id: 'chafing_drag', label: 'CHAFING DRAG', shortName: 'DRAG' }
  ],
  friction_drum: [
    { id: 'rub_low', label: 'RUB LOW', shortName: 'LO_R' },
    { id: 'rub_high', label: 'RUB HIGH', shortName: 'HI_R' },
    { id: 'squeak_short', label: 'SQUEAK SHORT', shortName: 'SQK' },
    { id: 'groan_muffled', label: 'GROAN MUFFLED', shortName: 'GRN' },
    { id: 'rhythmic_pulse', label: 'RHYTHMIC PULSE', shortName: 'PLS' }
  ],
  kundu: [
    { id: 'sacred_bass', label: 'SACRED BASS', shortName: 'BASS' },
    { id: 'open_pop', label: 'OPEN POP', shortName: 'POP' },
    { id: 'center_slap', label: 'CENTER SLAP', shortName: 'SLAP' },
    { id: 'muffled_rim', label: 'MUFFLED RIM', shortName: 'RIM' },
    { id: 'beeswax_accent', label: 'BEESWAX ACCENT', shortName: 'WAX' }
  ],
  tar_drum: [
    { id: 'deep_doum', label: 'DEEP DOUM', shortName: 'DOUM' },
    { id: 'resonant_tak', label: 'RESONANT TAK', shortName: 'TAK' },
    { id: 'sharp_kah', label: 'SHARP KAH', shortName: 'KAH' },
    { id: 'finger_mute', label: 'FINGER MUTE', shortName: 'MUTE' },
    { id: 'thumb_roll', label: 'THUMB ROLL', shortName: 'ROLL' }
  ],
  gome: [
    { id: 'heel_bass_bend', label: 'HEEL BASS BEND', shortName: 'BEND' },
    { id: 'open_hand_slap', label: 'OPEN HAND SLAP', shortName: 'OPEN' },
    { id: 'sharp_corner_slap', label: 'CORNER SLAP', shortName: 'SLAP' },
    { id: 'muted_box_tap', label: 'MUTED BOX TAP', shortName: 'MUFF' },
    { id: 'heel_pitch_drop', label: 'HEEL PITCH DROP', shortName: 'DROP' }
  ],
  boomwhackers: [
    { id: 'tube_strike_low', label: 'TUBE STRIKE LOW', shortName: 'LOW' },
    { id: 'tube_strike_mid', label: 'TUBE STRIKE MID', shortName: 'MID' },
    { id: 'tube_strike_high', label: 'TUBE STRIKE HIGH', shortName: 'HIGH' },
    { id: 'muted_flat_strike', label: 'MUTED FLAT', shortName: 'MUTE' },
    { id: 'end_cap_strike', label: 'END CAP TAP', shortName: 'CAP' }
  ],
  tank_drum: [
    { id: 'deep_mallet_strike', label: 'DEEP MALLET', shortName: 'MALL' },
    { id: 'pure_finger_tap', label: 'PURE FINGER TAP', shortName: 'TAP' },
    { id: 'rim_harmonic_strike', label: 'RIM HARMONIC', shortName: 'HARM' },
    { id: 'damped_hand_mute', label: 'HAND MUTE', shortName: 'MUTE' },
    { id: 'sustained_bell_ring', label: 'BELL SUSTAIN', shortName: 'BELL' }
  ],
  bell_tree: [
    { id: 'single_bell_chime', label: 'SINGLE CHIME', shortName: 'CHIM' },
    { id: 'ascending_sweep', label: 'ASCENDING SWEEP', shortName: 'SWP+' },
    { id: 'descending_sweep', label: 'DESCENDING SWEEP', shortName: 'SWP-' },
    { id: 'muted_clink', label: 'MUTED CLINK', shortName: 'MUTE' },
    { id: 'random_flutter', label: 'RANDOM FLUTTER', shortName: 'FLTR' }
  ],
  mark_tree: [
    { id: 'slow_descending_gliss', label: 'DESCENDING GLISS', shortName: 'GLS-' },
    { id: 'slow_ascending_gliss', label: 'ASCENDING GLISS', shortName: 'GLS+' },
    { id: 'rapid_shimmer_burst', label: 'SHIMMER BURST', shortName: 'BURS' },
    { id: 'damped_silence_grab', label: 'SILENCE GRAB', shortName: 'GRAB' },
    { id: 'long_resonant_drift', label: 'RESONANT DRIFT', shortName: 'DRFT' }
  ],
  slide_whistle: [
    { id: 'glissando_up', label: 'GLISSANDO UP', shortName: 'UP' },
    { id: 'glissando_down', label: 'GLISSANDO DOWN', shortName: 'DOWN' },
    { id: 'rapid_trill_shake', label: 'TRILL SHAKE', shortName: 'TRIL' },
    { id: 'staccato_pip', label: 'STACCATO PIP', shortName: 'PIP' },
    { id: 'wobbly_vibrato', label: 'WOBBLY VIBRATO', shortName: 'VIB' }
  ],
  ratchet: [
    { id: 'slow_grind', label: 'SLOW GRIND', shortName: 'GRND' },
    { id: 'quick_crack', label: 'QUICK CRANK', shortName: 'CRNK' },
    { id: 'loud_crack_burst', label: 'LOUD CRACK', shortName: 'CRAC' },
    { id: 'damped_creak', label: 'DAMPED CREAK', shortName: 'CREK' },
    { id: 'continuous_whirl', label: 'CONTINUOUS WHIRL', shortName: 'WHRL' }
  ],
  angklung: [
    { id: 'low_bamboo_strike', label: 'LOW BAMBOO', shortName: 'LOW' },
    { id: 'resonant_shake', label: 'RESONANT SHAKE', shortName: 'SHK' },
    { id: 'sharp_accent_strike', label: 'SHARP ACCENT', shortName: 'ACC' },
    { id: 'muted_bamboo_click', label: 'MUTED CLICK', shortName: 'CLIC' },
    { id: 'rapid_tremolo_flutter', label: 'RAPID TREMOLO', shortName: 'FLTR' }
  ],
  jaw_harp: [
    { id: 'low_drone_pluck', label: 'LOW DRONE', shortName: 'DRON' },
    { id: 'vocal_envelope_sweep', label: 'VOCAL SWEEP', shortName: 'SWEP' },
    { id: 'high_harmonic_pluck', label: 'HIGH HARMONIC', shortName: 'HARM' },
    { id: 'muted_pluck', label: 'MUTED PLUCK', shortName: 'MUTE' },
    { id: 'rapid_rebound_strum', label: 'REBOUND STRUM', shortName: 'STRM' }
  ],
  timpani: [
    { id: 'boom_strike', label: 'BOOM STRIKE', shortName: 'BOOM' },
    { id: 'pedal_glide_up', label: 'PEDAL GLIDE UP', shortName: 'GLUP' },
    { id: 'pedal_glide_down', label: 'PEDAL GLIDE DOWN', shortName: 'GLDN' },
    { id: 'staccato_mute', label: 'STACCATO MUTE', shortName: 'MUTE' },
    { id: 'roll', label: 'TIMPANI ROLL', shortName: 'ROLL' }
  ],
  kotsuzumi: [
    { id: 'pon_open', label: 'PON OPEN', shortName: 'PON' },
    { id: 'pu_squeeze', label: 'PU SQUEEZE', shortName: 'PU' },
    { id: 'chi_slap', label: 'CHI SLAP', shortName: 'CHI' },
    { id: 'ta_muffled', label: 'TA MUFFLED', shortName: 'TA' },
    { id: 'iya_vocal', label: 'IYA CALL', shortName: 'IYA' }
  ],
  dhol: [
    { id: 'dagga_bass', label: 'DAGGA BASS', shortName: 'DAGG' },
    { id: 'tilli_slap', label: 'TILLI SLAP', shortName: 'SLAP' },
    { id: 'tilli_open', label: 'TILLI OPEN', shortName: 'OPEN' },
    { id: 'muffled_slap', label: 'MUFFLED SLAP', shortName: 'MUFF' },
    { id: 'tremolo_roll', label: 'TREMOLO ROLL', shortName: 'ROLL' }
  ],
  agogo: [
    { id: 'low_strike', label: 'LOW BELL', shortName: 'LOW' },
    { id: 'high_strike', label: 'HIGH BELL', shortName: 'HIGH' },
    { id: 'squeezed_click', label: 'SQUEEZED CLICK', shortName: 'CLIC' },
    { id: 'rim_ping', label: 'RIM PING', shortName: 'PING' },
    { id: 'roll', label: 'BELL ROLL', shortName: 'ROLL' }
  ],
  claves: [
    { id: 'strike_resonant', label: 'RESONANT CLICK', shortName: 'CLIC' },
    { id: 'strike_muffled', label: 'MUFFLED CLICK', shortName: 'MUFF' },
    { id: 'tap_soft', label: 'SOFT TAP', shortName: 'TAP' },
    { id: 'roll_rapid', label: 'RAPID ROLL', shortName: 'ROLL' },
    { id: 'scrape', label: 'WOOD SCRAPE', shortName: 'SCRP' }
  ]
};

export const instrumentMappings = {
  conga: {
    left: {
      up: 'bass',
      upLong: 'bass',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'heeltoe',
      right: 'open',
      rightLong: 'open',
      trigger: 'heeltoe'
    },
    right: {
      up: 'bass',
      upLong: 'bass',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'heeltoe',
      right: 'open',
      rightLong: 'open',
      trigger: 'slap'
    }
  },
  djembe: {
    left: {
      up: 'bass',
      upLong: 'bass',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'heeltoe',
      right: 'open',
      rightLong: 'open',
      trigger: 'heeltoe'
    },
    right: {
      up: 'bass',
      upLong: 'bass',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'heeltoe',
      right: 'open',
      rightLong: 'open',
      trigger: 'slap'
    }
  },
  bongo: {
    left: {
      up: 'bass',
      upLong: 'bass',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'heeltoe',
      right: 'open',
      rightLong: 'open',
      trigger: 'heeltoe'
    },
    right: {
      up: 'bass',
      upLong: 'bass',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'heeltoe',
      right: 'open',
      rightLong: 'open',
      trigger: 'slap'
    }
  },
  bata: {
    left: {
      up: 'bass',
      upLong: 'enu_bass',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'enu_open',
      right: 'open',
      rightLong: 'enu_muffled',
      trigger: 'chacha'
    },
    right: {
      up: 'bass',
      upLong: 'enu_bass',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'enu_open',
      right: 'open',
      rightLong: 'enu_muffled',
      trigger: 'chacha'
    }
  },
  pandero: {
    left: {
      up: 'bass',
      upLong: 'bass',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'heeltoe',
      right: 'open',
      rightLong: 'open',
      trigger: 'heeltoe'
    },
    right: {
      up: 'bass',
      upLong: 'bass',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'heeltoe',
      right: 'open',
      rightLong: 'open',
      trigger: 'slap'
    }
  },
  barril: {
    left: {
      up: 'bass',
      upLong: 'bass',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'heeltoe',
      right: 'open',
      rightLong: 'open',
      trigger: 'heeltoe'
    },
    right: {
      up: 'bass',
      upLong: 'bass',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'heeltoe',
      right: 'open',
      rightLong: 'open',
      trigger: 'slap'
    }
  },
  bombo: {
    left: {
      up: 'bass',
      upLong: 'parche_bass',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'parche_open',
      right: 'open',
      rightLong: 'parche_muffled',
      trigger: 'aro_wood'
    },
    right: {
      up: 'bass',
      upLong: 'parche_bass',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'parche_open',
      right: 'open',
      rightLong: 'parche_muffled',
      trigger: 'aro_wood'
    }
  },
  tabla: {
    left: {
      up: 'bass',
      upLong: 'bayan_ga',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'bayan_ke',
      right: 'open',
      rightLong: 'dayan_ta',
      trigger: 'dayan_na'
    },
    right: {
      up: 'bass',
      upLong: 'bayan_ga',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'bayan_ke',
      right: 'open',
      rightLong: 'dayan_ta',
      trigger: 'dayan_na'
    }
  },
  darbuka: {
    left: {
      up: 'bass',
      upLong: 'doum',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'tak',
      right: 'open',
      rightLong: 'sak',
      trigger: 'ka'
    },
    right: {
      up: 'bass',
      upLong: 'doum',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'tak',
      right: 'open',
      rightLong: 'sak',
      trigger: 'ka'
    }
  },
  timbales: {
    left: {
      up: 'bass',
      upLong: 'rimshot',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'paila',
      right: 'open',
      rightLong: 'bell',
      trigger: 'heeltoe'
    },
    right: {
      up: 'bass',
      upLong: 'rimshot',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'paila',
      right: 'open',
      rightLong: 'bell',
      trigger: 'slap'
    }
  },
  cajon: {
    left: {
      up: 'bass',
      upLong: 'edge',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'tap',
      right: 'open',
      rightLong: 'open',
      trigger: 'heeltoe'
    },
    right: {
      up: 'bass',
      upLong: 'edge',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'tap',
      right: 'open',
      rightLong: 'open',
      trigger: 'slap'
    }
  },
  candombe: {
    left: {
      up: 'bass',
      upLong: 'bass',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'heeltoe',
      right: 'open',
      rightLong: 'open',
      trigger: 'heeltoe'
    },
    right: {
      up: 'bass',
      upLong: 'bass',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'heeltoe',
      right: 'open',
      rightLong: 'open',
      trigger: 'slap'
    }
  },
  gwoka: {
    left: {
      up: 'bass',
      upLong: 'bass',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'heeltoe',
      right: 'open',
      rightLong: 'open',
      trigger: 'heeltoe'
    },
    right: {
      up: 'bass',
      upLong: 'bass',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'heeltoe',
      right: 'open',
      rightLong: 'open',
      trigger: 'slap'
    }
  },
  tanbou: {
    left: {
      up: 'bass',
      upLong: 'bass',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'heeltoe',
      right: 'open',
      rightLong: 'open',
      trigger: 'heeltoe'
    },
    right: {
      up: 'bass',
      upLong: 'bass',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'heeltoe',
      right: 'open',
      rightLong: 'open',
      trigger: 'slap'
    }
  },
  chinese: {
    left: {
      up: 'bass',
      upLong: 'bass',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'heeltoe',
      right: 'open',
      rightLong: 'open',
      trigger: 'heeltoe'
    },
    right: {
      up: 'bass',
      upLong: 'bass',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'heeltoe',
      right: 'open',
      rightLong: 'open',
      trigger: 'slap'
    }
  },
  daiko: {
    left: {
      up: 'bass',
      upLong: 'bass',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'heeltoe',
      right: 'open',
      rightLong: 'open',
      trigger: 'heeltoe'
    },
    right: {
      up: 'bass',
      upLong: 'bass',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'heeltoe',
      right: 'open',
      rightLong: 'open',
      trigger: 'slap'
    }
  },
  bodhran: {
    left: {
      up: 'bass_open',
      upLong: 'bass_open',
      down: 'muffled_slap',
      downLong: 'rim_click',
      left: 'roll',
      leftLong: 'roll',
      right: 'pressed_high',
      rightLong: 'pressed_high',
      trigger: 'roll'
    },
    right: {
      up: 'bass_open',
      upLong: 'bass_open',
      down: 'muffled_slap',
      downLong: 'rim_click',
      left: 'roll',
      leftLong: 'roll',
      right: 'pressed_high',
      rightLong: 'pressed_high',
      trigger: 'muffled_slap'
    }
  },
  talkingdrum: {
    left: {
      up: 'open_unreleased',
      upLong: 'open_unreleased',
      down: 'slap',
      downLong: 'high_squeeze',
      left: 'pitch_bend',
      leftLong: 'pitch_bend',
      right: 'low_squeeze',
      rightLong: 'low_squeeze',
      trigger: 'pitch_bend'
    },
    right: {
      up: 'open_unreleased',
      upLong: 'open_unreleased',
      down: 'slap',
      downLong: 'high_squeeze',
      left: 'pitch_bend',
      leftLong: 'pitch_bend',
      right: 'low_squeeze',
      rightLong: 'low_squeeze',
      trigger: 'slap'
    }
  },
  cuica: {
    left: {
      up: 'low_loose',
      upLong: 'low_loose',
      down: 'high_press',
      downLong: 'mute',
      left: 'accent_groan',
      leftLong: 'accent_groan',
      right: 'friction_stroke',
      rightLong: 'friction_stroke',
      trigger: 'accent_groan'
    },
    right: {
      up: 'low_loose',
      upLong: 'low_loose',
      down: 'high_press',
      downLong: 'mute',
      left: 'accent_groan',
      leftLong: 'accent_groan',
      right: 'friction_stroke',
      rightLong: 'friction_stroke',
      trigger: 'high_press'
    }
  },
  doira: {
    left: {
      up: 'bass',
      upLong: 'bass',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'heeltoe',
      right: 'open',
      rightLong: 'open',
      trigger: 'heeltoe'
    },
    right: {
      up: 'bass',
      upLong: 'bass',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'heeltoe',
      right: 'open',
      rightLong: 'open',
      trigger: 'slap'
    }
  },
  uchiwadaiko: {
    left: {
      up: 'bass',
      upLong: 'bass',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'heeltoe',
      right: 'open',
      rightLong: 'open',
      trigger: 'heeltoe'
    },
    right: {
      up: 'bass',
      upLong: 'bass',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'heeltoe',
      right: 'open',
      rightLong: 'open',
      trigger: 'slap'
    }
  },
  oceandrum: {
    left: {
      up: 'bass',
      upLong: 'bass',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'heeltoe',
      right: 'open',
      rightLong: 'open',
      trigger: 'heeltoe'
    },
    right: {
      up: 'bass',
      upLong: 'bass',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'heeltoe',
      right: 'open',
      rightLong: 'open',
      trigger: 'slap'
    }
  },
  janggu: {
    left: {
      up: 'bass',
      upLong: 'bass',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'heeltoe',
      right: 'open',
      rightLong: 'open',
      trigger: 'heeltoe'
    },
    right: {
      up: 'bass',
      upLong: 'bass',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'heeltoe',
      right: 'open',
      rightLong: 'open',
      trigger: 'slap'
    }
  },
  zabumba: {
    left: {
      up: 'bass',
      upLong: 'bass',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'heeltoe',
      right: 'open',
      rightLong: 'open',
      trigger: 'heeltoe'
    },
    right: {
      up: 'bass',
      upLong: 'bass',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'heeltoe',
      right: 'open',
      rightLong: 'open',
      trigger: 'slap'
    }
  },
  mridangam: {
    left: {
      up: 'bass',
      upLong: 'bass',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'heeltoe',
      right: 'open',
      rightLong: 'open',
      trigger: 'heeltoe'
    },
    right: {
      up: 'bass',
      upLong: 'bass',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'heeltoe',
      right: 'open',
      rightLong: 'open',
      trigger: 'slap'
    }
  },
  udu: {
    left: {
      up: 'bass',
      upLong: 'bass',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'heeltoe',
      right: 'open',
      rightLong: 'open',
      trigger: 'heeltoe'
    },
    right: {
      up: 'bass',
      upLong: 'bass',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'heeltoe',
      right: 'open',
      rightLong: 'open',
      trigger: 'slap'
    }
  },
  thunderdrum: {
    left: {
      up: 'bass',
      upLong: 'bass',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'heeltoe',
      right: 'open',
      rightLong: 'open',
      trigger: 'heeltoe'
    },
    right: {
      up: 'bass',
      upLong: 'bass',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'heeltoe',
      right: 'open',
      rightLong: 'open',
      trigger: 'slap'
    }
  },
  waterdrums: {
    left: {
      up: 'bass',
      upLong: 'bass',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'heeltoe',
      right: 'open',
      rightLong: 'open',
      trigger: 'heeltoe'
    },
    right: {
      up: 'bass',
      upLong: 'bass',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'heeltoe',
      right: 'open',
      rightLong: 'open',
      trigger: 'slap'
    }
  },
  vibraslap: {
    left: {
      up: 'bass',
      upLong: 'bass',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'heeltoe',
      right: 'open',
      rightLong: 'open',
      trigger: 'heeltoe'
    },
    right: {
      up: 'bass',
      upLong: 'bass',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'heeltoe',
      right: 'open',
      rightLong: 'open',
      trigger: 'slap'
    }
  },
  flexatone: {
    left: {
      up: 'bass',
      upLong: 'bass',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'heeltoe',
      right: 'open',
      rightLong: 'open',
      trigger: 'heeltoe'
    },
    right: {
      up: 'bass',
      upLong: 'bass',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'heeltoe',
      right: 'open',
      rightLong: 'open',
      trigger: 'slap'
    }
  },
  waterphone: {
    left: {
      up: 'bass',
      upLong: 'bass',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'heeltoe',
      right: 'open',
      rightLong: 'open',
      trigger: 'heeltoe'
    },
    right: {
      up: 'bass',
      upLong: 'bass',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'heeltoe',
      right: 'open',
      rightLong: 'open',
      trigger: 'slap'
    }
  },
  handpan: {
    left: {
      up: 'bass',
      upLong: 'bass',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'heeltoe',
      right: 'open',
      rightLong: 'open',
      trigger: 'heeltoe'
    },
    right: {
      up: 'bass',
      upLong: 'bass',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'heeltoe',
      right: 'open',
      rightLong: 'open',
      trigger: 'slap'
    }
  },
  steelpan: {
    left: {
      up: 'bass',
      upLong: 'bass',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'heeltoe',
      right: 'open',
      rightLong: 'open',
      trigger: 'heeltoe'
    },
    right: {
      up: 'bass',
      upLong: 'bass',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'heeltoe',
      right: 'open',
      rightLong: 'open',
      trigger: 'slap'
    }
  },
  ghatam: {
    left: {
      up: 'bass',
      upLong: 'bass',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'heeltoe',
      right: 'open',
      rightLong: 'open',
      trigger: 'heeltoe'
    },
    right: {
      up: 'bass',
      upLong: 'bass',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'heeltoe',
      right: 'open',
      rightLong: 'open',
      trigger: 'slap'
    }
  },
  daf: {
    left: {
      up: 'bass',
      upLong: 'bass',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'heeltoe',
      right: 'open',
      rightLong: 'open',
      trigger: 'heeltoe'
    },
    right: {
      up: 'bass',
      upLong: 'bass',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'heeltoe',
      right: 'open',
      rightLong: 'open',
      trigger: 'slap'
    }
  },
  riq: {
    left: {
      up: 'bass',
      upLong: 'bass',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'heeltoe',
      right: 'open',
      rightLong: 'open',
      trigger: 'heeltoe'
    },
    right: {
      up: 'bass',
      upLong: 'bass',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'heeltoe',
      right: 'open',
      rightLong: 'open',
      trigger: 'slap'
    }
  },
  surdo: {
    left: {
      up: 'bass',
      upLong: 'bass',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'heeltoe',
      right: 'open',
      rightLong: 'open',
      trigger: 'heeltoe'
    },
    right: {
      up: 'bass',
      upLong: 'bass',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'heeltoe',
      right: 'open',
      rightLong: 'open',
      trigger: 'slap'
    }
  },
  pandeiro: {
    left: {
      up: 'bass',
      upLong: 'bass',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'heeltoe',
      right: 'open',
      rightLong: 'open',
      trigger: 'heeltoe'
    },
    right: {
      up: 'bass',
      upLong: 'bass',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'heeltoe',
      right: 'open',
      rightLong: 'open',
      trigger: 'slap'
    }
  },
  tamborim: {
    left: {
      up: 'bass',
      upLong: 'bass',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'heeltoe',
      right: 'open',
      rightLong: 'open',
      trigger: 'heeltoe'
    },
    right: {
      up: 'bass',
      upLong: 'bass',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'heeltoe',
      right: 'open',
      rightLong: 'open',
      trigger: 'slap'
    }
  },
  repinique: {
    left: {
      up: 'bass',
      upLong: 'bass',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'heeltoe',
      right: 'open',
      rightLong: 'open',
      trigger: 'heeltoe'
    },
    right: {
      up: 'bass',
      upLong: 'bass',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'heeltoe',
      right: 'open',
      rightLong: 'open',
      trigger: 'slap'
    }
  },
  bendir: {
    left: {
      up: 'bass',
      upLong: 'bass',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'heeltoe',
      right: 'open',
      rightLong: 'open',
      trigger: 'heeltoe'
    },
    right: {
      up: 'bass',
      upLong: 'bass',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'heeltoe',
      right: 'open',
      rightLong: 'open',
      trigger: 'slap'
    }
  },
  davul: {
    left: {
      up: 'bass',
      upLong: 'bass',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'heeltoe',
      right: 'open',
      rightLong: 'open',
      trigger: 'heeltoe'
    },
    right: {
      up: 'bass',
      upLong: 'bass',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'heeltoe',
      right: 'open',
      rightLong: 'open',
      trigger: 'slap'
    }
  },
  ashiko: {
    left: {
      up: 'bass',
      upLong: 'bass',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'heeltoe',
      right: 'open',
      rightLong: 'open',
      trigger: 'heeltoe'
    },
    right: {
      up: 'bass',
      upLong: 'bass',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'heeltoe',
      right: 'open',
      rightLong: 'open',
      trigger: 'slap'
    }
  },
  dunun: {
    left: {
      up: 'bass',
      upLong: 'bass',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'heeltoe',
      right: 'open',
      rightLong: 'open',
      trigger: 'heeltoe'
    },
    right: {
      up: 'bass',
      upLong: 'bass',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'heeltoe',
      right: 'open',
      rightLong: 'open',
      trigger: 'slap'
    }
  },
  teponaztli: {
    left: {
      up: 'bass',
      upLong: 'bass',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'heeltoe',
      right: 'open',
      rightLong: 'open',
      trigger: 'heeltoe'
    },
    right: {
      up: 'bass',
      upLong: 'bass',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'heeltoe',
      right: 'open',
      rightLong: 'open',
      trigger: 'slap'
    }
  },
  snare_drum: {
    left: {
      up: 'bass',
      upLong: 'bass',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'heeltoe',
      right: 'open',
      rightLong: 'open',
      trigger: 'heeltoe'
    },
    right: {
      up: 'bass',
      upLong: 'bass',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'heeltoe',
      right: 'open',
      rightLong: 'open',
      trigger: 'slap'
    }
  },
  shekere: {
    left: {
      up: 'bass',
      upLong: 'bass',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'heeltoe',
      right: 'open',
      rightLong: 'open',
      trigger: 'heeltoe'
    },
    right: {
      up: 'bass',
      upLong: 'bass',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'heeltoe',
      right: 'open',
      rightLong: 'open',
      trigger: 'slap'
    }
  },
  kanjira: {
    left: {
      up: 'bass',
      upLong: 'bass',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'heeltoe',
      right: 'open',
      rightLong: 'open',
      trigger: 'heeltoe'
    },
    right: {
      up: 'bass',
      upLong: 'bass',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'heeltoe',
      right: 'open',
      rightLong: 'open',
      trigger: 'slap'
    }
  },
  tammorra: {
    left: {
      up: 'bass',
      upLong: 'bass',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'heeltoe',
      right: 'open',
      rightLong: 'open',
      trigger: 'heeltoe'
    },
    right: {
      up: 'bass',
      upLong: 'bass',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'heeltoe',
      right: 'open',
      rightLong: 'open',
      trigger: 'slap'
    }
  },
  framed_rumbla: {
    left: {
      up: 'bass',
      upLong: 'bass',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'heeltoe',
      right: 'open',
      rightLong: 'open',
      trigger: 'heeltoe'
    },
    right: {
      up: 'bass',
      upLong: 'bass',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'heeltoe',
      right: 'open',
      rightLong: 'open',
      trigger: 'slap'
    }
  },
  gran_cassa: {
    left: {
      up: 'bass',
      upLong: 'bass',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'heeltoe',
      right: 'open',
      rightLong: 'open',
      trigger: 'heeltoe'
    },
    right: {
      up: 'bass',
      upLong: 'bass',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'heeltoe',
      right: 'open',
      rightLong: 'open',
      trigger: 'slap'
    }
  },
  lions_roar: {
    left: {
      up: 'bass',
      upLong: 'bass',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'heeltoe',
      right: 'open',
      rightLong: 'open',
      trigger: 'heeltoe'
    },
    right: {
      up: 'bass',
      upLong: 'bass',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'heeltoe',
      right: 'open',
      rightLong: 'open',
      trigger: 'slap'
    }
  },
  chocalho: {
    left: {
      up: 'bass',
      upLong: 'bass',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'heeltoe',
      right: 'open',
      rightLong: 'open',
      trigger: 'heeltoe'
    },
    right: {
      up: 'bass',
      upLong: 'bass',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'heeltoe',
      right: 'open',
      rightLong: 'open',
      trigger: 'slap'
    }
  },
  alfaia: {
    left: {
      up: 'bass',
      upLong: 'bass',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'heeltoe',
      right: 'open',
      rightLong: 'open',
      trigger: 'heeltoe'
    },
    right: {
      up: 'bass',
      upLong: 'bass',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'heeltoe',
      right: 'open',
      rightLong: 'open',
      trigger: 'slap'
    }
  },
  log_drum: {
    left: {
      up: 'bass',
      upLong: 'bass',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'heeltoe',
      right: 'open',
      rightLong: 'open',
      trigger: 'heeltoe'
    },
    right: {
      up: 'bass',
      upLong: 'bass',
      down: 'slap',
      downLong: 'muffled',
      left: 'heeltoe',
      leftLong: 'heeltoe',
      right: 'open',
      rightLong: 'open',
      trigger: 'slap'
    }
  },
  temple_blocks: {
    left: {
      up: 'center_strike',
      upLong: 'center_strike',
      down: 'roll_rapid',
      downLong: 'muffled_strike',
      left: 'double_tap',
      leftLong: 'double_tap',
      right: 'rim_strike',
      rightLong: 'rim_strike',
      trigger: 'double_tap'
    },
    right: {
      up: 'center_strike',
      upLong: 'center_strike',
      down: 'roll_rapid',
      downLong: 'muffled_strike',
      left: 'double_tap',
      leftLong: 'double_tap',
      right: 'rim_strike',
      rightLong: 'rim_strike',
      trigger: 'roll_rapid'
    }
  },
  frog_rasp: {
    left: {
      up: 'slow_grate',
      upLong: 'slow_grate',
      down: 'head_tap',
      downLong: 'muffled_tap',
      left: 'long_croak',
      leftLong: 'long_croak',
      right: 'quick_scrape',
      rightLong: 'quick_scrape',
      trigger: 'long_croak'
    },
    right: {
      up: 'slow_grate',
      upLong: 'slow_grate',
      down: 'head_tap',
      downLong: 'muffled_tap',
      left: 'long_croak',
      leftLong: 'long_croak',
      right: 'quick_scrape',
      rightLong: 'quick_scrape',
      trigger: 'head_tap'
    }
  },
  spring_drum: {
    left: {
      up: 'thunder_shake',
      upLong: 'thunder_shake',
      down: 'lightning_crack',
      downLong: 'muffled_rumble',
      left: 'long_wobble',
      leftLong: 'long_wobble',
      right: 'spring_boing',
      rightLong: 'spring_boing',
      trigger: 'long_wobble'
    },
    right: {
      up: 'thunder_shake',
      upLong: 'thunder_shake',
      down: 'lightning_crack',
      downLong: 'muffled_rumble',
      left: 'long_wobble',
      leftLong: 'long_wobble',
      right: 'spring_boing',
      rightLong: 'spring_boing',
      trigger: 'lightning_crack'
    }
  },
  thongophone: {
    left: {
      up: 'deep_thump',
      upLong: 'deep_thump',
      down: 'sharp_pop',
      downLong: 'muted_thud',
      left: 'paddle_slap',
      leftLong: 'paddle_slap',
      right: 'open_slap',
      rightLong: 'open_slap',
      trigger: 'paddle_slap'
    },
    right: {
      up: 'deep_thump',
      upLong: 'deep_thump',
      down: 'sharp_pop',
      downLong: 'muted_thud',
      left: 'paddle_slap',
      leftLong: 'paddle_slap',
      right: 'open_slap',
      rightLong: 'open_slap',
      trigger: 'sharp_pop'
    }
  },
  gubguba: {
    left: {
      up: 'string_pluck_up',
      upLong: 'string_pluck_up',
      down: 'high_snap',
      downLong: 'muffled_plink',
      left: 'vocal_growl',
      leftLong: 'vocal_growl',
      right: 'string_pluck_down',
      rightLong: 'string_pluck_down',
      trigger: 'vocal_growl'
    },
    right: {
      up: 'string_pluck_up',
      upLong: 'string_pluck_up',
      down: 'high_snap',
      downLong: 'muffled_plink',
      left: 'vocal_growl',
      leftLong: 'vocal_growl',
      right: 'string_pluck_down',
      rightLong: 'string_pluck_down',
      trigger: 'high_snap'
    }
  },
  cabasa: {
    left: {
      up: 'twist_scrape',
      upLong: 'twist_scrape',
      down: 'rim_strike',
      downLong: 'muffled_shake',
      left: 'long_roll',
      leftLong: 'long_roll',
      right: 'quick_shake',
      rightLong: 'quick_shake',
      trigger: 'long_roll'
    },
    right: {
      up: 'twist_scrape',
      upLong: 'twist_scrape',
      down: 'rim_strike',
      downLong: 'muffled_shake',
      left: 'long_roll',
      leftLong: 'long_roll',
      right: 'quick_shake',
      rightLong: 'quick_shake',
      trigger: 'rim_strike'
    }
  },
  rainstick: {
    left: {
      up: 'slow_tilt',
      upLong: 'slow_tilt',
      down: 'sharp_accent',
      downLong: 'muted_swish',
      left: 'continuous_downpour',
      leftLong: 'continuous_downpour',
      right: 'quick_flip',
      rightLong: 'quick_flip',
      trigger: 'continuous_downpour'
    },
    right: {
      up: 'slow_tilt',
      upLong: 'slow_tilt',
      down: 'sharp_accent',
      downLong: 'muted_swish',
      left: 'continuous_downpour',
      leftLong: 'continuous_downpour',
      right: 'quick_flip',
      rightLong: 'quick_flip',
      trigger: 'sharp_accent'
    }
  },
  kokiriko: {
    left: {
      up: 'cascade_fall',
      upLong: 'cascade_fall',
      down: 'snap_accent',
      downLong: 'soft_rustle',
      left: 'wave_sweep',
      leftLong: 'wave_sweep',
      right: 'rapid_clatter',
      rightLong: 'rapid_clatter',
      trigger: 'wave_sweep'
    },
    right: {
      up: 'cascade_fall',
      upLong: 'cascade_fall',
      down: 'snap_accent',
      downLong: 'soft_rustle',
      left: 'wave_sweep',
      leftLong: 'wave_sweep',
      right: 'rapid_clatter',
      rightLong: 'rapid_clatter',
      trigger: 'snap_accent'
    }
  },
  guiro: {
    left: {
      up: 'long_scrape',
      upLong: 'long_scrape',
      down: 'comb_tap',
      downLong: 'muffled_tap',
      left: 'double_scrape',
      leftLong: 'double_scrape',
      right: 'short_scrape',
      rightLong: 'short_scrape',
      trigger: 'double_scrape'
    },
    right: {
      up: 'long_scrape',
      upLong: 'long_scrape',
      down: 'comb_tap',
      downLong: 'muffled_tap',
      left: 'double_scrape',
      leftLong: 'double_scrape',
      right: 'short_scrape',
      rightLong: 'short_scrape',
      trigger: 'comb_tap'
    }
  },
  spoons_bones: {
    left: {
      up: 'knee_strike',
      upLong: 'knee_strike',
      down: 'hand_clack',
      downLong: 'pocket_pop',
      left: 'slide_scrape',
      leftLong: 'slide_scrape',
      right: 'finger_roll',
      rightLong: 'finger_roll',
      trigger: 'slide_scrape'
    },
    right: {
      up: 'knee_strike',
      upLong: 'knee_strike',
      down: 'hand_clack',
      downLong: 'pocket_pop',
      left: 'slide_scrape',
      leftLong: 'slide_scrape',
      right: 'finger_roll',
      rightLong: 'finger_roll',
      trigger: 'hand_clack'
    }
  },
  washboard: {
    left: {
      up: 'wood_tap',
      upLong: 'wood_tap',
      down: 'snare_flick',
      downLong: 'cowbell_hit',
      left: 'chafing_drag',
      leftLong: 'chafing_drag',
      right: 'metal_scrape',
      rightLong: 'metal_scrape',
      trigger: 'chafing_drag'
    },
    right: {
      up: 'wood_tap',
      upLong: 'wood_tap',
      down: 'snare_flick',
      downLong: 'cowbell_hit',
      left: 'chafing_drag',
      leftLong: 'chafing_drag',
      right: 'metal_scrape',
      rightLong: 'metal_scrape',
      trigger: 'snare_flick'
    }
  },
  friction_drum: {
    left: {
      up: 'rub_low',
      upLong: 'rub_low',
      down: 'squeak_short',
      downLong: 'groan_muffled',
      left: 'rhythmic_pulse',
      leftLong: 'rhythmic_pulse',
      right: 'rub_high',
      rightLong: 'rub_high',
      trigger: 'rhythmic_pulse'
    },
    right: {
      up: 'rub_low',
      upLong: 'rub_low',
      down: 'squeak_short',
      downLong: 'groan_muffled',
      left: 'rhythmic_pulse',
      leftLong: 'rhythmic_pulse',
      right: 'rub_high',
      rightLong: 'rub_high',
      trigger: 'squeak_short'
    }
  },
  kundu: {
    left: {
      up: 'sacred_bass',
      upLong: 'sacred_bass',
      down: 'center_slap',
      downLong: 'muffled_rim',
      left: 'beeswax_accent',
      leftLong: 'beeswax_accent',
      right: 'open_pop',
      rightLong: 'open_pop',
      trigger: 'beeswax_accent'
    },
    right: {
      up: 'sacred_bass',
      upLong: 'sacred_bass',
      down: 'center_slap',
      downLong: 'muffled_rim',
      left: 'beeswax_accent',
      leftLong: 'beeswax_accent',
      right: 'open_pop',
      rightLong: 'open_pop',
      trigger: 'center_slap'
    }
  },
  tar_drum: {
    left: {
      up: 'deep_doum',
      upLong: 'deep_doum',
      down: 'sharp_kah',
      downLong: 'finger_mute',
      left: 'thumb_roll',
      leftLong: 'thumb_roll',
      right: 'resonant_tak',
      rightLong: 'resonant_tak',
      trigger: 'thumb_roll'
    },
    right: {
      up: 'deep_doum',
      upLong: 'deep_doum',
      down: 'sharp_kah',
      downLong: 'finger_mute',
      left: 'thumb_roll',
      leftLong: 'thumb_roll',
      right: 'resonant_tak',
      rightLong: 'resonant_tak',
      trigger: 'sharp_kah'
    }
  },
  gome: {
    left: {
      up: 'heel_bass_bend',
      upLong: 'heel_bass_bend',
      down: 'sharp_corner_slap',
      downLong: 'muted_box_tap',
      left: 'heel_pitch_drop',
      leftLong: 'heel_pitch_drop',
      right: 'open_hand_slap',
      rightLong: 'open_hand_slap',
      trigger: 'heel_pitch_drop'
    },
    right: {
      up: 'heel_bass_bend',
      upLong: 'heel_bass_bend',
      down: 'sharp_corner_slap',
      downLong: 'muted_box_tap',
      left: 'heel_pitch_drop',
      leftLong: 'heel_pitch_drop',
      right: 'open_hand_slap',
      rightLong: 'open_hand_slap',
      trigger: 'sharp_corner_slap'
    }
  },
  boomwhackers: {
    left: {
      up: 'tube_strike_low',
      upLong: 'tube_strike_low',
      down: 'tube_strike_high',
      downLong: 'muted_flat_strike',
      left: 'end_cap_strike',
      leftLong: 'end_cap_strike',
      right: 'tube_strike_mid',
      rightLong: 'tube_strike_mid',
      trigger: 'end_cap_strike'
    },
    right: {
      up: 'tube_strike_low',
      upLong: 'tube_strike_low',
      down: 'tube_strike_high',
      downLong: 'muted_flat_strike',
      left: 'end_cap_strike',
      leftLong: 'end_cap_strike',
      right: 'tube_strike_mid',
      rightLong: 'tube_strike_mid',
      trigger: 'tube_strike_high'
    }
  },
  tank_drum: {
    left: {
      up: 'deep_mallet_strike',
      upLong: 'deep_mallet_strike',
      down: 'rim_harmonic_strike',
      downLong: 'damped_hand_mute',
      left: 'sustained_bell_ring',
      leftLong: 'sustained_bell_ring',
      right: 'pure_finger_tap',
      rightLong: 'pure_finger_tap',
      trigger: 'sustained_bell_ring'
    },
    right: {
      up: 'deep_mallet_strike',
      upLong: 'deep_mallet_strike',
      down: 'rim_harmonic_strike',
      downLong: 'damped_hand_mute',
      left: 'sustained_bell_ring',
      leftLong: 'sustained_bell_ring',
      right: 'pure_finger_tap',
      rightLong: 'pure_finger_tap',
      trigger: 'rim_harmonic_strike'
    }
  },
  bell_tree: {
    left: {
      up: 'single_bell_chime',
      upLong: 'single_bell_chime',
      down: 'descending_sweep',
      downLong: 'muted_clink',
      left: 'random_flutter',
      leftLong: 'random_flutter',
      right: 'ascending_sweep',
      rightLong: 'ascending_sweep',
      trigger: 'random_flutter'
    },
    right: {
      up: 'single_bell_chime',
      upLong: 'single_bell_chime',
      down: 'descending_sweep',
      downLong: 'muted_clink',
      left: 'random_flutter',
      leftLong: 'random_flutter',
      right: 'ascending_sweep',
      rightLong: 'ascending_sweep',
      trigger: 'descending_sweep'
    }
  },
  mark_tree: {
    left: {
      up: 'slow_descending_gliss',
      upLong: 'slow_descending_gliss',
      down: 'rapid_shimmer_burst',
      downLong: 'damped_silence_grab',
      left: 'long_resonant_drift',
      leftLong: 'long_resonant_drift',
      right: 'slow_ascending_gliss',
      rightLong: 'slow_ascending_gliss',
      trigger: 'long_resonant_drift'
    },
    right: {
      up: 'slow_descending_gliss',
      upLong: 'slow_descending_gliss',
      down: 'rapid_shimmer_burst',
      downLong: 'damped_silence_grab',
      left: 'long_resonant_drift',
      leftLong: 'long_resonant_drift',
      right: 'slow_ascending_gliss',
      rightLong: 'slow_ascending_gliss',
      trigger: 'rapid_shimmer_burst'
    }
  },
  slide_whistle: {
    left: {
      up: 'glissando_up',
      upLong: 'glissando_up',
      down: 'rapid_trill_shake',
      downLong: 'staccato_pip',
      left: 'wobbly_vibrato',
      leftLong: 'wobbly_vibrato',
      right: 'glissando_down',
      rightLong: 'glissando_down',
      trigger: 'wobbly_vibrato'
    },
    right: {
      up: 'glissando_up',
      upLong: 'glissando_up',
      down: 'rapid_trill_shake',
      downLong: 'staccato_pip',
      left: 'wobbly_vibrato',
      leftLong: 'wobbly_vibrato',
      right: 'glissando_down',
      rightLong: 'glissando_down',
      trigger: 'rapid_trill_shake'
    }
  },
  ratchet: {
    left: {
      up: 'slow_grind',
      upLong: 'slow_grind',
      down: 'loud_crack_burst',
      downLong: 'damped_creak',
      left: 'continuous_whirl',
      leftLong: 'continuous_whirl',
      right: 'quick_crack',
      rightLong: 'quick_crack',
      trigger: 'continuous_whirl'
    },
    right: {
      up: 'slow_grind',
      upLong: 'slow_grind',
      down: 'loud_crack_burst',
      downLong: 'damped_creak',
      left: 'continuous_whirl',
      leftLong: 'continuous_whirl',
      right: 'quick_crack',
      rightLong: 'quick_crack',
      trigger: 'loud_crack_burst'
    }
  },
  angklung: {
    left: {
      up: 'low_bamboo_strike',
      upLong: 'low_bamboo_strike',
      down: 'sharp_accent_strike',
      downLong: 'muted_bamboo_click',
      left: 'rapid_tremolo_flutter',
      leftLong: 'rapid_tremolo_flutter',
      right: 'resonant_shake',
      rightLong: 'resonant_shake',
      trigger: 'rapid_tremolo_flutter'
    },
    right: {
      up: 'low_bamboo_strike',
      upLong: 'low_bamboo_strike',
      down: 'sharp_accent_strike',
      downLong: 'muted_bamboo_click',
      left: 'rapid_tremolo_flutter',
      leftLong: 'rapid_tremolo_flutter',
      right: 'resonant_shake',
      rightLong: 'resonant_shake',
      trigger: 'sharp_accent_strike'
    }
  },
  jaw_harp: {
    left: {
      up: 'low_drone_pluck',
      upLong: 'low_drone_pluck',
      down: 'high_harmonic_pluck',
      downLong: 'muted_pluck',
      left: 'rapid_rebound_strum',
      leftLong: 'rapid_rebound_strum',
      right: 'vocal_envelope_sweep',
      rightLong: 'vocal_envelope_sweep',
      trigger: 'rapid_rebound_strum'
    },
    right: {
      up: 'low_drone_pluck',
      upLong: 'low_drone_pluck',
      down: 'high_harmonic_pluck',
      downLong: 'muted_pluck',
      left: 'rapid_rebound_strum',
      leftLong: 'rapid_rebound_strum',
      right: 'vocal_envelope_sweep',
      rightLong: 'vocal_envelope_sweep',
      trigger: 'high_harmonic_pluck'
    }
  },
  timpani: {
    left: {
      up: 'boom_strike',
      upLong: 'boom_strike',
      down: 'staccato_mute',
      downLong: 'staccato_mute',
      left: 'pedal_glide_down',
      leftLong: 'pedal_glide_down',
      right: 'pedal_glide_up',
      rightLong: 'pedal_glide_up',
      trigger: 'roll'
    },
    right: {
      up: 'boom_strike',
      upLong: 'boom_strike',
      down: 'staccato_mute',
      downLong: 'staccato_mute',
      left: 'pedal_glide_down',
      leftLong: 'pedal_glide_down',
      right: 'pedal_glide_up',
      rightLong: 'pedal_glide_up',
      trigger: 'roll'
    }
  },
  kotsuzumi: {
    left: {
      up: 'pon_open',
      upLong: 'pon_open',
      down: 'ta_muffled',
      downLong: 'pu_squeeze',
      left: 'iya_vocal',
      leftLong: 'iya_vocal',
      right: 'pu_squeeze',
      rightLong: 'pu_squeeze',
      trigger: 'chi_slap'
    },
    right: {
      up: 'pon_open',
      upLong: 'pon_open',
      down: 'ta_muffled',
      downLong: 'pu_squeeze',
      left: 'iya_vocal',
      leftLong: 'iya_vocal',
      right: 'pu_squeeze',
      rightLong: 'pu_squeeze',
      trigger: 'chi_slap'
    }
  },
  dhol: {
    left: {
      up: 'dagga_bass',
      upLong: 'dagga_bass',
      down: 'muffled_slap',
      downLong: 'muffled_slap',
      left: 'tremolo_roll',
      leftLong: 'tremolo_roll',
      right: 'tilli_open',
      rightLong: 'tilli_open',
      trigger: 'tilli_slap'
    },
    right: {
      up: 'dagga_bass',
      upLong: 'dagga_bass',
      down: 'muffled_slap',
      downLong: 'muffled_slap',
      left: 'tremolo_roll',
      leftLong: 'tremolo_roll',
      right: 'tilli_open',
      rightLong: 'tilli_open',
      trigger: 'tilli_slap'
    }
  },
  agogo: {
    left: {
      up: 'low_strike',
      upLong: 'low_strike',
      down: 'squeezed_click',
      downLong: 'squeezed_click',
      left: 'roll',
      leftLong: 'roll',
      right: 'high_strike',
      rightLong: 'high_strike',
      trigger: 'high_strike'
    },
    right: {
      up: 'low_strike',
      upLong: 'low_strike',
      down: 'squeezed_click',
      downLong: 'squeezed_click',
      left: 'roll',
      leftLong: 'roll',
      right: 'high_strike',
      rightLong: 'high_strike',
      trigger: 'high_strike'
    }
  },
  claves: {
    left: {
      up: 'strike_resonant',
      upLong: 'strike_resonant',
      down: 'strike_muffled',
      downLong: 'scrape',
      left: 'tap_soft',
      leftLong: 'tap_soft',
      right: 'strike_resonant',
      rightLong: 'strike_resonant',
      trigger: 'scrape'
    },
    right: {
      up: 'strike_resonant',
      upLong: 'strike_resonant',
      down: 'strike_muffled',
      downLong: 'scrape',
      left: 'tap_soft',
      leftLong: 'tap_soft',
      right: 'strike_resonant',
      rightLong: 'strike_resonant',
      trigger: 'scrape'
    }
  }
};

export function getDefaultDrumSelection(instrument) {
  if (instrument === 'conga') return '5';
  if (instrument === 'bongo') return 'both';
  if (instrument === 'bata') return 'all';
  if (instrument === 'pandero') return 'all';
  if (instrument === 'barril') return 'both';
  if (instrument === 'bombo') return '1';
  if (instrument === 'tabla') return 'both';
  if (instrument === 'darbuka') return '1';
  if (instrument === 'timbales') return 'both';
  if (instrument === 'cajon') return '1';
  if (instrument === 'candombe') return 'all';
  if (instrument === 'gwoka') return 'both';
  if (instrument === 'chinese') return 'all';
  if (instrument === 'daiko') return 'all';
  if (instrument === 'bodhran') return '1';
  if (instrument === 'talkingdrum') return '1';
  if (instrument === 'cuica') return '1';
  if (instrument === 'doira') return '1';
  if (instrument === 'janggu') return 'both';
  if (instrument === 'mridangam') return 'both';
  if (instrument === 'handpan') return 'both';
  if (instrument === 'dunun') return 'all';
  if (instrument === 'log_drum') return 'both';
  if (instrument === 'temple_blocks') return 'all';
  if (instrument === 'thongophone') return 'all';
  if (instrument === 'boomwhackers') return 'all';
  if (instrument === 'tank_drum') return 'all';
  if (instrument === 'angklung') return 'all';
  if (instrument === 'timpani') return '1';
  if (instrument === 'kotsuzumi') return '1';
  if (instrument === 'dhol') return 'both';
  if (instrument === 'agogo') return 'both';
  if (instrument === 'claves') return '1';

  return '1';
}

export function getVisibleDrums() {
  const instDef = drumTypes[state.currentInstrument] || drumTypes.conga;
  const selection = state.drumSelection;
  if (!instDef || !instDef.drums) return [];

  if (state.currentInstrument === 'conga') {
    if (selection === '5') return instDef.drums;
    if (selection === '4') return instDef.drums.slice(0, 4);
    if (selection === '3') return instDef.drums.slice(0, 3);
    if (selection === '2') return instDef.drums.slice(2, 4); // Tumba and Conga
    if (selection === '1') return [instDef.drums[1]]; // Conga only
    return instDef.drums;
  }

  if (state.currentInstrument === 'bata') {
    if (selection === 'all') return instDef.drums;
    if (selection === 'okonkolo') return [instDef.drums[0]];
    if (selection === 'itotele') return [instDef.drums[1]];
    if (selection === 'iya') return [instDef.drums[2]];
    return instDef.drums;
  }

  if (state.currentInstrument === 'pandero') {
    if (selection === 'all') return instDef.drums;
    if (selection === 'requinto') return [instDef.drums[0]];
    if (selection === 'seguidor') return [instDef.drums[1]];
    if (selection === 'buleador') return [instDef.drums[2]];
    return instDef.drums;
  }

  if (state.currentInstrument === 'barril') {
    if (selection === 'both') return instDef.drums;
    if (selection === 'primo') return [instDef.drums[0]];
    if (selection === 'buleador') return [instDef.drums[1]];
    return instDef.drums;
  }

  if (state.currentInstrument === 'tabla') {
    if (selection === 'both') return instDef.drums;
    if (selection === 'bayan') return [instDef.drums[0]];
    if (selection === 'dayan') return [instDef.drums[1]];
    return instDef.drums;
  }

  if (state.currentInstrument === 'candombe') {
    if (selection === 'all') return instDef.drums;
    if (selection === 'chico') return [instDef.drums[0]];
    if (selection === 'repique') return [instDef.drums[1]];
    if (selection === 'piano') return [instDef.drums[2]];
    return instDef.drums;
  }

  if (state.currentInstrument === 'gwoka') {
    if (selection === 'both') return instDef.drums;
    if (selection === 'markeur') return [instDef.drums[0]];
    if (selection === 'boula') return [instDef.drums[1]];
    return instDef.drums;
  }

  if (state.currentInstrument === 'chinese') {
    if (selection === 'all') return instDef.drums;
    if (selection === 'bangu') return [instDef.drums[0]];
    if (selection === 'tanggu') return [instDef.drums[1]];
    if (selection === 'dagu') return [instDef.drums[2]];
    return instDef.drums;
  }

  if (state.currentInstrument === 'daiko') {
    if (selection === 'all') return instDef.drums;
    if (selection === 'shime') return [instDef.drums[0]];
    if (selection === 'nagado') return [instDef.drums[1]];
    if (selection === 'odaiko') return [instDef.drums[2]];
    return instDef.drums;
  }

  if (state.currentInstrument === 'janggu') {
    if (selection === 'both') return instDef.drums;
    if (selection === 'gungpyeon') return [instDef.drums[0]];
    if (selection === 'yeolpyeon') return [instDef.drums[1]];
    return instDef.drums;
  }

  if (state.currentInstrument === 'mridangam') {
    if (selection === 'both') return instDef.drums;
    if (selection === 'thoppi') return [instDef.drums[0]];
    if (selection === 'valanthalai') return [instDef.drums[1]];
    return instDef.drums;
  }

  if (state.currentInstrument === 'handpan') {
    if (selection === 'both') return instDef.drums;
    if (selection === 'ding') return [instDef.drums[0]];
    if (selection === 'tonefields') return [instDef.drums[1]];
    return instDef.drums;
  }

  if (state.currentInstrument === 'dunun') {
    if (selection === 'all') return instDef.drums;
    if (selection === 'dununba') return [instDef.drums[0]];
    if (selection === 'sangban') return [instDef.drums[1]];
    if (selection === 'kenkeni') return [instDef.drums[2]];
    return instDef.drums;
  }

  if (state.currentInstrument === 'log_drum') {
    if (selection === 'low') return [instDef.drums[0]];
    if (selection === 'high') return [instDef.drums[1]];
    return instDef.drums; // Both
  }

  if (state.currentInstrument === 'temple_blocks') {
    if (selection === 'low') return [instDef.drums[0]];
    if (selection === 'mid') return [instDef.drums[1]];
    if (selection === 'high') return [instDef.drums[2]];
    return instDef.drums; // All 3
  }

  if (state.currentInstrument === 'thongophone') {
    if (selection === 'low') return [instDef.drums[0]];
    if (selection === 'mid') return [instDef.drums[1]];
    if (selection === 'high') return [instDef.drums[2]];
    return instDef.drums; // All 3
  }

  if (state.currentInstrument === 'boomwhackers') {
    if (selection === 'low') return [instDef.drums[0]];
    if (selection === 'mid') return [instDef.drums[1]];
    if (selection === 'high') return [instDef.drums[2]];
    return instDef.drums; // All 3
  }

  if (state.currentInstrument === 'tank_drum') {
    if (selection === 'low') return [instDef.drums[0]];
    if (selection === 'mid') return [instDef.drums[1]];
    if (selection === 'high') return [instDef.drums[2]];
    return instDef.drums; // All 3
  }

  if (state.currentInstrument === 'angklung') {
    if (selection === 'low') return [instDef.drums[0]];
    if (selection === 'mid') return [instDef.drums[1]];
    if (selection === 'high') return [instDef.drums[2]];
    return instDef.drums; // All 3
  }

  if (state.currentInstrument === 'dhol') {
    if (selection === 'both') return instDef.drums;
    if (selection === 'dagga') return [instDef.drums[0]];
    if (selection === 'tilli') return [instDef.drums[1]];
    return instDef.drums;
  }

  if (state.currentInstrument === 'agogo') {
    if (selection === 'both') return instDef.drums;
    if (selection === 'low') return [instDef.drums[0]];
    if (selection === 'high') return [instDef.drums[1]];
    return instDef.drums;
  }

  return instDef.drums;
}
