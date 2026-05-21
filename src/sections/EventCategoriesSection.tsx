import { motion } from 'framer-motion';
import { Play, ArrowRight, Image as ImageIcon } from 'lucide-react';
import { useMemo, useState } from 'react';
import { categories } from '../data/site';
import { MediaThumbnail } from '../components/MediaThumbnail';
import { SectionHeading } from '../components/SectionHeading';
import { ImageModal } from '../components/ImageModal';
import { VideoModal } from '../components/VideoModal';

export function EventCategoriesSection() {
  const [videoTitle, setVideoTitle] = useState<string | null>(null);
  const [previewImage, setPreviewImage] = useState<{ title: string; src: string } | null>(null);
  const activeVideo = useMemo(() => categories.find((item) => item.videoTitle === videoTitle), [videoTitle]);

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Event Categories"
          title="Separate premium sections for the major event categories we manage."
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio praesent libero."
          align="center"
        />

        <div className="mt-12 space-y-10">
          {categories.map((category, index) => (
            <motion.section
              key={category.slug}
              id={category.slug}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8% 0px' }}
              transition={{ duration: 0.55, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden rounded-[36px] border border-slate-200 bg-[linear-gradient(180deg,#ffffff,#f8fafc)] shadow-soft"
            >
              <div className="grid lg:grid-cols-[1fr_1.05fr]">
                <div className="relative min-h-[22rem] overflow-hidden">
                  <img src={category.image} alt={category.title} className="h-full w-full object-cover transition duration-500 hover:scale-[1.02]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent opacity-70" />
                  <div className="absolute left-6 top-6 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white backdrop-blur-md">
                    {category.title}
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-fuchsia-600">{category.title}</p>
                  <p className="mt-4 text-sm leading-8 text-slate-600">{category.description}</p>

                  <div className="mt-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">Event examples</p>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      {category.examples.map((example) => (
                        <div key={example} className="rounded-[22px] border border-slate-200 bg-white px-4 py-3 text-sm leading-6 text-slate-700">
                          {example}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={`mt-8 grid gap-5 ${category.videoSrc ? 'xl:grid-cols-[0.9fr_1.1fr]' : ''}`}>
                    {category.videoSrc ? (
                      <button
                        type="button"
                        onClick={() => setVideoTitle(category.videoTitle)}
                        className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-slate-950 text-left text-white shadow-soft transition-all duration-300 hover:-translate-y-0.5"
                      >
                        <MediaThumbnail src={category.videoThumb} alt={`${category.title} video`} className="h-56 w-full object-cover opacity-85 transition duration-500 group-hover:scale-[1.02]" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="grid h-16 w-16 place-items-center rounded-full border border-white/20 bg-white/[0.15] backdrop-blur-md">
                            <Play className="h-6 w-6 fill-white text-white" />
                          </span>
                        </div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <p className="text-xs uppercase tracking-[0.24em] text-white/[0.60]">Video showcase</p>
                          <p className="mt-1 text-sm font-semibold">{category.videoTitle}</p>
                        </div>
                      </button>
                    ) : null}

                    <div className="rounded-[28px] border border-slate-200 bg-white p-4">
                      <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                        <ImageIcon className="h-4 w-4 text-fuchsia-600" />
                        Gallery preview
                      </div>
                      <div className="grid grid-cols-3 gap-3">
                        {category.gallery.map((image, galleryIndex) => (
                          <button
                            key={image}
                            type="button"
                            onClick={() => setPreviewImage({ title: `${category.title} gallery ${galleryIndex + 1}`, src: image })}
                            className="group overflow-hidden rounded-[18px] bg-slate-100 text-left transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(17,24,39,0.12)]"
                            aria-label={`Preview ${category.title} image ${galleryIndex + 1}`}
                          >
                            <img
                              src={image}
                              alt={`${category.title} gallery preview ${galleryIndex + 1}`}
                              loading="lazy"
                              className="h-28 w-full object-cover transition duration-300 group-hover:scale-[1.04]"
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <a href={`#${category.slug}`} className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-slate-800">
                      Explore section
                      <ArrowRight className="h-4 w-4" />
                    </a>
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
