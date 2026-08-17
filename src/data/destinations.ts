export interface Destination {
  id: string;
  name: string;
  nameHi: string;
  region: string;
  regionHi: string;
  distance: string;
  duration: string;
  startingFare: number;
  image: string;
  description: string;
  descriptionHi: string;
  bestTime: string;
  bestTimeHi: string;
}

export const regions = [
  { id: 'himachal', name: 'Himachal Pradesh', nameHi: 'हिमाचल प्रदेश' },
  { id: 'uttarakhand', name: 'Uttarakhand', nameHi: 'उत्तराखंड' },
  { id: 'rajasthan', name: 'Rajasthan', nameHi: 'राजस्थान' },
  { id: 'punjab', name: 'Punjab', nameHi: 'पंजाब' },
  { id: 'jk', name: 'Jammu & Kashmir', nameHi: 'जम्मू और कश्मीर' },
  { id: 'ladakh', name: 'Ladakh', nameHi: 'लद्दाख' },
];

export const destinations: Destination[] = [
  {
    id: 'manali', name: 'Manali', nameHi: 'मनाली', region: 'himachal', regionHi: 'हिमाचल प्रदेश',
    distance: '540 km', duration: '12-14 hrs', startingFare: 5940,
    image: '/guruj-cab-images/outstation-destinations/manali1.webp',
    description: 'Popular hill station in the Kullu Valley, known for adventure sports and scenic beauty.',
    descriptionHi: 'कुल्लू घाटी का लोकप्रिय हिल स्टेशन, साहसिक खेलों और प्राकृतिक सुंदरता के लिए प्रसिद्ध।',
    bestTime: 'March to June, October to February', bestTimeHi: 'मार्च से जून, अक्टूबर से फरवरी',
  },
  {
    id: 'shimla', name: 'Shimla', nameHi: 'शिमला', region: 'himachal', regionHi: 'हिमाचल प्रदेश',
    distance: '350 km', duration: '7-8 hrs', startingFare: 3850,
    image: '/guruj-cab-images/outstation-destinations/shimla1.jpg',
    description: 'The Queen of Hills - former summer capital of British India with colonial architecture.',
    descriptionHi: 'पहाड़ों की रानी - ब्रिटिश भारत की पूर्व ग्रीष्मकालीन राजधानी, औपनिवेशिक वास्तुकला के साथ।',
    bestTime: 'March to June, December to February', bestTimeHi: 'मार्च से जून, दिसंबर से फरवरी',
  },
  {
    id: 'kasol', name: 'Kasol', nameHi: 'कसोल', region: 'himachal', regionHi: 'हिमाचल प्रदेश',
    distance: '520 km', duration: '12 hrs', startingFare: 5720,
    image: '/guruj-cab-images/outstation-destinations/kulu-manali.jpg',
    description: 'Mini Israel of India nestled in Parvati Valley, famous for trekking and nature.',
    descriptionHi: 'पार्वती घाटी में बसा भारत का मिनी इजराइल, ट्रेकिंग और प्रकृति के लिए प्रसिद्ध।',
    bestTime: 'March to June, September to November', bestTimeHi: 'मार्च से जून, सितंबर से नवंबर',
  },
  {
    id: 'dharamshala', name: 'Dharamshala', nameHi: 'धर्मशाला', region: 'himachal', regionHi: 'हिमाचल प्रदेश',
    distance: '480 km', duration: '9-10 hrs', startingFare: 5280,
    image: '/guruj-cab-images/outstation-destinations/dharamshala.jpg',
    description: 'Home of the Dalai Lama, surrounded by cedar forests and Dhauladhar mountain range.',
    descriptionHi: 'दलाई लामा का निवास, देवदार के जंगलों और धौलाधार पर्वत श्रृंखला से घिरा।',
    bestTime: 'March to June, September to November', bestTimeHi: 'मार्च से जून, सितंबर से नवंबर',
  },
  {
    id: 'dalhousie', name: 'Dalhousie', nameHi: 'डलहौज़ी', region: 'himachal', regionHi: 'हिमाचल प्रदेश',
    distance: '560 km', duration: '11 hrs', startingFare: 6160,
    image: '/guruj-cab-images/outstation-destinations/lansdowne.webp',
    description: 'Charming colonial-era hill station with pine-clad valleys and snow-capped peaks.',
    descriptionHi: 'चीड़ से ढकी घाटियों और बर्फ से ढकी चोटियों के साथ आकर्षक औपनिवेशिक हिल स्टेशन।',
    bestTime: 'March to June, October to December', bestTimeHi: 'मार्च से जून, अक्टूबर से दिसंबर',
  },
  {
    id: 'haridwar', name: 'Haridwar', nameHi: 'हरिद्वार', region: 'uttarakhand', regionHi: 'उत्तराखंड',
    distance: '230 km', duration: '5-6 hrs', startingFare: 2530,
    image: '/guruj-cab-images/outstation-destinations/haridwar.webp',
    description: 'Holy city on the banks of River Ganga, famous for Ganga Aarti at Har Ki Pauri.',
    descriptionHi: 'गंगा नदी के तट पर पवित्र शहर, हर की पौड़ी पर गंगा आरती के लिए प्रसिद्ध।',
    bestTime: 'February to May, September to November', bestTimeHi: 'फरवरी से मई, सितंबर से नवंबर',
  },
  {
    id: 'rishikesh', name: 'Rishikesh', nameHi: 'ऋषिकेश', region: 'uttarakhand', regionHi: 'उत्तराखंड',
    distance: '250 km', duration: '6 hrs', startingFare: 2750,
    image: '/guruj-cab-images/outstation-destinations/rishikesh.webp',
    description: 'Yoga Capital of the World, known for adventure sports and spiritual retreats.',
    descriptionHi: 'विश्व की योग राजधानी, साहसिक खेलों और आध्यात्मिक आश्रमों के लिए प्रसिद्ध।',
    bestTime: 'February to May, September to November', bestTimeHi: 'फरवरी से मई, सितंबर से नवंबर',
  },
  {
    id: 'mussoorie', name: 'Mussoorie', nameHi: 'मसूरी', region: 'uttarakhand', regionHi: 'उत्तराखंड',
    distance: '290 km', duration: '7 hrs', startingFare: 3190,
    image: '/guruj-cab-images/outstation-destinations/mussoorie.webp',
    description: 'Queen of the Hills with scenic views of Doon Valley and the Himalayan snow ranges.',
    descriptionHi: 'दून घाटी और हिमालयी बर्फ श्रृंखलाओं के दृश्यों के साथ पहाड़ों की रानी।',
    bestTime: 'April to June, September to November', bestTimeHi: 'अप्रैल से जून, सितंबर से नवंबर',
  },
  {
    id: 'kedarnath', name: 'Kedarnath', nameHi: 'केदारनाथ', region: 'uttarakhand', regionHi: 'उत्तराखंड',
    distance: '460 km', duration: '11-12 hrs', startingFare: 5060,
    image: '/guruj-cab-images/outstation-destinations/char-dham-yatra.webp',
    description: 'One of the holiest Hindu temples dedicated to Lord Shiva, part of Char Dham.',
    descriptionHi: 'भगवान शिव को समर्पित सबसे पवित्र हिंदू मंदिरों में से एक, चार धाम का हिस्सा।',
    bestTime: 'May to June, September to October', bestTimeHi: 'मई से जून, सितंबर से अक्टूबर',
  },
  {
    id: 'badrinath', name: 'Badrinath', nameHi: 'बद्रीनाथ', region: 'uttarakhand', regionHi: 'उत्तराखंड',
    distance: '530 km', duration: '14 hrs', startingFare: 5830,
    image: '/guruj-cab-images/outstation-destinations/char-dham-yatra.webp',
    description: 'Sacred temple town dedicated to Lord Vishnu, one of the Char Dham pilgrimage sites.',
    descriptionHi: 'भगवान विष्णु को समर्पित पवित्र मंदिर शहर, चार धाम तीर्थ स्थलों में से एक।',
    bestTime: 'May to June, September to October', bestTimeHi: 'मई से जून, सितंबर से अक्टूबर',
  },
  {
    id: 'jaipur', name: 'Jaipur', nameHi: 'जयपुर', region: 'rajasthan', regionHi: 'राजस्थान',
    distance: '280 km', duration: '5-6 hrs', startingFare: 3080,
    image: '/guruj-cab-images/outstation-destinations/jaipur.webp',
    description: 'The Pink City - known for grand forts, palaces, and vibrant Rajasthani culture.',
    descriptionHi: 'गुलाबी शहर - भव्य किलों, महलों और जीवंत राजस्थानी संस्कृति के लिए प्रसिद्ध।',
    bestTime: 'October to March', bestTimeHi: 'अक्टूबर से मार्च',
  },
  {
    id: 'udaipur', name: 'Udaipur', nameHi: 'उदयपुर', region: 'rajasthan', regionHi: 'राजस्थान',
    distance: '660 km', duration: '10-11 hrs', startingFare: 7260,
    image: '/guruj-cab-images/outstation-destinations/udaipur.webp',
    description: 'City of Lakes - romantic city with stunning lake palaces and Rajput heritage.',
    descriptionHi: 'झीलों का शहर - शानदार झील महलों और राजपूत विरासत वाला रोमांटिक शहर।',
    bestTime: 'October to March', bestTimeHi: 'अक्टूबर से मार्च',
  },
  {
    id: 'jodhpur', name: 'Jodhpur', nameHi: 'जोधपुर', region: 'rajasthan', regionHi: 'राजस्थान',
    distance: '600 km', duration: '9-10 hrs', startingFare: 6600,
    image: '/guruj-cab-images/outstation-destinations/jodhpur.jpeg',
    description: 'The Blue City dominated by the majestic Mehrangarh Fort overlooking the city.',
    descriptionHi: 'नीला शहर, शहर पर नज़र रखने वाले भव्य मेहरानगढ़ किले से घिरा।',
    bestTime: 'October to March', bestTimeHi: 'अक्टूबर से मार्च',
  },
  {
    id: 'jaisalmer', name: 'Jaisalmer', nameHi: 'जैसलमेर', region: 'rajasthan', regionHi: 'राजस्थान',
    distance: '780 km', duration: '12-13 hrs', startingFare: 8580,
    image: '/guruj-cab-images/outstation-destinations/jaipur.jpg',
    description: 'The Golden City in the heart of the Thar Desert, famous for sand dunes and camel safaris.',
    descriptionHi: 'थार रेगिस्तान के हृदय में स्वर्ण नगरी, रेत के टीलों और ऊंट सफारी के लिए प्रसिद्ध।',
    bestTime: 'October to March', bestTimeHi: 'अक्टूबर से मार्च',
  },
  {
    id: 'amritsar', name: 'Amritsar', nameHi: 'अमृतसर', region: 'punjab', regionHi: 'पंजाब',
    distance: '450 km', duration: '7-8 hrs', startingFare: 4950,
    image: '/guruj-cab-images/outstation-destinations/amritsar.webp',
    description: 'Home of the Golden Temple, Wagah Border ceremony, and legendary Punjabi cuisine.',
    descriptionHi: 'स्वर्ण मंदिर, वाघा बॉर्डर समारोह और प्रसिद्ध पंजाबी भोजन का घर।',
    bestTime: 'October to March', bestTimeHi: 'अक्टूबर से मार्च',
  },
  {
    id: 'vaishno-devi', name: 'Vaishno Devi', nameHi: 'वैष्णो देवी', region: 'jk', regionHi: 'जम्मू और कश्मीर',
    distance: '640 km', duration: '12 hrs', startingFare: 7040,
    image: '/guruj-cab-images/outstation-destinations/vaishno-devi.webp',
    description: 'One of the holiest Hindu shrines, nestled in the Trikuta Mountains of Jammu.',
    descriptionHi: 'सबसे पवित्र हिंदू तीर्थ स्थलों में से एक, जम्मू के त्रिकूट पर्वतों में स्थित।',
    bestTime: 'March to July, September to November', bestTimeHi: 'मार्च से जुलाई, सितंबर से नवंबर',
  },
  {
    id: 'srinagar', name: 'Srinagar', nameHi: 'श्रीनगर', region: 'jk', regionHi: 'जम्मू और कश्मीर',
    distance: '810 km', duration: '14-15 hrs', startingFare: 8910,
    image: '/guruj-cab-images/outstation-destinations/nainital.webp',
    description: 'Paradise on Earth - famous for Dal Lake houseboats, Mughal gardens, and stunning valleys.',
    descriptionHi: 'धरती का स्वर्ग - डल झील हाउसबोट, मुगल बागों और शानदार घाटियों के लिए प्रसिद्ध।',
    bestTime: 'April to October', bestTimeHi: 'अप्रैल से अक्टूबर',
  },
  {
    id: 'leh', name: 'Leh Ladakh', nameHi: 'लेह लद्दाख', region: 'ladakh', regionHi: 'लद्दाख',
    distance: '985 km', duration: '2 days (road)', startingFare: 10835,
    image: '/guruj-cab-images/outstation-destinations/bageshwar.webp',
    description: 'Land of high passes - epic road trips through Himalayan landscapes and ancient monasteries.',
    descriptionHi: 'ऊंचे दर्रों की भूमि - हिमालयी परिदृश्य और प्राचीन मठों से गुजरती महाकाव्य सड़क यात्राएं।',
    bestTime: 'June to September', bestTimeHi: 'जून से सितंबर',
  },
];
