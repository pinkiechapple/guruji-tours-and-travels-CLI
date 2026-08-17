import { useState } from 'react';
import { Phone, ArrowRight, MapPin, Calendar, Users, Bus } from 'lucide-react';
import { useLang } from '../../context/LanguageContext';
import { openWhatsApp, buildBookingMessage } from '../../utils/whatsapp';

const tempoOptions = [
  { value: 'Tempo Traveller 16 Seater', label: '16 Seater' },
  { value: 'Tempo Traveller 21 Seater', label: '21 Seater' },
  { value: 'Tempo Traveller 26 Seater', label: '26 Seater' },
  { value: 'Force Urbania 16 Seater', label: 'Force Urbania (Luxury)' },
];

export default function HeroSection() {
  const { t } = useLang();
  const [form, setForm] = useState({ pickup: '', destination: '', date: '', vehicle: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    openWhatsApp(
      buildBookingMessage({
        service: t('Tempo Traveller Booking', 'टेम्पो ट्रैवलर बुकिंग'),
        vehicle: form.vehicle || 'Any Tempo Traveller',
        destination: form.destination || 'Not specified',
        date: form.date || 'Flexible',
      })
    );
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      <img
        src="/images_new/tempo-traveller/16seater/WhatsApp_Image_2026-03-19_at_11.48.22.jpeg"
        alt="Tempo Traveller on rent in Delhi"
        className="absolute inset-0 h-full w-full object-cover md:hidden"
        loading="eager"
      />
      <img
        src="/images_new/tempo-traveller/21seater/WhatsApp_Image_2026-03-19_at_11.49.51.jpeg"
        alt="Tempo Traveller on rent in Delhi"
        className="absolute inset-0 hidden h-full w-full object-cover md:block"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/80 via-charcoal-950/60 to-charcoal-950/90" />

      <div className="container-custom relative z-10 flex min-h-screen flex-col justify-center pb-32 pt-20 lg:flex-row lg:items-center lg:gap-12 lg:pb-20">
        <div className="flex-1 text-center lg:text-left">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 text-xs font-medium text-brand-400">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
            {t('Delhi\'s Trusted Tempo Traveller Service', 'दिल्ली की विश्वसनीय टेम्पो ट्रैवलर सेवा')}
          </div>
          <h1 className="font-heading text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            {t('Book', 'बुक करें')}{' '}
            <span className="text-gradient">{t('Tempo Traveller', 'टेम्पो ट्रैवलर')}</span>{' '}
            {t('in Delhi', 'दिल्ली में')}
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-base text-charcoal-300 sm:text-lg lg:mx-0">
            {t(
              'AC Tempo Travellers on rent — 16, 21 & 26 seater for outstation trips, pilgrimages, weddings & group tours across North India.',
              'किराये पर AC टेम्पो ट्रैवलर — 16, 21 और 26 सीटर आउटस्टेशन ट्रिप, तीर्थयात्रा, शादी और ग्रुप टूर के लिए।'
            )}
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <button
              onClick={() =>
                openWhatsApp(
                  t(
                    'Hi! I want to book a Tempo Traveller in Delhi.',
                    'नमस्ते! मैं दिल्ली में टेम्पो ट्रैवलर बुक करना चाहता/चाहती हूँ।'
                  )
                )
              }
              className="btn-primary text-base"
            >
              <Phone className="h-5 w-5" />
              {t('Book Tempo Traveller', 'टेम्पो ट्रैवलर बुक करें')}
            </button>
            <a href="#services" className="btn-secondary border-white/30 text-white hover:bg-white/10 hover:text-white">
              {t('View Fleet & Rates', 'वाहन और दरें देखें')}
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-10 w-full max-w-md lg:mt-0">
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-white/10 bg-charcoal-950/60 p-5 backdrop-blur-xl sm:p-6"
          >
            <h3 className="mb-1 font-heading text-lg font-semibold text-white">
              {t('Book Your Tempo Traveller', 'अपना टेम्पो ट्रैवलर बुक करें')}
            </h3>
            <p className="mb-4 text-xs text-charcoal-400">
              {t('Get instant quote on WhatsApp', 'WhatsApp पर तुरंत कोट पाएं')}
            </p>
            <div className="space-y-3">
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-4 w-4 text-charcoal-400" />
                <input
                  type="text"
                  placeholder={t('Pickup Location', 'पिकअप स्थान')}
                  value={form.pickup}
                  onChange={(e) => setForm({ ...form, pickup: e.target.value })}
                  className="w-full rounded-xl border border-charcoal-700 bg-charcoal-800/50 py-2.5 pl-10 pr-3 text-sm text-white placeholder-charcoal-500 outline-none transition-colors focus:border-brand-500"
                />
              </div>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-4 w-4 text-brand-400" />
                <input
                  type="text"
                  placeholder={t('Destination', 'गंतव्य')}
                  value={form.destination}
                  onChange={(e) => setForm({ ...form, destination: e.target.value })}
                  className="w-full rounded-xl border border-charcoal-700 bg-charcoal-800/50 py-2.5 pl-10 pr-3 text-sm text-white placeholder-charcoal-500 outline-none transition-colors focus:border-brand-500"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 h-4 w-4 text-charcoal-400" />
                  <input
                    type="date"
                    value={form.date}
                    min={new Date().toISOString().split('T')[0]}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className="w-full rounded-xl border border-charcoal-700 bg-charcoal-800/50 py-2.5 pl-10 pr-3 text-sm text-white placeholder-charcoal-500 outline-none transition-colors focus:border-brand-500"
                  />
                </div>
                <div className="relative">
                  <Bus className="absolute left-3 top-3 h-4 w-4 text-charcoal-400" />
                  <select
                    value={form.vehicle}
                    onChange={(e) => setForm({ ...form, vehicle: e.target.value })}
                    className="w-full appearance-none rounded-xl border border-charcoal-700 bg-charcoal-800/50 py-2.5 pl-10 pr-3 text-sm text-white outline-none transition-colors focus:border-brand-500"
                  >
                    <option value="">{t('Select Size', 'साइज़ चुनें')}</option>
                    {tempoOptions.map((v) => (
                      <option key={v.value} value={v.value}>
                        {v.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <button type="submit" className="btn-primary w-full">
                <Users className="h-4 w-4" />
                {t('Get Quote on WhatsApp', 'WhatsApp पर कोट पाएं')}
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
