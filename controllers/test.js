const Product = require('../models/product');
const Order = require('../models/order');
const Address=require('../models/address');

exports.postTest=(req)=>{
    const testProduct=new Product({
        title: 'Iphone',
        price: '79.99',
        description : 'Iphone 8',
        imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.indiamart.com%2Fproddetail%2Fhp-laptop-4892971048.html&psig=AOvVaw3T3KUSc55ng4iB4vvoEc2d&ust=1685775767492000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNiYl6GCpP8CFQAAAAAdAAAAABAN',
        userId: req.user
        
    });
    testProduct.save();
    
    const testAddress= new Address({
        City: 'Chhatarpur',
        State: 'MP',
        Pincode: '471001'
    });
    testAddress.save();
    const testOrder= new Order({
        user:{
            name: req.user.name,
            userId:req.user
        },
        products:{
            product:testProduct,
            quantity:'1'
        },
        address: testAddress
    });
    testOrder.save();
};