export default {
  songo: {
    name: 'District Songo (Enhanced Multi-Drum)',
    stepCount: 16,
    steps: {
      0: [
        { drum: 1, sound: 'abierto' }, // Quinto accent
        { drum: 3, sound: 'bajo' } // Tumba pulse
      ],
      2: [{ drum: 2, sound: 'manoteo' }],
      3: [{ drum: 1, sound: 'abierto' }],
      4: [{ drum: 2, sound: 'tapado' }],
      6: [{ drum: 2, sound: 'abierto' }],
      8: [{ drum: 1, sound: 'abierto' }],
      10: [{ drum: 2, sound: 'manoteo' }],
      11: [{ drum: 3, sound: 'abierto' }], // Low voice response
      12: [{ drum: 0, sound: 'seco' }], // High crack solo punch
      14: [{ drum: 2, sound: 'abierto' }]
    }
  },
  tumbao: {
    name: 'Traditional Tumbao (Authentic 2-Drum March)',
    stepCount: 16,
    steps: {
      0: [{ drum: 2, sound: 'manoteo' }],
      2: [{ drum: 2, sound: 'manoteo' }],
      4: [{ drum: 2, sound: 'seco' }],
      6: [{ drum: 2, sound: 'manoteo' }],
      8: [{ drum: 2, sound: 'manoteo' }],
      10: [{ drum: 2, sound: 'manoteo' }],
      12: [{ drum: 2, sound: 'abierto' }], // Conga open tone
      14: [{ drum: 3, sound: 'abierto' }] // Tumba open tone drop
    }
  },
  guaguanco: {
    name: 'Guaguancó (Classic 3-Drum Conversación)',
    stepCount: 16,
    steps: {
      0: [{ drum: 2, sound: 'manoteo' }],
      2: [{ drum: 1, sound: 'seco' }], // Quinto slap entry
      4: [{ drum: 3, sound: 'abierto' }], // Tumba low answer
      6: [{ drum: 2, sound: 'manoteo' }],
      8: [{ drum: 1, sound: 'abierto' }], // Quinto open accent
      10: [{ drum: 2, sound: 'abierto' }], // Conga melody bridge
      12: [{ drum: 1, sound: 'seco' }], // Quinto high slap finish
      14: [{ drum: 3, sound: 'abierto' }] // Tumba drop response
    }
  },
  cha_cha: {
    name: 'Standard Cha-Cha-Chá (1-Drum Classic)',
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
    name: 'Merengue Jaleo (Dominican Commercial Style)',
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
    name: 'Modern Timba (3-Drum Tumbao con Moña)',
    stepCount: 16,
    steps: {
      0: [{ drum: 2, sound: 'manoteo' }],
      2: [{ drum: 2, sound: 'manoteo' }],
      4: [{ drum: 1, sound: 'seco' }], // Quinto high aggressive syncopation
      6: [{ drum: 2, sound: 'manoteo' }],
      8: [{ drum: 3, sound: 'bajo' }], // Tumba sub response drop
      10: [{ drum: 2, sound: 'abierto' }],
      12: [{ drum: 1, sound: 'seco' }], // Quinto accent
      14: [{ drum: 3, sound: 'abierto' }] // Tumba low finish
    }
  },
  salsa_palo_3_drum: {
    name: 'Salsa Palo (High-Energy 3-Drum Groove)',
    stepCount: 16,
    steps: {
      0: [{ drum: 2, sound: 'manoteo' }],
      2: [{ drum: 3, sound: 'bajo' }], // Low end ground floor pulse
      4: [{ drum: 1, sound: 'seco' }], // High top slice slap
      6: [{ drum: 2, sound: 'manoteo' }],
      8: [{ drum: 2, sound: 'manoteo' }],
      10: [{ drum: 1, sound: 'abierto' }], // High tone phrase
      12: [{ drum: 2, sound: 'abierto' }], // Mid tone phrase
      14: [{ drum: 3, sound: 'abierto' }] // Low tone phrase
    }
  },
  bolero: {
    name: 'Bolero Conga (2-Drum Variant)',
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
    name: 'Afoxé / Ijexá (Bahian Afro-Brazilian)',
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
    name: 'Plena (Puerto Rican Standard March)',
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
    name: 'Palo (Congolese Folkloric)',
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
    name: 'Bembe (3-Drum 6/8 Polyrhythm)',
    stepCount: 12,
    steps: {
      0: [{ drum: 2, sound: 'abierto' }],
      2: [{ drum: 0, sound: 'seco' }], // Sharp high breakdown
      4: [{ drum: 1, sound: 'abierto' }], // Mid accent
      6: [{ drum: 2, sound: 'abierto' }],
      8: [{ drum: 0, sound: 'seco' }],
      10: [{ drum: 1, sound: 'abierto' }]
    }
  },
  samba_conga: {
    name: 'Samba Conga (Batucada Style)',
    stepCount: 16,
    steps: {
      0: [{ drum: 1, sound: 'abierto' }],
      2: [{ drum: 0, sound: 'seco' }],
      4: [{ drum: 1, sound: 'abierto' }],
      6: [{ drum: 1, sound: 'abierto' }],
      8: [{ drum: 3, sound: 'bajo' }], // Low end Surdo-like pulse drop
      10: [{ drum: 0, sound: 'seco' }],
      12: [{ drum: 1, sound: 'manoteo' }],
      14: [{ drum: 2, sound: 'abierto' }]
    }
  },
  afro_cuban_6_8: {
    name: 'Afro-Cuban Columbia (3-Drum 6/8)',
    stepCount: 12,
    steps: {
      0: [{ drum: 3, sound: 'bajo' }], // Bottom floor anchor
      2: [{ drum: 0, sound: 'seco' }], // Lead soloist crackle
      4: [{ drum: 1, sound: 'abierto' }],
      6: [{ drum: 2, sound: 'abierto' }],
      8: [{ drum: 0, sound: 'seco' }],
      10: [{ drum: 3, sound: 'abierto' }] // Base drop response
    }
  },
  mozambique_conga: {
    name: 'Mozambique (3-Drum Rhythm Section)',
    stepCount: 16,
    steps: {
      0: [{ drum: 1, sound: 'manoteo' }],
      2: [{ drum: 0, sound: 'seco' }], // High block pop
      4: [{ drum: 1, sound: 'abierto' }],
      6: [{ drum: 3, sound: 'abierto' }], // Tumba syncopated engine drop
      8: [{ drum: 1, sound: 'manoteo' }],
      10: [{ drum: 0, sound: 'seco' }],
      12: [{ drum: 2, sound: 'abierto' }],
      13: [{ drum: 3, sound: 'abierto' }], // Rapid multi-drum shift sequence
      14: [{ drum: 1, sound: 'abierto' }]
    }
  },
  comparsa_conga: {
    name: 'Comparsa Conga Carnival (2-Drum)',
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
    name: 'Songo Conga Groove',
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
    name: 'Rumba Columbia (3-Drum Traditional 6/8)',
    stepCount: 12,
    steps: {
      0: [{ drum: 3, sound: 'bajo' }],
      2: [{ drum: 1, sound: 'seco' }], // Quinto soloist snap
      4: [{ drum: 2, sound: 'abierto' }], // Conga core response
      5: [{ drum: 3, sound: 'abierto' }], // Tumba response tail
      7: [{ drum: 1, sound: 'seco' }],
      9: [{ drum: 2, sound: 'abierto' }],
      10: [{ drum: 2, sound: 'abierto' }]
    }
  },
  conga_de_comparsa: {
    name: 'Conga de Comparsa (Havana/Santiago Carnival)',
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
    name: 'Abakuá (Sacred Nongo 3-Drum 6/8)',
    stepCount: 12,
    steps: {
      0: [{ drum: 2, sound: 'manoteo' }],
      2: [{ drum: 1, sound: 'seco' }], // Quinto response
      3: [{ drum: 3, sound: 'abierto' }], // Tumba foundational drop
      5: [{ drum: 2, sound: 'abierto' }],
      6: [{ drum: 2, sound: 'manoteo' }],
      8: [{ drum: 1, sound: 'seco' }],
      9: [{ drum: 3, sound: 'abierto' }],
      11: [{ drum: 2, sound: 'abierto' }]
    }
  },
  bomba_holandes: {
    name: 'Bomba Holandés (Fast Puerto Rican Buledador)',
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
    name: 'Makuta (Ancient Bantu Pre-Rumba)',
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
    name: 'Gwo Ka Tumblak (Guadeloupean Folk)',
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
