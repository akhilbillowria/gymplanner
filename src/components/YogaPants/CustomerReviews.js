import React from 'react';
import Slider from 'react-slick';
import '../../styles/YogaPants/CustomerReviews.css'; // Import styles

// Sample review data
const reviews = [
    { id: 1, name: "Jane Doe", rating: 5, comment: "Absolutely love these pants! So comfortable.", profilePic: "https://picsum.photos/id/101/50" },
    { id: 2, name: "John Smith", rating: 4, comment: "Great fit, but would love more color options.", profilePic: "https://picsum.photos/id/102/50" },
    { id: 3, name: "Emily Johnson", rating: 5, comment: "Best yoga pants I've ever owned!", profilePic: "https://picsum.photos/id/103/50" },
    { id: 4, name: "Michael Brown", rating: 4, comment: "Very stylish and comfortable for workouts.", profilePic: "https://picsum.photos/id/104/50" },
    { id: 5, name: "Sarah Davis", rating: 5, comment: "Love the fabric and fit!", profilePic: "https://picsum.photos/id/105/50" },];

const CustomerReviews = () => {
    const settings = {
        dots: true, // Show dots for navigation
        infinite: true, // Infinite loop sliding
        speed: 500, // Transition speed
        slidesToShow: 3, // Number of slides to show at a time
        slidesToScroll: 1, // Number of slides to scroll
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1, // Show 1 slide on smaller screens
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2, // Show 2 slides on medium screens
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="customer-reviews">
            <h2>Customer Reviews</h2>
            <Slider {...settings}>
                {reviews.map(review => (
                    <div key={review.id} className="review-card">
                        <div className="review-header">
                            <img src={review.profilePic} alt={review.name} className="profile-pic" />
                            <div>
                                <h4 className="review-name">{review.name}</h4>
                                <p className="review-rating">Rating: {review.rating} ⭐</p>
                            </div>
                        </div>
                        <p className="review-comment">{review.comment}</p>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default CustomerReviews;
