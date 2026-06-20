import { motion } from 'framer-motion';
import { whyKamiCards } from '../data/site';
import { SectionHeading } from '../components/SectionHeading';

export function WhyKamiSection() {
  return (
    <section
      id="why-kami"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#fdf2f8_35%,#eef4ff_100%)] py-14 sm:py-16 lg:py-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(236,25,139,0.12),transparent_30%),radial-gradient(circle_at_82%_8%,rgba(30,63,174,0.10),transparent_28%)]" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-10 lg:px-8">
        <SectionHeading
          eyebrow="Why KAMI"
          title="Three Reasons Clients Trust KAMI With Their Biggest Moments"
          description="Great events require more than creative ideas. They require the right balance of commercial thinking, operational control, and reliable execution. That's where we thrive."
          align="center"
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {whyKamiCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-8% 0px' }}
                transition={{ duration: 0.45, delay: index * 0.03, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4, scale: 1.015 }}
                whileTap={{ scale: 0.995 }}
                className="min-w-0 will-change-transform rounded-[28px] border border-slate-200 bg-[linear-gradient(180deg,#ffffff,#f8fafc)] p-5 shadow-soft transition-shadow duration-150 hover:shadow-[0_24px_60px_rgba(17,24,39,0.10)] sm:rounded-[32px] sm:p-6"
              >
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[linear-gradient(135deg,#EC198B,#6B1FAF,#1E3FAE)] text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-bold tracking-tight text-slate-950">{card.title}</h3>
                <p className="mt-3 whitespace-pre-line text-sm leading-7 text-slate-600">{card.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
