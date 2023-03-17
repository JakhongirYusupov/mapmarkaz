import "./Content.scss";
import { useTranslation } from 'react-i18next';
import { CiSearch } from 'react-icons/ci';
import { FiDownload } from 'react-icons/fi';
import { AiOutlineEye } from "react-icons/ai";
import { IoIosArrowDown } from 'react-icons/io';
import { useState } from "react";

export default function Content() {
  const { t } = useTranslation();
  const [activeElonBar, setactiveElonBar] = useState(null);

  return (
    <section className="home-content">
      <div className="container">
        <div className="home-content-finance">
          <h2 className="home-content-title">{t("home.content.finance.title")}</h2>
          <div className="home-content-finance-action">
            <div className="home-content-finance-action-date">
              <div className="home-content-finance-action-date-year">
                <span className="home-content-finance-action-date-title" >{t("home.content.finance.year")}</span>
                <select name="" id="">
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                  <option value="2020">2020</option>
                </select>
              </div>
              <div className="home-content-finance-action-date-kvartal">
                <span className="home-content-finance-action-date-title">{t("home.content.finance.kvartal")}</span>
                <div className="home-content-finance-action-date-kvartal-pagination">
                  <div className="home-content-finance-action-date-kvartal-pagination-item"><span>1</span></div>
                  <div className="home-content-finance-action-date-kvartal-pagination-item"><span>2</span></div>
                  <div className="home-content-finance-action-date-kvartal-pagination-item"><span>3</span></div>
                  <div className="home-content-finance-action-date-kvartal-pagination-item"><span>4</span></div>
                  <div className="home-content-finance-action-date-kvartal-pagination-search">
                    <span>{t("home.content.finance.search")}</span>
                    <CiSearch className="home-content-finance-action-date-kvartal-pagination-search-icon" />
                  </div>
                </div>
              </div>
            </div>
            <div className="home-content-finance-action-border"></div>
            <div className="home-content-finance-action-sendFile">
              <div className="home-content-finance-action-sendFile-title">
                <p>{t("home.content.finance.filepdf")}</p>
              </div>
              <div className="home-content-inputs">
                <div className="home-content-sendInput">
                  <label htmlFor="sendFile">
                    <span>{t("home.content.download")}</span>
                    <FiDownload className="home-content-sendInput-icon" />
                  </label>
                  <input type="file" id="sendFile" />
                </div>
                <button className="home-content-seeButton">
                  <span>{t("home.content.see")}</span>
                  <AiOutlineEye className="home-content-seeButton-icon" />
                </button>
              </div>
            </div>
          </div>

        </div>
        <div className="home-content-elon">
          <h2 className="home-content-title">{t("home.content.elon.title")}</h2>
          <div className="home-content-finance-action  home-content-elon-item"
            style={activeElonBar === 1 ? { height: "182px" } : null}>
            <h3 className="home-content-elon-title"
              onClick={() => setactiveElonBar((el) => el === 1 ? null : 1)} >
              <span>{t("home.content.elon.item1")}</span>
              <IoIosArrowDown className="home-content-elon-title-arrowIcon"
                style={activeElonBar === 1 ? { transform: "rotate(180deg)" } : null} />
            </h3>
            <div className="home-content-inputs">
              <div className="home-content-sendInput">
                <label htmlFor="sendFile">
                  <span>{t("home.content.download")}</span>
                  <FiDownload className="home-content-sendInput-icon" />
                </label>
                <input type="file" id="sendFile" />
              </div>
              <button className="home-content-seeButton">
                <span>{t("home.content.see")}</span>
                <AiOutlineEye className="home-content-seeButton-icon" />
              </button>
            </div>
          </div>
          <div className="home-content-finance-action  home-content-elon-item"
            style={activeElonBar === 2 ? { height: "182px" } : null}>
            <h3 className="home-content-elon-title"
              onClick={() => setactiveElonBar((el) => el === 2 ? null : 2)} >
              <span>{t("home.content.elon.item2")}</span>
              <IoIosArrowDown className="home-content-elon-title-arrowIcon"
                style={activeElonBar === 2 ? { transform: "rotate(180deg)" } : null} />
            </h3>
            <div className="home-content-inputs">
              <div className="home-content-sendInput">
                <label htmlFor="sendFile">
                  <span>{t("home.content.download")}</span>
                  <FiDownload className="home-content-sendInput-icon" />
                </label>
                <input type="file" id="sendFile" />
              </div>
              <button className="home-content-seeButton">
                <span>{t("home.content.see")}</span>
                <AiOutlineEye className="home-content-seeButton-icon" />
              </button>
            </div>
          </div>
          <div className="home-content-finance-action  home-content-elon-item"
            style={activeElonBar === 3 ? { height: "182px" } : null}>
            <h3 className="home-content-elon-title"
              onClick={() => setactiveElonBar((el) => el === 3 ? null : 3)} >
              <span>{t("home.content.elon.item3")}</span>
              <IoIosArrowDown className="home-content-elon-title-arrowIcon"
                style={activeElonBar === 3 ? { transform: "rotate(180deg)" } : null} />
            </h3>
            <div className="home-content-inputs">
              <div className="home-content-sendInput">
                <label htmlFor="sendFile">
                  <span>{t("home.content.download")}</span>
                  <FiDownload className="home-content-sendInput-icon" />
                </label>
                <input type="file" id="sendFile" />
              </div>
              <button className="home-content-seeButton">
                <span>{t("home.content.see")}</span>
                <AiOutlineEye className="home-content-seeButton-icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
