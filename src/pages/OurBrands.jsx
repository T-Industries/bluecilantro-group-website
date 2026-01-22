import { Link } from 'react-router-dom';
import RestaurantCard from '../components/RestaurantCard/RestaurantCard';
import { restaurants } from '../data/restaurants';
import './OurBrands.css';

const OurBrands = () => {
  return (
    <div className="our-brands-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <span className="page-label">Our Portfolio</span>
          <h1 className="page-title">
            Distinctive <em>Dining</em> Destinations
          </h1>
          <p className="page-description">
            Discover our family of restaurants, each offering unique culinary experiences
            that celebrate diverse cuisines and cultures from around the world.
          </p>
        </div>
      </section>

      {/* Brands Grid */}
      <section className="brands-section">
        <div className="brands-grid">
          {restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="brands-cta">
        <div className="container">
          <span className="cta-label">Join Us</span>
          <h2>Interested in Joining <em>Our Family?</em></h2>
          <p>We're always looking for passionate individuals who share our commitment to culinary excellence.</p>
          <Link to="/career" className="btn btn-light">
            View Career Opportunities
          </Link>
        </div>
      </section>
    </div>
  );
};

export default OurBrands;
