import { Link } from 'react-router-dom';
import HeroCarousel from '../components/Carousel/HeroCarousel';
import { companyInfo, restaurants } from '../data/restaurants';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <HeroCarousel />

      {/* Welcome Section */}
      <section className="welcome-section section">
        <div className="container">
          <h2 className="section-title">Welcome to {companyInfo.name}</h2>
          <p className="section-subtitle">
            {companyInfo.tagline}. We proudly operate {restaurants.length} distinctive restaurant brands,
            each offering unique culinary experiences that celebrate diverse cuisines and cultures.
          </p>
          <div className="welcome-features">
            <div className="feature">
              <div className="feature-number">{restaurants.length}</div>
              <div className="feature-label">Restaurant Brands</div>
            </div>
            <div className="feature">
              <div className="feature-number">5+</div>
              <div className="feature-label">Cuisine Types</div>
            </div>
            <div className="feature">
              <div className="feature-number">100%</div>
              <div className="feature-label">Commitment to Quality</div>
            </div>
          </div>
          <Link to="/our-brands" className="btn btn-primary">
            Explore Our Brands
          </Link>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="about-preview section" style={{ backgroundColor: 'var(--accent-color)' }}>
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <h2>Our Commitment to Excellence</h2>
              <p>
                At BlueCilantro Hospitality Group, we believe that great food brings people together.
                Our portfolio of restaurants spans from authentic Italian street food to traditional
                Indian cuisine, from beloved breakfast destinations to premium steakhouses.
              </p>
              <p>
                Each of our brands is carefully curated to deliver exceptional dining experiences,
                combining quality ingredients, passionate service, and welcoming atmospheres.
              </p>
              <Link to="/vision" className="btn btn-outline-primary">
                Learn More About Our Vision
              </Link>
            </div>
            <div className="about-image">
              <div className="image-placeholder">
                <span>BC</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
