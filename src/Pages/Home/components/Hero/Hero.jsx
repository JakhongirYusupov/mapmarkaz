import "./Hero.scss";
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="home-hero">
      <div className="home-hero-desc">
        <h1 className="home-hero-desc-title">{t("home.hero.title")}</h1>
        <p className="home-hero-desc-text">{t("home.hero.desc")}</p>
      </div>
    </section>
  )
}
