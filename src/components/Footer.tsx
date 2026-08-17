import { Link } from 'react-router-dom';
import { Bus, Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { useLang } from '../context/LanguageContext';
import { openWhatsApp } from '../utils/whatsapp';

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="bg-charcoal-950 pb-20 lg:pb-0">
      <div className="container-custom">
        <div className="grid gap-10 border-b border-charcoal-800 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:py-16">
          <div>
            <Link to="/" className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-500">
                <Bus className="h-6 w-6 text-charcoal-950" />
              </div>
              <div className="leading-tight">
                <span className="block font-heading text-base font-bold text-white">GURUJI</span>
                <span className="block text-xs font-medium tracking-wider text-brand-400">
                  TOUR & TRAVELS
                </span>
              </div>
            </Link>
            <p className="mb-4 text-sm leading-relaxed text-charcoal-400">
              {t(
                'Delhi\'s premier Tempo Traveller rental service. 16, 21 & 26 seater AC vehicles for group tours, pilgrimages, weddings & outstation trips across North India.',
                'दिल्ली की प्रमुख टेम्पो ट्रैवलर रेंटल सेवा। उत्तर भारत भर में ग्रुप टूर, तीर्थयात्रा, शादी और आउटस्टेशन ट्रिप के लिए 16, 21 और 26 सीटर AC वाहन।'
              )}
            </p>
            <button
              onClick={() =>
                openWhatsApp(
                  t(
                    'Hi! I would like to book a Tempo Traveller.',
                    'नमस्ते! मैं एक टेम्पो ट्रैवलर बुक करना चाहता/चाहती हूँ।'
                  )
                )
              }
              className="btn-whatsapp text-xs"
            >
              <MessageCircle className="h-4 w-4" />
              {t('Chat on WhatsApp', 'WhatsApp पर चैट करें')}
            </button>
          </div>

          <div>
            <h4 className="mb-4 font-heading text-sm font-semibold text-white">
              {t('Quick Links', 'त्वरित लिंक')}
            </h4>
            <ul className="space-y-2.5">
              {[
                { to: '/', en: 'Home', hi: 'होम' },
                { to: '/services', en: 'Our Services', hi: 'हमारी सेवाएं' },
                { to: '/fleet', en: 'Our Fleet', hi: 'हमारे वाहन' },
                { to: '/packages', en: 'Tour Packages', hi: 'टूर पैकेज' },
                { to: '/destinations', en: 'Destinations', hi: 'गंतव्य' },
                { to: '/pricing', en: 'Pricing', hi: 'मूल्य' },
                { to: '/about', en: 'About Us', hi: 'हमारे बारे में' },
                { to: '/contact', en: 'Contact Us', hi: 'संपर्क करें' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-charcoal-400 transition-colors hover:text-brand-400"
                  >
                    {t(link.en, link.hi)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-heading text-sm font-semibold text-white">
              {t('Our Services', 'हमारी सेवाएं')}
            </h4>
            <ul className="space-y-2.5">
              {[
                { en: 'Tempo Traveller on Rent', hi: 'किराये पर टेम्पो ट्रैवलर' },
                { en: '16 Seater Tempo Traveller', hi: '16 सीटर टेम्पो ट्रैवलर' },
                { en: '21 Seater Tempo Traveller', hi: '21 सीटर टेम्पो ट्रैवलर' },
                { en: '26 Seater Tempo Traveller', hi: '26 सीटर टेम्पो ट्रैवलर' },
                { en: 'Outstation Trips', hi: 'आउटस्टेशन ट्रिप' },
                { en: 'Pilgrimage Tours', hi: 'तीर्थयात्रा टूर' },
                { en: 'Wedding Transport', hi: 'शादी ट्रांसपोर्ट' },
              ].map((item) => (
                <li key={item.en}>
                  <Link
                    to="/services"
                    className="text-sm text-charcoal-400 transition-colors hover:text-brand-400"
                  >
                    {t(item.en, item.hi)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-heading text-sm font-semibold text-white">
              {t('Contact Info', 'संपर्क जानकारी')}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-400" />
                <div className="text-sm text-charcoal-400">
                  <a href="tel:7838626565" className="block hover:text-brand-400">7838626565</a>
                  <a href="tel:7838646565" className="block hover:text-brand-400">7838646565</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-400" />
                <a
                  href="mailto:sahilmanchanda0025@gmail.com"
                  className="text-sm text-charcoal-400 hover:text-brand-400"
                >
                  sahilmanchanda0025@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-400" />
                <span className="text-sm text-charcoal-400">
                  {t(
                    'C-58 Timarpur Track Parking, Delhi - 110054',
                    'C-58 तिमारपुर ट्रैक पार्किंग, दिल्ली - 110054'
                  )}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-400" />
                <span className="text-sm text-charcoal-400">
                  {t('24/7 Available', '24/7 उपलब्ध')}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-b border-charcoal-800 py-6">
          <h4 className="mb-3 font-heading text-xs font-semibold uppercase tracking-wider text-charcoal-400">
            {t('Tempo Traveller in Delhi', 'दिल्ली में टेम्पो ट्रैवलर')}
          </h4>
          <div className="flex flex-wrap gap-x-4 gap-y-1.5">
            {[
              { slug: 'shalimar-bagh', en: 'Shalimar Bagh', hi: 'शालीमार बाग' },
              { slug: 'punjabi-bagh', en: 'Punjabi Bagh', hi: 'पंजाबी बाग' },
              { slug: 'moti-nagar', en: 'Moti Nagar', hi: 'मोती नगर' },
              { slug: 'rajouri-garden', en: 'Rajouri Garden', hi: 'राजौरी गार्डन' },
              { slug: 'kirti-nagar', en: 'Kirti Nagar', hi: 'कीर्ति नगर' },
              { slug: 'ramesh-nagar', en: 'Ramesh Nagar', hi: 'रमेश नगर' },
              { slug: 'raja-garden', en: 'Raja Garden', hi: 'राजा गार्डन' },
              { slug: 'kohat-enclave', en: 'Kohat Enclave', hi: 'कोहाट एन्क्लेव' },
              { slug: 'saraswati-vihar', en: 'Saraswati Vihar', hi: 'सरस्वती विहार' },
              { slug: 'pitampura', en: 'Pitampura', hi: 'पितमपुरा' },
            ].map((loc) => (
              <Link
                key={loc.slug}
                to={`/tempo-traveller-in-${loc.slug}`}
                className="text-xs text-charcoal-500 transition-colors hover:text-brand-400"
              >
                {t(loc.en, loc.hi)}
              </Link>
            ))}
          </div>
        </div>

        <div className="border-b border-charcoal-800 py-6">
          <p className="text-xs leading-relaxed text-charcoal-500">
            {t(
              'Guruji Tour & Travels provides Tempo Traveller on rent in Delhi from Timarpur, Civil Lines, Model Town, Mukherjee Nagar, GTB Nagar, Kamla Nagar, Shakti Nagar, Kashmere Gate, and all areas of Delhi NCR including Noida, Gurgaon, Ghaziabad, and Faridabad. We offer 16 seater, 21 seater, and 26 seater AC Tempo Travellers for outstation trips, Char Dham Yatra, Do Dham Yatra, Vaishno Devi, weddings, corporate outings, and group tours. Popular routes include Delhi to Manali, Delhi to Haridwar, Delhi to Rishikesh, Delhi to Shimla, Delhi to Jaipur, Delhi to Agra, Delhi to Nainital, and Delhi to Mussoorie by Tempo Traveller. Best rates guaranteed with experienced hill drivers.',
              'गुरुजी टूर एंड ट्रैवल्स दिल्ली में तिमारपुर, सिविल लाइन्स, मॉडल टाउन, मुखर्जी नगर, GTB नगर, कमला नगर, शक्ति नगर, कश्मीरी गेट और दिल्ली NCR के सभी क्षेत्रों से किराये पर टेम्पो ट्रैवलर प्रदान करता है। हम आउटस्टेशन ट्रिप, चार धाम यात्रा, दो धाम यात्रा, वैष्णो देवी, शादी, कॉर्पोरेट आउटिंग और ग्रुप टूर के लिए 16 सीटर, 21 सीटर और 26 सीटर AC टेम्पो ट्रैवलर उपलब्ध कराते हैं।'
            )}
          </p>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 py-6 sm:flex-row">
          <p className="text-xs text-charcoal-500">
            &copy; {new Date().getFullYear()} Guruji Tour & Travels. {t('All rights reserved.', 'सर्वाधिकार सुरक्षित।')}
          </p>
          <p className="text-xs text-charcoal-500">
            {t('Contact: Sahil Manchanda', 'संपर्क: साहिल मनचंदा')}
          </p>
        </div>
      </div>
    </footer>
  );
}
