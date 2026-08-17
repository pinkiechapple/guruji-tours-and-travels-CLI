import { useParams, Link } from 'react-router-dom';
import { Phone, MessageCircle, MapPin, CheckCircle2, Users, Shield, Clock, Bus, Navigation } from 'lucide-react';
import { useLang } from '../../context/LanguageContext';
import SEOHead from '../../components/SEOHead';
import { allTempoLocations } from '../../data/tempoLocations';
import { openWhatsApp } from '../../utils/whatsapp';

export default function TempoTravellerLocationPage() {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useLang();
  const location = allTempoLocations.find((l) => l.slug === slug);

  if (!location) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <h1 className="mb-4 font-heading text-2xl font-bold text-charcoal-900">
            {t('Location not found', 'स्थान नहीं मिला')}
          </h1>
          <Link to="/tempo-traveller" className="text-brand-600 hover:underline">
            {t('View all locations', 'सभी स्थान देखें')}
          </Link>
        </div>
      </div>
    );
  }

  const handleBooking = () => {
    openWhatsApp(
      t(
        `Hi! I want to book a Tempo Traveller from ${location.name}. Please share rates and availability.`,
        `नमस्ते! मैं ${location.name} से टेम्पो ट्रैवलर बुक करना चाहता/चाहती हूँ। कृपया दरें और उपलब्धता बताएं।`
      )
    );
  };

  const vehicles = [
    { seats: '16 Seater', price: '18', img: '/images_new/tempo-traveller/16seater/WhatsApp_Image_2026-03-19_at_11.48.21.jpeg' },
    { seats: '21 Seater', price: '22', img: '/images_new/tempo-traveller/21seater/WhatsApp_Image_2026-03-19_at_11.49.51.jpeg' },
    { seats: '26 Seater', price: '28', img: '/images_new/tempo-traveller/26seater/WhatsApp_Image_2026-03-19_at_11.50.49.jpeg' },
  ];

  return (
    <>
      <SEOHead
        title={location.metaTitle}
        description={location.metaDescription}
        canonical={`https://bookdelhitempotraveller.com/tempo-traveller-in-${location.slug}`}
      />

      {/* Hero */}
      <section className="relative flex min-h-[280px] items-end overflow-hidden sm:min-h-[340px]">
        <img
          src={location.heroImage}
          alt={`Tempo Traveller in ${location.name}`}
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-charcoal-950/50 to-transparent" />
        <div className="container-custom relative z-10 pb-10 pt-28 sm:pb-14 sm:pt-36">
          <nav className="mb-3 flex items-center gap-1 text-xs text-charcoal-300">
            <Link to="/" className="hover:text-brand-400">{t('Home', 'होम')}</Link>
            <span>/</span>
            <Link to="/tempo-traveller" className="hover:text-brand-400">{t('Tempo Traveller', 'टेम्पो ट्रैवलर')}</Link>
            <span>/</span>
            <span className="text-brand-400">{location.name}</span>
          </nav>
          <h1 className="font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            {t(`Tempo Traveller in ${location.name}`, `${location.nameHi} में टेम्पो ट्रैवलर`)}
          </h1>
          <p className="mt-3 max-w-xl text-sm text-charcoal-200 sm:text-base">
            {location.area === 'outstation'
              ? t(
                  `Book 16, 21 & 26 seater AC Tempo Traveller from Delhi to ${location.name}`,
                  `दिल्ली से ${location.nameHi} तक 16, 21 और 26 सीटर AC टेम्पो ट्रैवलर बुक करें`
                )
              : t(
                  `Book 16, 21 & 26 seater AC Tempo Traveller on rent in ${location.name}, Delhi`,
                  `${location.nameHi}, दिल्ली में 16, 21 और 26 सीटर AC टेम्पो ट्रैवलर किराये पर बुक करें`
                )}
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            {location.content.distance && location.content.duration && (
              <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm">
                <Navigation className="h-4 w-4" />
                {location.content.distance} &bull; {location.content.duration}
              </div>
            )}
            <button onClick={handleBooking} className="btn-whatsapp">
              <MessageCircle className="h-4 w-4" />
              {t('Book on WhatsApp', 'WhatsApp पर बुक करें')}
            </button>
            <a href="tel:7838626565" className="btn-secondary flex items-center gap-2">
              <Phone className="h-4 w-4" />
              {t('Call Now', 'अभी कॉल करें')}
            </a>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="mb-4 font-heading text-2xl font-bold text-charcoal-900 sm:text-3xl">
                {t(
                  `Best Tempo Traveller Service in ${location.name}`,
                  `${location.nameHi} में सर्वश्रेष्ठ टेम्पो ट्रैवलर सेवा`
                )}
              </h2>
              <p className="mb-6 text-charcoal-600 leading-relaxed">
                {t(location.content.intro, location.content.introHi)}
              </p>

              <h3 className="mb-3 font-heading text-lg font-semibold text-charcoal-900">
                {t('Why Choose Us', 'हमें क्यों चुनें')}
              </h3>
              <ul className="mb-8 space-y-3">
                {(t(location.content.highlights.join('||'), location.content.highlightsHi.join('||'))).split('||').map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-500" />
                    <span className="text-charcoal-700">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Vehicles */}
              <h3 className="mb-4 font-heading text-lg font-semibold text-charcoal-900">
                {t('Available Tempo Travellers', 'उपलब्ध टेम्पो ट्रैवलर')}
              </h3>
              <div className="grid gap-4 sm:grid-cols-3">
                {vehicles.map((v) => (
                  <div key={v.seats} className="overflow-hidden rounded-xl border border-charcoal-100 bg-charcoal-50 transition-shadow hover:shadow-md">
                    <img src={v.img} alt={v.seats} className="h-36 w-full object-cover" loading="lazy" />
                    <div className="p-4">
                      <h4 className="font-heading text-sm font-bold text-charcoal-900">{v.seats}</h4>
                      <p className="mt-1 text-xs text-charcoal-500">
                        {t(`Starting ₹${v.price}/km`, `₹${v.price}/km से शुरू`)}
                      </p>
                      <button
                        onClick={handleBooking}
                        className="mt-3 w-full rounded-lg bg-brand-500 px-3 py-2 text-xs font-semibold text-charcoal-950 transition-colors hover:bg-brand-400"
                      >
                        {t('Book Now', 'अभी बुक करें')}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="rounded-2xl border border-charcoal-100 bg-charcoal-50 p-6">
                <h3 className="mb-4 font-heading text-base font-bold text-charcoal-900">
                  {t('Quick Booking', 'त्वरित बुकिंग')}
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3 text-charcoal-700">
                    <MapPin className="h-4 w-4 text-brand-500" />
                    <span>{t(`Pickup: ${location.name}, Delhi`, `पिकअप: ${location.nameHi}, दिल्ली`)}</span>
                  </div>
                  <div className="flex items-center gap-3 text-charcoal-700">
                    <Users className="h-4 w-4 text-brand-500" />
                    <span>{t('16 / 21 / 26 Seater', '16 / 21 / 26 सीटर')}</span>
                  </div>
                  <div className="flex items-center gap-3 text-charcoal-700">
                    <Clock className="h-4 w-4 text-brand-500" />
                    <span>{t('24/7 Available', '24/7 उपलब्ध')}</span>
                  </div>
                  <div className="flex items-center gap-3 text-charcoal-700">
                    <Shield className="h-4 w-4 text-brand-500" />
                    <span>{t('No Hidden Charges', 'कोई छिपे शुल्क नहीं')}</span>
                  </div>
                </div>
                <button onClick={handleBooking} className="btn-whatsapp mt-5 w-full justify-center text-sm">
                  <MessageCircle className="h-4 w-4" />
                  {t('Book on WhatsApp', 'WhatsApp पर बुक करें')}
                </button>
                <a href="tel:7838626565" className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-charcoal-200 bg-white py-3 text-sm font-semibold text-charcoal-800 transition-colors hover:bg-charcoal-50">
                  <Phone className="h-4 w-4" />
                  7838626565
                </a>
              </div>

              <div className="rounded-2xl border border-charcoal-100 bg-charcoal-50 p-6">
                <h3 className="mb-3 font-heading text-base font-bold text-charcoal-900">
                  {t('Popular Destinations', 'लोकप्रिय गंतव्य')}
                </h3>
                <ul className="space-y-2 text-sm text-charcoal-600">
                  {['Manali', 'Shimla', 'Haridwar', 'Rishikesh', 'Mussoorie', 'Nainital', 'Jaipur', 'Agra'].map((dest) => (
                    <li key={dest} className="flex items-center gap-2">
                      <Bus className="h-3.5 w-3.5 text-brand-500" />
                      <span>{location.name} → {dest}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="section-padding bg-charcoal-50">
        <div className="container-custom">
          <h2 className="mb-4 font-heading text-xl font-bold text-charcoal-900">
            {t(
              `Tempo Traveller on Rent in ${location.name} - Guruji Tour & Travels`,
              `${location.nameHi} में किराये पर टेम्पो ट्रैवलर - गुरुजी टूर एंड ट्रैवल्स`
            )}
          </h2>
          <div className="prose prose-sm max-w-none text-charcoal-600">
            <p>
              {t(
                `Guruji Tour & Travels is the most trusted Tempo Traveller rental service in ${location.name}, Delhi. We offer 16 seater, 21 seater, and 26 seater AC Tempo Travellers for all types of group travel including outstation trips, pilgrimages (Char Dham Yatra, Do Dham Yatra, Vaishno Devi), family vacations, wedding ceremonies, corporate outings, and school/college tours. Our vehicles are well-maintained, clean, and equipped with comfortable push-back seats, AC, music system, and ample luggage space.`,
                `गुरुजी टूर एंड ट्रैवल्स ${location.nameHi}, दिल्ली में सबसे भरोसेमंद टेम्पो ट्रैवलर रेंटल सेवा है। हम आउटस्टेशन ट्रिप, तीर्थयात्रा (चार धाम यात्रा, दो धाम यात्रा, वैष्णो देवी), पारिवारिक छुट्टियां, शादी, कॉर्पोरेट आउटिंग और स्कूल/कॉलेज टूर सहित सभी प्रकार की ग्रुप यात्रा के लिए 16 सीटर, 21 सीटर और 26 सीटर AC टेम्पो ट्रैवलर प्रदान करते हैं।`
              )}
            </p>
            <p className="mt-3">
              {t(
                `Whether you are planning a trip from ${location.name} to Manali, Shimla, Haridwar, Rishikesh, Mussoorie, Nainital, Jaipur, Agra, Amritsar, or any other destination, we provide the best rates with experienced drivers who have 10+ years of hill and highway driving experience. Book your Tempo Traveller from ${location.name} today by calling 7838626565 or messaging us on WhatsApp.`,
                `चाहे आप ${location.nameHi} से मनाली, शिमला, हरिद्वार, ऋषिकेश, मसूरी, नैनीताल, जयपुर, आगरा, अमृतसर या किसी अन्य गंतव्य की यात्रा की योजना बना रहे हों, हम 10+ वर्षों के पहाड़ और हाईवे ड्राइविंग अनुभव वाले ड्राइवरों के साथ सर्वोत्तम दरें प्रदान करते हैं। आज ही 7838626565 पर कॉल करके या WhatsApp पर संदेश भेजकर ${location.nameHi} से अपना टेम्पो ट्रैवलर बुक करें।`
              )}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
