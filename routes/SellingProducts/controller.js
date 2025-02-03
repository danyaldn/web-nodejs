const _ = require('lodash');
const Controller = require('../controller');


module.exports = new (class extends Controller{
    async addproduct (req, res){
        const product = await this.Product.findOne({product_name:req.body.product_name});
        if(product){
            if(product.number>0){
                const addproduct=new this.SellingProducts({
                    userid: req.user.id,
                    product_name:product.product_name,
                    customername:req.user.username,
                    number:req.body.number,
            });
                product.number=product.number-req.body.number;
                product.save();
                addproduct.save();
                console.log(product);
                console.log(addproduct);
                this.response({res,message:"show product success" ,data:addproduct});
            }  
            else{
                this.response({res,message:"number is not ok"})
            } 
        }
        else {
            this.response({res,message:"this product not found"})
        } 
    };
})();