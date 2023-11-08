import React from "react";
import "./about.css";

const About = () => {
  return (
    <>
      <div className="about-container">
        <div className="headings">
          <h1>About Us</h1>
          <p>Know who we are and what we serve</p>
        </div>
        <div className="img-container">
          <img src="chef.jpg" />
        </div>
        <div className="about-text">
          <p>
            At our restaurant, you can find representatives of the most popular
            cuisines on a worldwide scale. Whether you want a usual or exotic
            dish, don’t hesitate to leaf through our diverse menu and order what
            you like. We use only healthy ingredients, thus making our meals
            suitable for people who keep an eye on their ration or follow a
            diet. Are you a diner with special dietary needs? Then, you must pay
            a visit to our top-notch restaurant and try our wholesome food.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
