require('dotenv').config()
const express = require('express')
const app = express()  // Creates an instance of express



// Setting up logger
const logger = require('morgan')
app.use(logger('tiny'))



// Middlewares for routes
app.use('/', require('./routes/indexRoutes.js'))



// Specifies and starts the server on the defined port 
app.listen(process.env.PORT,()=>{
    console.log("server listening on port ",process.env.PORT)
})