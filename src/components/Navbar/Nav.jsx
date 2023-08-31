import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'


const Nav = () => {
  return (
  <div className="div">
    {
      (localStorage.getItem('x-auth-token')) ?   <div className="nav-parent">
      <div className="left-nav">
          <h1>Bazaar🛒</h1>
      </div>
      <div className="mid-nav">
          <p>Home</p>
          <p>About</p>
          <p>Service</p>
          <p>Product</p>
          <p>About</p>
      </div>
      <div className="right-nav">
         <Link to='/'> <p>Go To Cart</p></Link>
         <Link to='/Auth' onClick={()=>{
          localStorage.removeItem('x-auth-token')
         }}> <p>Logout</p></Link>
      </div>

  </div> :   <div className="nav-parent">
      <div className="left-nav">
          <h1>Bazaar</h1>
      </div>
      <div className="mid-nav">
          <p>Home</p>
          <p>About</p>
          <p>Service</p>
          <p>Product</p>
          <p>About</p>
      </div>
      <div className="right-nav">
         <Link to='/Auth'> <p>Get Started</p></Link>
      </div>

  </div>
    }
  </div>
  )
}

export default Nav