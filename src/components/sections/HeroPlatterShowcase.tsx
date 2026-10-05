import React, { useState, useRef } from 'react';
import { Sparkles, Flame, CheckCircle2 } from 'lucide-react';

export const HeroPlatterShowcase: React.FC = () => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 12, y: -y * 12 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[540px] mx-auto select-none perspective-[1200px]"
    >
      {/* Ambient Pulsing Aura behind platter */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-gold/25 via-leaf/20 to-amber-500/20 rounded-full blur-2xl opacity-75 -z-10 animate-pulse" style={{ animationDuration: '6s' }} />

      {/* Main 3D Card Shell with Tilting Physics */}
      <div
        style={{
          transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg) scale(${isHovered ? 1.02 : 1})`,
          transition: isHovered ? 'transform 0.15s ease-out' : 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)',
        }}
        className="relative rounded-3xl overflow-hidden shadow-2xl shadow-forest/20 dark:shadow-black/70 border-2 border-gold/50 bg-white/95 dark:bg-espresso-card p-2 sm:p-2.5 transition-all"
      >
        {/* Platter Frame */}
        <div className="relative rounded-2xl overflow-hidden aspect-square w-full bg-sand/20">
          <img
            src="/images/hero-dosa-feast.jpg"
            alt="Cauvery Signature South Indian Feast Platter"
            className="w-full h-full object-cover rounded-2xl transition-transform duration-700 ease-out hover:scale-105"
            loading="eager"
          />

          {/* Delicate Top & Bottom Badges (No dark murky overlays on the food!) */}
          <div className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest/90 dark:bg-espresso/90 backdrop-blur-md border border-gold/40 text-gold text-xs font-bold shadow-lg">
            <Flame className="w-3.5 h-3.5 text-chilli animate-pulse" />
            <span>Sizzling Hot</span>
          </div>

          <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest/90 dark:bg-espresso/90 backdrop-blur-md border border-leaf/40 text-cream text-xs font-semibold shadow-lg">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>100% Pure Ghee</span>
          </div>

          {/* Bottom Interactive Quick-Tags (Neat, clean ribbon at bottom) */}
          <div className="absolute bottom-3 inset-x-3 flex items-center justify-between gap-2 p-2 rounded-xl bg-forest/95 dark:bg-espresso/95 backdrop-blur-md border border-gold/30 shadow-lg text-cream">
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

        {/* Bottom Status Ribbon */}
        <div className="pt-2.5 pb-1 px-2 flex items-center justify-between text-[11px] text-forest/70 dark:text-cream/70">
          <span className="font-semibold">Crispy Dosa • Soft Idlis • Sambar • Chutneys</span>
          <span className="text-leaf-vibrant dark:text-gold font-bold text-[10px] tracking-wider uppercase">
            ✦ Prepared Live
          </span>
        </div>
      </div>

      {/* Floating Mini Highlight Pills Outside Platter */}
      <div
        className="absolute -top-3 -left-4 sm:-left-6 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 dark:bg-forest-dark/95 border border-gold/40 text-forest dark:text-cream shadow-xl text-xs font-bold backdrop-blur-md"
        style={{ animation: 'floatSlow 6s ease-in-out infinite' }}
      >
        <span className="text-gold">✨</span>
        <span>Pure Cow Ghee</span>
      </div>

      <div
        className="absolute -bottom-3 -right-4 sm:-right-6 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 dark:bg-forest-dark/95 border border-leaf/40 text-forest dark:text-cream shadow-xl text-xs font-bold backdrop-blur-md"
        style={{ animation: 'floatSlow 7s ease-in-out infinite 1.2s' }}
      >
        <span className="text-emerald-500">🥥</span>
        <span>Stone-Ground Chutneys</span>
      </div>
    </div>
  );
};
