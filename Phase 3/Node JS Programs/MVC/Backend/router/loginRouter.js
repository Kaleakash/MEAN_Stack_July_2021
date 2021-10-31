let express = require("express");
let router = express.Router();
let loginController = require("../controller/LoginController");

router.post("/signUp",loginController.signUp);
router.post("/signIn",loginController.signIn);

module.exports= router;