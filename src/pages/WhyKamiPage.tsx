import { PageHero } from '../components/PageHero';
import { categories } from '../data/site';
import { WhyKamiSection } from '../sections/WhyKamiSection';
import { StatsSection } from '../sections/StatsSection';

export default function WhyKamiPage() {
  return (
    <>
      <PageHero
        eyebrow="Why KAMI"
        title="Why KAMI"
        description="KAMI keeps the work respectful of budget, anchored by an inhouse team, and protected by its own production workshop."
        ctaLabel="Talk to us"
        ctaHref="/contact"
        image={categories[3].image}
      />
      <WhyKamiSection />
      <StatsSection />
    </>
  );
}
