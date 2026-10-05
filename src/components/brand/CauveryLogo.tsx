import React from 'react';

interface CauveryLogoProps {
  variant?: 'horizontal' | 'stacked' | 'icon';
  animated?: boolean;
  className?: string;
  isLightText?: boolean; // When placed on dark backgrounds like the footer
}

export const CauveryLogo: React.FC<CauveryLogoProps> = ({
  variant = 'horizontal',
  animated = false,
  className = '',
  isLightText = false,
}) => {
  // Gradients & Filters
  const SvgDefs = (
    <defs>
      {/* Rich Golden Brass Gradient */}
      <linearGradient id="cLogoGold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFF2CC" />
        <stop offset="35%" stopColor="#F5B935" />
        <stop offset="70%" stopColor="#D89218" />
        <stop offset="100%" stopColor="#FFE082" />
      </linearGradient>

      {/* Lush Green Leaves Gradient */}
      <linearGradient id="cLogoLeaf" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4ADE80" />
        <stop offset="45%" stopColor="#16A34A" />
        <stop offset="100%" stopColor="#14532D" />
      </linearGradient>

      {/* Tender Leaf Light Sprout */}
      <linearGradient id="cLogoLeafSprout" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#86EFAC" />
        <stop offset="100%" stopColor="#22C55E" />
      </linearGradient>

      {/* Deep Emerald Disc Gradient */}
      <linearGradient id="cLogoDisc" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0F3C22" />
        <stop offset="100%" stopColor="#061A0E" />
      </linearGradient>

      {/* Soft Drop Shadow for Emblem */}
      <filter id="cLogoShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="1.5" stdDeviation="2" floodColor="#082814" floodOpacity="0.32" />
      </filter>
    </defs>
  );

  // Text color based on isLightText prop or page theme
  const textColorClass = isLightText
    ? 'text-[#FAF6EE]'
    : 'text-forest dark:text-cream';

  // 1. Icon-Only Emblem (Crisp Green Banana Leaves with Golden Ribs)
  if (variant === 'icon') {
    return (
      <svg
        viewBox="0 0 72 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-9 h-9 sm:w-10 sm:h-10 shrink-0 ${className} ${animated ? 'hover:scale-105 transition-transform duration-300' : ''}`}
        aria-label="Cauvery Green Leaves Emblem"
      >
        {SvgDefs}
        
        {/* Soft Circular Disc Base */}
        <circle cx="36" cy="36" r="33.5" fill="url(#cLogoDisc)" stroke="url(#cLogoGold)" strokeWidth="1.8" filter="url(#cLogoShadow)" />
        <circle cx="36" cy="36" r="30" fill="none" stroke="url(#cLogoGold)" strokeWidth="0.7" strokeDasharray="2 2.5" opacity="0.75" />

        {/* Pair of Fresh Banana Leaves */}
        {/* Secondary Back Leaf (Tender Green, angled) */}
        <path
          d="M36 44 C26 38, 22 26, 26 17 C34 16, 42 24, 38 38 Z"
          fill="url(#cLogoLeafSprout)"
          opacity="0.95"
        />
        <path d="M28 20 Q33 28 36 38" stroke="url(#cLogoGold)" strokeWidth="1" strokeLinecap="round" />

        {/* Primary Lush Front Leaf */}
        <path
          d="M36 12 C47 16, 56 27, 52 44 C49 54, 40 61, 36 62 C32 61, 23 54, 20 44 C16 27, 25 16, 36 12 Z"
          fill="url(#cLogoLeaf)"
        />

        {/* Golden Central Spine */}
        <path d="M36 14 Q36 38 36 59" stroke="url(#cLogoGold)" strokeWidth="1.8" strokeLinecap="round" />

        {/* Lateral Golden Leaf Veins */}
        <path d="M36 24 Q44 28 48 33" stroke="url(#cLogoGold)" strokeWidth="1" strokeLinecap="round" />
        <path d="M36 24 Q28 28 24 33" stroke="url(#cLogoGold)" strokeWidth="1" strokeLinecap="round" />
        <path d="M36 35 Q45 39 47 46" stroke="url(#cLogoGold)" strokeWidth="1" strokeLinecap="round" />
        <path d="M36 35 Q27 39 25 46" stroke="url(#cLogoGold)" strokeWidth="1" strokeLinecap="round" />
        <path d="M36 46 Q42 49 44 54" stroke="url(#cLogoGold)" strokeWidth="0.9" strokeLinecap="round" />
        <path d="M36 46 Q30 49 28 54" stroke="url(#cLogoGold)" strokeWidth="0.9" strokeLinecap="round" />

        {/* Delicate Golden Crest Pip */}
        <circle cx="36" cy="11.5" r="2.2" fill="url(#cLogoGold)" />
      </svg>
    );
  }

  // 2. Stacked Variant (Footer & Special Placements)
  if (variant === 'stacked') {
    return (
      <div className={`flex flex-col items-center select-none ${className}`}>
        {/* Green Leaves Emblem */}
        <div className="relative mb-2">
          <svg viewBox="0 0 72 72" fill="none" className="w-12 h-12" xmlns="http://www.w3.org/2000/svg">
            {SvgDefs}
            <circle cx="36" cy="36" r="33.5" fill="url(#cLogoDisc)" stroke="url(#cLogoGold)" strokeWidth="1.8" filter="url(#cLogoShadow)" />
            <circle cx="36" cy="36" r="30" fill="none" stroke="url(#cLogoGold)" strokeWidth="0.7" strokeDasharray="2 2.5" opacity="0.75" />

            {/* Leaves */}
            <path d="M36 44 C26 38, 22 26, 26 17 C34 16, 42 24, 38 38 Z" fill="url(#cLogoLeafSprout)" opacity="0.95" />
            <path d="M28 20 Q33 28 36 38" stroke="url(#cLogoGold)" strokeWidth="1" strokeLinecap="round" />

            <path
              d="M36 12 C47 16, 56 27, 52 44 C49 54, 40 61, 36 62 C32 61, 23 54, 20 44 C16 27, 25 16, 36 12 Z"
              fill="url(#cLogoLeaf)"
            />
            <path d="M36 14 Q36 38 36 59" stroke="url(#cLogoGold)" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M36 24 Q44 28 48 33" stroke="url(#cLogoGold)" strokeWidth="1" strokeLinecap="round" />
            <path d="M36 24 Q28 28 24 33" stroke="url(#cLogoGold)" strokeWidth="1" strokeLinecap="round" />
            <path d="M36 35 Q45 39 47 46" stroke="url(#cLogoGold)" strokeWidth="1" strokeLinecap="round" />
            <path d="M36 35 Q27 39 25 46" stroke="url(#cLogoGold)" strokeWidth="1" strokeLinecap="round" />
            <circle cx="36" cy="11.5" r="2.2" fill="url(#cLogoGold)" />
          </svg>
        </div>

        {/* Clean, Tasteful Name "Cauvery" in Small/Medium Proportions */}
        <div className="flex items-center gap-1.5">
          <span className={`font-display text-xl sm:text-2xl font-bold tracking-[0.12em] ${textColorClass}`}>
            Cauvery
          </span>
          <span className="text-gold text-xs">✦</span>
        </div>
      </div>
    );
  }

  // 3. Horizontal Variant (Navbar / Header / Default)
  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 select-none ${className}`}>
      {/* Green Leaves Emblem Icon */}
      <svg
        viewBox="0 0 72 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-9 h-9 sm:w-10 sm:h-10 shrink-0 ${animated ? 'transition-transform duration-300 group-hover:scale-105' : ''}`}
      >
        {SvgDefs}
        <circle cx="36" cy="36" r="33.5" fill="url(#cLogoDisc)" stroke="url(#cLogoGold)" strokeWidth="1.8" filter="url(#cLogoShadow)" />
        <circle cx="36" cy="36" r="30" fill="none" stroke="url(#cLogoGold)" strokeWidth="0.7" strokeDasharray="2 2.5" opacity="0.75" />

        {/* Leaves */}
        <path d="M36 44 C26 38, 22 26, 26 17 C34 16, 42 24, 38 38 Z" fill="url(#cLogoLeafSprout)" opacity="0.95" />
        <path d="M28 20 Q33 28 36 38" stroke="url(#cLogoGold)" strokeWidth="1" strokeLinecap="round" />

        <path
          d="M36 12 C47 16, 56 27, 52 44 C49 54, 40 61, 36 62 C32 61, 23 54, 20 44 C16 27, 25 16, 36 12 Z"
          fill="url(#cLogoLeaf)"
        />
        <path d="M36 14 Q36 38 36 59" stroke="url(#cLogoGold)" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M36 24 Q44 28 48 33" stroke="url(#cLogoGold)" strokeWidth="1" strokeLinecap="round" />
        <path d="M36 24 Q28 28 24 33" stroke="url(#cLogoGold)" strokeWidth="1" strokeLinecap="round" />
        <path d="M36 35 Q45 39 47 46" stroke="url(#cLogoGold)" strokeWidth="1" strokeLinecap="round" />
        <path d="M36 35 Q27 39 25 46" stroke="url(#cLogoGold)" strokeWidth="1" strokeLinecap="round" />
        <circle cx="36" cy="11.5" r="2.2" fill="url(#cLogoGold)" />
      </svg>

      {/* Clean, Refined Name "Cauvery" (Small/Medium, Tasteful, Elegant Serif) */}
      <div className="flex items-center gap-1.5">
        <span className={`font-display text-lg sm:text-xl font-bold tracking-[0.08em] ${textColorClass}`}>
          Cauvery
        </span>
        <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block" />
      </div>
    </div>
  );
};
