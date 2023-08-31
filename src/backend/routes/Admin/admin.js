const express = require("express");
const Product = require("../../models/product");
const auth = require("../../middlewares/authverify");
const adminRouter = express.Router();


// CUSTOM  API FOR ADDING THE PRODUCT



adminRouter.post("/admin/add-product" , auth ,   async (req , res)=>{
    const {name , detail , category , price , company , image} = req.body;
    try{
     let product = Product({
         name,
         detail,
         category,
         price,
         company,
         image,
         userId:req.user,
     });
 
     product = await product.save();
     console.log(product);
     res.json(product);
    } catch(e){
     console.log(e);
     res.status(500).json({error:"Some Error Occured"});
    } 
});



//GETTING ALL DATA OF ADMIN RESPECTIVELY


adminRouter.get("/admin-all-data", auth , async (req , res) =>{
   try{
    const productId = req.user;
    let product = await Product.find({userId:productId});
   res.json(product);
   } catch(e){
    console.log(e);
    res.status(500).json({msg:e.message});
   }

});


//GETTING ALL THE PRODUCT FOR USER RESPECTIVELY


adminRouter.get("/get-user-all-product" , auth , async (req , res)=>{
    try{
        let product = await Product.find({});
        res.json(product);
    } catch(e){
        console.log(e);
        res.status(500).json({msg:e.message});
    }
})

module.exports = adminRouter;