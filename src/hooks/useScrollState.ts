import { useEffect, useState } from 'react';

export function useScrollState() {
  const [scrolled, setScrolled] = useState(false);
  const [direction, setDirection] = useState<'up' | 'down'>('up');

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 16);
      setDirection(y > lastY ? 'down' : 'up');
      lastY = y;
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return { scrolled, direction };
}

