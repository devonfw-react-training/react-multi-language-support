import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(Backend)
  .init({
    backend: {
      loadPath: "http://localhost:1337/api/{{ns}}?locale={{lng}}&populate=*",
      parse: (data: string) => JSON.parse(data).data.attributes,
      customHeaders: {
        Authorization: `Bearer ${import.meta.env.VITE_HCMS_TOKEN}`,
      },
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
