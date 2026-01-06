import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/images/artscape_logo.png";
import ThemeToggle from "../components/ThemeToggle";

const Header = ({ theme, toggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <img src={logo} alt="ArtScape Logo" />
        </Link>

        {/* Desktop Navigation - Neumorphic Buttons */}
        <nav className="nav-menu">
          <Link to="aboutUs" className="nav-link">About Us</Link>
          <Link to="products" className="nav-link">Products</Link>
          <Link to="accessories" className="nav-link">Accessories</Link>
          <Link to="gallery" className="nav-link">Gallery</Link>
          {/* Removed Contact Us from here as requested */}
        </nav>

        {/* Header Actions - Contact in Single Row */}
        <div className="header-actions">
          <Link to="contactUs" className="cta-btn neu-button">
            Contact Us
          </Link>

          <button className="mobile-menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-nav ${menuOpen ? "open" : ""}`}>
        <Link to="aboutUs" className="mobile-link" onClick={() => setMenuOpen(false)}>About Us</Link>
        <Link to="products" className="mobile-link" onClick={() => setMenuOpen(false)}>Products</Link>
        <Link to="accessories" className="mobile-link" onClick={() => setMenuOpen(false)}>Accessories</Link>
        <Link to="gallery" className="mobile-link" onClick={() => setMenuOpen(false)}>Gallery</Link>
        <Link to="contactUs" className="mobile-link" onClick={() => setMenuOpen(false)}>Contact Us</Link>
      </div>
    </header>
  );
};

export default Header;


