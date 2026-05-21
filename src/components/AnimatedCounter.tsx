import { motion, animate, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const ease = [0.22, 1, 0.36, 1] as const;

type Props = {
  value: number;
  suffix?: string;
  duration?: number;
};

export function AnimatedCounter({ value, suffix = '', duration = 1.8 }: Props) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: '-15% 0px' });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: Math.min(duration, 1.3),
      ease: 'easeOut',
      onUpdate(latest) {
        setDisplayValue(Math.round(latest));
      }
    });
    return () => controls.stop();
  }, [duration, inView, value]);

  return (
    <span ref={ref} className="inline-flex items-baseline gap-1">
      <motion.span className="tabular-nums" aria-label={`${value}${suffix}`}>
        {displayValue.toLocaleString()}
      </motion.span>
      <span>{suffix}</span>
    </span>
  );
}
