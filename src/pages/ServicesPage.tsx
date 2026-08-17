import {
  Plane, Briefcase, Camera, Clock, Heart, MapPin, Mountain,
  CheckCircle2, MessageCircle,
} from 'lucide-react';
import { useLang } from '../context/LanguageContext';
import { services } from '../data/services';
import PageHero from '../components/PageHero';
import SEOHead from '../components/SEOHead';
import SectionHeading from '../components/SectionHeading';
import { openWhatsApp, buildBookingMessage } from '../utils/whatsapp';
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Plane, Briefcase, Camera, Clock, Heart, MapPin, Mountain,
};

const sightseeingSpots = [
  'Red Fort', 'India Gate', 'Qutub Minar', 'Lotus Temple',
  'Akshardham Temple', "Humayun's Tomb", 'Jama Masjid', 'Rashtrapati Bhavan',
];

export default function ServicesPage() {
  const { t } = useLang();

  return (
    <>
      <SEOHead
        title="Tempo Traveller on Rent in Delhi | Services | Guruji Tour & Travels"
        description="Book Tempo Traveller in Delhi for group tours, pilgrimages, weddings, airport transfers & outstation trips. 16, 21, 26 seater AC vehicles. Timarpur Delhi. Call 7838626565."
        canonical="https://bookdelhitempotraveller.com/services"
      />
      <PageHero
        title="Tempo Traveller & Travel Services"
        titleHi="टेम्पो ट्रैवलर और यात्रा सेवाएं"
        subtitle="Tempo Traveller on rent for group tours, pilgrimages, weddings & outstation trips from Delhi"
        subtitleHi="दिल्ली से ग्रुप टूर, तीर्थयात्रा, शादी और आउटस्टेशन ट्रिप के लिए किराये पर टेम्पो ट्रैवलर"
        image="/images_new/tempo-traveller/16seater/WhatsApp_Image_2026-03-19_at_11.48.22.jpeg"
        breadcrumb={[{ label: 'Services', labelHi: 'सेवाएं', path: '/services' }]}
      />

      <div>
        {services.map((service, index) => {
          const Icon = iconMap[service.icon] || MapPin;
          const isEven = index % 2 === 0;
          return (
            <section
              key={service.id}
              id={service.id}
              className={`section-padding ${isEven ? 'bg-white' : 'bg-charcoal-50'}`}
            >
              <div className="container-custom">
                <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                  <div className={isEven ? '' : 'lg:order-2'}>
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-500/10">
                      <Icon className="h-7 w-7 text-brand-600" />
                    </div>
                    <h2 className="mb-3 font-heading text-2xl font-bold text-charcoal-900 sm:text-3xl">
                      {t(service.title, service.titleHi)}
                    </h2>
                    <p className="mb-5 text-sm leading-relaxed text-charcoal-600 sm:text-base">
                      {t(service.description, service.descriptionHi)}
                    </p>
                    <ul className="mb-6 space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-charcoal-700">
                          <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-brand-500" />
                          {t(feature, service.featuresHi[i])}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-col gap-3 sm:flex-row">
                      <button
                        onClick={() =>
                          openWhatsApp(
                            buildBookingMessage({ service: service.title })
                          )
                        }
                        className="btn-whatsapp"
                      >
                        <MessageCircle className="h-4 w-4" />
                        {t(`Book ${service.title}`, `${service.titleHi} बुक करें`)}
                      </button>
                      <a href="tel:7838626565" className="btn-secondary">
                        {t('Call Now', 'अभी कॉल करें')}
                      </a>
                    </div>
                  </div>
                  <div className={`overflow-hidden rounded-2xl ${isEven ? '' : 'lg:order-1'}`}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-64 w-full object-cover sm:h-80 lg:h-96"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Delhi Sightseeing Spots"
            titleHi="दिल्ली दर्शनीय स्थल"
            subtitle="Popular tourist attractions covered in our sightseeing tours"
            subtitleHi="हमारी दर्शन यात्राओं में शामिल लोकप्रिय पर्यटक आकर्षण"
          />
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {sightseeingSpots.map((spot) => (
              <div
                key={spot}
                className="flex items-center gap-2 rounded-xl bg-charcoal-50 p-3 text-sm font-medium text-charcoal-700"
              >
                <MapPin className="h-4 w-4 flex-shrink-0 text-brand-500" />
                {spot}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-charcoal-900">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
            {t('Not sure which service you need?', 'निश्चित नहीं हैं कि आपको कौन सी सेवा चाहिए?')}
          </h2>
          <p className="mt-3 text-charcoal-300">
            {t(
              'Contact us and we will help you find the perfect solution for your travel needs.',
              'हमसे संपर्क करें और हम आपकी यात्रा की ज़रूरतों के लिए सही समाधान खोजने में आपकी मदद करेंगे।'
            )}
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <button
              onClick={() =>
                openWhatsApp(
                  t(
                    'Hi! I need help choosing the right service. Can you please guide me?',
                    'नमस्ते! मुझे सही सेवा चुनने में मदद चाहिए। कृपया मार्गदर्शन करें।'
                  )
                )
              }
              className="btn-whatsapp"
            >
              <MessageCircle className="h-4 w-4" />
              {t('Get Guidance on WhatsApp', 'WhatsApp पर मार्गदर्शन लें')}
            </button>
            <a href="tel:7838626565" className="btn-primary">
              {t('Call 7838626565', 'कॉल करें 7838626565')}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
