const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');

const SellingProducts = mongoose.Schema({
    userid:{type: String, required: true},
    product_name:{type: String, required: true},
    customername:{type: String, required: true},
    number:{type: Number, required: true},
});

SellingProducts.plugin(timestamp);
const SaleProduct = mongoose.model('SaleProduct',SellingProducts);

module.exports = SaleProduct
