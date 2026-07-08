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
  if (instrument === 'cajon') {
    // Elegant screws around the front plate
    let screws = '';
    const screwPositions = [
      { x: 10, y: 10 },
      { x: 30, y: 10 },
      { x: 50, y: 10 },
      { x: 70, y: 10 },
      { x: 90, y: 10 },
      { x: 10, y: 30 },
      { x: 90, y: 30 },
      { x: 10, y: 50 },
      { x: 90, y: 50 },
      { x: 10, y: 70 },
      { x: 90, y: 70 },
      { x: 10, y: 90 },
      { x: 30, y: 90 },
      { x: 50, y: 90 },
      { x: 70, y: 90 },
      { x: 90, y: 90 }
    ];
    screwPositions.forEach((pos) => {
      screws += `<circle cx="${pos.x}" cy="${pos.y}" r="1.2" fill="url(#chrome-${id})" stroke="#0f172a" stroke-width="0.3"/>`;
      screws += `<line x1="${pos.x - 0.7}" y1="${pos.y}" x2="${pos.x + 0.7}" y2="${pos.y}" stroke="#475569" stroke-width="0.2"/>`;
    });

    shapes = `
            <!-- Heavy bottom shadow -->
            <rect x="2" y="4" width="96" height="96" rx="8" fill="#020617" opacity="0.65" filter="blur(2.5px)"/>
            
            <!-- Real dark wood body frame (outer sides) -->
            <rect x="4" y="4" width="92" height="92" rx="8" fill="#451a03" stroke="#1c0d02" stroke-width="1.5"/>
            
            <!-- Premium front plate (Tapa) -->
            <rect x="7" y="7" width="86" height="86" rx="5" fill="url(#skin-${id})" stroke="#271305" stroke-width="1"/>
            
            <!-- Elegant wood grain lines -->
            <path d="M 12 12 Q 30 18, 50 12 T 88 15 M 15 35 Q 40 38, 60 32 T 85 35 M 12 65 Q 35 60, 55 68 T 88 62" fill="none" stroke="#271305" stroke-width="0.5" opacity="0.2"/>
            
            <!-- Tapa Screws -->
            ${screws}
            
            <!-- Darker top/bottom shading to give cylindrical/curved depth -->
            <rect x="7" y="7" width="86" height="86" rx="5" fill="url(#overlay-${id})" opacity="0.75"/>
            <rect x="7" y="7" width="86" height="86" rx="5" fill="none" stroke="#ffffff" stroke-width="0.5" opacity="0.1"/>
        `;
  } else if (instrument === 'bata' || instrument === 'djembe') {
    shapes = `
            <!-- Heavy bottom shadow -->
            <circle cx="50" cy="51" r="48" fill="#020617" opacity="0.6" filter="blur(2px)"/>
            
            <!-- Thick rope/hide outer ring -->
            <circle cx="50" cy="50" r="47.5" fill="none" stroke="#4a3628" stroke-width="5" stroke-dasharray="2, 6"/>
            
            <!-- Real leather skin -->
            <circle cx="50" cy="50" r="44.8" fill="url(#skin-${id})"/>
            
            <!-- Flesh hoop inner ring -->
            <circle cx="50" cy="50" r="44.2" fill="none" stroke="#1e1b18" stroke-width="1.2" opacity="0.85"/>
            <circle cx="50" cy="50" r="41.5" fill="none" stroke="#ffffff" stroke-width="0.3" opacity="0.15"/>
            
            <!-- Ambient 3D lighting cover -->
            <circle cx="50" cy="50" r="44.8" fill="url(#overlay-${id})"/>
        `;
  } else if (instrument === 'timbales') {
    shapes = `
            <!-- Heavy bottom shadow -->
            <circle cx="50" cy="51" r="48" fill="#020617" opacity="0.6" filter="blur(2px)"/>
            
            <!-- Thin metallic outer hoop -->
            <circle cx="50" cy="50" r="47.5" fill="none" stroke="url(#chrome-${id})" stroke-width="3"/>
            <circle cx="50" cy="50" r="46" fill="none" stroke="#0f172a" stroke-width="0.5"/>
            
            <!-- Plastic/Synthetic skin (more bright) -->
            <circle cx="50" cy="50" r="45.5" fill="url(#skin-${id})" filter="brightness(1.2)"/>
            
            <!-- Flesh hoop inner ring -->
            <circle cx="50" cy="50" r="44.2" fill="none" stroke="#1e1b18" stroke-width="0.8" opacity="0.7"/>
            <circle cx="50" cy="50" r="41.5" fill="none" stroke="#ffffff" stroke-width="0.5" opacity="0.3"/>
            
            <!-- Ambient 3D lighting cover -->
            <circle cx="50" cy="50" r="45.5" fill="url(#overlay-${id})"/>
            
            <!-- Elegant Chrome Lugs -->
            ${lugsHtml}
        `;
  } else if (instrument === 'frame' || instrument === 'tar' || instrument === 'tar_drum' || instrument === 'bodhran') {
    shapes = `
            <!-- Heavy bottom shadow -->
            <circle cx="50" cy="51" r="49" fill="#020617" opacity="0.6" filter="blur(2px)"/>
            
            <!-- Very thin wooden hoop -->
            <circle cx="50" cy="50" r="48.5" fill="none" stroke="#8b5a2b" stroke-width="2"/>
            
            <!-- Real leather skin -->
            <circle cx="50" cy="50" r="47.5" fill="url(#skin-${id})"/>
            
            <!-- Minimal edge detail -->
            <circle cx="50" cy="50" r="46.5" fill="none" stroke="#1e1b18" stroke-width="0.8" opacity="0.5"/>
            <circle cx="50" cy="50" r="42" fill="none" stroke="#ffffff" stroke-width="0.2" opacity="0.1"/>
            
            <!-- Ambient 3D lighting cover -->
            <circle cx="50" cy="50" r="47.5" fill="url(#overlay-${id})"/>
        `;
  } else if (instrument === 'daf') {
    shapes = `
            <circle cx="50" cy="51" r="49" fill="#020617" opacity="0.6" filter="blur(2px)"/>
            <circle cx="50" cy="50" r="48" fill="none" stroke="#78350f" stroke-width="3"/>
            <circle cx="50" cy="50" r="45" fill="url(#skin-${id})"/>
            <circle cx="50" cy="50" r="41.5" fill="none" stroke="#eab308" stroke-width="2.5" stroke-dasharray="1 3" stroke-linecap="round" opacity="0.8"/>
            <circle cx="50" cy="50" r="45" fill="url(#overlay-${id})"/>
        `;
  } else if (instrument === 'ghatam') {
    shapes = `
            <!-- Heavy bottom shadow -->
            <circle cx="50" cy="54" r="45" fill="#020617" opacity="0.6" filter="blur(3px)"/>
            
            <!-- Beautiful spherical terracotta pot -->
            <circle cx="50" cy="50" r="44" fill="url(#skin-${id})" stroke="#451a03" stroke-width="1.8"/>
            
            <!-- Flared pot collar/rim on top seen in perspective -->
            <ellipse cx="50" cy="18" rx="14" ry="4.5" fill="none" stroke="#2c1404" stroke-width="3"/>
            <ellipse cx="50" cy="18" rx="12" ry="3.5" fill="#140700" stroke="#451a03" stroke-width="1"/>
            
            <!-- Shading overlay to make it highly 3D/spherical -->
            <circle cx="50" cy="50" r="44" fill="url(#overlay-${id})" opacity="0.95"/>
            
            <!-- Highlight to emphasize 3D sphere -->
            <ellipse cx="32" cy="32" rx="5" ry="10" fill="#ffffff" opacity="0.15" transform="rotate(-30, 32, 32)"/>
        `;
  } else if (instrument === 'janggu') {
    shapes = `
            <circle cx="50" cy="50" r="47" fill="#1e293b" opacity="0.08"/>
            
            <!-- Hourglass lacquered wood body in background -->
            <path d="M 28 18 Q 50 44, 50 50 Q 50 56, 72 82 L 28 82 Q 50 56, 50 50 Q 50 44, 72 18 Z" fill="#7f1d1d" stroke="#450a0a" stroke-width="1.5" filter="drop-shadow(0 3px 5px rgba(0,0,0,0.5))"/>
            
            <!-- Thick rope laces (shirabe) connecting the two heads -->
            <path d="M 25 20 L 25 80 M 75 20 L 75 80 M 25 20 L 75 80 M 75 20 L 25 80 M 50 20 L 50 80 M 25 20 L 50 80 M 75 20 L 50 80 M 25 80 L 50 20 M 75 80 L 50 20" stroke="#fef08a" stroke-width="1.2" opacity="0.8" filter="drop-shadow(0.5px 1px 1px rgba(0,0,0,0.3))"/>
            
            <!-- Sliding leather tuning collars (buba) on ropes -->
            <rect x="35" y="32" width="4" height="6" rx="1" fill="#7c2d12" stroke="#451a03" stroke-width="0.5"/>
            <rect x="61" y="32" width="4" height="6" rx="1" fill="#7c2d12" stroke="#451a03" stroke-width="0.5"/>
            <rect x="48" y="62" width="4" height="6" rx="1" fill="#7c2d12" stroke="#451a03" stroke-width="0.5"/>
            <rect x="35" y="62" width="4" height="6" rx="1" fill="#7c2d12" stroke="#451a03" stroke-width="0.5"/>
            
            <!-- Left head (Gungpyeon, thicker white/cream hide) -->
            <ellipse cx="50" cy="20" rx="26" ry="7" fill="#fdf3e7" stroke="#ad845b" stroke-width="2" filter="drop-shadow(0px -1px 2px rgba(0,0,0,0.3))"/>
            <ellipse cx="50" cy="20" rx="22" ry="5.5" fill="none" stroke="#e3be96" stroke-width="0.8" opacity="0.6"/>
            
            <!-- Right head (Yeolpyeon, thinner yellowish hide) -->
            <ellipse cx="50" cy="80" rx="26" ry="7" fill="#f5caa0" stroke="#8a5b30" stroke-width="2" filter="drop-shadow(0px 1px 2px rgba(0,0,0,0.3))"/>
            <ellipse cx="50" cy="80" rx="22" ry="5.5" fill="none" stroke="#ca9463" stroke-width="0.8" opacity="0.6"/>
            
            <!-- Central waist cord band -->
            <rect x="44" y="47" width="12" height="6" rx="1.5" fill="#18181b" stroke="#27272a" stroke-width="0.5"/>
        `;
  } else if (instrument === 'udu') {
    shapes = `
            <!-- Heavy bottom shadow -->
            <circle cx="50" cy="56" r="44" fill="#020617" opacity="0.7" filter="blur(3.5px)"/>
            
            <!-- Elegant clay pot body -->
            <path d="M 50 16 Q 22 25, 22 58 Q 22 92, 50 92 Q 78 92, 78 58 Q 78 25, 50 16 Z" fill="url(#skin-${id})" stroke="#1c0d02" stroke-width="1.8" filter="drop-shadow(0 2px 3.5px rgba(0,0,0,0.45))"/>
            
            <!-- Flared Pot Neck/Rim -->
            <path d="M 50 16 Q 42 16, 42 8 Q 42 5, 50 5 Q 58 5, 58 8 Q 58 16, 50 16 Z" fill="url(#skin-${id})" stroke="#1c0d02" stroke-width="1.8"/>
            <ellipse cx="50" cy="7" rx="6" ry="2" fill="#090302" stroke="#1c0d02" stroke-width="0.8"/>
            
            <!-- Traditional painted white/ochre decorative rings around the belly -->
            <path d="M 23 48 Q 50 58, 77 48" fill="none" stroke="#fef08a" stroke-width="1.2" opacity="0.35"/>
            <path d="M 22 54 Q 50 64, 78 54" fill="none" stroke="#fef08a" stroke-width="1.8" opacity="0.35"/>
            
            <!-- Side Hole (resonant chamber) with shaded interior depth -->
            <ellipse cx="36" cy="46" rx="9.5" ry="7.5" fill="#090302" stroke="#451a03" stroke-width="1.5" transform="rotate(-15, 36, 46)" filter="drop-shadow(1px 2px 1.5px rgba(0,0,0,0.5))"/>
            <ellipse cx="35" cy="45.5" rx="8" ry="6" fill="#040100"/>
            
            <!-- Belly highlight -->
            <ellipse cx="62" cy="40" rx="6" ry="12" fill="#ffffff" opacity="0.12" transform="rotate(-25, 62, 40)"/>
            
            <!-- Ambient 3D clay pot overlay -->
            <path d="M 50 16 Q 22 25, 22 58 Q 22 92, 50 92 Q 78 92, 78 58 Q 78 25, 50 16 Z" fill="url(#overlay-${id})" opacity="0.9"/>
        `;
  } else if (instrument === 'kundu') {
    shapes = `
            <circle cx="50" cy="51" r="48" fill="#020617" opacity="0.5" filter="blur(2px)"/>
            <path d="M 12 25 C 2 30, 2 70, 12 75 Z" fill="url(#skin-${id})" stroke="#271305" stroke-width="1.5"/>
            <path d="M 88 25 C 98 30, 98 70, 88 75 Z" fill="url(#skin-${id})" stroke="#271305" stroke-width="1.5"/>
            <circle cx="50" cy="50" r="43" fill="url(#skin-${id})" stroke="#1e1b18" stroke-width="1.5"/>
            <circle cx="50" cy="50" r="43" fill="url(#overlay-${id})"/>
            <circle cx="50" cy="50" r="39" fill="none" stroke="#4a3628" stroke-width="1.5" stroke-dasharray="3, 4" opacity="0.6"/>
        `;
  } else if (instrument === 'lions_roar') {
    shapes = `
            <circle cx="50" cy="51" r="48" fill="#020617" opacity="0.6" filter="blur(2px)"/>
            <circle cx="50" cy="50" r="47.5" fill="none" stroke="#5c4033" stroke-width="3"/>
            <circle cx="50" cy="50" r="44.5" fill="url(#skin-${id})"/>
            <circle cx="50" cy="50" r="5" fill="url(#chrome-${id})" stroke="#0f172a" stroke-width="0.8"/>
            <circle cx="50" cy="50" r="2" fill="#020617"/>
            <path d="M 50 50 Q 60 40, 68 52 T 85 45" fill="none" stroke="#a27b5c" stroke-width="4" stroke-dasharray="1.5, 1.5" stroke-linecap="round" filter="drop-shadow(0px 2px 2px rgba(0,0,0,0.5))"/>
            <circle cx="50" cy="50" r="44.5" fill="url(#overlay-${id})" opacity="0.5"/>
        `;
  } else if (instrument === 'chocalho') {
    // Highly detailed Brazilian Chocalho (shaker with metal jingles)
    let jingles = '';
    const rows = [24, 42, 60, 78];
    rows.forEach((y, rowIndex) => {
      // Draw the metal rod
      jingles += `<line x1="26" y1="${y}" x2="74" y2="${y}" stroke="url(#chrome-${id})" stroke-width="1.8" filter="drop-shadow(0 1px 1px rgba(0,0,0,0.35))"/>`;
      // Draw 3 pairs of metallic pratinelas (jingles) on each rod
      const xPositions = [35, 50, 65];
      xPositions.forEach((x, colIndex) => {
        const isGold = (rowIndex + colIndex) % 2 === 0;
        const fillJingle = isGold ? '#fbbf24' : '#cbd5e1';
        const strokeJingle = isGold ? '#78350f' : '#475569';
        const innerFill = isGold ? '#d97706' : '#94a3b8';

        jingles += `
          <!-- Jingle Pair Left Cup -->
          <ellipse cx="${x - 3}" cy="${y}" rx="5.5" ry="7" fill="${fillJingle}" stroke="${strokeJingle}" stroke-width="0.6" filter="drop-shadow(-1px 1.5px 1.5px rgba(0,0,0,0.4))"/>
          <ellipse cx="${x - 4}" cy="${y}" rx="3" ry="5.5" fill="${innerFill}" opacity="0.8"/>
          <circle cx="${x - 3}" cy="${y}" r="0.8" fill="#0f172a"/>
          
          <!-- Jingle Pair Right Cup (overlapping) -->
          <ellipse cx="${x + 3}" cy="${y}" rx="5.5" ry="7" fill="${fillJingle}" stroke="${strokeJingle}" stroke-width="0.6" filter="drop-shadow(1px 1.5px 1.5px rgba(0,0,0,0.4))"/>
          <ellipse cx="${x + 2}" cy="${y}" rx="3" ry="5.5" fill="${innerFill}" opacity="0.8"/>
          <circle cx="${x + 3}" cy="${y}" r="0.8" fill="#0f172a"/>
        `;
      });
    });

    shapes = `
            <!-- Heavy bottom shadow -->
            <rect x="18" y="10" width="64" height="82" rx="4" fill="#020617" opacity="0.6" filter="blur(3px)"/>
            
            <!-- Thick aluminum frame (outer structure) -->
            <rect x="22" y="8" width="56" height="84" rx="3" fill="none" stroke="url(#chrome-${id})" stroke-width="3" filter="drop-shadow(0 2px 3px rgba(0,0,0,0.4))"/>
            
            <!-- Left and Right polished mahogany wood grip handles -->
            <rect x="16" y="12" width="7" height="76" rx="3.5" fill="url(#skin-${id})" stroke="#1c0d02" stroke-width="1.2" filter="drop-shadow(-2px 1.5px 2px rgba(0,0,0,0.45))"/>
            <rect x="77" y="12" width="7" height="76" rx="3.5" fill="url(#skin-${id})" stroke="#1c0d02" stroke-width="1.2" filter="drop-shadow(2px 1.5px 2px rgba(0,0,0,0.45))"/>
            
            <!-- Handle grip wrap lines -->
            <path d="M 16 25 L 23 25 M 16 38 L 23 38 M 16 50 L 23 50 M 16 62 L 23 62 M 16 75 L 23 75" stroke="#1c0d02" stroke-width="0.8" opacity="0.4"/>
            <path d="M 77 25 L 84 25 M 77 38 L 84 38 M 77 50 L 84 50 M 77 62 L 84 62 M 77 75 L 84 75" stroke="#1c0d02" stroke-width="0.8" opacity="0.4"/>
            
            <!-- Shiny steel cross struts at top and bottom -->
            <rect x="22" y="12" width="56" height="4" fill="url(#chrome-${id})" stroke="#1e293b" stroke-width="0.5"/>
            <rect x="22" y="84" width="56" height="4" fill="url(#chrome-${id})" stroke="#1e293b" stroke-width="0.5"/>
            
            <!-- Rows of jingles -->
            ${jingles}
            
            <!-- Ambient 3D shading of handles -->
            <rect x="16" y="12" width="7" height="76" rx="3.5" fill="url(#overlay-${id})" opacity="0.4"/>
            <rect x="77" y="12" width="7" height="76" rx="3.5" fill="url(#overlay-${id})" opacity="0.4"/>
        `;
  } else if (instrument === 'handpan') {
    shapes = `
            <circle cx="50" cy="51.5" r="48" fill="#020617" opacity="0.7" filter="blur(2.5px)"/>
            <circle cx="50" cy="50" r="48" fill="url(#skin-${id})"/>
            <circle cx="50" cy="50" r="42" fill="none" stroke="#cbd5e1" stroke-width="0.4" opacity="0.15"/>
            <ellipse cx="50" cy="50" rx="9" ry="7.5" fill="none" stroke="#0f172a" stroke-width="1.2" opacity="0.8"/>
            <circle cx="50" cy="50" r="2.2" fill="url(#chrome-${id})" stroke="#0f172a" stroke-width="0.5"/>
            <ellipse cx="50" cy="20" rx="7" ry="5" fill="#0f172a" opacity="0.3"/><circle cx="50" cy="20" r="1" fill="#cbd5e1" opacity="0.8"/>
            <ellipse cx="50" cy="80" rx="7" ry="5" fill="#0f172a" opacity="0.3"/><circle cx="50" cy="80" r="1" fill="#cbd5e1" opacity="0.8"/>
            <ellipse cx="20" cy="50" rx="5" ry="7" fill="#0f172a" opacity="0.3"/><circle cx="20" cy="50" r="1" fill="#cbd5e1" opacity="0.8"/>
            <ellipse cx="80" cy="50" rx="5" ry="7" fill="#0f172a" opacity="0.3"/><circle cx="80" cy="50" r="1" fill="#cbd5e1" opacity="0.8"/>
            <circle cx="50" cy="50" r="48" fill="url(#overlay-${id})" opacity="1.3"/>
        `;
  } else if (instrument === 'steelpan') {
    shapes = `
            <circle cx="50" cy="51.5" r="48" fill="#020617" opacity="0.6" filter="blur(2px)"/>
            <circle cx="50" cy="50" r="48" fill="url(#skin-${id})"/>
            <circle cx="50" cy="50" r="22" fill="none" stroke="#64748b" stroke-width="0.8" opacity="0.4" stroke-dasharray="2, 4"/>
            <line x1="50" y1="2" x2="50" y2="98" stroke="#64748b" stroke-width="0.5" opacity="0.3"/>
            <line x1="2" y1="50" x2="98" y2="50" stroke="#64748b" stroke-width="0.5" opacity="0.3"/>
            <ellipse cx="50" cy="12" rx="6" ry="4" fill="#0f172a" opacity="0.25"/><circle cx="50" cy="12" r="1" fill="#cbd5e1" opacity="0.8"/>
            <ellipse cx="50" cy="88" rx="6" ry="4" fill="#0f172a" opacity="0.25"/><circle cx="50" cy="88" r="1" fill="#cbd5e1" opacity="0.8"/>
            <ellipse cx="12" cy="50" rx="4" ry="6" fill="#0f172a" opacity="0.25"/><circle cx="12" cy="50" r="1" fill="#cbd5e1" opacity="0.8"/>
            <ellipse cx="88" cy="50" rx="4" ry="6" fill="#0f172a" opacity="0.25"/><circle cx="88" cy="50" r="1" fill="#cbd5e1" opacity="0.8"/>
            <circle cx="50" cy="50" r="47.5" fill="none" stroke="url(#chrome-${id})" stroke-width="3"/>
            <circle cx="50" cy="50" r="47.5" fill="url(#overlay-${id})" opacity="1.2"/>
        `;
  } else if (instrument === 'waterphone') {
    // Beautiful top-down 3D Waterphone
    let tines = '';
    const numTines = 18;
    for (let i = 0; i < numTines; i++) {
      const angle = (i * 360) / numTines;
      const rad = (angle * Math.PI) / 180;
      // Tines vary in length to represent different pitches
      const len = 12 + Math.abs(Math.sin(i * 1.5)) * 14;
      const startR = 30; // Starts at reservoir outer wall
      const endR = startR + len;
      const x1 = 50 + startR * Math.cos(rad);
      const y1 = 50 + startR * Math.sin(rad);
      const x2 = 50 + endR * Math.cos(rad);
      const y2 = 50 + endR * Math.sin(rad);

      tines += `
        <!-- Golden Brass Tine -->
        <line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#fbbf24" stroke-width="1.8" stroke-linecap="round" filter="drop-shadow(1px 2px 1.5px rgba(0,0,0,0.4))"/>
        <!-- Hammered Tip Bead -->
        <circle cx="${x2}" cy="${y2}" r="1.8" fill="#f59e0b" stroke="#78350f" stroke-width="0.5"/>
      `;
    }
    shapes = `
            <!-- Heavy bottom shadow -->
            <circle cx="50" cy="53" r="46" fill="#020617" opacity="0.65" filter="blur(3px)"/>
            
            <!-- Radiating Brass Tines -->
            ${tines}
            
            <!-- Central Bronze Reservoir Bowl (The Water Basin) -->
            <circle cx="50" cy="50" r="30" fill="url(#chrome-${id})" stroke="#451a03" stroke-width="2" filter="drop-shadow(0 2px 3px rgba(0,0,0,0.45))"/>
            
            <!-- Deep Water Reservoir interior with glowing blue water and ripple layers -->
            <circle cx="50" cy="50" r="23" fill="#0284c7" stroke="#0369a1" stroke-width="1"/>
            <circle cx="50" cy="50" r="23" fill="url(#overlay-${id})" opacity="0.4"/>
            <!-- Concentric Water Ripples -->
            <circle cx="50" cy="50" r="17" fill="none" stroke="#e0f2fe" stroke-width="0.8" opacity="0.4" stroke-dasharray="8, 4"/>
            <circle cx="50" cy="50" r="11" fill="none" stroke="#e0f2fe" stroke-width="0.5" opacity="0.6" stroke-dasharray="4, 3"/>
            
            <!-- Central Golden Column/Filling Spout (Neck) -->
            <circle cx="50" cy="50" r="6" fill="#ca8a04" stroke="#451a03" stroke-width="1.2" filter="drop-shadow(0px 1.5px 2px rgba(0,0,0,0.4))"/>
            <circle cx="50" cy="50" r="2" fill="#1e293b"/>
            
            <!-- Shiny highlights on the brass reservoir surface -->
            <path d="M 28 32 A 26 26 0 0 1 32 28" fill="none" stroke="#ffffff" stroke-width="1.5" opacity="0.25" stroke-linecap="round"/>
            
            <!-- Ambient 3D sphere gradient overlay -->
            <circle cx="50" cy="50" r="30" fill="url(#overlay-${id})" opacity="0.8"/>
        `;
  } else if (instrument === 'vibraslap') {
    // Premium 3D Wooden & Chrome Vibraslap
    shapes = `
            <!-- Backdrop drop shadow -->
            <path d="M 22 84 L 52 19 L 82 69" fill="none" stroke="#020617" stroke-width="8" opacity="0.3" filter="blur(3.5px)"/>
            
            <!-- Chrome-Plated Spring Steel Wire Rod -->
            <path d="M 20 80 L 50 15 L 80 65" fill="none" stroke="url(#chrome-${id})" stroke-width="3.5" stroke-linecap="round" filter="drop-shadow(0px 2px 2px rgba(0,0,0,0.4))"/>
            
            <!-- Steel Winding Elbow Coil (Tension spring details at the corner) -->
            <circle cx="50" cy="15" r="4.5" fill="none" stroke="#94a3b8" stroke-width="2.5" opacity="0.8"/>
            <path d="M 46 13 Q 50 10, 54 13" fill="none" stroke="#cbd5e1" stroke-width="1.8"/>
            
            <!-- Wooden Strike Ball (Turned cherry wood with grain & highlights) -->
            <circle cx="20" cy="80" r="10.5" fill="url(#skin-${id})" stroke="#1c0d02" stroke-width="1.5" filter="drop-shadow(-2px 2.5px 3px rgba(0,0,0,0.5))"/>
            <!-- Ball wood lines -->
            <path d="M 14 76 Q 20 74, 26 76 M 12 80 Q 20 78, 28 80 M 14 84 Q 20 82, 26 84" fill="none" stroke="#271305" stroke-width="0.5" opacity="0.25"/>
            <circle cx="18" cy="77" r="3" fill="#ffffff" opacity="0.12"/>
            
            <!-- Dynamic angled Wooden Resonator Box (holding rattle teeth) -->
            <g transform="rotate(-15, 79, 66)">
              <!-- Box shadow -->
              <rect x="66" y="48" width="24" height="28" rx="4" fill="#020617" opacity="0.3" filter="blur(1.5px)"/>
              
              <!-- Wooden Box outer body -->
              <rect x="68" y="50" width="22" height="26" rx="3" fill="url(#skin-${id})" stroke="#1c0d02" stroke-width="1.5"/>
              
              <!-- Wood texture -->
              <line x1="70" y1="53" x2="88" y2="53" stroke="#271305" stroke-width="0.5" opacity="0.2"/>
              <line x1="70" y1="73" x2="88" y2="73" stroke="#271305" stroke-width="0.5" opacity="0.2"/>
              
              <!-- Sound Chamber Mouth Slit (dark cavity) -->
              <rect x="71" y="66" width="16" height="5" rx="1" fill="#0c0402" stroke="#1c0d02" stroke-width="0.5"/>
              
              <!-- Inside Metallic Rattle Pin Tips (teeth visible inside cavity) -->
              <circle cx="74" cy="68.5" r="0.8" fill="#e2e8f0"/>
              <circle cx="76.5" cy="68.5" r="0.8" fill="#cbd5e1"/>
              <circle cx="79" cy="68.5" r="0.8" fill="#94a3b8"/>
              <circle cx="81.5" cy="68.5" r="0.8" fill="#e2e8f0"/>
              <circle cx="84" cy="68.5" r="0.8" fill="#cbd5e1"/>
              
              <!-- Golden Wing Adjustment Nut / Thumb Screw on top -->
              <path d="M 75 42 Q 79 38, 79 46 Q 79 50, 75 48 Z" fill="#fbbf24" stroke="#78350f" stroke-width="0.5"/>
              <path d="M 83 42 Q 79 38, 79 46 Q 79 50, 83 48 Z" fill="#fbbf24" stroke="#78350f" stroke-width="0.5"/>
              <circle cx="79" cy="46" r="1.8" fill="url(#chrome-${id})" stroke="#1e293b" stroke-width="0.5"/>
              
              <!-- 3D Overlays for the box -->
              <rect x="68" y="50" width="22" height="26" rx="3" fill="url(#overlay-${id})" opacity="0.6"/>
              <path d="M 68 51 L 90 51" stroke="#ffffff" stroke-width="0.5" opacity="0.12"/>
            </g>
        `;
  } else if (instrument === 'spring_drum' || instrument === 'thunderdrum') {
    // Beautiful top-down Spring/Thunder Drum facing the user
    shapes = `
            <!-- Heavy bottom shadow -->
            <circle cx="50" cy="50" r="41" fill="#020617" opacity="0.6" filter="blur(2.5px)"/>
            
            <!-- Metallic outer rim cylinder casing -->
            <circle cx="50" cy="50" r="40" fill="#2d3748" stroke="url(#chrome-${id})" stroke-width="3"/>
            <circle cx="50" cy="50" r="39" fill="none" stroke="#1a202c" stroke-width="1"/>
            
            <!-- Drum Head (Goatskin / Mylar skin) -->
            <circle cx="50" cy="50" r="37" fill="url(#skin-${id})"/>
            <circle cx="50" cy="50" r="37" fill="url(#overlay-${id})" opacity="0.5"/>
            
            <!-- Concentric skin tension lines -->
            <circle cx="50" cy="50" r="30" fill="none" stroke="#713f12" stroke-width="0.8" opacity="0.25"/>
            <circle cx="50" cy="50" r="20" fill="none" stroke="#713f12" stroke-width="0.8" opacity="0.15"/>
            
            <!-- Tension Lugs / Screws on the rim facing user -->
            <circle cx="15" cy="50" r="2" fill="url(#chrome-${id})" stroke="#1a202c" stroke-width="0.4"/>
            <circle cx="85" cy="50" r="2" fill="url(#chrome-${id})" stroke="#1a202c" stroke-width="0.4"/>
            <circle cx="50" cy="15" r="2" fill="url(#chrome-${id})" stroke="#1a202c" stroke-width="0.4"/>
            <circle cx="50" cy="85" r="2" fill="url(#chrome-${id})" stroke="#1a202c" stroke-width="0.4"/>
            <circle cx="25" cy="25" r="2" fill="url(#chrome-${id})" stroke="#1a202c" stroke-width="0.4"/>
            <circle cx="75" cy="25" r="2" fill="url(#chrome-${id})" stroke="#1a202c" stroke-width="0.4"/>
            <circle cx="25" cy="75" r="2" fill="url(#chrome-${id})" stroke="#1a202c" stroke-width="0.4"/>
            <circle cx="75" cy="75" r="2" fill="url(#chrome-${id})" stroke="#1a202c" stroke-width="0.4"/>
            
            <!-- Center Grommet -->
            <circle cx="50" cy="50" r="6" fill="url(#chrome-${id})" stroke="#0f172a" stroke-width="0.8"/>
            <circle cx="50" cy="50" r="3.5" fill="#0f172a"/>
            
            <!-- Spiral spring coil coming towards the user -->
            <g filter="drop-shadow(0 4px 5px rgba(0,0,0,0.6))">
              <!-- Inner-most loop -->
              <path d="M 50 50 Q 56 46, 52 40 Q 44 38, 42 46 Q 44 54, 52 52 Q 62 48, 58 34" fill="none" stroke="url(#chrome-${id})" stroke-width="2.2" stroke-linecap="round"/>
              <!-- Mid loop -->
              <path d="M 58 34 Q 50 20, 36 28 Q 22 38, 30 56 Q 40 70, 58 64" fill="none" stroke="url(#chrome-${id})" stroke-width="2.8" stroke-linecap="round"/>
              <!-- Outer loop stretching out -->
              <path d="M 58 64 Q 78 56, 82 34 Q 84 10, 60 14" fill="none" stroke="url(#chrome-${id})" stroke-width="3.4" stroke-linecap="round"/>
              <!-- High-gloss shine on the spring tip -->
              <circle cx="60" cy="14" r="1.5" fill="#ffffff" opacity="0.8"/>
            </g>
        `;
  } else if (instrument === 'thongophone') {
    // Highly detailed PVC Thongophone with colourful tubes and striker paddle
    let pipes = '';
    const pipeData = [
      { x: 22, height: 72, color: '#2563eb', stroke: '#1d4ed8', note: 'C' },
      { x: 36, height: 62, color: '#16a34a', stroke: '#15803d', note: 'E' },
      { x: 50, height: 52, color: '#ea580c', stroke: '#c2410c', note: 'G' },
      { x: 64, height: 44, color: '#dc2626', stroke: '#b91c1c', note: 'A' },
      { x: 78, height: 36, color: '#7c3aed', stroke: '#6d28d9', note: 'C' }
    ];

    pipeData.forEach((p) => {
      // Draw 3D pipe from bottom (y=90) up to its respective height
      const yBottom = 92;
      const yTop = yBottom - p.height;

      pipes += `
        <!-- Pipe Drop Shadow -->
        <rect x="${p.x - 5.5}" y="${yTop}" width="11" height="${p.height}" rx="2" fill="#020617" opacity="0.3" filter="blur(1.5px)"/>
        
        <!-- PVC Pipe Body -->
        <rect x="${p.x - 5}" y="${yTop}" width="10" height="${p.height}" rx="1.5" fill="${p.color}" stroke="${p.stroke}" stroke-width="1"/>
        
        <!-- Pipe Gloss Highlight -->
        <rect x="${p.x - 4}" y="${yTop}" width="2.5" height="${p.height}" fill="#ffffff" opacity="0.25"/>
        <rect x="${p.x + 1.5}" y="${yTop}" width="1.5" height="${p.height}" fill="#000000" opacity="0.12"/>
        
        <!-- Hollow Pipe Rim at Top (3D angled ellipse) -->
        <ellipse cx="${p.x}" cy="${yTop}" rx="5" ry="1.8" fill="${p.stroke}" stroke="${p.stroke}" stroke-width="0.5"/>
        <ellipse cx="${p.x}" cy="${yTop}" rx="3.5" ry="1.2" fill="#090d16"/>
        
        <!-- Note Labels -->
        <text x="${p.x}" y="${yBottom - 6}" fill="#ffffff" font-family="monospace" font-size="5.5" font-weight="bold" text-anchor="middle" opacity="0.75">${p.note}</text>
      `;
    });

    shapes = `
            <circle cx="50" cy="50" r="47" fill="#1e293b" opacity="0.08"/>
            
            <!-- Heavy horizontal structural support frames holding pipes (Industrial iron bars) -->
            <rect x="12" y="38" width="76" height="5" rx="1.5" fill="#334155" stroke="#1e293b" stroke-width="1" filter="drop-shadow(0 2px 2px rgba(0,0,0,0.4))"/>
            <rect x="12" y="72" width="76" height="5" rx="1.5" fill="#334155" stroke="#1e293b" stroke-width="1" filter="drop-shadow(0 2px 2px rgba(0,0,0,0.4))"/>
            <!-- Frame bolts -->
            <circle cx="15" cy="40.5" r="1" fill="#cbd5e1"/>
            <circle cx="85" cy="40.5" r="1" fill="#cbd5e1"/>
            <circle cx="15" cy="74.5" r="1" fill="#cbd5e1"/>
            <circle cx="85" cy="74.5" r="1" fill="#cbd5e1"/>
            
            <!-- Upgraded Pipes -->
            ${pipes}
            
            <!-- Flat Leather Striker Paddle ("Thong") lying across the middle -->
            <g transform="translate(48, 45) rotate(22)" filter="drop-shadow(1px 2px 2px rgba(0,0,0,0.45))">
              <!-- Wooden Handle -->
              <rect x="-1" y="5" width="2" height="32" rx="0.5" fill="url(#skin-${id})" stroke="#1c0d02" stroke-width="0.5"/>
              <!-- Flat Rubber/EVA foam pad -->
              <path d="M -5 -8 C -5 -12, 5 -12, 5 -8 L 4 5 C 4 8, -4 8, -4 5 Z" fill="#ec4899" stroke="#be185d" stroke-width="0.8"/>
              <path d="M -3 -6 L 3 -6 M -3 -3 L 3 -3" stroke="#fbcfe8" stroke-width="0.6" opacity="0.5"/>
            </g>
        `;
  } else if (instrument === 'gubguba') {
    shapes = `
            <circle cx="50" cy="52" r="48" fill="#020617" opacity="0.6" filter="blur(2.5px)"/>
            <circle cx="50" cy="50" r="48" fill="url(#skin-${id})"/>
            <circle cx="50" cy="50" r="40" fill="url(#skin-${id})" filter="brightness(1.1)" stroke="#271305" stroke-width="1.5"/>
            <circle cx="50" cy="50" r="4" fill="url(#chrome-${id})" stroke="#0f172a" stroke-width="0.5"/>
            <line x1="50" y1="50" x2="68" y2="28" stroke="#f1f5f9" stroke-width="1.2" filter="drop-shadow(0 1px 1.5px rgba(0,0,0,0.4))"/>
            <rect x="63" y="24" width="10" height="7" rx="1.5" fill="url(#skin-${id})" stroke="#271305" stroke-width="1" transform="rotate(35, 68, 28)"/>
            <circle cx="50" cy="50" r="48" fill="none" stroke="#4a1d0f" stroke-width="2.5"/>
            <circle cx="50" cy="50" r="40" fill="url(#overlay-${id})" opacity="0.6"/>
        `;
  } else if (instrument === 'boomwhackers') {
    // Beautiful single-tube boomwhacker stick based on colorType or drumId
    let tubeColor = '#ef4444';
    let tubeStroke = '#b91c1c';
    let tubeHollow = '#7f1d1d';
    let noteText = 'C';

    if (colorType === 'green' || String(id).includes('1')) {
      tubeColor = '#22c55e';
      tubeStroke = '#15803d';
      tubeHollow = '#14532d';
      noteText = 'G';
    } else if (colorType === 'yellow' || String(id).includes('2')) {
      tubeColor = '#eab308';
      tubeStroke = '#a16207';
      tubeHollow = '#713f12';
      noteText = 'E';
    }

    shapes = `
            <!-- Heavy bottom shadow -->
            <ellipse cx="50" cy="94" rx="20" ry="4" fill="#020617" opacity="0.45" filter="blur(1.5px)"/>
            
            <g transform="rotate(-15, 50, 50)">
              <!-- Outer Shadow -->
              <rect x="40" y="8" width="20" height="84" rx="3" fill="#020617" opacity="0.25" filter="blur(1px)"/>
              <!-- Tube Body -->
              <rect x="40" y="6" width="20" height="84" rx="3" fill="${tubeColor}" stroke="${tubeStroke}" stroke-width="1.5"/>
              <!-- Gloss Highlight for 3D rounded shine -->
              <rect x="42" y="6" width="5" height="84" fill="#ffffff" opacity="0.25"/>
              <rect x="55" y="6" width="3" height="84" fill="#000000" opacity="0.12"/>
              
              <!-- Black Pitch Label Band -->
              <rect x="40" y="40" width="20" height="20" fill="#1e293b"/>
              <!-- White circle inside the band for branding -->
              <circle cx="50" cy="50" r="7" fill="#ffffff" opacity="0.1"/>
              <text x="50" y="54" fill="#ffffff" font-family="'Courier New', Courier, monospace" font-size="11" font-weight="bold" text-anchor="middle">${noteText}</text>
              
              <!-- Hollow End Openings with 3D depth perspective -->
              <!-- Top opening -->
              <ellipse cx="50" cy="6" rx="10" ry="3.5" fill="${tubeHollow}" stroke="${tubeStroke}" stroke-width="0.8"/>
              <ellipse cx="50" cy="6" rx="8" ry="2.5" fill="#090d16" opacity="0.6"/>
              
              <!-- Bottom opening -->
              <ellipse cx="50" cy="90" rx="10" ry="3.5" fill="${tubeHollow}"/>
            </g>
        `;
  } else if (instrument === 'bell_tree') {
    // Highly detailed 3D nesting Bell Tree with polished brass bowls and mahogany base
    let bowlsHtml = '';
    const numBells = 9;
    for (let i = 0; i < numBells; i++) {
      // Top bells are smaller, bottom bells are larger
      const width = 24 + i * 5.5; // 24 to 68
      const height = 6 + i * 1.5; // 6 to 18
      const y = 20 + i * 6.5; // 20 to 72
      const rx = width / 2;
      const ry = height / 2.5;

      const fillGold = i % 2 === 0 ? '#fbbf24' : '#f59e0b';
      const strokeGold = '#78350f';

      bowlsHtml += `
        <!-- Bell ${i} Drop Shadow -->
        <path d="M ${50 - rx} ${y} C ${50 - rx} ${y - ry}, ${50 + rx} ${y - ry}, ${50 + rx} ${y} L ${50 + rx - 2} ${y + height} C ${50 + rx - 2} ${y + height + 3}, ${50 - rx + 2} ${y + height + 3}, ${50 - rx + 2} ${y + height} Z" fill="#020617" opacity="0.18" filter="blur(1px)"/>
        
        <!-- Bell ${i} Brass Cup -->
        <path d="M ${50 - rx} ${y} C ${50 - rx} ${y - ry}, ${50 + rx} ${y - ry}, ${50 + rx} ${y} L ${50 + rx - 2} ${y + height} C ${50 + rx - 2} ${y + height + 2}, ${50 - rx + 2} ${y + height + 2}, ${50 - rx + 2} ${y + height} Z" fill="${fillGold}" stroke="${strokeGold}" stroke-width="1.2" filter="drop-shadow(0 1.5px 2px rgba(0,0,0,0.3))"/>
        
        <!-- Bell Inner opening/rim outline -->
        <ellipse cx="50" cy="${y + height}" rx="${rx - 2}" ry="${ry - 1}" fill="none" stroke="#ca8a04" stroke-width="0.5" opacity="0.6"/>
        
        <!-- Bell Specular Highlight -->
        <path d="M ${50 - rx + 3} ${y + 2} Q 50 ${y - ry + 4}, ${50 + rx - 3} ${y + 2}" fill="none" stroke="#ffffff" stroke-width="1" opacity="0.25"/>
      `;
    }

    shapes = `
            <!-- Heavy bottom shadow for base -->
            <rect x="22" y="86" width="56" height="10" rx="3" fill="#020617" opacity="0.65" filter="blur(2.5px)"/>
            
            <!-- Central steel mounting rod -->
            <line x1="50" y1="8" x2="50" y2="88" stroke="url(#chrome-${id})" stroke-width="3" filter="drop-shadow(1px 0px 1px rgba(0,0,0,0.3))"/>
            <circle cx="50" cy="8" r="2.2" fill="url(#chrome-${id})" stroke="#1e293b" stroke-width="0.5"/>
            
            <!-- Upgraded graduated brass bowls -->
            ${bowlsHtml}
            
            <!-- Solid turned mahogany heavy base block -->
            <rect x="24" y="84" width="52" height="10" rx="2" fill="url(#skin-${id})" stroke="#1c0d02" stroke-width="1.8" filter="drop-shadow(0 2px 3px rgba(0,0,0,0.45))"/>
            <!-- Base wood grain lines -->
            <line x1="26" y1="87" x2="74" y2="87" stroke="#1c0d02" stroke-width="0.5" opacity="0.2"/>
            <line x1="26" y1="91" x2="74" y2="91" stroke="#1c0d02" stroke-width="0.5" opacity="0.2"/>
            
            <!-- Base shiny metal mounting washer and collar -->
            <rect x="44" y="81" width="12" height="3" rx="0.5" fill="url(#chrome-${id})" stroke="#1e293b" stroke-width="0.8"/>
            <circle cx="50" cy="82.5" r="1" fill="#020617"/>
            
            <!-- Ambient 3D gradient cover for wood base -->
            <rect x="24" y="84" width="52" height="10" rx="2" fill="url(#overlay-${id})" opacity="0.5"/>
        `;
  } else if (instrument === 'uchiwadaiko') {
    shapes = `
            <rect x="47" y="45" width="6" height="50" rx="2" fill="url(#skin-${id})" stroke="#271305" stroke-width="1" filter="drop-shadow(0px 2px 2px rgba(0,0,0,0.5))"/>
            <circle cx="50" cy="40" r="39" fill="url(#skin-${id})" filter="brightness(1.3)" stroke="#18181b" stroke-width="2.2" filter="drop-shadow(0px 2px 2.5px rgba(0,0,0,0.4))"/>
            <circle cx="50" cy="40" r="10" fill="#dc2626" opacity="0.85"/>
            <circle cx="50" cy="40" r="38" fill="url(#overlay-${id})" opacity="0.6"/>
        `;
  } else if (instrument === 'oceandrum') {
    let beads = '';
    for (let i = 0; i < 18; i++) {
      const angle = 200 + Math.random() * 140;
      const rad = (angle * Math.PI) / 180;
      const r = 32 + Math.random() * 10;
      const cx = 50 + r * Math.cos(rad);
      const cy = 50 + r * Math.sin(rad);
      beads += `<circle cx="${cx}" cy="${cy}" r="1.2" fill="url(#chrome-${id})" stroke="#334155" stroke-width="0.2"/>`;
    }
    shapes = `
            <circle cx="50" cy="51" r="49" fill="#020617" opacity="0.6" filter="blur(2px)"/>
            <circle cx="50" cy="50" r="48" fill="#5c4033" stroke="#271305" stroke-width="2.5"/>
            <circle cx="50" cy="50" r="44.8" fill="url(#skin-${id})" opacity="0.6" filter="brightness(0.7)"/>
            ${beads}
            <circle cx="50" cy="50" r="44.8" fill="#38bdf8" opacity="0.1"/>
            <circle cx="50" cy="50" r="44.8" fill="url(#overlay-${id})" opacity="1.3"/>
        `;
  } else if (instrument === 'waterdrums') {
    shapes = `
            <circle cx="50" cy="50" r="48" fill="#0f172a" stroke="#475569" stroke-width="2" filter="drop-shadow(0 2px 2px rgba(0,0,0,0.5))"/>
            <circle cx="50" cy="50" r="45.5" fill="#0369a1" filter="brightness(0.6)"/>
            <circle cx="50" cy="50" r="36" fill="none" stroke="#0ea5e9" stroke-width="1" opacity="0.3"/>
            <circle cx="50" cy="50" r="26" fill="none" stroke="#38bdf8" stroke-width="0.8" opacity="0.4"/>
            <circle cx="50" cy="50" r="20" fill="url(#skin-${id})" stroke="#271305" stroke-width="1.5" filter="drop-shadow(0 2px 1.5px rgba(0,0,0,0.5))"/>
            <circle cx="50" cy="50" r="20" fill="url(#overlay-${id})" opacity="1.3"/>
        `;
  } else if (instrument === 'ratchet') {
    // Beautiful highly detailed 3D traditional wooden ratchet (cog rattle)
    let gearTeeth = '';
    const numTeeth = 8;
    for (let i = 0; i < numTeeth; i++) {
      const angle = (i * 360) / numTeeth;
      // Beautiful sharp trapezoidal cog teeth radiating outwards
      gearTeeth += `
        <g transform="rotate(${angle})">
          <path d="M -4 -13 L -2 -21 L 2 -21 L 4 -13 Z" fill="url(#skin-${id})" stroke="#1c0d02" stroke-width="0.8"/>
          <!-- Highlight on gear tooth -->
          <line x1="-1.5" y1="-20.5" x2="1.5" y2="-20.5" stroke="#ffffff" stroke-width="0.4" opacity="0.15"/>
        </g>
      `;
    }

    shapes = `
            <!-- Backdrop shadow -->
            <rect x="18" y="12" width="64" height="76" rx="6" fill="#020617" opacity="0.5" filter="blur(3px)"/>
            
            <!-- Long turned wooden grip handle running vertically -->
            <rect x="46" y="32" width="8" height="58" rx="4" fill="url(#skin-${id})" stroke="#1c0d02" stroke-width="1.5" filter="drop-shadow(2px 2px 2.5px rgba(0,0,0,0.4))"/>
            <!-- Handle grip ridges -->
            <line x1="46" y1="62" x2="54" y2="62" stroke="#1c0d02" stroke-width="0.8" opacity="0.35"/>
            <line x1="46" y1="68" x2="54" y2="68" stroke="#1c0d02" stroke-width="0.8" opacity="0.35"/>
            <line x1="46" y1="74" x2="54" y2="74" stroke="#1c0d02" stroke-width="0.8" opacity="0.35"/>
            <line x1="46" y1="80" x2="54" y2="80" stroke="#1c0d02" stroke-width="0.8" opacity="0.35"/>
            
            <!-- Upgraded detailed center cog gear wheel -->
            <g transform="translate(50, 32)">
              <!-- Gear center shadow -->
              <circle cx="0" cy="0" r="14" fill="#020617" opacity="0.25"/>
              <!-- Gear core body -->
              <circle cx="0" cy="0" r="14" fill="url(#skin-${id})" stroke="#1c0d02" stroke-width="1.5"/>
              <!-- Cog teeth -->
              ${gearTeeth}
              <!-- Metallic center pivot bolt pin -->
              <circle cx="0" cy="0" r="3.5" fill="url(#chrome-${id})" stroke="#1e293b" stroke-width="0.6"/>
              <circle cx="0" cy="0" r="1" fill="#020617"/>
            </g>
            
            <!-- Wooden Outer Frame (u-shaped bracket swinging around handle) -->
            <!-- Back support arm -->
            <path d="M 22 18 L 78 18 L 78 46 L 70 46 L 70 24 L 22 24 Z" fill="url(#skin-${id})" stroke="#1c0d02" stroke-width="1.5" filter="drop-shadow(0 2px 2px rgba(0,0,0,0.35))"/>
            
            <!-- Flexible Birch wood clicking tongue/reed under tension pressing the cog -->
            <path d="M 22 21 C 32 21, 40 24, 46 29" fill="none" stroke="#fef08a" stroke-width="2.5" stroke-linecap="round" filter="drop-shadow(1px 1px 1px rgba(0,0,0,0.4))"/>
            <path d="M 22 21 C 32 21, 40 24, 46 29" fill="none" stroke="#ca8a04" stroke-width="0.8" stroke-linecap="round"/>
            <!-- Fixing rivets on the tongue -->
            <circle cx="25" cy="21" r="1" fill="url(#chrome-${id})" stroke="#1c0d02" stroke-width="0.5"/>
            <circle cx="28" cy="21" r="1" fill="url(#chrome-${id})" stroke="#1c0d02" stroke-width="0.5"/>
            
            <!-- Structural brass weights / corner reinforcements on the frame -->
            <rect x="74" y="14" width="6" height="8" rx="1.5" fill="#eab308" stroke="#854d0e" stroke-width="0.8"/>
            <circle cx="77" cy="18" r="1" fill="#020617"/>
            
            <!-- Ambient lighting covers -->
            <rect x="46" y="32" width="8" height="58" rx="4" fill="url(#overlay-${id})" opacity="0.4"/>
            <g transform="translate(50,32)">
              <circle cx="0" cy="0" r="14" fill="url(#overlay-${id})" opacity="0.5"/>
            </g>
        `;
  } else if (instrument === 'log_drum') {
    shapes = `
            <!-- Heavy bottom shadow -->
            <rect x="8" y="28" width="84" height="48" rx="8" fill="#020617" opacity="0.65" filter="blur(3px)"/>
            
            <!-- Main 3D Cylindrical Log Body -->
            <rect x="12" y="24" width="76" height="44" rx="10" fill="url(#skin-${id})" stroke="#1c0d02" stroke-width="2"/>
            
            <!-- Tree Ring Endcaps (3D perspective) -->
            <ellipse cx="12" cy="46" rx="4" ry="20" fill="#271305" stroke="#1c0d02" stroke-width="1"/>
            <ellipse cx="12" cy="46" rx="2" ry="10" fill="#451a03"/>
            <ellipse cx="88" cy="46" rx="4" ry="20" fill="url(#skin-${id})" stroke="#1c0d02" stroke-width="1"/>
            <ellipse cx="88" cy="46" rx="2" ry="10" fill="#271305"/>
            
            <!-- Rich wood grain textures -->
            <path d="M 16 35 Q 50 32, 84 35" fill="none" stroke="#271305" stroke-width="0.8" opacity="0.3"/>
            <path d="M 16 57 Q 50 60, 84 57" fill="none" stroke="#271305" stroke-width="0.8" opacity="0.3"/>
            
            <!-- Finely carved sound tongue slits (H-shape or elegant dual slit) -->
            <!-- Background slit cutouts (dark void) -->
            <path d="M 22 42 L 46 42 Q 48 42, 48 45 L 48 47 Q 48 50, 46 50 L 22 50 Z" fill="#0c0402" stroke="#1c0d02" stroke-width="1"/>
            <path d="M 78 42 L 54 42 Q 52 42, 52 45 L 52 47 Q 52 50, 54 50 L 78 50 Z" fill="#0c0402" stroke="#1c0d02" stroke-width="1"/>
            <rect x="47.5" y="40" width="5" height="12" rx="1" fill="#0c0402" stroke="#1c0d02" stroke-width="0.8"/>
            
            <!-- 3D highlight on log edges -->
            <path d="M 12 25 L 88 25" stroke="#ffffff" stroke-width="0.8" opacity="0.15"/>
            <rect x="12" y="24" width="76" height="44" rx="10" fill="url(#overlay-${id})" opacity="0.6"/>
        `;
  } else if (instrument === 'temple_blocks') {
    shapes = `
            <!-- Heavy bottom shadow -->
            <path d="M 20 52 C 20 22, 80 22, 80 52 C 80 82, 20 82, 20 52 Z" fill="#020617" opacity="0.7" filter="blur(3px)"/>
            
            <!-- Traditional Ornate Wooden Fish Body (Bulbous with handle hook) -->
            <path d="M 22 50 C 22 24, 78 24, 78 50 C 78 74, 58 78, 50 78 C 42 78, 22 74, 22 50 Z" fill="url(#skin-${id})" stroke="#1c0d02" stroke-width="2.5" filter="drop-shadow(0 2px 3px rgba(0,0,0,0.4))"/>
            
            <!-- Curved stylized handle (Tail hook at the bottom) -->
            <path d="M 42 76 C 42 86, 58 86, 58 76" fill="none" stroke="url(#skin-${id})" stroke-width="6" stroke-linecap="round"/>
            <path d="M 42 76 C 42 86, 58 86, 58 76" fill="none" stroke="#1c0d02" stroke-width="1" stroke-linecap="round"/>
            
            <!-- Prominent carved sound "mouth" slit with rounded bulbous ends -->
            <path d="M 26 48 C 26 36, 74 36, 74 48" fill="none" stroke="#0a0301" stroke-width="5.5" stroke-linecap="round"/>
            <path d="M 26 48 C 26 36, 74 36, 74 48" fill="none" stroke="#7c2d12" stroke-width="1.5" stroke-linecap="round"/>
            
            <!-- Hollow circular nostril cutouts (traditional fish look) -->
            <circle cx="34" cy="36" r="3.2" fill="#0a0301" stroke="#1c0d02" stroke-width="0.8"/>
            <circle cx="66" cy="36" r="3.2" fill="#0a0301" stroke="#1c0d02" stroke-width="0.8"/>
            
            <!-- Traditional scale carvings on the sides -->
            <path d="M 28 54 Q 34 50, 40 54 M 60 54 Q 66 50, 72 54" fill="none" stroke="#1c0d02" stroke-width="1.2" opacity="0.4"/>
            <path d="M 32 60 Q 40 56, 48 60 M 52 60 Q 60 56, 68 60" fill="none" stroke="#1c0d02" stroke-width="1.2" opacity="0.4"/>
            
            <!-- Ambient 3D lighting cover -->
            <path d="M 22 50 C 22 24, 78 24, 78 50 C 78 74, 58 78, 50 78 C 42 78, 22 74, 22 50 Z" fill="url(#overlay-${id})" opacity="0.6"/>
        `;
  } else if (instrument === 'frog_rasp') {
    shapes = `
            <!-- Heavy bottom shadow -->
            <path d="M 28 52 C 28 22, 72 22, 72 52 C 72 72, 28 72, 28 52 Z" fill="#020617" opacity="0.6" filter="blur(3px)"/>
            
            <!-- Carved wooden frog body -->
            <path d="M 30 50 C 30 20, 70 20, 70 50 C 70 74, 58 78, 50 78 C 42 78, 30 74, 30 50 Z" fill="url(#skin-${id})" stroke="#1c0d02" stroke-width="2" filter="drop-shadow(0 2px 3px rgba(0,0,0,0.4))"/>
            
            <!-- Tucked rear wooden legs (3D curves) -->
            <path d="M 30 62 C 22 62, 22 74, 34 74" fill="none" stroke="url(#skin-${id})" stroke-width="4.5" stroke-linecap="round"/>
            <path d="M 30 62 C 22 62, 22 74, 34 74" fill="none" stroke="#1c0d02" stroke-width="1" stroke-linecap="round"/>
            <path d="M 70 62 C 78 62, 78 74, 66 74" fill="none" stroke="url(#skin-${id})" stroke-width="4.5" stroke-linecap="round"/>
            <path d="M 70 62 C 78 62, 78 74, 66 74" fill="none" stroke="#1c0d02" stroke-width="1" stroke-linecap="round"/>
            
            <!-- Stylest wooden feet at the front -->
            <path d="M 40 76 L 38 82 M 43 77 L 42 83" stroke="#1c0d02" stroke-width="2" stroke-linecap="round"/>
            <path d="M 60 76 L 62 82 M 57 77 L 58 83" stroke="#1c0d02" stroke-width="2" stroke-linecap="round"/>
            
            <!-- Large expressive wooden eyes -->
            <circle cx="38" cy="28" r="4.5" fill="url(#skin-${id})" stroke="#1c0d02" stroke-width="1.2"/>
            <circle cx="38" cy="28" r="2.2" fill="#1c0d02"/>
            <circle cx="62" cy="28" r="4.5" fill="url(#skin-${id})" stroke="#1c0d02" stroke-width="1.2"/>
            <circle cx="62" cy="28" r="2.2" fill="#1c0d02"/>
            
            <!-- Hollow mouth chamber slit (where scraper stick goes) -->
            <path d="M 32 46 Q 50 52, 68 46" fill="none" stroke="#0a0301" stroke-width="3" stroke-linecap="round"/>
            
            <!-- Aligned spine ridges (the rasp) -->
            <path d="M 50 25 L 50 65" stroke="#1c0d02" stroke-width="1.8" stroke-dasharray="2.5 3.5" stroke-linecap="round"/>
            <path d="M 46 32 Q 50 28, 54 32" fill="none" stroke="#1c0d02" stroke-width="2" stroke-linecap="round" opacity="0.8"/>
            <path d="M 44 40 Q 50 36, 56 40" fill="none" stroke="#1c0d02" stroke-width="2" stroke-linecap="round" opacity="0.8"/>
            <path d="M 43 48 Q 50 44, 57 48" fill="none" stroke="#1c0d02" stroke-width="2" stroke-linecap="round" opacity="0.8"/>
            <path d="M 44 56 Q 50 52, 56 56" fill="none" stroke="#1c0d02" stroke-width="2" stroke-linecap="round" opacity="0.8"/>
            <path d="M 46 64 Q 50 60, 54 64" fill="none" stroke="#1c0d02" stroke-width="2" stroke-linecap="round" opacity="0.8"/>
            
            <!-- Ambient 3D lighting cover -->
            <path d="M 30 50 C 30 20, 70 20, 70 50 C 70 74, 58 78, 50 78 C 42 78, 30 74, 30 50 Z" fill="url(#overlay-${id})" opacity="0.6"/>
        `;
  } else if (instrument === 'rainstick') {
    // Double spiral thorn pin-points down the body
    let thornPins = '';
    for (let y = 18; y <= 82; y += 4) {
      const angle = (y - 18) * 0.3;
      const xOffset1 = 11 * Math.sin(angle);
      const xOffset2 = 11 * Math.sin(angle + Math.PI);
      thornPins += `<circle cx="${50 + xOffset1}" cy="${y}" r="0.8" fill="#1c0d02" opacity="0.8"/>`;
      thornPins += `<circle cx="${50 + xOffset2}" cy="${y}" r="0.8" fill="#5c4033" opacity="0.5"/>`;
    }

    shapes = `
            <!-- Heavy bottom shadow -->
            <rect x="32" y="12" width="36" height="78" rx="12" fill="#020617" opacity="0.65" filter="blur(2.5px)"/>
            
            <!-- Main Cactus Wood Trunk -->
            <rect x="35" y="10" width="30" height="80" rx="8" fill="url(#skin-${id})" stroke="#1c0d02" stroke-width="2" filter="drop-shadow(0 2px 3px rgba(0,0,0,0.4))"/>
            
            <!-- Fine cactus longitudinal fibers (wood texture) -->
            <path d="M 38 12 L 38 88 M 44 12 L 44 88 M 56 12 L 56 88 M 62 12 L 62 88" fill="none" stroke="#271305" stroke-width="0.5" opacity="0.25"/>
            
            <!-- Spiral Thorn Pins -->
            ${thornPins}
            
            <!-- Decorative Colorful Yarn Bands at Ends -->
            <!-- Top Band -->
            <rect x="34" y="15" width="32" height="6" fill="#dc2626" stroke="#1c0d02" stroke-width="0.5"/>
            <rect x="34" y="21" width="32" height="4" fill="#fbbf24"/>
            <!-- Bottom Band -->
            <rect x="34" y="75" width="32" height="6" fill="#dc2626" stroke="#1c0d02" stroke-width="0.5"/>
            <rect x="34" y="71" width="32" height="4" fill="#0ea5e9"/>
            
            <!-- Ambient 3D Cylinder Overlay -->
            <rect x="35" y="10" width="30" height="80" rx="8" fill="url(#overlay-${id})" opacity="0.7"/>
            <rect x="35" y="10" width="4" height="80" fill="#ffffff" opacity="0.12"/>
        `;
  } else if (instrument === 'kokiriko') {
    // Beautiful curved arch of 12 tightly-knit wood tiles with 3D rotations
    let tiles = '';
    const numTiles = 12;
    for (let i = 0; i < numTiles; i++) {
      // Calculate curve: a smooth sine-wave or circular arc from x=15 to x=85
      const pct = i / (numTiles - 1);
      const angle = pct * Math.PI; // 0 to 180 degrees
      const cx = 50 + 35 * Math.cos(angle + Math.PI); // Arc centered on x=50
      const cy = 68 - 42 * Math.sin(angle); // Elegant hanging arch

      // Rotate each tile to be perpendicular to the arc tangent
      const rotAngle = (pct - 0.5) * -110; // Steeper angle towards the sides

      tiles += `
                <g transform="translate(${cx}, ${cy}) rotate(${rotAngle})">
                    <rect x="-4" y="-14" width="8" height="28" rx="1.5" fill="url(#skin-${id})" stroke="#1c0d02" stroke-width="0.8" filter="drop-shadow(0 1.5px 2px rgba(0,0,0,0.35))"/>
                    <!-- Central binding cord hole -->
                    <circle cx="0" cy="0" r="1.2" fill="#0f172a"/>
                    <!-- Overlay lighting -->
                    <rect x="-4" y="-14" width="8" height="28" rx="1.5" fill="url(#overlay-${id})" opacity="0.4"/>
                </g>
            `;
    }

    shapes = `
            <!-- Heavy bottom shadow for the curve -->
            <path d="M 12 68 Q 50 18, 88 68" fill="none" stroke="#020617" stroke-width="12" opacity="0.35" filter="blur(3px)" stroke-linecap="round"/>
            
            <!-- Thick leather loop handles at both ends -->
            <path d="M 15 68 C 5 68, 5 84, 15 84 Z" fill="none" stroke="#271305" stroke-width="3" filter="drop-shadow(0 2px 2px rgba(0,0,0,0.4))"/>
            <path d="M 85 68 C 95 68, 95 84, 85 84 Z" fill="none" stroke="#271305" stroke-width="3" filter="drop-shadow(0 2px 2px rgba(0,0,0,0.4))"/>
            
            <!-- Braided connecting cord looping behind/through the tiles -->
            <path d="M 15 68 Q 50 26, 85 68" fill="none" stroke="#eab308" stroke-width="1.8" stroke-dasharray="2, 2" filter="drop-shadow(0 1px 1px rgba(0,0,0,0.3))"/>
            
            <!-- Highly detailed, curved wood slats -->
            ${tiles}
            
            <!-- Shiny copper crimps on handles -->
            <rect x="12" y="65" width="6" height="5" rx="1" fill="url(#chrome-${id})" stroke="#1c0d02" stroke-width="0.5"/>
            <rect x="82" y="65" width="6" height="5" rx="1" fill="url(#chrome-${id})" stroke="#1c0d02" stroke-width="0.5"/>
        `;
  } else if (instrument === 'cabasa') {
    // Highly detailed 3D Chrome & Bead Chain Cabasa with Rosewood handle
    let beadRows = '';
    const startY = 24;
    const endY = 66;
    const numRows = 7;
    for (let i = 0; i < numRows; i++) {
      const y = startY + (i / (numRows - 1)) * (endY - startY);
      // Create a nice 3D curved horizontal chain of beads
      beadRows += `
        <!-- Shadow of bead chain -->
        <path d="M 22 ${y + 1} Q 50 ${y + 5.5}, 78 ${y + 1}" fill="none" stroke="#020617" stroke-width="3" opacity="0.25"/>
        <!-- Silver Bead Chain -->
        <path d="M 22 ${y} Q 50 ${y + 4.5}, 78 ${y}" fill="none" stroke="url(#chrome-${id})" stroke-width="2.5" stroke-dasharray="1.5 1.5" stroke-linecap="round"/>
        <!-- Extra metallic highlights on beads -->
        <path d="M 22 ${y} Q 50 ${y + 4.5}, 78 ${y}" fill="none" stroke="#ffffff" stroke-width="0.8" stroke-dasharray="0.4 2.6" opacity="0.6" stroke-linecap="round"/>
      `;
    }

    shapes = `
            <!-- Backdrop shadow -->
            <rect x="20" y="16" width="60" height="78" rx="6" fill="#020617" opacity="0.4" filter="blur(3px)"/>
            
            <!-- Polished Rosewood handle at the bottom -->
            <rect x="45" y="62" width="10" height="32" rx="4.5" fill="url(#skin-${id})" stroke="#1c0d02" stroke-width="1.8" filter="drop-shadow(0 2px 2.5px rgba(0,0,0,0.45))"/>
            <!-- Handle grip rings -->
            <line x1="45" y1="74" x2="55" y2="74" stroke="#1c0d02" stroke-width="0.8" opacity="0.3"/>
            <line x1="45" y1="80" x2="55" y2="80" stroke="#1c0d02" stroke-width="0.8" opacity="0.3"/>
            <line x1="45" y1="86" x2="55" y2="86" stroke="#1c0d02" stroke-width="0.8" opacity="0.3"/>
            
            <!-- Metallic rod spacer/collar -->
            <rect x="42" y="60" width="16" height="4" rx="1" fill="url(#chrome-${id})" stroke="#1e293b" stroke-width="0.8"/>
            
            <!-- Main Stainless Steel Core Cylinder -->
            <rect x="22" y="18" width="56" height="44" rx="3" fill="url(#chrome-${id})" stroke="#334155" stroke-width="1.5" filter="drop-shadow(0 2.5px 3px rgba(0,0,0,0.3))"/>
            
            <!-- High-fidelity bead chain rows -->
            ${beadRows}
            
            <!-- End plates (Top/Bottom brass washers capping the cylinder) -->
            <ellipse cx="50" cy="18" rx="28" ry="1.8" fill="#eab308" stroke="#854d0e" stroke-width="0.6"/>
            <ellipse cx="50" cy="62" rx="28" ry="1.8" fill="#eab308" stroke="#854d0e" stroke-width="0.6"/>
            
            <!-- Top retaining nut -->
            <rect x="47" y="14" width="6" height="4" rx="1" fill="url(#chrome-${id})" stroke="#1e293b" stroke-width="0.5"/>
            <circle cx="50" cy="14" r="1.5" fill="#1e293b"/>
            
            <!-- Cylinder shine & highlight overlay -->
            <rect x="22" y="18" width="56" height="44" rx="3" fill="url(#overlay-${id})" opacity="0.45"/>
            <rect x="22" y="18" width="14" height="44" fill="#ffffff" opacity="0.12"/>
            
            <!-- Handle lighting cover -->
            <rect x="45" y="62" width="10" height="32" rx="4.5" fill="url(#overlay-${id})" opacity="0.4"/>
        `;
  } else if (instrument === 'guiro') {
    // Highly dense, realistic ridges wrapping around the curved body
    let ridges = '';
    for (let y = 24; y <= 76; y += 3) {
      // Calculate responsive width of the gourd at height y
      // Gourd shape: narrow at top (y=20, w=12), bulbous at bottom (y=65, w=24)
      let rx = 12;
      if (y < 45) {
        // Tapering down/neck
        const pct = (y - 20) / 25;
        rx = 13 + pct * 9;
      } else {
        // Bulbous lower half
        const pct = (y - 45) / 35;
        rx = 22 - pct * pct * 10;
      }
      ridges += `<path d="M ${50 - rx} ${y} Q 50 ${y + rx * 0.15}, ${50 + rx} ${y}" fill="none" stroke="#1c0d02" stroke-width="1.5" stroke-linecap="round"/>`;
    }

    shapes = `
            <!-- Heavy bottom shadow -->
            <path d="M 50 4 Q 74 25, 74 55 Q 74 95, 50 96 Q 26 95, 26 55 Q 26 25, 50 4" fill="#020617" opacity="0.65" filter="blur(3px)"/>
            
            <!-- Real gourd body (elegant curves: narrow neck, fat bottom) -->
            <path d="M 50 5 Q 72 25, 72 55 Q 72 94, 50 94 Q 28 94, 28 55 Q 28 25, 50 5 Z" fill="url(#skin-${id})" stroke="#1c0d02" stroke-width="2" filter="drop-shadow(0 2px 3.5px rgba(0,0,0,0.4))"/>
            
            <!-- Grip Holes (traditional on the back, shown with depth) -->
            <ellipse cx="44" cy="52" rx="4" ry="5" fill="#0c0402" stroke="#1c0d02" stroke-width="0.8"/>
            <ellipse cx="56" cy="52" rx="4" ry="5" fill="#0c0402" stroke="#1c0d02" stroke-width="0.8"/>
            
            <!-- Aligned Ridges -->
            ${ridges}
            
            <!-- Highlight/Gloss sheen down the center -->
            <path d="M 49 12 Q 42 45, 45 88" fill="none" stroke="#ffffff" stroke-width="2" opacity="0.15" stroke-linecap="round"/>
            
            <!-- 3D Ambient overlay -->
            <path d="M 50 5 Q 72 25, 72 55 Q 72 94, 50 94 Q 28 94, 28 55 Q 28 25, 50 5 Z" fill="url(#overlay-${id})" opacity="0.7"/>
        `;
  } else if (instrument === 'washboard') {
    // Beautiful 3D Zydeco-style Musical Washboard with corrugated tin & oak frame
    let ridges = '';
    const startY = 25;
    const endY = 81;
    const numRidges = 15;
    for (let i = 0; i < numRidges; i++) {
      const y = startY + (i / (numRidges - 1)) * (endY - startY);
      ridges += `
        <!-- High-fidelity corrugation ridge (gradient metallic strip) -->
        <rect x="31" y="${y - 1}" width="38" height="2" fill="url(#chrome-${id})" opacity="0.9"/>
        <line x1="31" y1="${y}" x2="69" y2="${y}" stroke="#1e293b" stroke-width="0.6" opacity="0.5"/>
        <line x1="31" y1="${y - 0.8}" x2="69" y2="${y - 0.8}" stroke="#ffffff" stroke-width="0.5" opacity="0.3"/>
      `;
    }

    shapes = `
            <!-- Heavy bottom shadow -->
            <rect x="23" y="12" width="54" height="80" rx="3" fill="#020617" opacity="0.6" filter="blur(3px)"/>
            
            <!-- Rustic Oak Wood Frame -->
            <rect x="25" y="10" width="50" height="82" rx="2" fill="url(#skin-${id})" stroke="#1c0d02" stroke-width="2.5" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.4))"/>
            
            <!-- Wood joint pins / pegs -->
            <circle cx="28" cy="13" r="0.8" fill="#1c0d02"/>
            <circle cx="72" cy="13" r="0.8" fill="#1c0d02"/>
            <circle cx="28" cy="89" r="0.8" fill="#1c0d02"/>
            <circle cx="72" cy="89" r="0.8" fill="#1c0d02"/>
            
            <!-- Wood Grain Textures -->
            <path d="M 28 15 L 28 85 M 72 15 L 72 85" stroke="#271305" stroke-width="0.5" opacity="0.2"/>
            <path d="M 30 18 L 70 18" stroke="#271305" stroke-width="0.5" opacity="0.2"/>
            
            <!-- Dark cavity recess behind metal plate -->
            <rect x="30" y="22" width="40" height="62" fill="#0c0a09"/>
            
            <!-- Galvanized Zinc Corrugated Metal Plate -->
            <rect x="31" y="23" width="38" height="60" fill="url(#chrome-${id})" stroke="#1e293b" stroke-width="1"/>
            
            <!-- Render the high-fidelity ridges -->
            ${ridges}
            
            <!-- Two Shiny Metal Jam Tins/Bells (Mounted on top Zydeco style) -->
            <!-- Left Bell -->
            <circle cx="36" cy="16" r="4.5" fill="url(#chrome-${id})" stroke="#1e293b" stroke-width="0.6" filter="drop-shadow(0 1px 1px rgba(0,0,0,0.3))"/>
            <circle cx="36" cy="16" r="1.5" fill="#ca8a04"/>
            <!-- Right Bell -->
            <circle cx="64" cy="16" r="4" fill="url(#chrome-${id})" stroke="#1e293b" stroke-width="0.6" filter="drop-shadow(0 1px 1px rgba(0,0,0,0.3))"/>
            <circle cx="64" cy="16" r="1.2" fill="#94a3b8"/>
            
            <!-- Ambient 3D lightning overlays -->
            <rect x="25" y="10" width="50" height="82" rx="2" fill="url(#overlay-${id})" opacity="0.5"/>
            <rect x="31" y="23" width="38" height="60" fill="url(#overlay-${id})" opacity="0.3"/>
            
            <!-- Playable Metal Thimbles (Drawn lying beside the washboard) -->
            <g transform="translate(16, 74) rotate(-15)" filter="drop-shadow(1px 1.5px 2px rgba(0,0,0,0.4))">
              <path d="M -2 -4 L 2 -4 L 3 3 L -3 3 Z" fill="url(#chrome-${id})" stroke="#334155" stroke-width="0.5"/>
              <ellipse cx="0" cy="3" rx="3" ry="1" fill="#0f172a"/>
              <circle cx="0" cy="-2" r="0.5" fill="#ffffff" opacity="0.6"/>
            </g>
            <g transform="translate(19, 81) rotate(15)" filter="drop-shadow(1px 1.5px 2px rgba(0,0,0,0.4))">
              <path d="M -2 -4 L 2 -4 L 3 3 L -3 3 Z" fill="url(#chrome-${id})" stroke="#334155" stroke-width="0.5"/>
              <ellipse cx="0" cy="3" rx="3" ry="1" fill="#0f172a"/>
              <circle cx="0" cy="-2" r="0.5" fill="#ffffff" opacity="0.6"/>
            </g>
        `;
  } else if (instrument === 'angklung') {
    // Beautiful, highly authentic Indonesian bamboo Angklung with dual tubes & black rattan lashings
    shapes = `
            <!-- Backdrop drop shadow -->
            <path d="M 20 84 L 80 84 M 27 22 L 27 82 M 71 22 L 71 82 M 20 18 L 80 18" stroke="#020617" stroke-width="6" opacity="0.35" filter="blur(3.5px)" stroke-linecap="round"/>
            
            <!-- Bamboo Base Support Frame Tube (Bottom horizontal segment) -->
            <rect x="18" y="78" width="64" height="8" rx="2.5" fill="url(#skin-${id})" stroke="#271305" stroke-width="1.5" filter="drop-shadow(0 2px 2px rgba(0,0,0,0.4))"/>
            <!-- Node ring on bottom tube -->
            <ellipse cx="50" cy="82" rx="1.5" ry="4" fill="none" stroke="#271305" stroke-width="1" opacity="0.5"/>
            
            <!-- Bamboo Side Vertical Posts -->
            <!-- Left Post -->
            <rect x="25" y="16" width="6" height="66" rx="2" fill="url(#skin-${id})" stroke="#271305" stroke-width="1.5"/>
            <!-- Right Post -->
            <rect x="69" y="16" width="5" height="66" rx="1.5" fill="url(#skin-${id})" stroke="#271305" stroke-width="1.5"/>
            
            <!-- Top Horizontal Crossbar bamboo tube -->
            <rect x="18" y="14" width="64" height="5" rx="1.5" fill="url(#skin-${id})" stroke="#271305" stroke-width="1.2"/>
            
            <!-- Rattan Cord Lashings (Traditional black thread wrapping joints) -->
            <!-- Top-Left Corner Wrapping -->
            <rect x="24" y="13" width="8" height="7" rx="0.5" fill="#18181b" stroke="#09090b" stroke-width="0.3" opacity="0.9"/>
            <line x1="24" y1="16" x2="32" y2="16" stroke="#2d2d30" stroke-width="0.5"/>
            <!-- Top-Right Corner Wrapping -->
            <rect x="68" y="13" width="7" height="7" rx="0.5" fill="#18181b" stroke="#09090b" stroke-width="0.3" opacity="0.9"/>
            <line x1="68" y1="16" x2="75" y2="16" stroke="#2d2d30" stroke-width="0.5"/>
            <!-- Bottom-Left Wrapping -->
            <rect x="24" y="77" width="8" height="9" rx="0.5" fill="#18181b" stroke="#09090b" stroke-width="0.3" opacity="0.9"/>
            <!-- Bottom-Right Wrapping -->
            <rect x="68" y="77" width="7" height="9" rx="0.5" fill="#18181b" stroke="#09090b" stroke-width="0.3" opacity="0.9"/>
            
            <!-- Bamboo Tube 1: Large Bass Tube (Pitched lower) -->
            <g filter="drop-shadow(1px 2px 2.5px rgba(0,0,0,0.45))">
              <!-- Upper hanging stem of Tube 1 -->
              <rect x="38" y="18" width="8" height="15" rx="1" fill="url(#skin-${id})" stroke="#271305" stroke-width="1.2"/>
              <!-- Hollow opening at top of Tube 1 -->
              <ellipse cx="42" cy="18" rx="4" ry="1.2" fill="#09090b"/>
              
              <!-- Main Resonant Half-Cylinder Tube Body -->
              <path d="M 38 33 L 38 72 C 38 76, 48 76, 48 72 L 48 33 Z" fill="url(#skin-${id})" stroke="#1c0d02" stroke-width="1.8"/>
              <!-- Hollow scoop/split face detail of bamboo -->
              <path d="M 39 48 L 39 71 C 39 74, 47 74, 47 71 L 47 48 Z" fill="#271305" opacity="0.9" stroke="#1c0d02" stroke-width="0.5"/>
              <path d="M 40 52 L 40 70 C 40 72, 46 72, 46 70 L 46 52 Z" fill="#09090b"/>
              
              <!-- Shading and shiny nodes of bamboo -->
              <ellipse cx="43" cy="33" rx="5" ry="1" fill="none" stroke="#ca8a04" stroke-width="0.8" opacity="0.6"/>
              <rect x="38" y="33" width="10" height="39" rx="1" fill="url(#overlay-${id})" opacity="0.4"/>
            </g>
            
            <!-- Bamboo Tube 2: Small Treble Tube (Pitched higher, hanging to the right) -->
            <g filter="drop-shadow(1px 2px 2px rgba(0,0,0,0.4))">
              <!-- Upper hanging stem of Tube 2 -->
              <rect x="54" y="24" width="6" height="12" rx="0.8" fill="url(#skin-${id})" stroke="#271305" stroke-width="1"/>
              <!-- Hollow opening at top -->
              <ellipse cx="57" cy="24" rx="3" ry="1" fill="#09090b"/>
              
              <!-- Main body -->
              <path d="M 54 36 L 54 68 C 54 71.5, 61 71.5, 61 68 L 61 36 Z" fill="url(#skin-${id})" stroke="#1c0d02" stroke-width="1.5"/>
              <!-- Hollow scoop split -->
              <path d="M 54.8 48 L 54.8 67 C 54.8 69.5, 60.2 69.5, 60.2 67 L 60.2 48 Z" fill="#271305" opacity="0.9" stroke="#1c0d02" stroke-width="0.5"/>
              <path d="M 55.4 51 L 55.4 66 C 55.4 68, 59.6 68, 59.6 66 L 59.6 51 Z" fill="#09090b"/>
              
              <ellipse cx="57.5" cy="36" rx="3.5" ry="0.8" fill="none" stroke="#ca8a04" stroke-width="0.6" opacity="0.5"/>
              <rect x="54" y="36" width="7" height="32" rx="0.8" fill="url(#overlay-${id})" opacity="0.4"/>
            </g>
            
            <!-- Frame Gloss and Lighting -->
            <rect x="18" y="78" width="64" height="8" rx="2.5" fill="url(#overlay-${id})" opacity="0.5"/>
        `;
  } else if (instrument === 'tabla') {
    shapes = `
            <!-- Heavy bottom shadow -->
            <circle cx="50" cy="51.5" r="48" fill="#020617" opacity="0.6" filter="blur(2px)"/>
            
            <!-- Braided outer leather ring (gajra) -->
            <circle cx="50" cy="50" r="48" fill="none" stroke="#5c4033" stroke-width="4" stroke-dasharray="2 3"/>
            
            <!-- Inner skin -->
            <circle cx="50" cy="50" r="46" fill="url(#skin-${id})"/>
            
            <!-- Maidān / Sur boundary ring -->
            <circle cx="50" cy="50" r="30" fill="none" stroke="#271305" stroke-width="1" opacity="0.4"/>
            
            <!-- Central black tuning paste (syahi) -->
            <circle cx="50" cy="50" r="18" fill="#0c0a09" stroke="#1c1917" stroke-width="1.5" filter="drop-shadow(0 1px 1px rgba(0,0,0,0.5))"/>
            <circle cx="48" cy="48" r="16.5" fill="none" stroke="#292524" stroke-width="0.8" opacity="0.6"/>
            
            <!-- Ambient 3D lighting cover -->
            <circle cx="50" cy="50" r="46" fill="url(#overlay-${id})" opacity="0.7"/>
        `;
  } else if (instrument === 'mridangam') {
    shapes = `
            <circle cx="50" cy="50" r="47" fill="#1e293b" opacity="0.08"/>
            
            <!-- Diagonal heavy barrel wooden shell (heavy Jackwood) -->
            <g transform="rotate(-15, 50, 50)">
              <!-- Outer wooden barrel shadow -->
              <rect x="21" y="22" width="58" height="56" rx="28" fill="#020617" opacity="0.45" filter="blur(3px)"/>
              
              <!-- Outer wooden barrel -->
              <rect x="23" y="24" width="54" height="52" rx="26" fill="#3f1e15" stroke="#1c0a06" stroke-width="2"/>
              
              <!-- Horizontal light leather tension straps (Varan) -->
              <path d="M 23 30 L 77 30 M 23 38 L 77 38 M 23 46 L 77 46 M 23 54 L 77 54 M 23 62 L 77 62 M 23 70 L 77 70" stroke="#d6d3d1" stroke-width="1.2" opacity="0.85" filter="drop-shadow(0.5px 0.5px 1px rgba(0,0,0,0.3))"/>
              
              <!-- Wooden cylindrical tuning pegs tucked under straps -->
              <rect x="36" y="26" width="6" height="4" rx="0.8" fill="#a8a29e" stroke="#57534e" stroke-width="0.5"/>
              <rect x="58" y="26" width="6" height="4" rx="0.8" fill="#a8a29e" stroke="#57534e" stroke-width="0.5"/>
              <rect x="42" y="70" width="6" height="4" rx="0.8" fill="#a8a29e" stroke="#57534e" stroke-width="0.5"/>
              
              <!-- Left head (Thoppi - wider bass head with outer ring) -->
              <ellipse cx="23" cy="50" rx="6" ry="24" fill="#e7e5e4" stroke="#a8a29e" stroke-width="1.5"/>
              <ellipse cx="23" cy="50" rx="3" ry="18" fill="#44403c" opacity="0.4"/>
              
              <!-- Right head (Valanthalai - treble head with central black paste) -->
              <ellipse cx="77" cy="50" rx="6" ry="24" fill="#f5f5f4" stroke="#ad845b" stroke-width="1.5"/>
              <!-- Central black paste Syahi with outer ring -->
              <ellipse cx="77" cy="50" rx="4.5" ry="16" fill="none" stroke="#d6c3b0" stroke-width="0.8"/>
              <ellipse cx="77" cy="50" rx="3.5" ry="10" fill="#171717" stroke="#0a0a0a" stroke-width="0.8"/>
              <ellipse cx="76.5" cy="50" rx="2.5" ry="7" fill="none" stroke="#262626" stroke-width="0.4" opacity="0.6"/>
              
              <!-- Ambient 3D shading on wood barrel -->
              <rect x="23" y="24" width="54" height="52" rx="26" fill="url(#overlay-${id})" opacity="0.75"/>
            </g>
        `;
  } else if (instrument === 'cuica') {
    shapes = `
            <!-- Heavy bottom shadow -->
            <circle cx="50" cy="51" r="48" fill="#020617" opacity="0.6" filter="blur(2px)"/>
            
            <!-- Polished chrome/brass outer rim -->
            <circle cx="50" cy="50" r="47.5" fill="none" stroke="url(#chrome-${id})" stroke-width="3.5"/>
            
            <!-- Natural thin skin -->
            <circle cx="50" cy="50" r="45.5" fill="url(#skin-${id})"/>
            
            <!-- Center bamboo stick node tie detail -->
            <circle cx="50" cy="50" r="4.5" fill="none" stroke="#7c2d12" stroke-width="1.5" opacity="0.8"/>
            <circle cx="50" cy="50" r="2" fill="#ca8a04" stroke="#451a03" stroke-width="0.5" filter="drop-shadow(0 1px 1px rgba(0,0,0,0.4))"/>
            
            <!-- Ambient 3D lighting cover -->
            <circle cx="50" cy="50" r="45.5" fill="url(#overlay-${id})"/>
            
            <!-- Tension lugs -->
            ${lugsHtml}
        `;
  } else if (instrument === 'flexatone') {
    shapes = `
            <!-- Subtle backdrop/glow -->
            <circle cx="50" cy="50" r="47" fill="#1e293b" opacity="0.08"/>
            
            <!-- Main flexible spring-steel triangular plate -->
            <path d="M 50 15 L 25 75 L 75 75 Z" fill="url(#chrome-${id})" stroke="#475569" stroke-width="1.8" stroke-linejoin="round" filter="drop-shadow(0px 3px 4px rgba(0,0,0,0.4))"/>
            
            <!-- Central handle support -->
            <rect x="46" y="65" width="8" height="25" rx="2" fill="url(#skin-${id})" stroke="#271305" stroke-width="1.2"/>
            
            <!-- Spring wire beaters branching to left and right -->
            <path d="M 50 25 C 32 25, 20 40, 20 55" fill="none" stroke="#94a3b8" stroke-width="1.2"/>
            <path d="M 50 25 C 68 25, 80 40, 80 55" fill="none" stroke="#94a3b8" stroke-width="1.2"/>
            
            <!-- Wooden/rubber balls on spring ends -->
            <circle cx="20" cy="55" r="5.5" fill="url(#skin-${id})" stroke="#271305" stroke-width="1" filter="drop-shadow(0 1px 1.5px rgba(0,0,0,0.4))"/>
            <circle cx="80" cy="55" r="5.5" fill="url(#skin-${id})" stroke="#271305" stroke-width="1" filter="drop-shadow(0 1px 1.5px rgba(0,0,0,0.4))"/>
            
            <!-- Shadow gradient overlay for 3D metallic curvature -->
            <path d="M 50 15 L 25 75 L 75 75 Z" fill="url(#overlay-${id})" opacity="0.5"/>
        `;
  } else if (instrument === 'riq' || instrument === 'pandeiro') {
    let jingles = '';
    const jingleAngles = [18, 90, 162, 234, 306];
    jingleAngles.forEach((angle) => {
      const rad = (angle * Math.PI) / 180;
      const cx = 50 + 46.5 * Math.cos(rad);
      const cy = 50 + 46.5 * Math.sin(rad);
      jingles += `
                <g transform="rotate(${angle + 90}, ${cx}, ${cy})">
                    <rect x="${cx - 4.5}" y="${cy - 2.5}" width="9" height="5" rx="1.5" fill="#0f172a" stroke="#1e293b" stroke-width="0.5"/>
                    <ellipse cx="${cx - 2}" cy="${cy}" rx="3.5" ry="3.5" fill="#eab308" stroke="#854d0e" stroke-width="0.4" filter="drop-shadow(0 1px 1px rgba(0,0,0,0.3))"/>
                    <ellipse cx="${cx + 2}" cy="${cy}" rx="3.5" ry="3.5" fill="#facc15" stroke="#a16207" stroke-width="0.4" filter="drop-shadow(0 1px 1px rgba(0,0,0,0.3))"/>
                </g>
            `;
    });
    shapes = `
            <!-- Heavy bottom shadow -->
            <circle cx="50" cy="51.5" r="49" fill="#020617" opacity="0.6" filter="blur(2px)"/>
            
            <!-- Wooden outer hoop -->
            <circle cx="50" cy="50" r="47.5" fill="none" stroke="#7c2d12" stroke-width="3.2"/>
            
            <!-- Embed beautiful jingles around the outer loop -->
            ${jingles}
            
            <!-- Real thin calf/fish skin -->
            <circle cx="50" cy="50" r="44" fill="url(#skin-${id})"/>
            <circle cx="50" cy="50" r="43" fill="none" stroke="#1e1b18" stroke-width="0.8" opacity="0.4"/>
            
            <!-- Ambient 3D lighting cover -->
            <circle cx="50" cy="50" r="44" fill="url(#overlay-${id})"/>
        `;
  } else if (instrument === 'chinese' || instrument === 'daiko') {
    let studs = '';
    const studAngles = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330];
    const colorStud = instrument === 'chinese' ? '#d97706' : '#27272a';
    studAngles.forEach((angle) => {
      const rad = (angle * Math.PI) / 180;
      const cx = 50 + 46.8 * Math.cos(rad);
      const cy = 50 + 46.8 * Math.sin(rad);
      studs += `<circle cx="${cx}" cy="${cy}" r="2" fill="${colorStud}" stroke="#09090b" stroke-width="0.5" filter="drop-shadow(0 1px 1px rgba(0,0,0,0.4))"/>`;
    });
    const bodyColor = instrument === 'chinese' ? '#991b1b' : '#18181b';
    shapes = `
            <!-- Heavy bottom shadow -->
            <circle cx="50" cy="52" r="49" fill="#020617" opacity="0.75" filter="blur(3px)"/>
            
            <!-- Thick wood cylinder edge -->
            <circle cx="50" cy="50" r="48" fill="none" stroke="${bodyColor}" stroke-width="4.5" filter="drop-shadow(0 1px 2px rgba(0,0,0,0.5))"/>
            
            <!-- Rounded nail tack studs holding skin -->
            ${studs}
            
            <!-- Thick weathered animal skin -->
            <circle cx="50" cy="50" r="45.5" fill="url(#skin-${id})"/>
            
            <!-- Rim details -->
            <circle cx="50" cy="50" r="45.5" fill="none" stroke="#1e1b18" stroke-width="1" opacity="0.8"/>
            <circle cx="50" cy="50" r="43" fill="none" stroke="#ffffff" stroke-width="0.3" opacity="0.15"/>
            
            <!-- Ambient 3D lighting cover -->
            <circle cx="50" cy="50" r="45.5" fill="url(#overlay-${id})" opacity="1.1"/>
        `;
  } else if (instrument === 'bendir') {
    shapes = `
            <!-- Heavy bottom shadow -->
            <circle cx="50" cy="51" r="49" fill="#020617" opacity="0.6" filter="blur(2px)"/>
            
            <!-- Thin walnut/mahogany wood hoop -->
            <circle cx="50" cy="50" r="48" fill="none" stroke="#7c2d12" stroke-width="2.5"/>
            
            <!-- Real sheepskin drumhead -->
            <circle cx="50" cy="50" r="46.5" fill="url(#skin-${id})"/>
            
            <!-- Snares stretched beneath the skin (visible as faint parallel lines under tension) -->
            <line x1="12" y1="45" x2="88" y2="45" stroke="#451a03" stroke-width="0.8" opacity="0.25"/>
            <line x1="10" y1="50" x2="90" y2="50" stroke="#451a03" stroke-width="0.8" opacity="0.3"/>
            <line x1="12" y1="55" x2="88" y2="55" stroke="#451a03" stroke-width="0.8" opacity="0.25"/>
            
            <!-- Minimal skin edge hoop detail -->
            <circle cx="50" cy="50" r="45.5" fill="none" stroke="#1e1b18" stroke-width="0.8" opacity="0.5"/>
            
            <!-- Ambient 3D lighting cover -->
            <circle cx="50" cy="50" r="46.5" fill="url(#overlay-${id})"/>
        `;
  } else if (instrument === 'teponaztli') {
    shapes = `
            <!-- Heavy bottom shadow -->
            <rect x="10" y="24" width="80" height="54" rx="10" fill="#020617" opacity="0.65" filter="blur(2.5px)"/>
            
            <!-- Dark carved hardwood log body -->
            <rect x="12" y="22" width="76" height="50" rx="10" fill="url(#skin-${id})" stroke="#1c0d02" stroke-width="2.2" filter="drop-shadow(0 2px 3px rgba(0,0,0,0.4))"/>
            
            <!-- Fine wood grain lines -->
            <line x1="16" y1="30" x2="84" y2="30" stroke="#1c0d02" stroke-width="0.5" opacity="0.15"/>
            <line x1="16" y1="64" x2="84" y2="64" stroke="#1c0d02" stroke-width="0.5" opacity="0.15"/>
            
            <!-- Dual carved vibrating tongues forming a central H-slit -->
            <path d="M 28 42 L 46 42 A 2.5 2.5 0 0 1 48.5 44.5 L 48.5 45.5 A 2.5 2.5 0 0 1 46 48 L 28 48" fill="none" stroke="#090502" stroke-width="2" stroke-linecap="round"/>
            <path d="M 72 42 L 54 42 A 2.5 2.5 0 0 0 51.5 44.5 L 51.5 45.5 A 2.5 2.5 0 0 0 54 48 L 72 48" fill="none" stroke="#090502" stroke-width="2" stroke-linecap="round"/>
            <line x1="50" y1="42.5" x2="50" y2="47.5" stroke="#090502" stroke-width="2.2" stroke-linecap="round"/>
            
            <!-- Carved Aztec decorative pattern outline -->
            <path d="M 18 36 L 22 36 L 22 40 L 18 40 Z" fill="none" stroke="#1c0d02" stroke-width="0.8" opacity="0.3"/>
            <path d="M 82 36 L 78 36 L 78 40 L 82 40 Z" fill="none" stroke="#1c0d02" stroke-width="0.8" opacity="0.3"/>
            
            <!-- Ambient 3D lighting cover -->
            <rect x="12" y="22" width="76" height="50" rx="10" fill="url(#overlay-${id})" opacity="0.6"/>
        `;
  } else if (instrument === 'shekere') {
    shapes = `
            <!-- Heavy bottom shadow -->
            <circle cx="50" cy="52" r="46" fill="#020617" opacity="0.6" filter="blur(2.5px)"/>
            
            <!-- Natural organic dried gourd body -->
            <circle cx="50" cy="50" r="45" fill="url(#skin-${id})" stroke="#271305" stroke-width="1.8"/>
            <ellipse cx="50" cy="30" rx="18" ry="12" fill="none" stroke="#271305" stroke-width="0.8" opacity="0.2"/>
            
            <!-- Grid net layout of beads -->
            <path d="M 32 30 Q 50 35, 68 30 M 24 45 Q 50 51, 76 45 M 20 60 Q 50 67, 80 60 M 24 75 Q 50 82, 76 75" fill="none" stroke="#475569" stroke-width="0.6" opacity="0.5"/>
            <path d="M 32 30 Q 32 50, 40 75 M 50 20 Q 50 50, 50 80 M 68 30 Q 68 50, 60 75" fill="none" stroke="#475569" stroke-width="0.6" opacity="0.5"/>
            
            <!-- Glass/Wood Beads colorful studs -->
            <circle cx="38" cy="33" r="2.8" fill="#ef4444" stroke="#7f1d1d" stroke-width="0.4" filter="drop-shadow(0 1px 1px rgba(0,0,0,0.3))"/>
            <circle cx="50" cy="34" r="2.8" fill="#3b82f6" stroke="#1d4ed8" stroke-width="0.4" filter="drop-shadow(0 1px 1px rgba(0,0,0,0.3))"/>
            <circle cx="62" cy="33" r="2.8" fill="#ef4444" stroke="#7f1d1d" stroke-width="0.4" filter="drop-shadow(0 1px 1px rgba(0,0,0,0.3))"/>
            
            <circle cx="28" cy="48" r="2.8" fill="#fbbf24" stroke="#78350f" stroke-width="0.4" filter="drop-shadow(0 1px 1px rgba(0,0,0,0.3))"/>
            <circle cx="42" cy="50" r="2.8" fill="#10b981" stroke="#065f46" stroke-width="0.4" filter="drop-shadow(0 1px 1px rgba(0,0,0,0.3))"/>
            <circle cx="58" cy="50" r="2.8" fill="#10b981" stroke="#065f46" stroke-width="0.4" filter="drop-shadow(0 1px 1px rgba(0,0,0,0.3))"/>
            <circle cx="72" cy="48" r="2.8" fill="#fbbf24" stroke="#78350f" stroke-width="0.4" filter="drop-shadow(0 1px 1px rgba(0,0,0,0.3))"/>
            
            <circle cx="26" cy="63" r="2.8" fill="#3b82f6" stroke="#1d4ed8" stroke-width="0.4" filter="drop-shadow(0 1px 1px rgba(0,0,0,0.3))"/>
            <circle cx="38" cy="65" r="2.8" fill="#ef4444" stroke="#7f1d1d" stroke-width="0.4" filter="drop-shadow(0 1px 1px rgba(0,0,0,0.3))"/>
            <circle cx="50" cy="66" r="2.8" fill="#fbbf24" stroke="#78350f" stroke-width="0.4" filter="drop-shadow(0 1px 1px rgba(0,0,0,0.3))"/>
            <circle cx="62" cy="65" r="2.8" fill="#ef4444" stroke="#7f1d1d" stroke-width="0.4" filter="drop-shadow(0 1px 1px rgba(0,0,0,0.3))"/>
            <circle cx="74" cy="63" r="2.8" fill="#3b82f6" stroke="#1d4ed8" stroke-width="0.4" filter="drop-shadow(0 1px 1px rgba(0,0,0,0.3))"/>
            
            <!-- Ambient 3D lighting cover -->
            <circle cx="50" cy="50" r="45" fill="url(#overlay-${id})" opacity="0.6"/>
        `;
  } else if (instrument === 'kanjira') {
    shapes = `
            <!-- Heavy bottom shadow -->
            <circle cx="50" cy="51" r="49" fill="#020617" opacity="0.6" filter="blur(2px)"/>
            
            <!-- Jackwood dark frame hoop -->
            <circle cx="50" cy="50" r="48" fill="none" stroke="#271305" stroke-width="3"/>
            
            <!-- Brass coin jingle set into a single frame slot on the side -->
            <g transform="rotate(25, 50, 50)">
              <rect x="91" y="46" width="7" height="8" rx="1" fill="#0f172a" stroke="#1e293b" stroke-width="0.5"/>
              <circle cx="94" cy="48" r="4.2" fill="#eab308" stroke="#854d0e" stroke-width="0.4" filter="drop-shadow(0px 1px 1px rgba(0,0,0,0.4))"/>
              <circle cx="95" cy="52" r="4.2" fill="#fbbf24" stroke="#a16207" stroke-width="0.4" filter="drop-shadow(0px 1px 1px rgba(0,0,0,0.4))"/>
            </g>
            
            <!-- Scaled lizard-skin textured drumhead -->
            <circle cx="50" cy="50" r="45.5" fill="url(#skin-${id})"/>
            
            <!-- Lizard skin grain/speckle pattern details -->
            <circle cx="45" cy="45" r="38" fill="none" stroke="#1e1b18" stroke-width="0.8" stroke-dasharray="1 8" opacity="0.3"/>
            <circle cx="52" cy="52" r="28" fill="none" stroke="#1e1b18" stroke-width="0.8" stroke-dasharray="1 6" opacity="0.35"/>
            <circle cx="48" cy="48" r="18" fill="none" stroke="#1e1b18" stroke-width="0.8" stroke-dasharray="1 4" opacity="0.4"/>
            
            <!-- Ambient 3D lighting cover -->
            <circle cx="50" cy="50" r="45.5" fill="url(#overlay-${id})"/>
        `;
  } else if (instrument === 'tank_drum') {
    shapes = `
            <!-- Heavy bottom shadow -->
            <circle cx="50" cy="51.5" r="48" fill="#020617" opacity="0.7" filter="blur(2.5px)"/>
            
            <!-- Dark alloyed steel drum dome -->
            <circle cx="50" cy="50" r="48" fill="url(#skin-${id})" stroke="#1e293b" stroke-width="2"/>
            <circle cx="50" cy="50" r="43" fill="none" stroke="#cbd5e1" stroke-width="0.4" opacity="0.1"/>
            
            <!-- Beautiful U-shaped/tongue slit cuts radiating in a circle -->
            <path d="M 45 14 L 45 28 A 5 5 0 0 0 55 28 L 55 14" fill="none" stroke="#020617" stroke-width="1.8" stroke-linecap="round"/>
            <path d="M 45 86 L 45 72 A 5 5 0 0 1 55 72 L 55 86" fill="none" stroke="#020617" stroke-width="1.8" stroke-linecap="round"/>
            <path d="M 86 45 L 72 45 A 5 5 0 0 1 72 55 L 86 55" fill="none" stroke="#020617" stroke-width="1.8" stroke-linecap="round"/>
            <path d="M 14 45 L 28 45 A 5 5 0 0 0 28 55 L 14 55" fill="none" stroke="#020617" stroke-width="1.8" stroke-linecap="round"/>
            
            <!-- Diagonal tongues -->
            <g transform="rotate(45, 50, 50)">
              <path d="M 46 16 L 46 27 A 4 4 0 0 0 54 27 L 54 16" fill="none" stroke="#020617" stroke-width="1.8" stroke-linecap="round"/>
              <path d="M 46 84 L 46 73 A 4 4 0 0 1 54 73 L 54 84" fill="none" stroke="#020617" stroke-width="1.8" stroke-linecap="round"/>
            </g>
            <g transform="rotate(-45, 50, 50)">
              <path d="M 46 16 L 46 27 A 4 4 0 0 0 54 27 L 54 16" fill="none" stroke="#020617" stroke-width="1.8" stroke-linecap="round"/>
              <path d="M 46 84 L 46 73 A 4 4 0 0 1 54 73 L 54 84" fill="none" stroke="#020617" stroke-width="1.8" stroke-linecap="round"/>
            </g>
            
            <!-- Central center dimple -->
            <circle cx="50" cy="50" r="4" fill="#0f172a" opacity="0.6"/>
            <circle cx="50" cy="50" r="1.5" fill="#334155"/>
            
            <!-- Intense 3D ambient lighting cover reflecting steel dome look -->
            <circle cx="50" cy="50" r="48" fill="url(#overlay-${id})" opacity="1.4"/>
        `;
  } else if (instrument === 'mark_tree') {
    let chimes = '';
    for (let i = 0; i < 15; i++) {
      const x = 20 + i * 4.3;
      const length = 25 + i * 3.5;
      chimes += `
                <line x1="${x}" y1="20" x2="${x}" y2="20" stroke="#475569" stroke-width="0.8"/>
                <line x1="${x}" y1="22" x2="${x}" y2="${22 + length}" stroke="#fbbf24" stroke-width="2.2" stroke-linecap="round" filter="drop-shadow(0 1.5px 1.5px rgba(0,0,0,0.4))"/>
                <circle cx="${x}" cy="${22 + length}" r="1.1" fill="#fef08a"/>
            `;
    }
    shapes = `
            <circle cx="50" cy="50" r="47" fill="#1e293b" opacity="0.08"/>
            
            <!-- Polished mahogany support beam across the top -->
            <rect x="15" y="12" width="70" height="8" rx="2.5" fill="url(#skin-${id})" stroke="#271305" stroke-width="1.5" filter="drop-shadow(0 3px 3px rgba(0,0,0,0.5))"/>
            <circle cx="20" cy="16" r="1.5" fill="url(#chrome-${id})"/>
            <circle cx="80" cy="16" r="1.5" fill="url(#chrome-${id})"/>
            
            <!-- Chimes rows -->
            ${chimes}
        `;
  } else if (instrument === 'slide_whistle') {
    shapes = `
            <circle cx="50" cy="50" r="47" fill="#1e293b" opacity="0.08"/>
            
            <!-- Metallic/silver cylindrical whistle tube positioned diagonally -->
            <g transform="rotate(-35, 50, 50)">
              <rect x="44" y="10" width="12" height="60" fill="url(#chrome-${id})" stroke="#334155" stroke-width="1.2" filter="drop-shadow(0px 3px 3px rgba(0,0,0,0.4))"/>
              <path d="M 44 10 C 44 2, 56 2, 56 10 Z" fill="#ef4444" stroke="#991b1b" stroke-width="0.8"/>
              <rect x="46" y="16" width="8" height="3" fill="#0f172a"/>
              <rect x="49" y="70" width="2" height="22" fill="url(#chrome-${id})" stroke="#1e293b" stroke-width="0.5" filter="drop-shadow(0 1px 1px rgba(0,0,0,0.3))"/>
              <circle cx="50" cy="92" r="4" fill="#ef4444" stroke="#991b1b" stroke-width="0.8" filter="drop-shadow(0 1.5px 1.5px rgba(0,0,0,0.3))"/>
              <circle cx="50" cy="92" r="1.5" fill="#ffffff" opacity="0.6"/>
            </g>
        `;
  } else if (instrument === 'jaw_harp') {
    shapes = `
            <circle cx="50" cy="50" r="47" fill="#1e293b" opacity="0.08"/>
            
            <g transform="translate(50, 50) scale(0.95)">
              <circle cx="0" cy="18" r="24" fill="none" stroke="url(#chrome-${id})" stroke-width="5.5" filter="drop-shadow(0px 3px 3.5px rgba(0,0,0,0.45))"/>
              <line x1="-8" y1="-3" x2="-8" y2="-45" stroke="url(#chrome-${id})" stroke-width="4.5" stroke-linecap="square" filter="drop-shadow(0 1px 1px rgba(0,0,0,0.2))"/>
              <line x1="8" y1="-3" x2="8" y2="-45" stroke="url(#chrome-${id})" stroke-width="4.5" stroke-linecap="square" filter="drop-shadow(0 1px 1px rgba(0,0,0,0.2))"/>
              <line x1="0" y1="42" x2="0" y2="-46" stroke="#94a3b8" stroke-width="1.5"/>
              <circle cx="0" cy="42" r="3" fill="#cbd5e1" stroke="#475569" stroke-width="0.8"/>
              <path d="M 0 -46 Q -12 -46, -16 -35" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-linecap="round" filter="drop-shadow(-1px 2px 1.5px rgba(0,0,0,0.4))"/>
            </g>
        `;
  } else if (instrument === 'timpani') {
    shapes = `
            <!-- Copper bowl kettle reflection shadow -->
            <circle cx="50" cy="52" r="48" fill="#1e1b18" opacity="0.8" filter="blur(2.5px)"/>
            
            <!-- Polished copper bowl outer shell -->
            <circle cx="50" cy="50" r="47" fill="#b04f25" stroke="#4a1505" stroke-width="3" filter="drop-shadow(0 3px 4px rgba(0,0,0,0.5))"/>
            <circle cx="50" cy="50" r="45" fill="none" stroke="#e07a5f" stroke-width="1.5" opacity="0.6"/>
            
            <!-- Large silver rim tension hoops -->
            <circle cx="50" cy="50" r="41" fill="none" stroke="url(#chrome-${id})" stroke-width="3.5"/>
            <circle cx="50" cy="50" r="39.2" fill="none" stroke="#1e293b" stroke-width="0.8"/>
            
            <!-- Heavy calfskin head -->
            <circle cx="50" cy="50" r="38.5" fill="url(#skin-${id})"/>
            <circle cx="50" cy="50" r="38" fill="url(#overlay-${id})"/>
            
            <!-- Six prominent heavy tuning T-key handles around the hoop -->
            <path d="M 50 1.5 L 50 9 M 47 4 L 53 4" stroke="url(#chrome-${id})" stroke-width="1.8" stroke-linecap="round"/>
            <path d="M 50 91 L 50 98.5 M 47 96 L 53 96" stroke="url(#chrome-${id})" stroke-width="1.8" stroke-linecap="round"/>
            <path d="M 7.5 28 L 14 32.5 M 8 32 L 12 28.5" stroke="url(#chrome-${id})" stroke-width="1.8" stroke-linecap="round"/>
            <path d="M 92.5 28 L 86 32.5 M 92 32 L 88 28.5" stroke="url(#chrome-${id})" stroke-width="1.8" stroke-linecap="round"/>
            <path d="M 7.5 72 L 14 67.5 M 8 68 L 12 71.5" stroke="url(#chrome-${id})" stroke-width="1.8" stroke-linecap="round"/>
            <path d="M 92.5 72 L 86 67.5 M 92 68 L 88 71.5" stroke="url(#chrome-${id})" stroke-width="1.8" stroke-linecap="round"/>
        `;
  } else if (instrument === 'kotsuzumi') {
    shapes = `
            <circle cx="50" cy="50" r="47" fill="#1e293b" opacity="0.08"/>
            
            <!-- Hourglass cherrywood body in background -->
            <path d="M 32 15 Q 50 42, 50 50 Q 50 58, 68 85 L 32 85 Q 50 58, 50 50 Q 50 42, 68 15 Z" fill="#451a03" stroke="#170500" stroke-width="1.5" filter="drop-shadow(0 3px 4px rgba(0,0,0,0.5))"/>
            
            <!-- Upper and lower drum heads shown in perspective -->
            <ellipse cx="50" cy="15" rx="20" ry="6" fill="url(#skin-${id})" stroke="#ca8a04" stroke-width="1.5"/>
            <ellipse cx="50" cy="85" rx="20" ry="6" fill="url(#skin-${id})" stroke="#ca8a04" stroke-width="1.5"/>
            
            <!-- Intricate orange silk cords (shirabeo) wrapping/crossing the hourglass body -->
            <path d="M 33 15 L 33 85 M 67 15 L 67 85 M 33 15 L 67 85 M 67 15 L 33 85 M 50 15 L 50 85" stroke="#ea580c" stroke-width="1.6" filter="drop-shadow(1px 1px 1px rgba(0,0,0,0.4))" stroke-linecap="round"/>
            
            <!-- Decorative central cords bundle tied in a traditional knot -->
            <rect x="42" y="46" width="16" height="8" rx="2.5" fill="#ca1b00" stroke="#710000" stroke-width="1"/>
            <circle cx="50" cy="50" r="3" fill="#ea580c"/>
        `;
  } else if (instrument === 'dhol') {
    shapes = `
            <circle cx="50" cy="50" r="47" fill="#1e293b" opacity="0.08"/>
            
            <!-- Diagonal heavy wooden barrel shell -->
            <g transform="rotate(25, 50, 50)">
              <!-- Outer barrel -->
              <rect x="25" y="20" width="50" height="60" rx="25" fill="#2d1a12" stroke="#140b08" stroke-width="2.5" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.5))"/>
              <line x1="25" y1="35" x2="75" y2="35" stroke="#ca8a04" stroke-width="1.2" opacity="0.75"/>
              <line x1="25" y1="50" x2="75" y2="50" stroke="#ca8a04" stroke-width="1.5" opacity="0.75"/>
              <line x1="25" y1="65" x2="75" y2="65" stroke="#ca8a04" stroke-width="1.2" opacity="0.75"/>
              
              <!-- Heads at the two ends -->
              <ellipse cx="50" cy="20" rx="22" ry="5.5" fill="url(#skin-${id})" stroke="#ca8a04" stroke-width="1.5"/>
              <ellipse cx="50" cy="80" rx="22" ry="5.5" fill="url(#skin-${id})" stroke="#ca8a04" stroke-width="1.5"/>
              
              <!-- Traditional colorful red and yellow Punjab tassels and straps dangling -->
              <path d="M 28 35 Q 22 45, 15 48 M 28 65 Q 22 55, 15 52" stroke="#dc2626" stroke-width="2.5" stroke-linecap="round" fill="none" filter="drop-shadow(0 2px 2px rgba(0,0,0,0.4))"/>
              <path d="M 72 35 Q 78 45, 85 48 M 72 65 Q 78 55, 85 52" stroke="#eab308" stroke-width="2.5" stroke-linecap="round" fill="none" filter="drop-shadow(0 2px 2px rgba(0,0,0,0.4))"/>
              <circle cx="15" cy="48" r="3" fill="#dc2626"/>
              <circle cx="85" cy="48" r="3" fill="#eab308"/>
            </g>
        `;
  } else if (instrument === 'bongo_macho') {
    shapes = `
            <!-- Heavy bottom shadow -->
            <circle cx="50" cy="50" r="46" fill="#020617" opacity="0.55" filter="blur(2.5px)"/>
            
            <!-- Outer Solid Hardwood Shell Casing (Natural wood grain concentric rim) -->
            <circle cx="50" cy="50" r="45" fill="#5c4033" stroke="#2a1a11" stroke-width="2"/>
            <circle cx="50" cy="50" r="42" fill="none" stroke="#ca9463" stroke-width="1.2" opacity="0.4"/>
            
            <!-- Steel Hardware Rim with 4 tension lugs -->
            <circle cx="50" cy="50" r="41" fill="none" stroke="url(#chrome-${id})" stroke-width="2.5"/>
            <circle cx="50" cy="50" r="39.8" fill="none" stroke="#1e293b" stroke-width="0.5"/>
            
            <!-- Natural Rawhide Drum Head (Macho: clean, light-blonde skin) -->
            <circle cx="50" cy="50" r="38" fill="url(#skin-${id})"/>
            <circle cx="50" cy="50" r="38" fill="url(#overlay-${id})" opacity="0.4"/>
            
            <!-- Concentric rawhide stretch markings -->
            <circle cx="50" cy="50" r="28" fill="none" stroke="#8a5b30" stroke-width="1.2" opacity="0.15"/>
            <circle cx="50" cy="50" r="16" fill="none" stroke="#8a5b30" stroke-width="0.8" opacity="0.1"/>
            
            <!-- 4 Heavy-duty Chrome Tension Lugs -->
            <circle cx="50" cy="11" r="2.5" fill="url(#chrome-${id})" stroke="#0f172a" stroke-width="0.5"/>
            <circle cx="50" cy="89" r="2.5" fill="url(#chrome-${id})" stroke="#0f172a" stroke-width="0.5"/>
            <circle cx="11" cy="50" r="2.5" fill="url(#chrome-${id})" stroke="#0f172a" stroke-width="0.5"/>
            <circle cx="89" cy="50" r="2.5" fill="url(#chrome-${id})" stroke="#0f172a" stroke-width="0.5"/>
        `;
  } else if (instrument === 'bongo_hembra') {
    shapes = `
            <!-- Heavy bottom shadow -->
            <circle cx="50" cy="50" r="47" fill="#020617" opacity="0.55" filter="blur(2.5px)"/>
            
            <!-- Outer Solid Hardwood Shell Casing -->
            <circle cx="50" cy="50" r="46" fill="#4a3124" stroke="#1d110a" stroke-width="2"/>
            <circle cx="50" cy="50" r="43.5" fill="none" stroke="#ca9463" stroke-width="1.2" opacity="0.35"/>
            
            <!-- Steel Hardware Rim with 4 tension lugs -->
            <circle cx="50" cy="50" r="42" fill="none" stroke="url(#chrome-${id})" stroke-width="2.5"/>
            <circle cx="50" cy="50" r="40.8" fill="none" stroke="#1e293b" stroke-width="0.5"/>
            
            <!-- Natural Rawhide Drum Head (Hembra: larger, warm-blonde skin) -->
            <circle cx="50" cy="50" r="39" fill="url(#skin-${id})"/>
            <circle cx="50" cy="50" r="39" fill="url(#overlay-${id})" opacity="0.4"/>
            
            <!-- Concentric rawhide stretch markings -->
            <circle cx="50" cy="50" r="30" fill="none" stroke="#8a5b30" stroke-width="1.4" opacity="0.2"/>
            <circle cx="50" cy="50" r="18" fill="none" stroke="#8a5b30" stroke-width="0.9" opacity="0.12"/>
            
            <!-- 4 Heavy-duty Chrome Tension Lugs -->
            <circle cx="50" cy="10" r="2.5" fill="url(#chrome-${id})" stroke="#0f172a" stroke-width="0.5"/>
            <circle cx="50" cy="90" r="2.5" fill="url(#chrome-${id})" stroke="#0f172a" stroke-width="0.5"/>
            <circle cx="10" cy="50" r="2.5" fill="url(#chrome-${id})" stroke="#0f172a" stroke-width="0.5"/>
            <circle cx="90" cy="50" r="2.5" fill="url(#chrome-${id})" stroke="#0f172a" stroke-width="0.5"/>
        `;
  } else if (instrument === 'agogo' || instrument === 'agogo_high') {
    shapes = `
            <!-- Beautiful metallic cone-shaped High Bell facing player -->
            <g filter="drop-shadow(0 4px 5px rgba(0,0,0,0.45))">
              <!-- Background shadow to give depth to the cone -->
              <path d="M 50 15 L 25 80 Q 50 90, 75 80 Z" fill="#090d16" opacity="0.3"/>
              
              <!-- Main Metal Bell Body -->
              <path d="M 50 12 L 22 78 C 30 84, 70 84, 78 78 Z" fill="none" stroke="url(#chrome-${id})" stroke-width="1.5"/>
              <path d="M 50 12 L 22 78 C 30 84, 70 84, 78 78 Z" fill="url(#skin-${id})" opacity="0.8"/>
              
              <!-- 3D reflective metal contours -->
              <path d="M 50 12 L 35 79.5 Q 40 82, 50 82" fill="none" stroke="#ffffff" stroke-width="0.8" opacity="0.25"/>
              <path d="M 50 12 L 65 79.5" fill="none" stroke="#000000" stroke-width="1.2" opacity="0.2"/>
              
              <!-- Inner hollow opening mouth (looking inside the bell) -->
              <ellipse cx="50" cy="78" rx="28" ry="7" fill="#1e293b" stroke="url(#chrome-${id})" stroke-width="1.5"/>
              <ellipse cx="50" cy="78" rx="26" ry="5.5" fill="#090d16"/>
              
              <!-- Shiny metal weld joint at the cone apex -->
              <circle cx="50" cy="12" r="3.5" fill="url(#chrome-${id})" stroke="#334155" stroke-width="0.5"/>
              <circle cx="50" cy="12" r="1.5" fill="#ffffff" opacity="0.6"/>
            </g>
        `;
  } else if (instrument === 'agogo_low') {
    shapes = `
            <!-- Beautiful metallic cone-shaped Low Bell, slightly larger -->
            <g filter="drop-shadow(0 5px 6px rgba(0,0,0,0.5))">
              <path d="M 50 10 L 20 85 Q 50 96, 80 85 Z" fill="#090d16" opacity="0.3"/>
              
              <path d="M 50 7 L 16 82 C 26 89, 74 89, 84 82 Z" fill="none" stroke="url(#chrome-${id})" stroke-width="1.5"/>
              <path d="M 50 7 L 16 82 C 26 89, 74 89, 84 82 Z" fill="url(#skin-${id})" opacity="0.85"/>
              
              <!-- Reflective metal highlights -->
              <path d="M 50 7 L 32 84 Q 38 87, 50 87" fill="none" stroke="#ffffff" stroke-width="1.0" opacity="0.25"/>
              <path d="M 50 7 L 68 84" fill="none" stroke="#000000" stroke-width="1.5" opacity="0.25"/>
              
              <!-- Inner hollow opening mouth -->
              <ellipse cx="50" cy="82" rx="34" ry="8" fill="#111827" stroke="url(#chrome-${id})" stroke-width="1.8"/>
              <ellipse cx="50" cy="82" rx="31" ry="6" fill="#030712"/>
              
              <!-- Apex weld joint -->
              <circle cx="50" cy="7" r="4" fill="url(#chrome-${id})" stroke="#1f2937" stroke-width="0.5"/>
              <circle cx="50" cy="7" r="1.8" fill="#ffffff" opacity="0.5"/>
            </g>
        `;
  } else if (instrument === 'claves') {
    shapes = `
            <circle cx="50" cy="50" r="47" fill="#1e293b" opacity="0.08"/>
            
            <!-- Hand-held Clave (diagonal left-down to right-up) -->
            <g transform="rotate(-25, 50, 50)" filter="drop-shadow(0 3px 4.5px rgba(0,0,0,0.4))">
              <rect x="18" y="44" width="64" height="12" rx="4" fill="url(#skin-${id})" stroke="#451a03" stroke-width="1"/>
              <ellipse cx="18" cy="50" rx="2" ry="6" fill="#ca8a04"/>
              <ellipse cx="82" cy="50" rx="2" ry="6" fill="#f5caa0"/>
            </g>
            
            <!-- Striking Clave (diagonal left-up to right-down) -->
            <g transform="rotate(35, 50, 50)" filter="drop-shadow(0 4.5px 5px rgba(0,0,0,0.45))">
              <rect x="22" y="44" width="64" height="11" rx="4" fill="url(#skin-${id})" stroke="#451a03" stroke-width="1"/>
              <ellipse cx="22" cy="49.5" rx="2" ry="5.5" fill="#ca8a04"/>
              <ellipse cx="86" cy="49.5" rx="2" ry="5.5" fill="#f5caa0"/>
            </g>
        `;
  } else if (instrument === 'spoons_bones') {
    shapes = `
            <circle cx="50" cy="50" r="47" fill="#1e293b" opacity="0.08"/>
            
            <!-- Traditional curved rhythm bones (wooden clackers) in background/foreground -->
            <g transform="translate(50, 72) rotate(45)" filter="drop-shadow(0 2.5px 3px rgba(0,0,0,0.4))">
              <path d="M -25 -5 C -10 -5, 10 5, 25 5 C 28 5, 30 -2, 25 -3 C 10 -3, -10 -10, -25 -10 C -30 -10, -30 -5, -25 -5 Z" fill="#b45309" stroke="#78350f" stroke-width="1.2"/>
              <path d="M -25 5 C -10 5, 10 15, 25 15 C 28 15, 30 8, 25 7 C 10 7, -10 0, -25 0 C -30 0, -30 5, -25 5 Z" fill="#d97706" stroke="#78350f" stroke-width="1.2"/>
            </g>

            <!-- Two back-to-back silver spoons -->
            <g transform="translate(43, 26) rotate(-15)" filter="drop-shadow(0 3px 4px rgba(0,0,0,0.4))">
              <!-- Spoon 1 handle -->
              <path d="M 0 0 L -8 45 C -12 55, -2 60, -2 55 L 2 20 Z" fill="url(#chrome-${id})" stroke="#475569" stroke-width="0.8"/>
              <!-- Spoon 1 bowl -->
              <ellipse cx="0" cy="5" rx="11" ry="16" fill="url(#chrome-${id})" stroke="#475569" stroke-width="1"/>
              <ellipse cx="-2" cy="3" rx="7" ry="11" fill="#ffffff" opacity="0.25"/>
            </g>
            
            <g transform="translate(57, 26) rotate(15) scale(-1, 1)" filter="drop-shadow(0 3px 4px rgba(0,0,0,0.4))">
              <!-- Spoon 2 handle -->
              <path d="M 0 0 L -8 45 C -12 55, -2 60, -2 55 L 2 20 Z" fill="url(#chrome-${id})" stroke="#475569" stroke-width="0.8"/>
              <!-- Spoon 2 bowl -->
              <ellipse cx="0" cy="5" rx="11" ry="16" fill="url(#chrome-${id})" stroke="#475569" stroke-width="1"/>
              <ellipse cx="-2" cy="3" rx="7" ry="11" fill="#ffffff" opacity="0.25"/>
            </g>
        `;
  } else if (instrument === 'talkingdrum') {
    shapes = `
            <circle cx="50" cy="50" r="47" fill="#1e293b" opacity="0.08"/>
            
            <!-- Diagonal Hourglass wood body -->
            <g transform="rotate(30, 50, 50)">
              <!-- Body drop shadow -->
              <path d="M 24 30 L 76 30 L 50 50 Z" fill="#020617" opacity="0.35" filter="blur(3px)"/>
              
              <!-- Central wooden hourglass core -->
              <path d="M 28 30 Q 50 48, 50 50 Q 50 52, 72 70 L 28 70 Q 50 52, 50 50 Q 50 48, 72 30 Z" fill="#5c4033" stroke="#271305" stroke-width="1.2"/>
              
              <!-- Dense vertical tension leather laces running between heads -->
              <path d="M 25 30 Q 50 48, 25 70 M 30 30 Q 50 48, 30 70 M 35 30 Q 50 48, 35 70 M 40 30 Q 50 48, 40 70 M 45 30 Q 50 48, 45 70 M 50 30 L 50 70 M 55 30 Q 50 48, 55 70 M 60 30 Q 50 48, 60 70 M 65 30 Q 50 48, 65 70 M 70 30 Q 50 48, 70 70 M 75 30 Q 50 48, 75 70" fill="none" stroke="#ca8a04" stroke-width="1.2" opacity="0.9" filter="drop-shadow(0.5px 0.5px 1px rgba(0,0,0,0.3))"/>
              
              <!-- Center Squeezing/Wrapping cord (indicates pitch modulation) -->
              <rect x="44" y="47" width="12" height="6" rx="1.5" fill="#dc2626" stroke="#991b1b" stroke-width="0.8"/>
              
              <!-- Left head (Natural goat skin) -->
              <ellipse cx="50" cy="30" rx="26" ry="6.5" fill="url(#skin-${id})" stroke="#4a3628" stroke-width="2" filter="drop-shadow(0px -1.5px 2px rgba(0,0,0,0.3))"/>
              <ellipse cx="50" cy="30" rx="22" ry="5" fill="none" stroke="#ffffff" stroke-width="0.4" opacity="0.2"/>
              
              <!-- Right head (Natural goat skin) -->
              <ellipse cx="50" cy="70" rx="26" ry="6.5" fill="url(#skin-${id})" stroke="#4a3628" stroke-width="2" filter="drop-shadow(0px 1.5px 2px rgba(0,0,0,0.3))"/>
              <ellipse cx="50" cy="70" rx="22" ry="5" fill="none" stroke="#ffffff" stroke-width="0.4" opacity="0.2"/>
            </g>
        `;
  } else if (instrument === 'zabumba') {
    shapes = `
            <circle cx="50" cy="50" r="47" fill="#1e293b" opacity="0.08"/>
            
            <!-- Wide, shallow 3D cylindrical shell -->
            <g transform="rotate(15, 50, 50)">
              <!-- Shell drop shadow -->
              <rect x="18" y="32" width="64" height="36" rx="8" fill="#020617" opacity="0.4" filter="blur(3px)"/>
              
              <!-- Polished blue/green metallic shell -->
              <rect x="20" y="34" width="60" height="32" rx="4" fill="url(#skin-${id})" stroke="#0f172a" stroke-width="1.8"/>
              
              <!-- Vertical chrome tuning tension rods and brackets -->
              <line x1="28" y1="30" x2="28" y2="70" stroke="url(#chrome-${id})" stroke-width="1.5"/>
              <line x1="42" y1="30" x2="42" y2="70" stroke="url(#chrome-${id})" stroke-width="1.5"/>
              <line x1="58" y1="30" x2="58" y2="70" stroke="url(#chrome-${id})" stroke-width="1.5"/>
              <line x1="72" y1="30" x2="72" y2="70" stroke="url(#chrome-${id})" stroke-width="1.5"/>
              
              <!-- Chrome brackets on shell -->
              <rect x="26.5" y="47" width="3" height="6" fill="url(#chrome-${id})" stroke="#1e293b" stroke-width="0.4"/>
              <rect x="40.5" y="47" width="3" height="6" fill="url(#chrome-${id})" stroke="#1e293b" stroke-width="0.4"/>
              <rect x="56.5" y="47" width="3" height="6" fill="url(#chrome-${id})" stroke="#1e293b" stroke-width="0.4"/>
              <rect x="70.5" y="47" width="3" height="6" fill="url(#chrome-${id})" stroke="#1e293b" stroke-width="0.4"/>
              
              <!-- Top head with metal hoop -->
              <ellipse cx="50" cy="34" rx="30" ry="8" fill="#f1f5f9" stroke="url(#chrome-${id})" stroke-width="2" filter="drop-shadow(0 -1px 1px rgba(0,0,0,0.3))"/>
              <ellipse cx="50" cy="34" rx="26" ry="6.5" fill="none" stroke="#94a3b8" stroke-width="0.5"/>
              
              <!-- Bottom head with metal hoop -->
              <ellipse cx="50" cy="66" rx="30" ry="8" fill="#e2e8f0" stroke="url(#chrome-${id})" stroke-width="2" filter="drop-shadow(0 1px 1px rgba(0,0,0,0.3))"/>
              
              <!-- Ambient 3D lighting over shell -->
              <rect x="20" y="34" width="60" height="32" rx="4" fill="url(#overlay-${id})" opacity="0.65"/>
              <line x1="22" y1="36" x2="22" y2="64" stroke="#ffffff" stroke-width="1" opacity="0.2"/>
            </g>
        `;
  } else if (instrument === 'davul') {
    shapes = `
            <circle cx="50" cy="50" r="47" fill="#1e293b" opacity="0.08"/>
            
            <!-- Diagonal deep cylindrical wood body -->
            <g transform="rotate(25, 50, 50)">
              <!-- Body shadow -->
              <rect x="22" y="24" width="56" height="52" rx="16" fill="#020617" opacity="0.4" filter="blur(3px)"/>
              
              <!-- Oak/walnut wood barrel body -->
              <rect x="24" y="26" width="52" height="48" rx="8" fill="#451a03" stroke="#1c0d02" stroke-width="2" filter="drop-shadow(0 3px 4px rgba(0,0,0,0.45))"/>
              
              <!-- Zig-zag traditional rope lacing across the wooden cylinder body -->
              <path d="M 25 26 L 31 74 L 37 26 L 43 74 L 49 26 L 55 74 L 61 26 L 67 74 L 73 26 M 25 74 L 31 26 L 37 74 L 43 26 L 49 74 L 55 26 L 61 74 L 67 26 L 73 74" fill="none" stroke="#ca8a04" stroke-width="1.5" opacity="0.8" stroke-linecap="round" stroke-linejoin="round" filter="drop-shadow(0.5px 0.5px 1px rgba(0,0,0,0.3))"/>
              
              <!-- Thick rope loops/knots at top and bottom rims -->
              <circle cx="31" cy="26" r="1.5" fill="#a16207"/>
              <circle cx="43" cy="26" r="1.5" fill="#a16207"/>
              <circle cx="55" cy="26" r="1.5" fill="#a16207"/>
              <circle cx="67" cy="26" r="1.5" fill="#a16207"/>
              <circle cx="31" cy="74" r="1.5" fill="#a16207"/>
              <circle cx="43" cy="74" r="1.5" fill="#a16207"/>
              <circle cx="55" cy="74" r="1.5" fill="#a16207"/>
              <circle cx="67" cy="74" r="1.5" fill="#a16207"/>
              
              <!-- Top thick goatskin head seen in perspective -->
              <ellipse cx="50" cy="26" rx="26" ry="6.5" fill="url(#skin-${id})" stroke="#713f12" stroke-width="1.5" filter="drop-shadow(0 -1px 1px rgba(0,0,0,0.3))"/>
              <ellipse cx="50" cy="26" rx="22" ry="5.5" fill="none" stroke="#713f12" stroke-width="0.5" opacity="0.4"/>
              
              <!-- Bottom goatskin head seen in perspective -->
              <ellipse cx="50" cy="74" rx="26" ry="6.5" fill="url(#skin-${id})" stroke="#713f12" stroke-width="1.5" filter="drop-shadow(0 1px 1px rgba(0,0,0,0.3))"/>
              
              <!-- Ambient 3D shading on cylinder -->
              <rect x="24" y="26" width="52" height="48" rx="8" fill="url(#overlay-${id})" opacity="0.75"/>
            </g>
        `;
  } else if (instrument === 'alfaia') {
    shapes = `
            <circle cx="50" cy="50" r="47" fill="#1e293b" opacity="0.08"/>
            
            <!-- Colorful Brazilian Maracatu drum -->
            <g transform="rotate(-15, 50, 50)">
              <!-- Body shadow -->
              <rect x="22" y="24" width="56" height="52" rx="14" fill="#020617" opacity="0.4" filter="blur(3px)"/>
              
              <!-- Red painted wood cylinder body -->
              <rect x="24" y="26" width="52" height="48" rx="6" fill="#b91c1c" stroke="#450a0a" stroke-width="2"/>
              
              <!-- Thick horizontal yellow painted wood hoops at top and bottom -->
              <rect x="22" y="22" width="56" height="8" rx="2" fill="#eab308" stroke="#854d0e" stroke-width="1.2" filter="drop-shadow(0 2px 2px rgba(0,0,0,0.3))"/>
              <rect x="22" y="70" width="56" height="8" rx="2" fill="#eab308" stroke="#854d0e" stroke-width="1.2" filter="drop-shadow(0 2px 2px rgba(0,0,0,0.3))"/>
              
              <!-- Heavy green/yellow ropes laced in V-patterns between the hoops -->
              <path d="M 25 30 L 31 70 L 37 30 L 43 70 L 49 30 L 55 70 L 61 30 L 67 70 L 73 30" fill="none" stroke="#15803d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" filter="drop-shadow(0.5px 1px 1px rgba(0,0,0,0.35))"/>
              
              <!-- Top rawhide head seen in perspective -->
              <ellipse cx="50" cy="22" rx="26" ry="6" fill="url(#skin-${id})" stroke="#713f12" stroke-width="1.2" filter="drop-shadow(0 -1px 1px rgba(0,0,0,0.25))"/>
              
              <!-- Bottom rawhide head seen in perspective -->
              <ellipse cx="50" cy="78" rx="26" ry="6" fill="url(#skin-${id})" stroke="#713f12" stroke-width="1.2" filter="drop-shadow(0 1px 1px rgba(0,0,0,0.25))"/>
              
              <!-- Ambient 3D shading -->
              <rect x="24" y="26" width="52" height="48" rx="6" fill="url(#overlay-${id})" opacity="0.6"/>
              <line x1="26" y1="28" x2="26" y2="72" stroke="#ffffff" stroke-width="1.2" opacity="0.15"/>
            </g>
        `;
  } else if (instrument === 'snare_drum') {
    shapes = `
            <circle cx="50" cy="50" r="47" fill="#1e293b" opacity="0.08"/>
            
            <!-- Highly detailed 3D metal snare drum -->
            <g transform="rotate(10, 50, 50)">
              <!-- Snare body shadow -->
              <rect x="18" y="32" width="64" height="36" rx="8" fill="#020617" opacity="0.4" filter="blur(3.5px)"/>
              
              <!-- Polished steel/chrome shell -->
              <rect x="20" y="34" width="60" height="32" rx="4" fill="url(#chrome-${id})" stroke="#475569" stroke-width="1.8"/>
              <rect x="20" y="47" width="60" height="6" fill="#cbd5e1" opacity="0.5"/> <!-- Center bead line -->
              
              <!-- Vertical chrome tension rods and brackets -->
              <line x1="28" y1="30" x2="28" y2="70" stroke="url(#chrome-${id})" stroke-width="1.2"/>
              <line x1="39" y1="30" x2="39" y2="70" stroke="url(#chrome-${id})" stroke-width="1.2"/>
              <line x1="50" y1="30" x2="50" y2="70" stroke="url(#chrome-${id})" stroke-width="1.2"/>
              <line x1="61" y1="30" x2="61" y2="70" stroke="url(#chrome-${id})" stroke-width="1.2"/>
              <line x1="72" y1="30" x2="72" y2="70" stroke="url(#chrome-${id})" stroke-width="1.2"/>
              
              <!-- Double lugs brackets -->
              <circle cx="28" cy="40" r="1.5" fill="#94a3b8" stroke="#475569" stroke-width="0.3"/>
              <circle cx="28" cy="60" r="1.5" fill="#94a3b8" stroke="#475569" stroke-width="0.3"/>
              <circle cx="39" cy="40" r="1.5" fill="#94a3b8" stroke="#475569" stroke-width="0.3"/>
              <circle cx="39" cy="60" r="1.5" fill="#94a3b8" stroke="#475569" stroke-width="0.3"/>
              <circle cx="50" cy="40" r="1.5" fill="#94a3b8" stroke="#475569" stroke-width="0.3"/>
              <circle cx="50" cy="60" r="1.5" fill="#94a3b8" stroke="#475569" stroke-width="0.3"/>
              <circle cx="61" cy="40" r="1.5" fill="#94a3b8" stroke="#475569" stroke-width="0.3"/>
              <circle cx="61" cy="60" r="1.5" fill="#94a3b8" stroke="#475569" stroke-width="0.3"/>
              <circle cx="72" cy="40" r="1.5" fill="#94a3b8" stroke="#475569" stroke-width="0.3"/>
              <circle cx="72" cy="60" r="1.5" fill="#94a3b8" stroke="#475569" stroke-width="0.3"/>
              
              <!-- Snare throw-off/strainer switch detail on the side -->
              <rect x="17" y="42" width="3" height="12" fill="url(#chrome-${id})" stroke="#334155" stroke-width="0.5"/>
              <circle cx="18.5" cy="44" r="1" fill="#dc2626"/>
              
              <!-- Top batter head seen in perspective -->
              <ellipse cx="50" cy="34" rx="30" ry="7" fill="#fdf2e9" stroke="url(#chrome-${id})" stroke-width="1.8" filter="drop-shadow(0 -1.5px 1.5px rgba(0,0,0,0.35))"/>
              <ellipse cx="50" cy="34" rx="26" ry="5.8" fill="none" stroke="#d1d5db" stroke-width="0.5" opacity="0.6"/>
              
              <!-- Bottom head seen in perspective -->
              <ellipse cx="50" cy="66" rx="30" ry="7" fill="#cbd5e1" stroke="url(#chrome-${id})" stroke-width="1.8" filter="drop-shadow(0 1.5px 1.5px rgba(0,0,0,0.35))"/>
              
              <!-- Ambient 3D shading on the metal shell -->
              <rect x="20" y="34" width="60" height="32" rx="4" fill="url(#overlay-${id})" opacity="0.5"/>
              <line x1="22" y1="36" x2="22" y2="64" stroke="#ffffff" stroke-width="1.5" opacity="0.3"/>
            </g>
        `;
  } else if (instrument === 'surdo') {
    shapes = `
            <circle cx="50" cy="50" r="47" fill="#1e293b" opacity="0.08"/>
            
            <!-- Deep, large 3D cylindrical aluminum shell -->
            <g transform="rotate(-5, 50, 50)">
              <!-- Shell shadow -->
              <rect x="22" y="20" width="56" height="60" rx="14" fill="#020617" opacity="0.4" filter="blur(3.5px)"/>
              
              <!-- Aluminum metal cylinder body -->
              <rect x="24" y="22" width="52" height="56" rx="6" fill="url(#chrome-${id})" stroke="#475569" stroke-width="1.8" filter="drop-shadow(0 3px 4px rgba(0,0,0,0.4))"/>
              
              <!-- Long vertical steel tension rods spanning the entire cylinder height -->
              <line x1="29" y1="18" x2="29" y2="82" stroke="#94a3b8" stroke-width="1.2"/>
              <line x1="39" y1="18" x2="39" y2="82" stroke="#94a3b8" stroke-width="1.2"/>
              <line x1="50" y1="18" x2="50" y2="82" stroke="#94a3b8" stroke-width="1.2"/>
              <line x1="61" y1="18" x2="61" y2="82" stroke="#94a3b8" stroke-width="1.2"/>
              <line x1="71" y1="18" x2="71" y2="82" stroke="#94a3b8" stroke-width="1.2"/>
              
              <!-- Small silver brackets on shell holding the rods -->
              <rect x="28" y="48" width="2" height="4" fill="#64748b"/>
              <rect x="38" y="48" width="2" height="4" fill="#64748b"/>
              <rect x="49" y="48" width="2" height="4" fill="#64748b"/>
              <rect x="60" y="48" width="2" height="4" fill="#64748b"/>
              <rect x="70" y="48" width="2" height="4" fill="#64748b"/>
              
              <!-- Top head with metal rim -->
              <ellipse cx="50" cy="22" rx="26" ry="6" fill="#f8fafc" stroke="url(#chrome-${id})" stroke-width="2" filter="drop-shadow(0 -1px 1px rgba(0,0,0,0.3))"/>
              <ellipse cx="50" cy="22" rx="22" ry="5" fill="none" stroke="#94a3b8" stroke-width="0.5" opacity="0.5"/>
              
              <!-- Bottom head with metal rim -->
              <ellipse cx="50" cy="78" rx="26" ry="6" fill="#cbd5e1" stroke="url(#chrome-${id})" stroke-width="2"/>
              
              <!-- Ambient 3D shading over shell -->
              <rect x="24" y="22" width="52" height="56" rx="6" fill="url(#overlay-${id})" opacity="0.6"/>
              <line x1="26" y1="24" x2="26" y2="76" stroke="#ffffff" stroke-width="1.5" opacity="0.25"/>
            </g>
        `;
  } else if (instrument === 'dunun') {
    shapes = `
            <circle cx="50" cy="50" r="47" fill="#1e293b" opacity="0.08"/>
            
            <!-- Deep cylindrical West African bass drum -->
            <g transform="rotate(20, 50, 50)">
              <!-- Body shadow -->
              <rect x="20" y="24" width="60" height="52" rx="16" fill="#020617" opacity="0.4" filter="blur(3px)"/>
              
              <!-- Thick log wooden body shell -->
              <rect x="22" y="26" width="56" height="48" rx="8" fill="#451a03" stroke="#1c0d02" stroke-width="2.2" filter="drop-shadow(0 3px 5px rgba(0,0,0,0.5))"/>
              <line x1="22" y1="36" x2="78" y2="36" stroke="#271305" stroke-width="0.8" opacity="0.4"/>
              <line x1="22" y1="64" x2="78" y2="64" stroke="#271305" stroke-width="0.8" opacity="0.4"/>
              
              <!-- Zig-zag ropes tuning laces -->
              <path d="M 24 26 L 31 74 L 38 26 L 45 74 L 52 26 L 59 74 L 66 26 L 73 74 L 76 26 M 24 74 L 31 26 L 38 74 L 45 26 L 52 74 L 59 26 L 66 74 L 73 26 L 76 74" fill="none" stroke="#fbbf24" stroke-width="1.4" opacity="0.8" stroke-linecap="round" stroke-linejoin="round" filter="drop-shadow(0.5px 0.5px 1px rgba(0,0,0,0.3))"/>
              
              <!-- Thick hand-shaved rawhide drumheads on both ends -->
              <ellipse cx="50" cy="26" rx="28" ry="7" fill="url(#skin-${id})" stroke="#a16207" stroke-width="2" filter="drop-shadow(0 -1px 1px rgba(0,0,0,0.3))"/>
              <ellipse cx="50" cy="74" rx="28" ry="7" fill="url(#skin-${id})" stroke="#a16207" stroke-width="2" filter="drop-shadow(0 1px 1px rgba(0,0,0,0.3))"/>
              
              <!-- Attached traditional metal Dunun bell (Kenken) mounted on top of body -->
              <g transform="translate(50, 14) rotate(-15)">
                <path d="M -8 0 L -12 -5 L 12 -5 L 8 0 Z" fill="url(#chrome-${id})" stroke="#475569" stroke-width="0.8" filter="drop-shadow(0 2px 2px rgba(0,0,0,0.35))"/>
                <line x1="-8" y1="-2" x2="8" y2="-2" stroke="#94a3b8" stroke-width="0.5"/>
              </g>
              
              <!-- Ambient 3D shading on the wood body -->
              <rect x="22" y="26" width="56" height="48" rx="8" fill="url(#overlay-${id})" opacity="0.7"/>
            </g>
        `;
  } else if (instrument === 'repinique') {
    shapes = `
            <circle cx="50" cy="50" r="47" fill="#1e293b" opacity="0.08"/>
            
            <!-- Brazilian high-pitched steel drum with stick -->
            <g transform="rotate(12, 50, 50)">
              <!-- Body shadow -->
              <rect x="22" y="26" width="56" height="48" rx="12" fill="#020617" opacity="0.4" filter="blur(3.5px)"/>
              
              <!-- Medium-depth polished steel cylinder shell -->
              <rect x="24" y="28" width="52" height="44" rx="5" fill="url(#chrome-${id})" stroke="#475569" stroke-width="1.8" filter="drop-shadow(0 3px 4px rgba(0,0,0,0.4))"/>
              
              <!-- Vertical chrome tension rods running along body -->
              <line x1="29" y1="24" x2="29" y2="76" stroke="#94a3b8" stroke-width="1.5"/>
              <line x1="39" y1="24" x2="39" y2="76" stroke="#94a3b8" stroke-width="1.5"/>
              <line x1="50" y1="24" x2="50" y2="76" stroke="#94a3b8" stroke-width="1.5"/>
              <line x1="61" y1="24" x2="61" y2="76" stroke="#94a3b8" stroke-width="1.5"/>
              <line x1="71" y1="24" x2="71" y2="76" stroke="#94a3b8" stroke-width="1.5"/>
              
              <!-- Top synthetic head with chrome rim seen in perspective -->
              <ellipse cx="50" cy="28" rx="26" ry="6" fill="#fdfefe" stroke="url(#chrome-${id})" stroke-width="2" filter="drop-shadow(0 -1px 1px rgba(0,0,0,0.3))"/>
              <ellipse cx="50" cy="28" rx="22" ry="4.8" fill="none" stroke="#e2e8f0" stroke-width="0.5"/>
              
              <!-- Bottom head seen in perspective -->
              <ellipse cx="50" cy="72" rx="26" ry="6" fill="#cbd5e1" stroke="url(#chrome-${id})" stroke-width="2"/>
              
              <!-- A wooden drumstick laying diagonally across the top head -->
              <line x1="26" y1="25" x2="72" y2="40" stroke="#fef08a" stroke-width="1.8" stroke-linecap="round" filter="drop-shadow(1px 2px 2px rgba(0,0,0,0.45))"/>
              <circle cx="72" cy="40" r="1.1" fill="#ca8a04"/>
              
              <!-- Ambient 3D metal shell gloss -->
              <rect x="24" y="28" width="52" height="44" rx="5" fill="url(#overlay-${id})" opacity="0.55"/>
              <line x1="26" y1="30" x2="26" y2="70" stroke="#ffffff" stroke-width="1.5" opacity="0.3"/>
            </g>
        `;
  } else if (instrument === 'gran_cassa') {
    shapes = `
            <circle cx="50" cy="50" r="47" fill="#1e293b" opacity="0.08"/>
            
            <!-- Large suspended orchestral bass drum inside a heavy metal cradle stand -->
            <g transform="rotate(5, 50, 50)">
              <!-- Stand bottom horizontal support shadow -->
              <ellipse cx="50" cy="88" rx="36" ry="4" fill="#020617" opacity="0.75" filter="blur(2.5px)"/>
              
              <!-- Suspension stand outer circular frame (black tubular steel) -->
              <circle cx="50" cy="48" r="44" fill="none" stroke="#09090b" stroke-width="3" filter="drop-shadow(0 3px 5px rgba(0,0,0,0.5))"/>
              <!-- Stand feet and vertical bars -->
              <line x1="22" y1="76" x2="16" y2="88" stroke="#18181b" stroke-width="3.2" stroke-linecap="round"/>
              <line x1="78" y1="76" x2="84" y2="88" stroke="#18181b" stroke-width="3.2" stroke-linecap="round"/>
              <line x1="16" y1="88" x2="84" y2="88" stroke="#18181b" stroke-width="3.2" stroke-linecap="round"/>
              
              <!-- Circular wooden shell deep cylinder suspended inside stand -->
              <circle cx="50" cy="48" r="32" fill="#2d1a12" stroke="#0c0402" stroke-width="2.5" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.45))"/>
              
              <!-- Thick calfskin white drumheads stretched over flesh hoops with tuning lugs -->
              <circle cx="50" cy="48" r="29" fill="url(#skin-${id})" stroke="#8a5b30" stroke-width="1.5"/>
              <circle cx="50" cy="48" r="26.5" fill="none" stroke="#ad845b" stroke-width="0.8" opacity="0.5"/>
              
              <!-- Elastic suspension bands/ropes connecting shell to the outer circular stand -->
              <path d="M 50 4 L 50 16 M 50 92 L 50 80 M 6 48 L 18 48 M 94 48 L 82 48 M 18 16 L 8 26 M 82 16 L 92 26 M 18 80 L 8 70 M 82 80 L 92 70" stroke="#ef4444" stroke-width="1.4" opacity="0.85" stroke-linecap="round"/>
              
              <!-- Heavy fluffy mallet/beater hanging or crossing the drumhead -->
              <g transform="translate(42, 38) rotate(-35)">
                <!-- Handle -->
                <line x1="-12" y1="28" x2="12" y2="-28" stroke="#fef08a" stroke-width="1.8" stroke-linecap="round" filter="drop-shadow(1px 2px 2px rgba(0,0,0,0.4))"/>
                <!-- Fluffy head -->
                <circle cx="12" cy="-28" r="4.5" fill="#f8fafc" stroke="#cbd5e1" stroke-width="0.5" filter="drop-shadow(0px 1.5px 1.5px rgba(0,0,0,0.3))"/>
              </g>
              
              <!-- Ambient 3D shading on head -->
              <circle cx="50" cy="48" r="29" fill="url(#overlay-${id})" opacity="0.75"/>
            </g>
        `;
  } else if (instrument === 'gome') {
    shapes = `
            <!-- Heavy bottom shadow -->
            <rect x="2" y="3" width="96" height="96" rx="6" fill="#020617" opacity="0.6" filter="blur(2px)"/>
            
            <!-- Thick wooden frame -->
            <rect x="4" y="4" width="92" height="92" rx="6" fill="url(#skin-${id})" stroke="#1e1b18" stroke-width="4"/>
            
            <!-- Corner brackets/reinforcements -->
            <path d="M 4 20 L 20 4 M 96 20 L 80 4 M 4 80 L 20 96 M 96 80 L 80 96" stroke="#475569" stroke-width="3" opacity="0.8"/>
            
            <!-- Inner square skin head -->
            <rect x="12" y="12" width="76" height="76" rx="4" fill="url(#skin-${id})" filter="brightness(1.1)" stroke="#271305" stroke-width="1.5"/>
            
            <!-- Tuning pegs/screws on the sides -->
            <circle cx="50" cy="8" r="3" fill="url(#chrome-${id})" stroke="#0f172a" stroke-width="0.5"/>
            <circle cx="50" cy="92" r="3" fill="url(#chrome-${id})" stroke="#0f172a" stroke-width="0.5"/>
            <circle cx="8" cy="50" r="3" fill="url(#chrome-${id})" stroke="#0f172a" stroke-width="0.5"/>
            <circle cx="92" cy="50" r="3" fill="url(#chrome-${id})" stroke="#0f172a" stroke-width="0.5"/>
            
            <!-- Ambient 3D lighting cover -->
            <rect x="12" y="12" width="76" height="76" rx="4" fill="url(#overlay-${id})"/>
        `;
  } else if (instrument === 'friction_drum') {
    shapes = `
            <!-- Heavy bottom shadow -->
            <circle cx="50" cy="51" r="48" fill="#020617" opacity="0.6" filter="blur(2px)"/>
            
            <!-- Heavy clay/wood bowl rim -->
            <circle cx="50" cy="50" r="47.5" fill="none" stroke="#7c2d12" stroke-width="4.5"/>
            
            <!-- Natural stretched bladder/skin head -->
            <circle cx="50" cy="50" r="44.5" fill="url(#skin-${id})"/>
            
            <!-- Centered rod/stick node tie detail with a prominent friction cane stick rising up -->
            <circle cx="50" cy="50" r="8" fill="none" stroke="#451a03" stroke-width="1.5" stroke-dasharray="2 2" opacity="0.7"/>
            <circle cx="50" cy="50" r="4" fill="#a16207" stroke="#451a03" stroke-width="0.8"/>
            <line x1="50" y1="50" x2="68" y2="32" stroke="#eab308" stroke-width="3" stroke-linecap="round" filter="drop-shadow(1px 2px 2px rgba(0,0,0,0.4))"/>
            <line x1="50" y1="50" x2="68" y2="32" stroke="#ffffff" stroke-width="1" opacity="0.5" stroke-linecap="round"/>
            
            <!-- Ambient 3D lighting cover -->
            <circle cx="50" cy="50" r="44.5" fill="url(#overlay-${id})"/>
        `;
  } else if (instrument === 'mechanical_keyboard') {
    shapes = `
            <!-- Keyboard casing shadow -->
            <rect x="6" y="24" width="88" height="54" rx="6" fill="#020617" opacity="0.75" filter="blur(3px)"/>
            
            <!-- Aluminum mechanical keyboard bezel -->
            <rect x="8" y="22" width="84" height="52" rx="5" fill="#1e293b" stroke="#475569" stroke-width="1.5"/>
            
            <!-- Dark keycap grid plate -->
            <rect x="12" y="26" width="76" height="44" rx="3" fill="#0f172a" stroke="#334155" stroke-width="1"/>
            
            <!-- Escape Key (Cyan glow) -->
            <rect x="14" y="28" width="8" height="6" rx="1.5" fill="#06b6d4" stroke="#0891b2" stroke-width="0.5" filter="drop-shadow(0 0 1.5px #06b6d4)"/>
            <line x1="16" y1="30" x2="20" y2="30" stroke="#ffffff" stroke-width="0.5" opacity="0.5"/>
            
            <!-- Function Row / Number Keys (Gray) -->
            <rect x="24" y="28" width="6" height="6" rx="1" fill="#334155"/>
            <rect x="31" y="28" width="6" height="6" rx="1" fill="#334155"/>
            <rect x="38" y="28" width="6" height="6" rx="1" fill="#334155"/>
            <rect x="45" y="28" width="6" height="6" rx="1" fill="#334155"/>
            <rect x="52" y="28" width="6" height="6" rx="1" fill="#334155"/>
            <rect x="59" y="28" width="6" height="6" rx="1" fill="#334155"/>
            <rect x="66" y="28" width="6" height="6" rx="1" fill="#334155"/>
            <rect x="73" y="28" width="6" height="6" rx="1" fill="#334155"/>
            
            <!-- Backspace Key (Orange/Red) -->
            <rect x="80" y="28" width="8" height="6" rx="1.5" fill="#f97316" stroke="#ea580c" stroke-width="0.5"/>
            
            <!-- QWERTY Row -->
            <rect x="14" y="36" width="6" height="6" rx="1" fill="#475569"/>
            <rect x="21" y="36" width="6" height="6" rx="1" fill="#475569"/>
            <rect x="28" y="36" width="6" height="6" rx="1" fill="#475569"/>
            <rect x="35" y="36" width="6" height="6" rx="1" fill="#475569"/>
            <rect x="42" y="36" width="6" height="6" rx="1" fill="#475569"/>
            <rect x="49" y="36" width="6" height="6" rx="1" fill="#475569"/>
            <rect x="56" y="36" width="6" height="6" rx="1" fill="#475569"/>
            <rect x="63" y="36" width="6" height="6" rx="1" fill="#475569"/>
            <rect x="70" y="36" width="6" height="6" rx="1" fill="#475569"/>
            <rect x="77" y="36" width="11" height="6" rx="1.5" fill="#f43f5e" stroke="#e11d48" stroke-width="0.5" filter="drop-shadow(0 0 1px #f43f5e)"/>
            
            <!-- ASDF Row -->
            <rect x="14" y="44" width="8" height="6" rx="1" fill="#334155"/>
            <rect x="23" y="44" width="6" height="6" rx="1" fill="#475569"/>
            <rect x="30" y="44" width="6" height="6" rx="1" fill="#475569"/>
            <rect x="37" y="44" width="6" height="6" rx="1" fill="#475569"/>
            <rect x="44" y="44" width="6" height="6" rx="1" fill="#475569"/>
            <rect x="51" y="44" width="6" height="6" rx="1" fill="#475569"/>
            <rect x="58" y="44" width="6" height="6" rx="1" fill="#475569"/>
            <rect x="65" y="44" width="6" height="6" rx="1" fill="#475569"/>
            <rect x="72" y="44" width="16" height="6" rx="1.5" fill="#f43f5e" stroke="#e11d48" stroke-width="0.5"/>
            
            <!-- Bottom Spacebar Row -->
            <rect x="14" y="52" width="8" height="6" rx="1" fill="#334155"/>
            <rect x="24" y="52" width="6" height="6" rx="1" fill="#334155"/>
            <rect x="32" y="52" width="6" height="6" rx="1" fill="#334155"/>
            <rect x="40" y="52" width="30" height="6" rx="1.5" fill="#1e293b" stroke="#38bdf8" stroke-width="1" filter="drop-shadow(0 0 1.5px #38bdf8)"/>
            <rect x="72" y="52" width="6" height="6" rx="1" fill="#334155"/>
            <rect x="80" y="52" width="8" height="6" rx="1" fill="#334155"/>
            
            <!-- Elegant key status indicator lights -->
            <circle cx="86" cy="24" r="0.8" fill="#10b981"/>
            <circle cx="89" cy="24" r="0.8" fill="#64748b"/>
            <circle cx="92" cy="24" r="0.8" fill="#64748b"/>
        `;
  } else if (instrument === 'synsonics_drums') {
    shapes = `
            <!-- Retro console shadow -->
            <rect x="8" y="16" width="84" height="68" rx="10" fill="#020617" opacity="0.7" filter="blur(3.5px)"/>
            
            <!-- Sleek 1980s ABS plastic console casing -->
            <rect x="10" y="14" width="80" height="66" rx="8" fill="#2d3139" stroke="#1a1c23" stroke-width="2"/>
            
            <!-- Retro dynamic dual-stripe decal lines (Teal/Orange) -->
            <path d="M 10 24 L 90 24 M 10 26 L 90 26" stroke="#06b6d4" stroke-width="0.8" opacity="0.6"/>
            <path d="M 10 28 L 90 28" stroke="#f97316" stroke-width="0.8" opacity="0.6"/>
            
            <!-- Vintage "SYNSONICS" logo -->
            <rect x="18" y="18" width="28" height="5" rx="1" fill="#1e2026"/>
            <text x="32" y="21.5" font-family="'Courier New', monospace" font-size="2.5" font-weight="900" fill="#06b6d4" text-anchor="middle" letter-spacing="0.2">SYNSONICS</text>
            
            <!-- LED status indicator light -->
            <circle cx="80" cy="21" r="1.5" fill="#ef4444" filter="drop-shadow(0 0 2px #ef4444)"/>
            
            <!-- Circular rubber touchpads -->
            <circle cx="32" cy="42" r="13" fill="#1e1f24" stroke="#475569" stroke-width="1.2"/>
            <circle cx="32" cy="42" r="11" fill="#141519" stroke="#ef4444" stroke-width="1" opacity="0.8"/>
            
            <circle cx="68" cy="42" r="13" fill="#1e1f24" stroke="#475569" stroke-width="1.2"/>
            <circle cx="68" cy="42" r="11" fill="#141519" stroke="#eab308" stroke-width="1" opacity="0.8"/>
            
            <circle cx="32" cy="68" r="13" fill="#1e1f24" stroke="#475569" stroke-width="1.2"/>
            <circle cx="32" cy="68" r="11" fill="#141519" stroke="#06b6d4" stroke-width="1" opacity="0.8"/>
            
            <circle cx="68" cy="68" r="13" fill="#1e1f24" stroke="#475569" stroke-width="1.2"/>
            <circle cx="68" cy="68" r="11" fill="#141519" stroke="#10b981" stroke-width="1" opacity="0.8"/>
            
            <!-- Slider bank -->
            <rect x="47" y="45" width="6" height="24" rx="1" fill="#1e2026" stroke="#475569" stroke-width="0.5"/>
            <line x1="50" y1="47" x2="50" y2="67" stroke="#475569" stroke-width="0.8" stroke-dasharray="2 2"/>
            <rect x="48" y="54" width="4" height="2.5" rx="0.5" fill="#f97316"/>
        `;
  } else if (instrument === 'hydraulic_piston') {
    shapes = `
            <!-- Heavy bottom industrial shadow -->
            <rect x="22" y="10" width="56" height="84" rx="8" fill="#020617" opacity="0.7" filter="blur(4px)"/>
            
            <!-- Piston outer heavy cast-iron jacket -->
            <rect x="26" y="28" width="48" height="60" rx="4" fill="#334155" stroke="#1e293b" stroke-width="2.5"/>
            <rect x="23" y="80" width="54" height="10" rx="2" fill="#1e293b"/>
            
            <!-- Industrial textures -->
            <rect x="26" y="36" width="48" height="6" fill="#475569"/>
            <rect x="26" y="56" width="48" height="6" fill="#475569"/>
            
            <!-- Bolts -->
            <circle cx="30" cy="85" r="2.2" fill="url(#chrome-${id})" stroke="#0f172a" stroke-width="0.5"/>
            <circle cx="70" cy="85" r="2.2" fill="url(#chrome-${id})" stroke="#0f172a" stroke-width="0.5"/>
            
            <!-- Piston rod -->
            <rect x="42" y="4" width="16" height="30" fill="url(#chrome-${id})" stroke="#1e293b" stroke-width="1.5"/>
            <rect x="38" y="24" width="24" height="6" rx="1.5" fill="url(#chrome-${id})" stroke="#0f172a" stroke-width="1"/>
            
            <!-- Pipe -->
            <path d="M 26 42 Q 10 42, 10 60 Q 10 74, 23 82" fill="none" stroke="url(#chrome-${id})" stroke-width="2.5" filter="drop-shadow(1px 2px 2px rgba(0,0,0,0.5))"/>
            
            <!-- Pressure gauge -->
            <circle cx="50" cy="48" r="8.5" fill="#f8fafc" stroke="#1e293b" stroke-width="1.2"/>
            <circle cx="50" cy="48" r="7" fill="none" stroke="#ef4444" stroke-width="0.6" stroke-dasharray="1 3" opacity="0.8"/>
            <line x1="50" y1="48" x2="54" y2="44" stroke="#ef4444" stroke-width="1" stroke-linecap="round"/>
            <circle cx="50" cy="48" r="1.2" fill="#0f172a"/>
            
            <rect x="36" y="68" width="28" height="4" rx="1" fill="#0f172a"/>
            
            <!-- Steam clouds -->
            <path d="M 40 18 C 36 14, 34 8, 38 4 C 42 0, 46 2, 48 6 C 50 10, 54 12, 52 16" fill="none" stroke="#e2e8f0" stroke-width="1.8" opacity="0.4" stroke-linecap="round" filter="blur(0.8px)"/>
            <path d="M 52 18 C 56 14, 58 8, 54 4 C 50 0, 46 2, 44 6 C 42 10, 38 12, 40 16" fill="none" stroke="#e2e8f0" stroke-width="1.2" opacity="0.3" stroke-linecap="round" filter="blur(0.8px)"/>
        `;
  } else if (instrument === 'bop_it') {
    shapes = `
            <!-- Curved gamepad shadow -->
            <path d="M 20 50 Q 50 25, 80 50 Q 50 75, 20 50" fill="#020617" opacity="0.65" filter="blur(3px)"/>
            
            <!-- Ergonomic purple body -->
            <path d="M 18 50 Q 50 22, 82 50 Q 50 78, 18 50 Z" fill="#6b21a8" stroke="#3b0764" stroke-width="2.5" filter="drop-shadow(0 3px 5px rgba(0,0,0,0.4))"/>
            <path d="M 28 50 Q 50 32, 72 50 Q 50 68, 28 50" fill="none" stroke="#10b981" stroke-width="1.5" opacity="0.7" stroke-dasharray="3, 3"/>
            
            <!-- Center Bop It button -->
            <circle cx="50" cy="50" r="14" fill="#22c55e" stroke="#15803d" stroke-width="1.8" filter="drop-shadow(0 2px 3px rgba(0,0,0,0.5))"/>
            <circle cx="50" cy="49" r="11" fill="none" stroke="#ffffff" stroke-width="0.6" opacity="0.4"/>
            <text x="50" y="52" font-family="'Arial Black', Impact, sans-serif" font-weight="900" font-size="3.2" fill="#ffffff" text-anchor="middle" filter="drop-shadow(0.5px 0.5px 0.5px #15803d)">BOP IT</text>
            
            <!-- Twist handle -->
            <path d="M 18 50 L 5 44 L 5 56 Z" fill="#eab308" stroke="#a16207" stroke-width="1.2"/>
            <rect x="2" y="42" width="4" height="16" rx="1.5" fill="#eab308" stroke="#a16207" stroke-width="1"/>
            <line x1="4" y1="45" x2="4" y2="55" stroke="#713f12" stroke-width="1" stroke-dasharray="1 2"/>
            
            <!-- Pull handle -->
            <path d="M 82 50 L 91 46 L 91 54 Z" fill="#3b82f6" stroke="#1d4ed8" stroke-width="1.2"/>
            <rect x="91" y="42" width="6" height="16" rx="1" fill="#3b82f6" stroke="#1d4ed8" stroke-width="1.2"/>
            <circle cx="94" cy="50" r="2.5" fill="#172554"/>
            
            <!-- Speaker holes -->
            <circle cx="34" cy="40" r="0.8" fill="#180029"/>
            <circle cx="37" cy="40" r="0.8" fill="#180029"/>
            <circle cx="34" cy="43" r="0.8" fill="#180029"/>
            <circle cx="37" cy="43" r="0.8" fill="#180029"/>
            <circle cx="34" cy="46" r="0.8" fill="#180029"/>
            <circle cx="66" cy="60" r="0.8" fill="#180029"/>
            <circle cx="63" cy="60" r="0.8" fill="#180029"/>
            <circle cx="66" cy="57" r="0.8" fill="#180029"/>
            <circle cx="63" cy="57" r="0.8" fill="#180029"/>
            <circle cx="66" cy="54" r="0.8" fill="#180029"/>
        `;
  } else if (instrument === 'moo_box') {
    shapes = `
            <!-- Heavy bottom shadow -->
            <ellipse cx="50" cy="80" rx="36" ry="12" fill="#020617" opacity="0.65" filter="blur(3.5px)"/>
            
            <!-- Tin Body -->
            <rect x="18" y="14" width="64" height="64" fill="url(#skin-${id})" stroke="#1e293b" stroke-width="1.5" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.35))"/>
            
            <!-- Cow spots -->
            <path d="M 22 24 C 26 24, 28 28, 26 32 C 24 36, 20 34, 19 30 C 18 26, 20 24, 22 24 Z" fill="#1e1b18" opacity="0.85"/>
            <path d="M 72 44 C 76 40, 80 44, 78 52 C 76 60, 68 58, 70 50 C 72 44, 70 46, 72 44 Z" fill="#1e1b18" opacity="0.85"/>
            <path d="M 45 48 C 52 46, 56 52, 50 58 C 44 64, 38 60, 40 54 C 42 48, 42 50, 45 48 Z" fill="#1e1b18" opacity="0.85"/>
            
            <!-- Grass illustration -->
            <path d="M 18 78 L 22 68 L 26 78 L 30 70 L 34 78" fill="none" stroke="#22c55e" stroke-width="1.5" opacity="0.7" stroke-linecap="round"/>
            <path d="M 62 78 L 66 68 L 70 78 L 74 72 L 78 78" fill="none" stroke="#22c55e" stroke-width="1.2" opacity="0.7" stroke-linecap="round"/>
            
            <!-- Caps -->
            <ellipse cx="50" cy="14" rx="32" ry="10" fill="url(#chrome-${id})" stroke="#0f172a" stroke-width="1"/>
            <ellipse cx="50" cy="14" rx="28" ry="8.5" fill="#e2e8f0" stroke="#94a3b8" stroke-width="0.5"/>
            
            <circle cx="50" cy="14" r="1" fill="#0f172a"/>
            <circle cx="44" cy="13" r="0.8" fill="#0f172a"/>
            <circle cx="56" cy="15" r="0.8" fill="#0f172a"/>
            <circle cx="48" cy="9" r="0.8" fill="#0f172a"/>
            <circle cx="52" cy="19" r="0.8" fill="#0f172a"/>
            
            <ellipse cx="50" cy="78" rx="32" ry="10" fill="url(#chrome-${id})" stroke="#0f172a" stroke-width="1"/>
        `;
  } else if (instrument === 'pakhavaj') {
    shapes = `
            <!-- Bottom shadow -->
            <path d="M 10 52 Q 50 82, 90 52" fill="#020617" opacity="0.7" filter="blur(3.5px)"/>
            
            <!-- Barrel body -->
            <path d="M 14 36 Q 50 14, 86 28 L 86 72 Q 50 86, 14 64 Z" fill="#9a3412" stroke="#431407" stroke-width="2" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.45))"/>
            <path d="M 22 42 Q 50 32, 78 40 M 20 54 Q 50 48, 80 52 M 22 64 Q 50 62, 76 60" fill="none" stroke="#431407" stroke-width="0.5" opacity="0.25"/>
            
            <!-- Laces -->
            <path d="M 14 38 L 86 32 M 14 44 L 86 40 M 14 50 L 86 48 M 14 56 L 86 56 M 14 62 L 86 64" stroke="#f59e0b" stroke-width="1.2" opacity="0.75" filter="drop-shadow(0 1px 1.5px rgba(0,0,0,0.3))"/>
            
            <!-- Tuning blocks -->
            <rect x="36" y="28" width="6" height="12" rx="1" fill="#b45309" stroke="#431407" stroke-width="0.6" transform="rotate(15, 39, 34)"/>
            <rect x="48" y="32" width="6" height="12" rx="1" fill="#b45309" stroke="#431407" stroke-width="0.6" transform="rotate(10, 51, 38)"/>
            <rect x="60" y="38" width="6" height="12" rx="1" fill="#b45309" stroke="#431407" stroke-width="0.6" transform="rotate(5, 63, 44)"/>
            <rect x="32" y="56" width="6" height="12" rx="1" fill="#b45309" stroke="#431407" stroke-width="0.6" transform="rotate(-15, 35, 62)"/>
            <rect x="44" y="58" width="6" height="12" rx="1" fill="#b45309" stroke="#431407" stroke-width="0.6" transform="rotate(-10, 47, 64)"/>
            <rect x="56" y="58" width="6" height="12" rx="1" fill="#b45309" stroke="#431407" stroke-width="0.6" transform="rotate(-5, 59, 64)"/>
            
            <!-- Left head -->
            <ellipse cx="14" cy="50" rx="8" ry="14" fill="#fef08a" stroke="#d97706" stroke-width="1.8"/>
            <ellipse cx="14" cy="50" rx="4.5" ry="8" fill="#b45309" opacity="0.15"/>
            
            <!-- Right head -->
            <ellipse cx="86" cy="50" rx="6" ry="11" fill="#fbcfe8" stroke="#be185d" stroke-width="1.8"/>
            <ellipse cx="86" cy="50" rx="3.5" ry="6.5" fill="#18181b" stroke="#27272a" stroke-width="0.8"/>
        `;
  } else if (instrument === 'binzasara') {
    shapes = `
            <!-- Flowing wavy bottom shadow -->
            <path d="M 12 56 Q 30 20, 50 56 T 88 56" fill="none" stroke="#020617" stroke-width="12" opacity="0.55" stroke-linecap="round" filter="blur(3.5px)"/>
            
            <!-- Spine cords -->
            <path d="M 12 50 Q 30 16, 50 50 T 88 50" fill="none" stroke="#18181b" stroke-width="2" stroke-linecap="round" opacity="0.8"/>
            <path d="M 12 44 Q 30 10, 50 44 T 88 44" fill="none" stroke="#18181b" stroke-width="1.5" stroke-linecap="round" opacity="0.6"/>
            
            <!-- Wooden slats -->
            <rect x="15" y="44" width="4" height="18" rx="0.5" fill="#b45309" stroke="#451a03" stroke-width="0.5" transform="rotate(25, 17, 53)"/>
            <rect x="20" y="38" width="4" height="18" rx="0.5" fill="#ca8a04" stroke="#713f12" stroke-width="0.5" transform="rotate(15, 22, 47)"/>
            <rect x="25" y="33" width="4" height="18" rx="0.5" fill="#b45309" stroke="#451a03" stroke-width="0.5" transform="rotate(5, 27, 42)"/>
            <rect x="30" y="30" width="4" height="18" rx="0.5" fill="#ca8a04" stroke="#713f12" stroke-width="0.5" transform="rotate(-5, 32, 39)"/>
            <rect x="35" y="29" width="4" height="18" rx="0.5" fill="#b45309" stroke="#451a03" stroke-width="0.5" transform="rotate(-15, 37, 38)"/>
            <rect x="40" y="30" width="4" height="18" rx="0.5" fill="#ca8a04" stroke="#713f12" stroke-width="0.5" transform="rotate(-25, 42, 39)"/>
            <rect x="46" y="34" width="4" height="18" rx="0.5" fill="#b45309" stroke="#451a03" stroke-width="0.5" transform="rotate(-15, 48, 43)"/>
            <rect x="51" y="40" width="4" height="18" rx="0.5" fill="#ca8a04" stroke="#713f12" stroke-width="0.5" transform="rotate(0, 53, 49)"/>
            <rect x="56" y="46" width="4" height="18" rx="0.5" fill="#b45309" stroke="#451a03" stroke-width="0.5" transform="rotate(15, 58, 55)"/>
            <rect x="61" y="52" width="4" height="18" rx="0.5" fill="#ca8a04" stroke="#713f12" stroke-width="0.5" transform="rotate(25, 63, 61)"/>
            <rect x="66" y="55" width="4" height="18" rx="0.5" fill="#b45309" stroke="#451a03" stroke-width="0.5" transform="rotate(15, 68, 64)"/>
            <rect x="71" y="55" width="4" height="18" rx="0.5" fill="#ca8a04" stroke="#713f12" stroke-width="0.5" transform="rotate(-5, 73, 64)"/>
            <rect x="76" y="51" width="4" height="18" rx="0.5" fill="#b45309" stroke="#451a03" stroke-width="0.5" transform="rotate(-20, 78, 60)"/>
            <rect x="81" y="45" width="4" height="18" rx="0.5" fill="#ca8a04" stroke="#713f12" stroke-width="0.5" transform="rotate(-30, 83, 54)"/>
            
            <!-- Handles -->
            <rect x="8" y="40" width="6" height="24" rx="2.5" fill="#78350f" stroke="#451a03" stroke-width="1" transform="rotate(35, 11, 52)" filter="drop-shadow(0 2px 3px rgba(0,0,0,0.4))"/>
            <circle cx="10" cy="46" r="1.5" fill="#fef08a" opacity="0.9"/>
            <rect x="86" y="36" width="6" height="24" rx="2.5" fill="#78350f" stroke="#451a03" stroke-width="1" transform="rotate(-40, 89, 48)" filter="drop-shadow(0 2px 3px rgba(0,0,0,0.4))"/>
            <circle cx="90" cy="42" r="1.5" fill="#fef08a" opacity="0.9"/>
        `;
  } else if (instrument === 'caxixi') {
    shapes = `
            <!-- Soft flat bottom shadow -->
            <ellipse cx="50" cy="84" rx="24" ry="7.5" fill="#020617" opacity="0.6" filter="blur(2.5px)"/>
            
            <!-- Calabash gourd bottom plate -->
            <ellipse cx="50" cy="82" rx="21" ry="6.5" fill="#d97706" stroke="#78350f" stroke-width="2"/>
            <ellipse cx="50" cy="81.5" rx="17" ry="4.5" fill="#f59e0b" stroke="#b45309" stroke-width="0.5" opacity="0.5"/>
            
            <!-- Straw woven body -->
            <path d="M 50 26 C 42 45, 31 70, 30 80 Q 50 86, 70 80 C 69 70, 58 45, 50 26 Z" fill="url(#skin-${id})" stroke="#7c2d12" stroke-width="1.2" filter="drop-shadow(0 3px 5px rgba(0,0,0,0.35))"/>
            
            <!-- Weave lines -->
            <path d="M 45 35 L 67 76 M 40 43 L 64 80 M 35 52 L 56 82 M 31 63 L 44 83" fill="none" stroke="#7c2d12" stroke-width="0.8" opacity="0.45"/>
            <path d="M 55 35 L 33 76 M 60 43 L 36 80 M 65 52 L 44 82 M 69 63 L 56 83" fill="none" stroke="#7c2d12" stroke-width="0.8" opacity="0.45"/>
            
            <!-- Horizontal rings -->
            <path d="M 46 34 Q 50 36, 54 34 M 42 44 Q 50 47, 58 44 M 38 54 Q 50 58, 62 54 M 34 64 Q 50 68, 66 64 M 31 74 Q 50 78, 69 74" fill="none" stroke="#7c2d12" stroke-width="1.2" opacity="0.3"/>
            
            <!-- Woven handle loop -->
            <path d="M 50 26 Q 50 5, 42 5 T 35 24 Q 42 24, 50 26" fill="none" stroke="#b45309" stroke-width="3.5" stroke-linecap="round" filter="drop-shadow(0.5px 1px 1.5px rgba(0,0,0,0.4))"/>
            <path d="M 50 26 Q 50 5, 58 5 T 65 24 Q 58 24, 50 26" fill="none" stroke="#ca8a04" stroke-width="2" stroke-linecap="round" opacity="0.8"/>
        `;
  } else if (instrument === 'slap_tubes') {
    shapes = `
            <!-- Shadow -->
            <ellipse cx="50" cy="82" rx="34" ry="10" fill="#020617" opacity="0.6" filter="blur(3px)"/>
            
            <!-- 4 Parallel Tubes of varying lengths -->
            <!-- Tube 1 (Red/Orange) -->
            <rect x="22" y="15" width="10" height="60" rx="3" fill="#ea580c" stroke="#7c2d12" stroke-width="1.2"/>
            <rect x="22" y="15" width="10" height="3" fill="#ff7e33" opacity="0.5"/>
            <circle cx="27" cy="18" r="1.5" fill="#7c2d12"/>
            
            <!-- Tube 2 (Teal) -->
            <rect x="36" y="25" width="10" height="50" rx="3" fill="#0d9488" stroke="#115e59" stroke-width="1.2"/>
            <rect x="36" y="25" width="10" height="3" fill="#2dd4bf" opacity="0.5"/>
            <circle cx="41" cy="28" r="1.5" fill="#115e59"/>
            
            <!-- Tube 3 (Blue) -->
            <rect x="50" y="32" width="10" height="43" rx="3" fill="#2563eb" stroke="#1e3a8a" stroke-width="1.2"/>
            <rect x="50" y="32" width="10" height="3" fill="#60a5fa" opacity="0.5"/>
            <circle cx="55" cy="35" r="1.5" fill="#1e3a8a"/>
            
            <!-- Tube 4 (Purple) -->
            <rect x="64" y="40" width="10" height="35" rx="3" fill="#7c3aed" stroke="#4c1d95" stroke-width="1.2"/>
            <rect x="64" y="40" width="10" height="3" fill="#a78bfa" opacity="0.5"/>
            <circle cx="69" cy="43" r="1.5" fill="#4c1d95"/>
            
            <!-- Strike paddle overlay -->
            <path d="M 12 40 L 40 45 L 35 55 L 12 43 Z" fill="#475569" stroke="#1e293b" stroke-width="1" filter="drop-shadow(0 2px 3px rgba(0,0,0,0.4))" opacity="0.85"/>
            <line x1="14" y1="42" x2="33" y2="46" stroke="#94a3b8" stroke-width="1"/>
        `;
  } else if (instrument === 'whistle_drum') {
    shapes = `
            <!-- Flat bottom shadow -->
            <ellipse cx="50" cy="82" rx="28" ry="10" fill="#020617" opacity="0.65" filter="blur(3.5px)"/>
            
            <!-- Clay Vessel Pot -->
            <path d="M 50 18 Q 30 18, 30 30 Q 30 42, 22 55 Q 16 70, 30 78 Q 50 82, 70 78 Q 84 70, 78 55 Q 70 42, 70 30 Q 70 18, 50 18 Z" fill="#d97706" stroke="#78350f" stroke-width="2" filter="drop-shadow(0 4px 5px rgba(0,0,0,0.35))"/>
            
            <!-- Pot rim lip -->
            <ellipse cx="50" cy="22" rx="16" ry="4" fill="#ca8a04" stroke="#78350f" stroke-width="1"/>
            <ellipse cx="50" cy="22" rx="11" ry="2.5" fill="#451a03"/>
            
            <!-- Integrated Whistle chamber / duck bill shape -->
            <path d="M 22 55 Q 12 50, 10 58 Q 10 66, 22 62 Z" fill="#b45309" stroke="#451a03" stroke-width="1.2"/>
            <!-- Whistle mouth slot -->
            <rect x="12" y="55" width="4" height="2" rx="0.5" fill="#1c1917" transform="rotate(-15, 14, 56)"/>
            
            <!-- Water wavy patterns on clay skin -->
            <path d="M 32 60 Q 42 63, 50 60 T 68 60" fill="none" stroke="#f59e0b" stroke-width="1.5" opacity="0.5"/>
            <path d="M 30 68 Q 42 71, 50 68 T 70 68" fill="none" stroke="#f59e0b" stroke-width="1.5" opacity="0.5"/>
        `;
  } else if (instrument === 'singing_bowl') {
    shapes = `
            <!-- Ground shadow -->
            <ellipse cx="50" cy="80" rx="38" ry="12" fill="#020617" opacity="0.7" filter="blur(4px)"/>
            
            <!-- Brass Bowl body -->
            <path d="M 12 36 C 12 65, 30 80, 50 80 C 70 80, 88 65, 88 36 Z" fill="#eab308" stroke="#854d0e" stroke-width="2.5" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.35))"/>
            <path d="M 16 38 C 16 63, 31 76, 50 76 C 69 76, 84 63, 84 38 Z" fill="#ca8a04" stroke="#a16207" stroke-width="1" opacity="0.6"/>
            
            <!-- Inner rim and gold reflection lip -->
            <ellipse cx="50" cy="36" rx="38" ry="10" fill="#a16207" stroke="#854d0e" stroke-width="2"/>
            <ellipse cx="50" cy="36" rx="36" ry="8" fill="#eab308" stroke="#ca8a04" stroke-width="0.8"/>
            <ellipse cx="50" cy="36" rx="33" ry="6.5" fill="#713f12"/>
            
            <!-- Soundwave resonating concentric ripples -->
            <ellipse cx="50" cy="36" rx="26" ry="5" fill="none" stroke="#fef08a" stroke-width="1.2" opacity="0.45" stroke-dasharray="3, 3"/>
            <ellipse cx="50" cy="36" rx="18" ry="3.5" fill="none" stroke="#fef08a" stroke-width="1.0" opacity="0.6" stroke-dasharray="2, 2"/>
            
            <!-- Wooden mallet placed diagonally underneath -->
            <rect x="65" y="10" width="8" height="60" rx="2" fill="#78350f" stroke="#451a03" stroke-width="1" transform="rotate(35, 69, 40)" filter="drop-shadow(2px 2px 3px rgba(0,0,0,0.5))"/>
            <!-- Mallet felt / suede wrapping tip -->
            <rect x="63" y="10" width="12" height="20" rx="1.5" fill="#f43f5e" stroke="#be185d" stroke-width="0.8" transform="rotate(35, 69, 40)"/>
        `;
  } else if (instrument === 'quijada') {
    shapes = `
            <!-- Floating shadow -->
            <path d="M 15 78 C 30 78, 50 68, 85 78 C 50 86, 30 82, 15 78 Z" fill="#020617" opacity="0.55" filter="blur(3.5px)"/>
            
            <!-- Jawbone white/beige curve -->
            <path d="M 12 30 C 12 70, 35 80, 85 70 C 88 55, 80 40, 75 42 C 78 55, 75 62, 50 64 C 30 64, 25 50, 24 30 Z" fill="#f5f5f4" stroke="#78716c" stroke-width="2.2" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.3))"/>
            
            <!-- Red/Teeth details on the upper border -->
            <path d="M 32 64 C 35 63, 45 63, 50 64 C 60 63, 70 61, 74 54" fill="none" stroke="#fda4af" stroke-width="2.5" stroke-linecap="round"/>
            
            <!-- Individual Bone Teeth (rattles) -->
            <circle cx="34" cy="62" r="1.5" fill="#fafaf9" stroke="#78716c" stroke-width="0.5"/>
            <circle cx="38" cy="61.5" r="1.5" fill="#fafaf9" stroke="#78716c" stroke-width="0.5"/>
            <circle cx="42" cy="61" r="1.5" fill="#fafaf9" stroke="#78716c" stroke-width="0.5"/>
            <circle cx="46" cy="61" r="1.5" fill="#fafaf9" stroke="#78716c" stroke-width="0.5"/>
            <circle cx="50" cy="61.5" r="1.5" fill="#fafaf9" stroke="#78716c" stroke-width="0.5"/>
            <circle cx="54" cy="61.5" r="1.5" fill="#fafaf9" stroke="#78716c" stroke-width="0.5"/>
            <circle cx="58" cy="61" r="1.5" fill="#fafaf9" stroke="#78716c" stroke-width="0.5"/>
            <circle cx="62" cy="60" r="1.5" fill="#fafaf9" stroke="#78716c" stroke-width="0.5"/>
            <circle cx="66" cy="58" r="1.5" fill="#fafaf9" stroke="#78716c" stroke-width="0.5"/>
            <circle cx="70" cy="56" r="1.5" fill="#fafaf9" stroke="#78716c" stroke-width="0.5"/>
            
            <!-- Hollow cavity lines -->
            <path d="M 16 35 C 16 55, 20 62, 28 66" fill="none" stroke="#d6d3d1" stroke-width="1.5"/>
            <ellipse cx="80" cy="48" rx="3" ry="5" fill="#44403c" transform="rotate(-15, 80, 48)"/>
        `;
  } else if (instrument === 'water_canister') {
    shapes = `
            <!-- Heavy flat bottom shadow -->
            <ellipse cx="50" cy="82" rx="32" ry="9" fill="#020617" opacity="0.65" filter="blur(3px)"/>
            
            <!-- Plastic jug body (Aquamarine/Teal) -->
            <path d="M 24 35 Q 24 24, 40 24 L 60 24 Q 76 24, 76 35 L 76 74 Q 76 80, 50 80 Q 24 80, 24 74 Z" fill="#0ea5e9" stroke="#0369a1" stroke-width="2.2" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.3))"/>
            
            <!-- Plastic ribs / structural lines -->
            <path d="M 28 42 L 72 42 M 28 52 L 72 52 M 28 62 L 72 62" fill="none" stroke="#0284c7" stroke-width="2" opacity="0.6"/>
            
            <!-- Water level internal wave (semi-transparent) -->
            <path d="M 25 56 Q 38 52, 50 56 T 75 56 L 75 78 Q 50 80, 25 78 Z" fill="#38bdf8" opacity="0.45"/>
            
            <!-- Sturdy jug handle at the top-left -->
            <path d="M 40 24 L 40 14 Q 50 8, 60 14 L 60 24" fill="none" stroke="#0269a1" stroke-width="3.5" stroke-linecap="round"/>
            <rect x="42" y="10" width="16" height="4" rx="1" fill="#bae6fd"/>
            
            <!-- Screw threads/cap -->
            <rect x="45" y="20" width="10" height="4" fill="#0284c7" stroke="#0369a1" stroke-width="0.8"/>
            <rect x="42" y="17" width="16" height="3" fill="#f43f5e" stroke="#9f1239" stroke-width="0.5"/>
        `;
  } else if (instrument === 'vintage_cash_register') {
    shapes = `
            <!-- Ground shadow -->
            <rect x="18" y="74" width="64" height="12" rx="5" fill="#020617" opacity="0.7" filter="blur(3.5px)"/>
            
            <!-- Brass Main Housing -->
            <path d="M 22 76 L 22 42 Q 22 24, 38 24 L 62 24 Q 78 24, 78 42 L 78 76 Z" fill="#ca8a04" stroke="#713f12" stroke-width="2" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.4))"/>
            
            <!-- Glass display top price box -->
            <rect x="34" y="12" width="32" height="12" rx="1" fill="#1e293b" stroke="#713f12" stroke-width="1.5"/>
            <text x="50" y="21" font-family="monospace" font-size="7" fill="#22c55e" font-weight="900" text-anchor="middle" letter-spacing="1">$3.50</text>
            
            <!-- Keys rows -->
            <circle cx="32" cy="46" r="3" fill="#ef4444" stroke="#450a0a" stroke-width="0.8"/>
            <circle cx="44" cy="46" r="3" fill="#f59e0b" stroke="#78350f" stroke-width="0.8"/>
            <circle cx="56" cy="46" r="3" fill="#3b82f6" stroke="#1e3a8a" stroke-width="0.8"/>
            <circle cx="68" cy="46" r="3" fill="#22c55e" stroke="#14532d" stroke-width="0.8"/>
            
            <circle cx="32" cy="56" r="3" fill="#ffffff" stroke="#475569" stroke-width="0.8"/>
            <circle cx="44" cy="56" r="3" fill="#ffffff" stroke="#475569" stroke-width="0.8"/>
            <circle cx="56" cy="56" r="3" fill="#ffffff" stroke="#475569" stroke-width="0.8"/>
            <circle cx="68" cy="56" r="3" fill="#ffffff" stroke="#475569" stroke-width="0.8"/>
            
            <!-- Side Crank Lever -->
            <path d="M 78 48 Q 88 48, 88 56 L 88 64" fill="none" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>
            <circle cx="88" cy="64" r="3.5" fill="#b45309" stroke="#451a03" stroke-width="0.8"/>
            
            <!-- Red/Green Drawer Bottom plate -->
            <rect x="20" y="68" width="60" height="8" rx="1.5" fill="#78350f" stroke="#451a03" stroke-width="1"/>
            <line x1="24" y1="72" x2="76" y2="72" stroke="#f59e0b" stroke-width="1"/>
        `;
  } else if (instrument === 'geiger_counter') {
    shapes = `
            <!-- Heavy bottom shadow -->
            <rect x="18" y="74" width="64" height="12" rx="4" fill="#020617" opacity="0.65" filter="blur(3px)"/>
            
            <!-- Industrial Slate/Yellow Housing -->
            <rect x="20" y="18" width="60" height="58" rx="6" fill="#eab308" stroke="#854d0e" stroke-width="2.2" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.35))"/>
            <rect x="23" y="21" width="54" height="52" rx="4" fill="#475569" opacity="0.15"/>
            
            <!-- Center Dial display meter (Beige circular window) -->
            <circle cx="50" cy="38" r="16" fill="#f5f5f4" stroke="#334155" stroke-width="1.8"/>
            <!-- Meter scale arches -->
            <path d="M 38 42 A 12 12 0 0 1 62 42" fill="none" stroke="#64748b" stroke-width="1.2" stroke-dasharray="1, 1.5"/>
            <path d="M 54 38 A 4 4 0 0 1 62 42" fill="none" stroke="#ef4444" stroke-width="1.2"/>
            <!-- Indicator Needle -->
            <line x1="50" y1="46" x2="58" y2="30" stroke="#ef4444" stroke-width="1.5" stroke-linecap="round" filter="drop-shadow(0.5px 0.5px 1px rgba(0,0,0,0.4))"/>
            <circle cx="50" cy="46" r="2.2" fill="#1e293b"/>
            
            <!-- Geiger mesh/sensor holes at base -->
            <rect x="28" y="60" width="18" height="10" rx="1.5" fill="#1e293b"/>
            <circle cx="32" cy="65" r="0.8" fill="#e2e8f0"/>
            <circle cx="37" cy="65" r="0.8" fill="#e2e8f0"/>
            <circle cx="42" cy="65" r="0.8" fill="#e2e8f0"/>
            
            <!-- Hardware adjustment knob -->
            <circle cx="64" cy="64" r="5.5" fill="#334155" stroke="#1e293b" stroke-width="1"/>
            <line x1="64" y1="59" x2="64" y2="69" stroke="#f1f5f9" stroke-width="1.2"/>
            
            <!-- Radioactivity Warning Sign (Tiny icon) -->
            <circle cx="50" cy="12" r="4.5" fill="#eab308" stroke="#854d0e" stroke-width="1"/>
            <circle cx="50" cy="12" r="1" fill="#000000"/>
            <path d="M 48 9 L 52 9 L 50 12 Z M 46 13 L 48 11 L 51 13 Z" fill="#000000"/>
        `;
  } else if (instrument === 'centrifugal_bullroarer') {
    shapes = `
            <!-- Swirling shadow trail -->
            <path d="M 10 50 Q 30 15, 50 50 T 90 50" fill="none" stroke="#020617" stroke-width="8" opacity="0.45" stroke-linecap="round" filter="blur(4px)"/>
            
            <!-- Twisting cord -->
            <path d="M 10 50 Q 25 35, 40 45 T 70 50 L 78 50" fill="none" stroke="#d6d3d1" stroke-width="2.5" stroke-linecap="round" opacity="0.8"/>
            <path d="M 10 50 Q 25 35, 40 45 T 70 50 L 78 50" fill="none" stroke="#78716c" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="2, 2"/>
            
            <!-- Wooden slat (Aero blade) rotating -->
            <g transform="translate(68, 50) rotate(-25, 10, 0)">
                <path d="M 0 -8 L 30 -5 C 34 -4, 34 4, 30 5 L 0 8 C -4 4, -4 -4, 0 -8 Z" fill="#d97706" stroke="#78350f" stroke-width="1.5" filter="drop-shadow(2px 3px 4px rgba(0,0,0,0.4))"/>
                <!-- Tribal/Indigenous grain designs -->
                <path d="M 6 -4 Q 15 -2, 24 -4" fill="none" stroke="#78350f" stroke-width="1" opacity="0.6"/>
                <path d="M 6 4 Q 15 2, 24 4" fill="none" stroke="#78350f" stroke-width="1" opacity="0.6"/>
                <circle cx="4" cy="0" r="1.5" fill="#fef08a" stroke="#78350f" stroke-width="0.8"/>
            </g>
        `;
  } else if (instrument === 'newtons_cradle') {
    shapes = `
            <!-- Shadow for spheres -->
            <ellipse cx="50" cy="80" rx="36" ry="6" fill="#020617" opacity="0.65" filter="blur(3px)"/>
            
            <!-- Support Frame (Chrome arcs) -->
            <path d="M 22 72 L 22 28 Q 22 18, 50 18 Q 78 18, 78 28 L 78 72" fill="none" stroke="#94a3b8" stroke-width="3" stroke-linecap="round" filter="drop-shadow(0 2px 3px rgba(0,0,0,0.3))"/>
            <path d="M 22 28 L 78 28" fill="none" stroke="#cbd5e1" stroke-width="1.5" opacity="0.5"/>
            
            <!-- Suspension strings -->
            <line x1="34" y1="28" x2="34" y2="60" stroke="#64748b" stroke-width="0.6"/>
            <line x1="42" y1="28" x2="42" y2="60" stroke="#64748b" stroke-width="0.6"/>
            <line x1="50" y1="28" x2="50" y2="60" stroke="#64748b" stroke-width="0.6"/>
            <line x1="58" y1="28" x2="58" y2="60" stroke="#64748b" stroke-width="0.6"/>
            
            <!-- Stationary spheres 2, 3, 4 -->
            <circle cx="42" cy="60" r="4" fill="url(#chrome-${id})" stroke="#475569" stroke-width="0.6" filter="drop-shadow(0 1px 2px rgba(0,0,0,0.3))"/>
            <circle cx="50" cy="60" r="4" fill="url(#chrome-${id})" stroke="#475569" stroke-width="0.6" filter="drop-shadow(0 1px 2px rgba(0,0,0,0.3))"/>
            <circle cx="58" cy="60" r="4" fill="url(#chrome-${id})" stroke="#475569" stroke-width="0.6" filter="drop-shadow(0 1px 2px rgba(0,0,0,0.3))"/>
            
            <!-- Left swinging sphere (in motion) -->
            <g transform="rotate(30, 34, 28)">
                <line x1="34" y1="28" x2="34" y2="60" stroke="#475569" stroke-width="0.8"/>
                <circle cx="34" cy="60" r="4" fill="url(#chrome-${id})" stroke="#334155" stroke-width="0.6" filter="drop-shadow(-2px 2px 2px rgba(0,0,0,0.4))"/>
                <circle cx="32" cy="58" r="1.2" fill="#ffffff" opacity="0.6"/>
            </g>
            
            <!-- Right swinging sphere (recoiling) -->
            <g transform="rotate(-15, 66, 28)">
                <line x1="66" y1="28" x2="66" y2="60" stroke="#475569" stroke-width="0.8"/>
                <circle cx="66" cy="60" r="4" fill="url(#chrome-${id})" stroke="#334155" stroke-width="0.6" filter="drop-shadow(2px 2px 2px rgba(0,0,0,0.4))"/>
                <circle cx="64" cy="58" r="1.2" fill="#ffffff" opacity="0.6"/>
            </g>
            
            <!-- Heavy bottom steel plates -->
            <rect x="14" y="68" width="72" height="6" rx="1.5" fill="#334155" stroke="#1e293b" stroke-width="1"/>
            <rect x="16" y="69" width="68" height="2" fill="#64748b" opacity="0.4"/>
        `;
  } else if (instrument === 'slime_plop_box') {
    shapes = `
            <!-- Drip pool shadow -->
            <ellipse cx="50" cy="82" rx="30" ry="10" fill="#020617" opacity="0.6" filter="blur(3px)"/>
            
            <!-- Transparent Jar -->
            <rect x="24" y="24" width="52" height="54" rx="12" fill="none" stroke="#94a3b8" stroke-width="2" filter="drop-shadow(0 3px 5px rgba(0,0,0,0.25))"/>
            <rect x="25" y="25" width="50" height="52" rx="11" fill="#e2e8f0" opacity="0.15"/>
            
            <!-- Translucent Teal Slime layers -->
            <path d="M 25 45 C 32 40, 42 50, 50 45 C 58 40, 68 48, 75 42 L 75 75 Q 50 81, 25 75 Z" fill="#14b8a6" opacity="0.65"/>
            
            <!-- Overflowing drip on the side -->
            <path d="M 24 38 Q 18 42, 18 50 Q 18 56, 22 56 Q 26 56, 26 48 Z" fill="#0d9488" opacity="0.8" filter="drop-shadow(0 1px 2px rgba(0,0,0,0.3))"/>
            
            <!-- Hanging slime drops inside -->
            <path d="M 46 48 Q 50 62, 50 66 Q 50 70, 53 70 Q 56 70, 56 66 Z" fill="#0f766e" opacity="0.8"/>
            <circle cx="53" cy="67" r="1.8" fill="#5eead4" opacity="0.6"/>
            
            <!-- Gaseous bubbles inside the matrix -->
            <circle cx="34" cy="58" r="1.5" fill="#ccfbf1" stroke="#0d9488" stroke-width="0.4" opacity="0.7"/>
            <circle cx="62" cy="52" r="2.2" fill="#ccfbf1" stroke="#0d9488" stroke-width="0.4" opacity="0.7"/>
            <circle cx="42" cy="68" r="1.0" fill="#ccfbf1" opacity="0.8"/>
            
            <!-- Colored jar cap -->
            <rect x="28" y="16" width="44" height="8" rx="2" fill="#0d9488" stroke="#115e59" stroke-width="1.2"/>
            <rect x="32" y="14" width="36" height="2" fill="#5eead4" opacity="0.6"/>
        `;
  } else if (instrument === 'talk_box') {
    shapes = `
            <!-- Floor shadow -->
            <ellipse cx="50" cy="80" rx="34" ry="11" fill="#020617" opacity="0.65" filter="blur(3.5px)"/>
            
            <!-- Retro Box Body (Bright Orange) -->
            <rect x="22" y="24" width="56" height="52" rx="10" fill="#f97316" stroke="#c2410c" stroke-width="2.2" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.35))"/>
            
            <!-- Stylisized Retro Sunburst Decal -->
            <circle cx="50" cy="50" r="18" fill="#fde047" stroke="#ca8a04" stroke-width="0.8"/>
            
            <!-- Phonograph/Speaker radial grilles -->
            <circle cx="50" cy="50" r="13" fill="#1e293b"/>
            <line x1="50" y1="37" x2="50" y2="63" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="1 2"/>
            <line x1="37" y1="50" x2="63" y2="50" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="1 2"/>
            <line x1="41" y1="41" x2="59" y2="59" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="1 2"/>
            <line x1="41" y1="59" x2="59" y2="41" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="1 2"/>
            <circle cx="50" cy="50" r="3.5" fill="#e2e8f0"/>
            
            <!-- Red Plastic Handle loop at the top -->
            <path d="M 32 24 L 32 14 Q 50 4, 68 14 L 68 24" fill="none" stroke="#ef4444" stroke-width="4" stroke-linecap="round"/>
            
            <!-- Mechanical Pull-String chord loop -->
            <path d="M 78 54 Q 88 56, 90 64" fill="none" stroke="#cbd5e1" stroke-width="1.8" stroke-linecap="round"/>
            <!-- Pull ring -->
            <circle cx="91" cy="65" r="4.5" fill="#ef4444" stroke="#b91c1c" stroke-width="1" filter="drop-shadow(1px 1px 2px rgba(0,0,0,0.4))"/>
        `;
  } else if (instrument === 'mouth_tube_synth') {
    shapes = `
            <!-- Heavy bottom shadow -->
            <rect x="18" y="74" width="64" height="12" rx="4" fill="#020617" opacity="0.7" filter="blur(3.5px)"/>
            
            <!-- Glowing Electronic Synth Chassis -->
            <rect x="20" y="24" width="60" height="52" rx="8" fill="#1e1b4b" stroke="#312e81" stroke-width="2" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.4))"/>
            <rect x="22" y="26" width="56" height="48" rx="6" fill="none" stroke="#38bdf8" stroke-width="0.8" opacity="0.5"/>
            
            <!-- Glowing Neon LEDs -->
            <circle cx="28" cy="34" r="2.2" fill="#f43f5e" filter="drop-shadow(0 0 4px #f43f5e)"/>
            <circle cx="36" cy="34" r="2.2" fill="#10b981" filter="drop-shadow(0 0 4px #10b981)"/>
            
            <!-- Graphic Equalizer glowing lines -->
            <rect x="44" y="30" width="3" height="10" fill="#38bdf8" filter="drop-shadow(0 0 2px #38bdf8)"/>
            <rect x="49" y="28" width="3" height="12" fill="#38bdf8" filter="drop-shadow(0 0 2px #38bdf8)"/>
            <rect x="54" y="32" width="3" height="8" fill="#38bdf8" filter="drop-shadow(0 0 2px #38bdf8)"/>
            <rect x="59" y="26" width="3" height="14" fill="#38bdf8" filter="drop-shadow(0 0 2px #38bdf8)"/>
            
            <!-- Coiled Plastic Synth Mouth Hose exiting to the right -->
            <path d="M 68 56 Q 80 50, 82 40 T 78 28" fill="none" stroke="#2dd4bf" stroke-width="3" stroke-linecap="round" filter="drop-shadow(0 2px 4px rgba(45,212,191,0.5))"/>
            <path d="M 68 56 Q 80 50, 82 40 T 78 28" fill="none" stroke="#ffffff" stroke-width="1" stroke-linecap="round" opacity="0.7"/>
            <circle cx="77" cy="27" r="2" fill="#14b8a6"/>
            
            <!-- Connection Port/Jack -->
            <rect x="64" y="52" width="6" height="8" rx="1" fill="#94a3b8" stroke="#475569" stroke-width="0.8"/>
            <circle cx="67" cy="56" r="1.5" fill="#334155"/>
        `;
  } else {
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
