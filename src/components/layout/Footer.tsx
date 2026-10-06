import React from 'react';
import { CauveryLogo } from '../brand/CauveryLogo';
import { ArrowUp, Heart, Phone, Calendar } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pb-20 lg:pb-8 pt-2">
      <footer className="rounded-[2.25rem] sm:rounded-[3rem] bg-[#B8E2BF] text-forest relative py-6 sm:py-7 px-5 sm:px-8 lg:px-10 overflow-hidden border-2 border-[#2E7D32]/30 shadow-2xl select-none">
        {/* Background ambient botanical aura matching navbar */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-96 h-40 bg-white/35 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -top-10 right-8 w-60 h-40 bg-gold/15 rounded-full blur-xl pointer-events-none" />

        <div className="relative z-10">
          {/* Main Footer Grid - Compact & Balanced */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 pb-5 border-b border-[#2E7D32]/25 items-center">
            
            {/* Col 1: Brand & Socials (4 cols) */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start gap-3">
              <div className="flex items-center gap-3">
                <CauveryLogo variant="navbar" size="sm" animated={true} />
                <div>
                  <h3 className="font-display font-black text-forest text-base leading-tight tracking-wide">
                    CAUVERY CAFE
                  </h3>
                  <p className="text-[11px] font-semibold text-leaf tracking-wider uppercase">
                    100% Pure Veg • Artisanal South
                  </p>
                </div>
              </div>

              <p className="font-body text-xs text-forest/80 line-clamp-2 max-w-xs font-medium">
                Slow-fermented dosas, jasmine-soft idlis &amp; degree filter kaapi in Pimpri Chinchwad.
              </p>

              <div className="flex items-center gap-2 pt-0.5">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full bg-white/85 border border-[#2E7D32]/30 flex items-center justify-center text-forest hover:bg-forest hover:text-cream transition-all shadow-xs hover:scale-110"
                  aria-label="Instagram"
                >
                  <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full bg-white/85 border border-[#2E7D32]/30 flex items-center justify-center text-forest hover:bg-forest hover:text-cream transition-all shadow-xs hover:scale-110"
                  aria-label="Facebook"
                >
                  <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full bg-white/85 border border-[#2E7D32]/30 flex items-center justify-center text-forest hover:bg-forest hover:text-cream transition-all shadow-xs hover:scale-110"
                  aria-label="YouTube"
                >
                  <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Col 2: Quick Links (3 cols - 2 compact sub-columns) */}
            <div className="lg:col-span-3">
              <h4 className="text-[11px] uppercase font-extrabold tracking-widest text-forest mb-2">
                Quick Links
              </h4>
              <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-xs text-forest/85 font-semibold">
                <a href="#hero" className="hover:text-leaf-vibrant transition-colors">Home</a>
                <a href="#signatures" className="hover:text-leaf-vibrant transition-colors">Signatures</a>
                <a href="#story" className="hover:text-leaf-vibrant transition-colors">Our Story</a>
                <a href="#menu" className="hover:text-leaf-vibrant transition-colors">Menu</a>
                <a href="#gallery" className="hover:text-leaf-vibrant transition-colors">Ambience</a>
                <a href="#reviews" className="hover:text-leaf-vibrant transition-colors">Reviews</a>
              </div>
            </div>

            {/* Col 3: Visit & Timings (2 cols) */}
            <div className="lg:col-span-2">
              <h4 className="text-[11px] uppercase font-extrabold tracking-widest text-forest mb-1.5">
                Timings
              </h4>
              <p className="font-extrabold text-xs text-forest">7:00 AM – 11:00 PM</p>
              <p className="text-[11px] font-semibold text-leaf">Open All 7 Days</p>
              <p className="text-[11px] text-forest/75 mt-1 leading-snug line-clamp-2">
                Bansal Ave, Opp. Chikli Town Hall, PCMC, Pune.
              </p>
            </div>

            {/* Col 4: Quick Action Pills (3 cols) */}
            <div className="lg:col-span-3 flex flex-col sm:flex-row lg:flex-col gap-2">
              <a
                href="tel:+919876543210"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-forest text-gold hover:bg-forest-dark transition-all text-xs font-bold shadow-xs hover:scale-102"
              >
                <Phone className="w-3.5 h-3.5 text-gold" />
                <span>Call +91 98765 43210</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-[#2E7D32]/35 text-forest hover:bg-white transition-all text-xs font-extrabold shadow-xs hover:scale-102"
              >
                <Calendar className="w-3.5 h-3.5 text-leaf" />
                <span>Book Table Online</span>
              </a>
            </div>

          </div>

          {/* Bottom Bar: Copyright & Scroll to Top */}
          <div className="pt-3.5 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-[11px] sm:text-xs text-forest/75 font-medium">
            <div className="flex items-center gap-1.5">
              <span>Made with</span>
              <Heart className="w-3.5 h-3.5 text-chilli fill-chilli" />
              <span>in Pune • 100% Pure Vegetarian</span>
            </div>

            <p className="text-center">
              © {new Date().getFullYear()} Cauvery Cafe. FSSAI Certified.
            </p>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/85 border border-[#2E7D32]/30 text-forest hover:bg-forest hover:text-cream transition-all cursor-pointer font-bold shadow-xs text-xs hover:scale-105"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>

        </div>
      </footer>
    </div>
  );
};
