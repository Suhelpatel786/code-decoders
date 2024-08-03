import React from "react";
import "./calltoaction.css"; // Import the CSS file

const CallToAction = () => {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <div className="cta-text">
          <h2>Don’t forget to grab this one, it’s free!</h2>
          <p>Download the Ultimate con tomate guide.</p>
        </div>
        <button className="cta-button">Call to Action</button>
      </div>
    </section>
  );
};

export default CallToAction;
