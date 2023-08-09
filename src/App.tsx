import "./App.css";
import { Faq } from "./components/Faq";
import { LanguageSwitcher } from "./components/LanguageSwitcher";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();

  return (
    <>
      <LanguageSwitcher />
      <h1>{t("title", { name: "Jan" })}</h1>
      <h3>{t("subtitle")}</h3>
      <Faq />
    </>
  );
}

export default App;
