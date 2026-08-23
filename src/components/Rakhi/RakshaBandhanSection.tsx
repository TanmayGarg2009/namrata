import React from 'react';
import { motion } from 'framer-motion';
import { BIRTHDAY_DATA } from '../../config/birthdayData';
import { HeartHandshake } from 'lucide-react';

export const RakshaBandhanSection: React.FC = () => {
  return (
    <section
      id="rakhi"
      className="relative py-24 px-4 max-w-3xl mx-auto w-full z-10 select-none"
    >
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.9, ease: 'easeOut' as const }}
        className="relative rounded-3xl p-6 sm:p-10 md:p-12 bg-gradient-to-b from-midnight-900/95 via-midnight-900/80 to-midnight-950/95 border border-gold-400/35 shadow-[0_15px_45px_rgba(0,0,0,0.6)] backdrop-blur-md"
      >
        {/* Soft Background Accents */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-gold-500/10 rounded-full blur-2xl pointer-events-none" />

        {/* Section Header */}
        <div className="text-center mb-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/15 border border-gold-400/40 text-gold-200 text-xs font-semibold tracking-widest uppercase mb-3"
          >
            <HeartHandshake className="w-3.5 h-3.5 text-gold-300" />
            <span>{BIRTHDAY_DATA.rakshaBandhan.teaserBadge}</span>
          </motion.div>

          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-100">
            {BIRTHDAY_DATA.rakshaBandhan.title}
          </h2>

          <p className="mt-2 font-serif text-xl sm:text-2xl font-semibold gold-gradient-text">
            {BIRTHDAY_DATA.rakshaBandhan.subtitle}
          </p>
        </div>

        {/* Minimal Artisanal Animated SVG Rakhi */}
        <div className="my-8 flex items-center justify-center">
          <div className="relative flex items-center justify-center w-full max-w-md">
            {/* Left Silk Thread */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
              className="h-[2.5px] flex-1 bg-gradient-to-r from-transparent via-rose-400 to-gold-400 origin-right"
            />

            {/* Central Rakhi Medallion */}
            <motion.div
              initial={{ scale: 0, rotate: -45 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: 'spring', stiffness: 180, damping: 14 }}
              whileHover={{ scale: 1.12, rotate: 15 }}
              className="relative mx-4 group cursor-pointer"
            >
              <svg width="72" height="72" viewBox="0 0 100 100" className="drop-shadow-[0_0_15px_rgba(245,208,97,0.6)]">
                <defs>
                  <radialGradient id="rakhiGold" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stop-color="#fffbeb" />
                    <stop offset="50%" stop-color="#fde047" />
                    <stop offset="100%" stop-color="#ca8a04" />
                  </radialGradient>
                  <radialGradient id="rakhiRuby" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stop-color="#fecdd3" />
                    <stop offset="50%" stop-color="#f43f5e" />
                    <stop offset="100%" stop-color="#9f1239" />
                  </radialGradient>
                </defs>

                {/* Outer Rotating Petals / Sunburst */}
                <circle cx="50" cy="50" r="42" fill="none" stroke="#fde047" stroke-width="1.5" stroke-dasharray="4 3" opacity="0.85" />
                <circle cx="50" cy="50" r="36" fill="url(#rakhiGold)" />
                <circle cx="50" cy="50" r="28" fill="#1e1338" />
                <circle cx="50" cy="50" r="20" fill="url(#rakhiRuby)" stroke="#fde047" stroke-width="1.5" />
                <circle cx="50" cy="50" r="6" fill="#ffffff" />

                {/* Micro Petals */}
                <g fill="#fde047">
                  <circle cx="50" cy="18" r="2.5" />
                  <circle cx="82" cy="50" r="2.5" />
                  <circle cx="50" cy="82" r="2.5" />
                  <circle cx="18" cy="50" r="2.5" />
                  <circle cx="73" cy="27" r="2" />
                  <circle cx="73" cy="73" r="2" />
                  <circle cx="27" cy="73" r="2" />
                  <circle cx="27" cy="27" r="2" />
                </g>
              </svg>
            </motion.div>

            {/* Right Silk Thread */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
              className="h-[2.5px] flex-1 bg-gradient-to-l from-transparent via-rose-400 to-gold-400 origin-left"
            />
          </div>
        </div>

        {/* Raksha Bandhan Message */}
        <div className="space-y-4 text-center text-slate-200 font-sans text-base sm:text-lg font-light leading-relaxed">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="font-serif text-xl sm:text-2xl font-semibold text-gold-200"
          >
            {BIRTHDAY_DATA.rakshaBandhan.salutation}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="text-slate-300"
          >
            {BIRTHDAY_DATA.rakshaBandhan.siblingJoke}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="pt-3 text-slate-200 italic font-serif text-base sm:text-lg bg-midnight-950/60 p-4 rounded-2xl border border-gold-400/20"
          >
            "{BIRTHDAY_DATA.rakshaBandhan.brotherlyBlessing}"
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
