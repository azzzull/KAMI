import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

const ease = [0.22, 1, 0.36, 1] as const;

export function GlassCard({ children, className = '', delay = 0 }: Props) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-8% 0px' }}
      transition={{ duration: 0.55, delay, ease }}
      whileHover={reduce ? undefined : { y: -3, scale: 1.005 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
