import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { X, Plus, Minus, ShoppingBag, Send, Trash2, ArrowRight } from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const {
    items,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeItem,
    clearCart,
    totalItems,
    totalPrice,
    checkoutWhatsApp,
  } = useCart();

  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [addressOrTable, setAddressOrTable] = useState('');
  const [orderNote, setOrderNote] = useState('');

  if (!isCartOpen) return null;

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    checkoutWhatsApp({
      name: customerName,
      phone: customerPhone,
      addressOrTable: addressOrTable || 'Dine-in / Takeaway',
      notes: orderNote,
    });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-forest/70 dark:bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer Panel */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-cream dark:bg-espresso shadow-2xl flex flex-col border-l border-gold/30">
          {/* Header */}
          <div className="p-6 border-b border-forest/10 dark:border-cream/10 flex items-center justify-between bg-sand/30 dark:bg-espresso-card">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-forest dark:text-gold">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-forest dark:text-cream">
                  Your WhatsApp Feast
                </h3>
                <p className="text-xs text-leaf dark:text-gold-light">
                  {totalItems} {totalItems === 1 ? 'item' : 'items'} selected
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 rounded-full hover:bg-forest/10 dark:hover:bg-cream/10 text-forest dark:text-cream transition-colors cursor-pointer"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-full bg-sand dark:bg-espresso-card flex items-center justify-center text-forest/40 dark:text-cream/40 mb-4">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h4 className="font-display font-bold text-lg text-forest dark:text-cream mb-1">
                  Your plate is empty
                </h4>
                <p className="text-xs text-forest/60 dark:text-cream/60 max-w-xs mb-6">
                  Explore our slow-fermented dosas, podi idlis, and degree filter coffee to start your order!
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="px-6 py-2.5 rounded-full bg-leaf hover:bg-leaf-light text-cream font-medium text-xs tracking-wider uppercase transition-all shadow-md cursor-pointer"
                >
                  Explore Menu ✦
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between text-xs text-forest/60 dark:text-cream/60 pb-2 border-b border-forest/10 dark:border-cream/10">
                  <span>Ordered Items</span>
                  <button
                    onClick={clearCart}
                    className="flex items-center gap-1 text-chilli hover:underline cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Clear all</span>
                  </button>
                </div>

                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between gap-3 p-3.5 rounded-2xl bg-white/70 dark:bg-espresso-card border border-forest/5 dark:border-gold/15 shadow-sm"
                  >
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-14 h-14 rounded-xl object-cover shrink-0"
                      />
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 border border-forest dark:border-green-400 p-[1.5px] flex items-center justify-center rounded-sm">
                          <span className="w-1.5 h-1.5 bg-forest dark:bg-green-400 rounded-full" />
                        </span>
                        <h4 className="font-display font-bold text-sm text-forest dark:text-cream truncate">
                          {item.name}
                        </h4>
                      </div>
                      <p className="text-xs text-copper dark:text-gold font-bold mt-0.5">
                        ₹{item.price} each
                      </p>
                    </div>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-2 bg-sand/60 dark:bg-forest-dark px-2.5 py-1.5 rounded-full border border-forest/10 dark:border-gold/20 shrink-0">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="text-forest dark:text-cream hover:text-chilli cursor-pointer p-0.5"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="text-xs font-mono font-bold text-forest dark:text-cream w-4 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="text-forest dark:text-cream hover:text-leaf cursor-pointer p-0.5"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-forest/40 dark:text-cream/40 hover:text-chilli cursor-pointer p-0.5 ml-1"
                        title="Remove item"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))}

                {/* Customer Details Form */}
                <form onSubmit={handleCheckout} className="pt-4 border-t border-forest/10 dark:border-cream/10 space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-forest/70 dark:text-cream/70 mb-2">
                    Order Details
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="Your Full Name (optional)"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl bg-white/60 dark:bg-espresso-card border border-forest/15 dark:border-gold/20 text-forest dark:text-cream placeholder-forest/40 dark:placeholder-cream/40 focus:outline-none focus:border-gold"
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number (optional)"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl bg-white/60 dark:bg-espresso-card border border-forest/15 dark:border-gold/20 text-forest dark:text-cream placeholder-forest/40 dark:placeholder-cream/40 focus:outline-none focus:border-gold"
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="Table No. or Delivery Address"
                      value={addressOrTable}
                      onChange={(e) => setAddressOrTable(e.target.value)}
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl bg-white/60 dark:bg-espresso-card border border-forest/15 dark:border-gold/20 text-forest dark:text-cream placeholder-forest/40 dark:placeholder-cream/40 focus:outline-none focus:border-gold"
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="Special instructions (e.g. extra crispy, Jain)"
                      value={orderNote}
                      onChange={(e) => setOrderNote(e.target.value)}
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl bg-white/60 dark:bg-espresso-card border border-forest/15 dark:border-gold/20 text-forest dark:text-cream placeholder-forest/40 dark:placeholder-cream/40 focus:outline-none focus:border-gold"
                    />
                  </div>
                </form>
              </>
            )}
          </div>

          {/* Footer & Checkout */}
          {items.length > 0 && (
            <div className="p-6 border-t border-forest/10 dark:border-cream/10 bg-sand/30 dark:bg-espresso-card space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-forest/70 dark:text-cream/70">
                  Total Bill (Taxes incl.)
                </span>
                <span className="font-display text-2xl font-black text-forest dark:text-gold">
                  ₹{totalPrice}
                </span>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full py-3.5 px-6 rounded-2xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-sm tracking-wide shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer group"
              >
                <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                <span>Place Order via WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[11px] text-center text-forest/50 dark:text-cream/50">
                Direct to kitchen WhatsApp • Bansal Avenue, Opp. Chikli Town Hall
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
