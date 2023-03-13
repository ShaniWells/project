const express = require('express');
const otm_product_Controller = require('../controllers/otm_product_Controller');
const router = express.Router();
router.route('/')
    .get(otm_product_Controller.getProductsWithStyleInfo)
    router.route('/products')
    .get(otm_product_Controller.getAllproduct)

module.exports = router;