import { drumInfo, patternInfo, drumTags } from './drumInfo.js';
import { state } from './state.js';
import { initAudio } from './audio.js';
import { drumTypes, instrumentTouches } from './drumTypes.js';
import { setTagFilters } from './ui.js';

export function setupEducationalDialog() {
  const drumBtn = document.getElementById('drum-info-btn');
  const footerDrumBtn = document.getElementById('footer-drum-info-btn');
  const patternBtn = document.getElementById('pattern-info-btn');
  const tapsBtn = document.getElementById('footer-taps-info-btn');
  const infoBackdrop = document.getElementById('info-dialog-backdrop');
  const infoCloseBtn = document.getElementById('info-close-btn');

  const onDrumInfoClick = () => {
    initAudio();
    showDrumInfo(state.currentInstrument);
  };

  if (drumBtn) {
    drumBtn.addEventListener('click', onDrumInfoClick);
  }

  if (footerDrumBtn) {
    footerDrumBtn.addEventListener('click', onDrumInfoClick);
  }

  if (tapsBtn) {
    tapsBtn.addEventListener('click', () => {
      initAudio();
      showTapsInfo(state.currentInstrument);
    });
  }

  if (patternBtn) {
    patternBtn.addEventListener('click', () => {
      initAudio();
      const patternSelect = document.getElementById('pattern-select');
      if (patternSelect && patternSelect.value !== 'none') {
        showPatternInfo(patternSelect.value);
      }
    });
  }

  if (infoCloseBtn && infoBackdrop) {
    infoCloseBtn.addEventListener('click', () => {
      infoBackdrop.classList.remove('show');
    });

    infoBackdrop.addEventListener('click', (e) => {
      if (e.target === infoBackdrop) {
        infoBackdrop.classList.remove('show');
      }
    });
  }
}

export function showDrumInfo(instrumentId) {
  const backdrop = document.getElementById('info-dialog-backdrop');
  const emojiEl = document.getElementById('info-emoji');
  const titleEl = document.getElementById('info-title');
  const subtitleEl = document.getElementById('info-subtitle');
  const bodyEl = document.getElementById('info-body-content');

  if (!backdrop || !bodyEl) return;

  const info = drumInfo[instrumentId] || {
    name: drumTypes[instrumentId]?.name || instrumentId.replace(/_/g, ' ').toUpperCase(),
    origin: 'Traditional / Regional',
    description: 'A traditional percussion instrument used in regional musical practices worldwide.',
    performers: [],
    songs: [],
    effectsSongs: []
  };

  if (emojiEl) emojiEl.innerText = '🥁';
  if (titleEl) titleEl.innerText = info.name.toUpperCase();
  if (subtitleEl) subtitleEl.innerText = 'ORIGIN: ' + info.origin;

  let html = '';
  const tags = drumTags[instrumentId];
  if (tags) {
    html += `
      <div class="modal-tags" style="display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 16px; padding-bottom: 12px; border-bottom: 1px solid rgba(255, 255, 255, 0.08);">
        <span class="info-tag clickable-filter-tag" data-filter-type="region" data-filter-value="${tags.region}" style="background: rgba(16, 185, 129, 0.12); border: 1px solid rgba(16, 185, 129, 0.3); color: #10b981; font-size: 0.8rem; font-weight: 700; padding: 3px 8px; border-radius: 6px; text-transform: uppercase; letter-spacing: 0.02em; cursor: pointer; transition: all 0.2s ease;" title="Click to filter by this origin">🌍 Origin: ${tags.region}</span>
        <span class="info-tag clickable-filter-tag" data-filter-type="type" data-filter-value="${tags.type}" style="background: rgba(59, 130, 246, 0.12); border: 1px solid rgba(59, 130, 246, 0.3); color: #3b82f6; font-size: 0.8rem; font-weight: 700; padding: 3px 8px; border-radius: 6px; text-transform: uppercase; letter-spacing: 0.02em; cursor: pointer; transition: all 0.2s ease;" title="Click to filter by this style">🥁 Style: ${tags.type}</span>
        ${tags.features.map((f) => `<span class="info-tag clickable-filter-tag" data-filter-type="type" data-filter-value="${f}" style="background: rgba(245, 158, 11, 0.12); border: 1px solid rgba(245, 158, 11, 0.3); color: #f59e0b; font-size: 0.8rem; font-weight: 700; padding: 3px 8px; border-radius: 6px; text-transform: uppercase; letter-spacing: 0.02em; cursor: pointer; transition: all 0.2s ease;" title="Click to filter by this feature">✨ ${f}</span>`).join('')}
      </div>
    `;
  }
  html += `<p class="info-paragraph">${info.description}</p>`;

  // Performers
  if (info.performers && info.performers.length > 0) {
    html += `<div class="info-section-title">🌟 Key Performers</div>`;
    info.performers.forEach((p) => {
      const spotifySearchUrl =
        p.spotify && p.spotify.startsWith('http')
          ? p.spotify
          : `https://open.spotify.com/search/${encodeURIComponent(p.name)}`;
      const appleSearchUrl =
        p.apple && p.apple.startsWith('http')
          ? p.apple
          : `https://music.apple.com/us/search?term=${encodeURIComponent(p.name)}`;
      html += `
        <div class="info-list-item" style="display: flex; justify-content: space-between; align-items: center; gap: 8px;">
          <div class="info-item-name" style="flex: 1;">${p.name}</div>
          <div class="streaming-pills" style="margin-top: 0;">
            ${
              p.spotify
                ? `<a href="${spotifySearchUrl}" target="_blank" class="streaming-pill streaming-pill-spotify icon-only" title="Listen on Spotify">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424c-.18.295-.565.387-.86.207-2.377-1.454-5.37-1.783-8.893-.98-.336.075-.668-.135-.744-.47-.075-.336.136-.668.47-.744 3.856-.88 7.15-.495 9.822 1.14.295.18.387.563.205.857zm1.225-2.72c-.226.367-.707.487-1.074.26-2.72-1.672-6.87-2.157-10.08-1.182-.413.125-.845-.107-.97-.52-.125-.413.107-.847.52-.972 3.67-1.114 8.243-.57 11.35 1.342.366.226.486.707.26 1.074zm.106-2.833C14.384 8.71 8.563 8.52 5.176 9.548c-.512.155-1.04-.136-1.195-.648-.155-.512.136-1.04.648-1.195 3.888-1.18 10.31-.96 14.403 1.47.46.273.61.87.337 1.33-.273.46-.87.61-1.33.337z"/></svg>
            </a>`
                : ''
            }
            ${
              p.apple
                ? `<a href="${appleSearchUrl}" target="_blank" class="streaming-pill streaming-pill-apple icon-only" title="Listen on Apple Music">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.22.67-2.94 1.5-.64.73-1.2 1.87-1.05 2.97 1.12.09 2.27-.57 3-.141z"/></svg>
            </a>`
                : ''
            }
          </div>
        </div>
      `;
    });
  }

  // Famous Songs
  if (info.songs && info.songs.length > 0) {
    html += `<div class="info-section-title">🎵 Iconic Songs</div>`;
    info.songs.forEach((s) => {
      const query = `${s.artist} ${s.name}`;
      const spotifySearchUrl =
        s.spotify && s.spotify.startsWith('http')
          ? s.spotify
          : `https://open.spotify.com/search/${encodeURIComponent(query)}`;
      const appleSearchUrl =
        s.apple && s.apple.startsWith('http')
          ? s.apple
          : `https://music.apple.com/us/search?term=${encodeURIComponent(query)}`;
      html += `
        <div class="info-list-item" style="display: flex; justify-content: space-between; align-items: center; gap: 8px;">
          <div class="info-item-name" style="flex: 1;">${s.name} <span style="font-weight: normal; color: var(--text-muted); font-size: 0.85rem;">by ${s.artist}</span></div>
          <div class="streaming-pills" style="margin-top: 0;">
            ${
              s.spotify
                ? `<a href="${spotifySearchUrl}" target="_blank" class="streaming-pill streaming-pill-spotify icon-only" title="Listen on Spotify">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424c-.18.295-.565.387-.86.207-2.377-1.454-5.37-1.783-8.893-.98-.336.075-.668-.135-.744-.47-.075-.336.136-.668.47-.744 3.856-.88 7.15-.495 9.822 1.14.295.18.387.563.205.857zm1.225-2.72c-.226.367-.707.487-1.074.26-2.72-1.672-6.87-2.157-10.08-1.182-.413.125-.845-.107-.97-.52-.125-.413.107-.847.52-.972 3.67-1.114 8.243-.57 11.35 1.342.366.226.486.707.26 1.074zm.106-2.833C14.384 8.71 8.563 8.52 5.176 9.548c-.512.155-1.04-.136-1.195-.648-.155-.512.136-1.04.648-1.195 3.888-1.18 10.31-.96 14.403 1.47.46.273.61.87.337 1.33-.273.46-.87.61-1.33.337z"/></svg>
            </a>`
                : ''
            }
            ${
              s.apple
                ? `<a href="${appleSearchUrl}" target="_blank" class="streaming-pill streaming-pill-apple icon-only" title="Listen on Apple Music">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.22.67-2.94 1.5-.64.73-1.2 1.87-1.05 2.97 1.12.09 2.27-.57 3-.141z"/></svg>
            </a>`
                : ''
            }
          </div>
        </div>
      `;
    });
  }

  // Audio Effects Usage
  if (info.effectsSongs && info.effectsSongs.length > 0) {
    html += `<div class="info-section-title">🎛️ Audio Effects Usage</div>`;
    info.effectsSongs.forEach((es) => {
      const query = `${es.artist} ${es.name}`;
      const spotifySearchUrl = `https://open.spotify.com/search/${encodeURIComponent(query)}`;
      const appleSearchUrl = `https://music.apple.com/us/search?term=${encodeURIComponent(query)}`;
      html += `
        <div class="info-list-item">
          <div class="info-item-name" style="margin-bottom: 2px;">${es.name} <span style="font-weight: normal; color: var(--text-muted); font-size: 0.85rem;">by ${es.artist}</span></div>
          <div class="info-item-desc">${es.desc}</div>
          <div class="streaming-pills" style="margin-top: 6px;">
            <a href="${spotifySearchUrl}" target="_blank" class="streaming-pill streaming-pill-spotify icon-only" title="Listen on Spotify">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424c-.18.295-.565.387-.86.207-2.377-1.454-5.37-1.783-8.893-.98-.336.075-.668-.135-.744-.47-.075-.336.136-.668.47-.744 3.856-.88 7.15-.495 9.822 1.14.295.18.387.563.205.857zm1.225-2.72c-.226.367-.707.487-1.074.26-2.72-1.672-6.87-2.157-10.08-1.182-.413.125-.845-.107-.97-.52-.125-.413.107-.847.52-.972 3.67-1.114 8.243-.57 11.35 1.342.366.226.486.707.26 1.074zm.106-2.833C14.384 8.71 8.563 8.52 5.176 9.548c-.512.155-1.04-.136-1.195-.648-.155-.512.136-1.04.648-1.195 3.888-1.18 10.31-.96 14.403 1.47.46.273.61.87.337 1.33-.273.46-.87.61-1.33.337z"/></svg>
            </a>
            <a href="${appleSearchUrl}" target="_blank" class="streaming-pill streaming-pill-apple icon-only" title="Listen on Apple Music">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.22.67-2.94 1.5-.64.73-1.2 1.87-1.05 2.97 1.12.09 2.27-.57 3-.141z"/></svg>
            </a>
          </div>
        </div>
      `;
    });
  }

  bodyEl.innerHTML = html;

  // Add click listeners to tags inside info modal to act as filters
  bodyEl.querySelectorAll('.clickable-filter-tag').forEach((tag) => {
    tag.addEventListener('click', () => {
      const type = tag.getAttribute('data-filter-type');
      const val = tag.getAttribute('data-filter-value');

      backdrop.classList.remove('show');

      if (type === 'region') {
        setTagFilters(val, undefined);
      } else {
        setTagFilters(undefined, val);
      }
    });
  });

  backdrop.classList.add('show');
}

export function showPatternInfo(patternId) {
  const backdrop = document.getElementById('info-dialog-backdrop');
  const emojiEl = document.getElementById('info-emoji');
  const titleEl = document.getElementById('info-title');
  const subtitleEl = document.getElementById('info-subtitle');
  const bodyEl = document.getElementById('info-body-content');

  if (!backdrop || !bodyEl) return;

  const info = patternInfo[patternId] || {
    name: patternId.replace(/_/g, ' ').toUpperCase(),
    description:
      'A traditional play-along rhythm pattern that embodies the syncopation, speed, and timing of local styles.',
    songs: []
  };

  if (emojiEl) emojiEl.innerText = '🎶';
  if (titleEl) titleEl.innerText = info.name.toUpperCase();
  if (subtitleEl) subtitleEl.innerText = 'RHYTHM PATTERN';

  let html = `<p class="info-paragraph">${info.description}</p>`;

  // Songs
  if (info.songs && info.songs.length > 0) {
    html += `<div class="info-section-title">🎵 Representative Songs</div>`;
    info.songs.forEach((s) => {
      const query = `${s.artist} ${s.name}`;
      const spotifySearchUrl =
        s.spotify && s.spotify.startsWith('http')
          ? s.spotify
          : `https://open.spotify.com/search/${encodeURIComponent(query)}`;
      const appleSearchUrl =
        s.apple && s.apple.startsWith('http')
          ? s.apple
          : `https://music.apple.com/us/search?term=${encodeURIComponent(query)}`;
      html += `
        <div class="info-list-item" style="display: flex; justify-content: space-between; align-items: center; gap: 8px;">
          <div class="info-item-name" style="flex: 1;">${s.name} <span style="font-weight: normal; color: var(--text-muted); font-size: 0.85rem;">by ${s.artist}</span></div>
          <div class="streaming-pills" style="margin-top: 0;">
            ${
              s.spotify
                ? `<a href="${spotifySearchUrl}" target="_blank" class="streaming-pill streaming-pill-spotify icon-only" title="Listen on Spotify">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424c-.18.295-.565.387-.86.207-2.377-1.454-5.37-1.783-8.893-.98-.336.075-.668-.135-.744-.47-.075-.336.136-.668.47-.744 3.856-.88 7.15-.495 9.822 1.14.295.18.387.563.205.857zm1.225-2.72c-.226.367-.707.487-1.074.26-2.72-1.672-6.87-2.157-10.08-1.182-.413.125-.845-.107-.97-.52-.125-.413.107-.847.52-.972 3.67-1.114 8.243-.57 11.35 1.342.366.226.486.707.26 1.074zm.106-2.833C14.384 8.71 8.563 8.52 5.176 9.548c-.512.155-1.04-.136-1.195-.648-.155-.512.136-1.04.648-1.195 3.888-1.18 10.31-.96 14.403 1.47.46.273.61.87.337 1.33-.273.46-.87.61-1.33.337z"/></svg>
            </a>`
                : ''
            }
            ${
              s.apple
                ? `<a href="${appleSearchUrl}" target="_blank" class="streaming-pill streaming-pill-apple icon-only" title="Listen on Apple Music">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.22.67-2.94 1.5-.64.73-1.2 1.87-1.05 2.97 1.12.09 2.27-.57 3-.141z"/></svg>
            </a>`
                : ''
            }
          </div>
        </div>
      `;
    });
  }

  bodyEl.innerHTML = html;
  backdrop.classList.add('show');
}

export function showTapsInfo(instrumentId) {
  const backdrop = document.getElementById('info-dialog-backdrop');
  const emojiEl = document.getElementById('info-emoji');
  const titleEl = document.getElementById('info-title');
  const subtitleEl = document.getElementById('info-subtitle');
  const bodyEl = document.getElementById('info-body-content');

  if (!backdrop || !bodyEl) return;

  const instDef = drumTypes[instrumentId];
  const name = instDef ? instDef.name.toUpperCase() : instrumentId.toUpperCase();

  if (emojiEl) emojiEl.innerText = '👉';
  if (titleEl) titleEl.innerText = `${name} TAP DETAILS`;
  if (subtitleEl) subtitleEl.innerText = 'TOUCH TECHNIQUE & SONIC PROPERTIES';

  const touches = instrumentTouches[instrumentId] || [];

  let html = '';
  if (touches.length === 0) {
    html = `<p class="info-paragraph">No custom tap techniques defined for this instrument.</p>`;
  } else {
    touches.forEach((touch) => {
      html += `
        <div class="info-list-item" style="display: flex; flex-direction: column; gap: 4px; margin-bottom: 12px; padding-bottom: 10px; border-bottom: 1px solid rgba(255, 255, 255, 0.05);">
          <div style="display: flex; align-items: center; justify-content: space-between;">
            <span style="font-weight: 800; color: #10b981; font-size: 0.95rem;">${touch.label}</span>
          </div>
          <div style="font-size: 0.85rem; color: #e2e8f0; line-height: 1.4; margin-top: 2px;">
            ${touch.description || ''}
          </div>
        </div>
      `;
    });
  }

  bodyEl.innerHTML = html;
  backdrop.classList.add('show');
}
