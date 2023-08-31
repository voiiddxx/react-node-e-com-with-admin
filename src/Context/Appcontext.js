import axios from "axios";
import { createContext, useEffect , useReducer } from "react";
import reducer from './productreducer'
const Appcontext = createContext();
    const API = "http://localhost:4000/get-user-all-product"
    const GetUserApi = "http://localhost:4000/get-curr-user"

    const initialState= {
        isLoading:false,
        isError:false,
        products : [],
        featuredProducts: [],
        isSingleLoading:false,
        singleproduct:{

        },
        isCurrloading:false,
        user:{

        }
    }
  const AppProvider = ({children}) =>{

    const [state, dispatch] = useReducer(reducer , initialState);
    const token = localStorage.getItem("x-auth-token");
    const getProduct =  async (url) =>{
        dispatch({type:"API_LOADING"})
        try {
            const response = await axios.get(url , {
                headers:{
                    'x-auth-token': token,
                } })
            const value = await response.data;
            dispatch({type:"SET_API_DATA" , payload:value})
        } catch (error) {
            console.log(error);
            dispatch({type:"API-ERROR"})
        }
    }

    const currUser = async () =>{
        dispatch({type:"CURR_lOADING"})
        const token = localStorage.getItem("x-auth-token");
        try{
            const response = await axios.get(GetUserApi ,{
                headers:{
                    'x-auth-token':token
                }
                
            });

            dispatch({type:"SET_CURR_USER" ,  payload:response.data})
        } catch(e){
            console.log(e.response.data);
            dispatch({type:"CURR_ERROR"})
            
        }
    }


    const getSingleProduct = async (url) =>{
        dispatch({type:"SINGLE_PRODUCT_LOADING"})
        try {
            const response = await axios.get(url);
            const singleData = await response.data;
            dispatch({type:"SET_SINGLE_DATA" , payload:singleData})
        } catch (error) {
            dispatch({type:"SINGLE_PRODUCT_ERROR"})
        }
    }
    useEffect(()=>{
        getProduct(API);
    } , [])

    return <Appcontext.Provider value={{...state , getSingleProduct, currUser}}>{children}</Appcontext.Provider>
}

export {AppProvider , Appcontext };