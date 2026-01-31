
import { FeatureType, FeatureTile } from './types';

export const TRANSLATIONS: Record<string, { en: string; hi: string }> = {
  back: { en: 'Back', hi: 'पीछे' },
  home: { en: 'Home', hi: 'मुख्य पृष्ठ' },
  loading: { en: 'Analyzing...', hi: 'जाँच हो रही है...' },
  scanCrop: { en: 'Scan Crop', hi: 'फसल स्कैन करें' },
  scanSoil: { en: 'Scan Soil', hi: 'मिट्टी स्कैन करें' },
  diagnose: { en: 'Diagnosis', hi: 'बीमारी की जाँच' },
  science: { en: 'Kheti Science', hi: 'खेती विज्ञान' },
  soilHealth: { en: 'Soil Health', hi: 'मिट्टी का स्वास्थ्य' },
  newSeeds: { en: 'New Seeds', hi: 'नए बीज' },
  phLevel: { en: 'Estimated pH', hi: 'अनुमानित pH' },
  fertilizerNeeded: { en: 'Fertilizer Recommended', hi: 'खाद की सिफारिश' },
  buyNow: { en: 'Buy Now', hi: 'अभी खरीदें' },
  saveRecord: { en: 'Save Record', hi: 'रिकॉर्ड सेव करें' },
  price: { en: 'Price', hi: 'कीमत' },
  expertAdvice: { en: 'Expert Advice', hi: 'विशेषज्ञ सलाह' },
  detectingLocation: { en: 'Detecting Location...', hi: 'स्थान का पता लगाया जा रहा है...' },
  weatherRisk: { en: 'Weather Status', hi: 'मौसम की स्थिति' },
  nearbyVets: { en: 'Nearby Vets', hi: 'नज़दीकी डॉक्टर' },
  rentNow: { en: 'Rent Now', hi: 'किराये पर लें' },
  listMachine: { en: 'List Machine', hi: 'मशीन लिस्ट करें' },
  totalEarnings: { en: 'Total Earnings', hi: 'कुल कमाई' },
  mandiTrends: { en: 'Mandi Trends', hi: 'मंडी के भाव' },
  cropRecommendations: { en: 'Recommended Crops', hi: 'अनुशंसित फसलें' },
  // Govt Schemes Translations
  selectGender: { en: 'Select Your Gender', hi: 'अपना लिंग चुनें' },
  annualIncome: { en: 'Annual Income', hi: 'वार्षिक आय' },
  selectCaste: { en: 'Select Your Caste', hi: 'अपनी जाति चुनें' },
  landSize: { en: 'Land Size (Acres)', hi: 'भूमि का आकार (एकड़)' },
  submitCheck: { en: 'SUBMIT & CHECK', hi: 'जमा करें और जाँचें' },
  male: { en: 'Male', hi: 'पुरुष' },
  female: { en: 'Female', hi: 'महिला' },
  other: { en: 'Other', hi: 'अन्य' },
  lowIncome: { en: 'Below 2.5 Lakh', hi: '2.5 लाख से कम' },
  midIncome: { en: '2.5L to 5 Lakh', hi: '2.5L से 5 लाख' },
  highIncome: { en: 'Above 5 Lakh', hi: '5 लाख से ऊपर' },
  general: { en: 'General', hi: 'सामान्य' },
  obc: { en: 'OBC', hi: 'ओबीसी' },
  sc: { en: 'SC', hi: 'एससी' },
  st: { en: 'ST', hi: 'एसटी' },
  personalDetails: { en: 'Personal Details', hi: 'व्यक्तिगत विवरण' },
  govtAidFinder: { en: 'Govt Aid Finder', hi: 'सरकारी सहायता खोजें' },
  findEligibility: { en: 'FIND MY ELIGIBILITY', hi: 'मेरी पात्रता जाँचें' },
  subsidyAdvice: { en: 'Get up to ₹50,000 subsidy based on eligibility.', hi: 'पात्रता के आधार पर ₹50,000 तक की सब्सिडी प्राप्त करें।' },
  eligibleSchemes: { en: 'Your Eligible Schemes', hi: 'आपकी पात्र योजनाएं' },
  howToApply: { en: 'How to Apply', hi: 'आवेदन कैसे करें' },
  documentsNeeded: { en: 'Documents Needed', hi: 'जरूरी दस्तावेज़' },
  applyNow: { en: 'Apply Now', hi: 'अभी आवेदन करें' },
  foundSchemes: { en: 'We found {n} schemes for you!', hi: 'हमें आपके लिए {n} योजनाएं मिली हैं!' },
  // Onboarding & Tour
  selectLocation: { en: 'Select Your Location', hi: 'अपना स्थान चुनें' },
  next: { en: 'Next', hi: 'अगला' },
  finish: { en: 'Finish', hi: 'समाप्त' },
  previous: { en: 'Previous', hi: 'पीछे' },
  tourStep1: { en: "This is your location. I'll show you weather and local alerts here.", hi: "यह आपका स्थान है। मैं यहाँ आपको मौसम और स्थानीय जानकारी दिखाऊंगा।" },
  tourStepCrop: { en: "Scan crops for diseases and get soil science advice here.", hi: "फसलों की बीमारी और मिट्टी की सलाह के लिए यहाँ क्लिक करें।" },
  tourStepAnimal: { en: "Manage your cattle health, milk tracking, and find nearby doctors.", hi: "पशुओं का स्वास्थ्य, दूध का हिसाब और नज़दीकी डॉक्टर यहाँ मिलेंगे।" },
  tourStepMachine: { en: "Rent tractors and pumps from neighbors or earn by listing your own.", hi: "किराये पर मशीन लें या अपनी मशीन किराये पर देकर पैसे कमाएं।" },
  tourStepMandi: { en: "Check the latest mandi prices and see if you should sell or wait.", hi: "मंडी के ताज़ा भाव देखें और जानें कि बेचना है या इंतज़ार करना है।" },
  tourStepGovt: { en: "Find and apply for government schemes and subsidies you deserve.", hi: "सरकारी योजनाओं और सब्सिडी की जानकारी यहाँ से पाएं।" },
  tourStepShop: { en: "Find local fertilizer and seed shops with real-time stock levels.", hi: "खाद और बीज की दुकानों का पता और स्टॉक यहाँ देखें।" },
  tourStepCare: { en: "If you're stressed or just want to talk, I'm always here for you.", hi: "अगर आप परेशान हैं या बात करना चाहते हैं, तो मैं हमेशा यहाँ हूँ।" },
  tourStepVoice: { en: "Most importantly, press this button anytime to talk to me! Just say 'Hello'.", hi: "सबसे ज़रूरी बात, मुझसे बात करने के लिए कभी भी यह बटन दबाएं! बस 'नमस्ते' कहें।" },
  understand: { en: "I Understand", hi: "समझ गया" }
};

export const FEATURE_TILES: FeatureTile[] = [
  {
    id: FeatureType.CROP_HEALTH,
    title: 'Crop Health',
    hindiTitle: 'फसल स्वास्थ्य',
    icon: '🌱',
    color: 'bg-green-100 border-green-200 text-green-700',
    description: 'Check for diseases and get soil advice.'
  },
  {
    id: FeatureType.ANIMAL_HEALTH,
    title: 'Animal Health',
    hindiTitle: 'पशु स्वास्थ्य',
    icon: '🐾',
    color: 'bg-orange-100 border-orange-200 text-orange-700',
    description: 'Manage cow, buffalo, and goat health.'
  },
  {
    id: FeatureType.MACHINERY,
    title: 'Machinery',
    hindiTitle: 'मशीनरी रेंट',
    icon: '🚜',
    color: 'bg-blue-100 border-blue-200 text-blue-700',
    description: 'Rent tractors or pumps nearby.'
  },
  {
    id: FeatureType.MANDI_PRICE,
    title: 'Mandi Price',
    hindiTitle: 'मंडी भाव',
    icon: '💰',
    color: 'bg-yellow-100 border-yellow-200 text-yellow-700',
    description: 'Compare current and historical prices.'
  },
  {
    id: FeatureType.GOVT_SCHEMES,
    title: 'Govt Schemes',
    hindiTitle: 'सरकारी योजनाएं',
    icon: '🏛',
    color: 'bg-purple-100 border-purple-200 text-purple-700',
    description: 'Apply for PM-Kisan and other aids.'
  },
  {
    id: FeatureType.FERTILIZER,
    title: 'Fertilizer Shop',
    hindiTitle: 'खाद की दुकान',
    icon: '🌿',
    color: 'bg-emerald-100 border-emerald-200 text-emerald-700',
    description: 'Find seeds and fertilizers nearby.'
  },
  {
    id: FeatureType.KISAN_CARE,
    title: 'Kisan Care',
    hindiTitle: 'किसान केयर',
    icon: '❤️',
    color: 'bg-red-100 border-red-200 text-red-700',
    description: 'Stress support and emotional help.'
  },
  {
    id: FeatureType.WEATHER,
    title: 'Weather',
    hindiTitle: 'मौसम की जानकारी',
    icon: '🌤️',
    color: 'bg-sky-100 border-sky-200 text-sky-700',
    description: 'Location based weather alerts.'
  }
];

export const MOCK_MANDI_DATA = [
  { commodity: 'Wheat (गेहूं)', currentPrice: 2400, lastYearPrice: 2150, trend: 'up', advice: 'Keep storage, price rising.' },
  { commodity: 'Rice (चावल)', currentPrice: 3100, lastYearPrice: 3200, trend: 'down', advice: 'Sell soon before further dip.' },
  { commodity: 'Mustard (सरसों)', currentPrice: 5600, lastYearPrice: 5400, trend: 'stable', advice: 'Stable market.' }
];
