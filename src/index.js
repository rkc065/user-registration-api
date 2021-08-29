const express = require('express')
require('./db/mongoose')
const User=require('./models/users')
const userRouter=require('./routers/user')

const app=express()
//Defining port number 
const port=process.env.PORT
//Configuring the express to parse the JSON data
app.use(express.json())
app.use(userRouter)





app.listen(port,()=>{
    console.log('Server is up in the port '+port)
})