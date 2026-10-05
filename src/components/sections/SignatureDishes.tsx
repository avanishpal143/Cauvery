import React, { useRef } from 'react';
import { useCart } from '../../context/CartContext';
import { Star, Plus, Flame, ChevronLeft, ChevronRight } from 'lucide-react';

interface SignatureDishItem {
  id: string;
  name: string;
  price: number;
  rating: number;
  tag: string;
  spiciness: number;
  isJain: boolean;
  desc: string;
  image: string;
}

const SIGNATURES: SignatureDishItem[] = [
  {
    id: 'mysore-masala',
    name: 'Cauvery Mysore Masala Dosa',
    price: 140,
    rating: 5.0,
    tag: "Chef's Crown",
    spiciness: 3,
    isJain: false,
    desc: 'Lathered with fiery red garlic-chilli chutney, dollop of yellow butter, and spiced aloo palya, roasted till deep burgundy crunch.',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'paper-roast',
    name: 'Ghee Paper Roast Dosa (2.5 Ft)',
    price: 160,
    rating: 4.9,
    tag: 'Showstopper',
    spiciness: 0,
    isJain: true,
    desc: 'Ultra-thin crispy wafer scroll brushed with pure cow ghee. Light as parchment with a buttery caramel finish that crackles.',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'ghee-podi-idli',
    name: 'Gunpowder Ghee Podi Thatte Idli',
    price: 110,
    rating: 5.0,
    tag: 'Cult Classic',
    spiciness: 3,
    isJain: true,
    desc: 'Fluffy giant plate idli drenched in sizzling desi cow ghee and blanketed with Cauvery hand-roasted gunpowder podi.',
    image: 'https://images.unsplash.com/photo-1505253758473-96b3015f27eb?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'masala-dosa',
    name: 'Classic Golden Masala Dosa',
    price: 120,
    rating: 4.9,
    tag: 'All-Time Legend',
    spiciness: 1,
    isJain: true,
    desc: 'Crisp golden crepe roasted in pure ghee, stuffed with seasoned spiced potato mash, served with 2 chutneys & shallot sambar.',
    image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'degree-filter-coffee',
    name: 'Kumbakonam Degree Filter Kaapi',
    price: 50,
    rating: 5.0,
    tag: 'Soul of South',
    spiciness: 0,
    isJain: true,
    desc: 'First-drip Arabica & Peaberry decoction poured high with piping frothed milk in traditional brass davara tumbler.',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
  },
];

export const SignatureDishes: React.FC = () => {
  const { addItem } = useCart();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const offset = direction === 'left' ? -380 : 380;
      scrollContainerRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <section id="signatures" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Decorative leaf vein line at top */}
      <div className="leaf-vein-line mb-16" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-leaf-tender/90 dark:bg-cream/5 border border-leaf/30 dark:border-gold/30 text-xs font-bold uppercase tracking-widest text-leaf-vibrant dark:text-gold mb-3 shadow-sm">
              <span>🌿 Crowning Delicacies</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-forest dark:text-cream leading-tight">
              Our Signature Delights
            </h2>
            <p className="font-body text-sm sm:text-base text-forest/80 dark:text-cream/70 mt-2 max-w-xl">
              Five legendary items that people travel from across Pune and PCMC to experience. Slow fermented, pure ghee roasted.
            </p>
          </div>

          {/* Scroll Navigation Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={() => scroll('left')}
              className="p-3 rounded-full border border-forest/20 dark:border-gold/30 hover:bg-forest hover:text-cream dark:hover:bg-gold dark:hover:text-forest transition-colors cursor-pointer"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-3 rounded-full border border-forest/20 dark:border-gold/30 hover:bg-forest hover:text-cream dark:hover:bg-gold dark:hover:text-forest transition-colors cursor-pointer"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Showcase Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto no-scrollbar pb-8 pt-2 scroll-smooth -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {SIGNATURES.map((dish) => (
            <div
              key={dish.id}
              className="group w-[300px] sm:w-[350px] shrink-0 rounded-3xl bg-white/95 dark:bg-espresso-card border border-leaf/20 dark:border-gold/25 shadow-xl shadow-leaf/5 hover:shadow-2xl transition-all duration-500 flex flex-col overflow-hidden hover:-translate-y-2 hover:border-leaf"
            >
              {/* Image Container with Zoom effect */}
              <div className="relative aspect-[4/3] overflow-hidden bg-sand/30">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                {/* Badge Tag */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-forest/90 dark:bg-espresso/90 border border-gold/40 text-[10px] font-bold tracking-widest uppercase text-gold">
                  {dish.tag}
                </div>

                {/* Rating Badge */}
                <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full bg-cream/90 dark:bg-espresso/90 text-forest dark:text-cream text-xs font-bold shadow-md">
                  <Star className="w-3.5 h-3.5 fill-gold text-gold" />
                  <span>{dish.rating.toFixed(1)}</span>
                </div>

                {/* Spice & Jain indicators */}
                <div className="absolute bottom-3 left-3 flex items-center gap-2">
                  {dish.spiciness > 0 && (
                    <div className="flex items-center gap-0.5 bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded-full">
                      {Array.from({ length: dish.spiciness }).map((_, i) => (
                        <Flame key={i} className="w-3 h-3 text-chilli fill-chilli" />
                      ))}
                    </div>
                  )}
                  {dish.isJain && (
                    <span className="text-[10px] font-bold bg-leaf-vibrant text-cream px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow">
                      🌿 Jain Available
                    </span>
                  )}
                </div>
              </div>

              {/* Dish Content & Quick Add */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-display font-black text-xl text-forest dark:text-cream group-hover:text-leaf-vibrant dark:group-hover:text-gold transition-colors">
                    {dish.name}
                  </h3>
                  <p className="font-body text-xs text-forest/75 dark:text-cream/70 mt-2 line-clamp-2 leading-relaxed">
                    {dish.desc}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-forest/10 dark:border-cream/10">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-forest/50 dark:text-cream/50 block">
                      Price
                    </span>
                    <span className="font-display text-2xl font-black text-leaf-vibrant dark:text-gold">
                      ₹{dish.price}
                    </span>
                  </div>

                  <button
                    onClick={() => addItem({ id: dish.id, name: dish.name, price: dish.price, image: dish.image, isJain: dish.isJain })}
                    className="flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-gradient-to-r from-leaf to-forest hover:from-leaf-light hover:to-leaf dark:bg-gold dark:hover:bg-gold-light text-cream dark:text-forest font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-leaf/20 active:scale-95 cursor-pointer group/btn border border-gold/30"
                  >
                    <Plus className="w-4 h-4 transition-transform group-hover/btn:rotate-90" />
                    <span>Add to Order</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
