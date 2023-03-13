const express = require('express');
const daily_sale_summaries_Controller = require('../controllers/daily_sale_summaries_Controller');
const router = express.Router();
router.route('/')
    .get(daily_sale_summaries_Controller.getSalle)
   

module.exports = router;