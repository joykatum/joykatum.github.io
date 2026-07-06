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
    shapes = `
            <!-- Heavy bottom shadow -->
            <rect x="2" y="3" width="96" height="96" rx="8" fill="#020617" opacity="0.6" filter="blur(2px)"/>
            
            <!-- Plain Wood box body -->
            <rect x="4" y="4" width="92" height="92" rx="8" fill="url(#skin-${id})" stroke="#1e1b18" stroke-width="2"/>
            
            <!-- Ambient 3D lighting cover -->
            <rect x="4" y="4" width="92" height="92" rx="8" fill="url(#overlay-${id})"/>
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
            <circle cx="50" cy="52" r="47" fill="#020617" opacity="0.7" filter="blur(3px)"/>
            <circle cx="50" cy="50" r="47" fill="url(#skin-${id})"/>
            <circle cx="50" cy="50" r="41" fill="none" stroke="#451a03" stroke-width="1.2" opacity="0.25"/>
            <circle cx="50" cy="50" r="32" fill="none" stroke="#451a03" stroke-width="0.8" opacity="0.2"/>
            <circle cx="50" cy="50" r="16" fill="none" stroke="#7c2d12" stroke-width="3"/>
            <circle cx="50" cy="50" r="13" fill="#0c0402"/>
            <circle cx="50" cy="50" r="47" fill="url(#overlay-${id})" opacity="1.2"/>
        `;
  } else if (instrument === 'udu') {
    shapes = `
            <circle cx="50" cy="52" r="47" fill="#020617" opacity="0.7" filter="blur(3px)"/>
            <circle cx="50" cy="50" r="47" fill="url(#skin-${id})"/>
            <ellipse cx="65" cy="55" rx="9" ry="7" fill="#090302" stroke="#3a1305" stroke-width="1.5" transform="rotate(-15, 65, 55)"/>
            <ellipse cx="35" cy="25" rx="10" ry="6" fill="#090302" stroke="#7c2d12" stroke-width="2" transform="rotate(-20, 35, 25)"/>
            <circle cx="50" cy="50" r="47" fill="url(#overlay-${id})" opacity="1.2"/>
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
    shapes = `
            <rect x="15" y="15" width="70" height="70" rx="6" fill="#1e293b" opacity="0.15"/>
            <rect x="25" y="10" width="8" height="80" rx="3" fill="url(#chrome-${id})" stroke="#0f172a" stroke-width="1"/>
            <rect x="67" y="10" width="8" height="80" rx="3" fill="url(#chrome-${id})" stroke="#0f172a" stroke-width="1"/>
            <rect x="44" y="35" width="12" height="30" rx="3" fill="#1e293b" stroke="#0f172a" stroke-width="1"/>
            <line x1="33" y1="22" x2="67" y2="22" stroke="url(#chrome-${id})" stroke-width="1.5"/>
            <circle cx="39" cy="22" r="4.5" fill="#eab308" stroke="#854d0e" stroke-width="0.5"/>
            <circle cx="61" cy="22" r="4.5" fill="#cbd5e1" stroke="#475569" stroke-width="0.5"/>
            <line x1="33" y1="38" x2="67" y2="38" stroke="url(#chrome-${id})" stroke-width="1.5"/>
            <circle cx="38" cy="38" r="4.5" fill="#cbd5e1" stroke="#475569" stroke-width="0.5"/>
            <circle cx="62" cy="38" r="4.5" fill="#eab308" stroke="#854d0e" stroke-width="0.5"/>
            <line x1="33" y1="62" x2="67" y2="62" stroke="url(#chrome-${id})" stroke-width="1.5"/>
            <circle cx="38" cy="62" r="4.5" fill="#eab308" stroke="#854d0e" stroke-width="0.5"/>
            <circle cx="62" cy="62" r="4.5" fill="#cbd5e1" stroke="#475569" stroke-width="0.5"/>
            <line x1="33" y1="78" x2="67" y2="78" stroke="url(#chrome-${id})" stroke-width="1.5"/>
            <circle cx="39" cy="78" r="4.5" fill="#cbd5e1" stroke="#475569" stroke-width="0.5"/>
            <circle cx="61" cy="78" r="4.5" fill="#eab308" stroke="#854d0e" stroke-width="0.5"/>
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
    shapes = `
            <circle cx="50" cy="51" r="35" fill="#020617" opacity="0.8" filter="blur(3px)"/>
            <circle cx="50" cy="50" r="43" fill="none" stroke="#ca8a04" stroke-width="12" stroke-dasharray="1.2 5" opacity="0.9" filter="drop-shadow(0 1px 1px rgba(0,0,0,0.5))"/>
            <circle cx="50" cy="50" r="35" fill="url(#chrome-${id})" stroke="#334155" stroke-width="1.5"/>
            <circle cx="50" cy="50" r="30" fill="#0ea5e9" opacity="0.25"/>
            <circle cx="50" cy="50" r="28" fill="none" stroke="#38bdf8" stroke-width="0.8" opacity="0.4"/>
            <circle cx="50" cy="50" r="35" fill="url(#overlay-${id})" opacity="1.4"/>
        `;
  } else if (instrument === 'vibraslap') {
    shapes = `
            <circle cx="50" cy="50" r="47" fill="#1e293b" opacity="0.08"/>
            <path d="M 20 80 L 50 15 L 80 65" fill="none" stroke="url(#chrome-${id})" stroke-width="3.5" stroke-linecap="round" filter="drop-shadow(0px 2px 2px rgba(0,0,0,0.4))"/>
            <circle cx="20" cy="80" r="9" fill="url(#skin-${id})" stroke="#271305" stroke-width="1.5" filter="drop-shadow(0px 1px 1.5px rgba(0,0,0,0.4))"/>
            <g transform="rotate(-15, 79, 66)">
              <rect x="68" y="50" width="22" height="26" rx="3" fill="url(#skin-${id})" stroke="#271305" stroke-width="1.5"/>
              <rect x="71" y="70" width="16" height="3" rx="1" fill="#0c0402"/>
              <rect x="68" y="50" width="22" height="26" rx="3" fill="url(#overlay-${id})" opacity="0.8"/>
            </g>
        `;
  } else if (instrument === 'spring_drum' || instrument === 'thunderdrum') {
    shapes = `
            <circle cx="50" cy="51.5" r="48" fill="#020617" opacity="0.6" filter="blur(2px)"/>
            <circle cx="50" cy="50" r="48" fill="url(#skin-${id})"/>
            <circle cx="50" cy="50" r="5" fill="url(#chrome-${id})" stroke="#1e293b" stroke-width="0.8"/>
            <path d="M 50 50 C 42 55, 58 60, 50 65 C 42 70, 58 75, 50 80 C 42 85, 58 90, 50 95" fill="none" stroke="url(#chrome-${id})" stroke-width="2.5" stroke-linecap="round" filter="drop-shadow(0px 1px 1px rgba(0,0,0,0.4))"/>
            <circle cx="50" cy="50" r="47" fill="none" stroke="url(#chrome-${id})" stroke-width="3.5"/>
            <circle cx="50" cy="50" r="47" fill="url(#overlay-${id})" opacity="1.2"/>
        `;
  } else if (instrument === 'thongophone') {
    shapes = `
            <circle cx="50" cy="50" r="48" fill="#1e293b" opacity="0.08"/>
            <g transform="translate(26, 68)"><circle cx="0" cy="0" r="13" fill="#1e40af" stroke="#172554" stroke-width="1.5"/><circle cx="0" cy="0" r="9" fill="#090d16"/></g>
            <g transform="translate(24, 28)"><circle cx="0" cy="0" r="11" fill="#166534" stroke="#14532d" stroke-width="1.5"/><circle cx="0" cy="0" r="8" fill="#050c07"/></g>
            <g transform="translate(74, 26)"><circle cx="0" cy="0" r="9.5" fill="#991b1b" stroke="#7f1d1d" stroke-width="1.2"/><circle cx="0" cy="0" r="6.5" fill="#0c0404"/></g>
            <g transform="translate(72, 64)"><circle cx="0" cy="0" r="11" fill="#854d0e" stroke="#713f12" stroke-width="1.5"/><circle cx="0" cy="0" r="8" fill="#0c0802"/></g>
            <g transform="translate(48, 48)"><circle cx="0" cy="0" r="13" fill="#3730a3" stroke="#312e81" stroke-width="1.8"/><circle cx="0" cy="0" r="10" fill="#080711"/></g>
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
    shapes = `
            <circle cx="50" cy="50" r="48" fill="#1e293b" opacity="0.08"/>
            <g transform="rotate(-30, 50, 50)">
              <rect x="22" y="5" width="12" height="90" rx="2.5" fill="#ef4444" stroke="#991b1b" stroke-width="1.2"/>
              <rect x="38" y="15" width="11" height="80" rx="2.5" fill="#22c55e" stroke="#166534" stroke-width="1.2"/>
              <rect x="53" y="25" width="10" height="70" rx="2" fill="#eab308" stroke="#854d0e" stroke-width="1.2"/>
            </g>
        `;
  } else if (instrument === 'bell_tree') {
    shapes = `
            <line x1="50" y1="6" x2="50" y2="94" stroke="url(#chrome-${id})" stroke-width="2.5"/>
            <path d="M 12 78 C 12 60, 88 60, 88 78 L 82 82 Z" fill="#d97706" stroke="#713f12" stroke-width="1" filter="drop-shadow(0 2px 1.5px rgba(0,0,0,0.4))"/>
            <path d="M 20 62 C 20 46, 80 46, 80 62 L 75 66 Z" fill="#eab308" stroke="#713f12" stroke-width="1" filter="drop-shadow(0 1.5px 1.5px rgba(0,0,0,0.4))"/>
            <path d="M 28 46 C 28 32, 72 32, 72 46 L 68 50 Z" fill="#eab308" stroke="#854d0e" stroke-width="1" filter="drop-shadow(0 1px 1px rgba(0,0,0,0.3))"/>
            <path d="M 35 31 C 35 19, 65 19, 65 31 L 61 35 Z" fill="#fbbf24" stroke="#854d0e" stroke-width="0.8"/>
            <path d="M 41 17 C 41 7, 59 7, 59 17 L 56 20 Z" fill="#fbbf24" stroke="#a16207" stroke-width="0.8"/>
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
    shapes = `
            <circle cx="50" cy="50" r="47" fill="#1e293b" opacity="0.08"/>
            <g transform="rotate(-25, 50, 68)">
              <rect x="48" y="45" width="4" height="40" rx="1.5" fill="url(#skin-${id})" stroke="#271305" stroke-width="1"/>
            </g>
            <g transform="translate(50, 50)">
              <circle cx="0" cy="0" r="18" fill="url(#skin-${id})" stroke="#271305" stroke-width="1.2"/>
              <rect x="-2" y="-21" width="4" height="4" fill="url(#skin-${id})" stroke="#271305" stroke-width="0.8" transform="rotate(0)"/>
              <rect x="-2" y="-21" width="4" height="4" fill="url(#skin-${id})" stroke="#271305" stroke-width="0.8" transform="rotate(60)"/>
              <rect x="-2" y="-21" width="4" height="4" fill="url(#skin-${id})" stroke="#271305" stroke-width="0.8" transform="rotate(120)"/>
              <rect x="-2" y="-21" width="4" height="4" fill="url(#skin-${id})" stroke="#271305" stroke-width="0.8" transform="rotate(180)"/>
              <rect x="-2" y="-21" width="4" height="4" fill="url(#skin-${id})" stroke="#271305" stroke-width="0.8" transform="rotate(240)"/>
              <rect x="-2" y="-21" width="4" height="4" fill="url(#skin-${id})" stroke="#271305" stroke-width="0.8" transform="rotate(300)"/>
              <circle cx="0" cy="0" r="4" fill="url(#chrome-${id})" stroke="#0f172a" stroke-width="0.5"/>
            </g>
            <path d="M 20 30 Q 32 27, 49 31" fill="none" stroke="url(#skin-${id})" stroke-width="3.5" stroke-linecap="round" filter="drop-shadow(0 1px 1px rgba(0,0,0,0.3))"/>
        `;
  } else if (instrument === 'log_drum') {
    shapes = `
      <rect x="10" y="25" width="80" height="50" rx="8" fill="url(#skin-${id})" stroke="#271305" stroke-width="2" filter="drop-shadow(0 4px 4px rgba(0,0,0,0.4))"/>
      <rect x="20" y="45" width="25" height="10" rx="2" fill="#271305" opacity="0.8"/>
      <rect x="55" y="45" width="25" height="10" rx="2" fill="#271305" opacity="0.8"/>
      <path d="M 45 45 L 45 55 M 55 45 L 55 55" stroke="#271305" stroke-width="2"/>
    `;
  } else if (instrument === 'temple_blocks') {
    shapes = `
      <path d="M 20 50 C 20 20, 80 20, 80 50 C 80 80, 20 80, 20 50 Z" fill="url(#skin-${id})" stroke="#271305" stroke-width="2" filter="drop-shadow(0 4px 4px rgba(0,0,0,0.5))"/>
      <path d="M 25 50 C 25 35, 75 35, 75 50" fill="none" stroke="#271305" stroke-width="4" stroke-linecap="round"/>
    `;
  } else if (instrument === 'frog_rasp') {
    shapes = `
      <path d="M 30 50 C 30 20, 70 20, 70 50 C 70 70, 30 70, 30 50 Z" fill="url(#skin-${id})" stroke="#271305" stroke-width="2" filter="drop-shadow(0 2px 3px rgba(0,0,0,0.4))"/>
      <!-- Ridges -->
      <path d="M 40 30 Q 50 25, 60 30 M 35 40 Q 50 35, 65 40 M 35 50 Q 50 45, 65 50 M 40 60 Q 50 55, 60 60" fill="none" stroke="#1c0d02" stroke-width="3" stroke-linecap="round"/>
      <circle cx="60" cy="35" r="3" fill="#0f172a"/>
    `;
  } else if (instrument === 'rainstick') {
    shapes = `
      <rect x="35" y="10" width="30" height="80" rx="15" fill="url(#skin-${id})" stroke="#271305" stroke-width="2" filter="drop-shadow(0 4px 4px rgba(0,0,0,0.4))"/>
      <!-- Internal spirals indicated by lines -->
      <path d="M 38 20 L 62 30 M 38 40 L 62 50 M 38 60 L 62 70 M 38 80 L 62 90" fill="none" stroke="#271305" stroke-width="1.5" opacity="0.6"/>
    `;
  } else if (instrument === 'kokiriko') {
    shapes = `
      <!-- Multiple wood slats connected by a cord -->
      <path d="M 50 10 L 50 90" fill="none" stroke="#1e293b" stroke-width="2" filter="drop-shadow(0 1px 1px rgba(0,0,0,0.5))"/>
      <rect x="30" y="15" width="40" height="10" fill="url(#skin-${id})" stroke="#271305" stroke-width="1" filter="drop-shadow(0 2px 2px rgba(0,0,0,0.4))"/>
      <rect x="30" y="35" width="40" height="10" fill="url(#skin-${id})" stroke="#271305" stroke-width="1" filter="drop-shadow(0 2px 2px rgba(0,0,0,0.4))"/>
      <rect x="30" y="55" width="40" height="10" fill="url(#skin-${id})" stroke="#271305" stroke-width="1" filter="drop-shadow(0 2px 2px rgba(0,0,0,0.4))"/>
      <rect x="30" y="75" width="40" height="10" fill="url(#skin-${id})" stroke="#271305" stroke-width="1" filter="drop-shadow(0 2px 2px rgba(0,0,0,0.4))"/>
    `;
  } else if (instrument === 'cabasa') {
    shapes = `
      <rect x="40" y="10" width="20" height="30" rx="2" fill="url(#skin-${id})" stroke="#271305" stroke-width="2"/>
      <circle cx="50" cy="60" r="25" fill="url(#chrome-${id})" stroke="#475569" stroke-width="2" filter="drop-shadow(0 3px 3px rgba(0,0,0,0.5))"/>
      <!-- Beads -->
      <path d="M 35 50 Q 50 55, 65 50 M 30 60 Q 50 65, 70 60 M 35 70 Q 50 75, 65 70" fill="none" stroke="#94a3b8" stroke-width="4" stroke-dasharray="4 2"/>
    `;
  } else if (instrument === 'guiro') {
    shapes = `
      <ellipse cx="50" cy="50" rx="25" ry="45" fill="url(#skin-${id})" stroke="#271305" stroke-width="2" filter="drop-shadow(0 4px 4px rgba(0,0,0,0.4))"/>
      <!-- Ridges -->
      <path d="M 30 30 Q 50 35, 70 30 M 27 40 Q 50 45, 73 40 M 26 50 Q 50 55, 74 50 M 27 60 Q 50 65, 73 60 M 30 70 Q 50 75, 70 70" fill="none" stroke="#271305" stroke-width="2"/>
    `;
  } else if (instrument === 'washboard') {
    shapes = `
      <rect x="25" y="10" width="50" height="80" rx="4" fill="url(#skin-${id})" stroke="#271305" stroke-width="3" filter="drop-shadow(0 4px 4px rgba(0,0,0,0.5))"/>
      <rect x="35" y="20" width="30" height="60" fill="url(#chrome-${id})" stroke="#475569" stroke-width="1"/>
      <!-- Corrugations -->
      <path d="M 35 25 L 65 25 M 35 30 L 65 30 M 35 35 L 65 35 M 35 40 L 65 40 M 35 45 L 65 45 M 35 50 L 65 50 M 35 55 L 65 55 M 35 60 L 65 60 M 35 65 L 65 65 M 35 70 L 65 70 M 35 75 L 65 75" fill="none" stroke="#94a3b8" stroke-width="1"/>
    `;
  } else if (instrument === 'angklung') {
    shapes = `
      <!-- Base structure -->
      <rect x="20" y="80" width="60" height="8" rx="2" fill="url(#skin-${id})" stroke="#271305" stroke-width="1"/>
      <rect x="25" y="20" width="6" height="65" fill="url(#skin-${id})" stroke="#271305" stroke-width="1"/>
      <rect x="69" y="20" width="6" height="65" fill="url(#skin-${id})" stroke="#271305" stroke-width="1"/>
      <rect x="20" y="15" width="60" height="6" fill="url(#skin-${id})" stroke="#271305" stroke-width="1"/>
      <!-- Bamboo tubes -->
      <path d="M 40 30 L 40 75 A 5 5 0 0 0 50 75 L 50 30 Z" fill="url(#skin-${id})" stroke="#271305" stroke-width="1.5" filter="drop-shadow(0 2px 2px rgba(0,0,0,0.4))"/>
      <path d="M 40 30 L 40 20 L 45 10 L 50 20 L 50 30 Z" fill="url(#skin-${id})" stroke="#271305" stroke-width="1.5"/>
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
            <!-- Heavy bottom shadow -->
            <circle cx="50" cy="51.5" r="48" fill="#020617" opacity="0.6" filter="blur(2px)"/>
            
            <!-- Dual skin/braid outer rim -->
            <circle cx="50" cy="50" r="48" fill="none" stroke="#4a3628" stroke-width="3" stroke-dasharray="3 2"/>
            <circle cx="50" cy="50" r="46.5" fill="none" stroke="#8b5a2b" stroke-width="1.5"/>
            
            <!-- Main head skin -->
            <circle cx="50" cy="50" r="45" fill="url(#skin-${id})"/>
            
            <!-- Inner white rings surrounding the center paste -->
            <circle cx="50" cy="50" r="28" fill="none" stroke="#1e1b18" stroke-width="1" opacity="0.3"/>
            
            <!-- Centered black paste (Syahi) with subtle layering -->
            <circle cx="50" cy="50" r="16" fill="#171717" stroke="#0a0a0a" stroke-width="1" filter="drop-shadow(0px 1px 2px rgba(0,0,0,0.6))"/>
            <circle cx="49" cy="49" r="14.5" fill="none" stroke="#262626" stroke-width="0.5" opacity="0.5"/>
            
            <!-- Ambient 3D lighting cover -->
            <circle cx="50" cy="50" r="45" fill="url(#overlay-${id})" opacity="0.8"/>
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
  } else if (instrument === 'agogo') {
    shapes = `
            <circle cx="50" cy="50" r="47" fill="#1e293b" opacity="0.08"/>
            
            <g transform="translate(10, 0)">
              <!-- Curved metal handle holding the bells together -->
              <path d="M 22 40 Q 15 15, 45 15" fill="none" stroke="url(#chrome-${id})" stroke-width="5" stroke-linecap="round" filter="drop-shadow(0 3px 3px rgba(0,0,0,0.45))"/>
              
              <!-- Smaller high bell (diagonally pointing right) -->
              <g transform="translate(45, 15) rotate(15)">
                <path d="M 0 0 L -12 35 L 12 35 Z" fill="#84532b" stroke="#331802" stroke-width="1.5" filter="drop-shadow(0 2px 3px rgba(0,0,0,0.3))"/>
                <ellipse cx="0" cy="35" rx="12" ry="4.5" fill="url(#skin-${id})" stroke="#331802" stroke-width="1.5"/>
              </g>
              
              <!-- Larger low bell (diagonally pointing down-right) -->
              <g transform="translate(22, 40) rotate(40)">
                <path d="M 0 0 L -18 50 L 18 50 Z" fill="#4b5563" stroke="#1f2937" stroke-width="1.5" filter="drop-shadow(0 3px 4px rgba(0,0,0,0.4))"/>
                <ellipse cx="0" cy="50" rx="18" ry="6.5" fill="url(#skin-${id})" stroke="#1f2937" stroke-width="1.5"/>
              </g>
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
    let laces = '';
    const laceAngles = [15, 45, 75, 105, 135, 165, 195, 225, 255, 285, 315, 345];
    laceAngles.forEach((angle) => {
      const rad = (angle * Math.PI) / 180;
      const x1 = 50 + 44 * Math.cos(rad);
      const y1 = 50 + 44 * Math.sin(rad);
      const x2 = 50 + 48 * Math.cos(rad);
      const y2 = 50 + 48 * Math.sin(rad);
      laces += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#ca8a04" stroke-width="1.8" stroke-linecap="round"/>`;
    });
    shapes = `
            <!-- Heavy bottom shadow -->
            <circle cx="50" cy="51.5" r="49" fill="#020617" opacity="0.6" filter="blur(2.5px)"/>
            
            <!-- Thick leather wrap/flesh hoop ring -->
            <circle cx="50" cy="50" r="47.5" fill="none" stroke="#4a3628" stroke-width="3"/>
            
            <!-- Braided cords tensioners crossing the rim -->
            ${laces}
            
            <!-- Real goat skin drumhead -->
            <circle cx="50" cy="50" r="44" fill="url(#skin-${id})"/>
            <circle cx="50" cy="50" r="43.2" fill="none" stroke="#1e1b18" stroke-width="0.6" opacity="0.4"/>
            
            <!-- Ambient 3D lighting cover -->
            <circle cx="50" cy="50" r="44" fill="url(#overlay-${id})"/>
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
