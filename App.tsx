import React, { useState, useEffect } from 'react';
import { FeatureType, Language } from './types';
import { FEATURE_TILES, TRANSLATIONS } from './constants';
import { speakResponse, speakNative, stopSpeaking, getKisanSupport } from './services/gemini';
import Dashboard from './components/Dashboard';
import CropHealth from './components/features/CropHealth';
import MandiPrice from './components/features/MandiPrice';
import KisanCare from './components/features/KisanCare';
import AnimalHealth from './components/features/AnimalHealth';
import Machinery from './components/features/Machinery';
import WeatherAlerts from './components/features/WeatherAlerts';
import GovtSchemes from './components/features/GovtSchemes';
import FertilizerShop from './components/features/FertilizerShop';
import VoiceController from './components/VoiceController';
import Onboarding from './components/Onboarding';
import Tour from './components/Tour';

const App: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<FeatureType | null>(null);
  const [isVoiceActive, setIsVoiceActive] = useState(false);
  const [lang, setLang] = useState<Language | null>(null);
  const [locationName, setLocationName] = useState<string | null>(null);
  const [isTourActive, setIsTourActive] = useState(false);
  const [isAILoading, setIsAILoading] = useState(false);

  const handleOnboardingComplete = (selectedLang: Language, selectedLoc: string) => {
    setLang(selectedLang);
    setLocationName(selectedLoc);
    setIsTourActive(true); 
  };

  const navigateTo = (type: FeatureType | null) => {
    // Immediate stop on any navigation or icon click
    stopSpeaking();

    if (isTourActive) return; 
    
    setActiveFeature(type);
    if (type) {
      const tile = FEATURE_TILES.find(t => t.id === type);
      if (tile) {
        const msg = lang === 'hi' 
          ? `${tile.hindiTitle} खुल गया है।` 
          : `${tile.title} opened.`;
        speakNative(msg, lang!);
      }
    }
  };

  const handleVoiceCommand = async (command: string) => {
    if (isTourActive) return;
    const lower = command.toLowerCase().trim();
    
    // Global Stop Commands
    if (lower === 'stop' || lower === 'bas' || lower === 'ruko' || lower === 'chup' || lower.includes('stop')) {
      stopSpeaking();
      return;
    }

    // Navigation Commands
    if (lower.includes('crop') || lower.includes('fasal') || lower.includes('plant')) {
      navigateTo(FeatureType.CROP_HEALTH);
    } else if (lower.includes('animal') || lower.includes('pashu') || lower.includes('cow') || lower.includes('buffalo')) {
      navigateTo(FeatureType.ANIMAL_HEALTH);
    } else if (lower.includes('mandi') || lower.includes('price') || lower.includes('rate') || lower.includes('bhaav')) {
      navigateTo(FeatureType.MANDI_PRICE);
    } else if (lower.includes('home') || lower.includes('back') || lower.includes('ghar') || lower.includes('piche')) {
      navigateTo(null);
    } else {
      // General Farming Queries
      setIsAILoading(true);
      try {
        const response = await getKisanSupport(command, lang || 'hi');
        if (response) {
          await speakResponse(response, lang || 'hi');
        }
      } catch (err) {
        console.error("AI Response error:", err);
      } finally {
        setIsAILoading(false);
      }
    }
  };

  if (!lang || !locationName) return <Onboarding onComplete={handleOnboardingComplete} />;

  return (
    <div className="min-h-screen flex flex-col max-w-md mx-auto bg-[#FDFBF7] shadow-xl relative overflow-hidden pb-32">
      {isTourActive && <Tour lang={lang} onFinish={() => setIsTourActive(false)} />}

      <header className="p-4 bg-white border-b sticky top-0 z-20 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigateTo(null)}>
          <span className="text-2xl">🌾</span>
          <h1 className="font-bold text-xl text-green-800">Kisan Sathi</h1>
        </div>
        <div className="flex gap-2 text-right">
          <div className="mr-2">
            <p className="text-[10px] font-black text-gray-400 uppercase leading-none">Location</p>
            <p className="text-xs font-bold text-green-700">{locationName}</p>
          </div>
          <button onClick={() => { stopSpeaking(); setLang(lang === 'hi' ? 'en' : 'hi'); }} className="text-xs font-black bg-gray-100 px-3 py-1 rounded-full text-gray-600">
            {lang === 'hi' ? 'ENGLISH' : 'हिंदी'}
          </button>
        </div>
      </header>

      <main className={`flex-1 overflow-y-auto ${isTourActive ? 'pointer-events-none' : ''}`}>
        {!activeFeature ? (
          <Dashboard onSelect={navigateTo} lang={lang} locationName={locationName} />
        ) : (
          <div className="p-4 animate-in fade-in slide-in-from-bottom-4 duration-300">
            <button 
              onClick={() => navigateTo(null)}
              className="mb-4 text-sm font-black text-green-700 bg-green-50 px-4 py-2 rounded-full border border-green-200"
            >
              ← {TRANSLATIONS.back[lang]}
            </button>
            
            {activeFeature === FeatureType.CROP_HEALTH && <CropHealth lang={lang} />}
            {activeFeature === FeatureType.ANIMAL_HEALTH && <AnimalHealth lang={lang} />}
            {activeFeature === FeatureType.MACHINERY && <Machinery lang={lang} />}
            {activeFeature === FeatureType.MANDI_PRICE && <MandiPrice lang={lang} />}
            {activeFeature === FeatureType.WEATHER && <WeatherAlerts lang={lang} />}
            {activeFeature === FeatureType.GOVT_SCHEMES && <GovtSchemes lang={lang} />}
            {activeFeature === FeatureType.FERTILIZER && <FertilizerShop lang={lang} />}
            {activeFeature === FeatureType.KISAN_CARE && <KisanCare lang={lang} />}
          </div>
        )}
      </main>

      <VoiceController 
        onCommand={handleVoiceCommand} 
        isAILoading={isAILoading}
        lang={lang}
      />
    </div>
  );
};

export default App;