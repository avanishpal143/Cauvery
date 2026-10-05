import React from 'react';

interface CauveryLogoProps {
  variant?: 'navbar' | 'footer' | 'icon' | 'badge' | 'stacked' | 'horizontal';
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  animated?: boolean;
  className?: string;
  isLightText?: boolean; // When placed on dark backgrounds (e.g., footer)
}

export const CauveryLogo: React.FC<CauveryLogoProps> = ({
  variant = 'navbar',
  size = 'md',
  animated = true,
  className = '',
  isLightText = false,
}) => {
  // Size presets tuned so that circular artwork, "Cauvery", and dosa are clearly visible
  const sizeMap = {
    sm: 'w-12 h-12 sm:w-14 sm:h-14',
    md: 'w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20', // Default navbar size: crisp & prominent
    lg: 'w-20 h-20 sm:w-24 sm:h-24',
    xl: 'w-24 h-24 sm:w-28 sm:h-28',
    '2xl': 'w-32 h-32 sm:w-36 sm:h-36',
  };

  const chosenSize =
    variant === 'footer'
      ? size === 'md'
        ? sizeMap.lg
        : sizeMap[size]
      : sizeMap[size];

  return (
    <div
      className={`relative inline-flex items-center justify-center select-none ${
        isLightText
          ? 'bg-[#FCFAF6] rounded-full p-1.5 shadow-xl ring-2 ring-gold/50'
          : 'bg-[#FCFAF6]/90 rounded-full p-1 shadow-sm ring-1 ring-gold/25 hover:ring-gold/60 hover:shadow-md'
      } transition-all duration-300 ${className}`}
    >
      <img
        src="/logo-removebg-preview.png"
        alt="Cauvery – The Art of Dosa & Idli"
        className={`${chosenSize} object-contain transition-transform duration-300 ${
          animated ? 'hover:scale-105' : ''
        }`}
        loading="eager"
        decoding="async"
      />
    </div>
  );
};

