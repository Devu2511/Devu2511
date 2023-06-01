const path = require('path');
// const Address=require('./models/address');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const errorController = require('./controllers/error');
const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  User.findById('6476f7830fd36c27b412b750')
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);
mongoose
  .connect(
    'mongodb+srv://Luffy:Luffy2511@cluster1.wmq6bgq.mongodb.net/?retryWrites=true&w=majority',{ useNewUrlParser: true },{ useUnifiedTopology: true }
    )
  .then(result => {
    User.findOne().then(user => {
      if (!user) {
        const user = new User({
          name: 'Devu',
          email: 'devu@test.com',
          cart: {
            items: []
          }
        });
        user.save();
      }
    });
    // Address.findOne().then(address=>{
    //   if(!address){
    //     const address =new Address({
    //       City:'Chhatarpur',
    //       State:'MP',
    //       Pincode:'471001'
    //     })
    //     address.save();
    //   }
    //   else {
    //     console.log(address);
    //   }
    // })
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });
  