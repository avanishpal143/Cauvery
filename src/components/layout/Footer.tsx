import React from 'react';
import { CauveryLogo } from '../brand/CauveryLogo';
import { ArrowUp, Heart, Phone, Calendar, Clock, MapPin, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-[92%] sm:w-[88%] lg:w-[82%] mx-auto pb-20 lg:pb-12 pt-6">
      <footer className="rounded-[2.5rem] sm:rounded-[3.25rem] bg-gradient-to-b from-[#B8E2BF] via-[#AEE0B7] to-[#A4DAB0] text-[#12281a] relative p-8 sm:p-10 lg:p-12 overflow-hidden border-2 border-[#2E7D32]/30 shadow-2xl select-none">
        
        {/* Soft atmospheric ambient glow */}
        <div className="absolute top-0 right-1/4 w-80 h-48 bg-white/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-96 h-40 bg-gold/15 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10">
          
          {/* Top Main Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-8 border-b border-[#2E7D32]/25">
            
            {/* Col 1: Brand & Craft Identity (4.5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-3.5">
                <CauveryLogo variant="navbar" size="md" animated={true} />
                <div>
                  <h3 className="font-display font-black text-[#12281a] text-xl sm:text-2xl leading-tight tracking-wide">
                    CAUVERY CAFE
                  </h3>
                  <div className="inline-flex items-center gap-1.5 mt-0.5 px-2.5 py-0.5 rounded-full bg-forest/10 border border-forest/20 text-[#1b3d24] text-[11px] font-bold tracking-wider uppercase">
                    <Sparkles className="w-3 h-3 text-gold-dark" />
                    <span>Artisanal South Indian</span>
                  </div>
                </div>
              </div>

              <p className="font-body text-xs sm:text-sm text-[#183522]/90 leading-relaxed max-w-md font-medium">
                Celebrating the golden crispness of 24h slow-fermented dosas, jasmine-soft thatte idlis, and brass-tumbler degree filter kaapi in the heart of Pimpri Chinchwad, Pune.
              </p>

              {/* Social Connect Icons */}
              <div className="flex items-center gap-2.5 pt-1">
                <a
                  href="https://wa.me/919876543210?text=Namaskara%20Cauvery%20Cafe!%20I%20would%20like%20to%20inquire%20about%20today's%20menu%20specials."
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:bg-[#1EBE5D] transition-all shadow-xs hover:scale-110"
                  aria-label="Chat on WhatsApp"
                  title="Chat on WhatsApp"
                >
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.174.086.275.073.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086s1.011.477 1.184.564.289.13.332.203c.044.072.044.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.158.571 4.184 1.572 5.938l-1.669 6.096 6.275-1.644c1.701.929 3.652 1.458 5.731 1.458 6.627 0 12-5.373 12-12s-5.373-12-12-12zm0 21.6c-1.895 0-3.662-.519-5.181-1.42l-.372-.221-3.849 1.01 1.028-3.753-.243-.386c-.995-1.583-1.523-3.431-1.523-5.33 0-5.293 4.307-9.6 9.6-9.6s9.6 4.307 9.6 9.6c0 5.294-4.307 9.6-9.6 9.6z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-white/90 border border-[#2E7D32]/30 flex items-center justify-center text-forest hover:bg-forest hover:text-cream transition-all shadow-xs hover:scale-110"
                  aria-label="Instagram"
                  title="Instagram"
                >
                  <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-white/90 border border-[#2E7D32]/30 flex items-center justify-center text-forest hover:bg-forest hover:text-cream transition-all shadow-xs hover:scale-110"
                  aria-label="Facebook"
                  title="Facebook"
                >
                  <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-white/90 border border-[#2E7D32]/30 flex items-center justify-center text-forest hover:bg-forest hover:text-cream transition-all shadow-xs hover:scale-110"
                  aria-label="YouTube"
                  title="YouTube"
                >
                  <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Col 2: Quick Links (2.5 cols) */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="text-xs uppercase font-extrabold tracking-widest text-[#12281a] border-b border-[#2E7D32]/25 pb-1.5">
                Explore
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-[#183522]/90 font-semibold">
                <li>
                  <a href="#hero" className="hover:text-forest transition-colors flex items-center gap-1.5 hover:translate-x-1 duration-200">
                    <span className="text-leaf">›</span> Home
                  </a>
                </li>
                <li>
                  <a href="#story" className="hover:text-forest transition-colors flex items-center gap-1.5 hover:translate-x-1 duration-200">
                    <span className="text-leaf">›</span> Our Story &amp; Craft
                  </a>
                </li>
                <li>
                  <a href="#signatures" className="hover:text-forest transition-colors flex items-center gap-1.5 hover:translate-x-1 duration-200">
                    <span className="text-leaf">›</span> Signatures
                  </a>
                </li>
                <li>
                  <a href="#menu" className="hover:text-forest transition-colors flex items-center gap-1.5 hover:translate-x-1 duration-200">
                    <span className="text-leaf">›</span> Artisanal Menu
                  </a>
                </li>
                <li>
                  <a href="#gallery" className="hover:text-forest transition-colors flex items-center gap-1.5 hover:translate-x-1 duration-200">
                    <span className="text-leaf">›</span> Ambience
                  </a>
                </li>
                <li>
                  <a href="#reviews" className="hover:text-forest transition-colors flex items-center gap-1.5 hover:translate-x-1 duration-200">
                    <span className="text-leaf">›</span> Reviews
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: Visit & Timings (2.5 cols) */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="text-xs uppercase font-extrabold tracking-widest text-[#12281a] border-b border-[#2E7D32]/25 pb-1.5">
                Visit Us
              </h4>
              
              <div className="space-y-2 text-xs text-[#183522]">
                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                  <div>
                    <p className="font-extrabold text-sm text-[#12281a]">7:00 AM – 11:00 PM</p>
                    <span className="inline-block mt-0.5 text-[10px] uppercase font-extrabold px-2 py-0.5 rounded-full bg-forest text-cream">
                      Open All 7 Days
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2 pt-1.5">
                  <MapPin className="w-4 h-4 text-chilli shrink-0 mt-0.5" />
                  <p className="text-xs text-[#183522]/90 leading-relaxed font-medium">
                    Bansal Avenue, Shop No. 8, Opp. Chikli Town Hall, Pimpri Chinchwad, Pune - 411062.
                  </p>
                </div>
              </div>
            </div>

            {/* Col 4: Quick Order & Table Reservation (3 cols) */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-xs uppercase font-extrabold tracking-widest text-[#12281a] border-b border-[#2E7D32]/25 pb-1.5">
                Order &amp; Reserve
              </h4>
              <p className="text-xs text-[#183522]/85 leading-relaxed font-medium">
                Craving hot slow-fermented dosas or hosting family? Call directly or reserve online.
              </p>

              <div className="flex flex-col gap-2 pt-1">
                <a
                  href="tel:+919876543210"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-forest text-gold hover:bg-forest-dark transition-all text-xs sm:text-sm font-bold shadow-md hover:scale-102"
                >
                  <Phone className="w-4 h-4 text-gold" />
                  <span>Call +91 98765 43210</span>
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white/90 border border-[#2E7D32]/40 text-[#12281a] hover:bg-white transition-all text-xs sm:text-sm font-extrabold shadow-sm hover:scale-102"
                >
                  <Calendar className="w-4 h-4 text-forest" />
                  <span>Book Table Online</span>
                </a>
              </div>
            </div>

          </div>

          {/* Bottom Bar: Copyright & Scroll to Top */}
          <div className="pt-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#183522]/85 font-medium">
            <div className="flex items-center gap-1.5">
              <span>Made with</span>
              <Heart className="w-3.5 h-3.5 text-chilli fill-chilli" />
              <span>in Pune • 100% Pure Vegetarian &amp; Jain Options</span>
            </div>

            <p className="text-center">
              © {new Date().getFullYear()} Cauvery Cafe. All rights reserved. FSSAI Certified.
            </p>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/85 border border-[#2E7D32]/35 text-[#12281a] hover:bg-forest hover:text-cream transition-all cursor-pointer font-bold shadow-xs text-xs hover:scale-105"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </footer>
    </div>
  );
};
