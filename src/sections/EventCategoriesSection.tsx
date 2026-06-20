import { motion } from 'framer-motion';
import { Play, Image as ImageIcon } from 'lucide-react';
import { useState } from 'react';
import { categories } from '../data/site';
import { MediaThumbnail } from '../components/MediaThumbnail';
import { SectionHeading } from '../components/SectionHeading';
import { ImageModal } from '../components/ImageModal';
import { VideoModal } from '../components/VideoModal';

export function EventCategoriesSection() {
  const [videoTitle, setVideoTitle] = useState<string | null>(null);
  const [previewImage, setPreviewImage] = useState<{ title: string; src: string } | null>(null);
  const activeVideo = categories.find((item) => item.videoTitle === videoTitle);

  return (
    <section className="relative overflow-hidden bg-white py-8 sm:py-10 lg:py-12">
      <div className="relative mx-auto max-w-6xl px-5 sm:px-10 lg:px-8">
        <SectionHeading
          eyebrow="Where Great Moments Take Shape"
          title="Every event serves a different purpose. Some celebrate. Some inspire. Some launch, engage, entertain, or transform."
          description="Whatever the objective, KAMI combines strategy, creativity, and execution to create experiences people remember long after the lights go down. From annual celebrations and award nights to leadership meetings, town halls, and customer appreciation events, we help organizations create experiences that strengthen relationships, reinforce culture, and leave lasting impressions."
          align="center"
        />

        <div className="mt-8 space-y-7">
          {categories.map((category, index) => (
            <motion.section
              key={category.slug}
              id={category.slug}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8% 0px' }}
              transition={{ duration: 0.55, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
              className="min-w-0 overflow-hidden rounded-[24px] border border-slate-200 bg-[linear-gradient(180deg,#ffffff,#f8fafc)] shadow-soft"
            >
              <div>
                <div className="relative h-48 overflow-hidden sm:h-56 lg:h-64">
                  <img src={category.image} alt={category.title} className="h-full w-full object-cover object-center transition duration-500 hover:scale-[1.02]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/15 to-transparent opacity-75" />
                  <div className="absolute left-4 right-4 top-4 w-fit max-w-[calc(100%-2rem)] break-words rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[9px] font-semibold uppercase leading-4 tracking-[0.16em] text-white backdrop-blur-md sm:left-5 sm:right-auto sm:top-5 sm:max-w-[calc(100%-2.5rem)] sm:text-[10px] sm:tracking-[0.22em]">
                    {category.title}
                  </div>
                  <div className="absolute bottom-5 left-5 right-5 max-w-2xl text-white">
                    <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">{category.title}</h3>
                  </div>
                </div>

                <div className="grid min-w-0 gap-5 p-4 sm:p-6 lg:grid-cols-[0.92fr_1.08fr]">
                  <div className="min-w-0">
                    <p className="text-sm leading-7 text-slate-600">{category.description}</p>

                    <div className="mt-5">
                      <div className="grid gap-2.5">
                        {category.examples.map((example) => (
                          <div key={example} className="rounded-[16px] border border-slate-200 bg-white px-3.5 py-2.5 text-sm leading-6 text-slate-700">
                            {example}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className={`grid min-w-0 content-start gap-4 ${category.videoSrc ? 'sm:grid-cols-[0.92fr_1.08fr]' : ''}`}>
                    {category.videoSrc ? (
                      <button
                        type="button"
                        onClick={() => setVideoTitle(category.videoTitle)}
                        className="group relative overflow-hidden rounded-[20px] border border-slate-200 bg-slate-950 text-left text-white shadow-soft transition-all duration-300 hover:-translate-y-0.5"
                      >
                        <MediaThumbnail src={category.videoThumb} alt={`${category.title} video`} className="h-44 w-full object-cover opacity-85 transition duration-500 group-hover:scale-[1.02] sm:h-full sm:min-h-[11rem]" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="grid h-12 w-12 place-items-center rounded-full border border-white/20 bg-white/[0.15] backdrop-blur-md">
                            <Play className="h-5 w-5 fill-white text-white" />
                          </span>
                        </div>
                        <div className="absolute bottom-3 left-3 right-3">
                          <p className="text-xs uppercase tracking-[0.24em] text-white/[0.60]">Video showcase</p>
                          <p className="mt-1 text-sm font-semibold">{category.videoTitle}</p>
                        </div>
                      </button>
                    ) : null}

                    <div className="rounded-[20px] border border-slate-200 bg-white p-3.5">
                      <div className="mb-3 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                        <ImageIcon className="h-4 w-4 text-fuchsia-600" />
                        Gallery preview
                      </div>
                      <div className="grid min-w-0 grid-cols-3 gap-2">
                        {category.gallery.map((image) => (
                          <button
                            key={image.src}
                            type="button"
                            onClick={() => setPreviewImage({ title: image.title, src: image.src })}
                            className="group overflow-hidden rounded-[12px] bg-slate-100 text-left transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(17,24,39,0.12)]"
                            aria-label={`Preview ${image.title}`}
                          >
                            <img
                              src={image.src}
                              alt={image.title}
                              loading="lazy"
                              className="h-20 w-full object-cover transition duration-300 group-hover:scale-[1.04] sm:h-24"
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </motion.section>
          ))}
        </div>
      </div>

      <VideoModal
        open={Boolean(activeVideo)}
        title={activeVideo?.videoTitle ?? ''}
        src={activeVideo?.videoSrc ?? 'https://www.youtube-nocookie.com/embed/ysz5S6PUM-U'}
        onClose={() => setVideoTitle(null)}
      />
      <ImageModal
        open={Boolean(previewImage)}
        title={previewImage?.title ?? ''}
        src={previewImage?.src ?? ''}
        onClose={() => setPreviewImage(null)}
      />
    </section>
  );
}
