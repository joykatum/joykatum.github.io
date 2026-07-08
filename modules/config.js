// Centralized Maintainable Configuration Object for Drum Orchestrator
export const CONFIG = {
  // Gamepad/Controller constants
  GAMEPAD: {
    DEADZONE: 0.4,
    LONG_PRESS_THRESHOLD: 180 // duration in ms to distinguish tap from hold
  },

  // Audio Context & Sequencer Time Coefficients
  SEQUENCER: {
    SUBDIVISION: 4, // 16th notes per beat
    SECONDS_PER_MINUTE: 60,
    MS_PER_SECOND: 1000,
    DEFAULT_BPM: 100
  },

  // Default rhythm patterns matching active instruments
  DEFAULT_INSTRUMENT_PATTERNS: {
    conga: 'tumbao',
    bongo: 'martillo',
    djembe: 'kuku',
    bata: 'toque_bata',
    pandero: 'plena',
    barril: 'sica',
    bombo: 'chacarera',
    tabla: 'keharwa',
    darbuka: 'maqsum',
    candombe: 'candombe_groove',
    gwoka: 'lewoz',
    tanbou: 'beguine',
    chinese: 'festive_dagu',
    daiko: 'matsuri_taiko',
    bodhran: 'bodhran_reel',
    talkingdrum: 'tama_groove',
    cuica: 'cuica_samba',
    doira: 'doira_folk',
    uchiwadaiko: 'uchiwadaiko_kabuki',
    oceandrum: 'oceandrum_meditation',
    janggu: 'janggu_samulnori',
    zabumba: 'zabumba_baiao',
    mridangam: 'mridangam_tala',
    water_canister: 'slap_gliss',
    geiger_counter: 'rad_swarm',
    centrifugal_bullroarer: 'slow_whirl',
    newtons_cradle: 'continuous_clack'
  }
};
