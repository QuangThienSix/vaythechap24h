const express = require("express");
const router = express.Router();
var cors = require('cors')

const ApiCustomerController = require("../controller/apiCustomer.controller");

router.get("/customer", ApiCustomerController.getcustomer);
router.post("/customer", cors(), ApiCustomerController.postcustomer);


// 


module.exports = router;