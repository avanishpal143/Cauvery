import React, { useState, useRef } from 'react';
import { Sparkles, Flame, CheckCircle2 } from 'lucide-react';

interface Hotspot {
  id: string;
  name: string;
  desc: string;
  top: string;
  left: string;
}

const hotspots: Hotspot[] = [
  {
    id: 'dosa',
    name: 'Ghee Roast Dosa',
    desc: 'Golden crisp, 24-hr fermented batter, glistening pure cow ghee',
    top: '52%',
    left: '56%',
  },
  {
    id: 'idli',
    name: 'Malli-Poo Idli',
    desc: 'Steamed jasmine-soft idlis drizzled with podi & ghee',
    top: '58%',
    left: '24%',
  },
  {
    id: 'sambar',
    name: 'Drumstick Sambar',
    desc: 'Piping hot, slow-simmered with roasted whole spices & tamarind',
    top: '28%',
    left: '32%',
  },
  {
    id: 'chutney',
    name: 'Coconut Chutney',
    desc: 'Stone-ground coconut with mustard seed & curry leaf tadka',
    top: '25%',
    left: '54%',
  },
];

export const HeroPlatterShowcase: React.FC = () => {
  const [activeSpot, setActiveSpot] = useState<Hotspot | null>(null);
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
        className="relative rounded-3xl overflow-hidden shadow-2xl shadow-forest/25 dark:shadow-black/70 border-2 border-gold/40 bg-forest-dark p-2 sm:p-3"
      >
        {/* Brass Frame Accent Rings */}
        <div className="relative rounded-2xl overflow-hidden aspect-square w-full">
          <img
            src="/images/hero-dosa-feast.jpg"
            alt="Cauvery Signature Dosa & Idli Feast"
            className="w-full h-full object-cover rounded-2xl transition-transform duration-700 ease-out hover:scale-105"
            loading="eager"
          />

          {/* Golden Ghee & Warm Steam Glow Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/85 via-transparent to-black/20 pointer-events-none" />

          {/* Animated Steam Plumes Rising Over the Hot Platter */}
          <div className="absolute inset-x-0 bottom-1/4 h-2/3 pointer-events-none overflow-hidden opacity-75">
            {[0, 1, 2, 3].map((s) => (
              <div
                key={s}
                className="absolute w-24 h-48 bg-gradient-to-t from-white/20 via-white/10 to-transparent rounded-full blur-xl animate-steam"
                style={{
                  left: `${20 + s * 22}%`,
                  bottom: '10%',
                  animationDuration: `${3.5 + s * 0.8}s`,
                  animationDelay: `${s * 0.9}s`,
                }}
              />
            ))}
          </div>

          {/* Interactive Hotspot Pins on Food Items */}
          {hotspots.map((spot) => (
            <div
              key={spot.id}
              className="absolute z-20 -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
              style={{ top: spot.top, left: spot.left }}
              onClick={() => setActiveSpot(activeSpot?.id === spot.id ? null : spot)}
              onMouseEnter={() => setActiveSpot(spot)}
            >
              {/* Pulsing Pin Marker */}
              <div className="relative flex items-center justify-center">
                <span className="absolute w-6 h-6 rounded-full bg-gold/40 animate-ping" />
                <span className="relative w-7 h-7 rounded-full bg-forest border-2 border-gold text-gold text-xs font-bold flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                  ✦
                </span>
              </div>
            </div>
          ))}

          {/* Active Hotspot Info Card Tooltip */}
          {activeSpot && (
            <div
              className="absolute z-30 bottom-4 inset-x-4 p-3.5 rounded-xl bg-forest-dark/95 border border-gold/40 backdrop-blur-md shadow-2xl animate-fade-in text-cream flex items-start gap-3"
            >
              <div className="w-8 h-8 rounded-lg bg-gold/15 border border-gold/40 flex items-center justify-center text-gold shrink-0">
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold font-display text-gold tracking-wide">
                    {activeSpot.name}
                  </h4>
                  <button
                    onClick={() => setActiveSpot(null)}
                    className="text-[10px] text-cream/60 hover:text-cream px-1"
                  >
                    ✕
                  </button>
                </div>
                <p className="text-[11px] text-cream/80 mt-0.5 leading-snug">
                  {activeSpot.desc}
                </p>
              </div>
            </div>
          )}

          {/* Top-Right Badge: Fresh From Tawa */}
          <div className="absolute top-3.5 right-3.5 flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest-dark/85 backdrop-blur-md border border-gold/30 text-gold text-[11px] font-bold shadow-lg">
            <Flame className="w-3.5 h-3.5 text-chilli animate-pulse" />
            <span>Sizzling Hot</span>
          </div>

          {/* Bottom-Left Micro Badge */}
          <div className="absolute bottom-3.5 left-3.5 flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest-dark/85 backdrop-blur-md border border-leaf/40 text-cream text-[11px] font-medium shadow-lg">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Freshly Ground Batter</span>
          </div>
        </div>

        {/* Bottom Status Ribbon */}
        <div className="pt-2.5 pb-1 px-2 flex items-center justify-between text-[11px] text-cream/75">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold text-cream">Authentic South Indian Platter</span>
          </div>
          <span className="text-gold font-mono text-[10px] tracking-wider uppercase">
            ✦ Tap Pins to Explore
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
