import React from 'react';
import { BIRTHDAY_DATA } from '../../config/birthdayData';
import { BirthdayCake } from '../Cake/BirthdayCake';
import { Sparkles, ChevronDown, Calendar } from 'lucide-react';

interface HeroSectionProps {
  onScrollNext?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onScrollNext }) => {
  return (
    <section 
      id="hero" 
      className="relative min-h-[95vh] flex flex-col items-center justify-between pt-8 pb-6 px-4 text-center max-w-5xl mx-auto w-full z-10"
    >
      {/* Top Prominent Date & Badge Block */}
      <div className="flex flex-col items-center animate-[fadeIn_0.9s_ease-out]">
        
        {/* Date Plaque: 28 AUGUST */}
        <div className="flex flex-col items-center mb-3">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gradient-to-r from-gold-500/15 via-rose-500/15 to-lavender-500/15 border border-gold-400/40 shadow-[0_0_20px_rgba(245,208,97,0.2)]">
            <Calendar className="w-3.5 h-3.5 text-gold-300" />
            <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-gold-200 uppercase">
              {BIRTHDAY_DATA.birthdayDate}
            </span>
          </div>

          <div className="mt-2 text-[11px] sm:text-xs font-medium tracking-[0.3em] text-lavender-300/90 uppercase">
            {BIRTHDAY_DATA.specialDayBadge}
          </div>
        </div>

        {/* Main Hero Birthday Heading */}
        <h1 className="mt-2 font-serif text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight gold-gradient-text leading-[1.1] max-w-3xl flex items-center justify-center gap-2 flex-wrap">
          <span>YOUR BIRTHDAY!</span>
          <span className="text-3xl sm:text-5xl inline-block align-middle">🎂</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-3 text-sm sm:text-base md:text-lg text-slate-300 font-light max-w-2xl mx-auto tracking-wide leading-relaxed">
          {BIRTHDAY_DATA.heroSubtitle}
        </p>
      </div>

      {/* Floating Decorative SVG Stars */}
      <div className="absolute top-[18%] left-[4%] hidden md:block animate-float-slow pointer-events-none opacity-40">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="#fde047" />
        </svg>
      </div>
      <div className="absolute top-[32%] right-[5%] hidden md:block animate-float-delayed pointer-events-none opacity-40">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="#fda4af" />
        </svg>
      </div>

      {/* Cake Centerpiece */}
      <div className="my-4 w-full flex justify-center items-center">
        <BirthdayCake />
      </div>

      {/* Scroll Down Hint */}
      <div className="flex flex-col items-center gap-1 opacity-75 hover:opacity-100 transition-opacity">
        <button
          onClick={onScrollNext}
          className="group flex flex-col items-center text-xs text-slate-400 hover:text-gold-200 tracking-wider transition-colors cursor-pointer"
          aria-label="Scroll down to read personal memory"
        >
          <span className="text-[11px] uppercase tracking-widest text-lavender-300/80 mb-1 flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-gold-300" />
            Scroll for something I remember
          </span>
          <div className="w-7 h-7 rounded-full border border-slate-700/60 group-hover:border-gold-400/50 flex items-center justify-center transition-colors bg-midnight-900/60">
            <ChevronDown className="w-3.5 h-3.5 text-gold-300 animate-bounce" />
          </div>
        </button>
      </div>
    </section>
  );
};
