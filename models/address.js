
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

// const divyansh=new addressSchema({
//     City: 'Chhatarpur',
//     State: 'MP',
//     Pincode: '471001'
// });
// divyansh.save();
module.exports=mongoose.model('address',addressSchema);