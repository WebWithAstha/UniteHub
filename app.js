require('dotenv').config()
const express = require('express')
const app = express()  // Creates an instance of express


// Connecting to db
require('./models/database.js').connectDB();


// Setting up logger
const logger = require('morgan')
app.use(logger('tiny'))



// Middlewares for routes
app.use('/', require('./routes/indexRoutes.js'))


// Error handling
const ErrorHandler = require('./utils/errorHandler.js')
const { generatedErrors } = require('./middlewares/errors.js')
app.all('*',(req,res,next)=>{
    next(new ErrorHandler(`Requested URL Not Found ${req.url}`))
})
app.use(generatedErrors)



// Specifies and starts the server on the defined port 
app.listen(process.env.PORT,()=>{
    console.log("server listening on port ",process.env.PORT)
})