export const instrumentPatterns = {
  conga: {
    songo: {
      name: '🥁 Songo',
      stepCount: 16,
      steps: {
        0: [
          { drum: 1, sound: 'abierto' },
          { drum: 2, sound: 'bajo' }
        ],
        2: [{ drum: 1, sound: 'manoteo' }],
        3: [{ drum: 1, sound: 'abierto' }],
        4: [{ drum: 1, sound: 'tapado' }],
        6: [{ drum: 2, sound: 'abierto' }],
        8: [{ drum: 1, sound: 'abierto' }],
        10: [{ drum: 1, sound: 'manoteo' }],
        11: [{ drum: 2, sound: 'abierto' }],
        12: [{ drum: 1, sound: 'seco' }],
        14: [{ drum: 1, sound: 'abierto' }]
      }
    },
    tumbao: {
      name: '🥁 Tumbao (Classic 2-Drum)',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 1,
            sound: 'manoteo'
          }
        ],
        2: [
          {
            drum: 1,
            sound: 'manoteo'
          }
        ],
        4: [
          {
            drum: 1,
            sound: 'abierto'
          }
        ],
        6: [
          {
            drum: 1,
            sound: 'abierto'
          }
        ],
        8: [
          {
            drum: 1,
            sound: 'manoteo'
          }
        ],
        10: [
          {
            drum: 1,
            sound: 'manoteo'
          }
        ],
        12: [
          {
            drum: 1,
            sound: 'seco'
          }
        ],
        14: [
          {
            drum: 1,
            sound: 'abierto'
          }
        ]
      }
    },
    guaguanco: {
      name: '🥁 Guaguancó (Traditional)',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 1,
            sound: 'abierto'
          }
        ],
        3: [
          {
            drum: 1,
            sound: 'seco'
          }
        ],
        4: [
          {
            drum: 2,
            sound: 'abierto'
          }
        ],
        7: [
          {
            drum: 1,
            sound: 'abierto'
          }
        ],
        8: [
          {
            drum: 2,
            sound: 'abierto'
          }
        ],
        11: [
          {
            drum: 1,
            sound: 'seco'
          }
        ],
        12: [
          {
            drum: 2,
            sound: 'abierto'
          }
        ],
        15: [
          {
            drum: 1,
            sound: 'abierto'
          }
        ]
      }
    },
    cha_cha: {
      name: '🥁 Cha-Cha-Chá',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 2,
            sound: 'abierto'
          }
        ],
        4: [
          {
            drum: 1,
            sound: 'seco'
          }
        ],
        8: [
          {
            drum: 2,
            sound: 'abierto'
          }
        ],
        10: [
          {
            drum: 2,
            sound: 'abierto'
          }
        ],
        12: [
          {
            drum: 1,
            sound: 'abierto'
          }
        ],
        14: [
          {
            drum: 1,
            sound: 'abierto'
          }
        ]
      }
    },
    bolero: {
      name: '🥁 Bolero Conga',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 1,
            sound: 'abierto'
          }
        ],
        2: [
          {
            drum: 2,
            sound: 'tapado'
          }
        ],
        4: [
          {
            drum: 2,
            sound: 'seco'
          }
        ],
        6: [
          {
            drum: 2,
            sound: 'abierto'
          }
        ],
        8: [
          {
            drum: 1,
            sound: 'abierto'
          }
        ],
        10: [
          {
            drum: 2,
            sound: 'tapado'
          }
        ],
        12: [
          {
            drum: 2,
            sound: 'abierto'
          }
        ],
        14: [
          {
            drum: 2,
            sound: 'abierto'
          }
        ]
      }
    },
    bembe_6_8: {
      name: '🥁 Bembe (6/8 Polyrhythm)',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 2,
            sound: 'abierto'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'seco'
          }
        ],
        4: [
          {
            drum: 1,
            sound: 'abierto'
          }
        ],
        6: [
          {
            drum: 2,
            sound: 'abierto'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'seco'
          }
        ],
        10: [
          {
            drum: 1,
            sound: 'abierto'
          }
        ]
      }
    },
    samba_conga: {
      name: '🥁 Samba Conga (Batucada)',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 1,
            sound: 'abierto'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'seco'
          }
        ],
        4: [
          {
            drum: 1,
            sound: 'abierto'
          }
        ],
        6: [
          {
            drum: 1,
            sound: 'abierto'
          }
        ],
        8: [
          {
            drum: 2,
            sound: 'abierto'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'seco'
          }
        ],
        12: [
          {
            drum: 1,
            sound: 'manoteo'
          }
        ],
        14: [
          {
            drum: 1,
            sound: 'abierto'
          }
        ]
      }
    },
    afro_cuban_6_8: {
      name: '🥁 Afro-Cuban Columbia (6/8)',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 2,
            sound: 'abierto'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'seco'
          }
        ],
        4: [
          {
            drum: 1,
            sound: 'abierto'
          }
        ],
        6: [
          {
            drum: 2,
            sound: 'abierto'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'seco'
          }
        ],
        10: [
          {
            drum: 1,
            sound: 'abierto'
          }
        ]
      }
    },
    mozambique_conga: {
      name: '🥁 Mozambique Conga Pattern',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 1,
            sound: 'manoteo'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'seco'
          }
        ],
        4: [
          {
            drum: 1,
            sound: 'abierto'
          }
        ],
        6: [
          {
            drum: 2,
            sound: 'abierto'
          }
        ],
        8: [
          {
            drum: 1,
            sound: 'manoteo'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'seco'
          }
        ],
        12: [
          {
            drum: 1,
            sound: 'abierto'
          }
        ],
        13: [
          {
            drum: 2,
            sound: 'abierto'
          }
        ],
        14: [
          {
            drum: 1,
            sound: 'abierto'
          }
        ]
      }
    },
    comparsa_conga: {
      name: '🥁 Comparsa Conga Carnival',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 1,
            sound: 'abierto'
          }
        ],
        4: [
          {
            drum: 2,
            sound: 'seco'
          }
        ],
        8: [
          {
            drum: 1,
            sound: 'abierto'
          }
        ],
        12: [
          {
            drum: 2,
            sound: 'abierto'
          }
        ],
        14: [
          {
            drum: 1,
            sound: 'abierto'
          }
        ]
      }
    },
    songo_conga: {
      name: '🥁 Songo Conga Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 1,
            sound: 'manoteo'
          }
        ],
        2: [
          {
            drum: 2,
            sound: 'abierto'
          }
        ],
        4: [
          {
            drum: 1,
            sound: 'seco'
          }
        ],
        6: [
          {
            drum: 2,
            sound: 'abierto'
          }
        ],
        8: [
          {
            drum: 1,
            sound: 'manoteo'
          }
        ],
        10: [
          {
            drum: 1,
            sound: 'abierto'
          }
        ],
        12: [
          {
            drum: 1,
            sound: 'seco'
          }
        ],
        14: [
          {
            drum: 2,
            sound: 'abierto'
          }
        ]
      }
    }
  },
  djembe: {
    kuku: {
      name: '🥁 Kuku (Harvest)',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'bass'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'tone'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'tone'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'slap'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'bass'
          }
        ],
        11: [
          {
            drum: 0,
            sound: 'tone'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'tone'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'slap'
          }
        ]
      }
    },
    moribayassa: {
      name: '🥁 Moribayassa (Celebration)',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'bass'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'bass'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'slap'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'tone'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'tone'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'slap'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'tone'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'tone'
          }
        ]
      }
    },
    djole: {
      name: '🥁 Djole',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'bass'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'tone'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'tone'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'slap'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'slap'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'tone'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'tone'
          }
        ]
      }
    },
    fanga: {
      name: '🥁 Fanga (Welcome)',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'bass'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'tone'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'slap'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'bass'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'tone'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'slap'
          }
        ]
      }
    },
    soli: {
      name: '🥁 Soli (High Energy)',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'bass'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'tone'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'tone'
          }
        ],
        5: [
          {
            drum: 0,
            sound: 'slap'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'bass'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'tone'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'slap'
          }
        ],
        11: [
          {
            drum: 0,
            sound: 'tone'
          }
        ]
      }
    },
    yankadi: {
      name: '🥁 Yankadi (Sensual Walk)',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'bass'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'bass'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'tone'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'slap'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'tone'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'slap'
          }
        ]
      }
    },
    tiriba: {
      name: '🥁 Tiriba (Guinean Celebration)',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'bass'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'tone'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'slap'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'tone'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'bass'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'tone'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'slap'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'slap'
          }
        ]
      }
    },
    mendiriani: {
      name: '🥁 Mendiriani (Graceful Walk)',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'bass'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'slap'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'tone'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'bass'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'tone'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'slap'
          }
        ]
      }
    },
    kakilambe: {
      name: '🥁 Kakilambe (Spirited Dance)',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'bass'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'tone'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'slap'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'slap'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'bass'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'tone'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'tone'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'slap'
          }
        ]
      }
    },
    dununba: {
      name: '🥁 Dununba (Strong Man)',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'bass'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'tone'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'bass'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'slap'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'slap'
          }
        ]
      }
    }
  },
  bongo: {
    caballo: {
      name: '🥁 Caballo Rhythm',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'slap' }],
        3: [{ drum: 0, sound: 'open_tone' }],
        4: [{ drum: 0, sound: 'slap' }],
        7: [{ drum: 0, sound: 'open_tone' }],
        8: [{ drum: 0, sound: 'slap' }],
        11: [{ drum: 0, sound: 'open_tone' }],
        12: [{ drum: 1, sound: 'open_tone' }],
        15: [{ drum: 0, sound: 'open_tone' }]
      }
    },
    martillo: {
      name: '🥁 Martillo (Standard)',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'open_tone'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'glissando_de_dedo'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'slap'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'glissando_de_dedo'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'open_tone'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'glissando_de_dedo'
          }
        ],
        12: [
          {
            drum: 1,
            sound: 'open_tone'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'glissando_de_dedo'
          }
        ]
      }
    },
    changuie: {
      name: '🥁 Changüí',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 1,
            sound: 'open_tone'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'slap'
          }
        ],
        4: [
          {
            drum: 1,
            sound: 'open_tone'
          }
        ],
        7: [
          {
            drum: 0,
            sound: 'slap'
          }
        ],
        8: [
          {
            drum: 1,
            sound: 'open_tone'
          }
        ],
        11: [
          {
            drum: 0,
            sound: 'slap'
          }
        ],
        12: [
          {
            drum: 1,
            sound: 'open_tone'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'open_tone'
          }
        ]
      }
    },
    bolero_bongo: {
      name: '🥁 Bolero Martillo',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 1,
            sound: 'martillo'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'martillo'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'slap'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'open_tone'
          }
        ],
        8: [
          {
            drum: 1,
            sound: 'martillo'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'martillo'
          }
        ],
        12: [
          {
            drum: 1,
            sound: 'open_tone'
          }
        ],
        14: [
          {
            drum: 1,
            sound: 'open_tone'
          }
        ]
      }
    },
    bachata: {
      name: '🥁 Bachata Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 1,
            sound: 'martillo'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'open_tone'
          }
        ],
        4: [
          {
            drum: 1,
            sound: 'open_tone'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'slap'
          }
        ],
        8: [
          {
            drum: 1,
            sound: 'martillo'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'open_tone'
          }
        ],
        12: [
          {
            drum: 1,
            sound: 'open_tone'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'open_tone'
          }
        ]
      }
    },
    bongo_bell_campana: {
      name: '🥁 Campana Salsa Transition',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 1,
            sound: 'open_tone'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'slap'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'open_tone'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'open_tone'
          }
        ],
        8: [
          {
            drum: 1,
            sound: 'open_tone'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'slap'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'open_tone'
          }
        ],
        14: [
          {
            drum: 1,
            sound: 'open_tone'
          }
        ]
      }
    },
    cumbia_bongo: {
      name: '🥁 Colombian Cumbia',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 1,
            sound: 'open_tone'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'glissando_de_dedo'
          }
        ],
        4: [
          {
            drum: 1,
            sound: 'open_tone'
          }
        ],
        8: [
          {
            drum: 1,
            sound: 'open_tone'
          }
        ],
        11: [
          {
            drum: 0,
            sound: 'slap'
          }
        ],
        12: [
          {
            drum: 1,
            sound: 'open_tone'
          }
        ]
      }
    },
    son_montuno_bongo: {
      name: '🥁 Son Montuno Martillo Sync',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 1,
            sound: 'open_tone'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'slap'
          }
        ],
        4: [
          {
            drum: 1,
            sound: 'open_tone'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'open_tone'
          }
        ],
        8: [
          {
            drum: 1,
            sound: 'open_tone'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'slap'
          }
        ],
        12: [
          {
            drum: 1,
            sound: 'open_tone'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'open_tone'
          }
        ]
      }
    },
    reggaeton_bongo: {
      name: '🥁 Reggaeton Bongo Fusion',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 1,
            sound: 'martillo'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'open_tone'
          }
        ],
        8: [
          {
            drum: 1,
            sound: 'martillo'
          }
        ],
        11: [
          {
            drum: 0,
            sound: 'open_tone'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'slap'
          }
        ]
      }
    },
    bongo_abacua: {
      name: '🥁 Abakuá Bongo Play',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 1,
            sound: 'open_tone'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'slap'
          }
        ],
        4: [
          {
            drum: 1,
            sound: 'open_tone'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'open_tone'
          }
        ],
        8: [
          {
            drum: 1,
            sound: 'open_tone'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'slap'
          }
        ]
      }
    },
    bongo_rumba: {
      name: '🥁 Rumba Columbia Bongo',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 1,
            sound: 'martillo'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'open_tone'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'slap'
          }
        ],
        7: [
          {
            drum: 1,
            sound: 'open_tone'
          }
        ],
        8: [
          {
            drum: 1,
            sound: 'martillo'
          }
        ],
        11: [
          {
            drum: 0,
            sound: 'open_tone'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'slap'
          }
        ],
        15: [
          {
            drum: 1,
            sound: 'open_tone'
          }
        ]
      }
    }
  },
  bata: {
    toque_chango: {
      name: '🥁 Toque Changó',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 2,
            sound: 'chach_snap'
          },
          {
            drum: 0,
            sound: 'cuerpo_knock'
          }
        ],
        2: [
          {
            drum: 1,
            sound: 'tapado'
          },
          {
            drum: 0,
            sound: 'cuerpo_knock'
          }
        ],
        4: [
          {
            drum: 2,
            sound: 'abierto'
          },
          {
            drum: 1,
            sound: 'cuerpo_knock'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'cuerpo_knock'
          }
        ],
        8: [
          {
            drum: 2,
            sound: 'tapado'
          },
          {
            drum: 1,
            sound: 'tapado'
          }
        ],
        10: [
          {
            drum: 1,
            sound: 'cuerpo_knock'
          },
          {
            drum: 0,
            sound: 'cuerpo_knock'
          }
        ],
        12: [
          {
            drum: 2,
            sound: 'abierto'
          },
          {
            drum: 0,
            sound: 'cuerpo_knock'
          }
        ],
        14: [
          {
            drum: 1,
            sound: 'tapado'
          }
        ]
      }
    },
    toque_elegua: {
      name: '🥁 Toque Eleguá',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 2,
            sound: 'chach_snap'
          }
        ],
        3: [
          {
            drum: 1,
            sound: 'tapado'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'cuerpo_knock'
          }
        ],
        7: [
          {
            drum: 1,
            sound: 'abierto'
          }
        ],
        8: [
          {
            drum: 2,
            sound: 'tapado'
          }
        ],
        11: [
          {
            drum: 0,
            sound: 'cuerpo_knock'
          }
        ],
        12: [
          {
            drum: 2,
            sound: 'chach_snap'
          }
        ],
        15: [
          {
            drum: 1,
            sound: 'tapado'
          }
        ]
      }
    },
    toque_ochun: {
      name: '🥁 Toque Ochún',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 2,
            sound: 'tapado'
          }
        ],
        2: [
          {
            drum: 1,
            sound: 'tapado'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'cuerpo_knock'
          }
        ],
        6: [
          {
            drum: 1,
            sound: 'abierto'
          }
        ],
        8: [
          {
            drum: 2,
            sound: 'chach_snap'
          }
        ],
        10: [
          {
            drum: 1,
            sound: 'tapado'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'cuerpo_knock'
          }
        ],
        14: [
          {
            drum: 2,
            sound: 'tapado'
          }
        ]
      }
    },
    toque_yemaya: {
      name: '🥁 Toque Yemayá',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 2,
            sound: 'chach_snap'
          }
        ],
        4: [
          {
            drum: 1,
            sound: 'tapado'
          }
        ],
        6: [
          {
            drum: 1,
            sound: 'tapado'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'cuerpo_knock'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'cuerpo_knock'
          }
        ],
        12: [
          {
            drum: 2,
            sound: 'tapado'
          }
        ],
        14: [
          {
            drum: 1,
            sound: 'abierto'
          }
        ]
      }
    },
    toque_babalu: {
      name: '🥁 Toque Babalú Ayé (Arará)',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 2,
            sound: 'chach_snap'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'cuerpo_knock'
          }
        ],
        4: [
          {
            drum: 1,
            sound: 'tapado'
          }
        ],
        6: [
          {
            drum: 2,
            sound: 'abierto'
          }
        ],
        8: [
          {
            drum: 2,
            sound: 'chach_snap'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'cuerpo_knock'
          }
        ],
        12: [
          {
            drum: 1,
            sound: 'abierto'
          }
        ],
        14: [
          {
            drum: 2,
            sound: 'tapado'
          }
        ]
      }
    },
    toque_ogun: {
      name: '🥁 Toque Ogún (Warrior)',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 2,
            sound: 'chach_snap'
          },
          {
            drum: 0,
            sound: 'cuerpo_knock'
          }
        ],
        3: [
          {
            drum: 1,
            sound: 'tapado'
          }
        ],
        6: [
          {
            drum: 2,
            sound: 'abierto'
          },
          {
            drum: 0,
            sound: 'cuerpo_knock'
          }
        ],
        9: [
          {
            drum: 1,
            sound: 'tapado'
          }
        ]
      }
    },
    toque_oba: {
      name: '🥁 Toque Obba (Royalty)',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 2,
            sound: 'chach_snap'
          }
        ],
        3: [
          {
            drum: 1,
            sound: 'tapado'
          },
          {
            drum: 0,
            sound: 'cuerpo_knock'
          }
        ],
        6: [
          {
            drum: 2,
            sound: 'abierto'
          }
        ],
        9: [
          {
            drum: 1,
            sound: 'tapado'
          },
          {
            drum: 0,
            sound: 'cuerpo_knock'
          }
        ]
      }
    },
    toque_oya: {
      name: '🥁 Toque Oyá (Wind & Storm)',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 2,
            sound: 'chach_snap'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'cuerpo_knock'
          }
        ],
        4: [
          {
            drum: 1,
            sound: 'tapado'
          }
        ],
        6: [
          {
            drum: 2,
            sound: 'tapado'
          }
        ],
        8: [
          {
            drum: 1,
            sound: 'abierto'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'cuerpo_knock'
          }
        ],
        12: [
          {
            drum: 2,
            sound: 'chach_snap'
          }
        ],
        14: [
          {
            drum: 1,
            sound: 'tapado'
          }
        ]
      }
    },
    toque_osun: {
      name: '🥁 Toque Osun (The Staff)',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 2,
            sound: 'chach_snap'
          }
        ],
        3: [
          {
            drum: 1,
            sound: 'tapado'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'cuerpo_knock'
          }
        ],
        9: [
          {
            drum: 1,
            sound: 'abierto'
          }
        ]
      }
    },
    toque_orunmila: {
      name: '🥁 Toque Orunmila (The Oracle)',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 2,
            sound: 'chach_snap'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'cuerpo_knock'
          }
        ],
        4: [
          {
            drum: 1,
            sound: 'tapado'
          }
        ],
        8: [
          {
            drum: 2,
            sound: 'chach_snap'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'cuerpo_knock'
          }
        ],
        12: [
          {
            drum: 1,
            sound: 'tapado'
          }
        ],
        14: [
          {
            drum: 1,
            sound: 'abierto'
          }
        ]
      }
    }
  },
  pandero: {
    plena_sencilla: {
      name: '🥁 Plena Sencilla',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 2,
            sound: 'open_edge_tone'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'thigh_slap_pop'
          }
        ],
        4: [
          {
            drum: 1,
            sound: 'open_edge_tone'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'open_edge_tone'
          }
        ],
        8: [
          {
            drum: 2,
            sound: 'open_edge_tone'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'thigh_slap_pop'
          }
        ],
        12: [
          {
            drum: 1,
            sound: 'open_edge_tone'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'thigh_slap_pop'
          }
        ]
      }
    },
    plena_rapida: {
      name: '🥁 Plena Corrida',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 2,
            sound: 'open_edge_tone'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'thigh_slap_pop'
          }
        ],
        4: [
          {
            drum: 1,
            sound: 'open_edge_tone'
          }
        ],
        5: [
          {
            drum: 0,
            sound: 'rim_jingle_strike'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'open_edge_tone'
          }
        ],
        8: [
          {
            drum: 2,
            sound: 'open_edge_tone'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'thigh_slap_pop'
          }
        ],
        12: [
          {
            drum: 1,
            sound: 'open_edge_tone'
          }
        ],
        13: [
          {
            drum: 0,
            sound: 'rim_jingle_strike'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'thigh_slap_pop'
          }
        ]
      }
    },
    plena_buleador: {
      name: '🥁 Plena Buleador Solo',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 2,
            sound: 'sub_bass_hand_cup'
          }
        ],
        4: [
          {
            drum: 2,
            sound: 'open_edge_tone'
          }
        ],
        8: [
          {
            drum: 2,
            sound: 'sub_bass_hand_cup'
          }
        ],
        12: [
          {
            drum: 2,
            sound: 'open_edge_tone'
          }
        ]
      }
    },
    samba_de_roda_pandeiro: {
      name: '🥁 Samba de Roda Pandeiro',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 2,
            sound: 'sub_bass_hand_cup'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'rim_jingle_strike'
          }
        ],
        4: [
          {
            drum: 1,
            sound: 'open_edge_tone'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'thigh_slap_pop'
          }
        ],
        8: [
          {
            drum: 2,
            sound: 'sub_bass_hand_cup'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'rim_jingle_strike'
          }
        ],
        12: [
          {
            drum: 1,
            sound: 'open_edge_tone'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'thigh_slap_pop'
          }
        ]
      }
    },
    plena_holandesa: {
      name: '🥁 Plena Holandesa Syncopation',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 2,
            sound: 'open_edge_tone'
          }
        ],
        2: [
          {
            drum: 1,
            sound: 'open_edge_tone'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'thigh_slap_pop'
          }
        ],
        6: [
          {
            drum: 1,
            sound: 'open_edge_tone'
          }
        ],
        8: [
          {
            drum: 2,
            sound: 'open_edge_tone'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'thigh_slap_pop'
          }
        ],
        12: [
          {
            drum: 1,
            sound: 'open_edge_tone'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'rim_jingle_strike'
          }
        ]
      }
    },
    choro_pandeiro: {
      name: '🥁 Classical Choro Jingle',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 2,
            sound: 'sub_bass_hand_cup'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'rim_jingle_strike'
          }
        ],
        4: [
          {
            drum: 1,
            sound: 'open_edge_tone'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'rim_jingle_strike'
          }
        ],
        8: [
          {
            drum: 2,
            sound: 'open_edge_tone'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'rim_jingle_strike'
          }
        ],
        12: [
          {
            drum: 1,
            sound: 'open_edge_tone'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'rim_jingle_strike'
          }
        ]
      }
    },
    baiao_pandeiro: {
      name: '🥁 Baião Jingle Dance',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 2,
            sound: 'sub_bass_hand_cup'
          }
        ],
        4: [
          {
            drum: 1,
            sound: 'open_edge_tone'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'thigh_slap_pop'
          }
        ],
        8: [
          {
            drum: 2,
            sound: 'sub_bass_hand_cup'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'rim_jingle_strike'
          }
        ],
        12: [
          {
            drum: 1,
            sound: 'open_edge_tone'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'thigh_slap_pop'
          }
        ]
      }
    },
    samba_reggae_pandeiro: {
      name: '🥁 Samba Reggae Pandeiro',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 2,
            sound: 'sub_bass_hand_cup'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'rim_jingle_strike'
          }
        ],
        4: [
          {
            drum: 1,
            sound: 'open_edge_tone'
          }
        ],
        8: [
          {
            drum: 2,
            sound: 'sub_bass_hand_cup'
          }
        ],
        11: [
          {
            drum: 0,
            sound: 'thigh_slap_pop'
          }
        ],
        12: [
          {
            drum: 1,
            sound: 'open_edge_tone'
          }
        ]
      }
    },
    bossa_pandeiro: {
      name: '🥁 Bossa Nova Pandeiro',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 2,
            sound: 'sub_bass_hand_cup'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'rim_jingle_strike'
          }
        ],
        8: [
          {
            drum: 1,
            sound: 'open_edge_tone'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'rim_jingle_strike'
          }
        ]
      }
    },
    frevo_pandeiro: {
      name: '🥁 Frevo Fast Beat',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 2,
            sound: 'sub_bass_hand_cup'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'thigh_slap_pop'
          }
        ],
        4: [
          {
            drum: 1,
            sound: 'open_edge_tone'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'rim_jingle_strike'
          }
        ],
        8: [
          {
            drum: 2,
            sound: 'sub_bass_hand_cup'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'thigh_slap_pop'
          }
        ],
        12: [
          {
            drum: 1,
            sound: 'open_edge_tone'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'rim_jingle_strike'
          }
        ]
      }
    }
  },
  barril: {
    sica: {
      name: '🥁 Bomba Sicá',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 1,
            sound: 'abierto'
          }
        ],
        3: [
          {
            drum: 1,
            sound: 'cu'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'cu'
          }
        ],
        8: [
          {
            drum: 1,
            sound: 'abierto'
          }
        ],
        11: [
          {
            drum: 1,
            sound: 'cu'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'cu'
          }
        ]
      }
    },
    yuba: {
      name: '🥁 Bomba Yubá',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 1,
            sound: 'abierto'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'cu'
          }
        ],
        4: [
          {
            drum: 1,
            sound: 'cu'
          }
        ],
        6: [
          {
            drum: 1,
            sound: 'abierto'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'cu'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'cu'
          }
        ]
      }
    },
    cuembe: {
      name: '🥁 Bomba Cuembé',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 1,
            sound: 'abierto'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'cu'
          }
        ],
        4: [
          {
            drum: 1,
            sound: 'cu'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'cu'
          }
        ],
        8: [
          {
            drum: 1,
            sound: 'abierto'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'cu'
          }
        ],
        12: [
          {
            drum: 1,
            sound: 'cu'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'cu'
          }
        ]
      }
    },
    holandes: {
      name: '🥁 Bomba Holandés',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 1,
            sound: 'abierto'
          }
        ],
        2: [
          {
            drum: 1,
            sound: 'abierto'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'cu'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'cu'
          }
        ],
        8: [
          {
            drum: 1,
            sound: 'cu'
          }
        ],
        10: [
          {
            drum: 1,
            sound: 'cu'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'cu'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'cu'
          }
        ]
      }
    },
    seis_corrido: {
      name: '🥁 Bomba Seis Corrido (Loíza)',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 1,
            sound: 'abierto'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'cu'
          }
        ],
        4: [
          {
            drum: 1,
            sound: 'cu'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'cu'
          }
        ],
        8: [
          {
            drum: 1,
            sound: 'abierto'
          }
        ],
        10: [
          {
            drum: 1,
            sound: 'cu'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'cu'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'cu'
          }
        ]
      }
    },
    bomba_lero: {
      name: '🥁 Bomba Leró (Elegant)',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 1,
            sound: 'abierto'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'cu'
          }
        ],
        4: [
          {
            drum: 1,
            sound: 'cu'
          }
        ],
        6: [
          {
            drum: 1,
            sound: 'cu'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'cu'
          }
        ]
      }
    },
    bomba_hoyope: {
      name: '🥁 Bomba Hoyo de Manatí',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 1,
            sound: 'abierto'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'cu'
          }
        ],
        4: [
          {
            drum: 1,
            sound: 'cu'
          }
        ],
        6: [
          {
            drum: 1,
            sound: 'abierto'
          }
        ],
        8: [
          {
            drum: 1,
            sound: 'cu'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'cu'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'cu'
          }
        ],
        14: [
          {
            drum: 1,
            sound: 'cu'
          }
        ]
      }
    },
    bomba_calinda: {
      name: '🥁 Bomba Calindá (Haitian Roots)',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 1,
            sound: 'abierto'
          }
        ],
        3: [
          {
            drum: 1,
            sound: 'cu'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'cu'
          }
        ],
        8: [
          {
            drum: 1,
            sound: 'abierto'
          }
        ],
        9: [
          {
            drum: 1,
            sound: 'cu'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'cu'
          }
        ]
      }
    },
    bomba_guembe: {
      name: '🥁 Bomba Güembé',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 1,
            sound: 'abierto'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'cu'
          }
        ],
        4: [
          {
            drum: 1,
            sound: 'cu'
          }
        ],
        8: [
          {
            drum: 1,
            sound: 'abierto'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'cu'
          }
        ]
      }
    },
    bomba_cuembe_fast: {
      name: '🥁 Bomba Cuembé Fast',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 1,
            sound: 'abierto'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'cu'
          }
        ],
        4: [
          {
            drum: 1,
            sound: 'cu'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'cu'
          }
        ],
        8: [
          {
            drum: 1,
            sound: 'abierto'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'cu'
          }
        ],
        12: [
          {
            drum: 1,
            sound: 'cu'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'cu'
          }
        ]
      }
    }
  },
  bombo: {
    chacarera: {
      name: '🥁 Chacarera',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 1,
            sound: 'golpe_de_parche'
          }
        ],
        2: [
          {
            drum: 1,
            sound: 'golpe_de_parche'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'golpe_de_aro'
          }
        ],
        6: [
          {
            drum: 1,
            sound: 'golpe_de_parche'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'golpe_de_aro'
          }
        ],
        10: [
          {
            drum: 1,
            sound: 'golpe_de_parche'
          }
        ]
      }
    },
    zamba: {
      name: '🥁 Zamba',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'golpe_de_parche'
          }
        ],
        3: [
          {
            drum: 1,
            sound: 'golpe_de_aro'
          }
        ],
        4: [
          {
            drum: 1,
            sound: 'golpe_de_parche'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'golpe_de_aro'
          }
        ],
        10: [
          {
            drum: 1,
            sound: 'golpe_de_parche'
          }
        ]
      }
    },
    gato: {
      name: '🥁 Gato Rhythm',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 1,
            sound: 'golpe_de_parche'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'golpe_de_aro'
          }
        ],
        4: [
          {
            drum: 1,
            sound: 'golpe_de_parche'
          }
        ],
        6: [
          {
            drum: 1,
            sound: 'golpe_de_parche'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'golpe_de_aro'
          }
        ],
        10: [
          {
            drum: 1,
            sound: 'golpe_de_parche'
          }
        ]
      }
    },
    malambo_bombo: {
      name: '🥁 Argentine Malambo Solo',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'golpe_de_parche'
          }
        ],
        2: [
          {
            drum: 1,
            sound: 'golpe_de_parche'
          }
        ],
        3: [
          {
            drum: 1,
            sound: 'golpe_de_aro'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'golpe_de_aro'
          }
        ],
        8: [
          {
            drum: 1,
            sound: 'golpe_de_parche'
          }
        ],
        9: [
          {
            drum: 1,
            sound: 'golpe_de_aro'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'golpe_de_aro'
          }
        ]
      }
    },
    carnavalito_bombo: {
      name: '🥁 Carnavalito (Andean Hop)',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'golpe_de_parche'
          }
        ],
        3: [
          {
            drum: 1,
            sound: 'golpe_de_parche'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'golpe_de_aro'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'golpe_de_parche'
          }
        ],
        11: [
          {
            drum: 1,
            sound: 'golpe_de_parche'
          }
        ],
        12: [
          {
            drum: 1,
            sound: 'golpe_de_aro'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'golpe_de_aro'
          }
        ]
      }
    },
    vidala_bombo: {
      name: '🥁 Vidala Melancholic March',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'golpe_de_parche'
          }
        ],
        4: [
          {
            drum: 1,
            sound: 'golpe_de_aro'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'golpe_de_aro'
          }
        ]
      }
    },
    candombe_bombo_ar: {
      name: '🥁 Argentine Candombe Murga',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'golpe_de_parche'
          }
        ],
        2: [
          {
            drum: 1,
            sound: 'golpe_de_parche'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'golpe_de_aro'
          }
        ],
        6: [
          {
            drum: 1,
            sound: 'golpe_de_parche'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'golpe_de_parche'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'golpe_de_parche'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'golpe_de_aro'
          }
        ],
        14: [
          {
            drum: 1,
            sound: 'golpe_de_parche'
          }
        ]
      }
    },
    baile_cito: {
      name: '🥁 Bailecito Boliviano',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 1,
            sound: 'golpe_de_parche'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'golpe_de_parche'
          }
        ],
        6: [
          {
            drum: 1,
            sound: 'golpe_de_parche'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'golpe_de_aro'
          }
        ]
      }
    },
    bombo_baguala: {
      name: '🥁 Baguala Northern Chant',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'golpe_de_parche'
          }
        ],
        4: [
          {
            drum: 1,
            sound: 'golpe_de_parche'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'golpe_de_aro'
          }
        ]
      }
    },
    cueca_bombo: {
      name: '🥁 Cueca Chilena/Boliviana',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 1,
            sound: 'golpe_de_parche'
          }
        ],
        2: [
          {
            drum: 1,
            sound: 'golpe_de_parche'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'golpe_de_parche'
          }
        ],
        6: [
          {
            drum: 1,
            sound: 'golpe_de_parche'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'golpe_de_aro'
          }
        ],
        10: [
          {
            drum: 1,
            sound: 'golpe_de_parche'
          }
        ]
      }
    }
  },
  tabla: {
    keharwa: {
      name: '🥁 Keharwa Taal',
      stepCount: 8,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'bayan_ga_ghe'
          },
          {
            drum: 1,
            sound: 'dayan_tun'
          }
        ],
        1: [
          {
            drum: 1,
            sound: 'dayan_na_ta'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'dayan_tin'
          }
        ],
        3: [
          {
            drum: 1,
            sound: 'dayan_tun'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'bayan_ga_ghe'
          }
        ],
        5: [
          {
            drum: 1,
            sound: 'dayan_na_ta'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'dayan_tin'
          }
        ],
        7: [
          {
            drum: 1,
            sound: 'dayan_tun'
          }
        ]
      }
    },
    teental: {
      name: '🥁 Teental (16 Beats)',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'bayan_ga_ghe'
          },
          {
            drum: 1,
            sound: 'dayan_tun'
          }
        ],
        2: [
          {
            drum: 1,
            sound: 'dayan_na_ta'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'dayan_tin'
          }
        ],
        6: [
          {
            drum: 1,
            sound: 'dayan_tun'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'bayan_ga_ghe'
          },
          {
            drum: 1,
            sound: 'dayan_tun'
          }
        ],
        10: [
          {
            drum: 1,
            sound: 'dayan_na_ta'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'dayan_tin'
          }
        ],
        14: [
          {
            drum: 1,
            sound: 'dayan_tun'
          }
        ]
      }
    },
    dadra: {
      name: '🥁 Dadra Taal',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'bayan_ga_ghe'
          },
          {
            drum: 1,
            sound: 'dayan_tun'
          }
        ],
        2: [
          {
            drum: 1,
            sound: 'dayan_na_ta'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'dayan_tin'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'bayan_ga_ghe'
          }
        ],
        8: [
          {
            drum: 1,
            sound: 'dayan_tun'
          }
        ],
        10: [
          {
            drum: 1,
            sound: 'dayan_na_ta'
          }
        ]
      }
    },
    rupak: {
      name: '🥁 Rupak Taal',
      stepCount: 14,
      steps: {
        0: [
          {
            drum: 1,
            sound: 'dayan_na_ta'
          }
        ],
        2: [
          {
            drum: 1,
            sound: 'dayan_tin'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'dayan_tin'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'bayan_ga_ghe'
          }
        ],
        8: [
          {
            drum: 1,
            sound: 'dayan_tun'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'bayan_ga_ghe'
          }
        ],
        12: [
          {
            drum: 1,
            sound: 'dayan_tun'
          }
        ]
      }
    },
    jhaptal: {
      name: '🥁 Jhaptal (10-Beat Cycle)',
      stepCount: 10,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'bayan_ga_ghe'
          },
          {
            drum: 1,
            sound: 'dayan_tun'
          }
        ],
        2: [
          {
            drum: 1,
            sound: 'dayan_na_ta'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'dayan_tin'
          }
        ],
        5: [
          {
            drum: 0,
            sound: 'bayan_ga_ghe'
          },
          {
            drum: 1,
            sound: 'dayan_tun'
          }
        ],
        7: [
          {
            drum: 1,
            sound: 'dayan_na_ta'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'dayan_tin'
          }
        ]
      }
    },
    kaherva_fast: {
      name: '🥁 Fast Folk Fusion Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'bayan_ga_ghe'
          },
          {
            drum: 1,
            sound: 'dayan_tun'
          }
        ],
        2: [
          {
            drum: 1,
            sound: 'dayan_na_ta'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'bayan_ga_ghe'
          },
          {
            drum: 1,
            sound: 'dayan_tun'
          }
        ],
        6: [
          {
            drum: 1,
            sound: 'dayan_na_ta'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'dayan_tin'
          }
        ],
        10: [
          {
            drum: 1,
            sound: 'dayan_tun'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'bayan_ga_ghe'
          },
          {
            drum: 1,
            sound: 'dayan_tun'
          }
        ],
        14: [
          {
            drum: 1,
            sound: 'dayan_tun'
          }
        ]
      }
    },
    ektaal: {
      name: '🥁 Ektaal (12-Beat Classical)',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'bayan_ga_ghe'
          },
          {
            drum: 1,
            sound: 'dayan_tun'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'dayan_tin'
          }
        ],
        4: [
          {
            drum: 1,
            sound: 'dayan_na_ta'
          }
        ],
        6: [
          {
            drum: 1,
            sound: 'dayan_tun'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'bayan_ga_ghe'
          }
        ],
        10: [
          {
            drum: 1,
            sound: 'dayan_na_ta'
          }
        ]
      }
    },
    bhajani: {
      name: '🥁 Bhajani (Devotional 8-Beat)',
      stepCount: 8,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'bayan_ga_ghe'
          },
          {
            drum: 1,
            sound: 'dayan_tun'
          }
        ],
        2: [
          {
            drum: 1,
            sound: 'dayan_na_ta'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'dayan_tin'
          },
          {
            drum: 1,
            sound: 'dayan_tun'
          }
        ],
        6: [
          {
            drum: 1,
            sound: 'dayan_na_ta'
          }
        ]
      }
    },
    tintal_fast: {
      name: '🥁 Tintal Fast Drut Cycle',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'bayan_ga_ghe'
          },
          {
            drum: 1,
            sound: 'dayan_tun'
          }
        ],
        2: [
          {
            drum: 1,
            sound: 'dayan_na_ta'
          }
        ],
        4: [
          {
            drum: 1,
            sound: 'dayan_tin'
          }
        ],
        6: [
          {
            drum: 1,
            sound: 'dayan_tun'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'bayan_ga_ghe'
          },
          {
            drum: 1,
            sound: 'dayan_tun'
          }
        ],
        10: [
          {
            drum: 1,
            sound: 'dayan_na_ta'
          }
        ],
        12: [
          {
            drum: 1,
            sound: 'dayan_tin'
          }
        ],
        14: [
          {
            drum: 1,
            sound: 'dayan_tun'
          }
        ]
      }
    },
    roopak_classical: {
      name: '🥁 Classical Roopak Variations',
      stepCount: 14,
      steps: {
        0: [
          {
            drum: 1,
            sound: 'dayan_na_ta'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'bayan_ga_ghe'
          }
        ],
        4: [
          {
            drum: 1,
            sound: 'dayan_tun'
          }
        ],
        6: [
          {
            drum: 1,
            sound: 'dayan_na_ta'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'bayan_ga_ghe'
          }
        ],
        10: [
          {
            drum: 1,
            sound: 'dayan_tun'
          }
        ],
        12: [
          {
            drum: 1,
            sound: 'dayan_tin'
          }
        ]
      }
    }
  },
  darbuka: {
    maqsum: {
      name: '🥁 Maqsum (Standard)',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'dum'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'under_rim_snap'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'slap'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'dum'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'under_rim_snap'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'slap'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'under_rim_snap'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'finger_roll'
          }
        ]
      }
    },
    baladi: {
      name: '🥁 Baladi (Bass)',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'dum'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'dum'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'under_rim_snap'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'dum'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'under_rim_snap'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'slap'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'dum'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'finger_roll'
          }
        ]
      }
    },
    saidi: {
      name: "🥁 Sa'idi",
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'dum'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'under_rim_snap'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'dum'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'dum'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'under_rim_snap'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'slap'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'under_rim_snap'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'finger_roll'
          }
        ]
      }
    },
    chiftetelli: {
      name: '🥁 Chiftetelli (Slow)',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'dum'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'under_rim_snap'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'under_rim_snap'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'dum'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'dum'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'under_rim_snap'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'finger_roll'
          }
        ]
      }
    },
    karsilama: {
      name: '🥁 Karsilama (9/8 Turkish)',
      stepCount: 9,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'dum'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'under_rim_snap'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'dum'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'under_rim_snap'
          }
        ],
        7: [
          {
            drum: 0,
            sound: 'under_rim_snap'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'under_rim_snap'
          }
        ]
      }
    },
    ayoub: {
      name: '🥁 Ayoub (Trance/Zar Rhythm)',
      stepCount: 8,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'dum'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'under_rim_snap'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'under_rim_snap'
          }
        ],
        7: [
          {
            drum: 0,
            sound: 'under_rim_snap'
          }
        ]
      }
    },
    malfuf: {
      name: '🥁 Malfuf (Upbeat/Fast)',
      stepCount: 8,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'dum'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'under_rim_snap'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'under_rim_snap'
          }
        ]
      }
    },
    masmoudi: {
      name: '🥁 Masmoudi (Heavy/Slow)',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'dum'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'dum'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'under_rim_snap'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'under_rim_snap'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'finger_roll'
          }
        ]
      }
    },
    sombati: {
      name: '🥁 Sombati (Medium/Syncopated)',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'dum'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'finger_roll'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'under_rim_snap'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'dum'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'under_rim_snap'
          }
        ]
      }
    },
    fallahi: {
      name: '🥁 Fallahi (Farmers/Rapid)',
      stepCount: 8,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'dum'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'under_rim_snap'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'finger_roll'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'under_rim_snap'
          }
        ]
      }
    }
  },
  timbales: {
    cascara: {
      name: '🥁 Cáscara (Paila)',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'paila'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'paila'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'paila'
          }
        ],
        5: [
          {
            drum: 0,
            sound: 'paila'
          }
        ],
        7: [
          {
            drum: 0,
            sound: 'paila'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'paila'
          }
        ],
        11: [
          {
            drum: 0,
            sound: 'paila'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'paila'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'paila'
          }
        ]
      }
    },
    mambo_bell: {
      name: '🥁 Mambo Bell Pattern',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'bell'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'bell'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'bell'
          }
        ],
        5: [
          {
            drum: 0,
            sound: 'bell'
          }
        ],
        7: [
          {
            drum: 0,
            sound: 'bell'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'bell'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'bell'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'bell'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'bell'
          }
        ]
      }
    },
    songo: {
      name: '🥁 Songo Timbales',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'rimshot'
          }
        ],
        3: [
          {
            drum: 1,
            sound: 'timbales_open'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'rimshot'
          }
        ],
        8: [
          {
            drum: 1,
            sound: 'timbales_open'
          }
        ],
        11: [
          {
            drum: 0,
            sound: 'rimshot'
          }
        ],
        14: [
          {
            drum: 1,
            sound: 'timbales_open'
          }
        ]
      }
    },
    mozambique: {
      name: '🥁 Mozambique (Caravan Style)',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'bell'
          }
        ],
        2: [
          {
            drum: 1,
            sound: 'timbales_open'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'rimshot'
          }
        ],
        5: [
          {
            drum: 0,
            sound: 'paila'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'bell'
          }
        ],
        10: [
          {
            drum: 1,
            sound: 'timbales_open'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'bell'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'paila'
          }
        ]
      }
    },
    chacha_bell_timb: {
      name: '🥁 Classic Cha-Cha Bell',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'bell'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'bell'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'bell'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'paila'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'bell'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'bell'
          }
        ]
      }
    },
    abaku_bell: {
      name: '🥁 Abakuá Bell & Rim Pattern',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'bell'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'paila'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'bell'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'bell'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'paila'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'rimshot'
          }
        ]
      }
    },
    merengue_timb: {
      name: '🥁 Merengue Caballo Speedup',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'paila'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'paila'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'rimshot'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'paila'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'paila'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'paila'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'rimshot'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'paila'
          }
        ]
      }
    },
    timbales_salsa_solo: {
      name: '🥁 High-Energy Salsa Solo',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'rimshot'
          }
        ],
        2: [
          {
            drum: 1,
            sound: 'timbales_open'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'paila'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'bell'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'rimshot'
          }
        ],
        10: [
          {
            drum: 1,
            sound: 'timbales_open'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'paila'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'bell'
          }
        ]
      }
    },
    timbales_cumbia: {
      name: '🥁 Simple Cumbia Timbales',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'bell'
          }
        ],
        4: [
          {
            drum: 1,
            sound: 'timbales_open'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'bell'
          }
        ],
        12: [
          {
            drum: 1,
            sound: 'timbales_open'
          }
        ]
      }
    },
    timbales_danzon: {
      name: '🥁 Danzón Baqueteo Style',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'paila'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'rimshot'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'paila'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'paila'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'rimshot'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'paila'
          }
        ]
      }
    }
  },
  cajon: {
    rumba_flamenca: {
      name: '🥁 Rumba Flamenca',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass_tone' }],
        2: [{ drum: 0, sound: 'high_finger_snap' }],
        3: [{ drum: 0, sound: 'corner_slap' }],
        4: [{ drum: 0, sound: 'tapado' }],
        6: [{ drum: 0, sound: 'high_finger_snap' }],
        7: [{ drum: 0, sound: 'corner_slap' }],
        8: [{ drum: 0, sound: 'bass_tone' }],
        10: [{ drum: 0, sound: 'high_finger_snap' }],
        11: [{ drum: 0, sound: 'corner_slap' }],
        12: [{ drum: 0, sound: 'tapado' }],
        14: [{ drum: 0, sound: 'high_finger_snap' }],
        15: [{ drum: 0, sound: 'bass_tone' }]
      }
    },
    flamenco: {
      name: '🥁 Flamenco Rumba',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'bass_tone'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'tapado'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'bass_tone'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'tapado'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'corner_slap'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'tapado'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'corner_slap'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'tapado'
          }
        ]
      }
    },
    peruano: {
      name: '🥁 Festejo Peruano',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'bass_tone'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'tapado'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'bass_tone'
          }
        ],
        5: [
          {
            drum: 0,
            sound: 'corner_slap'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'bass_tone'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'tapado'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'corner_slap'
          }
        ],
        11: [
          {
            drum: 0,
            sound: 'corner_slap'
          }
        ]
      }
    },
    pop_rock: {
      name: '🥁 Pop/Rock Backbeat',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'bass_tone'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'tapado'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'corner_slap'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'tapado'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'bass_tone'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'bass_tone'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'corner_slap'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'tapado'
          }
        ]
      }
    },
    lando_peruano: {
      name: '🥁 Landó (Afro-Peruvian)',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'bass_tone'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'tapado'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'corner_slap'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'bass_tone'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'tapado'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'corner_slap'
          }
        ]
      }
    },
    acoustic_boom_bap: {
      name: '🥁 Acoustic Hip-Hop Boom Bap',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'bass_tone'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'corner_slap'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'bass_tone'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'bass_tone'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'corner_slap'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'tapado'
          }
        ]
      }
    },
    buleria_cajon: {
      name: '🥁 Bulería (12-Beat Flamenco)',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'corner_slap'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'corner_slap'
          }
        ],
        5: [
          {
            drum: 0,
            sound: 'bass_tone'
          }
        ],
        7: [
          {
            drum: 0,
            sound: 'corner_slap'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'corner_slap'
          }
        ],
        11: [
          {
            drum: 0,
            sound: 'bass_tone'
          }
        ]
      }
    },
    reggae_cajon: {
      name: '🥁 One Drop Reggae',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'tapado'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'bass_tone'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'corner_slap'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'tapado'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'bass_tone'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'corner_slap'
          }
        ]
      }
    },
    funk_cajon: {
      name: '🥁 Linear Funk Cajon',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'bass_tone'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'tapado'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'corner_slap'
          }
        ],
        7: [
          {
            drum: 0,
            sound: 'tapado'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'bass_tone'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'bass_tone'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'corner_slap'
          }
        ],
        15: [
          {
            drum: 0,
            sound: 'tapado'
          }
        ]
      }
    },
    bossa_cajon: {
      name: '🥁 Soft Bossa Nova Cajon',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'bass_tone'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'tapado'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'corner_slap'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'bass_tone'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'tapado'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'corner_slap'
          }
        ]
      }
    },
    hiphop_cajon: {
      name: '🥁 Hip-Hop Boom Bap Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'bass_tone'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'corner_slap'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'bass_tone'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'bass_tone'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'corner_slap'
          }
        ]
      }
    }
  },
  candombe: {
    candombe_groove: {
      name: '🥁 Candombe Traditional Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 2,
            sound: 'palo'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'palo'
          }
        ],
        4: [
          {
            drum: 1,
            sound: 'mano'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'palo'
          }
        ],
        8: [
          {
            drum: 2,
            sound: 'palo'
          }
        ],
        10: [
          {
            drum: 1,
            sound: 'palo'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'palo'
          }
        ],
        14: [
          {
            drum: 1,
            sound: 'mano'
          }
        ]
      }
    },
    candombe_cuareim: {
      name: '🥁 Barrio Cuareim (Piano Heavy)',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 2,
            sound: 'palo'
          }
        ],
        4: [
          {
            drum: 2,
            sound: 'palo'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'palo'
          }
        ],
        8: [
          {
            drum: 2,
            sound: 'palo'
          }
        ],
        10: [
          {
            drum: 1,
            sound: 'mano'
          }
        ],
        12: [
          {
            drum: 2,
            sound: 'palo'
          }
        ]
      }
    },
    candombe_ansina: {
      name: '🥁 Barrio Ansina (Repique Sync)',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 2,
            sound: 'palo'
          }
        ],
        3: [
          {
            drum: 1,
            sound: 'mano'
          }
        ],
        4: [
          {
            drum: 1,
            sound: 'palo'
          }
        ],
        8: [
          {
            drum: 2,
            sound: 'palo'
          }
        ],
        11: [
          {
            drum: 1,
            sound: 'mano'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'palo'
          }
        ]
      }
    },
    candombe_cordon: {
      name: '🥁 Barrio Cordón (Speedy Sync)',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 2,
            sound: 'palo'
          }
        ],
        3: [
          {
            drum: 1,
            sound: 'mano'
          }
        ],
        5: [
          {
            drum: 0,
            sound: 'palo'
          }
        ],
        8: [
          {
            drum: 2,
            sound: 'palo'
          }
        ],
        11: [
          {
            drum: 1,
            sound: 'mano'
          }
        ],
        13: [
          {
            drum: 0,
            sound: 'palo'
          }
        ]
      }
    },
    candombe_comparsa: {
      name: '🥁 Comparsa Street Parade',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 2,
            sound: 'palo'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'palo'
          }
        ],
        4: [
          {
            drum: 1,
            sound: 'mano'
          }
        ],
        7: [
          {
            drum: 0,
            sound: 'palo'
          }
        ],
        8: [
          {
            drum: 2,
            sound: 'palo'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'palo'
          }
        ],
        12: [
          {
            drum: 1,
            sound: 'mano'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'palo'
          }
        ]
      }
    },
    candombe_recompilacion: {
      name: '🥁 Candombe Modern Recompilación',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 2,
            sound: 'palo'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'palo'
          }
        ],
        8: [
          {
            drum: 1,
            sound: 'mano'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'palo'
          }
        ]
      }
    },
    candombe_piano: {
      name: '🥁 Piano Rhythm Focus',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 2,
            sound: 'palo'
          }
        ],
        3: [
          {
            drum: 2,
            sound: 'palo'
          }
        ],
        6: [
          {
            drum: 2,
            sound: 'palo'
          }
        ],
        8: [
          {
            drum: 2,
            sound: 'palo'
          }
        ],
        11: [
          {
            drum: 2,
            sound: 'palo'
          }
        ],
        14: [
          {
            drum: 2,
            sound: 'palo'
          }
        ]
      }
    },
    candombe_chico: {
      name: '🥁 Chico Constant Ride',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 1,
            sound: 'mano'
          }
        ],
        4: [
          {
            drum: 1,
            sound: 'palo'
          }
        ],
        8: [
          {
            drum: 1,
            sound: 'mano'
          }
        ],
        12: [
          {
            drum: 1,
            sound: 'palo'
          }
        ]
      }
    },
    candombe_repique: {
      name: '🥁 Repique Playful Accent',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'palo'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'mano'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'palo'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'palo'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'mano'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'palo'
          }
        ]
      }
    },
    candombe_rapido: {
      name: '🥁 Carnaval Fast Parade',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 2,
            sound: 'palo'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'palo'
          }
        ],
        4: [
          {
            drum: 1,
            sound: 'mano'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'palo'
          }
        ],
        8: [
          {
            drum: 2,
            sound: 'palo'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'palo'
          }
        ],
        12: [
          {
            drum: 1,
            sound: 'mano'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'palo'
          }
        ]
      }
    }
  },
  gwoka: {
    lewoz: {
      name: '🥁 Léwoz (Traditional)',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 1,
            sound: 'boul'
          }
        ],
        2: [
          {
            drum: 1,
            sound: 'mak'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'mak'
          }
        ],
        6: [
          {
            drum: 1,
            sound: 'mak'
          }
        ],
        8: [
          {
            drum: 1,
            sound: 'boul'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'mak'
          }
        ],
        12: [
          {
            drum: 1,
            sound: 'mak'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'mak'
          }
        ]
      }
    },
    kaladja: {
      name: '🥁 Kaladja (Slow Expressive)',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 1,
            sound: 'boul'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'mak'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'mak'
          }
        ],
        6: [
          {
            drum: 1,
            sound: 'mak'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'mak'
          }
        ]
      }
    },
    toumtoum: {
      name: '🥁 Toumtoum (Festive Carnival)',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 1,
            sound: 'boul'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'mak'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'mak'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'mak'
          }
        ],
        8: [
          {
            drum: 1,
            sound: 'boul'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'mak'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'mak'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'mak'
          }
        ]
      }
    },
    gravel: {
      name: '🥁 Graval (Spirited Battle)',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 1,
            sound: 'boul'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'mak'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'mak'
          }
        ],
        7: [
          {
            drum: 0,
            sound: 'mak'
          }
        ],
        8: [
          {
            drum: 1,
            sound: 'boul'
          }
        ],
        11: [
          {
            drum: 0,
            sound: 'mak'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'mak'
          }
        ],
        15: [
          {
            drum: 0,
            sound: 'mak'
          }
        ]
      }
    },
    padjanbel: {
      name: '🥁 Padjanbel (Agricultural Chant)',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 1,
            sound: 'boul'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'mak'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'mak'
          }
        ],
        6: [
          {
            drum: 1,
            sound: 'boul'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'mak'
          }
        ]
      }
    },
    gwoka_graval_fast: {
      name: '🥁 Graval High Speed Battle',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 1,
            sound: 'boul'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'mak'
          }
        ],
        4: [
          {
            drum: 1,
            sound: 'mak'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'mak'
          }
        ],
        8: [
          {
            drum: 1,
            sound: 'boul'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'mak'
          }
        ],
        12: [
          {
            drum: 1,
            sound: 'mak'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'mak'
          }
        ]
      }
    },
    gwoka_mende: {
      name: '🥁 Mende Traditional Dance',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 1,
            sound: 'boul'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'mak'
          }
        ],
        6: [
          {
            drum: 1,
            sound: 'mak'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'mak'
          }
        ]
      }
    },
    gwoka_wolo: {
      name: '🥁 Wolo Elegant Waltz',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 1,
            sound: 'boul'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'mak'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'mak'
          }
        ]
      }
    },
    gwoka_makenda: {
      name: '🥁 Makenda Modern Sync',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 1,
            sound: 'boul'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'mak'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'mak'
          }
        ],
        8: [
          {
            drum: 1,
            sound: 'boul'
          }
        ],
        11: [
          {
            drum: 0,
            sound: 'mak'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'mak'
          }
        ]
      }
    },
    gwoka_gwobas: {
      name: '🥁 Gwobas Deep Resonance',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 1,
            sound: 'boul'
          }
        ],
        4: [
          {
            drum: 1,
            sound: 'boul'
          }
        ],
        8: [
          {
            drum: 1,
            sound: 'boul'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'mak'
          }
        ]
      }
    }
  },
  tanbou: {
    beguine: {
      name: '🥁 Martinique Beguine',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'edge_finger_snap'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'edge_finger_snap'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'hand_foot_pitch_bend_press'
          }
        ],
        7: [
          {
            drum: 0,
            sound: 'edge_finger_snap'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'edge_finger_snap'
          }
        ],
        11: [
          {
            drum: 0,
            sound: 'center_palm_strike'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'hand_foot_pitch_bend_press'
          }
        ],
        15: [
          {
            drum: 0,
            sound: 'side_stave_strike'
          }
        ]
      }
    },
    yanvalou: {
      name: '🥁 Yanvalou (Sacred Rolling)',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'edge_finger_snap'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'edge_finger_snap'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'side_stave_strike'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'hand_foot_pitch_bend_press'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'edge_finger_snap'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'side_stave_strike'
          }
        ]
      }
    },
    rara: {
      name: '🥁 Haitian Rara Street March',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'edge_finger_snap'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'hand_foot_pitch_bend_press'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'edge_finger_snap'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'edge_finger_snap'
          }
        ],
        11: [
          {
            drum: 0,
            sound: 'hand_foot_pitch_bend_press'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'side_stave_strike'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'edge_finger_snap'
          }
        ]
      }
    },
    ibon: {
      name: '🥁 Ibo (Stately Haitian Pride)',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'edge_finger_snap'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'edge_finger_snap'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'hand_foot_pitch_bend_press'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'edge_finger_snap'
          }
        ]
      }
    },
    kongo_rhythm: {
      name: '🥁 Kongo (Playful Rhythm)',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'edge_finger_snap'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'edge_finger_snap'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'hand_foot_pitch_bend_press'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'edge_finger_snap'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'edge_finger_snap'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'hand_foot_pitch_bend_press'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'edge_finger_snap'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'side_stave_strike'
          }
        ]
      }
    },
    tanbou_kaladja: {
      name: '🥁 Tanbou Kaladja Slow',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'edge_finger_snap'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'edge_finger_snap'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'hand_foot_pitch_bend_press'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'edge_finger_snap'
          }
        ]
      }
    },
    tanbou_mazurka: {
      name: '🥁 Martinique Creole Mazurka',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'edge_finger_snap'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'edge_finger_snap'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'hand_foot_pitch_bend_press'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'edge_finger_snap'
          }
        ]
      }
    },
    tanbou_beguine_fast: {
      name: '🥁 Tanbou Beguine Fast',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'edge_finger_snap'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'edge_finger_snap'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'hand_foot_pitch_bend_press'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'edge_finger_snap'
          }
        ],
        11: [
          {
            drum: 0,
            sound: 'edge_finger_snap'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'hand_foot_pitch_bend_press'
          }
        ]
      }
    },
    tanbou_merengue: {
      name: '🥁 Tanbou Creole Merengue',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'edge_finger_snap'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'hand_foot_pitch_bend_press'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'edge_finger_snap'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'edge_finger_snap'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'hand_foot_pitch_bend_press'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'edge_finger_snap'
          }
        ]
      }
    },
    tanbou_rara_vibe: {
      name: '🥁 Tanbou Sacred Street Rara',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'edge_finger_snap'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'edge_finger_snap'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'hand_foot_pitch_bend_press'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'edge_finger_snap'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'edge_finger_snap'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'hand_foot_pitch_bend_press'
          }
        ]
      }
    }
  },
  chinese: {
    festive_dagu: {
      name: '🥁 Festive Opera Beats',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 2,
            sound: 'center_strike'
          }
        ],
        2: [
          {
            drum: 1,
            sound: 'aro'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'stick_shaft_clack'
          }
        ],
        6: [
          {
            drum: 1,
            sound: 'aro'
          }
        ],
        8: [
          {
            drum: 2,
            sound: 'center_strike'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'stick_shaft_clack'
          }
        ],
        12: [
          {
            drum: 1,
            sound: 'stick_shaft_clack'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'stick_shaft_clack'
          }
        ]
      }
    },
    lion_dance: {
      name: '🥁 Southern Lion Dance Accent',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 2,
            sound: 'center_strike'
          }
        ],
        2: [
          {
            drum: 2,
            sound: 'center_strike'
          }
        ],
        4: [
          {
            drum: 1,
            sound: 'stick_shaft_clack'
          }
        ],
        6: [
          {
            drum: 1,
            sound: 'aro'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'stick_shaft_clack'
          }
        ],
        10: [
          {
            drum: 2,
            sound: 'center_strike'
          }
        ],
        12: [
          {
            drum: 1,
            sound: 'stick_shaft_clack'
          }
        ],
        14: [
          {
            drum: 1,
            sound: 'aro'
          }
        ]
      }
    },
    peking_opera: {
      name: '🥁 Peking Opera Battle Beat',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'stick_shaft_clack'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'stick_shaft_clack'
          }
        ],
        3: [
          {
            drum: 1,
            sound: 'aro'
          }
        ],
        6: [
          {
            drum: 2,
            sound: 'center_strike'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'stick_shaft_clack'
          }
        ],
        9: [
          {
            drum: 1,
            sound: 'aro'
          }
        ]
      }
    },
    dragon_boat: {
      name: '🥁 Dragon Boat Racing Drum',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 2,
            sound: 'center_strike'
          }
        ],
        2: [
          {
            drum: 1,
            sound: 'aro'
          }
        ],
        4: [
          {
            drum: 1,
            sound: 'aro'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'stick_shaft_clack'
          }
        ],
        8: [
          {
            drum: 2,
            sound: 'center_strike'
          }
        ],
        10: [
          {
            drum: 1,
            sound: 'aro'
          }
        ],
        12: [
          {
            drum: 1,
            sound: 'aro'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'stick_shaft_clack'
          }
        ]
      }
    },
    dagu_triumph: {
      name: '🥁 Ancient Victory Drum March',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 2,
            sound: 'center_strike'
          }
        ],
        2: [
          {
            drum: 2,
            sound: 'center_strike'
          }
        ],
        4: [
          {
            drum: 1,
            sound: 'stick_shaft_clack'
          }
        ],
        6: [
          {
            drum: 1,
            sound: 'aro'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'stick_shaft_clack'
          }
        ],
        10: [
          {
            drum: 1,
            sound: 'stick_shaft_clack'
          }
        ]
      }
    },
    chinese_opera_accent: {
      name: '🥁 Beijing Opera Accent',
      stepCount: 8,
      steps: {
        0: [
          {
            drum: 1,
            sound: 'aro'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'stick_shaft_clack'
          }
        ],
        4: [
          {
            drum: 1,
            sound: 'aro'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'stick_shaft_clack'
          }
        ]
      }
    },
    dagu_processional: {
      name: '🥁 Imperial Palace Processional',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 2,
            sound: 'center_strike'
          }
        ],
        4: [
          {
            drum: 1,
            sound: 'aro'
          }
        ],
        8: [
          {
            drum: 2,
            sound: 'center_strike'
          }
        ],
        12: [
          {
            drum: 1,
            sound: 'aro'
          }
        ]
      }
    },
    dragon_boat_sprint: {
      name: '🥁 Fast Dragon Boat Sprint',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 2,
            sound: 'center_strike'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'stick_shaft_clack'
          }
        ],
        4: [
          {
            drum: 2,
            sound: 'center_strike'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'stick_shaft_clack'
          }
        ],
        8: [
          {
            drum: 2,
            sound: 'center_strike'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'stick_shaft_clack'
          }
        ],
        12: [
          {
            drum: 2,
            sound: 'center_strike'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'stick_shaft_clack'
          }
        ]
      }
    },
    chinese_court_dance: {
      name: '🥁 Ancient Palace Court Dance',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 2,
            sound: 'center_strike'
          }
        ],
        3: [
          {
            drum: 1,
            sound: 'aro'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'stick_shaft_clack'
          }
        ],
        9: [
          {
            drum: 1,
            sound: 'aro'
          }
        ]
      }
    },
    dagu_ritual_charge: {
      name: '🥁 Sacred Mountain Ritual Charge',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 2,
            sound: 'center_strike'
          }
        ],
        4: [
          {
            drum: 2,
            sound: 'center_strike'
          }
        ],
        8: [
          {
            drum: 2,
            sound: 'center_strike'
          }
        ],
        10: [
          {
            drum: 1,
            sound: 'aro'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'stick_shaft_clack'
          }
        ]
      }
    }
  },
  daiko: {
    matsuri_taiko: {
      name: '🥁 Matsuri (Festival Taiko)',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 1,
            sound: 'don'
          },
          {
            drum: 2,
            sound: 'don'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'don'
          }
        ],
        4: [
          {
            drum: 1,
            sound: 'bachi_clack'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'don'
          }
        ],
        8: [
          {
            drum: 1,
            sound: 'don'
          }
        ],
        10: [
          {
            drum: 2,
            sound: 'don'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'bachi_clack'
          }
        ],
        14: [
          {
            drum: 1,
            sound: 'don'
          }
        ]
      }
    },
    miyake_daiko: {
      name: '🥁 Miyake Daiko (Lateral Stance)',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 1,
            sound: 'don'
          }
        ],
        3: [
          {
            drum: 2,
            sound: 'don'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'don'
          }
        ],
        6: [
          {
            drum: 1,
            sound: 'don'
          }
        ],
        9: [
          {
            drum: 2,
            sound: 'don'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'don'
          }
        ]
      }
    },
    chichibu_yatai: {
      name: '🥁 Chichibu Yatai (Rapid Roll)',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'bachi_clack'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'don'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'bachi_clack'
          }
        ],
        5: [
          {
            drum: 0,
            sound: 'don'
          }
        ],
        8: [
          {
            drum: 1,
            sound: 'don'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'don'
          }
        ],
        12: [
          {
            drum: 1,
            sound: 'don'
          }
        ],
        14: [
          {
            drum: 2,
            sound: 'don'
          }
        ]
      }
    },
    hachijo_daiko: {
      name: '🥁 Hachijo Daiko (Swinging Bounce)',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 1,
            sound: 'don'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'don'
          }
        ],
        4: [
          {
            drum: 1,
            sound: 'bachi_clack'
          }
        ],
        7: [
          {
            drum: 0,
            sound: 'don'
          }
        ],
        8: [
          {
            drum: 2,
            sound: 'don'
          }
        ],
        11: [
          {
            drum: 0,
            sound: 'don'
          }
        ],
        12: [
          {
            drum: 1,
            sound: 'bachi_clack'
          }
        ],
        14: [
          {
            drum: 1,
            sound: 'don'
          }
        ]
      }
    },
    o_daiko_solo: {
      name: '🥁 Big O-Daiko Solo Strike',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 1,
            sound: 'don'
          },
          {
            drum: 2,
            sound: 'don'
          }
        ],
        3: [
          {
            drum: 1,
            sound: 'don'
          }
        ],
        6: [
          {
            drum: 1,
            sound: 'don'
          },
          {
            drum: 2,
            sound: 'don'
          }
        ],
        9: [
          {
            drum: 2,
            sound: 'don'
          }
        ]
      }
    },
    taiko_shakedown: {
      name: '🥁 Giant Taiko Shakedown',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 1,
            sound: 'don'
          }
        ],
        4: [
          {
            drum: 2,
            sound: 'don'
          }
        ],
        8: [
          {
            drum: 1,
            sound: 'don'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'don'
          }
        ]
      }
    },
    kumi_daiko_groove: {
      name: '🥁 Ensemble Kumi-Daiko Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 1,
            sound: 'don'
          }
        ],
        4: [
          {
            drum: 2,
            sound: 'don'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'don'
          }
        ],
        12: [
          {
            drum: 1,
            sound: 'bachi_clack'
          }
        ]
      }
    },
    taiko_thunder_clap: {
      name: '🥁 Shinto Thunder Clap',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 1,
            sound: 'don'
          },
          {
            drum: 2,
            sound: 'don'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'don'
          }
        ],
        12: [
          {
            drum: 1,
            sound: 'bachi_clack'
          }
        ]
      }
    },
    matsuri_frenzy: {
      name: '🥁 Matsuri High Speed Frenzy',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 1,
            sound: 'don'
          }
        ],
        2: [
          {
            drum: 2,
            sound: 'don'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'don'
          }
        ],
        6: [
          {
            drum: 1,
            sound: 'bachi_clack'
          }
        ],
        8: [
          {
            drum: 1,
            sound: 'don'
          }
        ],
        10: [
          {
            drum: 2,
            sound: 'don'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'don'
          }
        ],
        14: [
          {
            drum: 1,
            sound: 'bachi_clack'
          }
        ]
      }
    },
    daiko_spirit_march: {
      name: '🥁 Ancestral Spirit March',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 1,
            sound: 'don'
          }
        ],
        4: [
          {
            drum: 2,
            sound: 'don'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'don'
          }
        ]
      }
    }
  },
  bodhran: {
    bodhran_reel: {
      name: '🥁 Bodhrán Lively Reel',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'back_hand_pressure_damp'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'tipper_roll'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'back_hand_pitch_glide'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'tipper_roll'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'back_hand_pressure_damp'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'back_hand_pressure_damp'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'back_hand_pitch_glide'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'tipper_roll'
          }
        ]
      }
    },
    irish_jig: {
      name: '🥁 Irish Jig (6/8 Rolling)',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'back_hand_pressure_damp'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'tipper_roll'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'back_hand_pitch_glide'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'back_hand_pressure_damp'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'tipper_roll'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'back_hand_pressure_damp'
          }
        ]
      }
    },
    celtic_fusion: {
      name: '🥁 Celtic Pop Fusion',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'back_hand_pressure_damp'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'back_hand_pitch_glide'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'back_hand_pressure_damp'
          }
        ],
        7: [
          {
            drum: 0,
            sound: 'back_hand_pitch_glide'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'back_hand_pressure_damp'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'tipper_roll'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'back_hand_pressure_damp'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'tipper_roll'
          }
        ]
      }
    },
    hornpipe_bodhran: {
      name: '🥁 Irish Hornpipe (Dotted Swing)',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'back_hand_pressure_damp'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'tipper_roll'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'back_hand_pitch_glide'
          }
        ],
        7: [
          {
            drum: 0,
            sound: 'tipper_roll'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'back_hand_pressure_damp'
          }
        ],
        11: [
          {
            drum: 0,
            sound: 'tipper_roll'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'back_hand_pressure_damp'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'tipper_roll'
          }
        ]
      }
    },
    slip_jig_bodhran: {
      name: '🥁 Slip Jig (9/8 Soft Rolling)',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'back_hand_pressure_damp'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'tipper_roll'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'back_hand_pitch_glide'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'back_hand_pressure_damp'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'tipper_roll'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'back_hand_pressure_damp'
          }
        ]
      }
    },
    bodhran_polka: {
      name: '🥁 Kerry Polka Lively Beat',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'back_hand_pressure_damp'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'back_hand_pitch_glide'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'back_hand_pressure_damp'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'back_hand_pressure_damp'
          }
        ]
      }
    },
    bodhran_slide: {
      name: '🥁 Irish Slide (12/8 Rolling)',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'back_hand_pressure_damp'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'tipper_roll'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'back_hand_pitch_glide'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'back_hand_pressure_damp'
          }
        ]
      }
    },
    celtic_heartbeat: {
      name: '🥁 Sacred Celtic Heartbeat',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'back_hand_pressure_damp'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'back_hand_pressure_damp'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'back_hand_pressure_damp'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'back_hand_pitch_glide'
          }
        ]
      }
    },
    bodhran_barndance: {
      name: '🥁 Barn Dance Steady Tap',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'back_hand_pressure_damp'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'tipper_roll'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'back_hand_pitch_glide'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'back_hand_pressure_damp'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'tipper_roll'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'back_hand_pressure_damp'
          }
        ]
      }
    },
    irish_march_bodhran: {
      name: '🥁 Traditional Irish Military March',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'back_hand_pressure_damp'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'back_hand_pitch_glide'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'back_hand_pressure_damp'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'back_hand_pressure_damp'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'back_hand_pressure_damp'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'back_hand_pitch_glide'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'back_hand_pressure_damp'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'back_hand_pressure_damp'
          }
        ]
      }
    }
  },
  talkingdrum: {
    tama_groove: {
      name: '🥁 Tama Talking Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'non_dominant_finger_tap'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'shell_knock'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'squeeze_cord_pitch_glide'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'curved_stick_strike'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'non_dominant_finger_tap'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'shell_knock'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'squeeze_cord_pitch_glide'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'non_dominant_finger_tap'
          }
        ]
      }
    },
    mbalax_tama: {
      name: '🥁 Wolof Mbalax Dance',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'shell_knock'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'squeeze_cord_pitch_glide'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'squeeze_cord_pitch_glide'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'curved_stick_strike'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'shell_knock'
          }
        ],
        11: [
          {
            drum: 0,
            sound: 'squeeze_cord_pitch_glide'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'non_dominant_finger_tap'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'shell_knock'
          }
        ]
      }
    },
    praise_drum: {
      name: '🥁 Yoruba Royal Praise Chant',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'non_dominant_finger_tap'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'shell_knock'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'curved_stick_strike'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'non_dominant_finger_tap'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'shell_knock'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'squeeze_cord_pitch_glide'
          }
        ]
      }
    },
    fuji_tama: {
      name: '🥁 Fuji Tama Accent',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'non_dominant_finger_tap'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'squeeze_cord_pitch_glide'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'shell_knock'
          }
        ],
        7: [
          {
            drum: 0,
            sound: 'non_dominant_finger_tap'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'non_dominant_finger_tap'
          }
        ],
        11: [
          {
            drum: 0,
            sound: 'squeeze_cord_pitch_glide'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'shell_knock'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'non_dominant_finger_tap'
          }
        ]
      }
    },
    highlife_tama: {
      name: '🥁 Highlife Groove Accent',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'shell_knock'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'squeeze_cord_pitch_glide'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'curved_stick_strike'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'shell_knock'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'shell_knock'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'squeeze_cord_pitch_glide'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'curved_stick_strike'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'non_dominant_finger_tap'
          }
        ]
      }
    },
    yoruba_talking_dialogue: {
      name: '🥁 Yoruba Talking Dialogue',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'non_dominant_finger_tap'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'shell_knock'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'squeeze_cord_pitch_glide'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'non_dominant_finger_tap'
          }
        ],
        11: [
          {
            drum: 0,
            sound: 'shell_knock'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'squeeze_cord_pitch_glide'
          }
        ]
      }
    },
    dun_dun_royal: {
      name: '🥁 Dun-dun Royal Entrance',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'non_dominant_finger_tap'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'shell_knock'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'non_dominant_finger_tap'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'squeeze_cord_pitch_glide'
          }
        ]
      }
    },
    talking_drum_echo: {
      name: '🥁 Forest Whispering Echoes',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'non_dominant_finger_tap'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'curved_stick_strike'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'shell_knock'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'non_dominant_finger_tap'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'curved_stick_strike'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'squeeze_cord_pitch_glide'
          }
        ]
      }
    },
    tama_playful_bounce: {
      name: '🥁 Playful Tama Bounce',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'shell_knock'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'squeeze_cord_pitch_glide'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'curved_stick_strike'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'non_dominant_finger_tap'
          }
        ]
      }
    },
    talking_drum_call: {
      name: '🥁 Ancestral Village Call',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'non_dominant_finger_tap'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'non_dominant_finger_tap'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'shell_knock'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'squeeze_cord_pitch_glide'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'squeeze_cord_pitch_glide'
          }
        ]
      }
    }
  },
  cuica: {
    cuica_samba: {
      name: '🥁 Cuíca Samba Accent',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'external_thumb_press'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'external_thumb_press'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'external_thumb_press'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'external_thumb_press'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'external_thumb_press'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'external_thumb_press'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'external_thumb_press'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'external_thumb_press'
          }
        ]
      }
    },
    cuica_samba_solo: {
      name: '🥁 Samba de Enredo Solo',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'external_thumb_press'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'external_thumb_press'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'external_thumb_press'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'external_thumb_press'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'external_thumb_press'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'external_thumb_press'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'external_thumb_press'
          }
        ],
        13: [
          {
            drum: 0,
            sound: 'external_thumb_press'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'external_thumb_press'
          }
        ]
      }
    },
    bossa_nova_whisper: {
      name: '🥁 Bossa Nova Whisper',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'external_thumb_press'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'external_thumb_press'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'external_thumb_press'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'external_thumb_press'
          }
        ]
      }
    },
    pagode_cuica: {
      name: '🥁 Pagode Backyard Session',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'external_thumb_press'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'external_thumb_press'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'external_thumb_press'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'external_thumb_press'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'external_thumb_press'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'external_thumb_press'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'external_thumb_press'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'external_thumb_press'
          }
        ]
      }
    },
    samba_reggae_cuica: {
      name: '🥁 Samba Reggae Bounce',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'external_thumb_press'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'external_thumb_press'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'external_thumb_press'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'external_thumb_press'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'external_thumb_press'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'external_thumb_press'
          }
        ]
      }
    },
    cuica_carnival_frenzy: {
      name: '🥁 Rio Carnival High Frenzy',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'external_thumb_press'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'external_thumb_press'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'external_thumb_press'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'external_thumb_press'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'external_thumb_press'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'external_thumb_press'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'external_thumb_press'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'external_thumb_press'
          }
        ]
      }
    },
    cuica_bossa_sunset: {
      name: '🥁 Bossa Nova Sunset Squeak',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'external_thumb_press'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'external_thumb_press'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'external_thumb_press'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'external_thumb_press'
          }
        ]
      }
    },
    cuica_samba_funk: {
      name: '🥁 Samba Funk Cross-Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'external_thumb_press'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'external_thumb_press'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'external_thumb_press'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'external_thumb_press'
          }
        ],
        11: [
          {
            drum: 0,
            sound: 'external_thumb_press'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'external_thumb_press'
          }
        ]
      }
    },
    cuica_street_parade: {
      name: '🥁 Street Murga Squeaker',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'external_thumb_press'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'external_thumb_press'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'external_thumb_press'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'external_thumb_press'
          }
        ]
      }
    },
    cuica_tropical_breeze: {
      name: '🥁 Tropical Breeze Whisper',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'external_thumb_press'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'external_thumb_press'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'external_thumb_press'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'external_thumb_press'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'external_thumb_press'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'external_thumb_press'
          }
        ]
      }
    }
  },
  doira: {
    doira_folk: {
      name: '🥁 Doira Folk Rit',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'doira_tak'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'doira_dum'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'doira_kah'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'doira_muff'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'doira_tak'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'doira_snap'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'doira_kah'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'doira_muff'
          }
        ]
      }
    },
    lazgi_dance: {
      name: '🥁 Ecstatic Lazgi Dance',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'doira_dum'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'doira_tak'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'doira_kah'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'doira_tak'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'doira_dum'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'doira_tak'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'doira_kah'
          }
        ],
        13: [
          {
            drum: 0,
            sound: 'doira_snap'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'doira_tak'
          }
        ]
      }
    },
    sufi_meditation: {
      name: '🥁 Sufi Meditative Roll',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'doira_dum'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'doira_muff'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'doira_tak'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'doira_dum'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'doira_muff'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'doira_tak'
          }
        ]
      }
    },
    shalafo_doira: {
      name: '🥁 Shalafo Festive Dance',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'doira_dum'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'doira_tak'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'doira_kah'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'doira_muff'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'doira_dum'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'doira_tak'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'doira_kah'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'doira_tak'
          }
        ]
      }
    },
    yalla_rhythm: {
      name: '🥁 Yalla Folk Syncopation',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'doira_dum'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'doira_tak'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'doira_kah'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'doira_dum'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'doira_tak'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'doira_muff'
          }
        ]
      }
    },
    doira_shashmaqam: {
      name: '🥁 Shashmaqam Classical Cycle',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'doira_dum'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'doira_tak'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'doira_dum'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'doira_kah'
          }
        ]
      }
    },
    central_asian_wedding: {
      name: '🥁 Traditional Wedding Procession',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'doira_dum'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'doira_tak'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'doira_tak'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'doira_dum'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'doira_kah'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'doira_tak'
          }
        ]
      }
    },
    doira_rapid_wheel: {
      name: '🥁 Rapid Wheel Solo Tap',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'doira_dum'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'doira_tak'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'doira_tak'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'doira_kah'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'doira_dum'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'doira_tak'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'doira_tak'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'doira_kah'
          }
        ]
      }
    },
    doira_silk_road: {
      name: '🥁 Caravan Along Silk Road',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'doira_dum'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'doira_tak'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'doira_snap'
          }
        ]
      }
    },
    doira_desert_wind: {
      name: '🥁 Mystical Desert Wind',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'doira_dum'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'doira_tak'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'doira_dum'
          }
        ],
        11: [
          {
            drum: 0,
            sound: 'doira_muff'
          }
        ]
      }
    }
  },
  uchiwadaiko: {
    uchiwadaiko_kabuki: {
      name: '🥁 Kabuki Dramatic Beat',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'fan_head_slap'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'handle_knock'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'fan_head_slap'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'handle_knock'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'fan_head_slap'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'handle_knock'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'fan_head_slap'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'handle_knock'
          }
        ]
      }
    },
    nichiren_chant: {
      name: '🥁 Daimoku Temple Chant',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'fan_head_slap'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'fan_head_slap'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'fan_head_slap'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'fan_head_slap'
          }
        ]
      }
    },
    matsuri_procession: {
      name: '🥁 Shinto Procession March',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'fan_head_slap'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'handle_knock'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'fan_head_slap'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'fan_head_slap'
          }
        ],
        11: [
          {
            drum: 0,
            sound: 'handle_knock'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'handle_knock'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'fan_head_slap'
          }
        ]
      }
    },
    sumo_yobidashi: {
      name: '🥁 Sumo Ring Entering March',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'fan_head_slap'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'handle_knock'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'fan_head_slap'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'fan_head_slap'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'handle_knock'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'handle_knock'
          }
        ]
      }
    },
    kabuki_wind: {
      name: '🥁 Kabuki Wind & Wave Rumble',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'fan_head_slap'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'handle_knock'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'handle_knock'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'fan_head_slap'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'handle_knock'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'handle_knock'
          }
        ]
      }
    },
    nichiren_temple_rapid: {
      name: '🥁 Rapid Daimoku Drumming',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'fan_head_slap'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'handle_knock'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'fan_head_slap'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'handle_knock'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'fan_head_slap'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'handle_knock'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'fan_head_slap'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'fan_head_slap'
          }
        ]
      }
    },
    kabuki_tsunami: {
      name: '🥁 Dramatic Kabuki Wave Rumble',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'fan_head_slap'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'fan_head_slap'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'handle_knock'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'handle_knock'
          }
        ]
      }
    },
    uchiwadaiko_matsuri: {
      name: '🥁 Street Shrine Matsuri',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'fan_head_slap'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'handle_knock'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'fan_head_slap'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'handle_knock'
          }
        ]
      }
    },
    zen_meditation_daiko: {
      name: '🥁 Zen Meditation Single Tap',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'fan_head_slap'
          }
        ]
      }
    },
    ancient_shinto_dance: {
      name: '🥁 Ancient Shinto Kagura Dance',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'fan_head_slap'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'handle_knock'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'fan_head_slap'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'handle_knock'
          }
        ]
      }
    }
  },
  oceandrum: {
    oceandrum_meditation: {
      name: '🥁 Ocean Wave Meditation',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'rolling_swirl'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'sudden_frame_tilt'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'sudden_frame_tilt'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'rolling_swirl'
          }
        ]
      }
    },
    gentle_shoreline: {
      name: '🥁 Gentle Coast Tide',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'rolling_swirl'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'rolling_swirl'
          }
        ]
      }
    },
    tempest_storm: {
      name: '🥁 Stormy Tempest Crash',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'rolling_swirl'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'sudden_frame_tilt'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'sudden_frame_tilt'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'rolling_swirl'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'rolling_swirl'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'sudden_frame_tilt'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'sudden_frame_tilt'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'rolling_swirl'
          }
        ]
      }
    },
    deep_sea_swell: {
      name: '🥁 Deep Sea Abyssal Swell',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'rolling_swirl'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'sudden_frame_tilt'
          }
        ]
      }
    },
    coral_reef_splash: {
      name: '🥁 Coral Reef Tidal Splash',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'rolling_swirl'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'sudden_frame_tilt'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'rolling_swirl'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'sudden_frame_tilt'
          }
        ]
      }
    },
    hurricane_gale: {
      name: '🥁 Hurricane Gale Surf',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'rolling_swirl'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'sudden_frame_tilt'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'rolling_swirl'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'sudden_frame_tilt'
          }
        ]
      }
    },
    morning_mist_waves: {
      name: '🥁 Gentle Morning Mist Waves',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'rolling_swirl'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'rolling_swirl'
          }
        ]
      }
    },
    shipwreck_tempest: {
      name: '🥁 Shipwreck Stormy Surge',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'rolling_swirl'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'sudden_frame_tilt'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'sudden_frame_tilt'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'rolling_swirl'
          }
        ]
      }
    },
    whale_songs_tide: {
      name: '🥁 Whale Songs and Rising Tide',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'rolling_swirl'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'sudden_frame_tilt'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'sudden_frame_tilt'
          }
        ]
      }
    },
    beach_pebble_wash: {
      name: '🥁 Whispering Beach Pebbles',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'rolling_swirl'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'sudden_frame_tilt'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'rolling_swirl'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'sudden_frame_tilt'
          }
        ]
      }
    }
  },
  janggu: {
    janggu_samulnori: {
      name: '🥁 Samulnori Folk Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'center_stick_mute'
          }
        ],
        3: [
          {
            drum: 1,
            sound: 'chae'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'hoop_rim_click'
          }
        ],
        6: [
          {
            drum: 1,
            sound: 'hoop_rim_click'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'center_stick_mute'
          }
        ],
        11: [
          {
            drum: 1,
            sound: 'chae'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'hoop_rim_click'
          }
        ],
        14: [
          {
            drum: 1,
            sound: 'hoop_rim_click'
          }
        ]
      }
    },
    hwimori_fast: {
      name: '🥁 Hwimori (Lightning Dance)',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'hoop_rim_click'
          },
          {
            drum: 1,
            sound: 'chae'
          }
        ],
        4: [
          {
            drum: 1,
            sound: 'hoop_rim_click'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'hoop_rim_click'
          }
        ],
        12: [
          {
            drum: 1,
            sound: 'chae'
          }
        ],
        14: [
          {
            drum: 1,
            sound: 'hoop_rim_click'
          }
        ]
      }
    },
    gutgeori_swing: {
      name: '🥁 Gutgeori (Elegant Swing)',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'hoop_rim_click'
          },
          {
            drum: 1,
            sound: 'chae'
          }
        ],
        3: [
          {
            drum: 1,
            sound: 'chae'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'center_stick_mute'
          }
        ],
        6: [
          {
            drum: 1,
            sound: 'hoop_rim_click'
          }
        ],
        9: [
          {
            drum: 1,
            sound: 'chae'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'center_stick_mute'
          }
        ]
      }
    },
    jajinmori_janggu: {
      name: '🥁 Jajinmori (12/8 High Speed)',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'hoop_rim_click'
          },
          {
            drum: 1,
            sound: 'chae'
          }
        ],
        3: [
          {
            drum: 1,
            sound: 'chae'
          }
        ],
        4: [
          {
            drum: 1,
            sound: 'hoop_rim_click'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'hoop_rim_click'
          }
        ],
        9: [
          {
            drum: 1,
            sound: 'hoop_rim_click'
          }
        ],
        10: [
          {
            drum: 1,
            sound: 'chae'
          }
        ]
      }
    },
    semachi_janggu: {
      name: '🥁 Semachi Folk Song March',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'hoop_rim_click'
          },
          {
            drum: 1,
            sound: 'chae'
          }
        ],
        3: [
          {
            drum: 1,
            sound: 'chae'
          }
        ],
        6: [
          {
            drum: 1,
            sound: 'hoop_rim_click'
          }
        ],
        9: [
          {
            drum: 1,
            sound: 'chae'
          }
        ]
      }
    },
    hwi_mori: {
      name: '🥁 Hwimori Fast Run',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'hoop_rim_click'
          },
          {
            drum: 1,
            sound: 'chae'
          }
        ],
        4: [
          {
            drum: 1,
            sound: 'chae'
          }
        ],
        8: [
          {
            drum: 1,
            sound: 'hoop_rim_click'
          }
        ],
        12: [
          {
            drum: 1,
            sound: 'chae'
          }
        ]
      }
    },
    janggu_pansori: {
      name: '🥁 Pansori Storyteller Accomp',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'hoop_rim_click'
          }
        ],
        4: [
          {
            drum: 1,
            sound: 'chae'
          }
        ],
        8: [
          {
            drum: 1,
            sound: 'hoop_rim_click'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'center_stick_mute'
          }
        ]
      }
    },
    janggu_salpuri: {
      name: '🥁 Salpuri Shamanic Soul Cleanse',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'hoop_rim_click'
          }
        ],
        4: [
          {
            drum: 1,
            sound: 'chae'
          }
        ],
        8: [
          {
            drum: 1,
            sound: 'hoop_rim_click'
          }
        ]
      }
    },
    janggu_seoljanggu: {
      name: '🥁 Seoljanggu Virtuoso Solo',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'hoop_rim_click'
          },
          {
            drum: 1,
            sound: 'chae'
          }
        ],
        2: [
          {
            drum: 1,
            sound: 'hoop_rim_click'
          }
        ],
        4: [
          {
            drum: 1,
            sound: 'chae'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'center_stick_mute'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'hoop_rim_click'
          }
        ],
        10: [
          {
            drum: 1,
            sound: 'chae'
          }
        ],
        12: [
          {
            drum: 1,
            sound: 'hoop_rim_click'
          }
        ],
        14: [
          {
            drum: 1,
            sound: 'chae'
          }
        ]
      }
    },
    janggu_nongak: {
      name: '🥁 Nongak Harvest Farm Dance',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'hoop_rim_click'
          }
        ],
        3: [
          {
            drum: 1,
            sound: 'chae'
          }
        ],
        6: [
          {
            drum: 1,
            sound: 'hoop_rim_click'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'center_stick_mute'
          }
        ]
      }
    },
    janggu_fast_danmori: {
      name: '🥁 Danmori Super Fast 4/4',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'hoop_rim_click'
          },
          {
            drum: 1,
            sound: 'chae'
          }
        ],
        2: [
          {
            drum: 1,
            sound: 'chae'
          }
        ],
        4: [
          {
            drum: 1,
            sound: 'hoop_rim_click'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'center_stick_mute'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'hoop_rim_click'
          }
        ],
        10: [
          {
            drum: 1,
            sound: 'chae'
          }
        ],
        12: [
          {
            drum: 1,
            sound: 'hoop_rim_click'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'center_stick_mute'
          }
        ]
      }
    }
  },
  zabumba: {
    zabumba_baiao: {
      name: '🥁 Zabumba Baião Forró',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'bacalhau'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'ma_o'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'bacalhau'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'bacalhau'
          }
        ],
        11: [
          {
            drum: 0,
            sound: 'ma_o'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'bacalhau'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'ma_o'
          }
        ]
      }
    },
    xaxado_nordeste: {
      name: '🥁 Xaxado Northeast Beat',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'bacalhau'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'bacalhau'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'ma_o'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'bacalhau'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'bacalhau'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'ma_o'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'bacalhau'
          }
        ]
      }
    },
    arrasta_pe: {
      name: '🥁 Arrasta-pé Polka March',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'bacalhau'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'ma_o'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'bacalhau'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'bacalhau'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'ma_o'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'bacalhau'
          }
        ]
      }
    },
    forro_galope: {
      name: '🥁 Galloping Forró Speed',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'bacalhau'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'ma_o'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'bacalhau'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'ma_o'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'bacalhau'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'ma_o'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'bacalhau'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'ma_o'
          }
        ]
      }
    },
    coco_de_roda: {
      name: '🥁 Coco de Roda Coastal Clap',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'bacalhau'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'ma_o'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'bacalhau'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'bacalhau'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'ma_o'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'bacalhau'
          }
        ]
      }
    },
    zabumba_samba_reggae: {
      name: '🥁 Zabumba Samba Reggae',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'bacalhau'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'bacalhau'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'bacalhau'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'ma_o'
          }
        ]
      }
    },
    zabumba_ijexa: {
      name: '🥁 Sacred Ijexá Afro-Brazilian',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'bacalhau'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'bacalhau'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'ma_o'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'bacalhau'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'bacalhau'
          }
        ]
      }
    },
    zabumba_maracatu: {
      name: '🥁 Heavy Maracatu Crown March',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'bacalhau'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'bacalhau'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'ma_o'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'bacalhau'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'bacalhau'
          }
        ]
      }
    },
    zabumba_frevo: {
      name: '🥁 Frevo Carnival Quickstep',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'bacalhau'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'ma_o'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'bacalhau'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'ma_o'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'bacalhau'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'ma_o'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'bacalhau'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'ma_o'
          }
        ]
      }
    },
    zabumba_forro_slow: {
      name: '🥁 Forró Romantic Xote',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'bacalhau'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'ma_o'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'bacalhau'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'ma_o'
          }
        ]
      }
    }
  },
  mridangam: {
    mridangam_tala: {
      name: '🥁 Carnatic Adi Tala',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'tha'
          }
        ],
        2: [
          {
            drum: 1,
            sound: 'tha'
          }
        ],
        4: [
          {
            drum: 1,
            sound: 'thom'
          }
        ],
        6: [
          {
            drum: 1,
            sound: 'dhi_thei'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'tha'
          }
        ],
        10: [
          {
            drum: 1,
            sound: 'dhi_thei'
          }
        ],
        12: [
          {
            drum: 1,
            sound: 'thom'
          }
        ],
        14: [
          {
            drum: 1,
            sound: 'tha'
          }
        ]
      }
    },
    mridangam_mohra: {
      name: '🥁 Mohra (Climax Roll)',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'tha'
          }
        ],
        2: [
          {
            drum: 1,
            sound: 'tha'
          }
        ],
        4: [
          {
            drum: 1,
            sound: 'thom'
          }
        ],
        5: [
          {
            drum: 1,
            sound: 'tha'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'tha'
          }
        ],
        10: [
          {
            drum: 1,
            sound: 'tha'
          }
        ],
        12: [
          {
            drum: 1,
            sound: 'thom'
          }
        ],
        13: [
          {
            drum: 1,
            sound: 'thom'
          }
        ],
        14: [
          {
            drum: 1,
            sound: 'tha'
          }
        ]
      }
    },
    carnatic_rupaka: {
      name: '🥁 Rupaka Tala (6 Beats)',
      stepCount: 6,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'tha'
          }
        ],
        2: [
          {
            drum: 1,
            sound: 'tha'
          }
        ],
        4: [
          {
            drum: 1,
            sound: 'thom'
          }
        ]
      }
    },
    misra_chapu: {
      name: '🥁 Misra Chapu (7-Beat Tala)',
      stepCount: 7,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'tha'
          }
        ],
        2: [
          {
            drum: 1,
            sound: 'tha'
          }
        ],
        4: [
          {
            drum: 1,
            sound: 'thom'
          }
        ],
        5: [
          {
            drum: 1,
            sound: 'tha'
          }
        ],
        6: [
          {
            drum: 1,
            sound: 'thom'
          }
        ]
      }
    },
    khanda_chapu: {
      name: '🥁 Khanda Chapu (5-Beat Tala)',
      stepCount: 5,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'tha'
          }
        ],
        2: [
          {
            drum: 1,
            sound: 'tha'
          }
        ],
        4: [
          {
            drum: 1,
            sound: 'thom'
          }
        ]
      }
    },
    adi_tala_tisra: {
      name: '🥁 Adi Tala Tisra Gati',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'tha'
          }
        ],
        3: [
          {
            drum: 1,
            sound: 'tha'
          }
        ],
        6: [
          {
            drum: 1,
            sound: 'thom'
          }
        ],
        9: [
          {
            drum: 1,
            sound: 'dhi_thei'
          }
        ]
      }
    },
    mridangam_korvai: {
      name: '🥁 Korvai Mathematical Ending',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'tha'
          }
        ],
        2: [
          {
            drum: 1,
            sound: 'tha'
          }
        ],
        4: [
          {
            drum: 1,
            sound: 'thom'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'tha'
          }
        ],
        10: [
          {
            drum: 1,
            sound: 'tha'
          }
        ],
        12: [
          {
            drum: 1,
            sound: 'thom'
          }
        ],
        14: [
          {
            drum: 1,
            sound: 'thom'
          }
        ]
      }
    },
    mridangam_morra_fast: {
      name: '🥁 Fast Mohra Ending Roll',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'tha'
          }
        ],
        2: [
          {
            drum: 1,
            sound: 'tha'
          }
        ],
        4: [
          {
            drum: 1,
            sound: 'tha'
          }
        ],
        6: [
          {
            drum: 1,
            sound: 'thom'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'tha'
          }
        ],
        10: [
          {
            drum: 1,
            sound: 'tha'
          }
        ],
        12: [
          {
            drum: 1,
            sound: 'tha'
          }
        ],
        14: [
          {
            drum: 1,
            sound: 'thom'
          }
        ]
      }
    },
    mridangam_rupaka_fast: {
      name: '🥁 Rapid Rupaka Tala Variation',
      stepCount: 6,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'tha'
          }
        ],
        1: [
          {
            drum: 1,
            sound: 'tha'
          }
        ],
        2: [
          {
            drum: 1,
            sound: 'thom'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'tha'
          }
        ],
        4: [
          {
            drum: 1,
            sound: 'tha'
          }
        ],
        5: [
          {
            drum: 1,
            sound: 'thom'
          }
        ]
      }
    },
    mridangam_misra_chapu_slow: {
      name: '🥁 Misra Chapu Classic Vilambit',
      stepCount: 14,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'tha'
          }
        ],
        4: [
          {
            drum: 1,
            sound: 'tha'
          }
        ],
        8: [
          {
            drum: 1,
            sound: 'thom'
          }
        ],
        10: [
          {
            drum: 1,
            sound: 'tha'
          }
        ],
        12: [
          {
            drum: 1,
            sound: 'thom'
          }
        ]
      }
    }
  },
  udu: {
    clay_groove: {
      name: '🏺 Clay Vessel Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'ceramic_side_body_slap'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'neck_scratch'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'ceramic_side_body_slap'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'mouth_port_palm_pop'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'ceramic_side_body_slap'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'neck_scratch'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'ceramic_side_body_slap'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'neck_scratch'
          }
        ]
      }
    },
    tribal_essence: {
      name: '🏺 Tribal Essence',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'ceramic_side_body_slap'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'mouth_port_palm_pop'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'ceramic_side_body_slap'
          }
        ],
        7: [
          {
            drum: 0,
            sound: 'mouth_port_palm_pop'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'ceramic_side_body_slap'
          }
        ],
        11: [
          {
            drum: 0,
            sound: 'mouth_port_palm_pop'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'ceramic_side_body_slap'
          }
        ],
        15: [
          {
            drum: 0,
            sound: 'neck_scratch'
          }
        ]
      }
    },
    ceramic_echo: {
      name: '🏺 Ceramic Echoes',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'ceramic_side_body_slap'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'neck_scratch'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'mouth_port_palm_pop'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'ceramic_side_body_slap'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'neck_scratch'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'ceramic_side_body_slap'
          }
        ]
      }
    },
    earthy_pulse: {
      name: '🏺 Earthy Pulse',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'ceramic_side_body_slap'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'mouth_port_palm_pop'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'ceramic_side_body_slap'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'mouth_port_palm_pop'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'ceramic_side_body_slap'
          }
        ]
      }
    },
    pot_dance: {
      name: '🏺 African Pot Dance',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'ceramic_side_body_slap'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'ceramic_side_body_slap'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'mouth_port_palm_pop'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'neck_scratch'
          }
        ]
      }
    },
    clay_whisper: {
      name: '🏺 Clay Whisper Meditation',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'ceramic_side_body_slap'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'neck_scratch'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'ceramic_side_body_slap'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'mouth_port_palm_pop'
          }
        ]
      }
    },
    resonant_pot_roll: {
      name: '🏺 Resonant Clay Pot Roll',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'ceramic_side_body_slap'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'mouth_port_palm_pop'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'ceramic_side_body_slap'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'mouth_port_palm_pop'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'ceramic_side_body_slap'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'mouth_port_palm_pop'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'ceramic_side_body_slap'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'mouth_port_palm_pop'
          }
        ]
      }
    },
    mud_dwellers: {
      name: '🏺 Mud Dwellers Ritual',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'ceramic_side_body_slap'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'ceramic_side_body_slap'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'mouth_port_palm_pop'
          }
        ]
      }
    },
    water_drop_udu: {
      name: '🏺 Dripping Water Clay Pot',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'ceramic_side_body_slap'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'mouth_port_palm_pop'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'neck_scratch'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'ceramic_side_body_slap'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'mouth_port_palm_pop'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'neck_scratch'
          }
        ]
      }
    },
    ancestral_chamber: {
      name: '🏺 Echoing Ancestral Chamber',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'ceramic_side_body_slap'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'mouth_port_palm_pop'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'neck_scratch'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'ceramic_side_body_slap'
          }
        ]
      }
    }
  },
  thunderdrum: {
    storm_swell: {
      name: '⚡ Storm Swell',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'spring_mallet_strike'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'spring_mallet_strike'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'head_tap'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'head_tap'
          }
        ]
      }
    },
    lightning_strike: {
      name: '⚡ Lightning Strike',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'head_tap'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'spring_mallet_strike'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'head_tap'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'spring_mallet_strike'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'spring_mallet_strike'
          }
        ]
      }
    },
    rolling_thunder: {
      name: '⚡ Rolling Thunder',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'spring_mallet_strike'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'spring_mallet_strike'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'spring_mallet_strike'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'spring_mallet_strike'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'head_tap'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'spring_mallet_strike'
          }
        ]
      }
    },
    electric_tempest: {
      name: '⚡ Electric Tempest',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'spring_mallet_strike'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'head_tap'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'spring_mallet_strike'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'spring_mallet_strike'
          }
        ],
        11: [
          {
            drum: 0,
            sound: 'head_tap'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'cylinder_shake_rumble'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'head_tap'
          }
        ]
      }
    },
    rain_shaman: {
      name: '⚡ Rain Shaman Ritual',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'spring_mallet_strike'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'cylinder_shake_rumble'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'spring_mallet_strike'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'cylinder_shake_rumble'
          }
        ]
      }
    },
    tempest_shockwave: {
      name: '⚡ Tempest Shockwave',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'spring_mallet_strike'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'head_tap'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'spring_mallet_strike'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'head_tap'
          }
        ]
      }
    },
    gale_force_winds: {
      name: '⚡ Gale Force Winds',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'spring_mallet_strike'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'spring_mallet_strike'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'head_tap'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'cylinder_shake_rumble'
          }
        ]
      }
    },
    lightning_reverberation: {
      name: '⚡ Lightning Reverberation',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'head_tap'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'spring_mallet_strike'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'cylinder_shake_rumble'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'head_tap'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'spring_mallet_strike'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'cylinder_shake_rumble'
          }
        ]
      }
    },
    shamanic_storm_summon: {
      name: '⚡ Shamanic Storm Summon',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'spring_mallet_strike'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'spring_mallet_strike'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'head_tap'
          }
        ]
      }
    },
    subterranean_rumble: {
      name: '⚡ Subterranean Earthquake Rumble',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'spring_mallet_strike'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'spring_mallet_strike'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'spring_mallet_strike'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'spring_mallet_strike'
          }
        ]
      }
    }
  },
  waterdrums: {
    liquid_flow: {
      name: '🌊 Liquid Flow',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'gourd_boom'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'water_splash'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'water_slap'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'gourd_boom'
          }
        ],
        11: [
          {
            drum: 0,
            sound: 'gourd_mute'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'water_drip'
          }
        ]
      }
    },
    ripple_effect: {
      name: '🌊 Ripple Effect',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'gourd_boom'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'water_drip'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'water_splash'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'water_drip'
          }
        ]
      }
    },
    geyser_burst: {
      name: '🌊 Geyser Burst',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'gourd_boom'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'water_slap'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'water_splash'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'water_slap'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'water_drip'
          }
        ]
      }
    },
    tidal_wave: {
      name: '🌊 Tidal Wave Crash',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'gourd_boom'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'water_splash'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'water_slap'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'gourd_boom'
          }
        ],
        11: [
          {
            drum: 0,
            sound: 'water_splash'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'gourd_mute'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'water_drip'
          }
        ]
      }
    },
    droplet_rain: {
      name: '🌊 Droplet Rain Patters',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'water_drip'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'water_drip'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'water_drip'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'water_splash'
          }
        ]
      }
    },
    deep_lake_pulse: {
      name: '🌊 Deep Lake Abyssal Pulse',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'gourd_boom'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'water_splash'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'gourd_boom'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'water_splash'
          }
        ]
      }
    },
    water_splash_sync: {
      name: '🌊 Synchronized Pool Splash',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'gourd_boom'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'water_splash'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'water_slap'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'gourd_boom'
          }
        ],
        11: [
          {
            drum: 0,
            sound: 'water_splash'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'water_slap'
          }
        ]
      }
    },
    whirlpool_spin: {
      name: '🌊 Spinning Whirlpool Vortex',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'gourd_boom'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'water_drip'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'water_splash'
          }
        ]
      }
    },
    misty_waterfall: {
      name: '🌊 Misty Highland Waterfall',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'gourd_boom'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'water_splash'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'gourd_mute'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'water_drip'
          }
        ]
      }
    },
    ocean_waves_rhythm: {
      name: '🌊 Ocean Wave Crash Symphony',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'gourd_boom'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'water_splash'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'water_slap'
          }
        ]
      }
    }
  },
  vibraslap: {
    rattle_roll: {
      name: '🪵 Wooden Rattle Roll',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'ball_palm_strike'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'soundbox_strike'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'soundbox_strike'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'soundbox_strike'
          }
        ]
      }
    },
    chatter_echo: {
      name: '🪵 Chatter Echoes',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'soundbox_strike'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'soundbox_strike'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'soundbox_strike'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'soundbox_strike'
          }
        ]
      }
    },
    rhythm_shake: {
      name: '🪵 Rhythm Shake Accent',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'ball_palm_strike'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'ball_palm_strike'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'soundbox_strike'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'ball_palm_strike'
          }
        ]
      }
    },
    slapback_groove: {
      name: '🪵 Slapback Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'ball_palm_strike'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'soundbox_strike'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'soundbox_strike'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'ball_palm_strike'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'soundbox_strike'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'soundbox_strike'
          }
        ]
      }
    },
    vintage_tremolo: {
      name: '🪵 Vintage Tremolo',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'soundbox_strike'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'ball_palm_strike'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'soundbox_strike'
          }
        ]
      }
    },
    vibraslap_echo_beat: {
      name: '🪵 Echoing Slapback Beat',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'ball_palm_strike'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'soundbox_strike'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'ball_palm_strike'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'soundbox_strike'
          }
        ]
      }
    },
    rattle_shaman: {
      name: '🪵 Shamanic Chatter Shake',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'soundbox_strike'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'soundbox_strike'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'soundbox_strike'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'ball_palm_strike'
          }
        ]
      }
    },
    wooden_percussion_clack: {
      name: '🪵 Wooden Hollow Clack',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'soundbox_strike'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'soundbox_strike'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'ball_palm_strike'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'soundbox_strike'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'soundbox_strike'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'ball_palm_strike'
          }
        ]
      }
    },
    tremolo_burst: {
      name: '🪵 Dramatic Tremolo Burst',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'soundbox_strike'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'soundbox_strike'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'ball_palm_strike'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'soundbox_strike'
          }
        ]
      }
    },
    retro_soundtrack_clack: {
      name: '🪵 Retro Movie Clack Accent',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'ball_palm_strike'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'soundbox_strike'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'soundbox_strike'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'soundbox_strike'
          }
        ]
      }
    }
  },
  flexatone: {
    boing_boing: {
      name: '〽️ Boing Boing Bend',
      stepCount: 8,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'handle_shake_roll'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'handle_shake_roll'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'frame_knock'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'frame_knock'
          }
        ]
      }
    },
    ufo_landing: {
      name: '👽 UFO Landing Slide',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'handle_shake_roll'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'handle_shake_roll'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'frame_knock'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'frame_knock'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'handle_shake_roll'
          }
        ]
      }
    },
    sawtooth_wave: {
      name: '📈 Sawtooth Bend',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'handle_shake_roll'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'handle_shake_roll'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'handle_shake_roll'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'handle_shake_roll'
          }
        ]
      }
    },
    whimsical_bounce: {
      name: '🎈 Whimsical Bounce',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'handle_shake_roll'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'frame_knock'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'frame_knock'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'handle_shake_roll'
          }
        ],
        11: [
          {
            drum: 0,
            sound: 'frame_knock'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'frame_knock'
          }
        ]
      }
    },
    spectral_slide: {
      name: '🌌 Spectral Slide',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'frame_knock'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'handle_shake_roll'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'handle_shake_roll'
          }
        ]
      }
    },
    cartoon_slip: {
      name: '〽️ Cartoon Banana Slip',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'handle_shake_roll'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'frame_knock'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'handle_shake_roll'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'handle_shake_roll'
          }
        ]
      }
    },
    ghostly_wail: {
      name: '👽 Ghostly Flexatone Wail',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'handle_shake_roll'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'frame_knock'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'frame_knock'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'handle_shake_roll'
          }
        ]
      }
    },
    siren_flex: {
      name: '📈 Rising Siren Flex',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'handle_shake_roll'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'frame_knock'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'frame_knock'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'handle_shake_roll'
          }
        ]
      }
    },
    spring_rebound: {
      name: '🎈 Playful Spring Rebound',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'handle_shake_roll'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'frame_knock'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'frame_knock'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'handle_shake_roll'
          }
        ]
      }
    },
    flex_groove_shuffle: {
      name: '📈 Shuffling Flex Metal Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'handle_shake_roll'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'handle_shake_roll'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'frame_knock'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'handle_shake_roll'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'handle_shake_roll'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'frame_knock'
          }
        ]
      }
    }
  },
  waterphone: {
    eerie_echos: {
      name: '🛸 Eerie Echoes',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'cello_rod_bow_stroke'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'rod_mallet_tap'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'bottom_basin_hand_slap'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'cello_rod_bow_stroke'
          }
        ]
      }
    },
    abyssal_call: {
      name: '🐋 Abyssal Call',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'cello_rod_bow_stroke'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'cello_rod_bow_stroke'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'rod_mallet_tap'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'bottom_basin_hand_slap'
          }
        ]
      }
    },
    metallic_shimmer: {
      name: '✨ Metallic Shimmer',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'rod_mallet_tap'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'bottom_basin_hand_slap'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'bottom_basin_hand_slap'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'cello_rod_bow_stroke'
          }
        ]
      }
    },
    spectral_chimes: {
      name: '👻 Spectral Chimes',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'rod_mallet_tap'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'cello_rod_bow_stroke'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'bottom_basin_hand_slap'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'rod_mallet_tap'
          }
        ],
        11: [
          {
            drum: 0,
            sound: 'cello_rod_bow_stroke'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'bottom_basin_hand_slap'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'cello_rod_bow_stroke'
          }
        ]
      }
    },
    whale_lullaby: {
      name: '🎵 Whale Lullaby',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'cello_rod_bow_stroke'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'rod_mallet_tap'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'cello_rod_bow_stroke'
          }
        ]
      }
    },
    subzero_resonance: {
      name: '🛸 Subzero Metal Resonance',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'cello_rod_bow_stroke'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'rod_mallet_tap'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'cello_rod_bow_stroke'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'bottom_basin_hand_slap'
          }
        ]
      }
    },
    haunted_shipwreck: {
      name: '👻 Haunted Creaking Hull',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'rod_mallet_tap'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'cello_rod_bow_stroke'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'bottom_basin_hand_slap'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'rod_mallet_tap'
          }
        ]
      }
    },
    nebula_drifter: {
      name: '🌌 Deep Space Nebula Drifter',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'rod_mallet_tap'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'bottom_basin_hand_slap'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'cello_rod_bow_stroke'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'rod_mallet_tap'
          }
        ]
      }
    },
    deep_ocean_tremor: {
      name: '🐋 Sub-oceanic Seismic Tremor',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'cello_rod_bow_stroke'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'bottom_basin_hand_slap'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'cello_rod_bow_stroke'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'rod_mallet_tap'
          }
        ]
      }
    },
    glass_harmonicon: {
      name: '✨ Glass Harmonicon Echoes',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'cello_rod_bow_stroke'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'rod_mallet_tap'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'bottom_basin_hand_slap'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'cello_rod_bow_stroke'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'rod_mallet_tap'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'bottom_basin_hand_slap'
          }
        ]
      }
    }
  },
  handpan: {
    meditative_journey: {
      name: '🧘 Meditative Journey',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'interstitial_tap'
          }
        ],
        2: [
          {
            drum: 1,
            sound: 'tone_field_tap'
          }
        ],
        4: [
          {
            drum: 1,
            sound: 'interstitial_tap'
          }
        ],
        6: [
          {
            drum: 1,
            sound: 'tone_field_tap'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'interstitial_tap'
          }
        ],
        10: [
          {
            drum: 1,
            sound: 'tone_field_tap'
          }
        ],
        12: [
          {
            drum: 1,
            sound: 'interstitial_tap'
          }
        ],
        14: [
          {
            drum: 1,
            sound: 'ding'
          }
        ]
      }
    },
    cosmic_vibration: {
      name: '🌌 Cosmic Vibration',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'interstitial_tap'
          }
        ],
        4: [
          {
            drum: 1,
            sound: 'tone_field_tap'
          }
        ],
        8: [
          {
            drum: 1,
            sound: 'tone_field_tap'
          }
        ],
        12: [
          {
            drum: 1,
            sound: 'tone_field_tap'
          }
        ],
        14: [
          {
            drum: 1,
            sound: 'ding'
          }
        ]
      }
    },
    resonant_harmony: {
      name: '🎶 Resonant Harmony',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'interstitial_tap'
          }
        ],
        2: [
          {
            drum: 1,
            sound: 'tone_field_tap'
          }
        ],
        4: [
          {
            drum: 1,
            sound: 'interstitial_tap'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'interstitial_tap'
          }
        ],
        8: [
          {
            drum: 1,
            sound: 'tone_field_tap'
          }
        ],
        10: [
          {
            drum: 1,
            sound: 'tone_field_tap'
          }
        ]
      }
    },
    canyon_sunset: {
      name: '🌇 Canyon Sunset',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'interstitial_tap'
          }
        ],
        3: [
          {
            drum: 1,
            sound: 'tone_field_tap'
          }
        ],
        6: [
          {
            drum: 1,
            sound: 'tone_field_tap'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'interstitial_tap'
          }
        ],
        11: [
          {
            drum: 1,
            sound: 'tone_field_tap'
          }
        ],
        12: [
          {
            drum: 1,
            sound: 'interstitial_tap'
          }
        ],
        14: [
          {
            drum: 1,
            sound: 'ding'
          }
        ]
      }
    },
    wind_traveler: {
      name: '🍃 Wind Traveler',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'interstitial_tap'
          }
        ],
        4: [
          {
            drum: 1,
            sound: 'tone_field_tap'
          }
        ],
        8: [
          {
            drum: 1,
            sound: 'ding'
          }
        ]
      }
    },
    handpan_celestial: {
      name: '🧘 Celestial Handpan Drift',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'interstitial_tap'
          }
        ],
        4: [
          {
            drum: 1,
            sound: 'tone_field_tap'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'interstitial_tap'
          }
        ],
        12: [
          {
            drum: 1,
            sound: 'tone_field_tap'
          }
        ]
      }
    },
    handpan_equinox: {
      name: '🧘 Autumn Equinox Peace',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'interstitial_tap'
          }
        ],
        4: [
          {
            drum: 1,
            sound: 'tone_field_tap'
          }
        ],
        8: [
          {
            drum: 1,
            sound: 'interstitial_tap'
          }
        ],
        12: [
          {
            drum: 1,
            sound: 'ding'
          }
        ]
      }
    },
    handpan_echoes_peak: {
      name: '🧘 Mountain Echoes Peak',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'interstitial_tap'
          }
        ],
        3: [
          {
            drum: 1,
            sound: 'tone_field_tap'
          }
        ],
        6: [
          {
            drum: 1,
            sound: 'tone_field_tap'
          }
        ],
        9: [
          {
            drum: 1,
            sound: 'interstitial_tap'
          }
        ]
      }
    },
    handpan_forest_dawn: {
      name: '🧘 Morning Forest Awakening',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'interstitial_tap'
          }
        ],
        4: [
          {
            drum: 1,
            sound: 'tone_field_tap'
          }
        ],
        8: [
          {
            drum: 1,
            sound: 'ding'
          }
        ],
        12: [
          {
            drum: 1,
            sound: 'tone_field_tap'
          }
        ]
      }
    },
    handpan_lunar_cycle: {
      name: '🧘 Lunar Cycle Meditation',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'interstitial_tap'
          }
        ],
        2: [
          {
            drum: 1,
            sound: 'tone_field_tap'
          }
        ],
        6: [
          {
            drum: 1,
            sound: 'tone_field_tap'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'interstitial_tap'
          }
        ],
        10: [
          {
            drum: 1,
            sound: 'tone_field_tap'
          }
        ],
        14: [
          {
            drum: 1,
            sound: 'tone_field_tap'
          }
        ]
      }
    }
  },
  steelpan: {
    calypso_pulse: {
      name: '🌴 Calypso Steelpan Pulse',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'indentation_strike'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'rim_ring'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'rim_ring'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'rim_ring'
          }
        ]
      }
    },
    steelpan_soca: {
      name: '🌴 Soca Island Frenzy',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'indentation_strike'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'rim_ring'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'rim_ring'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'rim_ring'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'indentation_strike'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'rim_ring'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'rim_ring'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'rim_ring'
          }
        ]
      }
    },
    island_breeze: {
      name: '🌴 Island Breeze Melodics',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'rim_ring'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'rim_ring'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'rim_ring'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'rim_ring'
          }
        ],
        11: [
          {
            drum: 0,
            sound: 'indentation_strike'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'rim_ring'
          }
        ]
      }
    },
    lead_pan_groove: {
      name: '🌴 Lead Pan Solo Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'indentation_strike'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'indentation_strike'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'rim_ring'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'rim_ring'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'rim_ring'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'indentation_strike'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'rim_ring'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'rim_ring'
          }
        ]
      }
    },
    steelpan_carnival: {
      name: '🌴 Carnival Street Parade',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'indentation_strike'
          }
        ],
        1: [
          {
            drum: 0,
            sound: 'indentation_strike'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'rim_ring'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'rim_ring'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'rim_ring'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'indentation_strike'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'indentation_strike'
          }
        ],
        11: [
          {
            drum: 0,
            sound: 'rim_ring'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'rim_ring'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'rim_ring'
          }
        ]
      }
    },
    caribbean_rhythm: {
      name: '🌴 Caribbean Sunset Bounce',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'indentation_strike'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'rim_ring'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'indentation_strike'
          }
        ],
        11: [
          {
            drum: 0,
            sound: 'rim_ring'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'rim_ring'
          }
        ]
      }
    },
    pan_harmony: {
      name: '🌴 Harbor Steel Harmony',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'rim_ring'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'indentation_strike'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'rim_ring'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'rim_ring'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'rim_ring'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'indentation_strike'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'rim_ring'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'rim_ring'
          }
        ]
      }
    },
    harbor_sunset: {
      name: '🌴 Sandy Beach Sunset Calmer',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'indentation_strike'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'indentation_strike'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'rim_ring'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'indentation_strike'
          }
        ]
      }
    },
    steelpan_bounce: {
      name: '🌴 High Bounce Calypso',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'indentation_strike'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'rim_ring'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'rim_ring'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'rim_ring'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'rim_ring'
          }
        ],
        15: [
          {
            drum: 0,
            sound: 'indentation_strike'
          }
        ]
      }
    },
    tropical_party: {
      name: '🌴 Tropical Steel Pan Fiesta',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'indentation_strike'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'rim_ring'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'rim_ring'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'rim_ring'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'indentation_strike'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'rim_ring'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'rim_ring'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'rim_ring'
          }
        ]
      }
    }
  },
  ghatam: {
    pot_resonance: {
      name: '🏺 Ghatam Resonant Vessel',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'belly_vacuum_pop'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'neck_rim_ring'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'belly_vacuum_pop'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'neck_rim_ring'
          }
        ]
      }
    },
    ghatam_groove: {
      name: '🏺 Traditional Ghatam Tala',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'belly_vacuum_pop'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'neck_rim_ring'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'neck_rim_ring'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'belly_vacuum_pop'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'belly_vacuum_pop'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'neck_rim_ring'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'neck_rim_ring'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'neck_rim_ring'
          }
        ]
      }
    },
    clay_finger_dance: {
      name: '🏺 Clay Finger Dance',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'neck_rim_ring'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'neck_rim_ring'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'belly_vacuum_pop'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'belly_vacuum_pop'
          }
        ],
        11: [
          {
            drum: 0,
            sound: 'neck_rim_ring'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'neck_rim_ring'
          }
        ]
      }
    },
    south_indian_tala: {
      name: '🏺 Carnatic Clay Pot Adi',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'belly_vacuum_pop'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'belly_vacuum_pop'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'neck_rim_ring'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'neck_rim_ring'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'belly_vacuum_pop'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'belly_vacuum_pop'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'neck_rim_ring'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'neck_rim_ring'
          }
        ]
      }
    },
    ghatam_frenzy: {
      name: '🏺 Clay Neck Slide Frenzy',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'belly_vacuum_pop'
          }
        ],
        1: [
          {
            drum: 0,
            sound: 'neck_rim_ring'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'neck_rim_ring'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'belly_vacuum_pop'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'neck_rim_ring'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'belly_vacuum_pop'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'neck_rim_ring'
          }
        ],
        11: [
          {
            drum: 0,
            sound: 'neck_rim_ring'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'belly_vacuum_pop'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'neck_rim_ring'
          }
        ]
      }
    },
    pot_whisper: {
      name: '🏺 Echoes of the Earth',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'belly_vacuum_pop'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'neck_rim_ring'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'belly_vacuum_pop'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'neck_rim_ring'
          }
        ]
      }
    },
    clay_vessel_tempo: {
      name: '🏺 Clay Vessel Poly-Tempo',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'belly_vacuum_pop'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'neck_rim_ring'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'belly_vacuum_pop'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'neck_rim_ring'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'neck_rim_ring'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'neck_rim_ring'
          }
        ]
      }
    },
    ghatam_shala: {
      name: '🏺 Shala Temple Procession',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'belly_vacuum_pop'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'neck_rim_ring'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'neck_rim_ring'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'belly_vacuum_pop'
          }
        ],
        11: [
          {
            drum: 0,
            sound: 'neck_rim_ring'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'neck_rim_ring'
          }
        ]
      }
    },
    ghatam_meditation: {
      name: '🏺 Sacred Clay Vessel Tap',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'belly_vacuum_pop'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'neck_rim_ring'
          }
        ]
      }
    },
    dynamic_pot_slide: {
      name: '🏺 Clay Pot Dynamic Slide',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'belly_vacuum_pop'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'neck_rim_ring'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'neck_rim_ring'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'belly_vacuum_pop'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'belly_vacuum_pop'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'neck_rim_ring'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'neck_rim_ring'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'neck_rim_ring'
          }
        ]
      }
    }
  },
  daf: {
    persian_mystic: {
      name: '🕌 Persian Mystic Frame Beat',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'dum'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'zanjir'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'tak'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'zanjir'
          }
        ]
      }
    },
    daf_frame_beat: {
      name: '🕌 Daf Frame Classic Pulse',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'dum'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'frame_slap'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'zanjir'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'tak'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'dum'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'frame_slap'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'zanjir'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'frame_slap'
          }
        ]
      }
    },
    sufi_chant_rhythm: {
      name: '🕌 Sufi Chant Trance March',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'dum'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'zanjir'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'frame_slap'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'tak'
          }
        ],
        11: [
          {
            drum: 0,
            sound: 'frame_slap'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'zanjir'
          }
        ]
      }
    },
    desert_caravan: {
      name: '🕌 Caravan Desert Mirage',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'dum'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'tak'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'zanjir'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'frame_slap'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'dum'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'tak'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'zanjir'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'frame_slap'
          }
        ]
      }
    },
    daf_shake_roll: {
      name: '🕌 Persian Ring Shake Roll',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'dum'
          }
        ],
        1: [
          {
            drum: 0,
            sound: 'frame_slap'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'zanjir'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'tak'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'frame_slap'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'dum'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'frame_slap'
          }
        ],
        11: [
          {
            drum: 0,
            sound: 'zanjir'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'tak'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'frame_slap'
          }
        ]
      }
    },
    ancient_frame_pulse: {
      name: '🕌 Ancient Frame Heartbeat',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'dum'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'zanjir'
          }
        ]
      }
    },
    daf_spiritual_march: {
      name: '🕌 Spiritual Whirling March',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'dum'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'zanjir'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'tak'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'frame_slap'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'frame_slap'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'zanjir'
          }
        ]
      }
    },
    daf_fast_frenzied: {
      name: '🕌 Whirling Dervish Frenzy',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'dum'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'zanjir'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'frame_slap'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'tak'
          }
        ],
        11: [
          {
            drum: 0,
            sound: 'frame_slap'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'zanjir'
          }
        ]
      }
    },
    mystic_daf_dance: {
      name: '🕌 Mystic Oasis Dance',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'dum'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'frame_slap'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'dum'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'frame_slap'
          }
        ]
      }
    },
    daf_meditation_heartbeat: {
      name: '🕌 Meditative Sufi Breath',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'dum'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'frame_slap'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'zanjir'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'tak'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'dum'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'frame_slap'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'zanjir'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'frame_slap'
          }
        ]
      }
    }
  },
  riq: {
    arabic_riq_classic: {
      name: '🔔 Arabic Riq Classic Dum-Tak',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'dum'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'tak'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'tak'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'tak'
          }
        ]
      }
    },
    riq_jingle_tarantella: {
      name: '🔔 Riq Jingle Tarantella',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'dum'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'jingle_damp_split'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'tak'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'tak'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'dum'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'jingle_damp_split'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'tak'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'jingle_damp_split'
          }
        ]
      }
    },
    arabic_bazaar_tempo: {
      name: '🔔 Arabic Bazaar Tempo Pulse',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'tak'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'jingle_damp_split'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'tak'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'dum'
          }
        ],
        11: [
          {
            drum: 0,
            sound: 'jingle_damp_split'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'tak'
          }
        ]
      }
    },
    riq_bellydance: {
      name: '🔔 Egyptian Bellydance Wahda',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'dum'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'tak'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'tak'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'jingle_damp_split'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'dum'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'tak'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'tak'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'jingle_damp_split'
          }
        ]
      }
    },
    riq_shaking_roll: {
      name: '🔔 Shaking Brass Jingle Roll',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'dum'
          }
        ],
        1: [
          {
            drum: 0,
            sound: 'jingle_damp_split'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'tak'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'tak'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'jingle_damp_split'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'dum'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'jingle_damp_split'
          }
        ],
        11: [
          {
            drum: 0,
            sound: 'tak'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'tak'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'jingle_damp_split'
          }
        ]
      }
    },
    mystic_riq_trance: {
      name: '🔔 Mystic Jingle Heartbeat',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'dum'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'tak'
          }
        ]
      }
    },
    cairo_street_procession: {
      name: '🔔 Cairo Street Processional',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'dum'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'tak'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'tak'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'jingle_damp_split'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'jingle_damp_split'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'tak'
          }
        ]
      }
    },
    riq_tik_tak: {
      name: '🔔 Rapid Tik-Tak Jingle',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'dum'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'tak'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'jingle_damp_split'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'tak'
          }
        ],
        11: [
          {
            drum: 0,
            sound: 'jingle_damp_split'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'tak'
          }
        ]
      }
    },
    desert_oasis_dance: {
      name: '🔔 Desert Oasis Sunset Jingle',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'dum'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'jingle_damp_split'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'dum'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'jingle_damp_split'
          }
        ]
      }
    },
    riq_festival_bounce: {
      name: '🔔 Middle East Festival Bounce',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'dum'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'jingle_damp_split'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'tak'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'tak'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'dum'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'jingle_damp_split'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'tak'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'jingle_damp_split'
          }
        ]
      }
    }
  },
  surdo: {
    brazilian_surdo_batucada: {
      name: '🥁 Surdo Batucada Basic Boom',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'open_strike'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'open_strike'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'rim_click'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'open_strike'
          }
        ]
      }
    },
    surdo_boom_rhythm: {
      name: '🥁 Rio Carnival Pulse',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'open_strike'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'muted_mallet_strike'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'open_strike'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'rim_click'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'open_strike'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'muted_mallet_strike'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'open_strike'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'rim_click'
          }
        ]
      }
    },
    samba_reggae_heartbeat: {
      name: '🥁 Bahia Samba Reggae Heart',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'open_strike'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'muted_mallet_strike'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'rim_click'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'open_strike'
          }
        ],
        11: [
          {
            drum: 0,
            sound: 'rim_click'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'open_strike'
          }
        ]
      }
    },
    rio_surdo_procession: {
      name: '🥁 Street Parade Heavy Bass',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'open_strike'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'rim_click'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'open_strike'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'muted_mallet_strike'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'open_strike'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'rim_click'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'open_strike'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'rim_click'
          }
        ]
      }
    },
    surdo_pagode_groove: {
      name: '🥁 Backyard Pagode Pulse',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'open_strike'
          }
        ],
        1: [
          {
            drum: 0,
            sound: 'muted_mallet_strike'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'open_strike'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'rim_click'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'rim_click'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'open_strike'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'muted_mallet_strike'
          }
        ],
        11: [
          {
            drum: 0,
            sound: 'open_strike'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'rim_click'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'rim_click'
          }
        ]
      }
    },
    surdo_carnival_frenzy: {
      name: '🥁 Carnival Arena Heavy Boom',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'open_strike'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'open_strike'
          }
        ]
      }
    },
    surdo_deep_march: {
      name: '🥁 Deep Forest Marching Beats',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'open_strike'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'open_strike'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'rim_click'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'muted_mallet_strike'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'rim_click'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'open_strike'
          }
        ]
      }
    },
    surdo_syncopated_pulse: {
      name: '🥁 Syncopated Samba Drive',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'open_strike'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'open_strike'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'rim_click'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'rim_click'
          }
        ],
        11: [
          {
            drum: 0,
            sound: 'muted_mallet_strike'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'open_strike'
          }
        ]
      }
    },
    surdo_thunder_samba: {
      name: '🥁 Thunderous Batucada Climax',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'open_strike'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'muted_mallet_strike'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'open_strike'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'muted_mallet_strike'
          }
        ]
      }
    },
    surdo_tropical_funk: {
      name: '🥁 Deep Tropical Samba Funk',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'open_strike'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'rim_click'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'open_strike'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'rim_click'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'open_strike'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'rim_click'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'open_strike'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'muted_mallet_strike'
          }
        ]
      }
    }
  },
  pandeiro: {
    pandeiro_samba_basic: {
      name: '🪘 Samba Pandeiro Basic Tap',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'polegar'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'manoteo'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'polegar'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'manoteo'
          }
        ]
      }
    },
    pandeiro_choro_tempo: {
      name: '🪘 Classic Choro Bounce',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'polegar'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'chacoalho'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'manoteo'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'polegar'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'polegar'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'chacoalho'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'manoteo'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'rim_click'
          }
        ]
      }
    },
    pandeiro_pagode_roll: {
      name: '🪘 Backyard Pagode Roll',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'manoteo'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'chacoalho'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'polegar'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'polegar'
          }
        ],
        11: [
          {
            drum: 0,
            sound: 'rim_click'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'manoteo'
          }
        ]
      }
    },
    pandeiro_capoeira_jingle: {
      name: '🪘 Capoeira Ring Jingle',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'polegar'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'polegar'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'manoteo'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'chacoalho'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'polegar'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'polegar'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'manoteo'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'rim_click'
          }
        ]
      }
    },
    pandeiro_funky_thumb: {
      name: '🪘 Funky Brazilian Thumb Slap',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'polegar'
          }
        ],
        1: [
          {
            drum: 0,
            sound: 'chacoalho'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'manoteo'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'polegar'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'rim_click'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'polegar'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'chacoalho'
          }
        ],
        11: [
          {
            drum: 0,
            sound: 'manoteo'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'polegar'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'rim_click'
          }
        ]
      }
    },
    pandeiro_street_groove: {
      name: '🪘 Rio Street Platinela Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'polegar'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'manoteo'
          }
        ]
      }
    },
    pandeiro_fast_roll: {
      name: '🪘 Platinela Fast Rolling Jingle',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'polegar'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'manoteo'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'polegar'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'chacoalho'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'rim_click'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'manoteo'
          }
        ]
      }
    },
    pandeiro_acoustic_session: {
      name: '🪘 Cozy Acoustic Choro Session',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'polegar'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'manoteo'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'rim_click'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'polegar'
          }
        ],
        11: [
          {
            drum: 0,
            sound: 'chacoalho'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'manoteo'
          }
        ]
      }
    },
    pandeiro_carnival_march: {
      name: '🪘 Samba de Enredo Street March',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'polegar'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'chacoalho'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'polegar'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'chacoalho'
          }
        ]
      }
    },
    pandeiro_bossa_nova: {
      name: '🪘 Smooth Copacabana Bossa',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'polegar'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'rim_click'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'manoteo'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'polegar'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'polegar'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'rim_click'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'manoteo'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'chacoalho'
          }
        ]
      }
    }
  },
  tamborim: {
    tamborim_samba_carreteiro: {
      name: '💥 Samba Carreteiro Whip',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'toque_aberto'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'virada'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'muted_back_finger_press'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'virada'
          }
        ]
      }
    },
    tamborim_telecoteco: {
      name: '💥 Teleco-Teco Samba Accent',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'toque_aberto'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'muted_back_finger_press'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'virada'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'muted_back_finger_press'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'toque_aberto'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'muted_back_finger_press'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'virada'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'virada'
          }
        ]
      }
    },
    tamborim_rim_slap: {
      name: '💥 Sharp Teleco Rim Slap',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'virada'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'muted_back_finger_press'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'muted_back_finger_press'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'toque_aberto'
          }
        ],
        11: [
          {
            drum: 0,
            sound: 'virada'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'virada'
          }
        ]
      }
    },
    tamborim_whip_frenzy: {
      name: '💥 Dynamic Drum Turn Whip',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'toque_aberto'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'muted_back_finger_press'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'virada'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'muted_back_finger_press'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'toque_aberto'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'muted_back_finger_press'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'virada'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'virada'
          }
        ]
      }
    },
    tamborim_carnival_push: {
      name: '💥 Carnival Parade Arena Push',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'toque_aberto'
          }
        ],
        1: [
          {
            drum: 0,
            sound: 'muted_back_finger_press'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'virada'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'muted_back_finger_press'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'virada'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'toque_aberto'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'muted_back_finger_press'
          }
        ],
        11: [
          {
            drum: 0,
            sound: 'virada'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'muted_back_finger_press'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'virada'
          }
        ]
      }
    },
    tamborim_fast_cross: {
      name: '💥 Rapid Samba Cross Accent',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'toque_aberto'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'virada'
          }
        ]
      }
    },
    tamborim_synco_beat: {
      name: '💥 High Speed Syncopated Whip',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'toque_aberto'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'virada'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'muted_back_finger_press'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'muted_back_finger_press'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'virada'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'virada'
          }
        ]
      }
    },
    tamborim_samba_reggae: {
      name: '💥 Bahia Street Samba Reggae',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'toque_aberto'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'virada'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'virada'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'muted_back_finger_press'
          }
        ],
        11: [
          {
            drum: 0,
            sound: 'muted_back_finger_press'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'virada'
          }
        ]
      }
    },
    tamborim_street_parade: {
      name: '💥 Rio Carnival Street Whip',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'toque_aberto'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'muted_back_finger_press'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'toque_aberto'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'muted_back_finger_press'
          }
        ]
      }
    },
    tamborim_funk_accent: {
      name: '💥 High Pitch Tamborim Funk',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'toque_aberto'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'virada'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'virada'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'muted_back_finger_press'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'toque_aberto'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'virada'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'virada'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'muted_back_finger_press'
          }
        ]
      }
    }
  },
  repinique: {
    repinique_samba_intro: {
      name: '⚡ Repinique Samba Lead Call',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'stick_slide_pitch_bend'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'baqueta'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'mano'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'baqueta'
          }
        ]
      }
    },
    repinique_call_response: {
      name: '⚡ Batucada Call & Response',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'stick_slide_pitch_bend'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'stick_slide_pitch_bend'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'baqueta'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'mano'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'stick_slide_pitch_bend'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'stick_slide_pitch_bend'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'baqueta'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'stick_slide_pitch_bend'
          }
        ]
      }
    },
    repinique_frenzy_roll: {
      name: '⚡ Street Stick Click Frenzy',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'baqueta'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'stick_slide_pitch_bend'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'mano'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'stick_slide_pitch_bend'
          }
        ],
        11: [
          {
            drum: 0,
            sound: 'stick_slide_pitch_bend'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'baqueta'
          }
        ]
      }
    },
    repinique_batucada_lead: {
      name: '⚡ Arena Repinique Master Call',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'stick_slide_pitch_bend'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'mano'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'baqueta'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'stick_slide_pitch_bend'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'stick_slide_pitch_bend'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'mano'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'baqueta'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'stick_slide_pitch_bend'
          }
        ]
      }
    },
    repinique_stick_accent: {
      name: '⚡ Syncopated Stick Slap',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'stick_slide_pitch_bend'
          }
        ],
        1: [
          {
            drum: 0,
            sound: 'stick_slide_pitch_bend'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'baqueta'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'mano'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'stick_slide_pitch_bend'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'stick_slide_pitch_bend'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'stick_slide_pitch_bend'
          }
        ],
        11: [
          {
            drum: 0,
            sound: 'baqueta'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'mano'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'stick_slide_pitch_bend'
          }
        ]
      }
    },
    repinique_solo_burst: {
      name: '⚡ Carnival Arena Solo Burst',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'stick_slide_pitch_bend'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'baqueta'
          }
        ]
      }
    },
    repinique_carnival_rush: {
      name: '⚡ High Speed Carnival Rush',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'stick_slide_pitch_bend'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'baqueta'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'mano'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'stick_slide_pitch_bend'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'stick_slide_pitch_bend'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'baqueta'
          }
        ]
      }
    },
    repinique_syncopated_whip: {
      name: '⚡ Bahia Street Reggae Repinique',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'stick_slide_pitch_bend'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'baqueta'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'stick_slide_pitch_bend'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'mano'
          }
        ],
        11: [
          {
            drum: 0,
            sound: 'stick_slide_pitch_bend'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'baqueta'
          }
        ]
      }
    },
    repinique_samba_funk: {
      name: '⚡ Rio Street Carnival Beat',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'stick_slide_pitch_bend'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'stick_slide_pitch_bend'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'stick_slide_pitch_bend'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'stick_slide_pitch_bend'
          }
        ]
      }
    },
    repinique_batucada_roll: {
      name: '⚡ High Pitch Batucada Drive',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'stick_slide_pitch_bend'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'stick_slide_pitch_bend'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'baqueta'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'mano'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'stick_slide_pitch_bend'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'stick_slide_pitch_bend'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'baqueta'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'stick_slide_pitch_bend'
          }
        ]
      }
    }
  },
  bendir: {
    bendir_moroccan_groove: {
      name: '🥁 Berber Buzz Traditional',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'dum'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'kah'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'tak'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'kah'
          }
        ]
      }
    },
    bendir_buzz_tempo: {
      name: '🥁 Bendir Frame Buzz Pulse',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'dum'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'snare_rattle_mute'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'kah'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'tak'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'dum'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'snare_rattle_mute'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'kah'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'fingernail_rim_rim'
          }
        ]
      }
    },
    bendir_mediterranean_waltz: {
      name: '🥁 Moroccan Desert Waltz',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'dum'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'kah'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'fingernail_rim_rim'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'tak'
          }
        ]
      }
    },
    bendir_berber_dance: {
      name: '🥁 North African Berber Dance',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'dum'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'tak'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'kah'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'snare_rattle_mute'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'dum'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'tak'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'kah'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'fingernail_rim_rim'
          }
        ]
      }
    },
    bendir_mystic_procession: {
      name: '🥁 Mystic Snare Buzz March',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'dum'
          }
        ],
        1: [
          {
            drum: 0,
            sound: 'snare_rattle_mute'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'kah'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'tak'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'fingernail_rim_rim'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'dum'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'snare_rattle_mute'
          }
        ],
        11: [
          {
            drum: 0,
            sound: 'kah'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'tak'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'fingernail_rim_rim'
          }
        ]
      }
    },
    bendir_trance_pulse: {
      name: '🥁 Meditative Sufi Buzz Trance',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'dum'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'kah'
          }
        ]
      }
    },
    bendir_festival_roll: {
      name: '🥁 Moroccan Wedding Festival',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'dum'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'kah'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'tak'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'snare_rattle_mute'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'fingernail_rim_rim'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'kah'
          }
        ]
      }
    },
    bendir_sufi_chant: {
      name: '🥁 Sacred Berber Sufi Chant',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'dum'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'kah'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'fingernail_rim_rim'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'tak'
          }
        ],
        11: [
          {
            drum: 0,
            sound: 'snare_rattle_mute'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'kah'
          }
        ]
      }
    },
    bendir_canyon_heartbeat: {
      name: '🥁 Buzzing Canyon Heartbeat',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'dum'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'snare_rattle_mute'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'dum'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'snare_rattle_mute'
          }
        ]
      }
    },
    bendir_evening_repose: {
      name: '🥁 Peaceful Evening Sahara Sunset',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'dum'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'fingernail_rim_rim'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'kah'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'tak'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'dum'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'fingernail_rim_rim'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'kah'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'snare_rattle_mute'
          }
        ]
      }
    }
  },
  davul: {
    davul_halay_tempo: {
      name: '🥁 Halay Folk Dance Heavy Pulse',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'ubuk'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'ubuk'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'tokmak'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'ubuk'
          }
        ]
      }
    },
    davul_balkan_groove: {
      name: '🥁 Balkan Gypsy 9/8 Bounce',
      stepCount: 18,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'ubuk'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'ubuk'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'hoop_edge_snapping'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'tokmak'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'hoop_edge_snapping'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'ubuk'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'ubuk'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'tokmak'
          }
        ],
        16: [
          {
            drum: 0,
            sound: 'hoop_edge_snapping'
          }
        ]
      }
    },
    davul_epic_march: {
      name: '🥁 Ottoman Epic Military March',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'ubuk'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'hoop_edge_snapping'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'tokmak'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'ubuk'
          }
        ],
        11: [
          {
            drum: 0,
            sound: 'hoop_edge_snapping'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'ubuk'
          }
        ]
      }
    },
    davul_wedding_procession: {
      name: '🥁 Traditional Anatolian Wedding',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'ubuk'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'tokmak'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'ubuk'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'hoop_edge_snapping'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'ubuk'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'tokmak'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'ubuk'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'hoop_edge_snapping'
          }
        ]
      }
    },
    davul_dum_tek_classic: {
      name: '🥁 Davul Classic Dum-Tek Accent',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'ubuk'
          }
        ],
        1: [
          {
            drum: 0,
            sound: 'hoop_edge_snapping'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'ubuk'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'tokmak'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'hoop_edge_snapping'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'ubuk'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'hoop_edge_snapping'
          }
        ],
        11: [
          {
            drum: 0,
            sound: 'ubuk'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'tokmak'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'hoop_edge_snapping'
          }
        ]
      }
    },
    davul_festival_bounce: {
      name: '🥁 Turkish Festival Arena Bounce',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'ubuk'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'ubuk'
          }
        ]
      }
    },
    davul_sultan_dance: {
      name: '🥁 Sultan Palace Court Procession',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'ubuk'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'ubuk'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'tokmak'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'hoop_edge_snapping'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'hoop_edge_snapping'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'ubuk'
          }
        ]
      }
    },
    davul_shaman_frenzy: {
      name: '🥁 Shamanic Fire Circle Frenzy',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'ubuk'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'ubuk'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'hoop_edge_snapping'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'tokmak'
          }
        ],
        11: [
          {
            drum: 0,
            sound: 'hoop_edge_snapping'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'ubuk'
          }
        ]
      }
    },
    davul_syncopated_cane: {
      name: '🥁 Syncopated Cane Snap Drive',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'ubuk'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'hoop_edge_snapping'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'ubuk'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'hoop_edge_snapping'
          }
        ]
      }
    },
    davul_ancient_pulse: {
      name: '🥁 Ancient Anatolian Heartbeat',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'ubuk'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'hoop_edge_snapping'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'ubuk'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'tokmak'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'ubuk'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'hoop_edge_snapping'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'ubuk'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'hoop_edge_snapping'
          }
        ]
      }
    }
  },
  ashiko: {
    ashiko_yoruba_traditional: {
      name: '🥁 Yoruba Traditional Dance Pulse',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'bass_tone'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'open_tone'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'slap_tone'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'open_tone'
          }
        ]
      }
    },
    ashiko_tribal_heartbeat: {
      name: '🥁 Ashiko Tribal Heartbeat March',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'bass_tone'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'aro_golpe'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'open_tone'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'slap_tone'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'bass_tone'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'aro_golpe'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'open_tone'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'aro_golpe'
          }
        ]
      }
    },
    ashiko_singing_open_groove: {
      name: '🥁 Singing Open Cone Rhythm',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'open_tone'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'aro_golpe'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'slap_tone'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'bass_tone'
          }
        ],
        11: [
          {
            drum: 0,
            sound: 'aro_golpe'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'open_tone'
          }
        ]
      }
    },
    ashiko_highlife_beat: {
      name: '🥁 Highlife Yoruba Cone Dance',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'bass_tone'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'slap_tone'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'open_tone'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'aro_golpe'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'bass_tone'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'slap_tone'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'open_tone'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'aro_golpe'
          }
        ]
      }
    },
    ashiko_fast_polyrhythm: {
      name: '🥁 Yoruba High-Speed Polyrhythm',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'bass_tone'
          }
        ],
        1: [
          {
            drum: 0,
            sound: 'aro_golpe'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'open_tone'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'slap_tone'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'aro_golpe'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'bass_tone'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'aro_golpe'
          }
        ],
        11: [
          {
            drum: 0,
            sound: 'open_tone'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'slap_tone'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'aro_golpe'
          }
        ]
      }
    },
    ashiko_ritual_dance: {
      name: '🥁 Sacred Forest Ritual Dance',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'bass_tone'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'open_tone'
          }
        ]
      }
    },
    ashiko_village_call: {
      name: '🥁 Ancestral Village Call Drums',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'bass_tone'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'open_tone'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'slap_tone'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'aro_golpe'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'aro_golpe'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'open_tone'
          }
        ]
      }
    },
    ashiko_syncopated_slap: {
      name: '🥁 Cone Drum Dry Sharp Slaps',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'bass_tone'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'open_tone'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'aro_golpe'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'slap_tone'
          }
        ],
        11: [
          {
            drum: 0,
            sound: 'aro_golpe'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'open_tone'
          }
        ]
      }
    },
    ashiko_ancestral_parade: {
      name: '🥁 Yoruba Royal Ancestral Parade',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'bass_tone'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'aro_golpe'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'bass_tone'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'aro_golpe'
          }
        ]
      }
    },
    ashiko_shaman_trance: {
      name: '🥁 Spiritual Ashiko Cone Trance',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'bass_tone'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'aro_golpe'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'open_tone'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'slap_tone'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'bass_tone'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'aro_golpe'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'open_tone'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'aro_golpe'
          }
        ]
      }
    }
  },
  dunun: {
    dunun_dununba_basic: {
      name: '🥁 Dununba Giant Thunder Boom',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'open_strike'
          }
        ],
        4: [
          {
            drum: 1,
            sound: 'open_strike'
          }
        ],
        8: [
          {
            drum: 2,
            sound: 'bell_rim_shot'
          }
        ],
        12: [
          {
            drum: 1,
            sound: 'open_strike'
          }
        ]
      }
    },
    dunun_sangban_pulse: {
      name: '🥁 Sangban Middle Voice Pulse',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 1,
            sound: 'open_strike'
          }
        ],
        2: [
          {
            drum: 1,
            sound: 'muted_strike'
          }
        ],
        4: [
          {
            drum: 1,
            sound: 'open_strike'
          }
        ],
        6: [
          {
            drum: 1,
            sound: 'bell_rim_shot'
          }
        ],
        8: [
          {
            drum: 1,
            sound: 'open_strike'
          }
        ],
        10: [
          {
            drum: 1,
            sound: 'muted_strike'
          }
        ],
        12: [
          {
            drum: 1,
            sound: 'open_strike'
          }
        ],
        14: [
          {
            drum: 1,
            sound: 'bell_rim_shot'
          }
        ]
      }
    },
    dunun_kenkeni_tempo: {
      name: '🥁 Kenkeni High Speed Keeper',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 2,
            sound: 'open_strike'
          }
        ],
        3: [
          {
            drum: 2,
            sound: 'muted_strike'
          }
        ],
        6: [
          {
            drum: 2,
            sound: 'bell_rim_shot'
          }
        ],
        8: [
          {
            drum: 2,
            sound: 'open_strike'
          }
        ],
        11: [
          {
            drum: 2,
            sound: 'bell_rim_shot'
          }
        ],
        14: [
          {
            drum: 2,
            sound: 'open_strike'
          }
        ]
      }
    },
    dunun_all_polyrhythm: {
      name: '🥁 Manding 3-Drum Polyrhythm',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'open_strike'
          }
        ],
        2: [
          {
            drum: 2,
            sound: 'bell_rim_shot'
          }
        ],
        4: [
          {
            drum: 1,
            sound: 'open_strike'
          }
        ],
        6: [
          {
            drum: 1,
            sound: 'muted_strike'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'open_strike'
          }
        ],
        10: [
          {
            drum: 2,
            sound: 'bell_rim_shot'
          }
        ],
        12: [
          {
            drum: 1,
            sound: 'open_strike'
          }
        ],
        14: [
          {
            drum: 1,
            sound: 'bell_rim_shot'
          }
        ]
      }
    },
    dunun_west_african_groove: {
      name: '🥁 Guinea Village Dunun Drumming',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'open_strike'
          }
        ],
        1: [
          {
            drum: 1,
            sound: 'muted_strike'
          }
        ],
        3: [
          {
            drum: 1,
            sound: 'open_strike'
          }
        ],
        4: [
          {
            drum: 2,
            sound: 'bell_rim_shot'
          }
        ],
        6: [
          {
            drum: 2,
            sound: 'bell_rim_shot'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'open_strike'
          }
        ],
        9: [
          {
            drum: 1,
            sound: 'muted_strike'
          }
        ],
        11: [
          {
            drum: 1,
            sound: 'open_strike'
          }
        ],
        12: [
          {
            drum: 2,
            sound: 'bell_rim_shot'
          }
        ],
        14: [
          {
            drum: 2,
            sound: 'bell_rim_shot'
          }
        ]
      }
    },
    dunun_village_harvest_dance: {
      name: '🥁 Traditional Harvest Dununba',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'open_strike'
          }
        ],
        8: [
          {
            drum: 1,
            sound: 'open_strike'
          }
        ]
      }
    },
    dunun_royal_entrance: {
      name: '🥁 Manding Chiefs Royal March',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'open_strike'
          }
        ],
        2: [
          {
            drum: 1,
            sound: 'open_strike'
          }
        ],
        4: [
          {
            drum: 2,
            sound: 'bell_rim_shot'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'muted_strike'
          }
        ],
        8: [
          {
            drum: 1,
            sound: 'bell_rim_shot'
          }
        ],
        10: [
          {
            drum: 2,
            sound: 'open_strike'
          }
        ]
      }
    },
    dunun_warriors_march: {
      name: '🥁 West African Dunun Warriors',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'open_strike'
          }
        ],
        3: [
          {
            drum: 1,
            sound: 'open_strike'
          }
        ],
        6: [
          {
            drum: 1,
            sound: 'bell_rim_shot'
          }
        ],
        8: [
          {
            drum: 2,
            sound: 'bell_rim_shot'
          }
        ],
        11: [
          {
            drum: 2,
            sound: 'muted_strike'
          }
        ],
        14: [
          {
            drum: 1,
            sound: 'open_strike'
          }
        ]
      }
    },
    dunun_syncopated_bells: {
      name: '🥁 Syncopated Dununba Iron Bell',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'open_strike'
          }
        ],
        4: [
          {
            drum: 2,
            sound: 'muted_strike'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'open_strike'
          }
        ],
        12: [
          {
            drum: 2,
            sound: 'muted_strike'
          }
        ]
      }
    },
    dunun_manding_pulse: {
      name: '🥁 Master Dunun Polyrhythmic Pulse',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'open_strike'
          }
        ],
        2: [
          {
            drum: 1,
            sound: 'bell_rim_shot'
          }
        ],
        4: [
          {
            drum: 1,
            sound: 'open_strike'
          }
        ],
        6: [
          {
            drum: 2,
            sound: 'bell_rim_shot'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'open_strike'
          }
        ],
        10: [
          {
            drum: 1,
            sound: 'bell_rim_shot'
          }
        ],
        12: [
          {
            drum: 1,
            sound: 'open_strike'
          }
        ],
        14: [
          {
            drum: 2,
            sound: 'muted_strike'
          }
        ]
      }
    }
  },
  teponaztli: {
    teponaztli_aztec_ritual: {
      name: '🪵 Aztec Slit Drum Temple Chant',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'long_tongue_strike'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'short_tongue_strike'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'side_body_hit'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'short_tongue_strike'
          }
        ]
      }
    },
    teponaztli_low_high: {
      name: '🪵 Two-Tone Mesoamerican Pulse',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'long_tongue_strike'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'long_tongue_strike'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'short_tongue_strike'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'side_body_hit'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'long_tongue_strike'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'long_tongue_strike'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'short_tongue_strike'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'side_body_hit'
          }
        ]
      }
    },
    teponaztli_jungle_echoes: {
      name: '🪵 Mayan Forest Hollow Echoes',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'short_tongue_strike'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'long_tongue_strike'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'side_body_hit'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'long_tongue_strike'
          }
        ],
        11: [
          {
            drum: 0,
            sound: 'side_body_hit'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'short_tongue_strike'
          }
        ]
      }
    },
    teponaztli_double_tongue: {
      name: '🪵 Aztec Warrior Battle Call',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'long_tongue_strike'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'side_body_hit'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'short_tongue_strike'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'long_tongue_strike'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'long_tongue_strike'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'side_body_hit'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'short_tongue_strike'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'side_body_hit'
          }
        ]
      }
    },
    teponaztli_shamanic_pulse: {
      name: '🪵 Mesoamerican Fire Dancer',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'long_tongue_strike'
          }
        ],
        1: [
          {
            drum: 0,
            sound: 'long_tongue_strike'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'short_tongue_strike'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'side_body_hit'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'side_body_hit'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'long_tongue_strike'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'long_tongue_strike'
          }
        ],
        11: [
          {
            drum: 0,
            sound: 'short_tongue_strike'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'side_body_hit'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'side_body_hit'
          }
        ]
      }
    },
    teponaztli_hollow_wood: {
      name: '🪵 Aztec Slit Drum Hollow Wood',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'long_tongue_strike'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'short_tongue_strike'
          }
        ]
      }
    },
    teponaztli_mesoamerican_groove: {
      name: '🪵 Rain God Tlaloc Ceremony',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'long_tongue_strike'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'short_tongue_strike'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'side_body_hit'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'long_tongue_strike'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'side_body_hit'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'short_tongue_strike'
          }
        ]
      }
    },
    teponaztli_sacred_temple: {
      name: '🪵 Tenochtitlan Temple Procession',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'long_tongue_strike'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'short_tongue_strike'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'side_body_hit'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'side_body_hit'
          }
        ],
        11: [
          {
            drum: 0,
            sound: 'long_tongue_strike'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'short_tongue_strike'
          }
        ]
      }
    },
    teponaztli_fast_marimba_style: {
      name: '🪵 Fast Slit-Tongue Marimba Style',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'long_tongue_strike'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'long_tongue_strike'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'long_tongue_strike'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'long_tongue_strike'
          }
        ]
      }
    },
    teponaztli_ancient_forest: {
      name: '🪵 Ancient Slit Drum Forest Spirit',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'long_tongue_strike'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'side_body_hit'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'short_tongue_strike'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'side_body_hit'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'long_tongue_strike'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'side_body_hit'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'short_tongue_strike'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'long_tongue_strike'
          }
        ]
      }
    }
  },
  snare_drum: {
    snare_military_march: {
      name: '🥁 Orchestral Military Parade March',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'rimshot'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'center_stick_hit'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'buzz_press_roll'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'center_stick_hit'
          }
        ]
      }
    },
    snare_drum_roll_accent: {
      name: '🥁 Snare Buzz Roll Accent',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'rimshot'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'cross_stick_rim_click'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'center_stick_hit'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'buzz_press_roll'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'rimshot'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'cross_stick_rim_click'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'center_stick_hit'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'rim_shot_mute'
          }
        ]
      }
    },
    snare_jazz_ghost: {
      name: '🥁 Swing Jazz Ghost Notes',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'center_stick_hit'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'cross_stick_rim_click'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'buzz_press_roll'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'rimshot'
          }
        ],
        11: [
          {
            drum: 0,
            sound: 'rim_shot_mute'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'center_stick_hit'
          }
        ]
      }
    },
    snare_orchestral_intro: {
      name: '🥁 Orchestral Symphony Intro',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'rimshot'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'buzz_press_roll'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'center_stick_hit'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'cross_stick_rim_click'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'rimshot'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'buzz_press_roll'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'center_stick_hit'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'rim_shot_mute'
          }
        ]
      }
    },
    snare_rim_shot_groove: {
      name: '🥁 High Pitch Rim-Shot Funk',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'rimshot'
          }
        ],
        1: [
          {
            drum: 0,
            sound: 'cross_stick_rim_click'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'center_stick_hit'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'buzz_press_roll'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'rim_shot_mute'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'rimshot'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'cross_stick_rim_click'
          }
        ],
        11: [
          {
            drum: 0,
            sound: 'center_stick_hit'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'buzz_press_roll'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'rim_shot_mute'
          }
        ]
      }
    },
    snare_crescendo_build: {
      name: '🥁 Dramatic Orchestral Crescendo',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'rimshot'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'center_stick_hit'
          }
        ]
      }
    },
    snare_fast_rudiments: {
      name: '🥁 Parade Drum-Line Rudiments',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'rimshot'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'center_stick_hit'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'buzz_press_roll'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'cross_stick_rim_click'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'rim_shot_mute'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'center_stick_hit'
          }
        ]
      }
    },
    snare_syncopated_funk: {
      name: '🥁 Syncopated Funk Snare Rim',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'rimshot'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'center_stick_hit'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'rim_shot_mute'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'buzz_press_roll'
          }
        ],
        11: [
          {
            drum: 0,
            sound: 'cross_stick_rim_click'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'center_stick_hit'
          }
        ]
      }
    },
    snare_steady_pattern: {
      name: '🥁 Steady Symphony Backbeat',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'rimshot'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'cross_stick_rim_click'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'rimshot'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'cross_stick_rim_click'
          }
        ]
      }
    },
    snare_dramatic_climax: {
      name: '🥁 Epic Orchestral Snare Climax',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'rimshot'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'rim_shot_mute'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'center_stick_hit'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'buzz_press_roll'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'rimshot'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'rim_shot_mute'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'center_stick_hit'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'cross_stick_rim_click'
          }
        ]
      }
    }
  },
  shekere: {
    shekere_gourd_groove: {
      name: '📯 Beaded Gourd Carnival Shake',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'bottom_palm_bass_pop'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'bead_net_shake'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'net_twist_pull_rub'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'bead_net_shake'
          }
        ]
      }
    },
    shekere_bead_slap_bounce: {
      name: '📯 Dry Bead Slap Bounce',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'bottom_palm_bass_pop'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'neck_tap'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'bead_net_shake'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'net_twist_pull_rub'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'bottom_palm_bass_pop'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'neck_tap'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'bead_net_shake'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'neck_tap'
          }
        ]
      }
    },
    shekere_west_african_pulse: {
      name: '📯 West African Village Gourd',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'bead_net_shake'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'neck_tap'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'net_twist_pull_rub'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'bottom_palm_bass_pop'
          }
        ],
        11: [
          {
            drum: 0,
            sound: 'neck_tap'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'bead_net_shake'
          }
        ]
      }
    },
    shekere_shuffle_roll: {
      name: '📯 Dynamic Gourd Bead Shuffle',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'bottom_palm_bass_pop'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'net_twist_pull_rub'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'bead_net_shake'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'neck_tap'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'bottom_palm_bass_pop'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'net_twist_pull_rub'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'bead_net_shake'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'neck_tap'
          }
        ]
      }
    },
    shekere_yoruba_festival: {
      name: '📯 Yoruba Royal Festival Gourd',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'bottom_palm_bass_pop'
          }
        ],
        1: [
          {
            drum: 0,
            sound: 'neck_tap'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'bead_net_shake'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'net_twist_pull_rub'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'neck_tap'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'bottom_palm_bass_pop'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'neck_tap'
          }
        ],
        11: [
          {
            drum: 0,
            sound: 'bead_net_shake'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'net_twist_pull_rub'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'neck_tap'
          }
        ]
      }
    },
    shekere_highlife_accent: {
      name: '📯 Highlife Beaded Shuffling',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'bottom_palm_bass_pop'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'bead_net_shake'
          }
        ]
      }
    },
    shekere_shaking_trance: {
      name: '📯 Gourd Shake Shamanic Trance',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'bottom_palm_bass_pop'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'bead_net_shake'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'net_twist_pull_rub'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'neck_tap'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'neck_tap'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'bead_net_shake'
          }
        ]
      }
    },
    shekere_caribbean_groove: {
      name: '📯 Caribbean Sandy Coast Shuffle',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'bottom_palm_bass_pop'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'bead_net_shake'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'neck_tap'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'net_twist_pull_rub'
          }
        ],
        11: [
          {
            drum: 0,
            sound: 'neck_tap'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'bead_net_shake'
          }
        ]
      }
    },
    shekere_morning_meditation: {
      name: '📯 Gentle Ocean Breeze Shuffler',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'bottom_palm_bass_pop'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'neck_tap'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'bottom_palm_bass_pop'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'neck_tap'
          }
        ]
      }
    },
    shekere_ancestral_spirit: {
      name: '📯 Ancestral Royal Gourd Pulse',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'bottom_palm_bass_pop'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'neck_tap'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'bead_net_shake'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'net_twist_pull_rub'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'bottom_palm_bass_pop'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'neck_tap'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'bead_net_shake'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'neck_tap'
          }
        ]
      }
    }
  },
  alfaia: {
    alfaia_1: {
      name: '🥁 Maracatu Nação Pulse',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'golpe'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'aro'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'golpe'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'aro'
          }
        ]
      }
    },
    alfaia_2: {
      name: '🥁 Alfaia Modern Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'golpe'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'aro'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'golpe'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'aro'
          }
        ]
      }
    },
    alfaia_3: {
      name: '🥁 Alfaia Syncopated Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'golpe'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'stick_on_stick_hoop_rimshot'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'aro'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'stick_on_stick_hoop_rimshot'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'aro'
          }
        ]
      }
    },
    alfaia_4: {
      name: '🥁 Alfaia Upbeat Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'golpe'
          }
        ],
        1: [
          {
            drum: 0,
            sound: 'stick_on_stick_hoop_rimshot'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'aro'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'golpe'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'golpe'
          }
        ]
      }
    },
    alfaia_5: {
      name: '🥁 Alfaia Slow Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'golpe'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'golpe'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'aro'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'aro'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'golpe'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'golpe'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'aro'
          }
        ]
      }
    },
    alfaia_6: {
      name: '🥁 Alfaia Fast Groove',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'golpe'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'aro'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'golpe'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'aro'
          }
        ]
      }
    },
    alfaia_7: {
      name: '🥁 Alfaia Ritual Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'golpe'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'aro'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'stick_on_stick_hoop_rimshot'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'aro'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'golpe'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'aro'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'stick_on_stick_hoop_rimshot'
          }
        ]
      }
    },
    alfaia_8: {
      name: '🥁 Alfaia Festival Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'aro'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'aro'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'aro'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'aro'
          }
        ]
      }
    },
    alfaia_9: {
      name: '🥁 Alfaia Tribal Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'golpe'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'aro'
          }
        ],
        7: [
          {
            drum: 0,
            sound: 'golpe'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'aro'
          }
        ],
        13: [
          {
            drum: 0,
            sound: 'aro'
          }
        ]
      }
    },
    alfaia_10: {
      name: '🥁 Alfaia Ceremonial Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'golpe'
          }
        ],
        1: [
          {
            drum: 0,
            sound: 'stick_on_stick_hoop_rimshot'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'stick_on_stick_hoop_rimshot'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'stick_on_stick_hoop_rimshot'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'aro'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'golpe'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'aro'
          }
        ]
      }
    }
  },
  angklung: {
    angklung_1: {
      name: '🎋 Bamboo Forest Shake',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'sentak'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'geter'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'sentak'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'geter'
          }
        ]
      }
    },
    angklung_2: {
      name: '🥁 Angklung Modern Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'sentak'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'sentak'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'sentak'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'sentak'
          }
        ]
      }
    },
    angklung_3: {
      name: '🥁 Angklung Syncopated Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'sentak'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'frame_knock'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'geter'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'frame_knock'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'sentak'
          }
        ]
      }
    },
    angklung_4: {
      name: '🥁 Angklung Upbeat Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'sentak'
          }
        ],
        1: [
          {
            drum: 0,
            sound: 'frame_knock'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'geter'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'sentak'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'frame_knock'
          }
        ]
      }
    },
    angklung_5: {
      name: '🥁 Angklung Slow Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'sentak'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'frame_knock'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'geter'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'sentak'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'sentak'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'frame_knock'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'geter'
          }
        ]
      }
    },
    angklung_6: {
      name: '🥁 Angklung Fast Groove',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'sentak'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'geter'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'sentak'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'sentak'
          }
        ]
      }
    },
    angklung_7: {
      name: '🥁 Angklung Ritual Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'sentak'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'geter'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'frame_knock'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'geter'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'sentak'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'geter'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'frame_knock'
          }
        ]
      }
    },
    angklung_8: {
      name: '🥁 Angklung Festival Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'geter'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'sentak'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'geter'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'sentak'
          }
        ]
      }
    },
    angklung_9: {
      name: '🥁 Angklung Tribal Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'sentak'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'geter'
          }
        ],
        7: [
          {
            drum: 0,
            sound: 'frame_knock'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'sentak'
          }
        ],
        13: [
          {
            drum: 0,
            sound: 'geter'
          }
        ]
      }
    },
    angklung_10: {
      name: '🥁 Angklung Ceremonial Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'sentak'
          }
        ],
        1: [
          {
            drum: 0,
            sound: 'frame_knock'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'frame_knock'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'frame_knock'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'sentak'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'sentak'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'geter'
          }
        ]
      }
    }
  },
  bell_tree: {
    bell_tree_1: {
      name: '✨ Cascading Starlight',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'single_bell_tap'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'single_bell_tap'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'single_bell_tap'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'single_bell_tap'
          }
        ]
      }
    },
    bell_tree_2: {
      name: '🥁 Bell tree Modern Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'single_bell_tap'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'single_bell_tap'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'single_bell_tap'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'single_bell_tap'
          }
        ]
      }
    },
    bell_tree_3: {
      name: '🥁 Bell tree Syncopated Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'single_bell_tap'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'single_bell_tap'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'single_bell_tap'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'single_bell_tap'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'single_bell_tap'
          }
        ]
      }
    },
    bell_tree_4: {
      name: '🥁 Bell tree Upbeat Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'single_bell_tap'
          }
        ],
        1: [
          {
            drum: 0,
            sound: 'single_bell_tap'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'single_bell_tap'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'single_bell_tap'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'glissando_sweep'
          }
        ]
      }
    },
    bell_tree_5: {
      name: '🥁 Bell tree Slow Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'single_bell_tap'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'glissando_sweep'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'single_bell_tap'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'single_bell_tap'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'single_bell_tap'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'glissando_sweep'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'single_bell_tap'
          }
        ]
      }
    },
    bell_tree_6: {
      name: '🥁 Bell tree Fast Groove',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'single_bell_tap'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'single_bell_tap'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'single_bell_tap'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'single_bell_tap'
          }
        ]
      }
    },
    bell_tree_7: {
      name: '🥁 Bell tree Ritual Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'single_bell_tap'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'single_bell_tap'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'single_bell_tap'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'single_bell_tap'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'single_bell_tap'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'single_bell_tap'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'single_bell_tap'
          }
        ]
      }
    },
    bell_tree_8: {
      name: '🥁 Bell tree Festival Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'single_bell_tap'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'single_bell_tap'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'single_bell_tap'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'single_bell_tap'
          }
        ]
      }
    },
    bell_tree_9: {
      name: '🥁 Bell tree Tribal Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'single_bell_tap'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'single_bell_tap'
          }
        ],
        7: [
          {
            drum: 0,
            sound: 'glissando_sweep'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'single_bell_tap'
          }
        ],
        13: [
          {
            drum: 0,
            sound: 'single_bell_tap'
          }
        ]
      }
    },
    bell_tree_10: {
      name: '🥁 Bell tree Ceremonial Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'single_bell_tap'
          }
        ],
        1: [
          {
            drum: 0,
            sound: 'single_bell_tap'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'single_bell_tap'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'single_bell_tap'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'single_bell_tap'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'single_bell_tap'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'single_bell_tap'
          }
        ]
      }
    }
  },
  boomwhackers: {
    boomwhackers_1: {
      name: '🔴 Neon Tube Bounce',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'surface_strike'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'body_strike'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'surface_strike'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'body_strike'
          }
        ]
      }
    },
    boomwhackers_2: {
      name: '🥁 Boomwhackers Modern Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'surface_strike'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'body_strike'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'surface_strike'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'body_strike'
          }
        ]
      }
    },
    boomwhackers_3: {
      name: '🥁 Boomwhackers Syncopated Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'surface_strike'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'end_cap_pop'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'body_strike'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'end_cap_pop'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'body_strike'
          }
        ]
      }
    },
    boomwhackers_4: {
      name: '🥁 Boomwhackers Upbeat Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'surface_strike'
          }
        ],
        1: [
          {
            drum: 0,
            sound: 'end_cap_pop'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'body_strike'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'surface_strike'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'surface_strike'
          }
        ]
      }
    },
    boomwhackers_5: {
      name: '🥁 Boomwhackers Slow Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'surface_strike'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'surface_strike'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'body_strike'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'body_strike'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'surface_strike'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'surface_strike'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'body_strike'
          }
        ]
      }
    },
    boomwhackers_6: {
      name: '🥁 Boomwhackers Fast Groove',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'surface_strike'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'body_strike'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'surface_strike'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'body_strike'
          }
        ]
      }
    },
    boomwhackers_7: {
      name: '🥁 Boomwhackers Ritual Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'surface_strike'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'body_strike'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'end_cap_pop'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'body_strike'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'surface_strike'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'body_strike'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'end_cap_pop'
          }
        ]
      }
    },
    boomwhackers_8: {
      name: '🥁 Boomwhackers Festival Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'body_strike'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'body_strike'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'body_strike'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'body_strike'
          }
        ]
      }
    },
    boomwhackers_9: {
      name: '🥁 Boomwhackers Tribal Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'surface_strike'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'body_strike'
          }
        ],
        7: [
          {
            drum: 0,
            sound: 'surface_strike'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'body_strike'
          }
        ],
        13: [
          {
            drum: 0,
            sound: 'body_strike'
          }
        ]
      }
    },
    boomwhackers_10: {
      name: '🥁 Boomwhackers Ceremonial Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'surface_strike'
          }
        ],
        1: [
          {
            drum: 0,
            sound: 'end_cap_pop'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'end_cap_pop'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'end_cap_pop'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'body_strike'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'surface_strike'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'body_strike'
          }
        ]
      }
    }
  },
  cabasa: {
    cabasa_1: {
      name: '🪇 Snake Rattle Roll',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'cylinder_twist'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'cylinder_twist'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'cylinder_twist'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'cylinder_twist'
          }
        ]
      }
    },
    cabasa_2: {
      name: '🥁 Cabasa Modern Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'cylinder_twist'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'cylinder_twist'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'cylinder_twist'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'cylinder_twist'
          }
        ]
      }
    },
    cabasa_3: {
      name: '🥁 Cabasa Syncopated Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'cylinder_twist'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'cylinder_twist'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'cylinder_twist'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'cylinder_twist'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'cylinder_twist'
          }
        ]
      }
    },
    cabasa_4: {
      name: '🥁 Cabasa Upbeat Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'cylinder_twist'
          }
        ],
        1: [
          {
            drum: 0,
            sound: 'cylinder_twist'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'cylinder_twist'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'cylinder_twist'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'cylinder_twist'
          }
        ]
      }
    },
    cabasa_5: {
      name: '🥁 Cabasa Slow Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'cylinder_twist'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'cylinder_twist'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'cylinder_twist'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'cylinder_twist'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'cylinder_twist'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'cylinder_twist'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'cylinder_twist'
          }
        ]
      }
    },
    cabasa_6: {
      name: '🥁 Cabasa Fast Groove',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'cylinder_twist'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'cylinder_twist'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'cylinder_twist'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'cylinder_twist'
          }
        ]
      }
    },
    cabasa_7: {
      name: '🥁 Cabasa Ritual Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'cylinder_twist'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'cylinder_twist'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'cylinder_twist'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'cylinder_twist'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'cylinder_twist'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'cylinder_twist'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'cylinder_twist'
          }
        ]
      }
    },
    cabasa_8: {
      name: '🥁 Cabasa Festival Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'cylinder_twist'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'cylinder_twist'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'cylinder_twist'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'cylinder_twist'
          }
        ]
      }
    },
    cabasa_9: {
      name: '🥁 Cabasa Tribal Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'cylinder_twist'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'cylinder_twist'
          }
        ],
        7: [
          {
            drum: 0,
            sound: 'cylinder_twist'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'cylinder_twist'
          }
        ],
        13: [
          {
            drum: 0,
            sound: 'cylinder_twist'
          }
        ]
      }
    },
    cabasa_10: {
      name: '🥁 Cabasa Ceremonial Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'cylinder_twist'
          }
        ],
        1: [
          {
            drum: 0,
            sound: 'cylinder_twist'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'cylinder_twist'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'cylinder_twist'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'cylinder_twist'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'cylinder_twist'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'cylinder_twist'
          }
        ]
      }
    }
  },
  chocalho: {
    chocalho_1: {
      name: '🪇 Rio Carnival Jingle',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'linear_shake'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'accented_whip'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'linear_shake'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'accented_whip'
          }
        ]
      }
    },
    chocalho_2: {
      name: '🥁 Chocalho Modern Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'linear_shake'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'accented_whip'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'linear_shake'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'accented_whip'
          }
        ]
      }
    },
    chocalho_3: {
      name: '🥁 Chocalho Syncopated Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'linear_shake'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'accented_whip'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'accented_whip'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'accented_whip'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'accented_whip'
          }
        ]
      }
    },
    chocalho_4: {
      name: '🥁 Chocalho Upbeat Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'linear_shake'
          }
        ],
        1: [
          {
            drum: 0,
            sound: 'accented_whip'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'accented_whip'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'linear_shake'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'accented_whip'
          }
        ]
      }
    },
    chocalho_5: {
      name: '🥁 Chocalho Slow Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'linear_shake'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'accented_whip'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'accented_whip'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'accented_whip'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'linear_shake'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'accented_whip'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'accented_whip'
          }
        ]
      }
    },
    chocalho_6: {
      name: '🥁 Chocalho Fast Groove',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'linear_shake'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'accented_whip'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'linear_shake'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'accented_whip'
          }
        ]
      }
    },
    chocalho_7: {
      name: '🥁 Chocalho Ritual Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'linear_shake'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'accented_whip'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'accented_whip'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'accented_whip'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'linear_shake'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'accented_whip'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'accented_whip'
          }
        ]
      }
    },
    chocalho_8: {
      name: '🥁 Chocalho Festival Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'accented_whip'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'accented_whip'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'accented_whip'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'accented_whip'
          }
        ]
      }
    },
    chocalho_9: {
      name: '🥁 Chocalho Tribal Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'linear_shake'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'accented_whip'
          }
        ],
        7: [
          {
            drum: 0,
            sound: 'accented_whip'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'accented_whip'
          }
        ],
        13: [
          {
            drum: 0,
            sound: 'accented_whip'
          }
        ]
      }
    },
    chocalho_10: {
      name: '🥁 Chocalho Ceremonial Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'linear_shake'
          }
        ],
        1: [
          {
            drum: 0,
            sound: 'accented_whip'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'accented_whip'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'accented_whip'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'accented_whip'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'linear_shake'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'accented_whip'
          }
        ]
      }
    }
  },
  framed_rumbla: {
    framed_rumbla_1: {
      name: '🥁 Deep Resonant Frame',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'rumbla_bass'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'rumbla_open'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'rumbla_bass'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'rumbla_open'
          }
        ]
      }
    },
    framed_rumbla_2: {
      name: '🥁 Framed rumbla Modern Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'rumbla_bass'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'rumbla_slap'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'rumbla_bass'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'rumbla_slap'
          }
        ]
      }
    },
    framed_rumbla_3: {
      name: '🥁 Framed rumbla Syncopated Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'rumbla_bass'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'rumbla_mute'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'rumbla_open'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'rumbla_mute'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'rumbla_slap'
          }
        ]
      }
    },
    framed_rumbla_4: {
      name: '🥁 Framed rumbla Upbeat Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'rumbla_bass'
          }
        ],
        1: [
          {
            drum: 0,
            sound: 'rumbla_mute'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'rumbla_open'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'rumbla_bass'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'rumbla_tap'
          }
        ]
      }
    },
    framed_rumbla_5: {
      name: '🥁 Framed rumbla Slow Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'rumbla_bass'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'rumbla_tap'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'rumbla_open'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'rumbla_slap'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'rumbla_bass'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'rumbla_tap'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'rumbla_open'
          }
        ]
      }
    },
    framed_rumbla_6: {
      name: '🥁 Framed rumbla Fast Groove',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'rumbla_bass'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'rumbla_open'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'rumbla_bass'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'rumbla_slap'
          }
        ]
      }
    },
    framed_rumbla_7: {
      name: '🥁 Framed rumbla Ritual Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'rumbla_bass'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'rumbla_open'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'rumbla_mute'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'rumbla_open'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'rumbla_bass'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'rumbla_open'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'rumbla_mute'
          }
        ]
      }
    },
    framed_rumbla_8: {
      name: '🥁 Framed rumbla Festival Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'rumbla_open'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'rumbla_slap'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'rumbla_open'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'rumbla_slap'
          }
        ]
      }
    },
    framed_rumbla_9: {
      name: '🥁 Framed rumbla Tribal Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'rumbla_bass'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'rumbla_open'
          }
        ],
        7: [
          {
            drum: 0,
            sound: 'rumbla_tap'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'rumbla_slap'
          }
        ],
        13: [
          {
            drum: 0,
            sound: 'rumbla_open'
          }
        ]
      }
    },
    framed_rumbla_10: {
      name: '🥁 Framed rumbla Ceremonial Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'rumbla_bass'
          }
        ],
        1: [
          {
            drum: 0,
            sound: 'rumbla_mute'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'rumbla_mute'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'rumbla_mute'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'rumbla_slap'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'rumbla_bass'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'rumbla_open'
          }
        ]
      }
    }
  },
  friction_drum: {
    friction_drum_1: {
      name: "🦁 Lion's Roar Groan",
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'rub_low'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'rub_high'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'rub_low'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'rub_high'
          }
        ]
      }
    },
    friction_drum_2: {
      name: '🥁 Friction drum Modern Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'rub_low'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'rub_low'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'rub_low'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'rub_low'
          }
        ]
      }
    },
    friction_drum_3: {
      name: '🥁 Friction drum Syncopated Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'rub_low'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'rub_low'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'rub_high'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'rub_low'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'rub_low'
          }
        ]
      }
    },
    friction_drum_4: {
      name: '🥁 Friction drum Upbeat Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'rub_low'
          }
        ],
        1: [
          {
            drum: 0,
            sound: 'rub_low'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'rub_high'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'rub_low'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'rub_low'
          }
        ]
      }
    },
    friction_drum_5: {
      name: '🥁 Friction drum Slow Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'rub_low'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'rub_low'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'rub_high'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'rub_low'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'rub_low'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'rub_low'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'rub_high'
          }
        ]
      }
    },
    friction_drum_6: {
      name: '🥁 Friction drum Fast Groove',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'rub_low'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'rub_high'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'rub_low'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'rub_low'
          }
        ]
      }
    },
    friction_drum_7: {
      name: '🥁 Friction drum Ritual Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'rub_low'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'rub_high'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'rub_low'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'rub_high'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'rub_low'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'rub_high'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'rub_low'
          }
        ]
      }
    },
    friction_drum_8: {
      name: '🥁 Friction drum Festival Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'rub_high'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'rub_low'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'rub_high'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'rub_low'
          }
        ]
      }
    },
    friction_drum_9: {
      name: '🥁 Friction drum Tribal Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'rub_low'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'rub_high'
          }
        ],
        7: [
          {
            drum: 0,
            sound: 'rub_low'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'rub_low'
          }
        ],
        13: [
          {
            drum: 0,
            sound: 'rub_high'
          }
        ]
      }
    },
    friction_drum_10: {
      name: '🥁 Friction drum Ceremonial Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'rub_low'
          }
        ],
        1: [
          {
            drum: 0,
            sound: 'rub_low'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'rub_low'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'rub_low'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'rub_low'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'rub_low'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'rub_high'
          }
        ]
      }
    }
  },
  frog_rasp: {
    frog_rasp_1: {
      name: '🐸 Croaking Wood Frog',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'spine_scrape'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'spine_scrape'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'spine_scrape'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'spine_scrape'
          }
        ]
      }
    },
    frog_rasp_2: {
      name: '🥁 Frog rasp Modern Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'spine_scrape'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'spine_scrape'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'spine_scrape'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'spine_scrape'
          }
        ]
      }
    },
    frog_rasp_3: {
      name: '🥁 Frog rasp Syncopated Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'spine_scrape'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'spine_scrape'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'spine_scrape'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'spine_scrape'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'spine_scrape'
          }
        ]
      }
    },
    frog_rasp_4: {
      name: '🥁 Frog rasp Upbeat Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'spine_scrape'
          }
        ],
        1: [
          {
            drum: 0,
            sound: 'spine_scrape'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'spine_scrape'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'spine_scrape'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'spine_scrape'
          }
        ]
      }
    },
    frog_rasp_5: {
      name: '🥁 Frog rasp Slow Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'spine_scrape'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'spine_scrape'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'spine_scrape'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'spine_scrape'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'spine_scrape'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'spine_scrape'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'spine_scrape'
          }
        ]
      }
    },
    frog_rasp_6: {
      name: '🥁 Frog rasp Fast Groove',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'spine_scrape'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'spine_scrape'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'spine_scrape'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'spine_scrape'
          }
        ]
      }
    },
    frog_rasp_7: {
      name: '🥁 Frog rasp Ritual Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'spine_scrape'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'spine_scrape'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'spine_scrape'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'spine_scrape'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'spine_scrape'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'spine_scrape'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'spine_scrape'
          }
        ]
      }
    },
    frog_rasp_8: {
      name: '🥁 Frog rasp Festival Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'spine_scrape'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'spine_scrape'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'spine_scrape'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'spine_scrape'
          }
        ]
      }
    },
    frog_rasp_9: {
      name: '🥁 Frog rasp Tribal Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'spine_scrape'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'spine_scrape'
          }
        ],
        7: [
          {
            drum: 0,
            sound: 'spine_scrape'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'spine_scrape'
          }
        ],
        13: [
          {
            drum: 0,
            sound: 'spine_scrape'
          }
        ]
      }
    },
    frog_rasp_10: {
      name: '🥁 Frog rasp Ceremonial Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'spine_scrape'
          }
        ],
        1: [
          {
            drum: 0,
            sound: 'spine_scrape'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'spine_scrape'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'spine_scrape'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'spine_scrape'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'spine_scrape'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'spine_scrape'
          }
        ]
      }
    }
  },
  gome: {
    gome_1: {
      name: '🥁 Ga People Square Drum',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'palm_bass'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'corner_slap'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'palm_bass'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'corner_slap'
          }
        ]
      }
    },
    gome_2: {
      name: '🥁 Gome Modern Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'palm_bass'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'foot_pitch_bend'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'palm_bass'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'foot_pitch_bend'
          }
        ]
      }
    },
    gome_3: {
      name: '🥁 Gome Syncopated Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'palm_bass'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'heel_stamp'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'corner_slap'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'heel_stamp'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'foot_pitch_bend'
          }
        ]
      }
    },
    gome_4: {
      name: '🥁 Gome Upbeat Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'palm_bass'
          }
        ],
        1: [
          {
            drum: 0,
            sound: 'heel_stamp'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'corner_slap'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'palm_bass'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'heel_stamp'
          }
        ]
      }
    },
    gome_5: {
      name: '🥁 Gome Slow Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'palm_bass'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'heel_stamp'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'corner_slap'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'foot_pitch_bend'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'palm_bass'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'heel_stamp'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'corner_slap'
          }
        ]
      }
    },
    gome_6: {
      name: '🥁 Gome Fast Groove',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'palm_bass'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'corner_slap'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'palm_bass'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'foot_pitch_bend'
          }
        ]
      }
    },
    gome_7: {
      name: '🥁 Gome Ritual Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'palm_bass'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'corner_slap'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'heel_stamp'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'corner_slap'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'palm_bass'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'corner_slap'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'heel_stamp'
          }
        ]
      }
    },
    gome_8: {
      name: '🥁 Gome Festival Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'corner_slap'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'foot_pitch_bend'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'corner_slap'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'foot_pitch_bend'
          }
        ]
      }
    },
    gome_9: {
      name: '🥁 Gome Tribal Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'palm_bass'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'corner_slap'
          }
        ],
        7: [
          {
            drum: 0,
            sound: 'heel_stamp'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'foot_pitch_bend'
          }
        ],
        13: [
          {
            drum: 0,
            sound: 'corner_slap'
          }
        ]
      }
    },
    gome_10: {
      name: '🥁 Gome Ceremonial Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'palm_bass'
          }
        ],
        1: [
          {
            drum: 0,
            sound: 'heel_stamp'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'heel_stamp'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'heel_stamp'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'foot_pitch_bend'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'palm_bass'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'corner_slap'
          }
        ]
      }
    }
  },
  gran_cassa: {
    gran_cassa_1: {
      name: '💥 Orchestral Thunder Strike',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'glancing_arc_blow'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'hand_damping'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'glancing_arc_blow'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'hand_damping'
          }
        ]
      }
    },
    gran_cassa_2: {
      name: '🥁 Gran cassa Modern Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'glancing_arc_blow'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'hand_damping'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'glancing_arc_blow'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'hand_damping'
          }
        ]
      }
    },
    gran_cassa_3: {
      name: '🥁 Gran cassa Syncopated Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'glancing_arc_blow'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'secco_hit'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'hand_damping'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'secco_hit'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'hand_damping'
          }
        ]
      }
    },
    gran_cassa_4: {
      name: '🥁 Gran cassa Upbeat Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'glancing_arc_blow'
          }
        ],
        1: [
          {
            drum: 0,
            sound: 'secco_hit'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'hand_damping'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'glancing_arc_blow'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'shell_knock'
          }
        ]
      }
    },
    gran_cassa_5: {
      name: '🥁 Gran cassa Slow Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'glancing_arc_blow'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'shell_knock'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'hand_damping'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'hand_damping'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'glancing_arc_blow'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'shell_knock'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'hand_damping'
          }
        ]
      }
    },
    gran_cassa_6: {
      name: '🥁 Gran cassa Fast Groove',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'glancing_arc_blow'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'hand_damping'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'glancing_arc_blow'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'hand_damping'
          }
        ]
      }
    },
    gran_cassa_7: {
      name: '🥁 Gran cassa Ritual Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'glancing_arc_blow'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'hand_damping'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'secco_hit'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'hand_damping'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'glancing_arc_blow'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'hand_damping'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'secco_hit'
          }
        ]
      }
    },
    gran_cassa_8: {
      name: '🥁 Gran cassa Festival Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'hand_damping'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'hand_damping'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'hand_damping'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'hand_damping'
          }
        ]
      }
    },
    gran_cassa_9: {
      name: '🥁 Gran cassa Tribal Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'glancing_arc_blow'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'hand_damping'
          }
        ],
        7: [
          {
            drum: 0,
            sound: 'shell_knock'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'hand_damping'
          }
        ],
        13: [
          {
            drum: 0,
            sound: 'hand_damping'
          }
        ]
      }
    },
    gran_cassa_10: {
      name: '🥁 Gran cassa Ceremonial Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'glancing_arc_blow'
          }
        ],
        1: [
          {
            drum: 0,
            sound: 'secco_hit'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'secco_hit'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'secco_hit'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'hand_damping'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'glancing_arc_blow'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'hand_damping'
          }
        ]
      }
    }
  },
  gubguba: {
    gubguba_1: {
      name: '🎵 String Pluck Bounce',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'string_pluck'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'string_pluck'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'string_pluck'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'string_pluck'
          }
        ]
      }
    },
    gubguba_2: {
      name: '🥁 Gubguba Modern Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'string_pluck'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'string_pluck'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'string_pluck'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'string_pluck'
          }
        ]
      }
    },
    gubguba_3: {
      name: '🥁 Gubguba Syncopated Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'string_pluck'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'string_pluck'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'string_pluck'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'string_pluck'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'string_pluck'
          }
        ]
      }
    },
    gubguba_4: {
      name: '🥁 Gubguba Upbeat Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'string_pluck'
          }
        ],
        1: [
          {
            drum: 0,
            sound: 'string_pluck'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'string_pluck'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'string_pluck'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'string_pluck'
          }
        ]
      }
    },
    gubguba_5: {
      name: '🥁 Gubguba Slow Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'string_pluck'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'string_pluck'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'string_pluck'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'string_pluck'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'string_pluck'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'string_pluck'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'string_pluck'
          }
        ]
      }
    },
    gubguba_6: {
      name: '🥁 Gubguba Fast Groove',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'string_pluck'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'string_pluck'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'string_pluck'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'string_pluck'
          }
        ]
      }
    },
    gubguba_7: {
      name: '🥁 Gubguba Ritual Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'string_pluck'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'string_pluck'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'string_pluck'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'string_pluck'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'string_pluck'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'string_pluck'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'string_pluck'
          }
        ]
      }
    },
    gubguba_8: {
      name: '🥁 Gubguba Festival Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'string_pluck'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'string_pluck'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'string_pluck'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'string_pluck'
          }
        ]
      }
    },
    gubguba_9: {
      name: '🥁 Gubguba Tribal Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'string_pluck'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'string_pluck'
          }
        ],
        7: [
          {
            drum: 0,
            sound: 'string_pluck'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'string_pluck'
          }
        ],
        13: [
          {
            drum: 0,
            sound: 'string_pluck'
          }
        ]
      }
    },
    gubguba_10: {
      name: '🥁 Gubguba Ceremonial Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'string_pluck'
          }
        ],
        1: [
          {
            drum: 0,
            sound: 'string_pluck'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'string_pluck'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'string_pluck'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'string_pluck'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'string_pluck'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'string_pluck'
          }
        ]
      }
    }
  },
  guiro: {
    guiro_1: {
      name: '🪇 Cha-Cha Scrape',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'largo'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'largo'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'largo'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'largo'
          }
        ]
      }
    },
    guiro_2: {
      name: '🥁 Guiro Modern Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'largo'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'largo'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'largo'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'largo'
          }
        ]
      }
    },
    guiro_3: {
      name: '🥁 Guiro Syncopated Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'largo'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'largo'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'largo'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'largo'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'largo'
          }
        ]
      }
    },
    guiro_4: {
      name: '🥁 Guiro Upbeat Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'largo'
          }
        ],
        1: [
          {
            drum: 0,
            sound: 'largo'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'largo'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'largo'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'largo'
          }
        ]
      }
    },
    guiro_5: {
      name: '🥁 Guiro Slow Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'largo'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'largo'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'largo'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'largo'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'largo'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'largo'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'largo'
          }
        ]
      }
    },
    guiro_6: {
      name: '🥁 Guiro Fast Groove',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'largo'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'largo'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'largo'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'largo'
          }
        ]
      }
    },
    guiro_7: {
      name: '🥁 Guiro Ritual Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'largo'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'largo'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'largo'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'largo'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'largo'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'largo'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'largo'
          }
        ]
      }
    },
    guiro_8: {
      name: '🥁 Guiro Festival Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'largo'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'largo'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'largo'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'largo'
          }
        ]
      }
    },
    guiro_9: {
      name: '🥁 Guiro Tribal Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'largo'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'largo'
          }
        ],
        7: [
          {
            drum: 0,
            sound: 'largo'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'largo'
          }
        ],
        13: [
          {
            drum: 0,
            sound: 'largo'
          }
        ]
      }
    },
    guiro_10: {
      name: '🥁 Guiro Ceremonial Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'largo'
          }
        ],
        1: [
          {
            drum: 0,
            sound: 'largo'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'largo'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'largo'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'largo'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'largo'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'largo'
          }
        ]
      }
    }
  },
  jaw_harp: {
    jaw_harp_1: {
      name: '〽️ Boingy Jaw Twang',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'trigger_pluck'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'trigger_pluck'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'trigger_pluck'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'trigger_pluck'
          }
        ]
      }
    },
    jaw_harp_2: {
      name: '🥁 Jaw harp Modern Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'trigger_pluck'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'trigger_pluck'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'trigger_pluck'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'trigger_pluck'
          }
        ]
      }
    },
    jaw_harp_3: {
      name: '🥁 Jaw harp Syncopated Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'trigger_pluck'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'trigger_pluck'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'trigger_pluck'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'trigger_pluck'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'trigger_pluck'
          }
        ]
      }
    },
    jaw_harp_4: {
      name: '🥁 Jaw harp Upbeat Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'trigger_pluck'
          }
        ],
        1: [
          {
            drum: 0,
            sound: 'trigger_pluck'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'trigger_pluck'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'trigger_pluck'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'trigger_pluck'
          }
        ]
      }
    },
    jaw_harp_5: {
      name: '🥁 Jaw harp Slow Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'trigger_pluck'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'trigger_pluck'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'trigger_pluck'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'trigger_pluck'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'trigger_pluck'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'trigger_pluck'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'trigger_pluck'
          }
        ]
      }
    },
    jaw_harp_6: {
      name: '🥁 Jaw harp Fast Groove',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'trigger_pluck'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'trigger_pluck'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'trigger_pluck'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'trigger_pluck'
          }
        ]
      }
    },
    jaw_harp_7: {
      name: '🥁 Jaw harp Ritual Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'trigger_pluck'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'trigger_pluck'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'trigger_pluck'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'trigger_pluck'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'trigger_pluck'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'trigger_pluck'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'trigger_pluck'
          }
        ]
      }
    },
    jaw_harp_8: {
      name: '🥁 Jaw harp Festival Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'trigger_pluck'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'trigger_pluck'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'trigger_pluck'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'trigger_pluck'
          }
        ]
      }
    },
    jaw_harp_9: {
      name: '🥁 Jaw harp Tribal Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'trigger_pluck'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'trigger_pluck'
          }
        ],
        7: [
          {
            drum: 0,
            sound: 'trigger_pluck'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'trigger_pluck'
          }
        ],
        13: [
          {
            drum: 0,
            sound: 'trigger_pluck'
          }
        ]
      }
    },
    jaw_harp_10: {
      name: '🥁 Jaw harp Ceremonial Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'trigger_pluck'
          }
        ],
        1: [
          {
            drum: 0,
            sound: 'trigger_pluck'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'trigger_pluck'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'trigger_pluck'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'trigger_pluck'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'trigger_pluck'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'trigger_pluck'
          }
        ]
      }
    }
  },
  kanjira: {
    kanjira_1: {
      name: '🥁 South Indian Lizard Skin',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'split_finger_edge_tap'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'inner_skin_pitch_glide'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'split_finger_edge_tap'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'inner_skin_pitch_glide'
          }
        ]
      }
    },
    kanjira_2: {
      name: '🥁 Kanjira Modern Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'split_finger_edge_tap'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'inner_skin_pitch_glide'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'split_finger_edge_tap'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'inner_skin_pitch_glide'
          }
        ]
      }
    },
    kanjira_3: {
      name: '🥁 Kanjira Syncopated Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'split_finger_edge_tap'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'inner_skin_pitch_glide'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'inner_skin_pitch_glide'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'inner_skin_pitch_glide'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'inner_skin_pitch_glide'
          }
        ]
      }
    },
    kanjira_4: {
      name: '🥁 Kanjira Upbeat Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'split_finger_edge_tap'
          }
        ],
        1: [
          {
            drum: 0,
            sound: 'inner_skin_pitch_glide'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'inner_skin_pitch_glide'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'split_finger_edge_tap'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'inner_skin_pitch_glide'
          }
        ]
      }
    },
    kanjira_5: {
      name: '🥁 Kanjira Slow Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'split_finger_edge_tap'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'inner_skin_pitch_glide'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'inner_skin_pitch_glide'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'inner_skin_pitch_glide'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'split_finger_edge_tap'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'inner_skin_pitch_glide'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'inner_skin_pitch_glide'
          }
        ]
      }
    },
    kanjira_6: {
      name: '🥁 Kanjira Fast Groove',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'split_finger_edge_tap'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'inner_skin_pitch_glide'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'split_finger_edge_tap'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'inner_skin_pitch_glide'
          }
        ]
      }
    },
    kanjira_7: {
      name: '🥁 Kanjira Ritual Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'split_finger_edge_tap'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'inner_skin_pitch_glide'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'inner_skin_pitch_glide'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'inner_skin_pitch_glide'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'split_finger_edge_tap'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'inner_skin_pitch_glide'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'inner_skin_pitch_glide'
          }
        ]
      }
    },
    kanjira_8: {
      name: '🥁 Kanjira Festival Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'inner_skin_pitch_glide'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'inner_skin_pitch_glide'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'inner_skin_pitch_glide'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'inner_skin_pitch_glide'
          }
        ]
      }
    },
    kanjira_9: {
      name: '🥁 Kanjira Tribal Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'split_finger_edge_tap'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'inner_skin_pitch_glide'
          }
        ],
        7: [
          {
            drum: 0,
            sound: 'inner_skin_pitch_glide'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'inner_skin_pitch_glide'
          }
        ],
        13: [
          {
            drum: 0,
            sound: 'inner_skin_pitch_glide'
          }
        ]
      }
    },
    kanjira_10: {
      name: '🥁 Kanjira Ceremonial Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'split_finger_edge_tap'
          }
        ],
        1: [
          {
            drum: 0,
            sound: 'inner_skin_pitch_glide'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'inner_skin_pitch_glide'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'inner_skin_pitch_glide'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'inner_skin_pitch_glide'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'split_finger_edge_tap'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'inner_skin_pitch_glide'
          }
        ]
      }
    }
  },
  kokiriko: {
    kokiriko_1: {
      name: '🎋 Wooden Domino Ripple',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'cascading_wave'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'cascading_wave'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'cascading_wave'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'cascading_wave'
          }
        ]
      }
    },
    kokiriko_2: {
      name: '🥁 Kokiriko Modern Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'cascading_wave'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'cascading_wave'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'cascading_wave'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'cascading_wave'
          }
        ]
      }
    },
    kokiriko_3: {
      name: '🥁 Kokiriko Syncopated Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'cascading_wave'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'cascading_wave'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'cascading_wave'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'cascading_wave'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'cascading_wave'
          }
        ]
      }
    },
    kokiriko_4: {
      name: '🥁 Kokiriko Upbeat Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'cascading_wave'
          }
        ],
        1: [
          {
            drum: 0,
            sound: 'cascading_wave'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'cascading_wave'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'cascading_wave'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'cascading_wave'
          }
        ]
      }
    },
    kokiriko_5: {
      name: '🥁 Kokiriko Slow Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'cascading_wave'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'cascading_wave'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'cascading_wave'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'cascading_wave'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'cascading_wave'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'cascading_wave'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'cascading_wave'
          }
        ]
      }
    },
    kokiriko_6: {
      name: '🥁 Kokiriko Fast Groove',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'cascading_wave'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'cascading_wave'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'cascading_wave'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'cascading_wave'
          }
        ]
      }
    },
    kokiriko_7: {
      name: '🥁 Kokiriko Ritual Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'cascading_wave'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'cascading_wave'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'cascading_wave'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'cascading_wave'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'cascading_wave'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'cascading_wave'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'cascading_wave'
          }
        ]
      }
    },
    kokiriko_8: {
      name: '🥁 Kokiriko Festival Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'cascading_wave'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'cascading_wave'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'cascading_wave'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'cascading_wave'
          }
        ]
      }
    },
    kokiriko_9: {
      name: '🥁 Kokiriko Tribal Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'cascading_wave'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'cascading_wave'
          }
        ],
        7: [
          {
            drum: 0,
            sound: 'cascading_wave'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'cascading_wave'
          }
        ],
        13: [
          {
            drum: 0,
            sound: 'cascading_wave'
          }
        ]
      }
    },
    kokiriko_10: {
      name: '🥁 Kokiriko Ceremonial Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'cascading_wave'
          }
        ],
        1: [
          {
            drum: 0,
            sound: 'cascading_wave'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'cascading_wave'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'cascading_wave'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'cascading_wave'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'cascading_wave'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'cascading_wave'
          }
        ]
      }
    }
  },
  kundu: {
    kundu_1: {
      name: '🥁 Papua Guinea Hourglass',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'center_skin_tap'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'center_skin_tap'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'center_skin_tap'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'center_skin_tap'
          }
        ]
      }
    },
    kundu_2: {
      name: '🥁 Kundu Modern Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'center_skin_tap'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'rim_edge_pop'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'center_skin_tap'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'rim_edge_pop'
          }
        ]
      }
    },
    kundu_3: {
      name: '🥁 Kundu Syncopated Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'center_skin_tap'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'shell_scrape'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'center_skin_tap'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'shell_scrape'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'rim_edge_pop'
          }
        ]
      }
    },
    kundu_4: {
      name: '🥁 Kundu Upbeat Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'center_skin_tap'
          }
        ],
        1: [
          {
            drum: 0,
            sound: 'shell_scrape'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'center_skin_tap'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'center_skin_tap'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'shell_scrape'
          }
        ]
      }
    },
    kundu_5: {
      name: '🥁 Kundu Slow Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'center_skin_tap'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'shell_scrape'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'center_skin_tap'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'rim_edge_pop'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'center_skin_tap'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'shell_scrape'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'center_skin_tap'
          }
        ]
      }
    },
    kundu_6: {
      name: '🥁 Kundu Fast Groove',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'center_skin_tap'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'center_skin_tap'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'center_skin_tap'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'rim_edge_pop'
          }
        ]
      }
    },
    kundu_7: {
      name: '🥁 Kundu Ritual Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'center_skin_tap'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'center_skin_tap'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'shell_scrape'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'center_skin_tap'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'center_skin_tap'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'center_skin_tap'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'shell_scrape'
          }
        ]
      }
    },
    kundu_8: {
      name: '🥁 Kundu Festival Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'center_skin_tap'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'rim_edge_pop'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'center_skin_tap'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'rim_edge_pop'
          }
        ]
      }
    },
    kundu_9: {
      name: '🥁 Kundu Tribal Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'center_skin_tap'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'center_skin_tap'
          }
        ],
        7: [
          {
            drum: 0,
            sound: 'shell_scrape'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'rim_edge_pop'
          }
        ],
        13: [
          {
            drum: 0,
            sound: 'center_skin_tap'
          }
        ]
      }
    },
    kundu_10: {
      name: '🥁 Kundu Ceremonial Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'center_skin_tap'
          }
        ],
        1: [
          {
            drum: 0,
            sound: 'shell_scrape'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'shell_scrape'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'shell_scrape'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'rim_edge_pop'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'center_skin_tap'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'center_skin_tap'
          }
        ]
      }
    }
  },
  lions_roar: {
    lions_roar_1: {
      name: '🦁 Terrifying Beast Groan',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'rope_friction_pull_push'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'cylinder_tap'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'rope_friction_pull_push'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'cylinder_tap'
          }
        ]
      }
    },
    lions_roar_2: {
      name: '🥁 Lions roar Modern Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'rope_friction_pull_push'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'cylinder_tap'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'rope_friction_pull_push'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'cylinder_tap'
          }
        ]
      }
    },
    lions_roar_3: {
      name: '🥁 Lions roar Syncopated Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'rope_friction_pull_push'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'rope_friction_pull_push'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'cylinder_tap'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'rope_friction_pull_push'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'cylinder_tap'
          }
        ]
      }
    },
    lions_roar_4: {
      name: '🥁 Lions roar Upbeat Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'rope_friction_pull_push'
          }
        ],
        1: [
          {
            drum: 0,
            sound: 'rope_friction_pull_push'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'cylinder_tap'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'rope_friction_pull_push'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'cylinder_tap'
          }
        ]
      }
    },
    lions_roar_5: {
      name: '🥁 Lions roar Slow Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'rope_friction_pull_push'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'cylinder_tap'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'cylinder_tap'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'cylinder_tap'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'rope_friction_pull_push'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'cylinder_tap'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'cylinder_tap'
          }
        ]
      }
    },
    lions_roar_6: {
      name: '🥁 Lions roar Fast Groove',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'rope_friction_pull_push'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'cylinder_tap'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'rope_friction_pull_push'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'cylinder_tap'
          }
        ]
      }
    },
    lions_roar_7: {
      name: '🥁 Lions roar Ritual Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'rope_friction_pull_push'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'cylinder_tap'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'rope_friction_pull_push'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'cylinder_tap'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'rope_friction_pull_push'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'cylinder_tap'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'rope_friction_pull_push'
          }
        ]
      }
    },
    lions_roar_8: {
      name: '🥁 Lions roar Festival Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'cylinder_tap'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'cylinder_tap'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'cylinder_tap'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'cylinder_tap'
          }
        ]
      }
    },
    lions_roar_9: {
      name: '🥁 Lions roar Tribal Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'rope_friction_pull_push'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'cylinder_tap'
          }
        ],
        7: [
          {
            drum: 0,
            sound: 'cylinder_tap'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'cylinder_tap'
          }
        ],
        13: [
          {
            drum: 0,
            sound: 'cylinder_tap'
          }
        ]
      }
    },
    lions_roar_10: {
      name: '🥁 Lions roar Ceremonial Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'rope_friction_pull_push'
          }
        ],
        1: [
          {
            drum: 0,
            sound: 'rope_friction_pull_push'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'rope_friction_pull_push'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'rope_friction_pull_push'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'cylinder_tap'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'rope_friction_pull_push'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'cylinder_tap'
          }
        ]
      }
    }
  },
  log_drum: {
    log_drum_1: {
      name: '🪵 Hollow Wood Tock',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'slat_center_tongue_pop'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'slat_edge_dead_stroke'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'slat_center_tongue_pop'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'slat_edge_dead_stroke'
          }
        ]
      }
    },
    log_drum_2: {
      name: '🥁 Log drum Modern Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'slat_center_tongue_pop'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'slat_center_tongue_pop'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'slat_center_tongue_pop'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'slat_center_tongue_pop'
          }
        ]
      }
    },
    log_drum_3: {
      name: '🥁 Log drum Syncopated Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'slat_center_tongue_pop'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'slat_edge_dead_stroke'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'slat_edge_dead_stroke'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'slat_edge_dead_stroke'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'slat_center_tongue_pop'
          }
        ]
      }
    },
    log_drum_4: {
      name: '🥁 Log drum Upbeat Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'slat_center_tongue_pop'
          }
        ],
        1: [
          {
            drum: 0,
            sound: 'slat_edge_dead_stroke'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'slat_edge_dead_stroke'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'slat_center_tongue_pop'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'bridge_strike'
          }
        ]
      }
    },
    log_drum_5: {
      name: '🥁 Log drum Slow Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'slat_center_tongue_pop'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'bridge_strike'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'slat_edge_dead_stroke'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'slat_center_tongue_pop'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'slat_center_tongue_pop'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'bridge_strike'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'slat_edge_dead_stroke'
          }
        ]
      }
    },
    log_drum_6: {
      name: '🥁 Log drum Fast Groove',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'slat_center_tongue_pop'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'slat_edge_dead_stroke'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'slat_center_tongue_pop'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'slat_center_tongue_pop'
          }
        ]
      }
    },
    log_drum_7: {
      name: '🥁 Log drum Ritual Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'slat_center_tongue_pop'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'slat_edge_dead_stroke'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'slat_edge_dead_stroke'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'slat_edge_dead_stroke'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'slat_center_tongue_pop'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'slat_edge_dead_stroke'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'slat_edge_dead_stroke'
          }
        ]
      }
    },
    log_drum_8: {
      name: '🥁 Log drum Festival Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'slat_edge_dead_stroke'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'slat_center_tongue_pop'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'slat_edge_dead_stroke'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'slat_center_tongue_pop'
          }
        ]
      }
    },
    log_drum_9: {
      name: '🥁 Log drum Tribal Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'slat_center_tongue_pop'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'slat_edge_dead_stroke'
          }
        ],
        7: [
          {
            drum: 0,
            sound: 'bridge_strike'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'slat_center_tongue_pop'
          }
        ],
        13: [
          {
            drum: 0,
            sound: 'slat_edge_dead_stroke'
          }
        ]
      }
    },
    log_drum_10: {
      name: '🥁 Log drum Ceremonial Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'slat_center_tongue_pop'
          }
        ],
        1: [
          {
            drum: 0,
            sound: 'slat_edge_dead_stroke'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'slat_edge_dead_stroke'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'slat_edge_dead_stroke'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'slat_center_tongue_pop'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'slat_center_tongue_pop'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'slat_edge_dead_stroke'
          }
        ]
      }
    }
  },
  mark_tree: {
    mark_tree_1: {
      name: '✨ Shimmering Wind Chime',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'linear_wand_sweep'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'wand_chime_ring'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'linear_wand_sweep'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'wand_chime_ring'
          }
        ]
      }
    },
    mark_tree_2: {
      name: '🥁 Mark tree Modern Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'linear_wand_sweep'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'hand_ruffle_shimmer'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'linear_wand_sweep'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'hand_ruffle_shimmer'
          }
        ]
      }
    },
    mark_tree_3: {
      name: '🥁 Mark tree Syncopated Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'linear_wand_sweep'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'wand_chime_ring'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'wand_chime_ring'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'wand_chime_ring'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'hand_ruffle_shimmer'
          }
        ]
      }
    },
    mark_tree_4: {
      name: '🥁 Mark tree Upbeat Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'linear_wand_sweep'
          }
        ],
        1: [
          {
            drum: 0,
            sound: 'wand_chime_ring'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'wand_chime_ring'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'linear_wand_sweep'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'linear_wand_sweep'
          }
        ]
      }
    },
    mark_tree_5: {
      name: '🥁 Mark tree Slow Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'linear_wand_sweep'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'linear_wand_sweep'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'wand_chime_ring'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'hand_ruffle_shimmer'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'linear_wand_sweep'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'linear_wand_sweep'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'wand_chime_ring'
          }
        ]
      }
    },
    mark_tree_6: {
      name: '🥁 Mark tree Fast Groove',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'linear_wand_sweep'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'wand_chime_ring'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'linear_wand_sweep'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'hand_ruffle_shimmer'
          }
        ]
      }
    },
    mark_tree_7: {
      name: '🥁 Mark tree Ritual Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'linear_wand_sweep'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'wand_chime_ring'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'wand_chime_ring'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'wand_chime_ring'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'linear_wand_sweep'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'wand_chime_ring'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'wand_chime_ring'
          }
        ]
      }
    },
    mark_tree_8: {
      name: '🥁 Mark tree Festival Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'wand_chime_ring'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'hand_ruffle_shimmer'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'wand_chime_ring'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'hand_ruffle_shimmer'
          }
        ]
      }
    },
    mark_tree_9: {
      name: '🥁 Mark tree Tribal Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'linear_wand_sweep'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'wand_chime_ring'
          }
        ],
        7: [
          {
            drum: 0,
            sound: 'linear_wand_sweep'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'hand_ruffle_shimmer'
          }
        ],
        13: [
          {
            drum: 0,
            sound: 'wand_chime_ring'
          }
        ]
      }
    },
    mark_tree_10: {
      name: '🥁 Mark tree Ceremonial Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'linear_wand_sweep'
          }
        ],
        1: [
          {
            drum: 0,
            sound: 'wand_chime_ring'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'wand_chime_ring'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'wand_chime_ring'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'hand_ruffle_shimmer'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'linear_wand_sweep'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'wand_chime_ring'
          }
        ]
      }
    }
  },
  rainstick: {
    rainstick_1: {
      name: '🌧️ Desert Cactus Rain',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'shell_knock'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'shell_knock'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'shell_knock'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'shell_knock'
          }
        ]
      }
    },
    rainstick_2: {
      name: '🥁 Rainstick Modern Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'shell_knock'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'shell_knock'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'shell_knock'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'shell_knock'
          }
        ]
      }
    },
    rainstick_3: {
      name: '🥁 Rainstick Syncopated Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'shell_knock'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'shell_knock'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'shell_knock'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'shell_knock'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'shell_knock'
          }
        ]
      }
    },
    rainstick_4: {
      name: '🥁 Rainstick Upbeat Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'shell_knock'
          }
        ],
        1: [
          {
            drum: 0,
            sound: 'shell_knock'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'shell_knock'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'shell_knock'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'shell_knock'
          }
        ]
      }
    },
    rainstick_5: {
      name: '🥁 Rainstick Slow Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'shell_knock'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'shell_knock'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'shell_knock'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'shell_knock'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'shell_knock'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'shell_knock'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'shell_knock'
          }
        ]
      }
    },
    rainstick_6: {
      name: '🥁 Rainstick Fast Groove',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'shell_knock'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'shell_knock'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'shell_knock'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'shell_knock'
          }
        ]
      }
    },
    rainstick_7: {
      name: '🥁 Rainstick Ritual Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'shell_knock'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'shell_knock'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'shell_knock'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'shell_knock'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'shell_knock'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'shell_knock'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'shell_knock'
          }
        ]
      }
    },
    rainstick_8: {
      name: '🥁 Rainstick Festival Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'shell_knock'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'shell_knock'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'shell_knock'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'shell_knock'
          }
        ]
      }
    },
    rainstick_9: {
      name: '🥁 Rainstick Tribal Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'shell_knock'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'shell_knock'
          }
        ],
        7: [
          {
            drum: 0,
            sound: 'shell_knock'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'shell_knock'
          }
        ],
        13: [
          {
            drum: 0,
            sound: 'shell_knock'
          }
        ]
      }
    },
    rainstick_10: {
      name: '🥁 Rainstick Ceremonial Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'shell_knock'
          }
        ],
        1: [
          {
            drum: 0,
            sound: 'shell_knock'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'shell_knock'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'shell_knock'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'shell_knock'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'shell_knock'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'shell_knock'
          }
        ]
      }
    }
  },
  ratchet: {
    ratchet_1: {
      name: '⚙️ Orchestral Cogwheel',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'crank_spin_snap'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'crank_spin_snap'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'crank_spin_snap'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'crank_spin_snap'
          }
        ]
      }
    },
    ratchet_2: {
      name: '🥁 Ratchet Modern Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'crank_spin_snap'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'crank_spin_snap'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'crank_spin_snap'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'crank_spin_snap'
          }
        ]
      }
    },
    ratchet_3: {
      name: '🥁 Ratchet Syncopated Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'crank_spin_snap'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'crank_spin_snap'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'crank_spin_snap'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'crank_spin_snap'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'crank_spin_snap'
          }
        ]
      }
    },
    ratchet_4: {
      name: '🥁 Ratchet Upbeat Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'crank_spin_snap'
          }
        ],
        1: [
          {
            drum: 0,
            sound: 'crank_spin_snap'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'crank_spin_snap'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'crank_spin_snap'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'crank_spin_snap'
          }
        ]
      }
    },
    ratchet_5: {
      name: '🥁 Ratchet Slow Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'crank_spin_snap'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'crank_spin_snap'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'crank_spin_snap'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'crank_spin_snap'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'crank_spin_snap'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'crank_spin_snap'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'crank_spin_snap'
          }
        ]
      }
    },
    ratchet_6: {
      name: '🥁 Ratchet Fast Groove',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'crank_spin_snap'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'crank_spin_snap'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'crank_spin_snap'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'crank_spin_snap'
          }
        ]
      }
    },
    ratchet_7: {
      name: '🥁 Ratchet Ritual Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'crank_spin_snap'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'crank_spin_snap'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'crank_spin_snap'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'crank_spin_snap'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'crank_spin_snap'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'crank_spin_snap'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'crank_spin_snap'
          }
        ]
      }
    },
    ratchet_8: {
      name: '🥁 Ratchet Festival Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'crank_spin_snap'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'crank_spin_snap'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'crank_spin_snap'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'crank_spin_snap'
          }
        ]
      }
    },
    ratchet_9: {
      name: '🥁 Ratchet Tribal Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'crank_spin_snap'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'crank_spin_snap'
          }
        ],
        7: [
          {
            drum: 0,
            sound: 'crank_spin_snap'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'crank_spin_snap'
          }
        ],
        13: [
          {
            drum: 0,
            sound: 'crank_spin_snap'
          }
        ]
      }
    },
    ratchet_10: {
      name: '🥁 Ratchet Ceremonial Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'crank_spin_snap'
          }
        ],
        1: [
          {
            drum: 0,
            sound: 'crank_spin_snap'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'crank_spin_snap'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'crank_spin_snap'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'crank_spin_snap'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'crank_spin_snap'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'crank_spin_snap'
          }
        ]
      }
    }
  },
  slide_whistle: {
    slide_whistle_1: {
      name: '🎺 Comical Upward Swoop',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'piston_glide'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'piston_glide'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'piston_glide'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'piston_glide'
          }
        ]
      }
    },
    slide_whistle_2: {
      name: '🥁 Slide whistle Modern Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'piston_glide'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'piston_glide'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'piston_glide'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'piston_glide'
          }
        ]
      }
    },
    slide_whistle_3: {
      name: '🥁 Slide whistle Syncopated Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'piston_glide'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'piston_glide'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'piston_glide'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'piston_glide'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'piston_glide'
          }
        ]
      }
    },
    slide_whistle_4: {
      name: '🥁 Slide whistle Upbeat Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'piston_glide'
          }
        ],
        1: [
          {
            drum: 0,
            sound: 'piston_glide'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'piston_glide'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'piston_glide'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'piston_glide'
          }
        ]
      }
    },
    slide_whistle_5: {
      name: '🥁 Slide whistle Slow Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'piston_glide'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'piston_glide'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'piston_glide'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'piston_glide'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'piston_glide'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'piston_glide'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'piston_glide'
          }
        ]
      }
    },
    slide_whistle_6: {
      name: '🥁 Slide whistle Fast Groove',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'piston_glide'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'piston_glide'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'piston_glide'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'piston_glide'
          }
        ]
      }
    },
    slide_whistle_7: {
      name: '🥁 Slide whistle Ritual Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'piston_glide'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'piston_glide'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'piston_glide'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'piston_glide'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'piston_glide'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'piston_glide'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'piston_glide'
          }
        ]
      }
    },
    slide_whistle_8: {
      name: '🥁 Slide whistle Festival Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'piston_glide'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'piston_glide'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'piston_glide'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'piston_glide'
          }
        ]
      }
    },
    slide_whistle_9: {
      name: '🥁 Slide whistle Tribal Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'piston_glide'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'piston_glide'
          }
        ],
        7: [
          {
            drum: 0,
            sound: 'piston_glide'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'piston_glide'
          }
        ],
        13: [
          {
            drum: 0,
            sound: 'piston_glide'
          }
        ]
      }
    },
    slide_whistle_10: {
      name: '🥁 Slide whistle Ceremonial Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'piston_glide'
          }
        ],
        1: [
          {
            drum: 0,
            sound: 'piston_glide'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'piston_glide'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'piston_glide'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'piston_glide'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'piston_glide'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'piston_glide'
          }
        ]
      }
    }
  },
  spoons_bones: {
    spoons_bones_1: {
      name: '🥄 Appalachian Spoon Click',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'finger_rake_roll'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'finger_rake_roll'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'finger_rake_roll'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'finger_rake_roll'
          }
        ]
      }
    },
    spoons_bones_2: {
      name: '🥁 Spoons bones Modern Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'finger_rake_roll'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'hand_flat_slap'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'finger_rake_roll'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'hand_flat_slap'
          }
        ]
      }
    },
    spoons_bones_3: {
      name: '🥁 Spoons bones Syncopated Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'finger_rake_roll'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'thigh_to_hand_bounce'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'finger_rake_roll'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'thigh_to_hand_bounce'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'hand_flat_slap'
          }
        ]
      }
    },
    spoons_bones_4: {
      name: '🥁 Spoons bones Upbeat Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'finger_rake_roll'
          }
        ],
        1: [
          {
            drum: 0,
            sound: 'thigh_to_hand_bounce'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'finger_rake_roll'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'finger_rake_roll'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'hand_flat_slap'
          }
        ]
      }
    },
    spoons_bones_5: {
      name: '🥁 Spoons bones Slow Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'finger_rake_roll'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'hand_flat_slap'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'finger_rake_roll'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'hand_flat_slap'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'finger_rake_roll'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'hand_flat_slap'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'finger_rake_roll'
          }
        ]
      }
    },
    spoons_bones_6: {
      name: '🥁 Spoons bones Fast Groove',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'finger_rake_roll'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'finger_rake_roll'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'finger_rake_roll'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'hand_flat_slap'
          }
        ]
      }
    },
    spoons_bones_7: {
      name: '🥁 Spoons bones Ritual Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'finger_rake_roll'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'finger_rake_roll'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'thigh_to_hand_bounce'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'finger_rake_roll'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'finger_rake_roll'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'finger_rake_roll'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'thigh_to_hand_bounce'
          }
        ]
      }
    },
    spoons_bones_8: {
      name: '🥁 Spoons bones Festival Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'finger_rake_roll'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'hand_flat_slap'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'finger_rake_roll'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'hand_flat_slap'
          }
        ]
      }
    },
    spoons_bones_9: {
      name: '🥁 Spoons bones Tribal Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'finger_rake_roll'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'finger_rake_roll'
          }
        ],
        7: [
          {
            drum: 0,
            sound: 'hand_flat_slap'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'hand_flat_slap'
          }
        ],
        13: [
          {
            drum: 0,
            sound: 'finger_rake_roll'
          }
        ]
      }
    },
    spoons_bones_10: {
      name: '🥁 Spoons bones Ceremonial Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'finger_rake_roll'
          }
        ],
        1: [
          {
            drum: 0,
            sound: 'thigh_to_hand_bounce'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'thigh_to_hand_bounce'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'thigh_to_hand_bounce'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'hand_flat_slap'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'finger_rake_roll'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'finger_rake_roll'
          }
        ]
      }
    }
  },
  spring_drum: {
    spring_drum_1: {
      name: '⚡ Thunderous Spring Shake',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'spring_flick'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'spring_flick'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'spring_flick'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'spring_flick'
          }
        ]
      }
    },
    spring_drum_2: {
      name: '🥁 Spring drum Modern Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'spring_flick'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'rim_strike'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'spring_flick'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'rim_strike'
          }
        ]
      }
    },
    spring_drum_3: {
      name: '🥁 Spring drum Syncopated Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'spring_flick'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'rim_strike'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'spring_flick'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'rim_strike'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'rim_strike'
          }
        ]
      }
    },
    spring_drum_4: {
      name: '🥁 Spring drum Upbeat Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'spring_flick'
          }
        ],
        1: [
          {
            drum: 0,
            sound: 'rim_strike'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'spring_flick'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'spring_flick'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'cylinder_acoustic_wobble'
          }
        ]
      }
    },
    spring_drum_5: {
      name: '🥁 Spring drum Slow Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'spring_flick'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'cylinder_acoustic_wobble'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'spring_flick'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'rim_strike'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'spring_flick'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'cylinder_acoustic_wobble'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'spring_flick'
          }
        ]
      }
    },
    spring_drum_6: {
      name: '🥁 Spring drum Fast Groove',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'spring_flick'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'spring_flick'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'spring_flick'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'rim_strike'
          }
        ]
      }
    },
    spring_drum_7: {
      name: '🥁 Spring drum Ritual Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'spring_flick'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'spring_flick'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'rim_strike'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'spring_flick'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'spring_flick'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'spring_flick'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'rim_strike'
          }
        ]
      }
    },
    spring_drum_8: {
      name: '🥁 Spring drum Festival Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'spring_flick'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'rim_strike'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'spring_flick'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'rim_strike'
          }
        ]
      }
    },
    spring_drum_9: {
      name: '🥁 Spring drum Tribal Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'spring_flick'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'spring_flick'
          }
        ],
        7: [
          {
            drum: 0,
            sound: 'cylinder_acoustic_wobble'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'rim_strike'
          }
        ],
        13: [
          {
            drum: 0,
            sound: 'spring_flick'
          }
        ]
      }
    },
    spring_drum_10: {
      name: '🥁 Spring drum Ceremonial Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'spring_flick'
          }
        ],
        1: [
          {
            drum: 0,
            sound: 'rim_strike'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'rim_strike'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'rim_strike'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'rim_strike'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'spring_flick'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'spring_flick'
          }
        ]
      }
    }
  },
  tammorra: {
    tammorra_1: {
      name: '🥁 Neapolitan Tarantella',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'bass_center_pulse'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'finger_roll_friction_drag'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'bass_center_pulse'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'finger_roll_friction_drag'
          }
        ]
      }
    },
    tammorra_2: {
      name: '🥁 Tammorra Modern Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'bass_center_pulse'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'rim_wood_crack'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'bass_center_pulse'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'rim_wood_crack'
          }
        ]
      }
    },
    tammorra_3: {
      name: '🥁 Tammorra Syncopated Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'bass_center_pulse'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'rim_wood_crack'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'finger_roll_friction_drag'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'rim_wood_crack'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'rim_wood_crack'
          }
        ]
      }
    },
    tammorra_4: {
      name: '🥁 Tammorra Upbeat Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'bass_center_pulse'
          }
        ],
        1: [
          {
            drum: 0,
            sound: 'rim_wood_crack'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'finger_roll_friction_drag'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'bass_center_pulse'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'rim_wood_crack'
          }
        ]
      }
    },
    tammorra_5: {
      name: '🥁 Tammorra Slow Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'bass_center_pulse'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'rim_wood_crack'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'finger_roll_friction_drag'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'rim_wood_crack'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'bass_center_pulse'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'rim_wood_crack'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'finger_roll_friction_drag'
          }
        ]
      }
    },
    tammorra_6: {
      name: '🥁 Tammorra Fast Groove',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'bass_center_pulse'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'finger_roll_friction_drag'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'bass_center_pulse'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'rim_wood_crack'
          }
        ]
      }
    },
    tammorra_7: {
      name: '🥁 Tammorra Ritual Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'bass_center_pulse'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'finger_roll_friction_drag'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'rim_wood_crack'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'finger_roll_friction_drag'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'bass_center_pulse'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'finger_roll_friction_drag'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'rim_wood_crack'
          }
        ]
      }
    },
    tammorra_8: {
      name: '🥁 Tammorra Festival Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'finger_roll_friction_drag'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'rim_wood_crack'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'finger_roll_friction_drag'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'rim_wood_crack'
          }
        ]
      }
    },
    tammorra_9: {
      name: '🥁 Tammorra Tribal Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'bass_center_pulse'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'finger_roll_friction_drag'
          }
        ],
        7: [
          {
            drum: 0,
            sound: 'rim_wood_crack'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'rim_wood_crack'
          }
        ],
        13: [
          {
            drum: 0,
            sound: 'finger_roll_friction_drag'
          }
        ]
      }
    },
    tammorra_10: {
      name: '🥁 Tammorra Ceremonial Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'bass_center_pulse'
          }
        ],
        1: [
          {
            drum: 0,
            sound: 'rim_wood_crack'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'rim_wood_crack'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'rim_wood_crack'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'rim_wood_crack'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'bass_center_pulse'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'finger_roll_friction_drag'
          }
        ]
      }
    }
  },
  tank_drum: {
    tank_drum_1: {
      name: '🛸 Resonant Steel Tongue',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'tongue_bounce'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'tongue_bounce'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'tongue_bounce'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'tongue_bounce'
          }
        ]
      }
    },
    tank_drum_2: {
      name: '🥁 Tank drum Modern Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'tongue_bounce'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'tongue_bounce'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'tongue_bounce'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'tongue_bounce'
          }
        ]
      }
    },
    tank_drum_3: {
      name: '🥁 Tank drum Syncopated Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'tongue_bounce'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'tongue_bounce'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'tongue_bounce'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'tongue_bounce'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'tongue_bounce'
          }
        ]
      }
    },
    tank_drum_4: {
      name: '🥁 Tank drum Upbeat Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'tongue_bounce'
          }
        ],
        1: [
          {
            drum: 0,
            sound: 'tongue_bounce'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'tongue_bounce'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'tongue_bounce'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'tongue_bounce'
          }
        ]
      }
    },
    tank_drum_5: {
      name: '🥁 Tank drum Slow Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'tongue_bounce'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'tongue_bounce'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'tongue_bounce'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'tongue_bounce'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'tongue_bounce'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'tongue_bounce'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'tongue_bounce'
          }
        ]
      }
    },
    tank_drum_6: {
      name: '🥁 Tank drum Fast Groove',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'tongue_bounce'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'tongue_bounce'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'tongue_bounce'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'tongue_bounce'
          }
        ]
      }
    },
    tank_drum_7: {
      name: '🥁 Tank drum Ritual Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'tongue_bounce'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'tongue_bounce'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'tongue_bounce'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'tongue_bounce'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'tongue_bounce'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'tongue_bounce'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'tongue_bounce'
          }
        ]
      }
    },
    tank_drum_8: {
      name: '🥁 Tank drum Festival Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'tongue_bounce'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'tongue_bounce'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'tongue_bounce'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'tongue_bounce'
          }
        ]
      }
    },
    tank_drum_9: {
      name: '🥁 Tank drum Tribal Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'tongue_bounce'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'tongue_bounce'
          }
        ],
        7: [
          {
            drum: 0,
            sound: 'tongue_bounce'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'tongue_bounce'
          }
        ],
        13: [
          {
            drum: 0,
            sound: 'tongue_bounce'
          }
        ]
      }
    },
    tank_drum_10: {
      name: '🥁 Tank drum Ceremonial Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'tongue_bounce'
          }
        ],
        1: [
          {
            drum: 0,
            sound: 'tongue_bounce'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'tongue_bounce'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'tongue_bounce'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'tongue_bounce'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'tongue_bounce'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'tongue_bounce'
          }
        ]
      }
    }
  },
  tar_drum: {
    tar_drum_1: {
      name: '🥁 Arabic Frame Drum',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'dum'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'tak'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'dum'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'tak'
          }
        ]
      }
    },
    tar_drum_2: {
      name: '🥁 Tar drum Modern Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'dum'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'tak'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'dum'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'tak'
          }
        ]
      }
    },
    tar_drum_3: {
      name: '🥁 Tar drum Syncopated Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'dum'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'back_frame_scratch'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'tak'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'back_frame_scratch'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'tak'
          }
        ]
      }
    },
    tar_drum_4: {
      name: '🥁 Tar drum Upbeat Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'dum'
          }
        ],
        1: [
          {
            drum: 0,
            sound: 'back_frame_scratch'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'tak'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'dum'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'fingertip_roll_friction_drag'
          }
        ]
      }
    },
    tar_drum_5: {
      name: '🥁 Tar drum Slow Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'dum'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'fingertip_roll_friction_drag'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'tak'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'tak'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'dum'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'fingertip_roll_friction_drag'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'tak'
          }
        ]
      }
    },
    tar_drum_6: {
      name: '🥁 Tar drum Fast Groove',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'dum'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'tak'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'dum'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'tak'
          }
        ]
      }
    },
    tar_drum_7: {
      name: '🥁 Tar drum Ritual Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'dum'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'tak'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'back_frame_scratch'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'tak'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'dum'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'tak'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'back_frame_scratch'
          }
        ]
      }
    },
    tar_drum_8: {
      name: '🥁 Tar drum Festival Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'tak'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'tak'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'tak'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'tak'
          }
        ]
      }
    },
    tar_drum_9: {
      name: '🥁 Tar drum Tribal Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'dum'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'tak'
          }
        ],
        7: [
          {
            drum: 0,
            sound: 'fingertip_roll_friction_drag'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'tak'
          }
        ],
        13: [
          {
            drum: 0,
            sound: 'tak'
          }
        ]
      }
    },
    tar_drum_10: {
      name: '🥁 Tar drum Ceremonial Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'dum'
          }
        ],
        1: [
          {
            drum: 0,
            sound: 'back_frame_scratch'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'back_frame_scratch'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'back_frame_scratch'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'tak'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'dum'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'tak'
          }
        ]
      }
    }
  },
  temple_blocks: {
    temple_blocks_1: {
      name: '🧱 Pentatonic Wood Pop',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'lip_scrape'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'lip_scrape'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'lip_scrape'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'lip_scrape'
          }
        ]
      }
    },
    temple_blocks_2: {
      name: '🥁 Temple blocks Modern Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'lip_scrape'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'center_mallet_hit'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'lip_scrape'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'center_mallet_hit'
          }
        ]
      }
    },
    temple_blocks_3: {
      name: '🥁 Temple blocks Syncopated Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'lip_scrape'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'lip_scrape'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'lip_scrape'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'lip_scrape'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'center_mallet_hit'
          }
        ]
      }
    },
    temple_blocks_4: {
      name: '🥁 Temple blocks Upbeat Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'lip_scrape'
          }
        ],
        1: [
          {
            drum: 0,
            sound: 'lip_scrape'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'lip_scrape'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'lip_scrape'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'lip_scrape'
          }
        ]
      }
    },
    temple_blocks_5: {
      name: '🥁 Temple blocks Slow Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'lip_scrape'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'lip_scrape'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'lip_scrape'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'center_mallet_hit'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'lip_scrape'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'lip_scrape'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'lip_scrape'
          }
        ]
      }
    },
    temple_blocks_6: {
      name: '🥁 Temple blocks Fast Groove',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'lip_scrape'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'lip_scrape'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'lip_scrape'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'center_mallet_hit'
          }
        ]
      }
    },
    temple_blocks_7: {
      name: '🥁 Temple blocks Ritual Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'lip_scrape'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'lip_scrape'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'lip_scrape'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'lip_scrape'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'lip_scrape'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'lip_scrape'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'lip_scrape'
          }
        ]
      }
    },
    temple_blocks_8: {
      name: '🥁 Temple blocks Festival Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'lip_scrape'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'center_mallet_hit'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'lip_scrape'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'center_mallet_hit'
          }
        ]
      }
    },
    temple_blocks_9: {
      name: '🥁 Temple blocks Tribal Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'lip_scrape'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'lip_scrape'
          }
        ],
        7: [
          {
            drum: 0,
            sound: 'lip_scrape'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'center_mallet_hit'
          }
        ],
        13: [
          {
            drum: 0,
            sound: 'lip_scrape'
          }
        ]
      }
    },
    temple_blocks_10: {
      name: '🥁 Temple blocks Ceremonial Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'lip_scrape'
          }
        ],
        1: [
          {
            drum: 0,
            sound: 'lip_scrape'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'lip_scrape'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'lip_scrape'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'center_mallet_hit'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'lip_scrape'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'lip_scrape'
          }
        ]
      }
    }
  },
  thongophone: {
    thongophone_1: {
      name: '🎵 PVC Pipe Plonk',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'paddle_pipe_slap'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'paddle_pipe_slap'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'paddle_pipe_slap'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'paddle_pipe_slap'
          }
        ]
      }
    },
    thongophone_2: {
      name: '🥁 Thongophone Modern Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'paddle_pipe_slap'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'pipe_side_tap'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'paddle_pipe_slap'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'pipe_side_tap'
          }
        ]
      }
    },
    thongophone_3: {
      name: '🥁 Thongophone Syncopated Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'paddle_pipe_slap'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'pipe_side_tap'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'paddle_pipe_slap'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'pipe_side_tap'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'pipe_side_tap'
          }
        ]
      }
    },
    thongophone_4: {
      name: '🥁 Thongophone Upbeat Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'paddle_pipe_slap'
          }
        ],
        1: [
          {
            drum: 0,
            sound: 'pipe_side_tap'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'paddle_pipe_slap'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'paddle_pipe_slap'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'pipe_side_tap'
          }
        ]
      }
    },
    thongophone_5: {
      name: '🥁 Thongophone Slow Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'paddle_pipe_slap'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'pipe_side_tap'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'paddle_pipe_slap'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'pipe_side_tap'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'paddle_pipe_slap'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'pipe_side_tap'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'paddle_pipe_slap'
          }
        ]
      }
    },
    thongophone_6: {
      name: '🥁 Thongophone Fast Groove',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'paddle_pipe_slap'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'paddle_pipe_slap'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'paddle_pipe_slap'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'pipe_side_tap'
          }
        ]
      }
    },
    thongophone_7: {
      name: '🥁 Thongophone Ritual Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'paddle_pipe_slap'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'paddle_pipe_slap'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'pipe_side_tap'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'paddle_pipe_slap'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'paddle_pipe_slap'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'paddle_pipe_slap'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'pipe_side_tap'
          }
        ]
      }
    },
    thongophone_8: {
      name: '🥁 Thongophone Festival Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'paddle_pipe_slap'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'pipe_side_tap'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'paddle_pipe_slap'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'pipe_side_tap'
          }
        ]
      }
    },
    thongophone_9: {
      name: '🥁 Thongophone Tribal Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'paddle_pipe_slap'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'paddle_pipe_slap'
          }
        ],
        7: [
          {
            drum: 0,
            sound: 'pipe_side_tap'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'pipe_side_tap'
          }
        ],
        13: [
          {
            drum: 0,
            sound: 'paddle_pipe_slap'
          }
        ]
      }
    },
    thongophone_10: {
      name: '🥁 Thongophone Ceremonial Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'paddle_pipe_slap'
          }
        ],
        1: [
          {
            drum: 0,
            sound: 'pipe_side_tap'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'pipe_side_tap'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'pipe_side_tap'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'pipe_side_tap'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'paddle_pipe_slap'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'paddle_pipe_slap'
          }
        ]
      }
    }
  },
  washboard: {
    washboard_1: {
      name: '🧺 Zydeco Thimble Scrape',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'thimble_ridge_scrape'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'mounted_accessory_tap'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'thimble_ridge_scrape'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'mounted_accessory_tap'
          }
        ]
      }
    },
    washboard_2: {
      name: '🥁 Washboard Modern Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'thimble_ridge_scrape'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'thimble_ridge_scrape'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'thimble_ridge_scrape'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'thimble_ridge_scrape'
          }
        ]
      }
    },
    washboard_3: {
      name: '🥁 Washboard Syncopated Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'thimble_ridge_scrape'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'spoon_click_clatter'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'mounted_accessory_tap'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'spoon_click_clatter'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'thimble_ridge_scrape'
          }
        ]
      }
    },
    washboard_4: {
      name: '🥁 Washboard Upbeat Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'thimble_ridge_scrape'
          }
        ],
        1: [
          {
            drum: 0,
            sound: 'spoon_click_clatter'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'mounted_accessory_tap'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'thimble_ridge_scrape'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'mounted_accessory_tap'
          }
        ]
      }
    },
    washboard_5: {
      name: '🥁 Washboard Slow Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'thimble_ridge_scrape'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'mounted_accessory_tap'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'mounted_accessory_tap'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'thimble_ridge_scrape'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'thimble_ridge_scrape'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'mounted_accessory_tap'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'mounted_accessory_tap'
          }
        ]
      }
    },
    washboard_6: {
      name: '🥁 Washboard Fast Groove',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'thimble_ridge_scrape'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'mounted_accessory_tap'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'thimble_ridge_scrape'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'thimble_ridge_scrape'
          }
        ]
      }
    },
    washboard_7: {
      name: '🥁 Washboard Ritual Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'thimble_ridge_scrape'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'mounted_accessory_tap'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'spoon_click_clatter'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'mounted_accessory_tap'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'thimble_ridge_scrape'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'mounted_accessory_tap'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'spoon_click_clatter'
          }
        ]
      }
    },
    washboard_8: {
      name: '🥁 Washboard Festival Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'mounted_accessory_tap'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'thimble_ridge_scrape'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'mounted_accessory_tap'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'thimble_ridge_scrape'
          }
        ]
      }
    },
    washboard_9: {
      name: '🥁 Washboard Tribal Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'thimble_ridge_scrape'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'mounted_accessory_tap'
          }
        ],
        7: [
          {
            drum: 0,
            sound: 'mounted_accessory_tap'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'thimble_ridge_scrape'
          }
        ],
        13: [
          {
            drum: 0,
            sound: 'mounted_accessory_tap'
          }
        ]
      }
    },
    washboard_10: {
      name: '🥁 Washboard Ceremonial Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'thimble_ridge_scrape'
          }
        ],
        1: [
          {
            drum: 0,
            sound: 'spoon_click_clatter'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'spoon_click_clatter'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'spoon_click_clatter'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'thimble_ridge_scrape'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'thimble_ridge_scrape'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'mounted_accessory_tap'
          }
        ]
      }
    }
  },
  timpani: {
    timpani_1: {
      name: '🥁 Orchestral Roll & Strike',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'stick_shaft_rim_shot'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'stick_shaft_rim_shot'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'stick_shaft_rim_shot'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'stick_shaft_rim_shot'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'damping_touch'
          }
        ]
      }
    },
    timpani_2: {
      name: '🥁 Suspense Pedal Rise',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'damping_touch'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'pedal_glissando_bend'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'beating_spot_strike'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'stick_shaft_rim_shot'
          }
        ]
      }
    },
    timpani_3: {
      name: '🥁 Imperial March',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'stick_shaft_rim_shot'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'stick_shaft_rim_shot'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'stick_shaft_rim_shot'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'stick_shaft_rim_shot'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'stick_shaft_rim_shot'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'damping_touch'
          }
        ]
      }
    },
    timpani_4: {
      name: '🥁 Symphonic Waltz',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'damping_touch'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'stick_shaft_rim_shot'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'stick_shaft_rim_shot'
          }
        ]
      }
    },
    timpani_5: {
      name: '🥁 Bolero Kettle',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'stick_shaft_rim_shot'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'stick_shaft_rim_shot'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'stick_shaft_rim_shot'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'stick_shaft_rim_shot'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'stick_shaft_rim_shot'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'stick_shaft_rim_shot'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'stick_shaft_rim_shot'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'damping_touch'
          }
        ]
      }
    },
    timpani_6: {
      name: '🥁 Staccato Gallop',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'stick_shaft_rim_shot'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'stick_shaft_rim_shot'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'stick_shaft_rim_shot'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'stick_shaft_rim_shot'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'stick_shaft_rim_shot'
          }
        ],
        7: [
          {
            drum: 0,
            sound: 'stick_shaft_rim_shot'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'damping_touch'
          }
        ]
      }
    },
    timpani_7: {
      name: '🥁 Glissando Wave',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'pedal_glissando_bend'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'beating_spot_strike'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'pedal_glissando_bend'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'stick_shaft_rim_shot'
          }
        ]
      }
    },
    timpani_8: {
      name: '🥁 Echoes of the Arena',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'damping_touch'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'stick_shaft_rim_shot'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'damping_touch'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'pedal_glissando_bend'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'stick_shaft_rim_shot'
          }
        ]
      }
    },
    timpani_9: {
      name: '🥁 Cinematic Tension',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'stick_shaft_rim_shot'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'stick_shaft_rim_shot'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'stick_shaft_rim_shot'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'stick_shaft_rim_shot'
          }
        ]
      }
    },
    timpani_10: {
      name: '🥁 Triumphant Finale',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'stick_shaft_rim_shot'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'stick_shaft_rim_shot'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'stick_shaft_rim_shot'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'stick_shaft_rim_shot'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'damping_touch'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'pedal_glissando_bend'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'stick_shaft_rim_shot'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'damping_touch'
          }
        ]
      }
    }
  },
  kotsuzumi: {
    kotsuzumi_1: {
      name: '🥁 Traditional Noh Pon',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'hoop_strike'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'chi'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'hoop_strike'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'hoop_strike'
          }
        ]
      }
    },
    kotsuzumi_2: {
      name: '🥁 Kabuki Accent',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'hoop_strike'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'pon'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'hoop_strike'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'hoop_strike'
          }
        ]
      }
    },
    kotsuzumi_3: {
      name: '🥁 Squeezed Lament',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'chi'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'hoop_strike'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'chi'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'pon'
          }
        ]
      }
    },
    kotsuzumi_4: {
      name: '🥁 Solemn Ceremony',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'hoop_strike'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'hoop_strike'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'chi'
          }
        ]
      }
    },
    kotsuzumi_5: {
      name: '🥁 Spirited Noh-Gaku',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'hoop_strike'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'pon'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'hoop_strike'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'chi'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'hoop_strike'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'pon'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'hoop_strike'
          }
        ]
      }
    },
    kotsuzumi_6: {
      name: '🥁 The Red Lion',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'hoop_strike'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'pon'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'pon'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'hoop_strike'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'chi'
          }
        ]
      }
    },
    kotsuzumi_7: {
      name: '🥁 Cherry Blossom Noh',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'hoop_strike'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'hoop_strike'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'hoop_strike'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'chi'
          }
        ]
      }
    },
    kotsuzumi_8: {
      name: '🥁 Shogun Court March',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'hoop_strike'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'hoop_strike'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'hoop_strike'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'pon'
          }
        ]
      }
    },
    kotsuzumi_9: {
      name: '🥁 Samurai Call',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'hoop_strike'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'hoop_strike'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'hoop_strike'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'hoop_strike'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'pon'
          }
        ]
      }
    },
    kotsuzumi_10: {
      name: '🥁 Zen Garden Meditation',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'hoop_strike'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'chi'
          }
        ]
      }
    }
  },
  dhol: {
    dhol_1: {
      name: '🥁 Bhangra Blast',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'dagga'
          }
        ],
        2: [
          {
            drum: 1,
            sound: 'dagga'
          }
        ],
        4: [
          {
            drum: 1,
            sound: 'stick_slide_glissando'
          }
        ],
        6: [
          {
            drum: 1,
            sound: 'dagga'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'dagga'
          }
        ],
        10: [
          {
            drum: 1,
            sound: 'dagga'
          }
        ],
        12: [
          {
            drum: 1,
            sound: 'stick_slide_glissando'
          }
        ],
        14: [
          {
            drum: 1,
            sound: 'dagga'
          }
        ]
      }
    },
    dhol_2: {
      name: '🥁 Giddha Beat',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'dagga'
          }
        ],
        4: [
          {
            drum: 1,
            sound: 'stick_slide_glissando'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'dagga'
          }
        ],
        12: [
          {
            drum: 1,
            sound: 'dagga'
          }
        ]
      }
    },
    dhol_3: {
      name: '🥁 Dhamal Trance',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'dagga'
          }
        ],
        3: [
          {
            drum: 1,
            sound: 'stick_slide_glissando'
          }
        ],
        6: [
          {
            drum: 1,
            sound: 'dagga'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'dagga'
          }
        ],
        11: [
          {
            drum: 1,
            sound: 'stick_slide_glissando'
          }
        ],
        14: [
          {
            drum: 1,
            sound: 'dagga'
          }
        ]
      }
    },
    dhol_4: {
      name: '🥁 Harvest Celebration',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'dagga'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'dagga'
          }
        ],
        4: [
          {
            drum: 1,
            sound: 'stick_slide_glissando'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'dagga'
          }
        ],
        12: [
          {
            drum: 1,
            sound: 'dagga'
          }
        ]
      }
    },
    dhol_5: {
      name: '🥁 Sangeet Entry',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'dagga'
          }
        ],
        4: [
          {
            drum: 1,
            sound: 'dagga'
          }
        ],
        6: [
          {
            drum: 1,
            sound: 'dagga'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'dagga'
          }
        ],
        12: [
          {
            drum: 1,
            sound: 'stick_slide_glissando'
          }
        ]
      }
    },
    dhol_6: {
      name: '🥁 Lovers Echo (Heer)',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'dagga'
          }
        ],
        4: [
          {
            drum: 1,
            sound: 'tilli'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'dagga'
          }
        ],
        12: [
          {
            drum: 1,
            sound: 'stick_slide_glissando'
          }
        ]
      }
    },
    dhol_7: {
      name: '🥁 Kabaddi Rally',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'dagga'
          }
        ],
        2: [
          {
            drum: 1,
            sound: 'dagga'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'dagga'
          }
        ],
        6: [
          {
            drum: 1,
            sound: 'dagga'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'dagga'
          }
        ],
        10: [
          {
            drum: 1,
            sound: 'dagga'
          }
        ],
        12: [
          {
            drum: 1,
            sound: 'stick_slide_glissando'
          }
        ]
      }
    },
    dhol_8: {
      name: '🥁 Heavy Lava-Thump',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'dagga'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'dagga'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'dagga'
          }
        ],
        12: [
          {
            drum: 1,
            sound: 'dagga'
          }
        ]
      }
    },
    dhol_9: {
      name: '🥁 Punjab Folk Standard',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'dagga'
          }
        ],
        3: [
          {
            drum: 1,
            sound: 'stick_slide_glissando'
          }
        ],
        4: [
          {
            drum: 1,
            sound: 'dagga'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'dagga'
          }
        ],
        12: [
          {
            drum: 1,
            sound: 'stick_slide_glissando'
          }
        ]
      }
    },
    dhol_10: {
      name: '🥁 Thunderous Finale',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'dagga'
          }
        ],
        2: [
          {
            drum: 1,
            sound: 'stick_slide_glissando'
          }
        ],
        4: [
          {
            drum: 1,
            sound: 'stick_slide_glissando'
          }
        ],
        6: [
          {
            drum: 1,
            sound: 'stick_slide_glissando'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'dagga'
          }
        ],
        12: [
          {
            drum: 1,
            sound: 'dagga'
          }
        ]
      }
    }
  },
  agogo: {
    agogo_1: {
      name: '🥁 Samba de Roda',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'low_strike'
          }
        ],
        3: [
          {
            drum: 1,
            sound: 'high_strike'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'low_strike'
          }
        ],
        8: [
          {
            drum: 1,
            sound: 'high_strike'
          }
        ],
        11: [
          {
            drum: 0,
            sound: 'low_strike'
          }
        ],
        14: [
          {
            drum: 1,
            sound: 'high_strike'
          }
        ]
      }
    },
    agogo_2: {
      name: '🥁 Capoeira Ring',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'low_strike'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'low_strike'
          }
        ],
        8: [
          {
            drum: 1,
            sound: 'high_strike'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'clap'
          }
        ]
      }
    },
    agogo_3: {
      name: '🥁 Afoxé Groove',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'low_strike'
          }
        ],
        2: [
          {
            drum: 1,
            sound: 'high_strike'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'low_strike'
          }
        ],
        6: [
          {
            drum: 1,
            sound: 'high_strike'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'low_strike'
          }
        ],
        10: [
          {
            drum: 1,
            sound: 'high_strike'
          }
        ],
        12: [
          {
            drum: 1,
            sound: 'high_strike'
          }
        ]
      }
    },
    agogo_4: {
      name: '🥁 Maculelê Strike',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 1,
            sound: 'high_strike'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'clap'
          }
        ],
        8: [
          {
            drum: 1,
            sound: 'high_strike'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'stick_drag'
          }
        ]
      }
    },
    agogo_5: {
      name: '🥁 Maracatu Syncopated Drive',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'low_strike'
          }
        ],
        3: [
          {
            drum: 1,
            sound: 'high_strike'
          }
        ],
        7: [
          {
            drum: 0,
            sound: 'low_strike'
          }
        ],
        10: [
          {
            drum: 1,
            sound: 'high_strike'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'low_strike'
          }
        ]
      }
    },
    agogo_6: {
      name: '🥁 Carnaval Street Parade',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'low_strike'
          }
        ],
        2: [
          {
            drum: 1,
            sound: 'high_strike'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'low_strike'
          }
        ],
        8: [
          {
            drum: 1,
            sound: 'high_strike'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'low_strike'
          }
        ],
        12: [
          {
            drum: 1,
            sound: 'high_strike'
          }
        ]
      }
    },
    agogo_7: {
      name: '🥁 Bossa Nova Tick',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'low_strike'
          }
        ],
        4: [
          {
            drum: 1,
            sound: 'high_strike'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'low_strike'
          }
        ],
        10: [
          {
            drum: 1,
            sound: 'high_strike'
          }
        ],
        14: [
          {
            drum: 1,
            sound: 'high_strike'
          }
        ]
      }
    },
    agogo_8: {
      name: '🥁 Salsa Bell Clave',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'low_strike'
          }
        ],
        3: [
          {
            drum: 1,
            sound: 'high_strike'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'low_strike'
          }
        ],
        10: [
          {
            drum: 1,
            sound: 'high_strike'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'low_strike'
          }
        ]
      }
    },
    agogo_9: {
      name: '🥁 Baião Bounce',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'low_strike'
          }
        ],
        4: [
          {
            drum: 1,
            sound: 'high_strike'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'low_strike'
          }
        ],
        8: [
          {
            drum: 1,
            sound: 'high_strike'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'low_strike'
          }
        ]
      }
    },
    agogo_10: {
      name: '🥁 Batucada Bell Storm',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'low_strike'
          }
        ],
        2: [
          {
            drum: 1,
            sound: 'high_strike'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'clap'
          }
        ],
        6: [
          {
            drum: 1,
            sound: 'high_strike'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'low_strike'
          }
        ],
        10: [
          {
            drum: 1,
            sound: 'high_strike'
          }
        ],
        12: [
          {
            drum: 1,
            sound: 'high_strike'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'stick_drag'
          }
        ]
      }
    }
  },
  claves: {
    claves_1: {
      name: '🥁 Son Clave 3-2',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'strike'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'strike'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'strike'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'strike'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'strike'
          }
        ]
      }
    },
    claves_2: {
      name: '🥁 Son Clave 2-3',
      stepCount: 16,
      steps: {
        2: [
          {
            drum: 0,
            sound: 'strike'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'strike'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'strike'
          }
        ],
        11: [
          {
            drum: 0,
            sound: 'strike'
          }
        ],
        14: [
          {
            drum: 0,
            sound: 'strike'
          }
        ]
      }
    },
    claves_3: {
      name: '🥁 Rumba Clave 3-2',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'strike'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'strike'
          }
        ],
        7: [
          {
            drum: 0,
            sound: 'strike'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'strike'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'strike'
          }
        ]
      }
    },
    claves_4: {
      name: '🥁 Rumba Clave 2-3',
      stepCount: 16,
      steps: {
        2: [
          {
            drum: 0,
            sound: 'strike'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'strike'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'strike'
          }
        ],
        11: [
          {
            drum: 0,
            sound: 'strike'
          }
        ],
        13: [
          {
            drum: 0,
            sound: 'strike'
          }
        ]
      }
    },
    claves_5: {
      name: '🥁 Afro-Cuban 6/8 Clave',
      stepCount: 12,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'strike'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'strike'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'strike'
          }
        ],
        7: [
          {
            drum: 0,
            sound: 'strike'
          }
        ],
        9: [
          {
            drum: 0,
            sound: 'strike'
          }
        ]
      }
    },
    claves_6: {
      name: '🥁 Bossa Nova Clave',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'strike'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'strike'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'strike'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'strike'
          }
        ],
        13: [
          {
            drum: 0,
            sound: 'strike'
          }
        ]
      }
    },
    claves_7: {
      name: '🥁 Cha-Cha Block Clave',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'strike'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'end_tap'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'strike'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'end_tap'
          }
        ]
      }
    },
    claves_8: {
      name: '🥁 Timba Jam Clave',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'strike'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'end_tap'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'strike'
          }
        ],
        6: [
          {
            drum: 0,
            sound: 'end_tap'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'strike'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'strike'
          }
        ]
      }
    },
    claves_9: {
      name: '🥁 Guaguancó Clave',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'strike'
          }
        ],
        3: [
          {
            drum: 0,
            sound: 'end_tap'
          }
        ],
        7: [
          {
            drum: 0,
            sound: 'strike'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'strike'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'end_tap'
          }
        ]
      }
    },
    claves_10: {
      name: '🥁 Woodland scrape & tap',
      stepCount: 16,
      steps: {
        0: [
          {
            drum: 0,
            sound: 'strike'
          }
        ],
        2: [
          {
            drum: 0,
            sound: 'end_tap'
          }
        ],
        4: [
          {
            drum: 0,
            sound: 'end_tap'
          }
        ],
        8: [
          {
            drum: 0,
            sound: 'end_tap'
          }
        ],
        10: [
          {
            drum: 0,
            sound: 'end_tap'
          }
        ],
        12: [
          {
            drum: 0,
            sound: 'end_tap'
          }
        ]
      }
    }
  },
  slap_tubes: {
    pattern_1: {
      name: '🌬️ Industrial Boom',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass_boom' }],
        4: [{ drum: 0, sound: 'mid_bounce' }],
        8: [{ drum: 0, sound: 'low_pop' }],
        12: [{ drum: 0, sound: 'high_snap' }]
      }
    },
    pattern_2: {
      name: '🌬️ Pipe Trill',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass_boom' }],
        3: [{ drum: 0, sound: 'paddle_slap' }],
        6: [{ drum: 0, sound: 'mid_bounce' }],
        8: [{ drum: 0, sound: 'low_pop' }],
        11: [{ drum: 0, sound: 'pipe_rim_click' }],
        14: [{ drum: 0, sound: 'high_snap' }]
      }
    },
    pattern_3: {
      name: '🌬️ PVC Techno Syncopation',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass_boom' }],
        2: [{ drum: 0, sound: 'pipe_rim_click' }],
        4: [{ drum: 0, sound: 'high_snap' }],
        7: [{ drum: 0, sound: 'mid_bounce' }],
        8: [{ drum: 0, sound: 'low_pop' }],
        10: [{ drum: 0, sound: 'high_snap' }],
        12: [{ drum: 0, sound: 'mid_bounce' }],
        14: [{ drum: 0, sound: 'slide_slur' }]
      }
    },
    pattern_4: {
      name: '🌬️ Slap-Back Delay',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass_boom' }],
        4: [{ drum: 0, sound: 'paddle_slap' }],
        5: [{ drum: 0, sound: 'muted_thud' }],
        8: [{ drum: 0, sound: 'low_pop' }],
        12: [{ drum: 0, sound: 'paddle_slap' }],
        13: [{ drum: 0, sound: 'muted_thud' }]
      }
    },
    pattern_5: {
      name: '🌬️ Mallet Bounce Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass_boom' }],
        2: [{ drum: 0, sound: 'low_pop' }],
        4: [{ drum: 0, sound: 'mid_bounce' }],
        6: [{ drum: 0, sound: 'high_snap' }],
        8: [{ drum: 0, sound: 'high_snap' }],
        10: [{ drum: 0, sound: 'mid_bounce' }],
        12: [{ drum: 0, sound: 'low_pop' }],
        14: [{ drum: 0, sound: 'bass_boom' }]
      }
    },
    pattern_6: {
      name: '🌬️ Tubing Roll',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass_boom' }],
        2: [{ drum: 0, sound: 'paddle_slap' }],
        4: [{ drum: 0, sound: 'low_pop' }],
        6: [{ drum: 0, sound: 'paddle_slap' }],
        8: [{ drum: 0, sound: 'mid_bounce' }],
        10: [{ drum: 0, sound: 'paddle_slap' }],
        12: [{ drum: 0, sound: 'high_snap' }],
        14: [{ drum: 0, sound: 'pipe_rim_click' }]
      }
    },
    pattern_7: {
      name: '🌬️ Resonant Air Cascade',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass_boom' }],
        4: [{ drum: 0, sound: 'high_snap' }],
        6: [{ drum: 0, sound: 'mid_bounce' }],
        8: [{ drum: 0, sound: 'low_pop' }],
        10: [{ drum: 0, sound: 'mid_bounce' }],
        12: [{ drum: 0, sound: 'high_snap' }]
      }
    },
    pattern_8: {
      name: '🌬️ Telescoping Slide',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'slide_slur' }],
        4: [{ drum: 0, sound: 'high_snap' }],
        8: [{ drum: 0, sound: 'slide_slur' }],
        12: [{ drum: 0, sound: 'low_pop' }]
      }
    },
    pattern_9: {
      name: '🌬️ Tribal PVC Dance',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bass_boom' }],
        3: [{ drum: 0, sound: 'high_snap' }],
        6: [{ drum: 0, sound: 'mid_bounce' }],
        8: [{ drum: 0, sound: 'low_pop' }],
        11: [{ drum: 0, sound: 'high_snap' }],
        14: [{ drum: 0, sound: 'mid_bounce' }]
      }
    },
    pattern_10: {
      name: '🌬️ Ambient Pipe Haze',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'muted_thud' }],
        4: [{ drum: 0, sound: 'low_pop' }],
        8: [{ drum: 0, sound: 'muted_thud' }],
        12: [{ drum: 0, sound: 'high_snap' }]
      }
    }
  },
  whistle_drum: {
    pattern_1: {
      name: '🦆 Clay Echoes',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'clay_bass' }],
        4: [{ drum: 0, sound: 'sharp_chirp' }],
        8: [{ drum: 0, sound: 'rim_tap' }],
        12: [{ drum: 0, sound: 'bending_gliss' }]
      }
    },
    pattern_2: {
      name: '🦆 Forest Trill',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'clay_bass' }],
        3: [{ drum: 0, sound: 'double_chirp' }],
        6: [{ drum: 0, sound: 'rim_tap' }],
        8: [{ drum: 0, sound: 'clay_bass' }],
        11: [{ drum: 0, sound: 'double_chirp' }],
        14: [{ drum: 0, sound: 'breath_echo' }]
      }
    },
    pattern_3: {
      name: '🦆 Aquatic Dance',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'clay_bass' }],
        4: [{ drum: 0, sound: 'slosh_splash' }],
        8: [{ drum: 0, sound: 'rim_tap' }],
        12: [{ drum: 0, sound: 'slosh_splash' }]
      }
    },
    pattern_4: {
      name: '🦆 Whistling Rain',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'breath_echo' }],
        4: [{ drum: 0, sound: 'sharp_chirp' }],
        8: [{ drum: 0, sound: 'muted_pip' }],
        12: [{ drum: 0, sound: 'bending_gliss' }]
      }
    },
    pattern_5: {
      name: '🦆 Ancient Mesoamerican Hop',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'clay_bass' }],
        2: [{ drum: 0, sound: 'rim_tap' }],
        4: [{ drum: 0, sound: 'double_chirp' }],
        7: [{ drum: 0, sound: 'clay_bass' }],
        8: [{ drum: 0, sound: 'rim_tap' }],
        10: [{ drum: 0, sound: 'bending_gliss' }],
        12: [{ drum: 0, sound: 'sharp_chirp' }],
        14: [{ drum: 0, sound: 'muted_pip' }]
      }
    },
    pattern_6: {
      name: '🦆 Clay Gurgle',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'slosh_splash' }],
        4: [{ drum: 0, sound: 'rim_tap' }],
        8: [{ drum: 0, sound: 'slosh_splash' }],
        12: [{ drum: 0, sound: 'double_chirp' }]
      }
    },
    pattern_7: {
      name: '🦆 Spirit Whistle',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'clay_bass' }],
        4: [{ drum: 0, sound: 'bending_gliss' }],
        8: [{ drum: 0, sound: 'breath_echo' }],
        12: [{ drum: 0, sound: 'bending_gliss' }]
      }
    },
    pattern_8: {
      name: '🦆 Flute-Drum Rhythm',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'clay_bass' }],
        3: [{ drum: 0, sound: 'sharp_chirp' }],
        6: [{ drum: 0, sound: 'rim_tap' }],
        8: [{ drum: 0, sound: 'clay_bass' }],
        12: [{ drum: 0, sound: 'double_chirp' }]
      }
    },
    pattern_9: {
      name: '🦆 Shamanic Flight',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'clay_bass' }],
        5: [{ drum: 0, sound: 'bending_gliss' }],
        10: [{ drum: 0, sound: 'sharp_chirp' }],
        15: [{ drum: 0, sound: 'breath_echo' }]
      }
    },
    pattern_10: {
      name: '🦆 Earth Sleep',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'clay_bass' }],
        8: [{ drum: 0, sound: 'breath_echo' }]
      }
    }
  },
  singing_bowl: {
    pattern_1: {
      name: '🥣 Himalayan Meditation',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'deep_rim_gong' }],
        4: [{ drum: 0, sound: 'suede_hum' }],
        8: [{ drum: 0, sound: 'harmonic_ping' }],
        12: [{ drum: 0, sound: 'swirling_decay' }]
      }
    },
    pattern_2: {
      name: '🥣 Temple Bells',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'deep_rim_gong' }],
        3: [{ drum: 0, sound: 'wood_click' }],
        6: [{ drum: 0, sound: 'harmonic_ping' }],
        8: [{ drum: 0, sound: 'deep_rim_gong' }],
        11: [{ drum: 0, sound: 'wood_click' }],
        14: [{ drum: 0, sound: 'palm_damped' }]
      }
    },
    pattern_3: {
      name: '🥣 Zen Resonance',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'deep_rim_gong' }],
        4: [{ drum: 0, sound: 'water_ripple' }],
        8: [{ drum: 0, sound: 'deep_rim_gong' }],
        12: [{ drum: 0, sound: 'swirling_decay' }]
      }
    },
    pattern_4: {
      name: '🥣 Cosmic Vibrations',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'suede_hum' }],
        4: [{ drum: 0, sound: 'harmonic_ping' }],
        8: [{ drum: 0, sound: 'swirling_decay' }],
        12: [{ drum: 0, sound: 'double_strike' }]
      }
    },
    pattern_5: {
      name: '🥣 Shamanic Healing Bell',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'deep_rim_gong' }],
        2: [{ drum: 0, sound: 'wood_click' }],
        4: [{ drum: 0, sound: 'harmonic_ping' }],
        6: [{ drum: 0, sound: 'palm_damped' }],
        8: [{ drum: 0, sound: 'double_strike' }],
        10: [{ drum: 0, sound: 'wood_click' }],
        12: [{ drum: 0, sound: 'water_ripple' }],
        14: [{ drum: 0, sound: 'swirling_decay' }]
      }
    },
    pattern_6: {
      name: '🥣 Liquid Bowl',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'water_ripple' }],
        8: [{ drum: 0, sound: 'water_ripple' }]
      }
    },
    pattern_7: {
      name: '🥣 Golden Phase',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'deep_rim_gong' }],
        5: [{ drum: 0, sound: 'harmonic_ping' }],
        10: [{ drum: 0, sound: 'swirling_decay' }]
      }
    },
    pattern_8: {
      name: '🥣 Sacred Overtones',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'double_strike' }],
        8: [{ drum: 0, sound: 'suede_hum' }]
      }
    },
    pattern_9: {
      name: '🥣 Pure Mind',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'deep_rim_gong' }],
        8: [{ drum: 0, sound: 'deep_rim_gong' }]
      }
    },
    pattern_10: {
      name: '🥣 Nirvana Gate',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'swirling_decay' }]
      }
    }
  },
  quijada: {
    pattern_1: {
      name: '💀 Landó Bone Rattles',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'chin_bone_tap' }],
        4: [{ drum: 0, sound: 'fist_slam_rattles' }],
        8: [{ drum: 0, sound: 'teeth_rasp_scrape' }],
        12: [{ drum: 0, sound: 'fist_slam_rattles' }]
      }
    },
    pattern_2: {
      name: '💀 Festejo Drive',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'chin_bone_tap' }],
        3: [{ drum: 0, sound: 'teeth_rasp_scrape' }],
        6: [{ drum: 0, sound: 'fist_slam_rattles' }],
        8: [{ drum: 0, sound: 'chin_bone_tap' }],
        11: [{ drum: 0, sound: 'reverse_scrape' }],
        14: [{ drum: 0, sound: 'double_tap' }]
      }
    },
    pattern_3: {
      name: '💀 Skeletal Syncopation',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'chin_bone_tap' }],
        4: [{ drum: 0, sound: 'hollow_socket_pop' }],
        8: [{ drum: 0, sound: 'fist_slam_rattles' }],
        12: [{ drum: 0, sound: 'choked_jaw_pinch' }]
      }
    },
    pattern_4: {
      name: '💀 Dry Scrape Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'teeth_rasp_scrape' }],
        4: [{ drum: 0, sound: 'reverse_scrape' }],
        8: [{ drum: 0, sound: 'teeth_rasp_scrape' }],
        12: [{ drum: 0, sound: 'fist_slam_rattles' }]
      }
    },
    pattern_5: {
      name: '💀 Rattling Jawbones',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'chin_bone_tap' }],
        2: [{ drum: 0, sound: 'micro_flick' }],
        4: [{ drum: 0, sound: 'double_tap' }],
        7: [{ drum: 0, sound: 'fist_slam_rattles' }],
        8: [{ drum: 0, sound: 'chin_bone_tap' }],
        10: [{ drum: 0, sound: 'hollow_socket_pop' }],
        12: [{ drum: 0, sound: 'teeth_rasp_scrape' }],
        14: [{ drum: 0, sound: 'choked_jaw_pinch' }]
      }
    },
    pattern_6: {
      name: '💀 Ancient Afro-Peruvian Echo',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'fist_slam_rattles' }],
        8: [{ drum: 0, sound: 'fist_slam_rattles' }]
      }
    },
    pattern_7: {
      name: '💀 Tooth Buzz',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'micro_flick' }],
        4: [{ drum: 0, sound: 'micro_flick' }],
        8: [{ drum: 0, sound: 'micro_flick' }],
        12: [{ drum: 0, sound: 'micro_flick' }]
      }
    },
    pattern_8: {
      name: '💀 Shamanic Bones',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'chin_bone_tap' }],
        6: [{ drum: 0, sound: 'fist_slam_rattles' }],
        12: [{ drum: 0, sound: 'teeth_rasp_scrape' }]
      }
    },
    pattern_9: {
      name: '💀 Dead Joint Pop',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'hollow_socket_pop' }],
        8: [{ drum: 0, sound: 'hollow_socket_pop' }]
      }
    },
    pattern_10: {
      name: '💀 Eternal Rattles',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'fist_slam_rattles' }]
      }
    }
  },
  water_canister: {
    pattern_1: {
      name: '💧 Sloshing Canister',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'outer_plastic_thud' }],
        4: [{ drum: 0, sound: 'liquid_slap' }],
        8: [{ drum: 0, sound: 'neck_pop' }],
        12: [{ drum: 0, sound: 'slap_gliss' }]
      }
    },
    pattern_2: {
      name: '💧 Bubble Gurgles',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'outer_plastic_thud' }],
        3: [{ drum: 0, sound: 'bubble_gurgle' }],
        6: [{ drum: 0, sound: 'finger_tap_rim' }],
        8: [{ drum: 0, sound: 'liquid_slap' }],
        11: [{ drum: 0, sound: 'bubble_gurgle' }],
        14: [{ drum: 0, sound: 'heavy_splash_drop' }]
      }
    },
    pattern_3: {
      name: '💧 Wet Bass Drop',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'heavy_splash_drop' }],
        4: [{ drum: 0, sound: 'outer_plastic_thud' }],
        8: [{ drum: 0, sound: 'heavy_splash_drop' }],
        12: [{ drum: 0, sound: 'slap_gliss' }]
      }
    },
    pattern_4: {
      name: '💧 Ocean Canister',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'liquid_slap' }],
        4: [{ drum: 0, sound: 'damped_plonk' }],
        8: [{ drum: 0, sound: 'liquid_slap' }],
        12: [{ drum: 0, sound: 'bubble_gurgle' }]
      }
    },
    pattern_5: {
      name: '💧 Hydro Drum',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'outer_plastic_thud' }],
        2: [{ drum: 0, sound: 'finger_tap_rim' }],
        4: [{ drum: 0, sound: 'neck_pop' }],
        7: [{ drum: 0, sound: 'liquid_slap' }],
        8: [{ drum: 0, sound: 'damped_plonk' }],
        10: [{ drum: 0, sound: 'bubble_gurgle' }],
        12: [{ drum: 0, sound: 'slap_gliss' }],
        14: [{ drum: 0, sound: 'heavy_splash_drop' }]
      }
    },
    pattern_6: {
      name: '💧 Gurgling Fountain',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bubble_gurgle' }],
        8: [{ drum: 0, sound: 'bubble_gurgle' }]
      }
    },
    pattern_7: {
      name: '💧 Hollow Cap Tap',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'finger_tap_rim' }],
        4: [{ drum: 0, sound: 'finger_tap_rim' }],
        8: [{ drum: 0, sound: 'neck_pop' }],
        12: [{ drum: 0, sound: 'finger_tap_rim' }]
      }
    },
    pattern_8: {
      name: '💧 Heavy Floods',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'heavy_splash_drop' }],
        8: [{ drum: 0, sound: 'liquid_slap' }]
      }
    },
    pattern_9: {
      name: '💧 Pure Droplet',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'neck_pop' }],
        8: [{ drum: 0, sound: 'neck_pop' }]
      }
    },
    pattern_10: {
      name: '💧 Submerged Beat',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'damped_plonk' }]
      }
    }
  },
  vintage_cash_register: {
    pattern_1: {
      name: '💵 The Cha-Ching',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'key_plunge' }],
        4: [{ drum: 0, sound: 'bell_ring' }],
        8: [{ drum: 0, sound: 'drawer_spring_crunch' }],
        12: [{ drum: 0, sound: 'drawer_slam' }]
      }
    },
    pattern_2: {
      name: '💵 Modern Commerce',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'key_plunge' }],
        3: [{ drum: 0, sound: 'coin_jingle' }],
        6: [{ drum: 0, sound: 'lever_crank' }],
        8: [{ drum: 0, sound: 'bell_ring' }],
        11: [{ drum: 0, sound: 'paper_receipt_rip' }],
        14: [{ drum: 0, sound: 'drawer_slam' }]
      }
    },
    pattern_3: {
      name: '💵 Money Train',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'key_plunge' }],
        4: [{ drum: 0, sound: 'coin_jingle' }],
        8: [{ drum: 0, sound: 'key_plunge' }],
        12: [{ drum: 0, sound: 'bell_ring' }]
      }
    },
    pattern_4: {
      name: '💵 Cash Counter',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'no_sale_click' }],
        4: [{ drum: 0, sound: 'paper_receipt_rip' }],
        8: [{ drum: 0, sound: 'no_sale_click' }],
        12: [{ drum: 0, sound: 'coin_jingle' }]
      }
    },
    pattern_5: {
      name: '💵 Retail Rush hour',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'key_plunge' }],
        2: [{ drum: 0, sound: 'no_sale_click' }],
        4: [{ drum: 0, sound: 'bell_ring' }],
        7: [{ drum: 0, sound: 'lever_crank' }],
        8: [{ drum: 0, sound: 'drawer_spring_crunch' }],
        10: [{ drum: 0, sound: 'coin_jingle' }],
        12: [{ drum: 0, sound: 'paper_receipt_rip' }],
        14: [{ drum: 0, sound: 'drawer_slam' }]
      }
    },
    pattern_6: {
      name: '💵 Steady Inflow',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bell_ring' }],
        8: [{ drum: 0, sound: 'bell_ring' }]
      }
    },
    pattern_7: {
      name: '💵 Mechanical Cranks',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'lever_crank' }],
        4: [{ drum: 0, sound: 'lever_crank' }],
        8: [{ drum: 0, sound: 'no_sale_click' }],
        12: [{ drum: 0, sound: 'key_plunge' }]
      }
    },
    pattern_8: {
      name: '💵 Paper Shredder',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'paper_receipt_rip' }],
        8: [{ drum: 0, sound: 'paper_receipt_rip' }]
      }
    },
    pattern_9: {
      name: '💵 Heavy Vault',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'drawer_slam' }],
        8: [{ drum: 0, sound: 'drawer_slam' }]
      }
    },
    pattern_10: {
      name: '💵 Gold Rush',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'coin_jingle' }]
      }
    }
  },
  geiger_counter: {
    pattern_1: {
      name: '☢️ Diagnostic Sweep',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'isolated_click' }],
        4: [{ drum: 0, sound: 'double_static_burst' }],
        8: [{ drum: 0, sound: 'rad_swarm' }],
        12: [{ drum: 0, sound: 'warning_beep' }]
      }
    },
    pattern_2: {
      name: '☢️ Chernobyl Echoes',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'isolated_click' }],
        3: [{ drum: 0, sound: 'rad_swarm' }],
        6: [{ drum: 0, sound: 'chassis_dial_click' }],
        8: [{ drum: 0, sound: 'double_static_burst' }],
        11: [{ drum: 0, sound: 'warning_beep' }],
        14: [{ drum: 0, sound: 'meltdown_buzz' }]
      }
    },
    pattern_3: {
      name: '☢️ Static Waves',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'double_static_burst' }],
        4: [{ drum: 0, sound: 'static_discharge_thump' }],
        8: [{ drum: 0, sound: 'double_static_burst' }],
        12: [{ drum: 0, sound: 'rad_swarm' }]
      }
    },
    pattern_4: {
      name: '☢️ Radioactive Pulse',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'warning_beep' }],
        4: [{ drum: 0, sound: 'warning_beep' }],
        8: [{ drum: 0, sound: 'warning_beep' }],
        12: [{ drum: 0, sound: 'meltdown_buzz' }]
      }
    },
    pattern_5: {
      name: '☢️ Meltdown Warning',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'isolated_click' }],
        2: [{ drum: 0, sound: 'double_static_burst' }],
        4: [{ drum: 0, sound: 'rad_swarm' }],
        7: [{ drum: 0, sound: 'warning_beep' }],
        8: [{ drum: 0, sound: 'static_discharge_thump' }],
        10: [{ drum: 0, sound: 'chassis_dial_click' }],
        12: [{ drum: 0, sound: 'meltdown_buzz' }],
        14: [{ drum: 0, sound: 'battery_test_chirp' }]
      }
    },
    pattern_6: {
      name: '☢️ Background Crackle',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'rad_swarm' }],
        8: [{ drum: 0, sound: 'rad_swarm' }]
      }
    },
    pattern_7: {
      name: '☢️ Status Beacon',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'battery_test_chirp' }],
        4: [{ drum: 0, sound: 'battery_test_chirp' }],
        8: [{ drum: 0, sound: 'battery_test_chirp' }],
        12: [{ drum: 0, sound: 'battery_test_chirp' }]
      }
    },
    pattern_8: {
      name: '☢️ Electro Shock',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'static_discharge_thump' }],
        8: [{ drum: 0, sound: 'static_discharge_thump' }]
      }
    },
    pattern_9: {
      name: '☢️ Dial Rotations',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'chassis_dial_click' }],
        8: [{ drum: 0, sound: 'chassis_dial_click' }]
      }
    },
    pattern_10: {
      name: '☢️ Critical Mass',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'meltdown_buzz' }]
      }
    }
  },
  centrifugal_bullroarer: {
    pattern_1: {
      name: '🌀 Whirling Wind',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'low_wind_whine' }],
        4: [{ drum: 0, sound: 'high_speed_scream' }],
        8: [{ drum: 0, sound: 'air_rip_flutter' }],
        12: [{ drum: 0, sound: 'descending_whimper' }]
      }
    },
    pattern_2: {
      name: '🌀 Thunder Storm',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'low_wind_whine' }],
        3: [{ drum: 0, sound: 'string_snap' }],
        6: [{ drum: 0, sound: 'air_rip_flutter' }],
        8: [{ drum: 0, sound: 'high_speed_scream' }],
        11: [{ drum: 0, sound: 'ground_slap' }],
        14: [{ drum: 0, sound: 'descending_whimper' }]
      }
    },
    pattern_3: {
      name: '🌀 Sacred Aero Dance',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'low_wind_whine' }],
        4: [{ drum: 0, sound: 'wood_spine_tap' }],
        8: [{ drum: 0, sound: 'low_wind_whine' }],
        12: [{ drum: 0, sound: 'cord_friction_rub' }]
      }
    },
    pattern_4: {
      name: '🌀 Cord Twists',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'cord_friction_rub' }],
        4: [{ drum: 0, sound: 'string_snap' }],
        8: [{ drum: 0, sound: 'cord_friction_rub' }],
        12: [{ drum: 0, sound: 'wood_spine_tap' }]
      }
    },
    pattern_5: {
      name: '🌀 Swirling Cyclone',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'low_wind_whine' }],
        2: [{ drum: 0, sound: 'wood_spine_tap' }],
        4: [{ drum: 0, sound: 'high_speed_scream' }],
        7: [{ drum: 0, sound: 'string_snap' }],
        8: [{ drum: 0, sound: 'air_rip_flutter' }],
        10: [{ drum: 0, sound: 'cord_friction_rub' }],
        12: [{ drum: 0, sound: 'descending_whimper' }],
        14: [{ drum: 0, sound: 'ground_slap' }]
      }
    },
    pattern_6: {
      name: '🌀 Slat Rattles',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'wood_spine_tap' }],
        8: [{ drum: 0, sound: 'wood_spine_tap' }]
      }
    },
    pattern_7: {
      name: '🌀 Gusty Screams',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'high_speed_scream' }],
        8: [{ drum: 0, sound: 'high_speed_scream' }]
      }
    },
    pattern_8: {
      name: '🌀 Flutter Waves',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'air_rip_flutter' }],
        8: [{ drum: 0, sound: 'air_rip_flutter' }]
      }
    },
    pattern_9: {
      name: '🌀 Rope Creaks',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'cord_friction_rub' }],
        8: [{ drum: 0, sound: 'cord_friction_rub' }]
      }
    },
    pattern_10: {
      name: '🌀 Dying Breath',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'descending_whimper' }]
      }
    }
  },
  newtons_cradle: {
    pattern_1: {
      name: '🖲️ Steady Elastic Clacks',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'single_ball_clack' }],
        4: [{ drum: 0, sound: 'continuous_ripple' }],
        8: [{ drum: 0, sound: 'double_side_strike' }],
        12: [{ drum: 0, sound: 'decaying_skitter' }]
      }
    },
    pattern_2: {
      name: '🖲️ Kinetic Chaos',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'single_ball_clack' }],
        3: [{ drum: 0, sound: 'decaying_skitter' }],
        6: [{ drum: 0, sound: 'chassis_frame_tap' }],
        8: [{ drum: 0, sound: 'double_side_strike' }],
        11: [{ drum: 0, sound: 'continuous_ripple' }],
        14: [{ drum: 0, sound: 'damped_metal_thud' }]
      }
    },
    pattern_3: {
      name: '🖲️ Cradle Pendulum',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'single_ball_clack' }],
        4: [{ drum: 0, sound: 'scrape_drag' }],
        8: [{ drum: 0, sound: 'single_ball_clack' }],
        12: [{ drum: 0, sound: 'string_tangle_snag' }]
      }
    },
    pattern_4: {
      name: '🖲️ Steel Skitters',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'decaying_skitter' }],
        4: [{ drum: 0, sound: 'decaying_skitter' }],
        8: [{ drum: 0, sound: 'decaying_skitter' }],
        12: [{ drum: 0, sound: 'damped_metal_thud' }]
      }
    },
    pattern_5: {
      name: '🖲️ Newton Cradle Rush',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'single_ball_clack' }],
        2: [{ drum: 0, sound: 'string_tangle_snag' }],
        4: [{ drum: 0, sound: 'double_side_strike' }],
        7: [{ drum: 0, sound: 'chassis_frame_tap' }],
        8: [{ drum: 0, sound: 'continuous_ripple' }],
        10: [{ drum: 0, sound: 'decaying_skitter' }],
        12: [{ drum: 0, sound: 'scrape_drag' }],
        14: [{ drum: 0, sound: 'damped_metal_thud' }]
      }
    },
    pattern_6: {
      name: '🖲️ Steel Ripples',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'continuous_ripple' }],
        8: [{ drum: 0, sound: 'continuous_ripple' }]
      }
    },
    pattern_7: {
      name: '🖲️ Frame Resonance',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'chassis_frame_tap' }],
        4: [{ drum: 0, sound: 'chassis_frame_tap' }],
        8: [{ drum: 0, sound: 'chassis_frame_tap' }],
        12: [{ drum: 0, sound: 'chassis_frame_tap' }]
      }
    },
    pattern_8: {
      name: '🖲️ Wire Friction',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'string_tangle_snag' }],
        8: [{ drum: 0, sound: 'string_tangle_snag' }]
      }
    },
    pattern_9: {
      name: '🖲️ Slow Sliders',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'scrape_drag' }],
        8: [{ drum: 0, sound: 'scrape_drag' }]
      }
    },
    pattern_10: {
      name: '🖲️ Closed Loops',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'damped_metal_thud' }]
      }
    }
  },
  slime_plop_box: {
    pattern_1: {
      name: '🧪 Squishy Plops',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'deep_suction_plop' }],
        4: [{ drum: 0, sound: 'wet_surface_slap' }],
        8: [{ drum: 0, sound: 'air_pocket_pop' }],
        12: [{ drum: 0, sound: 'squelch_stretch' }]
      }
    },
    pattern_2: {
      name: '🧪 Viscous Meltdown',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'deep_suction_plop' }],
        3: [{ drum: 0, sound: 'dripping_goblet_drop' }],
        6: [{ drum: 0, sound: 'container_wall_squish' }],
        8: [{ drum: 0, sound: 'air_pocket_pop' }],
        11: [{ drum: 0, sound: 'rapid_squelch_roll' }],
        14: [{ drum: 0, sound: 'damped_lid_snap' }]
      }
    },
    pattern_3: {
      name: '🧪 Slime Bubbles',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'air_pocket_pop' }],
        4: [{ drum: 0, sound: 'dripping_goblet_drop' }],
        8: [{ drum: 0, sound: 'air_pocket_pop' }],
        12: [{ drum: 0, sound: 'rapid_squelch_roll' }]
      }
    },
    pattern_4: {
      name: '🧪 Translucent Stretch',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'squelch_stretch' }],
        4: [{ drum: 0, sound: 'container_wall_squish' }],
        8: [{ drum: 0, sound: 'squelch_stretch' }],
        12: [{ drum: 0, sound: 'deep_suction_plop' }]
      }
    },
    pattern_5: {
      name: '🧪 Viscous Typist',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'deep_suction_plop' }],
        2: [{ drum: 0, sound: 'container_wall_squish' }],
        4: [{ drum: 0, sound: 'wet_surface_slap' }],
        7: [{ drum: 0, sound: 'dripping_goblet_drop' }],
        8: [{ drum: 0, sound: 'rapid_squelch_roll' }],
        10: [{ drum: 0, sound: 'air_pocket_pop' }],
        12: [{ drum: 0, sound: 'squelch_stretch' }],
        14: [{ drum: 0, sound: 'damped_lid_snap' }]
      }
    },
    pattern_6: {
      name: '🧪 Viscous Swarm',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'rapid_squelch_roll' }],
        8: [{ drum: 0, sound: 'rapid_squelch_roll' }]
      }
    },
    pattern_7: {
      name: '🧪 Goblet Drops',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'dripping_goblet_drop' }],
        4: [{ drum: 0, sound: 'dripping_goblet_drop' }],
        8: [{ drum: 0, sound: 'dripping_goblet_drop' }],
        12: [{ drum: 0, sound: 'dripping_goblet_drop' }]
      }
    },
    pattern_8: {
      name: '🧪 Slide Shimmers',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'container_wall_squish' }],
        8: [{ drum: 0, sound: 'container_wall_squish' }]
      }
    },
    pattern_9: {
      name: '🧪 Heavy Plops',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'deep_suction_plop' }],
        8: [{ drum: 0, sound: 'deep_suction_plop' }]
      }
    },
    pattern_10: {
      name: '🧪 Airtight Seal',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'damped_lid_snap' }]
      }
    }
  },
  talk_box: {
    pattern_1: {
      name: '🗣️ Grainy Voice',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'pull_whine' }],
        4: [{ drum: 0, sound: 'cow_says_intro' }],
        8: [{ drum: 0, sound: 'analog_cow_moo' }],
        12: [{ drum: 0, sound: 'spring_snaps_shut' }]
      }
    },
    pattern_2: {
      name: '🗣️ Circuit Glitch',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'pull_whine' }],
        3: [{ drum: 0, sound: 'needle_scratch_skip' }],
        6: [{ drum: 0, sound: 'gear_governor_whir' }],
        8: [{ drum: 0, sound: 'analog_cow_moo' }],
        11: [{ drum: 0, sound: 'low_battery_slur' }],
        14: [{ drum: 0, sound: 'spring_snaps_shut' }]
      }
    },
    pattern_3: {
      name: '🗣️ Speaking Toy',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'pull_whine' }],
        4: [{ drum: 0, sound: 'cow_says_intro' }],
        8: [{ drum: 0, sound: 'pull_whine' }],
        12: [{ drum: 0, sound: 'analog_cow_moo' }]
      }
    },
    pattern_4: {
      name: '🗣️ Needle skips',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'needle_scratch_skip' }],
        4: [{ drum: 0, sound: 'needle_scratch_skip' }],
        8: [{ drum: 0, sound: 'needle_scratch_skip' }],
        12: [{ drum: 0, sound: 'chassis_slap' }]
      }
    },
    pattern_5: {
      name: '🗣️ Speaker Rush Hour',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'pull_whine' }],
        2: [{ drum: 0, sound: 'gear_governor_whir' }],
        4: [{ drum: 0, sound: 'cow_says_intro' }],
        7: [{ drum: 0, sound: 'needle_scratch_skip' }],
        8: [{ drum: 0, sound: 'analog_cow_moo' }],
        10: [{ drum: 0, sound: 'low_battery_slur' }],
        12: [{ drum: 0, sound: 'chassis_slap' }],
        14: [{ drum: 0, sound: 'spring_snaps_shut' }]
      }
    },
    pattern_6: {
      name: '🗣️ Winding Gears',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'gear_governor_whir' }],
        8: [{ drum: 0, sound: 'gear_governor_whir' }]
      }
    },
    pattern_7: {
      name: '🗣️ Casing Slaps',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'chassis_slap' }],
        4: [{ drum: 0, sound: 'chassis_slap' }],
        8: [{ drum: 0, sound: 'chassis_slap' }],
        12: [{ drum: 0, sound: 'chassis_slap' }]
      }
    },
    pattern_8: {
      name: '🗣️ Low Voltages',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'low_battery_slur' }],
        8: [{ drum: 0, sound: 'low_battery_slur' }]
      }
    },
    pattern_9: {
      name: '🗣️ Spring Releases',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'spring_snaps_shut' }],
        8: [{ drum: 0, sound: 'spring_snaps_shut' }]
      }
    },
    pattern_10: {
      name: '🗣️ Cosmic Cow',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'analog_cow_moo' }]
      }
    }
  },
  mouth_tube_synth: {
    pattern_1: {
      name: '🗣️ Vocal Formant Run',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'wah_vocal' }],
        4: [{ drum: 0, sound: 'ooh_vocal' }],
        8: [{ drum: 0, sound: 'ee_vocal' }],
        12: [{ drum: 0, sound: 'formant_glide' }]
      }
    },
    pattern_2: {
      name: '🗣️ G-Funk Talkbox',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'wah_vocal' }],
        3: [{ drum: 0, sound: 'plastic_hose_spit_pop' }],
        6: [{ drum: 0, sound: 'synth_carrier_buzz' }],
        8: [{ drum: 0, sound: 'ee_vocal' }],
        11: [{ drum: 0, sound: 'vocalized_fry' }],
        14: [{ drum: 0, sound: 'throat_choke_stop' }]
      }
    },
    pattern_3: {
      name: '🗣️ Electro Vowels',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'wah_vocal' }],
        4: [{ drum: 0, sound: 'ee_vocal' }],
        8: [{ drum: 0, sound: 'wah_vocal' }],
        12: [{ drum: 0, sound: 'ooh_vocal' }]
      }
    },
    pattern_4: {
      name: '🗣️ Carrier Buzzes',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'synth_carrier_buzz' }],
        4: [{ drum: 0, sound: 'synth_carrier_buzz' }],
        8: [{ drum: 0, sound: 'synth_carrier_buzz' }],
        12: [{ drum: 0, sound: 'throat_choke_stop' }]
      }
    },
    pattern_5: {
      name: '🗣️ Mouth-Tube Madness',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'wah_vocal' }],
        2: [{ drum: 0, sound: 'plastic_hose_spit_pop' }],
        4: [{ drum: 0, sound: 'ooh_vocal' }],
        7: [{ drum: 0, sound: 'vocalized_fry' }],
        8: [{ drum: 0, sound: 'ee_vocal' }],
        10: [{ drum: 0, sound: 'synth_carrier_buzz' }],
        12: [{ drum: 0, sound: 'formant_glide' }],
        14: [{ drum: 0, sound: 'throat_choke_stop' }]
      }
    },
    pattern_6: {
      name: '🗣️ Formant Sweeper',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'formant_glide' }],
        8: [{ drum: 0, sound: 'formant_glide' }]
      }
    },
    pattern_7: {
      name: '🗣️ Throat Fry',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'vocalized_fry' }],
        4: [{ drum: 0, sound: 'vocalized_fry' }],
        8: [{ drum: 0, sound: 'vocalized_fry' }],
        12: [{ drum: 0, sound: 'vocalized_fry' }]
      }
    },
    pattern_8: {
      name: '🗣️ Spit Pops',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'plastic_hose_spit_pop' }],
        8: [{ drum: 0, sound: 'plastic_hose_spit_pop' }]
      }
    },
    pattern_9: {
      name: '🗣️ Deep Vocals',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'ooh_vocal' }],
        8: [{ drum: 0, sound: 'ooh_vocal' }]
      }
    },
    pattern_10: {
      name: '🗣️ Choked Signal',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'throat_choke_stop' }]
      }
    }
  },
  mechanical_keyboard: {
    pattern_1: {
      name: '⌨️ Code Commencing',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'enter_key' }],
        4: [{ drum: 0, sound: 'key_click' }],
        8: [{ drum: 0, sound: 'spacebar' }],
        12: [{ drum: 0, sound: 'key_click' }]
      }
    },
    pattern_2: {
      name: '⌨️ Rapid Typist',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'key_click' }],
        2: [{ drum: 0, sound: 'key_click' }],
        4: [{ drum: 0, sound: 'key_click' }],
        6: [{ drum: 0, sound: 'spacebar' }],
        8: [{ drum: 0, sound: 'key_click' }],
        10: [{ drum: 0, sound: 'key_click' }],
        12: [{ drum: 0, sound: 'enter_key' }]
      }
    },
    pattern_3: {
      name: '⌨️ Git Commit',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'key_click' }],
        4: [{ drum: 0, sound: 'enter_key' }],
        8: [{ drum: 0, sound: 'backspace' }],
        12: [{ drum: 0, sound: 'spacebar' }]
      }
    },
    pattern_4: {
      name: '⌨️ Backspace Blues',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'backspace' }],
        4: [{ drum: 0, sound: 'backspace' }],
        8: [{ drum: 0, sound: 'backspace' }],
        12: [{ drum: 0, sound: 'enter_key' }]
      }
    },
    pattern_5: {
      name: '⌨️ Shift and Roll',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'shift_hold' }],
        4: [{ drum: 0, sound: 'key_click' }],
        8: [{ drum: 0, sound: 'spacebar' }],
        12: [{ drum: 0, sound: 'key_click' }]
      }
    },
    pattern_6: {
      name: '⌨️ Hackathon Sprint',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'key_click' }],
        1: [{ drum: 0, sound: 'key_click' }],
        2: [{ drum: 0, sound: 'key_click' }],
        3: [{ drum: 0, sound: 'key_click' }],
        4: [{ drum: 0, sound: 'spacebar' }],
        8: [{ drum: 0, sound: 'key_click' }],
        12: [{ drum: 0, sound: 'enter_key' }]
      }
    },
    pattern_7: {
      name: '⌨️ Refactoring Session',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'key_click' }],
        4: [{ drum: 0, sound: 'backspace' }],
        8: [{ drum: 0, sound: 'key_click' }],
        12: [{ drum: 0, sound: 'spacebar' }]
      }
    },
    pattern_8: {
      name: '⌨️ Space Hopper',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'spacebar' }],
        4: [{ drum: 0, sound: 'spacebar' }],
        8: [{ drum: 0, sound: 'spacebar' }],
        12: [{ drum: 0, sound: 'spacebar' }]
      }
    },
    pattern_9: {
      name: '⌨️ Final Compile',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'enter_key' }],
        8: [{ drum: 0, sound: 'enter_key' }]
      }
    },
    pattern_10: {
      name: '⌨️ Idle Standby',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'key_click' }]
      }
    }
  },
  synsonics_drums: {
    pattern_1: {
      name: '👾 Toy Synth Rock',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'retro_kick' }],
        4: [{ drum: 0, sound: 'noise_snare' }],
        8: [{ drum: 0, sound: 'retro_kick' }],
        12: [{ drum: 0, sound: 'noise_snare' }]
      }
    },
    pattern_2: {
      name: '👾 Cymbal Wash',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'retro_kick' }],
        2: [{ drum: 0, sound: 'lofi_cymbal' }],
        4: [{ drum: 0, sound: 'noise_snare' }],
        8: [{ drum: 0, sound: 'retro_kick' }],
        10: [{ drum: 0, sound: 'lofi_cymbal' }],
        12: [{ drum: 0, sound: 'noise_snare' }]
      }
    },
    pattern_3: {
      name: '👾 Retro Tom Fill',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'retro_kick' }],
        4: [{ drum: 0, sound: 'noise_snare' }],
        8: [{ drum: 0, sound: 'tom_high' }],
        10: [{ drum: 0, sound: 'tom_low' }],
        12: [{ drum: 0, sound: 'noise_snare' }]
      }
    },
    pattern_4: {
      name: '👾 Toy Techno',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'retro_kick' }],
        4: [{ drum: 0, sound: 'retro_kick' }],
        8: [{ drum: 0, sound: 'retro_kick' }],
        12: [{ drum: 0, sound: 'retro_kick' }]
      }
    },
    pattern_5: {
      name: '👾 High Tom Roller',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'tom_high' }],
        4: [{ drum: 0, sound: 'tom_high' }],
        8: [{ drum: 0, sound: 'tom_high' }],
        12: [{ drum: 0, sound: 'tom_high' }]
      }
    },
    pattern_6: {
      name: '👾 Snare Crackle',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'noise_snare' }],
        8: [{ drum: 0, sound: 'noise_snare' }]
      }
    },
    pattern_7: {
      name: '👾 Full Kit Beat',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'retro_kick' }],
        2: [{ drum: 0, sound: 'tom_high' }],
        4: [{ drum: 0, sound: 'noise_snare' }],
        6: [{ drum: 0, sound: 'tom_low' }],
        8: [{ drum: 0, sound: 'retro_kick' }],
        10: [{ drum: 0, sound: 'lofi_cymbal' }],
        12: [{ drum: 0, sound: 'noise_snare' }]
      }
    },
    pattern_8: {
      name: '👾 Electro Pulse',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'retro_kick' }],
        8: [{ drum: 0, sound: 'retro_kick' }]
      }
    },
    pattern_9: {
      name: '👾 Noise Burst',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'lofi_cymbal' }],
        8: [{ drum: 0, sound: 'lofi_cymbal' }]
      }
    },
    pattern_10: {
      name: '👾 Toy Kit Basic',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'retro_kick' }],
        8: [{ drum: 0, sound: 'noise_snare' }]
      }
    }
  },
  hydraulic_piston: {
    pattern_1: {
      name: '⚙️ Industrial Stomp',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'iron_stomp' }],
        4: [{ drum: 0, sound: 'steam_hiss' }],
        8: [{ drum: 0, sound: 'iron_stomp' }],
        12: [{ drum: 0, sound: 'steam_hiss' }]
      }
    },
    pattern_2: {
      name: '⚙️ Gear Locking Loop',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'iron_stomp' }],
        3: [{ drum: 0, sound: 'gear_lock' }],
        6: [{ drum: 0, sound: 'exhaust_clunk' }],
        8: [{ drum: 0, sound: 'iron_stomp' }],
        11: [{ drum: 0, sound: 'gear_lock' }],
        14: [{ drum: 0, sound: 'steam_hiss' }]
      }
    },
    pattern_3: {
      name: '⚙️ Factory Clockwork',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'gear_lock' }],
        4: [{ drum: 0, sound: 'exhaust_clunk' }],
        8: [{ drum: 0, sound: 'gear_lock' }],
        12: [{ drum: 0, sound: 'steam_hiss' }]
      }
    },
    pattern_4: {
      name: '⚙️ Heavy Press',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'iron_stomp' }],
        8: [{ drum: 0, sound: 'iron_stomp' }]
      }
    },
    pattern_5: {
      name: '⚙️ Valve Release',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'steam_hiss' }],
        8: [{ drum: 0, sound: 'steam_hiss' }]
      }
    },
    pattern_6: {
      name: '⚙️ Clunk and Release',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'exhaust_clunk' }],
        4: [{ drum: 0, sound: 'steam_hiss' }],
        8: [{ drum: 0, sound: 'exhaust_clunk' }],
        12: [{ drum: 0, sound: 'gear_lock' }]
      }
    },
    pattern_7: {
      name: '⚙️ Iron Beat',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'iron_stomp' }],
        4: [{ drum: 0, sound: 'gear_lock' }],
        8: [{ drum: 0, sound: 'iron_stomp' }],
        12: [{ drum: 0, sound: 'exhaust_clunk' }]
      }
    },
    pattern_8: {
      name: '⚙️ Steam Engine Roller',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'steam_hiss' }],
        2: [{ drum: 0, sound: 'gear_lock' }],
        4: [{ drum: 0, sound: 'steam_hiss' }],
        8: [{ drum: 0, sound: 'steam_hiss' }],
        10: [{ drum: 0, sound: 'exhaust_clunk' }],
        12: [{ drum: 0, sound: 'iron_stomp' }]
      }
    },
    pattern_9: {
      name: '⚙️ Gear Mash',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'gear_lock' }],
        8: [{ drum: 0, sound: 'gear_lock' }]
      }
    },
    pattern_10: {
      name: '⚙️ Idle Pressure',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'exhaust_clunk' }]
      }
    }
  },
  bop_it: {
    pattern_1: {
      name: '🕹️ Bop-It Classic',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bop_it' }],
        4: [{ drum: 0, sound: 'twist_it' }],
        8: [{ drum: 0, sound: 'pull_it' }],
        12: [{ drum: 0, sound: 'shout_it' }]
      }
    },
    pattern_2: {
      name: '🕹️ High Score Run',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bop_it' }],
        2: [{ drum: 0, sound: 'pull_it' }],
        4: [{ drum: 0, sound: 'twist_it' }],
        6: [{ drum: 0, sound: 'shout_it' }],
        8: [{ drum: 0, sound: 'bop_it' }],
        10: [{ drum: 0, sound: 'victory_chime' }]
      }
    },
    pattern_3: {
      name: '🕹️ Tension Builder',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bop_it' }],
        4: [{ drum: 0, sound: 'bop_it' }],
        8: [{ drum: 0, sound: 'twist_it' }],
        12: [{ drum: 0, sound: 'fail_buzz' }]
      }
    },
    pattern_4: {
      name: '🕹️ Shout Loop',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'shout_it' }],
        8: [{ drum: 0, sound: 'shout_it' }]
      }
    },
    pattern_5: {
      name: '🕹️ Pull and Twist',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'pull_it' }],
        4: [{ drum: 0, sound: 'twist_it' }],
        8: [{ drum: 0, sound: 'pull_it' }],
        12: [{ drum: 0, sound: 'victory_chime' }]
      }
    },
    pattern_6: {
      name: '🕹️ Victory Dance',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'victory_chime' }],
        8: [{ drum: 0, sound: 'victory_chime' }]
      }
    },
    pattern_7: {
      name: '🕹️ Ultimate Combo',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bop_it' }],
        3: [{ drum: 0, sound: 'twist_it' }],
        6: [{ drum: 0, sound: 'pull_it' }],
        9: [{ drum: 0, sound: 'shout_it' }],
        12: [{ drum: 0, sound: 'victory_chime' }]
      }
    },
    pattern_8: {
      name: '🕹️ Fail State Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'fail_buzz' }],
        8: [{ drum: 0, sound: 'fail_buzz' }]
      }
    },
    pattern_9: {
      name: '🕹️ Rapid Bop',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bop_it' }],
        4: [{ drum: 0, sound: 'bop_it' }],
        8: [{ drum: 0, sound: 'bop_it' }],
        12: [{ drum: 0, sound: 'bop_it' }]
      }
    },
    pattern_10: {
      name: '🕹️ Toy Game Session',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'bop_it' }],
        8: [{ drum: 0, sound: 'fail_buzz' }]
      }
    }
  },
  moo_box: {
    pattern_1: {
      name: '🐄 Meadow Chorus',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'grand_moo' }],
        8: [{ drum: 0, sound: 'calf_moo' }]
      }
    },
    pattern_2: {
      name: '🐄 Tin Shake Rhythm',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'tin_shake' }],
        4: [{ drum: 0, sound: 'tin_shake' }],
        8: [{ drum: 0, sound: 'tin_shake' }],
        12: [{ drum: 0, sound: 'tin_shake' }]
      }
    },
    pattern_3: {
      name: '🐄 Stuck Reed Whine',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'stuck_reed' }],
        8: [{ drum: 0, sound: 'stuck_reed' }]
      }
    },
    pattern_4: {
      name: '🐄 Cattle Call',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'grand_moo' }],
        4: [{ drum: 0, sound: 'tin_shake' }],
        8: [{ drum: 0, sound: 'calf_moo' }],
        12: [{ drum: 0, sound: 'tin_shake' }]
      }
    },
    pattern_5: {
      name: '🐄 Heavy Moo',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'grand_moo' }],
        8: [{ drum: 0, sound: 'grand_moo' }]
      }
    },
    pattern_6: {
      name: '🐄 Tin Shake Roll',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'tin_shake' }],
        2: [{ drum: 0, sound: 'tin_shake' }],
        4: [{ drum: 0, sound: 'tin_shake' }],
        6: [{ drum: 0, sound: 'tin_shake' }],
        8: [{ drum: 0, sound: 'tin_shake' }]
      }
    },
    pattern_7: {
      name: '🐄 Calf Melancholy',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'calf_moo' }],
        8: [{ drum: 0, sound: 'stuck_reed' }]
      }
    },
    pattern_8: {
      name: '🐄 Barnyard Syncopation',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'grand_moo' }],
        4: [{ drum: 0, sound: 'stuck_reed' }],
        8: [{ drum: 0, sound: 'tin_shake' }],
        12: [{ drum: 0, sound: 'calf_moo' }]
      }
    },
    pattern_9: {
      name: '🐄 Grazing Time',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'tin_shake' }],
        8: [{ drum: 0, sound: 'grand_moo' }]
      }
    },
    pattern_10: {
      name: '🐄 Sleepy Barn',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'stuck_reed' }]
      }
    }
  },
  pakhavaj: {
    pattern_1: {
      name: '📿 Classic Chhand',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'tha' }],
        4: [{ drum: 0, sound: 'dhin' }],
        8: [{ drum: 0, sound: 'ta' }],
        12: [{ drum: 0, sound: 'ki' }]
      }
    },
    pattern_2: {
      name: '📿 Double Dhin',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'dhin' }],
        4: [{ drum: 0, sound: 'dhin' }],
        8: [{ drum: 0, sound: 'ta' }],
        12: [{ drum: 0, sound: 'na' }]
      }
    },
    pattern_3: {
      name: '📿 Rapid Tete Rolls',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'tete' }],
        4: [{ drum: 0, sound: 'tete' }],
        8: [{ drum: 0, sound: 'tete' }],
        12: [{ drum: 0, sound: 'tha' }]
      }
    },
    pattern_4: {
      name: '📿 Sliding Ghe Groove',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'ghe' }],
        4: [{ drum: 0, sound: 'ta' }],
        8: [{ drum: 0, sound: 'dhin' }],
        12: [{ drum: 0, sound: 'ki' }]
      }
    },
    pattern_5: {
      name: '📿 Temple Dhrupad',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'tha' }],
        3: [{ drum: 0, sound: 'ta' }],
        6: [{ drum: 0, sound: 'dhin' }],
        8: [{ drum: 0, sound: 'na' }],
        12: [{ drum: 0, sound: 'ki' }]
      }
    },
    pattern_6: {
      name: '📿 Sacred Cycle',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'tha' }],
        8: [{ drum: 0, sound: 'dhin' }]
      }
    },
    pattern_7: {
      name: '📿 High Speed Bol',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'tete' }],
        2: [{ drum: 0, sound: 'tete' }],
        4: [{ drum: 0, sound: 'ta' }],
        6: [{ drum: 0, sound: 'na' }],
        8: [{ drum: 0, sound: 'dhin' }],
        12: [{ drum: 0, sound: 'tha' }]
      }
    },
    pattern_8: {
      name: '📿 Quiet Meditation',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'ki' }],
        8: [{ drum: 0, sound: 'ki' }]
      }
    },
    pattern_9: {
      name: '📿 Sooltaal Cycle',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'tha' }],
        4: [{ drum: 0, sound: 'ta' }],
        8: [{ drum: 0, sound: 'dhin' }],
        12: [{ drum: 0, sound: 'ki' }]
      }
    },
    pattern_10: {
      name: '📿 Chautaal Base',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'tha' }],
        12: [{ drum: 0, sound: 'dhin' }]
      }
    }
  },
  binzasara: {
    pattern_1: {
      name: '🪵 Cascading Waves',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'furu' }],
        8: [{ drum: 0, sound: 'clap' }]
      }
    },
    pattern_2: {
      name: '🪵 Wood Chatter',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'rattle' }],
        8: [{ drum: 0, sound: 'snap' }]
      }
    },
    pattern_3: {
      name: '🪵 Triple Clap',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'clap' }],
        4: [{ drum: 0, sound: 'clap' }],
        8: [{ drum: 0, sound: 'clap' }],
        12: [{ drum: 0, sound: 'furu' }]
      }
    },
    pattern_4: {
      name: '🪵 Single Snaps',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'snap' }],
        4: [{ drum: 0, sound: 'snap' }],
        8: [{ drum: 0, sound: 'snap' }],
        12: [{ drum: 0, sound: 'snap' }]
      }
    },
    pattern_5: {
      name: '🪵 Folk Procession',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'furu' }],
        4: [{ drum: 0, sound: 'snap' }],
        8: [{ drum: 0, sound: 'rattle' }],
        12: [{ drum: 0, sound: 'clap' }]
      }
    },
    pattern_6: {
      name: '🪵 Shinto Dance',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'rattle' }],
        8: [{ drum: 0, sound: 'rattle' }]
      }
    },
    pattern_7: {
      name: '🪵 Double Snap Beats',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'snap' }],
        2: [{ drum: 0, sound: 'snap' }],
        8: [{ drum: 0, sound: 'clap' }]
      }
    },
    pattern_8: {
      name: '🪵 Rapid Dominoes',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'furu' }],
        4: [{ drum: 0, sound: 'furu' }],
        8: [{ drum: 0, sound: 'furu' }],
        12: [{ drum: 0, sound: 'clap' }]
      }
    },
    pattern_9: {
      name: '🪵 Forest Rhythms',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'snap' }],
        8: [{ drum: 0, sound: 'rattle' }]
      }
    },
    pattern_10: {
      name: '🪵 Pure Clack',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'clap' }]
      }
    }
  },
  caxixi: {
    pattern_1: {
      name: '🌾 Straw Shake',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'straw_wall' }],
        4: [{ drum: 0, sound: 'gourd_bottom' }],
        8: [{ drum: 0, sound: 'straw_wall' }],
        12: [{ drum: 0, sound: 'gourd_bottom' }]
      }
    },
    pattern_2: {
      name: '🌾 Flick & Pulse',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'straw_wall' }],
        2: [{ drum: 0, sound: 'flick_accent' }],
        4: [{ drum: 0, sound: 'gourd_bottom' }],
        8: [{ drum: 0, sound: 'straw_wall' }],
        10: [{ drum: 0, sound: 'muted_swoosh' }],
        12: [{ drum: 0, sound: 'flick_accent' }]
      }
    },
    pattern_3: {
      name: '🌾 Samba Shaker',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'straw_wall' }],
        4: [{ drum: 0, sound: 'flick_accent' }],
        8: [{ drum: 0, sound: 'straw_wall' }],
        12: [{ drum: 0, sound: 'flick_accent' }]
      }
    },
    pattern_4: {
      name: '🌾 Gourd Crack',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'gourd_bottom' }],
        8: [{ drum: 0, sound: 'gourd_bottom' }]
      }
    },
    pattern_5: {
      name: '🌾 Organic Sweep',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'muted_swoosh' }],
        8: [{ drum: 0, sound: 'muted_swoosh' }]
      }
    },
    pattern_6: {
      name: '🌾 Double Flick Accent',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'flick_accent' }],
        8: [{ drum: 0, sound: 'flick_accent' }]
      }
    },
    pattern_7: {
      name: '🌾 High-Low Mix',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'straw_wall' }],
        4: [{ drum: 0, sound: 'gourd_bottom' }],
        8: [{ drum: 0, sound: 'flick_accent' }],
        12: [{ drum: 0, sound: 'muted_swoosh' }]
      }
    },
    pattern_8: {
      name: '🌾 Slow Swell',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'muted_swoosh' }],
        4: [{ drum: 0, sound: 'straw_wall' }],
        8: [{ drum: 0, sound: 'muted_swoosh' }],
        12: [{ drum: 0, sound: 'flick_accent' }]
      }
    },
    pattern_9: {
      name: '🌾 Brazilian Carnival Shaker',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'straw_wall' }],
        2: [{ drum: 0, sound: 'gourd_bottom' }],
        4: [{ drum: 0, sound: 'straw_wall' }],
        6: [{ drum: 0, sound: 'flick_accent' }],
        8: [{ drum: 0, sound: 'straw_wall' }],
        10: [{ drum: 0, sound: 'gourd_bottom' }],
        12: [{ drum: 0, sound: 'straw_wall' }],
        14: [{ drum: 0, sound: 'muted_swoosh' }]
      }
    },
    pattern_10: {
      name: '🌾 Quiet Straw',
      stepCount: 16,
      steps: {
        0: [{ drum: 0, sound: 'straw_wall' }]
      }
    }
  }
};
