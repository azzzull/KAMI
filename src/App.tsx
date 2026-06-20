import { Suspense, lazy, useEffect, useState } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { Loader } from './components/Loader';
import { PageTransition } from './components/PageTransition';
import { SiteLayout } from './layouts/SiteLayout';

const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const PortfolioPage = lazy(() => import('./pages/PortfolioPage'));
const ProjectDetailPage = lazy(() => import('./pages/ProjectDetailPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    let attempts = 0;
    let timer: number | undefined;

    const tryScroll = () => {
      if (hash) {
        const target = document.getElementById(hash);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return;
        }
        if (attempts < 10) {
          attempts += 1;
          timer = window.setTimeout(tryScroll, 50);
          return;
        }
      }

      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    timer = window.setTimeout(tryScroll, 0);
    return () => {
      if (timer) window.clearTimeout(timer);
    };
  }, [location.pathname, location.hash]);

  return null;
}

export default function App() {
  const [showLoader, setShowLoader] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timer = window.setTimeout(() => setShowLoader(false), 900);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const titles: Record<string, string> = {
      '/': 'KAMI Event Management',
      '/about': 'About KAMI | Event Management',
      '/services': 'Services | KAMI Event Management',
      '/portfolio': 'Portfolio | KAMI Event Management',
      '/contact': 'Contact | KAMI Event Management'
    };

    const projectRoute = location.pathname.startsWith('/portfolio/') ? 'Project Detail | KAMI Event Management' : '';
    document.title = projectRoute || titles[location.pathname] || 'KAMI Event Management';
  }, [location.pathname]);

  return (
    <SiteLayout>
      <Loader active={showLoader} />
      <ScrollManager />
      <Suspense fallback={<div className="grid min-h-screen place-items-center bg-white text-sm text-slate-500">Loading...</div>}>
        <PageTransition>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/portfolio/:slug" element={<ProjectDetailPage />} />
            <Route path="/why-kami" element={<Navigate to="/about#why-kami" replace />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </PageTransition>
      </Suspense>
    </SiteLayout>
  );
}
