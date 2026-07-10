// Rhythm patterns for geiger_counter.
export default {
  pattern_1: {
    name: '☢️ Diagnostic Sweep',
    stepCount: 16,
    steps: {
      0: [
        {
          drum: 0,
          sound: 'isolated_click'
        }
      ],
      4: [
        {
          drum: 0,
          sound: 'double_static_burst'
        }
      ],
      8: [
        {
          drum: 0,
          sound: 'rad_swarm'
        }
      ],
      12: [
        {
          drum: 0,
          sound: 'warning_beep'
        }
      ]
    }
  },
  pattern_2: {
    name: '☢️ Chernobyl Echoes',
    stepCount: 16,
    steps: {
      0: [
        {
          drum: 0,
          sound: 'isolated_click'
        }
      ],
      3: [
        {
          drum: 0,
          sound: 'rad_swarm'
        }
      ],
      6: [
        {
          drum: 0,
          sound: 'chassis_dial_click'
        }
      ],
      8: [
        {
          drum: 0,
          sound: 'double_static_burst'
        }
      ],
      11: [
        {
          drum: 0,
          sound: 'warning_beep'
        }
      ],
      14: [
        {
          drum: 0,
          sound: 'meltdown_buzz'
        }
      ]
    }
  },
  pattern_3: {
    name: '☢️ Static Waves',
    stepCount: 16,
    steps: {
      0: [
        {
          drum: 0,
          sound: 'double_static_burst'
        }
      ],
      4: [
        {
          drum: 0,
          sound: 'static_discharge_thump'
        }
      ],
      8: [
        {
          drum: 0,
          sound: 'double_static_burst'
        }
      ],
      12: [
        {
          drum: 0,
          sound: 'rad_swarm'
        }
      ]
    }
  },
  pattern_4: {
    name: '☢️ Radioactive Pulse',
    stepCount: 16,
    steps: {
      0: [
        {
          drum: 0,
          sound: 'warning_beep'
        }
      ],
      4: [
        {
          drum: 0,
          sound: 'warning_beep'
        }
      ],
      8: [
        {
          drum: 0,
          sound: 'warning_beep'
        }
      ],
      12: [
        {
          drum: 0,
          sound: 'meltdown_buzz'
        }
      ]
    }
  },
  pattern_5: {
    name: '☢️ Meltdown Warning',
    stepCount: 16,
    steps: {
      0: [
        {
          drum: 0,
          sound: 'isolated_click'
        }
      ],
      2: [
        {
          drum: 0,
          sound: 'double_static_burst'
        }
      ],
      4: [
        {
          drum: 0,
          sound: 'rad_swarm'
        }
      ],
      7: [
        {
          drum: 0,
          sound: 'warning_beep'
        }
      ],
      8: [
        {
          drum: 0,
          sound: 'static_discharge_thump'
        }
      ],
      10: [
        {
          drum: 0,
          sound: 'chassis_dial_click'
        }
      ],
      12: [
        {
          drum: 0,
          sound: 'meltdown_buzz'
        }
      ],
      14: [
        {
          drum: 0,
          sound: 'battery_test_chirp'
        }
      ]
    }
  },
  pattern_6: {
    name: '☢️ Background Crackle',
    stepCount: 16,
    steps: {
      0: [
        {
          drum: 0,
          sound: 'rad_swarm'
        }
      ],
      8: [
        {
          drum: 0,
          sound: 'rad_swarm'
        }
      ]
    }
  },
  pattern_7: {
    name: '☢️ Status Beacon',
    stepCount: 16,
    steps: {
      0: [
        {
          drum: 0,
          sound: 'battery_test_chirp'
        }
      ],
      4: [
        {
          drum: 0,
          sound: 'battery_test_chirp'
        }
      ],
      8: [
        {
          drum: 0,
          sound: 'battery_test_chirp'
        }
      ],
      12: [
        {
          drum: 0,
          sound: 'battery_test_chirp'
        }
      ]
    }
  },
  pattern_8: {
    name: '☢️ Electro Shock',
    stepCount: 16,
    steps: {
      0: [
        {
          drum: 0,
          sound: 'static_discharge_thump'
        }
      ],
      8: [
        {
          drum: 0,
          sound: 'static_discharge_thump'
        }
      ]
    }
  },
  pattern_9: {
    name: '☢️ Dial Rotations',
    stepCount: 16,
    steps: {
      0: [
        {
          drum: 0,
          sound: 'chassis_dial_click'
        }
      ],
      8: [
        {
          drum: 0,
          sound: 'chassis_dial_click'
        }
      ]
    }
  },
  pattern_10: {
    name: '☢️ Critical Mass',
    stepCount: 16,
    steps: {
      0: [
        {
          drum: 0,
          sound: 'meltdown_buzz'
        }
      ]
    }
  }
};
