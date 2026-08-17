export interface Service {
  id: string;
  icon: string;
  image: string;
  title: string;
  titleHi: string;
  short: string;
  shortHi: string;
  description: string;
  descriptionHi: string;
  features: string[];
  featuresHi: string[];
}

export const services: Service[] = [
  {
    id: 'tempo-traveller',
    icon: 'MapPin',
    image: '/images_new/tempo-traveller/21seater/WhatsApp_Image_2026-03-19_at_11.49.51.jpeg',
    title: 'Tempo Traveller on Rent',
    titleHi: 'किराये पर टेम्पो ट्रैवलर',
    short: '16, 21 & 26 seater AC Tempo Travellers from Delhi.',
    shortHi: 'दिल्ली से 16, 21 और 26 सीटर AC टेम्पो ट्रैवलर।',
    description: 'Book AC Tempo Travellers on rent in Delhi for group tours, pilgrimages, weddings, corporate outings, and outstation trips. Available in 16 seater, 21 seater, and 26 seater configurations with push-back seats, music system, and ample luggage space. Experienced hill and highway drivers available.',
    descriptionHi: 'ग्रुप टूर, तीर्थयात्रा, शादी, कॉर्पोरेट आउटिंग और आउटस्टेशन ट्रिप के लिए दिल्ली में किराये पर AC टेम्पो ट्रैवलर बुक करें। 16 सीटर, 21 सीटर और 26 सीटर कॉन्फ़िगरेशन में उपलब्ध, पुश-बैक सीट, म्यूजिक सिस्टम और पर्याप्त सामान स्थान के साथ। अनुभवी पहाड़ी और हाईवे ड्राइवर उपलब्ध।',
    features: ['16, 21 & 26 seater options', 'AC with push-back seats', 'Music system & charging points', 'Experienced hill drivers', 'Best rates guaranteed'],
    featuresHi: ['16, 21 और 26 सीटर विकल्प', 'पुश-बैक सीट के साथ AC', 'म्यूजिक सिस्टम और चार्जिंग पॉइंट', 'अनुभवी पहाड़ी ड्राइवर', 'सर्वोत्तम दरों की गारंटी'],
  },
  {
    id: 'airport',
    icon: 'Plane',
    image: '/guruj-cab-images/services/airport-transfer.jpg',
    title: 'Airport Transfers',
    titleHi: 'एयरपोर्ट ट्रांसफर',
    short: 'Reliable pickup & drop to IGI Airport, Delhi.',
    shortHi: 'IGI एयरपोर्ट, दिल्ली से विश्वसनीय पिकअप और ड्रॉप।',
    description: 'Reliable airport pickup and drop services to and from Indira Gandhi International Airport, Delhi. Available for individuals, families, and groups with advance booking. Our drivers track your flight status to ensure timely pickup.',
    descriptionHi: 'इंदिरा गांधी अंतर्राष्ट्रीय हवाई अड्डे, दिल्ली से विश्वसनीय एयरपोर्ट पिकअप और ड्रॉप सेवाएं। व्यक्तियों, परिवारों और समूहों के लिए अग्रिम बुकिंग पर उपलब्ध। हमारे ड्राइवर समय पर पिकअप सुनिश्चित करने के लिए आपकी फ्लाइट की स्थिति ट्रैक करते हैं।',
    features: ['Meet & Greet service', 'Flight tracking', '24/7 availability', 'All terminals covered', 'Affordable fixed rates'],
    featuresHi: ['मीट एंड ग्रीट सेवा', 'फ्लाइट ट्रैकिंग', '24/7 उपलब्धता', 'सभी टर्मिनल कवर', 'किफायती निश्चित दरें'],
  },
  {
    id: 'corporate',
    icon: 'Briefcase',
    image: '/guruj-cab-images/services/coroporate-services.jpg',
    title: 'Corporate Car Rental',
    titleHi: 'कॉर्पोरेट कार रेंटल',
    short: 'Dedicated cab services for businesses and corporates.',
    shortHi: 'व्यवसायों और कॉर्पोरेट के लिए समर्पित कैब सेवाएं।',
    description: 'Dedicated cab services for corporate clients including employee transportation, business meetings, and long-term rentals. We offer monthly billing, dedicated vehicles, and professional chauffeurs trained for corporate etiquette.',
    descriptionHi: 'कॉर्पोरेट ग्राहकों के लिए समर्पित कैब सेवाएं जिसमें कर्मचारी परिवहन, व्यावसायिक बैठकें और दीर्घकालिक किराये शामिल हैं। हम मासिक बिलिंग, समर्पित वाहन और कॉर्पोरेट शिष्टाचार में प्रशिक्षित पेशेवर ड्राइवर प्रदान करते हैं।',
    features: ['Monthly billing options', 'Dedicated vehicles', 'Professional chauffeurs', 'Long-term rentals', 'Employee transport'],
    featuresHi: ['मासिक बिलिंग विकल्प', 'समर्पित वाहन', 'पेशेवर ड्राइवर', 'दीर्घकालिक किराया', 'कर्मचारी परिवहन'],
  },
  {
    id: 'sightseeing',
    icon: 'Camera',
    image: '/guruj-cab-images/dilli-darshan/dilli-darshan-services.webp',
    title: 'Local Delhi Sightseeing',
    titleHi: 'दिल्ली दर्शन',
    short: 'Explore Delhi\'s iconic monuments and attractions.',
    shortHi: 'दिल्ली के प्रतिष्ठित स्मारक और आकर्षण देखें।',
    description: 'Comfortable taxis available for exploring Delhi tourist attractions including Red Fort, India Gate, Qutub Minar, Lotus Temple, Akshardham Temple, Humayun\'s Tomb, Jama Masjid, and many more. Custom routes available.',
    descriptionHi: 'दिल्ली के पर्यटक आकर्षणों जैसे लाल किला, इंडिया गेट, कुतुब मीनार, लोटस टेम्पल, अक्षरधाम मंदिर, हुमायूँ का मकबरा, जामा मस्जिद और अन्य स्थानों के भ्रमण के लिए आरामदायक टैक्सी उपलब्ध।',
    features: ['Custom routes', 'Experienced local drivers', 'Full day & half day options', 'All major attractions', 'Guide recommendations'],
    featuresHi: ['कस्टम मार्ग', 'अनुभवी स्थानीय ड्राइवर', 'पूरे दिन और आधे दिन के विकल्प', 'सभी प्रमुख आकर्षण', 'गाइड सिफारिशें'],
  },
  {
    id: 'hourly',
    icon: 'Clock',
    image: '/guruj-cab-images/services/hourly-rental.jpg',
    title: 'Hourly Rental / Local Cab',
    titleHi: 'प्रति घंटा किराया / लोकल कैब',
    short: 'Flexible hourly packages for local travel in Delhi NCR.',
    shortHi: 'दिल्ली NCR में स्थानीय यात्रा के लिए लचीले प्रति घंटा पैकेज।',
    description: 'Flexible hourly packages for local travel within Delhi NCR including business meetings, shopping trips, personal travel, and more. Available in 4hr/40km, 8hr/80km, and custom packages.',
    descriptionHi: 'दिल्ली NCR में स्थानीय यात्रा के लिए लचीले प्रति घंटा पैकेज, जिसमें व्यावसायिक बैठकें, शॉपिंग ट्रिप, व्यक्तिगत यात्रा और अन्य शामिल। 4 घंटे/40 किमी, 8 घंटे/80 किमी, और कस्टम पैकेज में उपलब्ध।',
    features: ['4hr/40km packages', '8hr/80km packages', 'Custom durations', 'Multiple stops', 'No hidden charges'],
    featuresHi: ['4 घंटे/40 किमी पैकेज', '8 घंटे/80 किमी पैकेज', 'कस्टम अवधि', 'कई स्टॉप', 'कोई छिपा शुल्क नहीं'],
  },
  {
    id: 'wedding',
    icon: 'Heart',
    image: '/guruj-cab-images/services/wedding-and-events.webp',
    title: 'Wedding & Event Transport',
    titleHi: 'शादी और इवेंट ट्रांसपोर्ट',
    short: 'Transportation for weddings, events, and celebrations.',
    shortHi: 'शादियों, इवेंट्स और समारोहों के लिए परिवहन।',
    description: 'Transportation arrangements for wedding guests, family members, and event staff. Large capacity vehicles available for group transfers. We handle logistics so you can focus on your special day.',
    descriptionHi: 'शादी के मेहमानों, परिवार के सदस्यों और इवेंट स्टाफ के लिए परिवहन व्यवस्था। ग्रुप ट्रांसफर के लिए बड़ी क्षमता वाले वाहन उपलब्ध। हम लॉजिस्टिक्स संभालते हैं ताकि आप अपने खास दिन पर ध्यान दे सकें।',
    features: ['Multiple vehicle options', 'Decorated vehicles', 'Group coordination', 'Flexible scheduling', 'Custom packages'],
    featuresHi: ['कई वाहन विकल्प', 'सजे हुए वाहन', 'ग्रुप समन्वय', 'लचीली शेड्यूलिंग', 'कस्टम पैकेज'],
  },
  {
    id: 'outstation',
    icon: 'MapPin',
    image: '/guruj-cab-images/services/outstation-tips.jpg',
    title: 'Outstation Taxi Service',
    titleHi: 'आउटस्टेशन टैक्सी सेवा',
    short: 'Delhi to Manali, Shimla, Jaipur, Agra & many more.',
    shortHi: 'दिल्ली से मनाली, शिमला, जयपुर, आगरा और अन्य।',
    description: 'Outstation taxi service from Delhi to popular destinations including Manali, Shimla, Haridwar, Rishikesh, Jaipur, Agra, Chandigarh, Amritsar, and many more. One-way and round-trip options available.',
    descriptionHi: 'दिल्ली से लोकप्रिय गंतव्यों जैसे मनाली, शिमला, हरिद्वार, ऋषिकेश, जयपुर, आगरा, चंडीगढ़, अमृतसर और अन्य के लिए आउटस्टेशन टैक्सी सेवा। एक तरफ और राउंड ट्रिप विकल्प उपलब्ध।',
    features: ['One-way & round trip', 'Transparent per-km pricing', 'Experienced highway drivers', 'Multiple vehicle options', 'Night halt arrangements'],
    featuresHi: ['एक तरफ और राउंड ट्रिप', 'पारदर्शी प्रति-किमी मूल्य', 'अनुभवी हाईवे ड्राइवर', 'कई वाहन विकल्प', 'नाइट हॉल्ट व्यवस्था'],
  },
  {
    id: 'pilgrimage',
    icon: 'Mountain',
    image: '/guruj-cab-images/services/Travel-Char-Dham-Yatra.webp',
    title: 'Group Tours & Pilgrimage',
    titleHi: 'ग्रुप टूर और तीर्थयात्रा',
    short: 'Char Dham, Vaishno Devi, Haridwar & more sacred journeys.',
    shortHi: 'चार धाम, वैष्णो देवी, हरिद्वार और अन्य पवित्र यात्राएं।',
    description: 'Special vehicles and packages for religious tours including Char Dham Yatra, Do Dham Yatra, Vaishno Devi, Haridwar, Rishikesh, and other pilgrimage routes. Group-friendly pricing with experienced hill drivers.',
    descriptionHi: 'चार धाम यात्रा, दो धाम यात्रा, वैष्णो देवी, हरिद्वार, ऋषिकेश और अन्य तीर्थ मार्गों के लिए विशेष वाहन और पैकेज। अनुभवी पहाड़ी ड्राइवरों के साथ समूह-अनुकूल मूल्य।',
    features: ['Char Dham & Do Dham packages', 'Experienced hill drivers', 'Group-friendly pricing', 'Tempo Traveller available', 'Custom pilgrimage routes'],
    featuresHi: ['चार धाम और दो धाम पैकेज', 'अनुभवी पहाड़ी ड्राइवर', 'ग्रुप-अनुकूल मूल्य', 'टेम्पो ट्रैवलर उपलब्ध', 'कस्टम तीर्थ मार्ग'],
  },
];
