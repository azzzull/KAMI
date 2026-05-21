import { PageHero } from '../components/PageHero';
import { categories } from '../data/site';
import { AboutSection } from '../sections/AboutSection';
import { BehindKamiSection } from '../sections/BehindKamiSection';

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About KAMI"
        title="About KAMI"
        description="KAMI was established to bridge a common perception gap between corporate users and creative agencies in event management."
        ctaLabel="Explore services"
        ctaHref="/services"
        image={categories[0].image}
      />
      <AboutSection />
      <BehindKamiSection />
    </>
  );
}
