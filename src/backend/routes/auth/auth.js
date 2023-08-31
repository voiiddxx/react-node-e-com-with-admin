const express = require("express");
const User = require("../../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const auth = require("../../middlewares/authverify");
const authRouter = express.Router();



// CREATING API FOR REGISTERING THE USER

authRouter.post("/register" , async (req,res)=>{
   try{
    const {username , email ,password , category} = req.body;
    const Exist = await User.findOne({email});

    if(Exist){
        res.status(400).json({msg:"User is Already present with this email address"});
    } else{
        const hashPass = await bcrypt.hash(password , 10);

        let user = new User({
            username,
            email,
            password:hashPass,
            category
        });

        user = await user.save();
        console.log(user);
        res.json(user);
    }
   } catch(e){
    console.log(e);
   }
})


// CREATING RPUTE FOR LOGIN USER


authRouter.post("/login" , async (req,res)=>{
   try{
    const {email , password} = req.body;
    console.log(email);
    const ExistUser = await User.findOne({email});
    if(!ExistUser){
        console.log("no user found");
        res.status(404).json({msg:"There is no any user registerd with this email address"});
    }
    else{
        const isMatch = await bcrypt.compare(password , ExistUser.password);
        if(!isMatch){
            res.status(500).json({msg:"Invalid Password try With another password"});
        }
        else{
            const token =  jwt.sign({id:ExistUser._id} , "secretkey");
            console.log(token);
            res.json({...ExistUser._doc, token})
        }
    }
   } catch(e){
    console.log(e);
    res.status(500).json({msg:e.message});
   }
});


// API FOR GETTING THE CURRENT USER DATA

authRouter.get("/get-curr-user" , auth , async (req , res)=>{
    try{
        console.log(req.user);
        const user = await User.findById(req.user);
        if(user){
            console.log({...user._doc});
            return res.json({...user._doc , token:req.token});
        }
        else{
            console.log("user not found");
            res.json({msg:"User not found"})
        }
      
    } catch(e){
        console.log(e);
        res.status(500).json({error:e.message});
    }
})




module.exports = authRouter;