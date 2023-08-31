const ProductReducer = (state, action) => {
  switch (action.type) {
    case "API_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "SET_API_DATA":
      const featData = action.payload.filter((currele) => {
        return currele.featured === true;
      });
      return {
        ...state,
        isLoading: false,
        products: action.payload,
        featuredProducts: featData,
      };
    
    case "API_ERROR":
        return{
            ...state,
            isLoading:false,
            isError:true,

        }
        case "SINGLE_PRODUCT_LOADING":
          return{
            ...state,
            isSingleLoading:true
          }
        case "SET_SINGLE_DATA":
            return{
              ...state,
              isLoading:false,
              singleproduct:action.payload,
             
            }  

            case "CURR_lOADING":
              return{
                ...state,
                isCurrloading:true
              }

        case "SET_CURR_USER":
            return{
              ...state,
              isCurrloading:false,
              user:action.payload,
             
            }  
        

    default:
        return state;
    
  }
 
};

export default ProductReducer;
