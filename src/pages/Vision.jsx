import { FaUtensils, FaHeart, FaGlobe, FaUsers, FaLeaf, FaStar } from 'react-icons/fa';
import './Vision.css';

const Vision = () => {
  return (
    <div className="vision-page page-container">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Our Vision</h1>
          <p className="page-description">
            Building a future where every meal is a memorable experience that
            brings people together and celebrates the world's diverse culinary traditions.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section section">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text">
              <span className="section-label">Our Mission</span>
              <h2>Creating Extraordinary Dining Experiences</h2>
              <p>
                At BlueCilantro Hospitality Group, our mission is to enrich lives through
                exceptional food, warm hospitality, and meaningful connections. We are committed
                to bringing the world's best culinary traditions to our communities while
                maintaining the highest standards of quality, service, and sustainability.
              </p>
              <p>
                We believe that every meal is an opportunity to create lasting memories.
                Through our diverse portfolio of restaurant brands, we offer something for
                everyone - from casual family dining to sophisticated culinary adventures.
              </p>
            </div>
            <div className="mission-icon">
              <FaUtensils />
            </div>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="vision-statement section" style={{ backgroundColor: 'var(--primary-color)' }}>
        <div className="container">
          <div className="vision-quote">
            <h2>"To be the leading hospitality group that celebrates culinary diversity
                and creates unforgettable dining experiences for every guest."</h2>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="core-values section" style={{ backgroundColor: 'var(--accent-color)' }}>
        <div className="container">
          <h2 className="section-title">What We Stand For</h2>
          <p className="section-subtitle">
            Our values guide every decision we make and every dish we serve.
          </p>
          <div className="values-grid">
            <div className="value-item">
              <div className="value-icon-box">
                <FaStar />
              </div>
              <h3>Quality First</h3>
              <p>We never compromise on the quality of our ingredients, service, or hospitality.</p>
            </div>
            <div className="value-item">
              <div className="value-icon-box">
                <FaGlobe />
              </div>
              <h3>Cultural Celebration</h3>
              <p>We honor and celebrate diverse culinary traditions from around the world.</p>
            </div>
            <div className="value-item">
              <div className="value-icon-box">
                <FaUsers />
              </div>
              <h3>Community Focus</h3>
              <p>We are dedicated to building strong relationships within our communities.</p>
            </div>
            <div className="value-item">
              <div className="value-icon-box">
                <FaHeart />
              </div>
              <h3>Passion & Care</h3>
              <p>Every dish is prepared with passion and served with genuine care.</p>
            </div>
            <div className="value-item">
              <div className="value-icon-box">
                <FaLeaf />
              </div>
              <h3>Sustainability</h3>
              <p>We are committed to sustainable practices that protect our planet.</p>
            </div>
            <div className="value-item">
              <div className="value-icon-box">
                <FaUtensils />
              </div>
              <h3>Innovation</h3>
              <p>We continuously evolve our offerings while respecting culinary traditions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="goals-section section">
        <div className="container">
          <h2 className="section-title">Our Goals</h2>
          <p className="section-subtitle">
            Where we're headed and what we're working towards.
          </p>
          <div className="goals-grid">
            <div className="goal-card">
              <span className="goal-number">01</span>
              <h3>Expand Our Reach</h3>
              <p>
                Grow our portfolio of restaurant brands across Canada while maintaining
                the quality and authenticity that defines each concept.
              </p>
            </div>
            <div className="goal-card">
              <span className="goal-number">02</span>
              <h3>Nurture Talent</h3>
              <p>
                Invest in our team members' growth and development, creating
                pathways for careers in the hospitality industry.
              </p>
            </div>
            <div className="goal-card">
              <span className="goal-number">03</span>
              <h3>Sustainable Practices</h3>
              <p>
                Implement environmentally responsible practices across all our
                operations to minimize our footprint.
              </p>
            </div>
            <div className="goal-card">
              <span className="goal-number">04</span>
              <h3>Community Impact</h3>
              <p>
                Strengthen our ties with local communities through partnerships,
                charitable initiatives, and local sourcing.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vision;
