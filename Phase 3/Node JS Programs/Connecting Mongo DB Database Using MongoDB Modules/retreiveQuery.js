let mongoDb = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017";
mongoDb.connect(url,(err,client)=> {
    if(!err){
        let db = client.db("meanbatch");
        //let cursor = db.collection("StudentInfo").find();
        let cursor = db.collection("StudentInfo").find({salary:{$gt:30000}});
        cursor.forEach(rec=> {
            //console.log(rec);
            console.log("id is "+rec._id+" Name is "+rec.name,"Salary "+rec.salary);
            client.close();
        })
       // 
    }else {
        console.log("Error "+err);
    }
})