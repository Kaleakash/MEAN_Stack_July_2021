let mongoose = require("mongoose");
mongoose.pluralize(null);

let productSchema = mongoose.Schema({
    _id:Number,
    name:String,
    price:Number
});

let productModel = mongoose.model("Product",productSchema);

module.exports=productModel;