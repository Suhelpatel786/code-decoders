import React from "react";
import "./whatwedo.css"; // Import the CSS file

const WhatWeDo = () => {
  return (
    <section className="what-we-do-section">
      <div className="what-we-do-content">
        <div className="text-content">
          <h2>What we do</h2>
          <p>
            Our mission is very important to the planet: <br /> we plant as many
            trees as possible.
          </p>
          <p className="subtitle">Can you figure out?</p>
        </div>
        <div className="boxes-content">
          <div className="box-item">
            <div className="checkbox"></div>
            <p>We recycle everything we see</p>
          </div>
          <div className="box-item">
            <div className="checkbox"></div>
            <p>We teach people how to reuse their stuff</p>
          </div>
          <div className="box-item">
            <div className="checkbox"></div>
            <p>We believe in human beings as problem solvers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
