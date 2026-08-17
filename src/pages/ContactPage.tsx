import { useState } from 'react';
import {
  Phone, Mail, MapPin, MessageCircle, Send,
  ChevronDown, Navigation,
} from 'lucide-react';
import { useLang } from '../context/LanguageContext';
import PageHero from '../components/PageHero';
import SEOHead from '../components/SEOHead';
import SectionHeading from '../components/SectionHeading';
import { openWhatsApp, buildEnquiryMessage } from '../utils/whatsapp';

const faqs = [
  { en: 'What are your working hours?', hi: 'आपके काम के घंटे क्या हैं?', ansEn: 'We are available 24/7 for bookings and support. You can call or WhatsApp us anytime.', ansHi: 'हम बुकिंग और सहायता के लिए 24/7 उपलब्ध हैं। आप कभी भी कॉल या WhatsApp कर सकते हैं।' },
  { en: 'How far in advance should I book?', hi: 'मुझे कितने पहले बुक करना चाहिए?', ansEn: 'We recommend booking at least 24-48 hours in advance. For peak season trips, 1-2 weeks advance booking is advisable.', ansHi: 'हम कम से कम 24-48 घंटे पहले बुक करने की सलाह देते हैं। पीक सीज़न ट्रिप के लिए 1-2 सप्ताह पहले बुकिंग उचित है।' },
  { en: 'Can I modify or cancel my booking?', hi: 'क्या मैं अपनी बुकिंग बदल या रद्द कर सकता हूं?', ansEn: 'Yes, modifications and cancellations are possible. Please contact us as early as possible. Cancellation charges may apply depending on the timing.', ansHi: 'हां, संशोधन और रद्दीकरण संभव है। कृपया जल्द से जल्द हमसे संपर्क करें। समय के आधार पर रद्दीकरण शुल्क लग सकता है।' },
];

export default function ContactPage() {
  const { t } = useLang();
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    openWhatsApp(
      buildEnquiryMessage({
        name: form.name,
        phone: form.phone,
        service: form.service,
        message: `Email: ${form.email}\n${form.message}`,
      })
    );
  };

  return (
    <>
      <SEOHead
        title="Contact Guruji Tour & Travels | Book Tempo Traveller Delhi | Call 7838626565"
        description="Contact Guruji Tour & Travels, C-58 Timarpur Track Parking, Delhi 110054. Book Tempo Traveller for your group trip. Call 7838626565, WhatsApp available 24/7. Serving Timarpur, Civil Lines, Model Town & all Delhi NCR."
        canonical="https://bookdelhitempotraveller.com/contact"
      />
      <PageHero
        title="Contact Us"
        titleHi="संपर्क करें"
        subtitle="Book your Tempo Traveller or get a free quote for your group trip"
        subtitleHi="अपना टेम्पो ट्रैवलर बुक करें या अपनी ग्रुप ट्रिप के लिए मुफ्त कोट पाएं"
        image="/images_new/tempo-traveller/16seater/WhatsApp_Image_2026-03-19_at_11.48.22_(1).jpeg"
        breadcrumb={[{ label: 'Contact', labelHi: 'संपर्क', path: '/contact' }]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <a href="tel:7838626565" className="card-premium group flex items-center gap-4 p-5">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-brand-50 transition-colors group-hover:bg-brand-500">
                <Phone className="h-6 w-6 text-brand-600 transition-colors group-hover:text-charcoal-950" />
              </div>
              <div>
                <p className="text-xs font-medium text-charcoal-400">{t('Phone', 'फोन')}</p>
                <p className="font-heading text-sm font-semibold text-charcoal-900">7838626565</p>
                <p className="text-xs text-charcoal-500">7838646565</p>
              </div>
            </a>
            <button onClick={() => openWhatsApp(t('Hi! I need help.', 'नमस्ते! मुझे मदद चाहिए।'))} className="card-premium group flex items-center gap-4 p-5 text-left">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-whatsapp/10 transition-colors group-hover:bg-whatsapp">
                <MessageCircle className="h-6 w-6 text-whatsapp transition-colors group-hover:text-white" />
              </div>
              <div>
                <p className="text-xs font-medium text-charcoal-400">WhatsApp</p>
                <p className="font-heading text-sm font-semibold text-charcoal-900">7838626565</p>
                <p className="text-xs text-charcoal-500">{t('Chat with us', 'हमसे चैट करें')}</p>
              </div>
            </button>
            <a href="mailto:sahilmanchanda0025@gmail.com" className="card-premium group flex items-center gap-4 p-5">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-sky-50 transition-colors group-hover:bg-sky-500">
                <Mail className="h-6 w-6 text-sky-600 transition-colors group-hover:text-white" />
              </div>
              <div>
                <p className="text-xs font-medium text-charcoal-400">{t('Email', 'ईमेल')}</p>
                <p className="font-heading text-xs font-semibold text-charcoal-900 break-all">sahilmanchanda0025@gmail.com</p>
              </div>
            </a>
            <a href="https://maps.google.com/?q=C-58+Timarpur+Track+Parking+Delhi+110054" target="_blank" rel="noopener noreferrer" className="card-premium group flex items-center gap-4 p-5">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-50 transition-colors group-hover:bg-emerald-500">
                <MapPin className="h-6 w-6 text-emerald-600 transition-colors group-hover:text-white" />
              </div>
              <div>
                <p className="text-xs font-medium text-charcoal-400">{t('Office', 'कार्यालय')}</p>
                <p className="font-heading text-xs font-semibold text-charcoal-900">
                  {t('C-58 Timarpur Track Parking', 'C-58 तिमारपुर ट्रैक पार्किंग')}
                </p>
                <p className="text-xs text-charcoal-500">{t('Delhi - 110054', 'दिल्ली - 110054')}</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="section-padding bg-charcoal-50">
        <div className="container-custom">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <SectionHeading
                title="Send Us a Message"
                titleHi="हमें संदेश भेजें"
                subtitle="Fill in the form and we will get back to you on WhatsApp"
                subtitleHi="फॉर्म भरें और हम WhatsApp पर आपसे संपर्क करेंगे"
                centered={false}
              />
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input type="text" required placeholder={t('Your Name *', 'आपका नाम *')} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full rounded-xl border border-charcoal-200 bg-white px-4 py-3 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20" />
                  <input type="email" placeholder={t('Email (optional)', 'ईमेल (वैकल्पिक)')} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full rounded-xl border border-charcoal-200 bg-white px-4 py-3 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20" />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <input type="tel" required placeholder={t('Phone Number *', 'फोन नंबर *')} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full rounded-xl border border-charcoal-200 bg-white px-4 py-3 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20" />
                  <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className="w-full rounded-xl border border-charcoal-200 bg-white px-4 py-3 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20">
                    <option value="">{t('Select Service', 'सेवा चुनें')}</option>
                    <option value="Airport Transfer">{t('Airport Transfer', 'एयरपोर्ट ट्रांसफर')}</option>
                    <option value="Outstation Trip">{t('Outstation Trip', 'आउटस्टेशन ट्रिप')}</option>
                    <option value="Local Sightseeing">{t('Local Sightseeing', 'स्थानीय दर्शन')}</option>
                    <option value="Hourly Rental">{t('Hourly Rental', 'प्रति घंटा किराया')}</option>
                    <option value="Corporate Rental">{t('Corporate Rental', 'कॉर्पोरेट रेंटल')}</option>
                    <option value="Wedding Transport">{t('Wedding Transport', 'शादी ट्रांसपोर्ट')}</option>
                    <option value="Pilgrimage Tour">{t('Pilgrimage Tour', 'तीर्थयात्रा टूर')}</option>
                    <option value="Tour Package">{t('Tour Package', 'टूर पैकेज')}</option>
                    <option value="Other">{t('Other', 'अन्य')}</option>
                  </select>
                </div>
                <textarea
                  rows={4}
                  placeholder={t('Your Message (optional)', 'आपका संदेश (वैकल्पिक)')}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full resize-none rounded-xl border border-charcoal-200 bg-white px-4 py-3 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
                />
                <button type="submit" className="btn-whatsapp w-full">
                  <Send className="h-4 w-4" />
                  {t('Send on WhatsApp', 'WhatsApp पर भेजें')}
                </button>
              </form>
            </div>

            <div className="space-y-6">
              <div className="overflow-hidden rounded-2xl">
                <iframe
                  title="Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.5!2d77.21!3d28.69!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDQxJzI0LjAiTiA3N8KwMTInMzYuMCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-2xl"
                />
              </div>

              <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5">
                <h3 className="mb-3 font-heading text-base font-semibold text-charcoal-900">
                  {t('Business Hours', 'कार्यालय समय')}
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-charcoal-600">{t('Booking & Support', 'बुकिंग और सहायता')}</span>
                    <span className="font-semibold text-brand-600">24/7</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-charcoal-600">{t('Office Hours', 'कार्यालय समय')}</span>
                    <span className="font-medium text-charcoal-900">9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-charcoal-600">{t('Days', 'दिन')}</span>
                    <span className="font-medium text-charcoal-900">{t('All 7 Days', 'सभी 7 दिन')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Quick Actions"
            titleHi="त्वरित कार्य"
            subtitle="Get in touch with us instantly"
            subtitleHi="हमसे तुरंत संपर्क करें"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <a href="tel:7838626565" className="flex items-center justify-center gap-3 rounded-2xl bg-charcoal-900 p-5 text-center text-white transition-all hover:bg-charcoal-800 hover:shadow-lg">
              <Phone className="h-6 w-6 text-brand-400" />
              <span className="font-heading text-sm font-semibold">{t('Call Now', 'अभी कॉल करें')}</span>
            </a>
            <button onClick={() => openWhatsApp(t('Hi! I need assistance.', 'नमस्ते! मुझे सहायता चाहिए।'))} className="flex items-center justify-center gap-3 rounded-2xl bg-whatsapp p-5 text-center text-white transition-all hover:bg-whatsapp-dark hover:shadow-lg">
              <MessageCircle className="h-6 w-6" />
              <span className="font-heading text-sm font-semibold">{t('WhatsApp Now', 'अभी WhatsApp करें')}</span>
            </button>
            <a href="mailto:sahilmanchanda0025@gmail.com" className="flex items-center justify-center gap-3 rounded-2xl bg-sky-500 p-5 text-center text-white transition-all hover:bg-sky-600 hover:shadow-lg">
              <Mail className="h-6 w-6" />
              <span className="font-heading text-sm font-semibold">{t('Email Us', 'ईमेल करें')}</span>
            </a>
            <a href="https://maps.google.com/?q=C-58+Timarpur+Track+Parking+Delhi+110054" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 rounded-2xl bg-emerald-500 p-5 text-center text-white transition-all hover:bg-emerald-600 hover:shadow-lg">
              <Navigation className="h-6 w-6" />
              <span className="font-heading text-sm font-semibold">{t('Get Directions', 'दिशा-निर्देश पाएं')}</span>
            </a>
          </div>
        </div>
      </section>

      <section className="section-padding bg-charcoal-50">
        <div className="container-custom max-w-3xl">
          <SectionHeading
            title="Frequently Asked Questions"
            titleHi="अक्सर पूछे जाने वाले प्रश्न"
          />
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-black/5">
                <button onClick={() => setFaqOpen(faqOpen === i ? null : i)} className="flex w-full items-center justify-between p-4 text-left">
                  <span className="pr-4 font-heading text-sm font-semibold text-charcoal-900">{t(faq.en, faq.hi)}</span>
                  <ChevronDown className={`h-5 w-5 flex-shrink-0 text-charcoal-400 transition-transform ${faqOpen === i ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${faqOpen === i ? 'max-h-40' : 'max-h-0'}`}>
                  <p className="px-4 pb-4 text-sm leading-relaxed text-charcoal-600">{t(faq.ansEn, faq.ansHi)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
