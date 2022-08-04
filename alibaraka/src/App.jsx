import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import About from "./components/pages/About/About";
import Product from "./components/pages/Product/Product";
import Swipe from "./components/pages/Swipe/Swipe";
import Information from "./components/Information/Information";
import Blog from "./components/Blog/Blog";
import Register from "./components/Register/Register";
import Footer from "./components/Footer/Footer";

import "swiper/css/bundle";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="app">
        <Routes>
          <Route path="/" element={<Header />} />
        </Routes>
        <Routes>
          <Route path="/" element={<About />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Product />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Swipe />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Information />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Blog />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Register />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Footer />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
