import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeModules, Platform } from 'react-native';

import en from './locales/en.json';
import ar from './locales/ar.json';

const languageDetector = {
  type: 'languageDetector' as const,
  async: true,
  detect: async (callback: (lang: string) => void) => {
    const savedLang = await AsyncStorage.getItem('user-language');
    if (savedLang) {
      callback(savedLang);
    } else {
      const locale =
        Platform.OS === 'ios'
          ? NativeModules.SettingsManager.settings.AppleLocale ||
            NativeModules.SettingsManager.settings.AppleLanguages[0]
          : NativeModules.I18nManager.localeIdentifier;

      callback(locale?.split('_')[0] || 'en');
    }
  },
  init: () => {},
  cacheUserLanguage: (lang: string) => {
    AsyncStorage.setItem('user-language', lang);
  },
};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    resources: {
      en: { translation: en },
      ar: { translation: ar },
    },
    compatibilityJSON: 'v4',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
