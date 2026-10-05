import React, { useEffect, useState } from 'react';

const SECTIONS = [
  { id: 'hero', label: 'Home' },
  { id: 'story', label: 'Story' },
  { id: 'signatures', label: 'Signatures' },
  { id: 'menu', label: 'Menu' },
  { id: 'gallery', label: 'Ambience' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'contact', label: 'Visit Us' },
];

export const ScrollStemProgress: React.FC = () => {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const current = (window.scrollY / totalScroll) * 100;
        setScrollPercent(Math.min(Math.max(current, 0), 100));
      }

      // Check active section
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTIONS[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.4) {
            setActiveSection(SECTIONS[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center">
      {/* Background stem vine track */}
      <div className="relative w-[3px] h-64 bg-forest/10 dark:bg-cream/10 rounded-full overflow-hidden">
        {/* Growing green/gold stem fill */}
        <div
          className="w-full bg-gradient-to-b from-gold via-leaf to-forest rounded-full transition-all duration-150 ease-out"
          style={{ height: `${scrollPercent}%` }}
        />
      </div>

      {/* Little leaf sprout at the top */}
      <div className="absolute -top-3 w-5 h-5 text-leaf dark:text-gold flex items-center justify-center pointer-events-none">
        <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
          <path d="M10 2C6 5 4 10 7 14C8.5 16 11.5 16 13 14C16 10 14 5 10 2Z" />
        </svg>
      </div>

      {/* Section leaf nodes */}
      <div className="absolute inset-0 flex flex-col justify-between py-2 items-center pointer-events-none">
        {SECTIONS.map((sec) => {
          const isActive = activeSection === sec.id;
          return (
            <div
              key={sec.id}
              className="relative group pointer-events-auto cursor-pointer"
              onClick={() => scrollToSection(sec.id)}
            >
              {/* Node dot */}
              <div
                className={`w-3 h-3 rounded-full transition-all duration-300 border ${
                  isActive
                    ? 'bg-gold border-forest dark:border-cream scale-125 shadow-[0_0_10px_#E8B04B]'
                    : 'bg-cream dark:bg-espresso border-forest/30 dark:border-gold/40 hover:scale-110'
                }`}
              />

              {/* Tooltip on hover */}
              <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap bg-forest dark:bg-espresso text-cream text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded shadow-md border border-gold/30">
                {sec.label}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
