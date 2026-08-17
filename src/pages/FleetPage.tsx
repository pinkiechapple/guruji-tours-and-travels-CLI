import { useState } from 'react';
import { Users, CheckCircle2, MessageCircle, Filter } from 'lucide-react';
import { useLang } from '../context/LanguageContext';
import { fleet, type Vehicle } from '../data/fleet';
import PageHero from '../components/PageHero';
import SEOHead from '../components/SEOHead';
import SectionHeading from '../components/SectionHeading';
import VehicleGallery from './fleet/VehicleGallery';
import { openWhatsApp, buildBookingMessage } from '../utils/whatsapp';

const filters = [
  { key: 'all', en: 'All Vehicles', hi: 'सभी वाहन' },
  { key: 'group', en: 'Tempo Travellers', hi: 'टेम्पो ट्रैवलर' },
  { key: 'luxury', en: 'Luxury', hi: 'लक्ज़री' },
  { key: 'muv', en: 'MUV / SUV', hi: 'MUV / SUV' },
  { key: 'sedan', en: 'Sedan', hi: 'सेडान' },
];

const guideItems = [
  { en: 'Solo / Couple', hi: 'अकेले / जोड़ा', vehicle: 'Swift Dzire', vehicleHi: 'स्विफ्ट डिज़ायर' },
  { en: 'Small Family (4-5)', hi: 'छोटा परिवार (4-5)', vehicle: 'Maruti Ertiga / Kia Carens', vehicleHi: 'मारुति अर्टिगा / किआ कैरेंस' },
  { en: 'Large Family / VIP', hi: 'बड़ा परिवार / VIP', vehicle: 'Toyota Innova Crysta', vehicleHi: 'टोयोटा इनोवा क्रिस्टा' },
  { en: 'Group (12-16)', hi: 'समूह (12-16)', vehicle: 'Tempo Traveller 16 Seater', vehicleHi: 'टेम्पो ट्रैवलर 16 सीटर' },
  { en: 'Large Group (17-21)', hi: 'बड़ा समूह (17-21)', vehicle: 'Tempo Traveller 21 Seater', vehicleHi: 'टेम्पो ट्रैवलर 21 सीटर' },
  { en: 'Extra Large (21-26)', hi: 'बहुत बड़ा (21-26)', vehicle: 'Tempo Traveller 26 Seater', vehicleHi: 'टेम्पो ट्रैवलर 26 सीटर' },
  { en: 'Premium Group', hi: 'प्रीमियम समूह', vehicle: 'Force Urbania', vehicleHi: 'फोर्स अर्बेनिया' },
];

export default function FleetPage() {
  const { t } = useLang();
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered = activeFilter === 'all' ? fleet : fleet.filter((v) => v.type === activeFilter);

  return (
    <>
      <SEOHead
        title="16, 21, 26 Seater Tempo Traveller on Rent Delhi | Fleet | Guruji Tour & Travels"
        description="Hire 16 seater, 21 seater, 26 seater Tempo Traveller & Force Urbania in Delhi. View fleet gallery, rates & features. Pickup from Timarpur, Civil Lines, Model Town. Call 7838626565."
        canonical="https://bookdelhitempotraveller.com/fleet"
      />
      <PageHero
        title="Tempo Traveller & Fleet"
        titleHi="टेम्पो ट्रैवलर और वाहन"
        subtitle="16, 21 & 26 seater Tempo Travellers plus sedans and luxury vehicles"
        subtitleHi="16, 21 और 26 सीटर टेम्पो ट्रैवलर, सेडान और लक्ज़री वाहन"
        image="/images_new/tempo-traveller/26seater/WhatsApp_Image_2026-03-19_at_11.50.49.jpeg"
        breadcrumb={[{ label: 'Fleet', labelHi: 'वाहन', path: '/fleet' }]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mb-8 flex items-center gap-2 overflow-x-auto pb-2">
            <Filter className="h-4 w-4 flex-shrink-0 text-charcoal-400" />
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                className={`flex-shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  activeFilter === f.key
                    ? 'bg-charcoal-900 text-white'
                    : 'bg-charcoal-100 text-charcoal-600 hover:bg-charcoal-200'
                }`}
              >
                {t(f.en, f.hi)}
              </button>
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>
        </div>
      </section>

      <VehicleGallery />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Fleet Comparison"
            titleHi="वाहन तुलना"
            subtitle="Compare all vehicles side by side"
            subtitleHi="सभी वाहनों की साथ-साथ तुलना करें"
          />
          <div className="overflow-hidden rounded-2xl border border-charcoal-100">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-charcoal-100 bg-charcoal-900 text-white">
                    <th className="px-4 py-3 font-heading text-xs font-semibold">{t('Vehicle', 'वाहन')}</th>
                    <th className="px-4 py-3 text-center font-heading text-xs font-semibold">{t('Seats', 'सीटें')}</th>
                    <th className="px-4 py-3 text-center font-heading text-xs font-semibold">{t('Type', 'प्रकार')}</th>
                    <th className="px-4 py-3 text-right font-heading text-xs font-semibold">{t('Rate/km', 'दर/किमी')}</th>
                    <th className="px-4 py-3 font-heading text-xs font-semibold">{t('Best For', 'सबसे अच्छा')}</th>
                  </tr>
                </thead>
                <tbody>
                  {fleet.map((v, i) => (
                    <tr key={v.id} className={`border-b border-charcoal-50 ${i % 2 === 0 ? 'bg-white' : 'bg-charcoal-50/50'}`}>
                      <td className="px-4 py-3 font-medium text-charcoal-900">{t(v.name, v.nameHi)}</td>
                      <td className="px-4 py-3 text-center text-charcoal-600">{v.seats}</td>
                      <td className="px-4 py-3 text-center">
                        <span className="rounded-full bg-brand-50 px-2 py-0.5 text-xs font-medium text-brand-700">
                          {t(v.typeLabel, v.typeLabelHi)}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-right font-heading font-bold text-brand-600">₹{v.pricePerKm}</td>
                      <td className="px-4 py-3 text-xs text-charcoal-500">{t(v.bestFor, v.bestForHi)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <SectionHeading
            title="Which Vehicle is Right for You?"
            titleHi="आपके लिए कौन सा वाहन सही है?"
            subtitle="Quick guide based on your group size"
            subtitleHi="आपके ग्रुप साइज़ के आधार पर त्वरित गाइड"
          />
          <div className="space-y-3">
            {guideItems.map((item) => (
              <div
                key={item.en}
                className="flex items-center justify-between rounded-xl bg-charcoal-50 p-4"
              >
                <span className="font-medium text-charcoal-900 text-sm">{t(item.en, item.hi)}</span>
                <span className="rounded-full bg-brand-500/10 px-3 py-1 text-xs font-semibold text-brand-700">
                  {t(item.vehicle, item.vehicleHi)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-charcoal-900">
        <div className="container-custom text-center">
          <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
            {t('Need Help Choosing?', 'चुनने में मदद चाहिए?')}
          </h2>
          <p className="mt-2 text-charcoal-300">
            {t('Our team will recommend the perfect vehicle for your trip.', 'हमारी टीम आपकी ट्रिप के लिए सही वाहन की सिफारिश करेगी।')}
          </p>
          <button
            onClick={() =>
              openWhatsApp(
                t(
                  'Hi! I need help choosing the right vehicle for my trip. Can you suggest?',
                  'नमस्ते! मुझे अपनी ट्रिप के लिए सही वाहन चुनने में मदद चाहिए।'
                )
              )
            }
            className="btn-whatsapp mt-6"
          >
            <MessageCircle className="h-4 w-4" />
            {t('Ask on WhatsApp', 'WhatsApp पर पूछें')}
          </button>
        </div>
      </section>
    </>
  );
}

function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  const { t } = useLang();

  return (
    <div className="card-premium overflow-hidden">
      <div className="relative h-44 overflow-hidden">
        <img
          src={vehicle.image}
          alt={vehicle.name}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
        <span className="absolute right-2 top-2 rounded-full bg-charcoal-950/70 px-2.5 py-1 text-[10px] font-semibold text-white backdrop-blur-sm">
          {t(vehicle.typeLabel, vehicle.typeLabelHi)}
        </span>
      </div>
      <div className="p-4">
        <h3 className="mb-1 font-heading text-base font-semibold text-charcoal-900">
          {t(vehicle.name, vehicle.nameHi)}
        </h3>
        <div className="mb-3 flex items-center justify-between">
          <span className="flex items-center gap-1 text-xs text-charcoal-500">
            <Users className="h-3.5 w-3.5" />
            {vehicle.seats} {t('Seats', 'सीटें')}
          </span>
          <span className="font-heading text-lg font-bold text-brand-600">₹{vehicle.pricePerKm}/km</span>
        </div>
        <ul className="mb-4 grid grid-cols-2 gap-1.5">
          {vehicle.features.map((f, i) => (
            <li key={i} className="flex items-center gap-1 text-xs text-charcoal-600">
              <CheckCircle2 className="h-3 w-3 flex-shrink-0 text-brand-500" />
              {t(f, vehicle.featuresHi[i])}
            </li>
          ))}
        </ul>
        <p className="mb-3 text-xs text-charcoal-400">
          <span className="font-semibold text-charcoal-600">{t('Best for:', 'सबसे अच्छा:')}</span>{' '}
          {t(vehicle.bestFor, vehicle.bestForHi)}
        </p>
        <button
          onClick={() =>
            openWhatsApp(
              buildBookingMessage({ vehicle: vehicle.name })
            )
          }
          className="btn-whatsapp w-full text-xs"
        >
          <MessageCircle className="h-4 w-4" />
          {t(`Book ${vehicle.name}`, `${vehicle.nameHi} बुक करें`)}
        </button>
      </div>
    </div>
  );
}
