import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

type Props = {
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
  image?: string;
};

const ease = [0.22, 1, 0.36, 1] as const;

const heroThemes: Record<string, { accent: string; chip: string; orb: string }> = {
  about: {
    accent: 'linear-gradient(135deg,#EC198B 0%,#6B1FAF 52%,#1E3FAE 100%)',
    chip: 'About the agency',
    orb: 'rgba(236,25,139,0.18)'
  },
  services: {
    accent: 'linear-gradient(135deg,#1E3FAE 0%,#6B1FAF 50%,#EC198B 100%)',
    chip: 'Service architecture',
    orb: 'rgba(30,63,174,0.18)'
  },
  portfolio: {
    accent: 'linear-gradient(135deg,#111827 0%,#1E3FAE 52%,#EC198B 100%)',
    chip: 'Selected work',
    orb: 'rgba(107,31,175,0.18)'
  },
  contact: {
    accent: 'linear-gradient(135deg,#EC198B 0%,#C61D8F 45%,#111827 100%)',
    chip: 'Start the brief',
    orb: 'rgba(56,189,248,0.16)'
  },
  default: {
    accent: 'linear-gradient(135deg,#EC198B 0%,#6B1FAF 52%,#1E3FAE 100%)',
    chip: 'KAMI Event Management',
    orb: 'rgba(236,25,139,0.16)'
  }
};

function getTheme(eyebrow: string) {
  const key = eyebrow.toLowerCase();
  if (key.includes('about')) return heroThemes.about;
  if (key.includes('service')) return heroThemes.services;
  if (key.includes('portfolio')) return heroThemes.portfolio;
  if (key.includes('contact')) return heroThemes.contact;
  return heroThemes.default;
}

export function PageHero({ eyebrow, title, description, ctaLabel, ctaHref }: Props) {
  const theme = getTheme(eyebrow);

  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-32" style={{ background: theme.accent }}>
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-white" />
      <div className="noise-overlay opacity-20" />
      <div
        className="absolute -left-24 top-24 h-72 w-72 rounded-full blur-3xl"
        style={{ background: `radial-gradient(circle,${theme.orb},transparent 70%)` }}
      />
      <div className="absolute right-[-7rem] top-24 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.16),transparent_70%)] blur-3xl" />
      <div className="absolute left-1/2 top-24 h-px w-[46rem] -translate-x-1/2 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.45),transparent)]" />

      <div className="relative mx-auto max-w-6xl px-8 pb-14 sm:px-10 lg:px-8 lg:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease }}
          className="relative z-10 mx-auto max-w-4xl rounded-[40px] border border-white/15 bg-white/[0.12] p-6 text-center text-white shadow-[0_24px_80px_rgba(17,24,39,0.18)] backdrop-blur-md sm:p-8 lg:p-10"
        >
          <p className="inline-flex w-fit rounded-full border border-white/20 bg-white px-4 py-2 text-[11px] font-bold uppercase tracking-[0.28em] text-[#6B1FAF] shadow-soft">
            {eyebrow}
          </p>
          <h1 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-extrabold tracking-tight text-white text-balance sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/78 sm:text-base sm:leading-8">{description}</p>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row sm:items-center">
            {ctaLabel && ctaHref ? (
              <Link
                to={ctaHref}
                className="no-underline inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-bold text-slate-950 shadow-[0_18px_45px_rgba(255,255,255,0.18)] transition-all duration-300 hover:scale-[1.02] hover:bg-slate-50"
              >
                {ctaLabel}
                <ArrowRight className="h-4 w-4" />
              </Link>
            ) : null}
            <div className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 text-sm font-semibold text-white backdrop-blur">
              <Sparkles className="h-4 w-4 text-cyan-200" />
              {theme.chip}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
