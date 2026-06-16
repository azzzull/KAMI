import { PortfolioSection } from '../sections/PortfolioSection';
import { ServicesSection } from '../sections/ServicesSection';

export default function ServicesPage() {
  return (
    <div className="pt-24 sm:pt-28">
      <ServicesSection />
      <PortfolioSection />
    </div>
  );
}
