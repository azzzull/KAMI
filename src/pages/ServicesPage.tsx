import { EventCategoriesSection } from '../sections/EventCategoriesSection';
import { ServicesSection } from '../sections/ServicesSection';
import { VideoShowcaseSection } from '../sections/VideoShowcaseSection';

export default function ServicesPage() {
  return (
    <div className="pt-24 sm:pt-28">
      <ServicesSection />
      <EventCategoriesSection />
      <VideoShowcaseSection />
    </div>
  );
}
