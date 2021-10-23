let mongoDb = require("mongodb").MongoClient;

let url = "mongodb://localhost:27017";
mongoDb.connect(url,(err,client)=> {
    if(!err){
        // to connect the db 
        let db = client.db("meanbatch");
        let student = {_id:115,name:"Anand",salary:42000,deptId:100,city:"Mumbai"};
        db.collection("StudentInfo").insertOne(student,(err,result)=> {
            if(!err){
                console.log("REcord inserted...")
            //    console.log(result);
            //    if(result.acknowledged){
            //        console.log("Record inserted successfully")
            //    }
            }else {
                console.log("Insert Error "+err);
            }
            client.close();
        })

    }else {
        console.log("Error "+err);
    }
    
})