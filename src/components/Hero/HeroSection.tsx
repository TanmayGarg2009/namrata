import React from 'react';
import { motion } from 'framer-motion';
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
      className="relative min-h-[95vh] flex flex-col items-center justify-between pt-8 pb-6 px-4 text-center max-w-5xl mx-auto w-full z-10 select-none"
    >
      {/* Top Prominent Date & Badge Block */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' as const }}
        className="flex flex-col items-center"
      >
        {/* Date Plaque: 28 AUGUST */}
        <div className="flex flex-col items-center mb-3">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-gradient-to-r from-gold-500/20 via-rose-500/20 to-lavender-500/20 border border-gold-400/50 shadow-[0_0_25px_rgba(245,208,97,0.25)]"
          >
            <Calendar className="w-4 h-4 text-gold-300 animate-pulse" />
            <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-gold-200 uppercase">
              {BIRTHDAY_DATA.birthdayDate}
            </span>
          </motion.div>

          <div className="mt-2 text-[11px] sm:text-xs font-semibold tracking-[0.3em] text-lavender-300/90 uppercase">
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
      </motion.div>

      {/* Floating Decorative SVG Stars */}
      <motion.div
        animate={{ y: [-10, 10, -10], rotate: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[18%] left-[4%] hidden md:block pointer-events-none opacity-40"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="#fde047" />
        </svg>
      </motion.div>

      <motion.div
        animate={{ y: [10, -10, 10], rotate: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute top-[32%] right-[5%] hidden md:block pointer-events-none opacity-40"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="#fda4af" />
        </svg>
      </motion.div>

      {/* Cake Centerpiece */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.9, type: 'spring', stiffness: 150 }}
        className="my-4 w-full flex justify-center items-center"
      >
        <BirthdayCake />
      </motion.div>

      {/* Scroll Down Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.85 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="flex flex-col items-center gap-1 opacity-75 hover:opacity-100 transition-opacity"
      >
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
      </motion.div>
    </section>
  );
};
