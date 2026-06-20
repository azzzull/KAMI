import { AboutSection } from '../sections/AboutSection';
import { BehindKamiSection } from '../sections/BehindKamiSection';
import { WhyKamiSection } from '../sections/WhyKamiSection';

export default function AboutPage() {
  return (
    <div className="pt-24 sm:pt-28">
      <AboutSection />
      <BehindKamiSection />
      <WhyKamiSection />
    </div>
  );
}
