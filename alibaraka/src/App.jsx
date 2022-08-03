import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import About from "./components/pages/About/About";
import Product from "./components/pages/Product/Product";
import Swipe from "./components/pages/Swipe/Swipe";
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
      </div>
    </>
  );
}

export default App;
