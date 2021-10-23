let mongoDb = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017";
mongoDb.connect(url,(err,client)=> {
    if(!err){
        let db = client.db("meanbatch");
        db.collection("StudentInfo").updateOne({_id:101},{$set:{salary:33000}},
            (err,result)=> {
                if(!err){
                console.log(result);
                if(result.modifiedCount>0 ){
                    console.log("Old record is present")   
                }else if(result.matchedCount >0){
                    console.log("Record updated")
                }
                else {
                        console.log("REcord didn't update")
                }
                }else {
                  console.log("Error "+err);  
                }
                client.close();
        })
    }else {
        console.log("Error "+err);
    }
})