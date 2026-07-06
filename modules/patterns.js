export const instrumentPatterns = {
  conga: {
    tumbao: {
      name: '🥁 Tumbao (Classic 2-Drum)',
      stepCount: 16,
      steps: {
        0: [{ drum: 1, sound: 'heeltoe' }],
        2: [{ drum: 1, sound: 'heeltoe' }],
        4: [{ drum: 1, sound: 'open' }],
        6: [{ drum: 1, sound: 'open' }],
        8: [{ drum: 1, sound: 'heeltoe' }],
        10: [{ drum: 1, sound: 'heeltoe' }],
        12: [{ drum: 1, sound: 'slap' }],
        14: [{ drum: 1, sound: 'open' }]
      }
    },
    guaguanco: {
      name: '🥁 Guaguancó (Traditional)',
      stepCount: 16,
      steps: {
        0: [{ drum: 1, sound: 'bass' }],
        3: [{ drum: 1, sound: 'slap' }],
        4: [{ drum: 2, sound: 'open' }],
        7: [{ drum: 1, sound: 'open' }],
        8: [{ drum: 2, sound: 'open' }],
        11: [{ drum: 1, sound: 'slap' }],
        12: [{ drum: 2, sound: 'open' }],
        15: [{ drum: 1, sound: 'open' }]
      }
    },
    cha_cha: {
      name: '🥁 Cha-Cha-Chá',
      stepCount: 16,
      steps: {
        0: [{ drum: 2, sound: 'open' }],
        4: [{ drum: 1, sound: 'slap' }],
        8: [{ drum: 2, sound: 'open' }],
        10: [{ drum: 2, sound: 'open' }],
        12: [{ drum: 1, sound: 'open' }],
        14: [{ drum: 1, sound: 'open' }]
      }
    },
    bolero: {
      name: '🥁 Bolero Conga',
      stepCount: 16,
      steps: {
        0: [{ drum: 1, sound: 'bass' }],
        2: [{ drum: 2, sound: 'muffled' }],
        4: [{ drum: 2, sound: 'slap' }],
        6: [{ drum: 2, sound: 'open' }],
        8: [{ drum: 1, sound: 'bass' }],
        10: [{ drum: 2, sound: 'muffled' }],
        12: [{ drum: 2, sound: 'open' }],
        14: [{ drum: 2, sound: 'open' }]
      }
    },
    bembe_6_8: {
      name: '🥁 Bembe (6/8 Polyrhythm)',
      stepCount: 12,
      steps: {
        0: [{ drum: 2, sound: 'bass' }],
        2: [{ drum: 0, sound: 'slap' }],
        4: [{ drum: 1, sound: 'open' }],
        6: [{ drum: 2, sound: 'open' }],
        8: [{ drum: 0, sound: 'slap' }],
        10: [{ drum: 1, sound: 'open' }]
      }
    },
    samba_conga: {
      name: '🥁 Samba Conga (Batucada)',
      stepCount: 16,
      steps: {
        0: [{ drum: 1, sound: 'bass' }],
        2: [{ drum: 0, sound: 'slap' }],
        4: [{ drum: 1, sound: 'open' }],
        6: [{ drum: 1, sound: 'open' }],
        8: [{ drum: 2, sound: 'bass' }],
        10: [{ drum: 0, sound: 'slap' }],
        12: [{ drum: 1, sound: 'heeltoe' }],
        14: [{ drum: 1, sound: 'open' }]
      }
    },
    afro_cuban_6_8: {
      name: '🥁 Afro-Cuban Columbia (6/8)',
      stepCount: 12,
      steps: {
        0: [{ drum: 2, sound: 'bass' }],
        2: [{ drum: 0, sound: 'slap' }],
        4: [{ drum: 1, sound: 'open' }],
        6: [{ drum: 2, sound: 'bass' }],
        8: [{ drum: 0, sound: 'slap' }],
        10: [{ drum: 1, sound: 'open' }]
      }
    },
    mozambique_conga: {
      name: '🥁 Mozambique Conga Pattern',
      stepCount: 16,
      steps: {
        0: [{ drum: 1, sound: 'heeltoe' }],
        2: [{ drum: 0, sound: 'slap' }],
        4: [{ drum: 1, sound: 'open' }],
        6: [{ drum: 2, sound: 'open' }],
        8: [{ drum: 1, sound: 'heeltoe' }],
        10: [{ drum: 0, sound: 'slap' }],
        12: [{ drum: 1, sound: 'open' }],
        13: [{ drum: 2, sound: 'open' }],
        14: [{ drum: 1, sound: 'open' }]
      }
    },
    comparsa_conga: {
      name: '🥁 Comparsa Conga Carnival',
      stepCount: 16,
      steps: {
        0: [{ drum: 1, sound: 'bass' }],
        4: [{ drum: 2, sound: 'slap' }],
        8: [{ drum: 1, sound: 'open' }],
        12: [{ drum: 2, sound: 'open' }],
        14: [{ drum: 1, sound: 'open' }]
      }
    },
    songo_conga: {
      name: '🥁 Songo Conga Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 1, sound: 'heeltoe' }],
        2: [{ drum: 2, sound: 'open' }],
        4: [{ drum: 1, sound: 'slap' }],
        6: [{ drum: 2, sound: 'open' }],
        8: [{ drum: 1, sound: 'heeltoe' }],
        10: [{ drum: 1, sound: 'open' }],
        12: [{ drum: 1, sound: 'slap' }],
        14: [{ drum: 2, sound: 'open' }]
      }
    }
  },
  djembe: {
    kuku: {
      name: '🥁 Kuku (Harvest)',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        11: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'open' }],
        14: [{ drum: 0, sound: 'slap' }]
      }
    },
    moribayassa: {
      name: '🥁 Moribayassa (Celebration)',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'slap' }],
        6: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'open' }],
        10: [{ drum: 0, sound: 'slap' }],
        12: [{ drum: 0, sound: 'open' }],
        14: [{ drum: 0, sound: 'open' }]
      }
    },
    djole: {
      name: '🥁 Djole',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'slap' }],
        10: [{ drum: 0, sound: 'slap' }],
        12: [{ drum: 0, sound: 'open' }],
        14: [{ drum: 0, sound: 'open' }]
      }
    },
    fanga: {
      name: '🥁 Fanga (Welcome)',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'slap' }]
      }
    },
    soli: {
      name: '🥁 Soli (High Energy)',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'open' }],
        3: [{ drum: 0, sound: 'open' }],
        5: [{ drum: 0, sound: 'slap' }],
        6: [{ drum: 0, sound: 'bass' }],
        8: [{ drum: 0, sound: 'open' }],
        9: [{ drum: 0, sound: 'slap' }],
        11: [{ drum: 0, sound: 'open' }]
      }
    },
    yankadi: {
      name: '🥁 Yankadi (Sensual Walk)',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'open' }],
        10: [{ drum: 0, sound: 'slap' }]
      }
    },
    tiriba: {
      name: '🥁 Tiriba (Guinean Celebration)',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'slap' }],
        6: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'slap' }],
        14: [{ drum: 0, sound: 'slap' }]
      }
    },
    mendiriani: {
      name: '🥁 Mendiriani (Graceful Walk)',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'slap' }],
        4: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'bass' }],
        8: [{ drum: 0, sound: 'open' }],
        10: [{ drum: 0, sound: 'slap' }]
      }
    },
    kakilambe: {
      name: '🥁 Kakilambe (Spirited Dance)',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'slap' }],
        6: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'open' }],
        14: [{ drum: 0, sound: 'slap' }]
      }
    },
    dununba: {
      name: '🥁 Dununba (Strong Man)',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'slap' }],
        14: [{ drum: 0, sound: 'slap' }]
      }
    }
  },
  bongo: {
    martillo: {
      name: '🥁 Martillo (Standard)',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'open' }],
        2: [{ drum: 0, sound: 'heeltoe' }],
        4: [{ drum: 0, sound: 'slap' }],
        6: [{ drum: 0, sound: 'heeltoe' }],
        8: [{ drum: 0, sound: 'open' }],
        10: [{ drum: 0, sound: 'heeltoe' }],
        12: [{ drum: 1, sound: 'open' }],
        14: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    changuie: {
      name: '🥁 Changüí',
      stepCount: 16,
      steps: {
        0: [{ drum: 1, sound: 'open' }],
        3: [{ drum: 0, sound: 'slap' }],
        4: [{ drum: 1, sound: 'open' }],
        7: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 1, sound: 'open' }],
        11: [{ drum: 0, sound: 'slap' }],
        12: [{ drum: 1, sound: 'open' }],
        14: [{ drum: 0, sound: 'open' }]
      }
    },
    bolero_bongo: {
      name: '🥁 Bolero Martillo',
      stepCount: 16,
      steps: {
        0: [{ drum: 1, sound: 'bass' }],
        2: [{ drum: 0, sound: 'muffled' }],
        4: [{ drum: 0, sound: 'slap' }],
        6: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 1, sound: 'bass' }],
        10: [{ drum: 0, sound: 'muffled' }],
        12: [{ drum: 1, sound: 'open' }],
        14: [{ drum: 1, sound: 'open' }]
      }
    },
    bachata: {
      name: '🥁 Bachata Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 1, sound: 'bass' }],
        2: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 1, sound: 'open' }],
        6: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 1, sound: 'bass' }],
        10: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 1, sound: 'open' }],
        14: [{ drum: 0, sound: 'open' }]
      }
    },
    bongo_bell_campana: {
      name: '🥁 Campana Salsa Transition',
      stepCount: 16,
      steps: {
        0: [{ drum: 1, sound: 'open' }],
        2: [{ drum: 0, sound: 'slap' }],
        4: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 1, sound: 'open' }],
        10: [{ drum: 0, sound: 'slap' }],
        12: [{ drum: 0, sound: 'open' }],
        14: [{ drum: 1, sound: 'open' }]
      }
    },
    cumbia_bongo: {
      name: '🥁 Colombian Cumbia',
      stepCount: 16,
      steps: {
        0: [{ drum: 1, sound: 'open' }],
        3: [{ drum: 0, sound: 'heeltoe' }],
        4: [{ drum: 1, sound: 'open' }],
        8: [{ drum: 1, sound: 'open' }],
        11: [{ drum: 0, sound: 'slap' }],
        12: [{ drum: 1, sound: 'open' }]
      }
    },
    son_montuno_bongo: {
      name: '🥁 Son Montuno Martillo Sync',
      stepCount: 16,
      steps: {
        0: [{ drum: 1, sound: 'open' }],
        2: [{ drum: 0, sound: 'slap' }],
        4: [{ drum: 1, sound: 'open' }],
        6: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 1, sound: 'open' }],
        10: [{ drum: 0, sound: 'slap' }],
        12: [{ drum: 1, sound: 'open' }],
        14: [{ drum: 0, sound: 'open' }]
      }
    },
    reggaeton_bongo: {
      name: '🥁 Reggaeton Bongo Fusion',
      stepCount: 16,
      steps: {
        0: [{ drum: 1, sound: 'bass' }],
        3: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 1, sound: 'bass' }],
        11: [{ drum: 0, sound: 'open' }],
        14: [{ drum: 0, sound: 'slap' }]
      }
    },
    bongo_abacua: {
      name: '🥁 Abakuá Bongo Play',
      stepCount: 12,
      steps: {
        0: [{ drum: 1, sound: 'open' }],
        2: [{ drum: 0, sound: 'slap' }],
        4: [{ drum: 1, sound: 'open' }],
        6: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 1, sound: 'open' }],
        10: [{ drum: 0, sound: 'slap' }]
      }
    },
    bongo_rumba: {
      name: '🥁 Rumba Columbia Bongo',
      stepCount: 16,
      steps: {
        0: [{ drum: 1, sound: 'bass' }],
        3: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'slap' }],
        7: [{ drum: 1, sound: 'open' }],
        8: [{ drum: 1, sound: 'bass' }],
        11: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'slap' }],
        15: [{ drum: 1, sound: 'open' }]
      }
    }
  },
  bata: {
    toque_chango: {
      name: '🥁 Toque Changó',
      stepCount: 16,
      steps: {
        0: [
          { drum: 2, sound: 'enu_bass' },
          { drum: 0, sound: 'chacha' }
        ],
        2: [
          { drum: 1, sound: 'enu_open' },
          { drum: 0, sound: 'chacha' }
        ],
        4: [
          { drum: 2, sound: 'enu_muffled' },
          { drum: 1, sound: 'chacha' }
        ],
        6: [{ drum: 0, sound: 'chacha' }],
        8: [
          { drum: 2, sound: 'enu_open' },
          { drum: 1, sound: 'enu_open' }
        ],
        10: [
          { drum: 1, sound: 'chacha' },
          { drum: 0, sound: 'chacha' }
        ],
        12: [
          { drum: 2, sound: 'enu_muffled' },
          { drum: 0, sound: 'chacha' }
        ],
        14: [{ drum: 1, sound: 'enu_open' }]
      }
    },
    toque_elegua: {
      name: '🥁 Toque Eleguá',
      stepCount: 16,
      steps: {
        0: [{ drum: 2, sound: 'enu_bass' }],
        3: [{ drum: 1, sound: 'enu_open' }],
        4: [{ drum: 0, sound: 'chacha' }],
        7: [{ drum: 1, sound: 'enu_muffled' }],
        8: [{ drum: 2, sound: 'enu_open' }],
        11: [{ drum: 0, sound: 'chacha' }],
        12: [{ drum: 2, sound: 'enu_bass' }],
        15: [{ drum: 1, sound: 'enu_open' }]
      }
    },
    toque_ochun: {
      name: '🥁 Toque Ochún',
      stepCount: 16,
      steps: {
        0: [{ drum: 2, sound: 'enu_open' }],
        2: [{ drum: 1, sound: 'enu_open' }],
        4: [{ drum: 0, sound: 'bells' }],
        6: [{ drum: 1, sound: 'enu_muffled' }],
        8: [{ drum: 2, sound: 'enu_bass' }],
        10: [{ drum: 1, sound: 'enu_open' }],
        12: [{ drum: 0, sound: 'bells' }],
        14: [{ drum: 2, sound: 'enu_open' }]
      }
    },
    toque_yemaya: {
      name: '🥁 Toque Yemayá',
      stepCount: 16,
      steps: {
        0: [{ drum: 2, sound: 'enu_bass' }],
        4: [{ drum: 1, sound: 'enu_open' }],
        6: [{ drum: 1, sound: 'enu_open' }],
        8: [{ drum: 0, sound: 'chacha' }],
        10: [{ drum: 0, sound: 'chacha' }],
        12: [{ drum: 2, sound: 'enu_open' }],
        14: [{ drum: 1, sound: 'enu_muffled' }]
      }
    },
    toque_babalu: {
      name: '🥁 Toque Babalú Ayé (Arará)',
      stepCount: 16,
      steps: {
        0: [{ drum: 2, sound: 'enu_bass' }],
        2: [{ drum: 0, sound: 'bells' }],
        4: [{ drum: 1, sound: 'enu_open' }],
        6: [{ drum: 2, sound: 'enu_muffled' }],
        8: [{ drum: 2, sound: 'enu_bass' }],
        10: [{ drum: 0, sound: 'bells' }],
        12: [{ drum: 1, sound: 'enu_muffled' }],
        14: [{ drum: 2, sound: 'enu_open' }]
      }
    },
    toque_ogun: {
      name: '🥁 Toque Ogún (Warrior)',
      stepCount: 12,
      steps: {
        0: [
          { drum: 2, sound: 'enu_bass' },
          { drum: 0, sound: 'chacha' }
        ],
        3: [{ drum: 1, sound: 'enu_open' }],
        6: [
          { drum: 2, sound: 'enu_muffled' },
          { drum: 0, sound: 'bells' }
        ],
        9: [{ drum: 1, sound: 'enu_open' }]
      }
    },
    toque_oba: {
      name: '🥁 Toque Obba (Royalty)',
      stepCount: 12,
      steps: {
        0: [{ drum: 2, sound: 'enu_bass' }],
        3: [
          { drum: 1, sound: 'enu_open' },
          { drum: 0, sound: 'chacha' }
        ],
        6: [{ drum: 2, sound: 'enu_muffled' }],
        9: [
          { drum: 1, sound: 'enu_open' },
          { drum: 0, sound: 'bells' }
        ]
      }
    },
    toque_oya: {
      name: '🥁 Toque Oyá (Wind & Storm)',
      stepCount: 16,
      steps: {
        0: [{ drum: 2, sound: 'enu_bass' }],
        2: [{ drum: 0, sound: 'chacha' }],
        4: [{ drum: 1, sound: 'enu_open' }],
        6: [{ drum: 2, sound: 'enu_open' }],
        8: [{ drum: 1, sound: 'enu_muffled' }],
        10: [{ drum: 0, sound: 'bells' }],
        12: [{ drum: 2, sound: 'enu_bass' }],
        14: [{ drum: 1, sound: 'enu_open' }]
      }
    },
    toque_osun: {
      name: '🥁 Toque Osun (The Staff)',
      stepCount: 12,
      steps: {
        0: [{ drum: 2, sound: 'enu_bass' }],
        3: [{ drum: 1, sound: 'enu_open' }],
        6: [{ drum: 0, sound: 'bells' }],
        9: [{ drum: 1, sound: 'enu_muffled' }]
      }
    },
    toque_orunmila: {
      name: '🥁 Toque Orunmila (The Oracle)',
      stepCount: 16,
      steps: {
        0: [{ drum: 2, sound: 'enu_bass' }],
        2: [{ drum: 0, sound: 'chacha' }],
        4: [{ drum: 1, sound: 'enu_open' }],
        8: [{ drum: 2, sound: 'enu_bass' }],
        10: [{ drum: 0, sound: 'bells' }],
        12: [{ drum: 1, sound: 'enu_open' }],
        14: [{ drum: 1, sound: 'enu_muffled' }]
      }
    }
  },
  pandero: {
    plena_sencilla: {
      name: '🥁 Plena Sencilla',
      stepCount: 16,
      steps: {
        0: [{ drum: 2, sound: 'open' }],
        2: [{ drum: 0, sound: 'slap' }],
        4: [{ drum: 1, sound: 'open' }],
        6: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 2, sound: 'open' }],
        10: [{ drum: 0, sound: 'slap' }],
        12: [{ drum: 1, sound: 'open' }],
        14: [{ drum: 0, sound: 'slap' }]
      }
    },
    plena_rapida: {
      name: '🥁 Plena Corrida',
      stepCount: 16,
      steps: {
        0: [{ drum: 2, sound: 'open' }],
        2: [{ drum: 0, sound: 'slap' }],
        4: [{ drum: 1, sound: 'open' }],
        5: [{ drum: 0, sound: 'heeltoe' }],
        6: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 2, sound: 'open' }],
        10: [{ drum: 0, sound: 'slap' }],
        12: [{ drum: 1, sound: 'open' }],
        13: [{ drum: 0, sound: 'heeltoe' }],
        14: [{ drum: 0, sound: 'slap' }]
      }
    },
    plena_buleador: {
      name: '🥁 Plena Buleador Solo',
      stepCount: 16,
      steps: {
        0: [{ drum: 2, sound: 'bass' }],
        4: [{ drum: 2, sound: 'open' }],
        8: [{ drum: 2, sound: 'bass' }],
        12: [{ drum: 2, sound: 'open' }]
      }
    },
    samba_de_roda_pandeiro: {
      name: '🥁 Samba de Roda Pandeiro',
      stepCount: 16,
      steps: {
        0: [{ drum: 2, sound: 'bass' }],
        2: [{ drum: 0, sound: 'heeltoe' }],
        4: [{ drum: 1, sound: 'open' }],
        6: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 2, sound: 'bass' }],
        10: [{ drum: 0, sound: 'heeltoe' }],
        12: [{ drum: 1, sound: 'open' }],
        14: [{ drum: 0, sound: 'slap' }]
      }
    },
    plena_holandesa: {
      name: '🥁 Plena Holandesa Syncopation',
      stepCount: 16,
      steps: {
        0: [{ drum: 2, sound: 'open' }],
        2: [{ drum: 1, sound: 'open' }],
        3: [{ drum: 0, sound: 'slap' }],
        6: [{ drum: 1, sound: 'open' }],
        8: [{ drum: 2, sound: 'open' }],
        10: [{ drum: 0, sound: 'slap' }],
        12: [{ drum: 1, sound: 'open' }],
        14: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    choro_pandeiro: {
      name: '🥁 Classical Choro Jingle',
      stepCount: 16,
      steps: {
        0: [{ drum: 2, sound: 'bass' }],
        2: [{ drum: 0, sound: 'heeltoe' }],
        4: [{ drum: 1, sound: 'open' }],
        6: [{ drum: 0, sound: 'heeltoe' }],
        8: [{ drum: 2, sound: 'open' }],
        10: [{ drum: 0, sound: 'heeltoe' }],
        12: [{ drum: 1, sound: 'open' }],
        14: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    baiao_pandeiro: {
      name: '🥁 Baião Jingle Dance',
      stepCount: 16,
      steps: {
        0: [{ drum: 2, sound: 'bass' }],
        4: [{ drum: 1, sound: 'open' }],
        6: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 2, sound: 'bass' }],
        10: [{ drum: 0, sound: 'heeltoe' }],
        12: [{ drum: 1, sound: 'open' }],
        14: [{ drum: 0, sound: 'slap' }]
      }
    },
    samba_reggae_pandeiro: {
      name: '🥁 Samba Reggae Pandeiro',
      stepCount: 16,
      steps: {
        0: [{ drum: 2, sound: 'bass' }],
        3: [{ drum: 0, sound: 'heeltoe' }],
        4: [{ drum: 1, sound: 'open' }],
        8: [{ drum: 2, sound: 'bass' }],
        11: [{ drum: 0, sound: 'slap' }],
        12: [{ drum: 1, sound: 'open' }]
      }
    },
    bossa_pandeiro: {
      name: '🥁 Bossa Nova Pandeiro',
      stepCount: 16,
      steps: {
        0: [{ drum: 2, sound: 'bass' }],
        4: [{ drum: 0, sound: 'heeltoe' }],
        8: [{ drum: 1, sound: 'open' }],
        12: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    frevo_pandeiro: {
      name: '🥁 Frevo Fast Beat',
      stepCount: 16,
      steps: {
        0: [{ drum: 2, sound: 'bass' }],
        2: [{ drum: 0, sound: 'slap' }],
        4: [{ drum: 1, sound: 'open' }],
        6: [{ drum: 0, sound: 'heeltoe' }],
        8: [{ drum: 2, sound: 'bass' }],
        10: [{ drum: 0, sound: 'slap' }],
        12: [{ drum: 1, sound: 'open' }],
        14: [{ drum: 0, sound: 'heeltoe' }]
      }
    }
  },
  barril: {
    sica: {
      name: '🥁 Bomba Sicá',
      stepCount: 16,
      steps: {
        0: [{ drum: 1, sound: 'bass' }],
        3: [{ drum: 1, sound: 'open' }],
        4: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 1, sound: 'bass' }],
        11: [{ drum: 1, sound: 'open' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    },
    yuba: {
      name: '🥁 Bomba Yubá',
      stepCount: 12,
      steps: {
        0: [{ drum: 1, sound: 'bass' }],
        2: [{ drum: 0, sound: 'slap' }],
        4: [{ drum: 1, sound: 'open' }],
        6: [{ drum: 1, sound: 'bass' }],
        8: [{ drum: 0, sound: 'open' }],
        10: [{ drum: 0, sound: 'slap' }]
      }
    },
    cuembe: {
      name: '🥁 Bomba Cuembé',
      stepCount: 16,
      steps: {
        0: [{ drum: 1, sound: 'bass' }],
        2: [{ drum: 0, sound: 'slap' }],
        4: [{ drum: 1, sound: 'open' }],
        6: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 1, sound: 'bass' }],
        10: [{ drum: 0, sound: 'slap' }],
        12: [{ drum: 1, sound: 'open' }],
        14: [{ drum: 0, sound: 'open' }]
      }
    },
    holandes: {
      name: '🥁 Bomba Holandés',
      stepCount: 16,
      steps: {
        0: [{ drum: 1, sound: 'bass' }],
        2: [{ drum: 1, sound: 'bass' }],
        4: [{ drum: 0, sound: 'slap' }],
        6: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 1, sound: 'open' }],
        10: [{ drum: 1, sound: 'open' }],
        12: [{ drum: 0, sound: 'slap' }],
        14: [{ drum: 0, sound: 'open' }]
      }
    },
    seis_corrido: {
      name: '🥁 Bomba Seis Corrido (Loíza)',
      stepCount: 16,
      steps: {
        0: [{ drum: 1, sound: 'bass' }],
        2: [{ drum: 0, sound: 'slap' }],
        4: [{ drum: 1, sound: 'open' }],
        6: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 1, sound: 'bass' }],
        10: [{ drum: 1, sound: 'open' }],
        12: [{ drum: 0, sound: 'slap' }],
        14: [{ drum: 0, sound: 'open' }]
      }
    },
    bomba_lero: {
      name: '🥁 Bomba Leró (Elegant)',
      stepCount: 12,
      steps: {
        0: [{ drum: 1, sound: 'bass' }],
        3: [{ drum: 0, sound: 'slap' }],
        4: [{ drum: 1, sound: 'open' }],
        6: [{ drum: 1, sound: 'open' }],
        9: [{ drum: 0, sound: 'open' }]
      }
    },
    bomba_hoyope: {
      name: '🥁 Bomba Hoyo de Manatí',
      stepCount: 16,
      steps: {
        0: [{ drum: 1, sound: 'bass' }],
        2: [{ drum: 0, sound: 'slap' }],
        4: [{ drum: 1, sound: 'open' }],
        6: [{ drum: 1, sound: 'bass' }],
        8: [{ drum: 1, sound: 'open' }],
        10: [{ drum: 0, sound: 'slap' }],
        12: [{ drum: 0, sound: 'slap' }],
        14: [{ drum: 1, sound: 'open' }]
      }
    },
    bomba_calinda: {
      name: '🥁 Bomba Calindá (Haitian Roots)',
      stepCount: 12,
      steps: {
        0: [{ drum: 1, sound: 'bass' }],
        3: [{ drum: 1, sound: 'open' }],
        6: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 1, sound: 'bass' }],
        9: [{ drum: 1, sound: 'open' }],
        10: [{ drum: 0, sound: 'slap' }]
      }
    },
    bomba_guembe: {
      name: '🥁 Bomba Güembé',
      stepCount: 16,
      steps: {
        0: [{ drum: 1, sound: 'bass' }],
        3: [{ drum: 0, sound: 'slap' }],
        4: [{ drum: 1, sound: 'open' }],
        8: [{ drum: 1, sound: 'bass' }],
        12: [{ drum: 0, sound: 'slap' }]
      }
    },
    bomba_cuembe_fast: {
      name: '🥁 Bomba Cuembé Fast',
      stepCount: 16,
      steps: {
        0: [{ drum: 1, sound: 'bass' }],
        2: [{ drum: 0, sound: 'slap' }],
        4: [{ drum: 1, sound: 'open' }],
        6: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 1, sound: 'bass' }],
        10: [{ drum: 0, sound: 'slap' }],
        12: [{ drum: 1, sound: 'open' }],
        14: [{ drum: 0, sound: 'slap' }]
      }
    }
  },
  bombo: {
    chacarera: {
      name: '🥁 Chacarera',
      stepCount: 12,
      steps: {
        0: [{ drum: 1, sound: 'aro_wood' }],
        2: [{ drum: 1, sound: 'aro_wood' }],
        4: [{ drum: 0, sound: 'parche_open' }],
        6: [{ drum: 1, sound: 'aro_wood' }],
        8: [{ drum: 0, sound: 'parche_open' }],
        10: [{ drum: 1, sound: 'aro_wood' }]
      }
    },
    zamba: {
      name: '🥁 Zamba',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'parche_bass' }],
        3: [{ drum: 1, sound: 'aro_click' }],
        4: [{ drum: 1, sound: 'aro_wood' }],
        8: [{ drum: 0, sound: 'parche_open' }],
        10: [{ drum: 1, sound: 'aro_wood' }]
      }
    },
    gato: {
      name: '🥁 Gato Rhythm',
      stepCount: 12,
      steps: {
        0: [{ drum: 1, sound: 'aro_wood' }],
        2: [{ drum: 0, sound: 'parche_open' }],
        4: [{ drum: 1, sound: 'aro_wood' }],
        6: [{ drum: 1, sound: 'aro_wood' }],
        8: [{ drum: 0, sound: 'parche_open' }],
        10: [{ drum: 1, sound: 'aro_wood' }]
      }
    },
    malambo_bombo: {
      name: '🥁 Argentine Malambo Solo',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'parche_bass' }],
        2: [{ drum: 1, sound: 'aro_wood' }],
        3: [{ drum: 1, sound: 'aro_click' }],
        6: [{ drum: 0, sound: 'parche_open' }],
        8: [{ drum: 1, sound: 'aro_wood' }],
        9: [{ drum: 1, sound: 'aro_click' }],
        10: [{ drum: 0, sound: 'parche_open' }]
      }
    },
    carnavalito_bombo: {
      name: '🥁 Carnavalito (Andean Hop)',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'parche_bass' }],
        3: [{ drum: 1, sound: 'aro_wood' }],
        4: [{ drum: 0, sound: 'parche_open' }],
        8: [{ drum: 0, sound: 'parche_bass' }],
        11: [{ drum: 1, sound: 'aro_wood' }],
        12: [{ drum: 1, sound: 'aro_click' }],
        14: [{ drum: 0, sound: 'parche_open' }]
      }
    },
    vidala_bombo: {
      name: '🥁 Vidala Melancholic March',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'parche_bass' }],
        4: [{ drum: 1, sound: 'aro_click' }],
        8: [{ drum: 0, sound: 'parche_open' }]
      }
    },
    candombe_bombo_ar: {
      name: '🥁 Argentine Candombe Murga',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'parche_bass' }],
        2: [{ drum: 1, sound: 'aro_wood' }],
        4: [{ drum: 0, sound: 'parche_open' }],
        6: [{ drum: 1, sound: 'aro_wood' }],
        8: [{ drum: 0, sound: 'parche_bass' }],
        10: [{ drum: 0, sound: 'parche_bass' }],
        12: [{ drum: 0, sound: 'parche_open' }],
        14: [{ drum: 1, sound: 'aro_wood' }]
      }
    },
    baile_cito: {
      name: '🥁 Bailecito Boliviano',
      stepCount: 12,
      steps: {
        0: [{ drum: 1, sound: 'aro_wood' }],
        3: [{ drum: 0, sound: 'parche_bass' }],
        6: [{ drum: 1, sound: 'aro_wood' }],
        9: [{ drum: 0, sound: 'parche_open' }]
      }
    },
    bombo_baguala: {
      name: '🥁 Baguala Northern Chant',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'parche_bass' }],
        4: [{ drum: 1, sound: 'aro_wood' }],
        8: [{ drum: 0, sound: 'parche_open' }]
      }
    },
    cueca_bombo: {
      name: '🥁 Cueca Chilena/Boliviana',
      stepCount: 12,
      steps: {
        0: [{ drum: 1, sound: 'aro_wood' }],
        2: [{ drum: 1, sound: 'aro_wood' }],
        4: [{ drum: 0, sound: 'parche_bass' }],
        6: [{ drum: 1, sound: 'aro_wood' }],
        8: [{ drum: 0, sound: 'parche_open' }],
        10: [{ drum: 1, sound: 'aro_wood' }]
      }
    }
  },
  tabla: {
    keharwa: {
      name: '🥁 Keharwa Taal',
      stepCount: 8,
      steps: {
        0: [
          { drum: 0, sound: 'bayan_ga' },
          { drum: 1, sound: 'dayan_na' }
        ],
        1: [{ drum: 1, sound: 'dayan_tin' }],
        2: [{ drum: 0, sound: 'bayan_ke' }],
        3: [{ drum: 1, sound: 'dayan_na' }],
        4: [{ drum: 0, sound: 'bayan_ga' }],
        5: [{ drum: 1, sound: 'dayan_tin' }],
        6: [{ drum: 0, sound: 'bayan_ke' }],
        7: [{ drum: 1, sound: 'dayan_na' }]
      }
    },
    teental: {
      name: '🥁 Teental (16 Beats)',
      stepCount: 16,
      steps: {
        0: [
          { drum: 0, sound: 'bayan_ga' },
          { drum: 1, sound: 'dayan_na' }
        ],
        2: [{ drum: 1, sound: 'dayan_tin' }],
        4: [{ drum: 0, sound: 'bayan_ke' }],
        6: [{ drum: 1, sound: 'dayan_na' }],
        8: [
          { drum: 0, sound: 'bayan_ga' },
          { drum: 1, sound: 'dayan_na' }
        ],
        10: [{ drum: 1, sound: 'dayan_tin' }],
        12: [{ drum: 0, sound: 'bayan_ke' }],
        14: [{ drum: 1, sound: 'dayan_na' }]
      }
    },
    dadra: {
      name: '🥁 Dadra Taal',
      stepCount: 12,
      steps: {
        0: [
          { drum: 0, sound: 'bayan_ga' },
          { drum: 1, sound: 'dayan_na' }
        ],
        2: [{ drum: 1, sound: 'dayan_tin' }],
        4: [{ drum: 0, sound: 'bayan_ke' }],
        6: [{ drum: 0, sound: 'bayan_ga' }],
        8: [{ drum: 1, sound: 'dayan_na' }],
        10: [{ drum: 1, sound: 'dayan_tin' }]
      }
    },
    rupak: {
      name: '🥁 Rupak Taal',
      stepCount: 14,
      steps: {
        0: [{ drum: 1, sound: 'dayan_tin' }],
        2: [{ drum: 1, sound: 'dayan_ta' }],
        4: [{ drum: 0, sound: 'bayan_ke' }],
        6: [{ drum: 0, sound: 'bayan_ga' }],
        8: [{ drum: 1, sound: 'dayan_na' }],
        10: [{ drum: 0, sound: 'bayan_ga' }],
        12: [{ drum: 1, sound: 'dayan_na' }]
      }
    },
    jhaptal: {
      name: '🥁 Jhaptal (10-Beat Cycle)',
      stepCount: 10,
      steps: {
        0: [
          { drum: 0, sound: 'bayan_ga' },
          { drum: 1, sound: 'dayan_na' }
        ],
        2: [{ drum: 1, sound: 'dayan_tin' }],
        3: [{ drum: 0, sound: 'bayan_ke' }],
        5: [
          { drum: 0, sound: 'bayan_ga' },
          { drum: 1, sound: 'dayan_na' }
        ],
        7: [{ drum: 1, sound: 'dayan_tin' }],
        8: [{ drum: 0, sound: 'bayan_ke' }]
      }
    },
    kaherva_fast: {
      name: '🥁 Fast Folk Fusion Groove',
      stepCount: 16,
      steps: {
        0: [
          { drum: 0, sound: 'bayan_ga' },
          { drum: 1, sound: 'dayan_na' }
        ],
        2: [{ drum: 1, sound: 'dayan_tin' }],
        4: [
          { drum: 0, sound: 'bayan_ga' },
          { drum: 1, sound: 'dayan_na' }
        ],
        6: [{ drum: 1, sound: 'dayan_tin' }],
        8: [{ drum: 0, sound: 'bayan_ke' }],
        10: [{ drum: 1, sound: 'dayan_na' }],
        12: [
          { drum: 0, sound: 'bayan_ga' },
          { drum: 1, sound: 'dayan_na' }
        ],
        14: [{ drum: 1, sound: 'dayan_na' }]
      }
    },
    ektaal: {
      name: '🥁 Ektaal (12-Beat Classical)',
      stepCount: 12,
      steps: {
        0: [
          { drum: 0, sound: 'bayan_ga' },
          { drum: 1, sound: 'dayan_na' }
        ],
        2: [{ drum: 0, sound: 'bayan_ke' }],
        4: [{ drum: 1, sound: 'dayan_tin' }],
        6: [{ drum: 1, sound: 'dayan_na' }],
        8: [{ drum: 0, sound: 'bayan_ga' }],
        10: [{ drum: 1, sound: 'dayan_tin' }]
      }
    },
    bhajani: {
      name: '🥁 Bhajani (Devotional 8-Beat)',
      stepCount: 8,
      steps: {
        0: [
          { drum: 0, sound: 'bayan_ga' },
          { drum: 1, sound: 'dayan_na' }
        ],
        2: [{ drum: 1, sound: 'dayan_tin' }],
        4: [
          { drum: 0, sound: 'bayan_ke' },
          { drum: 1, sound: 'dayan_na' }
        ],
        6: [{ drum: 1, sound: 'dayan_tin' }]
      }
    },
    tintal_fast: {
      name: '🥁 Tintal Fast Drut Cycle',
      stepCount: 16,
      steps: {
        0: [
          { drum: 0, sound: 'bayan_ga' },
          { drum: 1, sound: 'dayan_na' }
        ],
        2: [{ drum: 1, sound: 'dayan_tin' }],
        4: [{ drum: 1, sound: 'dayan_ta' }],
        6: [{ drum: 1, sound: 'dayan_na' }],
        8: [
          { drum: 0, sound: 'bayan_ga' },
          { drum: 1, sound: 'dayan_na' }
        ],
        10: [{ drum: 1, sound: 'dayan_tin' }],
        12: [{ drum: 1, sound: 'dayan_ta' }],
        14: [{ drum: 1, sound: 'dayan_na' }]
      }
    },
    roopak_classical: {
      name: '🥁 Classical Roopak Variations',
      stepCount: 14,
      steps: {
        0: [{ drum: 1, sound: 'dayan_tin' }],
        2: [{ drum: 0, sound: 'bayan_ga' }],
        4: [{ drum: 1, sound: 'dayan_na' }],
        6: [{ drum: 1, sound: 'dayan_tin' }],
        8: [{ drum: 0, sound: 'bayan_ga' }],
        10: [{ drum: 1, sound: 'dayan_na' }],
        12: [{ drum: 1, sound: 'dayan_ta' }]
      }
    }
  },
  darbuka: {
    maqsum: {
      name: '🥁 Maqsum (Standard)',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'doum' }],
        2: [{ drum: 0, sound: 'tak' }],
        4: [{ drum: 0, sound: 'sak' }],
        6: [{ drum: 0, sound: 'doum' }],
        8: [{ drum: 0, sound: 'tak' }],
        10: [{ drum: 0, sound: 'sak' }],
        12: [{ drum: 0, sound: 'tak' }],
        14: [{ drum: 0, sound: 'ka' }]
      }
    },
    baladi: {
      name: '🥁 Baladi (Bass)',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'doum' }],
        2: [{ drum: 0, sound: 'doum' }],
        4: [{ drum: 0, sound: 'tak' }],
        6: [{ drum: 0, sound: 'doum' }],
        8: [{ drum: 0, sound: 'tak' }],
        10: [{ drum: 0, sound: 'sak' }],
        12: [{ drum: 0, sound: 'doum' }],
        14: [{ drum: 0, sound: 'ka' }]
      }
    },
    saidi: {
      name: "🥁 Sa'idi",
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'doum' }],
        2: [{ drum: 0, sound: 'tak' }],
        4: [{ drum: 0, sound: 'doum' }],
        6: [{ drum: 0, sound: 'doum' }],
        8: [{ drum: 0, sound: 'tak' }],
        10: [{ drum: 0, sound: 'sak' }],
        12: [{ drum: 0, sound: 'tak' }],
        14: [{ drum: 0, sound: 'ka' }]
      }
    },
    chiftetelli: {
      name: '🥁 Chiftetelli (Slow)',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'doum' }],
        4: [{ drum: 0, sound: 'tak' }],
        6: [{ drum: 0, sound: 'tak' }],
        8: [{ drum: 0, sound: 'doum' }],
        10: [{ drum: 0, sound: 'doum' }],
        12: [{ drum: 0, sound: 'tak' }],
        14: [{ drum: 0, sound: 'ka' }]
      }
    },
    karsilama: {
      name: '🥁 Karsilama (9/8 Turkish)',
      stepCount: 9,
      steps: {
        0: [{ drum: 0, sound: 'doum' }],
        2: [{ drum: 0, sound: 'tak' }],
        4: [{ drum: 0, sound: 'doum' }],
        6: [{ drum: 0, sound: 'tak' }],
        7: [{ drum: 0, sound: 'tak' }],
        8: [{ drum: 0, sound: 'tak' }]
      }
    },
    ayoub: {
      name: '🥁 Ayoub (Trance/Zar Rhythm)',
      stepCount: 8,
      steps: {
        0: [{ drum: 0, sound: 'doum' }],
        3: [{ drum: 0, sound: 'tak' }],
        4: [{ drum: 0, sound: 'tak' }],
        7: [{ drum: 0, sound: 'tak' }]
      }
    },
    malfuf: {
      name: '🥁 Malfuf (Upbeat/Fast)',
      stepCount: 8,
      steps: {
        0: [{ drum: 0, sound: 'doum' }],
        3: [{ drum: 0, sound: 'tak' }],
        6: [{ drum: 0, sound: 'tak' }]
      }
    },
    masmoudi: {
      name: '🥁 Masmoudi (Heavy/Slow)',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'doum' }],
        4: [{ drum: 0, sound: 'doum' }],
        8: [{ drum: 0, sound: 'tak' }],
        12: [{ drum: 0, sound: 'tak' }],
        14: [{ drum: 0, sound: 'ka' }]
      }
    },
    sombati: {
      name: '🥁 Sombati (Medium/Syncopated)',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'doum' }],
        4: [{ drum: 0, sound: 'ka' }],
        6: [{ drum: 0, sound: 'tak' }],
        8: [{ drum: 0, sound: 'doum' }],
        12: [{ drum: 0, sound: 'tak' }]
      }
    },
    fallahi: {
      name: '🥁 Fallahi (Farmers/Rapid)',
      stepCount: 8,
      steps: {
        0: [{ drum: 0, sound: 'doum' }],
        2: [{ drum: 0, sound: 'tak' }],
        4: [{ drum: 0, sound: 'ka' }],
        6: [{ drum: 0, sound: 'tak' }]
      }
    }
  },
  timbales: {
    cascara: {
      name: '🥁 Cáscara (Paila)',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'paila' }],
        2: [{ drum: 0, sound: 'paila' }],
        4: [{ drum: 0, sound: 'paila' }],
        5: [{ drum: 0, sound: 'paila' }],
        7: [{ drum: 0, sound: 'paila' }],
        9: [{ drum: 0, sound: 'paila' }],
        11: [{ drum: 0, sound: 'paila' }],
        12: [{ drum: 0, sound: 'paila' }],
        14: [{ drum: 0, sound: 'paila' }]
      }
    },
    mambo_bell: {
      name: '🥁 Mambo Bell Pattern',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bell' }],
        2: [{ drum: 0, sound: 'bell' }],
        4: [{ drum: 0, sound: 'bell' }],
        5: [{ drum: 0, sound: 'bell' }],
        7: [{ drum: 0, sound: 'bell' }],
        8: [{ drum: 0, sound: 'bell' }],
        10: [{ drum: 0, sound: 'bell' }],
        12: [{ drum: 0, sound: 'bell' }],
        14: [{ drum: 0, sound: 'bell' }]
      }
    },
    songo: {
      name: '🥁 Songo Timbales',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'rimshot' }],
        3: [{ drum: 1, sound: 'open' }],
        6: [{ drum: 0, sound: 'rimshot' }],
        8: [{ drum: 1, sound: 'open' }],
        11: [{ drum: 0, sound: 'rimshot' }],
        14: [{ drum: 1, sound: 'open' }]
      }
    },
    mozambique: {
      name: '🥁 Mozambique (Caravan Style)',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bell' }],
        2: [{ drum: 1, sound: 'open' }],
        4: [{ drum: 0, sound: 'rimshot' }],
        5: [{ drum: 0, sound: 'paila' }],
        8: [{ drum: 0, sound: 'bell' }],
        10: [{ drum: 1, sound: 'open' }],
        12: [{ drum: 0, sound: 'bell' }],
        14: [{ drum: 0, sound: 'paila' }]
      }
    },
    chacha_bell_timb: {
      name: '🥁 Classic Cha-Cha Bell',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bell' }],
        4: [{ drum: 0, sound: 'bell' }],
        8: [{ drum: 0, sound: 'bell' }],
        10: [{ drum: 0, sound: 'paila' }],
        12: [{ drum: 0, sound: 'bell' }],
        14: [{ drum: 0, sound: 'bell' }]
      }
    },
    abaku_bell: {
      name: '🥁 Abakuá Bell & Rim Pattern',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'bell' }],
        2: [{ drum: 0, sound: 'paila' }],
        4: [{ drum: 0, sound: 'bell' }],
        6: [{ drum: 0, sound: 'bell' }],
        8: [{ drum: 0, sound: 'paila' }],
        10: [{ drum: 0, sound: 'rimshot' }]
      }
    },
    merengue_timb: {
      name: '🥁 Merengue Caballo Speedup',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'paila' }],
        2: [{ drum: 0, sound: 'paila' }],
        4: [{ drum: 0, sound: 'rimshot' }],
        6: [{ drum: 0, sound: 'paila' }],
        8: [{ drum: 0, sound: 'paila' }],
        10: [{ drum: 0, sound: 'paila' }],
        12: [{ drum: 0, sound: 'rimshot' }],
        14: [{ drum: 0, sound: 'paila' }]
      }
    },
    timbales_salsa_solo: {
      name: '🥁 High-Energy Salsa Solo',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'rimshot' }],
        2: [{ drum: 1, sound: 'open' }],
        4: [{ drum: 0, sound: 'paila' }],
        6: [{ drum: 0, sound: 'bell' }],
        8: [{ drum: 0, sound: 'rimshot' }],
        10: [{ drum: 1, sound: 'open' }],
        12: [{ drum: 0, sound: 'paila' }],
        14: [{ drum: 0, sound: 'bell' }]
      }
    },
    timbales_cumbia: {
      name: '🥁 Simple Cumbia Timbales',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bell' }],
        4: [{ drum: 1, sound: 'open' }],
        8: [{ drum: 0, sound: 'bell' }],
        12: [{ drum: 1, sound: 'open' }]
      }
    },
    timbales_danzon: {
      name: '🥁 Danzón Baqueteo Style',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'paila' }],
        4: [{ drum: 0, sound: 'rimshot' }],
        6: [{ drum: 0, sound: 'paila' }],
        8: [{ drum: 0, sound: 'paila' }],
        10: [{ drum: 0, sound: 'rimshot' }],
        12: [{ drum: 0, sound: 'paila' }]
      }
    }
  },
  cajon: {
    flamenco: {
      name: '🥁 Flamenco Rumba',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'tap' }],
        4: [{ drum: 0, sound: 'bass' }],
        6: [{ drum: 0, sound: 'tap' }],
        8: [{ drum: 0, sound: 'slap' }],
        10: [{ drum: 0, sound: 'tap' }],
        12: [{ drum: 0, sound: 'edge' }],
        14: [{ drum: 0, sound: 'tap' }]
      }
    },
    peruano: {
      name: '🥁 Festejo Peruano',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'tap' }],
        3: [{ drum: 0, sound: 'bass' }],
        5: [{ drum: 0, sound: 'slap' }],
        6: [{ drum: 0, sound: 'bass' }],
        8: [{ drum: 0, sound: 'tap' }],
        9: [{ drum: 0, sound: 'edge' }],
        11: [{ drum: 0, sound: 'slap' }]
      }
    },
    pop_rock: {
      name: '🥁 Pop/Rock Backbeat',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'tap' }],
        4: [{ drum: 0, sound: 'slap' }],
        6: [{ drum: 0, sound: 'tap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'slap' }],
        14: [{ drum: 0, sound: 'tap' }]
      }
    },
    lando_peruano: {
      name: '🥁 Landó (Afro-Peruvian)',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'tap' }],
        4: [{ drum: 0, sound: 'slap' }],
        6: [{ drum: 0, sound: 'bass' }],
        8: [{ drum: 0, sound: 'tap' }],
        10: [{ drum: 0, sound: 'slap' }]
      }
    },
    acoustic_boom_bap: {
      name: '🥁 Acoustic Hip-Hop Boom Bap',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'slap' }],
        14: [{ drum: 0, sound: 'tap' }]
      }
    },
    buleria_cajon: {
      name: '🥁 Bulería (12-Beat Flamenco)',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'edge' }],
        2: [{ drum: 0, sound: 'slap' }],
        5: [{ drum: 0, sound: 'bass' }],
        7: [{ drum: 0, sound: 'slap' }],
        9: [{ drum: 0, sound: 'slap' }],
        11: [{ drum: 0, sound: 'bass' }]
      }
    },
    reggae_cajon: {
      name: '🥁 One Drop Reggae',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'tap' }],
        4: [{ drum: 0, sound: 'bass' }],
        6: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'tap' }],
        12: [{ drum: 0, sound: 'bass' }],
        14: [{ drum: 0, sound: 'slap' }]
      }
    },
    funk_cajon: {
      name: '🥁 Linear Funk Cajon',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'tap' }],
        4: [{ drum: 0, sound: 'slap' }],
        7: [{ drum: 0, sound: 'tap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'slap' }],
        15: [{ drum: 0, sound: 'tap' }]
      }
    },
    bossa_cajon: {
      name: '🥁 Soft Bossa Nova Cajon',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'tap' }],
        6: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'tap' }],
        12: [{ drum: 0, sound: 'slap' }]
      }
    },
    hiphop_cajon: {
      name: '🥁 Hip-Hop Boom Bap Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'slap' }]
      }
    }
  },
  candombe: {
    candombe_groove: {
      name: '🥁 Candombe Traditional Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 2, sound: 'bass' }],
        2: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 1, sound: 'slap' }],
        6: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 2, sound: 'bass' }],
        10: [{ drum: 1, sound: 'heeltoe' }],
        12: [{ drum: 0, sound: 'open' }],
        14: [{ drum: 1, sound: 'slap' }]
      }
    },
    candombe_cuareim: {
      name: '🥁 Barrio Cuareim (Piano Heavy)',
      stepCount: 16,
      steps: {
        0: [{ drum: 2, sound: 'bass' }],
        4: [{ drum: 2, sound: 'open' }],
        6: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 2, sound: 'bass' }],
        10: [{ drum: 1, sound: 'slap' }],
        12: [{ drum: 2, sound: 'open' }]
      }
    },
    candombe_ansina: {
      name: '🥁 Barrio Ansina (Repique Sync)',
      stepCount: 16,
      steps: {
        0: [{ drum: 2, sound: 'bass' }],
        3: [{ drum: 1, sound: 'slap' }],
        4: [{ drum: 1, sound: 'open' }],
        8: [{ drum: 2, sound: 'bass' }],
        11: [{ drum: 1, sound: 'slap' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    },
    candombe_cordon: {
      name: '🥁 Barrio Cordón (Speedy Sync)',
      stepCount: 16,
      steps: {
        0: [{ drum: 2, sound: 'bass' }],
        3: [{ drum: 1, sound: 'slap' }],
        5: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 2, sound: 'bass' }],
        11: [{ drum: 1, sound: 'slap' }],
        13: [{ drum: 0, sound: 'open' }]
      }
    },
    candombe_comparsa: {
      name: '🥁 Comparsa Street Parade',
      stepCount: 16,
      steps: {
        0: [{ drum: 2, sound: 'bass' }],
        2: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 1, sound: 'slap' }],
        7: [{ drum: 0, sound: 'heeltoe' }],
        8: [{ drum: 2, sound: 'bass' }],
        10: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 1, sound: 'slap' }],
        14: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    candombe_recompilacion: {
      name: '🥁 Candombe Modern Recompilación',
      stepCount: 16,
      steps: {
        0: [{ drum: 2, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 1, sound: 'slap' }],
        12: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    candombe_piano: {
      name: '🥁 Piano Rhythm Focus',
      stepCount: 16,
      steps: {
        0: [{ drum: 2, sound: 'bass' }],
        3: [{ drum: 2, sound: 'open' }],
        6: [{ drum: 2, sound: 'open' }],
        8: [{ drum: 2, sound: 'bass' }],
        11: [{ drum: 2, sound: 'open' }],
        14: [{ drum: 2, sound: 'open' }]
      }
    },
    candombe_chico: {
      name: '🥁 Chico Constant Ride',
      stepCount: 16,
      steps: {
        0: [{ drum: 1, sound: 'slap' }],
        4: [{ drum: 1, sound: 'open' }],
        8: [{ drum: 1, sound: 'slap' }],
        12: [{ drum: 1, sound: 'open' }]
      }
    },
    candombe_repique: {
      name: '🥁 Repique Playful Accent',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'open' }],
        2: [{ drum: 0, sound: 'slap' }],
        6: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'open' }],
        10: [{ drum: 0, sound: 'slap' }],
        14: [{ drum: 0, sound: 'open' }]
      }
    },
    candombe_rapido: {
      name: '🥁 Carnaval Fast Parade',
      stepCount: 16,
      steps: {
        0: [{ drum: 2, sound: 'bass' }],
        2: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 1, sound: 'slap' }],
        6: [{ drum: 0, sound: 'heeltoe' }],
        8: [{ drum: 2, sound: 'bass' }],
        10: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 1, sound: 'slap' }],
        14: [{ drum: 0, sound: 'heeltoe' }]
      }
    }
  },
  gwoka: {
    lewoz: {
      name: '🥁 Léwoz (Traditional)',
      stepCount: 16,
      steps: {
        0: [{ drum: 1, sound: 'bass' }],
        2: [{ drum: 1, sound: 'open' }],
        4: [{ drum: 0, sound: 'slap' }],
        6: [{ drum: 1, sound: 'open' }],
        8: [{ drum: 1, sound: 'bass' }],
        10: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 1, sound: 'slap' }],
        14: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    kaladja: {
      name: '🥁 Kaladja (Slow Expressive)',
      stepCount: 12,
      steps: {
        0: [{ drum: 1, sound: 'bass' }],
        3: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'slap' }],
        6: [{ drum: 1, sound: 'open' }],
        9: [{ drum: 0, sound: 'slap' }]
      }
    },
    toumtoum: {
      name: '🥁 Toumtoum (Festive Carnival)',
      stepCount: 16,
      steps: {
        0: [{ drum: 1, sound: 'bass' }],
        2: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'slap' }],
        6: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 1, sound: 'bass' }],
        10: [{ drum: 0, sound: 'slap' }],
        12: [{ drum: 0, sound: 'slap' }],
        14: [{ drum: 0, sound: 'open' }]
      }
    },
    gravel: {
      name: '🥁 Graval (Spirited Battle)',
      stepCount: 16,
      steps: {
        0: [{ drum: 1, sound: 'bass' }],
        3: [{ drum: 0, sound: 'slap' }],
        4: [{ drum: 0, sound: 'open' }],
        7: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 1, sound: 'bass' }],
        11: [{ drum: 0, sound: 'slap' }],
        12: [{ drum: 0, sound: 'open' }],
        15: [{ drum: 0, sound: 'open' }]
      }
    },
    padjanbel: {
      name: '🥁 Padjanbel (Agricultural Chant)',
      stepCount: 12,
      steps: {
        0: [{ drum: 1, sound: 'bass' }],
        3: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 1, sound: 'bass' }],
        9: [{ drum: 0, sound: 'slap' }]
      }
    },
    gwoka_graval_fast: {
      name: '🥁 Graval High Speed Battle',
      stepCount: 16,
      steps: {
        0: [{ drum: 1, sound: 'bass' }],
        2: [{ drum: 0, sound: 'slap' }],
        4: [{ drum: 1, sound: 'open' }],
        6: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 1, sound: 'bass' }],
        10: [{ drum: 0, sound: 'slap' }],
        12: [{ drum: 1, sound: 'open' }],
        14: [{ drum: 0, sound: 'open' }]
      }
    },
    gwoka_mende: {
      name: '🥁 Mende Traditional Dance',
      stepCount: 12,
      steps: {
        0: [{ drum: 1, sound: 'bass' }],
        3: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 1, sound: 'open' }],
        9: [{ drum: 0, sound: 'slap' }]
      }
    },
    gwoka_wolo: {
      name: '🥁 Wolo Elegant Waltz',
      stepCount: 12,
      steps: {
        0: [{ drum: 1, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'slap' }]
      }
    },
    gwoka_makenda: {
      name: '🥁 Makenda Modern Sync',
      stepCount: 16,
      steps: {
        0: [{ drum: 1, sound: 'bass' }],
        3: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 1, sound: 'bass' }],
        11: [{ drum: 0, sound: 'open' }],
        14: [{ drum: 0, sound: 'slap' }]
      }
    },
    gwoka_gwobas: {
      name: '🥁 Gwobas Deep Resonance',
      stepCount: 16,
      steps: {
        0: [{ drum: 1, sound: 'bass' }],
        4: [{ drum: 1, sound: 'bass' }],
        8: [{ drum: 1, sound: 'bass' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    }
  },
  tanbou: {
    beguine: {
      name: '🥁 Martinique Beguine',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'slap' }],
        7: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        11: [{ drum: 0, sound: 'muffled' }],
        12: [{ drum: 0, sound: 'slap' }],
        15: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    yanvalou: {
      name: '🥁 Yanvalou (Sacred Rolling)',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'heeltoe' }],
        6: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'open' }],
        10: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    rara: {
      name: '🥁 Haitian Rara Street March',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'slap' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        11: [{ drum: 0, sound: 'slap' }],
        12: [{ drum: 0, sound: 'heeltoe' }],
        14: [{ drum: 0, sound: 'open' }]
      }
    },
    ibon: {
      name: '🥁 Ibo (Stately Haitian Pride)',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'slap' }],
        9: [{ drum: 0, sound: 'open' }]
      }
    },
    kongo_rhythm: {
      name: '🥁 Kongo (Playful Rhythm)',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'slap' }],
        6: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'slap' }],
        12: [{ drum: 0, sound: 'open' }],
        14: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    tanbou_kaladja: {
      name: '🥁 Tanbou Kaladja Slow',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'slap' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    },
    tanbou_mazurka: {
      name: '🥁 Martinique Creole Mazurka',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'open' }]
      }
    },
    tanbou_beguine_fast: {
      name: '🥁 Tanbou Beguine Fast',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        11: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'slap' }]
      }
    },
    tanbou_merengue: {
      name: '🥁 Tanbou Creole Merengue',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'slap' }],
        6: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'slap' }],
        14: [{ drum: 0, sound: 'open' }]
      }
    },
    tanbou_rara_vibe: {
      name: '🥁 Tanbou Sacred Street Rara',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'open' }],
        14: [{ drum: 0, sound: 'slap' }]
      }
    }
  },
  chinese: {
    festive_dagu: {
      name: '🥁 Festive Opera Beats',
      stepCount: 16,
      steps: {
        0: [{ drum: 2, sound: 'bass' }],
        2: [{ drum: 1, sound: 'open' }],
        4: [{ drum: 0, sound: 'slap' }],
        6: [{ drum: 1, sound: 'open' }],
        8: [{ drum: 2, sound: 'bass' }],
        10: [{ drum: 0, sound: 'heeltoe' }],
        12: [{ drum: 1, sound: 'slap' }],
        14: [{ drum: 0, sound: 'slap' }]
      }
    },
    lion_dance: {
      name: '🥁 Southern Lion Dance Accent',
      stepCount: 16,
      steps: {
        0: [{ drum: 2, sound: 'bass' }],
        2: [{ drum: 2, sound: 'bass' }],
        4: [{ drum: 1, sound: 'slap' }],
        6: [{ drum: 1, sound: 'open' }],
        8: [{ drum: 0, sound: 'heeltoe' }],
        10: [{ drum: 2, sound: 'bass' }],
        12: [{ drum: 1, sound: 'slap' }],
        14: [{ drum: 1, sound: 'open' }]
      }
    },
    peking_opera: {
      name: '🥁 Peking Opera Battle Beat',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'slap' }],
        2: [{ drum: 0, sound: 'slap' }],
        3: [{ drum: 1, sound: 'open' }],
        6: [{ drum: 2, sound: 'bass' }],
        8: [{ drum: 0, sound: 'heeltoe' }],
        9: [{ drum: 1, sound: 'open' }]
      }
    },
    dragon_boat: {
      name: '🥁 Dragon Boat Racing Drum',
      stepCount: 16,
      steps: {
        0: [{ drum: 2, sound: 'bass' }],
        2: [{ drum: 1, sound: 'open' }],
        4: [{ drum: 1, sound: 'open' }],
        6: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 2, sound: 'bass' }],
        10: [{ drum: 1, sound: 'open' }],
        12: [{ drum: 1, sound: 'open' }],
        14: [{ drum: 0, sound: 'slap' }]
      }
    },
    dagu_triumph: {
      name: '🥁 Ancient Victory Drum March',
      stepCount: 12,
      steps: {
        0: [{ drum: 2, sound: 'bass' }],
        2: [{ drum: 2, sound: 'bass' }],
        4: [{ drum: 1, sound: 'slap' }],
        6: [{ drum: 1, sound: 'open' }],
        8: [{ drum: 0, sound: 'heeltoe' }],
        10: [{ drum: 1, sound: 'slap' }]
      }
    },
    chinese_opera_accent: {
      name: '🥁 Beijing Opera Accent',
      stepCount: 8,
      steps: {
        0: [{ drum: 1, sound: 'open' }],
        2: [{ drum: 0, sound: 'slap' }],
        4: [{ drum: 1, sound: 'open' }],
        6: [{ drum: 0, sound: 'slap' }]
      }
    },
    dagu_processional: {
      name: '🥁 Imperial Palace Processional',
      stepCount: 16,
      steps: {
        0: [{ drum: 2, sound: 'bass' }],
        4: [{ drum: 1, sound: 'open' }],
        8: [{ drum: 2, sound: 'bass' }],
        12: [{ drum: 1, sound: 'open' }]
      }
    },
    dragon_boat_sprint: {
      name: '🥁 Fast Dragon Boat Sprint',
      stepCount: 16,
      steps: {
        0: [{ drum: 2, sound: 'bass' }],
        2: [{ drum: 0, sound: 'slap' }],
        4: [{ drum: 2, sound: 'bass' }],
        6: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 2, sound: 'bass' }],
        10: [{ drum: 0, sound: 'slap' }],
        12: [{ drum: 2, sound: 'bass' }],
        14: [{ drum: 0, sound: 'slap' }]
      }
    },
    chinese_court_dance: {
      name: '🥁 Ancient Palace Court Dance',
      stepCount: 12,
      steps: {
        0: [{ drum: 2, sound: 'bass' }],
        3: [{ drum: 1, sound: 'open' }],
        6: [{ drum: 0, sound: 'heeltoe' }],
        9: [{ drum: 1, sound: 'open' }]
      }
    },
    dagu_ritual_charge: {
      name: '🥁 Sacred Mountain Ritual Charge',
      stepCount: 16,
      steps: {
        0: [{ drum: 2, sound: 'bass' }],
        4: [{ drum: 2, sound: 'bass' }],
        8: [{ drum: 2, sound: 'bass' }],
        10: [{ drum: 1, sound: 'open' }],
        12: [{ drum: 0, sound: 'slap' }]
      }
    }
  },
  daiko: {
    matsuri_taiko: {
      name: '🥁 Matsuri (Festival Taiko)',
      stepCount: 16,
      steps: {
        0: [
          { drum: 1, sound: 'bass' },
          { drum: 2, sound: 'bass' }
        ],
        2: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 1, sound: 'slap' }],
        6: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 1, sound: 'bass' }],
        10: [{ drum: 2, sound: 'bass' }],
        12: [{ drum: 0, sound: 'slap' }],
        14: [{ drum: 1, sound: 'open' }]
      }
    },
    miyake_daiko: {
      name: '🥁 Miyake Daiko (Lateral Stance)',
      stepCount: 12,
      steps: {
        0: [{ drum: 1, sound: 'bass' }],
        3: [{ drum: 2, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 1, sound: 'bass' }],
        9: [{ drum: 2, sound: 'bass' }],
        10: [{ drum: 0, sound: 'open' }]
      }
    },
    chichibu_yatai: {
      name: '🥁 Chichibu Yatai (Rapid Roll)',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'slap' }],
        2: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'slap' }],
        5: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 1, sound: 'bass' }],
        10: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 1, sound: 'bass' }],
        14: [{ drum: 2, sound: 'bass' }]
      }
    },
    hachijo_daiko: {
      name: '🥁 Hachijo Daiko (Swinging Bounce)',
      stepCount: 16,
      steps: {
        0: [{ drum: 1, sound: 'bass' }],
        3: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 1, sound: 'slap' }],
        7: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 2, sound: 'bass' }],
        11: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 1, sound: 'slap' }],
        14: [{ drum: 1, sound: 'bass' }]
      }
    },
    o_daiko_solo: {
      name: '🥁 Big O-Daiko Solo Strike',
      stepCount: 12,
      steps: {
        0: [
          { drum: 1, sound: 'bass' },
          { drum: 2, sound: 'bass' }
        ],
        3: [{ drum: 1, sound: 'bass' }],
        6: [
          { drum: 1, sound: 'bass' },
          { drum: 2, sound: 'bass' }
        ],
        9: [{ drum: 2, sound: 'bass' }]
      }
    },
    taiko_shakedown: {
      name: '🥁 Giant Taiko Shakedown',
      stepCount: 16,
      steps: {
        0: [{ drum: 1, sound: 'bass' }],
        4: [{ drum: 2, sound: 'bass' }],
        8: [{ drum: 1, sound: 'bass' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    },
    kumi_daiko_groove: {
      name: '🥁 Ensemble Kumi-Daiko Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 1, sound: 'bass' }],
        4: [{ drum: 2, sound: 'bass' }],
        8: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 1, sound: 'slap' }]
      }
    },
    taiko_thunder_clap: {
      name: '🥁 Shinto Thunder Clap',
      stepCount: 16,
      steps: {
        0: [
          { drum: 1, sound: 'bass' },
          { drum: 2, sound: 'bass' }
        ],
        8: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 1, sound: 'slap' }]
      }
    },
    matsuri_frenzy: {
      name: '🥁 Matsuri High Speed Frenzy',
      stepCount: 16,
      steps: {
        0: [{ drum: 1, sound: 'bass' }],
        2: [{ drum: 2, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 1, sound: 'slap' }],
        8: [{ drum: 1, sound: 'bass' }],
        10: [{ drum: 2, sound: 'bass' }],
        12: [{ drum: 0, sound: 'open' }],
        14: [{ drum: 1, sound: 'slap' }]
      }
    },
    daiko_spirit_march: {
      name: '🥁 Ancestral Spirit March',
      stepCount: 12,
      steps: {
        0: [{ drum: 1, sound: 'bass' }],
        4: [{ drum: 2, sound: 'bass' }],
        8: [{ drum: 0, sound: 'open' }]
      }
    }
  },
  bodhran: {
    bodhran_reel: {
      name: '🥁 Bodhrán Lively Reel',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'heeltoe' }],
        4: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'heeltoe' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'slap' }],
        12: [{ drum: 0, sound: 'open' }],
        14: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    irish_jig: {
      name: '🥁 Irish Jig (6/8 Rolling)',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'heeltoe' }],
        4: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'bass' }],
        8: [{ drum: 0, sound: 'heeltoe' }],
        10: [{ drum: 0, sound: 'slap' }]
      }
    },
    celtic_fusion: {
      name: '🥁 Celtic Pop Fusion',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'slap' }],
        7: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'heeltoe' }],
        12: [{ drum: 0, sound: 'slap' }],
        14: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    hornpipe_bodhran: {
      name: '🥁 Irish Hornpipe (Dotted Swing)',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'heeltoe' }],
        4: [{ drum: 0, sound: 'open' }],
        7: [{ drum: 0, sound: 'heeltoe' }],
        8: [{ drum: 0, sound: 'bass' }],
        11: [{ drum: 0, sound: 'heeltoe' }],
        12: [{ drum: 0, sound: 'slap' }],
        14: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    slip_jig_bodhran: {
      name: '🥁 Slip Jig (9/8 Soft Rolling)',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'heeltoe' }],
        4: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'bass' }],
        8: [{ drum: 0, sound: 'heeltoe' }],
        10: [{ drum: 0, sound: 'slap' }]
      }
    },
    bodhran_polka: {
      name: '🥁 Kerry Polka Lively Beat',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'slap' }]
      }
    },
    bodhran_slide: {
      name: '🥁 Irish Slide (12/8 Rolling)',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'heeltoe' }],
        6: [{ drum: 0, sound: 'open' }],
        9: [{ drum: 0, sound: 'slap' }]
      }
    },
    celtic_heartbeat: {
      name: '🥁 Sacred Celtic Heartbeat',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'bass' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    },
    bodhran_barndance: {
      name: '🥁 Barn Dance Steady Tap',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'heeltoe' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'heeltoe' }],
        12: [{ drum: 0, sound: 'slap' }]
      }
    },
    irish_march_bodhran: {
      name: '🥁 Traditional Irish Military March',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'bass' }],
        6: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'bass' }],
        14: [{ drum: 0, sound: 'slap' }]
      }
    }
  },
  talkingdrum: {
    tama_groove: {
      name: '🥁 Tama Talking Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'slap' }],
        6: [{ drum: 0, sound: 'heeltoe' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'slap' }],
        14: [{ drum: 0, sound: 'muffled' }]
      }
    },
    mbalax_tama: {
      name: '🥁 Wolof Mbalax Dance',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'open' }],
        3: [{ drum: 0, sound: 'slap' }],
        4: [{ drum: 0, sound: 'slap' }],
        6: [{ drum: 0, sound: 'heeltoe' }],
        8: [{ drum: 0, sound: 'open' }],
        11: [{ drum: 0, sound: 'slap' }],
        12: [{ drum: 0, sound: 'bass' }],
        14: [{ drum: 0, sound: 'open' }]
      }
    },
    praise_drum: {
      name: '🥁 Yoruba Royal Praise Chant',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'heeltoe' }],
        6: [{ drum: 0, sound: 'muffled' }],
        8: [{ drum: 0, sound: 'open' }],
        10: [{ drum: 0, sound: 'slap' }]
      }
    },
    fuji_tama: {
      name: '🥁 Fuji Tama Accent',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'slap' }],
        4: [{ drum: 0, sound: 'open' }],
        7: [{ drum: 0, sound: 'muffled' }],
        8: [{ drum: 0, sound: 'bass' }],
        11: [{ drum: 0, sound: 'slap' }],
        12: [{ drum: 0, sound: 'open' }],
        14: [{ drum: 0, sound: 'muffled' }]
      }
    },
    highlife_tama: {
      name: '🥁 Highlife Groove Accent',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'open' }],
        2: [{ drum: 0, sound: 'slap' }],
        4: [{ drum: 0, sound: 'heeltoe' }],
        6: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'open' }],
        10: [{ drum: 0, sound: 'slap' }],
        12: [{ drum: 0, sound: 'heeltoe' }],
        14: [{ drum: 0, sound: 'muffled' }]
      }
    },
    yoruba_talking_dialogue: {
      name: '🥁 Yoruba Talking Dialogue',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        11: [{ drum: 0, sound: 'open' }],
        14: [{ drum: 0, sound: 'slap' }]
      }
    },
    dun_dun_royal: {
      name: '🥁 Dun-dun Royal Entrance',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'slap' }]
      }
    },
    talking_drum_echo: {
      name: '🥁 Forest Whispering Echoes',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'heeltoe' }],
        6: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'heeltoe' }],
        14: [{ drum: 0, sound: 'slap' }]
      }
    },
    tama_playful_bounce: {
      name: '🥁 Playful Tama Bounce',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'open' }],
        3: [{ drum: 0, sound: 'slap' }],
        6: [{ drum: 0, sound: 'heeltoe' }],
        9: [{ drum: 0, sound: 'muffled' }]
      }
    },
    talking_drum_call: {
      name: '🥁 Ancestral Village Call',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'bass' }],
        8: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'slap' }],
        14: [{ drum: 0, sound: 'slap' }]
      }
    }
  },
  cuica: {
    cuica_samba: {
      name: '🥁 Cuíca Samba Accent',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'slap' }],
        6: [{ drum: 0, sound: 'heeltoe' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'slap' }],
        14: [{ drum: 0, sound: 'open' }]
      }
    },
    cuica_samba_solo: {
      name: '🥁 Samba de Enredo Solo',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'open' }],
        2: [{ drum: 0, sound: 'slap' }],
        4: [{ drum: 0, sound: 'heeltoe' }],
        6: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'open' }],
        10: [{ drum: 0, sound: 'slap' }],
        12: [{ drum: 0, sound: 'heeltoe' }],
        13: [{ drum: 0, sound: 'slap' }],
        14: [{ drum: 0, sound: 'open' }]
      }
    },
    bossa_nova_whisper: {
      name: '🥁 Bossa Nova Whisper',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'heeltoe' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'heeltoe' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    },
    pagode_cuica: {
      name: '🥁 Pagode Backyard Session',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'open' }],
        2: [{ drum: 0, sound: 'slap' }],
        4: [{ drum: 0, sound: 'heeltoe' }],
        6: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'open' }],
        10: [{ drum: 0, sound: 'slap' }],
        12: [{ drum: 0, sound: 'heeltoe' }],
        14: [{ drum: 0, sound: 'slap' }]
      }
    },
    samba_reggae_cuica: {
      name: '🥁 Samba Reggae Bounce',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'slap' }],
        6: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'heeltoe' }],
        12: [{ drum: 0, sound: 'slap' }],
        14: [{ drum: 0, sound: 'open' }]
      }
    },
    cuica_carnival_frenzy: {
      name: '🥁 Rio Carnival High Frenzy',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'open' }],
        2: [{ drum: 0, sound: 'slap' }],
        4: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'heeltoe' }],
        8: [{ drum: 0, sound: 'open' }],
        10: [{ drum: 0, sound: 'slap' }],
        12: [{ drum: 0, sound: 'open' }],
        14: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    cuica_bossa_sunset: {
      name: '🥁 Bossa Nova Sunset Squeak',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'heeltoe' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'heeltoe' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    },
    cuica_samba_funk: {
      name: '🥁 Samba Funk Cross-Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'open' }],
        3: [{ drum: 0, sound: 'slap' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'heeltoe' }],
        11: [{ drum: 0, sound: 'slap' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    },
    cuica_street_parade: {
      name: '🥁 Street Murga Squeaker',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'slap' }],
        12: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    cuica_tropical_breeze: {
      name: '🥁 Tropical Breeze Whisper',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'heeltoe' }],
        2: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'heeltoe' }],
        10: [{ drum: 0, sound: 'open' }],
        14: [{ drum: 0, sound: 'slap' }]
      }
    }
  },
  doira: {
    doira_folk: {
      name: '🥁 Doira Folk Rit',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'open' }],
        2: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'slap' }],
        6: [{ drum: 0, sound: 'muffled' }],
        8: [{ drum: 0, sound: 'open' }],
        10: [{ drum: 0, sound: 'heeltoe' }],
        12: [{ drum: 0, sound: 'slap' }],
        14: [{ drum: 0, sound: 'muffled' }]
      }
    },
    lazgi_dance: {
      name: '🥁 Ecstatic Lazgi Dance',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'slap' }],
        6: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'slap' }],
        13: [{ drum: 0, sound: 'heeltoe' }],
        14: [{ drum: 0, sound: 'open' }]
      }
    },
    sufi_meditation: {
      name: '🥁 Sufi Meditative Roll',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'muffled' }],
        4: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'bass' }],
        9: [{ drum: 0, sound: 'muffled' }],
        10: [{ drum: 0, sound: 'open' }]
      }
    },
    shalafo_doira: {
      name: '🥁 Shalafo Festive Dance',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'slap' }],
        6: [{ drum: 0, sound: 'muffled' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'slap' }],
        14: [{ drum: 0, sound: 'open' }]
      }
    },
    yalla_rhythm: {
      name: '🥁 Yalla Folk Syncopation',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'slap' }],
        6: [{ drum: 0, sound: 'bass' }],
        9: [{ drum: 0, sound: 'open' }],
        10: [{ drum: 0, sound: 'muffled' }]
      }
    },
    doira_shashmaqam: {
      name: '🥁 Shashmaqam Classical Cycle',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'slap' }]
      }
    },
    central_asian_wedding: {
      name: '🥁 Traditional Wedding Procession',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'slap' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    },
    doira_rapid_wheel: {
      name: '🥁 Rapid Wheel Solo Tap',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'open' }],
        14: [{ drum: 0, sound: 'slap' }]
      }
    },
    doira_silk_road: {
      name: '🥁 Caravan Along Silk Road',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    doira_desert_wind: {
      name: '🥁 Mystical Desert Wind',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        11: [{ drum: 0, sound: 'muffled' }]
      }
    }
  },
  uchiwadaiko: {
    uchiwadaiko_kabuki: {
      name: '🥁 Kabuki Dramatic Beat',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'slap' }],
        6: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'muffled' }],
        12: [{ drum: 0, sound: 'slap' }],
        14: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    nichiren_chant: {
      name: '🥁 Daimoku Temple Chant',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'bass' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'bass' }]
      }
    },
    matsuri_procession: {
      name: '🥁 Shinto Procession March',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        11: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'heeltoe' }],
        14: [{ drum: 0, sound: 'slap' }]
      }
    },
    sumo_yobidashi: {
      name: '🥁 Sumo Ring Entering March',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'open' }],
        14: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    kabuki_wind: {
      name: '🥁 Kabuki Wind & Wave Rumble',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'heeltoe' }],
        6: [{ drum: 0, sound: 'bass' }],
        8: [{ drum: 0, sound: 'open' }],
        10: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    nichiren_temple_rapid: {
      name: '🥁 Rapid Daimoku Drumming',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'bass' }],
        6: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'bass' }],
        14: [{ drum: 0, sound: 'slap' }]
      }
    },
    kabuki_tsunami: {
      name: '🥁 Dramatic Kabuki Wave Rumble',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'bass' }],
        8: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    uchiwadaiko_matsuri: {
      name: '🥁 Street Shrine Matsuri',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'slap' }],
        9: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    zen_meditation_daiko: {
      name: '🥁 Zen Meditation Single Tap',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }]
      }
    },
    ancient_shinto_dance: {
      name: '🥁 Ancient Shinto Kagura Dance',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'slap' }],
        12: [{ drum: 0, sound: 'heeltoe' }]
      }
    }
  },
  oceandrum: {
    oceandrum_meditation: {
      name: '🥁 Ocean Wave Meditation',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'muffled' }],
        12: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    gentle_shoreline: {
      name: '🥁 Gentle Coast Tide',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        6: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    tempest_storm: {
      name: '🥁 Stormy Tempest Crash',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'muffled' }],
        6: [{ drum: 0, sound: 'heeltoe' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'muffled' }],
        14: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    deep_sea_swell: {
      name: '🥁 Deep Sea Abyssal Swell',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        8: [{ drum: 0, sound: 'open' }]
      }
    },
    coral_reef_splash: {
      name: '🥁 Coral Reef Tidal Splash',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'heeltoe' }],
        9: [{ drum: 0, sound: 'muffled' }]
      }
    },
    hurricane_gale: {
      name: '🥁 Hurricane Gale Surf',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    },
    morning_mist_waves: {
      name: '🥁 Gentle Morning Mist Waves',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        8: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    shipwreck_tempest: {
      name: '🥁 Shipwreck Stormy Surge',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'muffled' }],
        12: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    whale_songs_tide: {
      name: '🥁 Whale Songs and Rising Tide',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        6: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'muffled' }]
      }
    },
    beach_pebble_wash: {
      name: '🥁 Whispering Beach Pebbles',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'heeltoe' }],
        9: [{ drum: 0, sound: 'muffled' }]
      }
    }
  },
  janggu: {
    janggu_samulnori: {
      name: '🥁 Samulnori Folk Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'heeltoe' }],
        3: [{ drum: 1, sound: 'open' }],
        4: [{ drum: 0, sound: 'bass' }],
        6: [{ drum: 1, sound: 'slap' }],
        8: [{ drum: 0, sound: 'heeltoe' }],
        11: [{ drum: 1, sound: 'open' }],
        12: [{ drum: 0, sound: 'bass' }],
        14: [{ drum: 1, sound: 'slap' }]
      }
    },
    hwimori_fast: {
      name: '🥁 Hwimori (Lightning Dance)',
      stepCount: 16,
      steps: {
        0: [
          { drum: 0, sound: 'bass' },
          { drum: 1, sound: 'open' }
        ],
        4: [{ drum: 1, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 1, sound: 'open' }],
        14: [{ drum: 1, sound: 'slap' }]
      }
    },
    gutgeori_swing: {
      name: '🥁 Gutgeori (Elegant Swing)',
      stepCount: 12,
      steps: {
        0: [
          { drum: 0, sound: 'bass' },
          { drum: 1, sound: 'open' }
        ],
        3: [{ drum: 1, sound: 'open' }],
        4: [{ drum: 0, sound: 'heeltoe' }],
        6: [{ drum: 1, sound: 'slap' }],
        9: [{ drum: 1, sound: 'open' }],
        10: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    jajinmori_janggu: {
      name: '🥁 Jajinmori (12/8 High Speed)',
      stepCount: 12,
      steps: {
        0: [
          { drum: 0, sound: 'bass' },
          { drum: 1, sound: 'open' }
        ],
        3: [{ drum: 1, sound: 'open' }],
        4: [{ drum: 1, sound: 'slap' }],
        6: [{ drum: 0, sound: 'bass' }],
        9: [{ drum: 1, sound: 'slap' }],
        10: [{ drum: 1, sound: 'open' }]
      }
    },
    semachi_janggu: {
      name: '🥁 Semachi Folk Song March',
      stepCount: 12,
      steps: {
        0: [
          { drum: 0, sound: 'bass' },
          { drum: 1, sound: 'open' }
        ],
        3: [{ drum: 1, sound: 'open' }],
        6: [{ drum: 1, sound: 'slap' }],
        9: [{ drum: 1, sound: 'open' }]
      }
    },
    hwi_mori: {
      name: '🥁 Hwimori Fast Run',
      stepCount: 16,
      steps: {
        0: [
          { drum: 0, sound: 'bass' },
          { drum: 1, sound: 'open' }
        ],
        4: [{ drum: 1, sound: 'open' }],
        8: [{ drum: 1, sound: 'slap' }],
        12: [{ drum: 1, sound: 'open' }]
      }
    },
    janggu_pansori: {
      name: '🥁 Pansori Storyteller Accomp',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 1, sound: 'open' }],
        8: [{ drum: 1, sound: 'slap' }],
        12: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    janggu_salpuri: {
      name: '🥁 Salpuri Shamanic Soul Cleanse',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 1, sound: 'open' }],
        8: [{ drum: 1, sound: 'slap' }]
      }
    },
    janggu_seoljanggu: {
      name: '🥁 Seoljanggu Virtuoso Solo',
      stepCount: 16,
      steps: {
        0: [
          { drum: 0, sound: 'bass' },
          { drum: 1, sound: 'open' }
        ],
        2: [{ drum: 1, sound: 'slap' }],
        4: [{ drum: 1, sound: 'open' }],
        6: [{ drum: 0, sound: 'heeltoe' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 1, sound: 'open' }],
        12: [{ drum: 1, sound: 'slap' }],
        14: [{ drum: 1, sound: 'open' }]
      }
    },
    janggu_nongak: {
      name: '🥁 Nongak Harvest Farm Dance',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 1, sound: 'open' }],
        6: [{ drum: 1, sound: 'slap' }],
        9: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    janggu_fast_danmori: {
      name: '🥁 Danmori Super Fast 4/4',
      stepCount: 16,
      steps: {
        0: [
          { drum: 0, sound: 'bass' },
          { drum: 1, sound: 'open' }
        ],
        2: [{ drum: 1, sound: 'open' }],
        4: [{ drum: 1, sound: 'slap' }],
        6: [{ drum: 0, sound: 'heeltoe' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 1, sound: 'open' }],
        12: [{ drum: 1, sound: 'slap' }],
        14: [{ drum: 0, sound: 'heeltoe' }]
      }
    }
  },
  zabumba: {
    zabumba_baiao: {
      name: '🥁 Zabumba Baião Forró',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'slap' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        11: [{ drum: 0, sound: 'slap' }],
        12: [{ drum: 0, sound: 'open' }],
        14: [{ drum: 0, sound: 'slap' }]
      }
    },
    xaxado_nordeste: {
      name: '🥁 Xaxado Northeast Beat',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'slap' }],
        14: [{ drum: 0, sound: 'open' }]
      }
    },
    arrasta_pe: {
      name: '🥁 Arrasta-pé Polka March',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'slap' }],
        4: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'bass' }],
        8: [{ drum: 0, sound: 'slap' }],
        10: [{ drum: 0, sound: 'open' }]
      }
    },
    forro_galope: {
      name: '🥁 Galloping Forró Speed',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'slap' }],
        4: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'slap' }],
        12: [{ drum: 0, sound: 'open' }],
        14: [{ drum: 0, sound: 'slap' }]
      }
    },
    coco_de_roda: {
      name: '🥁 Coco de Roda Coastal Clap',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'slap' }],
        4: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'bass' }],
        9: [{ drum: 0, sound: 'slap' }],
        10: [{ drum: 0, sound: 'open' }]
      }
    },
    zabumba_samba_reggae: {
      name: '🥁 Zabumba Samba Reggae',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'slap' }]
      }
    },
    zabumba_ijexa: {
      name: '🥁 Sacred Ijexá Afro-Brazilian',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    },
    zabumba_maracatu: {
      name: '🥁 Heavy Maracatu Crown March',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'bass' }],
        6: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    },
    zabumba_frevo: {
      name: '🥁 Frevo Carnival Quickstep',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'slap' }],
        4: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'slap' }],
        12: [{ drum: 0, sound: 'open' }],
        14: [{ drum: 0, sound: 'slap' }]
      }
    },
    zabumba_forro_slow: {
      name: '🥁 Forró Romantic Xote',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'slap' }]
      }
    }
  },
  mridangam: {
    mridangam_tala: {
      name: '🥁 Carnatic Adi Tala',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 1, sound: 'open' }],
        4: [{ drum: 1, sound: 'slap' }],
        6: [{ drum: 1, sound: 'muffled' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 1, sound: 'heeltoe' }],
        12: [{ drum: 1, sound: 'slap' }],
        14: [{ drum: 1, sound: 'open' }]
      }
    },
    mridangam_mohra: {
      name: '🥁 Mohra (Climax Roll)',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 1, sound: 'open' }],
        4: [{ drum: 1, sound: 'slap' }],
        5: [{ drum: 1, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 1, sound: 'open' }],
        12: [{ drum: 1, sound: 'slap' }],
        13: [{ drum: 1, sound: 'slap' }],
        14: [{ drum: 1, sound: 'open' }]
      }
    },
    carnatic_rupaka: {
      name: '🥁 Rupaka Tala (6 Beats)',
      stepCount: 6,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 1, sound: 'open' }],
        4: [{ drum: 1, sound: 'slap' }]
      }
    },
    misra_chapu: {
      name: '🥁 Misra Chapu (7-Beat Tala)',
      stepCount: 7,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 1, sound: 'open' }],
        4: [{ drum: 1, sound: 'slap' }],
        5: [{ drum: 1, sound: 'open' }],
        6: [{ drum: 1, sound: 'slap' }]
      }
    },
    khanda_chapu: {
      name: '🥁 Khanda Chapu (5-Beat Tala)',
      stepCount: 5,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 1, sound: 'open' }],
        4: [{ drum: 1, sound: 'slap' }]
      }
    },
    adi_tala_tisra: {
      name: '🥁 Adi Tala Tisra Gati',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 1, sound: 'open' }],
        6: [{ drum: 1, sound: 'slap' }],
        9: [{ drum: 1, sound: 'muffled' }]
      }
    },
    mridangam_korvai: {
      name: '🥁 Korvai Mathematical Ending',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 1, sound: 'open' }],
        4: [{ drum: 1, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 1, sound: 'open' }],
        12: [{ drum: 1, sound: 'slap' }],
        14: [{ drum: 1, sound: 'slap' }]
      }
    },
    mridangam_morra_fast: {
      name: '🥁 Fast Mohra Ending Roll',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 1, sound: 'open' }],
        4: [{ drum: 1, sound: 'open' }],
        6: [{ drum: 1, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 1, sound: 'open' }],
        12: [{ drum: 1, sound: 'open' }],
        14: [{ drum: 1, sound: 'slap' }]
      }
    },
    mridangam_rupaka_fast: {
      name: '🥁 Rapid Rupaka Tala Variation',
      stepCount: 6,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        1: [{ drum: 1, sound: 'open' }],
        2: [{ drum: 1, sound: 'slap' }],
        3: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 1, sound: 'open' }],
        5: [{ drum: 1, sound: 'slap' }]
      }
    },
    mridangam_misra_chapu_slow: {
      name: '🥁 Misra Chapu Classic Vilambit',
      stepCount: 14,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 1, sound: 'open' }],
        8: [{ drum: 1, sound: 'slap' }],
        10: [{ drum: 1, sound: 'open' }],
        12: [{ drum: 1, sound: 'slap' }]
      }
    }
  },
  udu: {
    clay_groove: {
      name: '🏺 Clay Vessel Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'muffled' }],
        4: [{ drum: 0, sound: 'slap' }],
        6: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'muffled' }],
        12: [{ drum: 0, sound: 'slap' }],
        14: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    tribal_essence: {
      name: '🏺 Tribal Essence',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'slap' }],
        7: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        11: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'slap' }],
        15: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    ceramic_echo: {
      name: '🏺 Ceramic Echoes',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'muffled' }],
        4: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'bass' }],
        8: [{ drum: 0, sound: 'muffled' }],
        10: [{ drum: 0, sound: 'slap' }]
      }
    },
    earthy_pulse: {
      name: '🏺 Earthy Pulse',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'open' }],
        14: [{ drum: 0, sound: 'slap' }]
      }
    },
    pot_dance: {
      name: '🏺 African Pot Dance',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'slap' }],
        6: [{ drum: 0, sound: 'open' }],
        9: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    clay_whisper: {
      name: '🏺 Clay Whisper Meditation',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'muffled' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    },
    resonant_pot_roll: {
      name: '🏺 Resonant Clay Pot Roll',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'slap' }],
        6: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'slap' }],
        14: [{ drum: 0, sound: 'open' }]
      }
    },
    mud_dwellers: {
      name: '🏺 Mud Dwellers Ritual',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'open' }]
      }
    },
    water_drop_udu: {
      name: '🏺 Dripping Water Clay Pot',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'heeltoe' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'open' }],
        14: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    ancestral_chamber: {
      name: '🏺 Echoing Ancestral Chamber',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'muffled' }],
        12: [{ drum: 0, sound: 'slap' }]
      }
    }
  },
  thunderdrum: {
    storm_swell: {
      name: '⚡ Storm Swell',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'slap' }],
        12: [{ drum: 0, sound: 'muffled' }]
      }
    },
    lightning_strike: {
      name: '⚡ Lightning Strike',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'slap' }],
        4: [{ drum: 0, sound: 'bass' }],
        8: [{ drum: 0, sound: 'slap' }],
        12: [{ drum: 0, sound: 'bass' }],
        14: [{ drum: 0, sound: 'open' }]
      }
    },
    rolling_thunder: {
      name: '⚡ Rolling Thunder',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'bass' }],
        8: [{ drum: 0, sound: 'muffled' }],
        10: [{ drum: 0, sound: 'open' }]
      }
    },
    electric_tempest: {
      name: '⚡ Electric Tempest',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'slap' }],
        6: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        11: [{ drum: 0, sound: 'slap' }],
        12: [{ drum: 0, sound: 'heeltoe' }],
        14: [{ drum: 0, sound: 'muffled' }]
      }
    },
    rain_shaman: {
      name: '⚡ Rain Shaman Ritual',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'heeltoe' }],
        6: [{ drum: 0, sound: 'open' }],
        9: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    tempest_shockwave: {
      name: '⚡ Tempest Shockwave',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'slap' }]
      }
    },
    gale_force_winds: {
      name: '⚡ Gale Force Winds',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'muffled' }],
        12: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    lightning_reverberation: {
      name: '⚡ Lightning Reverberation',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'slap' }],
        2: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'heeltoe' }],
        8: [{ drum: 0, sound: 'slap' }],
        10: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    shamanic_storm_summon: {
      name: '⚡ Shamanic Storm Summon',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'slap' }]
      }
    },
    subterranean_rumble: {
      name: '⚡ Subterranean Earthquake Rumble',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'bass' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    }
  },
  waterdrums: {
    liquid_flow: {
      name: '🌊 Liquid Flow',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        11: [{ drum: 0, sound: 'muffled' }],
        14: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    ripple_effect: {
      name: '🌊 Ripple Effect',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'heeltoe' }],
        6: [{ drum: 0, sound: 'open' }],
        9: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    geyser_burst: {
      name: '🌊 Geyser Burst',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'slap' }],
        14: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    tidal_wave: {
      name: '🌊 Tidal Wave Crash',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        11: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'muffled' }],
        14: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    droplet_rain: {
      name: '🌊 Droplet Rain Patters',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'heeltoe' }],
        3: [{ drum: 0, sound: 'heeltoe' }],
        6: [{ drum: 0, sound: 'heeltoe' }],
        9: [{ drum: 0, sound: 'open' }]
      }
    },
    deep_lake_pulse: {
      name: '🌊 Deep Lake Abyssal Pulse',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    },
    water_splash_sync: {
      name: '🌊 Synchronized Pool Splash',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        11: [{ drum: 0, sound: 'open' }],
        14: [{ drum: 0, sound: 'slap' }]
      }
    },
    whirlpool_spin: {
      name: '🌊 Spinning Whirlpool Vortex',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'heeltoe' }],
        8: [{ drum: 0, sound: 'open' }]
      }
    },
    misty_waterfall: {
      name: '🌊 Misty Highland Waterfall',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'muffled' }],
        12: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    ocean_waves_rhythm: {
      name: '🌊 Ocean Wave Crash Symphony',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        6: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'slap' }]
      }
    }
  },
  vibraslap: {
    rattle_roll: {
      name: '🪵 Wooden Rattle Roll',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'slap' }],
        10: [{ drum: 0, sound: 'muffled' }]
      }
    },
    chatter_echo: {
      name: '🪵 Chatter Echoes',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'slap' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'slap' }],
        12: [{ drum: 0, sound: 'muffled' }]
      }
    },
    rhythm_shake: {
      name: '🪵 Rhythm Shake Accent',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'heeltoe' }],
        6: [{ drum: 0, sound: 'open' }],
        9: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    slapback_groove: {
      name: '🪵 Slapback Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'slap' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'slap' }],
        12: [{ drum: 0, sound: 'muffled' }]
      }
    },
    vintage_tremolo: {
      name: '🪵 Vintage Tremolo',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'heeltoe' }],
        8: [{ drum: 0, sound: 'open' }]
      }
    },
    vibraslap_echo_beat: {
      name: '🪵 Echoing Slapback Beat',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'slap' }]
      }
    },
    rattle_shaman: {
      name: '🪵 Shamanic Chatter Shake',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'slap' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'muffled' }],
        12: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    wooden_percussion_clack: {
      name: '🪵 Wooden Hollow Clack',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'slap' }],
        2: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'heeltoe' }],
        8: [{ drum: 0, sound: 'slap' }],
        10: [{ drum: 0, sound: 'open' }],
        14: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    tremolo_burst: {
      name: '🪵 Dramatic Tremolo Burst',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'open' }],
        3: [{ drum: 0, sound: 'slap' }],
        6: [{ drum: 0, sound: 'heeltoe' }],
        9: [{ drum: 0, sound: 'muffled' }]
      }
    },
    retro_soundtrack_clack: {
      name: '🪵 Retro Movie Clack Accent',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'muffled' }],
        12: [{ drum: 0, sound: 'slap' }]
      }
    }
  },
  flexatone: {
    boing_boing: {
      name: '〽️ Boing Boing Bend',
      stepCount: 8,
      steps: {
        0: [{ drum: 0, sound: 'open' }],
        2: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'slap' }],
        6: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    ufo_landing: {
      name: '👽 UFO Landing Slide',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'bass' }],
        8: [{ drum: 0, sound: 'slap' }],
        12: [{ drum: 0, sound: 'heeltoe' }],
        14: [{ drum: 0, sound: 'open' }]
      }
    },
    sawtooth_wave: {
      name: '📈 Sawtooth Bend',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'open' }],
        3: [{ drum: 0, sound: 'bass' }],
        6: [{ drum: 0, sound: 'open' }],
        9: [{ drum: 0, sound: 'bass' }]
      }
    },
    whimsical_bounce: {
      name: '🎈 Whimsical Bounce',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'slap' }],
        6: [{ drum: 0, sound: 'heeltoe' }],
        8: [{ drum: 0, sound: 'open' }],
        11: [{ drum: 0, sound: 'slap' }],
        12: [{ drum: 0, sound: 'muffled' }]
      }
    },
    spectral_slide: {
      name: '🌌 Spectral Slide',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'heeltoe' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }]
      }
    },
    cartoon_slip: {
      name: '〽️ Cartoon Banana Slip',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    },
    ghostly_wail: {
      name: '👽 Ghostly Flexatone Wail',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'heeltoe' }],
        8: [{ drum: 0, sound: 'muffled' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    },
    siren_flex: {
      name: '📈 Rising Siren Flex',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'open' }],
        3: [{ drum: 0, sound: 'slap' }],
        6: [{ drum: 0, sound: 'heeltoe' }],
        9: [{ drum: 0, sound: 'open' }]
      }
    },
    spring_rebound: {
      name: '🎈 Playful Spring Rebound',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'heeltoe' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    },
    flex_groove_shuffle: {
      name: '📈 Shuffling Flex Metal Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'open' }],
        14: [{ drum: 0, sound: 'slap' }]
      }
    }
  },
  waterphone: {
    eerie_echos: {
      name: '🛸 Eerie Echoes',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'slap' }],
        12: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    abyssal_call: {
      name: '🐋 Abyssal Call',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'heeltoe' }],
        8: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'slap' }]
      }
    },
    metallic_shimmer: {
      name: '✨ Metallic Shimmer',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'open' }],
        3: [{ drum: 0, sound: 'slap' }],
        6: [{ drum: 0, sound: 'muffled' }],
        9: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    spectral_chimes: {
      name: '👻 Spectral Chimes',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'open' }],
        3: [{ drum: 0, sound: 'heeltoe' }],
        6: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'open' }],
        11: [{ drum: 0, sound: 'heeltoe' }],
        12: [{ drum: 0, sound: 'muffled' }],
        14: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    whale_lullaby: {
      name: '🎵 Whale Lullaby',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'heeltoe' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }]
      }
    },
    subzero_resonance: {
      name: '🛸 Subzero Metal Resonance',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'slap' }]
      }
    },
    haunted_shipwreck: {
      name: '👻 Haunted Creaking Hull',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'heeltoe' }],
        8: [{ drum: 0, sound: 'muffled' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    },
    nebula_drifter: {
      name: '🌌 Deep Space Nebula Drifter',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'open' }],
        3: [{ drum: 0, sound: 'slap' }],
        6: [{ drum: 0, sound: 'heeltoe' }],
        9: [{ drum: 0, sound: 'open' }]
      }
    },
    deep_ocean_tremor: {
      name: '🐋 Sub-oceanic Seismic Tremor',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'heeltoe' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    },
    glass_harmonicon: {
      name: '✨ Glass Harmonicon Echoes',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'open' }],
        14: [{ drum: 0, sound: 'slap' }]
      }
    }
  },
  handpan: {
    meditative_journey: {
      name: '🧘 Meditative Journey',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 1, sound: 'open' }],
        4: [{ drum: 1, sound: 'muffled' }],
        6: [{ drum: 1, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 1, sound: 'slap' }],
        12: [{ drum: 1, sound: 'muffled' }],
        14: [{ drum: 1, sound: 'heeltoe' }]
      }
    },
    cosmic_vibration: {
      name: '🌌 Cosmic Vibration',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 1, sound: 'open' }],
        8: [{ drum: 1, sound: 'slap' }],
        12: [{ drum: 1, sound: 'open' }],
        14: [{ drum: 1, sound: 'heeltoe' }]
      }
    },
    resonant_harmony: {
      name: '🎶 Resonant Harmony',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 1, sound: 'open' }],
        4: [{ drum: 1, sound: 'muffled' }],
        6: [{ drum: 0, sound: 'bass' }],
        8: [{ drum: 1, sound: 'open' }],
        10: [{ drum: 1, sound: 'slap' }]
      }
    },
    canyon_sunset: {
      name: '🌇 Canyon Sunset',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 1, sound: 'open' }],
        6: [{ drum: 1, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        11: [{ drum: 1, sound: 'open' }],
        12: [{ drum: 1, sound: 'muffled' }],
        14: [{ drum: 1, sound: 'heeltoe' }]
      }
    },
    wind_traveler: {
      name: '🍃 Wind Traveler',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 1, sound: 'open' }],
        8: [{ drum: 1, sound: 'heeltoe' }]
      }
    },
    handpan_celestial: {
      name: '🧘 Celestial Handpan Drift',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 1, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 1, sound: 'slap' }]
      }
    },
    handpan_equinox: {
      name: '🧘 Autumn Equinox Peace',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 1, sound: 'open' }],
        8: [{ drum: 1, sound: 'muffled' }],
        12: [{ drum: 1, sound: 'heeltoe' }]
      }
    },
    handpan_echoes_peak: {
      name: '🧘 Mountain Echoes Peak',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 1, sound: 'open' }],
        6: [{ drum: 1, sound: 'slap' }],
        9: [{ drum: 1, sound: 'muffled' }]
      }
    },
    handpan_forest_dawn: {
      name: '🧘 Morning Forest Awakening',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 1, sound: 'open' }],
        8: [{ drum: 1, sound: 'heeltoe' }],
        12: [{ drum: 1, sound: 'open' }]
      }
    },
    handpan_lunar_cycle: {
      name: '🧘 Lunar Cycle Meditation',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 1, sound: 'open' }],
        6: [{ drum: 1, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 1, sound: 'open' }],
        14: [{ drum: 1, sound: 'slap' }]
      }
    }
  },
  steelpan: {
    calypso_pulse: {
      name: '🌴 Calypso Steelpan Pulse',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'slap' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    },
    steelpan_soca: {
      name: '🌴 Soca Island Frenzy',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'slap' }],
        4: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'heeltoe' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'slap' }],
        14: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    island_breeze: {
      name: '🌴 Island Breeze Melodics',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'open' }],
        3: [{ drum: 0, sound: 'heeltoe' }],
        6: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'slap' }],
        11: [{ drum: 0, sound: 'muffled' }],
        14: [{ drum: 0, sound: 'open' }]
      }
    },
    lead_pan_groove: {
      name: '🌴 Lead Pan Solo Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'muffled' }],
        4: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'heeltoe' }],
        8: [{ drum: 0, sound: 'slap' }],
        10: [{ drum: 0, sound: 'muffled' }],
        12: [{ drum: 0, sound: 'open' }],
        14: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    steelpan_carnival: {
      name: '🌴 Carnival Street Parade',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        1: [{ drum: 0, sound: 'muffled' }],
        3: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'slap' }],
        6: [{ drum: 0, sound: 'heeltoe' }],
        8: [{ drum: 0, sound: 'bass' }],
        9: [{ drum: 0, sound: 'muffled' }],
        11: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'slap' }],
        14: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    caribbean_rhythm: {
      name: '🌴 Caribbean Sunset Bounce',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        11: [{ drum: 0, sound: 'slap' }],
        14: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    pan_harmony: {
      name: '🌴 Harbor Steel Harmony',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'open' }],
        2: [{ drum: 0, sound: 'muffled' }],
        4: [{ drum: 0, sound: 'heeltoe' }],
        6: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'slap' }],
        10: [{ drum: 0, sound: 'muffled' }],
        12: [{ drum: 0, sound: 'heeltoe' }],
        14: [{ drum: 0, sound: 'open' }]
      }
    },
    harbor_sunset: {
      name: '🌴 Sandy Beach Sunset Calmer',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'muffled' }],
        8: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'muffled' }]
      }
    },
    steelpan_bounce: {
      name: '🌴 High Bounce Calypso',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'slap' }],
        6: [{ drum: 0, sound: 'open' }],
        9: [{ drum: 0, sound: 'heeltoe' }],
        12: [{ drum: 0, sound: 'slap' }],
        15: [{ drum: 0, sound: 'muffled' }]
      }
    },
    tropical_party: {
      name: '🌴 Tropical Steel Pan Fiesta',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'slap' }],
        6: [{ drum: 0, sound: 'heeltoe' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'slap' }],
        14: [{ drum: 0, sound: 'open' }]
      }
    }
  },
  ghatam: {
    pot_resonance: {
      name: '🏺 Ghatam Resonant Vessel',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'slap' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    },
    ghatam_groove: {
      name: '🏺 Traditional Ghatam Tala',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'muffled' }],
        4: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'muffled' }],
        12: [{ drum: 0, sound: 'open' }],
        14: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    clay_finger_dance: {
      name: '🏺 Clay Finger Dance',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'open' }],
        3: [{ drum: 0, sound: 'muffled' }],
        6: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        11: [{ drum: 0, sound: 'heeltoe' }],
        14: [{ drum: 0, sound: 'open' }]
      }
    },
    south_indian_tala: {
      name: '🏺 Carnatic Clay Pot Adi',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'slap' }],
        4: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'muffled' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'slap' }],
        12: [{ drum: 0, sound: 'open' }],
        14: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    ghatam_frenzy: {
      name: '🏺 Clay Neck Slide Frenzy',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        1: [{ drum: 0, sound: 'muffled' }],
        3: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'slap' }],
        6: [{ drum: 0, sound: 'heeltoe' }],
        8: [{ drum: 0, sound: 'bass' }],
        9: [{ drum: 0, sound: 'muffled' }],
        11: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'slap' }],
        14: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    pot_whisper: {
      name: '🏺 Echoes of the Earth',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'muffled' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'muffled' }]
      }
    },
    clay_vessel_tempo: {
      name: '🏺 Clay Vessel Poly-Tempo',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'slap' }],
        6: [{ drum: 0, sound: 'muffled' }],
        8: [{ drum: 0, sound: 'heeltoe' }],
        10: [{ drum: 0, sound: 'open' }]
      }
    },
    ghatam_shala: {
      name: '🏺 Shala Temple Procession',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'heeltoe' }],
        8: [{ drum: 0, sound: 'slap' }],
        11: [{ drum: 0, sound: 'muffled' }],
        14: [{ drum: 0, sound: 'open' }]
      }
    },
    ghatam_meditation: {
      name: '🏺 Sacred Clay Vessel Tap',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        8: [{ drum: 0, sound: 'open' }]
      }
    },
    dynamic_pot_slide: {
      name: '🏺 Clay Pot Dynamic Slide',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'heeltoe' }],
        4: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'heeltoe' }],
        12: [{ drum: 0, sound: 'open' }],
        14: [{ drum: 0, sound: 'muffled' }]
      }
    }
  },
  daf: {
    persian_mystic: {
      name: '🕌 Persian Mystic Frame Beat',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'slap' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    },
    daf_frame_beat: {
      name: '🕌 Daf Frame Classic Pulse',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'muffled' }],
        4: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'muffled' }],
        12: [{ drum: 0, sound: 'open' }],
        14: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    sufi_chant_rhythm: {
      name: '🕌 Sufi Chant Trance March',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'heeltoe' }],
        8: [{ drum: 0, sound: 'slap' }],
        11: [{ drum: 0, sound: 'muffled' }],
        14: [{ drum: 0, sound: 'open' }]
      }
    },
    desert_caravan: {
      name: '🕌 Caravan Desert Mirage',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'slap' }],
        4: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'muffled' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'slap' }],
        12: [{ drum: 0, sound: 'open' }],
        14: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    daf_shake_roll: {
      name: '🕌 Persian Ring Shake Roll',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        1: [{ drum: 0, sound: 'muffled' }],
        3: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'slap' }],
        6: [{ drum: 0, sound: 'heeltoe' }],
        8: [{ drum: 0, sound: 'bass' }],
        9: [{ drum: 0, sound: 'muffled' }],
        11: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'slap' }],
        14: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    ancient_frame_pulse: {
      name: '🕌 Ancient Frame Heartbeat',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        8: [{ drum: 0, sound: 'open' }]
      }
    },
    daf_spiritual_march: {
      name: '🕌 Spiritual Whirling March',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'slap' }],
        6: [{ drum: 0, sound: 'muffled' }],
        8: [{ drum: 0, sound: 'heeltoe' }],
        10: [{ drum: 0, sound: 'open' }]
      }
    },
    daf_fast_frenzied: {
      name: '🕌 Whirling Dervish Frenzy',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'heeltoe' }],
        8: [{ drum: 0, sound: 'slap' }],
        11: [{ drum: 0, sound: 'muffled' }],
        14: [{ drum: 0, sound: 'open' }]
      }
    },
    mystic_daf_dance: {
      name: '🕌 Mystic Oasis Dance',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'muffled' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'muffled' }]
      }
    },
    daf_meditation_heartbeat: {
      name: '🕌 Meditative Sufi Breath',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'heeltoe' }],
        4: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'heeltoe' }],
        12: [{ drum: 0, sound: 'open' }],
        14: [{ drum: 0, sound: 'muffled' }]
      }
    }
  },
  riq: {
    arabic_riq_classic: {
      name: '🔔 Arabic Riq Classic Dum-Tak',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'slap' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    },
    riq_jingle_tarantella: {
      name: '🔔 Riq Jingle Tarantella',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'muffled' }],
        4: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'muffled' }],
        12: [{ drum: 0, sound: 'open' }],
        14: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    arabic_bazaar_tempo: {
      name: '🔔 Arabic Bazaar Tempo Pulse',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'open' }],
        3: [{ drum: 0, sound: 'muffled' }],
        6: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        11: [{ drum: 0, sound: 'heeltoe' }],
        14: [{ drum: 0, sound: 'open' }]
      }
    },
    riq_bellydance: {
      name: '🔔 Egyptian Bellydance Wahda',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'slap' }],
        4: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'muffled' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'slap' }],
        12: [{ drum: 0, sound: 'open' }],
        14: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    riq_shaking_roll: {
      name: '🔔 Shaking Brass Jingle Roll',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        1: [{ drum: 0, sound: 'muffled' }],
        3: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'slap' }],
        6: [{ drum: 0, sound: 'heeltoe' }],
        8: [{ drum: 0, sound: 'bass' }],
        9: [{ drum: 0, sound: 'muffled' }],
        11: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'slap' }],
        14: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    mystic_riq_trance: {
      name: '🔔 Mystic Jingle Heartbeat',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        8: [{ drum: 0, sound: 'open' }]
      }
    },
    cairo_street_procession: {
      name: '🔔 Cairo Street Processional',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'slap' }],
        6: [{ drum: 0, sound: 'muffled' }],
        8: [{ drum: 0, sound: 'heeltoe' }],
        10: [{ drum: 0, sound: 'open' }]
      }
    },
    riq_tik_tak: {
      name: '🔔 Rapid Tik-Tak Jingle',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'heeltoe' }],
        8: [{ drum: 0, sound: 'slap' }],
        11: [{ drum: 0, sound: 'muffled' }],
        14: [{ drum: 0, sound: 'open' }]
      }
    },
    desert_oasis_dance: {
      name: '🔔 Desert Oasis Sunset Jingle',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'muffled' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'muffled' }]
      }
    },
    riq_festival_bounce: {
      name: '🔔 Middle East Festival Bounce',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'heeltoe' }],
        4: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'heeltoe' }],
        12: [{ drum: 0, sound: 'open' }],
        14: [{ drum: 0, sound: 'muffled' }]
      }
    }
  },
  surdo: {
    brazilian_surdo_batucada: {
      name: '🥁 Surdo Batucada Basic Boom',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'slap' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    },
    surdo_boom_rhythm: {
      name: '🥁 Rio Carnival Pulse',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'muffled' }],
        4: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'muffled' }],
        12: [{ drum: 0, sound: 'open' }],
        14: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    samba_reggae_heartbeat: {
      name: '🥁 Bahia Samba Reggae Heart',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'open' }],
        3: [{ drum: 0, sound: 'muffled' }],
        6: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        11: [{ drum: 0, sound: 'heeltoe' }],
        14: [{ drum: 0, sound: 'open' }]
      }
    },
    rio_surdo_procession: {
      name: '🥁 Street Parade Heavy Bass',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'slap' }],
        4: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'muffled' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'slap' }],
        12: [{ drum: 0, sound: 'open' }],
        14: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    surdo_pagode_groove: {
      name: '🥁 Backyard Pagode Pulse',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        1: [{ drum: 0, sound: 'muffled' }],
        3: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'slap' }],
        6: [{ drum: 0, sound: 'heeltoe' }],
        8: [{ drum: 0, sound: 'bass' }],
        9: [{ drum: 0, sound: 'muffled' }],
        11: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'slap' }],
        14: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    surdo_carnival_frenzy: {
      name: '🥁 Carnival Arena Heavy Boom',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        8: [{ drum: 0, sound: 'open' }]
      }
    },
    surdo_deep_march: {
      name: '🥁 Deep Forest Marching Beats',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'slap' }],
        6: [{ drum: 0, sound: 'muffled' }],
        8: [{ drum: 0, sound: 'heeltoe' }],
        10: [{ drum: 0, sound: 'open' }]
      }
    },
    surdo_syncopated_pulse: {
      name: '🥁 Syncopated Samba Drive',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'heeltoe' }],
        8: [{ drum: 0, sound: 'slap' }],
        11: [{ drum: 0, sound: 'muffled' }],
        14: [{ drum: 0, sound: 'open' }]
      }
    },
    surdo_thunder_samba: {
      name: '🥁 Thunderous Batucada Climax',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'muffled' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'muffled' }]
      }
    },
    surdo_tropical_funk: {
      name: '🥁 Deep Tropical Samba Funk',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'heeltoe' }],
        4: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'heeltoe' }],
        12: [{ drum: 0, sound: 'open' }],
        14: [{ drum: 0, sound: 'muffled' }]
      }
    }
  },
  pandeiro: {
    pandeiro_samba_basic: {
      name: '🪘 Samba Pandeiro Basic Tap',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'slap' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    },
    pandeiro_choro_tempo: {
      name: '🪘 Classic Choro Bounce',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'muffled' }],
        4: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'muffled' }],
        12: [{ drum: 0, sound: 'open' }],
        14: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    pandeiro_pagode_roll: {
      name: '🪘 Backyard Pagode Roll',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'open' }],
        3: [{ drum: 0, sound: 'muffled' }],
        6: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        11: [{ drum: 0, sound: 'heeltoe' }],
        14: [{ drum: 0, sound: 'open' }]
      }
    },
    pandeiro_capoeira_jingle: {
      name: '🪘 Capoeira Ring Jingle',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'slap' }],
        4: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'muffled' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'slap' }],
        12: [{ drum: 0, sound: 'open' }],
        14: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    pandeiro_funky_thumb: {
      name: '🪘 Funky Brazilian Thumb Slap',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        1: [{ drum: 0, sound: 'muffled' }],
        3: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'slap' }],
        6: [{ drum: 0, sound: 'heeltoe' }],
        8: [{ drum: 0, sound: 'bass' }],
        9: [{ drum: 0, sound: 'muffled' }],
        11: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'slap' }],
        14: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    pandeiro_street_groove: {
      name: '🪘 Rio Street Platinela Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        8: [{ drum: 0, sound: 'open' }]
      }
    },
    pandeiro_fast_roll: {
      name: '🪘 Platinela Fast Rolling Jingle',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'slap' }],
        6: [{ drum: 0, sound: 'muffled' }],
        8: [{ drum: 0, sound: 'heeltoe' }],
        10: [{ drum: 0, sound: 'open' }]
      }
    },
    pandeiro_acoustic_session: {
      name: '🪘 Cozy Acoustic Choro Session',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'heeltoe' }],
        8: [{ drum: 0, sound: 'slap' }],
        11: [{ drum: 0, sound: 'muffled' }],
        14: [{ drum: 0, sound: 'open' }]
      }
    },
    pandeiro_carnival_march: {
      name: '🪘 Samba de Enredo Street March',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'muffled' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'muffled' }]
      }
    },
    pandeiro_bossa_nova: {
      name: '🪘 Smooth Copacabana Bossa',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'heeltoe' }],
        4: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'heeltoe' }],
        12: [{ drum: 0, sound: 'open' }],
        14: [{ drum: 0, sound: 'muffled' }]
      }
    }
  },
  tamborim: {
    tamborim_samba_carreteiro: {
      name: '💥 Samba Carreteiro Whip',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'slap' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    },
    tamborim_telecoteco: {
      name: '💥 Teleco-Teco Samba Accent',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'muffled' }],
        4: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'muffled' }],
        12: [{ drum: 0, sound: 'open' }],
        14: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    tamborim_rim_slap: {
      name: '💥 Sharp Teleco Rim Slap',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'open' }],
        3: [{ drum: 0, sound: 'muffled' }],
        6: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        11: [{ drum: 0, sound: 'heeltoe' }],
        14: [{ drum: 0, sound: 'open' }]
      }
    },
    tamborim_whip_frenzy: {
      name: '💥 Dynamic Drum Turn Whip',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'slap' }],
        4: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'muffled' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'slap' }],
        12: [{ drum: 0, sound: 'open' }],
        14: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    tamborim_carnival_push: {
      name: '💥 Carnival Parade Arena Push',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        1: [{ drum: 0, sound: 'muffled' }],
        3: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'slap' }],
        6: [{ drum: 0, sound: 'heeltoe' }],
        8: [{ drum: 0, sound: 'bass' }],
        9: [{ drum: 0, sound: 'muffled' }],
        11: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'slap' }],
        14: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    tamborim_fast_cross: {
      name: '💥 Rapid Samba Cross Accent',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        8: [{ drum: 0, sound: 'open' }]
      }
    },
    tamborim_synco_beat: {
      name: '💥 High Speed Syncopated Whip',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'slap' }],
        6: [{ drum: 0, sound: 'muffled' }],
        8: [{ drum: 0, sound: 'heeltoe' }],
        10: [{ drum: 0, sound: 'open' }]
      }
    },
    tamborim_samba_reggae: {
      name: '💥 Bahia Street Samba Reggae',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'heeltoe' }],
        8: [{ drum: 0, sound: 'slap' }],
        11: [{ drum: 0, sound: 'muffled' }],
        14: [{ drum: 0, sound: 'open' }]
      }
    },
    tamborim_street_parade: {
      name: '💥 Rio Carnival Street Whip',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'muffled' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'muffled' }]
      }
    },
    tamborim_funk_accent: {
      name: '💥 High Pitch Tamborim Funk',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'heeltoe' }],
        4: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'heeltoe' }],
        12: [{ drum: 0, sound: 'open' }],
        14: [{ drum: 0, sound: 'muffled' }]
      }
    }
  },
  repinique: {
    repinique_samba_intro: {
      name: '⚡ Repinique Samba Lead Call',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'slap' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    },
    repinique_call_response: {
      name: '⚡ Batucada Call & Response',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'muffled' }],
        4: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'muffled' }],
        12: [{ drum: 0, sound: 'open' }],
        14: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    repinique_frenzy_roll: {
      name: '⚡ Street Stick Click Frenzy',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'open' }],
        3: [{ drum: 0, sound: 'muffled' }],
        6: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        11: [{ drum: 0, sound: 'heeltoe' }],
        14: [{ drum: 0, sound: 'open' }]
      }
    },
    repinique_batucada_lead: {
      name: '⚡ Arena Repinique Master Call',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'slap' }],
        4: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'muffled' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'slap' }],
        12: [{ drum: 0, sound: 'open' }],
        14: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    repinique_stick_accent: {
      name: '⚡ Syncopated Stick Slap',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        1: [{ drum: 0, sound: 'muffled' }],
        3: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'slap' }],
        6: [{ drum: 0, sound: 'heeltoe' }],
        8: [{ drum: 0, sound: 'bass' }],
        9: [{ drum: 0, sound: 'muffled' }],
        11: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'slap' }],
        14: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    repinique_solo_burst: {
      name: '⚡ Carnival Arena Solo Burst',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        8: [{ drum: 0, sound: 'open' }]
      }
    },
    repinique_carnival_rush: {
      name: '⚡ High Speed Carnival Rush',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'slap' }],
        6: [{ drum: 0, sound: 'muffled' }],
        8: [{ drum: 0, sound: 'heeltoe' }],
        10: [{ drum: 0, sound: 'open' }]
      }
    },
    repinique_syncopated_whip: {
      name: '⚡ Bahia Street Reggae Repinique',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'heeltoe' }],
        8: [{ drum: 0, sound: 'slap' }],
        11: [{ drum: 0, sound: 'muffled' }],
        14: [{ drum: 0, sound: 'open' }]
      }
    },
    repinique_samba_funk: {
      name: '⚡ Rio Street Carnival Beat',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'muffled' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'muffled' }]
      }
    },
    repinique_batucada_roll: {
      name: '⚡ High Pitch Batucada Drive',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'heeltoe' }],
        4: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'heeltoe' }],
        12: [{ drum: 0, sound: 'open' }],
        14: [{ drum: 0, sound: 'muffled' }]
      }
    }
  },
  bendir: {
    bendir_moroccan_groove: {
      name: '🥁 Berber Buzz Traditional',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'slap' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    },
    bendir_buzz_tempo: {
      name: '🥁 Bendir Frame Buzz Pulse',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'muffled' }],
        4: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'muffled' }],
        12: [{ drum: 0, sound: 'open' }],
        14: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    bendir_mediterranean_waltz: {
      name: '🥁 Moroccan Desert Waltz',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'heeltoe' }],
        9: [{ drum: 0, sound: 'slap' }]
      }
    },
    bendir_berber_dance: {
      name: '🥁 North African Berber Dance',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'slap' }],
        4: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'muffled' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'slap' }],
        12: [{ drum: 0, sound: 'open' }],
        14: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    bendir_mystic_procession: {
      name: '🥁 Mystic Snare Buzz March',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        1: [{ drum: 0, sound: 'muffled' }],
        3: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'slap' }],
        6: [{ drum: 0, sound: 'heeltoe' }],
        8: [{ drum: 0, sound: 'bass' }],
        9: [{ drum: 0, sound: 'muffled' }],
        11: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'slap' }],
        14: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    bendir_trance_pulse: {
      name: '🥁 Meditative Sufi Buzz Trance',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        8: [{ drum: 0, sound: 'open' }]
      }
    },
    bendir_festival_roll: {
      name: '🥁 Moroccan Wedding Festival',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'slap' }],
        6: [{ drum: 0, sound: 'muffled' }],
        8: [{ drum: 0, sound: 'heeltoe' }],
        10: [{ drum: 0, sound: 'open' }]
      }
    },
    bendir_sufi_chant: {
      name: '🥁 Sacred Berber Sufi Chant',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'heeltoe' }],
        8: [{ drum: 0, sound: 'slap' }],
        11: [{ drum: 0, sound: 'muffled' }],
        14: [{ drum: 0, sound: 'open' }]
      }
    },
    bendir_canyon_heartbeat: {
      name: '🥁 Buzzing Canyon Heartbeat',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'muffled' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'muffled' }]
      }
    },
    bendir_evening_repose: {
      name: '🥁 Peaceful Evening Sahara Sunset',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'heeltoe' }],
        4: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'heeltoe' }],
        12: [{ drum: 0, sound: 'open' }],
        14: [{ drum: 0, sound: 'muffled' }]
      }
    }
  },
  davul: {
    davul_halay_tempo: {
      name: '🥁 Halay Folk Dance Heavy Pulse',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'slap' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    },
    davul_balkan_groove: {
      name: '🥁 Balkan Gypsy 9/8 Bounce',
      stepCount: 18,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'muffled' }],
        6: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'heeltoe' }],
        10: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'open' }],
        14: [{ drum: 0, sound: 'slap' }],
        16: [{ drum: 0, sound: 'muffled' }]
      }
    },
    davul_epic_march: {
      name: '🥁 Ottoman Epic Military March',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'muffled' }],
        6: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        11: [{ drum: 0, sound: 'heeltoe' }],
        14: [{ drum: 0, sound: 'open' }]
      }
    },
    davul_wedding_procession: {
      name: '🥁 Traditional Anatolian Wedding',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'slap' }],
        4: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'muffled' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'slap' }],
        12: [{ drum: 0, sound: 'open' }],
        14: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    davul_dum_tek_classic: {
      name: '🥁 Davul Classic Dum-Tek Accent',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        1: [{ drum: 0, sound: 'muffled' }],
        3: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'slap' }],
        6: [{ drum: 0, sound: 'heeltoe' }],
        8: [{ drum: 0, sound: 'bass' }],
        9: [{ drum: 0, sound: 'muffled' }],
        11: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'slap' }],
        14: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    davul_festival_bounce: {
      name: '🥁 Turkish Festival Arena Bounce',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        8: [{ drum: 0, sound: 'open' }]
      }
    },
    davul_sultan_dance: {
      name: '🥁 Sultan Palace Court Procession',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'slap' }],
        6: [{ drum: 0, sound: 'muffled' }],
        8: [{ drum: 0, sound: 'heeltoe' }],
        10: [{ drum: 0, sound: 'open' }]
      }
    },
    davul_shaman_frenzy: {
      name: '🥁 Shamanic Fire Circle Frenzy',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'heeltoe' }],
        8: [{ drum: 0, sound: 'slap' }],
        11: [{ drum: 0, sound: 'muffled' }],
        14: [{ drum: 0, sound: 'open' }]
      }
    },
    davul_syncopated_cane: {
      name: '🥁 Syncopated Cane Snap Drive',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'muffled' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'muffled' }]
      }
    },
    davul_ancient_pulse: {
      name: '🥁 Ancient Anatolian Heartbeat',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'heeltoe' }],
        4: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'heeltoe' }],
        12: [{ drum: 0, sound: 'open' }],
        14: [{ drum: 0, sound: 'muffled' }]
      }
    }
  },
  ashiko: {
    ashiko_yoruba_traditional: {
      name: '🥁 Yoruba Traditional Dance Pulse',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'slap' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    },
    ashiko_tribal_heartbeat: {
      name: '🥁 Ashiko Tribal Heartbeat March',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'muffled' }],
        4: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'muffled' }],
        12: [{ drum: 0, sound: 'open' }],
        14: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    ashiko_singing_open_groove: {
      name: '🥁 Singing Open Cone Rhythm',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'open' }],
        3: [{ drum: 0, sound: 'muffled' }],
        6: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        11: [{ drum: 0, sound: 'heeltoe' }],
        14: [{ drum: 0, sound: 'open' }]
      }
    },
    ashiko_highlife_beat: {
      name: '🥁 Highlife Yoruba Cone Dance',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'slap' }],
        4: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'muffled' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'slap' }],
        12: [{ drum: 0, sound: 'open' }],
        14: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    ashiko_fast_polyrhythm: {
      name: '🥁 Yoruba High-Speed Polyrhythm',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        1: [{ drum: 0, sound: 'muffled' }],
        3: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'slap' }],
        6: [{ drum: 0, sound: 'heeltoe' }],
        8: [{ drum: 0, sound: 'bass' }],
        9: [{ drum: 0, sound: 'muffled' }],
        11: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'slap' }],
        14: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    ashiko_ritual_dance: {
      name: '🥁 Sacred Forest Ritual Dance',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        8: [{ drum: 0, sound: 'open' }]
      }
    },
    ashiko_village_call: {
      name: '🥁 Ancestral Village Call Drums',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'slap' }],
        6: [{ drum: 0, sound: 'muffled' }],
        8: [{ drum: 0, sound: 'heeltoe' }],
        10: [{ drum: 0, sound: 'open' }]
      }
    },
    ashiko_syncopated_slap: {
      name: '🥁 Cone Drum Dry Sharp Slaps',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'heeltoe' }],
        8: [{ drum: 0, sound: 'slap' }],
        11: [{ drum: 0, sound: 'muffled' }],
        14: [{ drum: 0, sound: 'open' }]
      }
    },
    ashiko_ancestral_parade: {
      name: '🥁 Yoruba Royal Ancestral Parade',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'muffled' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'muffled' }]
      }
    },
    ashiko_shaman_trance: {
      name: '🥁 Spiritual Ashiko Cone Trance',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'heeltoe' }],
        4: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'heeltoe' }],
        12: [{ drum: 0, sound: 'open' }],
        14: [{ drum: 0, sound: 'muffled' }]
      }
    }
  },
  dunun: {
    dunun_dununba_basic: {
      name: '🥁 Dununba Giant Thunder Boom',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 1, sound: 'open' }],
        8: [{ drum: 2, sound: 'slap' }],
        12: [{ drum: 1, sound: 'open' }]
      }
    },
    dunun_sangban_pulse: {
      name: '🥁 Sangban Middle Voice Pulse',
      stepCount: 16,
      steps: {
        0: [{ drum: 1, sound: 'bass' }],
        2: [{ drum: 1, sound: 'muffled' }],
        4: [{ drum: 1, sound: 'open' }],
        6: [{ drum: 1, sound: 'slap' }],
        8: [{ drum: 1, sound: 'bass' }],
        10: [{ drum: 1, sound: 'muffled' }],
        12: [{ drum: 1, sound: 'open' }],
        14: [{ drum: 1, sound: 'heeltoe' }]
      }
    },
    dunun_kenkeni_tempo: {
      name: '🥁 Kenkeni High Speed Keeper',
      stepCount: 16,
      steps: {
        0: [{ drum: 2, sound: 'open' }],
        3: [{ drum: 2, sound: 'muffled' }],
        6: [{ drum: 2, sound: 'slap' }],
        8: [{ drum: 2, sound: 'bass' }],
        11: [{ drum: 2, sound: 'heeltoe' }],
        14: [{ drum: 2, sound: 'open' }]
      }
    },
    dunun_all_polyrhythm: {
      name: '🥁 Manding 3-Drum Polyrhythm',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 2, sound: 'slap' }],
        4: [{ drum: 1, sound: 'open' }],
        6: [{ drum: 1, sound: 'muffled' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 2, sound: 'slap' }],
        12: [{ drum: 1, sound: 'open' }],
        14: [{ drum: 1, sound: 'heeltoe' }]
      }
    },
    dunun_west_african_groove: {
      name: '🥁 Guinea Village Dunun Drumming',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        1: [{ drum: 1, sound: 'muffled' }],
        3: [{ drum: 1, sound: 'open' }],
        4: [{ drum: 2, sound: 'slap' }],
        6: [{ drum: 2, sound: 'heeltoe' }],
        8: [{ drum: 0, sound: 'bass' }],
        9: [{ drum: 1, sound: 'muffled' }],
        11: [{ drum: 1, sound: 'open' }],
        12: [{ drum: 2, sound: 'slap' }],
        14: [{ drum: 2, sound: 'heeltoe' }]
      }
    },
    dunun_village_harvest_dance: {
      name: '🥁 Traditional Harvest Dununba',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        8: [{ drum: 1, sound: 'open' }]
      }
    },
    dunun_royal_entrance: {
      name: '🥁 Manding Chiefs Royal March',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 1, sound: 'open' }],
        4: [{ drum: 2, sound: 'slap' }],
        6: [{ drum: 0, sound: 'muffled' }],
        8: [{ drum: 1, sound: 'heeltoe' }],
        10: [{ drum: 2, sound: 'open' }]
      }
    },
    dunun_warriors_march: {
      name: '🥁 West African Dunun Warriors',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 1, sound: 'open' }],
        6: [{ drum: 1, sound: 'heeltoe' }],
        8: [{ drum: 2, sound: 'slap' }],
        11: [{ drum: 2, sound: 'muffled' }],
        14: [{ drum: 1, sound: 'open' }]
      }
    },
    dunun_syncopated_bells: {
      name: '🥁 Syncopated Dununba Iron Bell',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 2, sound: 'muffled' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 2, sound: 'muffled' }]
      }
    },
    dunun_manding_pulse: {
      name: '🥁 Master Dunun Polyrhythmic Pulse',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 1, sound: 'heeltoe' }],
        4: [{ drum: 1, sound: 'open' }],
        6: [{ drum: 2, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 1, sound: 'heeltoe' }],
        12: [{ drum: 1, sound: 'open' }],
        14: [{ drum: 2, sound: 'muffled' }]
      }
    }
  },
  teponaztli: {
    teponaztli_aztec_ritual: {
      name: '🪵 Aztec Slit Drum Temple Chant',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'slap' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    },
    teponaztli_low_high: {
      name: '🪵 Two-Tone Mesoamerican Pulse',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'muffled' }],
        4: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'muffled' }],
        12: [{ drum: 0, sound: 'open' }],
        14: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    teponaztli_jungle_echoes: {
      name: '🪵 Mayan Forest Hollow Echoes',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'open' }],
        3: [{ drum: 0, sound: 'muffled' }],
        6: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        11: [{ drum: 0, sound: 'heeltoe' }],
        14: [{ drum: 0, sound: 'open' }]
      }
    },
    teponaztli_double_tongue: {
      name: '🪵 Aztec Warrior Battle Call',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'slap' }],
        4: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'muffled' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'slap' }],
        12: [{ drum: 0, sound: 'open' }],
        14: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    teponaztli_shamanic_pulse: {
      name: '🪵 Mesoamerican Fire Dancer',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        1: [{ drum: 0, sound: 'muffled' }],
        3: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'slap' }],
        6: [{ drum: 0, sound: 'heeltoe' }],
        8: [{ drum: 0, sound: 'bass' }],
        9: [{ drum: 0, sound: 'muffled' }],
        11: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'slap' }],
        14: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    teponaztli_hollow_wood: {
      name: '🪵 Aztec Slit Drum Hollow Wood',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        8: [{ drum: 0, sound: 'open' }]
      }
    },
    teponaztli_mesoamerican_groove: {
      name: '🪵 Rain God Tlaloc Ceremony',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'slap' }],
        6: [{ drum: 0, sound: 'muffled' }],
        8: [{ drum: 0, sound: 'heeltoe' }],
        10: [{ drum: 0, sound: 'open' }]
      }
    },
    teponaztli_sacred_temple: {
      name: '🪵 Tenochtitlan Temple Procession',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'heeltoe' }],
        8: [{ drum: 0, sound: 'slap' }],
        11: [{ drum: 0, sound: 'muffled' }],
        14: [{ drum: 0, sound: 'open' }]
      }
    },
    teponaztli_fast_marimba_style: {
      name: '🪵 Fast Slit-Tongue Marimba Style',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'muffled' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'muffled' }]
      }
    },
    teponaztli_ancient_forest: {
      name: '🪵 Ancient Slit Drum Forest Spirit',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'heeltoe' }],
        4: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'heeltoe' }],
        12: [{ drum: 0, sound: 'open' }],
        14: [{ drum: 0, sound: 'muffled' }]
      }
    }
  },
  snare_drum: {
    snare_military_march: {
      name: '🥁 Orchestral Military Parade March',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'slap' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    },
    snare_drum_roll_accent: {
      name: '🥁 Snare Buzz Roll Accent',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'muffled' }],
        4: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'muffled' }],
        12: [{ drum: 0, sound: 'open' }],
        14: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    snare_jazz_ghost: {
      name: '🥁 Swing Jazz Ghost Notes',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'open' }],
        3: [{ drum: 0, sound: 'muffled' }],
        6: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        11: [{ drum: 0, sound: 'heeltoe' }],
        14: [{ drum: 0, sound: 'open' }]
      }
    },
    snare_orchestral_intro: {
      name: '🥁 Orchestral Symphony Intro',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'slap' }],
        4: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'muffled' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'slap' }],
        12: [{ drum: 0, sound: 'open' }],
        14: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    snare_rim_shot_groove: {
      name: '🥁 High Pitch Rim-Shot Funk',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        1: [{ drum: 0, sound: 'muffled' }],
        3: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'slap' }],
        6: [{ drum: 0, sound: 'heeltoe' }],
        8: [{ drum: 0, sound: 'bass' }],
        9: [{ drum: 0, sound: 'muffled' }],
        11: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'slap' }],
        14: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    snare_crescendo_build: {
      name: '🥁 Dramatic Orchestral Crescendo',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        8: [{ drum: 0, sound: 'open' }]
      }
    },
    snare_fast_rudiments: {
      name: '🥁 Parade Drum-Line Rudiments',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'slap' }],
        6: [{ drum: 0, sound: 'muffled' }],
        8: [{ drum: 0, sound: 'heeltoe' }],
        10: [{ drum: 0, sound: 'open' }]
      }
    },
    snare_syncopated_funk: {
      name: '🥁 Syncopated Funk Snare Rim',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'heeltoe' }],
        8: [{ drum: 0, sound: 'slap' }],
        11: [{ drum: 0, sound: 'muffled' }],
        14: [{ drum: 0, sound: 'open' }]
      }
    },
    snare_steady_pattern: {
      name: '🥁 Steady Symphony Backbeat',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'muffled' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'muffled' }]
      }
    },
    snare_dramatic_climax: {
      name: '🥁 Epic Orchestral Snare Climax',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'heeltoe' }],
        4: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'heeltoe' }],
        12: [{ drum: 0, sound: 'open' }],
        14: [{ drum: 0, sound: 'muffled' }]
      }
    }
  },
  shekere: {
    shekere_gourd_groove: {
      name: '📯 Beaded Gourd Carnival Shake',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'slap' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    },
    shekere_bead_slap_bounce: {
      name: '📯 Dry Bead Slap Bounce',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'muffled' }],
        4: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'muffled' }],
        12: [{ drum: 0, sound: 'open' }],
        14: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    shekere_west_african_pulse: {
      name: '📯 West African Village Gourd',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'open' }],
        3: [{ drum: 0, sound: 'muffled' }],
        6: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        11: [{ drum: 0, sound: 'heeltoe' }],
        14: [{ drum: 0, sound: 'open' }]
      }
    },
    shekere_shuffle_roll: {
      name: '📯 Dynamic Gourd Bead Shuffle',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'slap' }],
        4: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'muffled' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'slap' }],
        12: [{ drum: 0, sound: 'open' }],
        14: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    shekere_yoruba_festival: {
      name: '📯 Yoruba Royal Festival Gourd',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        1: [{ drum: 0, sound: 'muffled' }],
        3: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'slap' }],
        6: [{ drum: 0, sound: 'heeltoe' }],
        8: [{ drum: 0, sound: 'bass' }],
        9: [{ drum: 0, sound: 'muffled' }],
        11: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'slap' }],
        14: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    shekere_highlife_accent: {
      name: '📯 Highlife Beaded Shuffling',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        8: [{ drum: 0, sound: 'open' }]
      }
    },
    shekere_shaking_trance: {
      name: '📯 Gourd Shake Shamanic Trance',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'slap' }],
        6: [{ drum: 0, sound: 'muffled' }],
        8: [{ drum: 0, sound: 'heeltoe' }],
        10: [{ drum: 0, sound: 'open' }]
      }
    },
    shekere_caribbean_groove: {
      name: '📯 Caribbean Sandy Coast Shuffle',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'heeltoe' }],
        8: [{ drum: 0, sound: 'slap' }],
        11: [{ drum: 0, sound: 'muffled' }],
        14: [{ drum: 0, sound: 'open' }]
      }
    },
    shekere_morning_meditation: {
      name: '📯 Gentle Ocean Breeze Shuffler',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'muffled' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'muffled' }]
      }
    },
    shekere_ancestral_spirit: {
      name: '📯 Ancestral Royal Gourd Pulse',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'heeltoe' }],
        4: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'heeltoe' }],
        12: [{ drum: 0, sound: 'open' }],
        14: [{ drum: 0, sound: 'muffled' }]
      }
    }
  },
  alfaia: {
    alfaia_1: {
      name: '🥁 Alfaia Traditional Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    },
    alfaia_2: {
      name: '🥁 Alfaia Modern Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'slap' }]
      }
    },
    alfaia_3: {
      name: '🥁 Alfaia Syncopated Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'muffled' }],
        6: [{ drum: 0, sound: 'open' }],
        9: [{ drum: 0, sound: 'muffled' }],
        12: [{ drum: 0, sound: 'slap' }]
      }
    },
    alfaia_4: {
      name: '🥁 Alfaia Upbeat Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        1: [{ drum: 0, sound: 'muffled' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    alfaia_5: {
      name: '🥁 Alfaia Slow Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'heeltoe' }],
        4: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'heeltoe' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    },
    alfaia_6: {
      name: '🥁 Alfaia Fast Groove',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'bass' }],
        9: [{ drum: 0, sound: 'slap' }]
      }
    },
    alfaia_7: {
      name: '🥁 Alfaia Ritual Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'muffled' }],
        6: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'muffled' }]
      }
    },
    alfaia_8: {
      name: '🥁 Alfaia Festival Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'slap' }]
      }
    },
    alfaia_9: {
      name: '🥁 Alfaia Tribal Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        7: [{ drum: 0, sound: 'heeltoe' }],
        10: [{ drum: 0, sound: 'slap' }],
        13: [{ drum: 0, sound: 'open' }]
      }
    },
    alfaia_10: {
      name: '🥁 Alfaia Ceremonial Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        1: [{ drum: 0, sound: 'muffled' }],
        2: [{ drum: 0, sound: 'muffled' }],
        3: [{ drum: 0, sound: 'muffled' }],
        4: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    }
  },
  angklung: {
    angklung_1: {
      name: '🥁 Angklung Traditional Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    },
    angklung_2: {
      name: '🥁 Angklung Modern Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'slap' }]
      }
    },
    angklung_3: {
      name: '🥁 Angklung Syncopated Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'muffled' }],
        6: [{ drum: 0, sound: 'open' }],
        9: [{ drum: 0, sound: 'muffled' }],
        12: [{ drum: 0, sound: 'slap' }]
      }
    },
    angklung_4: {
      name: '🥁 Angklung Upbeat Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        1: [{ drum: 0, sound: 'muffled' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    angklung_5: {
      name: '🥁 Angklung Slow Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'heeltoe' }],
        4: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'heeltoe' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    },
    angklung_6: {
      name: '🥁 Angklung Fast Groove',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'bass' }],
        9: [{ drum: 0, sound: 'slap' }]
      }
    },
    angklung_7: {
      name: '🥁 Angklung Ritual Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'muffled' }],
        6: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'muffled' }]
      }
    },
    angklung_8: {
      name: '🥁 Angklung Festival Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'slap' }]
      }
    },
    angklung_9: {
      name: '🥁 Angklung Tribal Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        7: [{ drum: 0, sound: 'heeltoe' }],
        10: [{ drum: 0, sound: 'slap' }],
        13: [{ drum: 0, sound: 'open' }]
      }
    },
    angklung_10: {
      name: '🥁 Angklung Ceremonial Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        1: [{ drum: 0, sound: 'muffled' }],
        2: [{ drum: 0, sound: 'muffled' }],
        3: [{ drum: 0, sound: 'muffled' }],
        4: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    }
  },
  bell_tree: {
    bell_tree_1: {
      name: '🥁 Bell tree Traditional Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    },
    bell_tree_2: {
      name: '🥁 Bell tree Modern Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'slap' }]
      }
    },
    bell_tree_3: {
      name: '🥁 Bell tree Syncopated Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'muffled' }],
        6: [{ drum: 0, sound: 'open' }],
        9: [{ drum: 0, sound: 'muffled' }],
        12: [{ drum: 0, sound: 'slap' }]
      }
    },
    bell_tree_4: {
      name: '🥁 Bell tree Upbeat Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        1: [{ drum: 0, sound: 'muffled' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    bell_tree_5: {
      name: '🥁 Bell tree Slow Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'heeltoe' }],
        4: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'heeltoe' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    },
    bell_tree_6: {
      name: '🥁 Bell tree Fast Groove',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'bass' }],
        9: [{ drum: 0, sound: 'slap' }]
      }
    },
    bell_tree_7: {
      name: '🥁 Bell tree Ritual Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'muffled' }],
        6: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'muffled' }]
      }
    },
    bell_tree_8: {
      name: '🥁 Bell tree Festival Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'slap' }]
      }
    },
    bell_tree_9: {
      name: '🥁 Bell tree Tribal Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        7: [{ drum: 0, sound: 'heeltoe' }],
        10: [{ drum: 0, sound: 'slap' }],
        13: [{ drum: 0, sound: 'open' }]
      }
    },
    bell_tree_10: {
      name: '🥁 Bell tree Ceremonial Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        1: [{ drum: 0, sound: 'muffled' }],
        2: [{ drum: 0, sound: 'muffled' }],
        3: [{ drum: 0, sound: 'muffled' }],
        4: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    }
  },
  boomwhackers: {
    boomwhackers_1: {
      name: '🥁 Boomwhackers Traditional Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    },
    boomwhackers_2: {
      name: '🥁 Boomwhackers Modern Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'slap' }]
      }
    },
    boomwhackers_3: {
      name: '🥁 Boomwhackers Syncopated Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'muffled' }],
        6: [{ drum: 0, sound: 'open' }],
        9: [{ drum: 0, sound: 'muffled' }],
        12: [{ drum: 0, sound: 'slap' }]
      }
    },
    boomwhackers_4: {
      name: '🥁 Boomwhackers Upbeat Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        1: [{ drum: 0, sound: 'muffled' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    boomwhackers_5: {
      name: '🥁 Boomwhackers Slow Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'heeltoe' }],
        4: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'heeltoe' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    },
    boomwhackers_6: {
      name: '🥁 Boomwhackers Fast Groove',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'bass' }],
        9: [{ drum: 0, sound: 'slap' }]
      }
    },
    boomwhackers_7: {
      name: '🥁 Boomwhackers Ritual Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'muffled' }],
        6: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'muffled' }]
      }
    },
    boomwhackers_8: {
      name: '🥁 Boomwhackers Festival Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'slap' }]
      }
    },
    boomwhackers_9: {
      name: '🥁 Boomwhackers Tribal Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        7: [{ drum: 0, sound: 'heeltoe' }],
        10: [{ drum: 0, sound: 'slap' }],
        13: [{ drum: 0, sound: 'open' }]
      }
    },
    boomwhackers_10: {
      name: '🥁 Boomwhackers Ceremonial Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        1: [{ drum: 0, sound: 'muffled' }],
        2: [{ drum: 0, sound: 'muffled' }],
        3: [{ drum: 0, sound: 'muffled' }],
        4: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    }
  },
  cabasa: {
    cabasa_1: {
      name: '🥁 Cabasa Traditional Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    },
    cabasa_2: {
      name: '🥁 Cabasa Modern Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'slap' }]
      }
    },
    cabasa_3: {
      name: '🥁 Cabasa Syncopated Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'muffled' }],
        6: [{ drum: 0, sound: 'open' }],
        9: [{ drum: 0, sound: 'muffled' }],
        12: [{ drum: 0, sound: 'slap' }]
      }
    },
    cabasa_4: {
      name: '🥁 Cabasa Upbeat Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        1: [{ drum: 0, sound: 'muffled' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    cabasa_5: {
      name: '🥁 Cabasa Slow Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'heeltoe' }],
        4: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'heeltoe' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    },
    cabasa_6: {
      name: '🥁 Cabasa Fast Groove',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'bass' }],
        9: [{ drum: 0, sound: 'slap' }]
      }
    },
    cabasa_7: {
      name: '🥁 Cabasa Ritual Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'muffled' }],
        6: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'muffled' }]
      }
    },
    cabasa_8: {
      name: '🥁 Cabasa Festival Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'slap' }]
      }
    },
    cabasa_9: {
      name: '🥁 Cabasa Tribal Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        7: [{ drum: 0, sound: 'heeltoe' }],
        10: [{ drum: 0, sound: 'slap' }],
        13: [{ drum: 0, sound: 'open' }]
      }
    },
    cabasa_10: {
      name: '🥁 Cabasa Ceremonial Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        1: [{ drum: 0, sound: 'muffled' }],
        2: [{ drum: 0, sound: 'muffled' }],
        3: [{ drum: 0, sound: 'muffled' }],
        4: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    }
  },
  chocalho: {
    chocalho_1: {
      name: '🥁 Chocalho Traditional Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    },
    chocalho_2: {
      name: '🥁 Chocalho Modern Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'slap' }]
      }
    },
    chocalho_3: {
      name: '🥁 Chocalho Syncopated Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'muffled' }],
        6: [{ drum: 0, sound: 'open' }],
        9: [{ drum: 0, sound: 'muffled' }],
        12: [{ drum: 0, sound: 'slap' }]
      }
    },
    chocalho_4: {
      name: '🥁 Chocalho Upbeat Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        1: [{ drum: 0, sound: 'muffled' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    chocalho_5: {
      name: '🥁 Chocalho Slow Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'heeltoe' }],
        4: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'heeltoe' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    },
    chocalho_6: {
      name: '🥁 Chocalho Fast Groove',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'bass' }],
        9: [{ drum: 0, sound: 'slap' }]
      }
    },
    chocalho_7: {
      name: '🥁 Chocalho Ritual Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'muffled' }],
        6: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'muffled' }]
      }
    },
    chocalho_8: {
      name: '🥁 Chocalho Festival Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'slap' }]
      }
    },
    chocalho_9: {
      name: '🥁 Chocalho Tribal Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        7: [{ drum: 0, sound: 'heeltoe' }],
        10: [{ drum: 0, sound: 'slap' }],
        13: [{ drum: 0, sound: 'open' }]
      }
    },
    chocalho_10: {
      name: '🥁 Chocalho Ceremonial Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        1: [{ drum: 0, sound: 'muffled' }],
        2: [{ drum: 0, sound: 'muffled' }],
        3: [{ drum: 0, sound: 'muffled' }],
        4: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    }
  },
  framed_rumbla: {
    framed_rumbla_1: {
      name: '🥁 Framed rumbla Traditional Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    },
    framed_rumbla_2: {
      name: '🥁 Framed rumbla Modern Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'slap' }]
      }
    },
    framed_rumbla_3: {
      name: '🥁 Framed rumbla Syncopated Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'muffled' }],
        6: [{ drum: 0, sound: 'open' }],
        9: [{ drum: 0, sound: 'muffled' }],
        12: [{ drum: 0, sound: 'slap' }]
      }
    },
    framed_rumbla_4: {
      name: '🥁 Framed rumbla Upbeat Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        1: [{ drum: 0, sound: 'muffled' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    framed_rumbla_5: {
      name: '🥁 Framed rumbla Slow Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'heeltoe' }],
        4: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'heeltoe' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    },
    framed_rumbla_6: {
      name: '🥁 Framed rumbla Fast Groove',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'bass' }],
        9: [{ drum: 0, sound: 'slap' }]
      }
    },
    framed_rumbla_7: {
      name: '🥁 Framed rumbla Ritual Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'muffled' }],
        6: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'muffled' }]
      }
    },
    framed_rumbla_8: {
      name: '🥁 Framed rumbla Festival Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'slap' }]
      }
    },
    framed_rumbla_9: {
      name: '🥁 Framed rumbla Tribal Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        7: [{ drum: 0, sound: 'heeltoe' }],
        10: [{ drum: 0, sound: 'slap' }],
        13: [{ drum: 0, sound: 'open' }]
      }
    },
    framed_rumbla_10: {
      name: '🥁 Framed rumbla Ceremonial Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        1: [{ drum: 0, sound: 'muffled' }],
        2: [{ drum: 0, sound: 'muffled' }],
        3: [{ drum: 0, sound: 'muffled' }],
        4: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    }
  },
  friction_drum: {
    friction_drum_1: {
      name: '🥁 Friction drum Traditional Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    },
    friction_drum_2: {
      name: '🥁 Friction drum Modern Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'slap' }]
      }
    },
    friction_drum_3: {
      name: '🥁 Friction drum Syncopated Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'muffled' }],
        6: [{ drum: 0, sound: 'open' }],
        9: [{ drum: 0, sound: 'muffled' }],
        12: [{ drum: 0, sound: 'slap' }]
      }
    },
    friction_drum_4: {
      name: '🥁 Friction drum Upbeat Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        1: [{ drum: 0, sound: 'muffled' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    friction_drum_5: {
      name: '🥁 Friction drum Slow Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'heeltoe' }],
        4: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'heeltoe' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    },
    friction_drum_6: {
      name: '🥁 Friction drum Fast Groove',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'bass' }],
        9: [{ drum: 0, sound: 'slap' }]
      }
    },
    friction_drum_7: {
      name: '🥁 Friction drum Ritual Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'muffled' }],
        6: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'muffled' }]
      }
    },
    friction_drum_8: {
      name: '🥁 Friction drum Festival Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'slap' }]
      }
    },
    friction_drum_9: {
      name: '🥁 Friction drum Tribal Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        7: [{ drum: 0, sound: 'heeltoe' }],
        10: [{ drum: 0, sound: 'slap' }],
        13: [{ drum: 0, sound: 'open' }]
      }
    },
    friction_drum_10: {
      name: '🥁 Friction drum Ceremonial Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        1: [{ drum: 0, sound: 'muffled' }],
        2: [{ drum: 0, sound: 'muffled' }],
        3: [{ drum: 0, sound: 'muffled' }],
        4: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    }
  },
  frog_rasp: {
    frog_rasp_1: {
      name: '🥁 Frog rasp Traditional Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    },
    frog_rasp_2: {
      name: '🥁 Frog rasp Modern Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'slap' }]
      }
    },
    frog_rasp_3: {
      name: '🥁 Frog rasp Syncopated Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'muffled' }],
        6: [{ drum: 0, sound: 'open' }],
        9: [{ drum: 0, sound: 'muffled' }],
        12: [{ drum: 0, sound: 'slap' }]
      }
    },
    frog_rasp_4: {
      name: '🥁 Frog rasp Upbeat Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        1: [{ drum: 0, sound: 'muffled' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    frog_rasp_5: {
      name: '🥁 Frog rasp Slow Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'heeltoe' }],
        4: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'heeltoe' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    },
    frog_rasp_6: {
      name: '🥁 Frog rasp Fast Groove',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'bass' }],
        9: [{ drum: 0, sound: 'slap' }]
      }
    },
    frog_rasp_7: {
      name: '🥁 Frog rasp Ritual Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'muffled' }],
        6: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'muffled' }]
      }
    },
    frog_rasp_8: {
      name: '🥁 Frog rasp Festival Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'slap' }]
      }
    },
    frog_rasp_9: {
      name: '🥁 Frog rasp Tribal Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        7: [{ drum: 0, sound: 'heeltoe' }],
        10: [{ drum: 0, sound: 'slap' }],
        13: [{ drum: 0, sound: 'open' }]
      }
    },
    frog_rasp_10: {
      name: '🥁 Frog rasp Ceremonial Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        1: [{ drum: 0, sound: 'muffled' }],
        2: [{ drum: 0, sound: 'muffled' }],
        3: [{ drum: 0, sound: 'muffled' }],
        4: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    }
  },
  gome: {
    gome_1: {
      name: '🥁 Gome Traditional Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    },
    gome_2: {
      name: '🥁 Gome Modern Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'slap' }]
      }
    },
    gome_3: {
      name: '🥁 Gome Syncopated Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'muffled' }],
        6: [{ drum: 0, sound: 'open' }],
        9: [{ drum: 0, sound: 'muffled' }],
        12: [{ drum: 0, sound: 'slap' }]
      }
    },
    gome_4: {
      name: '🥁 Gome Upbeat Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        1: [{ drum: 0, sound: 'muffled' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    gome_5: {
      name: '🥁 Gome Slow Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'heeltoe' }],
        4: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'heeltoe' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    },
    gome_6: {
      name: '🥁 Gome Fast Groove',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'bass' }],
        9: [{ drum: 0, sound: 'slap' }]
      }
    },
    gome_7: {
      name: '🥁 Gome Ritual Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'muffled' }],
        6: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'muffled' }]
      }
    },
    gome_8: {
      name: '🥁 Gome Festival Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'slap' }]
      }
    },
    gome_9: {
      name: '🥁 Gome Tribal Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        7: [{ drum: 0, sound: 'heeltoe' }],
        10: [{ drum: 0, sound: 'slap' }],
        13: [{ drum: 0, sound: 'open' }]
      }
    },
    gome_10: {
      name: '🥁 Gome Ceremonial Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        1: [{ drum: 0, sound: 'muffled' }],
        2: [{ drum: 0, sound: 'muffled' }],
        3: [{ drum: 0, sound: 'muffled' }],
        4: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    }
  },
  gran_cassa: {
    gran_cassa_1: {
      name: '🥁 Gran cassa Traditional Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    },
    gran_cassa_2: {
      name: '🥁 Gran cassa Modern Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'slap' }]
      }
    },
    gran_cassa_3: {
      name: '🥁 Gran cassa Syncopated Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'muffled' }],
        6: [{ drum: 0, sound: 'open' }],
        9: [{ drum: 0, sound: 'muffled' }],
        12: [{ drum: 0, sound: 'slap' }]
      }
    },
    gran_cassa_4: {
      name: '🥁 Gran cassa Upbeat Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        1: [{ drum: 0, sound: 'muffled' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    gran_cassa_5: {
      name: '🥁 Gran cassa Slow Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'heeltoe' }],
        4: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'heeltoe' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    },
    gran_cassa_6: {
      name: '🥁 Gran cassa Fast Groove',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'bass' }],
        9: [{ drum: 0, sound: 'slap' }]
      }
    },
    gran_cassa_7: {
      name: '🥁 Gran cassa Ritual Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'muffled' }],
        6: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'muffled' }]
      }
    },
    gran_cassa_8: {
      name: '🥁 Gran cassa Festival Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'slap' }]
      }
    },
    gran_cassa_9: {
      name: '🥁 Gran cassa Tribal Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        7: [{ drum: 0, sound: 'heeltoe' }],
        10: [{ drum: 0, sound: 'slap' }],
        13: [{ drum: 0, sound: 'open' }]
      }
    },
    gran_cassa_10: {
      name: '🥁 Gran cassa Ceremonial Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        1: [{ drum: 0, sound: 'muffled' }],
        2: [{ drum: 0, sound: 'muffled' }],
        3: [{ drum: 0, sound: 'muffled' }],
        4: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    }
  },
  gubguba: {
    gubguba_1: {
      name: '🥁 Gubguba Traditional Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    },
    gubguba_2: {
      name: '🥁 Gubguba Modern Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'slap' }]
      }
    },
    gubguba_3: {
      name: '🥁 Gubguba Syncopated Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'muffled' }],
        6: [{ drum: 0, sound: 'open' }],
        9: [{ drum: 0, sound: 'muffled' }],
        12: [{ drum: 0, sound: 'slap' }]
      }
    },
    gubguba_4: {
      name: '🥁 Gubguba Upbeat Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        1: [{ drum: 0, sound: 'muffled' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    gubguba_5: {
      name: '🥁 Gubguba Slow Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'heeltoe' }],
        4: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'heeltoe' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    },
    gubguba_6: {
      name: '🥁 Gubguba Fast Groove',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'bass' }],
        9: [{ drum: 0, sound: 'slap' }]
      }
    },
    gubguba_7: {
      name: '🥁 Gubguba Ritual Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'muffled' }],
        6: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'muffled' }]
      }
    },
    gubguba_8: {
      name: '🥁 Gubguba Festival Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'slap' }]
      }
    },
    gubguba_9: {
      name: '🥁 Gubguba Tribal Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        7: [{ drum: 0, sound: 'heeltoe' }],
        10: [{ drum: 0, sound: 'slap' }],
        13: [{ drum: 0, sound: 'open' }]
      }
    },
    gubguba_10: {
      name: '🥁 Gubguba Ceremonial Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        1: [{ drum: 0, sound: 'muffled' }],
        2: [{ drum: 0, sound: 'muffled' }],
        3: [{ drum: 0, sound: 'muffled' }],
        4: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    }
  },
  guiro: {
    guiro_1: {
      name: '🥁 Guiro Traditional Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    },
    guiro_2: {
      name: '🥁 Guiro Modern Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'slap' }]
      }
    },
    guiro_3: {
      name: '🥁 Guiro Syncopated Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'muffled' }],
        6: [{ drum: 0, sound: 'open' }],
        9: [{ drum: 0, sound: 'muffled' }],
        12: [{ drum: 0, sound: 'slap' }]
      }
    },
    guiro_4: {
      name: '🥁 Guiro Upbeat Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        1: [{ drum: 0, sound: 'muffled' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    guiro_5: {
      name: '🥁 Guiro Slow Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'heeltoe' }],
        4: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'heeltoe' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    },
    guiro_6: {
      name: '🥁 Guiro Fast Groove',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'bass' }],
        9: [{ drum: 0, sound: 'slap' }]
      }
    },
    guiro_7: {
      name: '🥁 Guiro Ritual Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'muffled' }],
        6: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'muffled' }]
      }
    },
    guiro_8: {
      name: '🥁 Guiro Festival Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'slap' }]
      }
    },
    guiro_9: {
      name: '🥁 Guiro Tribal Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        7: [{ drum: 0, sound: 'heeltoe' }],
        10: [{ drum: 0, sound: 'slap' }],
        13: [{ drum: 0, sound: 'open' }]
      }
    },
    guiro_10: {
      name: '🥁 Guiro Ceremonial Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        1: [{ drum: 0, sound: 'muffled' }],
        2: [{ drum: 0, sound: 'muffled' }],
        3: [{ drum: 0, sound: 'muffled' }],
        4: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    }
  },
  jaw_harp: {
    jaw_harp_1: {
      name: '🥁 Jaw harp Traditional Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    },
    jaw_harp_2: {
      name: '🥁 Jaw harp Modern Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'slap' }]
      }
    },
    jaw_harp_3: {
      name: '🥁 Jaw harp Syncopated Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'muffled' }],
        6: [{ drum: 0, sound: 'open' }],
        9: [{ drum: 0, sound: 'muffled' }],
        12: [{ drum: 0, sound: 'slap' }]
      }
    },
    jaw_harp_4: {
      name: '🥁 Jaw harp Upbeat Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        1: [{ drum: 0, sound: 'muffled' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    jaw_harp_5: {
      name: '🥁 Jaw harp Slow Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'heeltoe' }],
        4: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'heeltoe' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    },
    jaw_harp_6: {
      name: '🥁 Jaw harp Fast Groove',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'bass' }],
        9: [{ drum: 0, sound: 'slap' }]
      }
    },
    jaw_harp_7: {
      name: '🥁 Jaw harp Ritual Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'muffled' }],
        6: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'muffled' }]
      }
    },
    jaw_harp_8: {
      name: '🥁 Jaw harp Festival Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'slap' }]
      }
    },
    jaw_harp_9: {
      name: '🥁 Jaw harp Tribal Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        7: [{ drum: 0, sound: 'heeltoe' }],
        10: [{ drum: 0, sound: 'slap' }],
        13: [{ drum: 0, sound: 'open' }]
      }
    },
    jaw_harp_10: {
      name: '🥁 Jaw harp Ceremonial Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        1: [{ drum: 0, sound: 'muffled' }],
        2: [{ drum: 0, sound: 'muffled' }],
        3: [{ drum: 0, sound: 'muffled' }],
        4: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    }
  },
  kanjira: {
    kanjira_1: {
      name: '🥁 Kanjira Traditional Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    },
    kanjira_2: {
      name: '🥁 Kanjira Modern Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'slap' }]
      }
    },
    kanjira_3: {
      name: '🥁 Kanjira Syncopated Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'muffled' }],
        6: [{ drum: 0, sound: 'open' }],
        9: [{ drum: 0, sound: 'muffled' }],
        12: [{ drum: 0, sound: 'slap' }]
      }
    },
    kanjira_4: {
      name: '🥁 Kanjira Upbeat Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        1: [{ drum: 0, sound: 'muffled' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    kanjira_5: {
      name: '🥁 Kanjira Slow Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'heeltoe' }],
        4: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'heeltoe' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    },
    kanjira_6: {
      name: '🥁 Kanjira Fast Groove',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'bass' }],
        9: [{ drum: 0, sound: 'slap' }]
      }
    },
    kanjira_7: {
      name: '🥁 Kanjira Ritual Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'muffled' }],
        6: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'muffled' }]
      }
    },
    kanjira_8: {
      name: '🥁 Kanjira Festival Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'slap' }]
      }
    },
    kanjira_9: {
      name: '🥁 Kanjira Tribal Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        7: [{ drum: 0, sound: 'heeltoe' }],
        10: [{ drum: 0, sound: 'slap' }],
        13: [{ drum: 0, sound: 'open' }]
      }
    },
    kanjira_10: {
      name: '🥁 Kanjira Ceremonial Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        1: [{ drum: 0, sound: 'muffled' }],
        2: [{ drum: 0, sound: 'muffled' }],
        3: [{ drum: 0, sound: 'muffled' }],
        4: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    }
  },
  kokiriko: {
    kokiriko_1: {
      name: '🥁 Kokiriko Traditional Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    },
    kokiriko_2: {
      name: '🥁 Kokiriko Modern Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'slap' }]
      }
    },
    kokiriko_3: {
      name: '🥁 Kokiriko Syncopated Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'muffled' }],
        6: [{ drum: 0, sound: 'open' }],
        9: [{ drum: 0, sound: 'muffled' }],
        12: [{ drum: 0, sound: 'slap' }]
      }
    },
    kokiriko_4: {
      name: '🥁 Kokiriko Upbeat Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        1: [{ drum: 0, sound: 'muffled' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    kokiriko_5: {
      name: '🥁 Kokiriko Slow Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'heeltoe' }],
        4: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'heeltoe' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    },
    kokiriko_6: {
      name: '🥁 Kokiriko Fast Groove',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'bass' }],
        9: [{ drum: 0, sound: 'slap' }]
      }
    },
    kokiriko_7: {
      name: '🥁 Kokiriko Ritual Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'muffled' }],
        6: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'muffled' }]
      }
    },
    kokiriko_8: {
      name: '🥁 Kokiriko Festival Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'slap' }]
      }
    },
    kokiriko_9: {
      name: '🥁 Kokiriko Tribal Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        7: [{ drum: 0, sound: 'heeltoe' }],
        10: [{ drum: 0, sound: 'slap' }],
        13: [{ drum: 0, sound: 'open' }]
      }
    },
    kokiriko_10: {
      name: '🥁 Kokiriko Ceremonial Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        1: [{ drum: 0, sound: 'muffled' }],
        2: [{ drum: 0, sound: 'muffled' }],
        3: [{ drum: 0, sound: 'muffled' }],
        4: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    }
  },
  kundu: {
    kundu_1: {
      name: '🥁 Kundu Traditional Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    },
    kundu_2: {
      name: '🥁 Kundu Modern Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'slap' }]
      }
    },
    kundu_3: {
      name: '🥁 Kundu Syncopated Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'muffled' }],
        6: [{ drum: 0, sound: 'open' }],
        9: [{ drum: 0, sound: 'muffled' }],
        12: [{ drum: 0, sound: 'slap' }]
      }
    },
    kundu_4: {
      name: '🥁 Kundu Upbeat Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        1: [{ drum: 0, sound: 'muffled' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    kundu_5: {
      name: '🥁 Kundu Slow Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'heeltoe' }],
        4: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'heeltoe' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    },
    kundu_6: {
      name: '🥁 Kundu Fast Groove',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'bass' }],
        9: [{ drum: 0, sound: 'slap' }]
      }
    },
    kundu_7: {
      name: '🥁 Kundu Ritual Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'muffled' }],
        6: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'muffled' }]
      }
    },
    kundu_8: {
      name: '🥁 Kundu Festival Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'slap' }]
      }
    },
    kundu_9: {
      name: '🥁 Kundu Tribal Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        7: [{ drum: 0, sound: 'heeltoe' }],
        10: [{ drum: 0, sound: 'slap' }],
        13: [{ drum: 0, sound: 'open' }]
      }
    },
    kundu_10: {
      name: '🥁 Kundu Ceremonial Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        1: [{ drum: 0, sound: 'muffled' }],
        2: [{ drum: 0, sound: 'muffled' }],
        3: [{ drum: 0, sound: 'muffled' }],
        4: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    }
  },
  lions_roar: {
    lions_roar_1: {
      name: '🥁 Lions roar Traditional Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    },
    lions_roar_2: {
      name: '🥁 Lions roar Modern Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'slap' }]
      }
    },
    lions_roar_3: {
      name: '🥁 Lions roar Syncopated Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'muffled' }],
        6: [{ drum: 0, sound: 'open' }],
        9: [{ drum: 0, sound: 'muffled' }],
        12: [{ drum: 0, sound: 'slap' }]
      }
    },
    lions_roar_4: {
      name: '🥁 Lions roar Upbeat Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        1: [{ drum: 0, sound: 'muffled' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    lions_roar_5: {
      name: '🥁 Lions roar Slow Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'heeltoe' }],
        4: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'heeltoe' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    },
    lions_roar_6: {
      name: '🥁 Lions roar Fast Groove',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'bass' }],
        9: [{ drum: 0, sound: 'slap' }]
      }
    },
    lions_roar_7: {
      name: '🥁 Lions roar Ritual Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'muffled' }],
        6: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'muffled' }]
      }
    },
    lions_roar_8: {
      name: '🥁 Lions roar Festival Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'slap' }]
      }
    },
    lions_roar_9: {
      name: '🥁 Lions roar Tribal Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        7: [{ drum: 0, sound: 'heeltoe' }],
        10: [{ drum: 0, sound: 'slap' }],
        13: [{ drum: 0, sound: 'open' }]
      }
    },
    lions_roar_10: {
      name: '🥁 Lions roar Ceremonial Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        1: [{ drum: 0, sound: 'muffled' }],
        2: [{ drum: 0, sound: 'muffled' }],
        3: [{ drum: 0, sound: 'muffled' }],
        4: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    }
  },
  log_drum: {
    log_drum_1: {
      name: '🥁 Log drum Traditional Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    },
    log_drum_2: {
      name: '🥁 Log drum Modern Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'slap' }]
      }
    },
    log_drum_3: {
      name: '🥁 Log drum Syncopated Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'muffled' }],
        6: [{ drum: 0, sound: 'open' }],
        9: [{ drum: 0, sound: 'muffled' }],
        12: [{ drum: 0, sound: 'slap' }]
      }
    },
    log_drum_4: {
      name: '🥁 Log drum Upbeat Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        1: [{ drum: 0, sound: 'muffled' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    log_drum_5: {
      name: '🥁 Log drum Slow Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'heeltoe' }],
        4: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'heeltoe' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    },
    log_drum_6: {
      name: '🥁 Log drum Fast Groove',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'bass' }],
        9: [{ drum: 0, sound: 'slap' }]
      }
    },
    log_drum_7: {
      name: '🥁 Log drum Ritual Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'muffled' }],
        6: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'muffled' }]
      }
    },
    log_drum_8: {
      name: '🥁 Log drum Festival Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'slap' }]
      }
    },
    log_drum_9: {
      name: '🥁 Log drum Tribal Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        7: [{ drum: 0, sound: 'heeltoe' }],
        10: [{ drum: 0, sound: 'slap' }],
        13: [{ drum: 0, sound: 'open' }]
      }
    },
    log_drum_10: {
      name: '🥁 Log drum Ceremonial Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        1: [{ drum: 0, sound: 'muffled' }],
        2: [{ drum: 0, sound: 'muffled' }],
        3: [{ drum: 0, sound: 'muffled' }],
        4: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    }
  },
  mark_tree: {
    mark_tree_1: {
      name: '🥁 Mark tree Traditional Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    },
    mark_tree_2: {
      name: '🥁 Mark tree Modern Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'slap' }]
      }
    },
    mark_tree_3: {
      name: '🥁 Mark tree Syncopated Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'muffled' }],
        6: [{ drum: 0, sound: 'open' }],
        9: [{ drum: 0, sound: 'muffled' }],
        12: [{ drum: 0, sound: 'slap' }]
      }
    },
    mark_tree_4: {
      name: '🥁 Mark tree Upbeat Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        1: [{ drum: 0, sound: 'muffled' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    mark_tree_5: {
      name: '🥁 Mark tree Slow Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'heeltoe' }],
        4: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'heeltoe' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    },
    mark_tree_6: {
      name: '🥁 Mark tree Fast Groove',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'bass' }],
        9: [{ drum: 0, sound: 'slap' }]
      }
    },
    mark_tree_7: {
      name: '🥁 Mark tree Ritual Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'muffled' }],
        6: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'muffled' }]
      }
    },
    mark_tree_8: {
      name: '🥁 Mark tree Festival Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'slap' }]
      }
    },
    mark_tree_9: {
      name: '🥁 Mark tree Tribal Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        7: [{ drum: 0, sound: 'heeltoe' }],
        10: [{ drum: 0, sound: 'slap' }],
        13: [{ drum: 0, sound: 'open' }]
      }
    },
    mark_tree_10: {
      name: '🥁 Mark tree Ceremonial Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        1: [{ drum: 0, sound: 'muffled' }],
        2: [{ drum: 0, sound: 'muffled' }],
        3: [{ drum: 0, sound: 'muffled' }],
        4: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    }
  },
  rainstick: {
    rainstick_1: {
      name: '🥁 Rainstick Traditional Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    },
    rainstick_2: {
      name: '🥁 Rainstick Modern Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'slap' }]
      }
    },
    rainstick_3: {
      name: '🥁 Rainstick Syncopated Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'muffled' }],
        6: [{ drum: 0, sound: 'open' }],
        9: [{ drum: 0, sound: 'muffled' }],
        12: [{ drum: 0, sound: 'slap' }]
      }
    },
    rainstick_4: {
      name: '🥁 Rainstick Upbeat Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        1: [{ drum: 0, sound: 'muffled' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    rainstick_5: {
      name: '🥁 Rainstick Slow Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'heeltoe' }],
        4: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'heeltoe' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    },
    rainstick_6: {
      name: '🥁 Rainstick Fast Groove',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'bass' }],
        9: [{ drum: 0, sound: 'slap' }]
      }
    },
    rainstick_7: {
      name: '🥁 Rainstick Ritual Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'muffled' }],
        6: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'muffled' }]
      }
    },
    rainstick_8: {
      name: '🥁 Rainstick Festival Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'slap' }]
      }
    },
    rainstick_9: {
      name: '🥁 Rainstick Tribal Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        7: [{ drum: 0, sound: 'heeltoe' }],
        10: [{ drum: 0, sound: 'slap' }],
        13: [{ drum: 0, sound: 'open' }]
      }
    },
    rainstick_10: {
      name: '🥁 Rainstick Ceremonial Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        1: [{ drum: 0, sound: 'muffled' }],
        2: [{ drum: 0, sound: 'muffled' }],
        3: [{ drum: 0, sound: 'muffled' }],
        4: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    }
  },
  ratchet: {
    ratchet_1: {
      name: '🥁 Ratchet Traditional Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    },
    ratchet_2: {
      name: '🥁 Ratchet Modern Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'slap' }]
      }
    },
    ratchet_3: {
      name: '🥁 Ratchet Syncopated Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'muffled' }],
        6: [{ drum: 0, sound: 'open' }],
        9: [{ drum: 0, sound: 'muffled' }],
        12: [{ drum: 0, sound: 'slap' }]
      }
    },
    ratchet_4: {
      name: '🥁 Ratchet Upbeat Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        1: [{ drum: 0, sound: 'muffled' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    ratchet_5: {
      name: '🥁 Ratchet Slow Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'heeltoe' }],
        4: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'heeltoe' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    },
    ratchet_6: {
      name: '🥁 Ratchet Fast Groove',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'bass' }],
        9: [{ drum: 0, sound: 'slap' }]
      }
    },
    ratchet_7: {
      name: '🥁 Ratchet Ritual Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'muffled' }],
        6: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'muffled' }]
      }
    },
    ratchet_8: {
      name: '🥁 Ratchet Festival Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'slap' }]
      }
    },
    ratchet_9: {
      name: '🥁 Ratchet Tribal Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        7: [{ drum: 0, sound: 'heeltoe' }],
        10: [{ drum: 0, sound: 'slap' }],
        13: [{ drum: 0, sound: 'open' }]
      }
    },
    ratchet_10: {
      name: '🥁 Ratchet Ceremonial Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        1: [{ drum: 0, sound: 'muffled' }],
        2: [{ drum: 0, sound: 'muffled' }],
        3: [{ drum: 0, sound: 'muffled' }],
        4: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    }
  },
  slide_whistle: {
    slide_whistle_1: {
      name: '🥁 Slide whistle Traditional Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    },
    slide_whistle_2: {
      name: '🥁 Slide whistle Modern Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'slap' }]
      }
    },
    slide_whistle_3: {
      name: '🥁 Slide whistle Syncopated Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'muffled' }],
        6: [{ drum: 0, sound: 'open' }],
        9: [{ drum: 0, sound: 'muffled' }],
        12: [{ drum: 0, sound: 'slap' }]
      }
    },
    slide_whistle_4: {
      name: '🥁 Slide whistle Upbeat Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        1: [{ drum: 0, sound: 'muffled' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    slide_whistle_5: {
      name: '🥁 Slide whistle Slow Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'heeltoe' }],
        4: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'heeltoe' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    },
    slide_whistle_6: {
      name: '🥁 Slide whistle Fast Groove',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'bass' }],
        9: [{ drum: 0, sound: 'slap' }]
      }
    },
    slide_whistle_7: {
      name: '🥁 Slide whistle Ritual Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'muffled' }],
        6: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'muffled' }]
      }
    },
    slide_whistle_8: {
      name: '🥁 Slide whistle Festival Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'slap' }]
      }
    },
    slide_whistle_9: {
      name: '🥁 Slide whistle Tribal Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        7: [{ drum: 0, sound: 'heeltoe' }],
        10: [{ drum: 0, sound: 'slap' }],
        13: [{ drum: 0, sound: 'open' }]
      }
    },
    slide_whistle_10: {
      name: '🥁 Slide whistle Ceremonial Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        1: [{ drum: 0, sound: 'muffled' }],
        2: [{ drum: 0, sound: 'muffled' }],
        3: [{ drum: 0, sound: 'muffled' }],
        4: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    }
  },
  spoons_bones: {
    spoons_bones_1: {
      name: '🥁 Spoons bones Traditional Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    },
    spoons_bones_2: {
      name: '🥁 Spoons bones Modern Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'slap' }]
      }
    },
    spoons_bones_3: {
      name: '🥁 Spoons bones Syncopated Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'muffled' }],
        6: [{ drum: 0, sound: 'open' }],
        9: [{ drum: 0, sound: 'muffled' }],
        12: [{ drum: 0, sound: 'slap' }]
      }
    },
    spoons_bones_4: {
      name: '🥁 Spoons bones Upbeat Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        1: [{ drum: 0, sound: 'muffled' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    spoons_bones_5: {
      name: '🥁 Spoons bones Slow Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'heeltoe' }],
        4: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'heeltoe' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    },
    spoons_bones_6: {
      name: '🥁 Spoons bones Fast Groove',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'bass' }],
        9: [{ drum: 0, sound: 'slap' }]
      }
    },
    spoons_bones_7: {
      name: '🥁 Spoons bones Ritual Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'muffled' }],
        6: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'muffled' }]
      }
    },
    spoons_bones_8: {
      name: '🥁 Spoons bones Festival Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'slap' }]
      }
    },
    spoons_bones_9: {
      name: '🥁 Spoons bones Tribal Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        7: [{ drum: 0, sound: 'heeltoe' }],
        10: [{ drum: 0, sound: 'slap' }],
        13: [{ drum: 0, sound: 'open' }]
      }
    },
    spoons_bones_10: {
      name: '🥁 Spoons bones Ceremonial Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        1: [{ drum: 0, sound: 'muffled' }],
        2: [{ drum: 0, sound: 'muffled' }],
        3: [{ drum: 0, sound: 'muffled' }],
        4: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    }
  },
  spring_drum: {
    spring_drum_1: {
      name: '🥁 Spring drum Traditional Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    },
    spring_drum_2: {
      name: '🥁 Spring drum Modern Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'slap' }]
      }
    },
    spring_drum_3: {
      name: '🥁 Spring drum Syncopated Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'muffled' }],
        6: [{ drum: 0, sound: 'open' }],
        9: [{ drum: 0, sound: 'muffled' }],
        12: [{ drum: 0, sound: 'slap' }]
      }
    },
    spring_drum_4: {
      name: '🥁 Spring drum Upbeat Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        1: [{ drum: 0, sound: 'muffled' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    spring_drum_5: {
      name: '🥁 Spring drum Slow Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'heeltoe' }],
        4: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'heeltoe' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    },
    spring_drum_6: {
      name: '🥁 Spring drum Fast Groove',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'bass' }],
        9: [{ drum: 0, sound: 'slap' }]
      }
    },
    spring_drum_7: {
      name: '🥁 Spring drum Ritual Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'muffled' }],
        6: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'muffled' }]
      }
    },
    spring_drum_8: {
      name: '🥁 Spring drum Festival Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'slap' }]
      }
    },
    spring_drum_9: {
      name: '🥁 Spring drum Tribal Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        7: [{ drum: 0, sound: 'heeltoe' }],
        10: [{ drum: 0, sound: 'slap' }],
        13: [{ drum: 0, sound: 'open' }]
      }
    },
    spring_drum_10: {
      name: '🥁 Spring drum Ceremonial Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        1: [{ drum: 0, sound: 'muffled' }],
        2: [{ drum: 0, sound: 'muffled' }],
        3: [{ drum: 0, sound: 'muffled' }],
        4: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    }
  },
  tammorra: {
    tammorra_1: {
      name: '🥁 Tammorra Traditional Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    },
    tammorra_2: {
      name: '🥁 Tammorra Modern Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'slap' }]
      }
    },
    tammorra_3: {
      name: '🥁 Tammorra Syncopated Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'muffled' }],
        6: [{ drum: 0, sound: 'open' }],
        9: [{ drum: 0, sound: 'muffled' }],
        12: [{ drum: 0, sound: 'slap' }]
      }
    },
    tammorra_4: {
      name: '🥁 Tammorra Upbeat Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        1: [{ drum: 0, sound: 'muffled' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    tammorra_5: {
      name: '🥁 Tammorra Slow Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'heeltoe' }],
        4: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'heeltoe' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    },
    tammorra_6: {
      name: '🥁 Tammorra Fast Groove',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'bass' }],
        9: [{ drum: 0, sound: 'slap' }]
      }
    },
    tammorra_7: {
      name: '🥁 Tammorra Ritual Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'muffled' }],
        6: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'muffled' }]
      }
    },
    tammorra_8: {
      name: '🥁 Tammorra Festival Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'slap' }]
      }
    },
    tammorra_9: {
      name: '🥁 Tammorra Tribal Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        7: [{ drum: 0, sound: 'heeltoe' }],
        10: [{ drum: 0, sound: 'slap' }],
        13: [{ drum: 0, sound: 'open' }]
      }
    },
    tammorra_10: {
      name: '🥁 Tammorra Ceremonial Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        1: [{ drum: 0, sound: 'muffled' }],
        2: [{ drum: 0, sound: 'muffled' }],
        3: [{ drum: 0, sound: 'muffled' }],
        4: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    }
  },
  tank_drum: {
    tank_drum_1: {
      name: '🥁 Tank drum Traditional Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    },
    tank_drum_2: {
      name: '🥁 Tank drum Modern Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'slap' }]
      }
    },
    tank_drum_3: {
      name: '🥁 Tank drum Syncopated Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'muffled' }],
        6: [{ drum: 0, sound: 'open' }],
        9: [{ drum: 0, sound: 'muffled' }],
        12: [{ drum: 0, sound: 'slap' }]
      }
    },
    tank_drum_4: {
      name: '🥁 Tank drum Upbeat Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        1: [{ drum: 0, sound: 'muffled' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    tank_drum_5: {
      name: '🥁 Tank drum Slow Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'heeltoe' }],
        4: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'heeltoe' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    },
    tank_drum_6: {
      name: '🥁 Tank drum Fast Groove',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'bass' }],
        9: [{ drum: 0, sound: 'slap' }]
      }
    },
    tank_drum_7: {
      name: '🥁 Tank drum Ritual Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'muffled' }],
        6: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'muffled' }]
      }
    },
    tank_drum_8: {
      name: '🥁 Tank drum Festival Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'slap' }]
      }
    },
    tank_drum_9: {
      name: '🥁 Tank drum Tribal Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        7: [{ drum: 0, sound: 'heeltoe' }],
        10: [{ drum: 0, sound: 'slap' }],
        13: [{ drum: 0, sound: 'open' }]
      }
    },
    tank_drum_10: {
      name: '🥁 Tank drum Ceremonial Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        1: [{ drum: 0, sound: 'muffled' }],
        2: [{ drum: 0, sound: 'muffled' }],
        3: [{ drum: 0, sound: 'muffled' }],
        4: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    }
  },
  tar_drum: {
    tar_drum_1: {
      name: '🥁 Tar drum Traditional Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    },
    tar_drum_2: {
      name: '🥁 Tar drum Modern Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'slap' }]
      }
    },
    tar_drum_3: {
      name: '🥁 Tar drum Syncopated Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'muffled' }],
        6: [{ drum: 0, sound: 'open' }],
        9: [{ drum: 0, sound: 'muffled' }],
        12: [{ drum: 0, sound: 'slap' }]
      }
    },
    tar_drum_4: {
      name: '🥁 Tar drum Upbeat Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        1: [{ drum: 0, sound: 'muffled' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    tar_drum_5: {
      name: '🥁 Tar drum Slow Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'heeltoe' }],
        4: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'heeltoe' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    },
    tar_drum_6: {
      name: '🥁 Tar drum Fast Groove',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'bass' }],
        9: [{ drum: 0, sound: 'slap' }]
      }
    },
    tar_drum_7: {
      name: '🥁 Tar drum Ritual Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'muffled' }],
        6: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'muffled' }]
      }
    },
    tar_drum_8: {
      name: '🥁 Tar drum Festival Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'slap' }]
      }
    },
    tar_drum_9: {
      name: '🥁 Tar drum Tribal Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        7: [{ drum: 0, sound: 'heeltoe' }],
        10: [{ drum: 0, sound: 'slap' }],
        13: [{ drum: 0, sound: 'open' }]
      }
    },
    tar_drum_10: {
      name: '🥁 Tar drum Ceremonial Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        1: [{ drum: 0, sound: 'muffled' }],
        2: [{ drum: 0, sound: 'muffled' }],
        3: [{ drum: 0, sound: 'muffled' }],
        4: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    }
  },
  temple_blocks: {
    temple_blocks_1: {
      name: '🥁 Temple blocks Traditional Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    },
    temple_blocks_2: {
      name: '🥁 Temple blocks Modern Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'slap' }]
      }
    },
    temple_blocks_3: {
      name: '🥁 Temple blocks Syncopated Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'muffled' }],
        6: [{ drum: 0, sound: 'open' }],
        9: [{ drum: 0, sound: 'muffled' }],
        12: [{ drum: 0, sound: 'slap' }]
      }
    },
    temple_blocks_4: {
      name: '🥁 Temple blocks Upbeat Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        1: [{ drum: 0, sound: 'muffled' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    temple_blocks_5: {
      name: '🥁 Temple blocks Slow Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'heeltoe' }],
        4: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'heeltoe' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    },
    temple_blocks_6: {
      name: '🥁 Temple blocks Fast Groove',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'bass' }],
        9: [{ drum: 0, sound: 'slap' }]
      }
    },
    temple_blocks_7: {
      name: '🥁 Temple blocks Ritual Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'muffled' }],
        6: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'muffled' }]
      }
    },
    temple_blocks_8: {
      name: '🥁 Temple blocks Festival Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'slap' }]
      }
    },
    temple_blocks_9: {
      name: '🥁 Temple blocks Tribal Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        7: [{ drum: 0, sound: 'heeltoe' }],
        10: [{ drum: 0, sound: 'slap' }],
        13: [{ drum: 0, sound: 'open' }]
      }
    },
    temple_blocks_10: {
      name: '🥁 Temple blocks Ceremonial Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        1: [{ drum: 0, sound: 'muffled' }],
        2: [{ drum: 0, sound: 'muffled' }],
        3: [{ drum: 0, sound: 'muffled' }],
        4: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    }
  },
  thongophone: {
    thongophone_1: {
      name: '🥁 Thongophone Traditional Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    },
    thongophone_2: {
      name: '🥁 Thongophone Modern Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'slap' }]
      }
    },
    thongophone_3: {
      name: '🥁 Thongophone Syncopated Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'muffled' }],
        6: [{ drum: 0, sound: 'open' }],
        9: [{ drum: 0, sound: 'muffled' }],
        12: [{ drum: 0, sound: 'slap' }]
      }
    },
    thongophone_4: {
      name: '🥁 Thongophone Upbeat Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        1: [{ drum: 0, sound: 'muffled' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    thongophone_5: {
      name: '🥁 Thongophone Slow Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'heeltoe' }],
        4: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'heeltoe' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    },
    thongophone_6: {
      name: '🥁 Thongophone Fast Groove',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'bass' }],
        9: [{ drum: 0, sound: 'slap' }]
      }
    },
    thongophone_7: {
      name: '🥁 Thongophone Ritual Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'muffled' }],
        6: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'muffled' }]
      }
    },
    thongophone_8: {
      name: '🥁 Thongophone Festival Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'slap' }]
      }
    },
    thongophone_9: {
      name: '🥁 Thongophone Tribal Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        7: [{ drum: 0, sound: 'heeltoe' }],
        10: [{ drum: 0, sound: 'slap' }],
        13: [{ drum: 0, sound: 'open' }]
      }
    },
    thongophone_10: {
      name: '🥁 Thongophone Ceremonial Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        1: [{ drum: 0, sound: 'muffled' }],
        2: [{ drum: 0, sound: 'muffled' }],
        3: [{ drum: 0, sound: 'muffled' }],
        4: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    }
  },
  washboard: {
    washboard_1: {
      name: '🥁 Washboard Traditional Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    },
    washboard_2: {
      name: '🥁 Washboard Modern Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'slap' }]
      }
    },
    washboard_3: {
      name: '🥁 Washboard Syncopated Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'muffled' }],
        6: [{ drum: 0, sound: 'open' }],
        9: [{ drum: 0, sound: 'muffled' }],
        12: [{ drum: 0, sound: 'slap' }]
      }
    },
    washboard_4: {
      name: '🥁 Washboard Upbeat Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        1: [{ drum: 0, sound: 'muffled' }],
        4: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'heeltoe' }]
      }
    },
    washboard_5: {
      name: '🥁 Washboard Slow Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'heeltoe' }],
        4: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'heeltoe' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    },
    washboard_6: {
      name: '🥁 Washboard Fast Groove',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        3: [{ drum: 0, sound: 'open' }],
        6: [{ drum: 0, sound: 'bass' }],
        9: [{ drum: 0, sound: 'slap' }]
      }
    },
    washboard_7: {
      name: '🥁 Washboard Ritual Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        2: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'muffled' }],
        6: [{ drum: 0, sound: 'open' }],
        8: [{ drum: 0, sound: 'bass' }],
        10: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'muffled' }]
      }
    },
    washboard_8: {
      name: '🥁 Washboard Festival Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'open' }],
        4: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'open' }],
        12: [{ drum: 0, sound: 'slap' }]
      }
    },
    washboard_9: {
      name: '🥁 Washboard Tribal Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        4: [{ drum: 0, sound: 'open' }],
        7: [{ drum: 0, sound: 'heeltoe' }],
        10: [{ drum: 0, sound: 'slap' }],
        13: [{ drum: 0, sound: 'open' }]
      }
    },
    washboard_10: {
      name: '🥁 Washboard Ceremonial Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass' }],
        1: [{ drum: 0, sound: 'muffled' }],
        2: [{ drum: 0, sound: 'muffled' }],
        3: [{ drum: 0, sound: 'muffled' }],
        4: [{ drum: 0, sound: 'slap' }],
        8: [{ drum: 0, sound: 'bass' }],
        12: [{ drum: 0, sound: 'open' }]
      }
    }
  },
  timpani: {
    timpani_1: {
      name: '🥁 Orchestral Roll & Strike',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'roll' }],
        2: [{ drum: 0, sound: 'roll' }],
        4: [{ drum: 0, sound: 'roll' }],
        6: [{ drum: 0, sound: 'roll' }],
        8: [{ drum: 0, sound: 'boom_strike' }]
      }
    },
    timpani_2: {
      name: '🥁 Suspense Pedal Rise',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'boom_strike' }],
        4: [{ drum: 0, sound: 'pedal_glide_up' }],
        8: [{ drum: 0, sound: 'pedal_glide_down' }],
        12: [{ drum: 0, sound: 'staccato_mute' }]
      }
    },
    timpani_3: {
      name: '🥁 Imperial March',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'staccato_mute' }],
        4: [{ drum: 0, sound: 'staccato_mute' }],
        8: [{ drum: 0, sound: 'staccato_mute' }],
        10: [{ drum: 0, sound: 'staccato_mute' }],
        12: [{ drum: 0, sound: 'staccato_mute' }],
        14: [{ drum: 0, sound: 'boom_strike' }]
      }
    },
    timpani_4: {
      name: '🥁 Symphonic Waltz',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'boom_strike' }],
        4: [{ drum: 0, sound: 'staccato_mute' }],
        8: [{ drum: 0, sound: 'staccato_mute' }]
      }
    },
    timpani_5: {
      name: '🥁 Bolero Kettle',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'staccato_mute' }],
        2: [{ drum: 0, sound: 'roll' }],
        3: [{ drum: 0, sound: 'roll' }],
        4: [{ drum: 0, sound: 'staccato_mute' }],
        6: [{ drum: 0, sound: 'staccato_mute' }],
        8: [{ drum: 0, sound: 'staccato_mute' }],
        10: [{ drum: 0, sound: 'staccato_mute' }],
        12: [{ drum: 0, sound: 'boom_strike' }]
      }
    },
    timpani_6: {
      name: '🥁 Staccato Gallop',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'staccato_mute' }],
        2: [{ drum: 0, sound: 'roll' }],
        3: [{ drum: 0, sound: 'staccato_mute' }],
        4: [{ drum: 0, sound: 'staccato_mute' }],
        6: [{ drum: 0, sound: 'roll' }],
        7: [{ drum: 0, sound: 'staccato_mute' }],
        8: [{ drum: 0, sound: 'boom_strike' }]
      }
    },
    timpani_7: {
      name: '🥁 Glissando Wave',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'pedal_glide_up' }],
        4: [{ drum: 0, sound: 'pedal_glide_down' }],
        8: [{ drum: 0, sound: 'pedal_glide_up' }],
        12: [{ drum: 0, sound: 'staccato_mute' }]
      }
    },
    timpani_8: {
      name: '🥁 Echoes of the Arena',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'boom_strike' }],
        3: [{ drum: 0, sound: 'staccato_mute' }],
        6: [{ drum: 0, sound: 'boom_strike' }],
        8: [{ drum: 0, sound: 'pedal_glide_up' }],
        12: [{ drum: 0, sound: 'staccato_mute' }]
      }
    },
    timpani_9: {
      name: '🥁 Cinematic Tension',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'roll' }],
        4: [{ drum: 0, sound: 'staccato_mute' }],
        8: [{ drum: 0, sound: 'roll' }],
        12: [{ drum: 0, sound: 'staccato_mute' }]
      }
    },
    timpani_10: {
      name: '🥁 Triumphant Finale',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'roll' }],
        2: [{ drum: 0, sound: 'roll' }],
        4: [{ drum: 0, sound: 'roll' }],
        6: [{ drum: 0, sound: 'roll' }],
        8: [{ drum: 0, sound: 'boom_strike' }],
        10: [{ drum: 0, sound: 'pedal_glide_up' }],
        12: [{ drum: 0, sound: 'staccato_mute' }],
        14: [{ drum: 0, sound: 'boom_strike' }]
      }
    }
  },
  kotsuzumi: {
    kotsuzumi_1: {
      name: '🥁 Traditional Noh Pon',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'pon_open' }],
        4: [{ drum: 0, sound: 'pu_squeeze' }],
        8: [{ drum: 0, sound: 'pon_open' }],
        12: [{ drum: 0, sound: 'ta_muffled' }]
      }
    },
    kotsuzumi_2: {
      name: '🥁 Kabuki Accent',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'iya_vocal' }],
        2: [{ drum: 0, sound: 'chi_slap' }],
        8: [{ drum: 0, sound: 'iya_vocal' }],
        10: [{ drum: 0, sound: 'pon_open' }]
      }
    },
    kotsuzumi_3: {
      name: '🥁 Squeezed Lament',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'pu_squeeze' }],
        4: [{ drum: 0, sound: 'ta_muffled' }],
        8: [{ drum: 0, sound: 'pu_squeeze' }],
        12: [{ drum: 0, sound: 'chi_slap' }]
      }
    },
    kotsuzumi_4: {
      name: '🥁 Solemn Ceremony',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'pon_open' }],
        6: [{ drum: 0, sound: 'ta_muffled' }],
        12: [{ drum: 0, sound: 'pu_squeeze' }]
      }
    },
    kotsuzumi_5: {
      name: '🥁 Spirited Noh-Gaku',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'pon_open' }],
        2: [{ drum: 0, sound: 'chi_slap' }],
        4: [{ drum: 0, sound: 'ta_muffled' }],
        6: [{ drum: 0, sound: 'pu_squeeze' }],
        8: [{ drum: 0, sound: 'pon_open' }],
        10: [{ drum: 0, sound: 'chi_slap' }],
        12: [{ drum: 0, sound: 'iya_vocal' }]
      }
    },
    kotsuzumi_6: {
      name: '🥁 The Red Lion',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'iya_vocal' }],
        4: [{ drum: 0, sound: 'chi_slap' }],
        6: [{ drum: 0, sound: 'chi_slap' }],
        8: [{ drum: 0, sound: 'pon_open' }],
        12: [{ drum: 0, sound: 'pu_squeeze' }]
      }
    },
    kotsuzumi_7: {
      name: '🥁 Cherry Blossom Noh',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'pon_open' }],
        4: [{ drum: 0, sound: 'ta_muffled' }],
        8: [{ drum: 0, sound: 'pon_open' }],
        12: [{ drum: 0, sound: 'pu_squeeze' }]
      }
    },
    kotsuzumi_8: {
      name: '🥁 Shogun Court March',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'ta_muffled' }],
        4: [{ drum: 0, sound: 'ta_muffled' }],
        8: [{ drum: 0, sound: 'pon_open' }],
        12: [{ drum: 0, sound: 'chi_slap' }]
      }
    },
    kotsuzumi_9: {
      name: '🥁 Samurai Call',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'iya_vocal' }],
        3: [{ drum: 0, sound: 'ta_muffled' }],
        6: [{ drum: 0, sound: 'pon_open' }],
        9: [{ drum: 0, sound: 'iya_vocal' }],
        12: [{ drum: 0, sound: 'chi_slap' }]
      }
    },
    kotsuzumi_10: {
      name: '🥁 Zen Garden Meditation',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'pon_open' }],
        8: [{ drum: 0, sound: 'pu_squeeze' }]
      }
    }
  },
  dhol: {
    dhol_1: {
      name: '🥁 Bhangra Blast',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'dagga_bass' }],
        2: [{ drum: 1, sound: 'tilli_slap' }],
        4: [{ drum: 1, sound: 'tilli_open' }],
        6: [{ drum: 1, sound: 'tilli_slap' }],
        8: [{ drum: 0, sound: 'dagga_bass' }],
        10: [{ drum: 1, sound: 'tilli_slap' }],
        12: [{ drum: 1, sound: 'tilli_open' }],
        14: [{ drum: 1, sound: 'tilli_slap' }]
      }
    },
    dhol_2: {
      name: '🥁 Giddha Beat',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'dagga_bass' }],
        4: [{ drum: 1, sound: 'tilli_open' }],
        8: [{ drum: 0, sound: 'dagga_bass' }],
        12: [{ drum: 1, sound: 'tilli_slap' }]
      }
    },
    dhol_3: {
      name: '🥁 Dhamal Trance',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'dagga_bass' }],
        3: [{ drum: 1, sound: 'tilli_open' }],
        6: [{ drum: 1, sound: 'tilli_slap' }],
        8: [{ drum: 0, sound: 'dagga_bass' }],
        11: [{ drum: 1, sound: 'tilli_open' }],
        14: [{ drum: 1, sound: 'tilli_slap' }]
      }
    },
    dhol_4: {
      name: '🥁 Harvest Celebration',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'dagga_bass' }],
        2: [{ drum: 0, sound: 'dagga_bass' }],
        4: [{ drum: 1, sound: 'tilli_open' }],
        8: [{ drum: 0, sound: 'dagga_bass' }],
        12: [{ drum: 1, sound: 'tilli_slap' }]
      }
    },
    dhol_5: {
      name: '🥁 Sangeet Entry',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'dagga_bass' }],
        4: [{ drum: 1, sound: 'tilli_slap' }],
        6: [{ drum: 1, sound: 'tilli_slap' }],
        8: [{ drum: 0, sound: 'dagga_bass' }],
        12: [{ drum: 1, sound: 'tilli_open' }]
      }
    },
    dhol_6: {
      name: '🥁 Lovers Echo (Heer)',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'dagga_bass' }],
        4: [{ drum: 1, sound: 'muffled_slap' }],
        8: [{ drum: 0, sound: 'dagga_bass' }],
        12: [{ drum: 1, sound: 'tilli_open' }]
      }
    },
    dhol_7: {
      name: '🥁 Kabaddi Rally',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'dagga_bass' }],
        2: [{ drum: 1, sound: 'tilli_slap' }],
        4: [{ drum: 0, sound: 'dagga_bass' }],
        6: [{ drum: 1, sound: 'tilli_slap' }],
        8: [{ drum: 0, sound: 'dagga_bass' }],
        10: [{ drum: 1, sound: 'tilli_slap' }],
        12: [{ drum: 1, sound: 'tremolo_roll' }]
      }
    },
    dhol_8: {
      name: '🥁 Heavy Lava-Thump',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'dagga_bass' }],
        4: [{ drum: 0, sound: 'dagga_bass' }],
        8: [{ drum: 0, sound: 'dagga_bass' }],
        12: [{ drum: 1, sound: 'tilli_slap' }]
      }
    },
    dhol_9: {
      name: '🥁 Punjab Folk Standard',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'dagga_bass' }],
        3: [{ drum: 1, sound: 'tilli_open' }],
        4: [{ drum: 1, sound: 'tilli_slap' }],
        8: [{ drum: 0, sound: 'dagga_bass' }],
        12: [{ drum: 1, sound: 'tilli_open' }]
      }
    },
    dhol_10: {
      name: '🥁 Thunderous Finale',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'dagga_bass' }],
        2: [{ drum: 1, sound: 'tremolo_roll' }],
        4: [{ drum: 1, sound: 'tremolo_roll' }],
        6: [{ drum: 1, sound: 'tremolo_roll' }],
        8: [{ drum: 0, sound: 'dagga_bass' }],
        12: [{ drum: 1, sound: 'tilli_slap' }]
      }
    }
  },
  agogo: {
    agogo_1: {
      name: '🥁 Samba de Roda',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'low_strike' }],
        3: [{ drum: 1, sound: 'high_strike' }],
        6: [{ drum: 0, sound: 'low_strike' }],
        8: [{ drum: 1, sound: 'high_strike' }],
        11: [{ drum: 0, sound: 'low_strike' }],
        14: [{ drum: 1, sound: 'high_strike' }]
      }
    },
    agogo_2: {
      name: '🥁 Capoeira Ring',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'low_strike' }],
        4: [{ drum: 0, sound: 'low_strike' }],
        8: [{ drum: 1, sound: 'high_strike' }],
        12: [{ drum: 0, sound: 'squeezed_click' }]
      }
    },
    agogo_3: {
      name: '🥁 Afoxé Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'low_strike' }],
        2: [{ drum: 1, sound: 'high_strike' }],
        4: [{ drum: 0, sound: 'low_strike' }],
        6: [{ drum: 1, sound: 'high_strike' }],
        8: [{ drum: 0, sound: 'low_strike' }],
        10: [{ drum: 1, sound: 'high_strike' }],
        12: [{ drum: 1, sound: 'high_strike' }]
      }
    },
    agogo_4: {
      name: '🥁 Maculelê Strike',
      stepCount: 16,
      steps: {
        0: [{ drum: 1, sound: 'high_strike' }],
        4: [{ drum: 0, sound: 'squeezed_click' }],
        8: [{ drum: 1, sound: 'high_strike' }],
        12: [{ drum: 0, sound: 'rim_ping' }]
      }
    },
    agogo_5: {
      name: '🥁 Maracatu Syncopated Drive',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'low_strike' }],
        3: [{ drum: 1, sound: 'high_strike' }],
        7: [{ drum: 0, sound: 'low_strike' }],
        10: [{ drum: 1, sound: 'high_strike' }],
        14: [{ drum: 0, sound: 'low_strike' }]
      }
    },
    agogo_6: {
      name: '🥁 Carnaval Street Parade',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'low_strike' }],
        2: [{ drum: 1, sound: 'high_strike' }],
        4: [{ drum: 0, sound: 'low_strike' }],
        8: [{ drum: 1, sound: 'high_strike' }],
        10: [{ drum: 0, sound: 'low_strike' }],
        12: [{ drum: 1, sound: 'roll' }]
      }
    },
    agogo_7: {
      name: '🥁 Bossa Nova Tick',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'low_strike' }],
        4: [{ drum: 1, sound: 'high_strike' }],
        8: [{ drum: 0, sound: 'low_strike' }],
        10: [{ drum: 1, sound: 'high_strike' }],
        14: [{ drum: 1, sound: 'high_strike' }]
      }
    },
    agogo_8: {
      name: '🥁 Salsa Bell Clave',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'low_strike' }],
        3: [{ drum: 1, sound: 'high_strike' }],
        6: [{ drum: 0, sound: 'low_strike' }],
        10: [{ drum: 1, sound: 'high_strike' }],
        12: [{ drum: 0, sound: 'low_strike' }]
      }
    },
    agogo_9: {
      name: '🥁 Baião Bounce',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'low_strike' }],
        4: [{ drum: 1, sound: 'high_strike' }],
        6: [{ drum: 0, sound: 'low_strike' }],
        8: [{ drum: 1, sound: 'high_strike' }],
        12: [{ drum: 0, sound: 'low_strike' }]
      }
    },
    agogo_10: {
      name: '🥁 Batucada Bell Storm',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'low_strike' }],
        2: [{ drum: 1, sound: 'high_strike' }],
        4: [{ drum: 0, sound: 'squeezed_click' }],
        6: [{ drum: 1, sound: 'high_strike' }],
        8: [{ drum: 0, sound: 'low_strike' }],
        10: [{ drum: 1, sound: 'roll' }],
        12: [{ drum: 1, sound: 'high_strike' }],
        14: [{ drum: 0, sound: 'rim_ping' }]
      }
    }
  },
  claves: {
    claves_1: {
      name: '🥁 Son Clave 3-2',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'strike_resonant' }],
        3: [{ drum: 0, sound: 'strike_resonant' }],
        6: [{ drum: 0, sound: 'strike_resonant' }],
        10: [{ drum: 0, sound: 'strike_resonant' }],
        12: [{ drum: 0, sound: 'strike_resonant' }]
      }
    },
    claves_2: {
      name: '🥁 Son Clave 2-3',
      stepCount: 16,
      steps: {
        2: [{ drum: 0, sound: 'strike_resonant' }],
        4: [{ drum: 0, sound: 'strike_resonant' }],
        8: [{ drum: 0, sound: 'strike_resonant' }],
        11: [{ drum: 0, sound: 'strike_resonant' }],
        14: [{ drum: 0, sound: 'strike_resonant' }]
      }
    },
    claves_3: {
      name: '🥁 Rumba Clave 3-2',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'strike_resonant' }],
        3: [{ drum: 0, sound: 'strike_resonant' }],
        7: [{ drum: 0, sound: 'strike_resonant' }],
        10: [{ drum: 0, sound: 'strike_resonant' }],
        12: [{ drum: 0, sound: 'strike_resonant' }]
      }
    },
    claves_4: {
      name: '🥁 Rumba Clave 2-3',
      stepCount: 16,
      steps: {
        2: [{ drum: 0, sound: 'strike_resonant' }],
        4: [{ drum: 0, sound: 'strike_resonant' }],
        8: [{ drum: 0, sound: 'strike_resonant' }],
        11: [{ drum: 0, sound: 'strike_resonant' }],
        13: [{ drum: 0, sound: 'strike_resonant' }]
      }
    },
    claves_5: {
      name: '🥁 Afro-Cuban 6/8 Clave',
      stepCount: 12,
      steps: {
        0: [{ drum: 0, sound: 'strike_resonant' }],
        2: [{ drum: 0, sound: 'strike_resonant' }],
        4: [{ drum: 0, sound: 'strike_resonant' }],
        7: [{ drum: 0, sound: 'strike_resonant' }],
        9: [{ drum: 0, sound: 'strike_resonant' }]
      }
    },
    claves_6: {
      name: '🥁 Bossa Nova Clave',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'strike_resonant' }],
        3: [{ drum: 0, sound: 'strike_resonant' }],
        6: [{ drum: 0, sound: 'strike_resonant' }],
        10: [{ drum: 0, sound: 'strike_resonant' }],
        13: [{ drum: 0, sound: 'strike_resonant' }]
      }
    },
    claves_7: {
      name: '🥁 Cha-Cha Block Clave',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'strike_resonant' }],
        4: [{ drum: 0, sound: 'strike_muffled' }],
        8: [{ drum: 0, sound: 'strike_resonant' }],
        12: [{ drum: 0, sound: 'strike_muffled' }]
      }
    },
    claves_8: {
      name: '🥁 Timba Jam Clave',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'strike_resonant' }],
        2: [{ drum: 0, sound: 'tap_soft' }],
        4: [{ drum: 0, sound: 'strike_resonant' }],
        6: [{ drum: 0, sound: 'strike_muffled' }],
        8: [{ drum: 0, sound: 'strike_resonant' }],
        12: [{ drum: 0, sound: 'roll_rapid' }]
      }
    },
    claves_9: {
      name: '🥁 Guaguancó Clave',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'strike_resonant' }],
        3: [{ drum: 0, sound: 'tap_soft' }],
        7: [{ drum: 0, sound: 'strike_resonant' }],
        10: [{ drum: 0, sound: 'strike_resonant' }],
        12: [{ drum: 0, sound: 'strike_muffled' }]
      }
    },
    claves_10: {
      name: '🥁 Woodland scrape & tap',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'strike_resonant' }],
        2: [{ drum: 0, sound: 'scrape' }],
        4: [{ drum: 0, sound: 'scrape' }],
        8: [{ drum: 0, sound: 'strike_muffled' }],
        10: [{ drum: 0, sound: 'tap_soft' }],
        12: [{ drum: 0, sound: 'scrape' }]
      }
    }
  }
};
