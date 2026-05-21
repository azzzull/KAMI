import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projectShowcase } from '../data/site';
import { ProjectCard } from '../components/ProjectCard';
import { SectionHeading } from '../components/SectionHeading';

const carouselProjects = [...projectShowcase, ...projectShowcase, ...projectShowcase];

export function PortfolioSection() {
  return (
    <section id="portfolio" className="relative overflow-hidden bg-white py-12 sm:py-14 lg:py-16">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Work"
          title="Moments We're Proud Of"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio praesent libero."
          align="center"
        />

        <div className="relative mt-8 sm:mt-10">
          <button
            type="button"
            className="portfolio-prev absolute -left-1 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white text-fuchsia-600 shadow-[0_16px_40px_rgba(17,24,39,0.16)] transition-all duration-300 hover:scale-[1.04] hover:bg-slate-50 sm:-left-4"
            aria-label="Previous project"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            className="portfolio-next absolute -right-1 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white text-fuchsia-600 shadow-[0_16px_40px_rgba(17,24,39,0.16)] transition-all duration-300 hover:scale-[1.04] hover:bg-slate-50 sm:-right-4"
            aria-label="Next project"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
          <Swiper
            modules={[Autoplay, Navigation]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            navigation={{
              prevEl: '.portfolio-prev',
              nextEl: '.portfolio-next'
            }}
            centeredSlides
            loop
            loopAdditionalSlides={projectShowcase.length * 2}
            loopPreventsSliding={false}
            spaceBetween={10}
            slidesPerView={1.08}
            breakpoints={{
              640: { slidesPerView: 1.45, spaceBetween: 12 },
              1024: { slidesPerView: 3, spaceBetween: 0 },
              1280: { slidesPerView: 3, spaceBetween: 0 }
            }}
            className="portfolio-showcase-swiper !overflow-visible"
          >
            {carouselProjects.map((project, index) => (
              <SwiperSlide key={`${project.slug}-${index}`} className="h-auto">
                <ProjectCard project={project} compact />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="mt-7 flex justify-center">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-3 rounded-full bg-[linear-gradient(135deg,#EC198B,#6B1FAF,#1E3FAE)] px-7 py-3 text-sm font-bold text-white shadow-[0_18px_45px_rgba(107,31,175,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02]"
          >
            View More Projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
