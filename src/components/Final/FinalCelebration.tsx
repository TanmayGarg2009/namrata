import React from 'react';
import { motion } from 'framer-motion';
import { BIRTHDAY_DATA } from '../../config/birthdayData';
import { fireGrandCelebration } from '../../utils/confetti';
import { soundManager } from '../../utils/audioSynthesizer';
import { Sparkles, PartyPopper } from 'lucide-react';

export const FinalCelebration: React.FC = () => {
  const handleCelebrateAgain = () => {
    soundManager.playSparkle();
    fireGrandCelebration();
  };

  return (
    <section id="final" className="relative py-24 px-4 max-w-4xl mx-auto w-full text-center z-10 select-none">
      {/* Background Soft Glow */}
      <motion.div 
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-[450px] md:h-[450px] rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #facc15 0%, #c084fc 40%, transparent 70%)' }}
      />

      <div className="relative space-y-7 max-w-2xl mx-auto">
        {/* Casual Intro */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-slate-400 text-sm sm:text-base font-light tracking-widest uppercase"
        >
          {BIRTHDAY_DATA.finalSection.pause}
        </motion.p>

        {/* Salutation */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="font-serif text-3xl sm:text-5xl md:text-6xl font-extrabold gold-gradient-text leading-tight"
        >
          {BIRTHDAY_DATA.finalSection.salutation}
        </motion.h2>

        {/* Wishes */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-slate-200 text-base sm:text-xl font-light leading-relaxed"
        >
          {BIRTHDAY_DATA.finalSection.wishes}
        </motion.p>

        {/* Brotherly Closing Joke */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-slate-300 text-sm sm:text-base font-light italic max-w-lg mx-auto leading-relaxed"
        >
          {BIRTHDAY_DATA.finalSection.closingJoke}
        </motion.p>

        {/* Raksha Bandhan Note */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-lavender-300 text-sm sm:text-base font-medium tracking-wide"
        >
          {BIRTHDAY_DATA.finalSection.rakhiNote}
        </motion.p>

        {/* Signature */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="pt-6 flex flex-col items-center justify-center gap-1.5"
        >
          <p className="font-serif text-xl sm:text-2xl font-semibold text-gold-200 tracking-wide">
            {BIRTHDAY_DATA.finalSection.signature}
          </p>
          <p className="text-xs sm:text-sm text-slate-400 font-light italic flex items-center gap-1">
            <span>{BIRTHDAY_DATA.finalSection.humbleNote}</span>
          </p>
        </motion.div>

        {/* Interactive Celebrate Again Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="pt-6"
        >
          <motion.button
            onClick={handleCelebrateAgain}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            className="group relative inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-gold-500/20 via-rose-500/20 to-lavender-500/20 hover:from-gold-500/30 hover:to-rose-500/30 border border-gold-400/40 hover:border-gold-300 text-gold-200 font-medium text-base sm:text-lg transition-all duration-300 shadow-[0_0_25px_rgba(245,208,97,0.2)] hover:shadow-[0_0_35px_rgba(245,208,97,0.35)] cursor-pointer"
            aria-label="Celebrate again with confetti burst"
          >
            <PartyPopper className="w-5 h-5 text-gold-300 group-hover:rotate-12 transition-transform duration-300" />
            <span>Celebrate Again 🎉</span>
            <Sparkles className="w-4 h-4 text-gold-300 animate-spin" style={{ animationDuration: '4s' }} />
          </motion.button>
        </motion.div>
      </div>

      {/* Subtle Footer */}
      <footer className="mt-20 text-xs text-slate-500 font-light tracking-wider">
        <p>Made especially for Namrata's Birthday & Raksha Bandhan 2026 ✨</p>
      </footer>
    </section>
  );
};
