import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/images/artscape_logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="topBar">
      <Link to="/"> <img src={logo} className="artscape_logo" alt="ArtScape_logo" /> </Link>

      <nav className={`mainMenu ${menuOpen ? "open" : ""}`}>
        <Link to="aboutUs" className="mainMenu-item" onClick={() => setMenuOpen(false)}>About Us</Link>
        <Link to="products" className="mainMenu-item" onClick={() => setMenuOpen(false)}>Products</Link>
        <Link to="accessories" className="mainMenu-item" onClick={() => setMenuOpen(false)}>Accessories</Link>
        <Link to="gallery" className="mainMenu-item" onClick={() => setMenuOpen(false)}>Gallery</Link>
      </nav>

      <Link to="contactUs" className="contactus">Contact Us</Link>

      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes size={30} color="white" /> : <FaBars size={30} color="white" />}
      </button>
      
    </header>
  );
};

export default Header;
