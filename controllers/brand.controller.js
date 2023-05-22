const brandService = require('../services/brand.services')

module.exports.getAllBrandController =async (req,res,next)=>{
try {
    const data = await brandService.getAllBrandService()
        res.status(200).json({
            status:'success',
            data
        })
} catch (error) {
    res.status(400).json({
        status:'fail to get all brand',
        error:error.message
    })
}
}

module.exports.createBrandController = async(req,res,next)=>{
    try {
        const data = await brandService.createBrandService(req.body)
        res.status(200).json({
            status:'success',data
        })
        
    } catch (error) {
        res.status(400).json({
            status:'fail to create brand',
            error:error.message
        })
    }
}