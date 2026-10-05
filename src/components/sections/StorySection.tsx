import React, { useState } from 'react';
import { Clock, ShieldCheck, Star, Sparkles, Flame, CheckCircle2 } from 'lucide-react';

export const StorySection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 0,
      badge: 'Chapter 01',
      title: 'Born on the Sacred Banks of Cauvery',
      quote: '"Food is not merely sustenance; it is sacred prasadam."',
      desc: 'Our culinary journey traces the fertile riverbanks of Cauvery, from Kodagu hills through Mysore to Thanjavur. We carry forth the sacred tradition of temple kitchens, where food is prepared with pure ingredients, mindful patience, and reverence.',
      stats: '1970s Heritage Recipe',
      image: '/images/hero-dosa-feast.jpg',
      pill: 'Authentic Lineage',
    },
    {
      id: 1,
      badge: 'Chapter 02',
      title: '24-Hour Stone-Ground Wild Fermentation',
      quote: '"No baking soda. No preservatives. Just wild natural yeast."',
      desc: 'We grind select high-grade urad dal and unpolished parboiled rice in heavy granite stone wet-grinders for over 3 hours. The batter is allowed to naturally rest and ferment for 24 hours, yielding naturally probiotic, cloud-soft idlis and crisp golden dosas.',
      stats: '24-Hour Slow Rise',
      image: '/images/steamed-idli-sambar.jpg',
      pill: 'Probiotic Goodness',
    },
    {
      id: 2,
      badge: 'Chapter 03',
      title: 'Hand-Spread Over Searing Cast-Iron Tawas',
      quote: '"The sizzle of water droplets on cast iron is our symphony."',
      desc: 'Every morning at 6:30 AM, our seasoned heavy cast-iron tawas reach optimum caramelization heat. Master karigars hand-spread paper-thin batter with circular precision, showering aromatic pure cow ghee till the edges lift naturally into crisp amber scrolls.',
      stats: 'Pure Cow Desi Ghee',
      image: '/images/crispy-masala-dosa.jpg',
      pill: 'Artisanal Craft',
    },
    {
      id: 3,
      badge: 'Chapter 04',
      title: 'Served Fresh on Fresh Banana Leaves',
      quote: '"Ground fresh thrice daily. Sambar simmered in small batches."',
      desc: 'Our coconut chutney is grated from fresh coastal coconuts and stone-crushed every 3 hours with roasted chana and green chillies. Sambar is prepared using slow-boiled toor dal, fresh shallots, drumsticks, and our secret 18-spice hand-roasted blend.',
      stats: '3 Daily Fresh Batches',
      image: '/images/hero-dosa-feast.jpg',
      pill: 'Farm Fresh Ingredients',
    },
  ];

  return (
    <section id="story" className="relative py-24 sm:py-32 overflow-hidden bg-sand/30 dark:bg-espresso/50">
      {/* Decorative leaf divider line at top */}
      <div className="leaf-vein-line mb-16" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-leaf-tender/90 dark:bg-cream/5 border border-leaf/30 dark:border-gold/30 text-xs font-bold uppercase tracking-widest text-leaf-vibrant dark:text-gold mb-3 shadow-sm">
            <span>🌿 Our Philosophy &amp; Craft</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-forest dark:text-cream leading-tight">
            The Craft of Pure Perfection
          </h2>
          <p className="font-body text-sm sm:text-base text-forest/80 dark:text-cream/70 mt-3">
            How a humble bowl of batter transforms into an award-winning sensory ritual every single day in Pimpri Chinchwad.
          </p>
        </div>

        {/* Interactive Story Progression */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left: Step navigation tabs & storytelling text (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
              {steps.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => setActiveStep(idx)}
                  className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all whitespace-nowrap cursor-pointer ${
                    activeStep === idx
                      ? 'bg-gradient-to-r from-leaf to-forest text-cream dark:bg-gold dark:text-forest shadow-md shadow-leaf/20 scale-105 border border-gold/30'
                      : 'bg-white/90 dark:bg-espresso-card text-forest/80 dark:text-cream/70 hover:bg-leaf-tender border border-leaf/15 dark:border-gold/15'
                  }`}
                >
                  {s.badge}
                </button>
              ))}
            </div>

            {/* Active Story Card */}
            <div className="p-8 rounded-3xl bg-white/95 dark:bg-espresso-card border border-leaf/20 dark:border-gold/25 shadow-xl shadow-leaf/5 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold tracking-widest uppercase text-leaf-vibrant dark:text-gold flex items-center gap-1.5">
                  <span>🌿</span>
                  <span>{steps[activeStep].badge} • {steps[activeStep].pill}</span>
                </span>
                <span className="text-xs px-3 py-1 rounded-full bg-leaf-tender dark:bg-cream/10 text-leaf-vibrant dark:text-cream font-bold border border-leaf/20">
                  {steps[activeStep].stats}
                </span>
              </div>

              <h3 className="font-display font-black text-2xl sm:text-3xl text-forest dark:text-cream mb-3">
                {steps[activeStep].title}
              </h3>

              <blockquote className="font-display italic text-sm text-copper dark:text-gold-light mb-4 border-l-2 border-leaf-vibrant pl-3">
                {steps[activeStep].quote}
              </blockquote>

              <p className="font-body text-sm sm:text-base text-forest/85 dark:text-cream/80 leading-relaxed mb-6">
                {steps[activeStep].desc}
              </p>

              {/* Quality Checklist */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-forest/10 dark:border-cream/10">
                <div className="flex items-center gap-2 text-xs font-semibold text-forest dark:text-cream">
                  <CheckCircle2 className="w-4 h-4 text-leaf-vibrant dark:text-gold shrink-0" />
                  <span>Zero Chemicals / Soda</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-forest dark:text-cream">
                  <CheckCircle2 className="w-4 h-4 text-leaf-vibrant dark:text-gold shrink-0" />
                  <span>A2 Desi Cow Ghee</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-forest dark:text-cream">
                  <CheckCircle2 className="w-4 h-4 text-leaf-vibrant dark:text-gold shrink-0" />
                  <span>Granite Stone Grinding</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-forest dark:text-cream">
                  <CheckCircle2 className="w-4 h-4 text-leaf-vibrant dark:text-gold shrink-0" />
                  <span>Cast-Iron Tawa Searing</span>
                </div>
              </div>
            </div>

            {/* Next / Prev step buttons */}
            <div className="flex items-center justify-between text-xs text-forest/60 dark:text-cream/60 px-2">
              <span>Step {activeStep + 1} of {steps.length}</span>
              <div className="flex gap-2">
                <button
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
                  className="px-3 py-1.5 rounded-lg border border-forest/20 dark:border-gold/20 disabled:opacity-30 cursor-pointer"
                >
                  ← Prev
                </button>
                <button
                  disabled={activeStep === steps.length - 1}
                  onClick={() => setActiveStep(prev => Math.min(steps.length - 1, prev + 1))}
                  className="px-3 py-1.5 rounded-lg border border-forest/20 dark:border-gold/20 disabled:opacity-30 cursor-pointer"
                >
                  Next →
                </button>
              </div>
            </div>

          </div>

          {/* Right: Rich Image Showcase with Gold Frame (6 cols) */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-gold/40 group aspect-[4/3] sm:aspect-[16/11]">
              <img
                src={steps[activeStep].image}
                alt={steps[activeStep].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-6 left-6 right-6 text-cream">
                <span className="text-[11px] uppercase tracking-widest font-mono text-gold block mb-1">
                  Cauvery Kitchen Archive
                </span>
                <span className="font-display font-bold text-lg sm:text-xl">
                  {steps[activeStep].title}
                </span>
              </div>
            </div>

            {/* Decorative Floating Floating Badge */}
            <div className="absolute -bottom-6 -left-4 sm:left-6 p-4 rounded-2xl bg-cream dark:bg-forest shadow-xl border border-gold/40 flex items-center gap-3 animate-bounce-slow">
              <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-forest dark:text-gold">
                <Flame className="w-5 h-5 text-chilli" />
              </div>
              <div>
                <p className="text-xs font-bold text-forest dark:text-cream">Slow Cooked Perfection</p>
                <p className="text-[10px] text-leaf dark:text-gold-light">Bathed in aromatic A2 ghee</p>
              </div>
            </div>
          </div>

        </div>

        {/* Four Animated Key Counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-20">
          <div className="p-6 rounded-2xl bg-white/70 dark:bg-espresso-card border border-forest/10 dark:border-gold/20 text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-center text-gold mb-2">
              <Clock className="w-6 h-6" />
            </div>
            <div className="font-display font-black text-3xl sm:text-4xl text-forest dark:text-cream mb-1">
              24<span className="text-leaf dark:text-gold">h</span>
            </div>
            <p className="text-xs font-bold uppercase tracking-wider text-forest/70 dark:text-cream/70">
              Slow Fermented
            </p>
            <p className="text-[10px] text-forest/50 dark:text-cream/50 mt-1">Zero chemicals or soda</p>
          </div>

          <div className="p-6 rounded-2xl bg-white/70 dark:bg-espresso-card border border-forest/10 dark:border-gold/20 text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-center text-gold mb-2">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="font-display font-black text-3xl sm:text-4xl text-forest dark:text-cream mb-1">
              20<span className="text-leaf dark:text-gold">+</span>
            </div>
            <p className="text-xs font-bold uppercase tracking-wider text-forest/70 dark:text-cream/70">
              Artisanal Varieties
            </p>
            <p className="text-[10px] text-forest/50 dark:text-cream/50 mt-1">Dosas, Idlis &amp; Kaapi</p>
          </div>

          <div className="p-6 rounded-2xl bg-white/70 dark:bg-espresso-card border border-forest/10 dark:border-gold/20 text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-center text-gold mb-2">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="font-display font-black text-3xl sm:text-4xl text-forest dark:text-cream mb-1">
              100<span className="text-leaf dark:text-gold">%</span>
            </div>
            <p className="text-xs font-bold uppercase tracking-wider text-forest/70 dark:text-cream/70">
              Pure Vegetarian
            </p>
            <p className="text-[10px] text-forest/50 dark:text-cream/50 mt-1">Dedicated Jain options</p>
          </div>

          <div className="p-6 rounded-2xl bg-white/70 dark:bg-espresso-card border border-forest/10 dark:border-gold/20 text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-center text-gold mb-2">
              <Star className="w-6 h-6 fill-gold" />
            </div>
            <div className="font-display font-black text-3xl sm:text-4xl text-forest dark:text-cream mb-1">
              4.9<span className="text-leaf dark:text-gold">★</span>
            </div>
            <p className="text-xs font-bold uppercase tracking-wider text-forest/70 dark:text-cream/70">
              Google Rating
            </p>
            <p className="text-[10px] text-forest/50 dark:text-cream/50 mt-1">1,280+ authentic reviews</p>
          </div>
        </div>

      </div>
    </section>
  );
};
