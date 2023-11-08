import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import "./navbar.css";

function Navbars() {
  const navigate = useNavigate();
  const [mobile, setMobile] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <nav className="nav">
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
        <Link to="">
          {" "}
          <li>Home</li>{" "}
        </Link>

        <Link to="">
          {" "}
          <li>Menu</li>{" "}
        </Link>

        <Link to="/">
          {" "}
          <li>About Us</li>{" "}
        </Link>

        <Link to="/">
          {" "}
          <li>Contact Us</li>{" "}
        </Link>

        <Link to="/">
          {" "}
          <li>Events</li>{" "}
        </Link>
        <button className="bookBtn">Book Now</button>
      </ul>
      <button className="mobile-menu-icon" onClick={() => setMobile(!mobile)}>
        {mobile ? <ImCross /> : <FaBars />}
      </button>
    </nav>
  );
}

export default Navbars;
