import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./carousel.css"; // Custom CSS
import { Link } from "react-router-dom";

const slides = [
  {
    image: "anniversary.jpg",
    title: "Anniversary Celebration",
    description:
      "Join us for a memorable celebration as we mark a beautiful milestone in our journey together. You're cordially invited to our anniversary celebration filled with love, laughter, and cherished memories. Let's come together to rejoice in the love that has grown stronger over the years. Your presence would make our special day complete. Please save the date and celebrate with us!",
  },
  {
    image: "birthday1.jpg",
    title: "Birthday Celebration",
    description:
      "Get ready to party because [Name] is turning [Age]! We're hosting a birthday bash you won't want to miss. Join us for an evening of fun, laughter, and delicious treats. Your presence would make this celebration extra special. Mark the date on your calendar and let's celebrate together!",
  },
  {
    image: "dinner1.jpeg",
    title: "Dinner",
    description:
      "Please join us for an evening of delectable cuisine, great company, and lively conversation. We're hosting a dinner gathering and would be delighted to have you as our guest. Your presence will add to the warmth of the evening. Save the date and let's savor the moments together!",
  },
  // Add more slides here
];

const CarouselComponent = () => {
  return (
    <div className="carousel-container">
      <Carousel
        autoPlay={5000}
        infiniteLoop
        showStatus={false}
        showThumbs={false}
      >
        {slides.map((slide, index) => (
          <div key={index}>
            <div className="image-container">
              <img src={slide.image} alt={` ${index}`} />
            </div>
            <div className="text-container">
              <h3>{slide.title}</h3>
              <p>{slide.description}</p>
              <Link to="/booknow">
                <button className="booking-button1">Book Now</button>
              </Link>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
