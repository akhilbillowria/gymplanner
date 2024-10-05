// src/Features.js
import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa'; // Import icons
import '../../styles/YogaPants/Features.css'; // Import styles

const allFeatures = [
    {
        title: "Eco-Friendly Material",
        description: "Crafted from recycled fabrics that reduce environmental impact.",
        icon: "🌱",
        bgColor: "#DFFFD6",
    },
    {
        title: "Moisture-Wicking",
        description: "Innovative technology keeps you dry, even during the most intense workouts.",
        icon: "💧",
        bgColor: "#B3E5FC",
    },
    {
        title: "Four-Way Stretch",
        description: "Designed to move with you, providing maximum comfort and flexibility.",
        icon: "🧘‍♀️",
        bgColor: "#FFEBA1",
    },
    {
        title: "Breathable Fabric",
        description: "Specially designed to allow airflow, keeping you cool and comfortable.",
        icon: "🌬️",
        bgColor: "#FFB2B2",
    },
    {
        title: "Stylish Design",
        description: "Fashion-forward styles that blend performance with aesthetic appeal.",
        icon: "👖",
        bgColor: "#C1C8E4",
    },
    {
        title: "Pocket Convenience",
        description: "Includes discreet pockets for your essentials, ensuring convenience on the go.",
        icon: "👜",
        bgColor: "#E6E6E6",
    },
];

const Features = () => {
    const [showMore, setShowMore] = useState(false);

    const toggleFeatures = () => {
        setShowMore(!showMore);
    };

    return (
        <div className="features-container">
            <h2 className="features-title">Why You'll Love Our Yoga Pants</h2>
            <div className="features-list">
                {allFeatures.slice(0, showMore ? allFeatures.length : 4).map((feature, index) => (
                    <div className="feature-item" key={index} style={{ backgroundColor: feature.bgColor }}>
                        <span className="feature-icon">{feature.icon}</span>
                        <div className="feature-content">
                            <h4>{feature.title}</h4>
                            <p>{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="expand-icon" onClick={toggleFeatures}>
                {showMore ? <FaMinus size={30} /> : <FaPlus size={30} />}
            </div>
        </div>
    );
};

export default Features;
