/**
 * Ambient audio engine supporting background MP3 playback on repeat with mute/unmute
 * and synthesized celestial sound effects (candle chimes, stardust sparkles).
 */

class AudioEngine {
  private ctx: AudioContext | null = null;
  private audioEl: HTMLAudioElement | null = null;
  private isMuted: boolean = false;
  private hasStarted: boolean = false;
  private listeners: Set<(isMuted: boolean, isPlaying: boolean) => void> = new Set();

  constructor() {
    if (typeof window !== 'undefined') {
      const audio = new Audio('/song.mp3');
      audio.loop = true;
      audio.preload = 'auto';
      audio.volume = 0.75;
      this.audioEl = audio;

      // Attempt autoplay right away (if allowed by browser policy)
      const tryAuto = () => {
        audio.play().then(() => {
          this.hasStarted = true;
          this.notify();
        }).catch(() => {
          // Will start on first user interaction
        });
      };

      tryAuto();

      // Ensure audio starts on the first interaction anywhere on page
      const startOnFirstGesture = () => {
        if (!this.hasStarted) {
          audio.play().then(() => {
            this.hasStarted = true;
            this.notify();
          }).catch(() => {});
        }
        window.removeEventListener('click', startOnFirstGesture);
        window.removeEventListener('touchstart', startOnFirstGesture);
        window.removeEventListener('keydown', startOnFirstGesture);
      };

      window.addEventListener('click', startOnFirstGesture, { passive: true });
      window.addEventListener('touchstart', startOnFirstGesture, { passive: true });
      window.addEventListener('keydown', startOnFirstGesture, { passive: true });
    }
  }

  public subscribe(fn: (isMuted: boolean, isPlaying: boolean) => void) {
    this.listeners.add(fn);
    fn(this.isMuted, this.hasStarted && !this.audioEl?.paused);
    return () => {
      this.listeners.delete(fn);
    };
  }

  private notify() {
    const isPlaying = !!(this.audioEl && !this.audioEl.paused);
    this.listeners.forEach((fn) => fn(this.isMuted, isPlaying));
  }

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Starts or ensures playback
  public play() {
    if (this.audioEl) {
      this.audioEl.muted = this.isMuted;
      this.audioEl.play().then(() => {
        this.hasStarted = true;
        this.notify();
      }).catch(() => {});
    }
  }

  // Toggle Mute / Unmute without stopping the track
  public toggleMute(): boolean {
    if (!this.audioEl) return false;

    // If it hasn't started playing yet, start it
    if (this.audioEl.paused) {
      this.audioEl.muted = false;
      this.isMuted = false;
      this.audioEl.play().then(() => {
        this.hasStarted = true;
        this.notify();
      }).catch(() => {});
      return true;
    }

    this.isMuted = !this.isMuted;
    this.audioEl.muted = this.isMuted;
    this.notify();
    return !this.isMuted;
  }

  public getMuted(): boolean {
    return this.isMuted;
  }

  public getIsPlaying(): boolean {
    return !!(this.audioEl && !this.audioEl.paused && !this.isMuted);
  }

  // Play a dreamy celestial chime (for candle tap / make a wish)
  public playChime(freq: number = 587.33) {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.4, now + 0.15);
      osc.frequency.exponentialRampToValueAtTime(freq, now + 0.6);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.15, now + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.0);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 1.05);
    } catch {
      // Ignore audio errors gracefully
    }
  }

  // Play a soft sparkle sound
  public playSparkle() {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51];
      const now = this.ctx.currentTime;

      notes.forEach((freq, idx) => {
        if (!this.ctx) return;
        const noteTime = now + idx * 0.07;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, noteTime);

        gain.gain.setValueAtTime(0.001, noteTime);
        gain.gain.linearRampToValueAtTime(0.06, noteTime + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, noteTime + 0.5);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(noteTime);
        osc.stop(noteTime + 0.55);
      });
    } catch {
      // Ignore
    }
  }
}

export const soundManager = new AudioEngine();
