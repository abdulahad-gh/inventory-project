const Brand = require('../models/Brand')

module.exports.createBrandService = async(data)=>{
    const result = await Brand.create(data)
    return result
}
module.exports.getAllBrandService = async () =>{
    const data = await Brand.find({})
    return data
}