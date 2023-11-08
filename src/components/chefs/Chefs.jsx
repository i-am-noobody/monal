import React from "react";
import "./chefs.css";

const Chefs = () => {
  return (
    <>
      <div className="grid">
        <div className="left">
          <img src="chef4.jpg" />
        </div>
        <div className="right">
          <h2>Best Food</h2>
          <p>From our chief chef</p>
          <hr className="lines" />
          <span>
            The work is always in a full swing in our kitchen! Everyone here is
            on fire when it comes to cooking. The best cooks all over the world
            are gathered here together to create something really special to
            impress you deeply. <br /> <br />
            The latest in cooking fashion, best recipes and fresh goods, this is
            the formula of our success.
          </span>
        </div>
      </div>
    </>
  );
};

export default Chefs;
