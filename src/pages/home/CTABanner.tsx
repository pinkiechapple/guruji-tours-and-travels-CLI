import { Phone, MessageCircle } from 'lucide-react';
import { useLang } from '../../context/LanguageContext';
import { openWhatsApp } from '../../utils/whatsapp';

export default function CTABanner() {
  const { t } = useLang();

  return (
    <section className="relative overflow-hidden bg-charcoal-900 py-12 lg:py-16">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-brand-500 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-brand-400 blur-3xl" />
      </div>
      <div className="container-custom relative z-10 text-center">
        <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
          {t('Book Your Tempo Traveller Today', 'आज ही अपना टेम्पो ट्रैवलर बुक करें')}
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-charcoal-300 sm:text-base">
          {t(
            'Get the best rates on 16, 21 & 26 seater Tempo Travellers for your next group trip from Delhi.',
            'दिल्ली से अपनी अगली ग्रुप ट्रिप के लिए 16, 21 और 26 सीटर टेम्पो ट्रैवलर पर सर्वोत्तम दरें पाएं।'
          )}
        </p>
        <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a href="tel:7838626565" className="btn-primary w-full sm:w-auto">
            <Phone className="h-5 w-5" />
            {t('Call 7838626565', 'कॉल करें 7838626565')}
          </a>
          <button
            onClick={() =>
              openWhatsApp(
                t(
                  'Hi! I want to book a Tempo Traveller. Please share rates and availability.',
                  'नमस्ते! मैं एक टेम्पो ट्रैवलर बुक करना चाहता/चाहती हूँ। कृपया दरें और उपलब्धता साझा करें।'
                )
              )
            }
            className="btn-whatsapp w-full sm:w-auto"
          >
            <MessageCircle className="h-5 w-5" />
            {t('WhatsApp Us', 'WhatsApp करें')}
          </button>
        </div>
      </div>
    </section>
  );
}
