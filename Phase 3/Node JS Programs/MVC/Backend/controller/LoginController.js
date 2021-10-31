let loginModel = require("../model/LoginModel");
// async and await are replacement of then and catch 
// ES7 style 
let signUp = async (req,res)=> {
        let login = req.body;
        try{
            let result = await loginModel.insertMany(login);
            if(result){
                res.send("Account Created successfully");
            }
        }catch(Exp){
            res.send("Account didn't create...")
        }
}

let signIn = async (req,res)=> {
    let login = req.body;
    try{
        let result = await loginModel.find({$and:[{email:login.email,password:login.password}]});
        if(result.length!=0){
                res.send("Successfully Login");// this 
        }else {
                res.send("Failure try once again");
        }   
    }catch(Exp){
        console.log(Exp);
            res.send("Error Generated...");
    }
}

module.exports= {signUp,signIn}

