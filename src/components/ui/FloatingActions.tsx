import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const FloatingActions: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 250);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      "Namaskara Cauvery Cafe! I would like to inquire about today's menu specials & table booking."
    );
    window.open(`https://wa.me/919876543210?text=${text}`, '_blank');
  };

  return (
    <>
      {/* LEFT: Floating WhatsApp Button */}
      <aside
        aria-label="WhatsApp quick contact"
        className="fixed bottom-20 lg:bottom-6 left-4 sm:left-6 z-40 flex items-center group select-none pointer-events-auto"
      >
        <button
          onClick={handleWhatsApp}
          className="relative flex items-center justify-center w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/35 hover:shadow-2xl hover:shadow-[#25D366]/50 hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white/60 cursor-pointer"
          aria-label="Chat on WhatsApp"
        >
          {/* Subtle pulse ring */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30 pointer-events-none" />
          
          {/* WhatsApp Authentic SVG Icon */}
          <svg className="w-6 h-6 fill-white relative z-10" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.174.086.275.073.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086s1.011.477 1.184.564.289.13.332.203c.044.072.044.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.158.571 4.184 1.572 5.938l-1.669 6.096 6.275-1.644c1.701.929 3.652 1.458 5.731 1.458 6.627 0 12-5.373 12-12s-5.373-12-12-12zm0 21.6c-1.895 0-3.662-.519-5.181-1.42l-.372-.221-3.849 1.01 1.028-3.753-.243-.386c-.995-1.583-1.523-3.431-1.523-5.33 0-5.293 4.307-9.6 9.6-9.6s9.6 4.307 9.6 9.6c0 5.294-4.307 9.6-9.6 9.6z" />
          </svg>
        </button>

        {/* Hover Pill Label on Desktop */}
        <div className="hidden lg:flex items-center ml-2.5 px-3 py-1.5 rounded-full bg-forest/90 dark:bg-cream/90 text-cream dark:text-forest text-xs font-bold tracking-wide shadow-lg border border-gold/30 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none">
          <span>Chat on WhatsApp</span>
        </div>
      </aside>

      {/* RIGHT: Floating Go To Top Button */}
      <aside
        aria-label="Scroll back to top"
        className={`fixed bottom-20 lg:bottom-6 right-4 sm:right-6 z-40 flex items-center group select-none transition-all duration-300 pointer-events-auto ${
          showScrollTop
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 translate-y-8 scale-75 pointer-events-none'
        }`}
      >
        {/* Hover Pill Label on Desktop */}
        <div className="hidden lg:flex items-center mr-2.5 px-3 py-1.5 rounded-full bg-forest/90 dark:bg-cream/90 text-cream dark:text-forest text-xs font-bold tracking-wide shadow-lg border border-gold/30 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none">
          <span>Go to Top</span>
        </div>

        <button
          onClick={scrollToTop}
          className="flex items-center justify-center w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-forest text-gold border-2 border-gold/40 shadow-xl shadow-forest/35 hover:shadow-2xl hover:bg-forest-dark hover:border-gold hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
          aria-label="Go to top of page"
        >
          <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6 text-gold transition-transform duration-300 group-hover:-translate-y-0.5" />
        </button>
      </aside>
    </>
  );
};
