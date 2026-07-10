// Rhythm patterns for West African Djembe
// Mapped precisely to your engine sound definition: drum 0
export default {
  kuku: {
    name: '🥁 Kuku (Traditional Harvest Festival)',
    stepCount: 16,
    steps: {
      // Classic 4/4 adaptation of the traditional dynamic village circle rhythm
      0: [{ drum: 0, sound: 'bass' }],
      2: [{ drum: 0, sound: 'tone' }],
      3: [{ drum: 0, sound: 'tone' }],
      4: [{ drum: 0, sound: 'slap' }],
      6: [{ drum: 0, sound: 'tone' }],
      8: [{ drum: 0, sound: 'bass' }],
      10: [{ drum: 0, sound: 'tone' }],
      11: [{ drum: 0, sound: 'tone' }],
      12: [{ drum: 0, sound: 'slap' }],
      14: [{ drum: 0, sound: 'tone' }]
    }
  },
  moribayassa: {
    name: "🥁 Moribayassa (Joyous Women's Celebration)",
    stepCount: 16,
    steps: {
      // Fast, driving traditional template featuring a mix of rapid tones and accents
      0: [{ drum: 0, sound: 'bass' }],
      2: [{ drum: 0, sound: 'slap' }],
      4: [{ drum: 0, sound: 'tone' }],
      5: [{ drum: 0, sound: 'tone' }],
      6: [{ drum: 0, sound: 'slap' }],
      8: [{ drum: 0, sound: 'bass' }],
      10: [{ drum: 0, sound: 'slap' }],
      12: [{ drum: 0, sound: 'tone' }],
      13: [{ drum: 0, sound: 'tone' }],
      14: [{ drum: 0, sound: 'slap' }]
    }
  },
  kakilambe: {
    name: '🥁 Kakilambe (Sacred Mask Spirit Ritual)',
    stepCount: 12,
    steps: {
      // Authentic ternary (12/8 equivalent) feel standard to this deep Guinean rhythm
      0: [{ drum: 0, sound: 'bass' }],
      2: [{ drum: 0, sound: 'tone' }],
      4: [{ drum: 0, sound: 'slap' }],
      6: [{ drum: 0, sound: 'bass' }],
      8: [{ drum: 0, sound: 'tone' }],
      10: [{ drum: 0, sound: 'slap' }]
    }
  },
  dununba: {
    name: '🥁 Dununba (Dance of the Strong Men)',
    stepCount: 16,
    steps: {
      // Heavy, broad rhythmic pattern accented by a syncopated double-bass baseline
      0: [{ drum: 0, sound: 'bass' }],
      2: [{ drum: 0, sound: 'bass' }],
      4: [{ drum: 0, sound: 'slap' }],
      6: [{ drum: 0, sound: 'tone' }],
      8: [{ drum: 0, sound: 'slap' }],
      10: [{ drum: 0, sound: 'tone' }],
      12: [{ drum: 0, sound: 'bass' }],
      14: [{ drum: 0, sound: 'slap' }]
    }
  },
  soko: {
    name: '🥁 Soko (Initiation Rhythm)',
    stepCount: 16,
    steps: {
      // Elegant classic spacing displaying crisp alternating slaps and open edge tones
      0: [{ drum: 0, sound: 'bass' }],
      3: [{ drum: 0, sound: 'tone' }],
      4: [{ drum: 0, sound: 'slap' }],
      7: [{ drum: 0, sound: 'tone' }],
      8: [{ drum: 0, sound: 'bass' }],
      11: [{ drum: 0, sound: 'tone' }],
      12: [{ drum: 0, sound: 'slap' }],
      15: [{ drum: 0, sound: 'slap' }]
    }
  },
  tiriba: {
    name: '🥁 Tiriba (Traditional Land-Cleaning Dance)',
    stepCount: 12,
    steps: {
      // Complex syncopated 12-count cadence highlighting fast slaps
      0: [{ drum: 0, sound: 'bass' }],
      2: [{ drum: 0, sound: 'slap' }],
      3: [{ drum: 0, sound: 'slap' }],
      5: [{ drum: 0, sound: 'tone' }],
      6: [{ drum: 0, sound: 'bass' }],
      8: [{ drum: 0, sound: 'slap' }],
      9: [{ drum: 0, sound: 'slap' }],
      11: [{ drum: 0, sound: 'tone' }]
    }
  },
  liberte: {
    name: '🥁 Liberté (Ballet National Tempo)',
    stepCount: 16,
    steps: {
      // High-speed theatrical arrangement utilizing rapid flam ornaments
      0: [{ drum: 0, sound: 'flam_roll' }],
      2: [{ drum: 0, sound: 'slap' }],
      4: [{ drum: 0, sound: 'tone' }],
      6: [{ drum: 0, sound: 'slap' }],
      8: [{ drum: 0, sound: 'flam_roll' }],
      10: [{ drum: 0, sound: 'slap' }],
      12: [{ drum: 0, sound: 'tone' }],
      14: [{ drum: 0, sound: 'slap' }]
    }
  },
  djembe_solo_echauffement: {
    name: "🔥 L'Échauffement (Solo Climax Acceleration)",
    stepCount: 16,
    steps: {
      // The authentic multi-stroke call pattern a soloist throws out to signaling a massive tempo lift
      0: [{ drum: 0, sound: 'slap' }],
      1: [{ drum: 0, sound: 'slap' }],
      2: [{ drum: 0, sound: 'slap' }],
      4: [{ drum: 0, sound: 'flam_roll' }],
      6: [{ drum: 0, sound: 'tone' }],
      8: [{ drum: 0, sound: 'slap' }],
      9: [{ drum: 0, sound: 'slap' }],
      10: [{ drum: 0, sound: 'slap' }],
      12: [{ drum: 0, sound: 'flam_roll' }],
      14: [{ drum: 0, sound: 'tone' }]
    }
  },
  mande_wood_rim: {
    name: '🌾 Traditional Shell Stick-Click',
    stepCount: 16,
    steps: {
      // Mimics a layout where a player clicks the rim/body while maintaining basic hand syncopation
      0: [{ drum: 0, sound: 'bass' }],
      2: [{ drum: 0, sound: 'rim_click' }],
      4: [{ drum: 0, sound: 'tone' }],
      6: [{ drum: 0, sound: 'rim_click' }],
      8: [{ drum: 0, sound: 'slap' }],
      10: [{ drum: 0, sound: 'rim_click' }],
      12: [{ drum: 0, sound: 'tone' }],
      14: [{ drum: 0, sound: 'rim_click' }]
    }
  },
  afrobeat_djembe_pocket: {
    name: '✨ Afrobeat Modern Hybrid Pocket',
    stepCount: 16,
    steps: {
      // Contemporary groove fusing classic Fela Kuti highlife rhythm with deep hand-drum bounces
      0: [{ drum: 0, sound: 'bass' }],
      3: [{ drum: 0, sound: 'rim_click' }],
      4: [{ drum: 0, sound: 'slap' }],
      6: [{ drum: 0, sound: 'tone' }],
      8: [{ drum: 0, sound: 'bass' }],
      10: [{ drum: 0, sound: 'rim_click' }],
      11: [{ drum: 0, sound: 'tone' }],
      12: [{ drum: 0, sound: 'slap' }],
      14: [{ drum: 0, sound: 'flam_roll' }]
    }
  },
  djembe_hiphop_break: {
    name: '✨ Tribal Boom-Bap Breakbeat',
    stepCount: 16,
    steps: {
      // Aggressive production loop mapping bass as kick, slap as snare, and clicks as hi-hat shuffles
      0: [{ drum: 0, sound: 'bass' }],
      2: [{ drum: 0, sound: 'rim_click' }],
      4: [{ drum: 0, sound: 'slap' }],
      6: [{ drum: 0, sound: 'rim_click' }],
      8: [{ drum: 0, sound: 'bass' }],
      10: [{ drum: 0, sound: 'bass' }],
      12: [{ drum: 0, sound: 'slap' }],
      14: [{ drum: 0, sound: 'flam_roll' }]
    }
  },
  desert_trance: {
    name: '✨ Sub-Saharan Ambient Trance',
    stepCount: 12,
    steps: {
      // Rolling, hypnotic layout utilizing ghost-note clicks and swelling flam rolls
      0: [{ drum: 0, sound: 'bass' }],
      2: [{ drum: 0, sound: 'flam_roll' }],
      4: [{ drum: 0, sound: 'rim_click' }],
      6: [{ drum: 0, sound: 'tone' }],
      8: [{ drum: 0, sound: 'flam_roll' }],
      10: [{ drum: 0, sound: 'rim_click' }]
    }
  }
};
