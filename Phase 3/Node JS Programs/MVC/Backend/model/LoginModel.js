let mongoose = require("mongoose");
mongoose.pluralize(null);

let loginSchema = mongoose.Schema({
    email:{
        type:String,
        unique:true
    },
    password:String
});

let loginModel = mongoose.model("Login",loginSchema);

module.exports=loginModel;