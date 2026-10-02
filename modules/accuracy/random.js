/**
 * Deterministic pseudo-random helpers for musical variation.
 *
 * Audio variation should be repeatable for a given performance seed. Using
 * Math.random() directly makes A/B comparison, offline rendering and bug
 * reproduction needlessly difficult.
 */

export function hashSeed(value) {
  const text = String(value ?? 'joykatum');
  let hash = 2166136261;
  for (let i = 0; i < text.length; i += 1) {
    hash ^= text.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

export function mulberry32(seed) {
  let state = seed >>> 0;
  return function random() {
    state += 0x6d2b79f5;
    let t = state;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function seededRandom(seed) {
  return mulberry32(hashSeed(seed));
}

export function bipolar(random = Math.random) {
  return random() * 2 - 1;
}
