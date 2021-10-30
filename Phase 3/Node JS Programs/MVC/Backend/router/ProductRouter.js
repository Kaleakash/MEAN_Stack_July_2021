let express = require("express");
let router = express.Router();  // router reference. 
let productController = require("../controller/ProductController");

router.get("/getAllProduct",productController.retrieveProductInfo);
router.post("/storeProduct",productController.storeProductInfo);
router.put("/updateProduct",productController.updateProdut);
router.delete("/deleteProdut/:pid",productController.deleteProductById);
router.get("/findProductById/:pid",productController.findProductById);

module.exports= router;
