import React, { useState, useEffect } from 'react';
import { CauveryLogo } from '../brand/CauveryLogo';
import { useOpenNow } from '../../hooks/useOpenNow';
import { useCart } from '../../context/CartContext';
import { ShoppingBag, Menu as MenuIcon, X, Phone, Calendar } from 'lucide-react';

interface NavbarProps {
  onBookTableClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookTableClick }) => {
  const { isOpen, statusText } = useOpenNow();
  const { totalItems, setIsCartOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#hero', label: 'Home' },
    { href: '#story', label: 'Our Story' },
    { href: '#signatures', label: 'Signatures' },
    { href: '#menu', label: 'Menu' },
    { href: '#gallery', label: 'Ambience' },
    { href: '#reviews', label: 'Reviews' },
    { href: '#contact', label: 'Visit' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-in-out pointer-events-none ${
          isScrolled ? 'pt-2.5 sm:pt-4 px-3 sm:px-6 md:px-8' : 'pt-0 px-0'
        }`}
      >
        <div
          className={`mx-auto transition-all duration-500 ease-in-out pointer-events-auto flex items-center justify-between ${
            isScrolled
              ? 'max-w-5xl lg:max-w-6xl rounded-full bg-[#B8E2BF]/95 dark:bg-espresso/95 backdrop-blur-md border border-[#2E7D32]/35 dark:border-gold/30 shadow-xl shadow-[#2E7D32]/20 py-2 sm:py-2.5 px-4 sm:px-6'
              : 'max-w-full rounded-none bg-[#B8E2BF] dark:bg-espresso border-b border-[#2E7D32]/25 dark:border-gold/20 shadow-sm py-3.5 sm:py-4 px-4 sm:px-6 lg:px-8'
          }`}
        >
          {/* Logo */}
          <a href="#hero" className="group flex items-center focus:outline-none" aria-label="Cauvery">
            <CauveryLogo
              variant="navbar"
              animated
              className={`transition-all duration-300 ${isScrolled ? 'scale-90' : 'scale-100'}`}
            />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-cream/5 border border-leaf/25 dark:border-gold/20 shadow-sm backdrop-blur-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-1.5 text-[13px] font-extrabold tracking-wider uppercase text-forest dark:text-cream/90 hover:text-leaf-vibrant dark:hover:text-gold rounded-full transition-all hover:bg-leaf-tender/80 dark:hover:bg-cream/10 active:scale-95"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Icons & Badges */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Live Open/Closed indicator */}
            <div className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 dark:bg-cream/10 border border-leaf/30 dark:border-gold/30 text-xs font-extrabold text-forest dark:text-cream/90 shadow-xs">
              <span
                className={`w-2.5 h-2.5 rounded-full ${
                  isOpen ? 'bg-emerald-600 animate-pulse ring-2 ring-emerald-300' : 'bg-red-500'
                }`}
              />
              <span className="tracking-wide">{statusText}</span>
            </div>

            {/* WhatsApp Cart Trigger */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 sm:p-3 rounded-full bg-white/95 dark:bg-cream/10 hover:bg-white text-forest dark:text-cream transition-all cursor-pointer border border-leaf/30 dark:border-gold/30 shadow-xs hover:shadow-md hover:scale-105 active:scale-95"
              aria-label="View Cart"
            >
              <ShoppingBag className="w-5 h-5 text-leaf-vibrant dark:text-gold stroke-[2.2]" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-chilli text-cream text-[11px] font-extrabold flex items-center justify-center shadow-md animate-bounce">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Table Booking CTA */}
            <button
              onClick={onBookTableClick}
              className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-leaf to-forest hover:from-leaf-light hover:to-leaf text-cream font-extrabold text-[13px] tracking-wider uppercase transition-all shadow-md shadow-forest/20 hover:shadow-xl cursor-pointer transform hover:-translate-y-0.5 active:scale-95 border border-gold/50"
            >
              <Calendar className="w-4 h-4 text-gold-light stroke-[2.2]" />
              <span>Book Table</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-full text-forest dark:text-cream bg-white/85 dark:bg-cream/10 hover:bg-white border border-leaf/25 shadow-xs transition-all cursor-pointer active:scale-95"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 stroke-[2.2]" /> : <MenuIcon className="w-6 h-6 stroke-[2.2]" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            className={`lg:hidden pointer-events-auto mx-auto mt-2 px-4 pt-3 pb-6 bg-[#B8E2BF] dark:bg-espresso border border-[#2E7D32]/30 dark:border-gold/20 shadow-2xl animate-in slide-in-from-top duration-300 ${
              isScrolled ? 'max-w-5xl rounded-3xl' : 'rounded-b-2xl max-w-full'
            }`}
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-[15px] font-extrabold tracking-wide text-forest dark:text-cream hover:bg-white/70 transition-colors"
                >
                  {link.label}
                </a>
              ))}

              <div className="pt-3 border-t border-forest/10 dark:border-cream/10 flex items-center gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onBookTableClick();
                  }}
                  className="flex-1 py-3 rounded-xl bg-gradient-to-r from-leaf to-forest text-cream font-extrabold text-xs uppercase tracking-wider text-center shadow-md cursor-pointer border border-gold/40"
                >
                  Book Table / Order
                </button>
                <a
                  href="tel:+919876543210"
                  className="p-3 rounded-xl bg-forest dark:bg-cream text-cream dark:text-forest flex items-center justify-center"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
