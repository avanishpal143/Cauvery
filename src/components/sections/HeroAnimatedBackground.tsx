import React from 'react';

export const HeroAnimatedBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      {/* 1. Authentic High-Res Banana Leaf & South Indian Culinary Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-banana-leaf-bg.jpg"
          alt="Fresh Banana Leaf Backdrop"
          className="w-full h-full object-cover opacity-25 dark:opacity-15 mix-blend-multiply transition-opacity duration-700"
        />
        {/* Soft atmospheric gradient wash across the background to eliminate sterile white */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#B8E2BF]/35 via-[#E8F5EB]/60 to-[#FCFAF6] dark:from-espresso/80 dark:via-espresso/90 dark:to-espresso mix-blend-normal" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#B8E2BF]/30 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* 2. Warm Golden & Botanical Ambient Radial Gradients (Navbar Green + Logo Gold) */}
      <div className="absolute top-12 left-1/4 w-[38rem] h-[38rem] bg-[#B8E2BF]/40 dark:bg-emerald-600/12 rounded-full blur-[110px] animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-10 right-1/4 w-[34rem] h-[34rem] bg-gold/18 dark:bg-gold/10 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '10s' }} />
      <div className="absolute top-1/2 -right-20 w-[30rem] h-[30rem] bg-[#B8E2BF]/30 dark:bg-leaf/10 rounded-full blur-[90px]" />

      {/* 3. Traditional South Indian Kolam / Mandala Sacred Geometry (Slow Rotating Heritage Backdrop) */}
      <div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[580px] h-[580px] opacity-[0.07] dark:opacity-[0.09] transition-opacity">
        <svg
          viewBox="0 0 400 400"
          className="w-full h-full animate-spin-slow text-forest dark:text-gold"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
        >
          <circle cx="200" cy="200" r="180" strokeDasharray="4 6" />
          <circle cx="200" cy="200" r="140" />
          <circle cx="200" cy="200" r="100" strokeDasharray="6 4" />
          <circle cx="200" cy="200" r="60" />
          <circle cx="200" cy="200" r="20" />
          {/* 8-Petal Mandala Star */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
            <g key={deg} transform={`rotate(${deg} 200 200)`}>
              <path d="M200 20 C220 80, 220 140, 200 200 C180 140, 180 80, 200 20 Z" />
              <circle cx="200" cy="40" r="4" fill="currentColor" />
              <path d="M200 60 Q215 100 200 140" strokeDasharray="2 3" />
            </g>
          ))}
        </svg>
      </div>

      {/* 3. Floating South Indian Cafe Elements (Dosa, Idli, Curry Leaves, Filter Coffee, Spices) */}

      {/* Element 1: Golden Rolled Dosa Motif (Top Right) */}
      <div
        className="absolute top-24 right-[8%] sm:right-[15%] hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/70 dark:bg-white/5 border border-gold/30 backdrop-blur-md shadow-sm opacity-85 transition-all"
        style={{
          animation: 'floatSlow 7s ease-in-out infinite',
        }}
      >
        <span className="text-xl">🫓</span>
        <div className="flex flex-col">
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-forest dark:text-gold">
            Ghee Roast
          </span>
          <span className="text-[9px] text-forest/60 dark:text-cream/60">Crispy &amp; Golden</span>
        </div>
      </div>

      {/* Element 2: Jasmine-soft Malli-Poo Idli Motif (Bottom Left) */}
      <div
        className="absolute bottom-28 left-[6%] sm:left-[10%] hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/70 dark:bg-white/5 border border-leaf/30 backdrop-blur-md shadow-sm opacity-85 transition-all"
        style={{
          animation: 'floatSlow 8.5s ease-in-out infinite 1.5s',
        }}
      >
        <div className="w-5 h-5 rounded-full bg-cream border border-gold/40 flex items-center justify-center text-xs shadow-inner">
          ⚪
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-forest dark:text-cream">
            Malli-Poo Idli
          </span>
          <span className="text-[9px] text-leaf dark:text-leaf-light font-bold">Cloud Soft</span>
        </div>
      </div>

      {/* Element 3: Degree Filter Kaapi Tumbler (Top Left) */}
      <div
        className="absolute top-36 left-[3%] sm:left-[5%] hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/70 dark:bg-white/5 border border-copper/30 backdrop-blur-md shadow-sm opacity-80 transition-all"
        style={{
          animation: 'floatSlow 6.5s ease-in-out infinite 0.8s',
        }}
      >
        <span className="text-lg">☕</span>
        <div className="flex flex-col">
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-copper dark:text-gold-light">
            Filter Kaapi
          </span>
          <span className="text-[9px] text-forest/60 dark:text-cream/60">Degree Froth</span>
        </div>
      </div>

      {/* Element 4: Floating Fresh Banana & Curry Leaves Drift */}
      <div
        className="absolute top-1/4 left-[18%] text-emerald-600 opacity-70 text-2xl hidden sm:block select-none"
        style={{ animation: 'floatLeaf 9s ease-in-out infinite' }}
      >
        🍃
      </div>
      <div
        className="absolute bottom-1/4 right-[28%] text-emerald-600 opacity-65 text-xl hidden sm:block select-none"
        style={{ animation: 'floatLeaf 11s ease-in-out infinite 2s' }}
      >
        🌿
      </div>
      <div
        className="absolute top-2/3 left-[8%] text-emerald-500 opacity-60 text-lg hidden sm:block select-none"
        style={{ animation: 'floatLeaf 8.5s ease-in-out infinite 1.2s' }}
      >
        🍃
      </div>
      <div
        className="absolute top-1/2 right-[6%] text-emerald-600 opacity-60 text-xl hidden sm:block select-none"
        style={{ animation: 'floatLeaf 10s ease-in-out infinite 3s' }}
      >
        🌿
      </div>
      <div
        className="absolute top-3/4 right-[15%] text-chilli opacity-50 text-sm hidden sm:block select-none"
        style={{ animation: 'floatLeaf 8s ease-in-out infinite 3.5s' }}
      >
        🌶️
      </div>

      {/* 4. Warm Kitchen Bokeh Ember Particles */}
      {[
        { top: '18%', left: '42%', size: 'w-2 h-2', dur: '4s', delay: '0s' },
        { top: '65%', left: '15%', size: 'w-2.5 h-2.5', dur: '5s', delay: '1s' },
        { top: '40%', left: '85%', size: 'w-3 h-3', dur: '6s', delay: '2s' },
        { top: '78%', left: '60%', size: 'w-2 h-2', dur: '4.5s', delay: '1.5s' },
        { top: '25%', left: '72%', size: 'w-1.5 h-1.5', dur: '5.5s', delay: '0.5s' },
      ].map((pt, i) => (
        <div
          key={i}
          className={`absolute rounded-full bg-gold/50 blur-[1px] ${pt.size}`}
          style={{
            top: pt.top,
            left: pt.left,
            animation: `bokehPulse ${pt.dur} ease-in-out infinite ${pt.delay}`,
          }}
        />
      ))}

      {/* Dynamic Keyframes Injection */}
      <style>{`
        @keyframes floatSlow {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-14px) rotate(2deg);
          }
        }
        @keyframes floatLeaf {
          0%, 100% {
            transform: translateY(0px) rotate(0deg) scale(1);
          }
          50% {
            transform: translateY(-20px) rotate(15deg) scale(1.08);
          }
        }
        @keyframes bokehPulse {
          0%, 100% {
            opacity: 0.2;
            transform: scale(0.8) translateY(0);
          }
          50% {
            opacity: 0.85;
            transform: scale(1.3) translateY(-10px);
          }
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spinSlow 90s linear infinite;
        }
      `}</style>
    </div>
  );
};
