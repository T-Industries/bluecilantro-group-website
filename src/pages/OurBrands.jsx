import RestaurantCard from '../components/RestaurantCard/RestaurantCard';
import { restaurants } from '../data/restaurants';
import './OurBrands.css';

const OurBrands = () => {
  return (
    <div className="our-brands-page page-container">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Our Restaurants</h1>
          <p className="page-description">
            Discover our family of restaurants, each offering unique culinary experiences
            that celebrate diverse cuisines and cultures from around the world.
          </p>
        </div>
      </section>

      {/* Brands Grid */}
      <section className="brands-section section">
        <div className="container">
          <div className="brands-grid">
            {restaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="brands-cta">
        <div className="container">
          <h2>Interested in Joining Our Family?</h2>
          <p>We're always looking for passionate individuals to join our team.</p>
          <a href="/career" className="btn btn-primary">
            View Career Opportunities
          </a>
        </div>
      </section>
    </div>
  );
};

export default OurBrands;
