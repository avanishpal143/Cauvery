import React from 'react';

interface CauveryLogoProps {
  variant?: 'horizontal' | 'stacked' | 'icon';
  animated?: boolean;
  className?: string;
  isDark?: boolean;
}

export const CauveryLogo: React.FC<CauveryLogoProps> = ({
  variant = 'horizontal',
  animated = false,
  className = '',
}) => {
  if (variant === 'icon') {
    return (
      <svg
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-10 h-10 ${className}`}
        aria-label="Cauvery Emblem"
      >
        <circle cx="30" cy="30" r="28" className="stroke-gold/80 fill-forest/10 dark:fill-forest/30" strokeWidth="1.5" />
        <circle cx="30" cy="30" r="24" className="stroke-leaf/40" strokeWidth="1" strokeDasharray="2 2" />
        
        {/* Leaf sprout in circle */}
        <path
          d="M30 14 C38 18, 44 28, 42 38 C40 44, 34 50, 30 50 C26 50, 20 44, 18 38 C16 28, 22 18, 30 14 Z"
          fill="#2F6B3F"
          className={animated ? 'animate-pulse' : ''}
        />
        <path d="M30 16 Q30 34 30 48" stroke="#E8B04B" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M30 24 Q36 28 39 34" stroke="#FCE196" strokeWidth="1" strokeLinecap="round" />
        <path d="M30 24 Q24 28 21 34" stroke="#FCE196" strokeWidth="1" strokeLinecap="round" />
      </svg>
    );
  }

  if (variant === 'stacked') {
    return (
      <div className={`flex flex-col items-center select-none ${className}`}>
        <div className="relative flex items-center justify-center">
          <span className="font-display text-4xl sm:text-5xl font-black tracking-[0.2em] text-forest dark:text-cream leading-none">
            CAUVER
          </span>
          {/* Stylized Y with curving leaf tail */}
          <span className="relative font-display text-4xl sm:text-5xl font-black text-forest dark:text-cream leading-none">
            Y
            <svg
              className={`absolute -right-3 -top-2 w-7 h-7 pointer-events-none ${animated ? 'origin-bottom-left transition-transform hover:rotate-12 duration-500' : ''}`}
              viewBox="0 0 28 28"
              fill="none"
            >
              <path
                d="M4 22 C 8 18, 14 12, 22 10 C 26 9, 27 6, 26 4 C 23 4, 18 7, 14 11 C 9 16, 5 21, 4 22 Z"
                fill="#2F6B3F"
              />
              <path
                d="M12 14 C 16 11, 20 9, 26 9 C 27 12, 24 16, 19 18 C 15 19, 12 18, 12 14 Z"
                fill="#E8B04B"
              />
            </svg>
          </span>
        </div>
        
        {/* Tagline between delicate lines */}
        <div className="flex items-center gap-3 mt-1.5 w-full justify-center">
          <div className="h-[1px] w-8 sm:w-12 bg-gold/50" />
          <span className="text-[10px] sm:text-xs tracking-[0.28em] uppercase font-body font-semibold text-copper dark:text-gold-light whitespace-nowrap">
            The Art of Dosa & Idli
          </span>
          <div className="h-[1px] w-8 sm:w-12 bg-gold/50" />
        </div>
      </div>
    );
  }

  // Horizontal variant (default navbar/header)
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Icon Emblem */}
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-9 h-9 shrink-0"
      >
        <circle cx="20" cy="20" r="18" className="stroke-gold/70 fill-leaf/10 dark:fill-forest/40" strokeWidth="1.2" />
        <path
          d="M20 8 C 26 11, 30 18, 29 25 C 27 29, 23 33, 20 33 C 17 33, 13 29, 11 25 C 10 18, 14 11, 20 8 Z"
          fill="#2F6B3F"
        />
        <path d="M20 9 Q 20 22 20 32" stroke="#E8B04B" strokeWidth="1.2" strokeLinecap="round" />
        <circle cx="20" cy="20" r="2.5" fill="#E8B04B" />
      </svg>

      <div className="flex flex-col text-left">
        <div className="flex items-baseline">
          <span className="font-display text-2xl sm:text-3xl font-extrabold tracking-[0.14em] text-forest dark:text-cream leading-tight">
            CAUVER
          </span>
          <span className="relative font-display text-2xl sm:text-3xl font-extrabold text-forest dark:text-cream leading-tight">
            Y
            <span className="absolute -top-1.5 -right-2 text-[10px] text-gold animate-bounce">✦</span>
          </span>
        </div>
        <div className="flex items-center gap-1.5 -mt-0.5">
          <span className="text-[9px] sm:text-[10px] tracking-[0.22em] uppercase font-body font-semibold text-leaf dark:text-gold-light">
            The Art of Dosa & Idli
          </span>
        </div>
      </div>
    </div>
  );
};
