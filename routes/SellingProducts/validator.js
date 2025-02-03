const expressValidator = require('express-validator');
const check = expressValidator.check;

module.exports = new class {
    registervalidator(){
        return[
            check('username')
                .not()
                .isEmpty()
                .withMessage('username cant be empty'),
            check('email')  
                .isEmail()
                .withMessage('email is invalid'),
            check('password')
                .not()
                .isEmpty()  
                .withMessage('password cant be empty'),
        ]
    }
    loginvalidator(){
        return[
            check('username')
                .not()
                .isEmpty()
                .withMessage('username cant be empty'),
            check('email')  
                .isEmail()
                .withMessage('email invalid'),
            check('password')
                .not()
                .isEmpty()  
                .withMessage('password cant be empty'),
        ]
    }
}