import React from 'react';
import { Hero3DScene } from '../canvas/Hero3DScene';
import { Sparkles, ArrowRight, Utensils, ShieldCheck, Clock, Flame } from 'lucide-react';

interface HeroSectionProps {
  onExploreMenu: () => void;
  onBookTable: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreMenu, onBookTable }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center pt-24 pb-12 sm:pb-20 overflow-hidden"
    >
      {/* Background radial warmth & grain */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-leaf/10 dark:bg-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[30rem] h-[30rem] bg-gold/10 dark:bg-leaf/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Hero Typography & Actions (7 cols on lg) */}
          <div className="lg:col-span-6 z-10 flex flex-col items-start text-left space-y-6">
            
            {/* Top Tag & Location Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sand dark:bg-espresso-card border border-forest/15 dark:border-gold/30 shadow-sm animate-fade-in">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gold" />
              </span>
              <span className="text-xs font-semibold tracking-wider uppercase text-forest dark:text-cream">
                Pimpri Chinchwad, Pune • Pure Veg
              </span>
            </div>

            {/* Huge Fraunces Headline */}
            <h1 className="font-display font-black text-4xl sm:text-6xl xl:text-7xl leading-[1.08] tracking-tight text-forest dark:text-cream">
              The Art of{' '}
              <span className="relative inline-block text-leaf dark:text-gold italic font-normal">
                Dosa
                <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-gold/60 rounded-full" />
              </span>{' '}
              &amp;{' '}
              <span className="relative inline-block text-forest dark:text-cream">
                Idli
              </span>
            </h1>

            {/* Story Subheading */}
            <p className="font-body text-base sm:text-lg text-forest/75 dark:text-cream/80 max-w-xl leading-relaxed">
              24-hour slow-fermented batter, hand-spread across searing cast-iron tawas, roasted in pure cow ghee, and served with freshly ground chutneys &amp; piping hot sambar.
            </p>

            {/* Floating Highlights Badges */}
            <div className="flex flex-wrap gap-2.5 pt-1">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-forest/5 dark:bg-cream/5 border border-forest/10 dark:border-gold/20 text-xs font-semibold text-forest dark:text-cream">
                <ShieldCheck className="w-4 h-4 text-leaf dark:text-gold" />
                <span>100% Pure Veg</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-forest/5 dark:bg-cream/5 border border-forest/10 dark:border-gold/20 text-xs font-semibold text-forest dark:text-cream">
                <Flame className="w-4 h-4 text-chilli" />
                <span>Fresh Chutneys Daily</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-forest/5 dark:bg-cream/5 border border-forest/10 dark:border-gold/20 text-xs font-semibold text-forest dark:text-cream">
                <Clock className="w-4 h-4 text-copper dark:text-gold" />
                <span>Open till 11:00 PM</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-3 w-full sm:w-auto">
              <button
                onClick={onExploreMenu}
                className="btn-magnetic px-7 py-4 rounded-full bg-leaf hover:bg-forest text-cream font-bold text-sm tracking-wider uppercase transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2.5 cursor-pointer group"
              >
                <Utensils className="w-4 h-4" />
                <span>Explore Menu</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onBookTable}
                className="btn-magnetic px-7 py-4 rounded-full bg-transparent hover:bg-gold/15 text-forest dark:text-cream font-bold text-sm tracking-wider uppercase transition-all border-2 border-gold cursor-pointer flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-gold" />
                <span>Order / Book Table</span>
              </button>
            </div>

            {/* Social Proof Mini Bar */}
            <div className="pt-2 flex items-center gap-4 text-xs text-forest/70 dark:text-cream/70">
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
                <span className="block text-[10px] text-forest/50 dark:text-cream/50">1,280+ happy diners in PCMC</span>
              </div>
            </div>

          </div>

          {/* Right Column: 3D Canvas Experience (6 cols on lg) */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            {/* Ambient circular frame decoration */}
            <div className="absolute inset-0 max-w-md max-h-md mx-auto rounded-full border border-gold/20 -z-10 animate-spin-slow pointer-events-none" />
            
            {/* The 3D Scene */}
            <div className="w-full h-[400px] sm:h-[480px] lg:h-[550px] relative">
              <Hero3DScene />
            </div>
          </div>

        </div>
      </div>

      {/* Subtle bottom scroll indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity">
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
