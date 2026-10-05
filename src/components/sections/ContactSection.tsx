import React, { useState } from 'react';
import { useOpenNow } from '../../hooks/useOpenNow';
import menuData from '../../data/menu.json';
import {
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  Navigation,
  Calendar,
  Users,
  ChevronDown,
  Send,
  HelpCircle,
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { isOpen, statusText, nextChange, currentTimeString } = useOpenNow();

  // Booking Form State
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('19:30');
  const [guests, setGuests] = useState('2');
  const [occasion, setOccasion] = useState('Casual Dining');
  const [bookingSuccess, setBookingSuccess] = useState(false);

  // FAQ open/close state
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*Namaskara Cauvery Cafe!* 🪷\nI would like to reserve a table:\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Date:* ${date || 'Today'}\n*Time:* ${time}\n*Guests:* ${guests} People\n*Occasion:* ${occasion}\n\nPlease confirm my reservation. Dhanyavadagalu!`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/919876543210?text=${encoded}`, '_blank');
    setBookingSuccess(true);
  };

  const openGoogleMaps = () => {
    window.open(
      'https://maps.google.com/?q=Bansal+Avenue+Shop+No+8+Gat+No+1624+Near+IIBM+College+Opp+Chikli+Town+Hall+Pimpri+Chinchwad+Pune',
      '_blank'
    );
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative bg-gradient-to-b from-transparent via-[#B8E2BF]/20 to-transparent">
      {/* Decorative leaf divider line at top */}
      <div className="leaf-vein-line mb-16" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#B8E2BF]/50 dark:bg-cream/5 border border-leaf/30 dark:border-gold/30 text-xs font-bold uppercase tracking-widest text-forest dark:text-gold mb-3 shadow-xs">
            <span>🌿 Visit Us in Pimpri Chinchwad</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-forest dark:text-cream leading-tight">
            Find Us &amp; Reserve Your Table
          </h2>
          <p className="font-body text-sm sm:text-base text-forest/80 dark:text-cream/70 mt-2">
            Step in for breakfast with fresh morning filter coffee, an afternoon thali feast, or late-night hot crispy dosas.
          </p>
        </div>

        {/* Split Layout: Contact Info (Left) + Form & Map (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20">
          
          {/* Left Column: Address, Live Timing, Quick Actions (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Live Timing Status Card */}
            <div className="p-6 rounded-3xl bg-white/95 dark:bg-espresso-card border border-leaf/20 dark:border-gold/30 shadow-md shadow-leaf/5">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span
                    className={`w-3 h-3 rounded-full ${
                      isOpen ? 'bg-emerald-600 animate-pulse' : 'bg-red-500'
                    }`}
                  />
                  <span className="font-display font-bold text-base text-forest dark:text-cream">
                    {statusText}
                  </span>
                </div>
                <span className="text-xs font-mono font-medium text-forest/60 dark:text-cream/60">
                  {currentTimeString} IST
                </span>
              </div>

              <div className="flex items-start gap-3 text-xs text-forest/85 dark:text-cream/80">
                <Clock className="w-4 h-4 text-copper dark:text-gold shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-forest dark:text-cream">
                    Daily Timings: 7:00 AM – 11:00 PM
                  </p>
                  <p className="text-forest/70 dark:text-cream/60 mt-0.5">
                    {nextChange} • Kitchen remains continuously active throughout the day.
                  </p>
                </div>
              </div>
            </div>

            {/* Address Card */}
            <div className="p-6 rounded-3xl bg-white/95 dark:bg-espresso-card border border-leaf/20 dark:border-gold/30 shadow-md shadow-leaf/5 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-chilli shrink-0 mt-1" />
                <div>
                  <h4 className="font-display font-bold text-base text-forest dark:text-cream">
                    Cafe Address
                  </h4>
                  <p className="font-body text-xs sm:text-sm text-forest/85 dark:text-cream/80 mt-1 leading-relaxed">
                    Bansal Avenue, Shop No. 8, Gat No. 1624, Near IIBM College, Opposite Chikli Town Hall, Pimpri Chinchwad, Pune, Maharashtra – 411062.
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-forest/10 dark:border-cream/10 flex flex-wrap gap-3">
                <button
                  onClick={openGoogleMaps}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-leaf to-forest hover:from-leaf-light hover:to-leaf text-cream font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-sm shadow-leaf/20 border border-gold/30"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                </button>

                <a
                  href="tel:+919876543210"
                  className="py-2.5 px-4 rounded-xl bg-white dark:bg-espresso text-forest dark:text-cream font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 border border-leaf/25 dark:border-gold/25 hover:bg-leaf-tender cursor-pointer shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>

            {/* Direct WhatsApp Concierge */}
            <div className="p-6 rounded-3xl bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-md">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-display font-bold text-sm text-forest dark:text-cream">
                    WhatsApp Concierge
                  </h5>
                  <p className="text-[11px] text-forest/70 dark:text-cream/70">
                    Instant table bookings &amp; bulk tiffin orders
                  </p>
                </div>
              </div>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-1.5 rounded-full bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider whitespace-nowrap shadow-sm hover:scale-105 transition-transform"
              >
                Chat
              </a>
            </div>

          </div>

          {/* Right Column: Table Reservation Form & Styled Map (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Reservation Form */}
            <div className="p-8 rounded-3xl bg-white/95 dark:bg-espresso-card border border-leaf/20 dark:border-gold/30 shadow-xl shadow-leaf/5">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="w-4 h-4 text-leaf-vibrant dark:text-gold" />
                <span className="text-xs font-bold uppercase tracking-widest text-leaf-vibrant dark:text-gold">
                  🌿 Reserve a Table
                </span>
              </div>
              <h3 className="font-display font-black text-2xl text-forest dark:text-cream mb-6">
                Family &amp; Group Dining
              </h3>

              {bookingSuccess ? (
                <div className="p-6 rounded-2xl bg-leaf-tender/90 border border-leaf/30 text-center space-y-2">
                  <span className="text-2xl">🪷</span>
                  <h4 className="font-display font-bold text-lg text-forest dark:text-gold">
                    Booking Request Sent!
                  </h4>
                  <p className="text-xs text-forest/80 dark:text-cream/70">
                    We have redirected your details to our WhatsApp desk. We look forward to hosting you at Cauvery!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleBookingSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-forest/70 dark:text-cream/70 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Iyer"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full text-xs px-3.5 py-3 rounded-xl bg-white dark:bg-espresso border border-leaf/20 dark:border-gold/25 text-forest dark:text-cream focus:outline-none focus:border-leaf"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-forest/70 dark:text-cream/70 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 9876543210"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full text-xs px-3.5 py-3 rounded-xl bg-white dark:bg-espresso border border-leaf/20 dark:border-gold/25 text-forest dark:text-cream focus:outline-none focus:border-leaf"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-forest/70 dark:text-cream/70 mb-1">
                        Date
                      </label>
                      <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full text-xs px-3.5 py-3 rounded-xl bg-white dark:bg-espresso border border-leaf/20 dark:border-gold/25 text-forest dark:text-cream focus:outline-none focus:border-leaf"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-forest/70 dark:text-cream/70 mb-1">
                        Time Slot
                      </label>
                      <select
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className="w-full text-xs px-3.5 py-3 rounded-xl bg-white dark:bg-espresso border border-leaf/20 dark:border-gold/25 text-forest dark:text-cream focus:outline-none focus:border-leaf"
                      >
                        <option value="08:00">08:00 AM (Breakfast)</option>
                        <option value="09:30">09:30 AM (Breakfast)</option>
                        <option value="12:30">12:30 PM (Lunch Feast)</option>
                        <option value="14:00">02:00 PM (Lunch)</option>
                        <option value="17:30">05:30 PM (Evening Snacks)</option>
                        <option value="19:30">07:30 PM (Dinner)</option>
                        <option value="21:00">09:00 PM (Late Dinner)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-forest/70 dark:text-cream/70 mb-1">
                        Guests
                      </label>
                      <div className="relative">
                        <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-forest/40 dark:text-cream/40" />
                        <select
                          value={guests}
                          onChange={(e) => setGuests(e.target.value)}
                          className="w-full text-xs pl-9 pr-3.5 py-3 rounded-xl bg-white dark:bg-espresso border border-leaf/20 dark:border-gold/25 text-forest dark:text-cream focus:outline-none focus:border-leaf"
                        >
                          <option value="1">1 Person</option>
                          <option value="2">2 Persons</option>
                          <option value="4">4 Persons</option>
                          <option value="6">6 Persons</option>
                          <option value="8+">8+ Group</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-forest/70 dark:text-cream/70 mb-1">
                      Occasion / Special Requests
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Birthday, Jain Food preferred, high chair needed"
                      value={occasion}
                      onChange={(e) => setOccasion(e.target.value)}
                      className="w-full text-xs px-3.5 py-3 rounded-xl bg-white dark:bg-espresso border border-leaf/20 dark:border-gold/25 text-forest dark:text-cream focus:outline-none focus:border-leaf"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-leaf to-forest hover:from-leaf-light hover:to-leaf text-cream dark:bg-gold dark:text-forest font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-lg shadow-leaf/20 hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer group border border-gold/30"
                  >
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    <span>Confirm Reservation via WhatsApp</span>
                  </button>
                </form>
              )}
            </div>

            {/* Embedded Google Map */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-forest/10 dark:border-gold/30 aspect-[16/9] w-full">
              <iframe
                title="Cauvery Cafe Location Map"
                src="https://maps.google.com/maps?q=Bansal+Avenue+Gat+No+1624+Near+IIBM+College+Opp+Chikli+Town+Hall+Pimpri+Chinchwad+Pune&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'contrast(1.05) saturate(1.1)' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute top-3 left-3 bg-forest/90 dark:bg-espresso/90 text-cream px-3 py-1.5 rounded-full text-xs font-bold border border-gold/40 shadow">
                📍 Opp. Chikli Town Hall, Near IIBM
              </div>
            </div>

          </div>

        </div>

        {/* FAQ Accordion Section */}
        <div className="max-w-3xl mx-auto pt-10 border-t border-forest/10 dark:border-cream/10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-1.5 text-xs uppercase font-bold tracking-widest text-leaf dark:text-gold mb-1">
              <HelpCircle className="w-4 h-4" />
              <span>Got Questions?</span>
            </div>
            <h3 className="font-display font-bold text-2xl text-forest dark:text-cream">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="space-y-3">
            {menuData.faq.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white/70 dark:bg-espresso-card border border-forest/10 dark:border-gold/20 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="font-display font-bold text-sm sm:text-base text-forest dark:text-cream">
                      {item.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-forest/60 dark:text-gold shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm font-body text-forest/75 dark:text-cream/75 leading-relaxed border-t border-forest/5 dark:border-cream/5">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
