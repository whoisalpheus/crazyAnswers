const { Router } = require('express')
const answerRouter = Router()
const answerController = require('../controllers/answerController')

// Answer display
answerRouter.get('/answer', answerController)

module.exports = answerRouter