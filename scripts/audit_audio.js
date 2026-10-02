// Structural and Web Audio call audit; this does not certify acoustic authenticity.
import fs from 'node:fs';
import assert from 'node:assert/strict';

const timers = [];
globalThis.setTimeout = (fn) => { timers.push(fn); return timers.length; };
globalThis.clearTimeout = () => {};
globalThis.localStorage = { getItem: () => null };
const nodes = [];
class Param {
  constructor(value = 0) { this.value = value; this.events = []; }
  setValueAtTime(value, time) { assert(Number.isFinite(value) && Number.isFinite(time)); this.events.push([value, time]); this.value = value; }
  linearRampToValueAtTime(value, time) { this.setValueAtTime(value, time); }
  exponentialRampToValueAtTime(value, time) { assert(value > 0, 'exponential target must be positive'); this.setValueAtTime(value, time); }
  cancelScheduledValues() {}
  setTargetAtTime(value, time) { this.setValueAtTime(value, time); }
}
class Node {
  constructor(type) {
    this.kind = type; this.connections = [];
    for (const key of ['gain', 'frequency', 'Q', 'detune', 'pan', 'delayTime', 'playbackRate']) this[key] = new Param(key === 'gain' || key === 'playbackRate' ? 1 : 0);
    nodes.push(this);
  }
  connect(node) { assert(node, 'missing audio destination'); this.connections.push(node); return node; }
  disconnect() {}
  start(time = 0, offset = 0) { assert(Number.isFinite(time) && Number.isFinite(offset) && offset >= 0); this.started = true; }
  stop(time = 0) { assert(Number.isFinite(time) && time >= 0, 'invalid source stop time'); }
}
class Context {
  constructor() { this.currentTime = 1; this.sampleRate = 44100; this.state = 'running'; this.destination = new Node('destination'); }
  resume() { return Promise.resolve(); }
  createBuffer(channels, length, rate) { assert(length > 0 && rate > 0); const data = Array.from({ length: channels }, () => new Float32Array(length)); return { duration: length / rate, getChannelData: (i) => data[i] }; }
}
for (const type of ['Gain', 'Oscillator', 'BufferSource', 'BiquadFilter', 'StereoPanner', 'WaveShaper', 'Convolver', 'Delay', 'MediaStreamDestination']) Context.prototype[`create${type}`] = () => new Node(type);
globalThis.window = { AudioContext: Context, addEventListener() {} };
globalThis.fetch = async (url) => {
  const data = fs.readFileSync(new URL(`..${url}`, import.meta.url));
  return { ok: true, arrayBuffer: async () => data.buffer.slice(data.byteOffset, data.byteOffset + data.byteLength) };
};

const { state } = await import('../modules/state.js');
const { drumTypes, ensureInstrumentLoaded, instrumentTouches, instrumentMappings } = await import('../modules/drumTypes.js');
const { ensurePatternsLoaded } = await import('../modules/patterns.js');
const audio = await import('../modules/audio.js');
const { loadSoundFont, loadedSoundFonts } = await import('../modules/sf2Loader.js');
audio.initEffectsChain();
for (const name of Object.keys(loadedSoundFonts)) await loadSoundFont(name, `/media/${name}.sf2`);
const report = { limitation: 'Mock graph and parameter checks only. No listening or authenticity certification.', instruments: [], failures: [] };
for (const [name, spec] of Object.entries(drumTypes)) {
  const inst = await ensureInstrumentLoaded(name);
  if (!inst) { report.failures.push(`${name}: missing instrument module`); continue; }
  const patterns = await ensurePatternsLoaded(name);
  const row = { name, sounds: Object.keys(inst.sounds || {}).length, patterns: Object.keys(patterns).length, hits: 0, unsupportedDrums: [], ignoresVelocity: [], sources: [] };
  const validIds = new Set(spec.drums.map((d) => d.id));
  if (['bongo', 'agogo', 'mridangam', 'dhol'].includes(name)) { validIds.add(0); validIds.add(1); }
  for (const touch of instrumentTouches[name] || []) if (!inst.sounds[touch.id]) report.failures.push(`${name}: touch ${touch.id} has no sound`);
  for (const hand of Object.values(instrumentMappings[name] || {})) for (const sound of Object.values(hand)) if (sound && !inst.sounds[sound]) report.failures.push(`${name}: mapping ${sound} has no sound`);
  for (const [id, pattern] of Object.entries(patterns)) {
    if (!Number.isInteger(pattern.stepCount) || pattern.stepCount <= 0) report.failures.push(`${name}/${id}: invalid step count`);
    for (const [step, hits] of Object.entries(pattern.steps)) {
      if (+step < 0 || +step >= pattern.stepCount) report.failures.push(`${name}/${id}: step ${step} outside cycle`);
      for (const hit of hits) {
        row.hits++;
        if (!inst.sounds[hit.sound]) report.failures.push(`${name}/${id}: unknown sound ${hit.sound}`);
        if (!validIds.has(hit.drum)) row.unsupportedDrums.push(`${id}: ${hit.drum}`);
        if (hit.velocity !== undefined && !(hit.velocity >= 0 && hit.velocity <= 1)) report.failures.push(`${name}/${id}: invalid velocity`);
      }
    }
  }
  for (const [sound, fn] of Object.entries(inst.sounds || {})) {
    for (const drum of spec.drums) for (const sustain of [-100, 0, 100]) {
      state.transientSustain = sustain;
      try { fn(drum, 0.6); let count = 0; while (timers.length && count++ < 1000) timers.shift()(); }
      catch (error) { report.failures.push(`${name}/${sound} drum ${drum.id} sustain ${sustain}: ${error.message}`); timers.length = 0; }
    }
  }
  const file = fs.readFileSync(new URL(`../modules/instruments/${name}.js`, import.meta.url), 'utf8');
  row.ignoresVelocity = [...file.matchAll(/(\w+):\s*\(d\)\s*=>/g)].map((m) => m[1]);
  row.sources = [...new Set([...file.matchAll(/playSoundFontSample\(\s*'([^']+)'/g)].map((m) => `SoundFont: ${m[1]}`))];
  report.instruments.push(row);
}
report.summary = { instruments: report.instruments.length, sounds: report.instruments.reduce((n, r) => n + r.sounds, 0), patterns: report.instruments.reduce((n, r) => n + r.patterns, 0), hits: report.instruments.reduce((n, r) => n + r.hits, 0), failures: report.failures.length };
fs.mkdirSync(new URL('../audits/', import.meta.url), { recursive: true });
fs.writeFileSync(new URL('../audits/audio-catalogue.json', import.meta.url), JSON.stringify(report, null, 2) + '\n');
console.log(report.summary);
console.log(report.failures);
process.exitCode = report.failures.length ? 1 : 0;
