import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show custom cursor on fine pointer devices (desktop/mouse)
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = Boolean(
          target.closest('button') ||
          target.closest('a') ||
          target.closest('input') ||
          target.closest('select') ||
          target.closest('[role="button"]') ||
          target.closest('.interactive-hover')
        );
        setIsHovered(isInteractive);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Central gold dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-gold transition-transform duration-75 ease-out"
        style={{
          transform: `translate3d(${pos.x - 4}px, ${pos.y - 4}px, 0)`,
          width: '8px',
          height: '8px',
        }}
      />
      {/* Outer trailing aura */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border border-gold/70 transition-all duration-300 ease-out ${
          isHovered
            ? 'scale-150 bg-gold/20 border-gold shadow-[0_0_20px_rgba(232,176,75,0.5)]'
            : 'scale-100 bg-transparent'
        }`}
        style={{
          transform: `translate3d(${pos.x - 18}px, ${pos.y - 18}px, 0)`,
          width: '36px',
          height: '36px',
        }}
      />
    </>
  );
};
