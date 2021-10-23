// load the module and create the reference of module 
let mongoDb = require("mongodb").MongoClient;

// database connection details 

let url = "mongodb://localhost:27017";

mongoDb.connect(url,(err,client)=> {
    if(err){
        console.log("Error generated "+err);
    }else {
        console.log("Connected to database")
    }
   client.close();
})


