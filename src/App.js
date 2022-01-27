import { useTranslation } from "react-i18next";
function App() {
  const { t } = useTranslation();
  const releaseDate = new Date("2022-01-27");
  const timeDifference = new Date() - releaseDate;
  const number_of_days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  return (
    <div className="container">
      <div className="d-flex flex-column align-items-start">
        <h1 className="font-weight-normal my-3"> {t("welcome_message")}</h1>
      </div>
      <p>{t("days_since_release", { number_of_days })}</p>
    </div>
  );
}

export default App;
