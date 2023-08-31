import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCircleNodes , faGhost , faTruck , faRss , faOilCan , faBarcode } from '@fortawesome/free-solid-svg-icons'
import './Adminsidebar.css'

import { Appcontext } from '../../../../Context/Appcontext'
import { Link } from 'react-router-dom'

const Adminsidebar = () => {
    const {user} = useContext(Appcontext);
    const {username , email } = user;
  return (
    <div className="sidebar-main">
        <div className="side-logo">
            <h1>🛍️  Bazaar</h1>
        </div>
        <div className="side-links">
           <div className="link1">
            <FontAwesomeIcon icon={faCircleNodes} size='lg' style={{color: "#367df7",}} />
            <Link to="./Addproduct">  <p>Add Product</p> </Link>
            </div>
            <div className="link1">
            <FontAwesomeIcon icon={faGhost} size='lg' style={{color: "#424242",}} />
           <Link to="/Viewproduct"> <p>View All Product</p></Link>
            </div>

            <div className="link1">
            <FontAwesomeIcon icon={faTruck} size='lg' style={{color: "#367df7",}} />
            <p>All Listed Orders</p>
            </div>
            <div className="link1">
            <FontAwesomeIcon icon={faRss} size='lg' style={{color: "#367df7",}} />
            <p>Your Anaylistics</p>
            </div>
            <div className="link1">
            <FontAwesomeIcon icon={faOilCan} size='lg' style={{color: "#367df7",}} />
           <Link to="/Auth"  onClick={(e)=>{
            localStorage.removeItem("x-auth-token")
           }}> <p>Log Out</p></Link>
            </div>
        </div>

        <div className="link2">
        <FontAwesomeIcon icon={faBarcode} size='lg' style={{color: "#367df7",}} />
        <p>{username}</p>
        </div>
        <p className='email'>{email}</p>

    </div>
  )
}

export default Adminsidebar