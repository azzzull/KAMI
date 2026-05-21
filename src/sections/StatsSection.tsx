import { motion } from 'framer-motion';
import { stats } from '../data/site';
import { AnimatedCounter } from '../components/AnimatedCounter';

export function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#111827,#1e3fae,#6b1faf,#ec198b)] py-14 text-white sm:py-16 lg:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_20%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.08),transparent_20%)]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.article
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-8% 0px' }}
                transition={{ duration: 0.55, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-[30px] border border-white/10 bg-white/[0.08] p-6 backdrop-blur-sm"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-4xl font-bold tracking-tight sm:text-5xl">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <p className="mt-3 text-xs uppercase tracking-[0.24em] text-white/70">{stat.label}</p>
                  </div>
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10">
                    <Icon className="h-5 w-5 text-cyan-200" />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
