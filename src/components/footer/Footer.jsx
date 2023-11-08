import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./footer.css";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

const testimonialData = [
  {
    name: "Sandeep Adhiakri",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.This is one of the best restaurants I have visited. Everything was excellent. The food was served in a very creative way. Would recommend to all.",
  },
  {
    name: "Rojan Mul",
    description:
      "This is one of the best restaurants I have visited. Everything was excellent. The food was served in a very creative way. Would recommend to all.",
  },
  {
    name: "Madhav Dhungana",
    description:
      "This is one of the best restaurants I have visited. Everything was excellent. The food was served in a very creative way. Would recommend to all.",
  },
  {
    name: "Prabhas ",
    description:
      "This is one of the best restaurants I have visited. Everything was excellent. The food was served in a very creative way. Would recommend to all.",
  },
  // Add more testimonials as needed
];
const Footer = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Change to the next slide every 5 seconds
      if (activeIndex < testimonialData.length - 1) {
        setActiveIndex(activeIndex + 1);
      } else {
        setActiveIndex(0);
      }
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [activeIndex]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (current, next) => {
      setActiveIndex(next);
    },
  };
  return (
    <>
      <div className="footer-container">
        <div className="location">
          <img src="Final Logo-01-01.png" />
          <span>Get the best dining experience with us</span>

          <div className="address">
            <h2>Address</h2>
            <p>Samakhusi,Kathmandu</p>
            <p>Nepal</p>
            <p>IL 60656894</p>
            <p>Telephone : 015896589</p>
            <p>Email : logincorps@gmail.com</p>
            <div className="icons">
              <Link>
                {" "}
                <i className="facebook">
                  <FaFacebook />
                </i>
              </Link>
              <Link>
                {" "}
                <i className="instagram">
                  <FaInstagram />
                </i>
                {""}
              </Link>
              <Link>
                {" "}
                <i className="twitter">
                  <FaTwitter />
                </i>{" "}
              </Link>
            </div>
          </div>
        </div>

        <div className="testimonials">
          <h2>What people says about us?</h2>
          <div className="testimonial-carousel">
            <Slider {...settings}>
              {testimonialData.map((testimonial, index) => (
                <div key={index} className="testimonial">
                  <h3>{testimonial.name}</h3>
                  <p>{testimonial.description}</p>
                </div>
              ))}
            </Slider>
            <div className="testimonial-dots">
              {testimonialData.map((_, index) => (
                <div
                  key={index}
                  className={`dot ${index === activeIndex ? "active" : ""}`}
                ></div>
              ))}
            </div>
          </div>
        </div>
        <div className="footer-form">
          <h2>Contact Us</h2>
          <div className="single-input">
            <p>Name</p>
            <input type="text" placeholder="Enter Your Name" />
          </div>

          <div className="single-input">
            <p>Email</p>
            <input type="text" placeholder="Enter Your Name" />
          </div>

          <div className="single-input">
            <p>Your Message here</p>
            <textarea type="text" placeholder="Enter Your Name" />
          </div>
          <div className="submit-button"> Submit </div>
        </div>
        <hr className="horizontal-line" />
        <p className="copyright">
          &copy; 2023 WebX Nepal. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
