require('dotenv').config()
const express = require('express')
const app = express()  // Creates an instance of express



// Setting up logger
const logger = require('morgan')
app.use(logger('tiny'))



// Test route
app.get('/', (req, res) => {
    res.json({message:'/ route'})
})



// Specifies and starts the server on the defined port 
app.listen(process.env.PORT,()=>{
    console.log("server listening on port ",process.env.PORT)
})