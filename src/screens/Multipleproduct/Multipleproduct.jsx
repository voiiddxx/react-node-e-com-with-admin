import React, { useContext } from 'react'
import { Appcontext } from '../../Context/Appcontext';
import Card from '../../components/Card/Card';

const Multipleproduct = () => {
    const {isLoading , products} = useContext(Appcontext);

    if(isLoading){
      return <div>Please wait loading</div>
    }
    return (
      <>
  <div className="f-heading">
  <h1>Checkout Our All Projects</h1>
  </div>
  <div className="f-main">
      {
        products.map((curr , index)=>{
          return <Card key={index+1} {...curr}  />
        })
      }
  </div>
      </>
    )
}

export default Multipleproduct