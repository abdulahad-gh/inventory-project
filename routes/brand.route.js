const express = require('express')
const routes = express.Router()
const brandControllers = require('../controllers/brand.controller')

routes.route('/')
.get(brandControllers.getAllBrandController)
.post(brandControllers.createBrandController)

module.exports = routes;