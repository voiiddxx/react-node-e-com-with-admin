import React from 'react'
import './Productdata.css'

const Productdata = ({data}) => {
    console.log( "this is " , data);
    const {name , description
,        price , stars , stock , company} = data;

  return (
    <div className="pro-text">
        <h1>{name}</h1>
        <p>{description
}</p>

<h2> $ {price}</h2>

    <div className="buy">
        Buy Now
    </div>
    </div>
  )
}

export default Productdata