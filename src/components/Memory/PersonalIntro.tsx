import React, { useEffect, useRef, useState } from 'react';
import { BIRTHDAY_DATA } from '../../config/birthdayData';
import { Sparkles, MessageCircleQuestion } from 'lucide-react';

export const PersonalIntro: React.FC = () => {
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
      id="memory"
      className="relative py-20 px-4 max-w-3xl mx-auto w-full z-10"
    >
      <div
        className={`relative rounded-3xl p-6 sm:p-10 md:p-12 bg-gradient-to-b from-midnight-900/90 via-midnight-900/70 to-midnight-950/90 border border-white/10 shadow-[0_15px_45px_rgba(0,0,0,0.6)] backdrop-blur-md transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Soft Background Accents */}
        <div className="absolute top-0 right-0 w-36 h-36 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-36 h-36 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

        {/* Section Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-400/30 text-gold-300 text-xs font-semibold tracking-widest uppercase mb-3">
            <MessageCircleQuestion className="w-3.5 h-3.5 text-gold-400" />
            <span>A Genuine Memory</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold gold-gradient-text">
            {BIRTHDAY_DATA.personalMemory.sectionTitle}
          </h2>
          <div className="mt-3 flex items-center justify-center gap-3">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-gold-400/60" />
            <Sparkles className="w-4 h-4 text-gold-300" />
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-gold-400/60" />
          </div>
        </div>

        {/* Memory Storytelling */}
        <div className="space-y-6 text-center text-slate-200 font-sans text-base sm:text-lg md:text-xl font-light leading-relaxed">
          <p
            className={`text-slate-300 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {BIRTHDAY_DATA.personalMemory.jokeSetup}
          </p>

          {/* Ichchadhari Naagin Highlight */}
          <div
            className={`py-1 transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <span className="inline-block font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold text-emerald-300 bg-emerald-950/60 px-5 py-2 rounded-2xl border border-emerald-400/40 shadow-[0_0_25px_rgba(52,211,153,0.2)] tracking-wide">
              {BIRTHDAY_DATA.personalMemory.jokeHighlight}
            </span>
          </div>

          <p
            className={`text-slate-400 italic text-sm sm:text-base transition-all duration-700 delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            "{BIRTHDAY_DATA.personalMemory.jokeReaction}"
          </p>

          <p
            className={`text-slate-300 transition-all duration-700 delay-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {BIRTHDAY_DATA.personalMemory.jokeAdmit}
          </p>

          {/* Transition Line to Admiration */}
          <div
            className={`pt-4 border-t border-white/10 text-gold-200 font-medium text-lg sm:text-xl transition-all duration-700 delay-900 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <p>{BIRTHDAY_DATA.personalMemory.transition}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
