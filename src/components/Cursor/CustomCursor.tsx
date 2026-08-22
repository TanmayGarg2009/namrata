import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(true);

  useEffect(() => {
    // Detect touch device or small screen
    if (typeof window === 'undefined') return;
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || window.innerWidth < 1024;
    setIsTouch(isTouchDevice);
    if (isTouchDevice) return;

    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
        if (!isVisible) setIsVisible(true);
      });

      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = !!target.closest('button, a, input, [role="button"], .interactive-target, .cursor-pointer');
        setIsHovering(isInteractive);
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  if (isTouch || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden" aria-hidden="true">
      {/* Outer Ring */}
      <div
        className={`fixed top-0 left-0 rounded-full transition-transform duration-150 ease-out will-change-transform ${
          isHovering
            ? 'w-10 h-10 -ml-5 -mt-5 border border-gold-300/80 bg-gold-400/10 scale-125'
            : 'w-7 h-7 -ml-3.5 -mt-3.5 border border-lavender-300/40 bg-transparent scale-100'
        }`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        }}
      />
      {/* Center Dot */}
      <div
        className={`fixed top-0 left-0 rounded-full transition-all duration-75 will-change-transform ${
          isHovering ? 'w-2 h-2 -ml-1 -mt-1 bg-gold-300 shadow-[0_0_10px_#fde047]' : 'w-1.5 h-1.5 -ml-[3px] -mt-[3px] bg-white/90'
        }`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        }}
      />
    </div>
  );
};
