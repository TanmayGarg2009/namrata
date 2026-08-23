import React, { useEffect, useRef, useState } from 'react';
import { BIRTHDAY_DATA, type AdmireCard } from '../../config/birthdayData';
import { Sparkles, Compass, Shield, Flame, Star, Target } from 'lucide-react';
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
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleCardClick = (_card: AdmireCard) => {
    soundManager.playSparkle();
  };

  return (
    <section
      ref={containerRef}
      id="admire"
      className="relative py-20 px-4 max-w-6xl mx-auto w-full z-10"
    >
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-lavender-500/10 border border-lavender-400/30 text-lavender-300 text-xs font-semibold tracking-widest uppercase mb-3">
          <Star className="w-3.5 h-3.5" />
          <span>Real & Genuine</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold lavender-gradient-text">
          Things I Admire About You ✨
        </h2>
        <p className="mt-3 text-slate-300 text-sm sm:text-base font-light max-w-md mx-auto">
          A few qualities you have that speak for themselves.
        </p>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {BIRTHDAY_DATA.thingsIAdmire.map((card, idx) => {
          const IconComponent = iconMap[card.iconName];
          return (
            <div
              key={card.id}
              onClick={() => handleCardClick(card)}
              className={`group relative rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-midnight-900/80 to-midnight-950/90 border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(0,0,0,0.5)] cursor-pointer select-none ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: `${idx * 100}ms`,
              }}
            >
              {/* Subtle Card Ambient Glow */}
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
              <p className="relative text-slate-300 text-sm sm:text-base font-light leading-relaxed">
                {card.subtitle}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
