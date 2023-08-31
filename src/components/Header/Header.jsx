import React from 'react'
import './Header.css'
import image from '../Header/image.png'
const Header = () => {
  return (
    <div className="header">
      <div className="left-header">
      <h1>Grab Upto 50% off on</h1>
      <h1>Selected products</h1>
      <p>We are the world best e commerce online store and nominated for best serving agnecy across the world so trust on use for better quality</p>
    <p className='check-button' > Check Now 🛍️</p>
      </div>
      <div className="right-header">
    <img src={image} alt="main" />
      </div>
    </div>
  )
}

export default Header