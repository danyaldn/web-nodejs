const _ = require('lodash');
const Controller = require('../controller');
const { use } = require('../product');


module.exports = new (class extends Controller{
    async user(req, res){
        const user =await this.User.find()
        this.response({res,data:{user}});
    };
    async product(req, res){
        const product = await this.Product.find()
        this.response({res,data:{product}});
    };
    async sellingProducts(req, res){
        const sellingProducts = await this.SellingProducts.find()
        this.response({res,data:{sellingProducts}});
    };
})();