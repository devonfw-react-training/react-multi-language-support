import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  pl: {
    translation: {
      title: "Witaj {{name}}!",
      subtitle: "Miło Cię widzieć :)",
    },
    faq: {
      title: "Najczęściej zadawane pytania",
      items: [
        {
          question: "Pytanie 1",
          answer: "Odpowiedź...",
        },
        {
          question: "Pytanie 2",
          answer: "Odpowiedź...",
        },
      ],
    },
  },
  en: {
    translation: {
      title: "Welcome {{name}}!",
      subtitle: "It's nice to see you :)",
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "Question 1",
          answer: "Answer...",
        },
        {
          question: "Question 2",
          answer: "Answer...",
        },
      ],
    },
  },
  de: {
    translation: {
      title: "Willkommen {{name}}!",
      subtitle: "Es ist schön dich zu sehen :)",
    },
    faq: {
      title: "Häufig gestellte Fragen",
      items: [
        {
          question: "Frage 1",
          answer: "Antwort...",
        },
        {
          question: "Frage 2",
          answer: "Antwort...",
        },
      ],
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
