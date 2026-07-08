import { getLoadedInstrument, ensureInstrumentLoaded } from './drumTypes.js';

export { ensureInstrumentLoaded, getLoadedInstrument };

export function generateDrumheadSVG(id, colorType, instrument = 'conga') {
  let skinGradient = '';

  // Define skin colors
  if (colorType === 'dark') {
    skinGradient = `
            <radialGradient id="skin-${id}" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stop-color="#2a1f1a"/>
                <stop offset="70%" stop-color="#1b120f"/>
                <stop offset="100%" stop-color="#0d0908"/>
            </radialGradient>`;
  } else if (colorType === 'darker') {
    skinGradient = `
            <radialGradient id="skin-${id}" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stop-color="#1f1e24"/>
                <stop offset="70%" stop-color="#121115"/>
                <stop offset="100%" stop-color="#050507"/>
            </radialGradient>`;
  } else if (colorType === 'blonde') {
    skinGradient = `
            <radialGradient id="skin-${id}" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stop-color="#f5caa0"/>
                <stop offset="65%" stop-color="#ca9463"/>
                <stop offset="100%" stop-color="#8a5b30"/>
            </radialGradient>`;
  } else if (colorType === 'blonde-light') {
    skinGradient = `
            <radialGradient id="skin-${id}" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stop-color="#fdf3e7"/>
                <stop offset="65%" stop-color="#e3be96"/>
                <stop offset="100%" stop-color="#ad845b"/>
            </radialGradient>`;
  } else if (colorType === 'caramel') {
    skinGradient = `
            <radialGradient id="skin-${id}" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stop-color="#e09c53"/>
                <stop offset="70%" stop-color="#b06c28"/>
                <stop offset="100%" stop-color="#733d0b"/>
            </radialGradient>`;
  } else if (colorType === 'terracotta') {
    skinGradient = `
            <radialGradient id="skin-${id}" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stop-color="#d9774d"/>
                <stop offset="65%" stop-color="#b04f25"/>
                <stop offset="100%" stop-color="#63270d"/>
            </radialGradient>`;
  } else if (colorType === 'purple') {
    skinGradient = `
            <radialGradient id="skin-${id}" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stop-color="#581c87"/>
                <stop offset="70%" stop-color="#2e1065"/>
                <stop offset="100%" stop-color="#0f051d"/>
            </radialGradient>`;
  } else if (colorType === 'teal') {
    skinGradient = `
            <radialGradient id="skin-${id}" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stop-color="#0d9488"/>
                <stop offset="70%" stop-color="#0f766e"/>
                <stop offset="100%" stop-color="#115e59"/>
            </radialGradient>`;
  } else if (colorType === 'wood') {
    skinGradient = `
            <radialGradient id="skin-${id}" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stop-color="#ca8a04"/>
                <stop offset="65%" stop-color="#a16207"/>
                <stop offset="100%" stop-color="#713f12"/>
            </radialGradient>`;
  } else if (colorType === 'silver') {
    skinGradient = `
            <radialGradient id="skin-${id}" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stop-color="#f1f5f9"/>
                <stop offset="65%" stop-color="#cbd5e1"/>
                <stop offset="100%" stop-color="#475569"/>
            </radialGradient>`;
  } else if (colorType === 'aquamarine') {
    skinGradient = `
            <radialGradient id="skin-${id}" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stop-color="#14b8a6"/>
                <stop offset="70%" stop-color="#0f766e"/>
                <stop offset="100%" stop-color="#013a34"/>
            </radialGradient>`;
  } else if (colorType === 'steel-blue') {
    skinGradient = `
            <radialGradient id="skin-${id}" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stop-color="#3b82f6"/>
                <stop offset="65%" stop-color="#1d4ed8"/>
                <stop offset="100%" stop-color="#172554"/>
            </radialGradient>`;
  } else {
    // caramel-light
    skinGradient = `
            <radialGradient id="skin-${id}" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stop-color="#f4bd81"/>
                <stop offset="70%" stop-color="#cc8f4e"/>
                <stop offset="100%" stop-color="#87531d"/>
            </radialGradient>`;
  }

  // Chrome hardware gradient
  const hardwareDefs = `
        <linearGradient id="chrome-${id}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#f1f5f9"/>
            <stop offset="25%" stop-color="#94a3b8"/>
            <stop offset="50%" stop-color="#e2e8f0"/>
            <stop offset="75%" stop-color="#475569"/>
            <stop offset="100%" stop-color="#cbd5e1"/>
        </linearGradient>
        <radialGradient id="overlay-${id}" cx="50%" cy="30%" r="50%">
            <stop offset="0%" stop-color="#ffffff" stop-opacity="0.15"/>
            <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
        </radialGradient>
    `;

  // Radial hardware tension lugs placed around the rim
  let lugsHtml = '';
  const angles = [30, 90, 150, 210, 270, 330];
  angles.forEach((angle) => {
    const rad = (angle * Math.PI) / 180;
    const cx = 50 + 44 * Math.cos(rad);
    const cy = 50 + 44 * Math.sin(rad);
    lugsHtml += `<rect x="${cx - 1.5}" y="${cy - 3}" width="3" height="6" rx="0.8" fill="url(#chrome-${id})" stroke="#1e293b" stroke-width="0.3" transform="rotate(${angle + 90}, ${cx}, ${cy})"/>`;
  });

  let shapes = '';
  const inst = getLoadedInstrument(instrument);
  if (inst && inst.generateSVG) {
    shapes = inst.generateSVG(id, colorType, lugsHtml);
  } else {
    // Standard default fallback shapes
    shapes = `
            <!-- Heavy bottom shadow -->
            <circle cx="50" cy="51" r="48" fill="#020617" opacity="0.6" filter="blur(2px)"/>
            
            <!-- Metallic outer hoop -->
            <circle cx="50" cy="50" r="47.5" fill="none" stroke="url(#chrome-${id})" stroke-width="4.5"/>
            <circle cx="50" cy="50" r="45.5" fill="none" stroke="#0f172a" stroke-width="0.8"/>
            
            <!-- Real leather skin -->
            <circle cx="50" cy="50" r="44.8" fill="url(#skin-${id})"/>
            
            <!-- Flesh hoop inner ring -->
            <circle cx="50" cy="50" r="44.2" fill="none" stroke="#1e1b18" stroke-width="1.2" opacity="0.85"/>
            <circle cx="50" cy="50" r="41.5" fill="none" stroke="#ffffff" stroke-width="0.3" opacity="0.15"/>
            
            <!-- Ambient 3D lighting cover -->
            <circle cx="50" cy="50" r="44.8" fill="url(#overlay-${id})"/>
            
            <!-- Elegant Chrome Lugs -->
            ${lugsHtml}
        `;
  }

  return `
        <svg viewBox="0 0 100 100" class="drumhead-svg">
            <defs>
                ${skinGradient}
                ${hardwareDefs}
            </defs>
            ${shapes}
        </svg>
    `;
}

export function generateBataSVG(id, colorType) {
  const inst = getLoadedInstrument('bata');
  return inst && inst.generateSVG ? inst.generateSVG(id, colorType) : '';
}

export function generateBongoSVG(id, colorType) {
  const inst = getLoadedInstrument('bongo');
  return inst && inst.generateSVG ? inst.generateSVG(id, colorType) : '';
}

export function generateMridangamSVG(id, colorType) {
  const inst = getLoadedInstrument('mridangam');
  return inst && inst.generateSVG ? inst.generateSVG(id, colorType) : '';
}

export function generateDholSVG(id, colorType) {
  const inst = getLoadedInstrument('dhol');
  return inst && inst.generateSVG ? inst.generateSVG(id, colorType) : '';
}

export function generateAgogoSVG(id, colorType) {
  const inst = getLoadedInstrument('agogo');
  return inst && inst.generateSVG ? inst.generateSVG(id, colorType) : '';
}
