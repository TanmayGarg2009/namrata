import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BIRTHDAY_DATA } from '../../config/birthdayData';
import { fireLightweightConfetti } from '../../utils/confetti';
import { soundManager } from '../../utils/audioSynthesizer';
import { Sparkles, Calendar, ArrowRight } from 'lucide-react';

interface BirthdayIntroProps {
  onEnter: () => void;
}

export const BirthdayIntro: React.FC<BirthdayIntroProps> = ({ onEnter }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [isExiting, setIsExiting] = useState<boolean>(false);

  const slides = BIRTHDAY_DATA.introSequence;
  const currentSlide = slides[currentSlideIndex];
  const isLastSlide = currentSlideIndex === slides.length - 1;

  useEffect(() => {
    if (isLastSlide || currentSlide.duration === 0) return;

    const timer = setTimeout(() => {
      setCurrentSlideIndex((prev) => Math.min(prev + 1, slides.length - 1));
    }, currentSlide.duration);

    return () => clearTimeout(timer);
  }, [currentSlideIndex, isLastSlide, currentSlide.duration, slides.length]);

  const handleNext = () => {
    if (isLastSlide) {
      handleEnter();
    } else {
      soundManager.playSparkle();
      setCurrentSlideIndex((prev) => prev + 1);
    }
  };

  const handleEnter = () => {
    soundManager.playSparkle();
    fireLightweightConfetti({ particleCount: 35, origin: { x: 0.5, y: 0.55 } });
    setIsExiting(true);
    setTimeout(() => {
      onEnter();
    }, 750);
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isExiting ? 0 : 1, scale: isExiting ? 1.05 : 1 }}
      transition={{ duration: 0.75, ease: 'easeInOut' }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-between py-12 px-4 bg-midnight-950 text-slate-100 overflow-hidden select-none"
    >
      {/* Dynamic Background Starlight Aura */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.25, 0.4, 0.25],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 sm:w-[500px] sm:h-[500px] rounded-full blur-[100px] pointer-events-none"
        style={{
          background:
            currentSlideIndex === 1
              ? 'radial-gradient(circle, #f59e0b 0%, #7c3aed 50%, transparent 70%)'
              : currentSlideIndex === 2
              ? 'radial-gradient(circle, #fde047 0%, #ec4899 50%, transparent 70%)'
              : 'radial-gradient(circle, #c084fc 0%, #3b82f6 50%, transparent 70%)',
        }}
      />

      {/* Top Brand Monogram */}
      <div className="relative z-10 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-10 h-10 rounded-full bg-midnight-900 border border-gold-400/30 flex items-center justify-center shadow-[0_0_15px_rgba(245,208,97,0.2)]"
        >
          <span className="font-serif font-bold text-gold-300 text-base">N</span>
        </motion.div>
      </div>

      {/* Center Cinematic Slide Container */}
      <div className="relative z-10 max-w-xl mx-auto w-full text-center min-h-[260px] flex flex-col items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide.id}
            initial={{ opacity: 0, y: 24, filter: 'blur(8px)', scale: 0.96 }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
            exit={{ opacity: 0, y: -20, filter: 'blur(6px)', scale: 1.02 }}
            transition={{ duration: 0.85, ease: 'easeOut' as const }}
            className="space-y-4 px-2"
          >
            {/* Optional Top Badge for Date slide */}
            {currentSlide.badge && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/15 border border-gold-400/40 text-gold-200 text-xs font-semibold tracking-[0.2em] shadow-sm mb-1"
              >
                <Calendar className="w-3.5 h-3.5 text-gold-300" />
                <span>{currentSlide.badge}</span>
              </motion.div>
            )}

            {/* Main Title Phrase */}
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-extrabold gold-gradient-text tracking-tight leading-[1.15]">
              {currentSlide.text}
            </h2>

            {/* Subtitle / Description */}
            <p className="text-slate-300 text-sm sm:text-base md:text-lg font-light tracking-wide max-w-md mx-auto leading-relaxed">
              {currentSlide.subtitle}
            </p>

            {/* Final Slide Button */}
            {isLastSlide && (
              <motion.div
                initial={{ opacity: 0, y: 15, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="pt-6"
              >
                <button
                  onClick={handleEnter}
                  className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-gold-500/25 via-rose-500/20 to-lavender-500/25 hover:from-gold-500/35 hover:to-lavender-500/35 border border-gold-300/60 hover:border-gold-300 text-gold-100 font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] shadow-[0_0_30px_rgba(245,208,97,0.3)] hover:shadow-[0_0_40px_rgba(245,208,97,0.5)] cursor-pointer"
                  aria-label="Enter your birthday celebration"
                >
                  <Sparkles className="w-5 h-5 text-gold-300 group-hover:rotate-12 transition-transform duration-300" />
                  <span>{currentSlide.buttonText}</span>
                </button>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Controls & Progress Dots */}
      <div className="relative z-10 flex flex-col items-center gap-4 w-full max-w-xs">
        {/* Progress Step Indicators */}
        <div className="flex items-center gap-2" aria-label="Intro progress">
          {slides.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => setCurrentSlideIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                idx === currentSlideIndex
                  ? 'w-8 bg-gold-300 shadow-[0_0_8px_#fde047]'
                  : idx < currentSlideIndex
                  ? 'w-3 bg-gold-500/50'
                  : 'w-2 bg-slate-700'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Manual Next / Skip Navigation */}
        {!isLastSlide && (
          <div className="flex items-center justify-between w-full text-xs text-slate-400 px-4">
            <button
              onClick={handleEnter}
              className="hover:text-slate-200 tracking-wider transition-colors cursor-pointer py-1"
            >
              Skip Intro
            </button>
            <button
              onClick={handleNext}
              className="inline-flex items-center gap-1 text-gold-300 hover:text-gold-200 font-medium tracking-wider transition-colors cursor-pointer py-1"
            >
              <span>Next</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
};
