import React from "react";
import "./first.css";
import { motion } from "framer-motion";
import { FaPizzaSlice } from "react-icons/fa6";
const First = () => {
  return (
    <>
      <div className="first-container" id="first">
        <div className="left-container">
          <div className="tops">
            <i>
              <FaPizzaSlice style={{ color: "white" }} />
            </i>
            <p>Tasty Food Forever</p>
          </div>
          <div className="descriptions">
            <h1>
              Enjoy your food just
              <br /> how<span> You Liked It.</span>
            </h1>
            <p>
              From breakfast to dinner, parties and other events,we serve
              everything.and other events,we serve
            </p>
          </div>
          <div className="buttons">
            <div className="button1">Order Now</div>
            <div className="button2">See Menu</div>
          </div>
          <div className="last-container">
            <div className="single">
              <p>5000 +</p> <span>Customer</span>
            </div>
            <div className="single">
              <p>8000 +</p> <span>Delivery</span>
            </div>
            <div className="single">
              <p>2000 +</p> <span>Ratings</span>
            </div>
          </div>
        </div>
        <div className="right-container">
          <motion.img
            src="final pan2.png"
            alt="Image"
            initial={{ rotate: 45 }}
            whileInView={{ rotate: 360 }}
            viewport={{ margin: "-40px" }}
            transition={{ duration: 4, type: "spring" }}
          ></motion.img>
        </div>
      </div>
    </>
  );
};

export default First;
