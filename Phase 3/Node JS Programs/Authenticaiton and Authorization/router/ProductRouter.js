let express = require("express");
let router = express.Router();  // router reference. 
let productController = require("../controller/ProductController");
let auth = require("../middleware/auth");


// admin IsUser
router.get("/admin/getAllProduct",auth.verifyJsonToken,auth.isAdmin,productController.retrieveProductInfo);
router.post("/admin/storeProduct",auth.verifyJsonToken,auth.isAdmin,productController.storeProductInfo);
router.put("/admin/updateProduct",auth.verifyJsonToken,auth.isAdmin,productController.updateProdut);
router.delete("/admin/deleteProdut/:pid",auth.verifyJsonToken,auth.isAdmin,productController.deleteProductById);
router.get("/admin/findProductById/:pid",auth.verifyJsonToken,auth.isAdmin,productController.findProductById);

// normal user 
router.get("/user/getAllProduct",auth.verifyJsonToken,auth.IsUser,productController.retrieveProductInfo);
router.get("/user/findProductById/:pid",auth.verifyJsonToken,auth.,productController.findProductById);
module.exports= router;
