const { Router } = require('express')
const indexRouter = Router()
const indexController = require('../controllers/indexController')

// Index
indexRouter.get('/', indexController)

module.exports = indexRouter