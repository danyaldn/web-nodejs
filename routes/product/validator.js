const expressValidator = require('express-validator');
const check = expressValidator.check;

module.exports = new class {
    addproductValidator(){
        return[
            check('product_name')
                .isEmpty()
                .withMessage('name is not empty'),
            check('quantity')  
                .isEmpty()
                .withMessage('quantity is not empty'),
            check('description')
                .isEmpty()  
                .withMessage('description'),
            check('category')
                .isEmpty()
                .withMessage('category')
        ]
    }
}