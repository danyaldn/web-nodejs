const mongoose = require("mongoose");
const timestamp = require('mongoose-timestamp');


const Product_schema = mongoose.Schema({
    product_name:{type:String , required: true},
    quantity:{type: Number , required: true},
    description:{type: String},
    category:{type: String, required: true},
    number:{type: Number, required: true}
});

Product_schema.plugin(timestamp);

const Products = mongoose.model("Product",Product_schema);
module.exports = Products;