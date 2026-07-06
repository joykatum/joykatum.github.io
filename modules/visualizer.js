// Stroke-Specific Interactive Canvas Visualizer Module
import { state } from './state.js';

let canvas = null;
let ctx = null;
let animationFrameId = null;

const radialGlows = [];
const particles = [];
const acousticShockwaves = [];
const bendingTrails = [];

// Helper to check if a sound is a bass, slap/rimshot, or pitch-bend
function getStrokeCategory(hitType, instrument) {
  const type = (hitType || '').toLowerCase();
  const inst = (instrument || '').toLowerCase();

  // Pitch bends (Tabla Bayan Ga, Cuíca, Talking Drum)
  if (
    type === 'bayan_ga' ||
    inst === 'cuica' ||
    inst === 'talkingdrum' ||
    type === 'bass_slide' ||
    type === 'pitch_bend' ||
    (inst === 'tabla' && type === 'bass')
  ) {
    // If Cuica or Talking drum slide up/down
    let isUp = true;
    if (type === 'muffled' || type === 'heeltoe') {
      isUp = false; // Downward bend
    }
    return { category: 'pitch-bend', dirUp: isUp };
  }

  // Bass hits
  if (
    type.includes('bass') ||
    type.includes('doum') ||
    type.includes('parche_bass') ||
    type.includes('parche_open') ||
    type === 'ga' ||
    type === 'piano' ||
    type === 'boula' ||
    type === 'dagu' ||
    type === 'nagado' ||
    type === 'thoppi'
  ) {
    return { category: 'bass' };
  }

  // Slaps, rimshots, clicks, crisp sharp sounds
  if (
    type.includes('slap') ||
    type.includes('rimshot') ||
    type.includes('tak') ||
    type.includes('sak') ||
    type.includes('ta') ||
    type.includes('chacha') ||
    type.includes('click') ||
    type.includes('aro') ||
    type === 'bangu' ||
    type === 'shime'
  ) {
    return { category: 'slap' };
  }

  // Default fallback (muffled/heeltoe/etc)
  return { category: 'other' };
}

// Particle Classes

// Bass hit - expanding glowing wavefront ring + deep radial pulse
class RadialGlow {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.radius = 10;
    this.maxRadius = 130 + Math.random() * 70;
    this.alpha = 1.0;
    this.decay = 0.035 + Math.random() * 0.015;
    this.color = color || 'rgba(249, 115, 22, 1)'; // Radial glow base color
  }

  update() {
    // Elegant ease-out expansion for natural wave feel
    this.radius += (this.maxRadius - this.radius) * 0.12;
    this.alpha -= this.decay;
  }

  draw() {
    if (this.alpha <= 0) return;
    ctx.save();

    // 1. Resolve base RGB color from theme string
    let baseColor = '249, 115, 22'; // Default deep amber/orange
    if (this.color.includes('blue') || this.color.includes('37')) {
      baseColor = '59, 130, 246'; // blue
    } else if (this.color.includes('purple')) {
      baseColor = '168, 85, 247'; // purple
    } else if (this.color.includes('gold') || this.color.includes('yellow')) {
      baseColor = '234, 179, 8'; // gold
    } else if (this.color.includes('green') || this.color.includes('16')) {
      baseColor = '16, 185, 129'; // emerald
    }

    // 2. Soft expanding radial glow representing bass pressure
    const grad = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius);
    grad.addColorStop(0, `rgba(${baseColor}, ${this.alpha * 0.35})`);
    grad.addColorStop(0.3, `rgba(${baseColor}, ${this.alpha * 0.12})`);
    grad.addColorStop(1, 'rgba(0, 0, 0, 0)');

    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();

    // 3. Crisp acoustic low-frequency wavefront ring
    ctx.strokeStyle = `rgba(${baseColor}, ${this.alpha * 0.25})`;
    ctx.lineWidth = 1.5;
    ctx.shadowBlur = 10;
    ctx.shadowColor = `rgba(${baseColor}, ${this.alpha * 0.5})`;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius * 0.75, 0, Math.PI * 2);
    ctx.stroke();

    ctx.restore();
  }
}

// Elegant high-speed sparks with beautiful motion blur
class SparkParticle {
  constructor(x, y, isSlap = false) {
    this.x = x;
    this.y = y;
    const angle = Math.random() * Math.PI * 2;
    const speed = isSlap ? 6 + Math.random() * 14 : 3 + Math.random() * 7;

    this.vx = Math.cos(angle) * speed;
    this.vy = Math.sin(angle) * speed - (isSlap ? 2.5 : 0.5); // organic upward bias for energetic hits
    this.size = isSlap ? 1.5 + Math.random() * 2.5 : 1.2 + Math.random() * 1.8;
    this.alpha = 1.0;
    this.decay = 0.02 + Math.random() * 0.03;
    this.gravity = isSlap ? 0.15 : 0.08;
    this.friction = 0.97; // smooth deceleration

    // Color pallets
    if (isSlap) {
      const colors = ['#ffffff', '#60a5fa', '#a5f3fc', '#38bdf8', '#c084fc', '#e9d5ff'];
      this.color = colors[Math.floor(Math.random() * colors.length)];
    } else {
      const colors = ['#f97316', '#fb923c', '#fde047', '#f43f5e', '#ffedd5'];
      this.color = colors[Math.floor(Math.random() * colors.length)];
    }
  }

  update() {
    this.vx *= this.friction;
    this.vy *= this.friction;
    this.vy += this.gravity;
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= this.decay;
  }

  draw() {
    if (this.alpha <= 0) return;
    ctx.save();
    ctx.globalAlpha = this.alpha;
    ctx.shadowBlur = 6;
    ctx.shadowColor = this.color;
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.size;
    ctx.lineCap = 'round';

    // Velocity-directed motion blur trail for sleek look!
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
    const trailLength = Math.min(3.0, speed * 0.8);
    ctx.lineTo(this.x - this.vx * trailLength, this.y - this.vy * trailLength);
    ctx.stroke();

    ctx.restore();
  }
}

// Replacement for cheesy Lightning Crackle: A sophisticated concentric Acoustic Shockwave propagation ring
class AcousticShockwave {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.alpha = 1.0;
    this.decay = 0.035 + Math.random() * 0.015;
    this.color = color || '#38bdf8'; // bright acoustic blue/white
    this.maxRadius = 140 + Math.random() * 60;

    // Wavefront offsets, delays, propagation speeds and dash patterns
    this.waves = [
      { radius: 0, speed: 7, strokeWidth: 2, dashed: false },
      { radius: -15, speed: 9, strokeWidth: 1.2, dashed: true },
      { radius: -30, speed: 11, strokeWidth: 1.0, dashed: false }
    ];
  }

  update() {
    this.alpha -= this.decay;
    this.waves.forEach((w) => {
      w.radius += w.speed;
    });
  }

  draw() {
    if (this.alpha <= 0) return;
    ctx.save();
    ctx.globalAlpha = this.alpha;
    ctx.shadowBlur = 12;
    ctx.shadowColor = this.color;

    this.waves.forEach((w) => {
      if (w.radius > 0 && w.radius < this.maxRadius) {
        ctx.strokeStyle = this.color;
        // Fade line weight as the sound wave propagates and dilutes
        const p = w.radius / this.maxRadius;
        ctx.lineWidth = w.strokeWidth * (1.2 - p);

        // Technical dotted/dashed wavefront look for secondary ripple
        if (w.dashed) {
          ctx.setLineDash([4, 6]);
        } else {
          ctx.setLineDash([]);
        }

        ctx.beginPath();
        ctx.arc(this.x, this.y, w.radius, 0, Math.PI * 2);
        ctx.stroke();
      }
    });

    ctx.restore();
  }
}

// Gorgeous multi-layered neon/plasma ribbon that tapers to a fine point
class PitchBendTrail {
  constructor(x, y, dirUp = true) {
    this.x = x;
    this.y = y;
    this.age = 0;
    this.duration = 45; // Frames of animation
    this.dirUp = dirUp;
    this.amplitude = 18 + Math.random() * 12;
    this.color = dirUp ? '#a78bfa' : '#60a5fa'; // Purple for sliding up, Blue for sliding down
    this.trailPoints = [];
  }

  update() {
    this.age++;

    // Add new trailing points shifting dynamically
    const t = this.age / this.duration;
    const shiftY = this.dirUp ? -t * 190 : t * 190;
    const sineX = Math.sin(t * Math.PI * 4.5) * this.amplitude * (1 - t);

    this.trailPoints.unshift({
      x: this.x + sineX,
      y: this.y + shiftY,
      alpha: 1.0 - t
    });

    if (this.trailPoints.length > 25) {
      this.trailPoints.pop();
    }
  }

  draw() {
    if (this.age >= this.duration || this.trailPoints.length < 2) return;

    ctx.save();
    ctx.shadowBlur = 12;
    ctx.shadowColor = this.color;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    // 1. Thicker glowing neon trail with tapering width
    for (let i = 0; i < this.trailPoints.length - 1; i++) {
      const p1 = this.trailPoints[i];
      const p2 = this.trailPoints[i + 1];

      const progress = i / this.trailPoints.length; // 0 (newest/head) to 1 (oldest/tail)
      ctx.lineWidth = Math.max(1, 6.5 * (1 - progress));

      ctx.strokeStyle = this.color;
      ctx.globalAlpha = p1.alpha * 0.45;
      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.stroke();
    }

    // 2. High-contrast sharp white core energy ribbon
    for (let i = 0; i < this.trailPoints.length - 1; i++) {
      const p1 = this.trailPoints[i];
      const p2 = this.trailPoints[i + 1];

      const progress = i / this.trailPoints.length;
      ctx.lineWidth = Math.max(0.5, 2.5 * (1 - progress));

      ctx.strokeStyle = '#ffffff';
      ctx.globalAlpha = p1.alpha * 0.8;
      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.stroke();
    }

    ctx.restore();
  }
}

// Draw Loop
function tick() {
  if (!ctx) return;

  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Update & Draw Radial Glows (Bass hits)
  for (let i = radialGlows.length - 1; i >= 0; i--) {
    const glow = radialGlows[i];
    glow.update();
    glow.draw();
    if (glow.alpha <= 0) {
      radialGlows.splice(i, 1);
    }
  }

  // Update & Draw Pitch Bend Trails
  for (let i = bendingTrails.length - 1; i >= 0; i--) {
    const trail = bendingTrails[i];
    trail.update();
    trail.draw();
    if (trail.age >= trail.duration) {
      bendingTrails.splice(i, 1);
    }
  }

  // Update & Draw Acoustic Shockwaves (Slaps/Rimshots)
  for (let i = acousticShockwaves.length - 1; i >= 0; i--) {
    const shock = acousticShockwaves[i];
    shock.update();
    shock.draw();
    if (shock.alpha <= 0) {
      acousticShockwaves.splice(i, 1);
    }
  }

  // Update & Draw Spark Particles
  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i];
    p.update();
    p.draw();
    if (p.alpha <= 0) {
      particles.splice(i, 1);
    }
  }

  animationFrameId = requestAnimationFrame(tick);
}

// Get the center of the drum element on the screen
function getDrumCenter(drumId) {
  const el = document.getElementById(`drum-${drumId}`);
  if (!el) {
    return { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  }
  const rect = el.getBoundingClientRect();
  const canvasRect = canvas.getBoundingClientRect();
  return {
    x: rect.left + rect.width / 2 - canvasRect.left,
    y: rect.top + rect.height / 2 - canvasRect.top
  };
}

// Core API Exports
export function initVisualizer() {
  let container = document.querySelector('.stage-container') || document.querySelector('.main-content');
  if (!container) return;

  // Cleanup old canvas if any
  const oldCanvas = document.getElementById('stroke-visualizer');
  if (oldCanvas) oldCanvas.remove();

  canvas = document.createElement('canvas');
  canvas.id = 'stroke-visualizer';
  canvas.style.position = 'absolute';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.pointerEvents = 'none'; // Essential! Allow touches to pass through
  canvas.style.zIndex = '5'; // Layered beautifully above background panels, behind drum elements

  container.style.position = 'relative';
  container.insertBefore(canvas, container.firstChild);

  ctx = canvas.getContext('2d');

  const resize = () => {
    const rect = container.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
  };

  window.addEventListener('resize', resize);
  resize();

  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
  }
  animationFrameId = requestAnimationFrame(tick);

  // Attach to window so ui.js can easily trigger it
  window.StrokeVisualizer = {
    triggerStroke
  };
}

export function triggerStroke(drumId, hitType) {
  if (!ctx || !canvas) return;

  const center = getDrumCenter(drumId);
  const instrument = state.currentInstrument;
  const { category, dirUp } = getStrokeCategory(hitType, instrument);

  if (category === 'bass') {
    // Deep glowing radial pulse
    const color = 'rgba(249, 115, 22, 1)';
    radialGlows.push(new RadialGlow(center.x, center.y, color));

    // Spawn deep heavy sparks drifting slowly
    for (let i = 0; i < 12; i++) {
      particles.push(new SparkParticle(center.x, center.y, false));
    }
  } else if (category === 'slap') {
    // Organic, high-end Acoustic Shockwave ripple
    const color = Math.random() > 0.5 ? '#38bdf8' : '#e2f8ff';
    acousticShockwaves.push(new AcousticShockwave(center.x, center.y, color));

    // Spawn high velocity sharp sparkle sparks
    for (let i = 0; i < 24; i++) {
      particles.push(new SparkParticle(center.x, center.y, true));
    }
  } else if (category === 'pitch-bend') {
    // Elegant slide neon ribbon
    bendingTrails.push(new PitchBendTrail(center.x, center.y, dirUp));

    // Fast sparks twisting out
    for (let i = 0; i < 15; i++) {
      particles.push(new SparkParticle(center.x, center.y, true));
    }
  } else {
    // Standard default hit particle reaction
    for (let i = 0; i < 8; i++) {
      particles.push(new SparkParticle(center.x, center.y, false));
    }
  }
}
