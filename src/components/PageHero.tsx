import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

type Props = {
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
  image?: string;
};

export function PageHero({ eyebrow, title, description, ctaLabel, ctaHref, image }: Props) {
  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36">
      <div className="absolute inset-0 bg-mesh-primary" />
      <div className="noise-overlay" />
      <div className="absolute -left-20 top-16 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(236,25,139,0.18),transparent_72%)] blur-3xl" />
      <div className="absolute right-[-6rem] top-24 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(30,63,174,0.16),transparent_72%)] blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 pb-14 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8 lg:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col justify-center"
        >
          <p className="inline-flex w-fit rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500 shadow-soft backdrop-blur">
            {eyebrow}
          </p>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-extrabold tracking-tight text-slate-950 text-balance sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">{description}</p>
          {ctaLabel && ctaHref ? (
            <div className="mt-8">
              <Link
                to={ctaHref}
                className="no-underline inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-4 text-sm font-semibold text-white shadow-soft transition-all duration-300 hover:bg-slate-800"
              >
                {ctaLabel}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ) : null}
        </motion.div>

        {image ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-[40px] bg-[linear-gradient(135deg,rgba(236,25,139,0.18),rgba(107,31,175,0.12),rgba(30,63,174,0.18))] blur-2xl" />
            <div className="relative overflow-hidden rounded-[40px] border border-white/70 bg-white shadow-soft">
              <img src={image} alt={title} className="h-full w-full object-cover" loading="eager" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent opacity-65" />
            </div>
          </motion.div>
        ) : null}
      </div>
    </section>
  );
}
