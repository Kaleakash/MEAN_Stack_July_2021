let express = require("express");
let mongoose = require("mongoose");
let userRouter = require("./router/userRouter");
let productRouter = require("./router/ProductRouter");

let url = "mongodb://localhost:27017/meanbatch";

let app  = express();

app.use(express.json());    // enable the body json data. 

mongoose.connect(url).then(res=>console.log("connected"),err=>console.log(err));

app.use("/api",userRouter);
app.use("/product",productRouter);

app.listen(9090,()=>console.log("Server running on port number 9090"));
