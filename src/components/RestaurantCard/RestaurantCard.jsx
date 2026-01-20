import { FaExternalLinkAlt } from 'react-icons/fa';
import './RestaurantCard.css';

const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="restaurant-card">
      <div
        className="card-image"
        style={{ backgroundImage: `url(${restaurant.image})` }}
      >
        <div className="card-overlay" style={{ backgroundColor: `${restaurant.color}CC` }}></div>
      </div>
      <div className="card-body">
        <span className="card-cuisine">{restaurant.cuisine}</span>
        <h3 className="card-title">{restaurant.name}</h3>
        <p className="card-description">{restaurant.description}</p>
        <a
          href={restaurant.website}
          target="_blank"
          rel="noopener noreferrer"
          className="card-link"
        >
          Visit Website <FaExternalLinkAlt />
        </a>
      </div>
    </div>
  );
};

export default RestaurantCard;
