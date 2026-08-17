import { Star, Quote } from 'lucide-react';
import { useLang } from '../../context/LanguageContext';
import SectionHeading from '../../components/SectionHeading';

const reviews = [
  { name: 'Jai Kedarnath Ambulance Service', nameHi: 'जय केदारनाथ एम्बुलेंस सेवा', location: 'Delhi', locationHi: 'दिल्ली', stars: 5, en: 'Excellent service for our Char Dham Yatra. The driver was very experienced with hill roads. Highly recommended!', hi: 'हमारी चार धाम यात्रा के लिए उत्कृष्ट सेवा। ड्राइवर पहाड़ी सड़कों पर बहुत अनुभवी था। अत्यधिक अनुशंसित!' },
  { name: 'Neeraj Jain', nameHi: 'नीरज जैन', location: 'Noida', locationHi: 'नोएडा', stars: 5, en: 'Booked Innova for Manali trip. Very comfortable journey. The vehicle was clean and well-maintained. Great experience!', hi: 'मनाली ट्रिप के लिए इनोवा बुक की। बहुत आरामदायक यात्रा। वाहन साफ और अच्छी तरह से रखा हुआ था।' },
  { name: 'Bhanu Bethi', nameHi: 'भानु बेथी', location: 'Gurgaon', locationHi: 'गुरुग्राम', stars: 5, en: 'Used their airport transfer service multiple times. Always on time and very professional. Best in Delhi!', hi: 'उनकी एयरपोर्ट ट्रांसफर सेवा कई बार इस्तेमाल की। हमेशा समय पर और बहुत पेशेवर। दिल्ली में सबसे अच्छे!' },
  { name: 'Saurabh Patel', nameHi: 'सौरभ पटेल', location: 'Delhi', locationHi: 'दिल्ली', stars: 5, en: 'Booked tempo traveller for our family wedding. Sahil ji arranged everything perfectly. Thank you Guruji Travels!', hi: 'हमारी पारिवारिक शादी के लिए टेम्पो ट्रैवलर बुक किया। साहिल जी ने सब कुछ बिल्कुल सही व्यवस्थित किया। धन्यवाद गुरुजी ट्रैवल्स!' },
  { name: 'Meher Khanna', nameHi: 'मेहर खन्ना', location: 'Faridabad', locationHi: 'फरीदाबाद', stars: 4, en: 'Good service and reasonable pricing. Used for Jaipur trip. Driver was knowledgeable about the route and tourist spots.', hi: 'अच्छी सेवा और उचित मूल्य। जयपुर ट्रिप के लिए इस्तेमाल किया। ड्राइवर को मार्ग और पर्यटक स्थलों की अच्छी जानकारी थी।' },
  { name: 'Avni Venkatesh', nameHi: 'अवनि वेंकटेश', location: 'Delhi', locationHi: 'दिल्ली', stars: 5, en: 'Our company uses Guruji Travels for all corporate transportation. Reliable, professional, and always on time.', hi: 'हमारी कंपनी सभी कॉर्पोरेट परिवहन के लिए गुरुजी ट्रैवल्स का उपयोग करती है। विश्वसनीय, पेशेवर और हमेशा समय पर।' },
];

export default function Testimonials() {
  const { t } = useLang();

  return (
    <section className="section-padding bg-charcoal-50">
      <div className="container-custom">
        <SectionHeading
          title="What Our Customers Say"
          titleHi="हमारे ग्राहक क्या कहते हैं"
          subtitle="Trusted by families, corporates, and travelers across Delhi NCR"
          subtitleHi="दिल्ली NCR भर में परिवारों, कॉर्पोरेट्स और यात्रियों द्वारा विश्वसनीय"
        />
        <div className="scroll-snap-x lg:grid lg:grid-cols-3 lg:gap-4 lg:overflow-visible">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="snap-card w-[300px] flex-shrink-0 lg:w-auto"
            >
              <div className="h-full rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5">
                <Quote className="mb-3 h-8 w-8 text-brand-200" />
                <p className="mb-4 text-sm leading-relaxed text-charcoal-600">
                  "{t(r.en, r.hi)}"
                </p>
                <div className="flex items-center gap-3 border-t border-charcoal-100 pt-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-500 font-heading text-sm font-bold text-charcoal-950">
                    {r.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-charcoal-900">
                      {t(r.name, r.nameHi)}
                    </p>
                    <p className="text-xs text-charcoal-400">{t(r.location, r.locationHi)}</p>
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: r.stars }).map((_, j) => (
                      <Star key={j} className="h-3.5 w-3.5 fill-brand-400 text-brand-400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
