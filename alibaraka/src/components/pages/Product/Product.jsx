import React, { useEffect, useState } from "react";
import "./Product.css";
import { Link } from "react-router-dom";

import Bounce from "react-reveal/Bounce";
import Slide from "react-reveal/Slide";
//images
import Plyonka from "../../images/plyonka.png";
import door from "../../images/door.png";
import Irrigation from "../../images/irrigation.png";
import Condisioner from "../../images/condisioner.png";
import Condisioner2 from "../../images/condisioner2.png";
import Aksessuars from "../../images/aksessuars.png";
import Cloud from "../../images/Cloud.png";

const Product = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://api.alibaraka.com/api/categories/")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <>
      {products.length > 0 && (
        <ul id="explore">
          {products
            .filter((e) => e.image)
            .map((product, i) => (
              <li key={i} id={product.id}>
                <Link
                  id={product.id}
                  to={`/categoryId=${product.id}`}
                  onClick={() => window.scrollTo({ top: 0 })}
                ></Link>
              </li>
            ))}
        </ul>
      )}
      <div className="Product">
        <div className="container">
          <div className="product-info">
            <h1 className="Product-title">BIZNING MAHSULOTLARIMIZ</h1>
            <p className="product-text">
              Kompaniyamiz sizning issiqxonangiz uchun barcha zaruriy
              mahsulotlarning eng sifatlisini taqdim etadi. Katta tajribamiz va
              halol mehnatimiz orqali sizga samarali xizmat ko'rsatamiz.
            </p>
          </div>
          <ul className="products-list">
            <Slide left>
              <li className="product-item">
                <Link to={"/product"} className="product-link">
                  <img src={Plyonka} alt="" className="cellophane-img" />
                  <div className="product-titles">
                    <h3 className="product-title">Plyonka turlari</h3>
                    <p className="text">
                      Et magni et ea unde tempore. Corrupti quia adipisci qui
                      dicta sint.
                    </p>
                  </div>
                </Link>
              </li>
            </Slide>
            <Slide right>
              <li className="product-item">
                <Link to={"/product"} className="product-link">
                  <img src={door} alt="" className="cellophane-img" />
                  <div className="product-titles">
                    <h3 className="product-title">Asosiy Zajim turlari</h3>
                    <p className="text">
                      Et magni et ea unde tempore. Corrupti quia adipisci qui
                      dicta sint.
                    </p>
                  </div>
                </Link>
              </li>
            </Slide>
            <Slide left>
              <li className="product-item">
                <Link to={"/product"} className="product-link">
                  <img src={Irrigation} alt="" className="cellophane-img" />
                  <div className="product-titles">
                    <h3 className="product-title">
                      Tomchilab sug’orish tizimi
                    </h3>
                    <p className="text">
                      Et magni et ea unde tempore. Corrupti quia adipisci qui
                      dicta sint.
                    </p>
                  </div>
                </Link>
              </li>
            </Slide>
            <Slide right>
              <li className="product-item">
                <Link to={"/product"} className="product-link">
                  <img src={Condisioner} alt="" className="cellophane-img" />
                  <div className="product-titles">
                    <h3 className="product-title">
                      ISSIQXONANING sovutish TIZIMI
                    </h3>
                    <p className="text">
                      Et magni et ea unde tempore. Corrupti quia adipisci qui
                      dicta sint.
                    </p>
                  </div>
                </Link>
              </li>
            </Slide>
            <Slide left>
              <li className="product-item">
                <Link to={"/product"} className="product-link">
                  <img src={Condisioner2} alt="" className="cellophane-img" />
                  <div className="product-titles">
                    <h3 className="product-title">
                      ISSIQXONANING ISITISH TIZIMI
                    </h3>
                    <p className="text">
                      Et magni et ea unde tempore. Corrupti quia adipisci qui
                      dicta sint.
                    </p>
                  </div>
                </Link>
              </li>
            </Slide>
            <Slide right>
              <li className="product-item">
                <Link to={"/product"} className="product-link">
                  <img src={Aksessuars} alt="" className="cellophane-img" />
                  <div className="product-titles">
                    <h3 className="product-title">QO’shimcha aksessuarlar</h3>
                    <p className="text">
                      Et magni et ea unde tempore. Corrupti quia adipisci qui
                      dicta sint.
                    </p>
                  </div>
                </Link>
              </li>
            </Slide>
          </ul>
          <img src={Cloud} alt="" className="cloud-image" />
        </div>
      </div>
    </>
  );
};

export default Product;
