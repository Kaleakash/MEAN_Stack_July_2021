let obj = require("mongoose");
let url = "mongodb://localhost:27017/meanbatch";
obj.pluralize(null);    // to avoid to create in lower case 
                        // with post fix s character. 
obj.connect(url).
then(result=>console.log("Database connected")).
catch(err=>console.log("Error generated..."+err));

var db = obj.connection;    // get the database reference. 
db.once("open",()=> {
    // Defined the Schema
    // Schema provide the details about the collection  
    let productSchema = obj.Schema({
        _id:Number,
        name:String,
        price:Number
    });
    // using Schema we have to create the model. 
    //1st parameter connection name
    //2nd parameter schema reference name
    let productModel = obj.model("Product",productSchema);// collection name is created 
    // in lower case with plural form. 
    let p1 = new productModel({_id:1,name:"Tv",price:85000});
    productModel.insertMany(p1,(err,result)=> {
        if(!err){
            console.log("Record inserte successfully")
            console.log(result);
        }else {
            console.log(err);
        }
        obj.disconnect();
    })
})
