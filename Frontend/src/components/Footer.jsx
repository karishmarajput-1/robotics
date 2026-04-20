import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-column">
          <h4>Robotics</h4>
          <a href="#">AI Robots</a>
          <a href="#">Automation</a>
          <a href="#">Industrial Bots</a>
          <a href="#">Research Lab</a>
        </div>

        <div className="footer-column">
          <h4>Products</h4>
          <a href="#">Smart Assistant</a>
          <a href="#">Delivery Robot</a>
          <a href="#">Security Drone</a>
          <a href="#">Robotic Arm</a>
        </div>

        <div className="footer-column">
          <h4>Technology</h4>
          <a href="#">Machine Learning</a>
          <a href="#">Computer Vision</a>
          <a href="#">IoT Systems</a>
        </div>

        <div className="footer-column">
          <h4>Developers</h4>
          <a href="#">API Access</a>
          <a href="#">SDK</a>
          <a href="#">Open Source</a>
          <a href="#">Documentation</a>
        </div>

        <div className="footer-column">
          <h4>Support</h4>
          <a href="#">Help Center</a>
          <a href="#">Contact Us</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms</a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 RoboTech | Future is Automated 🤖</p>
      </div>
    </footer>
  );
};

export default Footer;