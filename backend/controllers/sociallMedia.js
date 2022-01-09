
const SocialMedia=require('../models/SocialMedia');

exports.all=('/',(req,res)=>{
    SocialMedia.find()
 .then(socialmedias=>res.status(200).json(socialmedias))
 .catch(err=>res.status(400).json({error:err.message}));
     
});

//recherche par id
exports.get=('/:pseudo',(req,res,next)=>{
    SocialMedia.findOne({pseudo: req.params.pseudo})
 .then(socialmedias=>res.status(200).json(socialmedias))
 .catch(err=>res.status(400).json({error:err.message}));
     
});
