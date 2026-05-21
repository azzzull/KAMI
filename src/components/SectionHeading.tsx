import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1] as const;

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
};

export function SectionHeading({ eyebrow, title, description, align = 'left', className = '' }: Props) {
  const center = align === 'center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-8% 0px' }}
      transition={{ duration: 0.55, ease }}
      className={`max-w-3xl ${center ? 'mx-auto text-center' : ''} ${className}`}
    >
      {eyebrow ? (
        <p className="mb-3 inline-flex rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500 shadow-soft backdrop-blur">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">{description}</p>
      ) : null}
    </motion.div>
  );
}
