import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./second.css";

const Second = () => {
  const [toggle, setToggle] = useState(1);

  function updateToggle(id) {
    setToggle(id);
  }
  return (
    <>
      <div className="second-container" id="second">
        <div className="section1">
          <h1>Our Menu</h1>
          <p>Breakfast - Lunch -Dinner</p>
        </div>
        <div className="section2">
          <div className="all">
            <div className="menu-container">
              <ul className="list-title">
                <li>
                  {" "}
                  <Link
                    activeClassName="active"
                    onClick={() => updateToggle(1)}
                  >
                    {" "}
                    <p>Coffee</p>
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link
                    activeClassName="active"
                    onClick={() => updateToggle(2)}
                  >
                    <p>Snacks</p>
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link
                    activeClassName="active"
                    onClick={() => updateToggle(3)}
                  >
                    <p>Momo</p>
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link
                    activeClassName="active"
                    onClick={() => updateToggle(4)}
                  >
                    <p>Drinks</p>
                  </Link>
                </li>
              </ul>
              <div className="flex-menu">
                <ul className={toggle === 1 ? "show-content" : "first-list"}>
                  <div className="grids">
                    <li>
                      <div className="single-item">
                        <p> Caramel Latte</p>
                        <span class="dots">
                          .............................................................................................................................................................
                        </span>
                        <p>Rs:500</p>
                      </div>
                      <div className="textss">
                        <p>
                          ( Two eggs cooked to order with grits, sawmill gravy,
                          homemade buttermilk biscuits & real butter )
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="single-item">
                        <p> Dopio dfjksfjsk</p>
                        <span class="dots">
                          ....................................................................
                        </span>
                        <p>Rs:500</p>
                      </div>
                      <div className="textss">
                        <p>
                          ( Two eggs cooked to order with grits, sawmill gravy,
                          homemade buttermilk biscuits & real butter )
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="single-item">
                        <p> Dopio</p>
                        <span class="dots">
                          ....................................................................
                        </span>
                        <p>Rs:500</p>
                      </div>
                      <div className="textss">
                        <p>
                          ( Two eggs cooked to order with grits, sawmill gravy,
                          homemade buttermilk biscuits & real butter )
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="single-item">
                        <p> Dopio</p>
                        <span class="dots">
                          ....................................................................
                        </span>
                        <p>Rs : 500</p>
                      </div>
                      <div className="textss">
                        <p>
                          ( Two eggs cooked to order with grits, sawmill gravy,
                          homemade buttermilk biscuits & real butter )
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="single-item">
                        <p> Dopio</p>
                        <span class="dots">
                          ....................................................................
                        </span>
                        <p>Rs:500</p>
                      </div>
                      <div className="textss">
                        <p>
                          ( Two eggs cooked to order with grits, sawmill gravy,
                          homemade buttermilk biscuits & real butter )
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="single-item">
                        <p> Dopio</p>
                        <span class="dots">
                          ....................................................................
                        </span>
                        <p>Rs:500</p>
                      </div>
                      <div className="textss">
                        <p>
                          ( Two eggs cooked to order with grits, sawmill gravy,
                          homemade buttermilk biscuits & real butter )
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="single-item">
                        <p> Dopio</p>
                        <span class="dots">
                          ....................................................................
                        </span>
                        <p>Rs:500</p>
                      </div>
                      <div className="textss">
                        <p>
                          ( Two eggs cooked to order with grits, sawmill gravy,
                          homemade buttermilk biscuits & real butter )
                        </p>
                      </div>
                    </li>
                  </div>
                </ul>

                <ul className={toggle === 2 ? "show-content" : "first-list"}>
                  <div className="grids">
                    <li>
                      <div className="single-item">
                        <p> Dopio</p>
                        <span class="dots">
                          ....................................................................
                        </span>
                        <p>Rs:500</p>
                      </div>
                      <div className="textss">
                        <p>
                          ( Two eggs cooked to order with grits, sawmill gravy,
                          homemade buttermilk biscuits & real butter )
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="single-item">
                        <p> Dopio</p>
                        <span class="dots">
                          ....................................................................
                        </span>
                        <p>Rs:500</p>
                      </div>
                      <div className="textss">
                        <p>
                          ( Two eggs cooked to order with grits, sawmill gravy,
                          homemade buttermilk biscuits & real butter )
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="single-item">
                        <p> Dopio</p>
                        <span class="dots">
                          ....................................................................
                        </span>
                        <p>Rs:500</p>
                      </div>
                      <div className="textss">
                        <p>
                          ( Two eggs cooked to order with grits, sawmill gravy,
                          homemade buttermilk biscuits & real butter )
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="single-item">
                        <p> Dopio</p>
                        <span class="dots">
                          ....................................................................
                        </span>
                        <p>Rs:500</p>
                      </div>
                      <div className="textss">
                        <p>
                          ( Two eggs cooked to order with grits, sawmill gravy,
                          homemade buttermilk biscuits & real butter )
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="single-item">
                        <p> Dopio</p>
                        <span class="dots">
                          ....................................................................
                        </span>
                        <p>Rs:500</p>
                      </div>
                      <div className="textss">
                        <p>
                          ( Two eggs cooked to order with grits, sawmill gravy,
                          homemade buttermilk biscuits & real butter )
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="single-item">
                        <p> Dopio</p>
                        <span class="dots">
                          ....................................................................
                        </span>
                        <p>Rs:500</p>
                      </div>
                      <div className="textss">
                        <p>
                          ( Two eggs cooked to order with grits, sawmill gravy,
                          homemade buttermilk biscuits & real butter )
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="single-item">
                        <p> Dopio</p>
                        <span class="dots">
                          ....................................................................
                        </span>
                        <p>Rs:500</p>
                      </div>
                      <div className="textss">
                        <p>
                          ( Two eggs cooked to order with grits, sawmill gravy,
                          homemade buttermilk biscuits & real butter )
                        </p>
                      </div>
                    </li>
                  </div>
                </ul>
                <ul className={toggle === 3 ? "show-content" : "first-list"}>
                  <div className="grids">
                    <li>
                      <div className="single-item">
                        <p> Dopio</p>
                        <span class="dots">
                          ....................................................................
                        </span>
                        <p>Rs:500</p>
                      </div>
                      <div className="textss">
                        <p>
                          ( Two eggs cooked to order with grits, sawmill gravy,
                          homemade buttermilk biscuits & real butter )
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="single-item">
                        <p> Dopio</p>
                        <span class="dots">
                          ....................................................................
                        </span>
                        <p>Rs:500</p>
                      </div>
                      <div className="textss">
                        <p>
                          ( Two eggs cooked to order with grits, sawmill gravy,
                          homemade buttermilk biscuits & real butter )
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="single-item">
                        <p> Dopio</p>
                        <span class="dots">
                          ....................................................................
                        </span>
                        <p>Rs:500</p>
                      </div>
                      <div className="textss">
                        <p>
                          ( Two eggs cooked to order with grits, sawmill gravy,
                          homemade buttermilk biscuits & real butter )
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="single-item">
                        <p> Dopio</p>
                        <span class="dots">
                          ....................................................................
                        </span>
                        <p>Rs:500</p>
                      </div>
                      <div className="textss">
                        <p>
                          ( Two eggs cooked to order with grits, sawmill gravy,
                          homemade buttermilk biscuits & real butter )
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="single-item">
                        <p> Dopio</p>
                        <span class="dots">
                          ....................................................................
                        </span>
                        <p>Rs:500</p>
                      </div>
                      <div className="textss">
                        <p>
                          ( Two eggs cooked to order with grits, sawmill gravy,
                          homemade buttermilk biscuits & real butter )
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="single-item">
                        <p> Dopio</p>
                        <span class="dots">
                          ....................................................................
                        </span>
                        <p>Rs:500</p>
                      </div>
                      <div className="textss">
                        <p>
                          ( Two eggs cooked to order with grits, sawmill gravy,
                          homemade buttermilk biscuits & real butter )
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="single-item">
                        <p> Dopio</p>
                        <span class="dots">
                          ....................................................................
                        </span>
                        <p>Rs:500</p>
                      </div>
                      <div className="textss">
                        <p>
                          ( Two eggs cooked to order with grits, sawmill gravy,
                          homemade buttermilk biscuits & real butter )
                        </p>
                      </div>
                    </li>
                  </div>
                </ul>

                <ul className={toggle === 4 ? "show-content" : "first-list"}>
                  <div className="grids">
                    <li>
                      <div className="single-item">
                        <p> Dopio</p>
                        <span class="dots">
                          ....................................................................
                        </span>
                        <p>Rs:500</p>
                      </div>
                      <div className="textss">
                        <p>
                          ( Two eggs cooked to order with grits, sawmill gravy,
                          homemade buttermilk biscuits & real butter )
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="single-item">
                        <p> Dopio</p>
                        <span class="dots">
                          ....................................................................
                        </span>
                        <p>Rs:500</p>
                      </div>
                      <div className="textss">
                        <p>
                          ( Two eggs cooked to order with grits, sawmill gravy,
                          homemade buttermilk biscuits & real butter )
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="single-item">
                        <p> Dopio</p>
                        <span class="dots">
                          ....................................................................
                        </span>
                        <p>Rs:500</p>
                      </div>
                      <div className="textss">
                        <p>
                          ( Two eggs cooked to order with grits, sawmill gravy,
                          homemade buttermilk biscuits & real butter )
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="single-item">
                        <p> Dopio</p>
                        <span class="dots">
                          ....................................................................
                        </span>
                        <p>Rs:500</p>
                      </div>
                      <div className="textss">
                        <p>
                          ( Two eggs cooked to order with grits, sawmill gravy,
                          homemade buttermilk biscuits & real butter )
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="single-item">
                        <p> Dopio</p>
                        <span class="dots">
                          ....................................................................
                        </span>
                        <p>Rs:500</p>
                      </div>
                      <div className="textss">
                        <p>
                          ( Two eggs cooked to order with grits, sawmill gravy,
                          homemade buttermilk biscuits & real butter )
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="single-item">
                        <p> Dopio</p>
                        <span class="dots">
                          ....................................................................
                        </span>
                        <p>Rs:500</p>
                      </div>
                      <div className="textss">
                        <p>
                          ( Two eggs cooked to order with grits, sawmill gravy,
                          homemade buttermilk biscuits & real butter )
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="single-item">
                        <p> Dopio</p>
                        <span class="dots">
                          ....................................................................
                        </span>
                        <p>Rs:500</p>
                      </div>
                      <div className="textss">
                        <p>
                          ( Two eggs cooked to order with grits, sawmill gravy,
                          homemade buttermilk biscuits & real butter )
                        </p>
                      </div>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Second;
