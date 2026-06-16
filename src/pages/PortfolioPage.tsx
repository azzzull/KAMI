import { EventCategoriesSection } from '../sections/EventCategoriesSection';
import { PortfolioSection } from '../sections/PortfolioSection';
import { TimelineSection } from '../sections/TimelineSection';
import { VideoShowcaseSection } from '../sections/VideoShowcaseSection';

export default function PortfolioPage() {
  return (
    <div className="pt-20 sm:pt-24">
      <EventCategoriesSection />
      <TimelineSection />
      <PortfolioSection />
      <VideoShowcaseSection />
    </div>
  );
}
