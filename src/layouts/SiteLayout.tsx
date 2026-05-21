import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { useMousePosition } from '../hooks/useMousePosition';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { QuoteSection } from '../sections/QuoteSection';

type Props = {
  children: ReactNode;
};

export function SiteLayout({ children }: Props) {
  const pointer = useMousePosition();

  return (
    <div className="relative min-h-screen overflow-hidden bg-white font-sans text-slate-900">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_left,rgba(236,25,139,0.06),transparent_20%),radial-gradient(circle_at_top_right,rgba(30,63,174,0.06),transparent_18%),radial-gradient(circle_at_bottom_left,rgba(107,31,175,0.05),transparent_20%)]" />
      <Navbar />
      <main>{children}</main>
      <QuoteSection />
      <Footer />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-30 hidden h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(236,25,139,0.08),transparent_62%)] blur-2xl lg:block"
        animate={
          pointer.visible
            ? { x: pointer.x - 112, y: pointer.y - 112, opacity: 0.55 }
            : { opacity: 0 }
        }
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
}
