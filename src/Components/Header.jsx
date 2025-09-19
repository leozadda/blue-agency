import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import "../Styling/Header.css";

function Header() {
  const navigate = useNavigate();

  const goToForm = () => {
    navigate("/form");
  };
  return (
    <div className="header">
      <div className="header-content">
        <h1 className="header-h1">
          We build custom software to grow your business.
        </h1>
        <p className="header-p">We handle the code, you handle the business.</p>
        <button onClick={goToForm} className="header-button">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Header;
