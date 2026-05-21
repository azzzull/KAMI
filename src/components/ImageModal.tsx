import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useEffect } from 'react';

type Props = {
  open: boolean;
  title: string;
  src: string;
  onClose: () => void;
};

export function ImageModal({ open, title, src, onClose }: Props) {
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[90] grid place-items-center bg-slate-950/85 p-4 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-6xl overflow-hidden rounded-[32px] bg-slate-950 shadow-[0_32px_100px_rgba(0,0,0,0.35)]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-slate-950/45 text-white backdrop-blur-md transition-all duration-300 hover:bg-white/15"
              aria-label="Close image preview"
            >
              <X className="h-4 w-4" />
            </button>
            <img src={src} alt={title} className="max-h-[86vh] w-full object-contain" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950/85 to-transparent px-5 pb-5 pt-16 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/55">Image Preview</p>
              <h3 className="mt-1 text-sm font-semibold">{title}</h3>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
