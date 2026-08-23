import React, { useEffect, useRef, useState } from 'react';
import { BIRTHDAY_DATA } from '../../config/birthdayData';
import { HeartHandshake } from 'lucide-react';

export const RakshaBandhanSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="rakhi"
      className="relative py-20 px-4 max-w-3xl mx-auto w-full z-10"
    >
      <div
        className={`relative rounded-3xl p-6 sm:p-10 md:p-12 bg-gradient-to-b from-midnight-900/95 via-midnight-900/80 to-midnight-950/95 border border-gold-400/30 shadow-[0_15px_45px_rgba(0,0,0,0.6)] backdrop-blur-md transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Soft Background Accents */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-gold-500/10 rounded-full blur-2xl pointer-events-none" />

        {/* Section Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/15 border border-gold-400/30 text-gold-300 text-xs font-semibold tracking-widest uppercase mb-3">
            <HeartHandshake className="w-3.5 h-3.5 text-gold-400" />
            <span>{BIRTHDAY_DATA.rakshaBandhan.teaserBadge}</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-100">
            {BIRTHDAY_DATA.rakshaBandhan.title}
          </h2>

          <p className="mt-2 font-serif text-xl sm:text-2xl font-semibold gold-gradient-text">
            {BIRTHDAY_DATA.rakshaBandhan.subtitle}
          </p>
        </div>

        {/* Minimal Artisanal SVG Rakhi */}
        <div className="my-6 flex items-center justify-center">
          <div className="relative flex items-center justify-center w-full max-w-sm">
            {/* Left Thread */}
            <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-rose-400 to-gold-400 opacity-75" />

            {/* Central Rakhi Medallion */}
            <div className="relative mx-3 group cursor-pointer transition-transform duration-300 hover:scale-110">
              <svg width="64" height="64" viewBox="0 0 100 100" className="drop-shadow-[0_0_12px_rgba(245,208,97,0.5)]">
                <defs>
                  <radialGradient id="rakhiGold" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stop-color="#fffbeb" />
                    <stop offset="50%" stop-color="#fde047" />
                    <stop offset="100%" stop-color="#ca8a04" />
                  </radialGradient>
                  <radialGradient id="rakhiRuby" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stop-color="#fecdd3" />
                    <stop offset="50%" stop-color="#f43f5e" />
                    <stop offset="100%" stop-color="#9f1239" />
                  </radialGradient>
                </defs>

                {/* Outer Petals / Sunburst */}
                <circle cx="50" cy="50" r="42" fill="none" stroke="#fde047" stroke-width="1.5" stroke-dasharray="4 3" opacity="0.8" />
                <circle cx="50" cy="50" r="36" fill="url(#rakhiGold)" />
                <circle cx="50" cy="50" r="28" fill="#1e1338" />
                <circle cx="50" cy="50" r="20" fill="url(#rakhiRuby)" stroke="#fde047" stroke-width="1.5" />
                <circle cx="50" cy="50" r="6" fill="#ffffff" />

                {/* Micro Petals */}
                <g fill="#fde047">
                  <circle cx="50" cy="18" r="2.5" />
                  <circle cx="82" cy="50" r="2.5" />
                  <circle cx="50" cy="82" r="2.5" />
                  <circle cx="18" cy="50" r="2.5" />
                  <circle cx="73" cy="27" r="2" />
                  <circle cx="73" cy="73" r="2" />
                  <circle cx="27" cy="73" r="2" />
                  <circle cx="27" cy="27" r="2" />
                </g>
              </svg>
            </div>

            {/* Right Thread */}
            <div className="h-[2px] flex-1 bg-gradient-to-l from-transparent via-rose-400 to-gold-400 opacity-75" />
          </div>
        </div>

        {/* Raksha Bandhan Message */}
        <div className="space-y-4 text-center text-slate-200 font-sans text-base sm:text-lg font-light leading-relaxed">
          <p
            className={`font-serif text-xl sm:text-2xl font-medium text-gold-200 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {BIRTHDAY_DATA.rakshaBandhan.salutation}
          </p>

          <p
            className={`text-slate-300 transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {BIRTHDAY_DATA.rakshaBandhan.siblingJoke}
          </p>

          <div
            className={`pt-2 text-slate-200 italic font-serif text-base sm:text-lg transition-all duration-700 delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            "{BIRTHDAY_DATA.rakshaBandhan.brotherlyBlessing}"
          </div>
        </div>
      </div>
    </section>
  );
};
