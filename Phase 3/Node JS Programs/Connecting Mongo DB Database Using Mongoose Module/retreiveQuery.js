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
        //ref:""
    });
    // using Schema we have to create the model. 
    //1st parameter connection name
    //2nd parameter schema reference name
    let productModel = obj.model("Product",productSchema);// collection name is created 
   
    productModel.find({},(err,doc)=> {
                    if(!err){
                        doc.forEach(p=> {
                            console.log(p);
                        })
                    }
                    obj.disconnect();
    });
   
})
