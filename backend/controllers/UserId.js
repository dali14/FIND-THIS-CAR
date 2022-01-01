const Car=require('../models/Car');


//recherche avec id_user
exports.get=(req,res,next)=>{
    Car.find({id_user: req.params.id_user})
  .then(cars=>res.status(200).json(cars))
  .catch(err=>res.status(400).json({error:err.message}));
     
  };