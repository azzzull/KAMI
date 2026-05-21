import { Play } from 'lucide-react';
import { useState } from 'react';
import { VideoModal } from '../components/VideoModal';
import { categories } from '../data/site';
import { SectionHeading } from '../components/SectionHeading';

export function VideoShowcaseSection() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f8fafc,white)] py-14 sm:py-16">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Video Highlight"
          title="Cinematic video showcase for showreel and case study playback."
          description="This module is designed to feel like a premium media block with a realistic event thumbnail and smooth modal playback."
          align="center"
        />

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="group relative mt-12 overflow-hidden rounded-[36px] border border-slate-200 bg-slate-950 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-[0_24px_80px_rgba(17,24,39,0.16)]"
        >
          <div className="aspect-video w-full bg-[linear-gradient(135deg,#111827,#1e3fae,#6b1faf,#ec198b)]" />
          <img
            src={categories[1].videoThumb}
            alt="Event showreel thumbnail"
            className="absolute inset-0 h-full w-full object-cover opacity-70 transition duration-300 group-hover:scale-[1.05]"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="grid h-16 w-16 place-items-center rounded-full border border-white/20 bg-white/[0.14] text-white backdrop-blur-md">
              <Play className="h-6 w-6 fill-white" />
            </span>
          </div>
          <div className="absolute bottom-6 left-6 right-6 text-left text-white">
            <p className="text-xs uppercase tracking-[0.24em] text-white/60">Video Showcase</p>
            <h3 className="mt-2 text-2xl font-bold tracking-tight">Begin with the showreel</h3>
          </div>
        </button>
      </div>

      <VideoModal
        open={open}
        title="KAMI showreel"
        src="https://www.youtube-nocookie.com/embed/ysz5S6PUM-U"
        onClose={() => setOpen(false)}
      />
    </section>
  );
}
