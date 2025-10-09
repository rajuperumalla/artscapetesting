import { Routes, Route } from "react-router-dom";

import Header from './structure/Header'
import Home from './structure/Home'
import Footer from './structure/Footer'
import Products from './components/Products';
import Pagenotfound from './components/Pagenotfound';
import ScrollToTop from "./structure/ScrollToTop";

const App = () => {

  return (
    <>
      <Header/>
      <ScrollToTop/>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="aboutUs" element={<Pagenotfound/>} />
          <Route path="gallery" element={<Pagenotfound/>} />
          <Route path="contactUs"  element={<Pagenotfound/>} />
          <Route path="accessories" element={<Pagenotfound/>} />
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
