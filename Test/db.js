const mongoose = require('mongoose');


const utils = require('./utils');
const connection = require('./connection.json');

const dbUrl = utils.connectionString(connection);
//const db = mongoose.createConnection(dbUrl,{  useNewUrlParser: true, useUnifiedTopology: true }

module.exports={
    dbUrl:dbUrl
};