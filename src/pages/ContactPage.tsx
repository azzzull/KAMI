import { PageHero } from '../components/PageHero';
import { categories } from '../data/site';
import { ContactSection } from '../sections/ContactSection';

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's begin the brief"
        description="Share the scope, location, timing, or audience goals. We will help define the right approach."
        ctaLabel="View portfolio"
        ctaHref="/portfolio"
        image={categories[0].image}
      />
      <ContactSection />
    </>
  );
}
