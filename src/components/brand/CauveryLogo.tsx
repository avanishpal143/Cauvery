import React from 'react';

interface CauveryLogoProps {
  variant?: 'horizontal' | 'stacked' | 'icon';
  animated?: boolean;
  className?: string;
}

export const CauveryLogo: React.FC<CauveryLogoProps> = ({
  variant = 'horizontal',
  animated = false,
  className = '',
}) => {
  // Common SVG gradients & filters definition
  const SvgDefs = (
    <defs>
      {/* Rich Golden Brass Gradient */}
      <linearGradient id="cauveryGold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FDEAB8" />
        <stop offset="35%" stopColor="#E8A72B" />
        <stop offset="70%" stopColor="#C98218" />
        <stop offset="100%" stopColor="#FCE4A6" />
      </linearGradient>

      {/* Fresh Banana Leaf Green Gradient */}
      <linearGradient id="cauveryLeaf" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3DAA62" />
        <stop offset="50%" stopColor="#237A3F" />
        <stop offset="100%" stopColor="#0E3D1F" />
      </linearGradient>

      {/* Tender Leaf Secondary Green */}
      <linearGradient id="cauveryLeafTender" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#85DDA0" />
        <stop offset="100%" stopColor="#2F9950" />
      </linearGradient>

      {/* Subtle Drop Shadow for Badge */}
      <filter id="logoShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="2" stdDeviation="2.5" floodColor="#0A2A16" floodOpacity="0.25" />
      </filter>
    </defs>
  );

  // 1. Icon-Only Emblem (Medallion with Banana Leaf & Golden Dosa Spiral)
  if (variant === 'icon') {
    return (
      <svg
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-11 h-11 shrink-0 ${className} ${animated ? 'hover:scale-105 transition-transform duration-300' : ''}`}
        aria-label="Cauvery Emblem"
      >
        {SvgDefs}
        
        {/* Outer Circular Brass Rim */}
        <circle cx="40" cy="40" r="37" fill="#0C2F1A" stroke="url(#cauveryGold)" strokeWidth="2" filter="url(#logoShadow)" />
        
        {/* Decorative Temple Bead Ring */}
        <circle cx="40" cy="40" r="33.5" fill="none" stroke="url(#cauveryGold)" strokeWidth="0.8" strokeDasharray="2 3" opacity="0.75" />
        
        {/* Inner Banana Leaf Motif (Curving Elegant Leaf) */}
        <path
          d="M40 14 C52 18, 62 30, 58 48 C55 60, 44 68, 40 69 C36 68, 25 60, 22 48 C18 30, 28 18, 40 14 Z"
          fill="url(#cauveryLeaf)"
        />

        {/* Central Golden Leaf Rib / Vein */}
        <path d="M40 16 Q40 42 40 66" stroke="url(#cauveryGold)" strokeWidth="2" strokeLinecap="round" />

        {/* Lateral Fine Leaf Veins */}
        <path d="M40 28 Q49 32 54 38" stroke="url(#cauveryGold)" strokeWidth="1.2" strokeLinecap="round" opacity="0.9" />
        <path d="M40 28 Q31 32 26 38" stroke="url(#cauveryGold)" strokeWidth="1.2" strokeLinecap="round" opacity="0.9" />
        <path d="M40 40 Q50 44 53 52" stroke="url(#cauveryGold)" strokeWidth="1.2" strokeLinecap="round" opacity="0.9" />
        <path d="M40 40 Q30 44 27 52" stroke="url(#cauveryGold)" strokeWidth="1.2" strokeLinecap="round" opacity="0.9" />
        <path d="M40 52 Q47 55 49 61" stroke="url(#cauveryGold)" strokeWidth="1" strokeLinecap="round" opacity="0.8" />
        <path d="M40 52 Q33 55 31 61" stroke="url(#cauveryGold)" strokeWidth="1" strokeLinecap="round" opacity="0.8" />

        {/* Golden Crispy Dosa Swirl Crest Orbit */}
        <circle
          cx="40"
          cy="40"
          r="23"
          fill="none"
          stroke="url(#cauveryGold)"
          strokeWidth="1.8"
          strokeDasharray="48 24"
          transform="rotate(-35 40 40)"
        />

        {/* Golden Grain Sparkle at top */}
        <circle cx="40" cy="13" r="2.5" fill="url(#cauveryGold)" />
      </svg>
    );
  }

  // 2. Stacked Variant (Hero / Footer / Menu Headers)
  if (variant === 'stacked') {
    return (
      <div className={`flex flex-col items-center select-none ${className}`}>
        {/* Emblem on top */}
        <div className="relative mb-2">
          <svg viewBox="0 0 80 80" fill="none" className="w-14 h-14" xmlns="http://www.w3.org/2000/svg">
            {SvgDefs}
            <circle cx="40" cy="40" r="37" fill="#0C2F1A" stroke="url(#cauveryGold)" strokeWidth="2.2" filter="url(#logoShadow)" />
            <circle cx="40" cy="40" r="33.5" fill="none" stroke="url(#cauveryGold)" strokeWidth="0.8" strokeDasharray="2.5 3.5" opacity="0.75" />
            <path
              d="M40 14 C52 18, 62 30, 58 48 C55 60, 44 68, 40 69 C36 68, 25 60, 22 48 C18 30, 28 18, 40 14 Z"
              fill="url(#cauveryLeaf)"
            />
            <path d="M40 16 Q40 42 40 66" stroke="url(#cauveryGold)" strokeWidth="2" strokeLinecap="round" />
            <path d="M40 28 Q49 32 54 38" stroke="url(#cauveryGold)" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M40 28 Q31 32 26 38" stroke="url(#cauveryGold)" strokeWidth="1.2" strokeLinecap="round" />
            <circle cx="40" cy="13" r="2.5" fill="url(#cauveryGold)" />
          </svg>
        </div>

        {/* Wordmark with Sprouting 'Y' */}
        <div className="relative flex items-center justify-center">
          <span className="font-display text-4xl sm:text-5xl font-black tracking-[0.18em] text-forest dark:text-cream leading-none">
            CAUVER
          </span>

          {/* Artistic Y with leaf sprout */}
          <span className="relative font-display text-4xl sm:text-5xl font-black text-forest dark:text-cream leading-none">
            Y
            {/* Sprouting Two-Leaf Sprig on Y */}
            <svg
              className={`absolute -right-3.5 -top-2.5 w-8 h-8 pointer-events-none ${animated ? 'animate-leaf-sway' : ''}`}
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {SvgDefs}
              {/* Primary Leaf (Green) */}
              <path
                d="M6 26 C12 20, 18 13, 26 9 C30 8, 31 5, 29 3 C26 3, 20 7, 15 12 C10 17, 7 23, 6 26 Z"
                fill="url(#cauveryLeaf)"
              />
              <path d="M8 24 Q18 16 28 8" stroke="url(#cauveryGold)" strokeWidth="1" strokeLinecap="round" />
              
              {/* Secondary Leaf (Gold Sprout) */}
              <path
                d="M14 17 C19 13, 24 11, 29 11 C30 14, 27 18, 22 20 C18 21, 15 20, 14 17 Z"
                fill="url(#cauveryGold)"
              />
              <circle cx="30" cy="8" r="1.5" fill="url(#cauveryGold)" className="animate-ping" />
            </svg>
          </span>
        </div>
        
        {/* Tagline flanked by ornate floral leaf bars */}
        <div className="flex items-center gap-2.5 mt-2 w-full justify-center">
          <div className="flex items-center gap-1">
            <span className="text-[10px] text-leaf-vibrant dark:text-gold">🌿</span>
            <div className="h-[1.5px] w-8 sm:w-14 bg-gradient-to-r from-transparent via-gold to-leaf" />
          </div>

          <span className="text-[10px] sm:text-xs tracking-[0.3em] uppercase font-body font-extrabold text-forest/90 dark:text-gold-light whitespace-nowrap">
            The Art of Dosa &amp; Idli
          </span>

          <div className="flex items-center gap-1">
            <div className="h-[1.5px] w-8 sm:w-14 bg-gradient-to-r from-leaf via-gold to-transparent" />
            <span className="text-[10px] text-leaf-vibrant dark:text-gold">🌿</span>
          </div>
        </div>
      </div>
    );
  }

  // 3. Horizontal Variant (Header / Sticky Navbar)
  return (
    <div className={`flex items-center gap-3.5 select-none ${className}`}>
      {/* Ornate Medallion Icon */}
      <svg
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-10 h-10 shrink-0 ${animated ? 'transition-transform duration-300 group-hover:scale-105 group-hover:rotate-6' : ''}`}
      >
        {SvgDefs}
        {/* Outer Circular Ring with deep temple forest fill */}
        <circle cx="40" cy="40" r="37" fill="#0C2F1A" stroke="url(#cauveryGold)" strokeWidth="2.2" filter="url(#logoShadow)" />
        {/* Beaded ring */}
        <circle cx="40" cy="40" r="33.5" fill="none" stroke="url(#cauveryGold)" strokeWidth="0.8" strokeDasharray="2.5 3" opacity="0.8" />
        
        {/* Banana Leaf Center */}
        <path
          d="M40 14 C52 18, 62 30, 58 48 C55 60, 44 68, 40 69 C36 68, 25 60, 22 48 C18 30, 28 18, 40 14 Z"
          fill="url(#cauveryLeaf)"
        />
        {/* Veins */}
        <path d="M40 16 Q40 42 40 66" stroke="url(#cauveryGold)" strokeWidth="2" strokeLinecap="round" />
        <path d="M40 28 Q49 32 54 38" stroke="url(#cauveryGold)" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M40 28 Q31 32 26 38" stroke="url(#cauveryGold)" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M40 40 Q50 44 53 52" stroke="url(#cauveryGold)" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M40 40 Q30 44 27 52" stroke="url(#cauveryGold)" strokeWidth="1.2" strokeLinecap="round" />
        
        {/* Dosa Arc */}
        <circle cx="40" cy="40" r="23" fill="none" stroke="url(#cauveryGold)" strokeWidth="1.6" strokeDasharray="44 20" transform="rotate(-30 40 40)" />
        <circle cx="40" cy="13" r="2.5" fill="url(#cauveryGold)" />
      </svg>

      {/* Typography Block */}
      <div className="flex flex-col text-left justify-center">
        <div className="flex items-baseline">
          <span className="font-display text-2xl sm:text-3xl font-black tracking-[0.16em] text-forest dark:text-cream leading-none">
            CAUVER
          </span>

          {/* Letter 'Y' with Sprouting Foliage */}
          <span className="relative font-display text-2xl sm:text-3xl font-black text-forest dark:text-cream leading-none">
            Y
            <svg
              className="absolute -right-3 -top-2 w-6 h-6 pointer-events-none"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 23 C10 18, 15 12, 22 8 C26 7, 27 4, 25 3 C22 3, 17 6, 13 11 C9 15, 6 20, 5 23 Z"
                fill="url(#cauveryLeaf)"
              />
              <path
                d="M12 15 C16 11, 20 9, 25 9 C26 12, 23 15, 19 17 C15 18, 13 17, 12 15 Z"
                fill="url(#cauveryGold)"
              />
              <circle cx="26" cy="6" r="1.5" fill="url(#cauveryGold)" />
            </svg>
          </span>
        </div>

        {/* Subline with leaf icon */}
        <div className="flex items-center gap-1.5 mt-1">
          <span className="text-[10px] text-leaf-vibrant dark:text-gold leading-none">🌿</span>
          <span className="text-[9.5px] sm:text-[10.5px] tracking-[0.24em] uppercase font-body font-extrabold text-forest/80 dark:text-gold-light leading-none">
            The Art of Dosa &amp; Idli
          </span>
        </div>
      </div>
    </div>
  );
};
