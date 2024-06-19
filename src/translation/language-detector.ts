import i18next, {
  LanguageDetectorAsyncModule,
  Services,
  InitOptions,
} from 'i18next';
import {initReactI18next} from 'react-i18next';
import {getLocales} from 'expo-localization';
const deviceLanguage = String(getLocales()[0]?.languageCode);

import en from './en.json';
import ar from './ar.json';
import AsyncStorage from '@react-native-async-storage/async-storage';

export enum SupportedLanguage {
  English = 'en',
  Arabic = 'ar',
}

const languageDetector: LanguageDetectorAsyncModule = {
  type: 'languageDetector',
  // If this is set to true, your detect function receives a callback function that you should call with your language,
  //useful to retrieve your language stored in MMKV storage for example
  async: true,
  init: (
    _services: Services,
    _detectorOptions: object,
    _i18nextOptions: InitOptions,
  ) => {
    /* use services and options */
  },
  detect: async (callback: (lng: string) => void) => {
    const savedLanguage = await AsyncStorage.getItem('APP_LANG');
    if (savedLanguage) {
      callback(String(savedLanguage));
      return savedLanguage;
    } else {
      /**
       * pick best language for user based on his device's language
       */
      const bestLng = ['ar', 'en'].includes(deviceLanguage)
        ? deviceLanguage
        : 'en';
      callback(bestLng);
      return bestLng;
    }
  },
  cacheUserLanguage: (lng: string) => {
    AsyncStorage.setItem('APP_LANG', lng);
  },
};

i18next
  .use(languageDetector)
  .use(initReactI18next) // passes i18next down to react-i18next
  .init({
    compatibilityJSON: 'v3',
    resources: {
      en: {
        translation: en,
      },
      ar: {
        translation: ar,
      },
    },
    react: {
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false,
    },
    fallbackLng: 'en',
  });
