// Rhythm patterns for conga.
// Upgraded for authentic multi-drum interactions, proper stroke vocabulary, and global genre coverage.
export default {
  songo: {
    name: '🥁 Songo (Enhanced Multi-Drum)',
    stepCount: 16,
    steps: {
      0: [
        { drum: 1, sound: 'abierto' },
        { drum: 3, sound: 'bajo' }
      ],
      2: [{ drum: 1, sound: 'manoteo' }],
      3: [{ drum: 1, sound: 'abierto' }],
      4: [{ drum: 2, sound: 'tapado' }],
      6: [{ drum: 2, sound: 'abierto' }],
      8: [{ drum: 1, sound: 'abierto' }],
      10: [{ drum: 1, sound: 'manoteo' }],
      11: [{ drum: 3, sound: 'abierto' }],
      12: [{ drum: 0, sound: 'seco' }],
      14: [{ drum: 2, sound: 'abierto' }]
    }
  },
  tumbao: {
    name: '🥁 Tumbao (Authentic 2-Drum March)',
    stepCount: 16,
    steps: {
      0: [{ drum: 2, sound: 'manoteo' }],
      2: [{ drum: 2, sound: 'manoteo' }],
      4: [{ drum: 2, sound: 'seco' }],
      6: [{ drum: 2, sound: 'manoteo' }],
      8: [{ drum: 2, sound: 'manoteo' }],
      10: [{ drum: 2, sound: 'manoteo' }],
      12: [{ drum: 2, sound: 'abierto' }],
      14: [{ drum: 3, sound: 'abierto' }]
    }
  },
  guaguanco: {
    name: '🥁 Guaguancó (Classic 3-Drum Conversación)',
    stepCount: 16,
    steps: {
      0: [{ drum: 2, sound: 'manoteo' }],
      2: [{ drum: 2, sound: 'seco' }],
      4: [{ drum: 3, sound: 'abierto' }],
      6: [{ drum: 2, sound: 'manoteo' }],
      8: [{ drum: 1, sound: 'abierto' }],
      10: [{ drum: 2, sound: 'abierto' }],
      12: [{ drum: 2, sound: 'seco' }],
      14: [{ drum: 1, sound: 'abierto' }]
    }
  },
  cha_cha: {
    name: '🥁 Standard Cha-Cha-Chá',
    stepCount: 16,
    steps: {
      0: [{ drum: 2, sound: 'manoteo' }],
      2: [{ drum: 2, sound: 'manoteo' }],
      4: [{ drum: 2, sound: 'seco' }],
      6: [{ drum: 2, sound: 'manoteo' }],
      8: [{ drum: 2, sound: 'manoteo' }],
      10: [{ drum: 2, sound: 'manoteo' }],
      12: [{ drum: 2, sound: 'abierto' }],
      14: [{ drum: 2, sound: 'abierto' }]
    }
  },
  merengue_jaleo: {
    name: '🥁 Merengue Jaleo (Dominican Commercial Style)',
    stepCount: 16,
    steps: {
      0: [{ drum: 2, sound: 'seco' }],
      2: [{ drum: 2, sound: 'manoteo' }],
      4: [{ drum: 2, sound: 'abierto' }],
      6: [{ drum: 3, sound: 'abierto' }],
      8: [{ drum: 2, sound: 'seco' }],
      10: [{ drum: 2, sound: 'manoteo' }],
      12: [{ drum: 2, sound: 'abierto' }],
      14: [{ drum: 2, sound: 'abierto' }]
    }
  },
  timba_mona: {
    name: '🥁 Modern Timba / Tumbao con Moña',
    stepCount: 16,
    steps: {
      0: [{ drum: 2, sound: 'manoteo' }],
      2: [{ drum: 2, sound: 'manoteo' }],
      4: [{ drum: 1, sound: 'seco' }],
      6: [{ drum: 2, sound: 'manoteo' }],
      8: [{ drum: 2, sound: 'manoteo' }],
      10: [{ drum: 2, sound: 'abierto' }],
      12: [{ drum: 2, sound: 'seco' }],
      14: [{ drum: 3, sound: 'abierto' }]
    }
  },
  salsa_palo_3_drum: {
    name: '🥁 Salsa Palo (High-Energy 3-Drum Groove)',
    stepCount: 16,
    steps: {
      0: [{ drum: 2, sound: 'manoteo' }],
      2: [{ drum: 2, sound: 'manoteo' }],
      4: [{ drum: 1, sound: 'seco' }],
      6: [{ drum: 2, sound: 'manoteo' }],
      8: [{ drum: 2, sound: 'manoteo' }],
      10: [{ drum: 2, sound: 'manoteo' }],
      12: [{ drum: 2, sound: 'abierto' }],
      14: [{ drum: 3, sound: 'abierto' }]
    }
  },
  bolero: {
    name: '🥁 Bolero Conga',
    stepCount: 16,
    steps: {
      0: [{ drum: 1, sound: 'abierto' }],
      2: [{ drum: 2, sound: 'tapado' }],
      4: [{ drum: 2, sound: 'seco' }],
      6: [{ drum: 2, sound: 'abierto' }],
      8: [{ drum: 1, sound: 'abierto' }],
      10: [{ drum: 2, sound: 'tapado' }],
      12: [{ drum: 2, sound: 'abierto' }],
      14: [{ drum: 2, sound: 'abierto' }]
    }
  },
  afoxé_ijexa: {
    name: '🥁 Afoxé / Ijexá (Bahian Afro-Brazilian)',
    stepCount: 16,
    steps: {
      0: [{ drum: 2, sound: 'abierto' }],
      2: [{ drum: 1, sound: 'seco' }],
      4: [{ drum: 2, sound: 'manoteo' }],
      6: [{ drum: 2, sound: 'abierto' }],
      8: [{ drum: 1, sound: 'abierto' }],
      10: [{ drum: 2, sound: 'seco' }],
      12: [{ drum: 2, sound: 'manoteo' }],
      14: [{ drum: 2, sound: 'abierto' }]
    }
  },
  plena_puerto_rico: {
    name: '🥁 Plena (Puerto Rican Standard March)',
    stepCount: 16,
    steps: {
      0: [{ drum: 2, sound: 'seco' }],
      2: [{ drum: 2, sound: 'manoteo' }],
      4: [{ drum: 2, sound: 'abierto' }],
      6: [{ drum: 3, sound: 'abierto' }],
      8: [{ drum: 2, sound: 'seco' }],
      10: [{ drum: 2, sound: 'manoteo' }],
      12: [{ drum: 2, sound: 'abierto' }],
      14: [{ drum: 2, sound: 'abierto' }]
    }
  },
  palo_sacred: {
    name: '🥁 Palo (Congolese Folkloric)',
    stepCount: 16,
    steps: {
      0: [{ drum: 3, sound: 'bajo' }],
      2: [{ drum: 2, sound: 'seco' }],
      4: [{ drum: 2, sound: 'abierto' }],
      6: [{ drum: 3, sound: 'bajo' }],
      8: [{ drum: 2, sound: 'seco' }],
      10: [{ drum: 2, sound: 'abierto' }],
      12: [{ drum: 2, sound: 'abierto' }],
      14: [{ drum: 3, sound: 'abierto' }]
    }
  },
  bembe_6_8: {
    name: '🥁 Bembe (6/8 Polyrhythm)',
    stepCount: 12,
    steps: {
      0: [{ drum: 2, sound: 'abierto' }],
      2: [{ drum: 0, sound: 'seco' }],
      4: [{ drum: 1, sound: 'abierto' }],
      6: [{ drum: 2, sound: 'abierto' }],
      8: [{ drum: 0, sound: 'seco' }],
      10: [{ drum: 1, sound: 'abierto' }]
    }
  },
  samba_conga: {
    name: '🥁 Samba Conga (Batucada)',
    stepCount: 16,
    steps: {
      0: [{ drum: 1, sound: 'abierto' }],
      2: [{ drum: 0, sound: 'seco' }],
      4: [{ drum: 1, sound: 'abierto' }],
      6: [{ drum: 1, sound: 'abierto' }],
      8: [{ drum: 2, sound: 'abierto' }],
      10: [{ drum: 0, sound: 'seco' }],
      12: [{ drum: 1, sound: 'manoteo' }],
      14: [{ drum: 1, sound: 'abierto' }]
    }
  },
  afro_cuban_6_8: {
    name: '🥁 Afro-Cuban Columbia (6/8)',
    stepCount: 12,
    steps: {
      0: [{ drum: 2, sound: 'abierto' }],
      2: [{ drum: 0, sound: 'seco' }],
      4: [{ drum: 1, sound: 'abierto' }],
      6: [{ drum: 2, sound: 'abierto' }],
      8: [{ drum: 0, sound: 'seco' }],
      10: [{ drum: 1, sound: 'abierto' }]
    }
  },
  mozambique_conga: {
    name: '🥁 Mozambique Conga Pattern',
    stepCount: 16,
    steps: {
      0: [{ drum: 1, sound: 'manoteo' }],
      2: [{ drum: 0, sound: 'seco' }],
      4: [{ drum: 1, sound: 'abierto' }],
      6: [{ drum: 2, sound: 'abierto' }],
      8: [{ drum: 1, sound: 'manoteo' }],
      10: [{ drum: 0, sound: 'seco' }],
      12: [{ drum: 1, sound: 'abierto' }],
      13: [{ drum: 2, sound: 'abierto' }],
      14: [{ drum: 1, sound: 'abierto' }]
    }
  },
  comparsa_conga: {
    name: '🥁 Comparsa Conga Carnival',
    stepCount: 16,
    steps: {
      0: [{ drum: 1, sound: 'abierto' }],
      4: [{ drum: 2, sound: 'seco' }],
      8: [{ drum: 1, sound: 'abierto' }],
      12: [{ drum: 2, sound: 'abierto' }],
      14: [{ drum: 1, sound: 'abierto' }]
    }
  },
  songo_conga: {
    name: '🥁 Songo Conga Groove',
    stepCount: 16,
    steps: {
      0: [{ drum: 1, sound: 'manoteo' }],
      2: [{ drum: 2, sound: 'abierto' }],
      4: [{ drum: 1, sound: 'seco' }],
      6: [{ drum: 2, sound: 'abierto' }],
      8: [{ drum: 1, sound: 'manoteo' }],
      10: [{ drum: 1, sound: 'abierto' }],
      12: [{ drum: 1, sound: 'seco' }],
      14: [{ drum: 2, sound: 'abierto' }]
    }
  },
  rumba_columbia: {
    name: '🥁 Rumba Columbia (Fast 6/8 Traditional)',
    stepCount: 12,
    steps: {
      0: [{ drum: 3, sound: 'bajo' }],
      2: [{ drum: 2, sound: 'seco' }],
      4: [{ drum: 2, sound: 'abierto' }],
      5: [{ drum: 3, sound: 'abierto' }],
      7: [{ drum: 2, sound: 'seco' }],
      9: [{ drum: 2, sound: 'abierto' }],
      10: [{ drum: 2, sound: 'abierto' }]
    }
  },
  conga_de_comparsa: {
    name: '🥁 Conga de Comparsa (Havana/Santiago Carnival)',
    stepCount: 16,
    steps: {
      0: [{ drum: 2, sound: 'manoteo' }],
      2: [{ drum: 3, sound: 'bajo' }],
      4: [{ drum: 2, sound: 'seco' }],
      7: [{ drum: 2, sound: 'abierto' }],
      8: [{ drum: 3, sound: 'abierto' }],
      11: [{ drum: 2, sound: 'seco' }],
      12: [{ drum: 2, sound: 'abierto' }],
      14: [{ drum: 2, sound: 'abierto' }]
    }
  },
  abakua_nongo: {
    name: '🥁 Abakuá (Sacred Nongo 6/8 Adaptation)',
    stepCount: 12,
    steps: {
      0: [{ drum: 2, sound: 'manoteo' }],
      2: [{ drum: 2, sound: 'seco' }],
      3: [{ drum: 3, sound: 'abierto' }],
      5: [{ drum: 2, sound: 'abierto' }],
      6: [{ drum: 2, sound: 'manoteo' }],
      8: [{ drum: 2, sound: 'seco' }],
      9: [{ drum: 3, sound: 'abierto' }],
      11: [{ drum: 2, sound: 'abierto' }]
    }
  },
  bomba_holandes: {
    name: '🥁 Bomba Holandés (Fast Puerto Rican Buledador)',
    stepCount: 16,
    steps: {
      0: [{ drum: 3, sound: 'abierto' }],
      2: [{ drum: 2, sound: 'seco' }],
      4: [{ drum: 3, sound: 'abierto' }],
      6: [{ drum: 2, sound: 'seco' }],
      8: [{ drum: 3, sound: 'abierto' }],
      10: [{ drum: 2, sound: 'seco' }],
      12: [{ drum: 2, sound: 'abierto' }],
      14: [{ drum: 2, sound: 'abierto' }]
    }
  },
  makuta_traditional: {
    name: '🥁 Makuta (Ancient Bantu Pre-Rumba)',
    stepCount: 16,
    steps: {
      0: [
        { drum: 2, sound: 'golpe_de_casco' },
        { drum: 3, sound: 'bajo' }
      ],
      4: [{ drum: 2, sound: 'golpe_de_casco' }],
      6: [{ drum: 2, sound: 'abierto' }],
      8: [
        { drum: 2, sound: 'golpe_de_casco' },
        { drum: 3, sound: 'abierto' }
      ],
      12: [{ drum: 2, sound: 'golpe_de_casco' }],
      14: [{ drum: 2, sound: 'seco' }]
    }
  },
  gwoka_tumblak: {
    name: '🥁 Gwo Ka Tumblak (Guadeloupean Folk)',
    stepCount: 16,
    steps: {
      0: [{ drum: 1, sound: 'abierto' }],
      3: [{ drum: 2, sound: 'seco' }],
      6: [{ drum: 1, sound: 'abierto' }],
      8: [{ drum: 1, sound: 'abierto' }],
      11: [{ drum: 2, sound: 'seco' }],
      14: [{ drum: 1, sound: 'abierto' }]
    }
  }
};
