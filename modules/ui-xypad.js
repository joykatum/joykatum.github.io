import { state } from './state.js';
import { updateFilter, initAudio } from './audio.js';
import { markAsCustom } from './presets.js';
export function setupXYPad() {
  const xyPad = document.getElementById('xy-pad');
  const dot = document.getElementById('xy-pad-dot');
  if (!xyPad || !dot) return;

  let isDragging = false;

  const updateFromCoords = (clientX, clientY) => {
    const rect = xyPad.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    // Clamp coordinate ratio
    const pctX = Math.max(0, Math.min(1, x / rect.width));
    const pctY = Math.max(0, Math.min(1, y / rect.height));

    state.filterPctX = pctX;
    state.filterPctY = pctY;

    // Map X logarithmically to Frequency (80Hz to 18000Hz)
    state.filterFreqValue = Math.round(80 * Math.pow(18000 / 80, pctX));

    // Map Y to Q resonance (0.1 to 15.0), inverting Y coordinate
    state.filterQValue = 0.1 + (1 - pctY) * 14.9;

    // Position the handle dot
    dot.style.left = `${pctX * 100}%`;
    dot.style.top = `${pctY * 100}%`;

    // Update active filter and mark as modified
    updateFilter();
    markAsCustom();
  };

  const onMouseDown = (e) => {
    initAudio();
    isDragging = true;
    updateFromCoords(e.clientX, e.clientY);
    xyPad.classList.add('active');
  };

  const onMouseMove = (e) => {
    if (!isDragging) return;
    updateFromCoords(e.clientX, e.clientY);
  };

  const onMouseUp = () => {
    isDragging = false;
    xyPad.classList.remove('active');
  };

  // Attach desktop drag-drop listeners
  xyPad.addEventListener('mousedown', onMouseDown);
  window.addEventListener('mousemove', onMouseMove);
  window.addEventListener('mouseup', onMouseUp);

  // Attach mobile touch drag-drop listeners
  xyPad.addEventListener(
    'touchstart',
    (e) => {
      initAudio();
      isDragging = true;
      const touch = e.touches[0];
      if (touch) {
        updateFromCoords(touch.clientX, touch.clientY);
      }
      xyPad.classList.add('active');
    },
    { passive: true }
  );

  window.addEventListener(
    'touchmove',
    (e) => {
      if (!isDragging) return;
      const touch = e.touches[0];
      if (touch) {
        updateFromCoords(touch.clientX, touch.clientY);
      }
    },
    { passive: true }
  );

  window.addEventListener('touchend', () => {
    isDragging = false;
    xyPad.classList.remove('active');
  });
}
