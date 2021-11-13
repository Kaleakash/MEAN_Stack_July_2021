let jwt = require("jsonwebtoken");

let verifyJsonToken =  async (req,res,next)=> {
    try{
        // try to receive value of authorization property 
        let token = req.headers.authorization;      // receive the token from header part 
        if(!token){
            return res.send("Access denied / Unauthorized request send")
        }else {
            let verifyToken = jwt.verify(token,"secretKey");
            if(!verifyToken){
                return res.send("InValid Token")
            }
            req.user = verifyToken;     // payload data ie _id and user_type 
            next();     // move to next   
             
        }

    }catch(Exp){
        res.send("Invalid Token in Exception");
    }
}

let IsUser = async (req,res,next)=> {
    if(req.user.user_type=="user"){
        next();
    }else {
        return res.send("You are not a type of user");
    }
}
let isAdmin = async (req,res,next)=> {
    if(req.user.user_type=="admin"){
        next();
    }else {
        return res.send("You are not a type of user");
    }
}

module.exports={verifyJsonToken,IsUser,isAdmin}