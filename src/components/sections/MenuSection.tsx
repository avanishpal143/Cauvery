import React, { useState, useMemo } from 'react';
import menuData from '../../data/menu.json';
import { useCart } from '../../context/CartContext';
import { Search, Flame, Star, Plus, Check, Info, X, Clock, Zap } from 'lucide-react';

export const MenuSection: React.FC = () => {
  const { addItem } = useCart();
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterJainOnly, setFilterJainOnly] = useState(false);
  const [filterBestsellerOnly, setFilterBestsellerOnly] = useState(false);
  const [selectedDishModal, setSelectedDishModal] = useState<any | null>(null);

  // Filtered menu items
  const filteredItems = useMemo(() => {
    return menuData.items.filter((item) => {
      // Category filter
      if (activeCategory !== 'all' && item.category !== activeCategory) {
        return false;
      }
      // Jain filter
      if (filterJainOnly && !item.isJain) {
        return false;
      }
      // Bestseller filter
      if (filterBestsellerOnly && !item.bestseller) {
        return false;
      }
      // Search query filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesTags = item.tags?.some((t) => t.toLowerCase().includes(query));
        return matchesName || matchesDesc || matchesTags;
      }
      return true;
    });
  }, [activeCategory, searchQuery, filterJainOnly, filterBestsellerOnly]);

  return (
    <section id="menu" className="py-24 sm:py-32 relative bg-sand/20 dark:bg-espresso/30">
      {/* Decorative leaf vein line at top */}
      <div className="leaf-vein-line mb-16" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-leaf-tender/90 dark:bg-cream/5 border border-leaf/30 dark:border-gold/30 text-xs font-bold uppercase tracking-widest text-leaf-vibrant dark:text-gold mb-3 shadow-sm">
            <span>🌿 Pure South Indian Spread</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-forest dark:text-cream leading-tight">
            Curated Artisanal Offerings
          </h2>
          <p className="font-body text-sm sm:text-base text-forest/80 dark:text-cream/70 mt-2">
            Every dish is made to order. Slow-fermented batter, hand-roasted spices, zero artificial colors.
          </p>
        </div>

        {/* Search Bar & Fast Filters */}
        <div className="max-w-3xl mx-auto mb-8 space-y-4">
          {/* Search Box */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-forest/40 dark:text-cream/40" />
            <input
              type="text"
              placeholder="Search crispy dosas, steamed idlis, filter kaapi, jain..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white/95 dark:bg-espresso-card border border-leaf/25 dark:border-gold/25 text-sm text-forest dark:text-cream placeholder-forest/40 dark:placeholder-cream/40 shadow-sm focus:outline-none focus:border-leaf focus:ring-2 focus:ring-leaf/20"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-forest/40 hover:text-forest dark:hover:text-cream"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Quick Filter Toggles */}
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setFilterBestsellerOnly(!filterBestsellerOnly)}
                className={`px-3.5 py-1.5 rounded-full border transition-all flex items-center gap-1.5 cursor-pointer font-semibold ${
                  filterBestsellerOnly
                    ? 'bg-chilli text-cream border-chilli shadow-sm'
                    : 'bg-white/90 dark:bg-espresso-card text-forest/80 dark:text-cream/70 border-leaf/20 dark:border-gold/20 hover:bg-leaf-tender'
                }`}
              >
                <Zap className="w-3.5 h-3.5" />
                <span>Bestsellers Only</span>
              </button>

              <button
                onClick={() => setFilterJainOnly(!filterJainOnly)}
                className={`px-3.5 py-1.5 rounded-full border transition-all flex items-center gap-1.5 cursor-pointer font-semibold ${
                  filterJainOnly
                    ? 'bg-leaf-vibrant text-cream border-leaf-vibrant shadow-sm shadow-leaf/20'
                    : 'bg-white/90 dark:bg-espresso-card text-forest/80 dark:text-cream/70 border-leaf/20 dark:border-gold/20 hover:bg-leaf-tender'
                }`}
              >
                <Check className="w-3.5 h-3.5" />
                <span>🌿 Jain Friendly Only</span>
              </button>
            </div>

            <span className="text-forest/70 dark:text-cream/60 font-medium">
              Showing <strong>{filteredItems.length}</strong> items
            </span>
          </div>
        </div>

        {/* Sticky Category Tabs */}
        <div className="sticky top-20 z-30 py-3 mb-8 bg-cream/95 dark:bg-espresso/95 backdrop-blur-md -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            {menuData.categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-leaf to-forest text-cream dark:bg-gold dark:text-forest shadow-md shadow-leaf/20 border border-gold/30'
                      : 'bg-[#B8E2BF]/35 dark:bg-espresso-card text-forest/90 dark:text-cream/70 hover:bg-[#B8E2BF]/75 border border-leaf/25 dark:border-gold/20 shadow-xs'
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-white/50 dark:bg-espresso-card rounded-3xl p-8 border border-dashed border-forest/20">
            <h4 className="font-display font-bold text-xl text-forest dark:text-cream mb-2">
              No matching delicacies found
            </h4>
            <p className="text-xs text-forest/60 dark:text-cream/60 max-w-sm mx-auto mb-4">
              Try adjusting your search keywords or clearing active filters to see our full spread.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
                setFilterJainOnly(false);
                setFilterBestsellerOnly(false);
              }}
              className="px-5 py-2 rounded-full bg-forest text-cream text-xs font-bold tracking-wider uppercase"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((dish) => (
              <div
                key={dish.id}
                className="group p-5 rounded-3xl bg-white/95 dark:bg-espresso-card border border-leaf/20 dark:border-gold/20 shadow-md shadow-leaf/5 hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:border-leaf"
              >
                <div>
                  {/* Top Image + Badges */}
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-4 bg-sand/30">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-40 pointer-events-none" />

                    {/* Bestseller Badge */}
                    {dish.bestseller && (
                      <span className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full bg-chilli text-cream text-[10px] font-bold tracking-wider uppercase shadow-md">
                        Bestseller
                      </span>
                    )}

                    {/* Jain indicator */}
                    {dish.isJain && (
                      <span className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full bg-leaf-vibrant text-cream text-[9px] font-bold tracking-wider uppercase shadow">
                        🌿 Jain Opt.
                      </span>
                    )}

                    {/* Spice indicator */}
                    {dish.spiciness > 0 && (
                      <div className="absolute bottom-2.5 left-2.5 flex items-center gap-0.5 bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded-full">
                        {Array.from({ length: dish.spiciness }).map((_, i) => (
                          <Flame key={i} className="w-3 h-3 text-chilli fill-chilli" />
                        ))}
                      </div>
                    )}

                    {/* Detail modal trigger */}
                    <button
                      onClick={() => setSelectedDishModal(dish)}
                      className="absolute bottom-2.5 right-2.5 p-1.5 rounded-full bg-cream/90 dark:bg-espresso/90 text-forest dark:text-cream hover:bg-gold transition-colors cursor-pointer shadow"
                      aria-label="View dish details"
                      title="View details"
                    >
                      <Info className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Title & Price Header */}
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <h3 className="font-display font-bold text-lg text-forest dark:text-cream group-hover:text-leaf-vibrant dark:group-hover:text-gold transition-colors leading-snug">
                      {dish.name}
                    </h3>
                    <span className="font-display font-black text-xl text-leaf-vibrant dark:text-gold shrink-0">
                      ₹{dish.price}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="font-body text-xs text-forest/75 dark:text-cream/70 line-clamp-2 leading-relaxed mb-4">
                    {dish.description}
                  </p>
                </div>

                {/* Card Bottom: Tags & Quick Add to Order */}
                <div className="pt-3 border-t border-forest/10 dark:border-cream/10 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {dish.tags?.slice(0, 2).map((t, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] px-2 py-0.5 rounded-md bg-leaf-tender/80 dark:bg-cream/5 text-forest/80 dark:text-cream/70 font-semibold border border-leaf/15"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => addItem({ id: dish.id, name: dish.name, price: dish.price, image: dish.image, isJain: dish.isJain })}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-leaf to-forest hover:from-leaf-light hover:to-leaf dark:bg-gold dark:hover:bg-gold-light text-cream dark:text-forest font-bold text-xs uppercase tracking-wider transition-all active:scale-95 cursor-pointer shadow-sm shadow-leaf/20 border border-gold/30"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Dish Detail Modal */}
      {selectedDishModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-forest/80 dark:bg-black/85 backdrop-blur-sm"
            onClick={() => setSelectedDishModal(null)}
          />

          <div className="relative w-full max-w-lg bg-cream dark:bg-espresso rounded-3xl overflow-hidden shadow-2xl border border-gold/40 z-10 max-h-[90vh] flex flex-col">
            <div className="relative aspect-[16/10] w-full">
              <img
                src={selectedDishModal.image}
                alt={selectedDishModal.name}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedDishModal(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display font-black text-2xl text-forest dark:text-cream">
                    {selectedDishModal.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="flex items-center gap-1 text-xs font-bold text-copper dark:text-gold">
                      <Star className="w-3.5 h-3.5 fill-gold text-gold" />
                      {selectedDishModal.rating}
                    </span>
                    <span className="text-forest/30 dark:text-cream/30">•</span>
                    <span className="text-xs text-forest/70 dark:text-cream/70 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      Prep: {selectedDishModal.prepTime || '8 mins'}
                    </span>
                    <span className="text-forest/30 dark:text-cream/30">•</span>
                    <span className="text-xs text-forest/70 dark:text-cream/70">
                      {selectedDishModal.calories || '300 kcal'}
                    </span>
                  </div>
                </div>
                <span className="font-display font-black text-3xl text-forest dark:text-gold">
                  ₹{selectedDishModal.price}
                </span>
              </div>

              <p className="font-body text-sm text-forest/80 dark:text-cream/80 leading-relaxed">
                {selectedDishModal.description}
              </p>

              <div className="p-4 rounded-2xl bg-sand/60 dark:bg-espresso-card border border-forest/10 dark:border-gold/20 space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-forest/70 dark:text-cream/70">
                  Kitchen Notes &amp; Ingredients:
                </h4>
                <p className="text-xs text-forest/80 dark:text-cream/80">
                  Stone ground urad dal, aged parboiled rice, seasoned cast-iron skillet, A2 pure desi ghee, organic mustard seeds, and fresh curry leaves.
                </p>
                {selectedDishModal.isJain && (
                  <p className="text-xs text-leaf dark:text-gold font-bold">
                    ✓ Available in Jain preparation without root vegetables.
                  </p>
                )}
              </div>

              <button
                onClick={() => {
                  addItem({
                    id: selectedDishModal.id,
                    name: selectedDishModal.name,
                    price: selectedDishModal.price,
                    image: selectedDishModal.image,
                    isJain: selectedDishModal.isJain,
                  });
                  setSelectedDishModal(null);
                }}
                className="w-full py-3.5 rounded-2xl bg-forest dark:bg-gold text-cream dark:text-forest font-bold text-sm tracking-wider uppercase transition-all shadow-lg hover:shadow-xl cursor-pointer"
              >
                Add to WhatsApp Feast (₹{selectedDishModal.price})
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
