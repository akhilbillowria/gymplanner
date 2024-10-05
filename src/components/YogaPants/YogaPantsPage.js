// src/YogaPantsPage.js
import React, { useState } from 'react';
import Hero from './Hero';
import ProductCarousel from './ProductCarousel';
import Features from './Features';
import ProductDetails from './ProductDetails';
import CustomerReviews from './CustomerReviews';
import FAQs from './FAQs';
import SizeGuide from './SizeGuide';
import SizeGuideIcon from './SizeGuideIcon'; // Import the icon component
import '../../styles/YogaPants/YogaPantsPage.css'

const YogaPantsPage = () => {
    const [showSizeGuide, setShowSizeGuide] = useState(false);

const handleShowSizeGuide = () => setShowSizeGuide(true);
    const handleCloseSizeGuide = () => setShowSizeGuide(false);

return (

<div>
            <ProductCarousel />
  {/* Centered Button with Description */}
  <div className="size-guide-container">
    <p className="size-guide-description">
        Not sure about your size? Check our size guide for the perfect fit!
    </p>
    <button className="cta-button" onClick={handleShowSizeGuide} aria-label="View Size Guide">
        <SizeGuideIcon /> {/* Render the icon here */}
        View Size Guide
    </button>
    <div className="additional-info">
        <p className="info-text">Find the right size with our comprehensive guide.</p>
        <ul className="feature-list">
            <li>✔️ Easy-to-follow charts</li>
            <li>✔️ Measurement tips</li>
            <li>✔️ Fit recommendations</li>
        </ul>
    </div>
</div>
<SizeGuide show={showSizeGuide} handleClose={handleCloseSizeGuide} />

            <Features />            
            <ProductDetails />
            <CustomerReviews />
            <FAQs />


        </div>
    
    

); };
export default YogaPantsPage;