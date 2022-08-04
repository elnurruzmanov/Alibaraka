import React from "react";
import "./Footer.css";

import { Link } from "react-router-dom";

import Alibaraka from "../images/alibaraka.png";
import Abba from "../images/Abba.svg";
import Abba2 from "../images/Abba.svg";
import company from "../images/companies.png";

const Footer = () => {
  return (
    <>
      <div className="Footer">
        <div className="container">
          <div className="footer-info">
            <div className="footer-address">
              <img src={Alibaraka} alt="" className="alibaraka" />
              <p className="address-text">
                Tashkent, Mustakillik St, 15 Tel: +998 99 000 00 00 E-mail:
                hello@alibaraka.com
              </p>
            </div>
            <div className="footer-about">
              <h4 className="footer-link">Korxonamiz</h4>
              <Link to="/" className="footer-links">
                Video
              </Link>
              <Link to="/" className="footer-links">
                Hamkorlarimiz
              </Link>
              <Link to="/" className="footer-links">
                Blog
              </Link>
              <Link to="/" className="footer-links">
                Aloqa
              </Link>
            </div>
            <div className="footer-product">
              <h4 className="footer-link">Mahsulotlar</h4>
              <Link to="/" className="footer-links">
                Plyonka{" "}
              </Link>
              <Link to="/" className="footer-links">
                Zajim
              </Link>
              <Link to="/" className="footer-links">
                Tomchilab sug'orish
              </Link>
              <Link to="/" className="footer-links">
                Sovutish tizimi
              </Link>
            </div>
            <div className="footer-blog">
              <h4 className="footer-link">Bloglar</h4>
              <Link to="/" className="footer-links">
                Issiqxona ventilyatsiyasi
              </Link>
              <Link to="/" className="footer-links">
                Issiqxonaning joylashuvi
              </Link>
              <Link to="/" className="footer-links">
                Issiqxona uchun joy
              </Link>
              <Link to="/" className="footer-links">
                Issiqxonna sotib olish
              </Link>
            </div>
          </div>
          <hr className="hr" />
          <div className="footer-subtext">
            <p className="subtext-text">Barcha huquqlar himoyalangan</p>
            <div className="subtext-info">
              <p className="subtext-info-text">Ishlab chiqilgan</p>
              <img src={Abba} alt="" className="Abba" />
              <img src={Abba2} alt="" className="Abba" />
            </div>
          </div>
        </div>
        <div className="companys">
          <img src={company} alt="" />
        </div>
      </div>
    </>
  );
};

export default Footer;
