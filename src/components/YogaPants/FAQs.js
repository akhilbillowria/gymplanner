// src/FAQs.js
import React from 'react';
import '../../styles/YogaPants/FAQs.css'; // Import styles

const faqs = [
    { question: "What sizes do you offer?", answer: "We offer sizes S, M, L, and XL." },
    { question: "Are these pants suitable for running?", answer: "Absolutely! They are designed for both yoga and running." },
];

const FAQs = () => {
    return (

<div className="faqs">
            <h2>Frequently Asked Questions</h2>
            {faqs.map((faq, index) => (
                <div key={index} className="faq-item">
                    <h4>{faq.question}</h4>
                    <p>{faq.answer}</p>
                </div>
            ))}
        </div>
    
);};
export default FAQs;