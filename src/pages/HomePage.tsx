import { AboutSection } from '../sections/AboutSection';
import { BehindKamiSection } from '../sections/BehindKamiSection';
import { ClientsSection } from '../sections/ClientsSection';
import { ContactSection } from '../sections/ContactSection';
import { HeroSection } from '../sections/HeroSection';
import { PortfolioSection } from '../sections/PortfolioSection';
import { ServicesSection } from '../sections/ServicesSection';
import { StatsSection } from '../sections/StatsSection';
import { TestimonialsSection } from '../sections/TestimonialsSection';
import { WhyKamiSection } from '../sections/WhyKamiSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <BehindKamiSection />
      <WhyKamiSection />
      <ServicesSection />
      <PortfolioSection />
      <StatsSection />
      <ClientsSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
