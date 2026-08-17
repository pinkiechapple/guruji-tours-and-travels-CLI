export interface PilgrimagePackage {
  id: string;
  name: string;
  nameHi: string;
  image: string;
  duration: string;
  durationHi: string;
  description: string;
  descriptionHi: string;
  prices: { vehicle: string; vehicleHi: string; price: number }[];
}

export interface TourPackage {
  id: string;
  name: string;
  nameHi: string;
  duration: string;
  durationHi: string;
  route: string;
  routeHi: string;
  pricePerPerson: number;
  minGroup?: number;
  image: string;
  inclusions: string[];
  inclusionsHi: string[];
  exclusions: string[];
  exclusionsHi: string[];
  sightseeing: string[];
  sightseeingHi: string[];
  description: string;
  descriptionHi: string;
}

export const pilgrimagePackages: PilgrimagePackage[] = [
  {
    id: 'char-dham',
    name: 'Char Dham Yatra',
    nameHi: 'चार धाम यात्रा',
    image: '/guruj-cab-images/outstation-destinations/char-dham.webp',
    duration: '12 Days',
    durationHi: '12 दिन',
    description: 'Complete Char Dham pilgrimage covering Yamunotri, Gangotri, Kedarnath, and Badrinath. Transport only package with experienced hill drivers.',
    descriptionHi: 'यमुनोत्री, गंगोत्री, केदारनाथ और बद्रीनाथ को कवर करने वाली संपूर्ण चार धाम तीर्थयात्रा। अनुभवी पहाड़ी ड्राइवरों के साथ केवल परिवहन पैकेज।',
    prices: [
      { vehicle: 'Swift Dzire', vehicleHi: 'स्विफ्ट डिज़ायर', price: 48000 },
      { vehicle: 'Maruti Ertiga', vehicleHi: 'मारुति अर्टिगा', price: 60000 },
      { vehicle: 'Kia Carens', vehicleHi: 'किआ कैरेंस', price: 66000 },
      { vehicle: 'Toyota Innova Crysta', vehicleHi: 'टोयोटा इनोवा क्रिस्टा', price: 72000 },
      { vehicle: 'Tempo Traveller 16 Seater', vehicleHi: 'टेम्पो ट्रैवलर 16 सीटर', price: 100000 },
      { vehicle: 'Tempo Traveller 21 Seater', vehicleHi: 'टेम्पो ट्रैवलर 21 सीटर', price: 110000 },
      { vehicle: 'Tempo Traveller 26 Seater', vehicleHi: 'टेम्पो ट्रैवलर 26 सीटर', price: 144000 },
      { vehicle: 'Force Urbania 16 Seater', vehicleHi: 'फोर्स अर्बेनिया 16 सीटर', price: 120000 },
    ],
  },
  {
    id: 'do-dham',
    name: 'Do Dham Yatra',
    nameHi: 'दो धाम यात्रा',
    image: '/guruj-cab-images/outstation-destinations/do-dham-yatra-kedarnath-and-badrinath.webp',
    duration: '7-8 Days',
    durationHi: '7-8 दिन',
    description: 'Do Dham pilgrimage covering Kedarnath and Badrinath. Transport only package with experienced hill drivers.',
    descriptionHi: 'केदारनाथ और बद्रीनाथ को कवर करने वाली दो धाम तीर्थयात्रा। अनुभवी पहाड़ी ड्राइवरों के साथ केवल परिवहन पैकेज।',
    prices: [
      { vehicle: 'Swift Dzire', vehicleHi: 'स्विफ्ट डिज़ायर', price: 28000 },
      { vehicle: 'Maruti Ertiga', vehicleHi: 'मारुति अर्टिगा', price: 32000 },
      { vehicle: 'Kia Carens', vehicleHi: 'किआ कैरेंस', price: 35000 },
      { vehicle: 'Toyota Innova Crysta', vehicleHi: 'टोयोटा इनोवा क्रिस्टा', price: 42000 },
      { vehicle: 'Tempo Traveller 16 Seater', vehicleHi: 'टेम्पो ट्रैवलर 16 सीटर', price: 60000 },
      { vehicle: 'Tempo Traveller 21 Seater', vehicleHi: 'टेम्पो ट्रैवलर 21 सीटर', price: 65000 },
      { vehicle: 'Tempo Traveller 26 Seater', vehicleHi: 'टेम्पो ट्रैवलर 26 सीटर', price: 80000 },
      { vehicle: 'Force Urbania 16 Seater', vehicleHi: 'फोर्स अर्बेनिया 16 सीटर', price: 70000 },
    ],
  },
];

export const tourPackages: TourPackage[] = [
  {
    id: 'haridwar-rishikesh',
    name: 'Haridwar & Rishikesh Tour',
    nameHi: 'हरिद्वार और ऋषिकेश टूर',
    duration: '2 Days / 1 Night',
    durationHi: '2 दिन / 1 रात',
    route: 'Delhi - Haridwar - Rishikesh - Delhi',
    routeHi: 'दिल्ली - हरिद्वार - ऋषिकेश - दिल्ली',
    pricePerPerson: 2500,
    minGroup: 20,
    image: '/guruj-cab-images/outstation-destinations/haridwar.webp',
    description: 'A spiritual journey to the holy cities of Haridwar and Rishikesh on the banks of River Ganga.',
    descriptionHi: 'गंगा नदी के तट पर पवित्र शहरों हरिद्वार और ऋषिकेश की आध्यात्मिक यात्रा।',
    inclusions: ['Hotel booking', 'Local sightseeing', 'Transportation (Delhi to Delhi)'],
    inclusionsHi: ['होटल बुकिंग', 'स्थानीय दर्शन', 'परिवहन (दिल्ली से दिल्ली)'],
    exclusions: ['Meals / Food'],
    exclusionsHi: ['भोजन'],
    sightseeing: ['Har Ki Pauri', 'Laxman Jhula', 'Ram Jhula', 'Ganga Aarti'],
    sightseeingHi: ['हर की पौड़ी', 'लक्ष्मण झूला', 'राम झूला', 'गंगा आरती'],
  },
  {
    id: 'manali',
    name: 'Manali Tour Package',
    nameHi: 'मनाली टूर पैकेज',
    duration: '4 Days / 3 Nights',
    durationHi: '4 दिन / 3 रातें',
    route: 'Delhi - Manali - Kasol - Delhi',
    routeHi: 'दिल्ली - मनाली - कसोल - दिल्ली',
    pricePerPerson: 5800,
    image: '/guruj-cab-images/tour-packages/manali-shimla.webp',
    description: 'Explore the beauty of Manali and Kasol with comfortable stay and guided sightseeing.',
    descriptionHi: 'आरामदायक ठहरने और गाइडेड दर्शन के साथ मनाली और कसोल की सुंदरता का अन्वेषण करें।',
    inclusions: ['2/3 Star Hotel', 'Breakfast & Dinner', 'Local Sightseeing', 'Transportation'],
    inclusionsHi: ['2/3 स्टार होटल', 'नाश्ता और डिनर', 'स्थानीय दर्शन', 'परिवहन'],
    exclusions: ['Lunch', 'Personal expenses', 'Adventure activities'],
    exclusionsHi: ['दोपहर का भोजन', 'व्यक्तिगत खर्च', 'साहसिक गतिविधियाँ'],
    sightseeing: ['Solang Valley', 'Atal Tunnel', 'Mall Road', 'Hadimba Temple', 'Manikaran Sahib', 'Kasol'],
    sightseeingHi: ['सोलंग वैली', 'अटल टनल', 'मॉल रोड', 'हिडिम्बा मंदिर', 'मणिकरण साहिब', 'कसोल'],
  },
];
