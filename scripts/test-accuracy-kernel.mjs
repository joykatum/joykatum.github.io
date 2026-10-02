#!/usr/bin/env node
import assert from 'node:assert/strict';
import { compilePatternEvents, compareModeModel, modelFromMeasuredModes, validatePatternDefinition } from '../modules/accuracy/index.js';

const pattern = {
  id: 'test-cycle',
  name: 'Test cycle',
  instrumentId: 'test-drum',
  meter: { beats: 4, beatUnit: 4 },
  cycleBeats: 4,
  tempo: { min: 70, max: 130, default: 100 },
  provenance: {
    tradition: 'test-only',
    region: 'test-only',
    kind: 'original',
    confidence: 'creative',
    sources: [],
  },
  events: [
    { beat: 0, stroke: 'open', velocity: 0.9 },
    { beat: 1.5, stroke: 'mute', velocity: 0.6, microtimingMs: -5 },
    { beat: 3, stroke: 'open', velocity: 0.75 },
  ],
};

assert.equal(validatePatternDefinition(pattern).ok, true);
const a = compilePatternEvents(pattern, { startTime: 10, bars: 2, seed: 'same', timingJitterMs: 2, velocityJitter: 0.02 });
const b = compilePatternEvents(pattern, { startTime: 10, bars: 2, seed: 'same', timingJitterMs: 2, velocityJitter: 0.02 });
assert.deepEqual(a, b, 'same seed should reproduce the same performance');
assert.equal(a.length, 6);
for (let i = 1; i < a.length; i += 1) assert.ok(a[i].when >= a[i - 1].when);

const invalid = structuredClone(pattern);
invalid.provenance = { tradition: 'unknown', region: 'unknown', kind: 'recording-analysis', confidence: 'high', sources: [] };
assert.equal(validatePatternDefinition(invalid).ok, false, 'source-derived pattern without sources must fail');

const calibrated = modelFromMeasuredModes({
  id: 'measured-test',
  frequenciesHz: [100, 153, 211],
  decaySeconds: [0.8, 0.5, 0.3],
});
const comparison = compareModeModel(calibrated, [100, 153, 211]);
assert.ok(comparison.meanAbsoluteCents < 1e-9);

console.log('accuracy kernel smoke tests passed');
