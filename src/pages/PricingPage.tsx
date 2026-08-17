import { useState } from 'react';
import { CheckCircle2, AlertCircle, MessageCircle, IndianRupee, Shield } from 'lucide-react';
import { useLang } from '../context/LanguageContext';
import { fleet } from '../data/fleet';
import { pilgrimagePackages, tourPackages } from '../data/packages';
import { destinations } from '../data/destinations';
import PageHero from '../components/PageHero';
import SEOHead from '../components/SEOHead';
import SectionHeading from '../components/SectionHeading';
import { openWhatsApp, buildBookingMessage } from '../utils/whatsapp';

export default function PricingPage() {
  const { t } = useLang();
  const [estDest, setEstDest] = useState('');
  const [estVehicle, setEstVehicle] = useState('');

  const selDest = destinations.find((d) => d.id === estDest);
  const selVehicle = fleet.find((v) => v.id === estVehicle);
  const estFare = selDest && selVehicle ? Math.round(parseInt(selDest.distance) * selVehicle.pricePerKm * 2) : null;

  return (
    <>
      <SEOHead
        title="Tempo Traveller Rates in Delhi | Rs 24/km | Pricing | Guruji Tour & Travels"
        description="Tempo Traveller rental rates in Delhi - 16 seater Rs 24/km, 21 seater Rs 26/km, 26 seater Rs 31/km. Transparent pricing, no hidden charges. Fare estimator for outstation trips. Call 7838626565."
        canonical="https://bookdelhitempotraveller.com/pricing"
      />
      <PageHero
        title="Tempo Traveller Rates"
        titleHi="टेम्पो ट्रैवलर दरें"
        subtitle="Transparent per-km pricing for Tempo Travellers and all vehicles"
        subtitleHi="टेम्पो ट्रैवलर और सभी वाहनों के लिए पारदर्शी प्रति-किमी मूल्य"
        image="/images_new/tempo-traveller/16seater/WhatsApp_Image_2026-03-19_at_11.48.21.jpeg"
        breadcrumb={[{ label: 'Pricing', labelHi: 'मूल्य', path: '/pricing' }]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Tempo Traveller & Vehicle Rates"
            titleHi="टेम्पो ट्रैवलर और वाहन दरें"
            subtitle="Round trip per-km rates — Tempo Travellers listed first"
            subtitleHi="राउंड ट्रिप प्रति-किमी दरें — टेम्पो ट्रैवलर पहले सूचीबद्ध"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {fleet.map((v) => (
              <div key={v.id} className="card-premium p-5 text-center">
                <h3 className="mb-1 font-heading text-sm font-semibold text-charcoal-900">{t(v.name, v.nameHi)}</h3>
                <p className="mb-3 text-xs text-charcoal-400">{t(v.typeLabel, v.typeLabelHi)} &bull; {v.seats} {t('seats', 'सीटें')}</p>
                <div className="mb-3 flex items-baseline justify-center gap-1">
                  <span className="font-heading text-3xl font-bold text-charcoal-900">₹{v.pricePerKm}</span>
                  <span className="text-sm text-charcoal-500">/km</span>
                </div>
                <button
                  onClick={() => openWhatsApp(buildBookingMessage({ vehicle: v.name, service: 'Outstation Trip' }))}
                  className="w-full rounded-lg bg-charcoal-900 py-2 text-xs font-semibold text-white transition-colors hover:bg-charcoal-800"
                >
                  {t('Get Quote', 'कोटेशन लें')}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-charcoal-50">
        <div className="container-custom max-w-3xl">
          <SectionHeading
            title="Billing Terms"
            titleHi="बिलिंग शर्तें"
            subtitle="Important pricing details to note before booking"
            subtitleHi="बुकिंग से पहले ध्यान देने योग्य महत्वपूर्ण मूल्य विवरण"
          />
          <div className="space-y-3">
            {[
              { en: 'Minimum billing: 250 km per day for outstation trips', hi: 'न्यूनतम बिलिंग: आउटस्टेशन ट्रिप के लिए 250 किमी प्रति दिन', type: 'info' },
              { en: 'Toll charges are extra and to be paid by customer', hi: 'टोल शुल्क अतिरिक्त है और ग्राहक द्वारा भुगतान किया जाएगा', type: 'extra' },
              { en: 'Parking charges are extra', hi: 'पार्किंग शुल्क अतिरिक्त है', type: 'extra' },
              { en: 'State tax (if applicable) is extra', hi: 'राज्य कर (यदि लागू हो) अतिरिक्त है', type: 'extra' },
              { en: 'Driver daily allowance (DA) applicable', hi: 'ड्राइवर दैनिक भत्ता (DA) लागू', type: 'extra' },
              { en: 'Night charges may apply for travel after 10 PM', hi: 'रात 10 बजे के बाद यात्रा पर रात्रि शुल्क लग सकता है', type: 'extra' },
              { en: 'Rates are for round trip. One-way rates available on request', hi: 'दरें राउंड ट्रिप के लिए हैं। एक तरफ की दरें अनुरोध पर उपलब्ध', type: 'info' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm ring-1 ring-black/5">
                {item.type === 'extra' ? (
                  <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-500" />
                ) : (
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-500" />
                )}
                <p className="text-sm text-charcoal-700">{t(item.en, item.hi)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Pilgrimage Package Pricing"
            titleHi="तीर्थयात्रा पैकेज मूल्य"
            subtitle="Transport-only pricing for pilgrimage tours"
            subtitleHi="तीर्थयात्रा टूर के लिए केवल-परिवहन मूल्य"
          />
          <div className="grid gap-6 lg:grid-cols-2">
            {pilgrimagePackages.map((pkg) => (
              <div key={pkg.id} className="overflow-hidden rounded-2xl border border-charcoal-100">
                <div className="bg-charcoal-900 px-5 py-4">
                  <h3 className="font-heading text-lg font-bold text-white">{t(pkg.name, pkg.nameHi)}</h3>
                  <p className="text-sm text-brand-400">{t(pkg.duration, pkg.durationHi)}</p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-charcoal-100 bg-charcoal-50">
                        <th className="px-4 py-2.5 text-left text-xs font-semibold text-charcoal-600">{t('Vehicle', 'वाहन')}</th>
                        <th className="px-4 py-2.5 text-right text-xs font-semibold text-charcoal-600">{t('Price', 'मूल्य')}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pkg.prices.map((p, i) => (
                        <tr key={i} className="border-b border-charcoal-50">
                          <td className="px-4 py-2.5 text-charcoal-700">{t(p.vehicle, p.vehicleHi)}</td>
                          <td className="px-4 py-2.5 text-right font-heading font-bold text-brand-600">₹{p.price.toLocaleString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-charcoal-50">
        <div className="container-custom">
          <SectionHeading
            title="Special Package Pricing"
            titleHi="विशेष पैकेज मूल्य"
            subtitle="All-inclusive tour package rates"
            subtitleHi="सभी-समावेशी टूर पैकेज दरें"
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {tourPackages.map((pkg) => (
              <div key={pkg.id} className="card-premium p-5">
                <h3 className="mb-1 font-heading text-base font-semibold text-charcoal-900">{t(pkg.name, pkg.nameHi)}</h3>
                <p className="mb-2 text-xs text-charcoal-500">{t(pkg.duration, pkg.durationHi)} &bull; {t(pkg.route, pkg.routeHi)}</p>
                <div className="mb-3 flex items-baseline gap-1">
                  <IndianRupee className="h-4 w-4 text-brand-500" />
                  <span className="font-heading text-2xl font-bold text-charcoal-900">{pkg.pricePerPerson.toLocaleString()}</span>
                  <span className="text-sm text-charcoal-500">/{t('person', 'व्यक्ति')}</span>
                </div>
                <button
                  onClick={() => openWhatsApp(buildBookingMessage({ service: pkg.name }))}
                  className="btn-whatsapp w-full text-xs"
                >
                  <MessageCircle className="h-4 w-4" />
                  {t('Enquire Now', 'अभी पूछताछ करें')}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-2xl">
          <SectionHeading
            title="Fare Estimator"
            titleHi="किराया कैलकुलेटर"
            subtitle="Estimate your outstation trip cost"
            subtitleHi="अपनी आउटस्टेशन ट्रिप की लागत जानें"
          />
          <div className="rounded-2xl bg-charcoal-50 p-5 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <select value={estDest} onChange={(e) => setEstDest(e.target.value)} className="w-full rounded-xl border border-charcoal-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-brand-500">
                <option value="">{t('Select Destination', 'गंतव्य चुनें')}</option>
                {destinations.map((d) => (<option key={d.id} value={d.id}>{t(d.name, d.nameHi)} ({d.distance})</option>))}
              </select>
              <select value={estVehicle} onChange={(e) => setEstVehicle(e.target.value)} className="w-full rounded-xl border border-charcoal-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-brand-500">
                <option value="">{t('Select Vehicle', 'वाहन चुनें')}</option>
                {fleet.map((v) => (<option key={v.id} value={v.id}>{t(v.name, v.nameHi)} (₹{v.pricePerKm}/km)</option>))}
              </select>
            </div>
            {estFare !== null && (
              <div className="mt-5 rounded-xl bg-white p-5 text-center shadow-sm ring-1 ring-black/5">
                <p className="text-xs text-charcoal-500">{t('Estimated Round Trip Fare', 'अनुमानित राउंड ट्रिप किराया')}</p>
                <p className="mt-1 font-heading text-4xl font-bold text-charcoal-900">₹{estFare.toLocaleString()}</p>
                <p className="mt-1 text-xs text-charcoal-400">{t('* Toll, parking, state tax, DA extra', '* टोल, पार्किंग, राज्य कर, DA अतिरिक्त')}</p>
                <button
                  onClick={() => openWhatsApp(buildBookingMessage({ destination: selDest?.name, vehicle: selVehicle?.name, service: 'Outstation Trip' }))}
                  className="btn-whatsapp mt-4"
                >
                  <MessageCircle className="h-4 w-4" />
                  {t('Get Exact Quote', 'सटीक कोटेशन लें')}
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="section-padding bg-charcoal-900">
        <div className="container-custom max-w-3xl text-center">
          <Shield className="mx-auto mb-4 h-12 w-12 text-brand-400" />
          <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
            {t('Our Price Guarantee', 'हमारी मूल्य गारंटी')}
          </h2>
          <p className="mt-3 text-charcoal-300">
            {t(
              'We believe in 100% transparent pricing. The rate quoted is the rate you pay. No surprise charges, no hidden fees. All additional costs (toll, parking, taxes) are communicated upfront before you confirm your booking.',
              'हम 100% पारदर्शी मूल्य निर्धारण में विश्वास करते हैं। जो दर बताई गई है वही आप भुगतान करते हैं। कोई आश्चर्यजनक शुल्क नहीं, कोई छिपी फीस नहीं। सभी अतिरिक्त लागतें (टोल, पार्किंग, कर) बुकिंग की पुष्टि से पहले बता दी जाती हैं।'
            )}
          </p>
          <button
            onClick={() => openWhatsApp(t('Hi! I would like a detailed quote for my trip.', 'नमस्ते! मुझे अपनी ट्रिप के लिए विस्तृत कोटेशन चाहिए।'))}
            className="btn-primary mt-6"
          >
            {t('Get Custom Quote', 'कस्टम कोटेशन लें')}
          </button>
        </div>
      </section>
    </>
  );
}
