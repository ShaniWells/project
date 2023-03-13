const express = require('express');
const router = express.Router();
const Product_description_controller = require('../controllers/product_description_Controller');

router.route('/')
    .get(Product_description_controller.RetrievingProductsLinkedToAcertainTemplate)
    .put(Product_description_controller.EditingArecord)
    .post(Product_description_controller.AddingArecord)
    .delete(Product_description_controller.DeletingArecord)
module.exports = router;