import { useEffect, useState } from 'react';

export function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0, visible: false });

  useEffect(() => {
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!isFinePointer) return;

    let frame = 0;
    let latest = { x: 0, y: 0 };

    const onMove = (event: MouseEvent) => {
      latest = { x: event.clientX, y: event.clientY };
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        setPosition({ x: latest.x, y: latest.y, visible: true });
      });
    };

    const onLeave = () => setPosition((current) => ({ ...current, visible: false }));

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseleave', onLeave);
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return position;
}
