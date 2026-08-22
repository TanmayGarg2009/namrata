import React, { useEffect, useRef, useState } from 'react';
import { BIRTHDAY_DATA } from '../../config/birthdayData';
import { Heart, Sparkles } from 'lucide-react';

export const CinematicMessage: React.FC = () => {
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
      id="message"
      className="relative py-20 px-4 max-w-3xl mx-auto w-full z-10"
    >
      {/* Container with luxury glassmorphic card */}
      <div
        className={`relative rounded-3xl p-6 sm:p-10 md:p-14 bg-gradient-to-b from-midnight-900/90 via-midnight-900/60 to-midnight-950/90 border border-white/10 shadow-[0_15px_45px_rgba(0,0,0,0.6)] backdrop-blur-md transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Subtle glowing corner accents */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-lavender-500/10 rounded-full blur-2xl pointer-events-none" />

        {/* Section Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-500/10 border border-rose-400/30 text-rose-300 text-xs font-semibold tracking-widest uppercase mb-3">
            <Heart className="w-3.5 h-3.5 fill-rose-400 text-rose-400" />
            <span>Dedicated with love</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold rose-gradient-text">
            {BIRTHDAY_DATA.cinematicMessage.sectionTitle}
          </h2>
          <div className="mt-4 flex items-center justify-center gap-3">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-gold-400/60" />
            <Sparkles className="w-4 h-4 text-gold-300" />
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-gold-400/60" />
          </div>
        </div>

        {/* Heartfelt Letter Paragraphs */}
        <div className="space-y-6 text-center text-slate-200 font-sans text-base sm:text-lg md:text-xl font-light leading-relaxed">
          <p
            className={`font-serif text-xl sm:text-2xl font-medium text-gold-200 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {BIRTHDAY_DATA.cinematicMessage.paragraphs[0]}
          </p>

          <p
            className={`text-slate-300 transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {BIRTHDAY_DATA.cinematicMessage.paragraphs[1]}
          </p>

          <p
            className={`text-slate-300 italic font-serif transition-all duration-700 delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {BIRTHDAY_DATA.cinematicMessage.paragraphs[2]}
          </p>

          <div
            className={`pt-4 text-rose-300 font-medium text-lg sm:text-xl flex items-center justify-center gap-2 transition-all duration-700 delay-800 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span>{BIRTHDAY_DATA.cinematicMessage.paragraphs[3]}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
