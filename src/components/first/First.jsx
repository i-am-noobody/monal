import React from "react";
import "./first.css";
import { motion } from "framer-motion";

const First = () => {
  return (
    <>
      <div className="first-container" id="first">
        <div className="left-container">
          <h1> Welcome to Monaldining</h1>
          <p>
            Would you like to savor the exquisite cuisine and bring the art of
            dining to a new level? We obtain the freshest products from
            reputable purveyors and incorporate them into our exclusive dishes.
          </p>
          <button className="first-button">Book A Table</button>
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
