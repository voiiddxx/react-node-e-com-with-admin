const Adminproductreducer = (state , action)=>{

    switch (action.type) {
        case "ADMIN_API_GET_PRODUCT_LOADING":
            return{
                ...state,
                isLoading:true,

            }
        case "ADMIN_SET_PRODUCT_DATA":
            return{
                ...state,
                isLoading:false,
                adminproduct:action.payload,
            }
        case "ADMIN_GET_PRODUCT_ERROR":
            return{
                ...state,
                isLoading:false,
                isError:true
            }
            
            
    
        default:
            return state;
    }

}


export default Adminproductreducer;