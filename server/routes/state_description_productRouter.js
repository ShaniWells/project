const express=require('express');

const state_description_product=require('../controllers/state_description_product_Controller');

const router=express.Router();

router.post("/",state_description_product.addRow);

router.put("/",state_description_product.updateRow);

router.delete("/",state_description_product.DeleteRow);

 router.get('/',state_description_product.getAllListProduct);

module.exports=router;