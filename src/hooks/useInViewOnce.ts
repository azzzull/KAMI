import { useEffect, useRef, useState } from 'react';

export function useInViewOnce<T extends HTMLElement>(rootMargin = '0px 0px -12% 0px') {
  const ref = useRef<T | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || isInView) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.18, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [isInView, rootMargin]);

  return { ref, isInView };
}

