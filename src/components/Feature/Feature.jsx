import React, { useContext } from 'react'
import './Feature.css'
import Card from '../Card/Card'
import { Appcontext } from '../../Context/Appcontext'

const Feature = () => {
  const {isLoading , featuredProducts} = useContext(Appcontext);
  

  if(isLoading){
    return <div>Please wait loading</div>
  }
  return (
    <>
<div className="f-heading">
<h1>Fetaured Products For You!</h1>
</div>
<div className="f-main">
    {
      featuredProducts.map((curr)=>{
        return <Card key={curr.id} {...curr} />
      })
    }
</div>
    </>
  )
}

export default Feature


