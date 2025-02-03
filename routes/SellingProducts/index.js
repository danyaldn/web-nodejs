const express = require('express');
const router = express.Router();
const controller = require('./controller');
const validator = require('./validator');

router.get(
    '/addproduct',
    controller.addproduct.bind(controller)
);



module.exports = router;