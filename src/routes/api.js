/*
* Author: Md. Sholayman
* Description: This is the file that contains all the api end-point of the app
* Date :  05 January 2024
* */

const express = require("express");
const router = express.Router();
const SalesController = require("../controllers/SalesController")

router.post("/CreateSales" , SalesController.CreateSales)




module.exports = router;