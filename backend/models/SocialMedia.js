const mongoose=require('mongoose');
const socialMediasSchema = mongoose.Schema({
   pseudo: {type:String, required:true},
    facebook: {type:String, required:true},
    instagram:{type:String, required:true},
    linkedIn : {type:String, required:true},
   
    
});
module.exports =mongoose.model('SocialMedia',socialMediasSchema);