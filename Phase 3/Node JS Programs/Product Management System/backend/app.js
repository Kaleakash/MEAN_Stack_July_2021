let express = require("express");
let cors = require("cors");

let app = express();
app.use(express.json());    // to enable body part json data. 
app.use(cors());        // to enable all frontend technologies (any port number)
                        // for all methods. 
let products =[
    {pid:100,pname:"TV",price:85000},
    {pid:101,pname:"Computer",price:42000}
];

// display all produt details
// http://localhost:9090/allProducts
 app.get("/allProducts",(req,res)=> {
    res.json(products);
});

// retrieve the product bases upon product id
// http://localhost:9090/findProductById/100
// http://localhost:9090/findProductById/1
app.get("/findProductById/:pid",(req,res)=> {
        let pid = req.params.pid;
        let result = products.find(p=>p.pid==pid);
        if(result==undefined){
                res.json({"msg":"Product not present with id "+pid})
                //res.send("Product Not found");
        }else {
                res.json(result);
        }
})

// store product details with product id must unique. 
// http://localhost:9090/storeProduct 
// {"pid":100,"pname":"Phone","price":28000}
// {"pid":102,"pname":"Phone","price":28000}
app.post("/storeProduct",(req,res)=> {
    let product = req.body;
    let result = products.find(p=>p.pid == product.pid);
    if(result==undefined){
            products.push(product);
            res.send("Product record stored successfully..")
    }else {
            res.send("Product Id must be unique");
    }
})

// update product price using product id 
// http://localhost:9090/updateProductPrice 
app.put("/updateProductPrice",(req,res)=> {
    let product = req.body;
    let index = products.findIndex(p=>p.pid == product.pid);
    if(index<0){
             res.send("Product is not available with id "+product.pid);   
    }else {
        products[index].price = products[index].price + product.price;
            res.send("Product price updated successfully");
    }
})

// delete product information using product id 
// http://localhost:9090/deleteProductById/100
// http://localhost:9090/deleteProductById/1
app.delete("/deleteProductById/:pid",(req,res)=> {
    let pid = req.params.pid;
    let index = products.findIndex(p=>p.pid==pid);
    if(index<0){
        res.send("Product is not available with id "+pid);
    }else {
        products.splice(index,1);       // 1st parameter index and 2nd number of records
        res.send("Product information deleted successfully..");
    }
})


app.listen(9090,()=>console.log("Server running on port number 9090"));