import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { projectShowcase } from '../data/site';
import { ProjectCard } from '../components/ProjectCard';
import { SectionHeading } from '../components/SectionHeading';

export function PortfolioSection() {
  return (
    <section id="portfolio" className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Portfolio"
          title="A selection of work shown in a calm, cinematic format."
          description="These project cards give a fast overview of the kind of enterprise and brand work KAMI has delivered."
          align="center"
        />

        <div className="mt-12">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            pagination={{ clickable: true }}
            loop
            spaceBetween={18}
            slidesPerView={1.05}
            breakpoints={{
              640: { slidesPerView: 1.2 },
              1024: { slidesPerView: 1.55 },
              1280: { slidesPerView: 1.85 }
            }}
            className="portfolio-swiper !overflow-visible"
          >
            {projectShowcase.map((project) => (
              <SwiperSlide key={project.slug} className="h-auto">
                <ProjectCard project={project} featured />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
