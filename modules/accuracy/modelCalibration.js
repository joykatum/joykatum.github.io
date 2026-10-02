/**
 * Utilities for calibrating modal models from measured spectral peaks.
 * The model deliberately stores measured frequencies/decay information rather
 * than pretending one generic drum recipe is culturally or acoustically valid.
 */

function median(values) {
  const copy = [...values].sort((a, b) => a - b);
  const mid = Math.floor(copy.length / 2);
  return copy.length % 2 ? copy[mid] : (copy[mid - 1] + copy[mid]) / 2;
}

export function modelFromMeasuredModes({ id, frequenciesHz, decaySeconds, gains, baseHz }) {
  if (!Array.isArray(frequenciesHz) || frequenciesHz.length < 2) {
    throw new TypeError('frequenciesHz must contain at least two measured peaks');
  }
  const freqs = frequenciesHz.map(Number);
  if (freqs.some((f) => !Number.isFinite(f) || f <= 0)) {
    throw new TypeError('frequenciesHz must contain positive finite values');
  }

  const requestedBaseHz = Number(baseHz);
  const fundamental = Number.isFinite(requestedBaseHz) && requestedBaseHz > 0 ? requestedBaseHz : Math.min(...freqs);
  const decays = Array.isArray(decaySeconds) ? decaySeconds.map(Number) : [];
  const validDecays = decays.filter((value) => Number.isFinite(value) && value > 0);
  const levels = Array.isArray(gains) ? gains.map(Number) : [];

  return {
    id,
    baseHz: fundamental,
    calibration: {
      kind: 'measured-modal-peaks',
      frequencyCount: freqs.length,
      medianDecaySeconds: validDecays.length ? median(validDecays) : null,
    },
    modes: freqs.map((frequency, index) => ({
      ratio: frequency / fundamental,
      gain: Number.isFinite(levels[index]) ? Math.max(0, levels[index]) : 1 / (1 + index * 0.35),
      decay: Number.isFinite(decays[index]) && decays[index] > 0 ? Math.max(0.015, decays[index]) : 0.4 / (1 + index * 0.08),
      q: 14 + index * 1.5,
    })),
  };
}

export function compareModeModel(model, measuredFrequenciesHz) {
  const baseHz = Number(model?.baseHz);
  if (!Number.isFinite(baseHz) || !(baseHz > 0) || !Array.isArray(model?.modes)) {
    throw new TypeError('model must include baseHz and modes');
  }
  if (!Array.isArray(measuredFrequenciesHz)) throw new TypeError('measuredFrequenciesHz must be an array');
  const predicted = model.modes.map((mode) => baseHz * Number(mode.ratio));
  const measured = measuredFrequenciesHz.map(Number);
  const count = Math.min(predicted.length, measured.length);
  if (count === 0) return { count: 0, meanAbsoluteCents: null, errorsCents: [] };

  if (predicted.some((frequency) => !Number.isFinite(frequency) || frequency <= 0)) {
    throw new TypeError('model modes must contain positive finite ratios');
  }
  if (measured.some((frequency) => !Number.isFinite(frequency) || frequency <= 0)) {
    throw new TypeError('measuredFrequenciesHz must contain positive finite values');
  }

  const errorsCents = [];
  for (let i = 0; i < count; i += 1) {
    errorsCents.push(1200 * Math.log2(predicted[i] / measured[i]));
  }
  const meanAbsoluteCents = errorsCents.reduce((sum, value) => sum + Math.abs(value), 0) / count;
  return { count, meanAbsoluteCents, errorsCents };
}
