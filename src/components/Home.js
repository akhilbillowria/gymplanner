// src/components/Home.js

import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import Dashboard from "./Dashboard/Dashboard";
import FloatingMenu from './Dashboard/FloatingMenu'; // Import the FloatingMenu component
import Testimonials from './Testimonials';
import CarouselWelcome from "./CarouselWelcome";
const Home = () => {
  return (
    <div className="home-container">
            <FloatingMenu />

      <section id="home">
        <CarouselWelcome/>
      </section>
    

      {/* Dashboard Section */}
      <div className="dashboard-section">
      <section id="dashboard" className="dashboard-section">
        <Dashboard />
        </section>
      </div>
      <section id="testimonials">
        <Testimonials/>
      </section>

    </div>
  );
};

export default Home;
