import { useTranslation } from "react-i18next";
import logo from "../../assets/images/footer-logo.svg";
import napa from "../../assets/images/footer-napa.svg";
import { IoIosArrowUp } from 'react-icons/io';
import "./Footer.scss";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <div className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-top-wrapper">
            <div className="footer-top-logo">
              <img className="footer-top-logo-img" src={logo} alt="logo" />
              <p className="footer-top-logo-desc">{t("footer.desc")}</p>
            </div>
            <div className="footer-top-navs">
              <nav className="footer-top-nav">
                <h4 className="footer-top-nav-title">{t("footer.contact.title")}</h4>
                <ul className="footer-top-nav-list">
                  <li>
                    <a className="footer-top-nav-list-item-link" href="tel:+998712331737">
                      <span>{t("footer.contact.item1")} +998 71 233-17-37</span>
                    </a>
                  </li>
                  <li>
                    <a className="footer-top-nav-list-item-link" href="tel:+998712334344">
                      <span>{t("footer.contact.item2")} +998 71 233-43-44</span>
                    </a>
                  </li>
                  <li>
                    <a className="footer-top-nav-list-item-link" href="tel:+998993534922">
                      <span>{t("footer.contact.item3")} +998 99 353-49-22</span>
                    </a>
                  </li>
                  <a className="footer-top-nav-list-item-link" href="mailto:mapmarkaz@umail.uz"><span>mapmarkaz@umail.uz</span></a>
                  <li>
                    <p className="footer-top-nav-list-item-link">
                      <span>{t("footer.contact.item4")}</span>
                    </p>
                  </li>
                </ul>
              </nav>
              <nav className="footer-top-nav">
                <h4 className="footer-top-nav-title">{t("footer.location.title")}</h4>
                <ul className="footer-top-nav-list footer-top-nav-list-location">
                  <li className="footer-top-nav-list-item-link">
                    <span>{t("footer.location.item1")}</span>
                    <span>{t("footer.location.item1_1")}</span>
                  </li>
                  <li className="footer-top-nav-list-item-link">
                    <span>{t("footer.location.item2")}</span>
                  </li>
                  <li className="footer-top-nav-list-item-link">
                    <span>{t("footer.location.item3")}</span>
                  </li>
                  <li className="footer-top-nav-list-item-link">
                    <span>{t("footer.location.item4")}</span>
                  </li>
                  <li className="footer-top-nav-list-item-link">
                    <span>{t("footer.location.item5")}</span>
                  </li>
                  <li className="footer-top-nav-list-item-link">
                    <a href="#">{t("footer.location.link")}</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-wrapper">
            <div className="footer-bottom-desc">{t("footer.bottom_desc")}</div>
            <div className="footer-bottom-scrollTop"
              onClick={() => window.scrollTo(0, 0)}>
              <IoIosArrowUp className="footer-bottom-scrollTop-icon" />
            </div>
            <img src={napa} alt="" className="footer-bottom-napa" />
          </div>
        </div>
      </div>
    </div>
  )
}
