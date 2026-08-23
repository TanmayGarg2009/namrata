import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BIRTHDAY_DATA, type AdmireCard } from '../../config/birthdayData';
import { Sparkles, Compass, Shield, Flame, Star, Target, ChevronDown } from 'lucide-react';
import { soundManager } from '../../utils/audioSynthesizer';

const iconMap = {
  Sparkles,
  Compass,
  Star,
  Flame,
  Shield,
  Target,
};

export const ThingsIAdmire: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (card: AdmireCard) => {
    soundManager.playSparkle();
    setExpandedId((prev) => (prev === card.id ? null : card.id));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: 'easeOut' as const },
    },
  };

  return (
    <section
      id="admire"
      className="relative py-24 px-4 max-w-6xl mx-auto w-full z-10"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-14"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-lavender-500/10 border border-lavender-400/30 text-lavender-300 text-xs font-semibold tracking-widest uppercase mb-3">
          <Star className="w-3.5 h-3.5" />
          <span>Real & Genuine</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold lavender-gradient-text">
          Things I Admire About You ✨
        </h2>
        <p className="mt-3 text-slate-300 text-sm sm:text-base font-light max-w-md mx-auto">
          Six genuine qualities you carry naturally every single day.
        </p>
      </motion.div>

      {/* Animated Card Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
      >
        {BIRTHDAY_DATA.thingsIAdmire.map((card) => {
          const IconComponent = iconMap[card.iconName];
          const isExpanded = expandedId === card.id;

          return (
            <motion.div
              key={card.id}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => toggleExpand(card)}
              className={`group relative rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-midnight-900/90 to-midnight-950/95 border transition-all duration-300 cursor-pointer select-none shadow-xl ${
                isExpanded
                  ? 'border-gold-400/60 shadow-[0_15px_35px_rgba(245,208,97,0.2)]'
                  : 'border-white/10 hover:border-white/20'
              }`}
            >
              {/* Card Ambient Glow */}
              <div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
              />

              {/* Icon Container */}
              <div className="relative mb-5 inline-flex p-3.5 rounded-2xl bg-midnight-850 border border-white/10 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                <IconComponent className={`w-6 h-6 ${card.iconColor}`} />
              </div>

              {/* Title */}
              <h3 className="relative font-serif text-xl sm:text-2xl font-bold text-slate-100 mb-2 group-hover:text-gold-200 transition-colors">
                {card.title}
              </h3>

              {/* Subtitle */}
              <p className="relative text-slate-300 text-sm sm:text-base font-light leading-relaxed mb-4">
                {card.subtitle}
              </p>

              {/* Expandable Brother Note */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="overflow-hidden pt-3 border-t border-white/10"
                  >
                    <p className="text-xs sm:text-sm text-gold-200/90 italic bg-midnight-950/80 p-3 rounded-xl border border-gold-400/20">
                      "{card.detailedNote}"
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Tap to expand hint */}
              <div className="relative mt-2 flex items-center justify-between text-[11px] text-slate-400 group-hover:text-gold-300/80 transition-colors pt-2">
                <span>{isExpanded ? 'Tap to close' : 'Tap to read more'}</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${
                    isExpanded ? 'rotate-180 text-gold-300' : ''
                  }`}
                />
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};
