import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { ProjectItem } from '../data/site';
import { GlassCard } from './GlassCard';

type Props = {
  project: ProjectItem;
  featured?: boolean;
  compact?: boolean;
};

export function ProjectCard({ project, featured = false, compact = false }: Props) {
  if (compact) {
    return (
      <Link
        to={`/portfolio/${project.slug}`}
        className="group block overflow-hidden rounded-[18px] border border-white/70 bg-slate-950 no-underline shadow-[0_18px_45px_rgba(17,24,39,0.16)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_24px_60px_rgba(17,24,39,0.18)]"
      >
        <div className="relative h-[10.5rem] overflow-hidden sm:h-[12rem] lg:h-[13rem]">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition duration-300 ease-[0.22,1,0.36,1] group-hover:scale-[1.04]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/15 to-transparent transition duration-300 group-hover:from-slate-950/95" />
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-base font-bold tracking-tight text-white sm:text-lg">{project.title}</h3>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <GlassCard className="h-full">
      <Link
        to={`/portfolio/${project.slug}`}
        className={`group block overflow-hidden rounded-[32px] border border-slate-200 bg-white no-underline shadow-soft transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_24px_60px_rgba(17,24,39,0.12)] ${featured ? 'min-h-[28rem]' : 'min-h-[22rem]'}`}
      >
        <div className="relative h-72 overflow-hidden sm:h-[22rem]">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition duration-300 ease-[0.22,1,0.36,1] group-hover:scale-[1.05]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-70 transition duration-300 group-hover:opacity-85" />
          <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white backdrop-blur transition duration-300 group-hover:bg-white/15">
            {project.category}
          </div>
          <div className="absolute bottom-5 left-5 right-5">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">Project</p>
            <h3 className="mt-2 max-w-lg text-2xl font-bold tracking-tight text-white sm:text-3xl">{project.title}</h3>
            <p className="mt-3 max-w-xl text-sm leading-7 text-slate-200">{project.description}</p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition-all duration-300 group-hover:translate-x-1 group-hover:shadow-[0_16px_40px_rgba(255,255,255,0.24)]">
              View Project
              <ArrowUpRight className="h-4 w-4" />
            </div>
          </div>
        </div>
      </Link>
    </GlassCard>
  );
}
