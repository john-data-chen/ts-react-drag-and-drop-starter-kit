import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { i18nConfig } from "./config";
import { resources } from "./resources";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    ...i18nConfig,
    resources,
    lng: localStorage.getItem("i18nextLng") || "en",
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
