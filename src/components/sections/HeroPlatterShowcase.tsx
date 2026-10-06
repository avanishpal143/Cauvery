import React, { useState } from 'react';
import { Sparkles, Flame, CheckCircle2, Award } from 'lucide-react';

interface DishFeastView {
  id: string;
  name: string;
  tagline: string;
  image: string;
  badge: string;
  spiceLevel: string;
  highlights: string[];
}

const FEAST_DISHES: DishFeastView[] = [
  {
    id: 'royal-feast',
    name: 'Royal Banana Leaf Feast',
    tagline: 'Crispy Dosa, Malli-Poo Idli, 3 Chutneys, Sambar & Filter Kaapi',
    image: '/images/hero-dosa-idli-feast.jpg',
    badge: '★ Chef Special Platter',
    spiceLevel: 'Mild to Medium',
    highlights: ['24-Hr Fermentation', 'Desi Cow Ghee', 'Fresh Plantain Leaf'],
  },
  {
    id: 'ghee-dosa',
    name: 'Paper-Thin Ghee Masala Dosa',
    tagline: 'Cast-iron roasted till golden-crisp with spiced potato masala',
    image: '/images/crispy-masala-dosa.jpg',
    badge: '★ Cult Favorite',
    spiceLevel: 'Mild',
    highlights: ['Golden Caramel Crisp', '100% Pure Ghee', 'Stone-Crushed Chutney'],
  },
  {
    id: 'malli-idli',
    name: 'Jasmine-Soft Thatte Idli Sambar',
    tagline: 'Steamed to cloud-soft perfection with gunpowder ghee podi',
    image: '/images/steamed-idli-sambar.jpg',
    badge: '★ Soul of Cauvery',
    spiceLevel: 'Spicy Podi',
    highlights: ['Zero Baking Soda', 'Natural Probiotics', 'Shallot Sambar'],
  },
];

export const HeroPlatterShowcase: React.FC = () => {
  const [selectedDishIndex, setSelectedDishIndex] = useState(0);
  const activeDish = FEAST_DISHES[selectedDishIndex];

  return (
    <div className="relative w-full max-w-[560px] mx-auto select-none group">
      {/* 1. Ambient Pulsing Botanical Aura (Lush Banana Leaf Green & Ghee Gold Glow) */}
      <div
        className="absolute -inset-6 bg-gradient-to-tr from-[#2E7D32]/30 via-[#B8E2BF]/40 to-gold/25 rounded-3xl blur-3xl opacity-80 -z-10 animate-pulse"
        style={{ animationDuration: '6s' }}
      />

      {/* 2. Main Luxury Card Container */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-forest/20 border-2 border-[#2E7D32]/35 bg-white/95 dark:bg-espresso-card p-4 sm:p-5 backdrop-blur-md transition-all duration-500 hover:shadow-[0_25px_60px_-15px_rgba(46,125,50,0.3)]">
        
        {/* Platter Header with Interactive Dish Chips */}
        <div className="flex flex-col gap-3 pb-3.5 border-b border-leaf/15">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="text-xl">🍃</span>
              <div>
                <span className="text-xs sm:text-sm font-black text-forest dark:text-gold uppercase tracking-wider font-display block">
                  Authentic Plantain Leaf Platter
                </span>
                <span className="text-[11px] text-forest/70 dark:text-cream/60 font-body">
                  Served fresh from dawn till dusk
                </span>
              </div>
            </div>

            {/* Quality Seal Badge */}
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B8E2BF]/40 border border-leaf/30 text-[11px] font-extrabold text-forest shadow-xs">
              <Award className="w-3.5 h-3.5 text-leaf" />
              <span>Pune’s Best</span>
            </div>
          </div>

          {/* Dish Switcher Pills */}
          <div className="grid grid-cols-3 gap-2 p-1.5 rounded-2xl bg-[#B8E2BF]/30 dark:bg-white/5 border border-leaf/20">
            {FEAST_DISHES.map((dish, idx) => (
              <button
                key={dish.id}
                onClick={() => setSelectedDishIndex(idx)}
                className={`py-2 px-2.5 rounded-xl text-xs font-extrabold tracking-wide transition-all cursor-pointer truncate ${
                  selectedDishIndex === idx
                    ? 'bg-forest text-cream dark:bg-gold dark:text-forest shadow-md scale-102'
                    : 'text-forest/80 dark:text-cream/70 hover:bg-[#B8E2BF]/50'
                }`}
              >
                {dish.id === 'royal-feast' ? '🍱 Royal Feast' : dish.id === 'ghee-dosa' ? '🫓 Ghee Dosa' : '⚪ Thatte Idli'}
              </button>
            ))}
          </div>
        </div>

        {/* 3. Main High-Definition Food Feast Display */}
        <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[16/11] w-full mt-3.5 bg-forest/5 shadow-inner">
          <img
            key={activeDish.image}
            src={activeDish.image}
            alt={activeDish.name}
            className="w-full h-full object-cover rounded-2xl transition-all duration-700 ease-out group-hover:scale-105 animate-fade-in"
            loading="eager"
          />

          {/* Atmospheric Inner Shadow / Vignette for 3D Depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-transparent to-black/20 pointer-events-none rounded-2xl" />

          {/* Top Left Floating Tag */}
          <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-forest/90 backdrop-blur-md border border-leaf/40 text-cream text-[11px] font-bold shadow-lg">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>{activeDish.badge}</span>
          </div>

          {/* Top Right Live Sizzling Hot Pill */}
          <div className="absolute top-3.5 right-3.5 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-leaf to-forest backdrop-blur-md border border-gold/40 text-gold-light text-[11px] font-extrabold shadow-lg">
            <Flame className="w-3.5 h-3.5 text-chilli animate-pulse" />
            <span>Piping Hot</span>
          </div>

          {/* Bottom Overlay Info Banner with Dish Details */}
          <div className="absolute bottom-3.5 inset-x-3.5 p-3.5 rounded-2xl bg-white/95 dark:bg-espresso/95 backdrop-blur-md border border-leaf/25 dark:border-gold/30 shadow-xl text-forest dark:text-cream transition-all">
            <div className="flex items-center justify-between gap-2 mb-1">
              <h4 className="font-display font-black text-sm sm:text-base text-forest dark:text-cream truncate">
                {activeDish.name}
              </h4>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-leaf-tender text-leaf shrink-0 border border-leaf/20">
                {activeDish.spiceLevel}
              </span>
            </div>

            <p className="font-body text-[11px] sm:text-xs text-forest/80 dark:text-cream/70 line-clamp-1">
              {activeDish.tagline}
            </p>

            {/* Highlights Chips */}
            <div className="flex items-center gap-1.5 mt-2.5 overflow-x-auto no-scrollbar pt-1.5 border-t border-leaf/10 dark:border-white/10">
              {activeDish.highlights.map((h, i) => (
                <span
                  key={i}
                  className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-[#B8E2BF]/40 dark:bg-white/10 text-forest dark:text-gold shrink-0"
                >
                  ✓ {h}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 4. Bottom Quality Assurance Strip */}
        <div className="pt-3.5 pb-1 px-2 flex items-center justify-between text-xs text-forest/85 dark:text-cream/80 font-medium">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-bold text-[11px] sm:text-xs text-forest dark:text-cream">
              100% Desi Cow Ghee • Slow Fermented
            </span>
          </div>

          <div className="flex items-center gap-1 text-[11px] text-leaf dark:text-gold font-bold">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span>Stone-Ground Daily</span>
          </div>
        </div>
      </div>

      {/* Floating Mini Highlight Pills positioned cleanly with no overlap */}
      <div
        className="absolute -top-4 -left-3 sm:-left-6 hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white dark:bg-espresso border-2 border-leaf/40 text-forest dark:text-cream shadow-xl text-xs font-black backdrop-blur-md transform hover:scale-105 transition-transform z-20"
        style={{ animation: 'floatSlow 6s ease-in-out infinite' }}
      >
        <span className="text-base">🍃</span>
        <span>Fresh Banana Leaf</span>
      </div>

      <div
        className="absolute -bottom-5 right-2 sm:-right-4 hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white dark:bg-espresso border-2 border-gold/50 text-forest dark:text-cream shadow-xl text-xs font-black backdrop-blur-md transform hover:scale-105 transition-transform z-20"
        style={{ animation: 'floatSlow 7s ease-in-out infinite 1.2s' }}
      >
        <span className="text-base">✨</span>
        <span>A2 Desi Cow Ghee</span>
      </div>
    </div>
  );
};

