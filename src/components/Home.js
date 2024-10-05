// src/components/Home.js

import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import Dashboard from "./Dashboard/Dashboard";
import FloatingMenu from './Dashboard/FloatingMenu'; // Import the FloatingMenu component
import Testimonials from './Testimonials';

const Home = () => {
  return (
    <div className="home-container">
      <FloatingMenu />
      {/* Carousel and Overlay Container */}
      <div className="carousel-overlay-container">
        {/* Carousel */}
        <Carousel className="background-carousel" interval={3000}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>

        {/* Overlay Content */}
        <div className="overlay">
          <div className="content text-center">
            <h1 className="display-4">Welcome to Gym Planner</h1>
            <p className="lead">Your journey to fitness starts here. Join us today!</p>
            <Link to="/dashboard">
              <button className="gym-button">
                <span className="fire-flame"></span>
                <span className="fire-flame"></span>
                <span className="fire-flame"></span>
                <span className="fire-flame"></span>
                Go to Dashboard<i className="animation"></i>
              </button>
            </Link>
          </div>
        </div>
      </div>    
      {/* Dashboard Section */}
      <div className="dashboard-section">
        <Dashboard />
      </div>
      <Testimonials/>
    </div>
  );
};

export default Home;
