const mongoose = require('mongoose')
const validateContact= require('validate-phone-number-node-js');

mongoose.connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
   // useCreateIndex: true
})
