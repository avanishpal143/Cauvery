import React, { useEffect, useState } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isWiping, setIsWiping] = useState(false);

  useEffect(() => {
    // Progress counter simulation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsWiping(true);
            setTimeout(onComplete, 800); // Wait for wipe animation to finish
          }, 300);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15 + 10);
      });
    }, 120);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-forest text-cream transition-transform duration-700 ease-[cubic-bezier(0.87,0,0.13,1)] ${
        isWiping ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      {/* Background radial warmth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(47,107,63,0.35)_0%,transparent_70%)] pointer-events-none" />

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center max-w-sm px-6 text-center">
        {/* Animated Leaf SVG Stroke Draw */}
        <div className="relative w-24 h-24 mb-6">
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Outer Circle Ring */}
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="#E8B04B"
              strokeWidth="2"
              strokeDasharray="283"
              strokeDashoffset={283 - (283 * progress) / 100}
              className="transition-all duration-300 ease-out"
            />

            {/* Banana Leaf Outline Stroke */}
            <path
              d="M50 20 C 65 24, 76 40, 72 58 C 69 70, 56 80, 50 82 C 44 80, 31 70, 28 58 C 24 40, 35 24, 50 20 Z"
              stroke="#448F59"
              strokeWidth="2.5"
              strokeDasharray="220"
              strokeDashoffset={220 - (220 * progress) / 100}
              fill="rgba(47, 107, 63, 0.25)"
              className="transition-all duration-300 ease-out"
            />

            {/* Leaf Vein Stem */}
            <path
              d="M50 24 Q 50 50 50 80"
              stroke="#E8B04B"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="60"
              strokeDashoffset={60 - (60 * progress) / 100}
            />

            {/* Lateral Veins */}
            <path
              d="M50 38 Q 62 42 66 48"
              stroke="#FCE196"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeDasharray="20"
              strokeDashoffset={20 - (20 * progress) / 100}
            />
            <path
              d="M50 38 Q 38 42 34 48"
              stroke="#FCE196"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeDasharray="20"
              strokeDashoffset={20 - (20 * progress) / 100}
            />
          </svg>
        </div>

        {/* Wordmark with Sprouting Foliage */}
        <div className="relative flex items-center justify-center mb-2">
          <span className="font-display text-3xl sm:text-4xl font-black tracking-[0.2em] text-cream leading-none">
            CAUVER
          </span>
          <span className="relative font-display text-3xl sm:text-4xl font-black text-cream leading-none">
            Y
            <span className="absolute -top-2 -right-3 text-xs text-gold animate-bounce">✦</span>
          </span>
        </div>

        <div className="flex items-center gap-2.5 w-full justify-center mb-6">
          <span className="text-[11px] text-emerald-400">🌿</span>
          <div className="h-[1.5px] w-8 bg-gradient-to-r from-transparent to-gold" />
          <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] font-extrabold text-gold-light whitespace-nowrap">
            The Art of Dosa &amp; Idli
          </span>
          <div className="h-[1.5px] w-8 bg-gradient-to-r from-gold to-transparent" />
          <span className="text-[11px] text-emerald-400">🌿</span>
        </div>

        {/* Progress & Micro copy */}
        <div className="flex flex-col items-center gap-2">
          <div className="text-xs font-mono tracking-widest text-gold-light">
            Slow-fermenting batter... {Math.min(progress, 100)}%
          </div>

          <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-gold to-leaf transition-all duration-300 rounded-full"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
        </div>

        {/* Skip button for impatient users */}
        <button
          onClick={() => {
            setIsWiping(true);
            setTimeout(onComplete, 500);
          }}
          className="mt-8 text-[11px] text-cream/40 hover:text-gold uppercase tracking-widest transition-colors cursor-pointer"
        >
          Enter Cafe ✦
        </button>
      </div>

      {/* Dosa golden-roll reveal wipe overlay */}
      <div
        className={`absolute inset-x-0 bottom-0 h-4 bg-gradient-to-r from-gold via-copper to-gold shadow-[0_-10px_30px_rgba(232,176,75,0.6)] transition-opacity duration-300 ${
          isWiping ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
};
