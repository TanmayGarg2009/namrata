import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BIRTHDAY_DATA } from '../../config/birthdayData';
import { soundManager } from '../../utils/audioSynthesizer';
import { fireLightweightConfetti } from '../../utils/confetti';
import { Sparkles, Wand2, Star } from 'lucide-react';

export const MakeAWish: React.FC = () => {
  const [hasWished, setHasWished] = useState<boolean>(false);
  const [isWarping, setIsWarping] = useState<boolean>(false);

  const handleMakeWish = () => {
    soundManager.playChime(659.25);
    soundManager.playSparkle();
    setIsWarping(true);
    setHasWished(true);
    fireLightweightConfetti({ particleCount: 35, origin: { x: 0.5, y: 0.45 } });

    setTimeout(() => {
      setIsWarping(false);
    }, 1500);
  };

  return (
    <section id="wish" className="relative py-20 px-4 max-w-4xl mx-auto w-full text-center z-10 select-none">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="mb-8"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gold-500/10 border border-gold-400/30 text-gold-300 text-xs font-semibold tracking-widest uppercase mb-2">
          <Wand2 className="w-3.5 h-3.5" />
          <span>{BIRTHDAY_DATA.makeAWish.title}</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold gold-gradient-text">
          {BIRTHDAY_DATA.makeAWish.subtitle}
        </h2>
        <p className="mt-2 text-slate-300 text-sm sm:text-base max-w-md mx-auto font-light">
          {BIRTHDAY_DATA.makeAWish.prompt}
        </p>
      </motion.div>

      {/* Center Interactive Wish Altar */}
      <div className="relative flex flex-col items-center justify-center my-4">
        {/* Radiant Aurora Ring when wished */}
        <motion.div
          animate={{
            scale: hasWished ? [1, 1.25, 1.15] : 1,
            opacity: hasWished ? [0.2, 0.45, 0.35] : 0.2,
          }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="absolute rounded-full w-64 h-64 sm:w-88 sm:h-88 bg-gradient-to-r from-gold-400/40 via-rose-400/30 to-lavender-400/40 blur-3xl pointer-events-none"
        />

        {/* Upward rising stardust particles when wished */}
        {isWarping && (
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            <span className="absolute animate-[ping_1s_ease-out] text-gold-200 text-lg -top-12 left-1/3">✨</span>
            <span className="absolute animate-[ping_1.2s_ease-out] text-rose-300 text-sm -top-16 right-1/3">⭐</span>
            <span className="absolute animate-[ping_0.8s_ease-out] text-lavender-300 text-base -top-8 right-1/4">✨</span>
            <span className="absolute animate-[ping_1.4s_ease-out] text-gold-300 text-xs -top-20 left-1/4">💫</span>
          </div>
        )}

        {/* Large Grand Golden Wish Candle */}
        <motion.button
          type="button"
          onClick={handleMakeWish}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative flex flex-col items-center justify-center p-6 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 rounded-3xl"
          aria-label="Tap candle to make a birthday wish"
        >
          {/* Flame */}
          <div className="relative mb-2">
            <div
              className={`transition-all duration-500 ${
                hasWished
                  ? 'scale-150 drop-shadow-[0_0_25px_rgba(253,224,71,1)]'
                  : 'scale-100 group-hover:scale-125 drop-shadow-[0_0_12px_rgba(245,208,97,0.8)]'
              }`}
            >
              <svg width="44" height="60" viewBox="0 0 44 60" className="animate-flame-flicker origin-bottom">
                <defs>
                  <linearGradient id="grandFlame" x1="0%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" stop-color="#ea580c" />
                    <stop offset="25%" stop-color="#f97316" />
                    <stop offset="65%" stop-color="#facc15" />
                    <stop offset="100%" stop-color="#ffffff" />
                  </linearGradient>
                </defs>
                <circle cx="22" cy="35" r="16" fill="#fde047" opacity="0.35" />
                <path
                  d="M 22 4 Q 34 26 22 56 Q 10 26 22 4 Z"
                  fill="url(#grandFlame)"
                />
              </svg>
            </div>
            {/* Candle Wick */}
            <div className="w-1 h-3 bg-slate-400 mx-auto -mt-1 rounded-t" />
          </div>

          {/* Candle Pillar Body */}
          <div className="w-16 h-28 sm:w-20 sm:h-36 rounded-2xl bg-gradient-to-b from-amber-100 via-gold-200 to-amber-300 border border-gold-300/60 shadow-[0_8px_20px_rgba(0,0,0,0.5)] flex flex-col items-center justify-between p-2 relative overflow-hidden">
            {/* Golden Ribbon accent */}
            <div className="w-full h-3 bg-gradient-to-r from-amber-400 to-gold-500 rounded-sm opacity-80" />
            <div className="w-6 h-6 rounded-full bg-white/40 border border-gold-400 flex items-center justify-center">
              <Star className="w-3.5 h-3.5 text-amber-700 fill-amber-700" />
            </div>
            <div className="w-full h-3 bg-gradient-to-r from-amber-400 to-gold-500 rounded-sm opacity-80" />
          </div>

          {/* Candle Base Plate */}
          <div className="w-28 sm:w-36 h-4 -mt-2 rounded-full bg-gradient-to-r from-slate-700 via-gold-600/70 to-slate-700 shadow-lg border border-gold-400/40" />

          {/* Prompt Label */}
          <span className="mt-4 inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-gold-300/90 group-hover:text-gold-200 bg-midnight-900/80 px-4 py-1.5 rounded-full border border-gold-400/30 transition-colors">
            <Sparkles className="w-3.5 h-3.5" />
            {hasWished ? 'Wish Made ✨ (Tap again)' : 'Tap to Make a Wish ✨'}
          </span>
        </motion.button>
      </div>

      {/* Revelation Card upon wishing */}
      <AnimatePresence>
        {hasWished && (
          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 200, damping: 20 }}
            className="max-w-xl mx-auto mt-4 rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-midnight-900/95 to-midnight-950/95 border border-gold-400/30 shadow-[0_10px_35px_rgba(245,208,97,0.15)]"
          >
            <div className="space-y-3 text-center">
              <p className="font-serif text-xl sm:text-2xl text-gold-200 font-bold leading-relaxed">
                "{BIRTHDAY_DATA.makeAWish.wishedText1}"
              </p>
              <div className="h-[1px] w-16 bg-gold-400/40 mx-auto" />
              <p className="text-slate-300 text-sm sm:text-base font-light italic">
                "{BIRTHDAY_DATA.makeAWish.wishedText2}"
              </p>
              <p className="text-xs sm:text-sm text-gold-300/80 font-light pt-1">
                {BIRTHDAY_DATA.makeAWish.brotherlyNote}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
