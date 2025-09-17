import { useState } from 'react'
import "../Styling/Header.css"

function Header() {
  return (
    <div className='header'>
      <div className='header-content'>
        <h1 className='header-h1'>We build custom software to grow your fitness business.</h1>
        <p className='header-p'>We handle the code, you handle the business.</p>
        <button className='header-button'>Book a call</button>
      </div>
    </div>
  )
}

export default Header