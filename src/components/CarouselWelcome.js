import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import '../styles/CarouselWelcome.css';

const CarouselWelcome = () => {
  const carouselImages = [
    'https://png.pngtree.com/thumb_back/fh260/back_our/20190628/ourmid/pngtree-carousel-map-image_279780.jpg',
  ];

  return (
    <div className="carousel-welcome">
      <Carousel controls={false} indicators={false} interval={5000}>
        {carouselImages.map((image, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={image}
              alt={`Slide ${index + 1}`}
            />
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="overlay">
        <div className="content">
          <h1>Welcome to FitnessApp</h1>
          <p>Your journey to a healthier lifestyle starts here</p>
          
          <div className="button-group">
            <Link to="/login" className="btn btn-primary">Login</Link>
            <Link to="/signup" className="btn btn-secondary">Sign Up</Link>
            <Link to="/about" className="btn btn-info">Learn More</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselWelcome;