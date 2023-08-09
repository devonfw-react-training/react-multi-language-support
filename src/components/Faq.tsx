import { FC } from "react";
import { useTranslation } from "react-i18next";

export const Faq: FC = () => {
  const { t } = useTranslation("faq");
  const items = t("items", { returnObjects: true });

  return (
    <div>
      <h3>{t("title")}</h3>
      {Array.isArray(items)
        ? items.map(({ question, answer }) => (
            <div key={question}>
              <p>{question}</p>
              <p>{answer}</p>
            </div>
          ))
        : null}
    </div>
  );
};
