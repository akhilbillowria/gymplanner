// src/components/Home/Testimonials.js

import React from 'react';
import '../styles/Testimonials.css';

const testimonialsData = [
  {
    id: 1,
    name: 'John Doe',
    position: 'Professional Athlete',
    photo: 'https://randomuser.me/api/portraits/men/32.jpg',
    feedback:
      'Gym Planner has transformed my training regimen. The personalized programs are top-notch!',
  },
  {
    id: 2,
    name: 'Jane Smith',
    position: 'Fitness Enthusiast',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    feedback:
      'I love the variety of exercises and the motivational tips. Keeps me consistent and motivated!',
  },
  {
    id: 3,
    name: 'Mike Johnson',
    position: 'Personal Trainer',
    photo: 'https://randomuser.me/api/portraits/men/65.jpg',
    feedback:
      'A fantastic tool for both trainers and clients. Highly recommend it for anyone serious about fitness.',
  },
  // Add more testimonials as needed
];

const Testimonials = () => {
  return (
    <div className="testimonials-section">
      <h2 className="section-title">What Our Users Say</h2>
      <div className="testimonials-container">
        <div className="testimonials-scroller">
          {[...testimonialsData, ...testimonialsData].map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <div className="testimonial-photo-container">
                <img
                  className="testimonial-photo"
                  src={testimonial.photo}
                  alt={`${testimonial.name}'s photo`}
                />
              </div>
              <div className="testimonial-content">
                <p className="feedback">"{testimonial.feedback}"</p>
                <h5 className="name">{testimonial.name}</h5>
                <p className="position">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
