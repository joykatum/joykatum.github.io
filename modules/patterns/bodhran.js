// Rhythm patterns for bodhran.
export default {
  bodhran_reel: {
    name: '🥁 Bodhrán Lively Reel (Standard)',
    stepCount: 16,
    steps: {
      0: [{ drum: 0, sound: 'back_hand_pressure_damp' }],
      2: [{ drum: 0, sound: 'tipper_roll' }],
      4: [{ drum: 0, sound: 'back_hand_pitch_glide' }],
      6: [{ drum: 0, sound: 'tipper_roll' }],
      8: [{ drum: 0, sound: 'back_hand_pressure_damp' }],
      10: [{ drum: 0, sound: 'back_hand_pressure_damp' }],
      12: [{ drum: 0, sound: 'back_hand_pitch_glide' }],
      14: [{ drum: 0, sound: 'tipper_roll' }]
    }
  },
  bodhran_reel_accented: {
    name: '🥁 Driving Reel (Back-Hand Push)',
    stepCount: 16,
    steps: {
      0: [{ drum: 0, sound: 'rimshot' }],
      2: [{ drum: 0, sound: 'tipper_roll' }],
      4: [{ drum: 0, sound: 'back_hand_pitch_glide' }],
      6: [{ drum: 0, sound: 'back_hand_pressure_damp' }],
      8: [{ drum: 0, sound: 'back_hand_pressure_damp' }],
      10: [{ drum: 0, sound: 'tipper_roll' }],
      12: [{ drum: 0, sound: 'back_hand_pitch_glide' }],
      14: [{ drum: 0, sound: 'rimshot' }]
    }
  },
  irish_jig: {
    name: '🥁 Irish Double Jig (6/8 Rolling)',
    stepCount: 12,
    steps: {
      0: [{ drum: 0, sound: 'back_hand_pressure_damp' }], // Downbeat (DUM)
      2: [{ drum: 0, sound: 'tipper_roll' }], // roll (da)
      4: [{ drum: 0, sound: 'tipper_roll' }], // roll (da)
      6: [{ drum: 0, sound: 'back_hand_pitch_glide' }], // Midbeat accent (DUM)
      8: [{ drum: 0, sound: 'tipper_roll' }], // roll (da)
      10: [{ drum: 0, sound: 'back_hand_pressure_damp' }] // roll (da)
    }
  },
  irish_jig_lift: {
    name: '🥁 Irish Jig (Syncopated Lift)',
    stepCount: 12,
    steps: {
      0: [{ drum: 0, sound: 'back_hand_pitch_glide' }],
      3: [{ drum: 0, sound: 'back_hand_pressure_damp' }],
      4: [{ drum: 0, sound: 'tipper_roll' }],
      6: [{ drum: 0, sound: 'rimshot' }],
      9: [{ drum: 0, sound: 'back_hand_pressure_damp' }],
      10: [{ drum: 0, sound: 'tipper_roll' }]
    }
  },
  slip_jig_bodhran: {
    name: '🥁 Slip Jig (9/8 Traditional)',
    stepCount: 18, // 9 beats * 2 subdivisions for accurate phrasing
    steps: {
      0: [{ drum: 0, sound: 'back_hand_pressure_damp' }], // Beat 1
      2: [{ drum: 0, sound: 'tipper_roll' }],
      4: [{ drum: 0, sound: 'tipper_roll' }],
      6: [{ drum: 0, sound: 'back_hand_pitch_glide' }], // Beat 2
      8: [{ drum: 0, sound: 'tipper_roll' }],
      10: [{ drum: 0, sound: 'tipper_roll' }],
      12: [{ drum: 0, sound: 'back_hand_pressure_damp' }], // Beat 3
      14: [{ drum: 0, sound: 'tipper_roll' }],
      16: [{ drum: 0, sound: 'back_hand_pitch_glide' }]
    }
  },
  hornpipe_bodhran: {
    name: '🥁 Irish Hornpipe (Dotted Swing)',
    stepCount: 16,
    steps: {
      0: [{ drum: 0, sound: 'back_hand_pitch_glide' }], // Long downbeat
      3: [{ drum: 0, sound: 'tipper_roll' }], // Short upbeat
      4: [{ drum: 0, sound: 'back_hand_pressure_damp' }], // Long downbeat
      7: [{ drum: 0, sound: 'tipper_roll' }], // Short upbeat
      8: [{ drum: 0, sound: 'back_hand_pitch_glide' }],
      11: [{ drum: 0, sound: 'tipper_roll' }],
      12: [{ drum: 0, sound: 'rimshot' }],
      15: [{ drum: 0, sound: 'back_hand_pressure_damp' }]
    }
  },
  bodhran_polka: {
    name: '🥁 Kerry Polka (Fast 2/4 Drive)',
    stepCount: 16,
    steps: {
      0: [{ drum: 0, sound: 'back_hand_pressure_damp' }],
      4: [{ drum: 0, sound: 'back_hand_pitch_glide' }],
      8: [{ drum: 0, sound: 'back_hand_pressure_damp' }],
      12: [{ drum: 0, sound: 'back_hand_pressure_damp' }],
      14: [{ drum: 0, sound: 'tipper_roll' }]
    }
  },
  bodhran_slide: {
    name: '🥁 Irish Slide (12/8 Rapid Roll)',
    stepCount: 12,
    steps: {
      0: [{ drum: 0, sound: 'back_hand_pressure_damp' }],
      3: [{ drum: 0, sound: 'tipper_roll' }],
      6: [{ drum: 0, sound: 'back_hand_pitch_glide' }],
      9: [{ drum: 0, sound: 'back_hand_pressure_damp' }]
    }
  },
  strathspey_bodhran: {
    name: '🥁 Scottish Strathspey (Snap Beat)',
    stepCount: 16,
    steps: {
      0: [{ drum: 0, sound: 'rimshot' }], // The sharp snap accent
      1: [{ drum: 0, sound: 'tipper_roll' }],
      4: [{ drum: 0, sound: 'back_hand_pressure_damp' }],
      6: [{ drum: 0, sound: 'tipper_roll' }],
      8: [{ drum: 0, sound: 'back_hand_pitch_glide' }],
      9: [{ drum: 0, sound: 'tipper_roll' }],
      12: [{ drum: 0, sound: 'back_hand_pressure_damp' }],
      14: [{ drum: 0, sound: 'tipper_roll' }]
    }
  },
  celtic_fusion: {
    name: '🥁 Celtic Pop Fusion',
    stepCount: 16,
    steps: {
      0: [{ drum: 0, sound: 'back_hand_pressure_damp' }],
      3: [{ drum: 0, sound: 'back_hand_pitch_glide' }],
      4: [{ drum: 0, sound: 'back_hand_pressure_damp' }],
      7: [{ drum: 0, sound: 'back_hand_pitch_glide' }],
      8: [{ drum: 0, sound: 'back_hand_pressure_damp' }],
      10: [{ drum: 0, sound: 'tipper_roll' }],
      12: [{ drum: 0, sound: 'back_hand_pressure_damp' }],
      14: [{ drum: 0, sound: 'tipper_roll' }]
    }
  },
  celtic_heartbeat: {
    name: '🥁 Sacred Celtic Heartbeat',
    stepCount: 16,
    steps: {
      0: [{ drum: 0, sound: 'back_hand_pressure_damp' }],
      4: [{ drum: 0, sound: 'back_hand_pressure_damp' }],
      8: [{ drum: 0, sound: 'back_hand_pressure_damp' }],
      12: [{ drum: 0, sound: 'back_hand_pitch_glide' }]
    }
  },
  bodhran_barndance: {
    name: '🥁 Barn Dance Steady Tap',
    stepCount: 16,
    steps: {
      0: [{ drum: 0, sound: 'back_hand_pressure_damp' }],
      2: [{ drum: 0, sound: 'tipper_roll' }],
      4: [{ drum: 0, sound: 'back_hand_pitch_glide' }],
      8: [{ drum: 0, sound: 'back_hand_pressure_damp' }],
      10: [{ drum: 0, sound: 'tipper_roll' }],
      12: [{ drum: 0, sound: 'back_hand_pressure_damp' }]
    }
  },
  irish_march_bodhran: {
    name: '🥁 Traditional Irish Military March',
    stepCount: 16,
    steps: {
      0: [{ drum: 0, sound: 'back_hand_pressure_damp' }],
      2: [{ drum: 0, sound: 'back_hand_pitch_glide' }],
      4: [{ drum: 0, sound: 'back_hand_pressure_damp' }],
      6: [{ drum: 0, sound: 'back_hand_pressure_damp' }],
      8: [{ drum: 0, sound: 'back_hand_pressure_damp' }],
      10: [{ drum: 0, sound: 'back_hand_pitch_glide' }],
      12: [{ drum: 0, sound: 'back_hand_pressure_damp' }],
      14: [{ drum: 0, sound: 'back_hand_pressure_damp' }]
    }
  },
  mazurka_bodhran: {
    name: '🥁 Irish Mazurka (3/4 Accent on 2)',
    stepCount: 12, // 3 beats * 4 subdivisions
    steps: {
      0: [{ drum: 0, sound: 'back_hand_pressure_damp' }], // Beat 1
      4: [{ drum: 0, sound: 'rimshot' }], // Beat 2 (Strong Mazurka accent)
      6: [{ drum: 0, sound: 'tipper_roll' }],
      8: [{ drum: 0, sound: 'back_hand_pitch_glide' }] // Beat 3
    }
  },
  scandinavia_celtic_three: {
    name: '🥁 Nordic-Celtic Waltz (3/4 Pulse)',
    stepCount: 12,
    steps: {
      0: [{ drum: 0, sound: 'back_hand_pitch_glide' }], // Bass heavy 1
      4: [{ drum: 0, sound: 'back_hand_pressure_damp' }], // Crisp damp 2
      8: [{ drum: 0, sound: 'back_hand_pressure_damp' }] // Crisp damp 3
    }
  }
};
