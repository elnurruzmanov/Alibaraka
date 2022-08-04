import React from "react";
import "./Blog.css";

import { Link } from "react-router-dom";

import Photo from "../images/new-img.png";

const Blog = () => {
  return (
    <>
      <div className="Blog">
        <div className="container">
          <div className="Blog-info">
            <h3 className="blog-title">How our client made 10x revenue</h3>
            <img src={Photo} alt="" className="new-photo" />
          </div>
          <div className="more-info">
            <h4 className="more-infos">
              "Bugungi kunda oziq-ovqat xavfsizligi butun dunyoda eng dolzarb
              muammoga aylanib bormoqda."
            </h4>
            <p className="more-text">
              Issiqxonalar aholi bandligini ta’minlash va mahsulot eksport
              qilishning katta manbai. Issiqxonalarni ko‘paytirish uchun
              tadbirkorlarning keng doirasini qiziqtirish, ularga har tomonlama
              yordam berish zarur.
            </p>
            <p className="more-infos1">Sh.Mirziyoyev</p>
          </div>
          <div className="Blog-stories">
            <h1 className="stories-info">Other successful stories</h1>
            <div className="stories-successful">
              <p className="stories-infos">
                Issiqxona uchun joy tanlashda asosiy fikrlar
              </p>
              <p className="stories-text">
                Issiqxona uchun maqbul joyni tanlashda yaxshi...
              </p>
              <Link to="/" className="stories-link">
                Ko'proq ma'lumot
              </Link>
            </div>
            <div className="stories-successful">
              <p className="stories-infos">
                Issiqxonaning joylashuvi uchun joyni to'g'ri tanlash
              </p>
              <p className="stories-text">
                Yozgi uy yoki bog'ning qaysi egasi issiqxonani...
              </p>
              <Link to="/" className="stories-link">
                Ko'proq ma'lumot
              </Link>
            </div>
            <div className="stories-successful">
              <p className="stories-infos">
                Issiqxonani qurish uchun qanday material bo'lishi kerak?
              </p>
              <p className="stories-text">
                Eng yaxshi variant quyidagi xususiyatlarga ega: m...
              </p>
              <div className="stories-links">
                <Link to="/" className="stories-link">
                  Ko'proq ma'lumot
                </Link>
                <button className="links-button">Ko'proq</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
