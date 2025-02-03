const _ = require('lodash');
const Controller = require('../controller');


module.exports = new (class extends Controller{
    async profile(req, res){
        this.response({res,data:_.pick(req.user, ["username","email"])});
    };
    
})();