import "./Content.scss";
import { useTranslation } from 'react-i18next';

export default function Content() {
  const { t } = useTranslation();

  return (
    <section className="home-content">
      <div className="container">
        <div className="home-content-finance">
          <h2 className="home-content-title">{t("home.content.finance.title")}</h2>
          <div className="home-content-finance-action"></div>
        </div>
        <div className="home-content-elon"></div>
      </div>
    </section>
  )
}
