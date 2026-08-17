import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLang } from '../../context/LanguageContext';
import SectionHeading from '../../components/SectionHeading';

const faqs = [
  { en: 'How much does a Tempo Traveller cost on rent in Delhi?', hi: 'दिल्ली में टेम्पो ट्रैवलर किराये पर कितने में मिलता है?', ansEn: 'Tempo Traveller rental rates in Delhi start from Rs 24/km for 16 seater, Rs 26/km for 21 seater, and Rs 31/km for 26 seater. Minimum billing is 250 km/day for outstation trips. Guruji Tour & Travels, Timarpur Delhi offers the best rates in Delhi NCR. Call 7838626565 for exact quote.', ansHi: 'दिल्ली में टेम्पो ट्रैवलर किराया 16 सीटर के लिए Rs 24/km, 21 सीटर के लिए Rs 26/km और 26 सीटर के लिए Rs 31/km से शुरू होता है। न्यूनतम बिलिंग 250 km/दिन है। कॉल करें 7838626565।' },
  { en: 'Where can I book a Tempo Traveller near Timarpur, Delhi?', hi: 'तिमारपुर, दिल्ली के पास टेम्पो ट्रैवलर कहाँ बुक कर सकते हैं?', ansEn: 'Guruji Tour & Travels is located at C-58 Timarpur Track Parking, Delhi 110054. We serve Timarpur, Civil Lines, Model Town, Mukherjee Nagar, GTB Nagar, Kamla Nagar, Shakti Nagar, and all of Delhi NCR. Call 7838626565 or WhatsApp for instant booking.', ansHi: 'गुरुजी टूर एंड ट्रैवल्स C-58 तिमारपुर ट्रैक पार्किंग, दिल्ली 110054 में स्थित है। हम तिमारपुर, सिविल लाइन्स, मॉडल टाउन और पूरे दिल्ली NCR में सेवा देते हैं। कॉल 7838626565।' },
  { en: 'Can I hire a Tempo Traveller for Char Dham Yatra from Delhi?', hi: 'क्या दिल्ली से चार धाम यात्रा के लिए टेम्पो ट्रैवलर मिल सकता है?', ansEn: 'Yes! Guruji Tour & Travels specializes in Char Dham Yatra by Tempo Traveller from Delhi. We have experienced Uttarakhand hill drivers. 16, 21, 26 seater AC Tempo Travellers available. Do Dham, Char Dham, and custom pilgrimage packages available at best rates.', ansHi: 'हां! गुरुजी टूर एंड ट्रैवल्स दिल्ली से चार धाम यात्रा के लिए टेम्पो ट्रैवलर में विशेषज्ञ है। अनुभवी पहाड़ी ड्राइवर और 16, 21, 26 सीटर AC वाहन उपलब्ध हैं।' },
  { en: 'What is the minimum billing for outstation Tempo Traveller trips?', hi: 'आउटस्टेशन टेम्पो ट्रैवलर ट्रिप के लिए न्यूनतम बिलिंग क्या है?', ansEn: 'Minimum billing is 250 km per day for outstation round trips. Toll, parking, state tax, and driver DA are extra. One-way rates also available on request. Contact us for Delhi to Manali, Shimla, Haridwar, Jaipur, and other route-specific pricing.', ansHi: 'आउटस्टेशन राउंड ट्रिप के लिए न्यूनतम बिलिंग 250 किमी प्रति दिन है। टोल, पार्किंग, राज्य कर और ड्राइवर DA अलग हैं।' },
  { en: 'Do you provide Tempo Traveller for weddings in Delhi NCR?', hi: 'क्या दिल्ली NCR में शादी के लिए टेम्पो ट्रैवलर मिलता है?', ansEn: 'Yes, we provide 16, 21, and 26 seater Tempo Travellers for wedding guest transportation in Delhi NCR, Noida, Gurgaon, Ghaziabad, and Faridabad. We handle baarat, reception, and multi-venue event logistics. Book in advance during wedding season.', ansHi: 'हां, हम दिल्ली NCR में शादी के मेहमानों के परिवहन के लिए 16, 21 और 26 सीटर टेम्पो ट्रैवलर प्रदान करते हैं। बारात और रिसेप्शन के लिए उपलब्ध।' },
  { en: 'Are your hill drivers experienced for mountain routes?', hi: 'क्या आपके ड्राइवर पहाड़ी रास्तों के लिए अनुभवी हैं?', ansEn: 'Yes, all drivers for hill routes (Manali, Shimla, Char Dham, Nainital, Mussoorie) have 5+ years experience on mountain roads. They are familiar with all Uttarakhand, Himachal Pradesh, and J&K routes. Your safety is our priority.', ansHi: 'हां, पहाड़ी मार्गों (मनाली, शिमला, चार धाम, नैनीताल) के लिए सभी ड्राइवरों को पहाड़ी सड़कों पर 5+ साल का अनुभव है।' },
  { en: 'What payment methods do you accept?', hi: 'आप कौन से भुगतान विधि स्वीकार करते हैं?', ansEn: 'We accept cash, bank transfer (NEFT/IMPS), UPI payments (Google Pay, PhonePe, Paytm), and cheques for corporate clients. Advance payment required for Tempo Traveller booking confirmation.', ansHi: 'हम नकद, बैंक ट्रांसफर, UPI (Google Pay, PhonePe, Paytm) और कॉर्पोरेट ग्राहकों के लिए चेक स्वीकार करते हैं।' },
  { en: 'Which areas in Delhi do you provide pickup from?', hi: 'दिल्ली में किन क्षेत्रों से पिकअप मिलता है?', ansEn: 'We provide Tempo Traveller pickup from all areas of Delhi including Timarpur, Civil Lines, Model Town, Mukherjee Nagar, GTB Nagar, Rohini, Pitampura, Karol Bagh, Connaught Place, Dwarka, and entire Delhi NCR (Noida, Gurgaon, Ghaziabad, Faridabad).', ansHi: 'हम दिल्ली के सभी क्षेत्रों से टेम्पो ट्रैवलर पिकअप प्रदान करते हैं - तिमारपुर, सिविल लाइन्स, मॉडल टाउन, मुखर्जी नगर, रोहिणी, और पूरा दिल्ली NCR।' },
];

export default function FAQ() {
  const { t } = useLang();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding bg-charcoal-50">
      <div className="container-custom max-w-3xl">
        <SectionHeading
          title="Frequently Asked Questions"
          titleHi="अक्सर पूछे जाने वाले प्रश्न"
          subtitle="Quick answers to common queries about our services"
          subtitleHi="हमारी सेवाओं के बारे में सामान्य प्रश्नों के त्वरित उत्तर"
        />
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-black/5"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between p-4 text-left"
              >
                <span className="pr-4 font-heading text-sm font-semibold text-charcoal-900 sm:text-base">
                  {t(faq.en, faq.hi)}
                </span>
                <ChevronDown
                  className={`h-5 w-5 flex-shrink-0 text-charcoal-400 transition-transform duration-300 ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? 'max-h-60' : 'max-h-0'
                }`}
              >
                <p className="px-4 pb-4 text-sm leading-relaxed text-charcoal-600">
                  {t(faq.ansEn, faq.ansHi)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
