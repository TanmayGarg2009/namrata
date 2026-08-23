/**
 * Ambient audio engine supporting optional background MP3 playback on repeat
 * with clean Music ON / Music OFF toggle and synthesized celestial sound effects.
 */

class AudioEngine {
  private ctx: AudioContext | null = null;
  private audioEl: HTMLAudioElement | null = null;
  private isPlaying: boolean = false;
  private listeners: Set<(isPlaying: boolean) => void> = new Set();

  constructor() {
    if (typeof window !== 'undefined') {
      const audio = new Audio('/song.mp3');
      audio.loop = true;
      audio.preload = 'auto';
      audio.volume = 0.75;
      this.audioEl = audio;
    }
  }

  public subscribe(fn: (isPlaying: boolean) => void) {
    this.listeners.add(fn);
    fn(this.isPlaying);
    return () => {
      this.listeners.delete(fn);
    };
  }

  private notify() {
    this.listeners.forEach((fn) => fn(this.isPlaying));
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

  // Toggle Music On / Off
  public toggleMusic(): boolean {
    if (!this.audioEl) return false;

    if (this.isPlaying) {
      this.audioEl.pause();
      this.isPlaying = false;
    } else {
      this.audioEl.play().then(() => {
        this.isPlaying = true;
        this.notify();
      }).catch(() => {
        this.isPlaying = false;
      });
    }

    this.notify();
    return this.isPlaying;
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  // Play a dreamy celestial chime (for candle tap / make a wish)
  public playChime(freq: number = 587.33) {
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
      // Ignore audio errors
    }
  }

  // Play a soft sparkle sound
  public playSparkle() {
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
