/*
* Author: Md. Sholayman
* Description: This is the file that contains all the controllers for sales.
* Date :  06 January 2024
* */
//import mongoose model for sales
const SalesModel = require("../models/SalesModel")

exports.CreateSales = async(req,res)=>{
    let reqBody = req.body ;
    let data = await SalesModel.create(reqBody);
    res.status(201).json({status:"success",data:data})
}