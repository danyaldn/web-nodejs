const { validationResult } = require("express-validator");
const Product = require('./../models/Product');
const User = require('../models/Users');
const SellingProducts = require('../models/SellingProducts');
const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = class {

    constructor(){
        this.Product=Product;
        this.User=User;
        this.SellingProducts=SellingProducts;
        this.jwt=jwt;
        this.config=config;
    }

    validationBody(req,res){
        const result = validationResult(req, res);
        if(!result.isEmpty()){
            const errors = result.array();
            const messages = [];
            errors.forEach(err => messages.push(err.msg));
            res.status(400).json({
                message: 'validation error',
                data : messages
            })
            return false;
        };
        return true;
    };
    
    validate(req, res, next){
        if(!this.validationBody(req, res)){
            return;
        }
        next();
    }
    response({res,message,code=200,data={}}){
        res.status(code).json({
            message,
            data
        });
    }
};