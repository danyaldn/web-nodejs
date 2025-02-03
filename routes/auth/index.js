const express = require('express');
const router = express.Router();
const controller = require('./controller');
const validator = require('./validator');

router.get(
    '/login',
    controller.login.bind(controller),
    validator.loginvalidator(),
    controller.validate
);

router.post(
    '/register',
    controller.register.bind(controller),
    validator.registervalidator(),
    controller.validate
);


module.exports = router;