import React, {  useState } from 'react'
import Adminsidebar from '../Components/AdminSidebar/Adminsidebar'
import './Addproduct.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faPlay} from '@fortawesome/free-solid-svg-icons'
import {useAddproduct} from '../../../hooks/useAddproduct'
import axios from 'axios'

const Addproduct = () => {

  const [selectedFiles, setselectedFiles] = useState(null);
  const [imageurltoshow, setimageurltoshow] = useState(null);
  const [name, setname] = useState(""); 
  const [detail, setdetail] = useState("");
  const [price, setprice] = useState("");
  const [category, setcategory] = useState("");
  const [company, setcompany] = useState("");
  const {addProduct} = useAddproduct();

  let files = [];

  const handleImage =  async(e)=>{

    for(let i =0;i<selectedFiles.length;i++){
      let formData = new FormData();
      formData.append('file' , selectedFiles[i]);
      formData.append("upload_preset" , "qouutdij");

      axios.post("https://api.cloudinary.com/v1_1/dwkmxsthr/upload" , formData , {
        onUploadProgress:(ProgressEvent)=>{
          console.log("Uploading..." ,Math.round( ProgressEvent.loaded/ProgressEvent.total));
        }
      }).then(response=>{
        files.push(response.data.url);
        setimageurltoshow(files);
      })
      }  
  }


  const showdata = async (e)=>{
    e.preventDefault()
    await addProduct(name , detail , category , price , company , imageurltoshow);
    console.log({name,detail , company , category , price , imageurltoshow});
  }

  return (
    <>
   <div className="add-main">
    <Adminsidebar/>
    <div className="add-form-data">
    <h1 className='add-heading'>Add Product 🔔</h1>
    <p className='heading-p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus laborum quos quo tenetur exercitationem iusto officia, veniam assumenda dolorem labore ab alias facere eos dolore autem reiciendis! Beatae, exercitationem quae!</p>

    <div className="border"></div>
<form onSubmit={showdata}>
    <div className="product-form">
   <div className="textfeild">
   <h5>Product Name 🛒</h5>
    < input type='text' className='addproducttext' placeholder="Canon Shirt " onChange={(e)=>{
      setname(e.target.value)
    }}></ input>
   </div>
   <div className="textfeild">
   <h5>Product Detail 📢</h5>
    < input type='text' className='addproducttext' placeholder="Denim shirt with silk design " onChange={(e)=>{
      setdetail(e.target.value)
    }} ></ input>
   </div>
   <div className="textfeild">
   <h5>Product Price💸</h5>
    < input type='text' className='addproducttext' placeholder="999 " onChange={(e)=>{
      setprice(e.target.value)
    }}></ input>
   </div>
   <div className="textfeild">
   <h5>Product Company 🏛️</h5>
    < input type='text' className='addproducttext' placeholder="Canont "  onChange={(e)=>{
setcompany(e.target.value)
    }}></ input>
   </div>
   <div className="textfeild">
   <h5>Product category 🌩️</h5>
    <div className="admin-dropdown">
      <select value={category} onChange={(e)=>{
        setcategory(e.target.value)
      }}>
        <option value="Clothes">Clothes 👔</option>
        <option value="Gadgets">Gadgets 💻</option>
        <option value="Electronics">Electronics 🪫</option>
      </select>
    </div>
    <br />

    <p>{category}</p>
   </div>
   <div className="textfeild">
   <h5>Add Product Images</h5>
    < input type='file' multiple
      className='addproducttext' onChange={(e)=>{
        setselectedFiles(e.target.files)
      }} ></ input>
   </div>
   <div className="show-button">

    <div onClick={handleImage} className="show">
    <FontAwesomeIcon icon={faPlay} style={{color: "#131416",}} /> 
    <h6>Show Images</h6>
    </div>
   </div>
   
   <div className="textfeild">
   < input  className='submitbutton' type="submit"  value="Enlist Now 🗾"/>
   </div>
   
    </div>
    </form>
    
   <div className="image-part">
    {
      imageurltoshow?.length > 0 ? imageurltoshow.map(e=>(
        <img src={e} alt="clodinary product" key={e} className='pro-image' />
      )) : <p>Please Select Some Images</p>
    }
   </div>
    </div>

   </div>

    </>
  )
}

export default Addproduct

