const mongoose = require('mongoose')
const validator = require('validator')
const {ObjectId} =  mongoose.Schema.Types

const brandSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,'please, provide a brand name'],
        unique:true,
        maxLength : 100,
        trim:true,
        lowercase:true
    },
    description: String,
    email:{
        type:String,
        require:[true,'please, provide a email'],
        validate:[validator.isEmail,'please provide a valid email']
    },
    website:{
        type:String,
        validate:[validator.isURL,'please provide a valid url']
    },
    location:String,
    // products:[{
    //     type:ObjectId,
    //     ref:'Product'
    // }],
    suppliers:[{
        name:String,
        contactNumber:String,
        id:{
            type:ObjectId,
            ref:'Suppliers'
        }
    }],
    status:{
        type:String,
        enum:['active','in-active'],
        default:'active'
    },
   
},{
    timestamps:true
})

const Brand = mongoose.model('Brand',brandSchema)

module.exports = Brand