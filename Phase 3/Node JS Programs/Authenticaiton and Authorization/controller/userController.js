let User  = require("../model/userModel");
let bcrypt = require("bcryptjs");
let jwt = require("jsonwebtoken");

let register = async (req,res)=> {

    let salt = await bcrypt.genSalt(10);
    let hasPassword = await bcrypt.hash(req.body.password,salt);
    let user = new User({
        email:req.body.email,
        password:hasPassword,
        name:req.body.name,
        user_type:req.body.user_type
    });
     user.save((err,result)=> {
         if(err){
             console.log(err)
             res.send({err});
         }else {
             // create the payload then create the JWT token 
             let payload = {id:result._id,user_type:result.user_type};
            
             let token = jwt.sign(payload,"secretKey");
             res.send({token});
         }
     })   
}

let signIn = async (req,res)=> {
    User.findOne({email:req.body.email}, async (err,result)=> {
        if(err){
            res.send(err);
        }else {
            if(result==null){
                    res.send("Email Id is invalid");
            }else {
            let validPassword = await bcrypt.compare(req.body.password,result.password);
            if(!validPassword){
                res.send("Password is invalid")
            }else {
                let payload = {id:result._id,user_type:result.user_type};
                let token = jwt.sign(payload,"secretKey");
                res.send({token});
            }
            }
        }
    })
}

module.exports={register,signIn}