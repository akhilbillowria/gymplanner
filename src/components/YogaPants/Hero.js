// src/Hero.js
import React from 'react';
import '../../styles/YogaPants/Hero.css'; // Import styles

const Hero = () => {
    const handleShopNowClick = () => {
        // Navigate to the shop section (you can implement routing later)
        window.scrollTo({
            top: document.getElementById("shop").offsetTop,
            behavior: "smooth",
        });
    };

    const handleLearnMoreClick = () => {
        // Navigate to the about section (you can implement routing later)
        window.scrollTo({
            top: document.getElementById("about").offsetTop,
            behavior: "smooth",
        });
    };

    return (
        <div className="hero">
            <div className="hero-overlay">
                <h1 className="hero-title">Elevate Your Practice</h1>
                <p className="hero-subtitle">Discover the perfect blend of comfort and style.</p>
                <div className="hero-description">
                    <p>Our yoga pants are designed for every body, providing support, flexibility, and breathability for your workouts and everyday wear.</p>
                </div>
                <div className="hero-buttons">
                    <button className="cta-button" onClick={handleShopNowClick}>Shop Now</button>
                    <button className="cta-button secondary" onClick={handleLearnMoreClick}>Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
