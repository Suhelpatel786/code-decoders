import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between", // Distribute space between sections
        padding: "5rem 5rem", // Padding for the footer
        backgroundColor: "#333", // Dark background for the footer
        color: "#fff", // White text color
      }}
    >
      {/* First Section */}
      <div style={{ flex: 1, textAlign: "left" }}>
        <div
          style={{
            fontSize: "2rem", // Font size for the logo
            fontWeight: 600, // Font weight for the logo
            color: "#fff", // White text color
          }}
        >
          Logo
        </div>
        <p
          style={{
            marginTop: "1rem", // Space above the text
            fontSize: "1rem", // Font size for the text
            color: "#ccc", // Light gray text color for the mission statement
          }}
        >
          Our mission is very important to the planet: <br /> we plant as many
          trees as possible. Can you figure out?
        </p>
        <div style={{ marginTop: "1rem" }}>
          {/* Social Links */}
          <div
            style={{
              display: "inline-block",
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              backgroundColor: "#fff", // White background for social links
              marginRight: "0.5rem",
            }}
          />
          {/* Add more social links as needed */}
        </div>
      </div>

      {/* Second Section */}
      <div style={{ flex: 1, textAlign: "left" }}>
        <h3
          style={{
            fontSize: "1.5rem", // Font size for the title
            color: "#fff", // White text color
            fontWeight: 600, // Font weight for the title
            marginBottom: "1rem", // Space below the title
          }}
        >
          More Information
        </h3>
        <div style={{ marginBottom: "1rem" }}>
          {/* Checkbox-like divs */}
          <div style={{ marginBottom: "0.5rem" }}>
            <div
              style={{
                display: "inline-block",
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor: "#fff", // White color for the checkbox
                marginRight: "0.5rem",
              }}
            />
            <span>Home</span>
          </div>
          <div style={{ marginBottom: "0.5rem" }}>
            <div
              style={{
                display: "inline-block",
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor: "#fff", // White color for the checkbox
                marginRight: "0.5rem",
              }}
            />
            <span>About Us</span>
          </div>
          <div style={{ marginBottom: "0.5rem" }}>
            <div
              style={{
                display: "inline-block",
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor: "#fff", // White color for the checkbox
                marginRight: "0.5rem",
              }}
            />
            <span>Shop</span>
          </div>
          <div>
            <div
              style={{
                display: "inline-block",
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor: "#fff", // White color for the checkbox
                marginRight: "0.5rem",
              }}
            />
            <span>Contact</span>
          </div>
        </div>
        <h3
          style={{
            fontSize: "1.5rem", // Font size for the title
            color: "#fff", // White text color
            fontWeight: 600, // Font weight for the title
            marginBottom: "1rem", // Space below the title
          }}
        >
          Stay Connected
        </h3>
        <p style={{ marginBottom: "0.5rem" }}>Phone: (123) 456-7890</p>
        <p>Email: info@example.com</p>
      </div>

      {/* Third Section */}
      <div style={{ flex: 1, textAlign: "left" }}>
        <h3
          style={{
            fontSize: "1.5rem", // Font size for the title
            color: "#fff", // White text color
            fontWeight: 600, // Font weight for the title
            marginBottom: "1rem", // Space below the title
          }}
        >
          Subscribe now to the newsletter
        </h3>
        <input
          type="text"
          placeholder="Your Name"
          style={{
            display: "block",
            width: "90%", // Reduced width of the input field
            padding: "0.5rem", // Padding for the input field
            marginBottom: "1rem", // Space below the input field
            borderRadius: "5px", // Rounded corners for the input field
            border: "1px solid #ccc", // Light border for the input field
            backgroundColor: "#fff", // White background for the input field
            color: "#333", // Dark text color for the input field
          }}
        />
        <input
          type="email"
          placeholder="Your Email"
          style={{
            display: "block",
            width: "90%", // Reduced width of the input field
            padding: "0.5rem", // Padding for the input field
            marginBottom: "1rem", // Space below the input field
            borderRadius: "5px", // Rounded corners for the input field
            border: "1px solid #ccc", // Light border for the input field
            backgroundColor: "#fff", // White background for the input field
            color: "#333", // Dark text color for the input field
          }}
        />
        <button
          style={{
            backgroundColor: "#d3d3d3", // Light gray background color
            border: "none", // Remove default border
            borderRadius: "5px", // Rounded corners for the button
            color: "#333", // Dark text color
            padding: "1rem 2rem", // Padding inside the button
            fontSize: "1rem", // Font size for the button text
            cursor: "pointer", // Pointer cursor on hover
          }}
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Footer;
