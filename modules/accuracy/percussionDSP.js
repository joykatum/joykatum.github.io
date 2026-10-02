import { bipolar, seededRandom } from './random.js';

const noiseCache = new WeakMap();

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function centsToRatio(cents) {
  return 2 ** (cents / 1200);
}

function safeTimeConstant(seconds) {
  return Math.max(0.001, Number(seconds) || 0.001);
}

function createNoiseBuffer(context, seconds = 0.1) {
  let byLength = noiseCache.get(context);
  if (!byLength) {
    byLength = new Map();
    noiseCache.set(context, byLength);
  }
  const frames = Math.ceil(context.sampleRate * seconds);
  if (byLength.has(frames)) return byLength.get(frames);

  const buffer = context.createBuffer(1, frames, context.sampleRate);
  const data = buffer.getChannelData(0);
  // Buffer contents are intentionally static. Per-hit variety comes from
  // playback rate/filter/excitation parameters, avoiding allocations per hit.
  let state = 0x41c6ce57;
  for (let i = 0; i < data.length; i += 1) {
    state = (Math.imul(state, 1664525) + 1013904223) >>> 0;
    data[i] = (state / 2147483648) - 1;
  }
  byLength.set(frames, buffer);
  return buffer;
}

function softClipCurve(amount = 0.7, size = 2048) {
  const curve = new Float32Array(size);
  const drive = 1 + clamp(amount, 0, 1) * 8;
  const norm = Math.tanh(drive);
  for (let i = 0; i < size; i += 1) {
    const x = (i / (size - 1)) * 2 - 1;
    curve[i] = Math.tanh(x * drive) / norm;
  }
  return curve;
}

/**
 * A conservative master bus for percussion voices.
 * Headroom is created before a soft clipper and DynamicsCompressor limiter.
 * This is a safety net, not a replacement for voice-level gain staging.
 */
export function createPercussionBus(context, destination = context.destination, options = {}) {
  const input = context.createGain();
  const dcBlock = context.createBiquadFilter();
  const saturation = context.createWaveShaper();
  const limiter = context.createDynamicsCompressor();
  const output = context.createGain();

  input.gain.value = options.inputGain ?? 0.7;
  dcBlock.type = 'highpass';
  dcBlock.frequency.value = options.dcCutoffHz ?? 20;
  dcBlock.Q.value = 0.707;

  saturation.curve = softClipCurve(options.saturation ?? 0.14);
  saturation.oversample = '4x';

  limiter.threshold.value = options.thresholdDb ?? -4;
  limiter.knee.value = options.kneeDb ?? 3;
  limiter.ratio.value = options.ratio ?? 12;
  limiter.attack.value = options.attackSeconds ?? 0.002;
  limiter.release.value = options.releaseSeconds ?? 0.08;
  output.gain.value = options.outputGain ?? 0.92;

  input.connect(dcBlock);
  dcBlock.connect(saturation);
  saturation.connect(limiter);
  limiter.connect(output);
  output.connect(destination);

  return { input, output, limiter, saturation, dcBlock };
}

/**
 * Registry for mutually exclusive articulations (e.g. open/closed/choked).
 */
export class VoiceRegistry {
  constructor() {
    this.groups = new Map();
  }

  add(group, handle) {
    if (!group) return;
    const voices = this.groups.get(group) ?? new Set();
    voices.add(handle);
    this.groups.set(group, voices);
    handle.ended?.finally?.(() => voices.delete(handle));
  }

  choke(group, when, release = 0.012) {
    const voices = this.groups.get(group);
    if (!voices) return;
    for (const handle of voices) handle.choke?.(when, release);
    voices.clear();
  }
}

function holdAudioParam(param, when) {
  if (typeof param.cancelAndHoldAtTime === 'function') {
    param.cancelAndHoldAtTime(when);
    return;
  }
  const current = Math.max(1e-5, Number(param.value) || 1e-5);
  param.cancelScheduledValues(when);
  param.setValueAtTime(current, when);
}

/**
 * Trigger a struck resonant object using a source/filter modal model.
 *
 * model.modes: [{ ratio, gain, q, decay, edgeSensitivity? }]
 * model.excitation: { duration, highpassHz, lowpassHz, clickHz, clickGain }
 *
 * Ratios are deliberately data-driven. Instrument modules should calibrate
 * them from measurement or trustworthy acoustic literature instead of copying
 * one generic oscillator recipe across unrelated instruments.
 */
export function triggerModalPercussion(context, destination, model, event = {}, registry = null) {
  if (!Array.isArray(model?.modes) || model.modes.length === 0) {
    throw new TypeError('model.modes must be a non-empty array');
  }

  const when = Math.max(context.currentTime, Number(event.when ?? context.currentTime));
  const technique = model.techniques?.[event.stroke] ?? {};
  const velocity = clamp(Number(event.velocity ?? 0.75), 0, 1);
  const baseHz = Math.max(20, Number(event.baseHz ?? technique.baseHz ?? model.baseHz ?? 180));
  const strikePosition = clamp(Number(event.strikePosition ?? technique.strikePosition ?? model.strikePosition ?? 0.35), 0, 1);
  const hardness = clamp(Number(event.hardness ?? technique.hardness ?? model.hardness ?? 0.55), 0, 1);
  const damping = clamp(Number(event.damping ?? technique.damping ?? 0), 0, 0.98);
  const decayScale = Math.max(0.05, Number(event.decayScale ?? technique.decayScale ?? 1));
  const random = seededRandom(event.seed ?? `${model.id ?? 'modal'}:${event.stroke ?? 'default'}:${when.toFixed(6)}`);
  const group = event.chokeGroup ?? technique.chokeGroup ?? model.chokeGroup ?? null;
  const chokeOthers = event.chokeOthers ?? technique.chokeOthers ?? false;

  if (chokeOthers && group && registry) {
    registry.choke(group, when, event.chokeRelease ?? 0.01);
  }

  const voiceGain = context.createGain();
  voiceGain.gain.setValueAtTime(1, when);
  voiceGain.connect(destination?.input ?? destination);

  const excitation = { ...(model.excitation ?? {}), ...(technique.excitation ?? {}) };
  const excitationDuration = Math.max(0.004, excitation.duration ?? 0.035);
  const noise = context.createBufferSource();
  noise.buffer = createNoiseBuffer(context, Math.max(0.06, excitationDuration * 2));
  noise.playbackRate.setValueAtTime(0.985 + random() * 0.03, when);

  const excHP = context.createBiquadFilter();
  excHP.type = 'highpass';
  excHP.frequency.setValueAtTime(excitation.highpassHz ?? 45, when);
  excHP.Q.value = 0.707;

  const excLP = context.createBiquadFilter();
  excLP.type = 'lowpass';
  // Harder strikes inject proportionally more high-frequency energy.
  const baseCutoff = excitation.lowpassHz ?? 5200;
  excLP.frequency.setValueAtTime(clamp(baseCutoff * (0.55 + hardness * 0.9), 500, 18000), when);
  excLP.Q.value = 0.55;

  const excGain = context.createGain();
  const excitationLevel = (0.18 + 0.82 * velocity) * (excitation.gain ?? 1);
  excGain.gain.setValueAtTime(Math.max(1e-5, excitationLevel), when);
  excGain.gain.exponentialRampToValueAtTime(1e-5, when + excitationDuration);

  noise.connect(excHP);
  excHP.connect(excLP);
  excLP.connect(excGain);

  const modeStops = [];
  let longestDecay = 0.05;

  for (let i = 0; i < model.modes.length; i += 1) {
    const mode = model.modes[i];
    const resonator = context.createBiquadFilter();
    resonator.type = 'bandpass';

    const randomCents = (mode.randomCents ?? model.randomCents ?? 2) * bipolar(random);
    const modeHz = clamp(
      baseHz * Number(mode.ratio ?? 1) * centsToRatio(randomCents),
      20,
      context.sampleRate * 0.45,
    );
    resonator.frequency.setValueAtTime(modeHz, when);
    resonator.Q.setValueAtTime(Math.max(0.5, Number(mode.q ?? 18)), when);

    const modeGain = context.createGain();
    const edgeSensitivity = Number(mode.edgeSensitivity ?? 0);
    const positionWeight = clamp(1 + edgeSensitivity * (strikePosition * 2 - 1), 0.03, 2.5);
    const velocityBrightness = 0.72 + velocity * (0.28 + i * 0.015);
    const techniqueModeGain = Array.isArray(technique.modeGains) ? Number(technique.modeGains[i] ?? 1) : 1;
    const level = Math.max(1e-5, Number(mode.gain ?? 1) * techniqueModeGain * positionWeight * velocityBrightness);
    const decay = Math.max(0.015, Number(mode.decay ?? 0.45) * decayScale * (1 - damping * 0.92));
    longestDecay = Math.max(longestDecay, decay);

    modeGain.gain.setValueAtTime(level, when);
    modeGain.gain.setTargetAtTime(1e-5, when + 0.001, safeTimeConstant(decay / 6.9));

    excGain.connect(resonator);
    resonator.connect(modeGain);
    modeGain.connect(voiceGain);
    modeStops.push({ resonator, modeGain });
  }

  // A tiny broadband contact transient makes the source event legible without
  // forcing every instrument into the same tonal oscillator attack.
  if ((excitation.clickGain ?? 0.08) > 0) {
    const click = context.createOscillator();
    const clickGain = context.createGain();
    click.type = 'sine';
    click.frequency.setValueAtTime(excitation.clickHz ?? 1600, when);
    click.frequency.exponentialRampToValueAtTime(Math.max(80, (excitation.clickHz ?? 1600) * 0.35), when + 0.008);
    clickGain.gain.setValueAtTime((excitation.clickGain ?? 0.08) * velocity, when);
    clickGain.gain.exponentialRampToValueAtTime(1e-5, when + 0.012);
    click.connect(clickGain);
    clickGain.connect(voiceGain);
    click.start(when);
    click.stop(when + 0.02);
  }

  noise.start(when);
  noise.stop(when + excitationDuration + 0.01);

  const naturalStop = when + longestDecay * 1.6 + 0.08;
  let resolveEnded;
  const ended = new Promise((resolve) => { resolveEnded = resolve; });
  let stopped = false;

  const handle = {
    ended,
    choke(at = context.currentTime, release = 0.012) {
      if (stopped) return;
      const t = Math.max(context.currentTime, Number(at));
      const r = Math.max(0.002, Number(release));
      holdAudioParam(voiceGain.gain, t);
      voiceGain.gain.exponentialRampToValueAtTime(1e-5, t + r);
    },
    stop(at = context.currentTime) {
      if (stopped) return;
      stopped = true;
      const t = Math.max(context.currentTime, Number(at));
      holdAudioParam(voiceGain.gain, t);
      voiceGain.gain.exponentialRampToValueAtTime(1e-5, t + 0.005);
    },
  };

  registry?.add(group, handle);
  // Cleanup only after the longest scheduled decay. Disconnecting avoids
  // retaining graph nodes in long jam sessions.
  const cleanupDelayMs = Math.max(1, (naturalStop - context.currentTime + 0.1) * 1000);
  setTimeout(() => {
    stopped = true;
    try { noise.disconnect(); } catch {}
    try { excHP.disconnect(); } catch {}
    try { excLP.disconnect(); } catch {}
    try { excGain.disconnect(); } catch {}
    for (const { resonator, modeGain } of modeStops) {
      try { resonator.disconnect(); } catch {}
      try { modeGain.disconnect(); } catch {}
    }
    try { voiceGain.disconnect(); } catch {}
    resolveEnded();
  }, cleanupDelayMs);

  return handle;
}


/**
 * Trigger a particulate percussion texture (shakers, rattles and related
 * instruments) as deterministic micro-impulses into a resonant/filter body.
 * This is intentionally a family model, not a claim about any named instrument.
 */
export function triggerParticlePercussion(context, destination, model, event = {}) {
  const when = Math.max(context.currentTime, Number(event.when ?? context.currentTime));
  const velocity = clamp(Number(event.velocity ?? 0.75), 0, 1);
  const particle = model?.particle ?? {};
  const duration = Math.max(0.03, Number(event.duration ?? particle.duration ?? 0.28));
  const densityHz = Math.max(1, Number(event.densityHz ?? particle.densityHz ?? 85) * (0.7 + velocity * 0.65));
  const random = seededRandom(event.seed ?? `${model?.id ?? 'particle'}:${when.toFixed(6)}`);
  const frameCount = Math.ceil(duration * context.sampleRate);
  const buffer = context.createBuffer(1, frameCount, context.sampleRate);
  const data = buffer.getChannelData(0);

  // Exponentially distributed inter-particle times avoid the mechanical sound
  // of uniformly spaced clicks while remaining deterministic for a given seed.
  let frame = 0;
  while (frame < frameCount) {
    const u = Math.max(1e-7, random());
    const intervalSeconds = -Math.log(u) / densityHz;
    frame += Math.max(1, Math.round(intervalSeconds * context.sampleRate));
    if (frame >= frameCount) break;
    const progress = frame / frameCount;
    const envelope = Math.sin(Math.PI * clamp(progress, 0, 1)) ** (particle.envelopePower ?? 0.7);
    const amplitude = velocity * envelope * (0.35 + random() * 0.65);
    data[frame] += amplitude * bipolar(random);
    if (frame + 1 < frameCount) data[frame + 1] += amplitude * 0.45 * bipolar(random);
    if (frame + 2 < frameCount) data[frame + 2] += amplitude * 0.16 * bipolar(random);
  }

  const source = context.createBufferSource();
  source.buffer = buffer;
  const highpass = context.createBiquadFilter();
  const lowpass = context.createBiquadFilter();
  const gain = context.createGain();
  highpass.type = 'highpass';
  highpass.frequency.setValueAtTime(particle.highpassHz ?? 650, when);
  highpass.Q.value = 0.7;
  lowpass.type = 'lowpass';
  const cutoff = clamp((particle.lowpassHz ?? 9000) * (0.68 + velocity * 0.5), 1200, context.sampleRate * 0.45);
  lowpass.frequency.setValueAtTime(cutoff, when);
  lowpass.Q.value = particle.lowpassQ ?? 0.55;
  gain.gain.setValueAtTime(Math.max(1e-5, Number(particle.gain ?? 0.55)), when);

  source.connect(highpass);
  highpass.connect(lowpass);
  lowpass.connect(gain);

  let tail = duration;
  if (Array.isArray(model.resonances)) {
    for (const resonance of model.resonances) {
      const filter = context.createBiquadFilter();
      const resonantGain = context.createGain();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(clamp(Number(resonance.frequencyHz), 20, context.sampleRate * 0.45), when);
      filter.Q.setValueAtTime(Math.max(0.5, Number(resonance.q ?? 8)), when);
      const decay = Math.max(0.02, Number(resonance.decay ?? 0.12));
      tail = Math.max(tail, duration + decay);
      resonantGain.gain.setValueAtTime(Math.max(1e-5, Number(resonance.gain ?? 0.25)), when);
      resonantGain.gain.setTargetAtTime(1e-5, when + duration * 0.65, safeTimeConstant(decay / 6.9));
      gain.connect(filter);
      filter.connect(resonantGain);
      resonantGain.connect(destination?.input ?? destination);
    }
  } else {
    gain.connect(destination?.input ?? destination);
  }

  source.start(when);
  source.stop(when + duration + 0.01);
  return { source, endTime: when + tail + 0.05 };
}
