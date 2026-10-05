import { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { CartProvider } from './context/CartContext';
import { Preloader } from './components/layout/Preloader';
import { CustomCursor } from './components/ui/CustomCursor';
import { ScrollStemProgress } from './components/ui/ScrollStemProgress';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { MarqueeStrip } from './components/sections/MarqueeStrip';
import { StorySection } from './components/sections/StorySection';
import { SignatureDishes } from './components/sections/SignatureDishes';
import { OffersStrip } from './components/sections/OffersStrip';
import { MenuSection } from './components/sections/MenuSection';
import { GallerySection } from './components/sections/GallerySection';
import { ReviewsSection } from './components/sections/ReviewsSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/layout/Footer';
import { MobileActionBar } from './components/layout/MobileActionBar';
import { CartDrawer } from './components/cart/CartDrawer';

export function App() {
  const [loading, setLoading] = useState(true);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  const handleScrollToMenu = () => {
    const el = document.getElementById('menu');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToBooking = () => {
    const el = document.getElementById('contact');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <CartProvider>
      {/* 1. Preloader */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      <div className="relative min-h-screen bg-cream dark:bg-espresso text-forest dark:text-cream selection:bg-gold/30 selection:text-forest transition-colors duration-400 bg-grain">
        {/* Custom Gold Cursor for Desktop */}
        <CustomCursor />

        {/* Leaf Stem Scroll Progress Bar */}
        <ScrollStemProgress />

        {/* Sticky Glassmorphic Navbar */}
        <Navbar onBookTableClick={handleScrollToBooking} />

        {/* Main Content Layout */}
        <main>
          {/* Hero Section with 3D Canvas */}
          <HeroSection
            onExploreMenu={handleScrollToMenu}
            onBookTable={handleScrollToBooking}
          />

          {/* Infinite Velocity Reactive Marquee Strip */}
          <MarqueeStrip />

          {/* About / Our Story & Craft */}
          <StorySection />

          {/* Signature Dishes Showcase */}
          <SignatureDishes />

          {/* Deals & Combos of the Day Strip */}
          <OffersStrip />

          {/* Full Artisanal Menu */}
          <MenuSection />

          {/* Ambience & Experience Gallery */}
          <GallerySection />

          {/* Patron Google Reviews */}
          <ReviewsSection />

          {/* Contact, Timings, Booking & FAQs */}
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />

        {/* Mobile Bottom Sticky Action Bar */}
        <MobileActionBar onMenuClick={handleScrollToMenu} />

        {/* WhatsApp Cart Slide-out Drawer */}
        <CartDrawer />
      </div>
    </CartProvider>
  );
}

export default App;
