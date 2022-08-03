import React, { useState } from "react";
import "./Header.css";
import Navbar from "../Navbar/Navbar";

//images
import Right from "../images/Vector.png"
import circle from "../images/circle.png"
import play from "../images/play.png"
import Footer from "../images/header_footer.png"

function Header() {
  const[image, setImage] = useState()

  return (
    <>
      <header>
        <Navbar />
        <div className="container">
          <div className="header">
            <div className="header-title">
              <h1 className="header-info">Samarali issiqxona quraylik</h1>
              <p className="header-text">Bu erda kompaniyamiz haqida qisqacha ma'lumot va takliflarimizning ba'zi afzalliklari bo'ladi. Bu erda kompaniyamiz haqida qisqacha ma'lumot beriladi.</p>
              <button className="header-btn">Qo'shimcha ma'lumotlar</button>
            </div>
            <div className="header-images">
              <img src={Right} alt="" className="right-images" />
              <img src={circle} alt="" className="circle" />
              <button className="btn-right">
                <img src={play} alt="" className="play" />
              </button>
            </div>
          </div>
          <img src={Footer} alt="" className="footer" />
        </div>
      </header>
    </>
  );
}
export default Header;
