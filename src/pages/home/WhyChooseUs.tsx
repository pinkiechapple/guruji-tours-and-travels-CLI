import {
  IndianRupee,
  Shield,
  Headphones,
  Sparkles,
  Route,
  Users,
  Settings,
  MapPin,
} from 'lucide-react';
import { useLang } from '../../context/LanguageContext';
import SectionHeading from '../../components/SectionHeading';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const reasons = [
  { icon: IndianRupee, en: 'Affordable & Transparent Pricing', hi: 'किफायती और पारदर्शी मूल्य', descEn: 'No hidden charges. Clear per-km rates with upfront billing.', descHi: 'कोई छिपा शुल्क नहीं। स्पष्ट प्रति-किमी दरें।' },
  { icon: Shield, en: 'Experienced Local Drivers', hi: 'अनुभवी स्थानीय ड्राइवर', descEn: 'Professional drivers with years of experience on all routes.', descHi: 'सभी मार्गों पर वर्षों के अनुभव वाले पेशेवर ड्राइवर।' },
  { icon: Sparkles, en: 'Clean & Well-Maintained Vehicles', hi: 'साफ और अच्छे वाहन', descEn: 'Regularly serviced and sanitized vehicles for your comfort.', descHi: 'आपके आराम के लिए नियमित सर्विस और सैनिटाइज़ वाहन।' },
  { icon: Users, en: 'Wide Range of Vehicles', hi: 'वाहनों की विस्तृत श्रृंखला', descEn: 'From sedans to 26-seater tempo travellers for every need.', descHi: 'सेडान से 26-सीटर टेम्पो ट्रैवलर तक हर ज़रूरत के लिए।' },
  { icon: Route, en: 'Solo to Large Groups', hi: 'अकेले से बड़े समूह तक', descEn: 'Whether you are alone or in a group of 26, we have you covered.', descHi: 'चाहे आप अकेले हों या 26 के समूह में, हम आपके साथ हैं।' },
  { icon: Settings, en: 'Custom Travel Plans', hi: 'कस्टम यात्रा योजनाएं', descEn: 'Tailored itineraries to match your schedule and preferences.', descHi: 'आपके शेड्यूल और प्राथमिकताओं के अनुसार अनुकूलित यात्रा कार्यक्रम।' },
  { icon: Headphones, en: '24/7 Customer Assistance', hi: '24/7 ग्राहक सहायता', descEn: 'Round-the-clock support via phone and WhatsApp.', descHi: 'फोन और WhatsApp के माध्यम से चौबीसों घंटे सहायता।' },
  { icon: MapPin, en: 'Reliable Across North India', hi: 'उत्तर भारत में विश्वसनीय', descEn: 'Serving Delhi NCR, Himachal, Uttarakhand, Rajasthan & more.', descHi: 'दिल्ली NCR, हिमाचल, उत्तराखंड, राजस्थान और अन्य में सेवाएं।' },
];

export default function WhyChooseUs() {
  const { t } = useLang();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="section-padding bg-charcoal-50">
      <div className="container-custom">
        <SectionHeading
          title="Why Choose Us"
          titleHi="हमें क्यों चुनें"
          subtitle="Trusted by thousands of travelers across North India"
          subtitleHi="उत्तर भारत भर में हज़ारों यात्रियों द्वारा विश्वसनीय"
        />
        <div
          className={`grid gap-4 sm:grid-cols-2 lg:grid-cols-4 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {reasons.map((r, i) => (
            <div
              key={r.en}
              className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/10">
                <r.icon className="h-5 w-5 text-brand-600" />
              </div>
              <h3 className="mb-1 font-heading text-sm font-semibold text-charcoal-900">
                {t(r.en, r.hi)}
              </h3>
              <p className="text-xs leading-relaxed text-charcoal-500">
                {t(r.descEn, r.descHi)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
