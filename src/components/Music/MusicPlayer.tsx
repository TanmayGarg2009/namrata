import React, { useEffect, useState } from 'react';
import { soundManager } from '../../utils/audioSynthesizer';
import { Volume2, VolumeX } from 'lucide-react';

export const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  useEffect(() => {
    const unsubscribe = soundManager.subscribe((playing) => {
      setIsPlaying(playing);
    });
    return unsubscribe;
  }, []);

  const handleToggle = () => {
    soundManager.toggleMusic();
  };

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40">
      <button
        onClick={handleToggle}
        className={`group flex items-center gap-2.5 px-4 py-2.5 rounded-full border backdrop-blur-md transition-all duration-300 shadow-lg cursor-pointer select-none ${
          isPlaying
            ? 'bg-midnight-900/90 border-gold-400/60 text-gold-200 shadow-[0_0_20px_rgba(245,208,97,0.3)] scale-105'
            : 'bg-midnight-950/85 hover:bg-midnight-900 border-white/15 text-slate-300 hover:text-white'
        }`}
        aria-label={isPlaying ? 'Turn background music OFF' : 'Turn background music ON'}
      >
        {isPlaying ? (
          <>
            <div className="flex items-center gap-0.5 h-3.5" aria-hidden="true">
              <span className="w-0.5 h-full bg-gold-400 rounded-full animate-[pulse_0.8s_ease-in-out_infinite]" />
              <span className="w-0.5 h-3/4 bg-gold-300 rounded-full animate-[pulse_1.1s_ease-in-out_infinite_0.2s]" />
              <span className="w-0.5 h-4/5 bg-gold-400 rounded-full animate-[pulse_0.9s_ease-in-out_infinite_0.4s]" />
            </div>
            <span className="text-xs font-medium tracking-wide">Music ON 🎵</span>
            <Volume2 className="w-3.5 h-3.5 text-gold-400" />
          </>
        ) : (
          <>
            <VolumeX className="w-3.5 h-3.5 text-slate-400 group-hover:text-gold-300 transition-colors" />
            <span className="text-xs font-medium tracking-wide text-slate-300 group-hover:text-slate-100">
              Music OFF
            </span>
          </>
        )}
      </button>
    </div>
  );
};
