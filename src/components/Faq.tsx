import { FC } from "react";
import { useTranslation } from "react-i18next";

export const Faq: FC = () => {
  const { t } = useTranslation("faq");
  const items = t("items.data", { returnObjects: true });

  return (
    <div>
      <h3>{t("title")}</h3>
      {Array.isArray(items)
        ? items.map((item) => (
            <div key={item.attributes.id}>
              <p>{item.attributes.question}</p>
              <p>{item.attributes.answer}</p>
            </div>
          ))
        : null}
    </div>
  );
};
