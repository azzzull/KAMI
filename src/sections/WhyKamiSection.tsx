import { motion } from 'framer-motion';
import { whyKamiCards } from '../data/site';
import { SectionHeading } from '../components/SectionHeading';

export function WhyKamiSection() {
  return (
    <section id="why-kami" className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      <div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(90deg,rgba(236,25,139,0.06),rgba(107,31,175,0.05),rgba(30,63,174,0.06))]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why KAMI"
          title="Three reasons clients trust KAMI with important events."
          description="The logic is simple: budget discipline, inhouse control, and production ownership."
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
                className="will-change-transform rounded-[32px] border border-slate-200 bg-[linear-gradient(180deg,#ffffff,#f8fafc)] p-6 shadow-soft transition-shadow duration-150 hover:shadow-[0_24px_60px_rgba(17,24,39,0.10)]"
              >
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[linear-gradient(135deg,#EC198B,#6B1FAF,#1E3FAE)] text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-bold tracking-tight text-slate-950">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{card.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
