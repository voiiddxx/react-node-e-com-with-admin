import React from 'react'
import './Splash.css'
import { Link } from 'react-router-dom'
import Home from '../Home/Home'
const Splash = () => {
 
    
  return (
   <div className="check">
    {
        (localStorage.getItem('x-auth-token')) ? <Home/> : <div className="main">
        <h1 className="heading">Welcome to the  <span> E-Bazaar </span></h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ratione, temporibus, voluptas quos ea tempora dicta nihil mollitia facere eaque atque consequatur eveniet eligendi ad?</p>
        <Link to="/Auth" ><h2 className='h2hai'>Get Started</h2></Link>
        
    </div>
    }
   </div>
  )
}

export default Splash