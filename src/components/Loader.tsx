import { motion } from 'framer-motion';

type Props = {
  active: boolean;
};

export function Loader({ active }: Props) {
  if (!active) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 0.45, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="pointer-events-none fixed inset-0 z-[100] grid place-items-center bg-white"
    >
      <div className="rounded-full border border-slate-200 bg-white px-5 py-3 text-xs font-bold tracking-[0.34em] text-slate-500 shadow-soft">
        KAMI
      </div>
    </motion.div>
  );
}
