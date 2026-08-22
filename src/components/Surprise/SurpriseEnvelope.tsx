import React, { useState } from 'react';
import { BIRTHDAY_DATA } from '../../config/birthdayData';
import { soundManager } from '../../utils/audioSynthesizer';
import { fireLightweightConfetti } from '../../utils/confetti';
import { Mail, Sparkles, Heart, Eye } from 'lucide-react';

export const SurpriseEnvelope: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    if (!isOpen) {
      soundManager.playSparkle();
      soundManager.playChime(783.99);
      fireLightweightConfetti({ particleCount: 35, origin: { x: 0.5, y: 0.6 } });
    }
    setIsOpen(!isOpen);
  };

  return (
    <section id="surprise" className="relative py-24 px-4 max-w-3xl mx-auto w-full text-center z-10">
      {/* Section Teaser */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-500/10 border border-rose-400/30 text-rose-300 text-xs font-semibold tracking-widest uppercase mb-3">
          <Eye className="w-3.5 h-3.5" />
          <span>{BIRTHDAY_DATA.secretSurprise.badge}</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold rose-gradient-text">
          {BIRTHDAY_DATA.secretSurprise.teaser}
        </h2>
        <p className="mt-2 text-slate-300 text-sm sm:text-base font-light">
          A confidential message waiting just for you.
        </p>
      </div>

      {/* Envelope / Letter Interactive Canvas */}
      <div className="relative flex flex-col items-center justify-center">
        {/* Glow behind the envelope */}
        <div
          className={`absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full transition-all duration-700 pointer-events-none blur-3xl ${
            isOpen ? 'bg-rose-500/25 scale-125' : 'bg-gold-500/20 scale-100'
          }`}
        />

        {/* The Envelope Component */}
        <div
          onClick={handleOpen}
          className={`group relative w-72 sm:w-88 md:w-96 rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-midnight-850 to-midnight-950 border transition-all duration-500 cursor-pointer shadow-2xl ${
            isOpen
              ? 'border-rose-400/50 shadow-[0_15px_40px_rgba(251,113,133,0.25)]'
              : 'border-gold-400/40 hover:border-gold-300 shadow-[0_12px_35px_rgba(245,208,97,0.2)] hover:scale-[1.02]'
          }`}
        >
          {/* Wax Seal / Monogram Stamp */}
          <div className="flex justify-center mb-4">
            <div
              className={`w-14 h-14 rounded-full flex items-center justify-center border transition-all duration-500 ${
                isOpen
                  ? 'bg-gradient-to-br from-rose-500 to-rose-700 border-rose-300 shadow-[0_0_15px_#fda4af]'
                  : 'bg-gradient-to-br from-gold-400 to-amber-600 border-gold-200 shadow-[0_0_15px_#fde047]'
              }`}
            >
              {isOpen ? (
                <Heart className="w-6 h-6 text-white fill-white animate-pulse" />
              ) : (
                <span className="font-serif font-bold text-xl text-midnight-950">N</span>
              )}
            </div>
          </div>

          {/* Letter Inner State */}
          {!isOpen ? (
            <div className="space-y-4">
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
            </div>
          ) : (
            <div className="space-y-5 animate-[fadeIn_0.6s_ease-out]">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-[11px] font-semibold tracking-wider uppercase">
                <Sparkles className="w-3 h-3" />
                <span>{BIRTHDAY_DATA.secretSurprise.openedBadge}</span>
              </div>

              <div className="space-y-4 text-center">
                <p className="font-serif text-xl sm:text-2xl font-bold text-white leading-relaxed">
                  {BIRTHDAY_DATA.secretSurprise.mainMessage.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </p>

                <div className="h-[1px] w-20 bg-rose-400/40 mx-auto" />

                <p className="text-rose-200 text-sm sm:text-base font-light italic">
                  "{BIRTHDAY_DATA.secretSurprise.secondaryMessage}"
                </p>
              </div>

              <button
                type="button"
                className="mt-4 text-xs text-slate-400 hover:text-slate-200 tracking-wider underline cursor-pointer"
              >
                Close Letter
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
