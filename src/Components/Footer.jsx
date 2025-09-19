import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styling/Footer.css";

function Footer() {
  const navigate = useNavigate();

  const goToForm = () => {
    navigate("/form");
  };

  return (
    <div className="footer">
      <div className="footer-content">
        {" "}
        {/* ADD THIS DIV */}
        <h1 className="footer-h1">Ready to grow your business?</h1>
        <p className="footer-p">Let’s chat and see how we can help you.</p>
        <button onClick={goToForm} className="footer-button">
          Get Started
        </button>
      </div>{" "}
      {/* ADD THIS CLOSING DIV */}
    </div>
  );
}

export default Footer;
