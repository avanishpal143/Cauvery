import React, { useState, useEffect, useRef } from 'react';

interface ProgressiveMetricProps {
  icon: React.ReactNode;
  value: number;
  decimals?: number;
  suffix?: string;
  label: string;
  sublabel: string;
  progressPercent: number; // 0 - 100 for visual progress meter
  colorTheme?: 'leaf' | 'gold' | 'emerald';
}

export const ProgressiveMetricCard: React.FC<ProgressiveMetricProps> = ({
  icon,
  value,
  decimals = 0,
  suffix = '',
  label,
  sublabel,
  progressPercent,
  colorTheme = 'leaf',
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [currentProgress, setCurrentProgress] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Progressive Count-Up Animation
          const duration = 2000; // ms
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Ease out cubic
            const easeProgress = 1 - Math.pow(1 - progress, 3);

            setDisplayValue(easeProgress * value);
            setCurrentProgress(easeProgress * progressPercent);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setDisplayValue(value);
              setCurrentProgress(progressPercent);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.25 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated, value, progressPercent]);

  // SVG Circle calculations (radius: 36, perimeter: 2 * PI * 36 ≈ 226)
  const radius = 34;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (currentProgress / 100) * circumference;

  return (
    <div
      ref={cardRef}
      className="group relative p-6 sm:p-7 rounded-3xl bg-white/95 dark:bg-espresso-card border-2 border-leaf/20 dark:border-gold/25 shadow-lg shadow-forest/5 hover:shadow-2xl hover:border-leaf transition-all duration-500 flex flex-col items-center text-center overflow-hidden hover:-translate-y-1.5"
    >
      {/* Background radial ambient glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#B8E2BF]/20 via-transparent to-[#B8E2BF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Progressive SVG Circular Dial with Icon in Center */}
      <div className="relative w-20 h-20 mb-4 flex items-center justify-center">
        {/* Background Track */}
        <svg className="w-full h-full -rotate-90" viewBox="0 0 80 80">
          <circle
            cx="40"
            cy="40"
            r={radius}
            stroke="rgba(46, 125, 50, 0.12)"
            strokeWidth="5"
            fill="none"
          />
          {/* Animated Progressive Filling Ring */}
          <circle
            cx="40"
            cy="40"
            r={radius}
            stroke={colorTheme === 'gold' ? '#D99426' : '#2E7D32'}
            strokeWidth="5.5"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="none"
            className="transition-all duration-300 ease-out"
          />
        </svg>

        {/* Center Icon */}
        <div className="absolute inset-0 flex items-center justify-center text-leaf group-hover:scale-110 group-hover:text-gold transition-all duration-300">
          {icon}
        </div>
      </div>

      {/* Main Progressive Animated Number */}
      <div className="font-display font-black text-3xl sm:text-4xl text-forest dark:text-cream tracking-tight flex items-baseline justify-center mb-1.5">
        <span>{decimals > 0 ? displayValue.toFixed(decimals) : Math.round(displayValue)}</span>
        <span className="text-leaf-vibrant dark:text-gold ml-0.5">{suffix}</span>
      </div>

      {/* Title Label */}
      <p className="font-display font-extrabold text-xs sm:text-sm uppercase tracking-wider text-forest dark:text-cream">
        {label}
      </p>

      {/* Sublabel Pill */}
      <p className="font-body text-[11px] text-forest/70 dark:text-cream/70 mt-1.5 font-medium px-2.5 py-0.5 rounded-full bg-[#B8E2BF]/30 dark:bg-white/5 border border-leaf/15">
        {sublabel}
      </p>

      {/* Bottom Progressive Progress Bar */}
      <div className="w-full mt-4 h-1.5 bg-forest/10 dark:bg-cream/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-leaf to-gold rounded-full transition-all duration-500 ease-out"
          style={{ width: `${currentProgress}%` }}
        />
      </div>
    </div>
  );
};
