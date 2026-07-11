// Loads rhythm patterns only for instruments that are actively selected.
export const instrumentPatterns = {};

const patternLoaders = {
  conga: () => import('./patterns/conga.js'),
  djembe: () => import('./patterns/djembe.js'),
  bongo: () => import('./patterns/bongo.js'),
  bata: () => import('./patterns/bata.js'),
  pandero: () => import('./patterns/pandero.js'),
  barril: () => import('./patterns/barril.js'),
  bombo: () => import('./patterns/bombo.js'),
  tabla: () => import('./patterns/tabla.js'),
  darbuka: () => import('./patterns/darbuka.js'),
  timbales: () => import('./patterns/timbales.js'),
  cajon: () => import('./patterns/cajon.js'),
  candombe: () => import('./patterns/candombe.js'),
  gwoka: () => import('./patterns/gwoka.js'),
  tanbou: () => import('./patterns/tanbou.js'),
  chinese: () => import('./patterns/chinese.js'),
  daiko: () => import('./patterns/daiko.js'),
  bodhran: () => import('./patterns/bodhran.js'),
  talkingdrum: () => import('./patterns/talkingdrum.js'),
  cuica: () => import('./patterns/cuica.js'),
  doira: () => import('./patterns/doira.js'),
  uchiwadaiko: () => import('./patterns/uchiwadaiko.js'),
  oceandrum: () => import('./patterns/oceandrum.js'),
  janggu: () => import('./patterns/janggu.js'),
  zabumba: () => import('./patterns/zabumba.js'),
  mridangam: () => import('./patterns/mridangam.js'),
  udu: () => import('./patterns/udu.js'),
  thunderdrum: () => import('./patterns/thunderdrum.js'),
  waterdrums: () => import('./patterns/waterdrums.js'),
  vibraslap: () => import('./patterns/vibraslap.js'),
  flexatone: () => import('./patterns/flexatone.js'),
  waterphone: () => import('./patterns/waterphone.js'),
  handpan: () => import('./patterns/handpan.js'),
  steelpan: () => import('./patterns/steelpan.js'),
  ghatam: () => import('./patterns/ghatam.js'),
  daf: () => import('./patterns/daf.js'),
  riq: () => import('./patterns/riq.js'),
  surdo: () => import('./patterns/surdo.js'),
  pandeiro: () => import('./patterns/pandeiro.js'),
  tamborim: () => import('./patterns/tamborim.js'),
  repinique: () => import('./patterns/repinique.js'),
  bendir: () => import('./patterns/bendir.js'),
  davul: () => import('./patterns/davul.js'),
  ashiko: () => import('./patterns/ashiko.js'),
  dunun: () => import('./patterns/dunun.js'),
  teponaztli: () => import('./patterns/teponaztli.js'),
  snare_drum: () => import('./patterns/snare_drum.js'),
  shekere: () => import('./patterns/shekere.js'),
  alfaia: () => import('./patterns/alfaia.js'),
  angklung: () => import('./patterns/angklung.js'),
  bell_tree: () => import('./patterns/bell_tree.js'),
  boomwhackers: () => import('./patterns/boomwhackers.js'),
  cabasa: () => import('./patterns/cabasa.js'),
  chocalho: () => import('./patterns/chocalho.js'),
  framed_rumbla: () => import('./patterns/framed_rumbla.js'),
  friction_drum: () => import('./patterns/friction_drum.js'),
  frog_rasp: () => import('./patterns/frog_rasp.js'),
  gome: () => import('./patterns/gome.js'),
  gran_cassa: () => import('./patterns/gran_cassa.js'),
  gubguba: () => import('./patterns/gubguba.js'),
  guiro: () => import('./patterns/guiro.js'),
  jaw_harp: () => import('./patterns/jaw_harp.js'),
  kanjira: () => import('./patterns/kanjira.js'),
  kokiriko: () => import('./patterns/kokiriko.js'),
  kundu: () => import('./patterns/kundu.js'),
  lions_roar: () => import('./patterns/lions_roar.js'),
  log_drum: () => import('./patterns/log_drum.js'),
  mark_tree: () => import('./patterns/mark_tree.js'),
  rainstick: () => import('./patterns/rainstick.js'),
  ratchet: () => import('./patterns/ratchet.js'),
  slide_whistle: () => import('./patterns/slide_whistle.js'),
  spoons_bones: () => import('./patterns/spoons_bones.js'),
  spring_drum: () => import('./patterns/spring_drum.js'),
  tammorra: () => import('./patterns/tammorra.js'),
  tank_drum: () => import('./patterns/tank_drum.js'),
  tar_drum: () => import('./patterns/tar_drum.js'),
  temple_blocks: () => import('./patterns/temple_blocks.js'),
  thongophone: () => import('./patterns/thongophone.js'),
  washboard: () => import('./patterns/washboard.js'),
  timpani: () => import('./patterns/timpani.js'),
  kotsuzumi: () => import('./patterns/kotsuzumi.js'),
  dhol: () => import('./patterns/dhol.js'),
  agogo: () => import('./patterns/agogo.js'),
  claves: () => import('./patterns/claves.js'),
  slap_tubes: () => import('./patterns/slap_tubes.js'),
  whistle_drum: () => import('./patterns/whistle_drum.js'),
  singing_bowl: () => import('./patterns/singing_bowl.js'),
  quijada: () => import('./patterns/quijada.js'),
  water_canister: () => import('./patterns/water_canister.js'),
  vintage_cash_register: () => import('./patterns/vintage_cash_register.js'),
  geiger_counter: () => import('./patterns/geiger_counter.js'),
  centrifugal_bullroarer: () => import('./patterns/centrifugal_bullroarer.js'),
  newtons_cradle: () => import('./patterns/newtons_cradle.js'),
  slime_plop_box: () => import('./patterns/slime_plop_box.js'),
  talk_box: () => import('./patterns/talk_box.js'),
  mouth_tube_synth: () => import('./patterns/mouth_tube_synth.js'),
  mechanical_keyboard: () => import('./patterns/mechanical_keyboard.js'),
  synsonics_drums: () => import('./patterns/synsonics_drums.js'),
  hydraulic_piston: () => import('./patterns/hydraulic_piston.js'),
  bop_it: () => import('./patterns/bop_it.js'),
  moo_box: () => import('./patterns/moo_box.js'),
  pakhavaj: () => import('./patterns/pakhavaj.js'),
  binzasara: () => import('./patterns/binzasara.js'),
  caxixi: () => import('./patterns/caxixi.js')
};

const pendingLoads = {};

function enhancePatternsWithAccents(patterns, instrumentName) {
  if (!patterns) return;
  for (const patternId in patterns) {
    const pattern = patterns[patternId];
    if (!pattern || !pattern.steps) continue;

    for (const step in pattern.steps) {
      const stepHits = pattern.steps[step];
      if (!Array.isArray(stepHits)) continue;

      stepHits.forEach((hit) => {
        if (hit.accent !== undefined || hit.velocity !== undefined) return;

        const sound = (hit.sound || '').toLowerCase();

        // Sound characteristics for authentic, concept-driven accents
        const isSlapOrSharp =
          sound.includes('slap') ||
          sound.includes('seco') ||
          sound.includes('choc') ||
          sound.includes('snap') ||
          sound.includes('whip') ||
          sound.includes('rim') ||
          sound.includes('crack') ||
          sound.includes('accent') ||
          sound.includes('sharp');

        const isOpenOrMelodic =
          sound.includes('abierto') ||
          sound.includes('open') ||
          sound.includes('tone') ||
          sound.includes('bell') ||
          sound.includes('dha') ||
          sound.includes('dhin') ||
          sound.includes('high') ||
          sound.includes('strike') ||
          sound.includes('hit') ||
          sound.includes('bass') ||
          sound.includes('bajo') ||
          sound.includes('pulse') ||
          sound.includes('bombo') ||
          sound.includes('dum');

        const isGhostOrSubtle =
          sound.includes('manoteo') ||
          sound.includes('tapado') ||
          sound.includes('toe') ||
          sound.includes('heel') ||
          sound.includes('tap') ||
          sound.includes('touch') ||
          sound.includes('mute') ||
          sound.includes('muff') ||
          sound.includes('closed') ||
          sound.includes('roll') ||
          sound.includes('buzz') ||
          sound.includes('slide') ||
          sound.includes('glissando');

        if (isSlapOrSharp) {
          hit.accent = true;
        } else if (isGhostOrSubtle) {
          hit.accent = false;
        } else if (isOpenOrMelodic) {
          hit.accent = true;
        }
      });
    }
  }
}

export async function ensurePatternsLoaded(instrumentName) {
  if (instrumentPatterns[instrumentName]) {
    return instrumentPatterns[instrumentName];
  }

  const loadPatterns = patternLoaders[instrumentName];
  if (!loadPatterns) {
    return {};
  }

  pendingLoads[instrumentName] ||= loadPatterns().then(({ default: patterns }) => {
    enhancePatternsWithAccents(patterns, instrumentName);
    instrumentPatterns[instrumentName] = patterns;
    return patterns;
  });

  return pendingLoads[instrumentName];
}
