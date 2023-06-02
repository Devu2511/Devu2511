
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const addressSchema = new Schema({
    
    City:{
        type:String,
        required:true
    },
    State:{
        type:String,
        required:true
    },
    Pincode:{
        type:String,
        required:true
    }
});

module.exports=mongoose.model('address',addressSchema);