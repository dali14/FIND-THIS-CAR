const express = require('express');
const router = express.Router();
const userIdController=require('./../controllers/UserId') 
router.get('/:id_user',userIdController.get);
module.exports=router;