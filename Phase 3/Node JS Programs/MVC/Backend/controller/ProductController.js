let productModel = require("../model/ProductModel");

let retrieveProductInfo = (req,res)=> {

    productModel.find({},(err,result)=> {
        if(!err){
            res.json(result);
        }else {
            res.json({"error":err});
        }
    });

}

let storeProductInfo = (req,res)=> {
    let product = req.body;
    productModel.insertMany(product,(err,result)=> {
        if(!err){
              res.send("Record inserted successfully")  
        }else {
                res.send("Record didn't insert");
        }
    })
}

let updateProdut = (req,res)=> {
    let pid = req.body._id;
    let newPrice = req.body.price;

    productModel.updateMany({_id:pid},{$set:{price:newPrice}},(err,result)=> {
            if(!err){
                   // res.send(result);
                   if(result.matchedCount>0 || result.modifiedCount>0 ){
                        res.send("Record updated successfully")
                   }else {
                        res.send("Record didn't update");
                   }
            }else {
                    res.send(err);
            }
    })

}

let deleteProductById = (req,res)=> {
    let pid = req.params.pid;
    
    productModel.deleteOne({_id:pid},(err,result)=> {
        if(!err){
          //  res.send(result);
          if(result.deletedCount>0){
                res.send("Record deleted successfully..");
          }else {
                res.send("Record not present");
          }
        }else {
            res.send("Record didn't update");
        }
    })
}

let findProductById = (req,res)=> {
    let pid = req.params.pid;
    console.log(pid);
    productModel.findById({_id:pid},(err,result)=> {
        if(!err){
                res.send(result);
        }else {
                res.send(err);
        }
    })
}


module.exports={findProductById,retrieveProductInfo,storeProductInfo,updateProdut,deleteProductById};
