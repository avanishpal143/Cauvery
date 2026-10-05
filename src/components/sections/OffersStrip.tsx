import React, { useState } from 'react';
import menuData from '../../data/menu.json';
import { Tag, Copy, Check, Sparkles } from 'lucide-react';

export const OffersStrip: React.FC = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  return (
    <section className="py-12 bg-gradient-to-r from-[#1A0E08] via-[#2E7D32] to-[#1A0E08] dark:from-[#150D07] dark:via-[#20150D] dark:to-[#150D07] text-cream border-y border-gold/40 relative overflow-hidden shadow-inner">
      {/* Background radial highlight */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="flex items-center gap-2 mb-6">
          <Sparkles className="w-4 h-4 text-gold" />
          <span className="text-xs uppercase font-bold tracking-widest text-gold">
            Today's Exclusive Offers &amp; Combos
          </span>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {menuData.offers.map((offer) => (
            <div
              key={offer.id}
              className="p-6 rounded-3xl bg-forest-dark/80 dark:bg-espresso-card border border-gold/25 flex flex-col justify-between space-y-4 hover:border-gold transition-colors shadow-md"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="px-2.5 py-1 rounded-full bg-gold text-forest font-black text-[11px] tracking-wider uppercase">
                    {offer.badge}
                  </span>
                  <Tag className="w-4 h-4 text-gold/60" />
                </div>

                <h3 className="font-display font-bold text-lg text-cream">
                  {offer.title}
                </h3>

                <p className="font-body text-xs text-cream/70 mt-1.5 leading-relaxed">
                  {offer.description}
                </p>
              </div>

              {/* Promo Code & Copy button */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-gold-light tracking-widest">
                  CODE: {offer.code}
                </span>

                <button
                  onClick={() => handleCopy(offer.code)}
                  className="flex items-center gap-1 text-[11px] font-bold text-cream/80 hover:text-gold transition-colors cursor-pointer"
                >
                  {copiedCode === offer.code ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
