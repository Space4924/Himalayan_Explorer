const mongoose=require('mongoose');
const ProductSchema=new mongoose.Schema({
    title:String,
    des:String,
    newsArea:String,
    image:String,
    userEmail:String
})
module.exports=mongoose.model('News',ProductSchema);