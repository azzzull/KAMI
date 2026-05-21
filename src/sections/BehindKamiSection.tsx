import { motion } from 'framer-motion';
import { teamProfiles } from '../data/site';
import { SectionHeading } from '../components/SectionHeading';

export function BehindKamiSection() {
  return (
    <section id="behind-kami" className="relative overflow-hidden bg-[linear-gradient(180deg,#f8fafc,white)] py-14 sm:py-16 lg:py-20">
      <div className="relative mx-auto max-w-6xl px-8 sm:px-10 lg:px-8">
        <SectionHeading
          eyebrow="Behind KAMI"
          title="The people behind the calm delivery and the clear thinking."
          description="A small core team with deep corporate and production experience gives KAMI its balance of polish and practical control."
          align="center"
        />

        <div className="mt-9 grid gap-5 lg:grid-cols-2">
          {teamProfiles.map((profile, index) => (
            <motion.article
              key={profile.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8% 0px' }}
              transition={{ duration: 0.55, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="group relative rounded-[32px] border border-slate-200 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.01] hover:shadow-[0_24px_60px_rgba(17,24,39,0.12)]"
            >
              <div className="absolute left-6 top-6 z-10">
                <div className="h-14 w-14 overflow-hidden rounded-[20px] border border-white/70 bg-slate-100 shadow-[0_14px_30px_rgba(17,24,39,0.10)] ring-4 ring-white sm:h-16 sm:w-16">
                  <img
                    src={profile.photo}
                    alt={profile.name}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                    loading="eager"
                  />
                </div>
              </div>
              <div className="min-h-16 pl-[4.5rem] sm:min-h-[4.5rem] sm:pl-20">
                <div className="min-w-0">
                  <p className="text-xl font-bold tracking-tight text-slate-950">{profile.name}</p>
                  <p className="mt-1 text-sm font-semibold uppercase tracking-[0.22em] text-fuchsia-600">{profile.role}</p>
                </div>
              </div>
              <p className="mt-3 text-sm leading-7 text-slate-600">{profile.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
