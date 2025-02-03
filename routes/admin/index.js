const express = require('express');
const router = express.Router();
const controller = require('./controller');
const validator = require('./validator');

router.get(
    '/user',
    controller.user.bind(controller)
);
router.get(
    '/product',
    controller.product.bind(controller)
);
router.get(
    '/sellingProducts',
    controller.sellingProducts.bind(controller)
);



module.exports = router;