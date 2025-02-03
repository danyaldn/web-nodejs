const express = require('express');
const router = express.Router();
const controller = require('./controller');
const validator = require('./validator');

router.get(
    '/getProduct',
    controller.getProduct.bind(controller),
    controller.validate
);

router.post(
    '/addProduct',
    controller.addProduct.bind(controller),
    validator.addproductValidator(),
    controller.validate
);

router.get(
    '/searchProduct',
    controller.searchProduct.bind(controller),
    controller.validate,
);
router.get(
    '/getByCategory',
    controller.getByCategory.bind(controller),
    controller.validate,
);



module.exports = router;