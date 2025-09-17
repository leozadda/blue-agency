import { useState } from "react";
import "../Styling/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-content"> {/* ADD THIS DIV */}
        <h1 className="footer-h1">Ready to grow your business?</h1>
        <p className="footer-p">
        Let’s chat and see how we can help you.
        </p>
        <button className="footer-button">Book a chat</button>
      </div> {/* ADD THIS CLOSING DIV */}
    </div>
  );
}

export default Footer;