import { Link } from 'react-router-dom';
import { MapPin, MessageCircle, Phone, ArrowRight, Navigation } from 'lucide-react';
import { useLang } from '../../context/LanguageContext';
import SEOHead from '../../components/SEOHead';
import { delhiLocations, outstationLocations } from '../../data/tempoLocations';
import { openWhatsApp } from '../../utils/whatsapp';

export default function TempoTravellerHubPage() {
  const { t } = useLang();

  return (
    <>
      <SEOHead
        title="Tempo Traveller on Rent in Delhi | All Locations | Guruji Tour & Travels"
        description="Book Tempo Traveller on rent in Delhi. Serving Shalimar Bagh, Punjabi Bagh, Moti Nagar, Rajouri Garden, Kirti Nagar, Ramesh Nagar, Raja Garden, Kohat Enclave, Saraswati Vihar, Pitampura & all Delhi areas. Call 7838626565."
        canonical="https://bookdelhitempotraveller.com/tempo-traveller"
      />

      {/* Hero */}
      <section className="relative flex min-h-[260px] items-end overflow-hidden sm:min-h-[320px]">
        <img
          src="/images_new/tempo-traveller/26seater/WhatsApp_Image_2026-03-19_at_11.50.53_(1).jpeg"
          alt="Tempo Traveller fleet in Delhi"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-charcoal-950/50 to-transparent" />
        <div className="container-custom relative z-10 pb-10 pt-28 sm:pb-14 sm:pt-36">
          <nav className="mb-3 flex items-center gap-1 text-xs text-charcoal-300">
            <Link to="/" className="hover:text-brand-400">{t('Home', 'होम')}</Link>
            <span>/</span>
            <span className="text-brand-400">{t('Tempo Traveller', 'टेम्पो ट्रैवलर')}</span>
          </nav>
          <h1 className="font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            {t('Tempo Traveller on Rent in Delhi', 'दिल्ली में किराये पर टेम्पो ट्रैवलर')}
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-charcoal-200 sm:text-base">
            {t(
              '16, 21 & 26 Seater AC Tempo Travellers available for pickup from all Delhi locations. Doorstep service with experienced drivers.',
              'सभी दिल्ली स्थानों से पिकअप के लिए 16, 21 और 26 सीटर AC टेम्पो ट्रैवलर उपलब्ध। अनुभवी ड्राइवरों के साथ डोरस्टेप सेवा।'
            )}
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <button
              onClick={() => openWhatsApp(t('Hi! I want to book a Tempo Traveller in Delhi.', 'नमस्ते! मैं दिल्ली में टेम्पो ट्रैवलर बुक करना चाहता हूँ।'))}
              className="btn-whatsapp"
            >
              <MessageCircle className="h-4 w-4" />
              {t('Book on WhatsApp', 'WhatsApp पर बुक करें')}
            </button>
            <a href="tel:7838626565" className="btn-secondary flex items-center gap-2">
              <Phone className="h-4 w-4" />
              {t('Call 7838626565', 'कॉल 7838626565')}
            </a>
          </div>
        </div>
      </section>

      {/* Delhi Locations */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="mb-2 font-heading text-2xl font-bold text-charcoal-900 sm:text-3xl">
            {t('Tempo Traveller in Delhi Areas', 'दिल्ली क्षेत्रों में टेम्पो ट्रैवलर')}
          </h2>
          <p className="mb-8 text-charcoal-600">
            {t(
              'We provide doorstep Tempo Traveller pickup from these Delhi areas and many more.',
              'हम इन दिल्ली क्षेत्रों और कई अन्य स्थानों से डोरस्टेप टेम्पो ट्रैवलर पिकअप प्रदान करते हैं।'
            )}
          </p>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {delhiLocations.map((loc) => (
              <Link
                key={loc.slug}
                to={`/tempo-traveller-in-${loc.slug}`}
                className="group flex items-center gap-4 rounded-xl border border-charcoal-100 bg-white p-5 transition-all hover:border-brand-200 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-500 group-hover:text-white">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-base font-semibold text-charcoal-900 group-hover:text-brand-600">
                    {t(loc.name, loc.nameHi)}
                  </h3>
                  <p className="text-xs text-charcoal-500">
                    {t('16, 21 & 26 Seater Available', '16, 21 और 26 सीटर उपलब्ध')}
                  </p>
                </div>
                <ArrowRight className="h-4 w-4 text-charcoal-300 transition-transform group-hover:translate-x-1 group-hover:text-brand-500" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Outstation Destinations */}
      <section className="section-padding bg-charcoal-50/50">
        <div className="container-custom">
          <h2 className="mb-2 font-heading text-2xl font-bold text-charcoal-900 sm:text-3xl">
            {t('Outstation Destinations from Delhi', 'दिल्ली से आउटस्टेशन गंतव्य')}
          </h2>
          <p className="mb-8 text-charcoal-600">
            {t(
              'Book Tempo Traveller from Delhi to popular outstation destinations. Comfortable AC travel with experienced drivers.',
              'दिल्ली से लोकप्रिय आउटस्टेशन गंतव्यों के लिए टेम्पो ट्रैवलर बुक करें। अनुभवी ड्राइवरों के साथ आरामदायक AC यात्रा।'
            )}
          </p>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {outstationLocations.map((loc) => (
              <Link
                key={loc.slug}
                to={`/tempo-traveller-in-${loc.slug}`}
                className="group flex items-center gap-4 rounded-xl border border-charcoal-100 bg-white p-5 transition-all hover:border-brand-200 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-600 transition-colors group-hover:bg-green-500 group-hover:text-white">
                  <Navigation className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-base font-semibold text-charcoal-900 group-hover:text-brand-600">
                    {t(`Delhi to ${loc.name}`, `दिल्ली से ${loc.nameHi}`)}
                  </h3>
                  <p className="text-xs text-charcoal-500">
                    {loc.content.distance && loc.content.duration
                      ? t(`${loc.content.distance} • ${loc.content.duration}`, `${loc.content.distance} • ${loc.content.duration}`)
                      : t('16, 21 & 26 Seater Available', '16, 21 और 26 सीटर उपलब्ध')}
                  </p>
                </div>
                <ArrowRight className="h-4 w-4 text-charcoal-300 transition-transform group-hover:translate-x-1 group-hover:text-brand-500" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Footer Content */}
      <section className="section-padding bg-charcoal-50">
        <div className="container-custom">
          <h2 className="mb-4 font-heading text-xl font-bold text-charcoal-900">
            {t('Book Tempo Traveller in Delhi - All Areas Covered', 'दिल्ली में टेम्पो ट्रैवलर बुक करें - सभी क्षेत्र कवर')}
          </h2>
          <p className="text-sm leading-relaxed text-charcoal-600">
            {t(
              'Guruji Tour & Travels provides Tempo Traveller on rent across all areas of Delhi including Shalimar Bagh, Punjabi Bagh, Moti Nagar, Rajouri Garden, Kirti Nagar, Ramesh Nagar, Raja Garden, Kohat Enclave, Saraswati Vihar, Pitampura, Timarpur, Civil Lines, Model Town, Mukherjee Nagar, GTB Nagar, Rohini, and all of Delhi NCR. We offer 16 seater, 21 seater, and 26 seater AC Tempo Travellers for outstation trips, Char Dham Yatra, Do Dham Yatra, Vaishno Devi, weddings, corporate events, and group tours at the best rates. Call 7838626565 or WhatsApp us for instant booking.',
              'गुरुजी टूर एंड ट्रैवल्स दिल्ली के सभी क्षेत्रों में किराये पर टेम्पो ट्रैवलर प्रदान करता है जिसमें शालीमार बाग, पंजाबी बाग, मोती नगर, राजौरी गार्डन, कीर्ति नगर, रमेश नगर, राजा गार्डन, कोहाट एन्क्लेव, सरस्वती विहार, पितमपुरा, तिमारपुर, सिविल लाइन्स, मॉडल टाउन, मुखर्जी नगर, GTB नगर, रोहिणी और संपूर्ण दिल्ली NCR शामिल है। हम सर्वोत्तम दरों पर आउटस्टेशन ट्रिप, चार धाम यात्रा, दो धाम यात्रा, वैष्णो देवी, शादी, कॉर्पोरेट इवेंट और ग्रुप टूर के लिए 16 सीटर, 21 सीटर और 26 सीटर AC टेम्पो ट्रैवलर प्रदान करते हैं।'
            )}
          </p>
        </div>
      </section>
    </>
  );
}
