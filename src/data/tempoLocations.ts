export interface TempoLocation {
  slug: string;
  name: string;
  nameHi: string;
  area: 'delhi' | 'outstation';
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  content: {
    intro: string;
    introHi: string;
    highlights: string[];
    highlightsHi: string[];
    distance?: string;
    duration?: string;
  };
}

export const delhiLocations: TempoLocation[] = [
  {
    slug: 'shalimar-bagh',
    name: 'Shalimar Bagh',
    nameHi: 'शालीमार बाग',
    area: 'delhi',
    metaTitle: 'Tempo Traveller in Shalimar Bagh | 16 21 26 Seater on Rent',
    metaDescription: 'Book Tempo Traveller in Shalimar Bagh, Delhi. 16, 21 & 26 seater AC Tempo Traveller on rent for outstation trips, weddings & group tours. Best price guaranteed. Call 7838626565.',
    heroImage: '/images_new/tempo-traveller/16seater/WhatsApp_Image_2026-03-19_at_11.48.21.jpeg',
    content: {
      intro: 'Looking for a reliable Tempo Traveller in Shalimar Bagh? Guruji Tour & Travels provides top-quality 16, 21 & 26 seater AC Tempo Travellers on rent from Shalimar Bagh, North Delhi. Whether you need a vehicle for a family pilgrimage, group outing, wedding, or corporate trip, we offer doorstep pickup from Shalimar Bagh at the best rates.',
      introHi: 'शालीमार बाग में टेम्पो ट्रैवलर की तलाश है? गुरुजी टूर एंड ट्रैवल्स शालीमार बाग, उत्तरी दिल्ली से किराये पर 16, 21 और 26 सीटर AC टेम्पो ट्रैवलर उपलब्ध कराता है। परिवार की तीर्थयात्रा, ग्रुप आउटिंग, शादी या कॉर्पोरेट ट्रिप के लिए सर्वोत्तम दरों पर शालीमार बाग से डोरस्टेप पिकअप।',
      highlights: [
        'Doorstep pickup from Shalimar Bagh, North Delhi',
        'AC 16, 21 & 26 seater Tempo Travellers available',
        'Experienced drivers with hill & highway expertise',
        'Best rates for outstation trips from Shalimar Bagh',
        '24/7 booking and support available',
      ],
      highlightsHi: [
        'शालीमार बाग, उत्तरी दिल्ली से डोरस्टेप पिकअप',
        '16, 21 और 26 सीटर AC टेम्पो ट्रैवलर उपलब्ध',
        'पहाड़ और हाईवे अनुभवी ड्राइवर',
        'शालीमार बाग से आउटस्टेशन ट्रिप के लिए सर्वोत्तम दरें',
        '24/7 बुकिंग और सपोर्ट उपलब्ध',
      ],
    },
  },
  {
    slug: 'punjabi-bagh',
    name: 'Punjabi Bagh',
    nameHi: 'पंजाबी बाग',
    area: 'delhi',
    metaTitle: 'Tempo Traveller in Punjabi Bagh | 16 21 26 Seater on Rent',
    metaDescription: 'Book Tempo Traveller in Punjabi Bagh, Delhi. 16, 21 & 26 seater AC Tempo Traveller on rent for outstation trips, weddings & group tours. Best price guaranteed. Call 7838626565.',
    heroImage: '/images_new/tempo-traveller/21seater/WhatsApp_Image_2026-03-19_at_11.49.51.jpeg',
    content: {
      intro: 'Need a Tempo Traveller in Punjabi Bagh? Guruji Tour & Travels offers premium 16, 21 & 26 seater AC Tempo Travellers on rent from Punjabi Bagh, West Delhi. Ideal for family vacations, pilgrimages to Vaishno Devi, Char Dham Yatra, group tours to Manali, Shimla, and all outstation destinations.',
      introHi: 'पंजाबी बाग में टेम्पो ट्रैवलर चाहिए? गुरुजी टूर एंड ट्रैवल्स पंजाबी बाग, पश्चिम दिल्ली से किराये पर प्रीमियम 16, 21 और 26 सीटर AC टेम्पो ट्रैवलर प्रदान करता है। वैष्णो देवी, चार धाम यात्रा, मनाली, शिमला और सभी आउटस्टेशन गंतव्यों के लिए आदर्श।',
      highlights: [
        'Pickup from Punjabi Bagh, West Delhi',
        'Luxury AC vehicles with push-back seats',
        'Affordable rates for Manali, Shimla & hill trips',
        'Experienced drivers for safe hill driving',
        'Same-day booking available',
      ],
      highlightsHi: [
        'पंजाबी बाग, पश्चिम दिल्ली से पिकअप',
        'पुश-बैक सीट वाले लक्ज़री AC वाहन',
        'मनाली, शिमला और हिल ट्रिप के लिए किफायती दरें',
        'सुरक्षित हिल ड्राइविंग के लिए अनुभवी ड्राइवर',
        'उसी दिन बुकिंग उपलब्ध',
      ],
    },
  },
  {
    slug: 'moti-nagar',
    name: 'Moti Nagar',
    nameHi: 'मोती नगर',
    area: 'delhi',
    metaTitle: 'Tempo Traveller in Moti Nagar | 16 21 26 Seater on Rent',
    metaDescription: 'Book Tempo Traveller in Moti Nagar, Delhi. 16, 21 & 26 seater AC Tempo Traveller on rent for outstation trips, weddings & group tours. Best price guaranteed. Call 7838626565.',
    heroImage: '/images_new/tempo-traveller/26seater/WhatsApp_Image_2026-03-19_at_11.50.49.jpeg',
    content: {
      intro: 'Book a Tempo Traveller in Moti Nagar with Guruji Tour & Travels. We provide well-maintained 16, 21 & 26 seater AC Tempo Travellers from Moti Nagar, West Delhi. Perfect for outstation trips to Rajasthan, Uttarakhand, Himachal, weddings, and group pilgrimages.',
      introHi: 'मोती नगर में गुरुजी टूर एंड ट्रैवल्स के साथ टेम्पो ट्रैवलर बुक करें। हम मोती नगर, पश्चिम दिल्ली से अच्छी तरह से मेंटेन किए गए 16, 21 और 26 सीटर AC टेम्पो ट्रैवलर प्रदान करते हैं। राजस्थान, उत्तराखंड, हिमाचल, शादी और ग्रुप तीर्थयात्रा के लिए।',
      highlights: [
        'Pickup from Moti Nagar & nearby areas',
        'Well-maintained fleet with full AC',
        'Competitive pricing with no hidden charges',
        'Popular for Rajasthan & Uttarakhand trips',
        'Reliable service with experienced chauffeurs',
      ],
      highlightsHi: [
        'मोती नगर और आसपास के क्षेत्रों से पिकअप',
        'पूर्ण AC के साथ अच्छी तरह से मेंटेन वाहन',
        'कोई छिपे शुल्क नहीं, प्रतिस्पर्धी मूल्य',
        'राजस्थान और उत्तराखंड ट्रिप के लिए लोकप्रिय',
        'अनुभवी ड्राइवरों के साथ विश्वसनीय सेवा',
      ],
    },
  },
  {
    slug: 'rajouri-garden',
    name: 'Rajouri Garden',
    nameHi: 'राजौरी गार्डन',
    area: 'delhi',
    metaTitle: 'Tempo Traveller in Rajouri Garden | 16 21 26 Seater on Rent',
    metaDescription: 'Book Tempo Traveller in Rajouri Garden, Delhi. 16, 21 & 26 seater AC Tempo Traveller on rent for outstation trips, weddings & group tours. Best price guaranteed. Call 7838626565.',
    heroImage: '/images_new/tempo-traveller/16seater/WhatsApp_Image_2026-03-19_at_11.48.22.jpeg',
    content: {
      intro: 'Hire a Tempo Traveller in Rajouri Garden from Guruji Tour & Travels. We offer 16, 21 & 26 seater AC Tempo Travellers on rent from Rajouri Garden, West Delhi. Best for family trips, weddings, corporate events, and group pilgrimages across North India.',
      introHi: 'राजौरी गार्डन से गुरुजी टूर एंड ट्रैवल्स से टेम्पो ट्रैवलर किराये पर लें। हम राजौरी गार्डन, पश्चिम दिल्ली से 16, 21 और 26 सीटर AC टेम्पो ट्रैवलर प्रदान करते हैं। पारिवारिक ट्रिप, शादी, कॉर्पोरेट इवेंट और उत्तर भारत में ग्रुप तीर्थयात्रा के लिए सर्वोत्तम।',
      highlights: [
        'Door pickup from Rajouri Garden, West Delhi',
        'Modern AC Tempo Travellers with music system',
        'Best rates for weddings & event transport',
        'Popular for Manali, Haridwar & Jaipur trips',
        'Professional drivers with 10+ years experience',
      ],
      highlightsHi: [
        'राजौरी गार्डन, पश्चिम दिल्ली से डोर पिकअप',
        'म्यूजिक सिस्टम के साथ मॉडर्न AC टेम्पो ट्रैवलर',
        'शादी और इवेंट ट्रांसपोर्ट के लिए सर्वोत्तम दरें',
        'मनाली, हरिद्वार और जयपुर ट्रिप के लिए लोकप्रिय',
        '10+ वर्षों के अनुभव वाले प्रोफेशनल ड्राइवर',
      ],
    },
  },
  {
    slug: 'kirti-nagar',
    name: 'Kirti Nagar',
    nameHi: 'कीर्ति नगर',
    area: 'delhi',
    metaTitle: 'Tempo Traveller in Kirti Nagar | 16 21 26 Seater on Rent',
    metaDescription: 'Book Tempo Traveller in Kirti Nagar, Delhi. 16, 21 & 26 seater AC Tempo Traveller on rent for outstation trips, weddings & group tours. Best price guaranteed. Call 7838626565.',
    heroImage: '/images_new/tempo-traveller/21seater/WhatsApp_Image_2026-03-19_at_11.49.52.jpeg',
    content: {
      intro: 'Looking for a Tempo Traveller on rent in Kirti Nagar? Guruji Tour & Travels offers the best 16, 21 & 26 seater AC Tempo Travellers from Kirti Nagar, Delhi. Ideal for group travel to Uttarakhand, Himachal Pradesh, Rajasthan, and all North India destinations.',
      introHi: 'कीर्ति नगर में किराये पर टेम्पो ट्रैवलर चाहिए? गुरुजी टूर एंड ट्रैवल्स कीर्ति नगर, दिल्ली से सर्वोत्तम 16, 21 और 26 सीटर AC टेम्पो ट्रैवलर प्रदान करता है। उत्तराखंड, हिमाचल प्रदेश, राजस्थान और सभी उत्तर भारत गंतव्यों के लिए आदर्श।',
      highlights: [
        'Convenient pickup from Kirti Nagar metro area',
        '16, 21 & 26 seater options available',
        'Clean, sanitized AC vehicles',
        'Transparent pricing with no extra charges',
        'Ideal for group pilgrimages & vacations',
      ],
      highlightsHi: [
        'कीर्ति नगर मेट्रो एरिया से सुविधाजनक पिकअप',
        '16, 21 और 26 सीटर विकल्प उपलब्ध',
        'साफ, सैनिटाइज़्ड AC वाहन',
        'कोई अतिरिक्त शुल्क नहीं, पारदर्शी मूल्य',
        'ग्रुप तीर्थयात्रा और वेकेशन के लिए आदर्श',
      ],
    },
  },
  {
    slug: 'ramesh-nagar',
    name: 'Ramesh Nagar',
    nameHi: 'रमेश नगर',
    area: 'delhi',
    metaTitle: 'Tempo Traveller in Ramesh Nagar | 16 21 26 Seater on Rent',
    metaDescription: 'Book Tempo Traveller in Ramesh Nagar, Delhi. 16, 21 & 26 seater AC Tempo Traveller on rent for outstation trips, weddings & group tours. Best price guaranteed. Call 7838626565.',
    heroImage: '/images_new/tempo-traveller/26seater/WhatsApp_Image_2026-03-19_at_11.50.53.jpeg',
    content: {
      intro: 'Hire a Tempo Traveller from Ramesh Nagar, Delhi with Guruji Tour & Travels. Our 16, 21 & 26 seater AC Tempo Travellers are perfect for outstation trips, family functions, wedding ceremonies, and group tours from Ramesh Nagar and surrounding areas.',
      introHi: 'गुरुजी टूर एंड ट्रैवल्स के साथ रमेश नगर, दिल्ली से टेम्पो ट्रैवलर किराये पर लें। हमारे 16, 21 और 26 सीटर AC टेम्पो ट्रैवलर आउटस्टेशन ट्रिप, पारिवारिक समारोह, शादी और ग्रुप टूर के लिए एकदम सही हैं।',
      highlights: [
        'Pickup from Ramesh Nagar & West Delhi',
        'Spacious vehicles with ample luggage space',
        'Perfect for family functions & wedding transport',
        'Outstation trips starting at competitive rates',
        'Free cancellation up to 24 hours before trip',
      ],
      highlightsHi: [
        'रमेश नगर और पश्चिम दिल्ली से पिकअप',
        'पर्याप्त लगेज स्पेस वाले विशाल वाहन',
        'पारिवारिक समारोह और शादी ट्रांसपोर्ट के लिए परफेक्ट',
        'प्रतिस्पर्धी दरों से शुरू आउटस्टेशन ट्रिप',
        'ट्रिप से 24 घंटे पहले तक मुफ्त कैंसिलेशन',
      ],
    },
  },
  {
    slug: 'raja-garden',
    name: 'Raja Garden',
    nameHi: 'राजा गार्डन',
    area: 'delhi',
    metaTitle: 'Tempo Traveller in Raja Garden | 16 21 26 Seater on Rent',
    metaDescription: 'Book Tempo Traveller in Raja Garden, Delhi. 16, 21 & 26 seater AC Tempo Traveller on rent for outstation trips, weddings & group tours. Best price guaranteed. Call 7838626565.',
    heroImage: '/images_new/tempo-traveller/16seater/WhatsApp_Image_2026-03-19_at_11.48.22_(1).jpeg',
    content: {
      intro: 'Book a Tempo Traveller in Raja Garden, Delhi with Guruji Tour & Travels. We provide 16, 21 & 26 seater AC Tempo Travellers with doorstep pickup from Raja Garden. Popular for Char Dham Yatra, Do Dham, Vaishno Devi, Manali, and all outstation trips.',
      introHi: 'गुरुजी टूर एंड ट्रैवल्स के साथ राजा गार्डन, दिल्ली में टेम्पो ट्रैवलर बुक करें। हम राजा गार्डन से डोरस्टेप पिकअप के साथ 16, 21 और 26 सीटर AC टेम्पो ट्रैवलर प्रदान करते हैं। चार धाम यात्रा, दो धाम, वैष्णो देवी, मनाली और सभी आउटस्टेशन ट्रिप के लिए लोकप्रिय।',
      highlights: [
        'Doorstep pickup from Raja Garden, Delhi',
        'Popular for Char Dham & Vaishno Devi yatras',
        'Well-maintained fleet with GPS tracking',
        'Affordable group travel options',
        'Experienced hill & highway drivers',
      ],
      highlightsHi: [
        'राजा गार्डन, दिल्ली से डोरस्टेप पिकअप',
        'चार धाम और वैष्णो देवी यात्रा के लिए लोकप्रिय',
        'GPS ट्रैकिंग के साथ अच्छे मेंटेन वाहन',
        'किफायती ग्रुप ट्रैवल विकल्प',
        'अनुभवी पहाड़ और हाईवे ड्राइवर',
      ],
    },
  },
  {
    slug: 'kohat-enclave',
    name: 'Kohat Enclave',
    nameHi: 'कोहाट एन्क्लेव',
    area: 'delhi',
    metaTitle: 'Tempo Traveller in Kohat Enclave | 16 21 26 Seater on Rent',
    metaDescription: 'Book Tempo Traveller in Kohat Enclave, Pitampura, Delhi. 16, 21 & 26 seater AC Tempo Traveller on rent for outstation trips, weddings & group tours. Best price guaranteed. Call 7838626565.',
    heroImage: '/images_new/tempo-traveller/21seater/WhatsApp_Image_2026-03-19_at_11.49.52_(1).jpeg',
    content: {
      intro: 'Need a Tempo Traveller near Kohat Enclave? Guruji Tour & Travels provides 16, 21 & 26 seater AC Tempo Travellers on rent from Kohat Enclave, Pitampura area, North Delhi. Convenient booking for outstation trips, group tours, weddings, and pilgrimages.',
      introHi: 'कोहाट एन्क्लेव के पास टेम्पो ट्रैवलर चाहिए? गुरुजी टूर एंड ट्रैवल्स कोहाट एन्क्लेव, पितमपुरा एरिया, उत्तरी दिल्ली से 16, 21 और 26 सीटर AC टेम्पो ट्रैवलर प्रदान करता है। आउटस्टेशन ट्रिप, ग्रुप टूर, शादी और तीर्थयात्रा के लिए सुविधाजनक बुकिंग।',
      highlights: [
        'Quick pickup from Kohat Enclave & Pitampura',
        'AC vehicles with comfortable push-back seats',
        'Special rates for Uttarakhand & Himachal trips',
        'Trusted by 1000+ families in North Delhi',
        'WhatsApp booking with instant confirmation',
      ],
      highlightsHi: [
        'कोहाट एन्क्लेव और पितमपुरा से त्वरित पिकअप',
        'आरामदायक पुश-बैक सीट वाले AC वाहन',
        'उत्तराखंड और हिमाचल ट्रिप के लिए विशेष दरें',
        'उत्तरी दिल्ली में 1000+ परिवारों द्वारा विश्वसनीय',
        'तुरंत कन्फर्मेशन के साथ WhatsApp बुकिंग',
      ],
    },
  },
  {
    slug: 'saraswati-vihar',
    name: 'Saraswati Vihar',
    nameHi: 'सरस्वती विहार',
    area: 'delhi',
    metaTitle: 'Tempo Traveller in Saraswati Vihar | 16 21 26 Seater on Rent',
    metaDescription: 'Book Tempo Traveller in Saraswati Vihar, Delhi. 16, 21 & 26 seater AC Tempo Traveller on rent for outstation trips, weddings & group tours. Best price guaranteed. Call 7838626565.',
    heroImage: '/images_new/tempo-traveller/26seater/WhatsApp_Image_2026-03-19_at_11.50.49_(1).jpeg',
    content: {
      intro: 'Hire a Tempo Traveller from Saraswati Vihar, Delhi with Guruji Tour & Travels. We offer the best 16, 21 & 26 seater AC Tempo Travellers on rent from Saraswati Vihar and Pitampura area. Popular choice for weekend getaways, Char Dham Yatra, and group travel.',
      introHi: 'गुरुजी टूर एंड ट्रैवल्स के साथ सरस्वती विहार, दिल्ली से टेम्पो ट्रैवलर किराये पर लें। हम सरस्वती विहार और पितमपुरा एरिया से 16, 21 और 26 सीटर AC टेम्पो ट्रैवलर प्रदान करते हैं। वीकेंड गेटअवे, चार धाम यात्रा और ग्रुप ट्रैवल के लिए लोकप्रिय।',
      highlights: [
        'Serving Saraswati Vihar & Pitampura residents',
        'Spacious AC vehicles for comfortable travel',
        'Best choice for weekend trips & pilgrimages',
        'Affordable rates with experienced drivers',
        'Easy WhatsApp booking with 24/7 support',
      ],
      highlightsHi: [
        'सरस्वती विहार और पितमपुरा निवासियों की सेवा',
        'आरामदायक यात्रा के लिए विशाल AC वाहन',
        'वीकेंड ट्रिप और तीर्थयात्रा के लिए सबसे अच्छा विकल्प',
        'अनुभवी ड्राइवरों के साथ किफायती दरें',
        '24/7 सपोर्ट के साथ आसान WhatsApp बुकिंग',
      ],
    },
  },
  {
    slug: 'pitampura',
    name: 'Pitampura',
    nameHi: 'पितमपुरा',
    area: 'delhi',
    metaTitle: 'Tempo Traveller in Pitampura | 16 21 26 Seater on Rent',
    metaDescription: 'Book Tempo Traveller in Pitampura, Delhi. 16, 21 & 26 seater AC Tempo Traveller on rent for outstation trips, weddings & group tours. Best price guaranteed. Call 7838626565.',
    heroImage: '/images_new/tempo-traveller/16seater/WhatsApp_Image_2026-03-19_at_11.48.21.jpeg',
    content: {
      intro: 'Book a Tempo Traveller in Pitampura with Guruji Tour & Travels — Delhi\'s trusted name for group travel. We provide 16, 21 & 26 seater AC Tempo Travellers from Pitampura, North Delhi with pickup from your doorstep. Ideal for Manali, Shimla, Haridwar, Vaishno Devi, and all outstation destinations.',
      introHi: 'गुरुजी टूर एंड ट्रैवल्स के साथ पितमपुरा में टेम्पो ट्रैवलर बुक करें — ग्रुप ट्रैवल के लिए दिल्ली का भरोसेमंद नाम। हम पितमपुरा, उत्तरी दिल्ली से डोरस्टेप पिकअप के साथ 16, 21 और 26 सीटर AC टेम्पो ट्रैवलर प्रदान करते हैं। मनाली, शिमला, हरिद्वार, वैष्णो देवी और सभी आउटस्टेशन गंतव्यों के लिए आदर्श।',
      highlights: [
        'Top-rated service in Pitampura, North Delhi',
        '16, 21 & 26 seater luxury AC vehicles',
        'Direct routes to Manali, Shimla & Haridwar',
        'Budget-friendly group travel from Pitampura',
        'Trusted by thousands of happy customers',
      ],
      highlightsHi: [
        'पितमपुरा, उत्तरी दिल्ली में टॉप रेटेड सेवा',
        '16, 21 और 26 सीटर लक्ज़री AC वाहन',
        'मनाली, शिमला और हरिद्वार के लिए सीधे मार्ग',
        'पितमपुरा से बजट-फ्रेंडली ग्रुप ट्रैवल',
        'हजारों खुश ग्राहकों द्वारा विश्वसनीय',
      ],
    },
  },
];

export const outstationLocations: TempoLocation[] = [
  {
    slug: 'katra-vaishno-devi',
    name: 'Katra (Vaishno Devi)',
    nameHi: 'कटरा (वैष्णो देवी)',
    area: 'outstation',
    metaTitle: 'Delhi to Katra Vaishno Devi Tempo Traveller | 16 21 26 Seater on Rent',
    metaDescription: 'Book Tempo Traveller from Delhi to Katra (Vaishno Devi). 16, 21 & 26 seater AC Tempo Traveller for Vaishno Devi Yatra. Best rates, experienced drivers. Call 7838626565.',
    heroImage: '/guruj-cab-images/outstation-destinations/vaishno-devi.webp',
    content: {
      intro: 'Planning a Vaishno Devi Yatra from Delhi? Guruji Tour & Travels offers premium 16, 21 & 26 seater AC Tempo Travellers from Delhi to Katra. Our experienced drivers ensure a safe and comfortable journey through the highways. We provide doorstep pickup from anywhere in Delhi NCR with flexible packages for your pilgrimage.',
      introHi: 'दिल्ली से वैष्णो देवी यात्रा की योजना बना रहे हैं? गुरुजी टूर एंड ट्रैवल्स दिल्ली से कटरा तक प्रीमियम 16, 21 और 26 सीटर AC टेम्पो ट्रैवलर प्रदान करता है। हमारे अनुभवी ड्राइवर हाईवे पर सुरक्षित और आरामदायक यात्रा सुनिश्चित करते हैं। हम दिल्ली NCR में कहीं से भी डोरस्टेप पिकअप प्रदान करते हैं।',
      highlights: [
        'Direct Delhi to Katra comfortable journey',
        'Experienced drivers familiar with Jammu highway',
        'Flexible packages: 2-day, 3-day & custom trips',
        'Doorstep pickup from anywhere in Delhi NCR',
        'AC push-back seats for overnight travel comfort',
        'Luggage space for group pilgrimage needs',
      ],
      highlightsHi: [
        'दिल्ली से कटरा तक आरामदायक सीधी यात्रा',
        'जम्मू हाईवे से परिचित अनुभवी ड्राइवर',
        'लचीले पैकेज: 2-दिन, 3-दिन और कस्टम ट्रिप',
        'दिल्ली NCR में कहीं से भी डोरस्टेप पिकअप',
        'रात की यात्रा के लिए AC पुश-बैक सीटें',
        'ग्रुप तीर्थयात्रा के लिए लगेज स्पेस',
      ],
      distance: '640 km',
      duration: '10-12 hours',
    },
  },
];

export const allTempoLocations = [...delhiLocations, ...outstationLocations];
