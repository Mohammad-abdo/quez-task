// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// import { reactI18nextModule } from "react-i18next";

// import translationEN from '../public/locales/en/translation.json';
// import Backend from 'il8next-http-backend'
i18n
  .use(initReactI18next)
  .init({
    lng: 'ar', // Default language
    fallbackLng: 'ar', // Fallback language
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          'message':"Messages",
          'wishlists':'Wishlists',
          'trips':"Trips"
        },
      },
      ar: {
        translation: {

          'message':'الرسائل',
          'wishlists':'المفضلات',
          'trips':'الرحلات'

        },
      },
    },
    // @ts-ignore
    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });

export default i18n;
