// A head choice selects a playing surface, not a second tuning multiplier.
export function getPlayingSurface(instrument, drum, side) {
  if (instrument === 'bongo') return { ...drum, id: side === 'macho' || side === 0 ? 0 : 1, pitchMult: 1 };
  if (instrument === 'agogo') return { ...drum, id: side === 'high' || side === 1 ? 1 : 0, pitchMult: 1 };
  if (instrument === 'mridangam') return { ...drum, id: side === 'thoppi' || side === 0 ? 0 : 1, pitchMult: side === 'thoppi' || side === 0 ? 0.8 : 1.4 };
  if (instrument === 'dhol') return { ...drum, id: side === 'dagga' || side === 0 ? 0 : 1, pitchMult: side === 'dagga' || side === 0 ? 0.8 : 1.25 };
  return drum;
}
