import React, { useState } from 'react';
import { BananaLeafDosa3D } from '../canvas/BananaLeafDosa3D';
import { Sparkles, Flame, CheckCircle2, Box, Image as ImageIcon } from 'lucide-react';

export const HeroPlatterShowcase: React.FC = () => {
  const [viewMode, setViewMode] = useState<'3d' | 'photo'>('3d');

  return (
    <div className="relative w-full max-w-[540px] mx-auto select-none">
      {/* Ambient Pulsing Aura behind platter with Banana Leaf Green Glow */}
      <div
        className="absolute -inset-4 bg-gradient-to-tr from-emerald-500/20 via-leaf/25 to-gold/20 rounded-full blur-2xl opacity-75 -z-10 animate-pulse"
        style={{ animationDuration: '6s' }}
      />

      {/* Main Container Card */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-forest/15 border-2 border-leaf/30 bg-white/95 p-2 sm:p-3 transition-all duration-300">
        
        {/* View Mode Switcher Header: 3D Dosa vs HD Photo */}
        <div className="flex items-center justify-between gap-2 px-2 pb-2.5 pt-1 border-b border-leaf/15">
          <div className="flex items-center gap-1.5">
            <span className="text-base">🍃</span>
            <span className="text-xs font-bold text-forest uppercase tracking-wider font-display">
              Banana Leaf Platter
            </span>
          </div>

          {/* Toggle Pills */}
          <div className="flex items-center p-0.5 rounded-full bg-leaf-tender border border-leaf/25 text-xs font-bold shadow-inner">
            <button
              onClick={() => setViewMode('3d')}
              className={`flex items-center gap-1 px-3 py-1 rounded-full transition-all cursor-pointer ${
                viewMode === '3d'
                  ? 'bg-leaf text-cream shadow-sm scale-102'
                  : 'text-forest/80 hover:text-forest'
              }`}
            >
              <Box className="w-3.5 h-3.5" />
              <span>3D Model</span>
            </button>

            <button
              onClick={() => setViewMode('photo')}
              className={`flex items-center gap-1 px-3 py-1 rounded-full transition-all cursor-pointer ${
                viewMode === 'photo'
                  ? 'bg-leaf text-cream shadow-sm scale-102'
                  : 'text-forest/80 hover:text-forest'
              }`}
            >
              <ImageIcon className="w-3.5 h-3.5" />
              <span>HD Feast</span>
            </button>
          </div>
        </div>

        {/* Content View: 3D Canvas OR HD Image */}
        <div className="relative rounded-2xl overflow-hidden aspect-square w-full mt-2 bg-sand/20">
          {viewMode === '3d' ? (
            <BananaLeafDosa3D className="w-full h-full" autoRotate={true} />
          ) : (
            <div className="relative w-full h-full">
              <img
                src="/images/hero-dosa-feast.jpg"
                alt="Cauvery Signature South Indian Feast Platter"
                className="w-full h-full object-cover rounded-2xl transition-transform duration-700 ease-out hover:scale-105"
                loading="eager"
              />

              {/* Badges on Photo */}
              <div className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest/90 backdrop-blur-md border border-gold/40 text-gold text-xs font-bold shadow-lg">
                <Flame className="w-3.5 h-3.5 text-chilli animate-pulse" />
                <span>Sizzling Hot</span>
              </div>

              <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest/90 backdrop-blur-md border border-leaf/40 text-cream text-xs font-semibold shadow-lg">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>100% Pure Ghee</span>
              </div>

              <div className="absolute bottom-3 inset-x-3 flex items-center justify-between gap-2 p-2 rounded-xl bg-forest/95 backdrop-blur-md border border-gold/30 shadow-lg text-cream">
                <div className="flex items-center gap-1.5 min-w-0">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                  <span className="text-xs font-bold text-cream truncate">
                    Authentic Royal Thali
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-gold font-medium shrink-0">
                  <Sparkles className="w-3 h-3" />
                  <span>Served Fresh</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Status Ribbon with Banana Leaf Guarantee */}
        <div className="pt-2.5 pb-1 px-2 flex items-center justify-between text-[11px] text-forest/80">
          <div className="flex items-center gap-1.5">
            <span className="text-xs">🌿</span>
            <span className="font-semibold text-forest">
              Traditional Plantain Leaf Serving
            </span>
          </div>
          <span className="text-leaf font-bold text-[10px] tracking-wider uppercase bg-leaf-tender px-2.5 py-0.5 rounded-full border border-leaf/20">
            ✦ Pure Cow Ghee
          </span>
        </div>
      </div>

      {/* Floating Mini Highlight Pills Outside Platter */}
      <div
        className="absolute -top-3 -left-4 sm:-left-6 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-leaf/30 text-forest shadow-xl text-xs font-bold backdrop-blur-md"
        style={{ animation: 'floatSlow 6s ease-in-out infinite' }}
      >
        <span className="text-emerald-500">🍃</span>
        <span>Fresh Banana Leaf</span>
      </div>

      <div
        className="absolute -bottom-3 -right-4 sm:-right-6 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-gold/40 text-forest shadow-xl text-xs font-bold backdrop-blur-md"
        style={{ animation: 'floatSlow 7s ease-in-out infinite 1.2s' }}
      >
        <span className="text-gold">✨</span>
        <span>A2 Desi Cow Ghee</span>
      </div>
    </div>
  );
};
