const express=require('express');

const state_templates=require('../controllers/state_templates_Controller');

const router=express.Router();

router.post("/",state_templates.addRow);

router.put("/",state_templates.updateRow);

router.delete("/",state_templates.DeleteRow);

router.get('/status',state_templates.GetPopList);

router.get('/List',state_templates.getAllList);

module.exports=router;