// load the module 
let express = require("express");
let bodyParser = require("body-parser");

// create the reference of module 
let app = express();

//adding module as a middleware 
app.use(bodyParser.urlencoded({extended:true}));    // enable data from body part

app.get("/",(req,res)=> {
    res.send("Welcome to Simple Express JS Application");
})

app.get("/aboutus",(req,res)=> {
    res.send("About us Page");
})

app.get("/contactus",(req,res)=> {
    res.send("Contact Us Page");
})
app.get("/index",(req,res)=> {
    //res.sendFile("C:/Users/91990/Desktop/July 2021 MEAN Stack Batch/Phase 1 Material/Notes/MEAN Stack July 2021 Batch/Phase 3/Node JS Programs/Express Simple Application/index.html");
    //res.send(__dirname);
    res.sendFile(__dirname+"/index.html");
})

app.get("/loginGet",(req,res)=> {
    res.sendFile(__dirname+"/LoginGet.html");
});

app.get("/loginPost",(req,res)=> {
    res.sendFile(__dirname+"/LoginPost.html");
});

app.get("/checkLogin",(req,res)=> {
    //let user = req.query.user;
    //let pass = req.query.pass;
    let user = req.query["user"];
    let pass = req.query["pass"];
    if(user=="Raj" && pass =="123"){
       res.send("Successfully Login");
      // res.sendFile(__dirname+"/home.html")
    }else {
        res.send("Failure try once again");
    }
});


app.post("/checkLogin",(req,res)=> {
    let login = req.body;           // This code is use to receive the the value 
                                    // through request body part 
    let user = login.user;
    let pass = login.pass;
    if(user=="Raj" && pass=="123"){
        res.send("Successfully Login!");
    }else {
        res.send("Failure try once again!");
    }
});

app.listen(9090,()=>console.log("Server running on port number 9090"));
