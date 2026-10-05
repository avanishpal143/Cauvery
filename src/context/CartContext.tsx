import React, { createContext, useContext, useState, useEffect } from 'react';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
  isJain?: boolean;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: { id: string; name: string; price: number; image?: string; isJain?: boolean }) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, delta: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  checkoutWhatsApp: (customerDetails?: { name: string; phone: string; addressOrTable: string; notes?: string }) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('cauvery-cart');
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch {
          return [];
        }
      }
    }
    return [];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('cauvery-cart', JSON.stringify(items));
  }, [items]);

  const addItem = (item: { id: string; name: string; price: number; image?: string; isJain?: boolean }) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) => (i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i));
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setItems((prev) =>
      prev
        .map((i) => {
          if (i.id === id) {
            const newQty = i.quantity + delta;
            return newQty > 0 ? { ...i, quantity: newQty } : null;
          }
          return i;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const clearCart = () => setItems([]);

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  const checkoutWhatsApp = (customerDetails?: { name: string; phone: string; addressOrTable: string; notes?: string }) => {
    if (items.length === 0) return;

    let message = `*Namaskara Cauvery Cafe!* 🪷\n`;
    message += `I would like to place an order from your website:\n\n`;

    items.forEach((item, idx) => {
      message += `${idx + 1}. *${item.name}* x ${item.quantity} = ₹${item.price * item.quantity}\n`;
    });

    message += `\n*Total Amount:* ₹${totalPrice}\n`;

    if (customerDetails) {
      if (customerDetails.name) message += `*Name:* ${customerDetails.name}\n`;
      if (customerDetails.phone) message += `*Contact:* ${customerDetails.phone}\n`;
      if (customerDetails.addressOrTable) message += `*Delivery / Table:* ${customerDetails.addressOrTable}\n`;
      if (customerDetails.notes) message += `*Special Note:* ${customerDetails.notes}\n`;
    }

    message += `\n_Cauvery Cafe – Bansal Avenue, Opp. Chikli Town Hall, Pimpri Chinchwad, Pune._`;

    const encoded = encodeURIComponent(message);
    // WhatsApp URL (restaurant phone: +91 98765 43210)
    window.open(`https://wa.me/919876543210?text=${encoded}`, '_blank');
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
        isCartOpen,
        setIsCartOpen,
        checkoutWhatsApp,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
