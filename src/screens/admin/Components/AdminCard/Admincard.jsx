import React, { useState } from 'react'
import './Admincard.css'
const Admincard = (e) => {
    const {  price , name , image } = e;
    const [Thumbnail, setThumbnail] = useState(image[0]);
  return (
    
        <div className="admin-card">
            <div className="admin-card-image">
        <img src={Thumbnail} alt="badb" />
            </div>

            <div className="admin-card-text">
                <div className="up-head">
                    <h2>{name}</h2>
                    <p>  $ {price}</p>
                </div>
                <p className='detail'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum fugiat consequuntur dolore ut perspiciatis incidunt!</p>
            </div>

            <div className="delete-button">
                <h1>Delete Now</h1>
            </div>

    </div>
  )
}

export default Admincard