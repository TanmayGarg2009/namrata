import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BIRTHDAY_DATA } from '../../config/birthdayData';
import { soundManager } from '../../utils/audioSynthesizer';
import { fireLightweightConfetti } from '../../utils/confetti';
import { Mail, Sparkles, Eye, Check } from 'lucide-react';

export const SurpriseEnvelope: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => {
    if (!isOpen) {
      soundManager.playSparkle();
      soundManager.playChime(783.99);
      fireLightweightConfetti({ particleCount: 35, origin: { x: 0.5, y: 0.6 } });
    }
    setIsOpen(!isOpen);
  };

  return (
    <section id="surprise" className="relative py-20 px-4 max-w-3xl mx-auto w-full text-center z-10 select-none">
      {/* Section Teaser */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="mb-8"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-400/30 text-gold-300 text-xs font-semibold tracking-widest uppercase mb-2">
          <Eye className="w-3.5 h-3.5" />
          <span>{BIRTHDAY_DATA.secretSurprise.badge}</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold gold-gradient-text">
          {BIRTHDAY_DATA.secretSurprise.teaser}
        </h2>
        <p className="mt-2 text-slate-300 text-sm sm:text-base font-light">
          A quick note just for you.
        </p>
      </motion.div>

      {/* Envelope / Letter Interactive Canvas */}
      <div className="relative flex flex-col items-center justify-center">
        {/* Glow behind the envelope */}
        <motion.div
          animate={{
            scale: isOpen ? [1, 1.25, 1.15] : 1,
            opacity: isOpen ? 0.35 : 0.2,
          }}
          transition={{ duration: 0.8 }}
          className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gold-500/25 blur-3xl pointer-events-none"
        />

        {/* The Envelope Component */}
        <motion.div
          layout
          onClick={handleOpen}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`group relative w-72 sm:w-88 md:w-96 rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-midnight-850 to-midnight-950 border transition-all duration-500 cursor-pointer shadow-2xl ${
            isOpen
              ? 'border-gold-400/50 shadow-[0_15px_40px_rgba(245,208,97,0.25)]'
              : 'border-gold-400/40 hover:border-gold-300 shadow-[0_12px_35px_rgba(245,208,97,0.2)]'
          }`}
        >
          {/* Wax Seal / Monogram Stamp */}
          <motion.div
            layout
            className="flex justify-center mb-4"
          >
            <motion.div
              animate={isOpen ? { scale: [1, 1.2, 1], rotate: [0, 10, 0] } : {}}
              transition={{ duration: 0.5 }}
              className="w-14 h-14 rounded-full flex items-center justify-center border bg-gradient-to-br from-gold-400 to-amber-600 border-gold-200 shadow-[0_0_15px_#fde047]"
            >
              {isOpen ? (
                <Check className="w-6 h-6 text-midnight-950 font-bold" />
              ) : (
                <span className="font-serif font-bold text-xl text-midnight-950">N</span>
              )}
            </motion.div>
          </motion.div>

          {/* Letter Inner State */}
          <AnimatePresence mode="wait">
            {!isOpen ? (
              <motion.div
                key="closed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-3.5"
              >
                <div className="flex items-center justify-center gap-2 text-gold-300 text-sm font-medium">
                  <Mail className="w-4 h-4" />
                  <span>Tap to break the wax seal</span>
                </div>
                <button
                  type="button"
                  className="px-6 py-2.5 rounded-full bg-gold-400/10 hover:bg-gold-400/20 border border-gold-400/40 text-gold-200 text-xs sm:text-sm font-medium tracking-wider transition-all duration-200"
                >
                  {BIRTHDAY_DATA.secretSurprise.buttonText}
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="space-y-4"
              >
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/20 text-gold-300 text-[11px] font-semibold tracking-wider uppercase">
                  <Sparkles className="w-3 h-3" />
                  <span>{BIRTHDAY_DATA.secretSurprise.openedBadge}</span>
                </div>

                <div className="space-y-3.5 text-center">
                  <p className="font-serif text-xl sm:text-2xl font-bold text-white leading-relaxed">
                    "{BIRTHDAY_DATA.secretSurprise.mainMessage}"
                  </p>

                  <div className="h-[1px] w-20 bg-gold-400/40 mx-auto" />

                  <p className="text-slate-300 text-sm sm:text-base font-light">
                    {BIRTHDAY_DATA.secretSurprise.secondaryMessage}
                  </p>
                </div>

                <button
                  type="button"
                  className="mt-3 text-xs text-slate-400 hover:text-slate-200 tracking-wider underline cursor-pointer"
                >
                  Close Note
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
