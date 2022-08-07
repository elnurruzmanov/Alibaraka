import React, { useState, useParams } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Category = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://api.alibaraka.com/api/product_by_category")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  var { id } = useParams();
  return (
    <>
      {products.length > 0 && (
        <div className="products-blok">
          {products
            .filter(
              (e) =>
                e.name.uz && e.cost && e.image1 && e.category === Number(id)
            )
            .map((product, i) => (
              <ul className="products-list" key={i} id={product.id}>
                <Link
                  className="pro-links"
                  to={`/categoryId=${product.category}/productId=${product.id}`}
                  onClick={() => window.scrollTo({ top: 0 })}
                >
                  <li className="products-item">
                    <img src={product.image1} alt="" className="product-img" />
                  </li>
                  <li className="products-item">
                    <h3 className="products-name">
                      {product.name_en }
                    </h3>
                  </li>
                </Link>
              </ul>
            ))}
        </div>
      )}
    </>
  );
};

export default Category;
