import confetti from 'canvas-confetti';

interface ConfettiOptions {
  particleCount?: number;
  origin?: { x: number; y: number };
  spread?: number;
  startVelocity?: number;
}

// Elegant pastel & luxury gold birthday palette
const LUXURY_PALETTE = ['#fcd34d', '#f59e0b', '#fda4af', '#f472b6', '#c8b6ff', '#f8fafc', '#fed7aa'];

/**
 * Fires a lightweight, performance-capped confetti burst.
 * Designed to not drop frames on mobile.
 */
export function fireLightweightConfetti(opts?: ConfettiOptions) {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const count = opts?.particleCount || (isMobile ? 25 : 55);

  confetti({
    particleCount: count,
    spread: opts?.spread || 60,
    origin: opts?.origin || { y: 0.7, x: 0.5 },
    colors: LUXURY_PALETTE,
    ticks: 150,
    gravity: 0.9,
    scalar: isMobile ? 0.8 : 1.0,
    startVelocity: opts?.startVelocity || (isMobile ? 25 : 35),
    disableForReducedMotion: true,
  });
}

/**
 * Fires a double celebration burst from left and right edges.
 */
export function fireGrandCelebration() {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const count = isMobile ? 20 : 40;

  // Left burst
  confetti({
    particleCount: count,
    angle: 60,
    spread: 55,
    origin: { x: 0.1, y: 0.75 },
    colors: LUXURY_PALETTE,
    ticks: 180,
    gravity: 0.85,
    scalar: isMobile ? 0.8 : 1.0,
    startVelocity: isMobile ? 28 : 38,
    disableForReducedMotion: true,
  });

  // Right burst
  confetti({
    particleCount: count,
    angle: 120,
    spread: 55,
    origin: { x: 0.9, y: 0.75 },
    colors: LUXURY_PALETTE,
    ticks: 180,
    gravity: 0.85,
    scalar: isMobile ? 0.8 : 1.0,
    startVelocity: isMobile ? 28 : 38,
    disableForReducedMotion: true,
  });
}
