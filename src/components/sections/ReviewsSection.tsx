import React, { useState, useEffect } from 'react';
import menuData from '../../data/menu.json';
import { Star, CheckCircle, ChevronLeft, ChevronRight, MessageSquareQuote } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const reviews = menuData.reviews;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  return (
    <section id="reviews" className="scroll-mt-24 sm:scroll-mt-28 py-24 sm:py-32 relative bg-gradient-to-b from-[#B8E2BF]/20 via-cream to-[#B8E2BF]/15 dark:bg-espresso/40">
      {/* Decorative leaf vein line at top */}
      <div className="leaf-vein-line mb-16" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Google Rating Badge */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-16">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B8E2BF]/50 dark:bg-cream/5 border border-leaf/30 dark:border-gold/30 text-xs font-bold uppercase tracking-widest text-forest dark:text-gold mb-3 shadow-xs">
              <span>Verified Patron Reviews</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-forest dark:text-cream leading-tight">
              Loved by Foodies of Pune
            </h2>
            <p className="font-body text-sm sm:text-base text-forest/70 dark:text-cream/70 mt-2">
              From college students next door to South Indian families across PCMC.
            </p>
          </div>

          {/* Big Google Rating Badge */}
          <div className="p-6 rounded-3xl bg-white/90 dark:bg-espresso-card border border-forest/10 dark:border-gold/30 shadow-xl flex items-center gap-6 shrink-0">
            {/* Google G icon */}
            <div className="w-14 h-14 rounded-2xl bg-forest/5 dark:bg-cream/5 flex items-center justify-center font-bold text-2xl text-forest dark:text-cream">
              G
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-black text-3xl text-forest dark:text-cream">
                  4.9
                </span>
                <div className="flex text-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
              </div>
              <p className="text-xs font-semibold text-forest/70 dark:text-cream/70 mt-0.5">
                Based on <strong>1,280+</strong> Google Reviews
              </p>
              <span className="text-[10px] text-leaf dark:text-gold font-bold">
                ✓ Top Rated Pure Veg Cafe in Pimpri Chinchwad
              </span>
            </div>
          </div>
        </div>

        {/* Carousel Card Container */}
        <div className="max-w-4xl mx-auto relative">
          <div className="p-8 sm:p-12 rounded-3xl bg-white/80 dark:bg-espresso-card border border-forest/10 dark:border-gold/30 shadow-2xl relative overflow-hidden">
            {/* Ambient water quote icon */}
            <MessageSquareQuote className="absolute top-6 right-6 w-20 h-20 text-gold/15 -z-0 pointer-events-none" />

            <div className="relative z-10 space-y-6">
              {/* Star Rating */}
              <div className="flex items-center gap-1 text-gold">
                {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>

              {/* Review Text */}
              <p className="font-display text-lg sm:text-2xl text-forest dark:text-cream leading-relaxed italic">
                "{reviews[currentIndex].review}"
              </p>

              {/* Reviewer Bio */}
              <div className="flex items-center justify-between pt-4 border-t border-forest/10 dark:border-cream/10">
                <div className="flex items-center gap-3">
                  <img
                    src={reviews[currentIndex].avatar}
                    alt={reviews[currentIndex].name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-gold"
                  />
                  <div>
                    <h4 className="font-display font-bold text-base text-forest dark:text-cream flex items-center gap-1.5">
                      <span>{reviews[currentIndex].name}</span>
                      <CheckCircle className="w-4 h-4 text-leaf dark:text-gold" />
                    </h4>
                    <p className="text-xs text-forest/60 dark:text-cream/60">
                      {reviews[currentIndex].role} • {reviews[currentIndex].date}
                    </p>
                  </div>
                </div>

                {/* Navigation Dots & Chevrons */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length)}
                    className="p-2 rounded-full border border-forest/15 dark:border-gold/20 hover:bg-forest hover:text-cream dark:hover:bg-gold dark:hover:text-forest transition-colors cursor-pointer"
                    aria-label="Previous review"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setCurrentIndex((prev) => (prev + 1) % reviews.length)}
                    className="p-2 rounded-full border border-forest/15 dark:border-gold/20 hover:bg-forest hover:text-cream dark:hover:bg-gold dark:hover:text-forest transition-colors cursor-pointer"
                    aria-label="Next review"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bullet Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  currentIndex === idx ? 'w-8 bg-gold' : 'w-2 bg-forest/20 dark:bg-cream/20'
                }`}
                aria-label={`Go to review ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
