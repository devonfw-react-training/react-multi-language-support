import { ChangeEvent, FC } from "react";
import { useTranslation } from "react-i18next";

type SelectOption = {
  label: string;
  value: string;
};

const supportedLanguages: SelectOption[] = [
  { label: "PL", value: "pl" },
  { label: "EN", value: "en" },
];

export const LanguageSwitcher: FC = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <select onChange={handleLanguageChange}>
      {supportedLanguages.map(({ label, value }) => (
        <option value={value} key={value}>
          {label}
        </option>
      ))}
    </select>
  );
};
