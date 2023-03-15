import { useTranslation } from "react-i18next";
import "./HomeAbout.scss";
import img1 from "../../../../assets/images/home-about-img1.svg";
import img2 from "../../../../assets/images/home-about-img2.svg";
import img3 from "../../../../assets/images/home-about-img3.svg";
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from "react-router-dom";

export default function HomeAbout() {
  const { t } = useTranslation();

  return (
    <section className="home-about">
      <div className="container">
        <div className="home-about-gallery">
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
        </div>
        <div className="home-about-desc">
          <h2 className="home-about-desc-title">{t("header.about")}</h2>
          <div className="home-about-desc-item">
            <p>{t("home.about.text1")}</p>
            <br />
            <p>{t("home.about.text2")}</p>
          </div>
          <div className="home-about-desc-item">
            <p>{t("home.about.text3")}</p><br />
            <p>{t("home.about.text4")}</p>
          </div>
          <div className="home-about-desc-item">
            <p>{t("home.about.text5")}</p>
          </div>
          <Link className="home-about-desc-link" to="/about">{t("home.about.link")}<IoIosArrowForward /></Link>
        </div>
      </div>
    </section>
  )
}
