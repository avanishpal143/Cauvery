import React, { useState, useEffect } from 'react';
import { CauveryLogo } from '../brand/CauveryLogo';
import { useTheme } from '../../hooks/useTheme';
import { useOpenNow } from '../../hooks/useOpenNow';
import { useCart } from '../../context/CartContext';
import { Sun, Moon, ShoppingBag, Menu as MenuIcon, X, Phone, Calendar } from 'lucide-react';

interface NavbarProps {
  onBookTableClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookTableClick }) => {
  const { theme, toggleTheme } = useTheme();
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
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-3 bg-cream/90 dark:bg-espresso/90 backdrop-blur-md shadow-lg border-b border-forest/10 dark:border-gold/20'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="group">
            <CauveryLogo variant="horizontal" animated className="transition-transform group-hover:scale-[1.02]" />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-forest/5 dark:bg-cream/5 border border-forest/10 dark:border-gold/15 backdrop-blur-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-semibold tracking-wider uppercase text-forest/80 dark:text-cream/80 hover:text-forest dark:hover:text-gold rounded-full transition-colors hover:bg-forest/5 dark:hover:bg-cream/10"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Icons & Badges */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Live Open/Closed indicator */}
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest/5 dark:bg-cream/5 border border-forest/10 dark:border-gold/20 text-[11px] font-medium">
              <span
                className={`w-2 h-2 rounded-full ${
                  isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-red-400'
                }`}
              />
              <span className="text-forest dark:text-cream/90">{statusText}</span>
            </div>

            {/* Dark / Light Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-forest dark:text-cream hover:bg-forest/10 dark:hover:bg-cream/10 transition-colors cursor-pointer border border-transparent hover:border-gold/30"
              aria-label="Toggle Dark/Light Mode"
              title={theme === 'dark' ? 'Switch to Light' : 'Switch to Dark'}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-gold hover:rotate-45 transition-transform" />
              ) : (
                <Moon className="w-4 h-4 text-forest hover:-rotate-12 transition-transform" />
              )}
            </button>

            {/* WhatsApp Cart Trigger */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-full bg-forest/10 dark:bg-cream/10 hover:bg-gold/20 text-forest dark:text-cream transition-all cursor-pointer border border-forest/10 dark:border-gold/30"
              aria-label="View Cart"
            >
              <ShoppingBag className="w-4 h-4" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-chilli text-cream text-[10px] font-bold flex items-center justify-center shadow-md animate-bounce">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Table Booking CTA */}
            <button
              onClick={onBookTableClick}
              className="hidden md:flex items-center gap-1.5 px-4 py-2 rounded-full bg-gold hover:bg-gold-light text-forest font-bold text-xs tracking-wider uppercase transition-all shadow-md hover:shadow-lg cursor-pointer transform hover:-translate-y-0.5"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Table</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full text-forest dark:text-cream hover:bg-forest/10 dark:hover:bg-cream/10 transition-colors cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden px-4 pt-3 pb-6 bg-cream dark:bg-espresso border-b border-forest/10 dark:border-gold/20 shadow-xl animate-in slide-in-from-top duration-300">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-sm font-semibold tracking-wide text-forest dark:text-cream hover:bg-sand dark:hover:bg-forest-dark transition-colors"
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
                  className="flex-1 py-3 rounded-xl bg-gold text-forest font-bold text-xs uppercase tracking-wider text-center shadow-md cursor-pointer"
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
