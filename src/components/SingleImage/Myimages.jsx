import React, { useState }  from 'react'
import './Myimage.css'


const Myimages = ({ imgs = [ {url : ""}]  }) => {
    const [Mainimage, setMainimage] = useState(imgs[0])
  return (
    <>
    <div className="singleimageproduct">

       
        {
            imgs ? imgs.map((e , index)=>{
                return <figure>
                    <img src={e.url} alt={e.filename} key={e.id} className='pro-image'  onClick={()=>{
                        setMainimage(e)
                    }} />
                </figure>
            }) : <div className="error">
             Waiting for fetching the images
            </div>
        }
    </div>

    <div className="mainimagearea">
        <img src={Mainimage.url} alt="Somefood" className='mainimagetag' />
    </div>

   

   
    </>
  )
}

export default Myimages