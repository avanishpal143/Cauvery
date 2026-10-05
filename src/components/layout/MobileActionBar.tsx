import React from 'react';
import { Phone, MessageCircle, MapPin, UtensilsCrossed } from 'lucide-react';
import { useCart } from '../../context/CartContext';

interface MobileActionBarProps {
  onMenuClick?: () => void;
}

export const MobileActionBar: React.FC<MobileActionBarProps> = ({ onMenuClick }) => {
  const { totalItems, setIsCartOpen } = useCart();

  const handleDirections = () => {
    window.open(
      'https://maps.google.com/?q=Bansal+Avenue+Shop+No+8+Gat+No+1624+Near+IIBM+College+Opp+Chikli+Town+Hall+Pimpri+Chinchwad+Pune',
      '_blank'
    );
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      'Namaskara Cauvery Cafe! I would like to inquire about today\'s specials & table booking.'
    );
    window.open(`https://wa.me/919876543210?text=${text}`, '_blank');
  };

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden p-3 bg-cream/95 dark:bg-espresso/95 backdrop-blur-md border-t border-forest/10 dark:border-gold/30 shadow-[0_-5px_20px_rgba(0,0,0,0.15)]">
      <div className="grid grid-cols-4 gap-2">
        {/* Call Now */}
        <a
          href="tel:+919876543210"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-forest/5 dark:bg-cream/5 active:scale-95 text-forest dark:text-cream transition-transform"
        >
          <Phone className="w-4 h-4 text-leaf dark:text-gold mb-1" />
          <span className="text-[10px] font-bold tracking-tight">Call</span>
        </a>

        {/* WhatsApp Chat */}
        <button
          onClick={handleWhatsApp}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-forest/5 dark:bg-cream/5 active:scale-95 text-forest dark:text-cream transition-transform cursor-pointer"
        >
          <MessageCircle className="w-4 h-4 text-[#25D366] mb-1" />
          <span className="text-[10px] font-bold tracking-tight">WhatsApp</span>
        </button>

        {/* Directions */}
        <button
          onClick={handleDirections}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-forest/5 dark:bg-cream/5 active:scale-95 text-forest dark:text-cream transition-transform cursor-pointer"
        >
          <MapPin className="w-4 h-4 text-chilli mb-1" />
          <span className="text-[10px] font-bold tracking-tight">Directions</span>
        </button>

        {/* Menu or Cart */}
        <button
          onClick={() => {
            if (totalItems > 0) {
              setIsCartOpen(true);
            } else if (onMenuClick) {
              onMenuClick();
            } else {
              const el = document.getElementById('menu');
              el?.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="relative flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-gold active:scale-95 text-forest font-bold transition-transform shadow-md cursor-pointer"
        >
          <UtensilsCrossed className="w-4 h-4 mb-1" />
          <span className="text-[10px] tracking-tight">
            {totalItems > 0 ? `Cart (${totalItems})` : 'Menu'}
          </span>
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-chilli text-cream text-[9px] font-black flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </button>
      </div>
    </div>
  );
};
