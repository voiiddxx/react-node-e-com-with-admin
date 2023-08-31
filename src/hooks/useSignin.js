import { useNavigate } from "react-router-dom";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const useSignin = () => {
    const navigate = useNavigate();
  const signin = async (username, email, password, category) => {
    const response = await fetch("http://localhost:4000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
        category: category,
      }),
    });

    if (response.status === 200) {
      alert("Your Account Has Been Created");
      toast.success("Your Account Has Been Created");
    } else {
      
      toast.error("check some connection" , {
        theme:"dark"
      })
    }
  };

  //=========================================

  const login = async (email, password) => {
    const response = await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email:email, password:password }),
    });
    if(response.status===200){
        const data = await response.json();
        localStorage.setItem('x-auth-token' , data.token)
        console.log(localStorage.getItem('x-auth-token'));
        navigate('/')
    }
    else{
      console.log(response.body);
    }
  };
  return { signin, login };
};

