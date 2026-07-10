// Rhythm patterns for Puerto Rican Barril de Bomba
// Mapped precisely to: drum 0 (Subidor / Primo - Lead), drum 1 (Buleador - Foundation)
export default {
  sica_traditional: {
    name: '🥁 Sicá (The Foundational Engine)',
    stepCount: 16,
    steps: {
      // The most widespread rhythm in Bomba; highly syncopated and driving
      0: [
        { drum: 1, sound: 'abierto' },
        { drum: 0, sound: 'abierto' }
      ],
      3: [{ drum: 1, sound: 'cu' }],
      4: [
        { drum: 1, sound: 'cu' },
        { drum: 0, sound: 'cu' }
      ],
      6: [{ drum: 0, sound: 'abierto' }],
      8: [{ drum: 1, sound: 'abierto' }],
      11: [{ drum: 1, sound: 'cu' }],
      12: [
        { drum: 1, sound: 'cu' },
        { drum: 0, sound: 'cu' }
      ],
      14: [{ drum: 0, sound: 'abierto' }]
    }
  },
  yuba_devotional: {
    name: '🥁 Yubá (Sacred, Deep 6/8 Triplet Feel)',
    stepCount: 12,
    steps: {
      // Traditionally an emotional, spiritual cadence used for older, graceful dance styles
      0: [
        { drum: 1, sound: 'abierto' },
        { drum: 0, sound: 'abierto' }
      ],
      2: [{ drum: 1, sound: 'cu' }],
      4: [
        { drum: 1, sound: 'cu' },
        { drum: 0, sound: 'cu' }
      ],
      6: [{ drum: 1, sound: 'abierto' }],
      8: [{ drum: 1, sound: 'cu' }],
      10: [{ drum: 0, sound: 'abierto' }]
    }
  },
  holand_climax: {
    name: '🥁 Holandés (High-Velocity West-Coast Style)',
    stepCount: 16,
    steps: {
      // Originating from the western region (Mayagüez), fast, energetic, and explosive
      0: [
        { drum: 1, sound: 'abierto' },
        { drum: 0, sound: 'abierto' }
      ],
      2: [{ drum: 1, sound: 'cu' }],
      4: [
        { drum: 1, sound: 'abierto' },
        { drum: 0, sound: 'cu' }
      ],
      6: [{ drum: 1, sound: 'cu' }],
      8: [
        { drum: 1, sound: 'abierto' },
        { drum: 0, sound: 'abierto' }
      ],
      10: [{ drum: 1, sound: 'cu' }],
      12: [
        { drum: 1, sound: 'abierto' },
        { drum: 0, sound: 'cu' }
      ],
      14: [
        { drum: 1, sound: 'cu' },
        { drum: 0, sound: 'abierto' }
      ]
    }
  },
  cuembe_sensual: {
    name: '🥁 Cuembé (Sensual Rhythmic Sway)',
    stepCount: 16,
    steps: {
      // Characterized by its rolling movement, emphasizing hips and playful steps
      0: [{ drum: 1, sound: 'abierto' }],
      2: [{ drum: 0, sound: 'cu' }],
      4: [
        { drum: 1, sound: 'cu' },
        { drum: 0, sound: 'abierto' }
      ],
      6: [{ drum: 0, sound: 'cu' }],
      8: [{ drum: 1, sound: 'abierto' }],
      10: [{ drum: 0, sound: 'abierto' }],
      12: [
        { drum: 1, sound: 'cu' },
        { drum: 0, sound: 'cu' }
      ],
      14: [{ drum: 1, sound: 'cu' }]
    }
  },
  corbe_antillean: {
    name: '🥁 Corbé (Haitian/French-Antillean Influx)',
    stepCount: 16,
    steps: {
      // Displays clear migratory structural influences from neighboring islands
      0: [
        { drum: 1, sound: 'abierto' },
        { drum: 0, sound: 'abierto' }
      ],
      3: [{ drum: 1, sound: 'cu' }],
      4: [{ drum: 1, sound: 'abierto' }],
      7: [{ drum: 0, sound: 'cu' }],
      8: [{ drum: 1, sound: 'abierto' }],
      11: [{ drum: 1, sound: 'cu' }],
      12: [
        { drum: 1, sound: 'abierto' },
        { drum: 0, sound: 'abierto' }
      ],
      15: [{ drum: 0, sound: 'cu' }]
    }
  },
  leros_loiza: {
    name: '🥁 Leró (Loíza Heritage Variant)',
    stepCount: 12,
    steps: {
      // A unique ternary rhythm native to the northern Afro-Puerto Rican enclave of Loíza Aldea
      0: [{ drum: 1, sound: 'abierto' }],
      2: [
        { drum: 1, sound: 'cu' },
        { drum: 0, sound: 'cu' }
      ],
      4: [{ drum: 1, sound: 'abierto' }],
      6: [{ drum: 0, sound: 'abierto' }],
      8: [{ drum: 1, sound: 'cu' }],
      10: [{ drum: 0, sound: 'cu' }]
    }
  },
  belen_southern: {
    name: '🥁 Belén (Southern Coast Dignified March)',
    stepCount: 16,
    steps: {
      // From the southern Ponce region; steady, heavy, and very deliberate accenting
      0: [
        { drum: 1, sound: 'abierto' },
        { drum: 0, sound: 'abierto' }
      ],
      4: [{ drum: 1, sound: 'cu' }],
      6: [{ drum: 0, sound: 'cu' }],
      8: [{ drum: 1, sound: 'abierto' }],
      12: [
        { drum: 1, sound: 'cu' },
        { drum: 0, sound: 'abierto' }
      ],
      14: [{ drum: 1, sound: 'cu' }]
    }
  },
  cunya_playful: {
    name: '🥁 Cuñá (Staccato Trickster Rhythm)',
    stepCount: 16,
    steps: {
      // Features sudden stops and dynamic shifts designed to test a dancer's balance
      0: [
        { drum: 1, sound: 'abierto' },
        { drum: 0, sound: 'cu' }
      ],
      2: [{ drum: 1, sound: 'cu' }],
      4: [{ drum: 0, sound: 'abierto' }],
      6: [{ drum: 1, sound: 'cu' }],
      8: [
        { drum: 1, sound: 'abierto' },
        { drum: 0, sound: 'cu' }
      ],
      10: [{ drum: 1, sound: 'cu' }],
      12: [{ drum: 0, sound: 'abierto' }],
      14: [{ drum: 0, sound: 'cu' }]
    }
  },
  seis_corrido: {
    name: '🥁 Seis Corrido (Loíza Rapid Fire)',
    stepCount: 8,
    steps: {
      // Hyper-speed variation from Loíza, relying heavily on immediate rolling accents
      0: [
        { drum: 1, sound: 'abierto' },
        { drum: 0, sound: 'abierto' }
      ],
      2: [{ drum: 1, sound: 'cu' }],
      3: [{ drum: 0, sound: 'cu' }],
      4: [{ drum: 1, sound: 'abierto' }],
      6: [{ drum: 0, sound: 'abierto' }],
      7: [{ drum: 1, sound: 'cu' }]
    }
  },
  bomba_hoyos: {
    name: '🥁 Hoyos de Manatí Style (Northern Cross-Syncopation)',
    stepCount: 16,
    steps: {
      // A specialized northern style featuring delayed accents on the open tones
      0: [{ drum: 1, sound: 'abierto' }],
      2: [{ drum: 0, sound: 'cu' }],
      4: [
        { drum: 1, sound: 'cu' },
        { drum: 0, sound: 'abierto' }
      ],
      6: [{ drum: 1, sound: 'abierto' }],
      8: [
        { drum: 1, sound: 'cu' },
        { drum: 0, sound: 'cu' }
      ],
      10: [{ drum: 0, sound: 'abierto' }],
      12: [{ drum: 1, sound: 'abierto' }],
      14: [
        { drum: 1, sound: 'cu' },
        { drum: 0, sound: 'cu' }
      ]
    }
  },
  bomba_marianda: {
    name: '🥁 Mariandá (Festive Social Gathering Rhythm)',
    stepCount: 16,
    steps: {
      // Upbeat, lighter celebratory cadence traditionally used to close out community dances
      0: [
        { drum: 1, sound: 'abierto' },
        { drum: 0, sound: 'abierto' }
      ],
      3: [{ drum: 0, sound: 'cu' }],
      4: [{ drum: 1, sound: 'cu' }],
      6: [{ drum: 0, sound: 'abierto' }],
      8: [{ drum: 1, sound: 'abierto' }],
      11: [{ drum: 0, sound: 'cu' }],
      12: [
        { drum: 1, sound: 'cu' },
        { drum: 0, sound: 'abierto' }
      ],
      14: [{ drum: 1, sound: 'cu' }]
    }
  },
  bomba_gracima: {
    name: '🥁 Gracimá (Southern Afro-Antillean Swing)',
    stepCount: 12,
    steps: {
      // A rare, sliding 12/8 rhythm with deep polyrhythmic phrasing between the two barrels
      0: [
        { drum: 1, sound: 'abierto' },
        { drum: 0, sound: 'cu' }
      ],
      2: [{ drum: 1, sound: 'cu' }],
      4: [{ drum: 0, sound: 'abierto' }],
      6: [{ drum: 1, sound: 'abierto' }],
      8: [
        { drum: 1, sound: 'cu' },
        { drum: 0, sound: 'cu' }
      ],
      10: [{ drum: 0, sound: 'abierto' }]
    }
  },
  primo_piquete_challenge: {
    name: '🔥 Piquetes Solo Dialogue (Improvisation Template)',
    stepCount: 16,
    steps: {
      // Simulates a lead Subidor throwing erratic accents to track a solo dancer\'s footwork
      0: [
        { drum: 1, sound: 'abierto' },
        { drum: 0, sound: 'abierto' }
      ],
      2: [{ drum: 0, sound: 'cu' }],
      3: [{ drum: 0, sound: 'cu' }],
      4: [
        { drum: 1, sound: 'cu' },
        { drum: 0, sound: 'abierto' }
      ],
      6: [{ drum: 0, sound: 'abierto' }],
      8: [
        { drum: 1, sound: 'abierto' },
        { drum: 0, sound: 'cu' }
      ],
      10: [{ drum: 0, sound: 'abierto' }],
      11: [{ drum: 0, sound: 'cu' }],
      12: [
        { drum: 1, sound: 'cu' },
        { drum: 0, sound: 'abierto' }
      ],
      14: [{ drum: 0, sound: 'cu' }]
    }
  },
  piquete_repiqueteo: {
    name: '🔥 El Repiqueteo (Continuous Dense Solo Slaps)',
    stepCount: 16,
    steps: {
      // Represents the Subidor mimicking a dancer doing rapid, continuous heel-toe transitions
      0: [
        { drum: 1, sound: 'abierto' },
        { drum: 0, sound: 'cu' }
      ],
      2: [{ drum: 0, sound: 'cu' }],
      4: [
        { drum: 1, sound: 'cu' },
        { drum: 0, sound: 'abierto' }
      ],
      6: [{ drum: 0, sound: 'cu' }],
      7: [{ drum: 0, sound: 'cu' }],
      8: [
        { drum: 1, sound: 'abierto' },
        { drum: 0, sound: 'abierto' }
      ],
      10: [{ drum: 0, sound: 'cu' }],
      12: [
        { drum: 1, sound: 'cu' },
        { drum: 0, sound: 'abierto' }
      ],
      14: [{ drum: 0, sound: 'cu' }],
      15: [{ drum: 0, sound: 'cu' }]
    }
  },
  bomba_reggae_steppers: {
    name: '✨ Bomba-Reggae Steppers (Modern Fusion)',
    stepCount: 16,
    steps: {
      // Modern Urban Afro-Caribbean fusion blending Bomba anchors with Roots Reggae structures
      0: [{ drum: 1, sound: 'abierto' }],
      4: [
        { drum: 1, sound: 'cu' },
        { drum: 0, sound: 'cu' }
      ],
      8: [
        { drum: 1, sound: 'abierto' },
        { drum: 0, sound: 'abierto' }
      ],
      12: [
        { drum: 1, sound: 'cu' },
        { drum: 0, sound: 'cu' }
      ]
    }
  },
  bomba_salsa_timba_break: {
    name: '✨ Timba-Bomba Hyper-Groove (Modern Salsa Break)',
    stepCount: 16,
    steps: {
      // Modern implementation showing how contemporary orchestras drop Bomba patterns into high-energy Salsa sections
      0: [
        { drum: 1, sound: 'abierto' },
        { drum: 0, sound: 'abierto' }
      ],
      2: [{ drum: 0, sound: 'cu' }],
      4: [
        { drum: 1, sound: 'cu' },
        { drum: 0, sound: 'cu' }
      ],
      6: [{ drum: 1, sound: 'abierto' }],
      8: [{ drum: 0, sound: 'abierto' }],
      10: [{ drum: 1, sound: 'cu' }],
      12: [
        { drum: 1, sound: 'cu' },
        { drum: 0, sound: 'abierto' }
      ],
      14: [{ drum: 0, sound: 'cu' }]
    }
  },
  hiphop_bomba_break: {
    name: '✨ Afro-Boriqua Boom-Bap Breakbeat',
    stepCount: 16,
    steps: {
      // Experimental implementation framing the open barrel as a kick and stick claps as dry snare snaps
      0: [{ drum: 1, sound: 'abierto' }],
      2: [{ drum: 1, sound: 'cu' }],
      4: [{ drum: 0, sound: 'cu' }],
      6: [{ drum: 1, sound: 'abierto' }],
      8: [
        { drum: 1, sound: 'abierto' },
        { drum: 0, sound: 'abierto' }
      ],
      10: [{ drum: 1, sound: 'cu' }],
      12: [{ drum: 0, sound: 'cu' }],
      14: [{ drum: 1, sound: 'cu' }]
    }
  },
  afro_ambient_bomba_space: {
    name: '✨ Minimalist Spatial Barrel Textures',
    stepCount: 16,
    steps: {
      // Experimental layout focusing on the spatial decay of the open barrel contrasted with sharp rim knocks
      0: [{ drum: 1, sound: 'abierto' }],
      3: [{ drum: 0, sound: 'cu' }],
      6: [{ drum: 0, sound: 'cu' }],
      8: [{ drum: 1, sound: 'abierto' }],
      11: [{ drum: 0, sound: 'cu' }],
      14: [{ drum: 1, sound: 'cu' }]
    }
  }
};
