import { quoteCopy } from '../data/site';

export function QuoteSection() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#111827,#1e3fae,#6b1faf,#ec198b)] py-16 text-white sm:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.12),transparent_20%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.08),transparent_22%)]" />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.34em] text-white/[0.55]">Quote</p>
        <blockquote className="mt-5 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
          "{quoteCopy.quote}"
        </blockquote>
        <p className="mt-4 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">- {quoteCopy.author}</p>
        <p className="mt-4 text-base text-white/75">{quoteCopy.subtext}</p>
      </div>
    </section>
  );
}
