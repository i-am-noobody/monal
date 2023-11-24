import React from "react";
import { Icon } from "@iconify/react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="quick-access">
          <img src="Final Logo-01-01.png" alt="logo" />
          <div className="pages-section">
            <p>Home</p>
            <p>Menu</p>
            <p>Gallery</p>
            <p>Events</p>
            <p>Reservation</p>
          </div>
          <div className="copyright">
            <p>Monal Dining &copy; Login-Corps</p>
          </div>
        </div>
        <div className="location-container">
          <h2>Contact Details</h2>
          <div className="single-location">
            <div className="icon">
              <Icon icon="mdi:location" className="custm-icon" />
            </div>
            <p>Samakhusi Chwok,Kathmandu</p>
          </div>

          <div className="single-location">
            <div className="icon">
              <Icon icon="mingcute:phone-fill" className="custm-icon" />
            </div>
            <p>01-46545442</p>
          </div>
          <div className="single-location">
            <div className="icon">
              <Icon icon="ion:mail" className="custm-icon" />
            </div>
            <p>support@webxnepal.com.np</p>
          </div>
        </div>
        <div className="footer-about-us">
          <h2>About Us</h2>
          <p>
            We are Australian based restaurant mainly focusing on providing best
            foods with a good hospitality.
          </p>
          <div className="footer-links">
            <div className="icon">
              <Icon icon="jam:facebook" className="custm-icon" />
            </div>
            <div className="icon">
              <Icon icon="ri:instagram-fill" className="custm-icon" />
            </div>

            <div className="icon">
              <Icon icon="simple-icons:x" className="custm-icon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
