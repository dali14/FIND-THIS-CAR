const express = require('express');
const router = express.Router();
const soacialmediaController=require('./../controllers/sociallMedia')
router.get('/', soacialmediaController.all);
router.get('/:pseudo', soacialmediaController.get);

module.exports=router;