import { Link } from "react-router-dom"
import { SiFacebook, SiInstagram, SiLinkedin, SiYoutube } from "react-icons/si";
import logo from "../assets/images/artscape_logo.png"
import ota from "../assets/images/OTA_logo.png"
import "./Footer.scss"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-col">
                    <h4 className="footertitle">Get To Know Us</h4>
                    <div className="footer-links">
                        <Link to="*"  className="footer-link"><div></div>About Us</Link>
                        <Link to="*" className="footer-link"><div></div>News & Blog</Link>
                        <Link to="*" className="footer-link"><div></div>Careers</Link>
                        <Link to="*" className="footer-link"><div></div>Partner With Us</Link>
                        <Link to="*" className="footer-link"><div></div>Contact Us</Link>
                    </div>
                </div>
                <div className="footer-col">
                    <h4 className="footertitle">Sand Table Collections</h4>
                    <div className="footer-links">
                        <Link to="products" className="footer-link"><div></div>Center Table</Link>
                        <Link to="products" className="footer-link"><div></div>Coffee Table</Link>
                        <Link to="products" className="footer-link"><div></div>Metal Table</Link>
                        <Link to="products" className="footer-link"><div></div>Diamond Table</Link>
                    </div>
                </div>
                <div className="footer-col">
                    <h4 className="footertitle">Social Media</h4>
                    <div className="social">
                        <a href="https://www.facebook.com/share/1MVYrAesdq/?mibextid=wwXIfr"><SiFacebook size={26} className="social-icon"/></a>  
                        <a href="https://www.instagram.com/art_scape_studio/"><SiInstagram size={26} className="social-icon"/></a>
                        <a href="https://www.linkedin.com/company/ota-innovations/"><SiLinkedin size={26} className="social-icon"/></a>
                        <a href="https://www.youtube.com/@ArtscapeStudio-techdrivenSandt"><SiYoutube size={26} className="social-icon"/></a>
                    </div> 
                </div>
                <div className="footer-col">
                    <h4 className="footertitle">Address</h4>
                    <address>OTA-Innovations Pvt Ltd,<br/>Plot No: 14, Sagar Enclave, Karmanghat, K.V.Rangareddy, Saroornagar, Telangana-500079, India</address>
                </div>
            </div>
            <div className="footer-container2">
                <Link to="/" className="logo d-block">
                    <img className="artscape_logo" src={logo} alt="logo"/>
                </Link>
                <a href="https://ota-innovations.in/">
                    <img className="ota_logo" src={ota} alt="OTA-Logo" />
                </a>
                {/* <p>&copy; Copyright 2023 <Link to="*" className="primary-hover">artscapes</Link> All Rights Reserved</p> */}
                
            </div>
        </footer>
    )
}

export default Footer
