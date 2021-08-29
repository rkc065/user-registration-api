const jwt = require('jsonwebtoken')
const User = require('../models/users')

//Code to verify auth tokens based on the id of a user
const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        const decoded = jwt.verify(token, process.env.JWT_SEC)
        const user = await User.findOne({ _id: decoded._id, 'tokens.token': token })
        //if user is not present in the System
        if (!user) {
            throw new Error()
        }

        req.token = token
        req.user = user
        next()
    } catch (e) {
        res.status(401).send({ error: 'Please authenticate into the system.' })
    }
}

module.exports = auth