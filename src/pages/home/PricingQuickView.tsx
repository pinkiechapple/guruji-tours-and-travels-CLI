import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLang } from '../../context/LanguageContext';
import { fleet } from '../../data/fleet';
import SectionHeading from '../../components/SectionHeading';
import { openWhatsApp } from '../../utils/whatsapp';

export default function PricingQuickView() {
  const { t } = useLang();

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading
          title="Outstation Pricing"
          titleHi="आउटस्टेशन मूल्य"
          subtitle="Transparent per-km rates for round trip journeys"
          subtitleHi="राउंड ट्रिप यात्रा के लिए पारदर्शी प्रति-किमी दरें"
        />
        <div className="overflow-hidden rounded-2xl border border-charcoal-100">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-charcoal-100 bg-charcoal-50">
                  <th className="px-4 py-3 font-heading text-xs font-semibold uppercase tracking-wider text-charcoal-600">
                    {t('Vehicle', 'वाहन')}
                  </th>
                  <th className="px-4 py-3 text-center font-heading text-xs font-semibold uppercase tracking-wider text-charcoal-600">
                    {t('Seats', 'सीटें')}
                  </th>
                  <th className="px-4 py-3 text-center font-heading text-xs font-semibold uppercase tracking-wider text-charcoal-600">
                    {t('Type', 'प्रकार')}
                  </th>
                  <th className="px-4 py-3 text-right font-heading text-xs font-semibold uppercase tracking-wider text-charcoal-600">
                    {t('Rate / km', 'दर / किमी')}
                  </th>
                </tr>
              </thead>
              <tbody>
                {fleet.map((v, i) => (
                  <tr
                    key={v.id}
                    className={`border-b border-charcoal-50 transition-colors hover:bg-brand-50/50 ${
                      i % 2 === 0 ? 'bg-white' : 'bg-charcoal-50/30'
                    }`}
                  >
                    <td className="px-4 py-3 font-medium text-charcoal-900">
                      {t(v.name, v.nameHi)}
                    </td>
                    <td className="px-4 py-3 text-center text-charcoal-600">{v.seats}</td>
                    <td className="px-4 py-3 text-center">
                      <span className="rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-medium text-brand-700">
                        {t(v.typeLabel, v.typeLabelHi)}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right font-heading font-bold text-brand-600">
                      ₹{v.pricePerKm}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <p className="mt-3 text-center text-xs text-charcoal-400">
          {t(
            '* Toll, parking, state tax extra. Driver DA applicable. Min billing: 250 km/day.',
            '* टोल, पार्किंग, राज्य कर अलग। ड्राइवर DA लागू। न्यूनतम बिलिंग: 250 किमी/दिन।'
          )}
        </p>
        <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <button
            onClick={() =>
              openWhatsApp(
                t(
                  'Hi! I would like a custom quote for an outstation trip.',
                  'नमस्ते! मुझे आउटस्टेशन ट्रिप के लिए कस्टम कोटेशन चाहिए।'
                )
              )
            }
            className="btn-whatsapp"
          >
            {t('Get Custom Quote', 'कस्टम कोटेशन लें')}
          </button>
          <Link to="/pricing" className="btn-secondary">
            {t('View Full Pricing', 'पूरी मूल्य सूची देखें')}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
