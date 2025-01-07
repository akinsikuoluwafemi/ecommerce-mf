import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enJSON from './translation/en.json';
import ptJSON from './translation/pt.json';

// translation resources
const resources = {
  en: {
    translation: enJSON
  },
  pt: {
    translation: ptJSON
  }
}

// initialize i18next instance for home
const pdpInstance = i18n.createInstance();
pdpInstance.use(initReactI18next).init({
  resources,
  lng: "en", // default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: true,
  },
  debug: true,
});

export default pdpInstance;