import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import "./navbar.css";

function Navbars() {
  const navigate = useNavigate();
  const [mobile, setMobile] = useState(false);
  const [active, setActive] = useState(1);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <nav className="nav main-nav-container">
      <div className="logoDiv">
        <img
          src="Final Logo-01-01.png"
          alt="logo"
          className="img"
          onClick={() => navigate("/")}
        />
      </div>
      <ul
        className={mobile ? "nav-links-mobile" : "nav-links"}
        onClick={() => setMobile(false)}
      >
        <div className="nav-list-holder">
          <NavLink to="/">
            <li>Home</li>
          </NavLink>

          <NavLink to="/menu">
            <li>Menu</li>
          </NavLink>

          <NavLink to="/about">
            <li>About Us</li>
          </NavLink>

          <NavLink to="/contact">
            <li>Contact Us</li>
          </NavLink>

          <NavLink to="/events">
            <li>Events</li>
          </NavLink>
        </div>

        <div>
          <button className="bookBtn">Book Now</button>
        </div>
      </ul>

      <button className="mobile-menu-icon" onClick={() => setMobile(!mobile)}>
        {mobile ? <ImCross /> : <FaBars />}
      </button>
    </nav>
  );
}

export default Navbars;
