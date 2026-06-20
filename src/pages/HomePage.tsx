import { AboutSection } from '../sections/AboutSection';
import { BehindKamiSection } from '../sections/BehindKamiSection';
import { HeroSection } from '../sections/HeroSection';
import { ServicesSection } from '../sections/ServicesSection';
import { StatsSection } from '../sections/StatsSection';
import { WhyKamiSection } from '../sections/WhyKamiSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <BehindKamiSection />
      <WhyKamiSection />
      <ServicesSection />
      <StatsSection />
    </>
  );
}
