// src/components/MotivationalQuotes.js

import React, { useState, useEffect } from 'react';
import '../../styles/Dashboard/MotivationalQuotes.css';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';

const quotes = [
    "Believe you can and you're halfway there.",
    "Your only limit is you.",
    "Push yourself, because no one else is going to do it for you.",
    "Success is what happens after you have survived all of your mistakes.",
    "The only way to do great work is to love what you do."
];

const MotivationalQuotes = () => {
    const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
        }, 5000); // Change quote every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="motivational-quotes-container">
            <AnimatePresence mode='wait'>
                <motion.div
                    key={currentQuoteIndex}
                    className="quote-card"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.8 }}
                >
                    <FontAwesomeIcon icon={faQuoteRight} size="2x" className="quote-icon" />
                    <p className="quote-text">"{quotes[currentQuoteIndex]}"</p>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default MotivationalQuotes;
