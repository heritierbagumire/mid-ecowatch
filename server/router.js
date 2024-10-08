const express = require('express')
const router = express.Router()
const controllers = require('./controllers/client.controller')

router.get('/all', controllers.retrieveAllClients)
router.post('/add', controllers.saveData)
router.post('/login', controllers.login)
router.get('/:id', controllers.findOne)

module.exports = router