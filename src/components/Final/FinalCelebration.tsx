import React from 'react';
import { BIRTHDAY_DATA } from '../../config/birthdayData';
import { fireGrandCelebration } from '../../utils/confetti';
import { soundManager } from '../../utils/audioSynthesizer';
import { Heart, Sparkles, PartyPopper } from 'lucide-react';

export const FinalCelebration: React.FC = () => {
  const handleCelebrateAgain = () => {
    soundManager.playSparkle();
    fireGrandCelebration();
  };

  return (
    <section id="final" className="relative py-28 px-4 max-w-4xl mx-auto w-full text-center z-10">
      {/* Background Soft Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-[480px] md:h-[480px] rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #fda4af 0%, #facc15 40%, transparent 70%)' }}
      />

      <div className="relative space-y-8 max-w-2xl mx-auto">
        {/* Intro Tag */}
        <p className="text-lavender-300 text-sm sm:text-base font-medium tracking-widest uppercase">
          {BIRTHDAY_DATA.finalCelebration.intro}
        </p>

        {/* Main Salutation */}
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold rose-gradient-text leading-tight">
          Happy Birthday, {BIRTHDAY_DATA.recipientName}
        </h2>

        {/* Poetic Blessing */}
        <p className="text-slate-300 text-base sm:text-xl font-light leading-relaxed max-w-xl mx-auto">
          {BIRTHDAY_DATA.finalCelebration.blessing}
        </p>

        {/* Highlight Banner */}
        <div className="pt-2">
          <p className="font-serif text-2xl sm:text-3xl font-bold gold-gradient-text flex items-center justify-center gap-2">
            <span>Have the BEST birthday ever!</span>
            <Sparkles className="w-6 h-6 text-gold-300 inline" />
          </p>
        </div>

        {/* Signature */}
        <div className="pt-4 flex items-center justify-center gap-2 text-rose-400 font-serif text-xl sm:text-2xl font-medium">
          <Heart className="w-5 h-5 fill-rose-400 text-rose-400 animate-pulse" />
          <span>{BIRTHDAY_DATA.finalCelebration.signature}</span>
        </div>

        {/* Interactive Celebrate Again Button */}
        <div className="pt-8">
          <button
            onClick={handleCelebrateAgain}
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-gold-500/20 via-rose-500/20 to-lavender-500/20 hover:from-gold-500/30 hover:to-rose-500/30 border border-gold-400/40 hover:border-gold-300 text-gold-200 font-medium text-base sm:text-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_25px_rgba(245,208,97,0.25)] hover:shadow-[0_0_35px_rgba(245,208,97,0.4)] cursor-pointer"
            aria-label="Celebrate again with confetti burst"
          >
            <PartyPopper className="w-5 h-5 text-gold-300 group-hover:rotate-12 transition-transform duration-300" />
            <span>{BIRTHDAY_DATA.finalCelebration.retriggerButton}</span>
            <Sparkles className="w-4 h-4 text-rose-300 animate-spin" style={{ animationDuration: '4s' }} />
          </button>
        </div>
      </div>

      {/* Subtle Footer Note */}
      <footer className="mt-24 text-xs text-slate-500 font-light tracking-wider">
        <p>Crafted with endless admiration & love for Namrata's special day ✨</p>
      </footer>
    </section>
  );
};
