import "./App.css";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "./components/LanguageSwitcher";
import { Faq } from "./components/Faq";

function App() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <LanguageSwitcher />
      <h1>{t("title", { name: "Zbyszek" })}</h1>
      <h3>{t("subtitle")}</h3>
      <Faq />
    </div>
  );
}

export default App;
