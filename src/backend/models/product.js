const mongoose = require("mongoose");


const productSchema = mongoose.Schema({
    userId:{
        type:String,
    },
    name:{
        type:String,
    },
    detail:{
        type:String,
    },
    category:{
        type:String,
    },
    price:{
        type:String,
    },
    company:{
        type:String,
    },
    image:[
        {
            type:String
        }
    ]
});

const Product = mongoose.model("Product" , productSchema);

module.exports = Product;