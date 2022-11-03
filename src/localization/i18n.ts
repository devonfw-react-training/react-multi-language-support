import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import de from "./de";
import en from "./en";
import pl from "./pl";

const resources = {
  pl,
  en,
  de,
};

i18n.use(initReactI18next).init({
  resources,
  lng: "pl",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
