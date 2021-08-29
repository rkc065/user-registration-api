//Importing the required modules and files

const express = require('express')
const User = require('../models/users')
const auth=require('../middleware/auth')
const router = new express.Router()


//Router to register a user
router.post('/users', async (req, res) => {
    const user = new User(req.body)
    try {
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({ user, token })
    } catch (e) {
        res.status(400).send(e)
    }
})
//Router to login a User

router.post('/users/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.contact, req.body.password)
        const token = await user.generateAuthToken()
        res.send({ user, token })
    } catch (e) {
        res.status(400).send()
    }
})

//router to logout from current session

router.post('/users/logout', auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token
        })
        await req.user.save()

        res.send()
    } catch (e) {
        res.status(500).send()
    }
})

//Router to logout from all the sessions

router.post('/users/logoutAll', auth, async (req, res) => {
    try {
        req.user.tokens = []
        await req.user.save()
        res.send()
    } catch (e) {
        res.status(500).send()
    }
})


//Router to get all the users

router.get('/users', async (req, res) => {
    try {
        const users = await User.find({})
        res.send(users)
    } catch (e) {
        res.status(500).send()
    }
})

//Router to check user own profile
router.get('/get/me', auth, async (req, res) => {
    res.send(req.user)
})


//Router to get search the user based on Name
router.get('/users/:name', async (req, res) => {
    const _name=req.params.name
    try {
        const users = await User.find({name:_name})
        res.send(users)
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/user/:contact', async (req, res) => {
    const _contact=req.params.contact
    try {
        const users = await User.findOne({contact:_contact})
        res.send(users)
    } catch (e) {
        res.status(500).send()
    }
})

//Router to get the user based on the Id
router.get('/user_by_id/:id', async (req, res) => {
    const _id = req.params.id
    try {
        const user = await User.findById(_id)

        if (!user) {
            return res.status(404).send()
        }

        res.send(user)
    } catch (e) {
        res.status(500).send()
    }
})





module.exports = router