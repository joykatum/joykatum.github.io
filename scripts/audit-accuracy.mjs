#!/usr/bin/env node
import fs from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve(process.argv[2] ?? process.cwd());

async function walk(dir) {
  const output = [];
  let entries;
  try {
    entries = await fs.readdir(dir, { withFileTypes: true });
  } catch {
    return output;
  }
  for (const entry of entries) {
    if (entry.name === '.git' || entry.name === 'node_modules') continue;
    const absolute = path.join(dir, entry.name);
    if (entry.isDirectory()) output.push(...await walk(absolute));
    else if (/\.(?:js|mjs|ts)$/.test(entry.name)) output.push(absolute);
  }
  return output;
}

const instrumentScope = (file) => /(?:^|\/)modules\/instruments\//.test(file);
const musicalScope = (file) => instrumentScope(file) || /(?:^|\/)modules\/patterns\.js$/.test(file);

const checks = [
  {
    id: 'wall-clock-audio-trigger',
    severity: 'high',
    scope: musicalScope,
    pattern: /(?:setTimeout|setInterval|requestAnimationFrame)\s*\([^\n]*(?:play|trigger|start|hit|sound)/gi,
    message: 'Possible wall-clock audio trigger. Queue absolute AudioContext times with a look-ahead scheduler instead.',
  },
  {
    id: 'hard-coded-sample-rate',
    severity: 'medium',
    scope: instrumentScope,
    pattern: /\b(?:44100|48000)\b/g,
    message: 'Hard-coded sample rate. Prefer context.sampleRate unless this is explicitly a resampling target.',
  },
  {
    id: 'direct-destination-route',
    severity: 'medium',
    scope: instrumentScope,
    pattern: /\.connect\s*\(\s*(?:ctx|context|audioContext)?\.?destination\s*\)/g,
    message: 'Voice routes directly to destination. Prefer a shared gain-staged bus/limiter so polyphony does not clip.',
  },
  {
    id: 'unseeded-randomness',
    severity: 'low',
    scope: musicalScope,
    pattern: /Math\.random\s*\(/g,
    message: 'Unseeded randomness makes renders and A/B comparisons irreproducible. Prefer deterministic performance seeds.',
  },
  {
    id: 'immediate-source-start',
    severity: 'high',
    scope: instrumentScope,
    pattern: /\.start\s*\(\s*\)/g,
    message: 'Source starts at “now”. Musical events should normally call start(absoluteAudioTime).',
  },
  {
    id: 'abrupt-gain-write',
    severity: 'low',
    scope: instrumentScope,
    pattern: /\.gain\.value\s*=/g,
    message: 'Inspect direct gain mutation. Static graph setup is fine; note envelopes should use scheduled AudioParam automation.',
  },
  {
    id: 'oscillator-heavy-voice',
    severity: 'info',
    scope: instrumentScope,
    pattern: /createOscillator\s*\(/g,
    message: 'Oscillator synthesis is not inherently wrong, but validate ratios/transients against measurement or references.',
  },
  {
    id: 'script-processor',
    severity: 'high',
    scope: () => true,
    pattern: /createScriptProcessor\s*\(/g,
    message: 'ScriptProcessorNode is legacy main-thread DSP. Move custom realtime DSP to AudioWorklet.',
  },
];

function lineOf(text, index) {
  return text.slice(0, index).split('\n').length;
}

const files = await walk(root);
const findings = [];

for (const file of files) {
  const relative = path.relative(root, file).replaceAll(path.sep, '/');
  const text = await fs.readFile(file, 'utf8');
  for (const check of checks) {
    if (!check.scope(relative)) continue;
    check.pattern.lastIndex = 0;
    for (const match of text.matchAll(check.pattern)) {
      findings.push({
        severity: check.severity,
        check: check.id,
        file: relative,
        line: lineOf(text, match.index),
        message: check.message,
      });
    }
  }
}

const expected = ['modules/patterns.js', 'modules/drumInfo.js', 'modules/drumTypes.js'];
for (const relative of expected) {
  try {
    await fs.access(path.join(root, relative));
  } catch {
    findings.push({
      severity: 'medium',
      check: 'expected-registry-missing',
      file: relative,
      line: null,
      message: 'Expected registry/pattern file is absent; update the audit if the architecture has moved.',
    });
  }
}

const rank = { high: 0, medium: 1, low: 2, info: 3 };
findings.sort((a, b) => rank[a.severity] - rank[b.severity] || a.file.localeCompare(b.file) || (a.line ?? 0) - (b.line ?? 0));
const counts = findings.reduce((acc, item) => {
  acc[item.severity] = (acc[item.severity] ?? 0) + 1;
  return acc;
}, {});

console.log(`# Joykatum audio accuracy static audit\n`);
console.log(`Scanned ${files.length} JavaScript/TypeScript file(s) under ${root}.`);
console.log(`Findings: high=${counts.high ?? 0}, medium=${counts.medium ?? 0}, low=${counts.low ?? 0}, info=${counts.info ?? 0}.\n`);
for (const finding of findings) {
  const location = finding.line ? `${finding.file}:${finding.line}` : finding.file;
  console.log(`- **${finding.severity.toUpperCase()}** [${finding.check}] \`${location}\` — ${finding.message}`);
}

if (process.argv.includes('--json')) {
  console.log('\n```json');
  console.log(JSON.stringify({ root, files: files.length, counts, findings }, null, 2));
  console.log('```');
}

if (findings.some((item) => item.severity === 'high') && process.argv.includes('--strict')) {
  process.exitCode = 1;
}
