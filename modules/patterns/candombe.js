// Rhythm patterns for Afro-Uruguayan Candombe
// Mapped precisely to: drum 0 (Chico), drum 1 (Repique), drum 2 (Piano)
export default {
  cuareim_traditional: {
    name: '🥁 Barrio Cuareim Style (Piano Heavy)',
    stepCount: 16,
    steps: {
      // Chico maintains standard constant metric timeline
      0: [
        { drum: 0, sound: 'palo' },
        { drum: 2, sound: 'palo' }
      ],
      2: [{ drum: 0, sound: 'mano' }],
      4: [
        { drum: 0, sound: 'palo' },
        { drum: 2, sound: 'mano' }
      ],
      6: [{ drum: 0, sound: 'mano' }],
      8: [
        { drum: 0, sound: 'palo' },
        { drum: 2, sound: 'palo' }
      ],
      10: [
        { drum: 0, sound: 'mano' },
        { drum: 1, sound: 'palo' }
      ],
      12: [
        { drum: 0, sound: 'palo' },
        { drum: 2, sound: 'mano' }
      ],
      14: [{ drum: 0, sound: 'mano' }]
    }
  },
  ansina_traditional: {
    name: '🥁 Barrio Ansina Style (Repique/Wood-Led)',
    stepCount: 16,
    steps: {
      // Features the prominent wood-knocking cadence on the staves (trigro_madera)
      0: [
        { drum: 0, sound: 'palo' },
        { drum: 1, sound: 'trigro_madera' }
      ],
      2: [
        { drum: 0, sound: 'mano' },
        { drum: 1, sound: 'mano' }
      ],
      4: [
        { drum: 0, sound: 'palo' },
        { drum: 1, sound: 'trigro_madera' }
      ],
      6: [
        { drum: 0, sound: 'mano' },
        { drum: 2, sound: 'palo' }
      ],
      8: [
        { drum: 0, sound: 'palo' },
        { drum: 1, sound: 'palo' }
      ],
      10: [
        { drum: 0, sound: 'mano' },
        { drum: 1, sound: 'trigro_madera' }
      ],
      12: [
        { drum: 0, sound: 'palo' },
        { drum: 2, sound: 'mano' }
      ],
      14: [
        { drum: 0, sound: 'mano' },
        { drum: 1, sound: 'palo' }
      ]
    }
  },
  cordon_traditional: {
    name: '🥁 Barrio Cordón Style (Aggressive Fast)',
    stepCount: 16,
    steps: {
      // Rapid syncopations balancing between the heavy open Piano beats and Chico
      0: [
        { drum: 0, sound: 'palo' },
        { drum: 1, sound: 'palo' },
        { drum: 2, sound: 'palo' }
      ],
      2: [{ drum: 0, sound: 'mano' }],
      3: [{ drum: 1, sound: 'mano' }],
      4: [
        { drum: 0, sound: 'palo' },
        { drum: 2, sound: 'palo' }
      ],
      6: [{ drum: 0, sound: 'mano' }],
      8: [
        { drum: 0, sound: 'palo' },
        { drum: 1, sound: 'palo' }
      ],
      10: [
        { drum: 0, sound: 'mano' },
        { drum: 2, sound: 'mano' }
      ],
      12: [
        { drum: 0, sound: 'palo' },
        { drum: 1, sound: 'mano' }
      ],
      14: [
        { drum: 0, sound: 'mano' },
        { drum: 2, sound: 'palo' }
      ]
    }
  },
  chico_base: {
    name: '🥁 Standard Chico Metronome Timeline',
    stepCount: 16,
    steps: {
      // The foundational engine loop of all Candombe, never stops or alters accents
      0: [{ drum: 0, sound: 'palo' }],
      2: [{ drum: 0, sound: 'mano' }],
      4: [{ drum: 0, sound: 'palo' }],
      6: [{ drum: 0, sound: 'mano' }],
      8: [{ drum: 0, sound: 'palo' }],
      10: [{ drum: 0, sound: 'mano' }],
      12: [{ drum: 0, sound: 'palo' }],
      14: [{ drum: 0, sound: 'mano' }]
    }
  },
  repique_clave_madera: {
    name: '🥁 Repique Madera Clave (Stick on Body)',
    stepCount: 16,
    steps: {
      // Traditional wood-stave template pattern guiding the parade before heads are struck
      0: [{ drum: 1, sound: 'trigro_madera' }],
      3: [{ drum: 1, sound: 'trigro_madera' }],
      6: [{ drum: 1, sound: 'trigro_madera' }],
      8: [{ drum: 1, sound: 'trigro_madera' }],
      10: [{ drum: 1, sound: 'trigro_madera' }],
      12: [{ drum: 1, sound: 'trigro_madera' }],
      14: [{ drum: 1, sound: 'trigro_madera' }]
    }
  },
  piano_calling: {
    name: '🥁 Piano Conversations (Call & Response)',
    stepCount: 16,
    steps: {
      // Dialoguing sequence highlighting the deep bass open tones
      0: [{ drum: 2, sound: 'palo' }],
      3: [{ drum: 2, sound: 'mano' }],
      4: [{ drum: 2, sound: 'palo' }],
      8: [{ drum: 2, sound: 'palo' }],
      11: [{ drum: 2, sound: 'mano' }],
      12: [{ drum: 2, sound: 'palo' }],
      15: [{ drum: 2, sound: 'mano' }]
    }
  },
  llamada_march: {
    name: '🥁 Desfile de Llamadas (Parade March)',
    stepCount: 16,
    steps: {
      // Emulates a full street carnival block (Comparsa) processing past
      0: [
        { drum: 0, sound: 'palo' },
        { drum: 1, sound: 'trigro_madera' },
        { drum: 2, sound: 'palo' }
      ],
      2: [
        { drum: 0, sound: 'mano' },
        { drum: 1, sound: 'mano' }
      ],
      4: [
        { drum: 0, sound: 'palo' },
        { drum: 1, sound: 'palo' },
        { drum: 2, sound: 'mano' }
      ],
      6: [{ drum: 0, sound: 'mano' }],
      8: [
        { drum: 0, sound: 'palo' },
        { drum: 1, sound: 'trigro_madera' },
        { drum: 2, sound: 'palo' }
      ],
      10: [
        { drum: 0, sound: 'mano' },
        { drum: 1, sound: 'palo' }
      ],
      12: [
        { drum: 0, sound: 'palo' },
        { drum: 1, sound: 'trigro_madera' },
        { drum: 2, sound: 'mano' }
      ],
      14: [{ drum: 0, sound: 'mano' }]
    }
  },
  candombe_jazz_fusion: {
    name: '✨ Candombe Jazz-Rock Groove (Shuffled)',
    stepCount: 16,
    steps: {
      // Modern syncopation blending Uruguayan folk with jazz fusion kit structures
      0: [{ drum: 2, sound: 'palo' }],
      2: [{ drum: 1, sound: 'trigro_madera' }],
      4: [
        { drum: 0, sound: 'palo' },
        { drum: 1, sound: 'palo' }
      ],
      6: [{ drum: 2, sound: 'mano' }],
      8: [
        { drum: 0, sound: 'mano' },
        { drum: 1, sound: 'trigro_madera' }
      ],
      10: [{ drum: 2, sound: 'palo' }],
      12: [
        { drum: 0, sound: 'palo' },
        { drum: 1, sound: 'palo' }
      ],
      14: [{ drum: 1, sound: 'mano' }]
    }
  },
  candombe_funk: {
    name: '✨ Funk-Candombe Breakbeat',
    stepCount: 16,
    steps: {
      // Heavy staccato spacing designed to drop under a funk bassline loop
      0: [{ drum: 2, sound: 'palo' }],
      4: [{ drum: 1, sound: 'palo' }],
      6: [{ drum: 0, sound: 'palo' }],
      8: [{ drum: 2, sound: 'mano' }],
      10: [{ drum: 2, sound: 'palo' }],
      12: [{ drum: 1, sound: 'palo' }],
      14: [
        { drum: 0, sound: 'mano' },
        { drum: 1, sound: 'trigro_madera' }
      ]
    }
  },
  stave_textures: {
    name: '🌾 Rake & Click Ambient Layout',
    stepCount: 16,
    steps: {
      // Experimental implementation centered purely on scraping and clicking the wooden shells
      0: [
        { drum: 0, sound: 'cu_stave_rake' },
        { drum: 2, sound: 'trigro_madera' }
      ],
      4: [{ drum: 1, sound: 'cu_stave_rake' }],
      8: [
        { drum: 0, sound: 'trigro_madera' },
        { drum: 2, sound: 'cu_stave_rake' }
      ],
      12: [{ drum: 1, sound: 'trigro_madera' }]
    }
  },
  milongon: {
    name: '🥁 Milongón (Heavy Folk Dance)',
    stepCount: 12,
    steps: {
      // 12-beat swing variation closely tying Candombe to ancient Milonga dance cadences
      0: [
        { drum: 2, sound: 'palo' },
        { drum: 0, sound: 'palo' }
      ],
      2: [{ drum: 1, sound: 'palo' }],
      4: [
        { drum: 0, sound: 'mano' },
        { drum: 2, sound: 'mano' }
      ],
      6: [
        { drum: 1, sound: 'trigro_madera' },
        { drum: 0, sound: 'palo' }
      ],
      8: [{ drum: 2, sound: 'palo' }],
      10: [
        { drum: 0, sound: 'mano' },
        { drum: 1, sound: 'palo' }
      ]
    }
  },
  afro_uruguayan_bossa: {
    name: '✨ Bossa-Candombe Cross-Border Blend',
    stepCount: 16,
    steps: {
      // Intertwines Brazilian bossa nova rim aesthetics with the traditional Uruguayan Piano march
      0: [
        { drum: 2, sound: 'palo' },
        { drum: 1, sound: 'trigro_madera' }
      ],
      3: [{ drum: 1, sound: 'trigro_madera' }],
      4: [{ drum: 0, sound: 'palo' }],
      6: [{ drum: 2, sound: 'mano' }],
      8: [{ drum: 1, sound: 'trigro_madera' }],
      10: [{ drum: 2, sound: 'palo' }],
      11: [{ drum: 1, sound: 'trigro_madera' }],
      12: [{ drum: 0, sound: 'palo' }],
      14: [{ drum: 1, sound: 'mano' }]
    }
  },
  murga_march_blend: {
    name: '🥁 Murga Carnival Overture',
    stepCount: 16,
    steps: {
      // Incorporates theatrical, march-like military syncopation inspired by Murga ensembles
      0: [
        { drum: 2, sound: 'palo' },
        { drum: 1, sound: 'palo' }
      ],
      2: [{ drum: 1, sound: 'palo' }],
      4: [
        { drum: 0, sound: 'palo' },
        { drum: 2, sound: 'mano' }
      ],
      6: [{ drum: 1, sound: 'palo' }],
      8: [
        { drum: 2, sound: 'palo' },
        { drum: 1, sound: 'trigro_madera' }
      ],
      10: [{ drum: 1, sound: 'palo' }],
      12: [
        { drum: 0, sound: 'palo' },
        { drum: 2, sound: 'palo' }
      ],
      14: [{ drum: 1, sound: 'mano' }]
    }
  },
  tribal_wood_polyrhythm: {
    name: '✨ Poly-Stave Abstract Matrix',
    stepCount: 12,
    steps: {
      // Shifting signature utilizing hocketing accents across staves and dragging rakes
      0: [
        { drum: 1, sound: 'trigro_madera' },
        { drum: 2, sound: 'cu_stave_rake' }
      ],
      3: [{ drum: 0, sound: 'trigro_madera' }],
      5: [{ drum: 1, sound: 'cu_stave_rake' }],
      6: [{ drum: 2, sound: 'trigro_madera' }],
      9: [{ drum: 0, sound: 'cu_stave_rake' }],
      11: [{ drum: 1, sound: 'trigro_madera' }]
    }
  },
  candombe_climax: {
    name: '🥁 El Cierre (Parade Finale)',
    stepCount: 8,
    steps: {
      // Rapid, high-intensity pattern typical of a street performance's dramatic final speed-up
      0: [
        { drum: 0, sound: 'palo' },
        { drum: 1, sound: 'palo' },
        { drum: 2, sound: 'palo' }
      ],
      2: [
        { drum: 0, sound: 'mano' },
        { drum: 1, sound: 'palo' }
      ],
      4: [
        { drum: 0, sound: 'palo' },
        { drum: 2, sound: 'mano' }
      ],
      6: [
        { drum: 0, sound: 'mano' },
        { drum: 1, sound: 'palo' },
        { drum: 2, sound: 'palo' }
      ]
    }
  }
};
