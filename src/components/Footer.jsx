import React from "react";
import "./Footer.css"

const FooterComponent = () => {
  return (
    <footer className="text-center mt-5 p-4 bg-light border-top footer-container">
      <div className="social-icons">
        <i className="bi bi-facebook"></i>
        <i className="bi bi-twitter"></i>
        <i className="bi bi-instagram"></i>
      </div>
      <p className="footer-text">&copy; 2025 Countries App. All rights reserved.</p>
    </footer>
  );
};

export default FooterComponent;
