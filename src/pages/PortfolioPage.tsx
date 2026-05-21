import { PortfolioSection } from '../sections/PortfolioSection';
import { TimelineSection } from '../sections/TimelineSection';
import { VideoShowcaseSection } from '../sections/VideoShowcaseSection';

export default function PortfolioPage() {
  return (
    <div className="pt-24 sm:pt-28">
      <PortfolioSection />
      <TimelineSection />
      <VideoShowcaseSection />
    </div>
  );
}
