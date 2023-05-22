const app = require('./app.js')
const dbConnect = require('./utils/dbConnect.js')

const port = process.env.PORT_PRO || process.env.PORT_DEV   

dbConnect()
app.listen(port,()=>{
    console.log(`your inventory server is runnnig  port ${port}`)
})
