const express=require('express');

const rep_sellable_daily_inventories=require('../controllers/rep_sellable_daily_inventories_Controller');

const router=express.Router();

//router.post("/",state_templates.addRow);

//router.put("/",state_templates.updateRow);

//router.delete("/",state_templates.DeleteRow);

router.get('/GetInventory',rep_sellable_daily_inventories.GetInventory);
router.get('/GetDate',rep_sellable_daily_inventories.GetDate);

module.exports=router;