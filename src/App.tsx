import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Layout from './components/Layout';

const HomePage = lazy(() => import('./pages/HomePage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const FleetPage = lazy(() => import('./pages/FleetPage'));
const PackagesPage = lazy(() => import('./pages/PackagesPage'));
const DestinationsPage = lazy(() => import('./pages/DestinationsPage'));
const PricingPage = lazy(() => import('./pages/PricingPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const TempoTravellerHubPage = lazy(() => import('./pages/tempo-traveller/TempoTravellerHubPage'));
const TempoTravellerLocationPage = lazy(() => import('./pages/tempo-traveller/TempoTravellerLocationPage'));

function LoadingFallback() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="text-center">
        <div className="mx-auto mb-3 h-10 w-10 animate-spin rounded-full border-4 border-brand-200 border-t-brand-500" />
        <p className="text-sm text-charcoal-400">Loading...</p>
      </div>
    </div>
  );
}

function AnalyticsTracker() {
  const location = useLocation();
  useEffect(() => {
    if (typeof window.gtag === 'function') {
      window.gtag('config', 'G-YBN3X841YS', { page_path: location.pathname });
    }
  }, [location]);
  return null;
}

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <AnalyticsTracker />
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/fleet" element={<FleetPage />} />
              <Route path="/packages" element={<PackagesPage />} />
              <Route path="/destinations" element={<DestinationsPage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/tempo-traveller" element={<TempoTravellerHubPage />} />
              <Route path="/tempo-traveller-in-:slug" element={<TempoTravellerLocationPage />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
