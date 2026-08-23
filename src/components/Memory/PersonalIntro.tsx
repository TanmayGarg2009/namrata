import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BIRTHDAY_DATA } from '../../config/birthdayData';
import { soundManager } from '../../utils/audioSynthesizer';
import { fireLightweightConfetti } from '../../utils/confetti';
import { Sparkles, MessageCircleQuestion } from 'lucide-react';

export const PersonalIntro: React.FC = () => {
  const [snakeTapped, setSnakeTapped] = useState<boolean>(false);

  const handleSnakeTap = () => {
    soundManager.playSparkle();
    fireLightweightConfetti({ particleCount: 20, origin: { x: 0.5, y: 0.4 } });
    setSnakeTapped(true);
    setTimeout(() => setSnakeTapped(false), 2000);
  };

  return (
    <section
      id="memory"
      className="relative py-24 px-4 max-w-3xl mx-auto w-full z-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.9, ease: 'easeOut' as const }}
        className="relative rounded-3xl p-6 sm:p-10 md:p-12 bg-gradient-to-b from-midnight-900/95 via-midnight-900/75 to-midnight-950/95 border border-white/10 shadow-[0_15px_45px_rgba(0,0,0,0.6)] backdrop-blur-md"
      >
        {/* Soft Ambient Corner Glows */}
        <div className="absolute top-0 right-0 w-36 h-36 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-36 h-36 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

        {/* Section Header */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-400/30 text-gold-300 text-xs font-semibold tracking-widest uppercase mb-3"
          >
            <MessageCircleQuestion className="w-3.5 h-3.5 text-gold-400" />
            <span>{BIRTHDAY_DATA.personalMemory.badge}</span>
          </motion.div>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold gold-gradient-text">
            {BIRTHDAY_DATA.personalMemory.sectionTitle}
          </h2>

          <div className="mt-3 flex items-center justify-center gap-3">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-gold-400/60" />
            <Sparkles className="w-4 h-4 text-gold-300" />
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-gold-400/60" />
          </div>
        </div>

        {/* Memory Storytelling Content */}
        <div className="space-y-6 text-center text-slate-200 font-sans text-base sm:text-lg md:text-xl font-light leading-relaxed">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-slate-300"
          >
            {BIRTHDAY_DATA.personalMemory.jokeSetup}
          </motion.p>

          {/* Ichchadhari Naagin Interactive Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, type: 'spring', stiffness: 200, damping: 15 }}
            className="py-1"
          >
            <motion.button
              type="button"
              onClick={handleSnakeTap}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              animate={snakeTapped ? { rotate: [-5, 5, -5, 5, 0] } : {}}
              transition={{ duration: 0.4 }}
              className="inline-block font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold text-emerald-300 bg-emerald-950/70 hover:bg-emerald-900/80 px-6 py-2.5 rounded-2xl border border-emerald-400/50 shadow-[0_0_30px_rgba(52,211,153,0.3)] tracking-wide cursor-pointer transition-colors"
              title="Click for a surprise!"
            >
              {BIRTHDAY_DATA.personalMemory.jokeHighlight}
            </motion.button>
            <p className="mt-1.5 text-[11px] text-emerald-400/70 italic font-sans">
              (Tap the snake for instant proof)
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-slate-400 italic text-sm sm:text-base"
          >
            "{BIRTHDAY_DATA.personalMemory.jokeReaction}"
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.85, duration: 0.7 }}
            className="text-slate-300"
          >
            {BIRTHDAY_DATA.personalMemory.jokeAdmit}
          </motion.p>

          {/* Genuine Sibling Transition */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="pt-6 border-t border-white/10 text-gold-200 font-medium text-base sm:text-lg md:text-xl leading-relaxed"
          >
            <p>{BIRTHDAY_DATA.personalMemory.transition}</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
