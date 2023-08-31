import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Appcontext } from '../../Context/Appcontext';
import './Singleproduct.css'
import Nav from '../../components/Navbar/Nav'
import Myimages from '../../components/SingleImage/Myimages';
import Productdata from '../../components/SingleData/Productdata';
const API = "https://api.pujakaitem.com/api/products";


const Singleproduct = () => {
    const { getSingleProduct,singleproduct } =
    useContext(Appcontext);
   

  const { id } = useParams();
  
  useEffect(() => {
   
    getSingleProduct(`${API}?id=${id}`);
     // eslint-disable-next-line
  }, []);

      const {image} = singleproduct;
  return (
    <>
    <Nav/>
    <div className="product-data">
    <div className="product-image">
    <Myimages imgs={image}/>
    </div>

    <div className="product-text">
      <Productdata data={singleproduct}/>
    </div>
    </div>
    </>
  )
}

export default Singleproduct