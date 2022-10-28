import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  pl: {
    translation: {
      title: "Witaj!",
      subtitle: "Miło Cię widzieć :)",
    },
  },
  en: {
    translation: {
      title: "Welcome!",
      subtitle: "It's nice to see you :)",
    },
  },
  de: {
    translation: {
      title: "Willkommen!",
      subtitle: "Es ist schön dich zu sehen :)",
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
