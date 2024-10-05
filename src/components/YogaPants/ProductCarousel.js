// src/ProductCarousel.js
import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import '../../styles/YogaPants/ProductCarousel.css'; // Import styles

// Sample products data
const products = [
    {
        id: 1,
        name: "Classic Yoga Pants",
        price: "$49.99",
        img: "https://www.pilatesdigest.com/wp-content/uploads/2022/08/Yoga_Pants.jpg",
        description: "Comfortable yoga pants made for every level of practice.",
    },
    {
        id: 2,
        name: "Eco-Friendly Yoga Pants",
        price: "$59.99",
        img: "https://d1nymbkeomeoqg.cloudfront.net/photos/27/72/398713_26526_XXL.webp",
        description: "Made from sustainable materials, perfect for the eco-conscious yogi.",
    },
    {
        id: 3,
        name: "Comfort Fit Yoga Pants",
        price: "$39.99",
        img: "https://www.pilatesdigest.com/wp-content/uploads/2022/08/Yoga_Pants.jpg",
        description: "Designed for ultimate comfort and flexibility.",
    },
];

const ProductCarousel = () => {
    return (

<Carousel className="product-carousel" interval={3000}>
            {products.map((product) => (
                <Carousel.Item key={product.id}>
                    <img
                        className="d-block w-100"
                        src={product.img}
                        alt={product.name}
                    />
                    <Carousel.Caption className="carousel-caption">
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p className="price">{product.price}</p>
                        <Button variant="primary">Buy Now</Button>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    
); };
export default ProductCarousel;