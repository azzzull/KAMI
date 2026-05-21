import { PageHero } from '../components/PageHero';
import { categories } from '../data/site';
import { EventCategoriesSection } from '../sections/EventCategoriesSection';
import { ServicesSection } from '../sections/ServicesSection';
import { VideoShowcaseSection } from '../sections/VideoShowcaseSection';

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Event categories and service formats"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio praesent libero."
        ctaLabel="Start a project"
        ctaHref="/contact"
        image={categories[1].image}
      />
      <ServicesSection />
      <EventCategoriesSection />
      <VideoShowcaseSection />
    </>
  );
}
