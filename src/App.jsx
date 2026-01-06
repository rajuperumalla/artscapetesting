import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Header from './structure/Header'
import Home from './structure/Home'
import Footer from './structure/Footer'
import Products from './structure/products/Products';
import SingleProduct from "./structure/products/SingleProduct";
import Pagenotfound from './components/Pagenotfound';
import ScrollToTop from "./structure/ScrollToTop";
import Accessories from "./components/Accessories";
import AboutUs from "./components/aboutus";

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <ScrollToTop/>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="/products/:slug" element={<SingleProduct/>} />
          <Route path="aboutUs" element={<AboutUs/>} />
          <Route path="gallery" element={<Pagenotfound/>} />
          <Route path="contactUs"  element={<Pagenotfound/>} />
          <Route path="accessories" element={<Accessories/>} />
          <Route path="product" element={<Pagenotfound/>}/>
          <Route path="help" element={<Pagenotfound/>} />
          <Route path="*" element={<Pagenotfound/>} />
        </Routes>
      </main>
      <Footer/>
    </>
  )
}

export default App

