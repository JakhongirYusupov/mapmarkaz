import "./Hero.scss";
import { useTranslation } from 'react-i18next';
import jurnal from "../../../../assets/images/jurnal.svg";
import flag from "../../../../assets/images/flag.svg";
import ActionEarth from "../../../../components/EarthAction/Action";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="home-hero">
      <div className="container">
        <div className="home-hero-desc">
          <h1 className="home-hero-desc-title">{t("home.hero.title")}</h1>
          <p className="home-hero-desc-text">{t("home.hero.desc")}</p>
        </div>
        <div className="home-hero-service">
          <div className="home-hero-service-desc">
            <p className="home-hero-service-desc-text">{t("home.hero.service")}</p>
            <button className="home-hero-service-desc-btn">{t("home.hero.service-btn")}</button>
          </div>
          <img src={jurnal} alt="jurnal" />
        </div>
        <ActionEarth />
      </div>
      <div className="home-hero-links">
        <div className="container">
          <div className="home-hero-links-list">
            <p>{t("home.hero.links")}</p>
            <a href="http://www.mudofaa.uz">mudofaa.uz</a>
            <a href="http://www.mudofaa.uz">uzspace.uz</a>
            <a href="http://www.mudofaa.uz">kadastr.uz</a>
            <a href="http://www.mudofaa.uz">gisinfo.ru</a>
          </div>
          <div className="home-hero-links-flags">
            <p className="home-hero-links-flags-title">{t("home.hero.linkstime")}</p>
            <div className="home-hero-links-flags-list">
              {
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((el, index) => {
                  return <div className="home-hero-links-flags-list-item">
                    <img src={flag} alt="flag" />
                    <span>5</span>
                  </div>
                })
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
