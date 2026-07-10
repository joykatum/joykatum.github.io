// Exhaustive rhythm patterns for Batá.
export default {
  toque_chango: {
    name: '🥁 Toque Changó (Meta)',
    stepCount: 16,
    steps: {
      0: [
        { drum: 2, sound: 'chacha_tapado' },
        { drum: 1, sound: 'enu_muff' }
      ],
      2: [
        { drum: 1, sound: 'enu_abierto' },
        { drum: 0, sound: 'chacha_abierto' }
      ],
      4: [
        { drum: 2, sound: 'enu_abierto' },
        { drum: 1, stroke: 'chacha_tapado' }
      ],
      6: [{ drum: 0, sound: 'chacha_abierto' }],
      8: [
        { drum: 2, sound: 'enu_tapado' },
        { drum: 1, sound: 'enu_tapado' }
      ],
      10: [
        { drum: 1, sound: 'chacha_tapado' },
        { drum: 0, sound: 'chacha_tapado' }
      ],
      12: [{ drum: 2, sound: 'enu_abierto' }],
      14: [{ drum: 1, sound: 'enu_tapado' }]
    }
  },
  toque_elegua: {
    name: '🥁 Toque Eleguá (Lalubanché)',
    stepCount: 12,
    steps: {
      0: [
        { drum: 2, sound: 'enu_abierto' },
        { drum: 0, sound: 'chacha_tapado' }
      ],
      2: [{ drum: 1, sound: 'enu_tapado' }],
      4: [{ drum: 2, sound: 'enu_muff' }],
      6: [
        { drum: 1, sound: 'enu_abierto' },
        { drum: 0, sound: 'chacha_abierto' }
      ],
      8: [{ drum: 2, sound: 'enu_tapado' }],
      10: [{ drum: 1, sound: 'chacha_tapado' }]
    }
  },
  toque_ochun: {
    name: '🥁 Toque Ochún (Panchagaragar)',
    stepCount: 16,
    steps: {
      0: [{ drum: 2, sound: 'enu_tapado' }],
      2: [{ drum: 1, sound: 'enu_tapado' }],
      4: [{ drum: 0, sound: 'chacha_abierto' }],
      6: [{ drum: 1, sound: 'enu_abierto' }],
      8: [{ drum: 2, sound: 'chacha_tapado' }],
      10: [{ drum: 1, sound: 'enu_tapado' }],
      12: [{ drum: 0, sound: 'chacha_tapado' }],
      14: [{ drum: 2, sound: 'enu_tapado' }]
    }
  },
  toque_yemaya: {
    name: '🥁 Toque Yemayá (Alaro)',
    stepCount: 12,
    steps: {
      0: [
        { drum: 2, sound: 'enu_abierto' },
        { drum: 1, sound: 'enu_muff' }
      ],
      3: [{ drum: 0, sound: 'chacha_abierto' }],
      4: [{ drum: 1, sound: 'enu_tapado' }],
      6: [{ drum: 2, sound: 'enu_tapado' }],
      9: [
        { drum: 1, sound: 'enu_abierto' },
        { drum: 0, sound: 'chacha_tapado' }
      ]
    }
  },
  toque_ogun: {
    name: '🥁 Toque Ogún (Warrior Ride)',
    stepCount: 12,
    steps: {
      0: [
        { drum: 2, sound: 'chacha_tapado' },
        { drum: 0, sound: 'enu_abierto' }
      ],
      3: [{ drum: 1, sound: 'enu_tapado' }],
      6: [
        { drum: 2, sound: 'enu_abierto' },
        { drum: 0, sound: 'chacha_abierto' }
      ],
      9: [{ drum: 1, sound: 'enu_tapado' }]
    }
  },
  toque_oya: {
    name: '🥁 Toque Oyá (Yakotá)',
    stepCount: 16,
    steps: {
      0: [{ drum: 2, sound: 'chacha_tapado' }],
      2: [{ drum: 0, sound: 'chacha_abierto' }],
      4: [{ drum: 1, sound: 'enu_tapado' }],
      6: [{ drum: 2, sound: 'enu_tapado' }],
      8: [{ drum: 1, sound: 'enu_abierto' }],
      10: [{ drum: 0, sound: 'chacha_tapado' }],
      12: [{ drum: 2, sound: 'chacha_tapado' }],
      14: [{ drum: 1, sound: 'enu_tapado' }]
    }
  },
  toque_obatalameta: {
    name: '🥁 Toque Obatalá (Baba Fururu)',
    stepCount: 16,
    steps: {
      0: [{ drum: 2, sound: 'enu_muff' }],
      2: [{ drum: 1, sound: 'enu_abierto' }],
      4: [{ drum: 0, sound: 'chacha_tapado' }],
      6: [{ drum: 2, sound: 'enu_abierto' }],
      8: [{ drum: 2, sound: 'enu_muff' }],
      10: [{ drum: 1, sound: 'enu_tapado' }],
      12: [{ drum: 0, sound: 'chacha_abierto' }],
      14: [{ drum: 1, sound: 'enu_abierto' }]
    }
  },
  toque_babalu: {
    name: '🥁 Toque Babalú Ayé (Awó)',
    stepCount: 16,
    steps: {
      0: [{ drum: 2, sound: 'chacha_tapado' }],
      2: [{ drum: 0, sound: 'chacha_abierto' }],
      4: [{ drum: 1, sound: 'enu_tapado' }],
      6: [{ drum: 2, sound: 'enu_abierto' }],
      8: [{ drum: 2, sound: 'chacha_tapado' }],
      10: [{ drum: 0, sound: 'chacha_tapado' }],
      12: [{ drum: 1, sound: 'enu_abierto' }],
      14: [{ drum: 2, sound: 'enu_tapado' }]
    }
  },
  toque_osun: {
    name: '🥁 Toque Osun (The Sacred Staff)',
    stepCount: 12,
    steps: {
      0: [{ drum: 2, sound: 'chacha_tapado' }],
      3: [{ drum: 1, sound: 'enu_tapado' }],
      6: [{ drum: 0, sound: 'chacha_abierto' }],
      9: [{ drum: 1, sound: 'enu_abierto' }]
    }
  },
  toque_orunmila: {
    name: '🥁 Toque Orunmila (The Oracle)',
    stepCount: 16,
    steps: {
      0: [{ drum: 2, sound: 'chacha_tapado' }],
      2: [{ drum: 0, sound: 'chacha_abierto' }],
      4: [{ drum: 1, sound: 'enu_tapado' }],
      8: [{ drum: 2, sound: 'chacha_tapado' }],
      10: [{ drum: 0, sound: 'chacha_tapado' }],
      12: [{ drum: 1, sound: 'enu_tapado' }],
      14: [{ drum: 1, sound: 'enu_abierto' }]
    }
  },
  toque_ibeyi: {
    name: '🥁 Toque Los Ibeyi (Sacred Twins)',
    stepCount: 12,
    steps: {
      0: [
        { drum: 0, sound: 'chacha_abierto' },
        { drum: 2, sound: 'enu_abierto' }
      ],
      2: [{ drum: 1, sound: 'enu_tapado' }],
      4: [{ drum: 0, sound: 'chacha_tapado' }],
      6: [{ drum: 2, sound: 'enu_tapado' }],
      8: [{ drum: 1, sound: 'enu_abierto' }],
      10: [{ drum: 0, sound: 'chacha_abierto' }]
    }
  },
  toque_inle: {
    name: '🥁 Toque Inle (The Fisherman)',
    stepCount: 16,
    steps: {
      0: [{ drum: 2, sound: 'enu_abierto' }],
      3: [{ drum: 1, sound: 'enu_tapado' }],
      4: [{ drum: 0, sound: 'chacha_tapado' }],
      7: [{ drum: 2, sound: 'enu_tapado' }],
      8: [{ drum: 1, sound: 'enu_abierto' }],
      11: [{ drum: 0, sound: 'chacha_abierto' }],
      12: [{ drum: 2, sound: 'enu_muff' }],
      15: [{ drum: 1, sound: 'enu_tapado' }]
    }
  },
  toque_uba: {
    name: '🥁 Toque Obba (Royalty Mirror)',
    stepCount: 12,
    steps: {
      0: [{ drum: 2, sound: 'chacha_tapado' }],
      3: [
        { drum: 1, sound: 'enu_muff' },
        { drum: 0, sound: 'chacha_abierto' }
      ],
      6: [{ drum: 2, sound: 'enu_abierto' }],
      9: [{ drum: 1, sound: 'enu_tapado' }]
    }
  },
  toque_osain: {
    name: '🥁 Toque Osain (Forest Herbs)',
    stepCount: 16,
    steps: {
      0: [
        { drum: 2, sound: 'enu_abierto' },
        { drum: 0, sound: 'chacha_tapado' }
      ],
      4: [{ drum: 1, sound: 'enu_tapado' }],
      6: [{ drum: 1, sound: 'enu_abierto' }],
      8: [
        { drum: 2, sound: 'enu_muff' },
        { drum: 0, sound: 'chacha_abierto' }
      ],
      12: [{ drum: 1, sound: 'enu_tapado' }],
      14: [{ drum: 2, sound: 'enu_abierto' }]
    }
  },
  toque_agayu: {
    name: '🥁 Toque Aggayú (Volcano)',
    stepCount: 12,
    steps: {
      0: [{ drum: 2, sound: 'enu_tapado' }],
      2: [{ drum: 1, sound: 'enu_abierto' }],
      4: [{ drum: 0, sound: 'chacha_tapado' }],
      6: [{ drum: 2, sound: 'enu_abierto' }],
      8: [{ drum: 1, sound: 'enu_tapado' }],
      10: [{ drum: 0, sound: 'chacha_abierto' }]
    }
  },
  toque_nongo_steady: {
    name: '🥁 Toque Ñongo (Festive Standard)',
    stepCount: 16,
    steps: {
      0: [
        { drum: 2, sound: 'enu_abierto' },
        { drum: 0, sound: 'chacha_tapado' }
      ],
      4: [{ drum: 1, sound: 'enu_tapado' }],
      6: [{ drum: 1, sound: 'enu_abierto' }],
      8: [
        { drum: 2, sound: 'enu_tapado' },
        { drum: 0, sound: 'chacha_abierto' }
      ],
      12: [{ drum: 1, sound: 'enu_abierto' }],
      14: [{ drum: 0, sound: 'chacha_tapado' }]
    }
  },
  toque_nongo_fast: {
    name: '🥁 Toque Ñongo (Acelerado Fast)',
    stepCount: 12, // Shifting to a rolling triplet configuration at higher tempo
    steps: {
      0: [
        { drum: 2, sound: 'enu_abierto' },
        { drum: 0, sound: 'chacha_tapado' }
      ],
      3: [{ drum: 1, sound: 'enu_tapado' }],
      6: [
        { drum: 2, sound: 'enu_tapado' },
        { drum: 0, sound: 'chacha_abierto' }
      ],
      9: [{ drum: 1, sound: 'enu_abierto' }]
    }
  },
  toque_chachalokafun: {
    name: '🥁 Toque Chachalokafún (Fast Egbado)',
    stepCount: 16,
    steps: {
      0: [
        { drum: 2, sound: 'chacha_tapado' },
        { drum: 1, sound: 'enu_tapado' }
      ],
      3: [{ drum: 0, sound: 'chacha_abierto' }],
      4: [{ drum: 2, sound: 'enu_abierto' }],
      7: [{ drum: 1, sound: 'enu_abierto' }],
      8: [{ drum: 2, sound: 'chacha_tapado' }],
      11: [{ drum: 0, sound: 'chacha_tapado' }],
      12: [{ drum: 1, sound: 'enu_muff' }],
      15: [{ drum: 2, sound: 'enu_abierto' }]
    }
  },
  toque_tuibi: {
    name: '🥁 Toque Tuibí (Complex Cross-Pulse)',
    stepCount: 12,
    steps: {
      0: [
        { drum: 2, sound: 'enu_muff' },
        { drum: 0, sound: 'chacha_abierto' }
      ],
      2: [{ drum: 1, sound: 'enu_abierto' }],
      4: [{ drum: 2, sound: 'enu_tapado' }],
      6: [{ drum: 0, sound: 'chacha_tapado' }],
      8: [{ drum: 1, sound: 'enu_tapado' }],
      10: [{ drum: 2, sound: 'enu_abierto' }]
    }
  },
  toque_ochosi: {
    name: '🥁 Toque Ochosi (The Hunter Tracking)',
    stepCount: 16,
    steps: {
      0: [{ drum: 2, sound: 'chacha_tapado' }],
      2: [{ drum: 1, sound: 'enu_abierto' }],
      4: [{ drum: 0, sound: 'chacha_abierto' }],
      6: [{ drum: 2, sound: 'enu_tapado' }],
      8: [{ drum: 2, sound: 'enu_abierto' }],
      10: [{ drum: 1, sound: 'enu_tapado' }],
      12: [{ drum: 0, sound: 'chacha_tapado' }],
      14: [{ drum: 1, sound: 'enu_abierto' }]
    }
  },
  toque_olokun: {
    name: '🥁 Toque Olokun (Abyssal Depths)',
    stepCount: 12,
    steps: {
      0: [{ drum: 2, sound: 'enu_muff' }],
      3: [{ drum: 1, sound: 'enu_muff' }],
      6: [
        { drum: 2, sound: 'enu_abierto' },
        { drum: 0, sound: 'chacha_tapado' }
      ],
      9: [
        { drum: 1, sound: 'enu_abierto' },
        { drum: 0, sound: 'chacha_abierto' }
      ]
    }
  },
  toque_yewa: {
    name: '🥁 Toque Yewá (Silent Ancestral)',
    stepCount: 16,
    steps: {
      0: [{ drum: 2, sound: 'enu_tapado' }],
      4: [{ drum: 1, sound: 'enu_muff' }],
      8: [{ drum: 0, sound: 'chacha_tapado' }],
      12: [{ drum: 2, sound: 'enu_muff' }],
      14: [{ drum: 1, sound: 'enu_abierto' }]
    }
  }
};
