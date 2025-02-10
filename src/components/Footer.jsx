import './FooterStyles.css'
// import {BsArrowBarUp} from "react-icons/bs"
import {FaLinkedin,FaTwitter,FaInstagram,FaFacebook} from "react-icons/fa"

export default function Footer() {
    return (
      <footer>
        <div className="footer-container">
          <div className="footer-section about">
            <h2>Rental Manager</h2>
            <p>Effortlessly manage property rentals, payments, and tenants.</p>
          </div>
  
          <div className="footer-section links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/properties">Properties</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/faq">FAQs</a></li>
            </ul>
          </div>
  
          <div className="footer-section contact">
            <h3>Contact Us</h3>
            <p>Email: support@rentalmanager.com</p>
            <p>Phone: +123 456 7890</p>
          </div>
  
          <div className="footer-section social">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedin /></a>
            </div>
          </div>
        </div>
  
        <div className="footer-bottom">
          <p>&copy; 2025 Rental Manager. All rights reserved.</p>
        </div>
      </footer>
    );
  }
  