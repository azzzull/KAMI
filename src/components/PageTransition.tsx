import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

const ease = [0.22, 1, 0.36, 1] as const;

type Props = {
  children: ReactNode;
};

export function PageTransition({ children }: Props) {
  const location = useLocation();
  const reduce = useReducedMotion();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname + location.hash}
        initial={reduce ? { opacity: 0 } : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
        transition={{ duration: 0.45, ease }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
