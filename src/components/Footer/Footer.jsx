import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { restaurants, companyInfo } from '../../data/restaurants';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-container">
          {/* Company Info */}
          <div className="footer-section">
            <div className="footer-logo">
              <span className="footer-logo-icon">BC</span>
              <span className="footer-logo-text">
                <span className="logo-blue">Blue</span>
                <span className="logo-cilantro">Cilantro</span>
              </span>
            </div>
            <p className="footer-tagline">{companyInfo.tagline}</p>
            <div className="footer-social">
              <a href={companyInfo.social.facebook} aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
              <a href={companyInfo.social.instagram} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href={companyInfo.social.linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
              <a href={companyInfo.social.twitter} aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/our-brands">Our Brands</Link></li>
              <li><Link to="/leadership">Leadership</Link></li>
              <li><Link to="/vision">Vision</Link></li>
              <li><Link to="/career">Careers</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Our Brands */}
          <div className="footer-section">
            <h4 className="footer-title">Our Brands</h4>
            <ul className="footer-links">
              {restaurants.map((restaurant) => (
                <li key={restaurant.id}>
                  <a href={restaurant.website} target="_blank" rel="noopener noreferrer">
                    {restaurant.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4 className="footer-title">Contact Us</h4>
            <div className="footer-contact">
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a>
              </div>
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <a href={`tel:${companyInfo.phone.replace(/\s/g, '')}`}>{companyInfo.phone}</a>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <span>
                  {companyInfo.location.city}<br />
                  {companyInfo.location.province}, {companyInfo.location.country}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-container">
          <p>&copy; {currentYear} {companyInfo.name}. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
