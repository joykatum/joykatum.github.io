import { seededRandom, bipolar } from './random.js';
import { assertPatternDefinition } from './patternSchema.js';

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

/**
 * Convert score beats into AudioContext time without using wall-clock timers.
 *
 * Humanization is deliberately conservative: authored microtiming survives,
 * while bounded seeded jitter can be added for variation. Randomness never
 * changes the underlying rhythm identity.
 */
export function compilePatternEvents(pattern, options = {}) {
  assertPatternDefinition(pattern);

  const bpm = options.bpm ?? pattern.tempo.default;
  if (!(bpm > 0)) throw new RangeError('bpm must be > 0');

  const bars = Math.max(1, Math.trunc(options.bars ?? 1));
  const startTime = Number(options.startTime ?? 0);
  const secondsPerBeat = 60 / bpm;
  const beatsPerBar = pattern.meter.beats * (4 / pattern.meter.beatUnit);
  const cycleBeats = pattern.cycleBeats ?? beatsPerBar;
  const timingJitterMs = Math.max(0, Number(options.timingJitterMs ?? 0));
  const velocityJitter = Math.max(0, Number(options.velocityJitter ?? 0));
  const random = seededRandom(options.seed ?? `${pattern.id}:${bpm}`);

  const compiled = [];

  for (let bar = 0; bar < bars; bar += 1) {
    const cycleOffsetBeats = bar * cycleBeats;
    for (let i = 0; i < pattern.events.length; i += 1) {
      const source = pattern.events[i];
      const probability = source.probability ?? 1;
      if (random() > probability) continue;

      // Authored microtiming is part of the transcription/performance model.
      // Jitter is optional and capped independently so it cannot rewrite feel.
      const authoredMs = source.microtimingMs ?? 0;
      const jitterMs = timingJitterMs ? bipolar(random) * timingJitterMs : 0;
      const when =
        startTime +
        (cycleOffsetBeats + source.beat) * secondsPerBeat +
        (authoredMs + jitterMs) / 1000;

      const velocity = clamp(
        source.velocity + (velocityJitter ? bipolar(random) * velocityJitter : 0),
        0,
        1,
      );

      compiled.push({
        ...source,
        when,
        velocity,
        bar,
        sourceEventIndex: i,
      });
    }
  }

  return compiled.sort((a, b) => a.when - b.when || a.sourceEventIndex - b.sourceEventIndex);
}

/**
 * Lightweight look-ahead scheduler. The JavaScript timer only decides what to
 * enqueue; instrument triggers receive absolute AudioContext times.
 */
export function createLookaheadScheduler(context, trigger, options = {}) {
  const lookaheadSeconds = options.lookaheadSeconds ?? 0.12;
  const intervalMs = options.intervalMs ?? 25;
  if (!(lookaheadSeconds > intervalMs / 1000)) {
    throw new RangeError('lookaheadSeconds must exceed intervalMs / 1000');
  }

  let timer = null;
  let queue = [];
  let cursor = 0;
  let running = false;

  function tick() {
    if (!running) return;
    const horizon = context.currentTime + lookaheadSeconds;
    while (cursor < queue.length && queue[cursor].when <= horizon) {
      const event = queue[cursor];
      if (event.when >= context.currentTime - 0.002) trigger(event);
      cursor += 1;
    }
    if (cursor >= queue.length) {
      running = false;
      timer = null;
      return;
    }
    timer = setTimeout(tick, intervalMs);
  }

  return {
    schedule(events) {
      queue = [...events].sort((a, b) => a.when - b.when);
      cursor = 0;
      return this;
    },
    start() {
      if (running) return;
      running = true;
      tick();
    },
    stop() {
      running = false;
      if (timer != null) clearTimeout(timer);
      timer = null;
    },
    get pending() {
      return Math.max(0, queue.length - cursor);
    },
  };
}
