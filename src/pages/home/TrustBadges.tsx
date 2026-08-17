import { ShieldCheck, MapPinned, BadgeCheck, Wifi } from 'lucide-react';
import { useLang } from '../../context/LanguageContext';

const badges = [
  { icon: ShieldCheck, en: 'Safe & Insured Travel', hi: 'सुरक्षित और बीमित यात्रा' },
  { icon: BadgeCheck, en: 'Verified Professional Drivers', hi: 'सत्यापित पेशेवर ड्राइवर' },
  { icon: MapPinned, en: 'GPS Tracked Vehicles', hi: 'GPS ट्रैक वाहन' },
  { icon: Wifi, en: 'Connected Vehicles', hi: 'कनेक्टेड वाहन' },
];

export default function TrustBadges() {
  const { t } = useLang();

  return (
    <section className="border-t border-charcoal-100 bg-white py-8">
      <div className="container-custom">
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          {badges.map((badge) => (
            <div key={badge.en} className="flex items-center gap-2 text-charcoal-500">
              <badge.icon className="h-5 w-5 text-brand-500" />
              <span className="text-xs font-medium sm:text-sm">{t(badge.en, badge.hi)}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
