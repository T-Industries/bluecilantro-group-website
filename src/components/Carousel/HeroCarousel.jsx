import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { restaurants } from '../../data/restaurants';
import './HeroCarousel.css';

const HeroCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="hero-carousel">
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        interval={2000}
        pause="hover"
        indicators={true}
        controls={true}
        fade
      >
        {restaurants.map((restaurant) => (
          <Carousel.Item key={restaurant.id}>
            <div
              className="carousel-slide"
              style={{ backgroundImage: `url(${restaurant.image})` }}
            >
              <div className="carousel-overlay"></div>
              <div className="carousel-content">
                <div className="carousel-logo-container">
                  <img
                    src={restaurant.logo}
                    alt={`${restaurant.name} logo`}
                    className="carousel-logo"
                  />
                </div>
                <Carousel.Caption className="carousel-caption-custom">
                  <h2 className="carousel-title">{restaurant.name}</h2>
                  <p className="carousel-cuisine">{restaurant.cuisine}</p>
                  <p className="carousel-description">{restaurant.description}</p>
                  <a
                    href={restaurant.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="carousel-btn"
                  >
                    Visit Website
                  </a>
                </Carousel.Caption>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
