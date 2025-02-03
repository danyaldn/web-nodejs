const _ = require('lodash');
const Controller = require('./../controller');

module.exports = new (class extends Controller{
    async getProduct(req, res){
        const product = await this.Product.find();
        return this.response({res,code:400,message:"show product seccsuss",data:product})
    };
    async addProduct(req, res){
        const product = new this.Product(_.pick(req.body,["product_name","quantity","description","category","number"]));
        await product.save();
        this.response({res , message:"add product seccsuss",data:_.pick(req.body,["product_name","quantity","description","category","number"])});
    };
    async searchProduct(req, res){
        const products = await this.Product.find({product_name:req.body.product_name})
        this.response({res,message:"show product success" ,data:products});
    };
    async getByCategory(req, res){
        const products = await Product.find({category:req.body.category})
        this.response({res,message:"show product success" , data:products}); 
    }
})();