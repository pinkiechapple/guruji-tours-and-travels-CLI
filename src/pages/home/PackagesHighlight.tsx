import { Link } from 'react-router-dom';
import { ArrowRight, Clock, MapPin, Users, IndianRupee } from 'lucide-react';
import { useLang } from '../../context/LanguageContext';
import { tourPackages, pilgrimagePackages } from '../../data/packages';
import SectionHeading from '../../components/SectionHeading';
import { openWhatsApp, buildBookingMessage } from '../../utils/whatsapp';

export default function PackagesHighlight() {
  const { t } = useLang();

  return (
    <section className="section-padding bg-charcoal-900">
      <div className="container-custom">
        <SectionHeading
          title="Tour Packages"
          titleHi="टूर पैकेज"
          subtitle="Curated travel experiences at unbeatable prices"
          subtitleHi="बेजोड़ कीमतों पर चयनित यात्रा अनुभव"
          light
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {tourPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="overflow-hidden rounded-2xl border border-charcoal-700 bg-charcoal-800"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-800 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4">
                  <h3 className="font-heading text-xl font-bold text-white">
                    {t(pkg.name, pkg.nameHi)}
                  </h3>
                </div>
              </div>
              <div className="p-5">
                <div className="mb-3 flex flex-wrap gap-3">
                  <span className="flex items-center gap-1.5 text-sm text-charcoal-300">
                    <Clock className="h-4 w-4 text-brand-400" />
                    {t(pkg.duration, pkg.durationHi)}
                  </span>
                  <span className="flex items-center gap-1.5 text-sm text-charcoal-300">
                    <MapPin className="h-4 w-4 text-brand-400" />
                    {t(pkg.route, pkg.routeHi)}
                  </span>
                  {pkg.minGroup && (
                    <span className="flex items-center gap-1.5 text-sm text-charcoal-300">
                      <Users className="h-4 w-4 text-brand-400" />
                      {t(`Min ${pkg.minGroup} persons`, `न्यूनतम ${pkg.minGroup} व्यक्ति`)}
                    </span>
                  )}
                </div>
                <div className="mb-4 flex items-baseline gap-1">
                  <IndianRupee className="h-5 w-5 text-brand-400" />
                  <span className="font-heading text-2xl font-bold text-white">
                    {pkg.pricePerPerson.toLocaleString()}
                  </span>
                  <span className="text-sm text-charcoal-400">/{t('person', 'व्यक्ति')}</span>
                </div>
                <button
                  onClick={() =>
                    openWhatsApp(
                      buildBookingMessage({
                        service: pkg.name,
                        destination: pkg.route,
                      })
                    )
                  }
                  className="btn-primary w-full"
                >
                  {t('Enquire Now', 'अभी पूछताछ करें')}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {pilgrimagePackages.map((pkg) => (
            <div
              key={pkg.id}
              className="group overflow-hidden rounded-2xl border border-charcoal-700 bg-charcoal-800"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={t(pkg.name, pkg.nameHi)}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/90 via-charcoal-900/30 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4">
                  <h3 className="font-heading text-lg font-bold text-white">
                    {t(pkg.name, pkg.nameHi)}
                  </h3>
                  <p className="mt-0.5 text-xs text-charcoal-300">
                    {t(pkg.duration, pkg.durationHi)} &bull;{' '}
                    {t('Transport Only', 'केवल परिवहन')}
                  </p>
                </div>
              </div>
              <div className="p-4">
                <p className="mb-3 text-sm text-charcoal-300">
                  {t(
                    `Starting from ₹${pkg.prices[0].price.toLocaleString()} (${pkg.prices[0].vehicle})`,
                    `₹${pkg.prices[0].price.toLocaleString()} से शुरू (${pkg.prices[0].vehicleHi})`
                  )}
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={() =>
                      openWhatsApp(
                        buildBookingMessage({ service: pkg.name })
                      )
                    }
                    className="btn-primary flex-1 text-xs"
                  >
                    {t('Get Quote', 'कोटेशन लें')}
                  </button>
                  <Link to="/packages" className="btn-secondary flex-1 text-xs text-brand-400">
                    {t('View Details', 'विवरण देखें')}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link to="/packages" className="btn-secondary border-brand-500/30 text-brand-400 hover:bg-brand-500 hover:text-charcoal-950">
            {t('View All Packages', 'सभी पैकेज देखें')}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
