import { useState } from 'react';
import { Send, User, Phone as PhoneIcon, MapPin, Calendar, Bus } from 'lucide-react';
import { useLang } from '../../context/LanguageContext';
import { openWhatsApp, buildBookingMessage } from '../../utils/whatsapp';

const tempoOptions = [
  { id: 'tt16', name: 'Tempo Traveller 16 Seater', seats: 16 },
  { id: 'tt21', name: 'Tempo Traveller 21 Seater', seats: 21 },
  { id: 'tt26', name: 'Tempo Traveller 26 Seater', seats: 26 },
  { id: 'urbania', name: 'Force Urbania (Luxury 16 Seater)', seats: 16 },
];

export default function QuickEnquiry() {
  const { t } = useLang();
  const [form, setForm] = useState({
    name: '',
    phone: '',
    destination: '',
    date: '',
    vehicle: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    openWhatsApp(
      buildBookingMessage({
        name: form.name,
        phone: form.phone,
        destination: form.destination,
        date: form.date,
        vehicle: form.vehicle,
      })
    );
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-custom max-w-2xl">
        <div className="text-center mb-8">
          <h2 className="font-heading text-2xl font-bold text-charcoal-900 sm:text-3xl">
            {t('Book Tempo Traveller', 'टेम्पो ट्रैवलर बुक करें')}
          </h2>
          <p className="mt-2 text-sm text-charcoal-500">
            {t(
              'Fill in your trip details and get an instant quote on WhatsApp',
              'अपनी ट्रिप की जानकारी भरें और WhatsApp पर तुरंत कोट पाएं'
            )}
          </p>
          <div className="mt-3 mx-auto h-1 w-16 rounded-full bg-brand-500" />
        </div>
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-charcoal-100 bg-charcoal-50 p-5 sm:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="relative">
              <User className="absolute left-3 top-3 h-4 w-4 text-charcoal-400" />
              <input
                type="text"
                required
                placeholder={t('Your Name', 'आपका नाम')}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-xl border border-charcoal-200 bg-white py-2.5 pl-10 pr-3 text-sm text-charcoal-900 placeholder-charcoal-400 outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
              />
            </div>
            <div className="relative">
              <PhoneIcon className="absolute left-3 top-3 h-4 w-4 text-charcoal-400" />
              <input
                type="tel"
                required
                placeholder={t('Phone Number', 'फोन नंबर')}
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full rounded-xl border border-charcoal-200 bg-white py-2.5 pl-10 pr-3 text-sm text-charcoal-900 placeholder-charcoal-400 outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
              />
            </div>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-4 w-4 text-charcoal-400" />
              <input
                type="text"
                placeholder={t('Destination', 'गंतव्य')}
                value={form.destination}
                onChange={(e) => setForm({ ...form, destination: e.target.value })}
                className="w-full rounded-xl border border-charcoal-200 bg-white py-2.5 pl-10 pr-3 text-sm text-charcoal-900 placeholder-charcoal-400 outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
              />
            </div>
            <div className="relative">
              <Calendar className="absolute left-3 top-3 h-4 w-4 text-charcoal-400" />
              <input
                type="date"
                value={form.date}
                min={new Date().toISOString().split('T')[0]}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className="w-full rounded-xl border border-charcoal-200 bg-white py-2.5 pl-10 pr-3 text-sm text-charcoal-900 placeholder-charcoal-400 outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
              />
            </div>
            <div className="relative sm:col-span-2">
              <Bus className="absolute left-3 top-3 h-4 w-4 text-charcoal-400" />
              <select
                value={form.vehicle}
                onChange={(e) => setForm({ ...form, vehicle: e.target.value })}
                className="w-full appearance-none rounded-xl border border-charcoal-200 bg-white py-2.5 pl-10 pr-3 text-sm text-charcoal-900 outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
              >
                <option value="">{t('Select Tempo Traveller', 'टेम्पो ट्रैवलर चुनें')}</option>
                {tempoOptions.map((v) => (
                  <option key={v.id} value={v.name}>{v.name} - {v.seats} {t('seats', 'सीटें')}</option>
                ))}
              </select>
            </div>
          </div>
          <button type="submit" className="btn-whatsapp mt-5 w-full">
            <Send className="h-4 w-4" />
            {t('Send Enquiry on WhatsApp', 'WhatsApp पर पूछताछ भेजें')}
          </button>
        </form>
      </div>
    </section>
  );
}
