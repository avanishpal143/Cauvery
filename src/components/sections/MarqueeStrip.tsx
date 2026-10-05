import React from 'react';
import { useScrollVelocity } from '../../hooks/useScrollVelocity';

export const MarqueeStrip: React.FC = () => {
  const velocity = useScrollVelocity();
  
  // Calculate dynamic animation duration based on scroll velocity
  const baseDuration = 22; // seconds
  const speedBoost = Math.min(Math.abs(velocity) * 8, 14);
  const currentDuration = Math.max(baseDuration - speedBoost, 6);

  const marqueeItems = [
    'Crispy Golden Dosa',
    'Malli-Poo Soft Idli',
    'Brass Davara Filter Kaapi',
    'Fresh Coconut Chutney',
    'Gunpowder Ghee Podi',
    '24-Hour Sourdough Batter',
    'Pure Cow Ghee Roast',
    'Shallot Drumstick Sambar',
  ];

  return (
    <div className="relative py-4 sm:py-5 overflow-hidden bg-forest text-cream dark:bg-espresso-card border-y border-gold/30 shadow-inner select-none">
      {/* Vein pattern accent */}
      <div className="flex w-max space-x-8 items-center animate-marquee"
           style={{ animationDuration: `${currentDuration}s` }}>
        {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => (
          <div key={idx} className="flex items-center space-x-6 shrink-0">
            <span className="font-display text-base sm:text-xl font-bold tracking-widest uppercase text-cream/90 hover:text-gold transition-colors">
              {item}
            </span>
            <span className="text-gold text-sm sm:text-lg animate-spin-slow">✦</span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-marquee {
          animation: marquee linear infinite;
        }
      `}</style>
    </div>
  );
};
