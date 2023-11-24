import React from "react";
import "./forms.css";
const Forms = () => {
  return (
    <>
      <div className="form-container">
        <div className="text-container">
          <h2>
            Tell Us About Your Preference <br />
            <span>So We Can Assist</span>
          </h2>
        </div>
        <form className="form">
          <input placeholder="First Name" type="text" name="name" />
          <input placeholder="Last Name" type="text" name="name" />
          <input type="number" placeholder="Contact Number" />
          <input type="email" name="Email" placeholder="Your Email" />
          <textarea type="text" placeholder="Your Message here" />
          <button className="form-button">Send Message </button>
        </form>
      </div>
    </>
  );
};

export default Forms;
