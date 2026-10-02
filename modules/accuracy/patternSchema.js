const SOURCE_KINDS = new Set([
  'transcription',
  'scholarly',
  'method-book',
  'performer',
  'recording-analysis',
  'field-recording',
  'derived',
  'original',
]);

const CONFIDENCE = new Set(['high', 'medium', 'low', 'creative']);

function isFiniteNumber(value) {
  return typeof value === 'number' && Number.isFinite(value);
}

function requireString(value, path, errors) {
  if (typeof value !== 'string' || value.trim() === '') {
    errors.push(`${path} must be a non-empty string`);
  }
}

/**
 * Validate the accuracy metadata for a rhythm pattern.
 *
 * This intentionally separates traditional/source-derived material from
 * creative material. A creative pattern is valid, but it must not masquerade
 * as a named historical/traditional rhythm.
 */
export function validatePatternDefinition(pattern) {
  const errors = [];
  const warnings = [];

  if (!pattern || typeof pattern !== 'object') {
    return { ok: false, errors: ['pattern must be an object'], warnings };
  }

  requireString(pattern.id, 'id', errors);
  requireString(pattern.name, 'name', errors);
  requireString(pattern.instrumentId, 'instrumentId', errors);

  const meter = pattern.meter;
  if (!meter || typeof meter !== 'object') {
    errors.push('meter is required');
  } else {
    if (!Number.isInteger(meter.beats) || meter.beats <= 0) {
      errors.push('meter.beats must be a positive integer');
    }
    if (!Number.isInteger(meter.beatUnit) || meter.beatUnit <= 0) {
      errors.push('meter.beatUnit must be a positive integer');
    }
  }

  const tempo = pattern.tempo;
  if (!tempo || typeof tempo !== 'object') {
    errors.push('tempo is required');
  } else {
    for (const key of ['min', 'max', 'default']) {
      if (!isFiniteNumber(tempo[key]) || tempo[key] <= 0) {
        errors.push(`tempo.${key} must be a positive finite number`);
      }
    }
    if (isFiniteNumber(tempo.min) && isFiniteNumber(tempo.max) && tempo.min > tempo.max) {
      errors.push('tempo.min must not exceed tempo.max');
    }
    if (
      isFiniteNumber(tempo.default) &&
      isFiniteNumber(tempo.min) &&
      isFiniteNumber(tempo.max) &&
      (tempo.default < tempo.min || tempo.default > tempo.max)
    ) {
      errors.push('tempo.default must be inside [tempo.min, tempo.max]');
    }
  }

  const provenance = pattern.provenance;
  if (!provenance || typeof provenance !== 'object') {
    errors.push('provenance is required');
  } else {
    requireString(provenance.tradition, 'provenance.tradition', errors);
    requireString(provenance.region, 'provenance.region', errors);
    if (!SOURCE_KINDS.has(provenance.kind)) {
      errors.push(`provenance.kind must be one of: ${[...SOURCE_KINDS].join(', ')}`);
    }
    if (!CONFIDENCE.has(provenance.confidence)) {
      errors.push(`provenance.confidence must be one of: ${[...CONFIDENCE].join(', ')}`);
    }

    if (provenance.kind !== 'original') {
      if (!Array.isArray(provenance.sources) || provenance.sources.length === 0) {
        errors.push('source-derived patterns require provenance.sources');
      }
    }

    if (provenance.kind === 'original' && provenance.confidence !== 'creative') {
      warnings.push('original patterns should normally use confidence="creative"');
    }
  }

  if (!Array.isArray(pattern.events) || pattern.events.length === 0) {
    errors.push('events must be a non-empty array');
  } else {
    pattern.events.forEach((event, index) => {
      const path = `events[${index}]`;
      if (!isFiniteNumber(event.beat) || event.beat < 0) {
        errors.push(`${path}.beat must be a non-negative finite number`);
      }
      requireString(event.stroke, `${path}.stroke`, errors);
      if (!isFiniteNumber(event.velocity) || event.velocity < 0 || event.velocity > 1) {
        errors.push(`${path}.velocity must be in [0, 1]`);
      }
      if (event.microtimingMs != null && !isFiniteNumber(event.microtimingMs)) {
        errors.push(`${path}.microtimingMs must be finite when present`);
      }
      if (event.probability != null && (!isFiniteNumber(event.probability) || event.probability < 0 || event.probability > 1)) {
        errors.push(`${path}.probability must be in [0, 1] when present`);
      }
    });
  }

  return { ok: errors.length === 0, errors, warnings };
}

export function assertPatternDefinition(pattern) {
  const result = validatePatternDefinition(pattern);
  if (!result.ok) {
    throw new Error(`Invalid pattern ${pattern?.id ?? '<unknown>'}:\n- ${result.errors.join('\n- ')}`);
  }
  return pattern;
}

export const PATTERN_ACCURACY_CONTRACT = Object.freeze({
  required: [
    'id',
    'name',
    'instrumentId',
    'meter',
    'tempo',
    'provenance',
    'events',
  ],
  provenanceKinds: [...SOURCE_KINDS],
  confidenceLevels: [...CONFIDENCE],
});
