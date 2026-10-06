import React from 'react';
import { HeroPlatterShowcase } from './HeroPlatterShowcase';
import { HeroAnimatedBackground } from './HeroAnimatedBackground';
import { Sparkles, ArrowRight, Utensils, ShieldCheck, Clock, Flame } from 'lucide-react';

interface HeroSectionProps {
  onExploreMenu: () => void;
  onBookTable: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreMenu, onBookTable }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[95vh] lg:min-h-screen flex items-center pt-32 sm:pt-36 lg:pt-40 pb-20 sm:pb-24 lg:pb-28 overflow-hidden bg-gradient-to-b from-[#B8E2BF]/30 via-[#FCFAF6] to-[#B8E2BF]/15"
    >
      {/* Animated South Indian Cafe Background with floating elements, Kolam geometry, and warm bokeh */}
      <HeroAnimatedBackground />

      <div className="max-w-7xl xl:max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-20 items-center">
          
          {/* Left Column: Hero Typography & Actions (6 cols on lg) */}
          <div className="lg:col-span-6 z-10 flex flex-col items-start text-left space-y-6 sm:space-y-7 lg:space-y-8">
            
            {/* Top Tag & Location Badge with Lush Greenery Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-leaf-tender/90 dark:bg-espresso-card border border-leaf/30 dark:border-gold/30 shadow-xs animate-fade-in">
              <span className="text-sm">🌿</span>
              <span className="text-xs font-bold tracking-wider uppercase text-forest dark:text-cream">
                Pimpri Chinchwad, Pune • 100% Pure Veg Cafe
              </span>
            </div>

            {/* Huge Fraunces Headline with Rich Temple Green & Golden Accents */}
            <h1 className="font-display font-black text-4xl sm:text-6xl xl:text-7xl leading-[1.12] tracking-tight text-forest dark:text-cream">
              The Art of{' '}
              <span className="relative inline-block text-leaf-vibrant dark:text-gold italic font-normal">
                Dosa
                <span className="absolute left-0 -bottom-1 w-full h-[3.5px] bg-gradient-to-r from-gold via-leaf to-gold rounded-full" />
              </span>{' '}
              &amp;{' '}
              <span className="relative inline-block text-forest dark:text-cream">
                Idli
              </span>
            </h1>

            {/* Story Subheading with Culinary Authenticity */}
            <p className="font-body text-base sm:text-lg text-forest/85 dark:text-cream/80 max-w-xl leading-relaxed">
              24-hour slow-fermented batter, hand-spread across searing cast-iron tawas, bathed in aromatic cow ghee, and served on fresh banana leaves with three stone-ground chutneys &amp; piping hot sambar.
            </p>

            {/* Floating Highlights Badges in Lush Greenery Style */}
            <div className="flex flex-wrap gap-3 pt-1">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-300 text-xs font-bold text-forest shadow-xs">
                <span className="text-sm">🍃</span>
                <span>Served on Fresh Banana Leaf</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 border border-leaf/25 text-xs font-bold text-forest shadow-xs">
                <ShieldCheck className="w-4 h-4 text-leaf-vibrant" />
                <span>100% Pure Veg</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 border border-leaf/25 text-xs font-bold text-forest shadow-xs">
                <Flame className="w-4 h-4 text-chilli" />
                <span>Stone-Ground Chutneys</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 border border-leaf/25 text-xs font-bold text-forest shadow-xs">
                <Clock className="w-4 h-4 text-copper" />
                <span>Open 7 AM – 11 PM</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3 w-full sm:w-auto">
              <button
                onClick={onExploreMenu}
                className="btn-magnetic px-8 py-4 rounded-full bg-gradient-to-r from-leaf to-forest hover:from-leaf-light hover:to-leaf text-cream font-bold text-sm tracking-wider uppercase transition-all shadow-xl shadow-leaf/25 flex items-center justify-center gap-2.5 cursor-pointer group border border-gold/30 hover:scale-102 active:scale-98"
              >
                <Utensils className="w-4 h-4 text-gold-light" />
                <span>Explore Menu</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onBookTable}
                className="btn-magnetic px-8 py-4 rounded-full bg-white/90 hover:bg-leaf-tender dark:bg-transparent dark:hover:bg-gold/15 text-forest dark:text-cream font-bold text-sm tracking-wider uppercase transition-all border-2 border-gold cursor-pointer flex items-center justify-center gap-2 shadow-sm hover:scale-102 active:scale-98"
              >
                <Sparkles className="w-4 h-4 text-gold" />
                <span>Order / Book Table</span>
              </button>
            </div>

            {/* Social Proof Mini Bar */}
            <div className="pt-3 flex items-center gap-4.5 text-xs text-forest/70 dark:text-cream/70">
              <div className="flex -space-x-2">
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-cream dark:ring-espresso object-cover"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80"
                  alt="Customer"
                />
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-cream dark:ring-espresso object-cover"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80"
                  alt="Customer"
                />
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-cream dark:ring-espresso object-cover"
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=80&q=80"
                  alt="Customer"
                />
              </div>
              <div>
                <span className="font-bold text-forest dark:text-gold">4.9 / 5.0</span> ★ on Google
                <span className="block text-[10px] text-forest/50 dark:text-cream/50 mt-0.5">1,280+ happy diners in PCMC</span>
              </div>
            </div>

          </div>

          {/* Right Column: Realistic Interactive Feast Platter Showcase */}
          <div className="lg:col-span-6 relative flex items-center justify-center py-6 lg:py-8">
            <HeroPlatterShowcase />
          </div>

        </div>
      </div>

      {/* Subtle bottom scroll indicator with generous clearance */}
      <div className="absolute bottom-5 sm:bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity">
        <span className="text-[10px] uppercase tracking-widest font-mono text-forest/60 dark:text-cream/60">
          Scroll to explore
        </span>
        <div className="w-5 h-8 rounded-full border-2 border-forest/30 dark:border-cream/30 flex justify-center p-1">
          <div className="w-1 h-2 bg-gold rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};
