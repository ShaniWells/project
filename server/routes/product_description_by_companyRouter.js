const express=require('express');

const product_description_by_company=require('../controllers/product_description_by_company_Controller');

const router=express.Router();

router.post("/",product_description_by_company.addRow);

router.put("/",product_description_by_company.updateAmazon);

router.delete("/",product_description_by_company.Deletedescription);


module.exports=router;