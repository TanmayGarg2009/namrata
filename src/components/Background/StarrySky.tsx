import React, { useMemo } from 'react';
import { useIsMobile } from '../../hooks/useIsMobile';

interface Star {
  id: number;
  top: string;
  left: string;
  size: number;
  duration: string;
  delay: string;
  opacity: number;
  color: string;
}

export const StarrySky: React.FC = () => {
  const isMobile = useIsMobile();

  // Generate lightweight static star positions
  const stars: Star[] = useMemo(() => {
    const count = isMobile ? 12 : 28;
    const colors = ['#ffffff', '#fde68a', '#c8b6ff', '#fed7aa', '#fbcfe8'];
    
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      top: `${(i * 17 + 13) % 95}%`,
      left: `${(i * 23 + 7) % 96}%`,
      size: (i % 3 === 0 ? 3 : i % 2 === 0 ? 2 : 1.5),
      duration: `${3 + (i % 4) * 1.2}s`,
      delay: `${(i % 5) * 0.7}s`,
      opacity: 0.3 + (i % 4) * 0.18,
      color: colors[i % colors.length],
    }));
  }, [isMobile]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Deep celestial gradient backdrop */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#04050e] via-[#07091a] to-[#04050d]" />

      {/* Atmospheric Soft Nebula Glows (Performance-friendly static radial gradients) */}
      <div 
        className="absolute -top-[15%] left-[10%] w-[70vw] max-w-[650px] h-[50vw] max-h-[500px] rounded-full opacity-30 blur-[70px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(120, 95, 220, 0.28) 0%, rgba(200, 182, 255, 0.08) 50%, transparent 70%)' }}
      />
      <div 
        className="absolute top-[40%] -right-[10%] w-[60vw] max-w-[550px] h-[45vw] max-h-[450px] rounded-full opacity-20 blur-[80px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(244, 114, 182, 0.22) 0%, rgba(253, 164, 175, 0.05) 50%, transparent 70%)' }}
      />
      <div 
        className="absolute -bottom-[10%] left-[20%] w-[80vw] max-w-[700px] h-[40vw] max-h-[400px] rounded-full opacity-25 blur-[90px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(245, 208, 97, 0.18) 0%, rgba(147, 51, 234, 0.08) 50%, transparent 70%)' }}
      />

      {/* Elegant Crescent Moon (Top Right) */}
      <div className="absolute top-8 right-6 md:top-14 md:right-16 opacity-75">
        <svg width="48" height="48" viewBox="0 0 100 100" className="w-8 h-8 md:w-12 md:h-12 drop-shadow-[0_0_12px_rgba(253,230,138,0.4)]">
          <defs>
            <linearGradient id="moonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#fffbeb" />
              <stop offset="60%" stop-color="#fef08a" />
              <stop offset="100%" stop-color="#f59e0b" />
            </linearGradient>
          </defs>
          <path
            d="M 60 10 A 40 40 0 1 0 90 70 A 35 35 0 1 1 60 10 Z"
            fill="url(#moonGrad)"
          />
          {/* Moon Sparkle */}
          <g transform="translate(25, 20) scale(0.6)">
            <path d="M 0,-8 Q 1,-1 8,0 Q 1,1 0,8 Q -1,1 -8,0 Q -1,-1 0,-8 Z" fill="#ffffff" opacity="0.9" />
          </g>
        </svg>
      </div>

      {/* Floating Ambient Pastel Balloons (Lightweight CSS animation) */}
      {!isMobile && (
        <>
          <div className="absolute top-[28%] left-[6%] animate-float-slow opacity-35">
            <svg width="34" height="54" viewBox="0 0 40 65">
              <defs>
                <linearGradient id="bal1" x1="20%" y1="0%" x2="80%" y2="100%">
                  <stop offset="0%" stop-color="#fda4af" />
                  <stop offset="100%" stop-color="#e11d48" />
                </linearGradient>
              </defs>
              <ellipse cx="20" cy="22" rx="18" ry="22" fill="url(#bal1)" />
              <polygon points="17,44 23,44 20,48" fill="#fda4af" />
              <path d="M 20 48 Q 24 55 18 64" stroke="#fda4af" stroke-width="1" fill="none" opacity="0.6" />
            </svg>
          </div>
          <div className="absolute top-[65%] right-[8%] animate-float-delayed opacity-30">
            <svg width="32" height="50" viewBox="0 0 40 65">
              <defs>
                <linearGradient id="bal2" x1="20%" y1="0%" x2="80%" y2="100%">
                  <stop offset="0%" stop-color="#c8b6ff" />
                  <stop offset="100%" stop-color="#7c3aed" />
                </linearGradient>
              </defs>
              <ellipse cx="20" cy="22" rx="18" ry="22" fill="url(#bal2)" />
              <polygon points="17,44 23,44 20,48" fill="#c8b6ff" />
              <path d="M 20 48 Q 16 55 22 64" stroke="#c8b6ff" stroke-width="1" fill="none" opacity="0.6" />
            </svg>
          </div>
        </>
      )}

      {/* Fixed Twinkling Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full"
          style={{
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: star.color,
            opacity: star.opacity,
            animation: `twinkle ${star.duration} ease-in-out ${star.delay} infinite`,
            boxShadow: star.size > 2 ? `0 0 6px ${star.color}` : 'none',
          }}
        />
      ))}
    </div>
  );
};
