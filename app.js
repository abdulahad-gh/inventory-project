const express = require('express')
const app = express()
const cors = require('cors')
const errorHandler = require('./middleware/error')
const brandRoutes = require('./routes/brand.route')
// middleware
app.use(express.json())
app.use(cors())
require('dotenv').config()

//routes
app.use('/api/v1/brand',brandRoutes)

app.get('/',(req,res,next)=>{
    res.send('your server is running')
})


module.exports=  app