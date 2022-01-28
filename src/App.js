import { useTranslation } from "react-i18next";
const languages = [
  {
    code: "en",
    name: "English",
    country_code: "gb",
  },
  {
    code: "kz",
    name: "Қазақ",
    country_code: "kz",
  },
  {
    code: "ru",
    name: "Русский",
    country_code: "ru",
  },
];

function App() {
  const { t } = useTranslation();
  const releaseDate = new Date("2022-01-27");
  const timeDifference = new Date() - releaseDate;
  const number_of_days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  return (
    <div className="container">
      <div className="d-flex justify-content-end">
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown button
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            {languages.map((language) => (
              <li key={language.country_code}>
                <button className="dropdown-item">
                  <span
                    className={`fi fis fi-${language.country_code} mx-2`}
                  ></span>
                  {language.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="d-flex flex-column align-items-start">
        <h1 className="font-weight-normal my-3"> {t("welcome_message")}</h1>
      </div>
      <p>{t("days_since_release", { number_of_days })}</p>
    </div>
  );
}

export default App;
