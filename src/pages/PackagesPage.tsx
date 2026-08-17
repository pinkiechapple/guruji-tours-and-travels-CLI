import { useState } from 'react';
import { Clock, MapPin, Users, IndianRupee, CheckCircle2, XCircle, Eye, MessageCircle, Send } from 'lucide-react';
import { useLang } from '../context/LanguageContext';
import { pilgrimagePackages, tourPackages } from '../data/packages';
import PageHero from '../components/PageHero';
import SEOHead from '../components/SEOHead';
import SectionHeading from '../components/SectionHeading';
import { openWhatsApp, buildBookingMessage } from '../utils/whatsapp';

export default function PackagesPage() {
  const { t } = useLang();
  const [customForm, setCustomForm] = useState({ name: '', phone: '', destinations: '', duration: '', groupSize: '', budget: '' });

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    openWhatsApp(
      `Hi! I need a Tempo Traveller for a group trip.\n\nCustom Tour Request:\nName: ${customForm.name}\nPhone: ${customForm.phone}\nDestinations: ${customForm.destinations}\nDuration: ${customForm.duration}\nGroup Size: ${customForm.groupSize}\nBudget: ${customForm.budget}\n\nPlease create a custom itinerary for me. Thank you!`
    );
  };

  return (
    <>
      <SEOHead
        title="Char Dham Yatra by Tempo Traveller from Delhi | Tour Packages | Guruji Tour & Travels"
        description="Book Char Dham, Do Dham, Vaishno Devi & group tour packages by Tempo Traveller from Delhi. All-inclusive pilgrimage packages with experienced hill drivers. Call 7838626565."
        canonical="https://bookdelhitempotraveller.com/packages"
      />
      <PageHero
        title="Group Tour Packages"
        titleHi="ग्रुप टूर पैकेज"
        subtitle="Tempo Traveller packages for pilgrimages, hill stations & group tours from Delhi"
        subtitleHi="दिल्ली से तीर्थयात्रा, हिल स्टेशन और ग्रुप टूर के लिए टेम्पो ट्रैवलर पैकेज"
        image="/images_new/tempo-traveller/26seater/WhatsApp_Image_2026-03-19_at_11.50.53_(1).jpeg"
        breadcrumb={[{ label: 'Packages', labelHi: 'पैकेज', path: '/packages' }]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Special Tour Packages"
            titleHi="विशेष टूर पैकेज"
            subtitle="All-inclusive packages with hotel, meals, and transport"
            subtitleHi="होटल, भोजन और परिवहन के साथ सभी-समावेशी पैकेज"
          />
          <div className="grid gap-8 lg:grid-cols-2">
            {tourPackages.map((pkg) => (
              <div key={pkg.id} className="card-premium overflow-hidden">
                <div className="relative h-56 overflow-hidden">
                  <img src={pkg.image} alt={pkg.name} className="h-full w-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-heading text-2xl font-bold text-white">{t(pkg.name, pkg.nameHi)}</h3>
                    <div className="mt-1 flex flex-wrap gap-3 text-sm text-charcoal-200">
                      <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {t(pkg.duration, pkg.durationHi)}</span>
                      <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {t(pkg.route, pkg.routeHi)}</span>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <p className="mb-4 text-sm text-charcoal-600">{t(pkg.description, pkg.descriptionHi)}</p>
                  <div className="mb-4 flex items-baseline gap-1">
                    <IndianRupee className="h-5 w-5 text-brand-500" />
                    <span className="font-heading text-3xl font-bold text-charcoal-900">{pkg.pricePerPerson.toLocaleString()}</span>
                    <span className="text-sm text-charcoal-500">/{t('person', 'व्यक्ति')}</span>
                  </div>
                  {pkg.minGroup && (
                    <div className="mb-4 flex items-center gap-1 rounded-lg bg-brand-50 px-3 py-1.5 text-xs font-medium text-brand-700">
                      <Users className="h-3.5 w-3.5" />
                      {t(`Minimum ${pkg.minGroup} persons`, `न्यूनतम ${pkg.minGroup} व्यक्ति`)}
                    </div>
                  )}
                  <div className="mb-4 grid gap-4 sm:grid-cols-2">
                    <div>
                      <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-charcoal-500">
                        {t('Inclusions', 'शामिल')}
                      </h4>
                      <ul className="space-y-1.5">
                        {pkg.inclusions.map((item, i) => (
                          <li key={i} className="flex items-center gap-1.5 text-sm text-charcoal-700">
                            <CheckCircle2 className="h-3.5 w-3.5 flex-shrink-0 text-emerald-500" />
                            {t(item, pkg.inclusionsHi[i])}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-charcoal-500">
                        {t('Exclusions', 'शामिल नहीं')}
                      </h4>
                      <ul className="space-y-1.5">
                        {pkg.exclusions.map((item, i) => (
                          <li key={i} className="flex items-center gap-1.5 text-sm text-charcoal-700">
                            <XCircle className="h-3.5 w-3.5 flex-shrink-0 text-red-400" />
                            {t(item, pkg.exclusionsHi[i])}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="mb-4">
                    <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-charcoal-500">
                      {t('Sightseeing', 'दर्शनीय स्थल')}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {pkg.sightseeing.map((spot, i) => (
                        <span key={i} className="rounded-full bg-charcoal-100 px-2.5 py-1 text-xs font-medium text-charcoal-700">
                          <Eye className="mr-1 inline h-3 w-3" />
                          {t(spot, pkg.sightseeingHi[i])}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button
                    onClick={() => openWhatsApp(buildBookingMessage({ service: pkg.name, destination: pkg.route }))}
                    className="btn-whatsapp w-full"
                  >
                    <MessageCircle className="h-4 w-4" />
                    {t('Book This Package', 'यह पैकेज बुक करें')}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-charcoal-900">
        <div className="container-custom">
          <SectionHeading
            title="Pilgrimage Packages"
            titleHi="तीर्थयात्रा पैकेज"
            subtitle="Transport-only packages for sacred journeys"
            subtitleHi="पवित्र यात्राओं के लिए केवल-परिवहन पैकेज"
            light
          />
          {pilgrimagePackages.map((pkg) => (
            <div key={pkg.id} className="mb-8 rounded-2xl border border-charcoal-700 bg-charcoal-800 p-5 sm:p-8">
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <h3 className="font-heading text-xl font-bold text-white sm:text-2xl">{t(pkg.name, pkg.nameHi)}</h3>
                  <p className="mt-1 text-sm text-brand-400">{t(pkg.duration, pkg.durationHi)} &bull; {t('Transport Only', 'केवल परिवहन')}</p>
                </div>
              </div>
              <p className="mb-5 text-sm text-charcoal-300">{t(pkg.description, pkg.descriptionHi)}</p>
              <div className="overflow-hidden rounded-xl border border-charcoal-700">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-charcoal-700 bg-charcoal-900">
                        <th className="px-4 py-3 text-left text-xs font-semibold text-charcoal-300">{t('Vehicle', 'वाहन')}</th>
                        <th className="px-4 py-3 text-right text-xs font-semibold text-charcoal-300">{t('Package Price', 'पैकेज मूल्य')}</th>
                        <th className="px-4 py-3 text-center text-xs font-semibold text-charcoal-300">{t('Book', 'बुक करें')}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pkg.prices.map((p, i) => (
                        <tr key={i} className="border-b border-charcoal-700/50">
                          <td className="px-4 py-3 font-medium text-white">{t(p.vehicle, p.vehicleHi)}</td>
                          <td className="px-4 py-3 text-right font-heading font-bold text-brand-400">₹{p.price.toLocaleString()}</td>
                          <td className="px-4 py-3 text-center">
                            <button
                              onClick={() => openWhatsApp(buildBookingMessage({ service: pkg.name, vehicle: p.vehicle }))}
                              className="rounded-lg bg-whatsapp px-3 py-1.5 text-xs font-semibold text-white hover:bg-whatsapp-dark"
                            >
                              {t('Enquire', 'पूछें')}
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-2xl">
          <SectionHeading
            title="Custom Tour Request"
            titleHi="कस्टम टूर अनुरोध"
            subtitle="Want a tailor-made itinerary? Tell us your requirements!"
            subtitleHi="अनुकूलित यात्रा कार्यक्रम चाहते हैं? अपनी आवश्यकताएं बताएं!"
          />
          <form onSubmit={handleCustomSubmit} className="space-y-4 rounded-2xl bg-charcoal-50 p-5 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <input type="text" required placeholder={t('Your Name', 'आपका नाम')} value={customForm.name} onChange={(e) => setCustomForm({ ...customForm, name: e.target.value })} className="w-full rounded-xl border border-charcoal-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-brand-500" />
              <input type="tel" required placeholder={t('Phone Number', 'फोन नंबर')} value={customForm.phone} onChange={(e) => setCustomForm({ ...customForm, phone: e.target.value })} className="w-full rounded-xl border border-charcoal-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-brand-500" />
              <input type="text" placeholder={t('Destinations', 'गंतव्य')} value={customForm.destinations} onChange={(e) => setCustomForm({ ...customForm, destinations: e.target.value })} className="w-full rounded-xl border border-charcoal-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-brand-500" />
              <input type="text" placeholder={t('Duration (e.g., 5 days)', 'अवधि (जैसे 5 दिन)')} value={customForm.duration} onChange={(e) => setCustomForm({ ...customForm, duration: e.target.value })} className="w-full rounded-xl border border-charcoal-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-brand-500" />
              <input type="text" placeholder={t('Group Size', 'ग्रुप साइज')} value={customForm.groupSize} onChange={(e) => setCustomForm({ ...customForm, groupSize: e.target.value })} className="w-full rounded-xl border border-charcoal-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-brand-500" />
              <input type="text" placeholder={t('Budget (approx)', 'बजट (लगभग)')} value={customForm.budget} onChange={(e) => setCustomForm({ ...customForm, budget: e.target.value })} className="w-full rounded-xl border border-charcoal-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-brand-500" />
            </div>
            <button type="submit" className="btn-whatsapp w-full">
              <Send className="h-4 w-4" />
              {t('Send Custom Request on WhatsApp', 'WhatsApp पर कस्टम अनुरोध भेजें')}
            </button>
          </form>
        </div>
      </section>

      <section className="section-padding bg-charcoal-50">
        <div className="container-custom max-w-3xl">
          <SectionHeading
            title="Travel Tips"
            titleHi="यात्रा सुझाव"
            subtitle="Useful tips for pilgrimage and hill station travel"
            subtitleHi="तीर्थयात्रा और हिल स्टेशन यात्रा के लिए उपयोगी सुझाव"
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { en: 'Best time for Char Dham: May to June and September to October', hi: 'चार धाम के लिए सबसे अच्छा समय: मई से जून और सितंबर से अक्टूबर' },
              { en: 'Carry warm clothes even in summer for hill stations', hi: 'हिल स्टेशनों के लिए गर्मियों में भी गर्म कपड़े लेकर जाएं' },
              { en: 'Book in advance during peak seasons (May-June, Diwali, New Year)', hi: 'पीक सीज़न (मई-जून, दिवाली, नए साल) में पहले से बुक करें' },
              { en: 'Carry valid ID proofs for hotel check-ins and permits', hi: 'होटल चेक-इन और परमिट के लिए वैध आईडी प्रूफ लेकर जाएं' },
              { en: 'For Ladakh trips, allow 1-2 days for altitude acclimatization', hi: 'लद्दाख ट्रिप के लिए ऊंचाई अनुकूलन के लिए 1-2 दिन रखें' },
              { en: 'Stay hydrated and carry basic medicines for mountain travel', hi: 'पहाड़ी यात्रा के लिए हाइड्रेटेड रहें और बुनियादी दवाइयां लेकर जाएं' },
            ].map((tip, i) => (
              <div key={i} className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm ring-1 ring-black/5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-500" />
                <p className="text-sm text-charcoal-700">{t(tip.en, tip.hi)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
