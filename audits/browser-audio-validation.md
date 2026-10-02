# Native browser audio validation — October 2, 2026

Chrome's native OfflineAudioContext rendered each instrument sound separately for three seconds, at velocity 0.6, for every configured drum and sustain settings -100, 0 and 100. Delayed strokes used a virtual scheduling timeline. This checks signal generation and API validity, not perceptual realism or traditional accuracy.

## Results

- 93 instruments, 382 sound definitions, 1,578 independent renders.
- All renders produced finite, non-silent PCM. No browser exceptions were reported.
- Basic bell, membrane, tabla and sample playback checks passed.
- The bypassed effects chain and ten active effects configurations produced finite, non-silent PCM.
- 90 catalogue renders exceeded digital full scale. These are amplitude warnings, not clean-output passes: playback may clip. The ring modulation test also exceeded full scale (peak 1.109).

## Faults found and corrected

- Every sample in the bundled timpani SoundFont contains zero PCM values. The sample player now rejects silent samples so the instrument's existing synthesis fallback runs. The empty recordings have not been replaced with verified timpani recordings.
- The Agogô bank has incompatible linked channel lengths (the header called `Gun` links to a bell channel). The parser now preserves those channels as mono instead of rejecting the whole bank. The usable high-bell sample remains playable.

## Coverage limits

This suite does not certify instrument timbre, pitch calibration, rhythm authenticity, human listening quality, browser differences, live input latency, recording capture, or polyphonic clipping. Speech synthesis is intercepted because it bypasses Web Audio. It is not acoustically validated. Three-second renders do not check complete long decay tails. Effect checks verify finite audible output, not every control's intended musical behavior.

## Reproduce

Start a static server from the repository root with `python3 -m http.server 8765 --bind 127.0.0.1`, then run `node scripts/run_browser_audio.mjs`. Set `CHROME_PATH` for a different Chrome executable. Detailed per-voice results are in `browser-catalogue.json`; individual helper/effect results are in the other `browser-*.json` files.

| Check | Signal validity | Peak |
| --- | --- | --- |
| bell | PASS | 0.6258238554000854 |
| catalogue | PASS | — |
| effects-bitcrusher | PASS | 0.9341174364089966 |
| effects-delay | PASS | 0.7376402020454407 |
| effects-distortion | PASS | 0.45858335494995117 |
| effects-filter | PASS | 0.7129817605018616 |
| effects-formant | PASS | 0.37599191069602966 |
| effects-freeze | PASS | 0.7363554835319519 |
| effects-pan | PASS | 0.8470419645309448 |
| effects-resonator | PASS | 0.8451865911483765 |
| effects-reverb | PASS | 0.7759475708007812 |
| effects-ringmod | PASS | 1.1085432767868042 |
| effects | PASS | 0.7485394477844238 |
| membrane | PASS | 0.670264482498169 |
| sample | PASS | 0.5629937052726746 |
| tabla | PASS | 0.9732993841171265 |
