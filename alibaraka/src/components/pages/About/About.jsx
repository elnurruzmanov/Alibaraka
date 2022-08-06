import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

import Slide from "react-reveal/Slide";

//images
import Greenhouse from "../../images/greenhouse.png";
import Greenhouse2 from "../../images/greenhouse2.png";

const About = () => {
  return (
    <>
      <div className="About">
        <div className="container">
          <Slide left>
            <div className="about_title">
              <h1 className="about_info">BIZ HAQIMIZDA</h1>
              <p className="about-text">
                Bizning kompaniya 2016-yilda tashkil topib, ko'plab kishilarda
                issiqxona qurishdagi mahsulotlari yetkazishda va qurishda katta
                xizmat qilib keladi. Sohadagi katta tajribamiz sabab
                mijozlarimiz ishonchini egallab, yanada rivojlanishda davom
                etmoqdamiz.
              </p>
              <div className="about-links">
                <Link to="/" className="about-link">
                  KO'PROQ
                </Link>
                <Link to="/" className="about-link">
                  BIZNING YOUTUBE
                </Link>
              </div>
            </div>
          </Slide>
          <div className="About-images">
            <Slide right>
            <img src={Greenhouse} alt="" className="greenhouse" />
            <img src={Greenhouse2} alt="" className="greenhouse2" />
            </Slide>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
