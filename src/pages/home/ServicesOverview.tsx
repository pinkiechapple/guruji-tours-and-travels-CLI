import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLang } from '../../context/LanguageContext';
import { services } from '../../data/services';
import SectionHeading from '../../components/SectionHeading';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function ServicesOverview() {
  const { t } = useLang();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" className="section-padding bg-white" ref={ref}>
      <div className="container-custom">
        <SectionHeading
          title="Our Services"
          titleHi="हमारी सेवाएं"
          subtitle="Comprehensive taxi and travel solutions for every need"
          subtitleHi="हर ज़रूरत के लिए व्यापक टैक्सी और यात्रा समाधान"
        />

        <div
          className={`grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {services.map((service, i) => (
            <Link
              key={service.id}
              to="/services"
              className="group relative overflow-hidden rounded-2xl bg-charcoal-900 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={t(service.title, service.titleHi)}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-charcoal-950/40 to-transparent" />
              </div>

              <div className="relative -mt-10 z-10 px-5 pb-5">
                <h3 className="mb-1.5 font-heading text-lg font-bold text-white">
                  {t(service.title, service.titleHi)}
                </h3>
                <p className="text-sm leading-relaxed text-charcoal-300">
                  {t(service.short, service.shortHi)}
                </p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-brand-400 transition-colors group-hover:text-brand-300">
                  {t('Learn More', 'और जानें')}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
