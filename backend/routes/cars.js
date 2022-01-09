const express = require('express');
const router = express.Router();
const carController=require('./../controllers/carr')
router.get('/', carController.all);
router.get('/:id', carController.get);
router.post('/', carController.create);
router.put('/:id', carController.update);
router.delete('/:id', carController.delete);
module.exports=router;