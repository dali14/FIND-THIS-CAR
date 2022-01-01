const express = require('express');
const mongoose=require('mongoose');
const userRouter= require('./routes/users');
const carRouter=require('./routes/cars');
const  adminRouter=require('./routes/admins');
const  UserIdRouter=require('./routes/UserId');
const  socialmediaRouter=require('./routes/socialMedia');
const app = express();
//torbett ell app mteek bell mongo db
mongoose.connect('mongodb://localhost:27017/Crash_Car',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connected successfully to MongoDB !'))
  .catch(() => console.log('Connection failed to MongoDB !'));
  //bech ki tjy tasty fil postman yaadiha format json w yaqra les types
app.use(express.json());
//pour que le port ne sera pas blocker
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

//tasna3 awellll API
app.use('/api/users', userRouter);
app.use('/api/cars',carRouter);
app.use('/api/admins',adminRouter);
app.use('/api/Car',UserIdRouter);
app.use('/api/socialMedias',socialmediaRouter);
module.exports=app;
