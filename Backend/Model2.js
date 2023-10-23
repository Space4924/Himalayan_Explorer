const mongoose=require('mongoose');
const prodcutSchema=new mongoose.Schema({
    name:String,
    email:String,
    pic:String,
    number:String,
    password:String

})
module.exports=mongoose.model('signups',prodcutSchema);