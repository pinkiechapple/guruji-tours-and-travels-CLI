import {
  Shield, IndianRupee,
  Headphones, Heart, Target, Eye, Award,
  CheckCircle2, Phone, MessageCircle,
} from 'lucide-react';
import { useLang } from '../context/LanguageContext';
import PageHero from '../components/PageHero';
import SEOHead from '../components/SEOHead';
import SectionHeading from '../components/SectionHeading';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { openWhatsApp } from '../utils/whatsapp';

const milestones = [
  { year: '2013', en: 'Company founded in Delhi', hi: 'दिल्ली में कंपनी की स्थापना' },
  { year: '2015', en: 'Expanded fleet to 5 vehicles', hi: 'बेड़े का 5 वाहनों तक विस्तार' },
  { year: '2017', en: 'Started pilgrimage tour packages', hi: 'तीर्थयात्रा टूर पैकेज शुरू किए' },
  { year: '2019', en: 'Added Tempo Traveller fleet', hi: 'टेम्पो ट्रैवलर बेड़ा जोड़ा' },
  { year: '2021', en: 'Crossed 5000+ happy customers', hi: '5000+ खुश ग्राहकों को पार किया' },
  { year: '2023', en: 'Launched corporate rental division', hi: 'कॉर्पोरेट रेंटल डिवीज़न लॉन्च' },
  { year: '2025', en: 'Added luxury Force Urbania to fleet', hi: 'बेड़े में लक्ज़री फोर्स अर्बेनिया जोड़ी' },
  { year: '2026', en: '20+ vehicles, 10000+ customers served', hi: '20+ वाहन, 10000+ ग्राहकों की सेवा' },
];

const values = [
  { icon: Shield, en: 'Safety First', hi: 'सुरक्षा सबसे पहले', descEn: 'Insured vehicles, verified drivers, and GPS tracking for every trip.', descHi: 'बीमित वाहन, सत्यापित ड्राइवर और हर ट्रिप के लिए GPS ट्रैकिंग।' },
  { icon: Heart, en: 'Customer First', hi: 'ग्राहक सबसे पहले', descEn: 'Your comfort and satisfaction are our top priority, always.', descHi: 'आपका आराम और संतुष्टि हमारी सर्वोच्च प्राथमिकता है, हमेशा।' },
  { icon: IndianRupee, en: 'Transparency', hi: 'पारदर्शिता', descEn: 'Clear pricing with no hidden fees or surprise charges.', descHi: 'बिना छिपी फीस या आश्चर्यजनक शुल्क के स्पष्ट मूल्य।' },
  { icon: Award, en: 'Reliability', hi: 'विश्वसनीयता', descEn: 'On-time service you can count on, every single time.', descHi: 'समय पर सेवा जिस पर आप हर बार भरोसा कर सकते हैं।' },
  { icon: IndianRupee, en: 'Affordability', hi: 'किफायती', descEn: 'Competitive rates without compromising on quality and comfort.', descHi: 'गुणवत्ता और आराम से समझौता किए बिना प्रतिस्पर्धी दरें।' },
  { icon: Headphones, en: '24/7 Support', hi: '24/7 सहायता', descEn: 'Round-the-clock assistance via phone and WhatsApp.', descHi: 'फोन और WhatsApp के माध्यम से चौबीसों घंटे सहायता।' },
];

const stats = [
  { value: '14+', en: 'Years in Business', hi: 'वर्षों का व्यवसाय' },
  { value: '10K+', en: 'Happy Customers', hi: 'खुश ग्राहक' },
  { value: '20+', en: 'Vehicles in Fleet', hi: 'वाहन बेड़े में' },
  { value: '100+', en: 'Destinations Covered', hi: 'गंतव्य कवर' },
  { value: '8', en: 'States Served', hi: 'राज्यों में सेवा' },
  { value: '24/7', en: 'Customer Support', hi: 'ग्राहक सहायता' },
];

export default function AboutPage() {
  const { t } = useLang();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <>
      <SEOHead
        title="About Guruji Tour & Travels | Tempo Traveller Specialist in Delhi Since 2010"
        description="Guruji Tour & Travels, Timarpur Delhi - Delhi's trusted Tempo Traveller and group transport service since 2010. 20+ vehicles, 10000+ happy customers. Led by Sahil Manchanda. Call 7838626565."
        canonical="https://bookdelhitempotraveller.com/about"
      />
      <PageHero
        title="About Us"
        titleHi="हमारे बारे में"
        subtitle="Delhi's trusted Tempo Traveller & group transport specialists since 2010"
        subtitleHi="2010 से दिल्ली के विश्वसनीय टेम्पो ट्रैवलर और ग्रुप ट्रांसपोर्ट विशेषज्ञ"
        image="/images_new/tempo-traveller/21seater/WhatsApp_Image_2026-03-19_at_11.49.52_(1).jpeg"
        breadcrumb={[{ label: 'About', labelHi: 'हमारे बारे में', path: '/about' }]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="mb-4 font-heading text-2xl font-bold text-charcoal-900 sm:text-3xl">
                {t('Our Story', 'हमारी कहानी')}
              </h2>
              <p className="mb-4 text-sm leading-relaxed text-charcoal-600 sm:text-base">
                {t(
                  'We started in 2010 in Delhi with a simple mission: to provide the best Tempo Traveller and group transport services across North India. What started with a single vehicle has grown into a fleet of 20+ Tempo Travellers and group vehicles, serving over 10,000 happy groups.',
                  'हमने 2010 में दिल्ली में एक सरल मिशन के साथ शुरुआत की: उत्तर भारत भर में सर्वोत्तम टेम्पो ट्रैवलर और ग्रुप ट्रांसपोर्ट सेवाएं प्रदान करना। एक वाहन से शुरू हुआ सफर आज 20+ टेम्पो ट्रैवलर और ग्रुप वाहनों के साथ 10,000+ खुश समूहों की सेवा कर रहा है।'
                )}
              </p>
              <p className="mb-4 text-sm leading-relaxed text-charcoal-600 sm:text-base">
                {t(
                  'Led by Sahil Manchanda, our team specializes in group transport for pilgrimages (Char Dham, Vaishno Devi), weddings, corporate outings, and outstation trips. Our experienced hill drivers and well-maintained AC Tempo Travellers make every group journey safe and comfortable.',
                  'साहिल मनचंदा के नेतृत्व में, हमारी टीम तीर्थयात्रा (चार धाम, वैष्णो देवी), शादियों, कॉर्पोरेट आउटिंग और आउटस्टेशन ट्रिप के लिए ग्रुप ट्रांसपोर्ट में विशेषज्ञ है। हमारे अनुभवी पहाड़ी ड्राइवर और अच्छी तरह से रखे AC टेम्पो ट्रैवलर हर ग्रुप यात्रा को सुरक्षित और आरामदायक बनाते हैं।'
                )}
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl">
              <img
                src="/about-us/our-stroy.jpeg"
                alt="Guruji Tour and Travels - Our Story"
                className="h-64 w-full object-cover object-top sm:h-80"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-charcoal-50">
        <div className="container-custom max-w-4xl">
          <SectionHeading
            title="Meet Our Leader"
            titleHi="हमारे नेता से मिलें"
          />
          <div className="flex flex-col items-center gap-6 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 sm:flex-row sm:p-8">
            <img
              src="/about-us/founder-sahil.enc"
              alt="Sahil Manchanda - Founder"
              className="h-24 w-24 flex-shrink-0 rounded-2xl object-cover"
            />
            <div>
              <h3 className="font-heading text-xl font-bold text-charcoal-900">Sahil Manchanda</h3>
              <p className="text-sm text-brand-600">{t('Founder & Director', 'संस्थापक और निदेशक')}</p>
              <p className="mt-2 text-sm leading-relaxed text-charcoal-600">
                {t(
                  'With over 14 years of experience in the travel and transportation industry, Sahil founded Guruji Tour & Travels with a vision to deliver premium yet affordable travel services. His hands-on approach and commitment to customer satisfaction have made the company one of the most trusted names in Delhi\'s taxi service industry.',
                  '14+ वर्षों के यात्रा और परिवहन उद्योग के अनुभव के साथ, साहिल ने प्रीमियम लेकिन किफायती यात्रा सेवाएं प्रदान करने की दृष्टि से गुरुजी टूर एंड ट्रैवल्स की स्थापना की। उनके व्यावहारिक दृष्टिकोण और ग्राहक संतुष्टि के प्रति प्रतिबद्धता ने कंपनी को दिल्ली की टैक्सी सेवा उद्योग में सबसे विश्वसनीय नामों में से एक बना दिया है।'
                )}
              </p>
              <div className="mt-3 flex gap-3">
                <a href="tel:7838626565" className="flex items-center gap-1 text-sm font-medium text-brand-600 hover:text-brand-700">
                  <Phone className="h-4 w-4" /> 7838626565
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl bg-charcoal-900 p-6 sm:p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/20">
                <Target className="h-6 w-6 text-brand-400" />
              </div>
              <h3 className="mb-3 font-heading text-xl font-bold text-white">
                {t('Our Mission', 'हमारा मिशन')}
              </h3>
              <p className="text-sm leading-relaxed text-charcoal-300">
                {t(
                  'To provide the most reliable, comfortable, and affordable transportation services across North India, ensuring every traveler reaches their destination safely and on time.',
                  'उत्तर भारत भर में सबसे विश्वसनीय, आरामदायक और किफायती परिवहन सेवाएं प्रदान करना, यह सुनिश्चित करना कि हर यात्री सुरक्षित और समय पर अपने गंतव्य तक पहुंचे।'
                )}
              </p>
            </div>
            <div className="rounded-2xl bg-brand-500 p-6 sm:p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-charcoal-950/20">
                <Eye className="h-6 w-6 text-charcoal-950" />
              </div>
              <h3 className="mb-3 font-heading text-xl font-bold text-charcoal-950">
                {t('Our Vision', 'हमारी दृष्टि')}
              </h3>
              <p className="text-sm leading-relaxed text-charcoal-800">
                {t(
                  'To become the most trusted name in North India\'s travel industry, known for our exceptional service quality, diverse fleet, and unwavering commitment to customer satisfaction.',
                  'उत्तर भारत के यात्रा उद्योग में सबसे विश्वसनीय नाम बनना, हमारी असाधारण सेवा गुणवत्ता, विविध बेड़े और ग्राहक संतुष्टि के प्रति अटूट प्रतिबद्धता के लिए जाने जाना।'
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section ref={ref} className="section-padding bg-charcoal-900">
        <div className="container-custom">
          <SectionHeading title="Our Numbers" titleHi="हमारे आंकड़े" light />
          <div className={`grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {stats.map((s) => (
              <div key={s.en} className="rounded-xl border border-charcoal-700 bg-charcoal-800 p-4 text-center">
                <p className="font-heading text-2xl font-bold text-brand-400">{s.value}</p>
                <p className="mt-1 text-xs text-charcoal-400">{t(s.en, s.hi)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Our Values"
            titleHi="हमारे मूल्य"
            subtitle="What drives us every day"
            subtitleHi="जो हमें हर दिन प्रेरित करता है"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <div key={v.en} className="rounded-2xl bg-charcoal-50 p-5">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/10">
                  <v.icon className="h-5 w-5 text-brand-600" />
                </div>
                <h3 className="mb-1 font-heading text-sm font-semibold text-charcoal-900">{t(v.en, v.hi)}</h3>
                <p className="text-xs leading-relaxed text-charcoal-500">{t(v.descEn, v.descHi)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-charcoal-50">
        <div className="container-custom max-w-3xl">
          <SectionHeading
            title="Our Journey"
            titleHi="हमारी यात्रा"
            subtitle="Key milestones in our growth story"
            subtitleHi="हमारी विकास कहानी में प्रमुख मील के पत्थर"
          />
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-brand-200 sm:left-1/2 sm:-translate-x-0.5" />
            <div className="space-y-6">
              {milestones.map((m, i) => (
                <div key={m.year} className={`relative flex items-center gap-4 sm:gap-0 ${i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}>
                  <div className={`hidden sm:block sm:w-1/2 ${i % 2 === 0 ? 'sm:pr-8 sm:text-right' : 'sm:pl-8 sm:text-left'}`}>
                    <p className="font-heading text-sm font-bold text-brand-600">{m.year}</p>
                    <p className="text-sm text-charcoal-600">{t(m.en, m.hi)}</p>
                  </div>
                  <div className="absolute left-4 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-brand-500 sm:relative sm:left-auto sm:z-10 sm:translate-x-0">
                    <CheckCircle2 className="h-4 w-4 text-charcoal-950" />
                  </div>
                  <div className="pl-8 sm:hidden">
                    <p className="font-heading text-sm font-bold text-brand-600">{m.year}</p>
                    <p className="text-sm text-charcoal-600">{t(m.en, m.hi)}</p>
                  </div>
                  <div className={`hidden sm:block sm:w-1/2 ${i % 2 === 0 ? 'sm:pl-8' : 'sm:pr-8'}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-charcoal-900">
        <div className="container-custom text-center">
          <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
            {t('Ready to Travel with Us?', 'हमारे साथ यात्रा के लिए तैयार हैं?')}
          </h2>
          <p className="mt-2 text-charcoal-300">
            {t('Get in touch and let us plan your perfect trip.', 'संपर्क करें और हमें आपकी सही ट्रिप प्लान करने दें।')}
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a href="tel:7838626565" className="btn-primary">
              <Phone className="h-4 w-4" />
              {t('Call Now', 'अभी कॉल करें')}
            </a>
            <button
              onClick={() => openWhatsApp(t('Hi! I would like to book a trip.', 'नमस्ते! मैं एक ट्रिप बुक करना चाहता/चाहती हूँ।'))}
              className="btn-whatsapp"
            >
              <MessageCircle className="h-4 w-4" />
              {t('WhatsApp Us', 'WhatsApp करें')}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
