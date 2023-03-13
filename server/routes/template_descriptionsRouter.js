const express = require('express');
const template_descriptions_Controller = require('../controllers/template_descriptions_Controller');
const router = express.Router();
router.route('/')
    .put(template_descriptions_Controller.EditingArecord)
    .post(template_descriptions_Controller.AddingArecord)
    .delete(template_descriptions_Controller.DeletingArecord)


module.exports = router;