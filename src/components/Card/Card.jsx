import React, { useState } from 'react'
import './Card.css'
import { NavLink } from 'react-router-dom';



const Card = (curr) => {
  const {id ,name , image , category
, price
} = curr;
  return (
    <>
   <NavLink to= {`singleproduct/${id}`} > <div className="card">
       <div className="card-image">
        <img src={image[0]} alt="card" />
        </div>
         <div className="card-text">
          <div className="up-text">
            <h1>{name}</h1>
            <h2>₹{price}</h2>
          </div>
          <p className='detail'>{category
}</p>

          <p className="cart-button">Add To Cart 👉</p>
        </div>
        
    </div> </NavLink>
    
    </>
  )
}

export default Card