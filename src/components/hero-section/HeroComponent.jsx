import React from "react";
import "./hero.css"; // Import the CSS file

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        {/* Text Content */}
        <div className="hero-text">
          <h1>The future of web design, today</h1>
          <p>The future of web design, today</p>
          <button className="cta-button">Get Started</button>
        </div>

        {/* Image Container */}
        <div className="hero-image-container"></div>
      </div>
    </section>
  );
};

export default Hero;
