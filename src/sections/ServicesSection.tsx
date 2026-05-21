import { motion } from 'framer-motion';
import { Briefcase, Camera, Sparkles, Workflow } from 'lucide-react';
import { Link } from 'react-router-dom';
import { categories } from '../data/site';
import { SectionHeading } from '../components/SectionHeading';

const servicePillars = [
  {
    title: 'Ideation and concept',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    icon: Sparkles
  },
  {
    title: 'Stage and visuals',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    icon: Camera
  },
  {
    title: 'Production control',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    icon: Workflow
  },
  {
    title: 'Corporate readiness',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    icon: Briefcase
  }
];

export function ServicesSection() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f8fafc,white)] py-14 sm:py-16 lg:py-20">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title="The service model behind every KAMI event."
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio praesent libero."
          align="center"
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.slug}
              to={`/services#${category.slug}`}
              className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_24px_60px_rgba(17,24,39,0.12)]"
              aria-label={`Open ${category.title} services`}
            >
              <img
                src={category.image}
                alt={category.title}
                className="h-48 w-full object-cover transition duration-300 group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-75" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-xs uppercase tracking-[0.24em] text-white/60">{category.title}</p>
                <p className="mt-1 text-sm font-semibold leading-6">Lorem ipsum dolor sit amet</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {servicePillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-8% 0px' }}
                transition={{ duration: 0.55, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-[30px] border border-slate-200 bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_24px_60px_rgba(17,24,39,0.12)]"
              >
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[linear-gradient(135deg,#EC198B,#6B1FAF,#1E3FAE)] text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-bold tracking-tight text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
