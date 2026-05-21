import { motion, useReducedMotion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import { Link, type LinkProps } from 'react-router-dom';
import type { ReactNode } from 'react';

type CommonProps = {
  children: ReactNode;
  className?: string;
};

type ButtonProps = CommonProps & Omit<HTMLMotionProps<'button'>, 'children' | 'className'>;
type AnchorProps = CommonProps & Omit<HTMLMotionProps<'a'>, 'children' | 'className'>;

const ease = [0.22, 1, 0.36, 1] as const;

export function MagneticButton({ children, className = '', ...props }: ButtonProps) {
  const reduce = useReducedMotion();

  return (
    <motion.button
      type="button"
      whileHover={reduce ? undefined : { y: -2, scale: 1.01 }}
      whileTap={reduce ? undefined : { scale: 0.98 }}
      transition={{ duration: 0.45, ease }}
      className={className}
      {...props}
    >
      {children}
    </motion.button>
  );
}

export function MagneticAnchor({ children, className = '', ...props }: AnchorProps) {
  const reduce = useReducedMotion();

  return (
    <motion.a
      whileHover={reduce ? undefined : { y: -2, scale: 1.01 }}
      whileTap={reduce ? undefined : { scale: 0.98 }}
      transition={{ duration: 0.45, ease }}
      className={`no-underline ${className}`}
      {...props}
    >
      {children}
    </motion.a>
  );
}

type LinkButtonProps = CommonProps & LinkProps;

export function MagneticLink({ children, className = '', ...props }: LinkButtonProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div whileHover={reduce ? undefined : { y: -2, scale: 1.01 }} whileTap={reduce ? undefined : { scale: 0.98 }} transition={{ duration: 0.35, ease }}>
      <Link className={`no-underline ${className}`} {...props}>
        {children}
      </Link>
    </motion.div>
  );
}
