const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');


const userSchema = mongoose.Schema({
    username : {type:String , required:true , uniqe:true},
    email : {type:String , required:true},
    password : {type:String , required:true},
    isadmin : {type:Boolean , default:false}
});


userSchema.plugin(timestamp);

const user = mongoose.model('User', userSchema) ;
module.exports = user;