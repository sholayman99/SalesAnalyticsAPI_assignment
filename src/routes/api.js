/*
* Author: Md. Sholayman
* Description: This is the file that contains all the api end-point of the app
* Date :  05 January 2024
* */

const express = require("express");
const router = express.Router();
const SalesController = require("../controllers/SalesController")

router.post("/CreateSales" , SalesController.CreateSales)
router.get("/total-revenue", SalesController.TotalRevenue);
router.get("/quantity-by-product", SalesController.QuantityByProduct);
router.get("/top-products",SalesController.TopProducts);
router.get("/average-price",SalesController.AveragePrice);
router.get("/revenue-by-month",SalesController.RevenueByMonth);
router.get("/highest-quantity-sold",SalesController.HighestQuantitySold);
router.get("/department-salary-expense",SalesController.DepartmentSalaryExpense);




module.exports = router;