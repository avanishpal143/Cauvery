import React, { useState } from 'react';
import { Camera, X, ZoomIn, Heart } from 'lucide-react';

interface GalleryPhoto {
  id: number;
  title: string;
  category: string;
  likes: number;
  image: string;
  aspect: string;
}

const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 1,
    title: 'Brass Tumbler Degree Kaapi Pour',
    category: 'Rituals',
    likes: 240,
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
    aspect: 'aspect-[3/4]',
  },
  {
    id: 2,
    title: 'Master Karigar Spreading Dosa on Cast Iron',
    category: 'Craft',
    likes: 418,
    image: '/images/crispy-masala-dosa.jpg',
    aspect: 'aspect-square',
  },
  {
    id: 3,
    title: 'Warm Wooden Interiors & Family Booths',
    category: 'Ambience',
    likes: 312,
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    aspect: 'aspect-[4/3]',
  },
  {
    id: 4,
    title: 'Fresh Coconut Chutney Tempered with Mustard & Curry Leaves',
    category: 'Ingredients',
    likes: 189,
    image: '/images/hero-dosa-feast.jpg',
    aspect: 'aspect-[3/4]',
  },
  {
    id: 5,
    title: 'Gunpowder Podi Ghee Thatte Idlis',
    category: 'Signatures',
    likes: 520,
    image: '/images/steamed-idli-sambar.jpg',
    aspect: 'aspect-square',
  },
  {
    id: 6,
    title: 'The Evening Rush at Bansal Avenue',
    category: 'Vibes',
    likes: 275,
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
    aspect: 'aspect-[4/3]',
  },
];

export const GallerySection: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);

  return (
    <section id="gallery" className="scroll-mt-24 sm:scroll-mt-28 py-24 sm:py-32 relative">
      {/* Decorative leaf vein line at top */}
      <div className="leaf-vein-line mb-16" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest/5 dark:bg-cream/5 border border-forest/15 dark:border-gold/30 text-xs font-bold uppercase tracking-widest text-leaf dark:text-gold mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>The Cauvery Experience</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-forest dark:text-cream leading-tight">
            Ambience &amp; Kitchen Moments
          </h2>
          <p className="font-body text-sm sm:text-base text-forest/70 dark:text-cream/70 mt-2">
            A glimpse into the warmth, aroma, and camaraderie inside our cafe opposite Chikli Town Hall.
          </p>
        </div>

        {/* Masonry / Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_PHOTOS.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className={`group relative rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer border border-forest/10 dark:border-gold/20 ${photo.aspect}`}
            >
              <img
                src={photo.image}
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                loading="lazy"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 text-cream" />

              {/* Instagram-style Hover Info */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-widest bg-forest/80 backdrop-blur-sm px-3 py-1 rounded-full text-gold border border-gold/30">
                    {photo.category}
                  </span>
                  <div className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-cream">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <h4 className="font-display font-bold text-lg text-cream mb-1">
                    {photo.title}
                  </h4>
                  <div className="flex items-center gap-1.5 text-xs text-gold">
                    <Heart className="w-3.5 h-3.5 fill-gold" />
                    <span>{photo.likes} foodies love this</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedPhoto(null)}
          />

          <div className="relative max-w-4xl max-h-[90vh] z-10 flex flex-col items-center">
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute -top-12 right-0 p-2 text-white hover:text-gold transition-colors cursor-pointer"
            >
              <X className="w-8 h-8" />
            </button>

            <img
              src={selectedPhoto.image}
              alt={selectedPhoto.title}
              className="max-h-[75vh] w-auto rounded-2xl shadow-2xl object-contain border border-gold/30"
            />

            <div className="mt-4 text-center text-white">
              <h3 className="font-display font-bold text-xl text-cream">
                {selectedPhoto.title}
              </h3>
              <p className="text-xs text-gold mt-1">
                {selectedPhoto.category} • Cauvery Pune Ambience
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
