import React from 'react'
import "./Navbar.css";
const Navbar = () => {
  return (
    <div>
    <div className="container-fluid">
    <div className="left_nav">
      <img className='company_logo' src="flippyLogo.png" alt="img" />
    <ul>
        <li>Why Sell on flippy 7</li>
        <li>How it works</li>
        <li>Pricing & Commission</li>
        <li>Price Calculator</li>
      </ul>
    </div>
    <div className="right_nav">
      <button className='login_btn' >Login</button>
      <button className='supplier_btn' >Be a Supplier</button>
    </div>
    </div>
    </div>
  )
}

export default Navbar
