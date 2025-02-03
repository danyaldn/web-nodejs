const express = require('express');
const router = express.Router();
const controller = require('./controller');
const validator = require('./validator');



router.get(
    '/profile',
    controller.profile.bind(controller)
);


module.exports = router;