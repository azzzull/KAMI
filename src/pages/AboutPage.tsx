import { AboutSection } from '../sections/AboutSection';
import { BehindKamiSection } from '../sections/BehindKamiSection';

export default function AboutPage() {
  return (
    <div className="pt-24 sm:pt-28">
      <AboutSection />
      <BehindKamiSection />
    </div>
  );
}
