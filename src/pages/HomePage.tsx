import SEOHead from '../components/SEOHead';
import HeroSection from './home/HeroSection';
import StatsSection from './home/StatsSection';
import ServicesOverview from './home/ServicesOverview';
import FleetShowcase from './home/FleetShowcase';
import FleetGalleryPreview from './home/FleetGalleryPreview';
import DestinationsPreview from './home/DestinationsPreview';
import PackagesHighlight from './home/PackagesHighlight';
import PricingQuickView from './home/PricingQuickView';
import WhyChooseUs from './home/WhyChooseUs';
import BookingProcess from './home/BookingProcess';
import Testimonials from './home/Testimonials';
import ServiceAreas from './home/ServiceAreas';
import FAQ from './home/FAQ';
import QuickEnquiry from './home/QuickEnquiry';
import CTABanner from './home/CTABanner';
import TrustBadges from './home/TrustBadges';

export default function HomePage() {
  return (
    <>
      <SEOHead
        title="Guruji Tour & Travels | Tempo Traveller on Rent in Delhi | 16, 21, 26 Seater"
        description="Guruji Tour & Travels, Timarpur Delhi - Book AC Tempo Traveller on rent. 16, 21 & 26 Seater for Char Dham Yatra, outstation trips, weddings & group tours from Delhi NCR. Call 7838626565."
        canonical="https://bookdelhitempotraveller.com/"
      />
      <HeroSection />
      <StatsSection />
      <FleetGalleryPreview />
      <FleetShowcase />
      <PricingQuickView />
      <WhyChooseUs />
      <ServicesOverview />
      <DestinationsPreview />
      <PackagesHighlight />
      <BookingProcess />
      <Testimonials />
      <ServiceAreas />
      <FAQ />
      <QuickEnquiry />
      <CTABanner />
      <TrustBadges />
    </>
  );
}
