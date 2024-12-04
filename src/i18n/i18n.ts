import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./en.json";
import de from "./de.json";

const resources = {
  en: { translation: en },
  de: { translation: de },
};

const options = {
  // order and from where user language should be detected
  order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
  // keys or params to lookup language from
  lookupQuerystring: 'lng',
  lookupCookie: 'i18next',
  lookupLocalStorage: 'i18nextLng',
  lookupFromPathIndex: 0,
  lookupFromSubdomainIndex: 2,
  // cache user language on
  caches: ['localStorage', 'cookie'],
  // optional expire and domain for set cookie
  cookieMinutes: 10,
  cookieDomain: window.location.hostname,
  // optional htmlTag with lang attribute, the default is:
  htmlTag: document.documentElement,
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    ...options,
    resources,
    lng: localStorage.getItem('i18nextLng') || "en",
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;