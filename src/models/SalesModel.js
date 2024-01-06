/*
* Author: Md. Sholayman
* Description: This is the file that contains mongoose data model for sales.
* Date :  06 January 2024
* */

const mongoose = require('mongoose');

const SaleSchema = new mongoose.Schema({
    product: {type: String, required: true},
    quantity: {type: Number, required: true},
    department:{type: String, required: true},
    salary:{type: Number, required: true},
    price: {type: Number, required: true},
    date: {type: Date, required: true}
},
{timestamps:true,versionKey:false});

const SalesModel = mongoose.model('sales', SaleSchema);

module.exports = SalesModel;
