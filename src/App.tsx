import "./App.css";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "./components/LanguageSwitcher";

function App() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <LanguageSwitcher />
      <h1>{t("title")}</h1>
      <h3>{t("subtitle")}</h3>
    </div>
  );
}

export default App;
