
export const useAddproduct = () => {
  const addProduct = async (name , detail , category , price , company , image)=>{
    const response = await fetch("http://localhost:4000/admin/add-product" ,{
        method:'POST',
        headers:{
            "Content-Type": "application/json",
            "x-auth-token":localStorage.getItem("x-auth-token")
        },
        body:JSON.stringify({
            userId:localStorage.getItem("x-auth-token"),
            name:name,
            detail:detail,
            category:category,
            price:price,
            company:company,
            image:image
        })
    });
    

    if(response.status===200){
        alert("Product Added to Database");
        console.log(response.body);
    }
    if(response.status!==200){
        alert("there is some error occured");
        console.log(response.body);
    }
  }


  return {addProduct};
}
