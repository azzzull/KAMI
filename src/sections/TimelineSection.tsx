import { motion } from 'framer-motion';
import { timelineFooterNote, timelineGroups } from '../data/site';
import { SectionHeading } from '../components/SectionHeading';

export function TimelineSection() {
  return (
    <section className="relative overflow-x-clip overflow-y-visible bg-[linear-gradient(180deg,#f8fafc,white)] py-14 sm:py-16 lg:py-20">
      <div aria-hidden="true" className="pointer-events-none absolute -left-28 top-8 h-80 w-80 rounded-full border-[4rem] border-white/80" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-slate-100/80" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-36 left-1/2 h-[30rem] w-[30rem] rounded-full border-[5rem] border-slate-100/80" />
      <div aria-hidden="true" className="pointer-events-none absolute left-[8%] bottom-20 h-28 w-28 rounded-full bg-fuchsia-100/35 blur-2xl" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-10 lg:px-8">
        <SectionHeading
          eyebrow="Market Penetration Timeline"
          title="A reference timeline of the kinds of work KAMI has handled over the years."
          description="The portfolio timeline is directional rather than exhaustive. It is meant to show the breadth and continuity of our event work."
          align="center"
        />

        <div className="relative mt-10 lg:mt-12">
          <div className="scrollbar-hide -mx-5 overflow-x-auto overflow-y-visible px-5 pb-4 sm:-mx-10 sm:px-10 xl:mx-[calc(50%-50vw)] xl:overflow-visible xl:px-8">
            <div className="relative flex w-max items-center gap-6 py-6 sm:py-8 xl:mx-auto xl:grid xl:w-full xl:max-w-[96rem] xl:grid-cols-5">
              <div className="pointer-events-none absolute left-0 right-0 top-1/2 z-0 h-px -translate-y-1/2 bg-slate-200" />
              {timelineGroups.map((group, index) => (
                <motion.article
                  key={group.period}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-8% 0px' }}
                  transition={{ duration: 0.55, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
                  className="relative h-[34rem] w-[calc(100vw-2.5rem)] max-w-[18rem] flex-none sm:h-[32rem] sm:w-[18rem] xl:h-[34rem] xl:w-full xl:min-w-0"
                >
                  <div className="absolute left-1/2 top-1/2 z-20 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[linear-gradient(135deg,#EC198B,#6B1FAF,#1E3FAE)] ring-4 ring-white" />
                  <div
                    aria-hidden="true"
                    className={`pointer-events-none absolute left-1/2 z-0 h-8 w-px -translate-x-1/2 bg-slate-200 ${
                      index % 2 === 0 ? 'bottom-1/2' : 'top-1/2'
                    }`}
                  />
                  <div className={`absolute left-0 right-0 z-10 ${index % 2 === 0 ? 'bottom-1/2 pb-8' : 'top-1/2 pt-8'}`}>
                    <div className="relative rounded-[24px] border border-slate-200 bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.01] hover:shadow-[0_24px_60px_rgba(17,24,39,0.10)]">
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-fuchsia-600">{group.period}</p>
                      <ul className="mt-4 space-y-2.5">
                        {group.items.map((item) => (
                          <li key={item} className="rounded-2xl bg-slate-50 px-3.5 py-2.5 text-sm leading-6 text-slate-700 transition-colors duration-300 hover:bg-slate-100">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>

        <p className="mx-auto mt-8 max-w-4xl text-center text-sm leading-7 text-slate-500">{timelineFooterNote}</p>
      </div>
    </section>
  );
}
