import "./App.css";
import { LanguageSwitcher } from "./components/LanguageSwitcher";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();

  return (
    <>
      <LanguageSwitcher />
      <h1>{t("title")}</h1>
      <h3>{t("subtitle")}</h3>
    </>
  );
}

export default App;
