import { useState, useEffect, useRef } from 'react';

export function useScrollVelocity() {
  const [velocity, setVelocity] = useState(0);
  const lastScrollY = useRef(0);
  const lastTime = useRef(Date.now());

  useEffect(() => {
    let timeoutId: any;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const currentTime = Date.now();
      const timeDiff = currentTime - lastTime.current;

      if (timeDiff > 0) {
        const delta = currentScrollY - lastScrollY.current;
        const currentVelocity = delta / timeDiff;
        setVelocity(currentVelocity);

        lastScrollY.current = currentScrollY;
        lastTime.current = currentTime;

        // Reset velocity when scrolling stops
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          setVelocity(0);
        }, 150);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  return velocity;
}
