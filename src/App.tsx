import React, { useState } from 'react';
import { BirthdayIntro } from './components/Intro/BirthdayIntro';
import { StarrySky } from './components/Background/StarrySky';
import { CustomCursor } from './components/Cursor/CustomCursor';
import { HeroSection } from './components/Hero/HeroSection';
import { CinematicMessage } from './components/Message/CinematicMessage';
import { MakeAWish } from './components/Wish/MakeAWish';
import { ThingsIWish } from './components/WishesGrid/ThingsIWish';
import { SurpriseEnvelope } from './components/Surprise/SurpriseEnvelope';
import { FinalCelebration } from './components/Final/FinalCelebration';
import { MusicPlayer } from './components/Music/MusicPlayer';

export const App: React.FC = () => {
  const [hasEntered, setHasEntered] = useState<boolean>(false);

  const scrollToMessage = () => {
    const el = document.getElementById('message');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-midnight-950 text-slate-100 font-sans selection:bg-rose-400/30 selection:text-gold-200 overflow-x-hidden">
      {/* Intro Modal Overlay */}
      {!hasEntered && (
        <BirthdayIntro onEnter={() => setHasEntered(true)} />
      )}

      {/* Persistent Desktop Custom Cursor */}
      <CustomCursor />

      {/* Ambient Celestial Sky Background */}
      <StarrySky />

      {/* Floating Audio Controller */}
      <MusicPlayer />

      {/* Main Experience Layout */}
      <main
        className={`relative z-10 w-full flex flex-col items-center transition-opacity duration-1000 ${
          hasEntered ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* 1. Hero Section & Cake Centerpiece */}
        <HeroSection onScrollNext={scrollToMessage} />

        {/* 2. Dedicated Cinematic Message for Namrata */}
        <CinematicMessage />

        {/* 3. Interactive Make a Wish Candle */}
        <MakeAWish />

        {/* 4. Things I Wish For You (6 Luxury Cards) */}
        <ThingsIWish />

        {/* 5. Secret Surprise Wax-Sealed Envelope */}
        <SurpriseEnvelope />

        {/* 6. Grand Final Celebration */}
        <FinalCelebration />
      </main>
    </div>
  );
};

export default App;
