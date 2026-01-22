import { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const lastScrollYRef = useRef(0);
  const mouseTimeoutRef = useRef(null);
  const isScrollingDownRef = useRef(false);

  const hideHeader = useCallback(() => {
    setIsHidden(true);
  }, []);

  const showHeader = useCallback(() => {
    setIsHidden(false);
  }, []);

  const startHideTimer = useCallback(() => {
    // Clear existing timeout
    if (mouseTimeoutRef.current) {
      clearTimeout(mouseTimeoutRef.current);
    }
    // Hide after 2 seconds of no movement
    mouseTimeoutRef.current = setTimeout(hideHeader, 2000);
  }, [hideHeader]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const lastScrollY = lastScrollYRef.current;

      // Add scrolled class when past threshold
      setIsScrolled(currentScrollY > 50);

      // Hide immediately when scrolling down
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        isScrollingDownRef.current = true;
        setIsHidden(true);
        // Clear any existing timeout
        if (mouseTimeoutRef.current) {
          clearTimeout(mouseTimeoutRef.current);
        }
      } else if (currentScrollY < lastScrollY) {
        // Show when scrolling up
        isScrollingDownRef.current = false;
        setIsHidden(false);
        // Start the hide timer
        startHideTimer();
      }

      lastScrollYRef.current = currentScrollY;
    };

    const handleMouseMove = () => {
      // Show header on mouse movement
      showHeader();
      // Start the hide timer
      startHideTimer();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Start initial timer
    startHideTimer();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      if (mouseTimeoutRef.current) {
        clearTimeout(mouseTimeoutRef.current);
      }
    };
  }, [hideHeader, showHeader, startHideTimer]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/our-brands', label: 'Our Restaurants' },
    { path: '/leadership', label: 'Leadership' },
    { path: '/vision', label: 'Vision' },
    { path: '/career', label: 'Career' },
    { path: '/contact', label: 'Contact Us' },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''} ${isHidden ? 'header-hidden' : ''}`}>
      <div className="header-container">
        <Link to="/" className="logo">
          <img src="/BlueCilantroLogo.png" alt="BlueCilantro Hospitality Group" className="logo-image" />
        </Link>

        <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.path} className="nav-item">
                <Link
                  to={link.path}
                  className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="mobile-overlay" onClick={() => setIsMobileMenuOpen(false)} />
      )}
    </header>
  );
};

export default Header;
