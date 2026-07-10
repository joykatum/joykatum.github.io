// Rhythms patterns for Tabla mapped precisely to Bayan (drum 0) and Dayan (drum 1)
export default {
  teental: {
    name: '🥁 Teental (16-Beat Classical King)',
    stepCount: 16,
    steps: {
      // Vibhag 1: Bhari (Resonant) - Dha Dhin Dhin Dha
      0: [
        { drum: 0, sound: 'bayan_ga_ghe' },
        { drum: 1, sound: 'dayan_na_ta' }
      ],
      1: [
        { drum: 0, sound: 'bayan_ga_ghe' },
        { drum: 1, sound: 'dayan_tin' }
      ],
      2: [
        { drum: 0, sound: 'bayan_ga_ghe' },
        { drum: 1, sound: 'dayan_tin' }
      ],
      3: [
        { drum: 0, sound: 'bayan_ga_ghe' },
        { drum: 1, sound: 'dayan_na_ta' }
      ],
      // Vibhag 2: Bhari (Resonant) - Dha Dhin Dhin Dha
      4: [
        { drum: 0, sound: 'bayan_ga_ghe' },
        { drum: 1, sound: 'dayan_na_ta' }
      ],
      5: [
        { drum: 0, sound: 'bayan_ga_ghe' },
        { drum: 1, sound: 'dayan_tin' }
      ],
      6: [
        { drum: 0, sound: 'bayan_ga_ghe' },
        { drum: 1, sound: 'dayan_tin' }
      ],
      7: [
        { drum: 0, sound: 'bayan_ga_ghe' },
        { drum: 1, sound: 'dayan_na_ta' }
      ],
      // Vibhag 3: KHALI (Muted/Empty Bass) - Ta Tin Tin Ta
      8: [
        { drum: 0, sound: 'bayan_ka_ke' },
        { drum: 1, sound: 'dayan_na_ta' }
      ],
      9: [
        { drum: 0, sound: 'bayan_ka_ke' },
        { drum: 1, sound: 'dayan_tin' }
      ],
      10: [
        { drum: 0, sound: 'bayan_ka_ke' },
        { drum: 1, sound: 'dayan_tin' }
      ],
      11: [
        { drum: 0, sound: 'bayan_ka_ke' },
        { drum: 1, sound: 'dayan_na_ta' }
      ],
      // Vibhag 4: Bhari (Return of Bass) - Dha Dhin Dhin Dha
      12: [
        { drum: 0, sound: 'bayan_ga_ghe' },
        { drum: 1, sound: 'dayan_na_ta' }
      ],
      13: [
        { drum: 0, sound: 'bayan_ga_ghe' },
        { drum: 1, sound: 'dayan_tin' }
      ],
      14: [
        { drum: 0, sound: 'bayan_ga_ghe' },
        { drum: 1, sound: 'dayan_tin' }
      ],
      15: [
        { drum: 0, sound: 'bayan_ga_ghe' },
        { drum: 1, sound: 'dayan_na_ta' }
      ]
    }
  },
  keharwa: {
    name: '🥁 Keharwa Taal (8-Beat Folk/Ghazal)',
    stepCount: 8,
    steps: {
      // Dha Ge Na Ti | Na Ka Dhin Na
      0: [
        { drum: 0, sound: 'bayan_ga_ghe' },
        { drum: 1, sound: 'dayan_na_ta' }
      ],
      1: [{ drum: 0, sound: 'bayan_ga_ghe' }],
      2: [{ drum: 1, sound: 'dayan_na_ta' }],
      3: [{ drum: 1, sound: 'dayan_tin' }],
      4: [{ drum: 1, sound: 'dayan_na_ta' }],
      5: [{ drum: 0, sound: 'bayan_ka_ke' }],
      6: [
        { drum: 0, sound: 'bayan_ga_ghe' },
        { drum: 1, sound: 'dayan_tin' }
      ],
      7: [{ drum: 1, sound: 'dayan_na_ta' }]
    }
  },
  roopak: {
    name: '🥁 Roopak Taal (7-Beat Classical)',
    stepCount: 7,
    steps: {
      // Starts on Khali (Unique): Tin Tin Na | Dhin Na | Dhin Na
      0: [
        { drum: 0, sound: 'bayan_ka_ke' },
        { drum: 1, sound: 'dayan_tin' }
      ],
      1: [{ drum: 1, sound: 'dayan_tin' }],
      2: [{ drum: 1, sound: 'dayan_na_ta' }],
      3: [
        { drum: 0, sound: 'bayan_ga_ghe' },
        { drum: 1, sound: 'dayan_tin' }
      ],
      4: [{ drum: 1, sound: 'dayan_na_ta' }],
      5: [
        { drum: 0, sound: 'bayan_ga_ghe' },
        { drum: 1, sound: 'dayan_tin' }
      ],
      6: [{ drum: 1, sound: 'dayan_na_ta' }]
    }
  },
  dadra: {
    name: '🥁 Dadra Taal (6-Beat Light-Classical)',
    stepCount: 6,
    steps: {
      // Dha Dhi Na | Dha Tu Na
      0: [
        { drum: 0, sound: 'bayan_ga_ghe' },
        { drum: 1, sound: 'dayan_na_ta' }
      ],
      1: [
        { drum: 0, sound: 'bayan_ga_ghe' },
        { drum: 1, sound: 'dayan_tin' }
      ],
      2: [{ drum: 1, sound: 'dayan_na_ta' }],
      3: [
        { drum: 0, sound: 'bayan_ka_ke' },
        { drum: 1, sound: 'dayan_na_ta' }
      ],
      4: [{ drum: 1, sound: 'dayan_tun' }],
      5: [{ drum: 1, sound: 'dayan_na_ta' }]
    }
  },
  jhaptal: {
    name: '🥁 Jhaptal (10-Beat Deep Classical)',
    stepCount: 10,
    steps: {
      // Dhi Na | Dhi Dhi Na | Ti Na | Dhi Dhi Na
      0: [
        { drum: 0, sound: 'bayan_ga_ghe' },
        { drum: 1, sound: 'dayan_tin' }
      ],
      1: [{ drum: 1, sound: 'dayan_na_ta' }],
      2: [
        { drum: 0, sound: 'bayan_ga_ghe' },
        { drum: 1, sound: 'dayan_tin' }
      ],
      3: [
        { drum: 0, sound: 'bayan_ga_ghe' },
        { drum: 1, sound: 'dayan_tin' }
      ],
      4: [{ drum: 1, sound: 'dayan_na_ta' }],
      5: [
        { drum: 0, sound: 'bayan_ka_ke' },
        { drum: 1, sound: 'dayan_tin' }
      ],
      6: [{ drum: 1, sound: 'dayan_na_ta' }],
      7: [
        { drum: 0, sound: 'bayan_ga_ghe' },
        { drum: 1, sound: 'dayan_tin' }
      ],
      8: [
        { drum: 0, sound: 'bayan_ga_ghe' },
        { drum: 1, sound: 'dayan_tin' }
      ],
      9: [{ drum: 1, sound: 'dayan_na_ta' }]
    }
  },
  ektal: {
    name: '🥁 Ektal (12-Beat Vilambit Tempo)',
    stepCount: 12,
    steps: {
      // Dhin Dhin | Dhage Tin Na | Ka Ta | Dhage Dhin Na
      0: [
        { drum: 0, sound: 'bayan_ga_ghe' },
        { drum: 1, sound: 'dayan_tin' }
      ],
      1: [
        { drum: 0, sound: 'bayan_ga_ghe' },
        { drum: 1, sound: 'dayan_tin' }
      ],
      2: [
        { drum: 0, sound: 'bayan_ga_ghe' },
        { drum: 1, sound: 'dayan_tun' }
      ],
      3: [{ drum: 1, sound: 'dayan_tin' }],
      4: [{ drum: 1, sound: 'dayan_na_ta' }],
      5: [{ drum: 0, sound: 'bayan_ka_ke' }],
      6: [{ drum: 1, sound: 'dayan_na_ta' }],
      7: [
        { drum: 0, sound: 'bayan_ga_ghe' },
        { drum: 1, sound: 'dayan_tun' }
      ],
      8: [
        { drum: 0, sound: 'bayan_ga_ghe' },
        { drum: 1, sound: 'dayan_tin' }
      ],
      9: [{ drum: 1, sound: 'dayan_na_ta' }],
      10: [{ drum: 0, sound: 'bayan_ga_ghe' }],
      11: [{ drum: 1, sound: 'dayan_na_ta' }]
    }
  },
  bhajani: {
    name: '🥁 Bhajani Taal (Devotional Grooves)',
    stepCount: 8,
    steps: {
      // Dynamic bouncing layout heard in traditional temples
      0: [
        { drum: 0, sound: 'bayan_ga_ghe' },
        { drum: 1, sound: 'dayan_tun' }
      ],
      1: [{ drum: 1, sound: 'dayan_na_ta' }],
      2: [
        { drum: 0, sound: 'bayan_ga_ghe' },
        { drum: 1, sound: 'dayan_tin' }
      ],
      3: [{ drum: 1, sound: 'dayan_na_ta' }],
      4: [
        { drum: 0, sound: 'bayan_ka_ke' },
        { drum: 1, sound: 'dayan_tun' }
      ],
      5: [{ drum: 1, sound: 'dayan_na_ta' }],
      6: [
        { drum: 0, sound: 'bayan_ga_ghe' },
        { drum: 1, sound: 'dayan_tin' }
      ],
      7: [{ drum: 1, sound: 'dayan_na_ta' }]
    }
  },
  chauka_taal: {
    name: '🥁 Chautal / Chauka (12-Beat Fast Dhrupad)',
    stepCount: 12,
    steps: {
      // Dha Dha Dhin Ta | Kita Dha Dhin Ta | Tete Kata Gadi Gana
      0: [
        { drum: 0, sound: 'bayan_ga_ghe' },
        { drum: 1, sound: 'dayan_na_ta' }
      ],
      1: [
        { drum: 0, sound: 'bayan_ga_ghe' },
        { drum: 1, sound: 'dayan_na_ta' }
      ],
      2: [
        { drum: 0, sound: 'bayan_ga_ghe' },
        { drum: 1, sound: 'dayan_tin' }
      ],
      3: [{ drum: 1, sound: 'dayan_na_ta' }],
      4: [{ drum: 1, sound: 'dayan_tin' }],
      6: [
        { drum: 0, sound: 'bayan_ga_ghe' },
        { drum: 1, sound: 'dayan_na_ta' }
      ],
      7: [
        { drum: 0, sound: 'bayan_ga_ghe' },
        { drum: 1, sound: 'dayan_tin' }
      ],
      8: [{ drum: 1, sound: 'dayan_na_ta' }],
      9: [{ drum: 1, sound: 'dayan_tin' }],
      10: [{ drum: 0, sound: 'bayan_ka_ke' }],
      11: [{ drum: 1, sound: 'dayan_na_ta' }]
    }
  },
  deepchandi: {
    name: '🥁 Deepchandi Taal (14-Beat Romantic Thumri)',
    stepCount: 14,
    steps: {
      // Dha Dhin S | Dha Dha Dhin S | Ta Tin S | Dha Dha Dhin S
      0: [
        { drum: 0, sound: 'bayan_ga_ghe' },
        { drum: 1, sound: 'dayan_na_ta' }
      ],
      1: [
        { drum: 0, sound: 'bayan_ga_ghe' },
        { drum: 1, sound: 'dayan_tin' }
      ],
      3: [
        { drum: 0, sound: 'bayan_ga_ghe' },
        { drum: 1, sound: 'dayan_na_ta' }
      ],
      4: [
        { drum: 0, sound: 'bayan_ga_ghe' },
        { drum: 1, sound: 'dayan_na_ta' }
      ],
      5: [
        { drum: 0, sound: 'bayan_ga_ghe' },
        { drum: 1, sound: 'dayan_tin' }
      ],
      7: [
        { drum: 0, sound: 'bayan_ka_ke' },
        { drum: 1, sound: 'dayan_tin' }
      ],
      8: [{ drum: 1, sound: 'dayan_tin' }],
      10: [
        { drum: 0, sound: 'bayan_ga_ghe' },
        { drum: 1, sound: 'dayan_na_ta' }
      ],
      11: [
        { drum: 0, sound: 'bayan_ga_ghe' },
        { drum: 1, sound: 'dayan_na_ta' }
      ],
      12: [
        { drum: 0, sound: 'bayan_ga_ghe' },
        { drum: 1, sound: 'dayan_tin' }
      ]
    }
  },
  jhumra: {
    name: '🥁 Jhumra Taal (14-Beat Slow Khayal Frame)',
    stepCount: 14,
    steps: {
      // Dhin-Dha-Te | Dhin-Dhin-Dhage | Tin-Ta-Te | Dhin-Dhin-Dhage
      0: [
        { drum: 0, sound: 'bayan_ga_ghe' },
        { drum: 1, sound: 'dayan_tin' }
      ],
      1: [{ drum: 1, sound: 'dayan_na_ta' }],
      2: [{ drum: 1, sound: 'dayan_tin' }],
      3: [
        { drum: 0, sound: 'bayan_ga_ghe' },
        { drum: 1, sound: 'dayan_tin' }
      ],
      4: [
        { drum: 0, sound: 'bayan_ga_ghe' },
        { drum: 1, sound: 'dayan_tin' }
      ],
      5: [{ drum: 0, sound: 'bayan_ga_ghe' }],
      7: [
        { drum: 0, sound: 'bayan_ka_ke' },
        { drum: 1, sound: 'dayan_tin' }
      ],
      8: [{ drum: 1, sound: 'dayan_na_ta' }],
      9: [{ drum: 1, sound: 'dayan_tin' }],
      10: [
        { drum: 0, sound: 'bayan_ga_ghe' },
        { drum: 1, sound: 'dayan_tin' }
      ],
      11: [
        { drum: 0, sound: 'bayan_ga_ghe' },
        { drum: 1, sound: 'dayan_tin' }
      ],
      12: [{ drum: 0, sound: 'bayan_ga_ghe' }]
    }
  },
  tilwada: {
    name: '🥁 Tilwada Taal (16-Beat Elegant Vilambit)',
    stepCount: 16,
    steps: {
      // Dha Dhin Dhin Dha | Tit Kata Gadhi Gana | Ta Tin Tin Ta | Tit Kata Gadhi Gana
      0: [
        { drum: 0, sound: 'bayan_ga_ghe' },
        { drum: 1, sound: 'dayan_na_ta' }
      ],
      1: [
        { drum: 0, sound: 'bayan_ga_ghe' },
        { drum: 1, sound: 'dayan_tin' }
      ],
      2: [
        { drum: 0, sound: 'bayan_ga_ghe' },
        { drum: 1, sound: 'dayan_tin' }
      ],
      3: [
        { drum: 0, sound: 'bayan_ga_ghe' },
        { drum: 1, sound: 'dayan_na_ta' }
      ],
      4: [{ drum: 1, sound: 'dayan_tin' }],
      5: [{ drum: 1, sound: 'dayan_na_ta' }],
      6: [{ drum: 0, sound: 'bayan_ga_ghe' }],
      8: [
        { drum: 0, sound: 'bayan_ka_ke' },
        { drum: 1, sound: 'dayan_na_ta' }
      ],
      9: [{ drum: 1, sound: 'dayan_tin' }],
      10: [{ drum: 1, sound: 'dayan_tin' }],
      11: [{ drum: 1, sound: 'dayan_na_ta' }],
      12: [{ drum: 1, sound: 'dayan_tin' }],
      13: [{ drum: 1, sound: 'dayan_na_ta' }],
      14: [{ drum: 0, sound: 'bayan_ga_ghe' }]
    }
  },
  dadra_laggi: {
    name: '🥁 Fast Dadra Laggi (Crescendo/Climax)',
    stepCount: 6,
    steps: {
      // Hyper-accelerated ending pattern used to wrap up live performances
      0: [
        { drum: 0, sound: 'bayan_ga_ghe' },
        { drum: 1, sound: 'dayan_na_ta' }
      ],
      1: [{ drum: 1, sound: 'dayan_tin' }],
      2: [
        { drum: 0, sound: 'bayan_ga_ghe' },
        { drum: 1, sound: 'dayan_na_ta' }
      ],
      3: [{ drum: 1, sound: 'dayan_na_ta' }],
      4: [
        { drum: 0, sound: 'bayan_ka_ke' },
        { drum: 1, sound: 'dayan_tin' }
      ],
      5: [{ drum: 1, sound: 'dayan_na_ta' }]
    }
  },
  punjabi_taal: {
    name: '🥁 Punjabi / Addha Taal (Folk Bhangra Drive)',
    stepCount: 16,
    steps: {
      // Syncopated, bouncing folk layout
      0: [
        { drum: 0, sound: 'bayan_ga_ghe' },
        { drum: 1, sound: 'dayan_tun' }
      ],
      2: [{ drum: 1, sound: 'dayan_na_ta' }],
      4: [
        { drum: 0, sound: 'bayan_ga_ghe' },
        { drum: 1, sound: 'dayan_tin' }
      ],
      6: [{ drum: 1, sound: 'dayan_tun' }],
      8: [
        { drum: 0, sound: 'bayan_ka_ke' },
        { drum: 1, sound: 'dayan_tun' }
      ],
      10: [{ drum: 1, sound: 'dayan_na_ta' }],
      12: [
        { drum: 0, sound: 'bayan_ga_ghe' },
        { drum: 1, sound: 'dayan_tin' }
      ],
      14: [{ drum: 1, sound: 'dayan_na_ta' }]
    }
  },
  kaida_theme: {
    name: '🥁 Basic Kaida Practice Theme',
    stepCount: 16,
    steps: {
      // Dha Te Te Dha Te Te Dha Dha | Ta Te Te Ta Te Te Dha Dha
      0: [
        { drum: 0, sound: 'bayan_ga_ghe' },
        { drum: 1, sound: 'dayan_na_ta' }
      ],
      2: [{ drum: 1, sound: 'dayan_tin' }],
      4: [{ drum: 1, sound: 'dayan_tin' }],
      6: [
        { drum: 0, sound: 'bayan_ga_ghe' },
        { drum: 1, sound: 'dayan_na_ta' }
      ],
      8: [
        { drum: 0, sound: 'bayan_ka_ke' },
        { drum: 1, sound: 'dayan_na_ta' }
      ],
      10: [{ drum: 1, sound: 'dayan_tin' }],
      12: [{ drum: 1, sound: 'dayan_tin' }],
      14: [
        { drum: 0, sound: 'bayan_ga_ghe' },
        { drum: 1, sound: 'dayan_na_ta' }
      ]
    }
  }
};
