import { useState, SyntheticEvent } from 'react';
import { MapPin, Clock, IndianRupee, Calendar, MessageCircle, ImageOff } from 'lucide-react';
import { useLang } from '../context/LanguageContext';
import { destinations, regions } from '../data/destinations';
import { fleet } from '../data/fleet';
import PageHero from '../components/PageHero';
import SEOHead from '../components/SEOHead';
import SectionHeading from '../components/SectionHeading';
import { openWhatsApp, buildBookingMessage } from '../utils/whatsapp';

export default function DestinationsPage() {
  const { t } = useLang();
  const [activeRegion, setActiveRegion] = useState<string | null>(null);
  const [calcDest, setCalcDest] = useState('');
  const [calcVehicle, setCalcVehicle] = useState('');

  const filteredDestinations = activeRegion
    ? destinations.filter((d) => d.region === activeRegion)
    : destinations;

  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());

  const handleImageError = (e: SyntheticEvent<HTMLImageElement>, id: string) => {
    e.currentTarget.style.display = 'none';
    setFailedImages((prev) => new Set(prev).add(id));
  };

  const selectedDest = destinations.find((d) => d.id === calcDest);
  const selectedVehicle = fleet.find((v) => v.id === calcVehicle);
  const estimatedFare =
    selectedDest && selectedVehicle
      ? Math.round(parseInt(selectedDest.distance) * selectedVehicle.pricePerKm * 2)
      : null;

  return (
    <>
      <SEOHead
        title="Delhi to Manali, Haridwar, Shimla by Tempo Traveller | Destinations | Guruji Tour & Travels"
        description="Book Tempo Traveller from Delhi to Manali, Haridwar, Rishikesh, Shimla, Jaipur, Nainital, Mussoorie & 100+ destinations. Best per-km rates. Guruji Tour & Travels, Timarpur Delhi. Call 7838626565."
        canonical="https://bookdelhitempotraveller.com/destinations"
      />
      <PageHero
        title="Tempo Traveller Destinations"
        titleHi="टेम्पो ट्रैवलर गंतव्य"
        subtitle="Popular group trip destinations from Delhi by Tempo Traveller"
        subtitleHi="दिल्ली से टेम्पो ट्रैवलर द्वारा लोकप्रिय ग्रुप ट्रिप गंतव्य"
        image="/guruj-cab-images/outstation-destinations/char-dham-yatra.webp"
        breadcrumb={[{ label: 'Destinations', labelHi: 'गंतव्य', path: '/destinations' }]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mb-8 flex flex-wrap gap-2">
            <button
              onClick={() => setActiveRegion(null)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                !activeRegion ? 'bg-charcoal-900 text-white' : 'bg-charcoal-100 text-charcoal-600 hover:bg-charcoal-200'
              }`}
            >
              {t('All Regions', 'सभी क्षेत्र')}
            </button>
            {regions.map((r) => (
              <button
                key={r.id}
                onClick={() => setActiveRegion(r.id)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  activeRegion === r.id ? 'bg-charcoal-900 text-white' : 'bg-charcoal-100 text-charcoal-600 hover:bg-charcoal-200'
                }`}
              >
                {t(r.name, r.nameHi)}
              </button>
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredDestinations.map((dest) => (
              <div key={dest.id} className="group card-premium overflow-hidden">
                <div className="relative h-48 overflow-hidden bg-charcoal-100">
                  {failedImages.has(dest.id) ? (
                    <div className="flex h-full w-full items-center justify-center bg-charcoal-100">
                      <ImageOff className="h-8 w-8 text-charcoal-300" />
                    </div>
                  ) : (
                    <img
                      src={dest.image}
                      alt={dest.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                      onError={(e) => handleImageError(e, dest.id)}
                    />
                  )}
                  <span className="absolute right-2 top-2 rounded-full bg-charcoal-950/70 px-2 py-1 text-[10px] font-semibold text-white backdrop-blur-sm">
                    {t(dest.region === 'himachal' ? 'Himachal' : dest.region === 'uttarakhand' ? 'Uttarakhand' : dest.region === 'rajasthan' ? 'Rajasthan' : dest.region === 'punjab' ? 'Punjab' : dest.region === 'jk' ? 'J&K' : 'Ladakh', dest.regionHi)}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="mb-1 font-heading text-base font-semibold text-charcoal-900">
                    {t(dest.name, dest.nameHi)}
                  </h3>
                  <p className="mb-3 text-xs leading-relaxed text-charcoal-500">
                    {t(dest.description, dest.descriptionHi)}
                  </p>
                  <div className="mb-3 flex flex-wrap gap-2 text-xs text-charcoal-500">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3 text-brand-500" />
                      {dest.distance}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3 text-brand-500" />
                      {dest.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <IndianRupee className="h-3 w-3 text-brand-500" />
                      {t('From', 'शुरू')} ₹{dest.startingFare.toLocaleString()}
                    </span>
                  </div>
                  <div className="mb-3 flex items-center gap-1 text-xs text-charcoal-400">
                    <Calendar className="h-3 w-3 text-brand-400" />
                    {t(dest.bestTime, dest.bestTimeHi)}
                  </div>
                  <button
                    onClick={() =>
                      openWhatsApp(
                        buildBookingMessage({ destination: dest.name, service: 'Outstation Taxi' })
                      )
                    }
                    className="w-full rounded-lg bg-charcoal-900 py-2 text-xs font-semibold text-white transition-colors hover:bg-charcoal-800"
                  >
                    {t(`Book Taxi to ${dest.name}`, `${dest.nameHi} के लिए टैक्सी बुक करें`)}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-charcoal-50">
        <div className="container-custom max-w-3xl">
          <SectionHeading
            title="Fare Estimator"
            titleHi="किराया कैलकुलेटर"
            subtitle="Get an approximate fare estimate for your trip"
            subtitleHi="अपनी ट्रिप के लिए अनुमानित किराया जानें"
          />
          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-xs font-medium text-charcoal-600">
                  {t('Select Destination', 'गंतव्य चुनें')}
                </label>
                <select
                  value={calcDest}
                  onChange={(e) => setCalcDest(e.target.value)}
                  className="w-full rounded-xl border border-charcoal-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-brand-500"
                >
                  <option value="">{t('Choose destination', 'गंतव्य चुनें')}</option>
                  {destinations.map((d) => (
                    <option key={d.id} value={d.id}>{t(d.name, d.nameHi)} ({d.distance})</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="mb-1 block text-xs font-medium text-charcoal-600">
                  {t('Select Vehicle', 'वाहन चुनें')}
                </label>
                <select
                  value={calcVehicle}
                  onChange={(e) => setCalcVehicle(e.target.value)}
                  className="w-full rounded-xl border border-charcoal-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-brand-500"
                >
                  <option value="">{t('Choose vehicle', 'वाहन चुनें')}</option>
                  {fleet.map((v) => (
                    <option key={v.id} value={v.id}>{t(v.name, v.nameHi)} - ₹{v.pricePerKm}/km</option>
                  ))}
                </select>
              </div>
            </div>
            {estimatedFare !== null && (
              <div className="mt-5 rounded-xl bg-brand-50 p-4 text-center">
                <p className="text-xs text-charcoal-500">{t('Estimated Round Trip Fare', 'अनुमानित राउंड ट्रिप किराया')}</p>
                <p className="font-heading text-3xl font-bold text-charcoal-900">₹{estimatedFare.toLocaleString()}</p>
                <p className="mt-1 text-xs text-charcoal-400">{t('* Approximate. Toll, parking, state tax, DA extra.', '* अनुमानित। टोल, पार्किंग, राज्य कर, DA अतिरिक्त।')}</p>
                <button
                  onClick={() =>
                    openWhatsApp(
                      buildBookingMessage({
                        destination: selectedDest?.name,
                        vehicle: selectedVehicle?.name,
                        service: 'Outstation Trip',
                      })
                    )
                  }
                  className="btn-whatsapp mt-3"
                >
                  <MessageCircle className="h-4 w-4" />
                  {t('Get Exact Quote', 'सटीक कोटेशन लें')}
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <SectionHeading
            title="Best Time to Visit"
            titleHi="घूमने का सबसे अच्छा समय"
            subtitle="Seasonal guide for popular destinations from Delhi"
            subtitleHi="दिल्ली से लोकप्रिय गंतव्यों के लिए मौसमी गाइड"
          />
          <div className="overflow-hidden rounded-2xl border border-charcoal-100">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-charcoal-100 bg-charcoal-50">
                    <th className="px-4 py-3 text-left text-xs font-semibold text-charcoal-600">{t('Region', 'क्षेत्र')}</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-charcoal-600">{t('Summer (Apr-Jun)', 'गर्मी (अप्रैल-जून)')}</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-charcoal-600">{t('Monsoon (Jul-Sep)', 'मानसून (जुलाई-सितंबर)')}</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-charcoal-600">{t('Winter (Oct-Mar)', 'सर्दी (अक्टूबर-मार्च)')}</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { region: 'Himachal Pradesh', regionHi: 'हिमाचल प्रदेश', summer: 'Excellent', monsoon: 'Avoid (Landslides)', winter: 'Good (Snow)' },
                    { region: 'Uttarakhand', regionHi: 'उत्तराखंड', summer: 'Excellent', monsoon: 'Avoid (Heavy rains)', winter: 'Good (Temples may close)' },
                    { region: 'Rajasthan', regionHi: 'राजस्थान', summer: 'Too Hot', monsoon: 'Moderate', winter: 'Best Time' },
                    { region: 'Kashmir', regionHi: 'कश्मीर', summer: 'Best Time', monsoon: 'Moderate', winter: 'Good (Snow, Cold)' },
                    { region: 'Ladakh', regionHi: 'लद्दाख', summer: 'Best Time', monsoon: 'Avoid', winter: 'Roads Closed' },
                  ].map((r, i) => (
                    <tr key={i} className="border-b border-charcoal-50">
                      <td className="px-4 py-3 font-medium text-charcoal-900">{t(r.region, r.regionHi)}</td>
                      <td className="px-4 py-3 text-charcoal-600">{r.summer}</td>
                      <td className="px-4 py-3 text-charcoal-600">{r.monsoon}</td>
                      <td className="px-4 py-3 text-charcoal-600">{r.winter}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
