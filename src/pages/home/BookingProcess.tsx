import { Phone, MessageSquare, Car, CreditCard, Navigation } from 'lucide-react';
import { useLang } from '../../context/LanguageContext';
import SectionHeading from '../../components/SectionHeading';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const steps = [
  { icon: Phone, en: 'Contact Us', hi: 'हमसे संपर्क करें', descEn: 'Call or WhatsApp us to start your booking', descHi: 'बुकिंग शुरू करने के लिए कॉल या WhatsApp करें' },
  { icon: MessageSquare, en: 'Share Details', hi: 'विवरण साझा करें', descEn: 'Tell us your date, destination & group size', descHi: 'अपनी तारीख, गंतव्य और ग्रुप साइज बताएं' },
  { icon: Car, en: 'Select Vehicle', hi: 'वाहन चुनें', descEn: 'Choose from our wide range of vehicles', descHi: 'हमारे वाहनों की विस्तृत श्रृंखला से चुनें' },
  { icon: CreditCard, en: 'Confirm Booking', hi: 'बुकिंग की पुष्टि करें', descEn: 'Advance booking confirmation with pricing', descHi: 'मूल्य के साथ अग्रिम बुकिंग की पुष्टि' },
  { icon: Navigation, en: 'Travel with Us', hi: 'हमारे साथ यात्रा करें', descEn: 'Enjoy your journey with our professional driver', descHi: 'हमारे पेशेवर ड्राइवर के साथ यात्रा का आनंद लें' },
];

export default function BookingProcess() {
  const { t } = useLang();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading
          title="How It Works"
          titleHi="यह कैसे काम करता है"
          subtitle="Book your ride in 5 simple steps"
          subtitleHi="5 आसान चरणों में अपनी राइड बुक करें"
        />
        <div
          className={`relative transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="hidden lg:block absolute left-0 right-0 top-[52px] h-0.5 bg-brand-100" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step, i) => (
              <div key={step.en} className="relative text-center" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="relative mx-auto mb-4 flex h-[72px] w-[72px] items-center justify-center">
                  <div className="absolute inset-0 rounded-2xl bg-brand-50 rotate-3" />
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-brand-500">
                    <step.icon className="h-6 w-6 text-charcoal-950" />
                  </div>
                  <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-charcoal-900 text-xs font-bold text-white">
                    {i + 1}
                  </span>
                </div>
                <h3 className="mb-1 font-heading text-sm font-semibold text-charcoal-900">
                  {t(step.en, step.hi)}
                </h3>
                <p className="text-xs leading-relaxed text-charcoal-500">
                  {t(step.descEn, step.descHi)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
