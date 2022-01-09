const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User=require('../models/User');


exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
    .then(hash => {
      const user = new User({
        pseudo:req.body.pseudo,
        Name: req.body.Name,
        ville: req.body.ville,
        email: req.body.email,
        password: hash,
        tel:req.body.tel
      });
              user.save()
                  .then(() => res.status(201).json({
                    message: 'User created !',
                    status: 201
                  }))
                  .catch(error => res.status(400).json({ error }));
          })
          .catch(error => res.status(500).json({ error }));
  };
  
  exports.login = (req, res, next) => {
    User.findOne({ email: req.body.email })
        .then(user => {
          if (!user) {
            return res.status(401).json({ error: 'User not found !' });
          }
          bcrypt.compare(req.body.password, user.password)
            .then(valid => {
              if (!valid) {
                return res.status(401).json({ error: 'Wrong password !' });
              }
              res.status(200).json({
                userId: user._id,
                token: jwt.sign(
                  { userId: user._id },
                  'RANDOM_TOKEN_SECRET',
                  { expiresIn: '24h' }
                )
              });
            })
            .catch(error => res.status(500).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
  };
  
  exports.profile = (req, res, next) => {
    User.findOne({ _id: req.params.id })
      .then(user => res.status(200).json(user))
      .catch(error => res.status(500).json({ error }));
  };
 
//liste des users
exports.all=('/',(req,res)=>{
    User.find()
 .then(users=>res.status(200).json(users))
 .catch(err=>res.status(400).json({error:err.message}));
     
});
//un seul user
exports.get=('/:id',(req,res,next)=>{
    User.findOne({_id: req.params.id})
 .then(users=>res.status(200).json(users))
 .catch(err=>res.status(400).json({error:err.message}));
     
});

//update user
exports.update=('/:id',(req,res,next)=>{
   
 User.updateOne({_id: req.params.id},{...req.body, _id: req.params.id})
 .then(users=>res.status(200).json({message:'User updated Seccesfuly'}))
 .catch(err=>res.status(400).json({error:err.message}));
     
});
//delete user
exports.delete=('/:id',(req,res,next)=>{
   
    User.deleteOne({_id: req.params.id})
    .then(users=>res.status(200).json({message:'User deleted Seccesfuly'}))
    .catch(err=>res.status(400).json({error:err.message}));
        
   });