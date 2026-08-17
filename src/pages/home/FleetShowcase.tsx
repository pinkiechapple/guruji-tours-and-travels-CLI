import { Link } from 'react-router-dom';
import { Users, ArrowRight } from 'lucide-react';
import { useLang } from '../../context/LanguageContext';
import { fleet } from '../../data/fleet';
import SectionHeading from '../../components/SectionHeading';
import { openWhatsApp, buildBookingMessage } from '../../utils/whatsapp';

export default function FleetShowcase() {
  const { t } = useLang();

  return (
    <section className="section-padding bg-charcoal-50">
      <div className="container-custom">
        <SectionHeading
          title="Our Complete Fleet"
          titleHi="हमारा पूरा बेड़ा"
          subtitle="Tempo Travellers, luxury vehicles & sedans for every group size and budget"
          subtitleHi="हर ग्रुप साइज़ और बजट के लिए टेम्पो ट्रैवलर, लक्ज़री वाहन और सेडान"
        />
        <div className="scroll-snap-x lg:grid lg:grid-cols-4 lg:gap-4 lg:overflow-visible">
          {fleet.slice(0, 8).map((vehicle) => (
            <div
              key={vehicle.id}
              className="snap-card w-[260px] flex-shrink-0 lg:w-auto"
            >
              <div className="card-premium overflow-hidden">
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <span className="absolute right-2 top-2 rounded-full bg-charcoal-950/70 px-2.5 py-1 text-[10px] font-semibold text-white backdrop-blur-sm">
                    {t(vehicle.typeLabel, vehicle.typeLabelHi)}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-heading text-sm font-semibold text-charcoal-900">
                    {t(vehicle.name, vehicle.nameHi)}
                  </h3>
                  <div className="mt-1.5 flex items-center justify-between">
                    <span className="flex items-center gap-1 text-xs text-charcoal-500">
                      <Users className="h-3.5 w-3.5" />
                      {vehicle.seats} {t('Seats', 'सीटें')}
                    </span>
                    <span className="font-heading text-sm font-bold text-brand-600">
                      ₹{vehicle.pricePerKm}/km
                    </span>
                  </div>
                  <button
                    onClick={() =>
                      openWhatsApp(
                        buildBookingMessage({ vehicle: vehicle.name, service: 'Vehicle Booking' })
                      )
                    }
                    className="mt-3 w-full rounded-lg bg-charcoal-900 py-2 text-xs font-semibold text-white transition-colors hover:bg-charcoal-800"
                  >
                    {t('Book Now', 'अभी बुक करें')}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/fleet" className="btn-secondary">
            {t('View Full Fleet', 'पूरा बेड़ा देखें')}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
