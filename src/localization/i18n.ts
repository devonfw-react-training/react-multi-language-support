import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  pl: {
    translation: {
      title: "Witaj {{name}}!",
      subtitle: "Miło Cię widzieć",
      messages_zero: "Nie masz żadnych wiadomości",
      messages_one: "Masz jedną wiadomość",
      messages_few: "Masz {{count}} wiadomości",
      messages_many: "Masz dużo wiadomości",
    },
    faq: {
      title: "Najczęściej zadawane pytania",
      items: [
        {
          question: "Pytanie 1",
          answer: "Odpowiedź 1",
        },
        {
          question: "Pytanie 2",
          answer: "Odpowiedź 2",
        },
      ],
    },
  },
  en: {
    translation: {
      title: "Hello {{name}}!",
      subtitle: "It's nice to see you",
      messages_zero: "You have no messages",
      messages_one: "You have 1 message",
      messages_other: "You have {{count}} messages",
    },
    faq: {
      title: "Frequently asked questions",
      items: [
        {
          question: "Question 1",
          answer: "Answer 1",
        },
        {
          question: "Question 2",
          answer: "Answer 2",
        },
      ],
    },
  },
};

i18n.use(initReactI18next).init({
  debug: true,
  resources,
  lng: "pl",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
