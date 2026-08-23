import React, { useState } from 'react';
import { BirthdayIntro } from './components/Intro/BirthdayIntro';
import { StarrySky } from './components/Background/StarrySky';
import { CustomCursor } from './components/Cursor/CustomCursor';
import { HeroSection } from './components/Hero/HeroSection';
import { PersonalIntro } from './components/Memory/PersonalIntro';
import { ThingsIAdmire } from './components/Admire/ThingsIAdmire';
import { MakeAWish } from './components/Wish/MakeAWish';
import { SurpriseEnvelope } from './components/Surprise/SurpriseEnvelope';
import { RakshaBandhanSection } from './components/Rakhi/RakshaBandhanSection';
import { FinalCelebration } from './components/Final/FinalCelebration';
import { MusicPlayer } from './components/Music/MusicPlayer';

export const App: React.FC = () => {
  const [hasEntered, setHasEntered] = useState<boolean>(false);

  const scrollToMemory = () => {
    const el = document.getElementById('memory');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-midnight-950 text-slate-100 font-sans selection:bg-rose-400/30 selection:text-gold-200 overflow-x-hidden">
      {/* 1. Cinematic Opening Intro Modal Overlay */}
      {!hasEntered && (
        <BirthdayIntro onEnter={() => setHasEntered(true)} />
      )}

      {/* 2. Persistent Desktop Custom Cursor */}
      <CustomCursor />

      {/* 3. Ambient Celestial Sky Background */}
      <StarrySky />

      {/* 4. Floating Audio Controller (Music OFF / Music ON 🎵) */}
      <MusicPlayer />

      {/* 5. Main Experience Continuous Story Layout */}
      <main
        className={`relative z-10 w-full flex flex-col items-center transition-opacity duration-1000 ${
          hasEntered ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Step 1: Birthday Hero & 28th August Focal Point + Cake */}
        <HeroSection onScrollNext={scrollToMemory} />

        {/* Step 2: Personal Memory ("Okay, something I remember..." + Ichchadhari Naagin joke) */}
        <PersonalIntro />

        {/* Step 3: Things I Admire About You (6 Genuine Qualities) */}
        <ThingsIAdmire />

        {/* Step 4: Interactive Birthday Wish Candle */}
        <MakeAWish />

        {/* Step 5: Secret Surprise Envelope ("Wait... there's more 👀") */}
        <SurpriseEnvelope />

        {/* Step 6: Raksha Bandhan Double Celebration Section */}
        <RakshaBandhanSection />

        {/* Step 7: Grand Final Message & Tanmay Signature */}
        <FinalCelebration />
      </main>
    </div>
  );
};

export default App;
