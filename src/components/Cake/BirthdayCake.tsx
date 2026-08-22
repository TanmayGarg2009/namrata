import React, { useState } from 'react';
import { soundManager } from '../../utils/audioSynthesizer';
import { fireLightweightConfetti } from '../../utils/confetti';
import { Flame, RefreshCw } from 'lucide-react';

interface BirthdayCakeProps {
  className?: string;
}

export const BirthdayCake: React.FC<BirthdayCakeProps> = ({ className = '' }) => {
  // State for 3 candles (all lit initially)
  const [candlesLit, setCandlesLit] = useState<boolean[]>([true, true, true]);
  const [isSparkling, setIsSparkling] = useState<boolean>(false);
  const [sparkleCount, setSparkleCount] = useState<number>(0);

  const allOut = candlesLit.every((lit) => !lit);

  const toggleCandle = (index: number) => {
    soundManager.playChime(index === 0 ? 523.25 : index === 1 ? 659.25 : 783.99);
    setCandlesLit((prev) => {
      const next = [...prev];
      next[index] = !next[index];
      return next;
    });
    triggerSparkleBurst();
  };

  const handleBlowAll = () => {
    soundManager.playSparkle();
    setCandlesLit([false, false, false]);
    fireLightweightConfetti({ particleCount: 30, origin: { x: 0.5, y: 0.6 } });
    triggerSparkleBurst();
  };

  const handleRelightAll = () => {
    soundManager.playChime(659.25);
    setCandlesLit([true, true, true]);
    triggerSparkleBurst();
  };

  const triggerSparkleBurst = () => {
    setIsSparkling(true);
    setSparkleCount((c) => c + 1);
    setTimeout(() => setIsSparkling(false), 1200);
  };

  return (
    <div className={`relative flex flex-col items-center select-none ${className}`}>
      {/* Ambient Backlight for Cake */}
      <div 
        className="absolute -top-10 w-56 h-56 md:w-72 md:h-72 rounded-full opacity-35 blur-3xl pointer-events-none transition-opacity duration-500"
        style={{
          background: allOut
            ? 'radial-gradient(circle, rgba(147, 51, 234, 0.2) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(245, 208, 97, 0.35) 0%, rgba(251, 113, 133, 0.15) 50%, transparent 70%)'
        }}
      />

      {/* SVG Artisanal Cake */}
      <div className="relative group cursor-pointer transition-transform duration-300 hover:scale-[1.02] active:scale-[0.99]">
        <svg
          viewBox="0 0 320 280"
          className="w-64 h-56 sm:w-72 sm:h-64 md:w-84 md:h-72 filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.5)] overflow-visible"
        >
          <defs>
            {/* Gradients */}
            <linearGradient id="plateGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#334155" />
              <stop offset="50%" stop-color="#1e293b" />
              <stop offset="100%" stop-color="#0f172a" />
            </linearGradient>
            <linearGradient id="goldRim" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#fef08a" />
              <stop offset="50%" stop-color="#f59e0b" />
              <stop offset="100%" stop-color="#d97706" />
            </linearGradient>
            <linearGradient id="tierBottom" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#2d1b4e" />
              <stop offset="50%" stop-color="#1e1338" />
              <stop offset="100%" stop-color="#130b24" />
            </linearGradient>
            <linearGradient id="tierTop" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#432874" />
              <stop offset="50%" stop-color="#2c1a4d" />
              <stop offset="100%" stop-color="#1c0f33" />
            </linearGradient>
            <linearGradient id="frostingRose" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#ffe4e6" />
              <stop offset="50%" stop-color="#fda4af" />
              <stop offset="100%" stop-color="#f43f5e" />
            </linearGradient>
            <linearGradient id="candleGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#fbcfe8" />
              <stop offset="50%" stop-color="#f472b6" />
              <stop offset="100%" stop-color="#db2777" />
            </linearGradient>
            <linearGradient id="candleGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#fef08a" />
              <stop offset="50%" stop-color="#f59e0b" />
              <stop offset="100%" stop-color="#b45309" />
            </linearGradient>
            <linearGradient id="candleGrad3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#e9d5ff" />
              <stop offset="50%" stop-color="#c084fc" />
              <stop offset="100%" stop-color="#7e22ce" />
            </linearGradient>
            <linearGradient id="flameGrad" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stop-color="#ef4444" />
              <stop offset="30%" stop-color="#f97316" />
              <stop offset="70%" stop-color="#fde047" />
              <stop offset="100%" stop-color="#ffffff" />
            </linearGradient>
          </defs>

          {/* Pedestal Stand */}
          <ellipse cx="160" cy="255" rx="130" ry="18" fill="url(#plateGrad)" stroke="url(#goldRim)" stroke-width="1.5" />
          <ellipse cx="160" cy="252" rx="115" ry="12" fill="#0f172a" opacity="0.6" />

          {/* Bottom Cake Tier */}
          <rect x="55" y="165" width="210" height="75" rx="10" fill="url(#tierBottom)" stroke="rgba(255,255,255,0.06)" stroke-width="1" />
          <ellipse cx="160" cy="165" rx="105" ry="14" fill="#382261" />

          {/* Bottom Tier Frosting & Drip */}
          <path
            d="M 55 168 
               Q 70 188 85 168 
               Q 100 196 115 168 
               Q 130 185 145 168 
               Q 160 198 175 168 
               Q 190 186 205 168 
               Q 220 195 235 168 
               Q 250 185 265 168
               L 265 165 L 55 165 Z"
            fill="url(#frostingRose)"
            opacity="0.95"
          />

          {/* Gold Pearls & Sprinkles on Bottom Tier */}
          <circle cx="85" cy="205" r="2.5" fill="#fde047" />
          <circle cx="120" cy="215" r="2" fill="#fda4af" />
          <circle cx="160" cy="210" r="3" fill="#fde047" />
          <circle cx="200" cy="218" r="2" fill="#c084fc" />
          <circle cx="235" cy="205" r="2.5" fill="#fde047" />

          {/* Top Cake Tier */}
          <rect x="90" y="105" width="140" height="62" rx="8" fill="url(#tierTop)" stroke="rgba(255,255,255,0.08)" stroke-width="1" />
          <ellipse cx="160" cy="105" rx="70" ry="10" fill="#4f2f87" />

          {/* Top Tier Frosting Drips */}
          <path
            d="M 90 108 
               Q 105 125 120 108 
               Q 135 130 150 108 
               Q 165 124 180 108 
               Q 195 132 210 108 
               Q 220 122 230 108
               L 230 105 L 90 105 Z"
            fill="#fff1f2"
          />

          {/* Gold pearls on top tier */}
          <circle cx="115" cy="140" r="2" fill="#fde047" />
          <circle cx="145" cy="148" r="2.5" fill="#fda4af" />
          <circle cx="175" cy="142" r="2" fill="#c084fc" />
          <circle cx="205" cy="146" r="2" fill="#fde047" />

          {/* CANDLE 1 (Left: x=120) */}
          <g className="cursor-pointer" onClick={() => toggleCandle(0)}>
            {/* Candle Body */}
            <rect x="116" y="55" width="8" height="48" rx="3" fill="url(#candleGrad1)" />
            {/* Stripes */}
            <line x1="116" y1="65" x2="124" y2="69" stroke="#ffffff" stroke-width="1.5" opacity="0.6" />
            <line x1="116" y1="80" x2="124" y2="84" stroke="#ffffff" stroke-width="1.5" opacity="0.6" />
            {/* Wick */}
            <line x1="120" y1="55" x2="120" y2="48" stroke="#cbd5e1" stroke-width="1.5" />
            {/* Flame */}
            {candlesLit[0] && (
              <g className="animate-flame-flicker origin-bottom" style={{ transformOrigin: '120px 48px' }}>
                <circle cx="120" cy="38" r="10" fill="#facc15" opacity="0.25" />
                <path
                  d="M 120 24 Q 126 36 120 48 Q 114 36 120 24 Z"
                  fill="url(#flameGrad)"
                />
              </g>
            )}
            {!candlesLit[0] && (
              <circle cx="120" cy="48" r="1.5" fill="#64748b" opacity="0.8" />
            )}
          </g>

          {/* CANDLE 2 (Center: x=160, slightly taller) */}
          <g className="cursor-pointer" onClick={() => toggleCandle(1)}>
            {/* Candle Body */}
            <rect x="155.5" y="45" width="9" height="58" rx="3" fill="url(#candleGrad2)" />
            {/* Stripes */}
            <line x1="155.5" y1="58" x2="164.5" y2="62" stroke="#ffffff" stroke-width="1.5" opacity="0.7" />
            <line x1="155.5" y1="75" x2="164.5" y2="79" stroke="#ffffff" stroke-width="1.5" opacity="0.7" />
            {/* Wick */}
            <line x1="160" y1="45" x2="160" y2="37" stroke="#cbd5e1" stroke-width="1.5" />
            {/* Flame */}
            {candlesLit[1] && (
              <g className="animate-flame-flicker origin-bottom" style={{ transformOrigin: '160px 37px', animationDelay: '0.3s' }}>
                <circle cx="160" cy="27" r="12" fill="#facc15" opacity="0.3" />
                <path
                  d="M 160 11 Q 167 25 160 37 Q 153 25 160 11 Z"
                  fill="url(#flameGrad)"
                />
              </g>
            )}
            {!candlesLit[1] && (
              <circle cx="160" cy="37" r="1.5" fill="#64748b" opacity="0.8" />
            )}
          </g>

          {/* CANDLE 3 (Right: x=200) */}
          <g className="cursor-pointer" onClick={() => toggleCandle(2)}>
            {/* Candle Body */}
            <rect x="196" y="55" width="8" height="48" rx="3" fill="url(#candleGrad3)" />
            {/* Stripes */}
            <line x1="196" y1="65" x2="204" y2="69" stroke="#ffffff" stroke-width="1.5" opacity="0.6" />
            <line x1="196" y1="80" x2="204" y2="84" stroke="#ffffff" stroke-width="1.5" opacity="0.6" />
            {/* Wick */}
            <line x1="200" y1="55" x2="200" y2="48" stroke="#cbd5e1" stroke-width="1.5" />
            {/* Flame */}
            {candlesLit[2] && (
              <g className="animate-flame-flicker origin-bottom" style={{ transformOrigin: '200px 48px', animationDelay: '0.6s' }}>
                <circle cx="200" cy="38" r="10" fill="#facc15" opacity="0.25" />
                <path
                  d="M 200 24 Q 206 36 200 48 Q 194 36 200 24 Z"
                  fill="url(#flameGrad)"
                />
              </g>
            )}
            {!candlesLit[2] && (
              <circle cx="200" cy="48" r="1.5" fill="#64748b" opacity="0.8" />
            )}
          </g>
        </svg>

        {/* Sparkles on tap */}
        {isSparkling && (
          <div key={sparkleCount} className="absolute inset-0 pointer-events-none flex items-center justify-center">
            <span className="absolute -top-4 left-1/4 text-gold-300 animate-ping text-sm">✨</span>
            <span className="absolute -top-6 right-1/4 text-rose-300 animate-ping text-sm">💖</span>
            <span className="absolute top-1/2 -left-4 text-lavender-300 animate-ping text-xs">⭐</span>
            <span className="absolute top-1/2 -right-4 text-gold-200 animate-ping text-xs">✨</span>
          </div>
        )}
      </div>

      {/* Interactive Micro-Controls */}
      <div className="mt-4 flex items-center gap-3">
        {!allOut ? (
          <button
            onClick={handleBlowAll}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-midnight-900/80 hover:bg-midnight-800 border border-gold-400/30 hover:border-gold-400 text-xs md:text-sm text-gold-200 font-medium transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm cursor-pointer"
            aria-label="Blow out all candles and make a wish"
          >
            <Flame className="w-4 h-4 text-gold-400 animate-pulse" />
            <span>Blow Candles 🎂</span>
          </button>
        ) : (
          <button
            onClick={handleRelightAll}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-midnight-900/80 hover:bg-midnight-800 border border-lavender-400/40 hover:border-lavender-400 text-xs md:text-sm text-lavender-200 font-medium transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm cursor-pointer"
            aria-label="Relight candles"
          >
            <RefreshCw className="w-3.5 h-3.5 text-lavender-300" />
            <span>Relight Candles ✨</span>
          </button>
        )}
      </div>
      <p className="mt-2 text-[11px] md:text-xs text-slate-400 font-light">
        (Tap any candle flame to toggle it)
      </p>
    </div>
  );
};
