const mongoose = require('mongoose')
const validateContact= require('validate-phone-number-node-js');
//const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

//User schema to store the data in DB
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true,
        trim:true,
    },
    password:{
        type:String,
        required:true,
        trim:true,
        minlength: 7,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password cannot contain word "password"')
            }
        }
    },
    contact: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        validate(value)
        {
            if(!validateContact.validate(value)){
                throw new Error('Not a Valid Contact Number!!')
            }
        }

    },
    address: {
        type: Object,
        required:true,
        trim:true,
    },
    gender:{
        type:String,
        required:true,
        trim:true
    },
    country:{
        type:String,
        required:true,
        trim:true
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
})

//JWT authentication 
userSchema.methods.generateAuthToken = async function () {
    const user = this
    const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SEC)

    user.tokens = user.tokens.concat({ token })
    await user.save()

    return token
}
//Code to hide the password and tokens of a user while displaying profile
userSchema.methods.toJSON = function () {
    const user = this
    const userObject = user.toObject()

    delete userObject.password
    delete userObject.tokens

    return userObject
}


//Code to login into the application using contact number and password
userSchema.statics.findByCredentials = async (contact, password) => {
    const user = await User.findOne({ contact })

    if (!user) {
        throw new Error('Unable to login')
    }
    //Cpmpare the hashed password with the user provided passoword
    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
        throw new Error('Unable to login')
    }

    return user
}

// Hash the plain text password before saving to DB
userSchema.pre('save', async function (next) {
    const user = this

    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }

    next()
})

const User = mongoose.model('User', userSchema)

module.exports=User
