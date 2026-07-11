// Drum Specifications and Instruments Configuration Module
import { state } from './state.js';
import { drumInfo } from './drumInfo.js';

// Lightweight registry of all instruments with names and drum setups (no heavy sound functions or SVG code)
export const drumTypes = {
  conga: {
    name: 'Congas',
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
        pitchMult: 1,
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
    ]
  },
  djembe: {
    name: 'Djembe',
    drums: [
      {
        id: 0,
        label: 'Lead Djembe',
        pitchMult: 1,
        color: 'caramel',
        sizeValue: 21
      }
    ]
  },
  bongo: {
    name: 'Bongos',
    drums: [
      {
        id: 0,
        label: 'Bongos',
        pitchMult: 1,
        color: 'blonde',
        sizeValue: 24
      }
    ]
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
    ]
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
        pitchMult: 1,
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
    ]
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
    ]
  },
  bombo: {
    name: 'Bombo',
    drums: [
      {
        id: 0,
        label: 'Bombo',
        pitchMult: 1,
        color: 'dark',
        sizeValue: 21
      }
    ]
  },
  tabla: {
    name: 'Tabla',
    drums: [
      {
        id: 0,
        label: 'Bayan',
        pitchMult: 1,
        color: 'dark',
        sizeValue: 21
      },
      {
        id: 1,
        label: 'Dayan',
        pitchMult: 1,
        color: 'caramel-light',
        sizeValue: 17
      }
    ]
  },
  darbuka: {
    name: 'Darbuka',
    drums: [
      {
        id: 0,
        label: 'Darbuka',
        pitchMult: 1,
        color: 'blonde-light',
        sizeValue: 20.5
      }
    ]
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
    ]
  },
  cajon: {
    name: 'Cajón',
    drums: [
      {
        id: 0,
        label: 'Cajón',
        pitchMult: 1,
        color: 'caramel',
        sizeValue: 24
      }
    ]
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
        pitchMult: 1,
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
    ]
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
    ]
  },
  tanbou: {
    name: 'Tanbou',
    drums: [
      {
        id: 0,
        label: 'Tanbou',
        pitchMult: 1,
        color: 'caramel',
        sizeValue: 21
      }
    ]
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
        pitchMult: 1,
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
    ]
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
    ]
  },
  bodhran: {
    name: 'Bodhrán',
    drums: [
      {
        id: 0,
        label: 'Bodhrán Head',
        pitchMult: 1,
        color: 'blonde',
        sizeValue: 22
      }
    ]
  },
  talkingdrum: {
    name: 'Talking Drum',
    drums: [
      {
        id: 0,
        label: 'Tama',
        pitchMult: 1,
        color: 'caramel',
        sizeValue: 18
      }
    ]
  },
  cuica: {
    name: 'Cuíca',
    drums: [
      {
        id: 0,
        label: 'Cuíca',
        pitchMult: 1,
        color: 'blonde-light',
        sizeValue: 17
      }
    ]
  },
  doira: {
    name: 'Doira',
    drums: [
      {
        id: 0,
        label: 'Doira Head',
        pitchMult: 1,
        color: 'blonde',
        sizeValue: 20.5
      }
    ]
  },
  uchiwadaiko: {
    name: 'Uchiwa-daiko',
    drums: [
      {
        id: 0,
        label: 'Uchiwa-daiko',
        pitchMult: 1,
        color: 'blonde-light',
        sizeValue: 15
      }
    ]
  },
  oceandrum: {
    name: 'Ocean Drum',
    drums: [
      {
        id: 0,
        label: 'Ocean Drum',
        pitchMult: 1,
        color: 'blonde-light',
        sizeValue: 21.5
      }
    ]
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
    ]
  },
  zabumba: {
    name: 'Zabumba',
    drums: [
      {
        id: 0,
        label: 'Zabumba',
        pitchMult: 1,
        color: 'darker',
        sizeValue: 24
      }
    ]
  },
  mridangam: {
    name: 'Mridangam',
    drums: [
      {
        id: 0,
        label: 'Mridangam',
        pitchMult: 1,
        color: 'caramel',
        sizeValue: 24
      }
    ]
  },
  udu: {
    name: 'Udu',
    drums: [
      {
        id: 0,
        label: 'Clay Udu',
        pitchMult: 1,
        color: 'terracotta',
        sizeValue: 19
      }
    ]
  },
  thunderdrum: {
    name: 'Thunder Drum',
    drums: [
      {
        id: 0,
        label: 'Storm Chamber',
        pitchMult: 1,
        color: 'purple',
        sizeValue: 23
      }
    ]
  },
  waterdrums: {
    name: 'Water Drums',
    drums: [
      {
        id: 0,
        label: 'Floating Gourd',
        pitchMult: 1,
        color: 'teal',
        sizeValue: 20
      }
    ]
  },
  vibraslap: {
    name: 'Vibraslap',
    drums: [
      {
        id: 0,
        label: 'Resonator Box',
        pitchMult: 1,
        color: 'wood',
        sizeValue: 18
      }
    ]
  },
  flexatone: {
    name: 'Flexatone',
    drums: [
      {
        id: 0,
        label: 'Steel Blade',
        pitchMult: 1,
        color: 'silver',
        sizeValue: 17
      }
    ]
  },
  waterphone: {
    name: 'Waterphone',
    drums: [
      {
        id: 0,
        label: 'Ethereal Basin',
        pitchMult: 1,
        color: 'aquamarine',
        sizeValue: 22
      }
    ]
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
    ]
  },
  steelpan: {
    name: 'Steelpan',
    drums: [
      {
        id: 0,
        label: 'Lead Pan',
        pitchMult: 1,
        color: 'silver',
        sizeValue: 22
      }
    ]
  },
  ghatam: {
    name: 'Ghatam',
    drums: [
      {
        id: 0,
        label: 'Ghatam',
        pitchMult: 1,
        color: 'terracotta',
        sizeValue: 19
      }
    ]
  },
  daf: {
    name: 'Daf',
    drums: [
      {
        id: 0,
        label: 'Persian Daf',
        pitchMult: 1,
        color: 'blonde',
        sizeValue: 23
      }
    ]
  },
  riq: {
    name: 'Riq',
    drums: [
      {
        id: 0,
        label: 'Arabic Riq',
        pitchMult: 1,
        color: 'blonde-light',
        sizeValue: 16
      }
    ]
  },
  surdo: {
    name: 'Surdo',
    drums: [
      {
        id: 0,
        label: 'Surdo',
        pitchMult: 1,
        color: 'darker',
        sizeValue: 26
      }
    ]
  },
  pandeiro: {
    name: 'Pandeiro',
    drums: [
      {
        id: 0,
        label: 'Pandeiro',
        pitchMult: 1,
        color: 'blonde',
        sizeValue: 18
      }
    ]
  },
  tamborim: {
    name: 'Tamborim',
    drums: [
      {
        id: 0,
        label: 'Tamborim',
        pitchMult: 1,
        color: 'blonde-light',
        sizeValue: 14
      }
    ]
  },
  repinique: {
    name: 'Repinique',
    drums: [
      {
        id: 0,
        label: 'Repinique',
        pitchMult: 1,
        color: 'silver',
        sizeValue: 18.5
      }
    ]
  },
  bendir: {
    name: 'Bendir',
    drums: [
      {
        id: 0,
        label: 'Bendir Head',
        pitchMult: 1,
        color: 'blonde',
        sizeValue: 21.5
      }
    ]
  },
  davul: {
    name: 'Davul',
    drums: [
      {
        id: 0,
        label: 'Davul',
        pitchMult: 1,
        color: 'darker',
        sizeValue: 25
      }
    ]
  },
  ashiko: {
    name: 'Ashiko',
    drums: [
      {
        id: 0,
        label: 'Ashiko',
        pitchMult: 1,
        color: 'caramel',
        sizeValue: 22
      }
    ]
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
        pitchMult: 1,
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
    ]
  },
  teponaztli: {
    name: 'Teponaztli',
    drums: [
      {
        id: 0,
        label: 'Teponaztli',
        pitchMult: 1,
        color: 'wood',
        sizeValue: 19.5
      }
    ]
  },
  snare_drum: {
    name: 'Snare Drum',
    drums: [
      {
        id: 0,
        label: 'Snare Drum',
        pitchMult: 1,
        color: 'silver',
        sizeValue: 19
      }
    ]
  },
  shekere: {
    name: 'Shekere',
    drums: [
      {
        id: 0,
        label: 'Shekere',
        pitchMult: 1,
        color: 'caramel-light',
        sizeValue: 20
      }
    ]
  },
  kanjira: {
    name: 'Kanjira',
    drums: [
      {
        id: 0,
        label: 'Kanjira',
        pitchMult: 1,
        color: 'caramel',
        sizeValue: 16
      }
    ]
  },
  tammorra: {
    name: 'Tammorra',
    drums: [
      {
        id: 0,
        label: 'Tammorra',
        pitchMult: 1,
        color: 'darker',
        sizeValue: 22
      }
    ]
  },
  framed_rumbla: {
    name: 'Framed Rumbla',
    drums: [
      {
        id: 0,
        label: 'Framed Rumbla',
        pitchMult: 1,
        color: 'blonde',
        sizeValue: 19
      }
    ]
  },
  gran_cassa: {
    name: 'Gran Cassa',
    drums: [
      {
        id: 0,
        label: 'Gran Cassa',
        pitchMult: 1,
        color: 'dark',
        sizeValue: 28
      }
    ]
  },
  lions_roar: {
    name: "Lion's Roar",
    drums: [
      {
        id: 0,
        label: "Lion's Roar",
        pitchMult: 1,
        color: 'caramel-light',
        sizeValue: 21
      }
    ]
  },
  chocalho: {
    name: 'Chocalho',
    drums: [
      {
        id: 0,
        label: 'Chocalho',
        pitchMult: 1,
        color: 'silver',
        sizeValue: 18
      }
    ]
  },
  alfaia: {
    name: 'Alfaia',
    drums: [
      {
        id: 0,
        label: 'Alfaia',
        pitchMult: 1,
        color: 'wood',
        sizeValue: 24
      }
    ]
  },
  log_drum: {
    name: 'Log Drum',
    drums: [
      {
        id: 0,
        label: 'Low Log',
        pitchMult: 1,
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
    ]
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
        pitchMult: 1,
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
    ]
  },
  frog_rasp: {
    name: 'Frog Rasp',
    drums: [
      {
        id: 0,
        label: 'Frog Rasp',
        pitchMult: 1,
        color: 'wood',
        sizeValue: 15
      }
    ]
  },
  spring_drum: {
    name: 'Spring Drum',
    drums: [
      {
        id: 0,
        label: 'Spring Drum',
        pitchMult: 1,
        color: 'dark',
        sizeValue: 18
      }
    ]
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
    ]
  },
  gubguba: {
    name: 'Gubguba',
    drums: [
      {
        id: 0,
        label: 'Gubguba',
        pitchMult: 1,
        color: 'caramel',
        sizeValue: 17
      }
    ]
  },
  cabasa: {
    name: 'Cabasa',
    drums: [
      {
        id: 0,
        label: 'Cabasa',
        pitchMult: 1,
        color: 'silver',
        sizeValue: 16
      }
    ]
  },
  rainstick: {
    name: 'Rainstick',
    drums: [
      {
        id: 0,
        label: 'Rainstick',
        pitchMult: 1,
        color: 'blonde',
        sizeValue: 25
      }
    ]
  },
  kokiriko: {
    name: 'Kokiriko',
    drums: [
      {
        id: 0,
        label: 'Kokiriko',
        pitchMult: 1,
        color: 'wood',
        sizeValue: 20
      }
    ]
  },
  guiro: {
    name: 'Güiro',
    drums: [
      {
        id: 0,
        label: 'Güiro',
        pitchMult: 1,
        color: 'caramel-light',
        sizeValue: 18
      }
    ]
  },
  spoons_bones: {
    name: 'Spoons',
    drums: [
      {
        id: 0,
        label: 'Spoons/Bones',
        pitchMult: 1,
        color: 'blonde',
        sizeValue: 14
      }
    ]
  },
  washboard: {
    name: 'Washboard',
    drums: [
      {
        id: 0,
        label: 'Washboard',
        pitchMult: 1,
        color: 'silver',
        sizeValue: 21
      }
    ]
  },
  friction_drum: {
    name: 'Friction Drum',
    drums: [
      {
        id: 0,
        label: 'Friction Drum',
        pitchMult: 1,
        color: 'darker',
        sizeValue: 17
      }
    ]
  },
  kundu: {
    name: 'Kundu',
    drums: [
      {
        id: 0,
        label: 'Kundu',
        pitchMult: 1,
        color: 'wood',
        sizeValue: 23
      }
    ]
  },
  tar_drum: {
    name: 'Tar',
    drums: [
      {
        id: 0,
        label: 'Tar',
        pitchMult: 1,
        color: 'blonde',
        sizeValue: 24
      }
    ]
  },
  gome: {
    name: 'Gome',
    drums: [
      {
        id: 0,
        label: 'Gome',
        pitchMult: 1,
        color: 'wood',
        sizeValue: 25
      }
    ]
  },
  boomwhackers: {
    name: 'Boomwhackers',
    drums: [
      {
        id: 0,
        label: 'Low Tube',
        pitchMult: 1,
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
    ]
  },
  tank_drum: {
    name: 'Tank Drum',
    drums: [
      {
        id: 0,
        label: 'Low Tongue',
        pitchMult: 1,
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
    ]
  },
  bell_tree: {
    name: 'Bell Tree',
    drums: [
      {
        id: 0,
        label: 'Bell Tree',
        pitchMult: 1,
        color: 'gold',
        sizeValue: 21
      }
    ]
  },
  mark_tree: {
    name: 'Mark Tree',
    drums: [
      {
        id: 0,
        label: 'Mark Tree',
        pitchMult: 1,
        color: 'silver',
        sizeValue: 23
      }
    ]
  },
  slide_whistle: {
    name: 'Slide Whistle',
    drums: [
      {
        id: 0,
        label: 'Slide Whistle',
        pitchMult: 1,
        color: 'blue-light',
        sizeValue: 18
      }
    ]
  },
  ratchet: {
    name: 'Ratchet',
    drums: [
      {
        id: 0,
        label: 'Ratchet',
        pitchMult: 1,
        color: 'wood',
        sizeValue: 16
      }
    ]
  },
  angklung: {
    name: 'Angklung',
    drums: [
      {
        id: 0,
        label: 'Low Bamboo',
        pitchMult: 1,
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
    ]
  },
  jaw_harp: {
    name: 'Jaw Harp',
    drums: [
      {
        id: 0,
        label: 'Jaw Harp',
        pitchMult: 1,
        color: 'silver',
        sizeValue: 14
      }
    ]
  },
  timpani: {
    name: 'Timpani',
    drums: [
      {
        id: 0,
        label: 'Kettledrum',
        pitchMult: 1,
        color: 'silver',
        sizeValue: 26
      }
    ]
  },
  kotsuzumi: {
    name: 'Kotsuzumi',
    drums: [
      {
        id: 0,
        label: 'Kotsuzumi',
        pitchMult: 1,
        color: 'wood',
        sizeValue: 16
      }
    ]
  },
  dhol: {
    name: 'Dhol',
    drums: [
      {
        id: 0,
        label: 'Dhol',
        pitchMult: 1,
        color: 'blonde',
        sizeValue: 24
      }
    ]
  },
  agogo: {
    name: 'Agogô',
    drums: [
      {
        id: 0,
        label: 'Agogô Bells',
        pitchMult: 1,
        color: 'silver',
        sizeValue: 22
      }
    ]
  },
  claves: {
    name: 'Claves',
    drums: [
      {
        id: 0,
        label: 'Claves',
        pitchMult: 1,
        color: 'terracotta',
        sizeValue: 15
      }
    ]
  },
  mechanical_keyboard: {
    name: 'Mechanical Keyboard',
    drums: [
      {
        id: 0,
        label: 'Cyber Keyboard',
        pitchMult: 1,
        color: 'darker',
        sizeValue: 20
      }
    ]
  },
  synsonics_drums: {
    name: 'Synsonics Drums',
    drums: [
      {
        id: 0,
        label: 'Synsonics Pad',
        pitchMult: 1,
        color: 'dark',
        sizeValue: 20
      }
    ]
  },
  hydraulic_piston: {
    name: 'Hydraulic Piston',
    drums: [
      {
        id: 0,
        label: 'Piston Chamber',
        pitchMult: 1,
        color: 'silver',
        sizeValue: 22
      }
    ]
  },
  bop_it: {
    name: 'Bop It!',
    drums: [
      {
        id: 0,
        label: 'Bop It Toy',
        pitchMult: 1,
        color: 'purple',
        sizeValue: 18
      }
    ]
  },
  moo_box: {
    name: 'Moo Box',
    drums: [
      {
        id: 0,
        label: 'Tin Oid',
        pitchMult: 1,
        color: 'silver',
        sizeValue: 15
      }
    ]
  },
  pakhavaj: {
    name: 'Pakhavaj',
    drums: [
      {
        id: 0,
        label: 'Left Bass Head (Bayan)',
        pitchMult: 1,
        color: 'terracotta',
        sizeValue: 22
      },
      {
        id: 1,
        label: 'Right Treble Head (Dayan)',
        pitchMult: 1,
        color: 'caramel',
        sizeValue: 16
      }
    ]
  },
  binzasara: {
    name: 'Binzasara',
    drums: [
      {
        id: 0,
        label: 'Wooden Slats',
        pitchMult: 1,
        color: 'wood',
        sizeValue: 18
      }
    ]
  },
  caxixi: {
    name: 'Caxixi',
    drums: [
      {
        id: 0,
        label: 'Straw Basket',
        pitchMult: 1,
        color: 'caramel-light',
        sizeValue: 16
      }
    ]
  },
  slap_tubes: {
    name: 'Slap Tubes',
    drums: [
      {
        id: 0,
        label: 'PVC Slap Tube',
        pitchMult: 1,
        color: 'teal',
        sizeValue: 22
      }
    ]
  },
  whistle_drum: {
    name: 'Whistle-Drum',
    drums: [
      {
        id: 0,
        label: 'Clay Whistle Pot',
        pitchMult: 1,
        color: 'terracotta',
        sizeValue: 20
      }
    ]
  },
  singing_bowl: {
    name: 'Singing Bowl',
    drums: [
      {
        id: 0,
        label: 'Sacred Bowl',
        pitchMult: 1,
        color: 'wood',
        sizeValue: 21
      }
    ]
  },
  quijada: {
    name: 'Quijada',
    drums: [
      {
        id: 0,
        label: 'Jawbone',
        pitchMult: 1,
        color: 'blonde-light',
        sizeValue: 18
      }
    ]
  },
  water_canister: {
    name: 'Water Canister',
    drums: [
      {
        id: 0,
        label: 'Hydro Canister',
        pitchMult: 1,
        color: 'aquamarine',
        sizeValue: 22
      }
    ]
  },
  vintage_cash_register: {
    name: 'Cash Register',
    drums: [
      {
        id: 0,
        label: 'Brass Register',
        pitchMult: 1,
        color: 'silver',
        sizeValue: 20
      }
    ]
  },
  geiger_counter: {
    name: 'Geiger Counter',
    drums: [
      {
        id: 0,
        label: 'Geiger Grid',
        pitchMult: 1,
        color: 'dark',
        sizeValue: 18
      }
    ]
  },
  centrifugal_bullroarer: {
    name: 'Bullroarer',
    drums: [
      {
        id: 0,
        label: 'Aero Ribbon',
        pitchMult: 1,
        color: 'wood',
        sizeValue: 22
      }
    ]
  },
  newtons_cradle: {
    name: 'Newton Cradle',
    drums: [
      {
        id: 0,
        label: 'Newton Cradle',
        pitchMult: 1,
        color: 'silver',
        sizeValue: 19
      }
    ]
  },
  slime_plop_box: {
    name: 'Slime Plop Box',
    drums: [
      {
        id: 0,
        label: 'Slime Jar',
        pitchMult: 1,
        color: 'teal',
        sizeValue: 20
      }
    ]
  },
  talk_box: {
    name: 'Talk Box Toy',
    drums: [
      {
        id: 0,
        label: 'Retro Pull-Toy',
        pitchMult: 1,
        color: 'caramel',
        sizeValue: 20
      }
    ]
  },
  mouth_tube_synth: {
    name: 'Mouth Synth',
    drums: [
      {
        id: 0,
        label: 'Mouth Synth',
        pitchMult: 1,
        color: 'teal',
        sizeValue: 19
      }
    ]
  }
};

export const instrumentTouches = {};
export const instrumentMappings = {};

const customTouches = {
  conga: [
    {
      id: 'bajo',
      label: 'Bass',
      shortName: 'Bass',
      description: 'A deep bass strike with the palm of the hand near the center of the head.'
    },
    {
      id: 'abierto',
      label: 'Open',
      shortName: 'Open',
      description: 'A clear, resonant open tone struck with the fingers on the rim.'
    },
    { id: 'seco', label: 'Slap', shortName: 'Slap', description: 'A sharp, high-pitched cracking slap tone.' },
    {
      id: 'tapado',
      label: 'Muffled',
      shortName: 'Muff',
      description: 'A muffled slap where fingers remain pressed on the head.'
    },
    {
      id: 'toque_tapado',
      label: 'Closed',
      shortName: 'Closed',
      description: 'A light closed tap on the drumhead.'
    },
    {
      id: 'manoteo',
      label: 'Heel-Toe',
      shortName: 'Heel-Toe',
      description: 'Alternating heel-and-toe movements with the palm and fingers.'
    },
    {
      id: 'golpe_de_casco',
      label: 'Shell Strike',
      shortName: 'Shell',
      description: 'Striking the wooden shell of the conga directly.'
    }
  ],
  bata: [
    { id: 'abierto', label: 'Abierto', shortName: 'Open', description: 'An open, resonant strike on either head.' },
    { id: 'tapado', label: 'Tapado', shortName: 'Muffled', description: 'A muffled slap on the head.' },
    {
      id: 'chach_snap',
      label: 'Chachá Snap',
      shortName: 'Snap',
      description: 'A sharp treble snap on the small head.'
    },
    { id: 'cuerpo_knock', label: 'Cuerpo Knock', shortName: 'Shell', description: 'A dry knock on the wooden body.' }
  ],
  bongo: [
    {
      id: 'martillo',
      label: 'Hammer',
      shortName: 'Hammer',
      description: 'The standard heel-and-toe hammer finger stroke.'
    },
    {
      id: 'open_tone',
      label: 'Open Tone',
      shortName: 'Open',
      description: 'A clear open sound played with fingers at the edge.'
    },
    { id: 'slap', label: 'Slap', shortName: 'Slap', description: 'A brilliant, popping slap strike.' },
    { id: 'mute_tap', label: 'Mute Tap', shortName: 'Mute', description: 'A soft muffled tap on the drumhead.' },
    {
      id: 'glissando_de_dedo',
      label: 'Glissando de Dedo',
      shortName: 'Slide',
      description: 'Rubbing the thumb or finger across the skin for a pitch slide.'
    }
  ],
  mridangam: [
    { id: 'tha', label: 'Open Bass', shortName: 'Tha', description: 'A deep resonant bass stroke.' },
    { id: 'thom', label: 'Muffled Bass', shortName: 'Thom', description: 'A muffled bass stroke.' },
    { id: 'nam', label: 'Treble Open', shortName: 'Nam', description: 'A high-pitched open stroke.' },
    {
      id: 'dhi_thei',
      label: 'Treble Closed',
      shortName: 'Dhi',
      description: 'A sharp closed treble stroke.'
    },
    { id: 'chapu', label: 'Slap', shortName: 'Chapu', description: 'A cracking ringing slap.' }
  ],
  dhol: [
    {
      id: 'dagga',
      label: 'Bass Stick',
      shortName: 'Dagga',
      description: 'A heavy bass strike using the curved Dagga stick.'
    },
    {
      id: 'tilli',
      label: 'Treble Stick',
      shortName: 'Tilli',
      description: 'A sharp slap using the thin Tilli stick.'
    },
    {
      id: 'stick_slide_glissando',
      label: 'Stick Slide',
      shortName: 'Slide',
      description: 'Sliding the stick along the head for a groaning glissando.'
    }
  ],
  agogo: [
    {
      id: 'high_strike',
      label: 'High Bell Strike',
      shortName: 'High',
      description: 'Striking the smaller, higher-pitched metal bell.'
    },
    {
      id: 'low_strike',
      label: 'Low Bell Strike',
      shortName: 'Low',
      description: 'Striking the larger, lower-pitched metal bell.'
    },
    {
      id: 'clap',
      label: 'Bell Squeeze / Clap',
      shortName: 'Clap',
      description: 'Squeezing the two bells together to produce a dry click.'
    },
    {
      id: 'stick_drag',
      label: 'Stick Drag',
      shortName: 'Drag',
      description: 'Dragging the stick across the ribbed edge of the bell.'
    }
  ],
  cajon: [
    {
      id: 'bass_tone',
      label: 'Bass Tone',
      shortName: 'Bass',
      description: 'Striking near the center for a deep bass boom.'
    },
    {
      id: 'corner_slap',
      label: 'Corner Slap',
      shortName: 'Slap',
      description: 'Striking the top corner for a crisp snare-like slap.'
    },
    {
      id: 'high_finger_snap',
      label: 'Finger Snap',
      shortName: 'Snap',
      description: 'A high-frequency finger tap on the top edge.'
    },
    {
      id: 'tapado',
      label: 'Muffled',
      shortName: 'Muff',
      description: 'A quiet muffled strike on the front plate.'
    },
    {
      id: 'side_knock',
      label: 'Side Knock',
      shortName: 'Shell',
      description: 'Knocking on the side of the wooden cajon body.'
    },
    {
      id: 'heel_slide_pitch_bend',
      label: 'Heel Slide',
      shortName: 'Heel',
      description: 'Pressing the heel against the front plate while playing to bend the pitch.'
    }
  ],
  djembe: [
    {
      id: 'bass',
      label: 'Bass Tone',
      shortName: 'Bass',
      description: 'A deep, heavy boom played with a flat hand in the center.'
    },
    { id: 'tone', label: 'Open Tone', shortName: 'Tone', description: 'A full, resonant open tone played at the rim.' },
    { id: 'slap', label: 'Slap', shortName: 'Slap', description: 'A sharp, high-pitched crack played on the edge.' },
    { id: 'flam_roll', label: 'Flam Roll', shortName: 'Roll', description: 'A rapid double-stroke roll.' },
    {
      id: 'rim_click',
      label: 'Rim Click',
      shortName: 'Click',
      description: 'Striking the rim for a clean wood/metal-like click.'
    }
  ],
  tabla: [
    {
      id: 'dayan_na_ta',
      label: 'Na / Ta',
      shortName: 'Na',
      description: 'A bright, ringing treble strike on the Dayan outer edge.'
    },
    { id: 'dayan_tin', label: 'Tin', shortName: 'Tin', description: 'A ringing center strike on Dayan.' },
    { id: 'dayan_tun', label: 'Tun', shortName: 'Tun', description: 'A resonant open stroke on Dayan.' },
    {
      id: 'bayan_ga_ghe',
      label: 'Ga / Ghe',
      shortName: 'Ga',
      description: 'A deep sliding bass on the metallic Bayan.'
    },
    { id: 'bayan_ka_ke', label: 'Ka / Ke', shortName: 'Ka', description: 'A flat non-resonant bass slap on Bayan.' }
  ]
};

const customMappings = {
  conga: {
    left: {
      up: 'abierto',
      down: 'bajo',
      left: 'manoteo',
      right: 'seco',
      upLong: 'tapado',
      downLong: 'toque_tapado',
      leftLong: 'golpe_de_casco',
      rightLong: 'golpe_de_casco',
      trigger: 'abierto'
    },
    right: {
      up: 'abierto',
      down: 'bajo',
      left: 'manoteo',
      right: 'seco',
      upLong: 'tapado',
      downLong: 'toque_tapado',
      leftLong: 'golpe_de_casco',
      rightLong: 'golpe_de_casco',
      trigger: 'seco'
    }
  },
  bata: {
    left: {
      up: 'abierto',
      down: 'tapado',
      left: 'cuerpo_knock',
      right: 'chach_snap',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'abierto'
    },
    right: {
      up: 'abierto',
      down: 'tapado',
      left: 'cuerpo_knock',
      right: 'chach_snap',
      upLong: '',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'chach_snap'
    }
  },
  bongo: {
    left: {
      up: 'open_tone',
      down: 'martillo',
      left: 'mute_tap',
      right: 'slap',
      upLong: 'glissando_de_dedo',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'open_tone'
    },
    right: {
      up: 'open_tone',
      down: 'martillo',
      left: 'mute_tap',
      right: 'slap',
      upLong: 'glissando_de_dedo',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'slap'
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
      trigger: 'chapu'
    }
  },
  dhol: {
    left: {
      up: 'dagga',
      down: 'tilli',
      left: 'stick_slide_glissando',
      right: 'dagga',
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
      right: 'dagga',
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
  djembe: {
    left: {
      up: 'tone',
      down: 'bass',
      left: 'rim_click',
      right: 'slap',
      upLong: 'flam_roll',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'tone'
    },
    right: {
      up: 'tone',
      down: 'bass',
      left: 'rim_click',
      right: 'slap',
      upLong: 'flam_roll',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'slap'
    }
  },
  tabla: {
    left: {
      up: 'dayan_na_ta',
      down: 'dayan_tin',
      left: 'dayan_tun',
      right: 'bayan_ga_ghe',
      upLong: 'bayan_ka_ke',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'bayan_ga_ghe'
    },
    right: {
      up: 'dayan_na_ta',
      down: 'dayan_tin',
      left: 'dayan_tun',
      right: 'bayan_ga_ghe',
      upLong: 'bayan_ka_ke',
      downLong: '',
      leftLong: '',
      rightLong: '',
      trigger: 'dayan_na_ta'
    }
  }
};

const loadedInstruments = {};

export async function ensureInstrumentLoaded(instrumentName) {
  let name = instrumentName;
  if (name === 'agogo_high' || name === 'agogo_low') {
    name = 'agogo';
  }
  if (name === 'bongo_macho' || name === 'bongo_hembra') {
    name = 'bongo';
  }

  if (loadedInstruments[name]) {
    return loadedInstruments[name];
  }

  try {
    const module = await import(`./instruments/${name}.js`);
    const instData = module[name];
    if (instData) {
      loadedInstruments[name] = instData;

      // Populate drumInfo dynamically using centralized metadata in the instrument file
      drumInfo[name] = {
        name: drumTypes[name]?.name || name.charAt(0).toUpperCase() + name.slice(1),
        origin: instData.origin || 'Traditional / Regional',
        description:
          instData.description || 'A traditional percussion instrument used in regional musical practices worldwide.',
        performers: instData.performers || [],
        songs: instData.songs || [],
        effectsSongs: instData.effectsSongs || []
      };

      // Ensure touches is populated
      if (!instData.touches) {
        if (customTouches[name]) {
          instData.touches = customTouches[name];
        } else {
          instData.touches = Object.keys(instData.sounds || {}).map((key) => {
            const capitalized = key.charAt(0).toUpperCase() + key.slice(1).replace(/_/g, ' ');
            return {
              id: key,
              label: capitalized,
              shortName: capitalized,
              description: `${capitalized} technique`
            };
          });
        }
      }

      // Safeguard: Ensure ALL touches have a non-empty description
      if (instData.touches) {
        instData.touches.forEach((touch) => {
          if (!touch.description || touch.description.trim() === '') {
            const label = touch.label || touch.id || 'Tone';
            const capitalized = label.charAt(0).toUpperCase() + label.slice(1).replace(/_/g, ' ');
            touch.description = `${capitalized} technique and tone production.`;
          }
        });
      }

      // Ensure mappings is populated
      if (!instData.mappings) {
        if (customMappings[name]) {
          instData.mappings = customMappings[name];
        } else {
          const soundKeys = Object.keys(instData.sounds || {});
          instData.mappings = {
            left: {
              up: soundKeys[0] || '',
              down: soundKeys[1] || soundKeys[0] || '',
              left: soundKeys[2] || soundKeys[0] || '',
              right: soundKeys[3] || soundKeys[0] || '',
              upLong: soundKeys[4] || '',
              downLong: soundKeys[5] || '',
              leftLong: '',
              rightLong: '',
              trigger: soundKeys[0] || ''
            },
            right: {
              up: soundKeys[0] || '',
              down: soundKeys[1] || soundKeys[0] || '',
              left: soundKeys[2] || soundKeys[0] || '',
              right: soundKeys[3] || soundKeys[0] || '',
              upLong: soundKeys[4] || '',
              downLong: soundKeys[5] || '',
              leftLong: '',
              rightLong: '',
              trigger: soundKeys[1] || soundKeys[0] || ''
            }
          };
        }
      }

      // Lazily merge full details into drumTypes, instrumentTouches, and instrumentMappings
      drumTypes[name].sounds = instData.sounds;
      instrumentTouches[name] = instData.touches;
      instrumentMappings[name] = instData.mappings;

      drumTypes[name].defaultLeft = instData.defaultLeft !== undefined ? instData.defaultLeft : 0;
      drumTypes[name].defaultRight = instData.defaultRight !== undefined ? instData.defaultRight : 0;

      // For sub-variants like agogo_high, bongo_macho, etc., also populate them
      if (instrumentName !== name) {
        drumTypes[instrumentName].sounds = instData.sounds;
      }

      return instData;
    }
  } catch (err) {
    console.error(`Failed to dynamically load instrument spec: ${instrumentName}`, err);
  }
  return null;
}

export function getLoadedInstrument(instrumentName) {
  let name = instrumentName;
  if (name === 'agogo_high' || name === 'agogo_low') {
    name = 'agogo';
  }
  if (name === 'bongo_macho' || name === 'bongo_hembra') {
    name = 'bongo';
  }
  return loadedInstruments[name] || null;
}

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
