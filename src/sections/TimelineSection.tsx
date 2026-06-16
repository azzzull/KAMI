import { motion } from 'framer-motion';
import { timelineFooterNote, timelineGroups } from '../data/site';
import { SectionHeading } from '../components/SectionHeading';

export function TimelineSection() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f8fafc,white)] py-14 sm:py-16 lg:py-20">
      <div aria-hidden="true" className="pointer-events-none absolute -left-28 top-8 h-80 w-80 rounded-full border-[4rem] border-white/80" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-slate-100/80" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-36 left-1/2 h-[30rem] w-[30rem] rounded-full border-[5rem] border-slate-100/80" />
      <div aria-hidden="true" className="pointer-events-none absolute left-[8%] bottom-20 h-28 w-28 rounded-full bg-fuchsia-100/35 blur-2xl" />
      <div className="relative mx-auto max-w-6xl px-8 sm:px-10 lg:px-8">
        <SectionHeading
          eyebrow="Portfolio Timeline"
          title="A reference timeline of the kinds of work KAMI has handled over the years."
          description="The portfolio timeline is directional rather than exhaustive. It is meant to show the breadth and continuity of our event work."
          align="center"
        />

        <div className="relative mt-12">
          <div className="absolute left-4 top-0 h-full w-px bg-slate-200 md:left-1/2" />
          <div className="space-y-6">
            {timelineGroups.map((group, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.article
                  key={group.period}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-8% 0px' }}
                  transition={{ duration: 0.55, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative flex md:items-center ${isLeft ? 'md:justify-start' : 'md:justify-end'}`}
                >
                  <div className="absolute left-4 top-5 z-10 h-3 w-3 rounded-full bg-[linear-gradient(135deg,#EC198B,#6B1FAF,#1E3FAE)] ring-4 ring-white md:left-1/2 md:-translate-x-1/2" />
                  <div className={`ml-10 w-full md:ml-0 md:w-[calc(50%-2.5rem)] ${isLeft ? 'md:pr-10' : 'md:pl-10'}`}>
                    <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.01] hover:shadow-[0_24px_60px_rgba(17,24,39,0.10)]">
                      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-fuchsia-600">{group.period}</p>
                      <ul className="mt-4 space-y-3">
                        {group.items.map((item) => (
                          <li key={item} className="rounded-2xl bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-700 transition-colors duration-300 hover:bg-slate-100">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        <p className="mx-auto mt-8 max-w-4xl text-center text-sm leading-7 text-slate-500">{timelineFooterNote}</p>
      </div>
    </section>
  );
}
