const jwt = require("jsonwebtoken");

const auth = async (req , res , next)=>{
   try{
    const token = req.header("x-auth-token");
    if(!token) return res.status(400).json({msg:"Token Not Found"});
    const verify =  jwt.verify(token , "secretkey");
    if(!verify) return res.status(401).json({msg:"Token Invalid , Access Denied"});
    
      console.log(verify.id);
    req.user = verify.id;
    
    req.token = token;
    next();
   }
   catch(e){
    res.status(500).json({error:e.message})
   }
}

module.exports = auth;