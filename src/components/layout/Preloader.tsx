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
        {/* Official Brand Logo with Animated Golden Progress Ring */}
        <div className="relative w-36 h-36 sm:w-40 sm:h-40 mx-auto mb-5 flex items-center justify-center">
          {/* Radial Warm Glow behind logo */}
          <div className="absolute inset-0 bg-gold/15 rounded-full blur-xl animate-pulse" />

          {/* SVG Progress Ring */}
          <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
            {/* Background Ring Track */}
            <circle
              cx="50"
              cy="50"
              r="46"
              stroke="rgba(217, 148, 38, 0.2)"
              strokeWidth="2"
              fill="none"
            />
            {/* Active Drawing Ring */}
            <circle
              cx="50"
              cy="50"
              r="46"
              stroke="#D99426"
              strokeWidth="2.5"
              strokeDasharray="289"
              strokeDashoffset={289 - (289 * progress) / 100}
              strokeLinecap="round"
              fill="none"
              className="transition-all duration-200 ease-out"
            />
          </svg>

          {/* Official Circular Logo Badge */}
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-[#FCFAF6] p-1 shadow-2xl flex items-center justify-center ring-2 ring-gold/40">
            <img
              src="/logo-removebg-preview.png"
              alt="Cauvery – The Art of Dosa & Idli"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="flex items-center gap-2.5 w-full justify-center mb-6">
          <span className="text-[11px] text-emerald-400">🌿</span>
          <div className="h-[1.5px] w-8 bg-gradient-to-r from-transparent to-gold" />
          <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] font-extrabold text-gold-light whitespace-nowrap">
            Pure Veg • Pune
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
