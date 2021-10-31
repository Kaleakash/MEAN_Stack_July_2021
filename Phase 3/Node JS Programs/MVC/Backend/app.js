let express = require("express");
let mongoose = require("mongoose");
let cors = require("cors");
let productRouter = require("./router/ProductRouter");
let loginRouter = require("./router/loginRouter");

let url = "mongodb://localhost:27017/meanbatch";

mongoose.connect(url).
then(result=>console.log("Connected")).
catch(err=>console.log("Error "+err))

let app = express();

app.use(express.json());
app.use(cors());
// http://localhost:9090/api/product/getAllProduct 
// http://localhost:9090/api/product/storeProduct
// http://localhost:9090/api/user/signUp
app.use("/api/product",productRouter);
app.use("/api/user",loginRouter);

app.listen(9090,()=>console.log("Application runing on port number 9090"));