import React from "react";
import "./third.css";

const Third = () => {
  return (
    <>
      <div className="third-container">
        <div className="lefts-container">
          <h1>Gallery</h1>
          <p>Pictures of Various events</p>
        </div>
        <div className="rights-container">
          <div class="gallery">
            <figure class="gallery__item gallery__item--1">
              <img src="image4.jpg" class="gallery__img" alt="Image 1" />
            </figure>
            <figure class="gallery__item gallery__item--2">
              <img src="image3.jpg" class="gallery__img" alt="Image 2" />
            </figure>
            <figure class="gallery__item gallery__item--3">
              <img src="image5.jpg" class="gallery__img" alt="Image 3" />
            </figure>
            <figure class="gallery__item gallery__item--4">
              <img src="image6.jpg" class="gallery__img" alt="Image 4" />
            </figure>
            <figure class="gallery__item gallery__item--5">
              <img src="image1.jpg" class="gallery__img" alt="Image 5" />
            </figure>
            <figure class="gallery__item gallery__item--6">
              <img src="image8.jpg" class="gallery__img" alt="Image 6" />
            </figure>
          </div>
        </div>
      </div>
    </>
  );
};

export default Third;
