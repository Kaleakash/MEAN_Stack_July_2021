let mongoDb = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017";
mongoDb.connect(url,(err,client)=> {
    if(!err){
        let db = client.db("meanbatch");
        db.collection("StudentInfo").deleteOne({_id:101},(err,result)=> {
            if(!err){
                    console.log(result);
            }else {
                    console.log("Error generated "+err);
            }
            client.close();
        })
    }else {
        console.log("Error "+err);
    }
})