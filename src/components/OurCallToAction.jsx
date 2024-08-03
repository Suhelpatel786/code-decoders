import React from "react";

const MissionSection = () => {
  return (
    <div
      style={{
        textAlign: "center", // Center-align text
        padding: "5rem 2rem", // Consistent padding for the section
        backgroundColor: "transparent", // No background color
      }}
    >
      <h2
        style={{
          fontSize: "2rem", // Font size for the title
          color: "#333", // Dark text color
          fontWeight: 500, // Font weight
          marginBottom: "1rem", // Space below the title
          maxWidth: "800px", // Max width to wrap text
          marginLeft: "auto", // Center text block horizontally
          marginRight: "auto", // Center text block horizontally
        }}
      >
        Our mission is very important to the planet: we plant as many trees as
        possible. Can you figure out?
      </h2>
      <button
        style={{
          backgroundColor: "#d3d3d3", // Light gray background color
          border: "none", // Remove default border
          borderRadius: "5px", // Rounded corners for the button
          color: "#333", // Dark text color
          padding: "1rem 2rem", // Padding to make the button larger
          fontSize: "1rem", // Font size for the button text
          cursor: "pointer", // Pointer cursor on hover
          marginTop: "1rem", // Space above the button
        }}
      >
        Call to Action
      </button>
    </div>
  );
};

export default MissionSection;
