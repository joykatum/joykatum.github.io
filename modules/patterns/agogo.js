// Rhythm patterns for Afro-Brazilian Agogô Bell
// Mapped to: drum 0 (Low Bell), drum 1 (High Bell)
export default {
  samba_enredo_standard: {
    name: '🔔 Samba de Enredo (Rio Carnival Classic)',
    stepCount: 16,
    steps: {
      0: [{ drum: 0, sound: 'low_strike' }],
      2: [{ drum: 1, sound: 'high_strike' }],
      4: [{ drum: 0, sound: 'low_strike' }],
      7: [{ drum: 1, sound: 'high_strike' }],
      8: [{ drum: 0, sound: 'low_strike' }],
      10: [{ drum: 1, sound: 'high_strike' }],
      12: [{ drum: 0, sound: 'low_strike' }],
      13: [{ drum: 0, sound: 'low_strike' }],
      14: [{ drum: 1, sound: 'high_strike' }]
    }
  },
  ijexa_oxum: {
    name: '🔔 Ijexá Clave (Candomblé Sacred Groove)',
    stepCount: 16,
    steps: {
      0: [{ drum: 0, sound: 'low_strike' }],
      2: [{ drum: 1, sound: 'high_strike' }],
      4: [{ drum: 1, sound: 'high_strike' }],
      6: [{ drum: 0, sound: 'low_strike' }],
      8: [{ drum: 1, sound: 'high_strike' }],
      10: [{ drum: 1, sound: 'high_strike' }],
      12: [{ drum: 0, sound: 'low_strike' }],
      14: [{ drum: 1, sound: 'high_strike' }]
    }
  },
  maculele_stick_bell: {
    name: '🔔 Maculelé Warrior Cadence',
    stepCount: 8,
    steps: {
      0: [{ drum: 0, sound: 'low_strike' }],
      2: [{ drum: 1, sound: 'high_strike' }],
      4: [{ drum: 1, sound: 'high_strike' }],
      6: [{ drum: 0, sound: 'low_strike' }],
      7: [{ drum: 1, sound: 'high_strike' }]
    }
  },
  baiao_norteste: {
    name: '🔔 Baião Northeast Syncopation',
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
  maracatu_gongue: {
    name: '🔔 Maracatu Gonguê Imitation (Heavy Iron)',
    stepCount: 16,
    steps: {
      0: [{ drum: 0, sound: 'low_strike' }],
      4: [{ drum: 0, sound: 'low_strike' }],
      6: [{ drum: 1, sound: 'high_strike' }],
      8: [{ drum: 0, sound: 'low_strike' }],
      11: [{ drum: 1, sound: 'high_strike' }],
      12: [{ drum: 0, sound: 'low_strike' }],
      14: [{ drum: 1, sound: 'high_strike' }]
    }
  },
  afro_cuban_bell_6_8: {
    name: '🔔 Afro-Cuban Bembe / 6-8 Bell Pattern',
    stepCount: 12,
    steps: {
      0: [{ drum: 1, sound: 'high_strike' }],
      2: [{ drum: 1, sound: 'high_strike' }],
      4: [{ drum: 0, sound: 'low_strike' }],
      5: [{ drum: 1, sound: 'high_strike' }],
      7: [{ drum: 1, sound: 'high_strike' }],
      9: [{ drum: 0, sound: 'low_strike' }],
      11: [{ drum: 1, sound: 'high_strike' }]
    }
  },
  batucada_interlocking_squeeze: {
    name: '🔔 Batucada Squeeze & Click Complex',
    stepCount: 16,
    steps: {
      0: [{ drum: 0, sound: 'low_strike' }],
      1: [{ drum: 0, sound: 'clap' }],
      2: [{ drum: 1, sound: 'high_strike' }],
      4: [{ drum: 0, sound: 'clap' }],
      6: [{ drum: 1, sound: 'high_strike' }],
      8: [{ drum: 0, sound: 'low_strike' }],
      9: [{ drum: 0, sound: 'clap' }],
      10: [{ drum: 1, sound: 'high_strike' }],
      12: [{ drum: 0, sound: 'low_strike' }],
      14: [{ drum: 0, sound: 'clap' }]
    }
  },
  afro_jazz_timba_groove: {
    name: '✨ Afro-Jazz Bell Breakdown',
    stepCount: 16,
    steps: {
      0: [{ drum: 1, sound: 'high_strike' }],
      3: [{ drum: 0, sound: 'low_strike' }],
      6: [{ drum: 1, sound: 'high_strike' }],
      8: [{ drum: 0, sound: 'clap' }],
      10: [{ drum: 1, sound: 'high_strike' }],
      12: [{ drum: 0, sound: 'low_strike' }],
      14: [{ drum: 1, sound: 'high_strike' }]
    }
  }
};
