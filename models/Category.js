const mongoose = require('mongoose')

const cateGorySchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true
    },
    discripiton:String,
    picture:{
        type:String,
        required:true
    }
})

const Category = mongoose.model('Category',cateGorySchema)
module.exports= Category;