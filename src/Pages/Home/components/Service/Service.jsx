import item1 from "../../../../assets/images/service-item1.png";
import item2 from "../../../../assets/images/service-item2.png";
import item3 from "../../../../assets/images/service-item3.png";
import item4 from "../../../../assets/images/service-item4.png";
import item5 from "../../../../assets/images/service-item5.png";
import "./Service.scss";
import { useTranslation } from 'react-i18next';

export default function Service() {
  const { t } = useTranslation();

  return (
    <section className="home-service">
      <div className="container">
        <h2 className="home-service-title">{t("home.service.title")}</h2>
        <div className="home-service-list">
          <div className="home-service-list-item">
            <img src={item1} alt="" className="home-service-list-item-img" />
            <div className="home-service-list-item-title">
              <p>{t("home.service.item1")}</p>
            </div>
          </div>
          <div className="home-service-list-item">
            <img src={item2} alt="" className="home-service-list-item-img" />
            <div className="home-service-list-item-title">
              <p>{t("home.service.item2")}</p>
            </div>
          </div>
          <div className="home-service-list-item">
            <img src={item3} alt="" className="home-service-list-item-img" />
            <div className="home-service-list-item-title">
              <p>{t("home.service.item3")}</p>
            </div>
          </div>
          <div className="home-service-list-item">
            <img src={item4} alt="" className="home-service-list-item-img" />
            <div className="home-service-list-item-title">
              <p>{t("home.service.4")}</p>
            </div>
          </div>
          <div className="home-service-list-item">
            <img src={item5} alt="" className="home-service-list-item-img" />
            <div className="home-service-list-item-title">
              <p>{t("home.service.item5")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
