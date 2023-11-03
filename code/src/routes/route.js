let express = require("express");
let router = express.Router();
let userController = require("../controllers/userController")
router.post("/register/user",userController.register)

module.exports = router;