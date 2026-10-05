import React from 'react';

interface CauveryLogoProps {
  variant?: 'horizontal' | 'stacked' | 'icon' | 'badge';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  animated?: boolean;
  className?: string;
  isLightText?: boolean; // When placed on dark backgrounds
}

export const CauveryLogo: React.FC<CauveryLogoProps> = ({
  variant = 'horizontal',
  size = 'md',
  animated = true,
  className = '',
  isLightText = false,
}) => {
  // Size presets for the official circular medallion
  const sizeMap = {
    sm: 'w-10 h-10',
    md: 'w-12 h-12 sm:w-14 sm:h-14',
    lg: 'w-16 h-16 sm:w-20 sm:h-20',
    xl: 'w-24 h-24 sm:w-28 sm:h-28',
  };

  const medallionSize = sizeMap[size];

  // 1. Icon / Badge Only (The official circular medallion)
  if (variant === 'icon' || variant === 'badge') {
    return (
      <div
        className={`relative inline-flex items-center justify-center select-none ${
          isLightText ? 'bg-[#FCFAF6] rounded-full p-1 shadow-lg ring-2 ring-gold/40' : ''
        } ${className}`}
      >
        <img
          src="/logo-removebg-preview.png"
          alt="Cauvery – The Art of Dosa & Idli"
          className={`${medallionSize} object-contain ${
            animated ? 'transition-transform duration-300 hover:scale-105' : ''
          }`}
          loading="eager"
        />
      </div>
    );
  }

  // 2. Stacked Variant (E.g. Preloader, Footer Center, Hero Showcase)
  if (variant === 'stacked') {
    return (
      <div className={`flex flex-col items-center text-center select-none ${className}`}>
        <div
          className={`relative mb-3 ${
            isLightText ? 'bg-[#FCFAF6] rounded-full p-2 shadow-2xl ring-2 ring-gold/50' : ''
          }`}
        >
          <img
            src="/logo-removebg-preview.png"
            alt="Cauvery – The Art of Dosa & Idli"
            className={`${size === 'md' ? 'w-20 h-20 sm:w-24 sm:h-24' : medallionSize} object-contain ${
              animated ? 'transition-transform duration-300 hover:scale-105' : ''
            }`}
            loading="eager"
          />
        </div>

        {/* Text accompaniment */}
        <div className="flex flex-col items-center">
          <span
            className={`font-display font-black tracking-[0.14em] text-2xl sm:text-3xl ${
              isLightText ? 'text-[#FCFAF6]' : 'text-espresso'
            }`}
          >
            Cauvery
          </span>
          <span
            className={`font-display italic text-xs tracking-widest uppercase mt-0.5 ${
              isLightText ? 'text-gold-light' : 'text-leaf-vibrant'
            }`}
          >
            The Art of Dosa &amp; Idli
          </span>
        </div>
      </div>
    );
  }

  // 3. Horizontal Variant (Navbar & Header Default)
  return (
    <div className={`flex items-center gap-3 sm:gap-3.5 select-none group ${className}`}>
      {/* Official Medallion Badge */}
      <div
        className={`relative shrink-0 flex items-center justify-center ${
          isLightText
            ? 'bg-[#FCFAF6] rounded-full p-1 shadow-md ring-2 ring-gold/40'
            : 'bg-[#FCFAF6] rounded-full p-0.5 shadow-sm ring-1 ring-forest/10 hover:ring-leaf/40'
        } transition-all`}
      >
        <img
          src="/logo-removebg-preview.png"
          alt="Cauvery – The Art of Dosa & Idli"
          className={`${medallionSize} object-contain ${
            animated ? 'transition-transform duration-300 group-hover:scale-105' : ''
          }`}
          loading="eager"
        />
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col justify-center leading-none">
        <div className="flex items-center gap-1.5">
          <span
            className={`font-display font-black text-xl sm:text-2xl tracking-[0.08em] ${
              isLightText ? 'text-[#FCFAF6]' : 'text-espresso'
            }`}
          >
            Cauvery
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 inline-block" />
        </div>
        <span
          className={`text-[10px] sm:text-[11px] font-medium tracking-[0.18em] uppercase mt-1 font-body ${
            isLightText ? 'text-gold-light/90' : 'text-leaf-vibrant font-semibold'
          }`}
        >
          The Art of Dosa &amp; Idli
        </span>
      </div>
    </div>
  );
};
