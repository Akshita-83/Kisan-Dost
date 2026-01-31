
export enum FeatureType {
  CROP_HEALTH = 'CROP_HEALTH',
  ANIMAL_HEALTH = 'ANIMAL_HEALTH',
  MACHINERY = 'MACHINERY',
  MANDI_PRICE = 'MANDI_PRICE',
  GOVT_SCHEMES = 'GOVT_SCHEMES',
  FERTILIZER = 'FERTILIZER',
  KISAN_CARE = 'KISAN_CARE',
  TUTORIAL = 'TUTORIAL',
  WEATHER = 'WEATHER'
}

export type Language = 'en' | 'hi';

export type AnimalType = 'Cow' | 'Buffalo' | 'Goat' | 'Hen' | 'Bull' | 'Pig' | 'Sheep';

export interface CommunityPost {
  id: string;
  author: string;
  location: string;
  text: string;
  likes: number;
}

export interface FeatureTile {
  id: FeatureType;
  title: string;
  hindiTitle: string;
  icon: string;
  color: string;
  description: string;
}

export interface Vet {
  id: string;
  name: string;
  specialty: string;
  distance: string;
  rating: number;
  phone: string;
}

export interface MarketListing {
  id: string;
  item: string;
  quantity: string;
  price: string;
  timestamp: string;
}
