import axios from "axios";
import reducer from './adminproductreducer'
const { createContext, useEffect, useReducer,  } = require("react");
const AdminAPi = "http://localhost:4000/admin-all-data";
const Admincontext = createContext();
const initialState = {
    isLoading:false,
    adminproduct:[],
    isError:false

}

const AdminProvider = ({children}) =>{


        const [state, dispatch] = useReducer(reducer , initialState);
        
        
    const GetAdminData = async (url) =>{
        dispatch({type:"ADMIN_API_GET_PRODUCT_LOADING"})
        const token = localStorage.getItem("x-auth-token");
        try{
            const response = await axios.get(url , {
                headers:{
                    'x-auth-token': token,
                }
            });
            const value = await response.data;
            dispatch({type:"ADMIN_SET_PRODUCT_DATA" , payload:value})
        } catch(e){
            console.log(e);
            dispatch({type:"ADMIN_GET_PRODUCT_ERROR"})
        }
    }


    useEffect(()=>{
        GetAdminData(AdminAPi);
    } , [])
    return <Admincontext.Provider value={ {...state}}>{children}</Admincontext.Provider>
}


export {AdminProvider , Admincontext};