// load the modules 
let express = require("express");
let bodyParser = require("body-parser");
let fs = require("fs");

// create the reference 
let app = express();

// add the middleware 
app.use(bodyParser.urlencoded({extended:true}));        //enable post data

app.post("/SignUp",(req,res)=> {
    let login = req.body;
    let data = fs.readFileSync("login.json");
    let loginDetails = JSON.parse(data.toString());
    let result  = loginDetails.find(ll=>ll.emailId==login.emailId);
    if(result==undefined){
        loginDetails.push(login);
        fs.writeFileSync("login.json",JSON.stringify(loginDetails));
        res.send("Account Created successfully..");
    }else {
        res.send("Account didn't create, Email Id must be unique");
    }
})
app.post("/SingIn",(req,res)=> {
    let login = req.body;
    let data = fs.readFileSync("login.json");
    let loginDetails = JSON.parse(data.toString());
    let result  = loginDetails.find(ll=>ll.emailId==login.emailId && ll.pass == login.pass);
    if(result==undefined){
        res.send("Invalid emailId or password")
    }else {
        res.send("Successfully Login!");
    }
})
app.get("/SingUpPage",(req,res)=> {
    res.sendFile(__dirname+"/SingUp.html");
})

app.get("/",(req,res)=> {
    res.sendFile(__dirname+"/login.html");
})

app.listen(9090,()=>console.log("Server running on port number 9090"))