import React from "react";
import "./Navbar.css"
import { Link } from "react-router-dom";

//icons
import Frame from "../images/Frame.png"
import Phone from "../images/phone.png"

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <img src={Frame} alt="" />
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/product" className="nav-link link1">
                Mahsulotlar
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                Haqida
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/blog" className="nav-link">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/register" className="nav-link">
                Aloqa
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/footer" className="nav-link">
                Uz
              </Link>
            </li>
          </ul>
          <ul className="phone-list">
            <li className="phone-item">
              <img src={Phone} alt="" />
            </li>
            <li className="phone-item">
              <Link to="/phone number" className="phone-number">95-004-80-90</Link>
              <Link to="/phone number" className="phone-number">94-641-40-00</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
