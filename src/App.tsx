import "./App.css";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "./components/LanguageSwitcher";
import { Faq } from "./components/Faq";
import { Suspense, useState } from "react";

function App() {
  const { t } = useTranslation("greeting");
  const [faqVisible, setFaqVisible] = useState<boolean>(false);
  const showFaq = () => {
    setFaqVisible(true);
  };

  return (
    <div className="App">
      {/* <Suspense fallback="loading..."> */}
      <LanguageSwitcher />
      <h1>{t("title", { name: "Zbyszek" })}</h1>
      <h3>{t("subtitle")}</h3>
      <button onClick={showFaq}>{t("button")}</button>
      {faqVisible && <Faq />}
      {/* </Suspense> */}
    </div>
  );
}

export default App;
