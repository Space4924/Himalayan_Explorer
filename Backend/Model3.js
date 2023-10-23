const mongoose=require('mongoose');
const prodcutSchema = new mongoose.Schema({
    email:{
        type:String,
    },
    otp:{
        type:String,
        required:true
    }
});
module.exports= mongoose.model('otpverification',prodcutSchema);