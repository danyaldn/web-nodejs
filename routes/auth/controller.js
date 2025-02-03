const _ = require('lodash');
const Controller = require('../controller');
const bcrypt = require('bcrypt');
const config = require('config');
const jwt = require('jsonwebtoken');

module.exports = new (class extends Controller{
    async login(req, res){
        const user = await this.User.findOne({username:req.body.username});
        if(!user) {
            return this.response({res,code:400,message:"username or password invalid"})
        }
        const isvalid = await bcrypt.compare(req.body.password, user.password)
        if(!isvalid) {
            return this.response({res,code:400,message:"invalid email or password"})
        }
        const token = jwt.sign({_id:user.id},config.get('jwt_key'));
        this.response({res,message:"show product seccsuss",data:{token}});
    };
    async register(req, res){
        let user = await this.User.findOne({username:req.body.username});  
        if(user){
            return this.response({res,code:404,message:"this user is already registered"})
        }

        user = new this.User(_.pick(req.body,["username","email","password"]));
        let salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password,salt);
        await user.save();
        this.response({res , message:"add user seccsuss",data:_.pick(req.body,["username","email"])});
    };
    
})();