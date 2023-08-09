import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  pl: {
    translation: {
      title: "Witaj!",
      subtitle: "Miło Cię widzieć",
    },
  },
  en: {
    translation: {
      title: "Hello!",
      subtitle: "It's nice to see you",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "pl",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
