import React from "react";
import "./features.css"; // Import the CSS file

const Featured = () => {
  return (
    <section className="featured-section">
      <h2 className="featured-title">Featured things</h2>
      <p className="featured-subheading">
        Our mission is very important to the planet: we plant as many trees as
        possible. Can you figure out?
      </p>
      <div className="feature-cards">
        <div className="feature-card">
          <div className="card-image"></div>
          <h3 className="card-title">Card Title 1</h3>
          <p className="card-text">Some subtext for the card goes here.</p>
          <button className="card-button">Call to Action</button>
        </div>
        <div className="feature-card">
          <div className="card-image"></div>
          <h3 className="card-title">Card Title 2</h3>
          <p className="card-text">Some subtext for the card goes here.</p>
          <button className="card-button">Call to Action</button>
        </div>
        <div className="feature-card">
          <div className="card-image"></div>
          <h3 className="card-title">Card Title 3</h3>
          <p className="card-text">Some subtext for the card goes here.</p>
          <button className="card-button">Call to Action</button>
        </div>
      </div>
    </section>
  );
};

export default Featured;
