import { useState, SyntheticEvent } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ImageOff } from 'lucide-react';
import { useLang } from '../../context/LanguageContext';
import { destinations } from '../../data/destinations';
import SectionHeading from '../../components/SectionHeading';
import { openWhatsApp, buildBookingMessage } from '../../utils/whatsapp';

const featured = destinations.filter((d) =>
  ['manali', 'shimla', 'jaipur', 'haridwar', 'srinagar', 'leh', 'amritsar', 'rishikesh'].includes(d.id)
);

export default function DestinationsPreview() {
  const { t } = useLang();
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());

  const handleImageError = (e: SyntheticEvent<HTMLImageElement>, id: string) => {
    e.currentTarget.style.display = 'none';
    setFailedImages((prev) => new Set(prev).add(id));
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading
          title="Popular Destinations"
          titleHi="लोकप्रिय गंतव्य"
          subtitle="Explore the most beautiful places across North India"
          subtitleHi="उत्तर भारत के सबसे खूबसूरत स्थानों का अन्वेषण करें"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((dest) => (
            <div
              key={dest.id}
              className="group relative h-56 overflow-hidden rounded-2xl bg-charcoal-100 sm:h-64"
            >
              {failedImages.has(dest.id) ? (
                <div className="absolute inset-0 flex items-center justify-center bg-charcoal-200">
                  <ImageOff className="h-10 w-10 text-charcoal-400" />
                </div>
              ) : (
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  onError={(e) => handleImageError(e, dest.id)}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-charcoal-950/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <h3 className="font-heading text-lg font-bold text-white">
                  {t(dest.name, dest.nameHi)}
                </h3>
                <p className="text-xs text-charcoal-300">
                  {dest.distance} &bull; {t('From', 'शुरू')} ₹{dest.startingFare.toLocaleString()}
                </p>
                <button
                  onClick={() =>
                    openWhatsApp(
                      buildBookingMessage({
                        destination: dest.name,
                        service: 'Outstation Taxi',
                      })
                    )
                  }
                  className="mt-2 rounded-lg bg-white/20 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm transition-colors hover:bg-brand-500 hover:text-charcoal-950"
                >
                  {t('Book Taxi', 'टैक्सी बुक करें')}
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/destinations" className="btn-secondary">
            {t('View All Destinations', 'सभी गंतव्य देखें')}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
