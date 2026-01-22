import { Link } from 'react-router-dom';
import HeroCarousel from '../components/Carousel/HeroCarousel';
import { companyInfo, restaurants } from '../data/restaurants';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <HeroCarousel />

      {/* Welcome Section */}
      <section className="welcome-section">
        <div className="welcome-container">
          <div className="welcome-header">
            <span className="welcome-label">Welcome</span>
            <h2 className="welcome-title">
              Creating <em>Extraordinary</em> Dining Experiences
            </h2>
            <p className="welcome-subtitle">
              We proudly operate {restaurants.length} distinctive restaurant brands,
              each offering unique culinary experiences that celebrate diverse cuisines and cultures.
            </p>
          </div>

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
              <div className="feature-label">Commitment</div>
            </div>
          </div>

          <div className="welcome-cta">
            <Link to="/our-brands" className="btn btn-primary">
              <span>Explore Our Restaurants</span>
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="about-preview">
        <div className="about-grid">
          <div className="about-image-side">
            <div className="about-image-wrapper">
              <div className="image-placeholder">
                <img
                  src="/BlueCilantroLogo.png"
                  alt="BlueCilantro Hospitality Group"
                  className="placeholder-logo"
                />
              </div>
            </div>
          </div>
          <div className="about-content-side">
            <div className="about-content">
              <span className="about-label">Our Story</span>
              <h2 className="about-title">
                A Commitment to <em>Excellence</em>
              </h2>
              <p className="about-text">
                At BlueCilantro Hospitality Group, we believe that great food brings people together.
                Our portfolio spans from authentic Italian street food to traditional
                Indian cuisine, from beloved breakfast destinations to premium steakhouses.
              </p>
              <p className="about-text">
                Each of our brands is carefully curated to deliver exceptional dining experiences,
                combining quality ingredients, passionate service, and welcoming atmospheres.
              </p>
              <div className="about-cta">
                <Link to="/vision" className="btn-ghost">
                  Discover Our Vision
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
