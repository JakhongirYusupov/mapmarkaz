import "./Header.scss";
import logo from "../../assets/images/logo.svg";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import Action from "../EarthAction/Action";

export default function Header() {
  const { t } = useTranslation();
  const { i18n } = useTranslation();

  const changeWebsiteLang = (e) => {
    i18n.changeLanguage(e.target.value.toLowerCase());
  }

  return (
    <header className='header'>
      <div className="container">
        <div className="header-logo">
          <img src={logo} alt="error" />
        </div>
        <div className="header-links">
          <div className="header-links-wrapper">
            <div className="header-links-lang">
              <select className="header-links-lang-select" onChange={changeWebsiteLang}>
                <option value="ru">{t("header.langru")}</option>
                <option value="uz">{t("header.languz")}</option>
              </select>
            </div>
            <nav className="header-links-nav">
              <NavLink className="header-links-nav-item" to="/" style={({ isActive }) => isActive ? { "color": " #FFFFFF" } : null}>{t("header.main")}</NavLink>
              <NavLink className="header-links-nav-item" to="/about" style={({ isActive }) => isActive ? { "color": " #FFFFFF" } : null}>{t("header.about")}</NavLink>
              <NavLink className="header-links-nav-item" to="/contact" style={({ isActive }) => isActive ? { "color": " #FFFFFF" } : null}>{t("header.contact")}</NavLink>
            </nav>
          </div>
        </div>
        <Action />
      </div>

    </header>
  )
}
