import { PageHero } from '../components/PageHero';
import { categories } from '../data/site';
import { PortfolioSection } from '../sections/PortfolioSection';
import { TimelineSection } from '../sections/TimelineSection';
import { VideoShowcaseSection } from '../sections/VideoShowcaseSection';

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Portfolio timeline and selected projects"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio praesent libero."
        ctaLabel="See why KAMI"
        ctaHref="/why-kami"
        image={categories[2].image}
      />
      <PortfolioSection />
      <TimelineSection />
      <VideoShowcaseSection />
    </>
  );
}
