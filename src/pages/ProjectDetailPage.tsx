import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Clock3, Play, Star } from 'lucide-react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { projectShowcase } from '../data/site';
import { MediaThumbnail } from '../components/MediaThumbnail';
import { ProjectCard } from '../components/ProjectCard';
import { SectionHeading } from '../components/SectionHeading';
import { VideoModal } from '../components/VideoModal';

const ease = [0.22, 1, 0.36, 1] as const;

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projectShowcase.find((item) => item.slug === slug) ?? projectShowcase[0];
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden bg-white pb-12 pt-28 sm:pb-16 sm:pt-32">
        <div className="mx-auto max-w-6xl px-8 sm:px-10 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr]">
            <aside className="lg:sticky lg:top-24 lg:h-fit">
              <div className="rounded-[36px] border border-slate-200 bg-[linear-gradient(180deg,#ffffff,#f8fafc)] p-6 shadow-soft">
                <Link to="/portfolio" className="no-underline inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-slate-950">
                  <ArrowLeft className="h-4 w-4" /> Back to portfolio
                </Link>
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">Event overview</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">{project.overview}</p>

                <div className="mt-6 grid gap-3">
                  {project.metrics.map((metric) => (
                    <div key={metric.label} className="flex items-center justify-between rounded-[24px] border border-slate-200 bg-white px-4 py-3">
                      <span className="text-sm font-medium text-slate-500">{metric.label}</span>
                      <span className="font-semibold text-slate-950">{metric.value}</span>
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setVideoOpen(true)}
                  className="mt-6 group relative overflow-hidden rounded-[28px] border border-slate-200 bg-slate-950 text-left text-white shadow-soft transition-all duration-300 hover:-translate-y-0.5"
                >
                  <MediaThumbnail src={project.videoThumb} alt={project.videoTitle} className="h-48 w-full object-cover opacity-85 transition duration-500 group-hover:scale-[1.02]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="grid h-16 w-16 place-items-center rounded-full border border-white/20 bg-white/[0.15] backdrop-blur-md">
                      <Play className="h-6 w-6 fill-white text-white" />
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-xs uppercase tracking-[0.24em] text-white/[0.60]">Video highlight</p>
                    <p className="mt-1 text-sm font-semibold">{project.videoTitle}</p>
                  </div>
                </button>
              </div>
            </aside>

            <div className="space-y-8">
              <section className="rounded-[36px] border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
                <SectionHeading
                  eyebrow={project.category}
                  title={project.title}
                  description={project.description}
                />
              </section>

              <section className="grid gap-5 md:grid-cols-3">
                {[
                  { icon: Clock3, title: 'Challenge', text: project.challenge },
                  { icon: CheckCircle2, title: 'Solution', text: project.solution },
                  { icon: Star, title: 'Outcome', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.article
                      key={item.title}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-8% 0px' }}
                      transition={{ duration: 0.5, delay: index * 0.04, ease }}
                      className="rounded-[30px] border border-slate-200 bg-[linear-gradient(180deg,#ffffff,#f8fafc)] p-5 shadow-soft"
                    >
                      <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[linear-gradient(135deg,#EC198B,#6B1FAF,#1E3FAE)] text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="mt-4 text-lg font-bold text-slate-950">{item.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
                    </motion.article>
                  );
                })}
              </section>
            </div>
          </div>

          <section className="mt-10">
            <SectionHeading
              eyebrow="Event Gallery"
              title="A consistent gallery grid with lightbox preview."
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio praesent libero."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {project.gallery.map((image, index) => (
                <motion.button
                  key={image.src + index}
                  type="button"
                  onClick={() => setLightbox(image.src)}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-8% 0px' }}
                  transition={{ duration: 0.45, delay: index * 0.02, ease }}
                  className="group aspect-[4/3] w-full overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_45px_rgba(17,24,39,0.08)]"
                >
                  <img src={image.src} alt={image.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]" loading="lazy" />
                </motion.button>
              ))}
            </div>
          </section>

          <section className="mt-10 grid gap-6 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-[36px] border border-slate-200 bg-white p-6 shadow-soft">
              <SectionHeading eyebrow="Timeline" title="From strategy to live delivery." />
              <div className="mt-6 space-y-4">
                {project.timeline.map((step, index) => (
                  <div key={step.label} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="grid h-10 w-10 place-items-center rounded-full bg-[linear-gradient(135deg,#EC198B,#6B1FAF,#1E3FAE)] text-sm font-bold text-white">
                        {index + 1}
                      </div>
                      {index < project.timeline.length - 1 ? <div className="h-full w-px bg-slate-200" /> : null}
                    </div>
                    <div className="pb-6">
                      <h4 className="text-base font-semibold text-slate-950">{step.label}</h4>
                      <p className="mt-2 text-sm leading-7 text-slate-600">{step.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[36px] border border-slate-200 bg-[linear-gradient(135deg,#111827,#1e3fae,#6b1faf,#ec198b)] p-6 text-white shadow-soft">
              <SectionHeading
                eyebrow="Event Statistics"
                title="Relevant numbers at a glance."
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                className="text-white [&>p:first-child]:border-white/25 [&>p:first-child]:bg-white [&>p:first-child]:text-[#6B1FAF] [&_h2]:text-white [&_p]:text-white/75"
              />
              <div className="mt-8 grid gap-3">
                {project.metrics.map((metric) => (
                  <div key={metric.label} className="rounded-[26px] border border-white/10 bg-white/[0.08] px-4 py-4 text-sm leading-7 text-white/90">
                    <span className="block text-xs uppercase tracking-[0.24em] text-white/[0.55]">{metric.label}</span>
                    <span className="mt-1 block text-lg font-semibold">{metric.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mt-10">
            <SectionHeading eyebrow="Related Projects" title="More selected KAMI projects." />
            <div className="mt-8 grid items-stretch gap-5 lg:grid-cols-2">
              {projectShowcase.filter((item) => item.slug !== project.slug).slice(0, 2).map((item) => (
                <div key={item.slug} className="h-full">
                  <ProjectCard project={item} />
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>

      <AnimatePresence>
        {lightbox ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] grid place-items-center bg-slate-950/85 p-4 backdrop-blur-md"
            onClick={() => setLightbox(null)}
          >
            <motion.img
              src={lightbox}
              alt="Expanded project visual"
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              transition={{ duration: 0.3, ease }}
              className="max-h-[85vh] w-full max-w-5xl rounded-[30px] object-contain shadow-soft"
              onClick={(event) => event.stopPropagation()}
            />
          </motion.div>
        ) : null}
      </AnimatePresence>

      <VideoModal
        open={videoOpen}
        title={project.videoTitle}
        src={project.videoSrc ?? 'https://www.youtube-nocookie.com/embed/ysz5S6PUM-U'}
        onClose={() => setVideoOpen(false)}
      />
    </>
  );
}
