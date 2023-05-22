const mongoose = require('mongoose')

module.exports = function dbConnect () {
     mongoose.connect(process.env.MONGOOSE_URI)
     if(mongoose){
        console.log('connected with mongoose',process.env.MONGOOSE_URI)
     }
}
