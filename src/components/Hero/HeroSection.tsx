import React from 'react';
import { BIRTHDAY_DATA } from '../../config/birthdayData';
import { BirthdayCake } from '../Cake/BirthdayCake';
import { Sparkles, ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  onScrollNext?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onScrollNext }) => {
  return (
    <section 
      id="hero" 
      className="relative min-h-[92vh] flex flex-col items-center justify-between pt-12 pb-8 px-4 text-center max-w-5xl mx-auto w-full z-10"
    >
      {/* Top Badge: TODAY IS THE DAY */}
      <div className="flex flex-col items-center animate-[fadeIn_1s_ease-out]">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-gold-500/15 via-rose-500/15 to-lavender-500/15 border border-gold-400/30 shadow-[0_0_15px_rgba(245,208,97,0.2)]">
          <Sparkles className="w-3.5 h-3.5 text-gold-300 animate-spin" style={{ animationDuration: '6s' }} />
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-gold-200 uppercase">
            {BIRTHDAY_DATA.todayBadge}
          </span>
          <Sparkles className="w-3.5 h-3.5 text-gold-300 animate-spin" style={{ animationDuration: '6s' }} />
        </div>

        {/* Main Heading */}
        <h1 className="mt-6 font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight gold-gradient-text leading-[1.15] max-w-3xl">
          Happy Birthday, {BIRTHDAY_DATA.recipientName}!
        </h1>

        {/* Subtitle */}
        <p className="mt-3 text-base sm:text-lg md:text-xl text-slate-300 font-light max-w-xl mx-auto tracking-wide">
          {BIRTHDAY_DATA.heroSubtitle}
        </p>
      </div>

      {/* Floating Decorative SVG Elements (Strictly lightweight CSS decorations) */}
      <div className="absolute top-[20%] left-[5%] hidden md:block animate-float-slow pointer-events-none opacity-40">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="#fde047" />
        </svg>
      </div>
      <div className="absolute top-[35%] right-[6%] hidden md:block animate-float-delayed pointer-events-none opacity-40">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#fda4af" />
        </svg>
      </div>

      {/* Cake Centerpiece */}
      <div className="my-6 w-full flex justify-center items-center">
        <BirthdayCake />
      </div>

      {/* Scroll Down Hint */}
      <div className="flex flex-col items-center gap-1.5 opacity-70 hover:opacity-100 transition-opacity">
        <button
          onClick={onScrollNext}
          className="group flex flex-col items-center text-xs text-slate-400 hover:text-gold-200 tracking-wider transition-colors cursor-pointer"
          aria-label="Scroll to read birthday message"
        >
          <span className="text-[11px] uppercase tracking-widest text-lavender-300/80 mb-1">
            Scroll for your surprise
          </span>
          <div className="w-8 h-8 rounded-full border border-slate-700/60 group-hover:border-gold-400/50 flex items-center justify-center transition-colors bg-midnight-900/60">
            <ChevronDown className="w-4 h-4 text-gold-300 animate-bounce" />
          </div>
        </button>
      </div>
    </section>
  );
};
