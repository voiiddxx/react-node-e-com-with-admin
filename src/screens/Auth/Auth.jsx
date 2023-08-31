import React, {  useState } from 'react'
import './Auth.css'
import { useSignin } from '../../hooks/useSignin';
import { Link } from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Auth =   () => {

  const [category, setcategory] = useState(" ");
  const [username , setUsername] = useState(" ");
  const [email , setEmail] = useState(" ");
  const [password , setpassword] = useState(" ");
  const {signin} = useSignin()


  const handleSubmit = async (e)=>{
    e.preventDefault();
    await signin(username , email , password , category);
  }
  return (<>
    <div className="parent">
        <div className="left">
            <h1>Welcome,</h1>
            <h2>To The Bazaar 🛍️</h2>
            <p>Sign Up And Create Your Account</p>

            <form onSubmit={handleSubmit}>
              <p>Username 📛</p>
              <input type='text' placeholder="Your Name " onChange={(e)=> setUsername(e.target.value)}></input>
              <p>Email 📩</p>
              <input type='email' placeholder="Email Address "  onChange={(e)=> setEmail(e.target.value)}></input>
              <p>Password 🔑</p>
              <input type='password' placeholder="Password " onChange={(e)=> setpassword(e.target.value)}></input>
              <div className="dropdown">
                <select onChange={(e)=>{
                  setcategory(e.target.value);
                }} value={category}>
                  <option value="Admin">Admin⚡ </option>
                  <option value="User">User 🚀 </option>
                </select>
                <br />
                <br />
                <p>You Are Signing as {category} 🖌️ </p>
                <br />
              
                <input className='button' type="submit" value="Create Account 👆"/>
                <p className='login'>Already Have An Account?  <Link to='/Login' > <span> Login Now</span> </Link></p>
              </div>
            </form>
        </div>
        <div className="right">
          <img src="https://cdn3d.iconscout.com/3d/premium/thumb/fingerprint-lock-5515001-4603542.png?f=webp" alt="s" />
          <h1>Let's Explore The Bazaar Now</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem animi repudiandae et nihil officia nobis est totam, perferendis ipsum laboriosam?</p>
        </div>
    </div>
    <ToastContainer className="toast" />
    </>

    
  )
}

export default Auth