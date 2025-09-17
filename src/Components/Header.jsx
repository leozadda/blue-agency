import { useState } from 'react'
import "../Styling/Header.css"

function Header() {
  const handleEmailClick = () => {
    window.location.href = "mailto:help@b-lu-e.com?subject=Business Growth Inquiry";
  };
  return (
    <div className='header'>
      <div className='header-content'>
        <h1 className='header-h1'>We build custom software to grow your business.</h1>
        <p className='header-p'>We handle the code, you handle the business.</p>
        <button onClick={handleEmailClick} className='header-button'>Book a chat</button>
      </div>
    </div>
  )
}

export default Header