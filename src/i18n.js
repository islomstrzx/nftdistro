 import i18n from "i18next";
 import Backend from 'i18next-http-backend';
 import languagedetector from 'i18next-browser-languagedetector'
 import { initReactI18next } from "react-i18next";


 i18n

     .use(Backend)
     .use(languagedetector)
     .use(initReactI18next)
     .init({
         fallbackLng: "ru",
         // debug: true ,
         dtection: {
             order: ["queryString", "cookie"],
             cache: ["cookie"],
         },
         interpolation: {
             escapeValue: false,
         },
     });


 export default i18n;