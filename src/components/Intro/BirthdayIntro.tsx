import React, { useState, useEffect } from 'react';
import { BIRTHDAY_DATA } from '../../config/birthdayData';
import { fireLightweightConfetti } from '../../utils/confetti';
import { soundManager } from '../../utils/audioSynthesizer';
import { Sparkles } from 'lucide-react';

interface BirthdayIntroProps {
  onEnter: () => void;
}

export const BirthdayIntro: React.FC<BirthdayIntroProps> = ({ onEnter }) => {
  const [step, setStep] = useState<number>(0);
  const [isExiting, setIsExiting] = useState<boolean>(false);

  useEffect(() => {
    // Step 0: Center star glows (0s)
    // Step 1: "Hey Namrata..." (0.8s)
    // Step 2: "There's a little surprise waiting for you. ✨" (2.2s)
    // Step 3: "Because today is your day." (3.6s)
    // Step 4: Button "Enter the Celebration ✨" (4.8s)

    const timer1 = setTimeout(() => setStep(1), 700);
    const timer2 = setTimeout(() => setStep(2), 2000);
    const timer3 = setTimeout(() => setStep(3), 3300);
    const timer4 = setTimeout(() => setStep(4), 4400);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  const handleEnter = () => {
    soundManager.play();
    soundManager.playSparkle();
    fireLightweightConfetti({ particleCount: 30, origin: { x: 0.5, y: 0.55 } });
    setIsExiting(true);
    setTimeout(() => {
      onEnter();
    }, 700);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center px-4 transition-all duration-700 bg-midnight-950 ${
        isExiting ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Background Soft Glow */}
      <div 
        className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full opacity-30 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #facc15 0%, #c084fc 40%, transparent 70%)' }}
      />

      {/* Center glowing spark */}
      <div className="relative mb-8 flex items-center justify-center">
        <div className="w-3 h-3 rounded-full bg-gold-200 shadow-[0_0_20px_#fde047,0_0_40px_#f59e0b] animate-pulse-glow" />
        <div className="absolute w-8 h-8 rounded-full border border-gold-300/30 animate-ping opacity-40" />
      </div>

      {/* Cinematic Text Sequence */}
      <div className="text-center max-w-lg mx-auto flex flex-col items-center justify-center min-h-[160px] space-y-4">
        {step >= 1 && (
          <h2 className="font-serif text-2xl md:text-4xl text-slate-100 tracking-wide animate-[fadeIn_0.8s_ease-out]">
            {BIRTHDAY_DATA.introSequence.greeting}
          </h2>
        )}

        {step >= 2 && (
          <p className="text-lavender-200 text-base md:text-xl font-light tracking-wide animate-[fadeIn_0.8s_ease-out]">
            {BIRTHDAY_DATA.introSequence.surprise}
          </p>
        )}

        {step >= 3 && (
          <p className="text-peach-200 text-sm md:text-base font-light italic tracking-wider animate-[fadeIn_0.8s_ease-out]">
            {BIRTHDAY_DATA.introSequence.reason}
          </p>
        )}

        {/* Enter Celebration Button */}
        {step >= 4 && (
          <div className="pt-6 animate-[fadeIn_0.8s_ease-out]">
            <button
              onClick={handleEnter}
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-gold-500/20 via-rose-500/20 to-lavender-500/20 hover:from-gold-500/30 hover:to-lavender-500/30 border border-gold-300/50 hover:border-gold-300 text-gold-100 font-medium text-base md:text-lg transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] shadow-[0_0_25px_rgba(245,208,97,0.25)] hover:shadow-[0_0_35px_rgba(245,208,97,0.45)] cursor-pointer"
              aria-label="Enter the celebration"
            >
              <Sparkles className="w-5 h-5 text-gold-300 group-hover:rotate-12 transition-transform duration-300" />
              <span>{BIRTHDAY_DATA.introSequence.buttonText}</span>
            </button>
          </div>
        )}
      </div>

      {/* Quick skip button for impatience / accessibility */}
      {step < 4 && (
        <button
          onClick={handleEnter}
          className="absolute bottom-8 text-xs text-slate-500 hover:text-slate-300 transition-colors uppercase tracking-widest cursor-pointer px-4 py-2"
        >
          Skip Intro →
        </button>
      )}
    </div>
  );
};
