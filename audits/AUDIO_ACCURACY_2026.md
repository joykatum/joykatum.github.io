# Audio Accuracy Audit — 2026 implementation contract

This document defines what “accurate” means for Joykatum. Accuracy is not the
same as complexity, realism of the SVG, number of presets, or number of DSP
nodes. A pattern or instrument can be simple and accurate if its claims are
narrow and sourced; a sophisticated model can still be inaccurate if it uses
arbitrary modal ratios or labels an invented rhythm as traditional.

## 1. Pattern accuracy

Every source-derived pattern should record:

- provenance kind and source(s);
- tradition/style and region at the specificity supported by the source;
- meter/cycle length and playable tempo range;
- explicit stroke vocabulary, not merely on/off hits;
- authored accents and microtiming where the source supports them;
- ensemble/role notes when a rhythm is one layer of a larger texture;
- confidence and derivation notes.

Do not create a quota such as “10 authentic patterns per instrument.” Some
instruments have many well-documented repertories and others do not. Creative
presets are welcome, but label them `original` / `creative` rather than giving
them quasi-traditional names.

## 2. Technique accuracy

A technique must alter the sound-producing model, not only its display label.
At minimum, instrument implementations should decide which of these controls
are physically meaningful:

- strike position;
- implement/hand/finger/mallet hardness;
- open vs damped/muted/choked state;
- contact duration;
- dynamic level;
- pitch/tension control when the real instrument permits it;
- sympathetic/coupled resonances;
- repeated-hit interaction and voice choking.

Velocity should affect more than gain. For most struck instruments it also
changes attack bandwidth, modal balance and sometimes decay or pitch behavior.

## 3. DSP accuracy

Prefer a source/resonator decomposition for resonant percussion. An excitation
burst models contact; a modal bank models the vibrating body. Store calibrated
mode frequency ratios, gains and decays per instrument/articulation. For very
variable instruments, measured samples or structured sampling may outperform a
single hand-built oscillator recipe.

The included `percussionDSP.js` is a *kernel*, not a library of claimed
instrument models. It intentionally contains no “tabla preset”, “conga preset”,
etc. until those parameters are calibrated against recordings or acoustic
measurements.

The kernel bounds untrusted numeric controls before they reach Web Audio
automation or buffer allocation. Invalid numeric values fall back to a
documented neutral/default value; unusually large durations, gains, filter
frequencies, Q values, and particle densities are capped. These limits protect
runtime stability and do not make a model acoustically accurate. Instrument
modules that use the kernel still need calibrated modal data and explicit
articulation/technique mappings. `playMembrane`, `playTablaSlideUp`, and
`playBell` in `modules/audio.js` are separate legacy synthesis paths and are
not validated by the kernel's parameter safeguards.

## 4. Timing accuracy

Do not trigger musical events from wall-clock callback arrival time. Use a
short look-ahead loop to enqueue future events against `AudioContext.currentTime`
and pass absolute `when` values into sources and AudioParam automation. Human
feel belongs in the score/performance model, not in accidental main-thread
jitter.

## 5. Mix and level accuracy

Every voice should enter a shared bus with predictable headroom. Technique and
velocity mapping happens before this bus. The bus exists to prevent accidental
polyphonic overload; it must not flatten intentionally wide dynamics.

## 6. Validation

For each instrument, add at least one of:

1. reference-spectrum/modal-peak comparison;
2. onset/decay-envelope comparison;
3. performer-reviewed A/B reference notes;
4. sample-based golden renders with spectral/perceptual tolerances.

For patterns, tests should validate metadata and event topology (cycle length,
strokes, accent locations, deterministic variation). “It sounds plausible” is
not a regression test.

The existing manual audit utilities can be run with:

```sh
node scripts/audit-accuracy.mjs .
node scripts/test-accuracy-kernel.mjs
```

Use `--strict` on the audit in CI after the initial high-severity findings are
triaged.
