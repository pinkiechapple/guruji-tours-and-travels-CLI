import { MapPin } from 'lucide-react';
import { useLang } from '../../context/LanguageContext';
import SectionHeading from '../../components/SectionHeading';

const areaDetails = [
  { id: 'delhi', en: 'Delhi NCR', hi: 'दिल्ली NCR', color: 'bg-brand-500' },
  { id: 'uttarakhand', en: 'Uttarakhand', hi: 'उत्तराखंड', color: 'bg-emerald-500' },
  { id: 'himachal', en: 'Himachal Pradesh', hi: 'हिमाचल प्रदेश', color: 'bg-sky-500' },
  { id: 'rajasthan', en: 'Rajasthan', hi: 'राजस्थान', color: 'bg-amber-500' },
  { id: 'punjab', en: 'Punjab', hi: 'पंजाब', color: 'bg-orange-500' },
  { id: 'up', en: 'Uttar Pradesh', hi: 'उत्तर प्रदेश', color: 'bg-teal-500' },
  { id: 'jk', en: 'Jammu & Kashmir', hi: 'जम्मू और कश्मीर', color: 'bg-cyan-500' },
  { id: 'ladakh', en: 'Ladakh', hi: 'लद्दाख', color: 'bg-rose-500' },
];

const localAreas = [
  'Timarpur', 'Civil Lines', 'Model Town', 'Mukherjee Nagar', 'GTB Nagar',
  'Kamla Nagar', 'Shakti Nagar', 'Kashmere Gate', 'Old Delhi', 'New Delhi',
  'Rohini', 'Pitampura', 'Karol Bagh', 'Connaught Place', 'Dwarka',
  'Noida', 'Gurgaon', 'Ghaziabad', 'Faridabad', 'Greater Noida',
  'Shalimar Bagh', 'Punjabi Bagh', 'Moti Nagar', 'Rajouri Garden',
  'Kirti Nagar', 'Ramesh Nagar', 'Raja Garden', 'Kohat Enclave', 'Saraswati Vihar',
];

export default function ServiceAreas() {
  const { t } = useLang();

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading
          title="Tempo Traveller Service Areas"
          titleHi="टेम्पो ट्रैवलर सेवा क्षेत्र"
          subtitle="Pickup from Timarpur, Delhi NCR & drop across North India"
          subtitleHi="तिमारपुर, दिल्ली NCR से पिकअप और उत्तर भारत भर में ड्रॉप"
        />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:gap-4">
          {areaDetails.map((area) => (
            <div
              key={area.id}
              className="group flex items-center gap-3 rounded-xl bg-charcoal-50 p-4 transition-all hover:bg-charcoal-900 hover:shadow-lg"
            >
              <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${area.color}/10 transition-colors group-hover:${area.color}`}>
                <MapPin className={`h-5 w-5 ${area.color.replace('bg-', 'text-')} transition-colors group-hover:text-white`} />
              </div>
              <span className="font-heading text-sm font-semibold text-charcoal-900 transition-colors group-hover:text-white">
                {t(area.en, area.hi)}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <h3 className="mb-4 text-center font-heading text-lg font-bold text-charcoal-900">
            {t('Tempo Traveller Pickup Available From', 'टेम्पो ट्रैवलर पिकअप उपलब्ध')}
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {localAreas.map((area) => (
              <span
                key={area}
                className="rounded-full bg-charcoal-50 px-3 py-1.5 text-xs font-medium text-charcoal-700 ring-1 ring-charcoal-100"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
